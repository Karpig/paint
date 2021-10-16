export default class Layer {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  center: {
    x: number;
    y: number;
  };

  constructor(container: HTMLElement) {
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d') || new CanvasRenderingContext2D();
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    this.center = { x: this.width / 2, y: this.height / 2 };

    console.log(container);

    container.appendChild(this.canvas);

    this.fitToContainer();
    window.addEventListener('resize', this.fitToContainer);
  }

  fitToContainer = () => {
    this.width = this.canvas.width = this.container.clientWidth;
    this.height = this.canvas.height = this.container.clientHeight;
  };

  clear = () => {
    this.context.clearRect(0, 0, this.width, this.height);
  };
}
