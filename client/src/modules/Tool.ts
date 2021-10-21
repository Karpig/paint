import Layer from '@modules/Layer';

class Tool {
  layer: Layer;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  isPainting: boolean;

  constructor(layer: Layer) {
    this.layer = layer;
    this.canvas = this.layer.canvas;
    this.ctx = this.layer.context;
    this.isPainting = false;

    this.destroy();
  }

  set fillColor(color: string) {
    this.ctx.fillStyle = color;
  }

  set strokeColor(color: string) {
    this.ctx.strokeStyle = color;
  }

  set lineWidth(width: number) {
    this.ctx.lineWidth = width;
  }

  destroy() {
    this.canvas.onmousedown = null;
    this.canvas.onmousemove = null;
    this.canvas.onmouseup = null;
  }
}

export default Tool;
