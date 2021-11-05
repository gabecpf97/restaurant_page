/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const create = () => {
    const content = document.querySelector('#content');
    content.appendChild(createMenu());
}

function createMenu() {
    const menu = document.createElement('div');
    const dishes = document.createElement('ul');
    menu.classList.add('menu');
    dishes.classList.add('dishes');
    addDishes(dishes);
    menu.appendChild(dishes);
    return menu;
}

function addDishes(dishes) {
    dishes.appendChild(newDish('Chicken Katsu', '$11.9'));
    dishes.appendChild(newDish('Egg Roll', '$5.9'));
    dishes.appendChild(newDish('Beef Rib', '$13.9'));
    dishes.appendChild(newDish('Salmon Teriyaki', '$12.9'));
    dishes.appendChild(newDish('Yakisoba', '$9.5'));
    dishes.appendChild(newDish('Tempura', '$8.5'));
    dishes.appendChild(newDish('Beef Curry', '$13.9'));
}

function newDish(name, price) {
    const dish = document.createElement('li');
    const dishName = document.createElement('span');
    const dishPrice = document.createElement('span');
    dish.classList.add('dish');
    dishName.textContent = name;
    dishPrice.textContent = price;
    dish.appendChild(dishName);
    dish.appendChild(dishPrice);
    return dish;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXNoZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGRpc2hlcy5jbGFzc0xpc3QuYWRkKCdkaXNoZXMnKTtcbiAgICBhZGREaXNoZXMoZGlzaGVzKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGRpc2hlcyk7XG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGFkZERpc2hlcyhkaXNoZXMpIHtcbiAgICBkaXNoZXMuYXBwZW5kQ2hpbGQobmV3RGlzaCgnQ2hpY2tlbiBLYXRzdScsICckMTEuOScpKTtcbiAgICBkaXNoZXMuYXBwZW5kQ2hpbGQobmV3RGlzaCgnRWdnIFJvbGwnLCAnJDUuOScpKTtcbiAgICBkaXNoZXMuYXBwZW5kQ2hpbGQobmV3RGlzaCgnQmVlZiBSaWInLCAnJDEzLjknKSk7XG4gICAgZGlzaGVzLmFwcGVuZENoaWxkKG5ld0Rpc2goJ1NhbG1vbiBUZXJpeWFraScsICckMTIuOScpKTtcbiAgICBkaXNoZXMuYXBwZW5kQ2hpbGQobmV3RGlzaCgnWWFraXNvYmEnLCAnJDkuNScpKTtcbiAgICBkaXNoZXMuYXBwZW5kQ2hpbGQobmV3RGlzaCgnVGVtcHVyYScsICckOC41JykpO1xuICAgIGRpc2hlcy5hcHBlbmRDaGlsZChuZXdEaXNoKCdCZWVmIEN1cnJ5JywgJyQxMy45JykpO1xufVxuXG5mdW5jdGlvbiBuZXdEaXNoKG5hbWUsIHByaWNlKSB7XG4gICAgY29uc3QgZGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgZGlzaFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRpc2guY2xhc3NMaXN0LmFkZCgnZGlzaCcpO1xuICAgIGRpc2hOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBkaXNoUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgICBkaXNoLmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcbiAgICBkaXNoLmFwcGVuZENoaWxkKGRpc2hQcmljZSk7XG4gICAgcmV0dXJuIGRpc2g7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=