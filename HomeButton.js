class HomeButton {
    constructor(page) {
        var home = $('<div class="homebutton"></div>');
        addImage(home, 'img/home-button.png');
        page.append(home);
    }
}
