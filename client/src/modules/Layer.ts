export default class Layer {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  ratio: number;
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
    this.ratio = 2;
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.center = { x: this.width / this.ratio, y: this.height / this.ratio };

    container.appendChild(this.canvas);

    this.fitToContainer();
    window.addEventListener('resize', this.fitToContainer);
  }

  fitToContainer = () => {
    this.width = this.canvas.width = this.container.clientWidth * this.ratio;
    this.height = this.canvas.height = this.container.clientHeight * this.ratio;
  };

  clear = () => {
    this.context.clearRect(0, 0, this.width, this.height);
  };
}
