/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  hero.classList.add("hero");
  content.appendChild(hero);

  const heroHeader = document.createElement("h1");
  heroHeader.textContent = "Custodia Cajigas";
  hero.appendChild(heroHeader);

  const heroImageDiv = document.createElement("div");
  heroImageDiv.classList.add("image-div");
  hero.appendChild(heroImageDiv);

  const aboutPara = document.createElement("p");
  aboutPara.textContent =
    "Renowed restaurant in the center of Granada, In bussines from 1919. We cook traditional spanish meals like Gazpacho, Paella, Croquetas and many more";
  hero.appendChild(aboutPara);

  const footer = document.createElement("footer");
  content.appendChild(footer);
}

function homePageSwitch() {
  const content = document.querySelector("#content");
  const footer = document.querySelector("footer");

  const hero = document.createElement("div");
  hero.classList.add("hero");
  content.insertBefore(hero, footer);

  const heroHeader = document.createElement("h1");
  heroHeader.textContent = "Custodia Cajigas";
  hero.appendChild(heroHeader);

  const heroImageDiv = document.createElement("div");
  heroImageDiv.classList.add("image-div");
  hero.appendChild(heroImageDiv);

  const aboutPara = document.createElement("p");
  aboutPara.textContent =
    "Renowed restaurant in the center of Granada, In bussines from 1919. We cook traditional spanish meals like Gazpacho, Paella, Croquetas and many more";
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
  let headerTexts = [];
  let paraTexts = [];

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

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    containerDiv.appendChild(textDiv);
    textDivs.push(textDiv);

    const headerText = document.createElement("h2");
    textDiv.appendChild(headerText);
    headerTexts.push(headerText);

    const paraText = document.createElement("p");
    textDiv.appendChild(paraText);
    paraTexts.push(paraText);
  }

  headerTexts[0].textContent = "Paella";
  headerTexts[1].textContent = "Croquettes";
  headerTexts[2].textContent = "Gambas al pil pil";
  headerTexts[3].textContent = "Gazpacho";

  paraTexts[0].textContent =
    "Paella is regarded as one of the community's identifying symbols. It is one of the best-known dishes in Spanish cuisine. Paella is a classic Spanish rice dish made with rice, saffron, vegetables, chicken, and seafood cooked and served in one pan.";
  paraTexts[1].textContent =
    "Small fried rounds or cylinders of meat, fish, or vegetables are consumed on almost every continent in various forms.";
  paraTexts[2].textContent =
    "The history of Gambas Pil Pil is a little unclear, but it originates in either the Basque Country, Andalusia or Galicia. Made with fresh prawns cooked in oil infused with garlic and chilli and served with bread to soak up the delicious sauce.";
  paraTexts[3].textContent =
    "It originated in the southern regions of the Iberian peninsula and spread into other areas. Gazpacho is widely eaten in Spain and Portugal, particularly during hot summers, since it is refreshing and cool. Gazpacho is a cold soup and drink made of raw, blended vegetables.";

  console.log(headerTexts);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RE87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDMURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZEO0FBQzNCOztBQUVsQywwREFBZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx5REFBYztBQUNoQixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLCtDQUFRO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxIb21lUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgbGV0IGJ0bnMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnV0dG9uc1wiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidG5zLnB1c2goYnV0dG9uKTtcbiAgfVxuXG4gIGJ0bnNbMF0udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgYnRuc1sxXS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBidG5zWzJdLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XG5cbiAgY29uc3QgaGVyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVyb0hlYWRlci50ZXh0Q29udGVudCA9IFwiQ3VzdG9kaWEgQ2FqaWdhc1wiO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9IZWFkZXIpO1xuXG4gIGNvbnN0IGhlcm9JbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm9JbWFnZURpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtZGl2XCIpO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9JbWFnZURpdik7XG5cbiAgY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFib3V0UGFyYS50ZXh0Q29udGVudCA9XG4gICAgXCJSZW5vd2VkIHJlc3RhdXJhbnQgaW4gdGhlIGNlbnRlciBvZiBHcmFuYWRhLCBJbiBidXNzaW5lcyBmcm9tIDE5MTkuIFdlIGNvb2sgdHJhZGl0aW9uYWwgc3BhbmlzaCBtZWFscyBsaWtlIEdhenBhY2hvLCBQYWVsbGEsIENyb3F1ZXRhcyBhbmQgbWFueSBtb3JlXCI7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoYWJvdXRQYXJhKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZVN3aXRjaCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcblxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUoaGVybywgZm9vdGVyKTtcblxuICBjb25zdCBoZXJvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZXJvSGVhZGVyLnRleHRDb250ZW50ID0gXCJDdXN0b2RpYSBDYWppZ2FzXCI7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0hlYWRlcik7XG5cbiAgY29uc3QgaGVyb0ltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyb0ltYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1kaXZcIik7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlRGl2KTtcblxuICBjb25zdCBhYm91dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWJvdXRQYXJhLnRleHRDb250ZW50ID1cbiAgICBcIlJlbm93ZWQgcmVzdGF1cmFudCBpbiB0aGUgY2VudGVyIG9mIEdyYW5hZGEsIEluIGJ1c3NpbmVzIGZyb20gMTkxOS4gV2UgY29vayB0cmFkaXRpb25hbCBzcGFuaXNoIG1lYWxzIGxpa2UgR2F6cGFjaG8sIFBhZWxsYSwgQ3JvcXVldGFzIGFuZCBtYW55IG1vcmVcIjtcbiAgaGVyby5hcHBlbmRDaGlsZChhYm91dFBhcmEpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1lbnVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIsIFwibWVudVwiKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUoaGVybywgZm9vdGVyKTtcblxuICBsZXQgaXRlbURpdnMgPSBbXTtcbiAgbGV0IHBpY3R1cmVEaXZzID0gW107XG4gIGxldCB0ZXh0RGl2cyA9IFtdO1xuICBsZXQgaGVhZGVyVGV4dHMgPSBbXTtcbiAgbGV0IHBhcmFUZXh0cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kaXZcIik7XG4gICAgaGVyby5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgICBpdGVtRGl2cy5wdXNoKGl0ZW1EaXYpO1xuXG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1kaXZcIik7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xuXG4gICAgY29uc3QgcGljdHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGljdHVyZURpdi5jbGFzc0xpc3QuYWRkKFwicGljdHVyZS1kaXZcIik7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHBpY3R1cmVEaXYpO1xuICAgIHBpY3R1cmVEaXZzLnB1c2gocGljdHVyZURpdik7XG5cbiAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRpdlwiKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gICAgdGV4dERpdnMucHVzaCh0ZXh0RGl2KTtcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICBoZWFkZXJUZXh0cy5wdXNoKGhlYWRlclRleHQpO1xuXG4gICAgY29uc3QgcGFyYVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKHBhcmFUZXh0KTtcbiAgICBwYXJhVGV4dHMucHVzaChwYXJhVGV4dCk7XG4gIH1cblxuICBoZWFkZXJUZXh0c1swXS50ZXh0Q29udGVudCA9IFwiUGFlbGxhXCI7XG4gIGhlYWRlclRleHRzWzFdLnRleHRDb250ZW50ID0gXCJDcm9xdWV0dGVzXCI7XG4gIGhlYWRlclRleHRzWzJdLnRleHRDb250ZW50ID0gXCJHYW1iYXMgYWwgcGlsIHBpbFwiO1xuICBoZWFkZXJUZXh0c1szXS50ZXh0Q29udGVudCA9IFwiR2F6cGFjaG9cIjtcblxuICBwYXJhVGV4dHNbMF0udGV4dENvbnRlbnQgPVxuICAgIFwiUGFlbGxhIGlzIHJlZ2FyZGVkIGFzIG9uZSBvZiB0aGUgY29tbXVuaXR5J3MgaWRlbnRpZnlpbmcgc3ltYm9scy4gSXQgaXMgb25lIG9mIHRoZSBiZXN0LWtub3duIGRpc2hlcyBpbiBTcGFuaXNoIGN1aXNpbmUuIFBhZWxsYSBpcyBhIGNsYXNzaWMgU3BhbmlzaCByaWNlIGRpc2ggbWFkZSB3aXRoIHJpY2UsIHNhZmZyb24sIHZlZ2V0YWJsZXMsIGNoaWNrZW4sIGFuZCBzZWFmb29kIGNvb2tlZCBhbmQgc2VydmVkIGluIG9uZSBwYW4uXCI7XG4gIHBhcmFUZXh0c1sxXS50ZXh0Q29udGVudCA9XG4gICAgXCJTbWFsbCBmcmllZCByb3VuZHMgb3IgY3lsaW5kZXJzIG9mIG1lYXQsIGZpc2gsIG9yIHZlZ2V0YWJsZXMgYXJlIGNvbnN1bWVkIG9uIGFsbW9zdCBldmVyeSBjb250aW5lbnQgaW4gdmFyaW91cyBmb3Jtcy5cIjtcbiAgcGFyYVRleHRzWzJdLnRleHRDb250ZW50ID1cbiAgICBcIlRoZSBoaXN0b3J5IG9mIEdhbWJhcyBQaWwgUGlsIGlzIGEgbGl0dGxlIHVuY2xlYXIsIGJ1dCBpdCBvcmlnaW5hdGVzIGluIGVpdGhlciB0aGUgQmFzcXVlIENvdW50cnksIEFuZGFsdXNpYSBvciBHYWxpY2lhLiBNYWRlIHdpdGggZnJlc2ggcHJhd25zIGNvb2tlZCBpbiBvaWwgaW5mdXNlZCB3aXRoIGdhcmxpYyBhbmQgY2hpbGxpIGFuZCBzZXJ2ZWQgd2l0aCBicmVhZCB0byBzb2FrIHVwIHRoZSBkZWxpY2lvdXMgc2F1Y2UuXCI7XG4gIHBhcmFUZXh0c1szXS50ZXh0Q29udGVudCA9XG4gICAgXCJJdCBvcmlnaW5hdGVkIGluIHRoZSBzb3V0aGVybiByZWdpb25zIG9mIHRoZSBJYmVyaWFuIHBlbmluc3VsYSBhbmQgc3ByZWFkIGludG8gb3RoZXIgYXJlYXMuIEdhenBhY2hvIGlzIHdpZGVseSBlYXRlbiBpbiBTcGFpbiBhbmQgUG9ydHVnYWwsIHBhcnRpY3VsYXJseSBkdXJpbmcgaG90IHN1bW1lcnMsIHNpbmNlIGl0IGlzIHJlZnJlc2hpbmcgYW5kIGNvb2wuIEdhenBhY2hvIGlzIGEgY29sZCBzb3VwIGFuZCBkcmluayBtYWRlIG9mIHJhdywgYmxlbmRlZCB2ZWdldGFibGVzLlwiO1xuXG4gIGNvbnNvbGUubG9nKGhlYWRlclRleHRzKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdGlhbEhvbWVQYWdlLCBob21lUGFnZVN3aXRjaCB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgeyBtZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcblxuaW5pdGlhbEhvbWVQYWdlKCk7XG5cbmNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlci1idXR0b25zXCIpO1xuXG5idG5zWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9cIik7XG4gIGhlcm8ucmVtb3ZlKCk7XG5cbiAgaG9tZVBhZ2VTd2l0Y2goKTtcbn0pO1xuXG5idG5zWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9cIik7XG4gIGhlcm8ucmVtb3ZlKCk7XG5cbiAgbWVudVBhZ2UoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9