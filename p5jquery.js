function initPage() {
  var div1 = $('<div data-role="page" class="ui-page ui-page-theme-a ui-page-active">')
  var div2 = $('<div data-role="content" data-theme="a" style="margin: 10px;"></div>')
  $('body').append(div1);
  div1.append(div2);
  return div2;
}

function addButton(parent, name) {
  var btn = $('<a data-theme="a">' + name + "</a>");
  parent.append(btn);
  btn.button();
  return btn;
}

function showButton(btn) {
  btn.parent().show();
}

function hideButton(btn) {
  btn.parent().hide();
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

function addSlider(parent, id, min, max, value) {
  var btn = $('<input type="range" id="' + id + '" value="' + value + '" min="' + min + '" max="' + max + '" data-theme="a" />');
  parent.append(btn);
  $("div").trigger('create');
  return btn;
}

function inputValue(id) {
  return $('#' + id).val();
}

function addImage(parent, src) {
  var img = $('<img src="' + src + '" />');
  parent.append(img);
  return img;
}
