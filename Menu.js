/**
 * Created by new on 03/01/2017.
 */
class Menu {
    constructor(page) {
        this.page = page;
        this.initMainMenu();
        this.initSecondMenu();
        this.secondMenu.hide();
    }

    onFunctionsClick(self) {
        self.secondMenu.show();
        self.mainMenu.hide();
    }

    initMainMenu() {
        this.mainMenu = $('<div></div>');

        var mainMenuButtons = {
            "Password" : false,
            "AutoLock" : false,
            "Time" : false,
            "Date" : false,
            "ScreenShot" : false,
            "Screen" : false,
            "About" : false,
            "Functions" : this.onFunctionsClick,
            "Special features" : false
        };
        for (var btnName in mainMenuButtons) {
            this.addMenuButton(this.mainMenu, mainMenuButtons[btnName], btnName);
        }

        this.page.append(this.mainMenu)
    }

    initSecondMenu() {
        this.secondMenu = $('<div></div>');

        this.addMenuButton(this.secondMenu, 0, "Calculator", "Calculator");
        this.addMenuButton(this.secondMenu, 0, "Stopwatch", "stopwatch");
        this.addMenuButton(this.secondMenu, 0, "Paint", "paint");
        this.addMenuButton(this.secondMenu, 0, "Gallery", "Gallery2");
        this.addMenuButton(this.secondMenu, 0, "Playmarket", "playmarket");
        this.addMenuButton(this.secondMenu, 0, "Music", "music");
        this.addMenuButton(this.secondMenu, 0, "Notes", "note");
        this.addMenuButton(this.secondMenu, 0, "Reminders", "reminderr");
        this.addMenuButton(this.secondMenu, this.onSiriClick, "Siri", "siri");
        this.addMenuButton(this.secondMenu, 0, "Timer", "timer");
        this.addMenuButton(this.secondMenu, 0, "Yandex", "yandex");
        this.addMenuButton(this.secondMenu, 0, "Calendar", "calendar");
        this.addMenuButton(this.secondMenu, 0, "Messages", "messages");

        this.page.append(this.secondMenu);
    }


    addMenuButton(container, onclick, caption, image) {

        var btn;
        if (typeof image !== 'undefined') {
            btn = $('<div class="imgbutton"><img src="img/' + image + '.png" />' + caption + '</div>');
            container.append(btn);
        } else {
            btn = addButton(container, caption);
        }
        var self = this;
        btn.parent().click(function () {
            onclick(self);
        });
    }
}
