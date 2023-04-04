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
class User {
    constructor(userObj) {
        this.id =  userObj.id
        this.name = userObj.name
        this.address = userObj.address
        this.email = userObj.email
        this.strideLength = userObj.strideLength
        this.dailyStepGoal = userObj.dailyStepGoal
        this.friends = userObj.friends
    }

    getUserData(num) {
        const user = mock.users.reduce((acc, index) => {
        if (index.id === num) {
            return index
        }
            return acc
        }, {})
        return user
    }

    getFirstName() {
        let firstName =  this.name.split(' ')[0]
        return firstName
    }
    
    usersAvgDailyStep(usersData) {
        const averageSteps = usersData.reduce((acc, index) => {
            acc += index.dailyStepGoal/usersData.length
            return acc
        }, 0)
        return Math.round(averageSteps)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Hydration {
    constructor(hydrationData) {
        this.hydration = hydrationData
    }

    findUserData(id) {
        let currentUser = this.hydration.filter(data => data.userID === id)
        .sort((a, b)    =>  {
            return new Date(b.date)- new Date(a.date)
        })
        return currentUser
    }

    findDailyFluidIntake(id, date) {
        const userHydration = this.hydration.reduce((acc, currVal) => {
            if (id === currVal.userID && date === currVal.date) {
                acc += currVal.numOunces
            }
            return acc
        }, 0)
        return userHydration
    }

    chartWeeklyFluids(userParam, dateParam) {
        const userWeekly = this.hydration.filter(data => data.userID === userParam.id && data.date <= dateParam).sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        }).map((day) => day.numOunces)
        const week = userWeekly.slice(0, 7)
            return week
    }

