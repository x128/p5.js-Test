/**
 * Created by new on 03/01/2017.
 */
class Phone {

    constructor(page) {
        this.page = page;
        this.homeButton = new HomeButton(page);
        this.menu = new Menu(page);
    }


}

class HomeButton {
  constructor(page) {
    var home = $('<div class="homebutton"></div>');
    addImage(home, 'img/home-button.png');
    page.append(home);
  }
}