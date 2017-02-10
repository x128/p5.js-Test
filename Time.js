/**
 * Created by new on 04/02/2017.
 */
class TimeView {
    constructor(id, menu) {
        this.id = id;
        this.page = addPage(id);

        new HomeButton(this.page, menu.getMainMenuId(), menu.getSecondMenuId(), menu);
        new Menubar(this.page);

        this.time = new Time();

        this.txt = addText(this.page, "");

        this.initUi();
        this.updateView();
    }

    initUi() {
        this.txt.css({
            fontSize: '40px',
            color: 'blue'
        });
    }

    updateView() {

        this.txt.text(p5.prototype.hour() + ' : ' + p5.prototype.minute() + ' : ' + p5.prototype.second());

        setTimeout(function(self) {
            self.updateView();
        }, 500, this);
    }



}

class Time {
    constructor() {

    }


}