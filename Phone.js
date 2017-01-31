/**
 * Created by new on 03/01/2017.
 */
class Phone {

    constructor() {
        initBody();
        this.menu = new Menu();
        switchPage(this.menu.offPage.id, {transition: 'none'});
    }


}




