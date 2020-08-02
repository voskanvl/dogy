/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"По характеру это просто большой и добрый щенок. Любит активные игры на природе и отлично впишется в будни загородной жизни. Люку нужен уверенный хозяин, который будет готов пройти с ним небольшой курс дрессировки. Люк с радостью обучается и уже знает базовые команды! Здоров, привит, есть ветпаспорт. Приучен к двухразовому выгулу, питается качественным сухим кормом. Хорошо ездит в автомобиле. 👑\\\",\\\"name\\\":\\\"Rex\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1596127399146-0996705e6a47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"активный и жизнерадостный мальчишка около трёх лет. Обожает подолгу гулять, также ему очень важно внимание человека - обожает обниматься и ласкаться. Не агрессивный, никогда не полезет к другим собакам сам, но в случае опасности может за себя постоять. Умеет ходить как просто на поводке, так и на шлейке. Приезжайте знакомиться!\\\",\\\"name\\\":\\\"Bob\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"Это Барсик. Игривый, добродушный пес. С ним Вы точно не будете скучать\\\",\\\"name\\\":\\\"Bars\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80\\\",\\\"title\\\":\\\"Очень веселый, общительный, но немного робкий с людьми. Парню около 2 лет, легко поддается дрессировке. В нём нет ни капли агрессии и он подходит для семьи с детьми и другими животными. Волк отлично ходит на поводке. В хорошей физической форме и любит длительные прогулки. В уходе Изюм неприхотлив, за шерстью очень просто ухаживать, линька проходит без проблем — идеальный вариант для квартиры.\\\",\\\"name\\\":\\\"Wolf\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"Просто потрясный дружище! Он молод, хорош собой, но прямо как в американской мелодраме – не такой, как все…. У Щарика родовая травма - задняя лапка у него не гнется, но видели бы вы, как он делает «ножкой, ээээть».  Лапчатая особенность совершенно не мешает ему радоваться жизни, играть, веселиться и делать «ножкой, ээээть»  Шар отлично ладит с людьми, собаками, котиками, поговаривают, он даже с мышами обходительно себя ведет. В силу юности, Шар иногда может подхулиганить в доме, в котором любезно согласился временно пожить, но мы уверены, что это он просто так заигрывает, на самом деле он – примерный мальчик.\\\",\\\"name\\\":\\\"Sphere\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"Именно тот, кто находится в поисках своих новых мам и пап, способных оценить тот набор качеств, присущих нашему подопечному: доброта, искренность, игривость и такая детская непосредственность. Мы не сомневаемся, что, благодаря своей находчивости и природной сообразительности, он освоит любые команды. Малыш прекрасно ходит на поводке, что позволит ему быть идеальным спутником для своего нового двуногого друга. При встрече вас ждут игривые глазки, вечно следящие за каждым шагом и болтающиеся ушки на ветру. По первости наш мальчик будет скромненьким, но время творит чудеса, ему необходимо привыкнуть к человеку, чтобы довериться. \\\",\\\"name\\\":\\\"Spooky\\\"}]\");\n\n//# sourceURL=webpack:///./src/data.json?");

/***/ }),

