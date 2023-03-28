/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\n  background-image: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);\n  background-repeat: no-repeat;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,gFAAA;EACA,4BAAA;EACA,YAAA;AACF","sourcesContent":["body, html {\n  background-image: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);\n  background-repeat: no-repeat;\n  height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class User {
    constructor(userId, userData){
        //console.log(userData.users.length)
        for(var i  = 0; i < userData.users.length; i++){
            // console.log(userData.users[i])
            //MEANT TO FIND THE CURRENT USER
            // if user input matches a user- store all of the users data in the variables
            if (userData.users[i].id === userId){
                console.log("User Found!")
                this.userId = userId
                this.userName = userData.users[i].name
                this.address = userData.users[i].address
                this.email = userData.users[i].email
                this.strideLength = userData.users[i].strideLength
                this.dailyStepGoal = userData.users[i].dailyStepGoal
                this.friends = userData.users[i].friends
            }
            else{
                console.log("User Not Found!")
            }
        }
    }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);










/*
Iteration 1 Classes :### 
Class - allUsers 
constructor (userData) 
properties 
- A place holds onto all of the user data objects 
- hold list of user objects method - 

findUserByID = return userID object 
- findOverAllStepGoal 
- randomUserID 

### **
Class SingleUser (needed to store info for random gen user?)

** constructor (UserObject) 
properties id name address email strideLength dailyStepGoal 

UserFriends methods 
`userFirstName()` `findToday()` the most recent day
*/

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ users: [
  {
    "id": 1,
    "name": "Trystan Gorczany",
    "address": "9484 Lucas Flat, West Kittymouth WA 67504",
    "email": "Taurean_Pollich31@gmail.com",
    "strideLength": 4,
    "dailyStepGoal": 7000,
    "friends": [
      5,
      43,
      46,
      11
    ]
  },
  {
    "id": 2,
    "name": "Tyreek VonRueden",
    "address": "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
    "email": "Nicolette_Halvorson43@yahoo.com",
    "strideLength": 4.5,
    "dailyStepGoal": 9000,
    "friends": [
      13,
      19,
      3
    ]
  },
  {
    "id": 3,
    "name": "Colt Rohan",
    "address": "48010 Balistreri Harbor, Cleobury IN 43317",
    "email": "Wilford.Barton@gmail.com",
    "strideLength": 2.7,
    "dailyStepGoal": 3000,
    "friends": [
      31,
      16,
      15,
      7
    ]
  },
  {
    "id": 4,
    "name": "Evie Satterfield",
    "address": "1378 Renner Island, Port Lincoln NE 06237-3602",
    "email": "Adan66@yahoo.com",
    "strideLength": 3.9,
    "dailyStepGoal": 4000,
    "friends": [
      21,
      32,
      8
    ]
  },
  {
    "id": 5,
    "name": "Brycen Rutherford",
    "address": "0770 Keeley Square, West Keyon SD 73400-6577",
    "email": "Jerald55@yahoo.com",
    "strideLength": 3.3,
    "dailyStepGoal": 10000,
    "friends": [
      5,
      46
    ]
  },
  {
    "id": 6,
    "name": "Jillian Senger",
    "address": "235 Geoffrey Highway, New Lavadaport CA 62933-3709",
    "email": "Cortez51@gmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      25,
      15,
      20
    ]
  },
  {
    "id": 7,
    "name": "Elaina Mosciski",
    "address": "307 Gerhard Pine, Luettgenton NC 60477",
    "email": "Karolann.Kuvalis@yahoo.com",
    "strideLength": 3,
    "dailyStepGoal": 9000,
    "friends": [
      7,
      46,
      43
    ]
  },
  {
    "id": 8,
    "name": "Amir Lang",
    "address": "75165 Zulauf Walks, North Dejaview NC 21971-9115",
    "email": "Eudora.Stracke@yahoo.com",
    "strideLength": 2.8,
    "dailyStepGoal": 2000,
    "friends": [
      46,
      8,
      29,
      33,
      10
    ]
  },
  {
    "id": 9,
    "name": "Antonina McClure",
    "address": "480 Niko Village, Thompsonchester GA 94178-0548",
    "email": "Dustin.Kris15@yahoo.com",
    "strideLength": 3.5,
    "dailyStepGoal": 11000,
    "friends": [
      26,
      7,
      39,
      3
    ]
  },
  {
    "id": 10,
    "name": "Dianna Streich",
    "address": "6383 Barrows Fork, West Stan MS 06434-6341",
    "email": "Donald_Schiller5@hotmail.com",
    "strideLength": 3.7,
    "dailyStepGoal": 5000,
    "friends": [
      49,
      18,
      3,
      1
    ]
  },
  {
    "id": 11,
    "name": "Kailey Langosh",
    "address": "41048 Mattie Club, North Rickyhaven CO 60210-1389",
    "email": "Adella2@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 9000,
    "friends": [
      26,
      17
    ]
  },
  {
    "id": 12,
    "name": "Jacinthe Prosacco",
    "address": "9149 Kamille Brook, Josiannehaven TN 49127-4921",
    "email": "Daniela_Mante86@yahoo.com",
    "strideLength": 3.5,
    "dailyStepGoal": 3000,
    "friends": [
      5,
      17
    ]
  },
  {
    "id": 13,
    "name": "Seamus Upton",
    "address": "32689 Eulah View, East Judge TN 06935",
    "email": "Deontae37@gmail.com",
    "strideLength": 3.8,
    "dailyStepGoal": 12000,
    "friends": [
      11,
      43
    ]
  },
  {
    "id": 14,
    "name": "Elmira Walsh",
    "address": "575 Robel Flats, Hagenesborough NE 51196-7863",
    "email": "Allene_Volkman65@hotmail.com",
    "strideLength": 3.9,
    "dailyStepGoal": 4000,
    "friends": [
      28,
      6,
      1,
      22
    ]
  },
  {
    "id": 15,
    "name": "Katelyn Ullrich",
    "address": "49026 Danika Terrace, East Arnoldo UT 52723-2854",
    "email": "Freeman14@hotmail.com",
    "strideLength": 2.6,
    "dailyStepGoal": 8000,
    "friends": [
      41,
      39,
      7
    ]
  },
  {
    "id": 16,
    "name": "Marcel McKenzie",
    "address": "063 Watsica Union, Littleview CA 22498",
    "email": "Emie_Johns@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 6000,
    "friends": [
      41,
      9
    ]
  },
  {
    "id": 17,
    "name": "Amber Thiel",
    "address": "1978 Johnpaul Square, West Amina WA 90912-4707",
    "email": "Randi.Fay@yahoo.com",
    "strideLength": 4.5,
    "dailyStepGoal": 4000,
    "friends": [
      19,
      27,
      9,
      26,
      24
    ]
  },
  {
    "id": 18,
    "name": "Wellington Schiller",
    "address": "7449 Ferry Squares, New Amparomouth NY 18589",
    "email": "Ricky16@gmail.com",
    "strideLength": 3.7,
    "dailyStepGoal": 3000,
    "friends": [
      20,
      36,
      17,
      37
    ]
  },
  {
    "id": 19,
    "name": "Lonie Keeling",
    "address": "363 Julio Court, Port Kobeburgh OK 99023",
    "email": "Timothy_Haley@hotmail.com",
    "strideLength": 3.7,
    "dailyStepGoal": 6000,
    "friends": [
      36,
      10,
      22,
      27,
      33
    ]
  },
  {
    "id": 20,
    "name": "Heidi Hammes",
    "address": "80562 Providenci Walk, North Cesar IA 68250",
    "email": "Herminio_Runte21@yahoo.com",
    "strideLength": 3.4,
    "dailyStepGoal": 10000,
    "friends": [
      40,
      46,
      43
    ]
  },
  {
    "id": 21,
    "name": "Amy Abbott",
    "address": "01211 Hauck Tunnel, North Pearline ID 43785-6695",
    "email": "Donna_Keebler25@hotmail.com",
    "strideLength": 2.9,
    "dailyStepGoal": 8000,
    "friends": [
      46,
      39,
      49,
      16
    ]
  },
  {
    "id": 22,
    "name": "Bethany Mayer",
    "address": "05503 Berneice Parkways, Port Clemensville NV 37167-6077",
    "email": "Marlee14@yahoo.com",
    "strideLength": 4,
    "dailyStepGoal": 11000,
    "friends": [
      37,
      23,
      30,
      40
    ]
  },
  {
    "id": 23,
    "name": "Jadon Pfannerstill",
    "address": "0122 Little Route, New Lauriannefort WY 78690-0699",
    "email": "Kari98@gmail.com",
    "strideLength": 2.6,
    "dailyStepGoal": 3000,
    "friends": [
      31,
      48,
      19
    ]
  },
  {
    "id": 24,
    "name": "Arjun Block",
    "address": "1656 Dakota Crest, South Maurine CO 74714",
    "email": "Adolf.Mayer46@yahoo.com",
    "strideLength": 3.5,
    "dailyStepGoal": 6000,
    "friends": [
      11,
      39,
      26,
      29
    ]
  },
  {
    "id": 25,
    "name": "Mellie Pacocha",
    "address": "5696 Eliseo Tunnel, North Earnestine KY 04912-9498",
    "email": "Jermey4@gmail.com",
    "strideLength": 4,
    "dailyStepGoal": 6000,
    "friends": [
      21,
      46,
      47,
      19,
      41
    ]
  },
  {
    "id": 26,
    "name": "Maye Hauck",
    "address": "4339 Brown Drive, Olaside MA 99671",
    "email": "Gwen38@gmail.com",
    "strideLength": 3,
    "dailyStepGoal": 7000,
    "friends": [
      49,
      14,
      37
    ]
  },
  {
    "id": 27,
    "name": "Anibal Hilll",
    "address": "93332 Lupe Drive, Connerhaven AZ 76617",
    "email": "Demarcus.Little90@hotmail.com",
    "strideLength": 3.6,
    "dailyStepGoal": 4000,
    "friends": [
      24,
      43,
      33
    ]
  },
  {
    "id": 28,
    "name": "Malinda Stiedemann",
    "address": "402 Agnes Corners, Gustaveton KS 15732",
    "email": "Reva_Ankunding60@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 12000,
    "friends": [
      42,
      4,
      13
    ]
  },
  {
    "id": 29,
    "name": "Harmony Hackett",
    "address": "320 Fisher Corners, Morissettebury HI 33770",
    "email": "Toby92@yahoo.com",
    "strideLength": 3.7,
    "dailyStepGoal": 6000,
    "friends": [
      23,
      20,
      33,
      7
    ]
  },
  {
    "id": 30,
    "name": "Howell Adams",
    "address": "8583 Schaden Wall, Hyattberg IN 74274",
    "email": "Felicia54@yahoo.com",
    "strideLength": 3.1,
    "dailyStepGoal": 3000,
    "friends": [
      44,
      12,
      34,
      37
    ]
  },
  {
    "id": 31,
    "name": "Edwardo Ryan",
    "address": "903 Toy Turnpike, Ferrybury AK 41604-4978",
    "email": "Bella_Kovacek@gmail.com",
    "strideLength": 3.4,
    "dailyStepGoal": 10000,
    "friends": [
      6,
      47
    ]
  },
  {
    "id": 32,
    "name": "Hollie Senger",
    "address": "02088 Melyna Isle, New Blairfort NJ 16374-0586",
    "email": "Teresa18@gmail.com",
    "strideLength": 2.8,
    "dailyStepGoal": 2000,
    "friends": [
      4,
      27,
      17,
      24
    ]
  },
  {
    "id": 33,
    "name": "Judah Ferry",
    "address": "579 Nelda Expressway, Rosellahaven SD 65821",
    "email": "Melvina_Ondricka28@yahoo.com",
    "strideLength": 3.1,
    "dailyStepGoal": 4000,
    "friends": [
      36,
      2,
      23,
      8
    ]
  },
  {
    "id": 34,
    "name": "Weston Mohr",
    "address": "2914 Kameron Camp, Virginiestad AL 12922",
    "email": "Roberto.Kuvalis@gmail.com",
    "strideLength": 4.1,
    "dailyStepGoal": 2000,
    "friends": [
      2,
      46,
      17,
      43
    ]
  },
  {
    "id": 35,
    "name": "Roberto Turner",
    "address": "999 Erika Crest, Markport FL 40163-8581",
    "email": "Ivah_Gulgowski66@hotmail.com",
    "strideLength": 4.4,
    "dailyStepGoal": 6000,
    "friends": [
      45,
      12,
      34,
      38
    ]
  },
  {
    "id": 36,
    "name": "Robb Bayer",
    "address": "3304 Waters Club, West Claudieberg MO 57575-3329",
    "email": "Aurelio_Mosciski@hotmail.com",
    "strideLength": 3.6,
    "dailyStepGoal": 10000,
    "friends": [
      33,
      18
    ]
  },
  {
    "id": 37,
    "name": "Claire Casper",
    "address": "48046 Assunta Mountain, North Jaquelinbury IA 67089",
    "email": "Orland.Stamm@yahoo.com",
    "strideLength": 3.7,
    "dailyStepGoal": 6000,
    "friends": [
      2,
      38
    ]
  },
  {
    "id": 38,
    "name": "Carlie Hettinger",
    "address": "2624 Kohler Plains, Aracelyview TX 30296-4637",
    "email": "Adell.Cartwright24@gmail.com",
    "strideLength": 3.7,
    "dailyStepGoal": 9000,
    "friends": [
      39,
      43,
      46
    ]
  },
  {
    "id": 39,
    "name": "Trent Kuhic",
    "address": "4463 Raegan Port, Creminland GA 91393-1128",
    "email": "Uriel_Wiegand17@hotmail.com",
    "strideLength": 3.7,
    "dailyStepGoal": 2000,
    "friends": [
      3,
      43,
      34
    ]
  },
  {
    "id": 40,
    "name": "Carmel Mayer",
    "address": "120 Kunze Heights, Parisianton MI 15001-4693",
    "email": "Keagan.Goyette@gmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 3000,
    "friends": [
      21,
      3,
      43
    ]
  },
  {
    "id": 41,
    "name": "Theresia Gleason",
    "address": "0628 Lonnie Drive, New Judson MD 50375",
    "email": "Monique12@hotmail.com",
    "strideLength": 3,
    "dailyStepGoal": 3000,
    "friends": [
      44,
      15,
      24,
      45
    ]
  },
  {
    "id": 42,
    "name": "Johnathon Schulist",
    "address": "31732 Lehner Ford, Lake Thalia AR 07945",
    "email": "Annie_Yost@hotmail.com",
    "strideLength": 4.2,
    "dailyStepGoal": 10000,
    "friends": [
      8,
      11,
      35,
      3
    ]
  },
  {
    "id": 43,
    "name": "Pedro Nolan",
    "address": "611 Rhianna Path, Clevelandview AZ 03492-5773",
    "email": "Danika88@yahoo.com",
    "strideLength": 3.3,
    "dailyStepGoal": 11000,
    "friends": [
      49,
      34,
      13
    ]
  },
  {
    "id": 44,
    "name": "Cathy Kuvalis",
    "address": "44381 Eulah Knoll, Faheychester AK 07555-1491",
    "email": "Hellen39@hotmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 3000,
    "friends": [
      11,
      40,
      48,
      30,
      28
    ]
  },
  {
    "id": 45,
    "name": "Frieda Gusikowski",
    "address": "376 Grant Village, East Zanetown AZ 87641",
    "email": "Alfonzo_Champlin76@hotmail.com",
    "strideLength": 4,
    "dailyStepGoal": 10000,
    "friends": [
      7,
      4,
      11,
      23
    ]
  },
  {
    "id": 46,
    "name": "Santa Zboncak",
    "address": "9246 Collins Skyway, Roselynville IN 13036",
    "email": "Mohammed.Gislason64@yahoo.com",
    "strideLength": 4.2,
    "dailyStepGoal": 11000,
    "friends": [
      44,
      34,
      23,
      9,
      3
    ]
  },
  {
    "id": 47,
    "name": "Ramona Ankunding",
    "address": "130 Weber Lane, New Alexandroshire FL 01477",
    "email": "Jessica.Bins32@yahoo.com",
    "strideLength": 3.6,
    "dailyStepGoal": 11000,
    "friends": [
      23,
      32,
      39
    ]
  },
  {
    "id": 48,
    "name": "Kenny Zboncak",
    "address": "2077 West Loaf, Lilianefort SD 09435",
    "email": "Aliza.Schulist2@hotmail.com",
    "strideLength": 2.5,
    "dailyStepGoal": 7000,
    "friends": [
      33,
      23,
      46,
      8
    ]
  },
  {
    "id": 49,
    "name": "Vida Lueilwitz",
    "address": "85485 Lesley Islands, Predovichaven WY 84422",
    "email": "Zella.Jacobi@hotmail.com",
    "strideLength": 3.3,
    "dailyStepGoal": 8000,
    "friends": [
      3,
      14,
      45
    ]
  },
  {
    "id": 50,
    "name": "Karianne Berge",
    "address": "40555 White Knoll, New Christophechester MA 18097",
    "email": "Amy19@yahoo.com",
    "strideLength": 4.5,
    "dailyStepGoal": 10000,
    "friends": [
      46,
      48,
      12
    ]
  }
]});

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file


// An example of how you tell webpack to use an image (also need to link to it in the index.html)



// An example of how you tell webpack to use a JS file



//console.log("User Data:", userData);

const currentUser = new _user__WEBPACK_IMPORTED_MODULE_2__["default"](1, _data_users__WEBPACK_IMPORTED_MODULE_3__["default"]);
console.log(currentUser)
console.log(currentUser.userId)
console.log(currentUser.userName)
console.log(currentUser.address)
console.log(currentUser.email)
console.log(currentUser.strideLength)
console.log(currentUser.dailyStepGoal)
console.log(currentUser.friends)

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map