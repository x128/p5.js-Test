class Menu {
    constructor() {
        this.page1 = addPage('page1');
        this.page2 = addPage('page2');

        this.password = new Password('password', this);
        this.autoLock = new AutoLockView('lock', this);
        this.date = new DateView('date' ,this);
        this.time = new TimeView('time', this);
        this.pattern = new PatternView('pattern', this);

        this.calculator = new Calculator('calculPage', this);
        this.stopwatch = new StopwatchView('Stopwatch', this);

        this.offPage = new OffPageView(this);

        new Menubar(this.page1);
        new Menubar(this.page2);
        
        this.initMainMenu(this.page1);
        this.initSecondMenu(this.page2);

        new HomeButton(this.page2, 'page1', 'page2', this);
        new HomeButton(this.page1, 'page1', 'page2', this);

        this.timeBeforeLock = this.autoLock.minBeforeLock;
        this.secNoMove = 0;


        var Self = this;

        var timerNoMove = function() {
            Self.secNoMove ++;
            if (Self.autoLock.autolock.active) {
                if (Self.secNoMove == Self.timeBeforeLock) {
                    switchPage(Self.offPage.id, {transition: 'fade'});
                }
            }
            setTimeout(timerNoMove, 1000);
        };

        timerNoMove();

        $('body').mousemove(function(event) {
            var autolock = new AutoLock();
            Self.secNoMove = 0;
        });
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
            "Password": this.onPasswordClick,
            "pattern & slider": this.onPatternClick,
            "AutoLock": this.onAutoLockClick,
            "Time": this.onTimeClick,
            "Date": this.onDateClick,
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
        this.addMenuButton(this.secondMenu, this.onStopwatchClick, "Stopwatch", "stopwatch");
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

    onStopwatchClick(self) {
        switchPage(self.stopwatch.id, { transition: 'flow'});
    }


    onPasswordClick(self) {
        switchPage(self.password.id, { transition: 'flip'});
    }

    onAutoLockClick(self) {
        switchPage(self.autoLock.id, { transition: 'flip'});
    }

    onSiriClick(self) {
       //switchPage('siriPage', { transition: 'flow'});
    }

    onCalculatorClick(self) {
        switchPage(self.calculator.id, { transition: 'flow'});
    }

    onFunctionsClick(self) {
        switchPage('page2', { transition: 'slideup'});
    }


    onSettingsClick(self) {
        switchPage('page1', { transition: 'pop'});
    }

    onTimeClick(self) {
        switchPage('time', { transition: 'flip'});
    }

    onDateClick() {
        switchPage('date', { transition: 'flip'});
    }

    onPatternClick() {
        switchPage('pattern', { transition: 'flip'});
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


