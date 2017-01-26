class HomeButton {
    constructor(page, menu) {
        var homeButton = $('<div class="homebutton"></div>');
        var self = this;
        var dblClick = false;
        var homePageId, functionsId;

        homePageId = menu.getMainMenuId();
        functionsId = menu.getSecondMenuId();

        homeButton.dblclick(function () {
            dblClick = true;

            if (page == menu.page1) {
                switchPage(functionsId, { transition: 'slideup'});
            } else {
                switchPage(functionsId, { transition: 'flow', reverse: true});
            }
        });

        homeButton.click(function () {
            dblClick = false;

            setTimeout(function () {
                if (dblClick == false) {
                    switchPage(homePageId, {transition: 'slideup', reverse: true});
                }
            }, 200);
        });

        addImage(homeButton, 'img/home-button.png');
        page.append(homeButton);

    }




}
