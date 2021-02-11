/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module) => {

// функа конструктор
function myModule(){
  this.hello = function(){
    console.log('hello');
  };

  this.goodbue = function(){
    console.log('goodbue');
  };
}

//CommonJS = експорт модуля
module.exports = myModule;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
const myMod = __webpack_require__(/*! ./main */ "./src/js/main.js"); // ипорт модуля

const myModRun = new myMod(); // новый экземпляр конструктора

// запуск методов
myModRun.hello();
myModRun.goodbue();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map