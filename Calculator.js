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
       this.calculator_box = addTextInput(this.page);
       this.calculator_box.css({
           width: '100px'
       })
    }

}