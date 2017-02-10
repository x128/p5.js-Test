/**
 * Created by new on 28/01/2017.
 */
class OffPageView {

    constructor(menu) {
        this.page = addPage('offPage');
        this.menu = menu;
        this.id = 'offPage';
        this.txtlock1 = addText(this.page, 'Locked');

        this.canUnlock = false;

        this.offPage = new OffPage();

        this.sliderUnLock = addSlider(this.page, 'lockSlider', 0, 100, 0, this, this.onSliderUnLockChange);
        this.initUI();
    }

    onSliderUnLockChange(self) {
        if (sliderValue('lockSlider') == 100) {
            self.unlock(self);
            setSliderValue('lockSlider', 0);
        }
    }

    unlock(self) {
        switchPage(self.menu.getMainMenuId(), {transition: 'fade'});
    };

    initUI() {
        this.txtlock1.css({
            textAlign: 'CENTER',
            fontSize: '20px'
        });
    }
}

class OffPage {
    constructor() {
        this.locked = true;

    }


}
