/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slide = __webpack_require__(2);

	var _slide2 = _interopRequireDefault(_slide);

	var _dip = __webpack_require__(4);

	var _dip2 = _interopRequireDefault(_dip);

	var _nudge = __webpack_require__(5);

	var _nudge2 = _interopRequireDefault(_nudge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(6);

	function setupSlideProducts() {
	    var products = document.querySelectorAll('.slide .fp');

	    for (var i = 0, l = products.length; i < l; i++) {
	        new _slide2.default(products[i]);
	    }
	}

	function setupDipProducts() {
	    var products = document.querySelectorAll('.dip .fp');

	    for (var i = 0, l = products.length; i < l; i++) {
	        new _dip2.default(products[i]);
	    }
	}

	function setupNudgeProducts() {
	    var products = document.querySelectorAll('.nudge .fp');

	    for (var i = 0, l = products.length; i < l; i++) {
	        new _nudge2.default(products[i], products[i - 1], products[i + 1]);
	    }
	}

	window.addEventListener('load', function () {
	    setupSlideProducts();
	    setupDipProducts();
	    setupNudgeProducts();
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _properties = __webpack_require__(3);

	var _properties2 = _interopRequireDefault(_properties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Slide = function () {
	    function Slide(el) {
	        _classCallCheck(this, Slide);

	        this.props = new _properties2.default(el);
	        this.props.removeWrapper = this.props.el.querySelector('.inbasket-btns');

	        this.setupEventHandlers();
	    }

	    _createClass(Slide, [{
	        key: 'setupEventHandlers',
	        value: function setupEventHandlers() {
	            this.props.addBtn.addEventListener('click', this.addClickHandler.bind(this));
	            this.props.removeBtn.addEventListener('click', this.removeClickHandler.bind(this));
	            this.props.addBtn.addEventListener('animationend', this.animationEndHandler.bind(this));
	            this.props.removeWrapper.addEventListener('animationend', this.animationEndHandler.bind(this));
	        }
	    }, {
	        key: 'addClickHandler',
	        value: function addClickHandler(e) {
	            e.preventDefault();
	            var classList = this.props.actionsEl.classList;
	            this.props.productCount += 1;
	            if (!classList.contains(this.props.className)) {
	                classList.add('slide-in');
	                this.props.addBtn.innerHTML = '&plus;';
	                classList.add(this.props.className);
	            }
	            this.updateInputValue();
	        }
	    }, {
	        key: 'removeClickHandler',
	        value: function removeClickHandler(e) {
	            e.preventDefault();
	            var classList = this.props.actionsEl.classList;
	            if (this.props.productCount > 0) {
	                this.props.productCount -= 1;
	                if (this.props.productCount === 0) {
	                    classList.add('slide-out');
	                    this.props.addBtn.innerHTML = 'Add';
	                    classList.remove(this.props.className);
	                }
	                this.updateInputValue();
	            }
	        }
	    }, {
	        key: 'updateInputValue',
	        value: function updateInputValue() {
	            this.props.input.value = this.props.productCount;
	        }
	    }, {
	        key: 'animationEndHandler',
	        value: function animationEndHandler() {
	            var classList = this.props.actionsEl.classList;
	            classList.remove('slide-in');
	            classList.remove('slide-out');
	        }
	    }]);

	    return Slide;
	}();

	exports.default = Slide;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Properties = function Properties(el) {
	    _classCallCheck(this, Properties);

	    this.className = 'in-basket';
	    this.el = el;
	    this.actionsEl = this.el.querySelector('.actions');
	    this.productCount = 0;
	    this.addBtn = this.el.querySelector('.btn.add');
	    this.removeBtn = this.el.querySelector('.btn.remove');
	    this.input = this.el.querySelector('.actions input');
	};

	exports.default = Properties;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _properties = __webpack_require__(3);

	var _properties2 = _interopRequireDefault(_properties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dip = function () {
	    function Dip(el) {
	        _classCallCheck(this, Dip);

	        this.props = new _properties2.default(el);
	        this.setupEventHandlers();
	    }

	    _createClass(Dip, [{
	        key: 'setupEventHandlers',
	        value: function setupEventHandlers() {
	            this.props.addBtn.addEventListener('click', this.addClickHandler.bind(this));
	            this.props.removeBtn.addEventListener('click', this.removeClickHandler.bind(this));
	            this.props.actionsEl.addEventListener('animationend', this.animationEndHandler.bind(this));
	        }
	    }, {
	        key: 'addClickHandler',
	        value: function addClickHandler(e) {
	            e.preventDefault();
	            var classList = this.props.actionsEl.classList;
	            this.props.productCount += 1;
	            if (!classList.contains(this.props.className)) {
	                classList.add('dip');
	                setTimeout(function () {
	                    classList.add(this.props.className);
	                    this.props.addBtn.innerHTML = '&plus;';
	                }.bind(this), 135);
	            }
	            this.updateInputValue();
	        }
	    }, {
	        key: 'removeClickHandler',
	        value: function removeClickHandler(e) {
	            e.preventDefault();
	            var classList = this.props.actionsEl.classList;
	            if (this.props.productCount > 0) {
	                this.props.productCount -= 1;
	                if (this.props.productCount === 0) {
	                    classList.add('dip');
	                    setTimeout(function () {
	                        classList.remove(this.props.className);
	                        this.props.addBtn.innerHTML = 'Add';
	                        this.updateInputValue();
	                    }.bind(this), 135);
	                } else {
	                    this.updateInputValue();
	                }
	            }
	        }
	    }, {
	        key: 'updateInputValue',
	        value: function updateInputValue() {
	            this.props.input.value = this.props.productCount;
	        }
	    }, {
	        key: 'animationEndHandler',
	        value: function animationEndHandler() {
	            var classList = this.props.actionsEl.classList;
	            classList.remove('dip');
	        }
	    }]);

	    return Dip;
	}();

	exports.default = Dip;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _properties = __webpack_require__(3);

	var _properties2 = _interopRequireDefault(_properties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Nudge = function () {
	    function Nudge(el) {
	        var prevEl = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	        var nextEl = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	        _classCallCheck(this, Nudge);

	        this.props = new _properties2.default(el);
	        this.props.prevElActions = prevEl && prevEl.querySelector('.actions');
	        this.props.nextElActions = nextEl && nextEl.querySelector('.actions');

	        this.setupEventHandlers();
	    }

	    _createClass(Nudge, [{
	        key: 'setupEventHandlers',
	        value: function setupEventHandlers() {
	            this.props.addBtn.addEventListener('click', this.addClickHandler.bind(this));
	            this.props.removeBtn.addEventListener('click', this.removeClickHandler.bind(this));
	            this.props.actionsEl.addEventListener('animationend', this.addAnimationHandler.bind(this));
	        }
	    }, {
	        key: 'animateNeighbours',
	        value: function animateNeighbours() {
	            if (this.props.prevElActions) {
	                var classList = this.props.prevElActions.classList;
	                classList.add('nudge-left');
	            }
	            if (this.props.nextElActions) {
	                var classList = this.props.nextElActions.classList;
	                classList.add('nudge-right');
	            }
	        }
	    }, {
	        key: 'addClickHandler',
	        value: function addClickHandler(e) {
	            e.preventDefault();
	            var classList = this.props.actionsEl.classList;
	            this.props.productCount += 1;
	            if (!classList.contains(this.props.className)) {
	                this.props.addBtn.innerHTML = '&plus;';
	                this.animateNeighbours();
	                classList.add(this.props.className);
	            }
	            this.updateInputValue();
	        }
	    }, {
	        key: 'removeClickHandler',
	        value: function removeClickHandler(e) {
	            e.preventDefault();
	            var classList = this.props.actionsEl.classList;
	            if (this.props.productCount > 0) {
	                this.props.productCount -= 1;
	                if (this.props.productCount === 0) {
	                    this.props.addBtn.innerHTML = 'Add';
	                    this.animateNeighbours();
	                    classList.remove(this.props.className);
	                }
	                this.updateInputValue();
	            }
	        }
	    }, {
	        key: 'updateInputValue',
	        value: function updateInputValue() {
	            this.props.input.value = this.props.productCount;
	        }
	    }, {
	        key: 'addAnimationHandler',
	        value: function addAnimationHandler(evt) {
	            var classList = this.props.actionsEl.classList;
	            if (evt.animationName === 'nudge-left') {
	                classList.remove('nudge-left');
	            } else if (evt.animationName === 'nudge-right') {
	                classList.remove('nudge-right');
	            }
	        }
	    }]);

	    return Nudge;
	}();

	exports.default = Nudge;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n  box-sizing: content-box;\n  font-family: Helvetica, Arial, sans-serif; }\n\nbody {\n  padding: 0 20px;\n  background-color: #f2f2f2; }\n\nh1 {\n  color: #424242; }\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\ninput[type=number] {\n  -moz-appearance: textfield; }\n\nul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  width: 880px; }\n\nsection {\n  display: flex; }\n  section > h1 {\n    width: 200px;\n    text-align: right;\n    margin-right: 40px; }\n\n.slide .inbasket-btns {\n  position: absolute;\n  left: 2.4%; }\n\n.slide .remove {\n  margin-right: 1.9%; }\n\n.slide .add {\n  z-index: 10; }\n\n.dip .remove,\n.nudge .remove {\n  margin-right: 2.4%; }\n\n.fp {\n  background-color: #f9f9f9;\n  position: relative;\n  padding: 10px 0;\n  width: 25%;\n  overflow: hidden; }\n  .fp img {\n    display: block;\n    margin: 0 auto;\n    padding: 0 20px; }\n  .fp:not(:first-of-type) {\n    border-left: 1px solid #ebebeb; }\n\n.product-name {\n  display: block;\n  padding: 3px 6px;\n  color: #333;\n  text-align: center;\n  margin: 10px 0 20px; }\n\n.actions {\n  margin: 0 auto;\n  padding: 0 5px;\n  font-size: 1.2rem;\n  position: relative; }\n  .actions .btn,\n  .actions input {\n    font-size: inherit;\n    padding: 0.4em 0;\n    text-align: center;\n    border-radius: 4px;\n    line-height: 1.2; }\n  .actions input {\n    border: 1px solid #D6D6D6;\n    text-align: center;\n    vertical-align: bottom; }\n  .actions .add {\n    float: right;\n    width: 100%;\n    position: relative; }\n  .actions .add,\n  .actions .remove {\n    border-top: 1px solid transparent; }\n  .actions input,\n  .actions .remove {\n    display: none;\n    float: left; }\n\n.actions.slide-in .inbasket-btns {\n  animation: slide-in-remove 270ms ease; }\n\n.actions.slide-in .add {\n  animation: slide-in-add 270ms ease; }\n\n.actions.slide-out .inbasket-btns {\n  animation: slide-out-remove 270ms ease; }\n\n.actions.slide-out .add {\n  animation: slide-out-add 270ms ease; }\n\n.actions.slide-out input,\n.actions.slide-out .remove {\n  display: inline-block;\n  width: 24.509803922%; }\n\n.inbasket-btns {\n  position: relative;\n  left: 0%; }\n\n.actions.dip {\n  animation: dip 270ms ease; }\n\n.actions.nudge-left {\n  animation: nudge-left 200ms ease; }\n\n.actions.nudge-right {\n  animation: nudge-right 200ms ease; }\n\n.in-basket input,\n.in-basket .remove {\n  width: 24.509803922%;\n  display: inline-block; }\n\n.in-basket .add {\n  width: 44.94474%; }\n\n.in-basket .btn {\n  background-color: #F6D03D;\n  border-bottom: 1px solid #DAB84C; }\n  .in-basket .btn:hover {\n    background-color: #F1CD44; }\n  .in-basket .btn:active {\n    background-color: #EAC347; }\n\n.btn {\n  display: inline-block;\n  background-color: #EFEBE9;\n  text-decoration: none;\n  color: #705F1B;\n  border-bottom: 1px solid #D7CCC8; }\n  .btn:hover {\n    background-color: #F6D03D; }\n\n@keyframes dip {\n  0%, 100% {\n    bottom: 0; }\n  50% {\n    bottom: -70px; } }\n\n@keyframes nudge-left {\n  0%, 100% {\n    left: 0; }\n  50% {\n    left: -5px; } }\n\n@keyframes nudge-right {\n  0%, 100% {\n    right: 0; }\n  50% {\n    right: -5px; } }\n\n@keyframes slide-in-remove {\n  0% {\n    left: -55%; }\n  100% {\n    left: 2.4%; } }\n\n@keyframes slide-out-remove {\n  0% {\n    left: 2.4%; }\n  100% {\n    left: -55%; } }\n\n@keyframes slide-in-add {\n  0% {\n    width: 100%; }\n  100% {\n    width: 44.94474%; } }\n\n@keyframes slide-out-add {\n  0% {\n    width: 44.94474%; }\n  100% {\n    width: 100%; } }\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);