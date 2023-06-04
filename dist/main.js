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
/* harmony export */   contactPage: () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
    const content = document.querySelector("#content");
    const footer = document.querySelector("footer");

    const hero = document.createElement("div");
    hero.classList.add("hero", "contact");
    content.insertBefore(hero, footer);

    let divsArray =  []
    let h3Array = []
    let paraTextArray = []

    for(let i = 0; i < 4; i++) {
        const div = document.createElement('div')
        div.classList.add('contact-div')
        hero.appendChild(div)
        divsArray.push(div)

        const h3 = document.createElement('h3')
        div.appendChild(h3)
        h3Array.push(h3)

        const paraText = document.createElement('p')
        div.appendChild(paraText)
        paraTextArray.push(paraText)
    }

    h3Array[0].textContent = 'Hello Nicole!'
    h3Array[1].textContent = '!Hola Nicole!'
    h3Array[2].textContent = 'Hello Alejandra!'
    h3Array[3].textContent = 'Hola Alejandra!'

    paraTextArray[0].textContent = 'Phone number: +34 722220826'
    paraTextArray[1].textContent = 'Phone number: +34 787526484'
    paraTextArray[2].textContent = 'Phone number: +34 761584814'
    paraTextArray[3].textContent = 'Phone number: +34 761215486'


}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePageSwitch: () => (/* binding */ homePageSwitch),
/* harmony export */   initialHomePage: () => (/* binding */ initialHomePage)
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
/* harmony export */   menuPage: () => (/* binding */ menuPage)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RE87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDMURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042RDtBQUMzQjtBQUNNOztBQUV4QywwREFBZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx5REFBYztBQUNoQixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLCtDQUFROztBQUVWLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLEVBQUUscURBQVc7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiLCBcImNvbnRhY3RcIik7XG4gICAgY29udGVudC5pbnNlcnRCZWZvcmUoaGVybywgZm9vdGVyKTtcblxuICAgIGxldCBkaXZzQXJyYXkgPSAgW11cbiAgICBsZXQgaDNBcnJheSA9IFtdXG4gICAgbGV0IHBhcmFUZXh0QXJyYXkgPSBbXVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kaXYnKVxuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgZGl2c0FycmF5LnB1c2goZGl2KVxuXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpXG4gICAgICAgIGgzQXJyYXkucHVzaChoMylcblxuICAgICAgICBjb25zdCBwYXJhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocGFyYVRleHQpXG4gICAgICAgIHBhcmFUZXh0QXJyYXkucHVzaChwYXJhVGV4dClcbiAgICB9XG5cbiAgICBoM0FycmF5WzBdLnRleHRDb250ZW50ID0gJ0hlbGxvIE5pY29sZSEnXG4gICAgaDNBcnJheVsxXS50ZXh0Q29udGVudCA9ICchSG9sYSBOaWNvbGUhJ1xuICAgIGgzQXJyYXlbMl0udGV4dENvbnRlbnQgPSAnSGVsbG8gQWxlamFuZHJhISdcbiAgICBoM0FycmF5WzNdLnRleHRDb250ZW50ID0gJ0hvbGEgQWxlamFuZHJhISdcblxuICAgIHBhcmFUZXh0QXJyYXlbMF0udGV4dENvbnRlbnQgPSAnUGhvbmUgbnVtYmVyOiArMzQgNzIyMjIwODI2J1xuICAgIHBhcmFUZXh0QXJyYXlbMV0udGV4dENvbnRlbnQgPSAnUGhvbmUgbnVtYmVyOiArMzQgNzg3NTI2NDg0J1xuICAgIHBhcmFUZXh0QXJyYXlbMl0udGV4dENvbnRlbnQgPSAnUGhvbmUgbnVtYmVyOiArMzQgNzYxNTg0ODE0J1xuICAgIHBhcmFUZXh0QXJyYXlbM10udGV4dENvbnRlbnQgPSAnUGhvbmUgbnVtYmVyOiArMzQgNzYxMjE1NDg2J1xuXG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gaW5pdGlhbEhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBsZXQgYnRucyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImhlYWRlci1idXR0b25zXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ0bnMucHVzaChidXR0b24pO1xuICB9XG5cbiAgYnRuc1swXS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBidG5zWzFdLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGJ0bnNbMl0udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKTtcblxuICBjb25zdCBoZXJvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZXJvSGVhZGVyLnRleHRDb250ZW50ID0gXCJDdXN0b2RpYSBDYWppZ2FzXCI7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0hlYWRlcik7XG5cbiAgY29uc3QgaGVyb0ltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyb0ltYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1kaXZcIik7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlRGl2KTtcblxuICBjb25zdCBhYm91dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWJvdXRQYXJhLnRleHRDb250ZW50ID1cbiAgICBcIlJlbm93ZWQgcmVzdGF1cmFudCBpbiB0aGUgY2VudGVyIG9mIEdyYW5hZGEsIEluIGJ1c3NpbmVzIGZyb20gMTkxOS4gV2UgY29vayB0cmFkaXRpb25hbCBzcGFuaXNoIG1lYWxzIGxpa2UgR2F6cGFjaG8sIFBhZWxsYSwgQ3JvcXVldGFzIGFuZCBtYW55IG1vcmVcIjtcbiAgaGVyby5hcHBlbmRDaGlsZChhYm91dFBhcmEpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlU3dpdGNoKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuICBjb250ZW50Lmluc2VydEJlZm9yZShoZXJvLCBmb290ZXIpO1xuXG4gIGNvbnN0IGhlcm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlcm9IZWFkZXIudGV4dENvbnRlbnQgPSBcIkN1c3RvZGlhIENhamlnYXNcIjtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvSGVhZGVyKTtcblxuICBjb25zdCBoZXJvSW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvSW1hZ2VEaXYuY2xhc3NMaXN0LmFkZChcImltYWdlLWRpdlwiKTtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvSW1hZ2VEaXYpO1xuXG4gIGNvbnN0IGFib3V0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhYm91dFBhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiUmVub3dlZCByZXN0YXVyYW50IGluIHRoZSBjZW50ZXIgb2YgR3JhbmFkYSwgSW4gYnVzc2luZXMgZnJvbSAxOTE5LiBXZSBjb29rIHRyYWRpdGlvbmFsIHNwYW5pc2ggbWVhbHMgbGlrZSBHYXpwYWNobywgUGFlbGxhLCBDcm9xdWV0YXMgYW5kIG1hbnkgbW9yZVwiO1xuICBoZXJvLmFwcGVuZENoaWxkKGFib3V0UGFyYSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIiwgXCJtZW51XCIpO1xuICBjb250ZW50Lmluc2VydEJlZm9yZShoZXJvLCBmb290ZXIpO1xuXG4gIGxldCBpdGVtRGl2cyA9IFtdO1xuICBsZXQgcGljdHVyZURpdnMgPSBbXTtcbiAgbGV0IHRleHREaXZzID0gW107XG4gIGxldCBoZWFkZXJUZXh0cyA9IFtdO1xuICBsZXQgcGFyYVRleHRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRpdlwiKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICAgIGl0ZW1EaXZzLnB1c2goaXRlbURpdik7XG5cbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWRpdlwiKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XG5cbiAgICBjb25zdCBwaWN0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaWN0dXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlLWRpdlwiKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocGljdHVyZURpdik7XG4gICAgcGljdHVyZURpdnMucHVzaChwaWN0dXJlRGl2KTtcblxuICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZChcInRleHQtZGl2XCIpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbiAgICB0ZXh0RGl2cy5wdXNoKHRleHREaXYpO1xuXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgIGhlYWRlclRleHRzLnB1c2goaGVhZGVyVGV4dCk7XG5cbiAgICBjb25zdCBwYXJhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQocGFyYVRleHQpO1xuICAgIHBhcmFUZXh0cy5wdXNoKHBhcmFUZXh0KTtcbiAgfVxuXG4gIGhlYWRlclRleHRzWzBdLnRleHRDb250ZW50ID0gXCJQYWVsbGFcIjtcbiAgaGVhZGVyVGV4dHNbMV0udGV4dENvbnRlbnQgPSBcIkNyb3F1ZXR0ZXNcIjtcbiAgaGVhZGVyVGV4dHNbMl0udGV4dENvbnRlbnQgPSBcIkdhbWJhcyBhbCBwaWwgcGlsXCI7XG4gIGhlYWRlclRleHRzWzNdLnRleHRDb250ZW50ID0gXCJHYXpwYWNob1wiO1xuXG4gIHBhcmFUZXh0c1swXS50ZXh0Q29udGVudCA9XG4gICAgXCJQYWVsbGEgaXMgcmVnYXJkZWQgYXMgb25lIG9mIHRoZSBjb21tdW5pdHkncyBpZGVudGlmeWluZyBzeW1ib2xzLiBJdCBpcyBvbmUgb2YgdGhlIGJlc3Qta25vd24gZGlzaGVzIGluIFNwYW5pc2ggY3Vpc2luZS4gUGFlbGxhIGlzIGEgY2xhc3NpYyBTcGFuaXNoIHJpY2UgZGlzaCBtYWRlIHdpdGggcmljZSwgc2FmZnJvbiwgdmVnZXRhYmxlcywgY2hpY2tlbiwgYW5kIHNlYWZvb2QgY29va2VkIGFuZCBzZXJ2ZWQgaW4gb25lIHBhbi5cIjtcbiAgcGFyYVRleHRzWzFdLnRleHRDb250ZW50ID1cbiAgICBcIlNtYWxsIGZyaWVkIHJvdW5kcyBvciBjeWxpbmRlcnMgb2YgbWVhdCwgZmlzaCwgb3IgdmVnZXRhYmxlcyBhcmUgY29uc3VtZWQgb24gYWxtb3N0IGV2ZXJ5IGNvbnRpbmVudCBpbiB2YXJpb3VzIGZvcm1zLlwiO1xuICBwYXJhVGV4dHNbMl0udGV4dENvbnRlbnQgPVxuICAgIFwiVGhlIGhpc3Rvcnkgb2YgR2FtYmFzIFBpbCBQaWwgaXMgYSBsaXR0bGUgdW5jbGVhciwgYnV0IGl0IG9yaWdpbmF0ZXMgaW4gZWl0aGVyIHRoZSBCYXNxdWUgQ291bnRyeSwgQW5kYWx1c2lhIG9yIEdhbGljaWEuIE1hZGUgd2l0aCBmcmVzaCBwcmF3bnMgY29va2VkIGluIG9pbCBpbmZ1c2VkIHdpdGggZ2FybGljIGFuZCBjaGlsbGkgYW5kIHNlcnZlZCB3aXRoIGJyZWFkIHRvIHNvYWsgdXAgdGhlIGRlbGljaW91cyBzYXVjZS5cIjtcbiAgcGFyYVRleHRzWzNdLnRleHRDb250ZW50ID1cbiAgICBcIkl0IG9yaWdpbmF0ZWQgaW4gdGhlIHNvdXRoZXJuIHJlZ2lvbnMgb2YgdGhlIEliZXJpYW4gcGVuaW5zdWxhIGFuZCBzcHJlYWQgaW50byBvdGhlciBhcmVhcy4gR2F6cGFjaG8gaXMgd2lkZWx5IGVhdGVuIGluIFNwYWluIGFuZCBQb3J0dWdhbCwgcGFydGljdWxhcmx5IGR1cmluZyBob3Qgc3VtbWVycywgc2luY2UgaXQgaXMgcmVmcmVzaGluZyBhbmQgY29vbC4gR2F6cGFjaG8gaXMgYSBjb2xkIHNvdXAgYW5kIGRyaW5rIG1hZGUgb2YgcmF3LCBibGVuZGVkIHZlZ2V0YWJsZXMuXCI7XG5cbiAgY29uc29sZS5sb2coaGVhZGVyVGV4dHMpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0aWFsSG9tZVBhZ2UsIGhvbWVQYWdlU3dpdGNoIH0gZnJvbSBcIi4vaG9tZXBhZ2VcIjtcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgY29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmluaXRpYWxIb21lUGFnZSgpO1xuXG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItYnV0dG9uc1wiKTtcblxuYnRuc1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xuICBoZXJvLnJlbW92ZSgpO1xuXG4gIGhvbWVQYWdlU3dpdGNoKCk7XG59KTtcblxuYnRuc1sxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xuICBoZXJvLnJlbW92ZSgpO1xuXG4gIG1lbnVQYWdlKCk7XG5cbn0pO1xuXG5idG5zWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xuICBoZXJvLnJlbW92ZSgpO1xuXG4gIGNvbnRhY3RQYWdlKClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=