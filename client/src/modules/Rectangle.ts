import Tool from '@modules/Tool';
import Layer from '@modules/Layer';

class Rectangle extends Tool {
  constructor(layer: Layer) {
    super(layer);

    this.addEventListeners();
  }

  addEventListeners() {
    this.canvas.addEventListener('mousedown', this.onMouseDownHandler.bind(this));
    this.canvas.onmousemove = this.onMouseMoveHandler.bind(this);
    this.canvas.onmouseup = this.onMouseUpHandler.bind(this);
  }

  onMouseDownHandler(event: MouseEvent) {
    if (!event.target) return;
    this.isPainting = true;
    this.ctx.beginPath();
    const x = event.offsetX * 2;
    const y = event.offsetY * 2;
    this.ctx.moveTo(x, y);
  }

  onMouseMoveHandler(event: MouseEvent) {
    if (this.isPainting) {
      const x = event.offsetX * 2;
      const y = event.offsetY * 2;
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

export default Rectangle;