    calculateFluidWeekly(userParam, dateParam) {
        const userWeekly = this.hydration.filter(data => data.userID === userParam.id && data.date <= dateParam)
        const sortWeekArray = userWeekly.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        })
        const sliceFluidWeek = sortWeekArray.slice(0, 7)
        const fluidArray = sliceFluidWeek.reduce((acc, cV) => {
            acc[cV.date] = cV
            return acc
        },[])
        return fluidArray
    }

    calculateAllTimeAverage(id) {
        const allWater = this.hydration.filter(data => data.userID === id)
        const totalOunces = allWater.reduce((acc, currVal) => {
            acc += currVal.numOunces
            return acc
        }, 0)
        return Math.floor(totalOunces / allWater.length)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hydration);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  } 

  findAvgHours(userParam) {
    let totalSleep = 0;
    let days = 0;
    this.sleepData.forEach((record) => {
      if (record.userID === userParam.id) {
        totalSleep = (totalSleep + record.hoursSlept);
        days = (days + 1);
      }
    })
    this.avgHours = (totalSleep / days).toFixed(2);
    return this.avgHours;
  }

  findAvgQuality(userParam) {
    let totalQuality = 0;
    let days = 0;
    this.sleepData.forEach((record) => {
      if(record.userID === userParam.id) {
        totalQuality = (totalQuality + record.sleepQuality);
        days = (days +1);
      }
    })
    this.avgQuality = (totalQuality / days).toFixed(2);
    return this.avgQuality;
  }

  findDailyHours(userParam, dateParam) {
    let recordObject = this.sleepData.filter(record => record.userID === userParam.id && record.date === dateParam);
    return recordObject[0].hoursSlept
  }

  findDailyQuality(userParam, dateParam) {
    let recordObject = this.sleepData.filter(record  =>  record.userID === userParam.id && record.date === dateParam);
    return recordObject[0].sleepQuality;
  }

  findWeeklyHours(userParam, dateParam) {  
    let weekArray = this.sleepData.filter(record => record.userID === userParam.id && record.date <= dateParam);
    const sortWeekArray = weekArray.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    const sliceWeekArray = sortWeekArray.slice(0, 7)
    const hoursArray = sliceWeekArray.reduce((acc, cV) => {
      acc[cV.date] = cV.hoursSlept
      return acc
    },[])
    return hoursArray
  }

  chartWeeklyHours(userParam, dateParam) {  
    let weekArray = this.sleepData.filter(record => record.userID === userParam.id && record.date <= dateParam);
    const sortWeekArray = weekArray.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    }).map(data => data.hoursSlept)
    const sliceWeekArray = sortWeekArray.slice(0, 7)
    return sliceWeekArray
  }


  findWeeklyQuality(userParam, dateParam) {
    let weekArray = this.sleepData.filter(record => record.userID === userParam.id && record.date <= dateParam);
    const sortWeekArray = weekArray.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    const sliceWeekArray = sortWeekArray.slice(0, 7)
    const qualityArray = sliceWeekArray.reduce((acc, cV) => {
      acc[cV.date] = cV.sleepQuality
      return acc;
    },[])
    return qualityArray
  }

  chartWeeklyQuality(userParam, dateParam) {  
    let weekArray = this.sleepData.filter(record => record.userID === userParam.id && record.date <= dateParam);
    const sortWeekArray = weekArray.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    }).map(data => data.sleepQuality)
    const sliceWeekArray = sortWeekArray.slice(0, 7)
    return sliceWeekArray
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sleep);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Activity {
  constructor(activityData) {
    this.activity = activityData;
  }

  milesWalkedByDay(user, date) {
    const currentUserActivity = this.activity.filter(data => data.userID === user.id)
    const userActivity = currentUserActivity.filter(data => data.date === date)
    const miles = (userActivity[0].numSteps * user.strideLength) / 5280
    return miles.toFixed(2)
  }

  minutesActiveByDay(user, date) {
    const currentUserActivity = this.activity.filter(data => data.userID === user.id)
    const userActivity = currentUserActivity.filter(data => data.date === date)
    const minutes = userActivity[0].minutesActive
    return minutes
  }

  reachStepGoal(user, date) {
    const currentUserActivity = this.activity.filter(data => data.userID === user.id)
    const userActivity = currentUserActivity.filter(data => data.date === date)
    if (userActivity[0].numSteps >= user.dailyStepGoal) {
      return 'Congrats! You did it!'
    } else {
      return 'Better luck next time!'
    }
  }

  todaysStepCount(user, date) {
    const currentUserActivity = this.activity.filter(data => data.userID === user.id)
    const userActivity = currentUserActivity.filter(data => data.date === date)
    return userActivity[0].numSteps
  }

  chartWeeklySteps(user, date) {
    const currentUserActivity = this.activity.filter(data => data.userID === user.id)
    const userActivity = currentUserActivity.filter(data => data.date <= date)
    .sort((a, b) => {
      return new Date(b.date)- new Date(a.date)
    }).map(data => data.numSteps)
    const weeklySteps = userActivity.slice(0, 7)
    return weeklySteps
  }

  weeklyStepCount(userParam, dateParam) {
    const currentUserActivity = this.activity.filter(data => data.userID === userParam.id && data.date <= dateParam)
    const userActivity = currentUserActivity.sort((a, b) => {
      return new Date(b.date)- new Date(a.date)
    })
    const weeklySteps = userActivity.slice(0, 7)
    const currentWeek = weeklySteps.reduce((acc, cV) => {
      acc[cV.date] = cV.numSteps
      return acc
    },[])
    return currentWeek
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activity);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Your fetch requests will live here!

let apiCalls;

const userAPI = fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .catch(error => console.log(error))

const sleepAPI = fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  .then(response => response.json())
  .catch(error => console.log(error))

  const hydrationAPI = fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then(response => response.json())
  .catch(error => console.log(error))

  const activityAPI = fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then(response => response.json())
  .catch(error => console.log(error))

apiCalls = [userAPI, sleepAPI, hydrationAPI, activityAPI]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiCalls);

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Lato\", sans-serif;\n}\n\nbody, html {\n  margin: 0px;\n  height: 100vh;\n  width: 100vw;\n  background-color: #272727;\n  font-weight: thin;\n  font-size: 14px;\n  color: #fefefe;\n}\n\n/* dashboard */\n.data-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  height: 100vh;\n  width: 100vw;\n  background-color: #272727;\n}\n\n/* nav bar */\n.nav-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  width: 145px;\n  background-color: #141414;\n  border-right: 1px #272727 solid;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.welcome-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 0px;\n  padding-top: 5px;\n}\n\n.profile-image, .welcome-message, .date-message {\n  margin: 5px;\n}\n\n.profile-image, .welcome-message {\n  cursor: pointer;\n}\n\n.welcome-message {\n  padding-top: 5px;\n  font-weight: bold;\n}\n\n/* containers */\n.left-container, .center-container, .right-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 95vh;\n  width: 25vw;\n  background-color: #141414;\n}\n\n.right-container {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.activity-container, .activity-tracker, .hydration-container, .community-container, .sleep-container, .hydration-tracker, .sleep-tracker {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 2.5%;\n  padding: 10px;\n  height: 85%;\n  width: 85%;\n  background-color: #3e3e3e;\n  text-align: center;\n  border-radius: 5px;\n}\n\n/* user container toggle */\n.expanded-container {\n  display: none;\n  margin-right: 5px;\n  margin-bottom: 350px;\n  margin-left: 5px;\n  overflow-wrap: normal;\n  text-align: center;\n  font-size: 12px;\n}\n\n/* background div */\n.offset {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 10px;\n  background-color: #3e3e3e;\n  opacity: 0.98;\n  border-radius: 5px;\n}\n\n/* this element takes up empty space */\n.spacer-gif {\n  margin-top: 5px;\n  height: 100px;\n  width: 100px;\n}\n\n.user-greeting {\n  font-weight: bold;\n}\n\n/* header tags */\n.community-header, .activity-header, .steps-header, .activity-header, .sleep-header, .hydration-header, .hydration-tracker-header, .activity-tracker-header, .sleep-tracker-header {\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n/* paragraph tags */\n.user-name, .user-email, .user-address, .user-stride, .user-steps, .comparison-steps, .sleep-today, .sleep-average-allTime, .sleep-quality-today, .sleep-quality-allTime, .hydration-today, .hydration-weekly {\n  margin: 5px;\n}\n\n.hydration-info, .sqi-info {\n  margin-top: 15px;\n  color: #CAFCFF;\n  cursor: pointer;\n}\n\n/* friends container */\n.friends-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.friend1-image, .friend2-image, .friend3-image, .friend4-image, .friend5-image {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.friend1, .friend2, .friend3, .friend4, .friend5 {\n  margin-top: 0px;\n}\n\n/* data visualizations */\n.chart-wrapper-bar, .chart-wrapper-doughnut {\n  height: 70%;\n  width: 100%;\n}\n\n.activity-tracker, .hydration-tracker, .sleep-tracker {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 85%;\n  padding: 10px;\n}\n\n/* chart elements */\n.activity-chart, .hydration-chart, .sleep-chart {\n  cursor: pointer;\n}\n\n/* chart increments  */\n.activity-units, .hydration-units, .sleep-units {\n  margin-top: 15px;\n  font-size: 12px;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,+BAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;AACF;;AAEA,cAAA;AACA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,uBAAA;EACA,qBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;AACF;;AAEA,YAAA;AACA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,+BAAA;EACA,4BAAA;EACA,+BAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,gBAAA;EACA,iBAAA;AACF;;AAEA,eAAA;AACA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;AACF;;AAEA;EACE,6BAAA;EACA,gCAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,UAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;AACF;;AAEA,0BAAA;AACA;EACE,aAAA;EACA,iBAAA;EACA,oBAAA;EACA,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;AACF;;AAEA,mBAAA;AACA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EAA0B,aAAA;EAC1B,kBAAA;AAEF;;AACA,sCAAA;AACA;EACE,eAAA;EACA,aAAA;EACA,YAAA;AAEF;;AACA;EACE,iBAAA;AAEF;;AACA,gBAAA;AACA;EACE,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;AAEF;;AACA,mBAAA;AACA;EACE,WAAA;AAEF;;AACA;EACE,gBAAA;EACA,cAAA;EACA,eAAA;AAEF;;AACA,sBAAA;AACA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,uBAAA;AAEF;;AACA;EACE,mBAAA;EACA,kBAAA;AAEF;;AACA;EACE,eAAA;AAEF;;AACA,wBAAA;AACA;EACE,WAAA;EACA,WAAA;AAEF;;AACA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,aAAA;AAEF;;AACA,mBAAA;AACA;EACE,eAAA;AAEF;;AACA,sBAAA;AACA;EACE,gBAAA;EACA,eAAA;AAEF","sourcesContent":["*   { \n  font-family: 'Lato', sans-serif;\n}\n\nbody, html {\n  margin: 0px;\n  height: 100vh;\n  width: 100vw;\n  background-color: #272727;\n  font-weight: thin;\n  font-size: 14px;\n  color: #fefefe;\n}\n\n/* dashboard */\n.data-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  height: 100vh;\n  width: 100vw;\n  background-color: #272727;\n}\n\n/* nav bar */\n.nav-container  {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  width: 145px;\n  background-color: #141414;\n  border-right: 1px #272727 solid;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.welcome-container  {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 0px;\n  padding-top: 5px;\n}\n\n.profile-image, .welcome-message, .date-message {\n  margin: 5px;\n}\n\n.profile-image, .welcome-message  {\n  cursor: pointer;\n}\n\n.welcome-message{\n  padding-top: 5px;\n  font-weight: bold;\n}\n\n/* containers */\n.left-container, .center-container, .right-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 95vh;\n  width: 25vw;\n  background-color: #141414;\n}\n\n.right-container  {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.activity-container, .activity-tracker, .hydration-container, .community-container, .sleep-container, .hydration-tracker, .sleep-tracker {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 2.5%;\n  padding: 10px;\n  height: 85%;\n  width: 85%;\n  background-color: #3e3e3e;\n  text-align: center;\n  border-radius: 5px;\n}\n\n/* user container toggle */\n.expanded-container  {\n  display: none;\n  margin-right: 5px;\n  margin-bottom: 350px;\n  margin-left: 5px;\n  overflow-wrap: normal;\n  text-align: center;\n  font-size: 12px;\n}\n\n/* background div */\n.offset {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 10px;\n  background-color: #3e3e3e;opacity:0.98;\n  border-radius: 5px;\n}\n\n/* this element takes up empty space */\n.spacer-gif  {\n  margin-top: 5px;\n  height: 100px;\n  width: 100px;\n}\n\n.user-greeting  {\n  font-weight: bold;\n}\n\n/* header tags */\n.community-header, .activity-header, .steps-header, .activity-header, .sleep-header, .hydration-header, .hydration-tracker-header, .activity-tracker-header, .sleep-tracker-header {\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n/* paragraph tags */\n.user-name, .user-email, .user-address, .user-stride, .user-steps, .comparison-steps, .sleep-today, .sleep-average-allTime, .sleep-quality-today, .sleep-quality-allTime, .hydration-today, .hydration-weekly {\n  margin: 5px;\n}\n\n.hydration-info, .sqi-info {\n  margin-top: 15px;\n  color: #CAFCFF;\n  cursor: pointer;\n}\n\n/* friends container */\n.friends-container  {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.friend1-image, .friend2-image, .friend3-image, .friend4-image, .friend5-image  {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.friend1, .friend2, .friend3, .friend4, .friend5  {\n  margin-top: 0px;\n}\n\n/* data visualizations */\n.chart-wrapper-bar, .chart-wrapper-doughnut  {\n  height: 70%;\n  width: 100%;\n}\n\n.activity-tracker, .hydration-tracker, .sleep-tracker {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 85%;\n  padding: 10px;\n}\n\n/* chart elements */\n.activity-chart, .hydration-chart, .sleep-chart {\n  cursor: pointer;\n}\n\n/* chart increments  */\n.activity-units, .hydration-units, .sleep-units  {\n  margin-top: 15px;\n  font-size: 12px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/logo-image.png");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image.png");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/background.png");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/background-flip.png");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/spacer-gif.gif");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/friend1-image.png");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/friend2-image.png");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/friend3-image.png");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/friend4-image.png");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/friend5-image.png");

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
/* harmony import */ var _src_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_Hydration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _src_Sleep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _src_Activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _src_apiCalls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _images_logo_image_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _images_profile_image_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _images_background_flip_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _images_spacer_gif_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _images_friend1_image_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var _images_friend2_image_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var _images_friend3_image_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18);
/* harmony import */ var _images_friend4_image_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19);
/* harmony import */ var _images_friend5_image_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20);






