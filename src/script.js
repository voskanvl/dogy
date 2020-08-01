const texts = require("./textArray");
const data = require("./data.json");
const debounce = require("./debounce");
const threshold = 50;
const delay = 600;
let wheel = -1;

let count = {
  value: 1,
  inc() {
    console.log("inc", this.value);
    if (this.value + 1 > texts.length - 1) {
      this.value = 0;
    } else {
      this.value++;
    }
  },
  dec() {
    console.log("dec", this.value);
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
    wheel += Math.sign(e.deltaY);
    // wheel += e.deltaY;
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

const handlerScrollComplete = e => {
  console.log("handlerScrollComplete");
  render(wheel > 0);
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
