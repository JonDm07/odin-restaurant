/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
  const content = document.querySelector("#content");
  const footer = document.querySelector("footer");

  const hero = document.createElement("div");
  hero.classList.add("hero", "contact");
  content.insertBefore(hero, footer);

  let paraTextArray = [];

  for (let i = 0; i < 4; i++) {
    const div = document.createElement("div");
    div.classList.add("contact-div");
    hero.appendChild(div);

    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.textContent = `Random Person ${i + 1}`;

    const paraText = document.createElement("p");
    div.appendChild(paraText);
    paraTextArray.push(paraText);

    const anotherText = document.createElement("p");
    div.appendChild(anotherText);
    anotherText.textContent = `Random Adress ${i + 1}`;
  }
  paraTextArray[0].textContent = "Phone number: +34 722220826";
  paraTextArray[1].textContent = "Phone number: +34 787526484";
  paraTextArray[2].textContent = "Phone number: +34 761584814";
  paraTextArray[3].textContent = "Phone number: +34 761215486";
}


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePageSwitch": () => (/* binding */ homePageSwitch),
/* harmony export */   "initialHomePage": () => (/* binding */ initialHomePage)
/* harmony export */ });
const restaurantName = "Random restaurant name";
const paraText = "Random restaurant invitation and description text";

function initialHomePage() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");

  content.appendChild(header);

  let btns = [];

  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    button.classList.add("header-buttons");
    header.appendChild(button);
    btns.push(button);
  }

  btns[0].textContent = "Home";
  btns[1].textContent = "Menu";
  btns[2].textContent = "Contact";

  const hero = document.createElement("div");
  hero.classList.add("hero", "home");
  content.appendChild(hero);

  const heroHeader = document.createElement("h1");
  heroHeader.textContent = restaurantName;
  hero.appendChild(heroHeader);

  const heroImageDiv = document.createElement("div");
  heroImageDiv.classList.add("image-div");
  hero.appendChild(heroImageDiv);
  heroImageDiv.textContent = "Random restaurant image";

  const aboutPara = document.createElement("p");
  aboutPara.textContent = paraText;
  hero.appendChild(aboutPara);

  const footer = document.createElement("footer");
  content.appendChild(footer);
}

