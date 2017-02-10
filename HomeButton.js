class HomeButton {
    constructor(page, homePageId, functionsId, menu) {
        var homeButton = $('<div class="homebutton"></div>');
        var self = this;
        var dblClick = false;

        homeButton.dblclick(function () {
            dblClick = true;

            if (page == menu.page1 || page == menu.password.page || page == menu.autoLock.page || page == menu.time.page || page == menu.date.page || page == menu.pattern.page) {
                switchPage(functionsId, { transition: 'slideup'});
            } else {
                switchPage(functionsId, { transition: 'flow', reverse: true});
            }
        });

        homeButton.click(function () {
            dblClick = false;

            setTimeout(function () {
                if (dblClick == false) {
                    if (page == menu.page2 || page == menu.calculator.page || page == menu.stopwatch.page) {
                        switchPage(homePageId, {transition: 'slideup', reverse: true});
                    } else {
                        switchPage(homePageId, {transition: 'flip', reverse: true});
                    }
                }
            }, 200);
        });

        addImage(homeButton, 'img/home-button.png');
        page.append(homeButton);

    }




}
