/**
 * Created by new on 26/01/2017.
 */
class Stopwatch {

    constructor(ID, menu) {
        this.page = addPage(ID);
        this.id = ID;

        this.isRunning = false;
        this.minutes = 0;
        this.seconds = 0;
        this.hours = 0;
        this.milliseconds = 0;

        var homePageId = menu.getMainMenuId();
        var functionsId = menu.getSecondMenuId();

        new HomeButton(this.page, homePageId, functionsId, menu);
        new Menubar(this.page);

        this.txt_stopwatch_time = addText(this.page, this.hours + "   :   " + this.minutes + "   :   " + this.seconds + " : " + this.milliseconds);
        this.txt_stopwatch_time.css({
            fontSize: '35px'
        });

        var self = this;
        this.btn_run = addButton(this.page, 'Start');
        this.btn_reset = addButton(this.page, 'Reset');
        this.btn_run.parent().click(function() {
                if (self.btn_run.text() == "Start") {
                    self.isRunning = true;
                    self.btn_run.text("Stop");
                } else if (self.btn_run.text() == "Stop") {
                    self.isRunning = false;
                    self.btn_run.text("Resume");
                } else if (self.btn_run.text() == "Resume") {
                    self.isRunning = true;
                    self.btn_run.text("Stop");
                }
            self.checkForRunning(self);
        });

        this.btn_reset.parent().click(function() {
            self.isRunning = false;
            self.btn_run.text("Start");
            self.minutes = 0;
            self.seconds = 0;
            self.hours = 0;
            self.milliseconds = 0;
            self.checkForRunning(self);
            self.txt_stopwatch_time.text(self.hours + "   :   " + self.minutes + "   :   " + self.seconds + " : " + self.milliseconds);
        });


    };


    checkForRunning(self) {
        var updateTick = function() {

            if (self.isRunning) {

                self.milliseconds ++;

                if (self.milliseconds >= 1000) {
                    self.milliseconds = 0;
                    self.seconds++;
                }

                if (self.seconds >= 60) {
                    self.minutes++;
                    self.seconds = 0;
                }

                if (self.minutes >= 60) {
                    self.hours++;
                    self.minutes = 0;
                }

                self.txt_stopwatch_time.text(self.hours + "   :   " + self.minutes + "   :   " + self.seconds + " : " + self.milliseconds);

                setTimeout(updateTick, 1)
            }
        };


        updateTick();



    }

}

