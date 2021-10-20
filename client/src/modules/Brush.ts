import Tool from '@modules/Tool';

class Brush extends Tool {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.addEventListeners();
  }

  addEventListeners() {
    this.canvas.onmousedown = this.onMouseDownHandler.bind(this);
    this.canvas.onmousemove = this.onMouseMoveHandler.bind(this);
    this.canvas.onmouseup = this.onMouseUpHandler.bind(this);
  }

  onMouseDownHandler(event: MouseEvent) {
    if (!event.target) return;
    this.isPainting = true;
    this.ctx.beginPath();
    const x = event.pageX;
    const y = event.pageY;
    this.ctx.moveTo(x, y);
  }

  onMouseMoveHandler(event: MouseEvent) {
    if (this.isPainting) {
      const x = event.pageX;
      const y = event.pageY;
      this.draw(x, y);
    }
  }

  onMouseUpHandler() {
    this.isPainting = false;
  }

  draw(x: number, y: number) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}

export default Brush;
