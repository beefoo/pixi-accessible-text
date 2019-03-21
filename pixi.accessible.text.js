class AccessibleText extends PIXI.Text {
  constructor(text, style, canvas) {
    super(text, style, canvas);
    this.initContainer();
  }

  initContainer(){
    var parentNode = this.canvas.parentNode;
  }
}
