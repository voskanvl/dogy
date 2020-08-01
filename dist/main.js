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

eval("module.exports = JSON.parse(\"[{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"When you run watch inside the editor, you get the added bonus that console.log shows up in the output for easy debugging. 💥\\\",\\\"name\\\":\\\"Rex\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1596127399146-0996705e6a47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred\\\",\\\"name\\\":\\\"Bob\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"Это Барсик. Игривый, добродушный пес. С ним Вы точно не будете скучать\\\",\\\"name\\\":\\\"Bars\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80\\\",\\\"title\\\":\\\"This option, if supplied, is called as verify(req, res, buf, encoding), where buf is a Buffer of the raw request body and encoding is the encoding of the request. The parsing can be aborted by throwing an error\\\",\\\"name\\\":\\\"Wolf\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"Preserve the req.params values from the parent router. If the parent and the child have conflicting param names, the child’s value take precedence.\\\",\\\"name\\\":\\\"Sphere\\\"},{\\\"imgUrl\\\":\\\"https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\\\",\\\"title\\\":\\\"The root argument specifies the root directory from which to serve static assets. The function determines the file to serve by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, it instead calls next() to move on to the next middleware, allowing for stacking and fall-backs.\\\",\\\"name\\\":\\\"Spooky\\\"}]\");\n\n//# sourceURL=webpack:///./src/data.json?");

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

