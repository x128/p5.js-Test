/**
 * Created by new on 03/01/2017.
 */
class Menubar {

    constructor(page) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;

        this.txtTime = addText(page, this.hours + " : " + this.minutes + " : " + this.seconds)
        this.txtTime.css({
            height: '40px'
        });


    }

}
