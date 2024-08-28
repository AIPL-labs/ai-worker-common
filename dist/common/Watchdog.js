export class Watchdog {
    timeoutId;
    timeoutMs;
    callbacks;
    constructor(timeoutMs) {
        console.log(`watchdog created: ${timeoutMs}`);
        this.timeoutMs = timeoutMs;
        this.timeoutId = undefined;
        this.callbacks = [];
    }
    start() {
        this.reset();
    }
    addListener(cb) {
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
//# sourceMappingURL=Watchdog.js.map