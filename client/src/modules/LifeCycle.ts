type LifeCyclePropUpdate = (correction: number) => void;
type LifeCyclePropDependency = () => boolean;

export default class LifeCycle {
  update: LifeCyclePropUpdate;
  dependency?: LifeCyclePropDependency;
  lastUpdate: number;
  maxInterval: number;

  constructor(_update: LifeCyclePropUpdate, dependency?: LifeCyclePropDependency) {
    this.update = _update;
    this.dependency = dependency;
    this.lastUpdate = 0;
    this.maxInterval = 40;

    this.tick();
  }

  tick = (currentTime = 0) => {
    const deltaTime = currentTime - this.lastUpdate;
    requestAnimationFrame(this.tick);

    if (deltaTime < this.maxInterval) {
      if ((this.dependency && this.dependency()) || !this.dependency) {
        this.update(deltaTime / 1000);
      }
    }

    this.lastUpdate = currentTime;
  };
}