function homePageSwitch() {
  const content = document.querySelector("#content");
  const footer = document.querySelector("footer");

  const hero = document.createElement("div");
  hero.classList.add("hero", "home");
  content.insertBefore(hero, footer);

  const heroHeader = document.createElement("h1");
  heroHeader.textContent = restaurantName;
  hero.appendChild(heroHeader);

  const heroImageDiv = document.createElement("div");
  heroImageDiv.classList.add("image-div");
  hero.appendChild(heroImageDiv);
  heroImageDiv.textContent = "Random restaurant image";

  const aboutPara = document.createElement("p");
  aboutPara.textContent = paraText;
  hero.appendChild(aboutPara);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
function menuPage() {
  const content = document.querySelector("#content");
  const footer = document.querySelector("footer");

  const hero = document.createElement("div");
  hero.classList.add("hero", "menu");
  content.insertBefore(hero, footer);

  let itemDivs = [];
  let pictureDivs = [];
  let textDivs = [];

  for (let i = 0; i < 4; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item-div");
    hero.appendChild(itemDiv);
    itemDivs.push(itemDiv);

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container-div");
    itemDiv.appendChild(containerDiv);

    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("picture-div");
    containerDiv.appendChild(pictureDiv);
    pictureDivs.push(pictureDiv);

    const pictureText = document.createElement("p");
    pictureDiv.appendChild(pictureText);
    pictureText.textContent = `Random Picture ${i + 1}`;

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    containerDiv.appendChild(textDiv);
    textDivs.push(textDiv);

    const headerText = document.createElement("h2");
    textDiv.appendChild(headerText);
    headerText.textContent = `Random food ${i + 1}`;

    const paraText = document.createElement("p");
    textDiv.appendChild(paraText);
    paraText.textContent = `Random Food Description ${i + 1}`;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.initialHomePage)();

const btns = document.querySelectorAll(".header-buttons");

btns[0].addEventListener("click", () => {
  const hero = document.querySelector(".hero");
  hero.remove();

  (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homePageSwitch)();
});

btns[1].addEventListener("click", () => {
  const hero = document.querySelector(".hero");
  hero.remove();

  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuPage)();

});

btns[2].addEventListener('click', () => {
  const hero = document.querySelector(".hero");
  hero.remove();

  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactPage)()
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsTUFBTTs7QUFFNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsTUFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRE87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxNQUFNOztBQUVsRDtBQUNBO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQ7QUFDQTs7Ozs7OztVQzVDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkQ7QUFDM0I7QUFDTTs7QUFFeEMsMERBQWU7O0FBRWY7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUseURBQWM7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwrQ0FBUTs7QUFFVixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHFEQUFXO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIsIFwiY29udGFjdFwiKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUoaGVybywgZm9vdGVyKTtcblxuICBsZXQgcGFyYVRleHRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZGl2XCIpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBgUmFuZG9tIFBlcnNvbiAke2kgKyAxfWA7XG5cbiAgICBjb25zdCBwYXJhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhVGV4dCk7XG4gICAgcGFyYVRleHRBcnJheS5wdXNoKHBhcmFUZXh0KTtcblxuICAgIGNvbnN0IGFub3RoZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFub3RoZXJUZXh0KTtcbiAgICBhbm90aGVyVGV4dC50ZXh0Q29udGVudCA9IGBSYW5kb20gQWRyZXNzICR7aSArIDF9YDtcbiAgfVxuICBwYXJhVGV4dEFycmF5WzBdLnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXI6ICszNCA3MjIyMjA4MjZcIjtcbiAgcGFyYVRleHRBcnJheVsxXS50ZXh0Q29udGVudCA9IFwiUGhvbmUgbnVtYmVyOiArMzQgNzg3NTI2NDg0XCI7XG4gIHBhcmFUZXh0QXJyYXlbMl0udGV4dENvbnRlbnQgPSBcIlBob25lIG51bWJlcjogKzM0IDc2MTU4NDgxNFwiO1xuICBwYXJhVGV4dEFycmF5WzNdLnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXI6ICszNCA3NjEyMTU0ODZcIjtcbn1cbiIsImNvbnN0IHJlc3RhdXJhbnROYW1lID0gXCJSYW5kb20gcmVzdGF1cmFudCBuYW1lXCI7XG5jb25zdCBwYXJhVGV4dCA9IFwiUmFuZG9tIHJlc3RhdXJhbnQgaW52aXRhdGlvbiBhbmQgZGVzY3JpcHRpb24gdGV4dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbEhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBsZXQgYnRucyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImhlYWRlci1idXR0b25zXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ0bnMucHVzaChidXR0b24pO1xuICB9XG5cbiAgYnRuc1swXS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBidG5zWzFdLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGJ0bnNbMl0udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiLCBcImhvbWVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XG5cbiAgY29uc3QgaGVyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVyb0hlYWRlci50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnROYW1lO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9IZWFkZXIpO1xuXG4gIGNvbnN0IGhlcm9JbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm9JbWFnZURpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtZGl2XCIpO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9JbWFnZURpdik7XG4gIGhlcm9JbWFnZURpdi50ZXh0Q29udGVudCA9IFwiUmFuZG9tIHJlc3RhdXJhbnQgaW1hZ2VcIjtcblxuICBjb25zdCBhYm91dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWJvdXRQYXJhLnRleHRDb250ZW50ID0gcGFyYVRleHQ7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoYWJvdXRQYXJhKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZVN3aXRjaCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcblxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiLCBcImhvbWVcIik7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGhlcm8sIGZvb3Rlcik7XG5cbiAgY29uc3QgaGVyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVyb0hlYWRlci50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnROYW1lO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9IZWFkZXIpO1xuXG4gIGNvbnN0IGhlcm9JbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm9JbWFnZURpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtZGl2XCIpO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9JbWFnZURpdik7XG4gIGhlcm9JbWFnZURpdi50ZXh0Q29udGVudCA9IFwiUmFuZG9tIHJlc3RhdXJhbnQgaW1hZ2VcIjtcblxuICBjb25zdCBhYm91dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWJvdXRQYXJhLnRleHRDb250ZW50ID0gcGFyYVRleHQ7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoYWJvdXRQYXJhKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtZW51UGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcblxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiLCBcIm1lbnVcIik7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGhlcm8sIGZvb3Rlcik7XG5cbiAgbGV0IGl0ZW1EaXZzID0gW107XG4gIGxldCBwaWN0dXJlRGl2cyA9IFtdO1xuICBsZXQgdGV4dERpdnMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGl2XCIpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgaXRlbURpdnMucHVzaChpdGVtRGl2KTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItZGl2XCIpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcblxuICAgIGNvbnN0IHBpY3R1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpY3R1cmVEaXYuY2xhc3NMaXN0LmFkZChcInBpY3R1cmUtZGl2XCIpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChwaWN0dXJlRGl2KTtcbiAgICBwaWN0dXJlRGl2cy5wdXNoKHBpY3R1cmVEaXYpO1xuXG4gICAgY29uc3QgcGljdHVyZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaWN0dXJlRGl2LmFwcGVuZENoaWxkKHBpY3R1cmVUZXh0KTtcbiAgICBwaWN0dXJlVGV4dC50ZXh0Q29udGVudCA9IGBSYW5kb20gUGljdHVyZSAke2kgKyAxfWA7XG5cbiAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRpdlwiKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gICAgdGV4dERpdnMucHVzaCh0ZXh0RGl2KTtcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gYFJhbmRvbSBmb29kICR7aSArIDF9YDtcblxuICAgIGNvbnN0IHBhcmFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChwYXJhVGV4dCk7XG4gICAgcGFyYVRleHQudGV4dENvbnRlbnQgPSBgUmFuZG9tIEZvb2QgRGVzY3JpcHRpb24gJHtpICsgMX1gO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxIb21lUGFnZSwgaG9tZVBhZ2VTd2l0Y2ggfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0IHsgbWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuaW5pdGlhbEhvbWVQYWdlKCk7XG5cbmNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlci1idXR0b25zXCIpO1xuXG5idG5zWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9cIik7XG4gIGhlcm8ucmVtb3ZlKCk7XG5cbiAgaG9tZVBhZ2VTd2l0Y2goKTtcbn0pO1xuXG5idG5zWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9cIik7XG4gIGhlcm8ucmVtb3ZlKCk7XG5cbiAgbWVudVBhZ2UoKTtcblxufSk7XG5cbmJ0bnNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9cIik7XG4gIGhlcm8ucmVtb3ZlKCk7XG5cbiAgY29udGFjdFBhZ2UoKVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==