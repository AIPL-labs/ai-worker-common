export class Watchdog {
  private timeoutId: number | NodeJS.Timeout | undefined;
  private timeoutMs: number;
  private callbacks: (() => void)[];
  constructor(timeoutMs: number) {
    console.log(`watchdog created: ${timeoutMs}`);
    this.timeoutMs = timeoutMs;
    this.timeoutId = undefined;
    this.callbacks = [];
  }
  start() {
    this.reset();
  }
  addListener(cb: () => void) {
    this.callbacks.push(cb);
  }
  reset() {
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId);
    }
    this.callbacks.length = 0;
    this.timeoutId = setTimeout(() => {
      this.callbacks.forEach((cb) => cb());
    }, this.timeoutMs);
  }
  stop() {
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }
}
