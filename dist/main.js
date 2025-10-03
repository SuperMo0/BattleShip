/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    background-image: linear-gradient(45deg,\n            hsl(240deg 11% 19%) 0%,\n            hsl(230deg 15% 19%) 4%,\n            hsl(223deg 20% 19%) 8%,\n            hsl(217deg 26% 19%) 13%,\n            hsl(212deg 33% 19%) 17%,\n            hsl(207deg 41% 19%) 21%,\n            hsl(203deg 51% 18%) 25%,\n            hsl(199deg 67% 16%) 29%,\n            hsl(195deg 93% 14%) 33%,\n            hsl(193deg 100% 14%) 37%,\n            hsl(192deg 100% 14%) 42%,\n            hsl(190deg 100% 14%) 46%,\n            hsl(188deg 100% 14%) 50%,\n            hsl(186deg 100% 13%) 54%,\n            hsl(183deg 100% 13%) 58%,\n            hsl(179deg 100% 12%) 63%,\n            hsl(175deg 100% 13%) 67%,\n            hsl(171deg 100% 13%) 71%,\n            hsl(166deg 100% 13%) 75%,\n            hsl(161deg 100% 13%) 79%,\n            hsl(156deg 100% 13%) 83%,\n            hsl(151deg 100% 13%) 87%,\n            hsl(144deg 89% 14%) 92%,\n            hsl(127deg 60% 17%) 96%,\n            hsl(108deg 60% 17%) 100%);\n    display: grid;\n    grid-template-columns: 2fr 9fr;\n    grid-template-rows: 1fr 8fr 4fr;\n\n}\n\nheader {\n    color: aliceblue;\n    font-size: 3rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    height: 230px;\n    grid-column: 1/-1;\n}\n\n#main {\n    display: flex;\n    gap: 30px;\n}\n\n#container {\n    grid-row: 2/-1;\n    height: 500px;\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    justify-content: center;\n}\n\n#player_board,\n#computer_board {\n    background-color: rgb(4, 190, 236);\n    height: 600px;\n    width: 600px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.cell {\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    font-size: 2.7rem;\n}\n\n.hover:hover:before {\n    background-color: rgb(240, 5, 5);\n}\n\nimg {\n    padding: 0;\n    border: 0;\n    width: 200px;\n    height: 200px;\n}\n\n#text {\n    position: relative;\n    bottom: 45px;\n}\n\n.break {\n    flex-basis: 100%;\n    height: 0;\n}\n\n.massage {\n    width: 1230px;\n    flex-shrink: 0;\n    border: 1px solid rgb(8, 167, 216);\n    display: flex;\n    gap: 10px;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\np {\n    font-size: 2rem;\n    font-weight: bold;\n    color: rgb(233, 160, 3);\n}\n\n.restart {\n    cursor: pointer;\n    width: 300px;\n    height: 40px;\n    border-radius: 20px;\n    font-size: 1.7rem;\n    border: none;\n    outline: none;\n    background-color: rgba(255, 166, 0, 0.863);\n    font-weight: bold;\n    color: rgb(255, 255, 255);\n}\n\n.ship_part {\n    background-color: rgb(82, 80, 80);\n    border: 1px solid black;\n    font-size: 2rem;\n    text-align: center;\n    width: 50px;\n    height: 50px;\n    /* align-self: flex-start; */\n}\n\n.switch {\n\n    cursor: pointer;\n    width: 200px;\n    height: 50px;\n    background-color: rgb(236, 155, 4);\n    color: aliceblue;\n    font-weight: bold;\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const { gameboard } = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nconst { ship } = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass game {\n\n    constructor() {\n        this.player_board = new gameboard();\n        this.computer_board = new gameboard();\n        this.randomize_board(this.computer_board);\n        this.text = document.querySelector(\".text\");\n        this.counter1 = document.querySelector(\".counter1\");\n        this.counter2 = document.querySelector(\".counter2\");\n        this.stop = true;\n        this.create_drag_ships();\n        this.initiate_dom();\n    }\n\n    start_random_game() {\n        this.stop = false;\n        this.player_board = new gameboard();\n        this.computer_board = new gameboard();\n        this.randomize_board(this.player_board);\n        this.randomize_board(this.computer_board);\n        this.initiate_dom();\n    }\n\n\n    create_ship(size, direction) {\n        let ship_part = document.createElement(\"div\");\n        ship_part.classList.toggle(\"ship_part\");\n        ship_part.direction = \"^\";\n        ship_part.textContent = size + \"\\^\";\n        ship_part.draggable = true;\n\n\n        return ship_part;\n    }\n\n    create_drag_ships() {\n\n        let container = document.querySelector(\"#container\");\n        let arr = [2, 3, 3, 4, 5];\n        for (let size of arr) {\n            let ship = this.create_ship(size);\n            container.appendChild(ship);\n        }\n\n    }\n\n\n    add_drag_listener(cell) {\n\n        cell.addEventListener(\"dragover\", (ev) => {\n            ev.preventDefault();\n        });\n        cell.addEventListener(\"drop\", (ev) => {\n            ev.preventDefault();\n            console.log(ev.target);\n\n        });\n\n        cell.addEventListener(\"dragenter\", (ev) => {\n            ev.preventDefault();\n            console.log(23232323);\n        })\n\n    }\n\n    initiate_dom() {\n        let player_board_dom = document.querySelector(\"#player_board\");\n        let computer_board_dom = document.querySelector(\"#computer_board\");\n        player_board_dom.replaceChildren();\n        computer_board_dom.replaceChildren();\n        this.text = \"Battleship\";\n        this.counter1.textContent = \"0\";\n        this.counter2.textContent = 0;\n        let cell = document.createElement(\"div\");\n        cell.classList.toggle(\"hover\", true);\n        cell.classList.toggle(\"cell\", true);\n        for (let i = 0; i <= 99; i++) {\n            let new_cell = cell.cloneNode(true);\n            this.add_drag_listener(new_cell);\n            new_cell.classList.toggle(\"hover\");\n            if (this.player_board.check_ship(i)) new_cell.style[\"background-color\"] = \"grey\";\n            player_board_dom.appendChild(new_cell);\n        }\n\n        for (let i = 0; i < 100; i++) {\n            let new_cell = cell.cloneNode(true);\n            new_cell.addEventListener(\"click\", (e) => { this.handle_cell_click(e.target) });\n            new_cell.index = i;\n            new_cell.style[\"background-color\"] = \"black\";\n            computer_board_dom.appendChild(new_cell);\n        }\n\n\n    }\n\n    randomize_board(board) {\n        let ships = [new ship(3), new ship(3), new ship(2), new ship(4), new ship(5)];\n        for (let sh of ships) {\n            while (true) {\n                let random_cell = Math.floor(Math.random() * 100);\n                let direction = Math.floor(Math.random() * 2);\n                direction = (direction == 0) ? \"v\" : \"h\";\n                if (board.check_placment(sh.size, random_cell, direction)) {\n                    board.place_a_ship(sh, random_cell, direction);\n                    break;\n                }\n            }\n        }\n    }\n    handle_cell_click(cell) {\n        if (this.stop == true) return;\n\n        if (this.computer_board.check_cell(cell.index)) {\n            return;\n        }\n        let res = this.computer_board.take_hit(cell.index);\n        if (res) {\n            cell.style[\"background-color\"] = \"grey\";\n            cell.textContent = \"🎯\";\n            // this.counter1.textContent = +this.counter1.textContent + 1\n        }\n        else {\n            cell.style[\"background-color\"] = \"rgb(4, 190, 236)\";\n            cell.textContent = \"🔘\";\n\n        }\n        if (this.computer_board.check_dead()) {\n            text.textContent = \"Congrats Captin we sank all their ships 💯🚀🎯\";\n            this.stop = true;\n            return;\n        }\n        this.computer_play();\n    }\n\n    computer_play() {\n        let cells_array = document.querySelectorAll(\"#player_board .cell\");\n        for (let i = 0; i < 100; i++) {\n            if (this.player_board.check_cell(i) && this.player_board.check_ship(i)) {\n\n                let right = i + 1;\n                let left = i - 1;\n                let up = i - 10;\n                let down = i + 10;\n                let z = [right, left, up, down];\n                for (let ne of z) {\n                    if (ne < 0 || ne > 99 || this.player_board.check_cell(ne)) continue;\n                    else {\n                        let res = this.player_board.take_hit(ne);\n                        if (res) {\n                            cells_array[ne].textContent = \"🎯\";\n\n                            this.counter2.textContent = +this.counter2.textContent + 1\n                        }\n                        else cells_array[ne].textContent = \"🔘\";\n                        if (this.player_board.check_dead()) {\n                            text.textContent = \"Captin we lost 💯\";\n                            this.stop = true;\n                        }\n                        return;\n                    }\n                }\n            }\n        }\n        while (true) {\n            let index = Math.floor(Math.random() * 100);\n            if (!this.player_board.check_cell(index)) {\n                let res = this.player_board.take_hit(index);\n                if (res) {\n                    cells_array[index].textContent = \"🎯\";\n                    this.counter2.textContent = +this.counter2.textContent + 1\n                }\n                else cells_array[index].textContent = \"🔘\";\n                if (this.player_board.check_dead()) {\n                    text.textContent = \"Captin we lost 💯\";\n                    this.stop = true;\n                }\n                break;\n            }\n        }\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n\n\n\n\n}\n\n\nmodule.exports = { game };\n\n//# sourceURL=webpack://battleship/./src/game.js?\n}");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

