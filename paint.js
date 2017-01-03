class Paint {

  constructor(page, width, height) {
    this.width = width;
    this.height = height;
    this.canvas = addCanvas(page, width, height);
    this.context = this.canvas[0].getContext('2d');
    this.canvas.click(function() {

    })
  }

  line(x1, y1, x2, y2) {
    this.canvas.moveTo(100, 100);
    this.canvas.lineTo(200, 100);
  }

  hide() {
    this.canvas.hide();
  }

  show() {
    this.canvas.show()
  }
}