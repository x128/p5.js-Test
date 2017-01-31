/**
 * Created by new on 28/01/2017.
 */
class Password {

    constructor(ID, menu) {
        this.page = addPage(ID);
        this.id = ID;
        new HomeButton(this.page, menu.getMainMenuId(), menu.getSecondMenuId(), menu);
        new Menubar(this.page);

        this.txtPasswordTitle = addText(this.page, 'Password');
        this.txtPasswordTitle.css({
           textAlign: 'CENTER',
           fontSize: '20px',
           textDecoration: 'underline'
        });

        this.chboxPasswordIs = addCheckbox(this.page, 'Ask for password.');
        this.txtNoPassword = addText(this.page, 'No password.');
        this.txtNoPassword.css({
           color: 'blue'
        });
        this.txtPassword = addText(this.page, 'Enter your password:');
        this.txtPassword.css({
           color: 'blue'
        });
        this.txtInput = addTextInput(this.page);

        this.txtPassword.hide();
        hideButton(this.txtInput);

        var self = this;

        this.chboxPasswordIs.click(function(event) {
            var checked = self.chboxPasswordIs.prop('checked');
            if (checked) {
                self.txtPassword.show();
                self.txtNoPassword.hide();
                showButton(self.txtPassword);
                showButton(self.txtInput);
            } else {
                self.txtNoPassword.show();
                self.txtPassword.hide();
                hideButton(self.txtInput);
            }
        });

    }




}





