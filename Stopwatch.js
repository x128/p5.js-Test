/**
 * Created by new on 26/01/2017.
 */
class StopwatchView {

    constructor(id, menu) {
        this.page = addPage(id);
        this.id = id;

        this.stopwatch = new Stopwatch();

        var homePageId = menu.getMainMenuId();
        var functionsId = menu.getSecondMenuId();

        new HomeButton(this.page, homePageId, functionsId, menu);
        new Menubar(this.page);

        this.txtTime = addText(this.page);

        this.btnStart = addButton(this.page, 'Start', this, this.onStartClick);
        this.btnStop = addButton(this.page, 'Pause', this, this.onStopClick);
        this.btnReset = addButton(this.page, 'Reset', this, this.onResetClick);

        this.initUI();
        this.updateView();
    }

    updateView() {
        var txt = this.formattedValue();
        this.txtTime.text(txt);

        switch (this.stopwatch.state) {
            case StopwatchState.Zero:
                showButton(this.btnStart, 'Start');
                hideButton(this.btnStop);
                hideButton(this.btnReset);
                break;
            case StopwatchState.Running:
                hideButton(this.btnStart);
                showButton(this.btnStop);
                hideButton(this.btnReset);
                break;
            case StopwatchState.Paused:
                showButton(this.btnStart, 'Resume');
                hideButton(this.btnStop);
                showButton(this.btnReset);
                break;
            default:
                throw "wtf state";
        }

        setTimeout(function(self) {
            self.updateView();
        }, 50, this);
    }

    onStartClick(self) {
        self.stopwatch.start();
    }

    onStopClick(self) {
        self.stopwatch.stop();
    }

    onResetClick(self) {
        self.stopwatch.reset();
    }

    initUI() {
        this.txtTime.css({
            fontSize: '35px'
        });
    }

    formattedValue() {
        var ms = this.stopwatch.getMs();
        var formattedMs = millisecondsToTime(ms);
        return formattedMs;
    }
}

const StopwatchState = {
    Zero: 0,
    Running: 1,
    Paused: 2,
};

class Stopwatch {
    constructor() {
        this.state = StopwatchState.Zero;
        this.ms = 0;
        this.startMs = 0;
    }

    start() {
        this.state = StopwatchState.Running;
        this.startMs = getTimestampMs() - this.ms; // dirty hack
    }

    stop() {
        this.state = StopwatchState.Paused;
        this.ms = getTimestampMs() - this.startMs;
    }

    reset() {
        this.state = StopwatchState.Zero;
        this.ms = 0;
    }

    getMs() {
        if (this.state == StopwatchState.Running) {
            this.ms = getTimestampMs() - this.startMs;
        }
        return this.ms;
    }
}