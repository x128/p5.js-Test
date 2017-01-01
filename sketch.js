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

  var slider = addSlider(page, 'sl', 0, 100, 100);

  $('body').dblclick(function() {
    addImage(page, 'img/med_christmas-lights-strand2.png');
    addText(page, 'some text...');
    return false;
  });

  var imgLights2 = addImage(page, 'img/med_christmas-lights-strand2.png');
  imgLights2.css({
    width: '50px',
    height: '30px',
    position: 'absolute',
    left: '100px',
    top: '40px',
  });

  $(document).on('change', slider, function() {
    var opacity = inputValue('sl') / 100;
    page.css('opacity', opacity);
  });

  var chkDevMode = addCheckbox(page, 'Developer Mode');
  var btnExplode = addButton(page, 'Minimalism Mode');
  hideButton(btnExplode);
  chkDevMode.click(function(event) {
    var checked = chkDevMode.prop('checked');
    if (checked)
      showButton(btnExplode);
    else
      hideButton(btnExplode);
    return false;
  });

  btnExplode.click(function() {
    page.hide();
  });
}