// global variables
let user, hydration, activity, sleep, toggle

// query selectors
const userAddress = document.querySelector('.user-address')
const userEmail = document.querySelector('.user-email')
const userStride = document.querySelector('.user-stride')
const userSteps = document.querySelector('.user-steps')
const welcomeMessage = document.querySelector('.welcome-message')
const comparisonSteps = document.querySelector('.comparison-steps')
const hydrationToday = document.querySelector('.hydration-today')
const dateMessage = document.querySelector('.date-message')
const stepsToday = document.querySelector('.activity-steps-today')
const distanceWalkedToday = document.querySelector('.activity-distance-today')
const activeMinutesToday = document.querySelector('.activity-total-today')
const numStepsWeekly = document.querySelector('.activity-steps-weekly')
const goalReached = document.querySelector('.activity-goal')
const sleepToday = document.querySelector('.sleep-today')
const sleepQualityToday = document.querySelector('.sleep-quality-today')
const sleepAverage = document.querySelector('.sleep-average-allTime')
const sleepQualityAll = document.querySelector('.sleep-quality-allTime')
const profileImage = document.querySelector('.profile-image')
const expandedContainer = document.querySelector('.expanded-container')
const userGreeting = document.querySelector('.user-greeting')

// event listeners
profileImage.addEventListener("click", toggleExpanded)
welcomeMessage.addEventListener("click", toggleExpanded)
window.addEventListener('load', () => {

// functions 
Promise.all(_src_apiCalls__WEBPACK_IMPORTED_MODULE_4__["default"])
  .then((apiCallsArray) => {
    const usersData = apiCallsArray[0].users
    const sleepData = apiCallsArray[1].sleepData
    const hydrationData = apiCallsArray[2].hydrationData
    const activityData = apiCallsArray[3].activityData
    displayRandomUser(usersData)
    displayHydration(hydrationData, usersData)
    displayActivity(activityData, usersData)
    displayDate()
    displaySleepActivity(sleepData)
    displayActivityTracker()
    displayHydrationTracker()
    displaySleepTracker()
    displayCalendar()
  })
  .catch(error => console.log(error))
})

