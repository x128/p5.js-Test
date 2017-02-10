/**
 * Created by new on 29/01/2017.
 */
class AutoLockView {

    constructor(id, menu) {
        this.id = id;
        this.page = addPage(id);
        this.minBeforeLock = 60;

        this.autolock = new AutoLock();

        var mainMenuId = menu.getMainMenuId();
        var secondMenuId = menu.getSecondMenuId();

        new HomeButton(this.page, mainMenuId, secondMenuId, menu);
        new Menubar(this.page);

        this.pageTitle = addText(this.page, 'AutoLock');
        this.chklockActive = addCheckbox(this.page, 'autolock', 'Autolock active');
        this.txtToSlider = addText(this.page, 'Minutes before lock');
        this.timeBeforeLock = addSlider(this.page, 'TimeBeforeLockSlider', 1, 10, 1, this, this.onTimeBeforeLockChange);

        this.initUi();
        this.updateView();
    }

    onTimeBeforeLockChange(self, event) {
        var value = sliderValue(event.target.id) * 60;
        self.autolock.changeTimeBeforeLock(value);
    }


    initUi() {
        this.pageTitle.css({
            textAlign: 'CENTER',
            fontSize: '20px',
            textDecoration: 'underline'
        });

        setCheckboxValue('autolock', true);

        this.txtToSlider.css({
            color: 'blue'
        });

    }

    updateView() {
        var self = this;

        this.chklockActive.click(function(event) {
            var checked = self.chklockActive.prop('checked');
            if (checked) {
                self.txtToSlider.show();
                $('#' + self.timeBeforeLock.id).parent().show();
                self.autolock.autolockIsActive();
            } else {
                self.txtToSlider.hide();
                $('#' + self.timeBeforeLock.id).parent().hide();
                self.autolock.autolockIsNotActive();
            }
        });


    }

}

let autoLockInstance = null;

class AutoLock {
    constructor() {
        if (!autoLockInstance)
            autoLockInstance = this; // singleton

        this.active = true;
        this.minutes = 0;


        return autoLockInstance; // singleton
    }

    changeTimeBeforeLock(value) {
        this.minutes = value;
    }


    autolockIsActive() {
        this.active = true;
    }

    autolockIsNotActive() {
        this.active = false;
    }

}






