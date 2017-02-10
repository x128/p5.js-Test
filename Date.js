/**
 * Created by new on 04/02/2017.
 */
class DateView {
    constructor(id, menu) {
        this.id = id;
        this.page = addPage(id);

        new HomeButton(this.page, menu.getMainMenuId(), menu.getSecondMenuId(), menu);
        new Menubar(this.page);

    }









}