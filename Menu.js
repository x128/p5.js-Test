class Menu {
    constructor() {
        this.page1 = addPage('page1');
        this.page2 = addPage('page2');

        this.calculator = new Calculator('calculPage', this);

        //this.calculatorPage = addPage('calculPage');
        //new HomeButton(this.calculatorPage, 'page1', 'page2', this);

        //this.siriPage = addPage('siriPage');
        //new HomeButton(this.siriPage, 'page1', 'page2', this);

        new Menubar(this.page1);
        new Menubar(this.page2);
        
        this.initMainMenu(this.page1);
        this.initSecondMenu(this.page2);

        new HomeButton(this.page2, 'page1', 'page2', this);
        new HomeButton(this.page1, 'page1', 'page2', this);
    }

    getMainMenuId() {
       return 'page1';
    }

    getSecondMenuId() {
       return 'page2';
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

        parent.append(this.mainMenu);
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
       //switchPage('siriPage', { transition: 'flow'});
    }

    onCalculatorClick(self) {
        switchPage(self.calculator.id, { transition: 'flow'});

    }


//
    onFunctionsClick(self) {
        switchPage('page2', { transition: 'slideup'});
    }


    onSettingsClick(self) {
        switchPage('page1', { transition: 'pop'});
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



