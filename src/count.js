const chCountValue = new Event("chCountValue");

class Count {
  constructor(length, cb) {
    this.value = 1;
    this.length = length;
    if (cb && typeof cb === "function") {
      this.cb = cb;
    } else if (cb && typeof cb === "string" && cb === "circle") {
      this.cb = x => {
        if (x === 0) this.value = this.length;
        if (x === this.length) this.value = 0;
      };
    } else if (cb && typeof cb === "string" && cb === "stop") {
      this.cb = x => {
        if (x === 0) this.value = 0;
        if (x === this.length) this.value = this.length;
      };
    } else {
      this.cb = () => {};
    }
  }

  inc() {
    if (this.value + 1 > this.length) {
      dispatchEvent(chCountValue);
      this.cb(this.value);
    } else {
      this.value++;
    }
  }
  dec() {
    if (this.value - 1 < 0) {
      dispatchEvent(chCountValue);
      this.cb(this.value);
    } else {
      this.value--;
    }
  }
}

module.exports = Count;
