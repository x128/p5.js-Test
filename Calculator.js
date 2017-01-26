/**
 * Created by new on 26/01/2017.
 */
class Calculator {

    constructor(ID, homePageId, functionsId, menu) {
       this.page = addPage(ID);
       this.id = ID;
       new HomeButton(this.page, homePageId, functionsId, menu);
       new Menubar(this.page);
       calculator_box = addTextInput(this.page)
    }

}