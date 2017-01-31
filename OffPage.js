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

        // this.sliderUnLock.mousedown(function() {
            var update = function () {
                if (sliderValue('lockSlider') == 100) {
                    switchPage(menu.getMainMenuId(), {transition: 'fade'});
                    //sliderValueTo('lockSlider', 0);
                    this.sliderUnLock.value(0);
                }

                console.log(sliderValue('lockSlider'));

                setTimeout(update, 1)
            };


        update();
        // })
    }

}


