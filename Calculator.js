/**
 * Created by new on 26/01/2017.
 */
class Calculator {

    constructor(ID, menu) {
        var homePageId = menu.getMainMenuId();
        var functionsId = menu.getSecondMenuId();

        this.page = addPage(ID);
        this.id = ID;

        new HomeButton(this.page, homePageId, functionsId, menu);
        new Menubar(this.page);
        var calculator_box = addTextInput(this.page);
        this.buttonCount = addButton(this.page, 'count');
        this.buttonCount.parent().click(function () {
            calculator_box.val(eval(calculator_box.val()));
        });

        calculator_box.keypress(function(event) {
           if (event.key == '=') {
               calculator_box.val(eval(calculator_box.val()));
               return false;
           }

        });
    }


}