eval("{class gameboard {\n\n    constructor() {\n        this.board = new Array(100);\n        this.board = this.board.fill().map(x => ({ clicked: false, ship: null, pos: null }));\n        this.deads = 0;\n    }\n\n    check_ship(cell) {\n        return this.board[cell].ship != null;\n    }\n    check_cell(cell) {\n        return this.board[cell].clicked;\n    }\n\n    check_placment(size, index, direction) {\n        if (index < 0 || index > 99) throw new Error(\"invalid index\");\n        if (direction == \"v\") {\n            for (let i = 0; i < size; i++) {\n                if (index > 99) return false;\n                if (this.board[index].ship != null) return false;\n                index += 10;\n            }\n            return true;\n        }\n        else {\n            let row = index / 10;\n            let col = index % 10;\n            let exist = 10 - col;\n            if (exist < size) return false;\n            for (let i = 0; i < size; i++) {\n                if (this.board[index].ship != null) return false;\n                index++;\n            }\n            return true;\n        }\n    }\n\n    place_a_ship(ship, index, direction) {\n        let pos = 0;\n        for (let i = 0; i < ship.size; i++) {\n            this.board[index].ship = ship;\n            this.board[index].pos = pos;\n            (direction == \"v\") ? index += 10 : index++;\n            pos++;\n        }\n    }\n\n    take_hit(cell) {\n        this.board[cell].clicked = true;\n        if (this.board[cell].ship == null) return 0;\n        else {\n            this.board[cell].ship.hit(this.board[cell].pos);\n            if (this.board[cell].ship.isdead()) this.deads++;\n\n\n            return 1;\n        }\n    }\n\n    check_dead() {\n        return this.deads == 5;\n    }\n\n}\n\n\nmodule.exports = { gameboard };\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconst { game } = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// import { logo } from \"./../assets/logo.png\";\n// import gameboard from \"./gameboard.js\"\n\n\n\nlet game1 = new game();\n\nlet restart = document.querySelector(\".restart\");\n\nrestart.addEventListener(\"click\", () => {\n    game1.start_random_game();\n})\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?\n}");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("{class ship {\n    constructor(len) {\n        this.size = len;\n        this.sank = false;\n        this.spots = Array(len);\n        this.spots.fill();\n        this.spots.forEach((v, ix, a) => { a[ix] = false });\n        this.hits = 0;\n    }\n\n    hit(place) {\n        if (this.spots[place]) throw new Error(\"can't hit a cell twice!\");\n        this.spots[place] = true;\n        this.hits++;\n    }\n    isdead() {\n        return this.hits == this.size;\n    }\n\n}\n\n\nmodule.exports = { ship }\n\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;