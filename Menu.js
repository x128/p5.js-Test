class Menu {
    constructor() {
        this.page1 = addPage('page1');
        this.page2 = addPage('page2')

        new Menubar(this.page1);
        new Menubar(this.page2);
        
        this.initMainMenu(this.page1);
        this.initSecondMenu(this.page2);
        this.secondMenu.hide();

        new HomeButton(this.page2, 'page1', 'page2');
        new HomeButton(this.page1, 'page1', 'page2');

        switchPage('page1', { transition: 'none' });
    }


    initMainMenu(parent) {
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

        parent.append(this.mainMenu)
    }

    initSecondMenu(parent) {
        this.secondMenu = $('<div></div>');

        this.addMenuButton(this.secondMenu, this.onSettingsClick, "Settings", "Settings copy");
        this.addMenuButton(this.secondMenu, this.onCalculatorClick, "Calculator", "Calculator");
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

        parent.append(this.secondMenu);

    }



    onSiriClick(self) {
        self.secondMenu.hide();
        self.secondMenu.hide();
    }

    onCalculatorClick(self) {

    }


//
    onFunctionsClick(self) {
        // self.secondMenu.show();
        // self.mainMenu.hide();
        switchPage('page2', { transition: 'flow'});
    }


    onSettingsClick(self) {
        self.secondMenu.hide();
        self.mainMenu.show();
    }

addMenuButton(container, onclick, caption, image) {

    var btn;
    var self = this;
    if (typeof image !== 'undefined') {
        btn = $('<div class="imgbutton"><img src="img/' + image + '.png" />' + caption + '</div>');
        container.append(btn);
        btn.click(function(event) {
            onclick(self);
        });
    } else {
        btn = addButton(container, caption);
        btn.parent().click(function(event) {
            onclick(self);
        });
     }
    }

}



