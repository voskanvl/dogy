const texts = require("./textArray");
const data = require("./data.json");
const debounce = require("./debounce");
const threshold = 80;
const delay = 600;
let wheel = -1;

let count = {
  value: 1,
  inc() {
    if (this.value + 1 > texts.length - 1) {
      this.value = 0;
    } else {
      this.value++;
    }
  },
  dec() {
    if (this.value - 1 < 0) {
      this.value = texts.length - 1;
    } else {
      this.value--;
    }
  },
};

const app = document.querySelector(".app");
const appDiv = document.querySelector(".app>div");
appDiv.innerHTML = texts[count.value];

const getImg = () => {
  return document.querySelector(".img");
};

const thumbnails = data.reduce((ac, e, i) => {
  return i === count.value
    ? ac +
        `<div class="thumbnail thumbnail-light" data-id=${i}><img src="${e.imgUrl}"/></div>`
    : ac + `<div class="thumbnail" data-id=${i}><img src="${e.imgUrl}"/></div>`;
}, "");
const middle = document.querySelector(".wrap > .middle");
middle.innerHTML = thumbnails;
const thumbs = document.querySelectorAll(".wrap > .middle > .thumbnail");

const handleThumbs = e => {
  const id = e.target.closest(".thumbnail").dataset.id;
  if (+id < count.value) {
    wheel = 51;
    count.value = +id + 1;
    handlerScrollComplete(e);
  } else {
    wheel = -51;
    count.value = +id - 1;
    handlerScrollComplete(e);
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
  const { width } = this.getBoundingClientRect();
  const percentOffsetX = Math.ceil((e.offsetX / width) * 100) - 50;
  const percentOffsetY = Math.ceil((e.offsetY / width) * 100) - 50;
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
  if (ev === "wheel" && !e.target.closest(".app")) {
    // wheel += e.deltaY;
    wheel++;
    console.log("wheel", wheel);
  }
  console.log(Math.abs(wheel), Math.abs(wheel) > threshold);
  if (Math.abs(wheel) > threshold) {
    dispatchEvent(scrollEvent);
    wheel = 0;
  }
};

let supportsPassive = false;
let opts = Object.defineProperty({}, "passive", {
  get: function () {
    supportsPassive = true;
    console.log("supportsPassive", supportsPassive);
  },
});

const toggleDescription = () => {
  const toggle = document.querySelector(".toggle>button");
  const pToggle = document.querySelector(".toggle>p");
  toggle.addEventListener("click", () => {
    pToggle.classList.toggle("hidden");
  });
};

addEventListener("wheel", handlerScroll("wheel"), opts);
// addEventListener("scroll", handlerScroll("scroll"), opts);
// addEventListener("touchmove", handlerScroll("touchmove"), opts);
const handlerScrollComplete = e => {
  console.log("handlerScrollComplete");
  if (wheel > 0) {
    count.dec();

    app.classList.add("hiddenUp");
    setTimeout(() => {
      app.classList.remove("green", "colorLight");
      app.classList.add("blue", "colorDark");
      appDiv.innerHTML = texts[count.value];
      refreshImg("dark");
      thumbnailsRefresh(count.value);
      toggleDescription();
      app.classList.remove("hiddenUp");
    }, delay);
  } else {
    count.inc();

    app.classList.add("hiddenDown");
    setTimeout(() => {
      app.classList.remove("blue", "colorDark");
      app.classList.add("green", "colorLight");
      appDiv.innerHTML = texts[count.value];
      refreshImg("light");
      thumbnailsRefresh(count.value);
      toggleDescription();
      app.classList.remove("hiddenDown");
    }, delay);
  }
};
addEventListener("scrollComplete", handlerScrollComplete);
btns.forEach(btn => {
  btn.addEventListener("click", e => {
    if (btn.classList.contains("up")) {
      wheel = 51;
      handlerScrollComplete(e);
    }
    if (btn.classList.contains("down")) {
      wheel = -51;
      handlerScrollComplete(e);
    }
  });
});

//------  rotate .img  ---------

refreshImg("dark");
toggleDescription();

//------ toggle -------/--------
