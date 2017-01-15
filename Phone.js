/**
 * Created by new on 03/01/2017.
 */
class Phone {

    constructor(page) {
        this.menu = new Menu(page);
        this.homeButton = new HomeButton(page);
        this.menuBar = new Menubar(page);
    }


}

