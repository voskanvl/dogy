const texts = require("./textArray");
const data = require("./data.json");
const debounce = require("./debounce");
const threshold = 50;
const delay = 600;

const chCountValue = new Event("chCountValue");
const valOverflow = new Event("valOverflow");

const wheel = {
  get wheel() {
    return this._wheel;
  },
  set wheel(x) {
    if (this._wheel <= threshold) {
      this._wheel = x;
    } else {
      this._wheel = x;
      dispatchEvent(valOverflow);
    }
  },
  reset() {
    this._wheel = 0;
  },
  get isPositive() {
    return this._wheel > 0;
  },
};
const count = {
  value: 1,
  inc() {
    if (this.value + 1 > texts.length - 1) {
      this.value = 0;
    } else {
      this.value++;
    }
    dispatchEvent(chCountValue);
  },
  dec() {
    if (this.value - 1 < 0) {
      this.value = texts.length - 1;
    } else {
      this.value--;
    }
    dispatchEvent(chCountValue);
  },
};

const app = document.querySelector(".app");
const appDiv = document.querySelector(".app>div");
appDiv.innerHTML = texts[count.value];

const getImg = () => {
  return document.querySelector(".img");
};

const moveFlag = () => {
  const el = thumbs[count.value].querySelector("img");
  const flag = document.querySelector(".flag");
  const { top, height, left, width } = el.getBoundingClientRect();
  const moveFlagX = top + height / 3;
  const moveFlagY = left + width;

  flag.style.top = moveFlagX + "px";
  flag.style.left = moveFlagY * 0.94 + "px";
  console.log("x", top, height);
};

const thumbnails = data.reduce((ac, e, i) => {
  return i === count.value
    ? ac +
        `<div class="thumbnail thumbnail-light" data-id=${i}><img src="${e.imgUrl}"/></div>`
    : ac + `<div class="thumbnail" data-id=${i}><img src="${e.imgUrl}"/></div>`;
}, "");
const middle = document.querySelector(".wrap > .middle");
middle.innerHTML = `<div class="flag">🦴</div>` + thumbnails;
const thumbs = document.querySelectorAll(".wrap > .middle > .thumbnail");

const handleThumbs = e => {
  const id = e.target.closest(".thumbnail").dataset.id;
  if (+id < count.value) {
    wheel.wheel = 51;
    count.value = +id + 1;
    render(wheel.isPositive);
    moveFlag();
  } else {
    wheel.wheel = -51;
    count.value = +id - 1;
    render(wheel.isPositive);
    moveFlag();
  }
};

thumbs.forEach(e => {
  e.addEventListener("click", handleThumbs);
});

const thumbnailsRefresh = index => {
  const thumbs = document.querySelectorAll(".wrap > .middle > .thumbnail");
  thumbs.forEach((e, i) => {
    e.classList.remove("thumbnail-light");
    if (e.dataset.id == index) e.classList.add("thumbnail-light");
  });
};

function rotateImg(e) {
  const ampRotateX = 12;
  const ampRotateY = 6;
  const maxSize = 2;
  const { width, height } = this.getBoundingClientRect();
  const percentOffsetX = Math.ceil((e.offsetX / width) * 100) - 50;
  const percentOffsetY = Math.ceil((e.offsetY / height) * 100) - 50;
  const rotateX = (ampRotateX * percentOffsetX * 2) / 100;
  const rotateY = (ampRotateY * percentOffsetY * 2) / 100;
  this.style.transform = `rotateY(${rotateX}deg) rotateX(${rotateY}deg) translateZ(-40px)`;

  const blick = this.querySelector(".blick");
  blick.style.transform = `translate(${percentOffsetX}%,${percentOffsetY}%) scale(${
    Math.abs(percentOffsetX) / 100 + 1
  })`;
}

const refresh = theme => {
  const clr = {
    light: "#ddd",
    dark: "#222",
  };
  console.log(theme, clr[theme]);
  const img = getImg();
  img.addEventListener("mousemove", rotateImg.bind(img));
  img.style.boxShadow = `0 40px 28px -20px ${clr[theme]}`;
};
const refreshImg = debounce(refresh);

const btns = document.querySelectorAll("button");

const scrollEvent = new Event("scrollComplete");

handlerScroll = ev => e => {
  //   e.preventDefault();
  if (
    ev === "wheel" &&
    !e.target.closest(".app") &&
    !e.target.closest(".middle")
  ) {
    wheel.wheel += Math.sign(e.deltaY);
    // wheel += e.deltaY;
  }
  if (Math.abs(wheel.wheel) > threshold) {
    dispatchEvent(scrollEvent);
    wheel.reset();
  }
};

const toggleDescription = () => {
  const toggle = document.querySelector(".toggle>button");
  const pToggle = document.querySelector(".toggle>p");
  toggle.addEventListener("click", () => {
    pToggle.classList.toggle("hidden");
  });
};

const render = x => {
  const obj = {
    true: {
      func: count.dec.bind(count),
      appClassListAdd: "hiddenUp",
      appClassListToggle: ["green", "colorLight", "hiddenUp"],
      refreshImg: "dark",
    },
    false: {
      func: count.inc.bind(count),
      appClassListAdd: "hiddenDown",
      appClassListToggle: ["blue", "colorDark", "hiddenDown"],
      refreshImg: "light",
    },
  };
  obj[x].func();
  app.classList.add(obj[x].appClassListAdd);
  setTimeout(() => {
    app.classList.remove(
      obj[x].appClassListToggle[0],
      obj[x].appClassListToggle[1],
      obj[x].appClassListToggle[2]
    );
    app.classList.add(
      obj[!x].appClassListToggle[0],
      obj[!x].appClassListToggle[1]
    );

    appDiv.innerHTML = texts[count.value];
    refreshImg(obj[x].refreshImg);
    thumbnailsRefresh(count.value);
    toggleDescription();
    app.classList.remove(obj[x].appClassListToggle[2]);
  }, delay);
};

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("up")) {
      wheel.wheel = 51;
      render(wheel.isPositive);
    }
    if (btn.classList.contains("down")) {
      wheel.wheel = -51;
      render(wheel.isPositive);
    }
  });
});

//------  INIT  ---------
wheel.wheel = 1;
let supportsPassive = false;
let opts = Object.defineProperty({}, "passive", {
  get: function () {
    supportsPassive = true;
  },
});
addEventListener("wheel", handlerScroll("wheel"), opts);
addEventListener("scrollComplete", () => render(wheel.isPositive));
addEventListener("chCountValue", moveFlag);
addEventListener("resize", moveFlag);
refreshImg("dark");
toggleDescription();
moveFlag(thumbs[1]);

//------ INIT -------/--------
