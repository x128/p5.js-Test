var btn_password, btn_autoBlock, btn_time, btn_date, btn_screenShot, btn_screen, btn_about, btn_functions, btn_stopWatch, btn_calculator, txt_time;
var phone = new Phone();
var homeButton;
var hours = 0;
var seconds = 0;
var minutes = 0;
var milliseconds = 0;
var paint;

function setup() {
  var page = initPage();

  initControls(page);
  initHomeButton(page);
  initFunctionsControls(page);

  phone.hideFunctionsControls();
  phone.checkClicksOnButtons();

  timerTick();
}

function mouseMoved() {
  tick = 0;
  homeButton.show();
}

function mousePressed() {
  //console.log(mouseX + " " + mouseY)
  // console.log(str(btn_start.text()))
}

function keyPressed() {
  tick = 0;
  homeButton.show();
}

function Phone() {
  // this.secondsBeforeBlock = 60;
  // this.needRecentFunction = true;
  // this.calculatorIsOpened = false;
  // this.stopwatchIsOpened = false;
  // this.stopwatchIsRunning = false;



  this.goHome = function() {
    this.showMenuButtons();
    this.hideFunctionsControls();
    this.hideCalculatorControls();
    this.hideStopwatchControls();
    phone.hidePaintControls();
    hideButton(buttonBack);
    if (this.needRecentFunction)
      phone.recentFunctions();
  };

  this.hideCalculatorControls = function() {
    hideButton(calculator_box);
    hideButton(calculatorsButtonCount);
  };

  this.showCalculatorControls = function() {
    showButton(calculator_box);
    showButton(calculatorsButtonCount);
  };

  this.lock = function() {
    this.hideMenuButtons();
    this.hideFunctionsControls();
    homeButton.hide();
  };

  this.setTime = function(time) {
    txt_time.text(time);
  };

  this.functionsClicked = function() {
    this.hideMenuButtons();
    this.showFunctionsControls();
    this.hideCalculatorControls();
    this.hideStopwatchControls();
    this.hidePaintControls();
  }

  this.recentFunctions = function() {
    if (this.calculatorIsOpened) {
      showButton(btn_calculator);
    }

    if (this.stopwatchIsOpened) {
      showButton(btn_stopwatch)
    }
  }

  this.calculatorOn = function() {
    this.calculatorIsOpened = true;
    this.showCalculatorControls();
    showButton(buttonBack)
    calculator_box.keypress(function(event) {
      num1 = 0;
      num2 = 0;
      number1 = "";
      number2 = "";
      calculator_str = [];
      result = 0;
      plus = false
      multiplication = false
      division = false
      mines = false

      if (event.key == '=') {
        phone.CalculatorCalculateResult();
        return false;
      }
    });

  }

  this.hidePaintControls = function() {
    paint.hide()
  }

  this.showPaintControls = function() {
    paint.show()
  }



  this.stopwatchOn = function() {
    this.stopwatchIsOpened = true;
    this.showStopwatchControls();
    showButton(buttonBack)

    var updateTick = function() {

      if (phone.stopwatchIsRunning) {

        milliseconds++;

        if (milliseconds >= 100) {
          milliseconds = 0;
          seconds++;
        }

        if (seconds >= 60) {
          minutes++;
          seconds = 0;
        }

        if (minutes >= 60) {
          hours++;
          minutes = 0;
        }

        txt_stopwatch_time.text(hours + "   :   " + minutes + "   :   " + seconds + " : " + milliseconds)
        txt_stopwatch_in_menu.text(hours + "   :   " + minutes + "   :   " + seconds + " : " + milliseconds)

      }

      setTimeout(updateTick, 10)
    }

    updateTick();

  }

  this.showStopwatchControls = function() {
    txt_stopwatch_time.show();
    showButton(btn_start);
    showButton(resetStopwatch)
    showButton(chbox_show_stopwatch_time)
  }

  this.hideStopwatchControls = function() {
    txt_stopwatch_time.hide();
    hideButton(btn_start);
    hideButton(resetStopwatch)
    hideButton(chbox_show_stopwatch_time)
  }

  this.CalculatorCalculateResult = function() {
    calculator_box.val(eval(calculator_box.val()));
  }

  this.checkClicksOnButtons = function() {
    btn_functions.parent().click(function() {
      phone.functionsClicked();
    })


    chbox_show_stopwatch_time.click(function(event) {
      var checked = chbox_show_stopwatch_time.prop('checked');
      if (checked) {
        // show_stopwatch_time = true;
        txt_stopwatch_in_menu.show();
      } else {
        // show_stopwatch_time = false;
        txt_stopwatch_in_menu.hide();
      }

      return false;
    });

    buttonBack.parent().click(function() {
      phone.hideCalculatorControls();
      hideButton(buttonBack)
      phone.showFunctionsControls();
      phone.hideStopwatchControls();
      phone.hidePaintControls();
    })

    calculatorsButtonCount.parent().click(function() {
      phone.CalculatorCalculateResult();
    })

    resetStopwatch.parent().click(function() {
      hours = 0;
      minutes = 0;
      seconds = 0;
      milliseconds = 0;
      phone.stopwatchIsRunning = false;
      btn_start.text("Start")
      txt_stopwatch_time.text(hours + "   :   " + minutes + "   :   " + seconds + " : " + milliseconds)
      txt_stopwatch_in_menu.text(hours + "   :   " + minutes + "   :   " + seconds + " : " + milliseconds)
    })

    btn_calculator.parent().click(function() {
      phone.calculatorOn();
      phone.hideMenuButtons();
    })

    btn_stopwatch.parent().click(function() {
      phone.hideMenuButtons();
      phone.stopwatchOn();
    })

    btn_start.parent().click(function() {
      if (btn_start.text() == "Start") {
        btn_start.text("Stop");
        phone.stopwatchIsRunning = true;
      } else
      if (btn_start.text() == "Resume") {
        btn_start.text("Stop");
        phone.stopwatchIsRunning = true;
      } else {
        btn_start.text("Resume")
        phone.stopwatchIsRunning = false;
      }
    })

    homeButton.click(function() {
      phone.goHome()
    });

    homeButton.dblclick(function() {
      phone.functionsClicked();
      hideButton(buttonBack)
    });

    homeButton.css('cursor', 'pointer');
  }

  this.hideMenuButtons = function() {
    hideButton(btn_password)
    hideButton(btn_autoBlock)
    hideButton(btn_time)
    hideButton(btn_date)
    hideButton(btn_screenShot)
    hideButton(btn_screen)
    hideButton(btn_about)
    hideButton(btn_functions)
    txt_recent_functions.hide();
    hideButton(btn_calculator)
    hideButton(btn_special)
    hideButton(btn_stopwatch)
  }

  this.showMenuButtons = function() {
    showButton(btn_password)
    showButton(btn_autoBlock)
    showButton(btn_time)
    showButton(btn_date)
    showButton(btn_screenShot)
    showButton(btn_screen)
    showButton(btn_about)
    showButton(btn_functions)
    txt_recent_functions.show()
    showButton(btn_special)
  }

  this.showFunctionsControls = function() {
    img_calculator.show();
    img_stopwatch.show();
    img_paint.show();
    img_note.show();
    img_calendar.show();
    img_timer.show();
    img_messages.show();
    img_reminder.show();
    img_yandex.show();
    img_alarmclock.show();
    img_siri.show();
  }

  this.hideFunctionsControls = function() {
    img_calculator.hide();
    img_stopwatch.hide();
    img_paint.hide();
    img_note.hide();
    img_calendar.hide();
    img_timer.hide();
    img_messages.hide();
    img_reminder.hide();
    img_yandex.hide();
    img_alarmclock.hide();
    img_siri.hide();
  }


}

