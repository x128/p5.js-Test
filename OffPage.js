/**
 * Created by new on 28/01/2017.
 */
class OffPage {

    constructor(menu) {
        this.page = addPage('offPage');
        this.id = 'offPage';
        this.txtlock1 = addText(this.page, 'Locked');
        this.txtlock1.css({
           textAlign: 'CENTER',
           fontSize: '20px'
        });
        this.sliderUnLock = addSlider(this.page, 'lockSlider', 0, 100, 0);
        hideSlider('lockSlider');
        var self = this;

        $('#lockSlider').change(function(event) {
                if (sliderValue('lockSlider') == 100) {
                    switchPage(menu.getMainMenuId(), {transition: 'fade'});
                    setSliderValue('lockSlider', 0);
                }

        })
    }

}


