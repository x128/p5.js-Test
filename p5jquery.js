function addButton(parent, name, tipaSelf, onClick) {
  var btn = $('<a data-theme="a">' + name + "</a>");
  parent.append(btn);
  btn.button();
  if (tipaSelf && onClick) {
      btn.parent().click(function() {
          onClick(tipaSelf);
      });
  }
  return btn;
}

function showButton(btn, text) {
  btn.parent().show();
  if (text) {
      btn.text(text);
  }
}

function hideButton(btn) {
  btn.parent().hide();
}

function hideElement(element) {
  element.hide();
}

function showElement(element) {
  element.show();
}

function addText(parent, name) {
  var div = $("<div>" + name + "</div>");
  parent.append(div);
  return div;
}

function addTextInput(parent) {
    var textInput = $('<input type="text">');
    parent.append(textInput);
    $("div").trigger('create');
    return textInput;
}

function addSlider(parent, id, min, max, value, target, onChange) {
    var slider = $('<input type="range" id="' + id + '" value="' + value + '" min="' + min + '" max="' + max + '" data-theme="a" />');
    parent.append(slider);
    $("div").trigger('create');

    if (target && onChange) {
        $('#' + id).change(function(event) {
            onChange(target, event);
        });
    }

    return slider;
}

function addCheckbox(parent, id, caption) {
    var input = $('<input type="checkbox" id="' + id + '">');
    var label = $('<label>' + caption + '</label>');
    label.append(input);
    parent.append(label);
    $("label").trigger('create');
    return input;
}

function inputValue(id) {
  return $('#' + id).val();
}

function addImage(parent, src) {
  var img = $('<img src="' + src + '" />');
  parent.append(img);
  return img;
}

function addCanvas(parent, width, height) {
    var canvas = $('<canvas width="' +  width + '" height="' + height + '" style="border:1px solid #000000;"></canvas>')
    parent.append(canvas)
    return canvas;
}

function searchURL() {
    window.location = "http://www.myurl.com/search/";
}

function initBody() {
    $('body').empty();
}

function addPage(id) {
    var div1 = $('<div data-role="page" class="ui-page ui-page-theme-a" id="' + id + '">');
    var div2 = $('<div data-role="content" data-theme="a" style="margin: 10px;"></div>');
    $('body').append(div1);
    div1.append(div2);
    return div2;
}

function addPageTransitionButton(parent, label, target, options) {
    var btn = addButton(parent, label);
    btn.parent().click(function(event) {
        switchPage(target, options);
    });
}

function switchPage(id, options) {
    console.log("switchPage " + id, options);
    console.log(new Error().stack);
    $.mobile.changePage('#' + id, options);
}

function sliderValue(id) {
    return $('#' + id).val();
}

function hideSliderLeftPart(id) {
    $('#' + id).hide();
}

function setSliderValue(id, value) {
    $('#' + id).val(value).slider('refresh');
}

function setCheckboxValue(id, value) {
    $('#' + id).prop('checked', value).checkboxradio('refresh');
}