function initControls(page) {
  txt_time = addText(page, hour() + ":" + minute() + ":" + second())
  btn_password = addButton(page, "password");
  btn_autoBlock = addButton(page, "auto lock");
  btn_time = addButton(page, "time")
  btn_date = addButton(page, "date")
  btn_screenShot = addButton(page, "screenshot")
  btn_screen = addButton(page, "screen")
  btn_special = addButton(page, "special features")
  btn_about = addButton(page, "about telephone")
  btn_functions = addButton(page, "functions")
  txt_calculator = addText(page, "calculator")
  txt_stopwatch = addText(page, "stopwatch")
  txt_paint = addText(page, "paint")
  txt_note = addText(page, "note")
  txt_calendar = addText(page, "calendar")
  txt_timer = addText(page, "timer")
  txt_messages = addText(page, "messages")
  txt_reminder = addText(page, "reminder")
  txt_yandex = addText(page, "yandex")
  txt_alarmclock = addText(page, "alarmclock")
  txt_siri = addText(page, "Siri")
  txt_recent_functions = addText(page, "recent functions:")
  btn_calculator = addButton(page, "calculator")
  hideButton(btn_calculator)
  buttonBack = addButton(page, "functions")
  calculator_box = addTextInput(page)
  calculatorsButtonCount = addButton(page, "count")
  phone.hideCalculatorControls();
  hideButton(buttonBack)
  btn_stopwatch = addButton(page, "stopwatch")
  txt_stopwatch_time = addText(page, hours + "   :   " + minutes + "   :   " + seconds + " : " + milliseconds);
  txt_stopwatch_time.css({
    color: 'black',
    fontSize: '35px'
  });
  btn_start = addButton(page, "Start");
  resetStopwatch = addButton(page, "Reset");
  chbox_show_stopwatch_time = addCheckbox(page, "show stopwatch in menu line");
  txt_stopwatch_in_menu = addText(page, hours + "   :   " + minutes + "   :   " + seconds + " : " + milliseconds);
  txt_stopwatch_in_menu.css({
    position: 'absolute',
    left: '150px',
    top: '10px'
  });

  hideButton(btn_stopwatch);
  phone.hideStopwatchControls();
  txt_stopwatch_in_menu.hide();

  paint = new Paint(page, 235, 415);
  phone.hidePaintControls();
}