/***/ "./src/debounce.js":
/*!*************************!*\
  !*** ./src/debounce.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function debounce(func, time = 500) {\n  let called = false;\n  return function () {\n    if (!called) {\n      func.apply(this, arguments);\n      called = true;\n      setTimeout(() => {\n        called = false;\n      }, time);\n    }\n  };\n};\n\n\n//# sourceURL=webpack:///./src/debounce.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const texts = __webpack_require__(/*! ./textArray */ \"./src/textArray.js\");\nconst data = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\nconst debounce = __webpack_require__(/*! ./debounce */ \"./src/debounce.js\");\nconst threshold = 50;\nconst delay = 600;\n\nconst chCountValue = new Event(\"chCountValue\");\nconst valOverflow = new Event(\"valOverflow\");\n\nconst wheel = {\n  get wheel() {\n    return this._wheel;\n  },\n  set wheel(x) {\n    if (this._wheel <= threshold) {\n      this._wheel = x;\n    } else {\n      this._wheel = x;\n      dispatchEvent(valOverflow);\n    }\n  },\n  reset() {\n    this._wheel = 0;\n  },\n  get isPositive() {\n    return this._wheel > 0;\n  },\n};\nconst count = {\n  value: 1,\n  inc() {\n    if (this.value + 1 > texts.length - 1) {\n      this.value = 0;\n    } else {\n      this.value++;\n    }\n    dispatchEvent(chCountValue);\n  },\n  dec() {\n    if (this.value - 1 < 0) {\n      this.value = texts.length - 1;\n    } else {\n      this.value--;\n    }\n    dispatchEvent(chCountValue);\n  },\n};\n\nconst app = document.querySelector(\".app\");\nconst appDiv = document.querySelector(\".app>div\");\nappDiv.innerHTML = texts[count.value];\n\nconst getImg = () => {\n  return document.querySelector(\".img\");\n};\n\nconst moveFlag = () => {\n  const el = thumbs[count.value].querySelector(\"img\");\n  const flag = document.querySelector(\".flag\");\n  const { top, height, left, width } = el.getBoundingClientRect();\n  const moveFlagX = top + height / 3;\n  const moveFlagY = left + width;\n\n  flag.style.top = moveFlagX + \"px\";\n  flag.style.left = moveFlagY * 0.94 + \"px\";\n  console.log(\"x\", top, height);\n};\n\nconst thumbnails = data.reduce((ac, e, i) => {\n  return i === count.value\n    ? ac +\n        `<div class=\"thumbnail thumbnail-light\" data-id=${i}><img src=\"${e.imgUrl}\"/></div>`\n    : ac + `<div class=\"thumbnail\" data-id=${i}><img src=\"${e.imgUrl}\"/></div>`;\n}, \"\");\nconst middle = document.querySelector(\".wrap > .middle\");\nmiddle.innerHTML = `<div class=\"flag\">🦴</div>` + thumbnails;\nconst thumbs = document.querySelectorAll(\".wrap > .middle > .thumbnail\");\n\nconst handleThumbs = e => {\n  const id = e.target.closest(\".thumbnail\").dataset.id;\n  if (+id < count.value) {\n    wheel.wheel = 51;\n    count.value = +id + 1;\n    render(wheel.isPositive);\n    moveFlag();\n  } else {\n    wheel.wheel = -51;\n    count.value = +id - 1;\n    render(wheel.isPositive);\n    moveFlag();\n  }\n};\n\nthumbs.forEach(e => {\n  e.addEventListener(\"click\", handleThumbs);\n});\n\nconst thumbnailsRefresh = index => {\n  const thumbs = document.querySelectorAll(\".wrap > .middle > .thumbnail\");\n  thumbs.forEach((e, i) => {\n    e.classList.remove(\"thumbnail-light\");\n    if (e.dataset.id == index) e.classList.add(\"thumbnail-light\");\n  });\n};\n\nfunction rotateImg(e) {\n  const ampRotateX = 12;\n  const ampRotateY = 6;\n  const maxSize = 2;\n  const { width, height } = this.getBoundingClientRect();\n  const percentOffsetX = Math.ceil((e.offsetX / width) * 100) - 50;\n  const percentOffsetY = Math.ceil((e.offsetY / height) * 100) - 50;\n  const rotateX = (ampRotateX * percentOffsetX * 2) / 100;\n  const rotateY = (ampRotateY * percentOffsetY * 2) / 100;\n  this.style.transform = `rotateY(${rotateX}deg) rotateX(${rotateY}deg) translateZ(-40px)`;\n\n  const blick = this.querySelector(\".blick\");\n  blick.style.transform = `translate(${percentOffsetX}%,${percentOffsetY}%) scale(${\n    Math.abs(percentOffsetX) / 100 + 1\n  })`;\n}\n\nconst refresh = theme => {\n  const clr = {\n    light: \"#ddd\",\n    dark: \"#222\",\n  };\n  console.log(theme, clr[theme]);\n  const img = getImg();\n  img.addEventListener(\"mousemove\", rotateImg.bind(img));\n  img.style.boxShadow = `0 40px 28px -20px ${clr[theme]}`;\n};\nconst refreshImg = debounce(refresh);\n\nconst btns = document.querySelectorAll(\"button\");\n\nconst scrollEvent = new Event(\"scrollComplete\");\n\nhandlerScroll = ev => e => {\n  //   e.preventDefault();\n  if (\n    ev === \"wheel\" &&\n    !e.target.closest(\".app\") &&\n    !e.target.closest(\".middle\")\n  ) {\n    wheel.wheel += Math.sign(e.deltaY);\n    // wheel += e.deltaY;\n  }\n  if (Math.abs(wheel.wheel) > threshold) {\n    dispatchEvent(scrollEvent);\n    wheel.reset();\n  }\n};\n\nconst toggleDescription = () => {\n  const toggle = document.querySelector(\".toggle>button\");\n  const pToggle = document.querySelector(\".toggle>p\");\n  toggle.addEventListener(\"click\", () => {\n    pToggle.classList.toggle(\"hidden\");\n  });\n};\n\nconst render = x => {\n  const obj = {\n    true: {\n      func: count.dec.bind(count),\n      appClassListAdd: \"hiddenUp\",\n      appClassListToggle: [\"green\", \"colorLight\", \"hiddenUp\"],\n      refreshImg: \"dark\",\n    },\n    false: {\n      func: count.inc.bind(count),\n      appClassListAdd: \"hiddenDown\",\n      appClassListToggle: [\"blue\", \"colorDark\", \"hiddenDown\"],\n      refreshImg: \"light\",\n    },\n  };\n  obj[x].func();\n  app.classList.add(obj[x].appClassListAdd);\n  setTimeout(() => {\n    app.classList.remove(\n      obj[x].appClassListToggle[0],\n      obj[x].appClassListToggle[1],\n      obj[x].appClassListToggle[2]\n    );\n    app.classList.add(\n      obj[!x].appClassListToggle[0],\n      obj[!x].appClassListToggle[1]\n    );\n\n    appDiv.innerHTML = texts[count.value];\n    refreshImg(obj[x].refreshImg);\n    thumbnailsRefresh(count.value);\n    toggleDescription();\n    app.classList.remove(obj[x].appClassListToggle[2]);\n  }, delay);\n};\n\nbtns.forEach(btn => {\n  btn.addEventListener(\"click\", () => {\n    if (btn.classList.contains(\"up\")) {\n      wheel.wheel = 51;\n      render(wheel.isPositive);\n    }\n    if (btn.classList.contains(\"down\")) {\n      wheel.wheel = -51;\n      render(wheel.isPositive);\n    }\n  });\n});\n\n//------  INIT  ---------\nwheel.wheel = 1;\nlet supportsPassive = false;\nlet opts = Object.defineProperty({}, \"passive\", {\n  get: function () {\n    supportsPassive = true;\n  },\n});\naddEventListener(\"wheel\", handlerScroll(\"wheel\"), opts);\naddEventListener(\"scrollComplete\", () => render(wheel.isPositive));\naddEventListener(\"chCountValue\", moveFlag);\naddEventListener(\"resize\", moveFlag);\nrefreshImg(\"dark\");\ntoggleDescription();\nmoveFlag(thumbs[1]);\n\n//------ INIT -------/--------\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/textArray.js":
/*!**************************!*\
  !*** ./src/textArray.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const data = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\nconst template = (imgUrl, index, title, name) => `<div>\n<div class=\"img\">\n  <img src=\"${imgUrl}\"/>\n  <div class=\"blick\">\n      <div class=\"spot\"></div>\n  </div>\n  </div>\n<div class=\"toggle\">\n  <button>${name}</button>\n  <p class=\"hidden\">\n    ${index}. ${title}\n  </p>\n</div>\n</div>`;\n\nmodule.exports = data.map((e, i) => template(e.imgUrl, i, e.title, e.name));\n\n\n//# sourceURL=webpack:///./src/textArray.js?");

/***/ })

/******/ });