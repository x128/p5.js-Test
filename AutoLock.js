/**
 * Created by new on 29/01/2017.
 */
class AutoLock {

    constructor(ID, menu) {
       this.id = ID;
       this.page = addPage(ID);
       new HomeButton(this.page, menu.getMainMenuId(), menu.getSecondMenuId(), menu);
       new Menubar(this.page);
       this.txtAutoLockTitle = addText(this.page, 'AutoLock');
       this.txtAutoLockTitle.css({
           textAlign: 'CENTER',
           fontSize: '20px',
           textDecoration: 'underline'
       });

       var self = this;

       this.chboxlockActive = addCheckbox(this.page, 'Autolock active');

       this.txtToSlider = addText(this.page, 'Minutes before lock');
       this.txtToSlider.css({
           color: 'blue'
       });

       this.timeBeforeLock = addSlider(this.page, 'Slider', 1, 10, 1);

        this.chboxlockActive.click(function(event) {
            var checked = self.chboxlockActive.prop('checked');
            if (checked) {
                self.txtToSlider.show();
            } else {
                self.txtToSlider.hide();
            }
        });


    }




}