function initHomeButton(page) {
  homeButton = addImage(page, 'img/home-button.png')
  homeButton.css({
    width: '35px',
    height: '35px',
    position: 'absolute',
    left: '40%',
    top: '0px',
  });
}

function initFunctionsControls(page) {
  initCalculator(page, 10, 50)
  initStopwatch(page, 90, 50)
  initPaint(page, 170, 50)
  initNote(page, 10, 140)
  initCalendar(page, 90, 140)
  initTimer(page, 170, 140)
  initMessages(page, 10, 230)
  initReminder(page, 90, 230)
  initYandex(page, 170, 230)
  initAlarmclock(page, 10, 320)
  initSiri(page, 90, 320)

  txt_calculator.hide();
  txt_stopwatch.hide();
  txt_paint.hide();
  txt_note.hide();
  txt_calendar.hide();
  txt_timer.hide();
  txt_messages.hide();
  txt_reminder.hide();
  txt_yandex.hide();
  txt_alarmclock.hide();
  txt_siri.hide();

  // calculator_box.css({
  //   position: 'absolute',
  //   left:'25px',
  //   top:'40px',
  //   width:'200px'
  // })


  img_calculator.click(function() {
    phone.hideFunctionsControls();
    phone.calculatorOn();
  })

  img_stopwatch.click(function() {
    phone.hideFunctionsControls();
    phone.stopwatchOn();
  })

}


function initCalculator(page, x, y) {
  img_calculator = addImage(page, 'img/Calculator.png')
  img_calculator.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_calculator.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 8 + 'px',
    top: y + 70 + 'px',
  });

  img_calculator.css('cursor', 'pointer');
  img_calculator.hover(function() {
    txt_calculator.show();
  }, function() {
    txt_calculator.hide();
  })
}

function initStopwatch(page, x, y) {
  img_stopwatch = addImage(page, 'img/stopwatch.png')
  img_stopwatch.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_stopwatch.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 5 + 'px',
    top: y + 70 + 'px',
  });

  img_stopwatch.css('cursor', 'pointer');
  img_stopwatch.hover(function() {
    txt_stopwatch.show();
  }, function() {
    txt_stopwatch.hide();
  })
}

