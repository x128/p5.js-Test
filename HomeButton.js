class HomeButton {
    constructor(page, homePageId, functionsId) {
        var homeButton = $('<div class="homebutton"></div>');
        var self = this;

        homeButton.click(function () {
            setTimeout(function() {
                switchPage(homePageId, { transition: 'flow', reverse: true});
            }, 100);
        });

        homeButton.dblclick(function () {
            setTimeout(function() {
                switchPage(functionsId, { transition: 'flow'});
            }, 100);
        });




        addImage(homeButton, 'img/home-button.png');
        page.append(homeButton);

    }




}
