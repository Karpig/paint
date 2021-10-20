class Tool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  isPainting: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d') || new CanvasRenderingContext2D();
    this.isPainting = false;

    this.destroy();
  }

  destroy() {
    this.canvas.onmousedown = null;
    this.canvas.onmousemove = null;
    this.canvas.onmouseup = null;
  }
}

export default Tool;
