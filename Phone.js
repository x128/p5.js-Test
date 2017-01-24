/**
 * Created by new on 03/01/2017.
 */
class Phone {

    constructor() {
        initBody();

        var page1 = addPage('first');
        addText(page1, 'First page');
        addPageTransitionButton(page1, 'goto 2', 'second', 'flow');
        new HomeButton(page1); // FIXME: non-reusable shit?

        var page2 = addPage('second');
        addText(page2, 'Second page');
        addPageTransitionButton(page2, 'back to 1', 'first', 'flow');
        new Menu(page2);
        new HomeButton(page2); // FIXME: non-reusable shit?

        $.mobile.changePage('#first');
    }


}

