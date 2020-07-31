module.exports = function debounce(func, time = 500) {
  let called = false;
  return function () {
    if (!called) {
      func.apply(this, arguments);
      called = true;
      setTimeout(() => {
        called = false;
      }, time);
    }
  };
};
