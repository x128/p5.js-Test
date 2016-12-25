function setup() {
  var page = initPage();

  $('body').css('background-color', 'white');

  var btnStart = addButton(page, "start");
  var btnStop = addButton(page, "stop");
  var txtTime = addText(page, 'hi');

  var stopwatchRunning = false;
  var stopwatchValue = 0;
  
  btnStart.parent().click(function() {
    
    if (stopwatchRunning) return;
    stopwatchRunning = true;

    stopwatchValue = 0;

    var updateStopwatch = function() {
      if (stopwatchRunning) {
        stopwatchValue++;
        txtTime.text(stopwatchValue);
        setTimeout(updateStopwatch, 100);
      }
    };
    updateStopwatch();
  });
  
  btnStop.parent().click(function() {
    if (!stopwatchRunning) return;
    stopwatchRunning = false;
  });
  
  var slider = addSlider(page, 'sl', 0, 100, 25);
  
  addText(page, 'some text...');
  addImage(page, 'img/med_christmas-lights-strand2.png');
  addText(page, 'some text...');

  var imgLights2 = addImage(page, 'img/med_christmas-lights-strand2.png');
  imgLights2.css({
    width: '50px',
    height: '30px',
    position: 'absolute',
    left: '100px',
    top: '40px',
  });

  $(document).on('change', slider, function() {
    var opacity = sliderValue('sl') / 100;
    page.css('opacity', opacity);
  });
}
