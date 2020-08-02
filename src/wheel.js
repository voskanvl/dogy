const valOverflow = new Event("valOverflow");

class Wheel {
  constructor() {
    this.threshold = 50;
  }
  get wheel() {
    return this._wheel;
  }
  set wheel(x) {
    if (this._wheel <= this.threshold) {
      this._wheel = x;
    } else {
      this._wheel = x;
      dispatchEvent(valOverflow);
    }
  }
  reset() {
    this._wheel = 0;
  }
  get isPositive() {
    return this._wheel > 0;
  }
}

module.exports = Wheel;
