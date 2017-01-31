/**
 * Created by new on 03/01/2017.
 */
class Phone {

    constructor() {
        initBody();

        var page1 = addPage('first');
        addText(page1, 'First page');
        addPageTransitionButton(page1, 'goto 2', 'second', { transition : 'flow' });
        new HomeButton(page1); // FIXME: non-reusable shit?

        var page2 = addPage('second');
        addText(page2, 'Second page');
        addPageTransitionButton(page2, 'back to 1', 'first', { transition : 'flow', reverse : true });
        new Menu(page2);
        new HomeButton(page2); // FIXME: non-reusable shit?

        // Ugly "solution" for #1
        var checkActivePage = function(event) {
            console.log($("#first").hasClass('ui-page-active'));
            console.log($("#second").hasClass('ui-page-active'));
        };
        addButton(page1, 'active?').click(checkActivePage);
        addButton(page2, 'active?').click(checkActivePage);

        // #2
        page1.mousemove(function(event) {
            console.log('this works for "inner" div (see the DOM hierarchy)');
        });
        page1.parent().mousemove(function(event) {
            console.log('this works for "outer" div');
        });

        // #3
        // TODO: just add the #2 code to your Page constructor :)
        // Alternative code if it shouldn't know about pages:
        $('body').mousemove(function(event) {
            console.log('this works for body');
        });

        // #4
        // comeComponent.mousedown(function);

        // #5: that was easy
        // http://lmgtfy.com/?q=jquery+mobile+set+slider+value
        // set 33 on creation, 77 on timeout
        addSlider(page1, 'temperature', 0, 100, 33);
        setTimeout(setSliderValue, 1000, 'temperature', 77);

        // #6: that was easy, too
        // http://lmgtfy.com/?q=jquery+mobile+set+checkbox+value
        addCheckbox(page1, 'explosive', 'Explosive');
        setCheckboxValue('explosive', true);

        switchPage('first', { transition: 'none' });
    }


}