eval("const texts = __webpack_require__(/*! ./textArray */ \"./src/textArray.js\");\nconst data = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\nconst debounce = __webpack_require__(/*! ./debounce */ \"./src/debounce.js\");\nconst threshold = 80;\nconst delay = 600;\nlet wheel = -1;\n\nlet count = {\n  value: 1,\n  inc() {\n    if (this.value + 1 > texts.length - 1) {\n      this.value = 0;\n    } else {\n      this.value++;\n    }\n  },\n  dec() {\n    if (this.value - 1 < 0) {\n      this.value = texts.length - 1;\n    } else {\n      this.value--;\n    }\n  },\n};\n\nconst app = document.querySelector(\".app\");\nconst appDiv = document.querySelector(\".app>div\");\nappDiv.innerHTML = texts[count.value];\n\nconst getImg = () => {\n  return document.querySelector(\".img\");\n};\n\nconst thumbnails = data.reduce((ac, e, i) => {\n  return i === count.value\n    ? ac +\n        `<div class=\"thumbnail thumbnail-light\" data-id=${i}><img src=\"${e.imgUrl}\"/></div>`\n    : ac + `<div class=\"thumbnail\" data-id=${i}><img src=\"${e.imgUrl}\"/></div>`;\n}, \"\");\nconst middle = document.querySelector(\".wrap > .middle\");\nmiddle.innerHTML = thumbnails;\nconst thumbs = document.querySelectorAll(\".wrap > .middle > .thumbnail\");\n\nconst handleThumbs = e => {\n  const id = e.target.closest(\".thumbnail\").dataset.id;\n  if (+id < count.value) {\n    wheel = 51;\n    count.value = +id + 1;\n    handlerScrollComplete(e);\n  } else {\n    wheel = -51;\n    count.value = +id - 1;\n    handlerScrollComplete(e);\n  }\n};\nthumbs.forEach(e => {\n  e.addEventListener(\"click\", handleThumbs);\n});\n\nconst thumbnailsRefresh = index => {\n  const thumbs = document.querySelectorAll(\".wrap > .middle > .thumbnail\");\n  thumbs.forEach((e, i) => {\n    e.classList.remove(\"thumbnail-light\");\n    if (e.dataset.id == index) e.classList.add(\"thumbnail-light\");\n  });\n};\n\nfunction rotateImg(e) {\n  const ampRotateX = 12;\n  const ampRotateY = 6;\n  const maxSize = 2;\n  const { width } = this.getBoundingClientRect();\n  const percentOffsetX = Math.ceil((e.offsetX / width) * 100) - 50;\n  const percentOffsetY = Math.ceil((e.offsetY / width) * 100) - 50;\n  const rotateX = (ampRotateX * percentOffsetX * 2) / 100;\n  const rotateY = (ampRotateY * percentOffsetY * 2) / 100;\n  this.style.transform = `rotateY(${rotateX}deg) rotateX(${rotateY}deg) translateZ(-40px)`;\n\n  const blick = this.querySelector(\".blick\");\n  blick.style.transform = `translate(${percentOffsetX}%,${percentOffsetY}%) scale(${\n    Math.abs(percentOffsetX) / 100 + 1\n  })`;\n}\n\nconst refresh = theme => {\n  const clr = {\n    light: \"#ddd\",\n    dark: \"#222\",\n  };\n  console.log(theme, clr[theme]);\n  const img = getImg();\n  img.addEventListener(\"mousemove\", rotateImg.bind(img));\n  img.style.boxShadow = `0 40px 28px -20px ${clr[theme]}`;\n};\nconst refreshImg = debounce(refresh);\n\nconst btns = document.querySelectorAll(\"button\");\n\nconst scrollEvent = new Event(\"scrollComplete\");\n\nhandlerScroll = ev => e => {\n  //   e.preventDefault();\n  if (ev === \"wheel\" && !e.target.closest(\".app\")) {\n    // wheel += e.deltaY;\n    wheel++;\n    console.log(\"wheel\", wheel);\n  }\n  console.log(Math.abs(wheel), Math.abs(wheel) > threshold);\n  if (Math.abs(wheel) > threshold) {\n    dispatchEvent(scrollEvent);\n    wheel = 0;\n  }\n};\n\nlet supportsPassive = false;\nlet opts = Object.defineProperty({}, \"passive\", {\n  get: function () {\n    supportsPassive = true;\n    console.log(\"supportsPassive\", supportsPassive);\n  },\n});\n\nconst toggleDescription = () => {\n  const toggle = document.querySelector(\".toggle>button\");\n  const pToggle = document.querySelector(\".toggle>p\");\n  toggle.addEventListener(\"click\", () => {\n    pToggle.classList.toggle(\"hidden\");\n  });\n};\n\naddEventListener(\"wheel\", handlerScroll(\"wheel\"), opts);\n// addEventListener(\"scroll\", handlerScroll(\"scroll\"), opts);\n// addEventListener(\"touchmove\", handlerScroll(\"touchmove\"), opts);\nconst handlerScrollComplete = e => {\n  console.log(\"handlerScrollComplete\");\n  if (wheel > 0) {\n    count.dec();\n\n    app.classList.add(\"hiddenUp\");\n    setTimeout(() => {\n      app.classList.remove(\"green\", \"colorLight\");\n      app.classList.add(\"blue\", \"colorDark\");\n      appDiv.innerHTML = texts[count.value];\n      refreshImg(\"dark\");\n      thumbnailsRefresh(count.value);\n      toggleDescription();\n      app.classList.remove(\"hiddenUp\");\n    }, delay);\n  } else {\n    count.inc();\n\n    app.classList.add(\"hiddenDown\");\n    setTimeout(() => {\n      app.classList.remove(\"blue\", \"colorDark\");\n      app.classList.add(\"green\", \"colorLight\");\n      appDiv.innerHTML = texts[count.value];\n      refreshImg(\"light\");\n      thumbnailsRefresh(count.value);\n      toggleDescription();\n      app.classList.remove(\"hiddenDown\");\n    }, delay);\n  }\n};\naddEventListener(\"scrollComplete\", handlerScrollComplete);\nbtns.forEach(btn => {\n  btn.addEventListener(\"click\", e => {\n    if (btn.classList.contains(\"up\")) {\n      wheel = 51;\n      handlerScrollComplete(e);\n    }\n    if (btn.classList.contains(\"down\")) {\n      wheel = -51;\n      handlerScrollComplete(e);\n    }\n  });\n});\n\n//------  rotate .img  ---------\n\nrefreshImg(\"dark\");\ntoggleDescription();\n\n//------ toggle -------/--------\n\n\n//# sourceURL=webpack:///./src/script.js?");

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