function initPaint(page, x, y) {
  img_paint = addImage(page, 'img/paint.png')
  img_paint.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_paint.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 20 + 'px',
    top: y + 70 + 'px',
  });

  img_paint.css('cursor', 'pointer');
  img_paint.hover(function() {
    txt_paint.show();
  }, function() {
    txt_paint.hide();
  })

    img_paint.click(function() {
      phone.hideFunctionsControls();
      // console.log("1")
      phone.showPaintControls()
    })
}

function initNote(page, x, y) {
  img_note = addImage(page, 'img/note.png')
  img_note.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_note.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 20 + 'px',
    top: y + 70 + 'px',
  });

  img_note.css('cursor', 'pointer');
  img_note.hover(function() {
    txt_note.show();
  }, function() {
    txt_note.hide();
  })
}

function initCalendar(page, x, y) {
  img_calendar = addImage(page, 'img/calendar.png')
  img_calendar.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_calendar.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 8 + 'px',
    top: y + 70 + 'px',
  });

  img_calendar.css('cursor', 'pointer');
  img_calendar.hover(function() {
    txt_calendar.show();
  }, function() {
    txt_calendar.hide();
  })
}

function initTimer(page, x, y) {
  img_timer = addImage(page, 'img/timer.png')
  img_timer.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_timer.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 22 + 'px',
    top: y + 70 + 'px',
  });

  img_timer.css('cursor', 'pointer');
  img_timer.hover(function() {
    txt_timer.show();
  }, function() {
    txt_timer.hide();
  })
}

function initMessages(page, x, y) {
  img_messages = addImage(page, 'img/messages.png')
  img_messages.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_messages.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 4 + 'px',
    top: y + 70 + 'px',
  });

  img_messages.css('cursor', 'pointer');
  img_messages.hover(function() {
    txt_messages.show();
  }, function() {
    txt_messages.hide();
  })
}


function initReminder(page, x, y) {
  img_reminder = addImage(page, 'img/reminderr.png')
  img_reminder.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_reminder.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 10 + 'px',
    top: y + 70 + 'px',
  });

  img_reminder.css('cursor', 'pointer');
  img_reminder.hover(function() {
    txt_reminder.show();
  }, function() {
    txt_reminder.hide();
  })
}

function initYandex(page, x, y) {
  img_yandex = addImage(page, 'img/yandex.png')
  img_yandex.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_yandex.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 15 + 'px',
    top: y + 70 + 'px',
  });

  img_yandex.css('cursor', 'pointer');
  img_yandex.hover(function() {
    txt_yandex.show();
  }, function() {
    txt_yandex.hide();
  })
}

function initAlarmclock(page, x, y) {
  img_alarmclock = addImage(page, 'img/alarmclock.png')
  img_alarmclock.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_alarmclock.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 4 + 'px',
    top: y + 70 + 'px',
  });

  img_alarmclock.css('cursor', 'pointer');
  img_alarmclock.hover(function() {
    txt_alarmclock.show();
  }, function() {
    txt_alarmclock.hide();
  })
}

function initSiri(page, x, y) {
  img_siri = addImage(page, 'img/siri.png')
  img_siri.css({
    width: '80px',
    height: '70px',
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
  });

  txt_siri.css({
    position: 'absolute',
    //width: '50px',
    height: '20px',
    left: x + 27 + 'px',
    top: y + 70 + 'px',
  });

  img_siri.css('cursor', 'pointer');
  img_siri.hover(function() {
    txt_siri.show();
  }, function() {
    txt_siri.hide();
  })
}

function timerTick() {
  tick = 0;

  var updateTick = function() {
    tick += 1;

    if (tick >= phone.secondsBeforeBlock) {
      phone.lock();
    }

    phone.setTime(hour() + " : " + minute() + " : " + second())

    setTimeout(updateTick, 1000)
  }

  updateTick();
}