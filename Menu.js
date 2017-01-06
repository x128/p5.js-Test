class Menu {
    constructor(page) {
        this.page = page;
        this.initMainMenu();
        this.initSecondMenu();
        this.secondMenu.hide();
        this.self = this;
    }

    //
    // onAutoLockClick(self) {
    //
    // }


    initMainMenu() {
        this.mainMenu = $('<div></div>');

        var mainMenuButtons = {
            "Password": false,
            "AutoLock": this.onAutoLockClick,
            "Time": false,
            "Date": false,
            "ScreenShot": false,
            "Screen": false,
            "About": false,
            "Special features": false,
            "Functions": this.onFunctionsClick
        };
        for (var btnName in mainMenuButtons) {
            this.addMenuButton(this.mainMenu, mainMenuButtons[btnName], btnName);
        }

        this.page.append(this.mainMenu)
    }

    initSecondMenu() {
        this.secondMenu = $('<div></div>');

        this.addMenuButton(this.secondMenu, this.onSettingsClick, "Settings", "Settings copy");
        this.addMenuButton(this.secondMenu, false, "Calculator", "Calculator");
        this.addMenuButton(this.secondMenu, false, "Stopwatch", "stopwatch");
        this.addMenuButton(this.secondMenu, false, "Paint", "paint");
        this.addMenuButton(this.secondMenu, false, "Gallery", "Gallery2");
        this.addMenuButton(this.secondMenu, false, "Playmarket", "playmarket1");
        this.addMenuButton(this.secondMenu, false, "Music", "music");
        this.addMenuButton(this.secondMenu, false, "Notes", "note");
        this.addMenuButton(this.secondMenu, false, "Reminders", "reminderr");
        this.addMenuButton(this.secondMenu, this.onSiriClick, "Siri", "siri");
        this.addMenuButton(this.secondMenu, false, "Timer", "timer");
        this.addMenuButton(this.secondMenu, false, "Yandex", "yandex");
        this.addMenuButton(this.secondMenu, false, "Calendar", "calendar");
        this.addMenuButton(this.secondMenu, false, "Messages", "messages");

        this.page.append(this.secondMenu);
    };

    onSiriClick(self) {

    };

    //
    onFunctionsClick(self) {
        self.secondMenu.show();
        self.mainMenu.hide();
    }

    onSettingsClick(self) {
        self.secondMenu.hide();
        self.mainMenu.show();
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
        })
    }

}