function getRandomIndex(usersData) {
  return Math.floor(Math.random() * usersData.length)
}

function displayDate() {
  let date = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
  dateMessage.innerText = `${date}`
}

function htmlDateHelper() {
  var date = new Date()
  var month = ('0' + (date.getMonth() + 1)).slice(-2)
  var day   = ('0' + date.getDate()).slice(-2)
  var year  = date.getFullYear()
  var htmlDate = year + '/' + month + '/' + day
  return htmlDate;
}

function displayRandomUser(usersData) {
  user = new _src_User__WEBPACK_IMPORTED_MODULE_0__["default"](usersData[getRandomIndex(usersData)])
  userSteps.innerText = `Your goal is to take ${user.dailyStepGoal} steps today.`
  welcomeMessage.innerText = `${user.name}`
  comparisonSteps.innerText = `The average FitLit user has a goal of ${user.usersAvgDailyStep(usersData)} steps today.`
}

function displayActivity(activityData) {
  activity = new _src_Activity__WEBPACK_IMPORTED_MODULE_3__["default"](activityData)
  var htmlDate = htmlDateHelper()
  stepsToday.innerText = `Steps Taken: ${activity.todaysStepCount(user, htmlDate )}`
  distanceWalkedToday.innerText = `Distance Walked: ${activity.milesWalkedByDay(user, htmlDate)} miles`
  activeMinutesToday.innerText = `Minutes Active: ${activity.minutesActiveByDay(user, htmlDate)} minutes`
  goalReached.innerText = `Goal Reached?: ${activity.reachStepGoal(user, htmlDate)}`
}

