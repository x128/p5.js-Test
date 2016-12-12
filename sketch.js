function setup() {
  var page = initPage();

  var btn1 = addButton(page, "say something");
  var btn2 = addButton(page, "hide btn1");

  var txt1 = addText(page, 'hi');

  btn1.parent().click(function() {
    txt1.text('In geometry, a digon is a polygon with two sides (edges) and two vertices. Its construction is degenerate in a Euclidean plane because the two sides would either coincide or one or both would have to be curved. A regular digon has both angles equal and both sides equal and is represented by Schläfli symbol {2}. It may be constructed on a sphere as a pair of 180 degree arcs connecting antipodal points, when it forms a lune. The digon is the simplest abstract polytope of rank 2. A truncated digon, t{2} is a square, {4}. An alternated digon, h{2} is a monogon, {1}.');
  });
  
  btn2.parent().click(function() {
    hideButton(btn1);
    txt1.text('slider value is ' + sliderValue('sl'));
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
