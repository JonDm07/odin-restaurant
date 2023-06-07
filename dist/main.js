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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsTUFBTTs7QUFFNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsTUFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdETztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxNQUFNOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07O0FBRWxEO0FBQ0E7QUFDQSxzREFBc0QsTUFBTTtBQUM1RDtBQUNBOzs7Ozs7O1VDNUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042RDtBQUMzQjtBQUNNOztBQUV4QywwREFBZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx5REFBYztBQUNoQixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLCtDQUFROztBQUVWLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLEVBQUUscURBQVc7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIiwgXCJjb250YWN0XCIpO1xuICBjb250ZW50Lmluc2VydEJlZm9yZShoZXJvLCBmb290ZXIpO1xuXG4gIGxldCBwYXJhVGV4dEFycmF5ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kaXZcIik7XG4gICAgaGVyby5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGBSYW5kb20gUGVyc29uICR7aSArIDF9YDtcblxuICAgIGNvbnN0IHBhcmFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKHBhcmFUZXh0KTtcbiAgICBwYXJhVGV4dEFycmF5LnB1c2gocGFyYVRleHQpO1xuXG4gICAgY29uc3QgYW5vdGhlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYW5vdGhlclRleHQpO1xuICAgIGFub3RoZXJUZXh0LnRleHRDb250ZW50ID0gYFJhbmRvbSBBZHJlc3MgJHtpICsgMX1gO1xuICB9XG4gIHBhcmFUZXh0QXJyYXlbMF0udGV4dENvbnRlbnQgPSBcIlBob25lIG51bWJlcjogKzM0IDcyMjIyMDgyNlwiO1xuICBwYXJhVGV4dEFycmF5WzFdLnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXI6ICszNCA3ODc1MjY0ODRcIjtcbiAgcGFyYVRleHRBcnJheVsyXS50ZXh0Q29udGVudCA9IFwiUGhvbmUgbnVtYmVyOiArMzQgNzYxNTg0ODE0XCI7XG4gIHBhcmFUZXh0QXJyYXlbM10udGV4dENvbnRlbnQgPSBcIlBob25lIG51bWJlcjogKzM0IDc2MTIxNTQ4NlwiO1xufVxuIiwiY29uc3QgcmVzdGF1cmFudE5hbWUgPSBcIlJhbmRvbSByZXN0YXVyYW50IG5hbWVcIjtcbmNvbnN0IHBhcmFUZXh0ID0gXCJSYW5kb20gcmVzdGF1cmFudCBpbnZpdGF0aW9uIGFuZCBkZXNjcmlwdGlvbiB0ZXh0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGxldCBidG5zID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWJ1dHRvbnNcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnRucy5wdXNoKGJ1dHRvbik7XG4gIH1cblxuICBidG5zWzBdLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGJ0bnNbMV0udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgYnRuc1syXS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIsIFwiaG9tZVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKTtcblxuICBjb25zdCBoZXJvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZXJvSGVhZGVyLnRleHRDb250ZW50ID0gcmVzdGF1cmFudE5hbWU7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0hlYWRlcik7XG5cbiAgY29uc3QgaGVyb0ltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyb0ltYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1kaXZcIik7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlRGl2KTtcblxuICBjb25zdCBhYm91dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWJvdXRQYXJhLnRleHRDb250ZW50ID0gcGFyYVRleHQ7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoYWJvdXRQYXJhKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZVN3aXRjaCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcblxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiLCBcImhvbWVcIik7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGhlcm8sIGZvb3Rlcik7XG5cbiAgY29uc3QgaGVyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVyb0hlYWRlci50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnROYW1lO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9IZWFkZXIpO1xuXG4gIGNvbnN0IGhlcm9JbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm9JbWFnZURpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtZGl2XCIpO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9JbWFnZURpdik7XG5cbiAgY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFib3V0UGFyYS50ZXh0Q29udGVudCA9IHBhcmFUZXh0O1xuICBoZXJvLmFwcGVuZENoaWxkKGFib3V0UGFyYSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIiwgXCJtZW51XCIpO1xuICBjb250ZW50Lmluc2VydEJlZm9yZShoZXJvLCBmb290ZXIpO1xuXG4gIGxldCBpdGVtRGl2cyA9IFtdO1xuICBsZXQgcGljdHVyZURpdnMgPSBbXTtcbiAgbGV0IHRleHREaXZzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRpdlwiKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICAgIGl0ZW1EaXZzLnB1c2goaXRlbURpdik7XG5cbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWRpdlwiKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XG5cbiAgICBjb25zdCBwaWN0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaWN0dXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlLWRpdlwiKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocGljdHVyZURpdik7XG4gICAgcGljdHVyZURpdnMucHVzaChwaWN0dXJlRGl2KTtcblxuICAgIGNvbnN0IHBpY3R1cmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGljdHVyZURpdi5hcHBlbmRDaGlsZChwaWN0dXJlVGV4dCk7XG4gICAgcGljdHVyZVRleHQudGV4dENvbnRlbnQgPSBgUmFuZG9tIFBpY3R1cmUgJHtpICsgMX1gO1xuXG4gICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dC1kaXZcIik7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuICAgIHRleHREaXZzLnB1c2godGV4dERpdik7XG5cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGBSYW5kb20gZm9vZCAke2kgKyAxfWA7XG5cbiAgICBjb25zdCBwYXJhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQocGFyYVRleHQpO1xuICAgIHBhcmFUZXh0LnRleHRDb250ZW50ID0gYFJhbmRvbSBGb29kIERlc2NyaXB0aW9uICR7aSArIDF9YDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0aWFsSG9tZVBhZ2UsIGhvbWVQYWdlU3dpdGNoIH0gZnJvbSBcIi4vaG9tZXBhZ2VcIjtcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgY29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmluaXRpYWxIb21lUGFnZSgpO1xuXG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItYnV0dG9uc1wiKTtcblxuYnRuc1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xuICBoZXJvLnJlbW92ZSgpO1xuXG4gIGhvbWVQYWdlU3dpdGNoKCk7XG59KTtcblxuYnRuc1sxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xuICBoZXJvLnJlbW92ZSgpO1xuXG4gIG1lbnVQYWdlKCk7XG5cbn0pO1xuXG5idG5zWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xuICBoZXJvLnJlbW92ZSgpO1xuXG4gIGNvbnRhY3RQYWdlKClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=