function displayHydration(hydrationData) {
  hydration = new _src_Hydration__WEBPACK_IMPORTED_MODULE_1__["default"](hydrationData)
  hydrationToday.innerText = `You'ved logged ${hydration.findDailyFluidIntake(user.id, hydration.findUserData(user.id)[0].date)} oz of water today.`
}

function displaySleepActivity(sleepData) {
  sleep = new _src_Sleep__WEBPACK_IMPORTED_MODULE_2__["default"](sleepData)
  var htmlDate = htmlDateHelper()
  sleepToday.innerText = `Last Rest: ${sleep.findDailyHours(user, htmlDate)} hours`
  sleepAverage.innerText = `Average Rest: ${sleep.findAvgHours(user)} hours `
  sleepQualityToday.innerText = `Last Rest Quality: ${sleep.findDailyQuality(user, htmlDate)}`
  sleepQualityAll.innerText = `Average Rest Quality: ${sleep.findAvgQuality(user)}`
}

function displayActivityTracker() {
  const ctx = document.querySelector('.activity-chart')
  var htmlDate = htmlDateHelper()
  var weekHoursArray = activity.weeklyStepCount(user, htmlDate)
  var dateKeys = Object.keys(weekHoursArray).reverse()
  var shortenedKeys = []
  dateKeys.forEach((key)  =>  {
    shortenedKeys.push(key.slice(5))
    return shortenedKeys
  })

Chart.defaults.color = "#EDEDED",

  new Chart(ctx, {
    type: "line",
    data: {
      labels: shortenedKeys,
      datasets:[{
          color: "#fefefe",
          label: 'Goal met?',
          data: activity.reachStepGoal(user, htmlDate),
          backgroundColor: "#28B0EB",
          borderWidth: 0,
        },{
        label: "Steps taken",
        data: activity.chartWeeklySteps(user, htmlDate),
        backgroundColor: ["#CAFCFF", "#89EBF1", "#65CAF6", "#28B0EB", "#2882EB", "#095AB8", "#023572"],
        borderWidth: 1,
        stack: 'combined',
        type: 'bar',
      }]
    },
    options: {
      plugins: {
          legend: {
              display: false
          },
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
          }
        },
        y: {
          ticks: {
          }
        }
      }
  }
  });
}

function displaySleepTracker() {
  const ctx = document.querySelector('.sleep-chart')
  var htmlDate = htmlDateHelper()
  var weekHoursArray = sleep.findWeeklyHours(user, htmlDate)
  var dateKeys = Object.keys(weekHoursArray).reverse()
  var shortenedKeys = []
  dateKeys.forEach((key)  =>  {
    shortenedKeys.push(key.slice(5))
    return  shortenedKeys
  })

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: shortenedKeys,
      color: "#fefefe",
      datasets: [{
        color: "#fefefe",
        label: 'Quality of sleep',
        data: sleep.chartWeeklyQuality(user, htmlDate),
        backgroundColor: "#828282",
        borderWidth: 0,
      },
      {
        color: "white",
        label: "Hours slept",
        data: sleep.chartWeeklyHours(user, htmlDate),
        backgroundColor: ["#CAFCFF", "#89EBF1", "#65CAF6", "#28B0EB", "#2882EB", "#095AB8", "#023572"],
        stack: 'combined',
        type: 'bar',
      },],
    },
    options: {
      plugins: {
          legend: {
              display: false,
              labels:  {
                color: "white",
              },
          },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
    scales: {
      x: {
        ticks: {
          color: "white"
        }
      },
      y: {
        stacked: true,
        ticks: {
          color: "white"
        }
      }
    }
});
}

function displayHydrationTracker() {
  const ctx = document.querySelector('.hydration-chart')
  var htmlDate = htmlDateHelper()
  var weekHoursArray = hydration.calculateFluidWeekly(user, htmlDate)
  var dateKeys = Object.keys(weekHoursArray).reverse()
  var shortenedKeys = []
  dateKeys.forEach((key)  =>  {
    shortenedKeys.push(key.slice(5))
    return shortenedKeys
  })

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: shortenedKeys,
      datasets: [{
        label: "Ounces drank",
        data: hydration.chartWeeklyFluids(user, htmlDate),
        color: "#EDEDED",
        backgroundColor: ["#CAFCFF", "#89EBF1", "#65CAF6", "#28B0EB", "#2882EB", "#095AB8", "#023572"],
        borderWidth: 0,
      }]
    },
    options: {
      plugins: {
          legend: {
              display: false
          },
      },
      responsive: true,
      maintainAspectRatio: false,
  }
  });
}

function toggleExpanded() {
  if (toggle === true)  {
    toggle = false
    console.log(toggle)
    userGreeting.innerText =  `Welcome back, ${user.name.split(" ")[0]}!`
    userAddress.innerText = `${user.address}`
    userEmail.innerText = `${user.email}`
    userStride.innerText = `Stride Length: ${user.strideLength} ft`
    expandedContainer.style.display = "inline"
  } else {
    toggle = true;
    console.log(toggle)
    expandedContainer.style.display = "none"
  }
  return toggle
}

// imports


















})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map