(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./config/constConfig.js":
/*!*******************************!*\
  !*** ./config/constConfig.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const REDIS_MESSAGE = {
    SHARE_MESSAGE:{
        KEY:'SHARE_MESSAGE_KEY',
        EVENT:'SHARE_MESSAGE_EVENT',
        CONTENT:'%USER% %OPERATE% %CONTENT%'
    }
}

exports.REDIS_MESSAGE = REDIS_MESSAGE

const HAPPY_RECORD = {
    HOST_URL:'http://localhost:3001'
}

exports.HAPPY_RECORD = HAPPY_RECORD

/***/ }),

/***/ "./node_modules/css-loader/index.js!./static/assets/css/material-dashboard-react.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./static/assets/css/material-dashboard-react.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n\n =========================================================\n * Material Dashboard React - v1.5.0 based on Material Dashboard - v1.2.0\n =========================================================\n\n * Product Page: http://www.creative-tim.com/product/material-dashboard-react\n * Copyright 2018 Creative Tim (http://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)\n\n =========================================================\n\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n */\n.ct-grid {\n    stroke: rgba(255, 255, 255, 0.2);\n    stroke-width: 1px;\n    stroke-dasharray: 2px;\n}\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n    stroke: rgba(255, 255, 255, 0.8);\n}\n\n.ct-label.ct-horizontal.ct-end {\n    -webkit-box-align: flex-start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: flex-start;\n    align-items: flex-start;\n    -webkit-box-pack: flex-start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: flex-start;\n    justify-content: flex-start;\n    text-align: left;\n    text-anchor: start;\n}\n\n.ct-label {\n    color: rgba(255, 255, 255, 0.7);\n}\n\n.ct-chart-line .ct-label, .ct-chart-bar .ct-label {\n    display: block;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n}\n\n.ct-label {\n    fill: rgba(0, 0, 0, 0.4);\n    line-height: 1;\n}\nhtml * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\nbody {\n    background-color: #EEEEEE;\n    color: #3C4858;\n    margin: 0;\n    font-family: Roboto, Helvetica, Arial, sans-serif;\n    font-weight: 300;\n    line-height: 1.5em;\n}\n\nblockquote footer:before, blockquote small:before {\n    content: '\\2014   \\A0';\n}\n\nsmall {\n  font-size: 80%;\n}\n\nh1 {\n    font-size: 3em;\n    line-height: 1.15em;\n}\n\nh2 {\n    font-size: 2.4em;\n}\n\nh3 {\n    font-size: 1.825em;\n    line-height: 1.4em;\n    margin: 20px 0 10px;\n}\n\nh4 {\n    font-size: 1.3em;\n    line-height: 1.4em;\n}\n\nh5 {\n    font-size: 1.25em;\n    line-height: 1.4em;\n    margin-bottom: 15px;\n}\n\nh6 {\n    font-size: 1em;\n    text-transform: uppercase;\n    font-weight: 500;\n}\n\nbody {\n    background-color: #EEEEEE;\n    color: #3C4858;\n}\n\nblockquote p {\n    font-style: italic;\n}\n\nbody, h1, h2, h3, h4, h5, h6 {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 300;\n    line-height: 1.5em;\n}\n\na {\n    color: #9c27b0;\n    text-decoration: none;\n}\n\na:hover, a:focus {\n    color: #89229b;\n    text-decoration: none;\n}\n\nlegend {\n    border-bottom: 0;\n}\n\n* {\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n    -webkit-tap-highlight-color: transparent;\n}\n\n*:focus {\n    outline: 0;\n}\n\na:focus, a:active,\nbutton:active, button:focus, button:hover,\nbutton::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n    outline: 0 !important;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus {\n  box-shadow:0 0 0 60px white  inset;\n  -webkit-text-fill-color: #878787;\n}\n\nlegend {\n    margin-bottom: 20px;\n    font-size: 21px;\n}\n\noutput {\n    padding-top: 8px;\n    font-size: 14px;\n    line-height: 1.42857;\n}\n\nlabel {\n    font-size: 14px;\n    line-height: 1.42857;\n    color: #AAAAAA;\n    font-weight: 400;\n}\n\nfooter {\n    padding: 15px 0;\n}\n\nfooter ul {\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n}\n\nfooter ul li {\n    display: inline-block;\n}\n\nfooter ul li a {\n    color: inherit;\n    padding: 15px;\n    font-weight: 500;\n    font-size: 12px;\n    text-transform: uppercase;\n    border-radius: 3px;\n    text-decoration: none;\n    position: relative;\n    display: block;\n}\n\nfooter ul li a:hover {\n    text-decoration: none;\n}\n\n@media (max-width: 991px) {\n    body,\n    html {\n        position: relative;\n        overflow-x: hidden;\n    }\n\n    #bodyClick {\n        height: 100%;\n        width: 100%;\n        position: fixed;\n        opacity: 0;\n        top: 0;\n        left: auto;\n        right: 260px;\n        content: \"\";\n        z-index: 9999;\n        overflow-x: hidden;\n    }\n}\n", ""]);

// exports


/***/ }),

/***/ "./static sync recursive f_.*\\/reducers?\\/index.jsx":
/*!************************************************!*\
  !*** ./static sync f_.*\/reducers?\/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./f_home/reducer/index.jsx": "./static/f_home/reducer/index.jsx",
	"./f_share/reducers/index.jsx": "./static/f_share/reducers/index.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./static sync recursive f_.*\\/reducers?\\/index.jsx";

/***/ }),

/***/ "./static sync recursive f_.*\\/stores?\\/index.jsx":
/*!**********************************************!*\
  !*** ./static sync f_.*\/stores?\/index.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./f_home/store/index.jsx": "./static/f_home/store/index.jsx",
	"./f_share/stores/index.jsx": "./static/f_share/stores/index.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./static sync recursive f_.*\\/stores?\\/index.jsx";

/***/ }),

/***/ "./static/assets/css/material-dashboard-react.css":
/*!********************************************************!*\
  !*** ./static/assets/css/material-dashboard-react.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./material-dashboard-react.css */ "./node_modules/css-loader/index.js!./static/assets/css/material-dashboard-react.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./static/assets/img/reactlogo.png":
/*!*****************************************!*\
  !*** ./static/assets/img/reactlogo.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/assets/img/sidebar-2.jpg":
/*!*****************************************!*\
  !*** ./static/assets/img/sidebar-2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "310509c95512893dc661bd3a6b0d2a5d.jpg";

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react.jsx":
/*!********************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*!

 =========================================================
 * Material Dashboard React - v1.5.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

var drawerWidth = 260;

var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

var container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};

var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};

var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

var primaryColor = "#9c27b0";
var warningColor = "#ff9800";
var dangerColor = "#f44336";
var successColor = "#4caf50";
var infoColor = "#00acc1";
var roseColor = "#e91e63";
var grayColor = "#999999";

var primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
var infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
var successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
var warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
var dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};

var warningCardHeader = _extends({
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);
var successCardHeader = _extends({
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);
var dangerCardHeader = _extends({
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);
var infoCardHeader = _extends({
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);
var primaryCardHeader = _extends({
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
}, primaryBoxShadow);
var roseCardHeader = _extends({
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);

var cardActions = _extends({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);

var cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};

var title = {
  color: "#3C4858",
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: "#777",
    fontWeight: "400",
    lineHeight: "1"
  }
};

var cardTitle = _extends({}, title, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": _extends({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

var cardSubtitle = {
  marginTop: "-.375rem"
};

var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

exports.drawerWidth = drawerWidth;
exports.transition = transition;
exports.container = container;
exports.boxShadow = boxShadow;
exports.card = card;
exports.defaultFont = defaultFont;
exports.primaryColor = primaryColor;
exports.warningColor = warningColor;
exports.dangerColor = dangerColor;
exports.successColor = successColor;
exports.infoColor = infoColor;
exports.roseColor = roseColor;
exports.grayColor = grayColor;
exports.primaryBoxShadow = primaryBoxShadow;
exports.infoBoxShadow = infoBoxShadow;
exports.successBoxShadow = successBoxShadow;
exports.warningBoxShadow = warningBoxShadow;
exports.dangerBoxShadow = dangerBoxShadow;
exports.roseBoxShadow = roseBoxShadow;
exports.warningCardHeader = warningCardHeader;
exports.successCardHeader = successCardHeader;
exports.dangerCardHeader = dangerCardHeader;
exports.infoCardHeader = infoCardHeader;
exports.primaryCardHeader = primaryCardHeader;
exports.roseCardHeader = roseCardHeader;
exports.cardActions = cardActions;
exports.cardHeader = cardHeader;
exports.defaultBoxShadow = defaultBoxShadow;
exports.title = title;
exports.cardTitle = cardTitle;
exports.cardSubtitle = cardSubtitle;
exports.cardLink = cardLink;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/buttonStyle.jsx":
/*!*******************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/buttonStyle.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: _materialDashboardReact.grayColor,
    color: "#FFFFFF",
    boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: _materialDashboardReact.grayColor,
      boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal, &.material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: "#FFFFFF",
      color: _materialDashboardReact.grayColor
    }
  },
  rose: {
    backgroundColor: _materialDashboardReact.roseColor,
    boxShadow: "0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _materialDashboardReact.roseColor,
      boxShadow: "0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"
    }
  },
  primary: {
    backgroundColor: _materialDashboardReact.primaryColor,
    boxShadow: "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _materialDashboardReact.primaryColor,
      boxShadow: "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    }
  },
  info: {
    backgroundColor: _materialDashboardReact.infoColor,
    boxShadow: "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _materialDashboardReact.infoColor,
      boxShadow: "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    }
  },
  success: {
    backgroundColor: _materialDashboardReact.successColor,
    boxShadow: "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _materialDashboardReact.successColor,
      boxShadow: "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    }
  },
  warning: {
    backgroundColor: _materialDashboardReact.warningColor,
    boxShadow: "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _materialDashboardReact.warningColor,
      boxShadow: "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    }
  },
  danger: {
    backgroundColor: _materialDashboardReact.dangerColor,
    boxShadow: "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _materialDashboardReact.dangerColor,
      boxShadow: "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none"
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: _materialDashboardReact.roseColor
      }
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: _materialDashboardReact.primaryColor
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: _materialDashboardReact.infoColor
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: _materialDashboardReact.successColor
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: _materialDashboardReact.warningColor
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: _materialDashboardReact.dangerColor
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};

exports.default = buttonStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/cardBodyStyle.jsx":
/*!*********************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/cardBodyStyle.jsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyProfile: {
    marginTop: "15px"
  }
};

exports.default = cardBodyStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/cardFooterStyle.jsx":
/*!***********************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/cardFooterStyle.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cardFooterStyle = {
  cardFooter: {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterStats: {
    borderTop: "1px solid #eee",
    marginTop: "20px",
    "& svg": {
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "16px",
      height: "16px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "16px",
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardFooterChart: {
    borderTop: "1px solid #eee"
  }
};

exports.default = cardFooterStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/cardHeaderStyle.jsx":
/*!***********************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/cardHeaderStyle.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var cardHeaderStyle = {
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      margin: "0 15px",
      padding: "0",
      position: "relative",
      color: "#FFFFFF"
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px"
      }
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px"
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right"
    }
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important"
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right"
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important"
    }
  },
  cardHeaderIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      background: "transparent",
      boxShadow: "none"
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px"
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px"
      // margin: "5px 4px 0px"
    }
  },
  warningCardHeader: {
    color: "#FFFFFF",
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.warningCardHeader)
  },
  successCardHeader: {
    color: "#FFFFFF",
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.successCardHeader)
  },
  dangerCardHeader: {
    color: "#FFFFFF",
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.dangerCardHeader)
  },
  infoCardHeader: {
    color: "#FFFFFF",
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.infoCardHeader)
  },
  primaryCardHeader: {
    color: "#FFFFFF",
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.primaryCardHeader)
  },
  roseCardHeader: {
    color: "#FFFFFF",
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.roseCardHeader)
  }
};

exports.default = cardHeaderStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/cardIconStyle.jsx":
/*!*********************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/cardIconStyle.jsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var cardIconStyle = {
  cardIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      borderRadius: "3px",
      backgroundColor: "#999",
      padding: "15px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left"
    }
  },
  warningCardHeader: _materialDashboardReact.warningCardHeader,
  successCardHeader: _materialDashboardReact.successCardHeader,
  dangerCardHeader: _materialDashboardReact.dangerCardHeader,
  infoCardHeader: _materialDashboardReact.infoCardHeader,
  primaryCardHeader: _materialDashboardReact.primaryCardHeader,
  roseCardHeader: _materialDashboardReact.roseCardHeader
};

exports.default = cardIconStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/cardStyle.jsx":
/*!*****************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/cardStyle.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};

exports.default = cardStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/customInputStyle.jsx":
/*!************************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/customInputStyle.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: _materialDashboardReact.primaryColor
    }
  },
  underlineError: {
    "&:after": {
      borderColor: _materialDashboardReact.dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: _materialDashboardReact.successColor
    }
  },
  labelRoot: _extends({}, _materialDashboardReact.defaultFont, {
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857"
  }),
  labelRootError: {
    color: _materialDashboardReact.dangerColor
  },
  labelRootSuccess: {
    color: _materialDashboardReact.successColor
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  marginTop: {
    marginTop: "16px"
  },
  formControl: {
    flex: "1 1 auto",
    paddingBottom: "10px",
    margin: "0 0 0 0",
    position: "relative"
  },
  textIndentFile: {
    'text-indent': '-200px'
  }
};

exports.default = customInputStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/customTabsStyle.jsx":
/*!***********************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/customTabsStyle.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var customTabsStyle = {
  card: {
    "box-shadow": "none"
  },
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px"
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none !important"
  },
  tabsRoot: {
    minHeight: "unset !important",
    overflowX: "visible",
    "& $tabRootButton": {
      fontSize: "0.875rem"
    }
  },
  tabRootButton: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px 15px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#fff !important",
    marginLeft: "4px",
    "&:last-child": {
      marginLeft: "0px"
    }
  },
  tabLabelContainer: {
    padding: "0px"
  },
  tabLabel: {
    fontWeight: "500",
    fontSize: "12px"
  },
  tabSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "0.2s background-color 0.1s"
  },
  tabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg,& > .material-icons": {
      verticalAlign: "middle",
      margin: "-1px 5px 0 0"
    }
  }
};

exports.default = customTabsStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/dialogActionStyle.jsx":
/*!*************************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/dialogActionStyle.jsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dialogTitleStyle = {
    root: {}
};

exports.default = dialogTitleStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/dialogContentStyle.jsx":
/*!**************************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/dialogContentStyle.jsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dialogContentStyle = {
    root: {
        display: "flex",
        flexDirection: "column"
    }
};

exports.default = dialogContentStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/dialogStyle.jsx":
/*!*******************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/dialogStyle.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dialogStyle = {
    paper: {
        // width:"600px",
        // overflow:"hidden"
    }
};

exports.default = dialogStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/dialogTitleStyle.jsx":
/*!************************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/dialogTitleStyle.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dialogTitleStyle = {
    root: {}
};

exports.default = dialogTitleStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/footerStyle.jsx":
/*!*******************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/footerStyle.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var footerStyle = {
  block: _extends({
    color: "inherit",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  }, _materialDashboardReact.defaultFont, {
    fontWeight: "500",
    fontSize: "12px"
  }),
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right!important"
  },
  footer: _extends({
    bottom: "0",
    borderTop: "1px solid #e7e7e7",
    padding: "15px 0"
  }, _materialDashboardReact.defaultFont),
  container: _materialDashboardReact.container,
  a: {
    color: _materialDashboardReact.primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  }
};
exports.default = footerStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/headerLinksStyle.jsx":
/*!************************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/headerLinksStyle.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var _dropdownStyle = __webpack_require__(/*! ../dropdownStyle.jsx */ "./static/assets/jss/material-dashboard-react/dropdownStyle.jsx");

var _dropdownStyle2 = _interopRequireDefault(_dropdownStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headerLinksStyle = function headerLinksStyle(theme) {
  var _notifications, _manager, _searchWrapper;

  return _extends({}, (0, _dropdownStyle2.default)(theme), {
    search: _defineProperty({
      "& > div": {
        marginTop: "0"
      }
    }, theme.breakpoints.down("sm"), {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px",
      "& input": {
        color: "#FFFFFF"
      }
    }),
    linkText: _extends({
      zIndex: "4"
    }, _materialDashboardReact.defaultFont, {
      fontSize: "14px",
      margin: "0px"
    }),
    buttonLink: _defineProperty({}, theme.breakpoints.down("sm"), {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }),
    searchButton: _defineProperty({}, theme.breakpoints.down("sm"), {
      top: "-50px !important",
      marginRight: "22px",
      float: "right"
    }),
    margin: {
      zIndex: "4",
      margin: "0"
    },
    searchIcon: {
      width: "17px",
      zIndex: "4"
    },
    notifications: (_notifications = {
      zIndex: "4"
    }, _defineProperty(_notifications, theme.breakpoints.up("md"), {
      position: "absolute",
      top: "2px",
      border: "1px solid #FFF",
      right: "4px",
      fontSize: "9px",
      background: _materialDashboardReact.dangerColor,
      color: "#FFFFFF",
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    }), _defineProperty(_notifications, theme.breakpoints.down("sm"), _extends({}, _materialDashboardReact.defaultFont, {
      fontSize: "14px",
      marginRight: "8px"
    })), _notifications),
    manager: (_manager = {}, _defineProperty(_manager, theme.breakpoints.down("sm"), {
      width: "100%"
    }), _defineProperty(_manager, "display", "inline-block"), _manager),
    searchWrapper: (_searchWrapper = {}, _defineProperty(_searchWrapper, theme.breakpoints.down("sm"), {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    }), _defineProperty(_searchWrapper, "display", "inline-block"), _searchWrapper)
  });
};

exports.default = headerLinksStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/headerStyle.jsx":
/*!*******************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/headerStyle.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var headerStyle = function headerStyle(theme) {
  return {
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "0",
      marginBottom: "0",
      position: "absolute",
      width: "100%",
      paddingTop: "10px",
      zIndex: "1029",
      color: "#555555",
      border: "0",
      borderRadius: "3px",
      padding: "10px 0",
      transition: "all 150ms ease 0s",
      minHeight: "50px",
      display: "block"
    },
    container: _extends({}, _materialDashboardReact.container, {
      minHeight: "50px"
    }),
    flex: {
      flex: 1
    },
    title: _extends({}, _materialDashboardReact.defaultFont, {
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      margin: "0",
      "&:hover,&:focus": {
        background: "transparent"
      }
    }),
    appResponsive: {
      top: "8px"
    },
    primary: _extends({
      backgroundColor: _materialDashboardReact.primaryColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow),
    info: _extends({
      backgroundColor: _materialDashboardReact.infoColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow),
    success: _extends({
      backgroundColor: _materialDashboardReact.successColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow),
    warning: _extends({
      backgroundColor: _materialDashboardReact.warningColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow),
    danger: _extends({
      backgroundColor: _materialDashboardReact.dangerColor,
      color: "#FFFFFF"
    }, _materialDashboardReact.defaultBoxShadow)
  };
};

exports.default = headerStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/sidebarStyle.jsx":
/*!********************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/sidebarStyle.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sidebarStyle = function sidebarStyle(theme) {
  var _extends2;

  return {
    drawerPaper: _extends({
      border: "none",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      zIndex: "1"
    }, _materialDashboardReact.boxShadow, (_extends2 = {
      width: _materialDashboardReact.drawerWidth
    }, _defineProperty(_extends2, theme.breakpoints.up("md"), {
      width: _materialDashboardReact.drawerWidth,
      position: "fixed",
      height: "100%"
    }), _defineProperty(_extends2, theme.breakpoints.down("sm"), _extends({
      width: _materialDashboardReact.drawerWidth
    }, _materialDashboardReact.boxShadow, {
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: "translate3d(" + _materialDashboardReact.drawerWidth + "px, 0, 0)"
    }, _materialDashboardReact.transition)), _extends2)),
    logo: {
      position: "relative",
      padding: "15px 15px",
      zIndex: "4",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",

        height: "1px",
        right: "15px",
        width: "calc(100% - 30px)",
        backgroundColor: "rgba(180, 180, 180, 0.3)"
      }
    },
    logoLink: _extends({}, _materialDashboardReact.defaultFont, {
      textTransform: "uppercase",
      padding: "5px 0",
      display: "block",
      fontSize: "18px",
      textAlign: "left",
      fontWeight: "400",
      lineHeight: "30px",
      textDecoration: "none",
      backgroundColor: "transparent",
      "&,&:hover": {
        color: "#FFFFFF"
      }
    }),
    logoImage: {
      width: "30px",
      display: "inline-block",
      maxHeight: "30px",
      marginLeft: "10px",
      marginRight: "15px"
    },
    img: {
      width: "35px",
      top: "22px",
      position: "absolute",
      verticalAlign: "middle",
      border: "0"
    },
    background: {
      position: "absolute",
      zIndex: "1",
      height: "100%",
      width: "100%",
      display: "block",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "3",
        width: "100%",
        height: "100%",
        content: '""',
        display: "block",
        background: "#000",
        opacity: ".8"
      }
    },
    list: {
      marginTop: "20px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "unset"
    },
    item: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      "&:hover,&:focus,&:visited,&": {
        color: "#FFFFFF"
      }
    },
    itemLink: _extends({
      width: "auto",
      transition: "all 300ms linear",
      margin: "10px 15px 0",
      borderRadius: "3px",
      position: "relative",
      display: "block",
      padding: "10px 15px",
      backgroundColor: "transparent"
    }, _materialDashboardReact.defaultFont),
    itemIcon: {
      width: "24px",
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      color: "rgba(255, 255, 255, 0.8)"
    },
    itemText: _extends({}, _materialDashboardReact.defaultFont, {
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
      color: "#FFFFFF"
    }),
    whiteFont: {
      color: "#FFFFFF"
    },
    purple: _extends({
      backgroundColor: _materialDashboardReact.primaryColor
    }, _materialDashboardReact.primaryBoxShadow, {
      "&:hover": _extends({
        backgroundColor: _materialDashboardReact.primaryColor
      }, _materialDashboardReact.primaryBoxShadow)
    }),
    blue: {
      backgroundColor: _materialDashboardReact.infoColor,
      boxShadow: "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)",
      "&:hover": {
        backgroundColor: _materialDashboardReact.infoColor,
        boxShadow: "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
      }
    },
    green: {
      backgroundColor: _materialDashboardReact.successColor,
      boxShadow: "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)",
      "&:hover": {
        backgroundColor: _materialDashboardReact.successColor,
        boxShadow: "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)"
      }
    },
    orange: {
      backgroundColor: _materialDashboardReact.warningColor,
      boxShadow: "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)",
      "&:hover": {
        backgroundColor: _materialDashboardReact.warningColor,
        boxShadow: "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)"
      }
    },
    red: {
      backgroundColor: _materialDashboardReact.dangerColor,
      boxShadow: "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)",
      "&:hover": {
        backgroundColor: _materialDashboardReact.dangerColor,
        boxShadow: "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)"
      }
    },
    sidebarWrapper: {
      position: "relative",
      height: "calc(100vh - 75px)",
      overflow: "auto",
      width: "260px",
      zIndex: "4",
      overflowScrolling: "touch"
    },
    activePro: _defineProperty({}, theme.breakpoints.up("md"), {
      position: "absolute",
      width: "100%",
      bottom: "13px"
    })
  };
};

exports.default = sidebarStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/snackbarContentStyle.jsx":
/*!****************************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/snackbarContentStyle.jsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var snackbarContentStyle = {
  root: _extends({}, _materialDashboardReact.defaultFont, {
    flexWrap: "unset",
    position: "relative",
    padding: "10px 10px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "3px",
    boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  }),
  top20: {
    top: "20px"
  },
  top40: {
    top: "40px"
  },
  info: _extends({
    backgroundColor: "#00d3ee",
    color: "#ffffff"
  }, _materialDashboardReact.infoBoxShadow),
  success: _extends({
    backgroundColor: "#5cb860",
    color: "#ffffff"
  }, _materialDashboardReact.successBoxShadow),
  warning: _extends({
    backgroundColor: "#ffa21a",
    color: "#ffffff"
  }, _materialDashboardReact.warningBoxShadow),
  danger: _extends({
    backgroundColor: "#f55a4e",
    color: "#ffffff"
  }, _materialDashboardReact.dangerBoxShadow),
  primary: _extends({
    backgroundColor: "#af2cc5",
    color: "#ffffff"
  }, _materialDashboardReact.primaryBoxShadow),
  rose: _extends({
    backgroundColor: "#eb3573",
    color: "#ffffff"
  }, _materialDashboardReact.roseBoxShadow),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "11px",
    height: "11px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    padding: "0px"
  },
  icon: {
    display: "block",
    left: "15px",
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: "30px",
    height: "30px"
  },
  infoIcon: {
    color: "#00d3ee"
  },
  successIcon: {
    color: "#5cb860"
  },
  warningIcon: {
    color: "#ffa21a"
  },
  dangerIcon: {
    color: "#f55a4e"
  },
  primaryIcon: {
    color: "#af2cc5"
  },
  roseIcon: {
    color: "#eb3573"
  },
  iconMessage: {
    paddingLeft: "50px",
    display: "block"
  }
};

exports.default = snackbarContentStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/components/typographyStyle.jsx":
/*!***********************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/components/typographyStyle.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var typographyStyle = {
  defaultFontStyle: _extends({}, _materialDashboardReact.defaultFont, {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: _materialDashboardReact.primaryColor
  },
  infoText: {
    color: _materialDashboardReact.infoColor
  },
  successText: {
    color: _materialDashboardReact.successColor
  },
  warningText: {
    color: _materialDashboardReact.warningColor
  },
  dangerText: {
    color: _materialDashboardReact.dangerColor
  }
};

exports.default = typographyStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/dropdownStyle.jsx":
/*!**********************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/dropdownStyle.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dropdownStyle = function dropdownStyle(theme) {
  return {
    buttonLink: _defineProperty({}, theme.breakpoints.down("md"), {
      display: "flex",
      marginLeft: "30px",
      width: "auto"
    }),
    links: _defineProperty({
      width: "20px",
      height: "20px",
      zIndex: "4"
    }, theme.breakpoints.down("md"), {
      display: "block",
      width: "30px",
      height: "30px",
      color: "#a9afbb",
      marginRight: "15px"
    }),
    linkText: _extends({
      zIndex: "4"
    }, _materialDashboardReact.defaultFont, {
      fontSize: "14px"
    }),
    popperClose: {
      pointerEvents: "none"
    },
    pooperResponsive: _defineProperty({}, theme.breakpoints.down("md"), {
      zIndex: "1640",
      position: "static",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      WebkitBoxShadow: "none",
      boxShadow: "none",
      color: "black"
    }),
    pooperNav: _defineProperty({}, theme.breakpoints.down("sm"), {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "none !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "0rem",
        marginRight: "0rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "0px !important",
        padding: "0px !important",
        backgroundColor: "transparent !important",
        "& ul li": {
          color: "#FFF !important",
          margin: "10px 15px 0!important",
          padding: "10px 15px !important",
          "&:hover": {
            backgroundColor: "hsla(0,0%,78%,.2)",
            boxShadow: "none"
          }
        }
      }
    }),
    dropdown: {
      borderRadius: "3px",
      border: "0",
      boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
      top: "100%",
      zIndex: "1000",
      minWidth: "160px",
      padding: "5px 0",
      margin: "2px 0 0",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: "#fff",
      WebkitBackgroundClip: "padding-box",
      backgroundClip: "padding-box"
    },
    dropdownItem: _extends({}, _materialDashboardReact.defaultFont, {
      fontSize: "13px",
      padding: "10px 20px",
      margin: "0 5px",
      borderRadius: "2px",
      WebkitTransition: "all 150ms linear",
      MozTransition: "all 150ms linear",
      OTransition: "all 150ms linear",
      MsTransition: "all 150ms linear",
      transition: "all 150ms linear",
      display: "block",
      clear: "both",
      fontWeight: "400",
      lineHeight: "1.42857143",
      color: "#333",
      whiteSpace: "nowrap",
      height: "unset",
      "&:hover": _extends({
        backgroundColor: _materialDashboardReact.primaryColor,
        color: "#FFFFFF"
      }, _materialDashboardReact.primaryBoxShadow)
    })
  };
};

exports.default = dropdownStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx":
/*!*******************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appStyle = function appStyle(theme) {
  var _extends2;

  return {
    wrapper: {
      position: "relative",
      top: "0",
      height: "100vh"
    },
    mainPanel: _extends((_extends2 = {}, _defineProperty(_extends2, theme.breakpoints.up("md"), {
      width: "calc(100% - " + _materialDashboardReact.drawerWidth + "px)"
    }), _defineProperty(_extends2, "overflow", "auto"), _defineProperty(_extends2, "position", "relative"), _defineProperty(_extends2, "float", "right"), _extends2), _materialDashboardReact.transition, {
      maxHeight: "100%",
      width: "100%",
      overflowScrolling: "touch"
    }),
    content: {
      marginTop: "70px",
      padding: "30px 15px",
      minHeight: "calc(100vh - 123px)"
    },
    container: _materialDashboardReact.container,
    map: {
      marginTop: "70px"
    }
  };
};

exports.default = appStyle;

/***/ }),

/***/ "./static/assets/jss/material-dashboard-react/views/dashboardStyle.jsx":
/*!*****************************************************************************!*\
  !*** ./static/assets/jss/material-dashboard-react/views/dashboardStyle.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialDashboardReact = __webpack_require__(/*! ../../material-dashboard-react.jsx */ "./static/assets/jss/material-dashboard-react.jsx");

var dashboardStyle = function dashboardStyle(theme) {
  return {
    successText: {
      color: _materialDashboardReact.successColor
    },
    upArrowCardCategory: {
      width: "16px",
      height: "16px"
    },
    stats: {
      color: "#999999",
      display: "inline-flex",
      fontSize: "12px",
      lineHeight: "22px",
      "& svg": {
        top: "4px",
        width: "16px",
        height: "16px",
        position: "relative",
        marginRight: "3px",
        marginLeft: "3px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        top: "4px",
        fontSize: "16px",
        position: "relative",
        marginRight: "3px",
        marginLeft: "3px"
      }
    },
    cardCategory: {
      color: "#999999",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      paddingTop: "10px",
      marginBottom: "0"
    },
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitle: {
      color: "#3C4858",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontWeight: "400",
        lineHeight: "1"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontWeight: "400",
        lineHeight: "1"
      }
    },
    container: {
      display: "flex",
      flexDirection: "column"
    },
    button: {
      width: "40px",
      height: "40px",
      margin: theme.spacing.unit,
      background: 'linear-gradient(60deg, #26c6da, #00acc1)',
      '& svg': {
        color: '#fff'
      },
      '&:hover': {
        background: 'linear-gradient(60deg, #1d97a7, #00acc1)'
      }
    },
    sizeSmall: {
      fontSize: "0.8125rem"
    }
  };
};

exports.default = dashboardStyle;

/***/ }),

/***/ "./static/f_common/actions/User/userInfo.jsx":
/*!***************************************************!*\
  !*** ./static/f_common/actions/User/userInfo.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.F_COMMON_FETCH_USER_READ_MESSAGE_ACTION = exports.F_COMMON_FETCH_USER_MESSAGE_ACTION = exports.F_COMMON_FETCH_LOGOUT_USER_ACTION = exports.F_COMMON_FETCH_MODIFY_USER_ACTION = exports.F_COMMON_FETCH_ADD_USER_ACTION = exports.F_COMMON_FETCH_LOGIN_USER_ACTION = undefined;

var _userInfo = __webpack_require__(/*! ../../constants/User/userInfo */ "./static/f_common/constants/User/userInfo.jsx");

var types = _interopRequireWildcard(_userInfo);

var _http = __webpack_require__(/*! ../../../public/http */ "./static/public/http.js");

var _api = __webpack_require__(/*! ../../constants/api */ "./static/f_common/constants/api.jsx");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var F_COMMON_FETCH_LOGIN_USER_ACTION = exports.F_COMMON_FETCH_LOGIN_USER_ACTION = function F_COMMON_FETCH_LOGIN_USER_ACTION(params) {
    return function (dispatch /*, getState*/) {
        // let state = getState();
        (0, _http.fetchPost)(_api.API.loginUser, params).then(function (res) {
            return res.data;
        }).then(function (json) {
            if (json.status) {
                window.location.reload();
            }
        });
    };
};

var F_COMMON_FETCH_ADD_USER_ACTION = exports.F_COMMON_FETCH_ADD_USER_ACTION = function F_COMMON_FETCH_ADD_USER_ACTION(params, callback) {
    return function (dispatch /*, getState*/) {
        // let state = getState();
        (0, _http.fetchPost)(_api.API.addUser, params).then(function (res) {
            return res.data;
        }).then(function (json) {
            if (json.status) {
                window.location.reload();
            } else {
                callback(json.type);
            }
        });
    };
};
var F_COMMON_FETCH_MODIFY_USER_ACTION = exports.F_COMMON_FETCH_MODIFY_USER_ACTION = function F_COMMON_FETCH_MODIFY_USER_ACTION(params, callback) {
    return function (dispatch /*, getState*/) {
        // let state = getState();
        (0, _http.fetchPost)(_api.API.modifyUser, params).then(function (res) {
            return res.data;
        }).then(function (json) {
            if (json.status) {
                window.location.reload();
            } else {
                callback(json.type);
            }
        });
    };
};
var F_COMMON_FETCH_LOGOUT_USER_ACTION = exports.F_COMMON_FETCH_LOGOUT_USER_ACTION = function F_COMMON_FETCH_LOGOUT_USER_ACTION(params) {
    return function (dispatch /*, getState*/) {
        // let state = getState();
        (0, _http.fetchPost)(_api.API.logoutUser, params).then(function (res) {
            return res.data;
        }).then(function (json) {
            if (json.status) {
                window.location.reload();
            }
        });
    };
};

var F_COMMON_FETCH_USER_MESSAGE_ACTION = exports.F_COMMON_FETCH_USER_MESSAGE_ACTION = function F_COMMON_FETCH_USER_MESSAGE_ACTION(resolve, reject) {
    return function (dispatch /*, getState*/) {
        if (!window.__USER_INFO__) return;
        (0, _http.fetchPost)(_api.API.getMessage).then(function (res) {
            return res.data;
        }).then(function (json) {
            resolve(json);
        });
    };
};
var F_COMMON_FETCH_USER_READ_MESSAGE_ACTION = exports.F_COMMON_FETCH_USER_READ_MESSAGE_ACTION = function F_COMMON_FETCH_USER_READ_MESSAGE_ACTION(_id, resolve, reject) {
    return function (dispatch /*, getState*/) {
        if (!window.__USER_INFO__) return;
        (0, _http.fetchGet)(_api.API.readMessage + '/' + _id).then(function (res) {
            return res.data;
        }).then(function (json) {
            resolve(json);
        });
    };
};

/***/ }),

/***/ "./static/f_common/components/Card/Card.jsx":
/*!**************************************************!*\
  !*** ./static/f_common/components/Card/Card.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _cardStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/cardStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/cardStyle.jsx");

var _cardStyle2 = _interopRequireDefault(_cardStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


function Card(_ref) {
  var _classNames;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      plain = props.plain,
      profile = props.profile,
      chart = props.chart,
      rest = _objectWithoutProperties(props, ["classes", "className", "children", "plain", "profile", "chart"]);

  var cardClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.card, true), _defineProperty(_classNames, classes.cardPlain, plain), _defineProperty(_classNames, classes.cardProfile, profile), _defineProperty(_classNames, classes.cardChart, chart), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardClasses }, rest),
    children
  );
}

Card.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  plain: _propTypes2.default.bool,
  profile: _propTypes2.default.bool,
  chart: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_cardStyle2.default)(Card);

/***/ }),

/***/ "./static/f_common/components/Card/CardBody.jsx":
/*!******************************************************!*\
  !*** ./static/f_common/components/Card/CardBody.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _cardBodyStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/cardBodyStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/cardBodyStyle.jsx");

var _cardBodyStyle2 = _interopRequireDefault(_cardBodyStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


function CardBody(_ref) {
  var _classNames;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      plain = props.plain,
      profile = props.profile,
      rest = _objectWithoutProperties(props, ["classes", "className", "children", "plain", "profile"]);

  var cardBodyClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardBody, true), _defineProperty(_classNames, classes.cardBodyPlain, plain), _defineProperty(_classNames, classes.cardBodyProfile, profile), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardBodyClasses }, rest),
    children
  );
}

CardBody.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  plain: _propTypes2.default.bool,
  profile: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_cardBodyStyle2.default)(CardBody);

/***/ }),

/***/ "./static/f_common/components/Card/CardContent.jsx":
/*!*********************************************************!*\
  !*** ./static/f_common/components/Card/CardContent.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _ButtonBase = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");

var _Delete2 = _interopRequireDefault(_Delete);

var _Edit = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      flex: '1 1 33.33333%',
      maxWidth: '33.33333%',
      display: "block"

    },
    '@media screen and (max-width: 900px)': {
      root: {
        flex: '1 1 50%',
        maxWidth: '50%',
        display: "block"
      }
    },
    '@media screen and (max-width: 600px)': {
      root: {
        flex: '1 1 100%',
        maxWidth: '100%',
        display: "block"
      }
    },
    paper: {
      margin: '10px 10px',
      padding: theme.spacing.unit * 2,
      height: "130px",
      overflow: 'hidden',
      transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      'border-radius': "6px",
      '&:hover': {
        'box-shadow': "0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 2px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 2px -2px rgba(0, 0, 0, 0.12)"
      },
      '&:hover button': {
        display: 'inline-flex'
      }
    },
    container: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    imgbox: {
      width: 128,
      height: 128,
      marginRight: 10
    },
    image: {
      width: 128,
      height: 128
    },

    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    },
    content: {
      flex: '1 1 auto',
      maxWidth: 'none',
      width: 'auto'
    },
    description: {
      height: "20px",
      overflow: 'hidden'
    },
    author: {
      height: "20px",
      overflow: 'hidden'
    },
    button: {
      width: '40px',
      minWidth: '40px',
      display: 'none'
    }
  };
};

function ComplexGrid(props) {
  var classes = props.classes,
      info = props.info,
      onOpenEditDialog = props.onOpenEditDialog,
      deleteItem = props.deleteItem;

  return _react2.default.createElement(
    'a',
    { target: info.target, href: info.add ? 'javascript:void(0)' : info.link, className: classes.root },
    _react2.default.createElement(
      _Paper2.default,
      { className: classes.paper },
      _react2.default.createElement(
        _Grid2.default,
        { container: true, wrap: 'nowrap', direction: 'row', spacing: 8, className: classes.container },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, className: classes.imgbox },
          _react2.default.createElement(
            _ButtonBase2.default,
            { className: classes.image },
            _react2.default.createElement('img', { className: classes.img, alt: 'complex', src: info.icon ? info.icon : info.img, width: '128px', height: '128px' })
          )
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: 3, sm: true, container: true, className: classes.content },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: true, container: true, direction: 'column', spacing: 8 },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: true },
              _react2.default.createElement(
                _Typography2.default,
                { gutterBottom: true, variant: 'h5', noWrap: true },
                info.title
              ),
              _react2.default.createElement(
                _Typography2.default,
                { gutterBottom: true, className: classes.description },
                info.description ? info.description : info.add ? '' : '暂无描述'
              ),
              _react2.default.createElement(
                _Typography2.default,
                { color: 'textSecondary', className: classes.author },
                info.author ? '记录：' + info.author.nickname : ''
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { item: true },
              window.__USER_INFO__ && window.__USER_INFO__._id == info.author._id ? _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                  _core.Tooltip,
                  { title: '\u4FEE\u6539\u5185\u5BB9' },
                  _react2.default.createElement(
                    _Button2.default,
                    { style: { cursor: 'pointer' }, onMouseDown: function onMouseDown(ev) {
                        onOpenEditDialog(info);ev.nativeEvent.stopImmediatePropagation();ev.defaultPrevented;
                      }, className: classes.button },
                    _react2.default.createElement(_Edit2.default, { color: 'action' })
                  )
                ),
                _react2.default.createElement(
                  _core.Tooltip,
                  { title: '\u5220\u9664\u5185\u5BB9' },
                  _react2.default.createElement(
                    _Button2.default,
                    { style: { cursor: 'pointer' }, className: classes.button, onClick: function onClick(ev) {
                        deleteItem(info);ev.nativeEvent.stopPropagation();ev.nativeEvent.stopImmediatePropagation();ev.nativeEvent.preventDefault();
                      } },
                    _react2.default.createElement(_Delete2.default, { color: 'action' })
                  )
                )
              ) : null
            )
          )
        )
      )
    )
  );
}

ComplexGrid.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ComplexGrid);

/***/ }),

/***/ "./static/f_common/components/Card/CardFooter.jsx":
/*!********************************************************!*\
  !*** ./static/f_common/components/Card/CardFooter.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _cardFooterStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/cardFooterStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/cardFooterStyle.jsx");

var _cardFooterStyle2 = _interopRequireDefault(_cardFooterStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


function CardFooter(_ref) {
  var _classNames;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      plain = props.plain,
      profile = props.profile,
      stats = props.stats,
      chart = props.chart,
      rest = _objectWithoutProperties(props, ["classes", "className", "children", "plain", "profile", "stats", "chart"]);

  var cardFooterClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardFooter, true), _defineProperty(_classNames, classes.cardFooterPlain, plain), _defineProperty(_classNames, classes.cardFooterProfile, profile), _defineProperty(_classNames, classes.cardFooterStats, stats), _defineProperty(_classNames, classes.cardFooterChart, chart), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardFooterClasses }, rest),
    children
  );
}

CardFooter.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  plain: _propTypes2.default.bool,
  profile: _propTypes2.default.bool,
  stats: _propTypes2.default.bool,
  chart: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_cardFooterStyle2.default)(CardFooter);

/***/ }),

/***/ "./static/f_common/components/Card/CardHeader.jsx":
/*!********************************************************!*\
  !*** ./static/f_common/components/Card/CardHeader.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _cardHeaderStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/cardHeaderStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/cardHeaderStyle.jsx");

var _cardHeaderStyle2 = _interopRequireDefault(_cardHeaderStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


function CardHeader(_ref) {
  var _classNames;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      color = props.color,
      plain = props.plain,
      stats = props.stats,
      icon = props.icon,
      rest = _objectWithoutProperties(props, ["classes", "className", "children", "color", "plain", "stats", "icon"]);

  var cardHeaderClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardHeader, true), _defineProperty(_classNames, classes[color + "CardHeader"], color), _defineProperty(_classNames, classes.cardHeaderPlain, plain), _defineProperty(_classNames, classes.cardHeaderStats, stats), _defineProperty(_classNames, classes.cardHeaderIcon, icon), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardHeaderClasses }, rest),
    children
  );
}

CardHeader.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  plain: _propTypes2.default.bool,
  stats: _propTypes2.default.bool,
  icon: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_cardHeaderStyle2.default)(CardHeader);

/***/ }),

/***/ "./static/f_common/components/Card/CardIcon.jsx":
/*!******************************************************!*\
  !*** ./static/f_common/components/Card/CardIcon.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _cardIconStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/cardIconStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/cardIconStyle.jsx");

var _cardIconStyle2 = _interopRequireDefault(_cardIconStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


function CardIcon(_ref) {
  var _classNames;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      color = props.color,
      rest = _objectWithoutProperties(props, ["classes", "className", "children", "color"]);

  var cardIconClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardIcon, true), _defineProperty(_classNames, classes[color + "CardHeader"], color), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardIconClasses }, rest),
    children
  );
}

CardIcon.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"])
};

exports.default = (0, _withStyles2.default)(_cardIconStyle2.default)(CardIcon);

/***/ }),

/***/ "./static/f_common/components/CustomButtons/Button.jsx":
/*!*************************************************************!*\
  !*** ./static/f_common/components/CustomButtons/Button.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _buttonStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/buttonStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/buttonStyle.jsx");

var _buttonStyle2 = _interopRequireDefault(_buttonStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components


// material-ui components


function RegularButton(_ref) {
  var _classNames;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      color = props.color,
      round = props.round,
      children = props.children,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      block = props.block,
      link = props.link,
      justIcon = props.justIcon,
      className = props.className,
      muiClasses = props.muiClasses,
      rest = _objectWithoutProperties(props, ["classes", "color", "round", "children", "disabled", "simple", "size", "block", "link", "justIcon", "className", "muiClasses"]);

  var btnClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.button, true), _defineProperty(_classNames, classes[size], size), _defineProperty(_classNames, classes[color], color), _defineProperty(_classNames, classes.round, round), _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.simple, simple), _defineProperty(_classNames, classes.block, block), _defineProperty(_classNames, classes.link, link), _defineProperty(_classNames, classes.justIcon, justIcon), _defineProperty(_classNames, className, className), _classNames));
  return _react2.default.createElement(
    _Button2.default,
    _extends({}, rest, { classes: muiClasses, className: btnClasses }),
    children
  );
}

RegularButton.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  color: _propTypes2.default.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "transparent"]),
  size: _propTypes2.default.oneOf(["sm", "lg"]),
  simple: _propTypes2.default.bool,
  round: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  link: _propTypes2.default.bool,
  justIcon: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  // use this to pass the classes props from Material-UI
  muiClasses: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(_buttonStyle2.default)(RegularButton);

/***/ }),

/***/ "./static/f_common/components/CustomInput/CustomInput.jsx":
/*!****************************************************************!*\
  !*** ./static/f_common/components/CustomInput/CustomInput.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputLabel = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Input = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");

var _Input2 = _interopRequireDefault(_Input);

var _Clear = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");

var _Clear2 = _interopRequireDefault(_Clear);

var _Check = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");

var _Check2 = _interopRequireDefault(_Check);

var _customInputStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/customInputStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/customInputStyle.jsx");

var _customInputStyle2 = _interopRequireDefault(_customInputStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// @material-ui/icons

// core components


function CustomInput(_ref) {
  var _classNames, _classNames2;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      error = props.error,
      success = props.success,
      children = props.children;


  var labelClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, " " + classes.labelRootError, error), _defineProperty(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.underlineError, error), _defineProperty(_classNames2, classes.underlineSuccess, success && !error), _defineProperty(_classNames2, classes.underline, true), _classNames2));
  var marginTop = (0, _classnames2.default)(_defineProperty({}, classes.marginTop, labelText === undefined));
  var textIndentFile = (0, _classnames2.default)(_defineProperty({}, classes.textIndentFile, inputProps.type == 'file'));
  return _react2.default.createElement(
    _FormControl2.default,
    _extends({}, formControlProps, {
      className: formControlProps.className + " " + classes.formControl
    }),
    labelText !== undefined ? _react2.default.createElement(
      _InputLabel2.default,
      _extends({
        className: classes.labelRoot + labelClasses,
        htmlFor: id
      }, labelProps),
      labelText
    ) : null,
    _react2.default.createElement(_Input2.default, _extends({
      classes: {
        root: marginTop,
        disabled: classes.disabled,
        underline: underlineClasses,
        input: textIndentFile
      },
      id: id
    }, inputProps)),
    error ? _react2.default.createElement(_Clear2.default, { className: classes.feedback + " " + classes.labelRootError }) : success ? _react2.default.createElement(_Check2.default, { className: classes.feedback + " " + classes.labelRootSuccess }) : null,
    children
  );
}

CustomInput.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  labelText: _propTypes2.default.node,
  labelProps: _propTypes2.default.object,
  id: _propTypes2.default.string,
  inputProps: _propTypes2.default.object,
  formControlProps: _propTypes2.default.object,
  error: _propTypes2.default.bool,
  success: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_customInputStyle2.default)(CustomInput);

/***/ }),

/***/ "./static/f_common/components/CustomTabs/CustomTabs.jsx":
/*!**************************************************************!*\
  !*** ./static/f_common/components/CustomTabs/CustomTabs.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Tabs = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/Tabs/index.js");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/Tab/index.js");

var _Tab2 = _interopRequireDefault(_Tab);

var _Card = __webpack_require__(/*! ../Card/Card.jsx */ "./static/f_common/components/Card/Card.jsx");

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = __webpack_require__(/*! ../Card/CardBody.jsx */ "./static/f_common/components/Card/CardBody.jsx");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardHeader = __webpack_require__(/*! ../Card/CardHeader.jsx */ "./static/f_common/components/Card/CardHeader.jsx");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _customTabsStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/customTabsStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/customTabsStyle.jsx");

var _customTabsStyle2 = _interopRequireDefault(_customTabsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components


// material-ui components

// core components


var CustomTabs = function (_React$Component) {
  _inherits(CustomTabs, _React$Component);

  function CustomTabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomTabs.__proto__ || Object.getPrototypeOf(CustomTabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: 0
    }, _this.handleChange = function (event, value) {
      _this.setState({ value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomTabs, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          headerColor = _props.headerColor,
          plainTabs = _props.plainTabs,
          tabs = _props.tabs,
          title = _props.title,
          rtlActive = _props.rtlActive;

      var cardTitle = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardTitle, true), _defineProperty(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
      return _react2.default.createElement(
        _Card2.default,
        { plain: plainTabs, className: classes.card },
        _react2.default.createElement(
          _CardHeader2.default,
          { color: headerColor, plain: plainTabs },
          title !== undefined ? _react2.default.createElement(
            "div",
            { className: cardTitle },
            title
          ) : null,
          _react2.default.createElement(
            _Tabs2.default,
            {
              value: this.state.value,
              onChange: this.handleChange,
              classes: {
                root: classes.tabsRoot,
                indicator: classes.displayNone,
                scrollButtons: classes.displayNone
              },
              scrollable: true,
              scrollButtons: "auto"
            },
            tabs.map(function (prop, key) {
              var icon = {};
              if (prop.tabIcon) {
                icon = {
                  icon: _react2.default.createElement(prop.tabIcon, null)
                };
              }
              return _react2.default.createElement(_Tab2.default, _extends({
                classes: {
                  root: classes.tabRootButton,
                  labelContainer: classes.tabLabelContainer,
                  label: classes.tabLabel,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper
                },
                key: key,
                label: prop.tabName
              }, icon));
            })
          )
        ),
        _react2.default.createElement(
          _CardBody2.default,
          null,
          tabs.map(function (prop, key) {
            if (key === _this2.state.value) {
              return _react2.default.createElement(
                "div",
                { key: key },
                prop.tabContent
              );
            }
            return null;
          })
        )
      );
    }
  }]);

  return CustomTabs;
}(_react2.default.Component);

CustomTabs.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  headerColor: _propTypes2.default.oneOf(["warning", "success", "danger", "info", "primary"]),
  title: _propTypes2.default.string,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    tabName: _propTypes2.default.string.isRequired,
    tabIcon: _propTypes2.default.func,
    tabContent: _propTypes2.default.node.isRequired
  })),
  rtlActive: _propTypes2.default.bool,
  plainTabs: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_customTabsStyle2.default)(CustomTabs);

/***/ }),

/***/ "./static/f_common/components/Dialog/Dialog.jsx":
/*!******************************************************!*\
  !*** ./static/f_common/components/Dialog/Dialog.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");

var _DialogContentText2 = _interopRequireDefault(_DialogContentText);

var _dialogStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/dialogStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/dialogStyle.jsx");

var _dialogStyle2 = _interopRequireDefault(_dialogStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


var DialogComponent = function (_React$Component) {
  _inherits(DialogComponent, _React$Component);

  function DialogComponent(props) {
    _classCallCheck(this, DialogComponent);

    return _possibleConstructorReturn(this, (DialogComponent.__proto__ || Object.getPrototypeOf(DialogComponent)).call(this, props));
  }

  _createClass(DialogComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          muiClasses = _props.muiClasses,
          open = _props.open,
          rest = _objectWithoutProperties(_props, ["children", "muiClasses", "open"]);

      return _react2.default.createElement(
        _Dialog2.default,
        _extends({}, rest, { open: open, classes: muiClasses }),
        children
      );
    }
  }]);

  return DialogComponent;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_dialogStyle2.default)(DialogComponent);

/***/ }),

/***/ "./static/f_common/components/Dialog/DialogAction.jsx":
/*!************************************************************!*\
  !*** ./static/f_common/components/Dialog/DialogAction.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _dialogActionStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/dialogActionStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/dialogActionStyle.jsx");

var _dialogActionStyle2 = _interopRequireDefault(_dialogActionStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


var DialogActionComponent = function (_React$Component) {
  _inherits(DialogActionComponent, _React$Component);

  function DialogActionComponent(props) {
    _classCallCheck(this, DialogActionComponent);

    return _possibleConstructorReturn(this, (DialogActionComponent.__proto__ || Object.getPrototypeOf(DialogActionComponent)).call(this, props));
  }

  _createClass(DialogActionComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      return _react2.default.createElement(
        _DialogActions2.default,
        rest,
        children
      );
    }
  }]);

  return DialogActionComponent;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_dialogActionStyle2.default)(DialogActionComponent);

/***/ }),

/***/ "./static/f_common/components/Dialog/DialogContent.jsx":
/*!*************************************************************!*\
  !*** ./static/f_common/components/Dialog/DialogContent.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");

var _DialogContentText2 = _interopRequireDefault(_DialogContentText);

var _dialogContentStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/dialogContentStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/dialogContentStyle.jsx");

var _dialogContentStyle2 = _interopRequireDefault(_dialogContentStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


var DialogContentComponent = function (_React$Component) {
  _inherits(DialogContentComponent, _React$Component);

  function DialogContentComponent(props) {
    _classCallCheck(this, DialogContentComponent);

    return _possibleConstructorReturn(this, (DialogContentComponent.__proto__ || Object.getPrototypeOf(DialogContentComponent)).call(this, props));
  }

  _createClass(DialogContentComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      return _react2.default.createElement(
        _DialogContent2.default,
        rest,
        children
      );
    }
  }]);

  return DialogContentComponent;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_dialogContentStyle2.default)(DialogContentComponent);

/***/ }),

/***/ "./static/f_common/components/Dialog/DialogTitle.jsx":
/*!***********************************************************!*\
  !*** ./static/f_common/components/Dialog/DialogTitle.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");

var _DialogContentText2 = _interopRequireDefault(_DialogContentText);

var _dialogTitleStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/dialogTitleStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/dialogTitleStyle.jsx");

var _dialogTitleStyle2 = _interopRequireDefault(_dialogTitleStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


var DialogTitleComponent = function (_React$Component) {
  _inherits(DialogTitleComponent, _React$Component);

  function DialogTitleComponent(props) {
    _classCallCheck(this, DialogTitleComponent);

    return _possibleConstructorReturn(this, (DialogTitleComponent.__proto__ || Object.getPrototypeOf(DialogTitleComponent)).call(this, props));
  }

  _createClass(DialogTitleComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      return _react2.default.createElement(
        _DialogTitle2.default,
        rest,
        children
      );
    }
  }]);

  return DialogTitleComponent;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_dialogTitleStyle2.default)(DialogTitleComponent);

/***/ }),

/***/ "./static/f_common/components/Footer/Footer.jsx":
/*!******************************************************!*\
  !*** ./static/f_common/components/Footer/Footer.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");

var _List2 = _interopRequireDefault(_List);

var _footerStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/footerStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/footerStyle.jsx");

var _footerStyle2 = _interopRequireDefault(_footerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// core components


function Footer(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes;

  return _react2.default.createElement(
    "footer",
    { className: classes.footer },
    _react2.default.createElement(
      "div",
      { className: classes.container },
      _react2.default.createElement(
        "div",
        { className: classes.left },
        _react2.default.createElement(
          _List2.default,
          { className: classes.list },
          _react2.default.createElement(
            _ListItem2.default,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              { href: "https://github.com/sunjp123", className: classes.block },
              "github"
            )
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              { href: "https://www.cnblogs.com/sjptech/", target: "_blank", className: classes.block },
              "Blog"
            )
          )
        )
      ),
      _react2.default.createElement(
        "p",
        { className: classes.right },
        _react2.default.createElement(
          "span",
          null,
          "\xA9 ",
          1900 + new Date().getYear(),
          " ",
          "\u8BB0\u5F55\u4F60\u7684\u5FEB\u4E50"
        )
      )
    )
  );
}

Footer.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_footerStyle2.default)(Footer);

/***/ }),

/***/ "./static/f_common/components/Grid/GridContainer.jsx":
/*!***********************************************************!*\
  !*** ./static/f_common/components/Grid/GridContainer.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components


var style = {
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  },
  addButton: {
    width: "170px"
  }
};

function GridContainer(props) {
  var classes = props.classes,
      children = props.children,
      addButton = props.addButton,
      rest = _objectWithoutProperties(props, ["classes", "children", "addButton"]);

  return _react2.default.createElement(
    _Grid2.default,
    _extends({ container: true }, rest, { className: classes.grid + " " + (addButton ? classes.addButton : '') }),
    children
  );
}

exports.default = (0, _withStyles2.default)(style)(GridContainer);

/***/ }),

/***/ "./static/f_common/components/Grid/GridItem.jsx":
/*!******************************************************!*\
  !*** ./static/f_common/components/Grid/GridItem.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components


var style = {
  grid: {
    padding: "0 15px !important"
  }
};

function GridItem(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      children = props.children,
      rest = _objectWithoutProperties(props, ["classes", "children"]);

  return _react2.default.createElement(
    _Grid2.default,
    _extends({ item: true }, rest, { className: classes.grid }),
    children
  );
}

exports.default = (0, _withStyles2.default)(style)(GridItem);

/***/ }),

/***/ "./static/f_common/components/Header/Header.jsx":
/*!******************************************************!*\
  !*** ./static/f_common/components/Header/Header.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Hidden = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Menu = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _headerLinksContainer = __webpack_require__(/*! ../../containers/header/headerLinksContainer */ "./static/f_common/containers/header/headerLinksContainer.js");

var _headerLinksContainer2 = _interopRequireDefault(_headerLinksContainer);

var _Button = __webpack_require__(/*! ../CustomButtons/Button.jsx */ "./static/f_common/components/CustomButtons/Button.jsx");

var _Button2 = _interopRequireDefault(_Button);

var _headerStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/headerStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/headerStyle.jsx");

var _headerStyle2 = _interopRequireDefault(_headerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// @material-ui/icons

// core components


function Header(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  function makeBrand() {
    var name;
    props.routes.map(function (prop, key) {
      if (prop.path === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  var classes = props.classes,
      color = props.color;

  var appBarClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes[color], color));
  return _react2.default.createElement(
    _AppBar2.default,
    { className: classes.appBar + appBarClasses },
    _react2.default.createElement(
      _Toolbar2.default,
      { className: classes.container },
      _react2.default.createElement(
        "div",
        { className: classes.flex },
        _react2.default.createElement(
          _Button2.default,
          { color: "transparent", href: "#", className: classes.title },
          makeBrand()
        )
      ),
      _react2.default.createElement(
        _Hidden2.default,
        { smDown: true, implementation: "css" },
        _react2.default.createElement(_headerLinksContainer2.default, null)
      ),
      _react2.default.createElement(
        _Hidden2.default,
        { mdUp: true, implementation: "css" },
        _react2.default.createElement(
          _IconButton2.default,
          {
            color: "inherit",
            "aria-label": "open drawer",
            onClick: props.handleDrawerToggle
          },
          _react2.default.createElement(_Menu2.default, null)
        )
      )
    )
  );
}

Header.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  color: _propTypes2.default.oneOf(["primary", "info", "success", "warning", "danger"])
};

exports.default = (0, _withStyles2.default)(_headerStyle2.default)(Header);

/***/ }),

/***/ "./static/f_common/components/Header/HeaderLinks.jsx":
/*!***********************************************************!*\
  !*** ./static/f_common/components/Header/HeaderLinks.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuList = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/MenuList/index.js");

var _MenuList2 = _interopRequireDefault(_MenuList);

var _Grow = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/Grow/index.js");

var _Grow2 = _interopRequireDefault(_Grow);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _ClickAwayListener = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/ClickAwayListener/index.js");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Hidden = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Popper = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/Popper/index.js");

var _Popper2 = _interopRequireDefault(_Popper);

var _Person = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");

var _Person2 = _interopRequireDefault(_Person);

var _Notifications = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");

var _Notifications2 = _interopRequireDefault(_Notifications);

var _Dashboard = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Search = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");

var _Search2 = _interopRequireDefault(_Search);

var _CustomInput = __webpack_require__(/*! ../CustomInput/CustomInput.jsx */ "./static/f_common/components/CustomInput/CustomInput.jsx");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _Button = __webpack_require__(/*! ../CustomButtons/Button.jsx */ "./static/f_common/components/CustomButtons/Button.jsx");

var _Button2 = _interopRequireDefault(_Button);

var _checkboxLabels = __webpack_require__(/*! ../Selection/checkboxLabels */ "./static/f_common/components/Selection/checkboxLabels.jsx");

var _checkboxLabels2 = _interopRequireDefault(_checkboxLabels);

var _userContainer = __webpack_require__(/*! ../../containers/User/userContainer */ "./static/f_common/containers/User/userContainer.jsx");

var _userContainer2 = _interopRequireDefault(_userContainer);

var _headerLinksStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/headerLinksStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/headerLinksStyle.jsx");

var _headerLinksStyle2 = _interopRequireDefault(_headerLinksStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @material-ui/core components

// @material-ui/icons

// core components


var HeaderLinks = function (_React$Component) {
  _inherits(HeaderLinks, _React$Component);

  function HeaderLinks() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderLinks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderLinks.__proto__ || Object.getPrototypeOf(HeaderLinks)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      openMessage: false,
      openPerson: false,
      openUserInfo: false,
      showSearchCondition: false,
      messages: [],
      keyword: '',
      searchCategory: [{
        label: '类', value: 'category', checked: false
      }, {
        label: '分享', value: 'share', checked: false
      }]
    }, _this.handleMessageToggle = function () {
      _this.setState(function (state) {
        return { openMessage: !state.openMessage };
      });
    }, _this.handlePersonToggle = function () {
      if (!window.__USER_INFO__ || !window.__USER_INFO__._id) {
        return _this.setState(function (state) {
          return { openUserInfo: !state.openUserInfo };
        });
      }
      _this.setState(function (state) {
        return { openPerson: !state.openPerson, openUserInfo: false };
      });
    }, _this.handlePersonClose = function (event) {
      if (!_this.personEl.contains(event.target)) {
        _this.setState({ openPerson: false });
      }
    }, _this.handleMessageClose = function (event) {
      if (!_this.messageEl.contains(event.target)) {
        _this.setState({ openMessage: false });
      }
    }, _this.onSearchChange = function (event) {
      _this.setState({ keyword: event.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderLinks, [{
    key: "onLogout",
    value: function onLogout() {
      this.props.fetchLogoutUser();
    }
  }, {
    key: "readMessage",
    value: function readMessage(msg) {
      var _this2 = this;

      if (msg.type == 0) {
        window.open(msg.link, '_blank');
      }
      this.props.fetchReadMessage(msg._id).then(function () {
        _this2.setState({
          messages: _this2.state.messages.filter(function (message) {
            return message._id != msg._id;
          })
        });
      });
    }
  }, {
    key: "onModifyUser",
    value: function onModifyUser() {
      this.setState(function (state) {
        return { openUserInfo: !state.openUserInfo };
      });
    }
  }, {
    key: "onSearchClick",
    value: function onSearchClick(event) {
      if (!this.searchEl.contains(event.target)) {
        this.setState({ showSearchCondition: false });
      }
    }
  }, {
    key: "onSearchFocus",
    value: function onSearchFocus() {
      this.setState(function (state) {
        return { showSearchCondition: true };
      });
    }
  }, {
    key: "onSelectSearchCategory",
    value: function onSelectSearchCategory(category) {
      this.setState(function (state) {
        return { searchCategory: state.searchCategory.map(function (cat) {
            if (cat.value == category.value) {
              cat.checked = !cat.checked;
            }
            return cat;
          }) };
      });
    }
  }, {
    key: "onBtnSearchClick",
    value: function onBtnSearchClick() {
      var _state = this.state,
          keyword = _state.keyword,
          searchCategory = _state.searchCategory;

      this.setState({ showSearchCondition: false });
      this.props.fetchSearch({
        keyword: keyword
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.props.fetchGetUserMessage().then(function (json) {
        if (json.status) {
          _this3.setState({
            messages: json.res
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var classes = this.props.classes;
      var _state2 = this.state,
          openMessage = _state2.openMessage,
          openPerson = _state2.openPerson,
          openUserInfo = _state2.openUserInfo,
          messages = _state2.messages,
          showSearchCondition = _state2.showSearchCondition,
          searchCategory = _state2.searchCategory;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: classes.searchWrapper, ref: function ref(node) {
              return _this4.searchEl = node;
            } },
          _react2.default.createElement(
            _ClickAwayListener2.default,
            { onClickAway: this.onSearchClick.bind(this) },
            _react2.default.createElement(
              _CustomInput2.default,
              {
                formControlProps: {
                  className: classes.margin + " " + classes.search
                },
                inputProps: {
                  placeholder: "Search",
                  inputProps: {
                    "aria-label": "Search",
                    onChange: this.onSearchChange.bind(this),
                    onFocus: this.onSearchFocus.bind(this)
                  }
                }
              },
              _react2.default.createElement(_checkboxLabels2.default, { hide: !showSearchCondition, handleChange: this.onSelectSearchCategory.bind(this), checkboxs: searchCategory })
            )
          ),
          _react2.default.createElement(
            _Button2.default,
            { color: "white", "aria-label": "edit", justIcon: true, round: true, onClick: this.onBtnSearchClick.bind(this) },
            _react2.default.createElement(_Search2.default, null)
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          {
            to: '/view/public',
            activeStyle: {
              color: window.innerWidth > 959 ? "#555555" : "white"
            }

          },
          _react2.default.createElement(
            _Button2.default,
            {
              color: window.innerWidth > 959 ? "transparent" : "white",
              justIcon: window.innerWidth > 959,
              simple: !(window.innerWidth > 959),
              "aria-label": "Dashboard",
              className: classes.buttonLink
            },
            _react2.default.createElement(_Dashboard2.default, { className: classes.icons }),
            _react2.default.createElement(
              _Hidden2.default,
              { mdUp: true, implementation: "css" },
              _react2.default.createElement(
                "p",
                { className: classes.linkText },
                "\u4E3B\u9875"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: classes.manager },
          _react2.default.createElement(
            _Button2.default,
            {
              buttonRef: function buttonRef(node) {
                _this4.messageEl = node;
              },
              color: window.innerWidth > 959 ? "transparent" : "white",
              justIcon: window.innerWidth > 959,
              simple: !(window.innerWidth > 959),
              "aria-owns": openMessage ? "menu-list-grow-message" : null,
              "aria-haspopup": "true",
              onClick: this.handleMessageToggle,
              className: classes.buttonLink
            },
            _react2.default.createElement(_Notifications2.default, { className: classes.icons }),
            messages.length ? _react2.default.createElement(
              "span",
              { className: classes.notifications },
              messages.length
            ) : null,
            _react2.default.createElement(
              _Hidden2.default,
              { mdUp: true, implementation: "css" },
              _react2.default.createElement(
                "p",
                { onClick: this.handleClick, className: classes.linkText },
                "\u6D88\u606F"
              )
            )
          ),
          _react2.default.createElement(
            _Popper2.default,
            {
              open: openMessage,
              anchorEl: this.messageEl,
              transition: true,
              disablePortal: true,
              className: (0, _classnames2.default)(_defineProperty({}, classes.popperClose, !openMessage)) + " " + classes.pooperNav
            },
            function (_ref2) {
              var TransitionProps = _ref2.TransitionProps,
                  placement = _ref2.placement;
              return _react2.default.createElement(
                _Grow2.default,
                _extends({}, TransitionProps, {
                  id: "menu-list-grow-message",
                  style: {
                    transformOrigin: placement === "bottom" ? "center top" : "center bottom"
                  }
                }),
                _react2.default.createElement(
                  _Paper2.default,
                  null,
                  _react2.default.createElement(
                    _ClickAwayListener2.default,
                    { onClickAway: _this4.handleMessageClose },
                    _react2.default.createElement(
                      _MenuList2.default,
                      { role: "menu" },
                      messages.map(function (message, index) {
                        return _react2.default.createElement(
                          _MenuItem2.default,
                          {
                            onClick: function onClick(ev) {
                              _this4.handleMessageClose(ev);_this4.readMessage(message).bind(_this4);
                            },
                            className: classes.dropdownItem,
                            key: index
                          },
                          message.body
                        );
                      })
                    )
                  )
                )
              );
            }
          )
        ),
        _react2.default.createElement(
          "div",
          { className: classes.manager },
          _react2.default.createElement(
            _Button2.default,
            {
              buttonRef: function buttonRef(node) {
                _this4.personEl = node;
              },
              color: window.innerWidth > 959 ? "transparent" : "white",
              justIcon: window.innerWidth > 959,
              simple: !(window.innerWidth > 959),
              "aria-label": "Person",
              "aria-haspopup": "true",
              "aria-owns": openPerson ? "menu-list-grow-person" : null,
              onClick: this.handlePersonToggle,
              className: classes.buttonLink
            },
            _react2.default.createElement(_Person2.default, { className: classes.icons }),
            _react2.default.createElement(
              _Hidden2.default,
              { mdUp: true, implementation: "css" },
              _react2.default.createElement(
                "p",
                { className: classes.linkText },
                "\u7528\u6237\u4FE1\u606F"
              )
            )
          ),
          _react2.default.createElement(
            _Popper2.default,
            {
              open: openPerson,
              anchorEl: this.personEl,
              transition: true,
              disablePortal: true,
              className: (0, _classnames2.default)(_defineProperty({}, classes.popperClose, !openPerson)) + " " + classes.pooperNav
            },
            function (_ref3) {
              var TransitionProps = _ref3.TransitionProps,
                  placement = _ref3.placement;
              return _react2.default.createElement(
                _Grow2.default,
                _extends({}, TransitionProps, {
                  id: "menu-list-grow-person",
                  style: {
                    transformOrigin: placement === "bottom" ? "center top" : "center bottom"
                  }
                }),
                _react2.default.createElement(
                  _Paper2.default,
                  null,
                  _react2.default.createElement(
                    _ClickAwayListener2.default,
                    { onClickAway: _this4.handlePersonClose },
                    _react2.default.createElement(
                      _MenuList2.default,
                      { role: "menu" },
                      _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          onClick: function onClick(event) {
                            _this4.onModifyUser();_this4.handlePersonClose(event);
                          },
                          className: classes.dropdownItem
                        },
                        "\u4FEE\u6539\u7528\u6237\u4FE1\u606F"
                      ),
                      _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          onClick: function onClick(event) {
                            _this4.onLogout();_this4.handlePersonClose(event);
                          },
                          className: classes.dropdownItem
                        },
                        "\u9000\u51FA\u767B\u5F55"
                      )
                    )
                  )
                )
              );
            }
          )
        ),
        _react2.default.createElement(_userContainer2.default, { open: openUserInfo, onCancel: this.handlePersonToggle })
      );
    }
  }]);

  return HeaderLinks;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_headerLinksStyle2.default)(HeaderLinks);

/***/ }),

/***/ "./static/f_common/components/Progress/linear.js":
/*!*******************************************************!*\
  !*** ./static/f_common/components/Progress/linear.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _LinearProgress = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/LinearProgress/index.js");

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    flexGrow: 1
  },
  hide: {
    display: 'none'
  },
  barColorPrimary: {
    background: "linear-gradient(60deg, #26c6da, #00acc1)"
  },
  colorPrimary: {
    background: 'rgb(193, 225, 251)'
  }
};

var LinearDeterminate = function (_React$Component) {
  _inherits(LinearDeterminate, _React$Component);

  function LinearDeterminate(props) {
    _classCallCheck(this, LinearDeterminate);

    return _possibleConstructorReturn(this, (LinearDeterminate.__proto__ || Object.getPrototypeOf(LinearDeterminate)).call(this, props));
  }

  _createClass(LinearDeterminate, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          _props$value = _props.value,
          value = _props$value === undefined ? 0 : _props$value,
          hide = _props.hide;

      return _react2.default.createElement(
        'div',
        { className: classes.root + ' ' + (hide ? classes.hide : '') },
        _react2.default.createElement(_LinearProgress2.default, { variant: 'determinate', value: value, color: 'primary',
          classes: {
            colorPrimary: classes.colorPrimary,
            barColorPrimary: classes.barColorPrimary
          } })
      );
    }
  }]);

  return LinearDeterminate;
}(_react2.default.Component);

LinearDeterminate.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(LinearDeterminate);

/***/ }),

/***/ "./static/f_common/components/Selection/checkboxLabels.jsx":
/*!*****************************************************************!*\
  !*** ./static/f_common/components/Selection/checkboxLabels.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _blue = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");

var _blue2 = _interopRequireDefault(_blue);

var _FormGroup = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/FormGroup/index.js");

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Checkbox = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/index.js");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  group: {
    background: '#fff',
    padding: '0 3px 0 3px',
    'border-radius': '0 0 4px 4px',
    'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    'justify-content': 'center'
  },
  hide: {
    display: 'none'
  },
  root: {
    color: _blue2.default[600],
    'margin-left': 0,
    '&$checked': {
      color: _blue2.default[500]
    }
  },
  checked: {}
};

var CheckboxLabels = function (_React$Component) {
  _inherits(CheckboxLabels, _React$Component);

  function CheckboxLabels() {
    _classCallCheck(this, CheckboxLabels);

    return _possibleConstructorReturn(this, (CheckboxLabels.__proto__ || Object.getPrototypeOf(CheckboxLabels)).apply(this, arguments));
  }

  _createClass(CheckboxLabels, [{
    key: 'render',
    value: function render() {
      var _className,
          _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          checkboxs = _props.checkboxs,
          hide = _props.hide;

      var classname = (0, _classnames2.default)((_className = {}, _defineProperty(_className, classes.group, true), _defineProperty(_className, classes.hide, hide), _className));
      return _react2.default.createElement(
        _FormGroup2.default,
        { row: true, className: classname },
        checkboxs.map(function (checkbox, index) {
          return _react2.default.createElement(_FormControlLabel2.default, {
            key: index,
            control: _react2.default.createElement(_Checkbox2.default, {
              checked: checkbox.checked,
              onChange: function onChange(_) {
                return _this2.props.handleChange(checkbox);
              },
              value: checkbox.value,
              classes: {
                root: classes.root,
                checked: classes.checked
              }
            }),
            label: checkbox.label
          });
        })
      );
    }
  }]);

  return CheckboxLabels;
}(_react2.default.Component);

CheckboxLabels.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(CheckboxLabels);

/***/ }),

/***/ "./static/f_common/components/Selection/switchLabels.jsx":
/*!***************************************************************!*\
  !*** ./static/f_common/components/Selection/switchLabels.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _FormGroup = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/FormGroup/index.js");

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Switch = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/Switch/index.js");

var _Switch2 = _interopRequireDefault(_Switch);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var switchStyle = {
  colorPrimary: {
    '&$checked': {
      color: '#2196f3'
    }
  },
  checked: {
    color: '#2196f3'
  }
};

var SwitchLabels = function (_React$Component) {
  _inherits(SwitchLabels, _React$Component);

  function SwitchLabels(props) {
    _classCallCheck(this, SwitchLabels);

    return _possibleConstructorReturn(this, (SwitchLabels.__proto__ || Object.getPrototypeOf(SwitchLabels)).call(this, props));
  }

  _createClass(SwitchLabels, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _FormGroup2.default,
        { row: true },
        this.props.switchLabels.map(function (switchlabel, index) {
          return _react2.default.createElement(_FormControlLabel2.default, {
            key: index,
            control: _react2.default.createElement(_Switch2.default, {
              checked: switchlabel.checked,
              onChange: function onChange() {
                _this2.props.onChange(index, event);
              },
              value: switchlabel.value,
              color: switchlabel.color,
              classes: _this2.props.classes
            }),
            label: switchlabel.label
          });
        })
      );
    }
  }]);

  return SwitchLabels;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(switchStyle)(SwitchLabels);

/***/ }),

/***/ "./static/f_common/components/Selects/customSelect.js":
/*!************************************************************!*\
  !*** ./static/f_common/components/Selects/customSelect.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Input = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");

var _Input2 = _interopRequireDefault(_Input);

var _OutlinedInput = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/OutlinedInput/index.js");

var _OutlinedInput2 = _interopRequireDefault(_OutlinedInput);

var _FilledInput = __webpack_require__(/*! @material-ui/core/FilledInput */ "./node_modules/@material-ui/core/FilledInput/index.js");

var _FilledInput2 = _interopRequireDefault(_FilledInput);

var _InputLabel = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FormHelperText = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/FormHelperText/index.js");

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Select = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");

var _Select2 = _interopRequireDefault(_Select);

var _customInputStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/customInputStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/customInputStyle.jsx");

var _customInputStyle2 = _interopRequireDefault(_customInputStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleSelect = function (_React$Component) {
  _inherits(SimpleSelect, _React$Component);

  function SimpleSelect(props) {
    _classCallCheck(this, SimpleSelect);

    return _possibleConstructorReturn(this, (SimpleSelect.__proto__ || Object.getPrototypeOf(SimpleSelect)).call(this, props));
  }

  _createClass(SimpleSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          id = _props.id,
          labelText = _props.labelText,
          options = _props.options,
          selected = _props.selected,
          onChange = _props.onChange,
          disabled = _props.disabled;


      return _react2.default.createElement(
        _FormControl2.default,
        { className: classes.formControl, disabled: disabled },
        _react2.default.createElement(
          _InputLabel2.default,
          { htmlFor: id },
          labelText
        ),
        _react2.default.createElement(
          _Select2.default,
          {
            value: selected.value,
            onChange: onChange,
            inputProps: {
              name: labelText,
              id: id
            }
          },
          options.map(function (option, index) {
            return _react2.default.createElement(
              _MenuItem2.default,
              { key: index, value: option.value },
              option.name
            );
          })
        )
      );
    }
  }]);

  return SimpleSelect;
}(_react2.default.Component);

SimpleSelect.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_customInputStyle2.default)(SimpleSelect);

/***/ }),

/***/ "./static/f_common/components/Sidebar/Sidebar.jsx":
/*!********************************************************!*\
  !*** ./static/f_common/components/Sidebar/Sidebar.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Drawer = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Hidden = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _List = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _headerLinksContainer = __webpack_require__(/*! ../../containers/header/headerLinksContainer */ "./static/f_common/containers/header/headerLinksContainer.js");

var _headerLinksContainer2 = _interopRequireDefault(_headerLinksContainer);

var _sidebarStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/sidebarStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/sidebarStyle.jsx");

var _sidebarStyle2 = _interopRequireDefault(_sidebarStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// core components


var Sidebar = function Sidebar(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  var classes = props.classes,
      color = props.color,
      logo = props.logo,
      image = props.image,
      logoText = props.logoText,
      routes = props.routes;

  var links = _react2.default.createElement(
    _List2.default,
    { className: classes.list },
    routes.map(function (prop, key) {
      if (!prop || prop.redirect) return null;
      var activePro = " ";
      var listItemClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes[color], activeRoute(prop.path)));
      var whiteFontClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes.whiteFont, activeRoute(prop.path)));
      return _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
          to: prop.path,
          className: activePro + classes.item,
          activeClassName: "active",
          key: key
        },
        _react2.default.createElement(
          _ListItem2.default,
          { button: true, className: classes.itemLink + listItemClasses },
          _react2.default.createElement(
            _ListItemIcon2.default,
            { className: classes.itemIcon + whiteFontClasses },
            typeof prop.icon === "string" ? _react2.default.createElement(
              _Icon2.default,
              null,
              prop.icon
            ) : _react2.default.createElement(prop.icon, null)
          ),
          _react2.default.createElement(_ListItemText2.default, {
            primary: prop.sidebarName,
            className: classes.itemText + whiteFontClasses,
            disableTypography: true
          })
        )
      );
    })
  );
  var brand = _react2.default.createElement(
    "div",
    { className: classes.logo },
    _react2.default.createElement(
      "a",
      { href: "https://github.com/sunjp123", className: classes.logoLink },
      _react2.default.createElement(
        "div",
        { className: classes.logoImage },
        _react2.default.createElement("img", { src: logo, alt: "logo", className: classes.img })
      ),
      logoText
    )
  );
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _Hidden2.default,
      { mdUp: true, implementation: "css" },
      _react2.default.createElement(
        _Drawer2.default,
        {
          variant: "temporary",
          anchor: "right",
          open: props.open,
          classes: {
            paper: classes.drawerPaper
          },
          onClose: props.handleDrawerToggle,
          ModalProps: {
            keepMounted: true // Better open performance on mobile.
          }
        },
        brand,
        _react2.default.createElement(
          "div",
          { className: classes.sidebarWrapper },
          _react2.default.createElement(_headerLinksContainer2.default, null),
          links
        ),
        image !== undefined ? _react2.default.createElement("div", {
          className: classes.background,
          style: { backgroundImage: "url(" + image + ")" }
        }) : null
      )
    ),
    _react2.default.createElement(
      _Hidden2.default,
      { smDown: true, implementation: "css" },
      _react2.default.createElement(
        _Drawer2.default,
        {
          anchor: "left",
          variant: "permanent",
          open: true,
          classes: {
            paper: classes.drawerPaper
          }
        },
        brand,
        _react2.default.createElement(
          "div",
          { className: classes.sidebarWrapper },
          links
        ),
        image !== undefined ? _react2.default.createElement("div", {
          className: classes.background,
          style: { backgroundImage: "url(" + image + ")" }
        }) : null
      )
    )
  );
};

Sidebar.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_sidebarStyle2.default)(Sidebar);

/***/ }),

/***/ "./static/f_common/components/Snackbar/Snackbar.jsx":
/*!**********************************************************!*\
  !*** ./static/f_common/components/Snackbar/Snackbar.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Snackbar = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");

var _Close2 = _interopRequireDefault(_Close);

var _snackbarContentStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/snackbarContentStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/snackbarContentStyle.jsx");

var _snackbarContentStyle2 = _interopRequireDefault(_snackbarContentStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// @material-ui/icons

// core components


function Snackbar(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      message = props.message,
      color = props.color,
      close = props.close,
      icon = props.icon,
      place = props.place,
      open = props.open,
      autoHideDuration = props.autoHideDuration,
      onClose = props.onClose;

  var action = [];
  var messageClasses = (0, _classnames2.default)(_defineProperty({}, classes.iconMessage, icon !== undefined));
  if (close !== undefined) {
    action = [_react2.default.createElement(
      _IconButton2.default,
      {
        className: classes.iconButton,
        key: "close",
        "aria-label": "Close",
        color: "inherit",
        onClick: function onClick() {
          return props.closeNotification();
        }
      },
      _react2.default.createElement(_Close2.default, { className: classes.close })
    )];
  }
  return _react2.default.createElement(_Snackbar2.default, {
    anchorOrigin: {
      vertical: place.indexOf("t") === -1 ? "bottom" : "top",
      horizontal: place.indexOf("l") !== -1 ? "left" : place.indexOf("c") !== -1 ? "center" : "right"
    },
    open: open,
    onClose: onClose,
    autoHideDuration: autoHideDuration,
    transitionDuration: 1000,
    resumeHideDuration: null,
    message: _react2.default.createElement(
      "div",
      null,
      icon !== undefined ? _react2.default.createElement(props.icon, { className: classes.icon }) : null,
      _react2.default.createElement(
        "span",
        { className: messageClasses },
        message
      )
    ),
    action: action,
    ContentProps: {
      classes: {
        root: classes.root + " " + classes[color],
        message: classes.message
      }
    }
  });
}

Snackbar.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  message: _propTypes2.default.node.isRequired,
  color: _propTypes2.default.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: _propTypes2.default.bool,
  icon: _propTypes2.default.func,
  place: _propTypes2.default.oneOf(["tl", "tr", "tc", "br", "bl", "bc"]),
  open: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_snackbarContentStyle2.default)(Snackbar);

/***/ }),

/***/ "./static/f_common/components/Typography/Danger.jsx":
/*!**********************************************************!*\
  !*** ./static/f_common/components/Typography/Danger.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _typographyStyle = __webpack_require__(/*! ../../../assets/jss/material-dashboard-react/components/typographyStyle.jsx */ "./static/assets/jss/material-dashboard-react/components/typographyStyle.jsx");

var _typographyStyle2 = _interopRequireDefault(_typographyStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// @material-ui/core components

// core components


function Danger(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      children = props.children;

  return _react2.default.createElement(
    "div",
    { className: classes.defaultFontStyle + " " + classes.dangerText },
    children
  );
}

Danger.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_typographyStyle2.default)(Danger);

/***/ }),

/***/ "./static/f_common/components/User/user.jsx":
/*!**************************************************!*\
  !*** ./static/f_common/components/User/user.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputValue = function InputValue(labelText, placeholder, value, onChange) {
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'text';

  _classCallCheck(this, InputValue);

  this.labelText = labelText;
  this.inputProps = {
    placeholder: placeholder,
    onChange: onChange,
    value: value
  };
  if (type == 'file') {
    this.inputProps = _extends({}, this.inputProps, {
      type: 'file',
      file: '',
      inputProps: {
        accept: 'image/*',
        style: {
          "textIndent": "-200px"
        }
      } });
  }
  this.error = false;
  this.success = false;
};

exports.default = InputValue;

/***/ }),

/***/ "./static/f_common/components/User/userInfo.jsx":
/*!******************************************************!*\
  !*** ./static/f_common/components/User/userInfo.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _jsencrypt = __webpack_require__(/*! jsencrypt */ "./node_modules/jsencrypt/bin/jsencrypt.js");

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Input = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = __webpack_require__(/*! ../Dialog/Dialog */ "./static/f_common/components/Dialog/Dialog.jsx");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! ../Dialog/DialogTitle */ "./static/f_common/components/Dialog/DialogTitle.jsx");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = __webpack_require__(/*! ../Dialog/DialogContent */ "./static/f_common/components/Dialog/DialogContent.jsx");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogAction = __webpack_require__(/*! ../Dialog/DialogAction */ "./static/f_common/components/Dialog/DialogAction.jsx");

var _DialogAction2 = _interopRequireDefault(_DialogAction);

var _CustomInput = __webpack_require__(/*! ../CustomInput/CustomInput */ "./static/f_common/components/CustomInput/CustomInput.jsx");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _validate = __webpack_require__(/*! ../../../../util/validate */ "./util/validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// @material-ui/core

// @material-ui/icons
// import Cloud from "@material-ui/icons/Cloud";

// core components


var dialogStyle = {
  paper: {
    width: "500px"
  }
};

var InputValue = function InputValue(labelText, placeholder, onChange) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'text';

  _classCallCheck(this, InputValue);

  this.labelText = labelText;
  this.inputProps = {
    placeholder: placeholder,
    onChange: onChange,
    value: ''
  };
  if (type == 'file') {
    this.inputProps = _extends({}, this.inputProps, {
      type: 'file',
      file: '',
      inputProps: {
        accept: 'image/*',
        style: {
          "textIndent": "-200px"
        }
      } });
  }
  this.error = false;
  this.success = false;
};

var UserInfo = function (_React$Component) {
  _inherits(UserInfo, _React$Component);

  function UserInfo(props) {
    _classCallCheck(this, UserInfo);

    var _this = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));

    _this.onNameChange = _this.onNameChange.bind(_this);
    _this.onNicknameChange = _this.onNicknameChange.bind(_this);
    _this.onContactChange = _this.onContactChange.bind(_this);
    _this.onAvatorChange = _this.onAvatorChange.bind(_this);
    _this.onPasswordChange = _this.onPasswordChange.bind(_this);
    _this.setFieldValue = _this.setFieldValue.bind(_this);
    _this.onItemConfirm = _this.onItemConfirm.bind(_this);
    _this.onItemCancel = _this.onItemCancel.bind(_this);

    _this.state = {
      name: new InputValue('姓名', '请填写真实姓名', _this.onNameChange),
      nickname: new InputValue('昵称', '昵称', _this.onNicknameChange),
      avator: new InputValue('头像', '头像', _this.onAvatorChange, 'file'),
      contact: new InputValue('联系方式', '请输入有效手机或邮箱', _this.onContactChange),
      password: new InputValue('密码', '6位以上，字母+数字+特殊字符如sun@123', _this.onPasswordChange)
    };
    return _this;
  }

  _createClass(UserInfo, [{
    key: "onNameChange",
    value: function onNameChange(ev) {
      var value = ev.target.value;
      var success = /^[\u4E00-\u9FA5]+$/.test(value) || /^[a-zA-Z]+$/.test(value);
      var name = _extends({}, this.state.name, {
        inputProps: _extends({}, this.state.name.inputProps, {
          value: ev.target.value
        }),
        error: !success,
        success: success
      });
      this.setState({
        name: name
      });
    }
  }, {
    key: "onNicknameChange",
    value: function onNicknameChange(ev) {
      var success = !!ev.target.value;
      var nickname = _extends({}, this.state.nickname, {
        inputProps: _extends({}, this.state.nickname.inputProps, {
          value: ev.target.value
        }),
        error: !success,
        success: success
      });
      this.setState({
        nickname: nickname
      });
    }
  }, {
    key: "onContactChange",
    value: function onContactChange(ev) {
      var value = ev.target.value;
      var success = _validate2.default.isEmail(value) || _validate2.default.isPhone(value);

      var contact = _extends({}, this.state.contact, {
        inputProps: _extends({}, this.state.contact.inputProps, {
          value: ev.target.value
        }),
        error: !success,
        success: success
      });
      this.setState({
        contact: contact
      });
    }
  }, {
    key: "onAvatorChange",
    value: function onAvatorChange(ev) {
      var file = ev.target.files[0],
          success = !!file;
      var avator = _extends({}, this.state.avator, {
        inputProps: _extends({}, this.state.avator.inputProps, {
          value: ev.target.value,
          file: file
        }),
        error: !success,
        success: success
      });
      this.setState({
        avator: avator
      });
    }
  }, {
    key: "onPasswordChange",
    value: function onPasswordChange(ev) {
      var value = ev.target.value;
      var success = _validate2.default.isPassword(value);

      var password = _extends({}, this.state.password, {
        inputProps: _extends({}, this.state.password.inputProps, {
          value: ev.target.value
        }),
        error: !success,
        success: success
      });
      this.setState({
        password: password
      });
    }
  }, {
    key: "onItemConfirm",
    value: function onItemConfirm() {
      var _this2 = this;

      var formData = new FormData(),
          encrypt = new _jsencrypt.JSEncrypt();
      encrypt.setPublicKey(window.__PUBLIC_KEY__);
      var params = {
        name: this.state.name.inputProps.value,
        nickname: this.state.nickname.inputProps.value,
        contact: this.state.contact.inputProps.value,
        avator: this.state.avator.inputProps.file,
        password: encrypt.encrypt(this.state.password.inputProps.value)
      };

      Object.entries(params).map(function (item) {
        // formData.append(item[0],item[1])
        formData.append.apply(formData, item);
      });
      var setFieldError = function setFieldError(field) {
        _this2.setState(_defineProperty({}, field, _extends({}, _this2.state[field], {
          error: true,
          success: false
        })));
      };
      this.props.fetchRegisterUser(formData, function (type) {
        switch (type) {
          case 'NICKNAME_EXIST':
            setFieldError('nickname');
            break;
          case 'EMAIL_EXIST':
          case 'PHONE_EXIST':
          case 'CONTACT':
            setFieldError('contact');
            break;
        }
      });
    }
  }, {
    key: "onItemCancel",
    value: function onItemCancel() {
      this.props.onCancel();
    }
  }, {
    key: "setFieldValue",
    value: function setFieldValue(field, value) {
      if (!this.state[field]) return;
      this.setState(_defineProperty({}, field, _extends({}, this.state[field], {
        inputProps: _extends({}, this.state[field].inputProps, {
          value: value
        }),
        error: false,
        success: false
      })));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var _this3 = this;

      if (props.userInfo && props.userInfo._id) {
        var userInfo = props.userInfo;
        Object.keys(userInfo).map(function (key, index) {
          if (key != 'avator') {
            if ((key == 'phone' || key == 'email') && userInfo[key]) {
              key = 'contact';
            }
            _this3.setFieldValue(key, userInfo[key]);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var userInfo = this.props.userInfo;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _DialogContent2.default,
          null,
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-name',
            formControlProps: { className: 'item-form' }
          }, this.state.name)),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-nickname',
            formControlProps: { className: 'item-form' }
          }, this.state.nickname)),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-contact',
            formControlProps: { className: 'item-form' }
          }, this.state.contact)),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-password',
            formControlProps: { className: 'item-form' }
          }, this.state.password)),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-avator',
            formControlProps: { className: 'item-form' }
          }, this.state.avator))
        ),
        _react2.default.createElement(
          _DialogAction2.default,
          null,
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.onItemConfirm },
            userInfo ? '确定' : '注册'
          ),
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.onItemCancel },
            "\u53D6\u6D88"
          )
        )
      );
    }
  }]);

  return UserInfo;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(dialogStyle)(UserInfo);

/***/ }),

/***/ "./static/f_common/components/User/userLogin.jsx":
/*!*******************************************************!*\
  !*** ./static/f_common/components/User/userLogin.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _jsencrypt = __webpack_require__(/*! jsencrypt */ "./node_modules/jsencrypt/bin/jsencrypt.js");

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Input = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = __webpack_require__(/*! ../Dialog/Dialog */ "./static/f_common/components/Dialog/Dialog.jsx");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! ../Dialog/DialogTitle */ "./static/f_common/components/Dialog/DialogTitle.jsx");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = __webpack_require__(/*! ../Dialog/DialogContent */ "./static/f_common/components/Dialog/DialogContent.jsx");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogAction = __webpack_require__(/*! ../Dialog/DialogAction */ "./static/f_common/components/Dialog/DialogAction.jsx");

var _DialogAction2 = _interopRequireDefault(_DialogAction);

var _CustomInput = __webpack_require__(/*! ../CustomInput/CustomInput */ "./static/f_common/components/CustomInput/CustomInput.jsx");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core

// @material-ui/icons
// import Cloud from "@material-ui/icons/Cloud";

// core components


var dialogStyle = {
    paper: {
        width: "500px"
    }
};

var UserInfo = function (_React$Component) {
    _inherits(UserInfo, _React$Component);

    function UserInfo(props) {
        _classCallCheck(this, UserInfo);

        var _this = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));

        _this.onContactChange = _this.onContactChange.bind(_this);
        _this.onPasswordChange = _this.onPasswordChange.bind(_this);

        _this.onItemConfirm = _this.onItemConfirm.bind(_this);
        _this.onItemCancel = _this.onItemCancel.bind(_this);

        _this.state = {
            contact: {
                labelText: '手机、邮箱或昵称',
                inputProps: {
                    placeholder: '请填写有效的手机、邮箱或昵称',
                    onChange: _this.onContactChange,
                    value: ''
                },
                error: false,
                success: false
            },
            password: {
                labelText: '密码',
                inputProps: {
                    placeholder: '请填写密码',
                    type: 'password',
                    onChange: _this.onPasswordChange,
                    value: ''
                },
                error: false,
                success: false
            }
        };
        return _this;
    }

    _createClass(UserInfo, [{
        key: "onContactChange",
        value: function onContactChange(ev) {
            var success = !!ev.target.value;
            var contact = _extends({}, this.state.contact, {
                inputProps: _extends({}, this.state.contact.inputProps, {
                    value: ev.target.value
                }),
                error: !success,
                success: success
            });
            this.setState({
                contact: contact
            });
        }
    }, {
        key: "onPasswordChange",
        value: function onPasswordChange(ev) {
            var success = !!ev.target.value;
            var password = _extends({}, this.state.password, {
                inputProps: _extends({}, this.state.password.inputProps, {
                    value: ev.target.value
                }),
                error: !success,
                success: success
            });
            this.setState({
                password: password
            });
        }
    }, {
        key: "onItemConfirm",
        value: function onItemConfirm() {
            var encrypt = new _jsencrypt.JSEncrypt();
            encrypt.setPublicKey(window.__PUBLIC_KEY__);
            var password = encrypt.encrypt('wangyan520@');

            var params = {
                contact: this.state.contact.inputProps.value,
                password: password
            };
            this.props.fetchLoginUser(params);
        }
    }, {
        key: "onItemCancel",
        value: function onItemCancel() {
            this.props.onCancel();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _DialogContent2.default,
                    null,
                    _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-contact',
                        formControlProps: { className: 'item-form' }
                    }, this.state.contact)),
                    _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-password',
                        formControlProps: { className: 'item-form' }
                    }, this.state.password))
                ),
                _react2.default.createElement(
                    _DialogAction2.default,
                    null,
                    _react2.default.createElement(
                        _Button2.default,
                        { onClick: this.onItemConfirm },
                        "\u767B\u5F55"
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        { onClick: this.onItemCancel },
                        "\u53D6\u6D88"
                    )
                )
            );
        }
    }]);

    return UserInfo;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(dialogStyle)(UserInfo);

/***/ }),

/***/ "./static/f_common/components/User/userModify.jsx":
/*!********************************************************!*\
  !*** ./static/f_common/components/User/userModify.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _jsencrypt = __webpack_require__(/*! jsencrypt */ "./node_modules/jsencrypt/bin/jsencrypt.js");

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Input = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = __webpack_require__(/*! ../Dialog/Dialog */ "./static/f_common/components/Dialog/Dialog.jsx");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! ../Dialog/DialogTitle */ "./static/f_common/components/Dialog/DialogTitle.jsx");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = __webpack_require__(/*! ../Dialog/DialogContent */ "./static/f_common/components/Dialog/DialogContent.jsx");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogAction = __webpack_require__(/*! ../Dialog/DialogAction */ "./static/f_common/components/Dialog/DialogAction.jsx");

var _DialogAction2 = _interopRequireDefault(_DialogAction);

var _CustomInput = __webpack_require__(/*! ../CustomInput/CustomInput */ "./static/f_common/components/CustomInput/CustomInput.jsx");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _validate = __webpack_require__(/*! ../../../../util/validate */ "./util/validate.js");

var _validate2 = _interopRequireDefault(_validate);

var _user = __webpack_require__(/*! ./user */ "./static/f_common/components/User/user.jsx");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core

// @material-ui/icons
// import Cloud from "@material-ui/icons/Cloud";

// core components


var dialogStyle = {
  paper: {
    width: "500px"
  }
};

var UserInfo = function (_React$Component) {
  _inherits(UserInfo, _React$Component);

  function UserInfo(props) {
    _classCallCheck(this, UserInfo);

    var _this = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));

    _this.onNameChange = _this.onNameChange.bind(_this);
    _this.onNicknameChange = _this.onNicknameChange.bind(_this);
    _this.onContactChange = _this.onContactChange.bind(_this);
    _this.onAvatorChange = _this.onAvatorChange.bind(_this);
    _this.onPasswordChange = _this.onPasswordChange.bind(_this);

    _this.onItemConfirm = _this.onItemConfirm.bind(_this);
    _this.onItemCancel = _this.onItemCancel.bind(_this);
    var userInfo = props.userInfo;
    _this.state = {
      name: new _user2.default('姓名', '请填写真实姓名', userInfo.name, _this.onNameChange),
      nickname: new _user2.default('昵称', '昵称', userInfo.nickname, _this.onNicknameChange),
      avator: new _user2.default('头像', '头像', '', _this.onAvatorChange, 'file'),
      contact: new _user2.default('联系方式', '请输入有效手机或邮箱', userInfo.email || userInfo.phone, _this.onContactChange),
      password: new _user2.default('密码', '6位以上，字母+数字+特殊字符如sun@123', '', _this.onPasswordChange)
    };
    return _this;
  }

  _createClass(UserInfo, [{
    key: "onNameChange",
    value: function onNameChange(ev) {
      var value = ev.target.value;
      var success = /^[\u4E00-\u9FA5]+$/.test(value) || /^[a-zA-Z]+$/.test(value);
      var name = _extends({}, this.state.name, {
        inputProps: _extends({}, this.state.name.inputProps, {
          value: ev.target.value
        }),
        error: !success,
        success: success
      });
      this.setState({
        name: name
      });
    }
  }, {
    key: "onNicknameChange",
    value: function onNicknameChange(ev) {
      var success = !!ev.target.value;
      var nickname = _extends({}, this.state.nickname, {
        inputProps: _extends({}, this.state.nickname.inputProps, {
          value: ev.target.value
        }),
        error: !success,
        success: success
      });
      this.setState({
        nickname: nickname
      });
    }
  }, {
    key: "onContactChange",
    value: function onContactChange(ev) {
      var value = ev.target.value;
      var success = _validate2.default.isEmail(value) || _validate2.default.isPhone(value);

      var contact = _extends({}, this.state.contact, {
        inputProps: _extends({}, this.state.contact.inputProps, {
          value: ev.target.value
        }),
        error: !success,
        success: success
      });
      this.setState({
        contact: contact
      });
    }
  }, {
    key: "onAvatorChange",
    value: function onAvatorChange(ev) {
      var file = ev.target.files[0],
          success = !!file;
      var avator = _extends({}, this.state.avator, {
        inputProps: _extends({}, this.state.avator.inputProps, {
          value: ev.target.value,
          file: file
        }),
        error: !success,
        success: success
      });
      this.setState({
        avator: avator
      });
    }
  }, {
    key: "onPasswordChange",
    value: function onPasswordChange(ev) {
      var value = ev.target.value;
      var success = _validate2.default.isPassword(value);

      var password = _extends({}, this.state.password, {
        inputProps: _extends({}, this.state.password.inputProps, {
          value: ev.target.value
        }),
        error: !success,
        success: success
      });
      this.setState({
        password: password
      });
    }
  }, {
    key: "onItemConfirm",
    value: function onItemConfirm() {
      var _this2 = this;

      var formData = new FormData(),
          encrypt = new _jsencrypt.JSEncrypt();
      encrypt.setPublicKey(window.__PUBLIC_KEY__);
      var params = {
        _id: this.props.userInfo._id,
        name: this.state.name.inputProps.value,
        nickname: this.state.nickname.inputProps.value,
        contact: this.state.contact.inputProps.value,
        avator: this.state.avator.inputProps.file,
        password: encrypt.encrypt(this.state.password.inputProps.value)
      };

      Object.entries(params).map(function (item) {
        // formData.append(item[0],item[1])
        formData.append.apply(formData, item);
      });
      var setFieldError = function setFieldError(field) {
        _this2.setState(_defineProperty({}, field, _extends({}, _this2.state[field], {
          error: true,
          success: false
        })));
      };
      this.props.fetchModifyUser(formData, function (type) {
        switch (type) {
          case 'NICKNAME_EXIST':
            setFieldError('nickname');
            break;
          case 'EMAIL_EXIST':
          case 'PHONE_EXIST':
          case 'CONTACT':
            setFieldError('contact');
            break;
        }
      });
    }
  }, {
    key: "onItemCancel",
    value: function onItemCancel() {
      this.props.onCancel();
    }
  }, {
    key: "render",
    value: function render() {
      var userInfo = this.props.userInfo;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _DialogContent2.default,
          null,
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-name',
            formControlProps: { className: 'item-form' }
          }, this.state.name)),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-nickname',
            formControlProps: { className: 'item-form' }
          }, this.state.nickname)),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-contact',
            formControlProps: { className: 'item-form' }
          }, this.state.contact)),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-password',
            formControlProps: { className: 'item-form' }
          }, this.state.password)),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'user-item-dialog-avator',
            formControlProps: { className: 'item-form' }
          }, this.state.avator))
        ),
        _react2.default.createElement(
          _DialogAction2.default,
          null,
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.onItemConfirm },
            userInfo ? '确定' : '注册'
          ),
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.onItemCancel },
            "\u53D6\u6D88"
          )
        )
      );
    }
  }]);

  return UserInfo;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(dialogStyle)(UserInfo);

/***/ }),

/***/ "./static/f_common/constants/User/userInfo.jsx":
/*!*****************************************************!*\
  !*** ./static/f_common/constants/User/userInfo.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./static/f_common/constants/api.jsx":
/*!*******************************************!*\
  !*** ./static/f_common/constants/api.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var API_ROOT = '/api/';
var API = exports.API = {
    addUser: API_ROOT + 'user/register',
    modifyUser: API_ROOT + 'user/modify',
    loginUser: API_ROOT + 'user/login',
    logoutUser: API_ROOT + 'user/logout',
    getMessage: API_ROOT + 'user/message',
    readMessage: API_ROOT + 'user/read'
};

/***/ }),

/***/ "./static/f_common/containers/User/userContainer.jsx":
/*!***********************************************************!*\
  !*** ./static/f_common/containers/User/userContainer.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _userInfo = __webpack_require__(/*! ../../actions/User/userInfo */ "./static/f_common/actions/User/userInfo.jsx");

var userAction = _interopRequireWildcard(_userInfo);

var _CustomTabs = __webpack_require__(/*! ../../components/CustomTabs/CustomTabs */ "./static/f_common/components/CustomTabs/CustomTabs.jsx");

var _CustomTabs2 = _interopRequireDefault(_CustomTabs);

var _userInfo2 = __webpack_require__(/*! ../../components/User/userInfo */ "./static/f_common/components/User/userInfo.jsx");

var _userInfo3 = _interopRequireDefault(_userInfo2);

var _userLogin = __webpack_require__(/*! ../../components/User/userLogin */ "./static/f_common/components/User/userLogin.jsx");

var _userLogin2 = _interopRequireDefault(_userLogin);

var _userModify = __webpack_require__(/*! ../../components/User/userModify */ "./static/f_common/components/User/userModify.jsx");

var _userModify2 = _interopRequireDefault(_userModify);

var _Dialog = __webpack_require__(/*! ../../components/Dialog/Dialog */ "./static/f_common/components/Dialog/Dialog.jsx");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! ../../components/Dialog/DialogTitle */ "./static/f_common/components/Dialog/DialogTitle.jsx");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dialogStyle = {
    paper: {
        width: "400px"
    }
};

var UserInfoContainer = function (_React$Component) {
    _inherits(UserInfoContainer, _React$Component);

    function UserInfoContainer(props) {
        _classCallCheck(this, UserInfoContainer);

        var _this = _possibleConstructorReturn(this, (UserInfoContainer.__proto__ || Object.getPrototypeOf(UserInfoContainer)).call(this, props));

        _this.onCancel = _this.onCancel.bind(_this);
        return _this;
    }

    _createClass(UserInfoContainer, [{
        key: 'onCancel',
        value: function onCancel() {
            this.props.onCancel();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                open = _props.open;

            return _react2.default.createElement(
                _Dialog2.default,
                { open: open, muiClasses: classes },
                window.__USER_INFO__ && window.__USER_INFO__._id ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        _DialogTitle2.default,
                        null,
                        '\u4FEE\u6539\u7528\u6237\u4FE1\u606F'
                    ),
                    _react2.default.createElement(_userModify2.default, _extends({}, this.props, { onCancel: this.onCancel, userInfo: window.__USER_INFO__ }))
                ) : _react2.default.createElement(_CustomTabs2.default, { tabs: [{
                        tabName: "用户登录",
                        tabContent: _react2.default.createElement(_userLogin2.default, _extends({}, this.props, { onCancel: this.onCancel }))
                    }, {
                        tabName: "用户注册",
                        tabContent: _react2.default.createElement(_userInfo3.default, _extends({}, this.props, { onCancel: this.onCancel }))
                    }], plainTabs: true, rtlActive: false, headerColor: 'info' })
            );
        }
    }]);

    return UserInfoContainer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return _extends({}, props);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchLoginUser: function fetchLoginUser(params) {
            dispatch(userAction.F_COMMON_FETCH_LOGIN_USER_ACTION(params));
        },
        fetchRegisterUser: function fetchRegisterUser(params, callback) {
            dispatch(userAction.F_COMMON_FETCH_ADD_USER_ACTION(params, callback));
        },
        fetchModifyUser: function fetchModifyUser(params, callback) {
            dispatch(userAction.F_COMMON_FETCH_MODIFY_USER_ACTION(params, callback));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyles2.default)(dialogStyle)(UserInfoContainer));

/***/ }),

/***/ "./static/f_common/containers/header/headerLinksContainer.js":
/*!*******************************************************************!*\
  !*** ./static/f_common/containers/header/headerLinksContainer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _HeaderLinks = __webpack_require__(/*! ../../components/Header/HeaderLinks */ "./static/f_common/components/Header/HeaderLinks.jsx");

var _HeaderLinks2 = _interopRequireDefault(_HeaderLinks);

var _userInfo = __webpack_require__(/*! ../../actions/User/userInfo */ "./static/f_common/actions/User/userInfo.jsx");

var userAction = _interopRequireWildcard(_userInfo);

var _share = __webpack_require__(/*! ../../../f_share/actions/share */ "./static/f_share/actions/share.jsx");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderLinksContainer = function (_React$Component) {
    _inherits(HeaderLinksContainer, _React$Component);

    function HeaderLinksContainer(props) {
        _classCallCheck(this, HeaderLinksContainer);

        return _possibleConstructorReturn(this, (HeaderLinksContainer.__proto__ || Object.getPrototypeOf(HeaderLinksContainer)).call(this, props));
    }

    _createClass(HeaderLinksContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_HeaderLinks2.default, this.props);
        }
    }]);

    return HeaderLinksContainer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return _extends({}, props);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchLogoutUser: function fetchLogoutUser() {
            dispatch(userAction.F_COMMON_FETCH_LOGOUT_USER_ACTION());
        },
        fetchGetUserMessage: function fetchGetUserMessage() {
            return new Promise(function (resolve, reject) {
                dispatch(userAction.F_COMMON_FETCH_USER_MESSAGE_ACTION(resolve, reject));
            });
        },
        fetchReadMessage: function fetchReadMessage(_id) {
            return new Promise(function (resolve, reject) {
                dispatch(userAction.F_COMMON_FETCH_USER_READ_MESSAGE_ACTION(_id, resolve, reject));
            });
        },
        fetchSearch: function fetchSearch(param) {
            return new Promise(function (resolve, reject) {
                dispatch((0, _share.F_COMMON_FETCH_SEARCH)(param, resolve, reject));
            });
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HeaderLinksContainer);

/***/ }),

/***/ "./static/f_home/constant/actionTypes.jsx":
/*!************************************************!*\
  !*** ./static/f_home/constant/actionTypes.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var UPDATE_EXTEND_INFO = exports.UPDATE_EXTEND_INFO = "F_HOME_UPDATE_EXTEND_INFO";

/***/ }),

/***/ "./static/f_home/index.jsx":
/*!*********************************!*\
  !*** ./static/f_home/index.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(/*! ./view/home.jsx */ "./static/f_home/view/home.jsx");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _home2.default;

/***/ }),

/***/ "./static/f_home/reducer/home.jsx":
/*!****************************************!*\
  !*** ./static/f_home/reducer/home.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(/*! ../constant/actionTypes */ "./static/f_home/constant/actionTypes.jsx");

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducerMap = new Map();

reducerMap.set(types.UPDATE_EXTEND_INFO, function (state, action) {
    return _extends({}, state, action.data);
});

exports.default = function (state, action) {
    if (reducerMap.has(action.type)) {
        return reducerMap.get(action.type)(state, action);
    }
    return state ? state : null;
};

/***/ }),

/***/ "./static/f_home/reducer/index.jsx":
/*!*****************************************!*\
  !*** ./static/f_home/reducer/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = __webpack_require__(/*! ./home.jsx */ "./static/f_home/reducer/home.jsx");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    home: _home2.default
};

/***/ }),

/***/ "./static/f_home/store/home.jsx":
/*!**************************************!*\
  !*** ./static/f_home/store/home.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStore = {
    a: 1
};

exports.default = defaultStore;

/***/ }),

/***/ "./static/f_home/store/index.jsx":
/*!***************************************!*\
  !*** ./static/f_home/store/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = __webpack_require__(/*! ./home.jsx */ "./static/f_home/store/home.jsx");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    home: _home2.default
};

/***/ }),

/***/ "./static/f_home/view/home.jsx":
/*!*************************************!*\
  !*** ./static/f_home/view/home.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _perfectScrollbar = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

__webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Header = __webpack_require__(/*! ../../f_common/components/Header/Header.jsx */ "./static/f_common/components/Header/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ../../f_common/components/Footer/Footer.jsx */ "./static/f_common/components/Footer/Footer.jsx");

var _Footer2 = _interopRequireDefault(_Footer);

var _Sidebar = __webpack_require__(/*! ../../f_common/components/Sidebar/Sidebar.jsx */ "./static/f_common/components/Sidebar/Sidebar.jsx");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _home = __webpack_require__(/*! ../../route/home.jsx */ "./static/route/home.jsx");

var _home2 = _interopRequireDefault(_home);

var _dashboardStyle = __webpack_require__(/*! ../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx */ "./static/assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx");

var _dashboardStyle2 = _interopRequireDefault(_dashboardStyle);

var _sidebar = __webpack_require__(/*! ../../assets/img/sidebar-2.jpg */ "./static/assets/img/sidebar-2.jpg");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _reactlogo = __webpack_require__(/*! ../../assets/img/reactlogo.png */ "./static/assets/img/reactlogo.png");

var _reactlogo2 = _interopRequireDefault(_reactlogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */

// creates a beautiful scrollbar

// @material-ui/core components

// core components


var switchRoutes = _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _home2.default.map(function (prop, key) {
    if (!prop) return;
    if (prop.redirect) return _react2.default.createElement(_reactRouterDom.Redirect, { from: prop.path, to: prop.to, key: key });
    return _react2.default.createElement(_reactRouterDom.Route, { path: "/view/:page", component: prop.component, key: key });
  })
);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleDrawerToggle = function () {
      _this.setState({ mobileOpen: !_this.state.mobileOpen });
    };

    _this.state = {
      mobileOpen: false
    };
    _this.resizeFunction = _this.resizeFunction.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "getRoute",
    value: function getRoute() {
      return this.props.location.pathname !== "/maps";
    }
  }, {
    key: "resizeFunction",
    value: function resizeFunction() {
      if (window.innerWidth >= 960) {
        this.setState({ mobileOpen: false });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (navigator.platform.indexOf("Win") > -1) {
        var ps = new _perfectScrollbar2.default(this.refs.mainPanel);
      }
      window.addEventListener("resize", this.resizeFunction);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(e) {
      if (e.history.location.pathname !== e.location.pathname) {
        this.refs.mainPanel.scrollTop = 0;
        if (this.state.mobileOpen) {
          this.setState({ mobileOpen: false });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeFunction);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      return _react2.default.createElement(
        "div",
        { className: classes.wrapper },
        _react2.default.createElement(_Sidebar2.default, _extends({
          routes: _home2.default,
          logoText: "记录快乐",
          logo: _reactlogo2.default,
          image: _sidebar2.default,
          handleDrawerToggle: this.handleDrawerToggle,
          open: this.state.mobileOpen,
          color: "blue"
        }, rest)),
        _react2.default.createElement(
          "div",
          { className: classes.mainPanel, ref: "mainPanel" },
          _react2.default.createElement(_Header2.default, _extends({
            routes: _home2.default,
            handleDrawerToggle: this.handleDrawerToggle
          }, rest)),
          _react2.default.createElement(
            "div",
            { className: classes.content },
            _react2.default.createElement(
              "div",
              { className: classes.container },
              switchRoutes
            )
          ),
          _react2.default.createElement(_Footer2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_dashboardStyle2.default)(App);

/***/ }),

/***/ "./static/f_share/actions/share.jsx":
/*!******************************************!*\
  !*** ./static/f_share/actions/share.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.F_COMMON_FETCH_SEARCH = exports.F_SHARE_FETCH_UPLOAD_FILE = exports.F_SHARE_FETCH_DELETE_SHARE_ITEM = exports.F_SHARE_FETCH_SAVE_SHARE_ITEM = exports.F_SHARE_FETCH_DELETE_SHARE_CATEGORY = exports.F_SHARE_FETCH_SAVE_SHARE_CATEGORY = exports.F_SHARE_FETCH_SHARE_INIT_ACTION = undefined;

var _share = __webpack_require__(/*! ../constants/share */ "./static/f_share/constants/share.jsx");

var types = _interopRequireWildcard(_share);

var _http = __webpack_require__(/*! ../../public/http */ "./static/public/http.js");

var _api = __webpack_require__(/*! ../constants/api */ "./static/f_share/constants/api.jsx");

var _assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var F_SHARE_SAVE_SHARE_CATEGORY = function F_SHARE_SAVE_SHARE_CATEGORY(category) {
    return {
        type: types.SAVE_SHARE_CATEGORY,
        category: category
    };
};
var F_SHARE_DELETE_SHARE_CATEGORY = function F_SHARE_DELETE_SHARE_CATEGORY(category) {
    return {
        type: types.DELETE_SHARE_CATEGORY,
        category: category
    };
};
var F_SHARE_INIT_DATA_ACTION = function F_SHARE_INIT_DATA_ACTION(categories) {
    return {
        type: types.INIT_DATA,
        categories: categories
    };
};
var F_SHARE_SAVE_SHARE_ITEM = function F_SHARE_SAVE_SHARE_ITEM(item) {
    return {
        type: types.SAVE_SHARE_ITEM,
        item: item
    };
};
var F_SHARE_DELETE_SHARE_ITEM = function F_SHARE_DELETE_SHARE_ITEM(category, _id) {
    return {
        type: types.DELETE_SHARE_ITEM,
        category: category,
        _id: _id
    };
};
var F_SHARE_FETCH_SHARE_INIT_ACTION = exports.F_SHARE_FETCH_SHARE_INIT_ACTION = function F_SHARE_FETCH_SHARE_INIT_ACTION(page) {
    return function (dispatch /*, getState*/) {
        (0, _http.fetchPost)('' + _api.API.getShareList + (page == 'public' ? '' : '/' + window.__USER_INFO__._id)).then(function (res) {
            return res.data;
        }).then(function (json) {
            dispatch(F_SHARE_INIT_DATA_ACTION(json.res || []));
        });
    };
};

var F_SHARE_FETCH_SAVE_SHARE_CATEGORY = exports.F_SHARE_FETCH_SAVE_SHARE_CATEGORY = function F_SHARE_FETCH_SAVE_SHARE_CATEGORY(page, category, resolve, reject) {
    return function (dispatch) {
        (0, _http.fetchPost)(_api.API.saveShareCategory, category).then(function (res) {
            return res.data;
        }).then(function (json) {
            if (!(page == 'public' && !category.publicFlag) && json.status) {
                dispatch(F_SHARE_SAVE_SHARE_CATEGORY(json.res));
            }
            resolve(json);
        }).catch(function (e) {
            reject(e);
        });
    };
};
var F_SHARE_FETCH_DELETE_SHARE_CATEGORY = exports.F_SHARE_FETCH_DELETE_SHARE_CATEGORY = function F_SHARE_FETCH_DELETE_SHARE_CATEGORY(category, resolve, reject) {
    return function (dispatch) {
        (0, _http.fetchGet)('/api/share/delete/category/' + category).then(function (res) {
            return res.data;
        }).then(function (json) {
            if (json.status) {
                dispatch(F_SHARE_DELETE_SHARE_CATEGORY(category));
            }
            resolve(json);
        }).catch(function (e) {
            reject(e);
        });
    };
};
var F_SHARE_FETCH_SAVE_SHARE_ITEM = exports.F_SHARE_FETCH_SAVE_SHARE_ITEM = function F_SHARE_FETCH_SAVE_SHARE_ITEM(item, resolve, reject) {
    return function (dispatch) {
        (0, _http.fetchPost)('/api/share/save/item', item).then(function (res) {
            return res.data;
        }).then(function (json) {
            json.status && dispatch(F_SHARE_SAVE_SHARE_ITEM(json.res));
            resolve(json);
        }).catch(function (e) {
            reject(e);
        });
    };
};
var F_SHARE_FETCH_DELETE_SHARE_ITEM = exports.F_SHARE_FETCH_DELETE_SHARE_ITEM = function F_SHARE_FETCH_DELETE_SHARE_ITEM(item, resolve, reject) {
    return function (dispatch) {
        (0, _http.fetchGet)('/api/share/delete/category/' + item.category + '/item/' + item._id).then(function (res) {
            return res.data;
        }).then(function (json) {
            dispatch(F_SHARE_DELETE_SHARE_ITEM(item.category, item._id));
            resolve(json);
        }).catch(function (e) {
            reject(e);
        });
    };
};
var F_SHARE_FETCH_UPLOAD_FILE = exports.F_SHARE_FETCH_UPLOAD_FILE = function F_SHARE_FETCH_UPLOAD_FILE(file, onUploadProgress, resolve, reject) {
    return function (dispatch) {
        (0, _http.fetchPost)(_api.API.fileUpload, file, { onUploadProgress: onUploadProgress }).then(function (res) {
            return res.data;
        }).then(function (json) {
            resolve(json);
        }).catch(function (e) {
            reject(e);
        });
    };
};

var F_COMMON_FETCH_SEARCH = exports.F_COMMON_FETCH_SEARCH = function F_COMMON_FETCH_SEARCH(params, resolve, reject) {
    return function (dispatch /*, getState*/) {
        (0, _http.fetchPost)('' + _api.API.getSearchList, params).then(function (res) {
            return res.data;
        }).then(function (json) {
            dispatch(F_SHARE_INIT_DATA_ACTION(json.res || []));
            resolve(json);
        }).catch(function (e) {
            reject(e);
        });
    };
};

/***/ }),

/***/ "./static/f_share/components/inputItem.js":
/*!************************************************!*\
  !*** ./static/f_share/components/inputItem.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validate = __webpack_require__(/*! ../../../util/validate */ "./util/validate.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputItem = function () {
    function InputItem(value, validate) {
        _classCallCheck(this, InputItem);

        this.setValidate = this.setValidate.bind(this);
        this.realValue = value;
        this.validates = [];
        this.setValidate(validate);
        this.error = false;
        this.success = false;
        this.readOnly = false;
        this.disabled = false;
    }

    _createClass(InputItem, [{
        key: "setValidate",
        value: function setValidate(validate) {
            if (!validate) return;
            if (typeof validate == 'function') {
                this.validates.push(validate.bind(this));
            }
            if ((0, _validate.isArray)(validate)) {
                this.validates = this.validates.concat(validate);
            }
        }
    }, {
        key: "removeValidate",
        value: function removeValidate(validate) {
            this.validates = this.validates.filter(function (v) {
                return v != validate;
            });
        }
    }, {
        key: "check",
        value: function check() {
            var _this = this;

            var success = this.validates.every(function (validate) {
                return validate(_this.value);
            });
            return success;
        }
    }, {
        key: "value",
        set: function set(value) {
            this.realValue = value;
        },
        get: function get() {
            return this.realValue;
        }
    }]);

    return InputItem;
}();

exports.default = InputItem;

/***/ }),

/***/ "./static/f_share/components/share.jsx":
/*!*********************************************!*\
  !*** ./static/f_share/components/share.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _Warning = __webpack_require__(/*! @material-ui/icons/Warning */ "./node_modules/@material-ui/icons/Warning.js");

var _Warning2 = _interopRequireDefault(_Warning);

var _Info = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");

var _Info2 = _interopRequireDefault(_Info);

var _Add = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");

var _Add2 = _interopRequireDefault(_Add);

var _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");

var _Delete2 = _interopRequireDefault(_Delete);

var _Edit = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _GridItem = __webpack_require__(/*! ../../f_common/components/Grid/GridItem.jsx */ "./static/f_common/components/Grid/GridItem.jsx");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = __webpack_require__(/*! ../../f_common/components/Grid/GridContainer.jsx */ "./static/f_common/components/Grid/GridContainer.jsx");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Danger = __webpack_require__(/*! ../../f_common/components/Typography/Danger.jsx */ "./static/f_common/components/Typography/Danger.jsx");

var _Danger2 = _interopRequireDefault(_Danger);

var _Card = __webpack_require__(/*! ../../f_common/components/Card/Card.jsx */ "./static/f_common/components/Card/Card.jsx");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = __webpack_require__(/*! ../../f_common/components/Card/CardHeader.jsx */ "./static/f_common/components/Card/CardHeader.jsx");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardIcon = __webpack_require__(/*! ../../f_common/components/Card/CardIcon.jsx */ "./static/f_common/components/Card/CardIcon.jsx");

var _CardIcon2 = _interopRequireDefault(_CardIcon);

var _CardBody = __webpack_require__(/*! ../../f_common/components/Card/CardBody.jsx */ "./static/f_common/components/Card/CardBody.jsx");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardContent = __webpack_require__(/*! ../../f_common/components/Card/CardContent.jsx */ "./static/f_common/components/Card/CardContent.jsx");

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardFooter = __webpack_require__(/*! ../../f_common/components/Card/CardFooter.jsx */ "./static/f_common/components/Card/CardFooter.jsx");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _dashboardStyle = __webpack_require__(/*! ../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx */ "./static/assets/jss/material-dashboard-react/views/dashboardStyle.jsx");

var _dashboardStyle2 = _interopRequireDefault(_dashboardStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core


// @material-ui/icons

// core components

var Share = function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share(props) {
    _classCallCheck(this, Share);

    var _this = _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).call(this, props));

    _this.handleChange = function (event, value) {
      _this.setState({ value: value });
    };

    _this.handleChangeIndex = function (index) {
      _this.setState({ value: index });
    };

    _this.onOpenEditDialog = _this.onOpenEditDialog.bind(_this);
    _this.deleteItem = _this.deleteItem.bind(_this);
    _this.state = {
      value: 0
    };
    return _this;
  }

  _createClass(Share, [{
    key: "onOpenEditDialog",
    value: function onOpenEditDialog(item) {
      this.props.openEditItemDialog(item);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(category, item) {
      this.props.deleteItem(category, item);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          share = _props.share,
          categories = share.get('categories') || [];

      return _react2.default.createElement(
        "div",
        { className: classes.container },
        categories.map(function (category, index) {
          return _react2.default.createElement(
            _GridContainer2.default,
            { key: index },
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 12 },
              _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                  _CardHeader2.default,
                  { color: "info", stats: true, icon: true },
                  _react2.default.createElement(
                    _CardIcon2.default,
                    { color: "info" },
                    _react2.default.createElement(
                      _Icon2.default,
                      null,
                      category.name
                    )
                  ),
                  window.__USER_INFO__ && (category.shareFlag || category.belong == window.__USER_INFO__._id) ? _react2.default.createElement(
                    _core.Tooltip,
                    { title: "\u6DFB\u52A0\u5185\u5BB9" },
                    _react2.default.createElement(
                      _core.Button,
                      { variant: "fab", color: "inherit", "aria-label": "Add", className: classes.button, onClick: function onClick() {
                          _this2.props.openAddItemDialog(category._id);
                        } },
                      _react2.default.createElement(_Add2.default, null)
                    )
                  ) : null,
                  window.__USER_INFO__ && window.__USER_INFO__._id == category.belong ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                      _core.Tooltip,
                      { title: "\u7F16\u8F91\u5206\u7C7B" },
                      _react2.default.createElement(
                        _core.Button,
                        { variant: "fab", color: "inherit", "aria-label": "Edit", className: classes.button, onClick: function onClick() {
                            _this2.props.openEditCategoryDialog(category._id, category.name);
                          } },
                        _react2.default.createElement(_Edit2.default, { color: "action" })
                      )
                    ),
                    _react2.default.createElement(
                      _core.Tooltip,
                      { title: "\u5220\u9664\u5206\u7C7B" },
                      _react2.default.createElement(
                        _core.Button,
                        { variant: "fab", "aria-label": "Delete", className: classes.button, onClick: function onClick() {
                            _this2.props.deleteCategory(category._id);
                          } },
                        _react2.default.createElement(_Delete2.default, null)
                      )
                    )
                  ) : null
                ),
                _react2.default.createElement(
                  _CardBody2.default,
                  null,
                  _react2.default.createElement(
                    _GridContainer2.default,
                    null,
                    category.children && category.children.map(function (item, index) {
                      return _react2.default.createElement(_CardContent2.default, { key: index, deleteItem: function deleteItem() {
                          _this2.deleteItem(category._id, item);
                        }, onOpenEditDialog: function onOpenEditDialog() {
                          return _this2.onOpenEditDialog(item);
                        }, info: _extends({}, item, { img: '../../public/icon/logo.svg' }), xs: 4, sm: 2, md: 1 });
                    })
                  )
                ),
                !category.children || category.children.length == 0 ? _react2.default.createElement(
                  _CardFooter2.default,
                  { stats: true },
                  _react2.default.createElement(
                    "div",
                    { className: classes.stats },
                    _react2.default.createElement(
                      _Danger2.default,
                      null,
                      _react2.default.createElement(_Warning2.default, null)
                    ),
                    _react2.default.createElement(
                      "span",
                      null,
                      "\u8BE5\u7C7B\u4E0B\u6682\u65E0\u5185\u5BB9\uFF0C\u8BF7\u6DFB\u52A0\u6709\u6548\u5185\u5BB9"
                    )
                  )
                ) : null
              )
            )
          );
        }),
        window.__USER_INFO__._id ? _react2.default.createElement(
          _GridContainer2.default,
          { key: categories.length, addButton: true, onClick: this.props.openAddCategoryDialog },
          _react2.default.createElement(
            _GridItem2.default,
            { xs: 12, sm: 12, md: 12 },
            _react2.default.createElement(
              _Card2.default,
              null,
              _react2.default.createElement(
                _CardHeader2.default,
                { color: "info", stats: true, icon: true },
                _react2.default.createElement(
                  _CardIcon2.default,
                  { color: "info" },
                  _react2.default.createElement(
                    _Icon2.default,
                    null,
                    _react2.default.createElement(_Add2.default, null)
                  )
                )
              ),
              _react2.default.createElement(
                _CardFooter2.default,
                { stats: true },
                _react2.default.createElement(
                  "div",
                  { className: classes.stats },
                  _react2.default.createElement(
                    _Danger2.default,
                    null,
                    _react2.default.createElement(_Info2.default, { color: 'action' })
                  )
                ),
                _react2.default.createElement(
                  "span",
                  null,
                  "\u70B9\u51FB\u5361\u7247\u6DFB\u52A0"
                )
              )
            )
          )
        ) : null
      );
    }
  }]);

  return Share;
}(_react2.default.Component);

Share.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(_dashboardStyle2.default)(Share);

/***/ }),

/***/ "./static/f_share/components/shareCategory.jsx":
/*!*****************************************************!*\
  !*** ./static/f_share/components/shareCategory.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = __webpack_require__(/*! ../../f_common/components/Dialog/Dialog */ "./static/f_common/components/Dialog/Dialog.jsx");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! ../../f_common/components/Dialog/DialogTitle */ "./static/f_common/components/Dialog/DialogTitle.jsx");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = __webpack_require__(/*! ../../f_common/components/Dialog/DialogContent */ "./static/f_common/components/Dialog/DialogContent.jsx");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogAction = __webpack_require__(/*! ../../f_common/components/Dialog/DialogAction */ "./static/f_common/components/Dialog/DialogAction.jsx");

var _DialogAction2 = _interopRequireDefault(_DialogAction);

var _CustomInput = __webpack_require__(/*! ../../f_common/components/CustomInput/CustomInput */ "./static/f_common/components/CustomInput/CustomInput.jsx");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _switchLabels = __webpack_require__(/*! ../../f_common/components/Selection/switchLabels */ "./static/f_common/components/Selection/switchLabels.jsx");

var _switchLabels2 = _interopRequireDefault(_switchLabels);

var _inputItem = __webpack_require__(/*! ./inputItem */ "./static/f_share/components/inputItem.js");

var _inputItem2 = _interopRequireDefault(_inputItem);

var _validate = __webpack_require__(/*! ../../../util/validate */ "./util/validate.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core

// @material-ui/icons
// import Cloud from "@material-ui/icons/Cloud";

// core components


var dialogStyle = {
  paper: {
    width: "400px"
  }
};

var ShareCategory = function (_React$Component) {
  _inherits(ShareCategory, _React$Component);

  function ShareCategory(props) {
    _classCallCheck(this, ShareCategory);

    var _this = _possibleConstructorReturn(this, (ShareCategory.__proto__ || Object.getPrototypeOf(ShareCategory)).call(this, props));

    _this.onCategoryChange = _this.onCategoryChange.bind(_this);
    _this.onCategoryConfirm = _this.onCategoryConfirm.bind(_this);
    _this.onChangeSwitchLabel = _this.onChangeSwitchLabel.bind(_this);
    _this.state = {
      category: new _inputItem2.default('', [_validate.isNotEmpty]),
      switchLabels: [{
        selects: ['公共分享', '我的收藏'],
        label: '公共分享',
        checked: true,
        value: 'public',
        color: 'primary'
      }, {
        selects: ['允许其他人添加分享', '禁止其他人添加分享'],
        label: '禁止其他人添加分享',
        checked: false,
        value: 'public',
        color: 'primary'
      }]
    };
    return _this;
  }

  _createClass(ShareCategory, [{
    key: "onInputBlur",
    value: function onInputBlur(name) {
      var state = this.state[name],
          success = state.check();
      state.success = success;
      state.error = !success;
      this.setState(_defineProperty({}, name, state));
    }
  }, {
    key: "onCategoryChange",
    value: function onCategoryChange(ev) {
      var category = this.state.category;
      category.value = ev.target.value;
      this.setState({
        category: category
      });
    }
  }, {
    key: "onCategoryConfirm",
    value: function onCategoryConfirm() {
      var _this2 = this;

      var category = this.state.category;
      if (!category.check()) {
        this.setState({
          category: category
        });
        return;
      }
      this.props.saveCategory({
        name: this.state.category.value || this.props.defaultValue,
        _id: this.props._id,
        publicFlag: this.state.switchLabels[0].checked,
        shareFlag: this.state.switchLabels[1].checked
      }).then(function (json) {
        if (!json.status) {
          if (json.res.error == 'name') {
            var _category = _this2.state.category;
            _category.error = true;
            _category.success = false;
            _this2.setState({
              category: _category
            });
          }
        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.category.value != nextProps.defaultValue) {
        this.setState({
          category: new _inputItem2.default(nextProps.defaultValue, [_validate.isNotEmpty])
        });
      }
    }
  }, {
    key: "onChangeSwitchLabel",
    value: function onChangeSwitchLabel(changeSwitchIndex, event) {
      this.setState({
        switchLabels: this.state.switchLabels.map(function (switchLabel, index) {
          if (index == changeSwitchIndex) {
            switchLabel.checked = event.target.checked;
            switchLabel.label = switchLabel.checked ? switchLabel.selects[0] : switchLabel.selects[1];
          }
          return switchLabel;
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          title = _props.title,
          open = _props.open;

      var customInput = {
        formControlProps: {
          className: 'category-form'
        },
        inputProps: {
          placeholder: "category",
          inputProps: {
            "aria-label": "category"
          },
          onChange: this.onCategoryChange,
          value: this.state.category.value,
          onBlur: this.onInputBlur.bind(this, 'category')
        },
        labelText: '',
        id: "share-category-input",
        success: this.state.category.success,
        error: this.state.category.error
      };
      return _react2.default.createElement(
        _Dialog2.default,
        { muiClasses: classes, open: open },
        _react2.default.createElement(
          _DialogTitle2.default,
          null,
          title
        ),
        _react2.default.createElement(
          _DialogContent2.default,
          null,
          _react2.default.createElement(_CustomInput2.default, customInput),
          _react2.default.createElement(_switchLabels2.default, { switchLabels: this.state.switchLabels, onChange: this.onChangeSwitchLabel })
        ),
        _react2.default.createElement(
          _DialogAction2.default,
          null,
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.onCategoryConfirm },
            "\u786E\u5B9A"
          )
        )
      );
    }
  }]);

  return ShareCategory;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(dialogStyle)(ShareCategory);

/***/ }),

/***/ "./static/f_share/components/shareItem.jsx":
/*!*************************************************!*\
  !*** ./static/f_share/components/shareItem.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = __webpack_require__(/*! ../../f_common/components/Dialog/Dialog */ "./static/f_common/components/Dialog/Dialog.jsx");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(/*! ../../f_common/components/Dialog/DialogTitle */ "./static/f_common/components/Dialog/DialogTitle.jsx");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = __webpack_require__(/*! ../../f_common/components/Dialog/DialogContent */ "./static/f_common/components/Dialog/DialogContent.jsx");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogAction = __webpack_require__(/*! ../../f_common/components/Dialog/DialogAction */ "./static/f_common/components/Dialog/DialogAction.jsx");

var _DialogAction2 = _interopRequireDefault(_DialogAction);

var _CustomInput = __webpack_require__(/*! ../../f_common/components/CustomInput/CustomInput */ "./static/f_common/components/CustomInput/CustomInput.jsx");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _customSelect = __webpack_require__(/*! ../../f_common/components/Selects/customSelect */ "./static/f_common/components/Selects/customSelect.js");

var _customSelect2 = _interopRequireDefault(_customSelect);

var _linear = __webpack_require__(/*! ../../f_common/components/Progress/linear */ "./static/f_common/components/Progress/linear.js");

var _linear2 = _interopRequireDefault(_linear);

var _validate = __webpack_require__(/*! ../../../util/validate */ "./util/validate.js");

var _inputItem = __webpack_require__(/*! ./inputItem */ "./static/f_share/components/inputItem.js");

var _inputItem2 = _interopRequireDefault(_inputItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core

// @material-ui/icons
// import Cloud from "@material-ui/icons/Cloud";

// core components


var dialogStyle = {
  paper: {
    width: "500px"
  }
};

var ShareItem = function (_React$Component) {
  _inherits(ShareItem, _React$Component);

  function ShareItem(props) {
    _classCallCheck(this, ShareItem);

    var _this = _possibleConstructorReturn(this, (ShareItem.__proto__ || Object.getPrototypeOf(ShareItem)).call(this, props));

    _this.onTitleChange = _this.onTitleChange.bind(_this);
    _this.onLinkChange = _this.onLinkChange.bind(_this);
    _this.onDescriptionChange = _this.onDescriptionChange.bind(_this);
    _this.onItemConfirm = _this.onItemConfirm.bind(_this);
    _this.onItemCancel = _this.onItemCancel.bind(_this);
    _this.onIconChange = _this.onIconChange.bind(_this);
    _this.onTypeChange = _this.onTypeChange.bind(_this);
    _this.state = {
      title: new _inputItem2.default('标题', [_validate.isNotEmpty]),
      link: new _inputItem2.default('', [_validate.isNotEmpty, _validate.isUrl]),
      description: new _inputItem2.default('', [_validate.isNotEmpty]),
      type: {
        selected: { value: 0, name: '链接' },
        options: [{ value: 0, name: '链接' }, { value: 1, name: '文件' }]
      }
    };
    return _this;
  }

  _createClass(ShareItem, [{
    key: "onTitleChange",
    value: function onTitleChange(ev) {
      var title = this.state.title;
      title.value = ev.target.value;
      this.setState({
        title: title
      });
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(name) {
      var state = this.state[name],
          success = state.check();
      state.success = success;
      state.error = !success;
      this.setState(_defineProperty({}, name, state));
    }
  }, {
    key: "onLinkChange",
    value: function onLinkChange(ev) {
      var _this2 = this;

      if (this.state.type.selected.value == 0) {
        var link = this.state.link;
        link.value = ev.target.value;
        this.setState({
          link: link
        });
      } else {
        var file = ev.target.files[0];
        var formData = new FormData();
        formData.append('file', file);
        formData.append('category', this.props.category);
        var type = this.state.type,
            _link = this.state.link;
        type.disabled = true;
        _link.disabled = true;
        _link.error = false;
        this.setState({
          type: type,
          link: _link
        }, function () {
          new Promise(function (resolve, reject) {
            _this2.props.fetchUploadFile(formData, function (progress) {
              var link = _this2.state.link;
              link.progress = progress.loaded / progress.total * 100;
              _this2.setState({
                link: link
              });
            }, resolve, reject);
          }).then(function (json) {
            var link = _this2.state.link;
            link.value = json.link;
            link.uploadFinish = true;
            link.error = false;
            link.success = true;
            _this2.setState({
              link: link
            });
          }).catch(function (e) {});
        });
      }
    }
  }, {
    key: "onDescriptionChange",
    value: function onDescriptionChange(ev) {
      var description = this.state.description;
      description.value = ev.target.value;
      this.setState({
        description: description
      });
    }
  }, {
    key: "onIconChange",
    value: function onIconChange(ev) {
      this.setState({
        icon: ev.target.files[0]
      });
    }
  }, {
    key: "onTypeChange",
    value: function onTypeChange(ev) {
      var link = this.state.link;

      var selected = this.state.type.options.find(function (option) {
        return option.value == ev.target.value;
      });
      if (selected.value == 1) {
        link.removeValidate(_validate.isUrl);
      } else {
        link.setValidate(_validate.isUrl);
      }
      link.value = '';
      link.error = false;
      link.success = false;
      this.setState({
        type: _extends({}, this.state.type, {
          selected: selected
        }),
        link: link
      });
    }
  }, {
    key: "onItemConfirm",
    value: function onItemConfirm() {
      var _this3 = this;

      var _state = this.state,
          title = _state.title,
          link = _state.link,
          isTitle = title.check(),
          isLink = link.check();

      if (!isTitle) {
        title.error = true;
        title.success = false;
        this.setState({
          title: title
        });
        return;
      }
      if (!isLink) {
        link.error = true;
        link.success = false;
        this.setState({
          link: link
        });
        return;
      }
      var formData = new FormData(),
          params = {
        category: this.props.category,
        _id: this.props.item ? this.props.item._id : '',
        title: this.state.title.value,
        link: this.state.link.value,
        icon: this.state.icon,
        description: this.state.description.value,
        target: '_blank'
      };

      Object.entries(params).map(function (item) {
        // formData.append(item[0],item[1])
        formData.append.apply(formData, item);
      });
      this.props.saveItem(formData).then(function (json) {
        if (json.status) {
          _this3.reset();
        } else if (json.res.error === 'title') {
          var _title = _this3.state.title;
          _title.error = true;
          _title.success = false;
          _this3.setState({
            title: _title
          });
        }
      }).catch(function (e) {
        console.log(e);
      });
    }
  }, {
    key: "onItemCancel",
    value: function onItemCancel() {
      this.props.cancelItem();
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      var type = this.state.type,
          link = this.state.link;
      type.disabled = false;
      link.disabled = false;
      link.uploadFinish = false;
      link.error = false;
      link.success = false;
      link.progress = 0;
      this.setState({
        type: type,
        link: link
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.item) {
        var _nextProps$item = nextProps.item,
            title = _nextProps$item.title,
            link = _nextProps$item.link,
            description = _nextProps$item.description;

        this.setState({
          title: new _inputItem2.default(title, [_validate.isNotEmpty]),
          link: new _inputItem2.default(link, [_validate.isNotEmpty, _validate.isUrl]),
          description: new _inputItem2.default(description, [_validate.isNotEmpty])
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          dialogTitle = _props.dialogTitle,
          open = _props.open,
          _state2 = this.state,
          title = _state2.title,
          link = _state2.link,
          description = _state2.description,
          type = _state2.type;

      var customInput = {
        formControlProps: {
          className: 'item-form'
        },
        inputProps: {
          placeholder: "category",
          inputProps: {
            "aria-label": "category"
          }
        },
        labelText: '标题',
        success: false,
        error: false
      };
      return _react2.default.createElement(
        _Dialog2.default,
        { muiClasses: classes, open: open },
        _react2.default.createElement(
          _DialogTitle2.default,
          null,
          dialogTitle
        ),
        _react2.default.createElement(
          _DialogContent2.default,
          null,
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'share-item-dialog-title'
          }, customInput, {
            labelText: '标题',
            inputProps: _extends({}, customInput.inputProps, {
              placeholder: '标题',
              onChange: this.onTitleChange,
              value: title.value,
              onBlur: this.onInputBlur.bind(this, 'title')
            }),
            success: title.success,
            error: title.error
          })),
          _react2.default.createElement(_customSelect2.default, _defineProperty({ id: 'share-item-dialog-type-select',
            labelText: '类型',
            disabled: type.disabled,
            selected: type.selected,
            options: type.options,
            onChange: this.onTypeChange
          }, "disabled", type.disabled)),
          _react2.default.createElement(
            _CustomInput2.default,
            { id: 'share-item-dialog-link',
              formControlProps: _extends({}, customInput.formControlProps, {
                disabled: link.disabled
              }),
              labelText: '链接',
              inputProps: _extends({}, customInput.inputProps, {
                placeholder: '链接',
                type: type.selected.value == 0 || link.uploadFinish ? 'text' : 'file',
                onChange: this.onLinkChange,
                value: type.selected.value == 0 || link.uploadFinish ? link.value : "",
                onBlur: this.onInputBlur.bind(this, 'link')
              }),
              success: link.success,
              error: link.error

            },
            _react2.default.createElement(_linear2.default, { value: link.progress, hide: type.selected.value == 0 || link.uploadFinish })
          ),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'share-item-dialog-description'
          }, customInput, {
            labelText: '描述',
            inputProps: _extends({}, customInput.inputProps, {
              placeholder: '描述',
              onChange: this.onDescriptionChange,
              value: description.value,
              onBlur: this.onInputBlur.bind(this, 'description')
            }),
            success: description.success,
            error: false
          })),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'share-item-dialog-image'
          }, customInput, {
            labelText: '图标',
            inputProps: _extends({}, customInput.inputProps, {
              placeholder: '图标',
              type: 'file',
              inputProps: {
                accept: 'image/*'
              },
              onChange: this.onIconChange
            }) }))
        ),
        _react2.default.createElement(
          _DialogAction2.default,
          null,
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.onItemConfirm },
            "\u786E\u5B9A"
          ),
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.onItemCancel },
            "\u53D6\u6D88"
          )
        )
      );
    }
  }]);

  return ShareItem;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(dialogStyle)(ShareItem);

/***/ }),

/***/ "./static/f_share/constants/api.jsx":
/*!******************************************!*\
  !*** ./static/f_share/constants/api.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var API_ROOT = '/api/';
var API = exports.API = {
    getShareList: API_ROOT + 'share/list',
    saveShareCategory: API_ROOT + 'share/save/category',
    fileUpload: API_ROOT + 'file/upload',
    getSearchList: API_ROOT + 'share/search'
};

/***/ }),

/***/ "./static/f_share/constants/share.jsx":
/*!********************************************!*\
  !*** ./static/f_share/constants/share.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var UPDATE_EXTEND_INFO = exports.UPDATE_EXTEND_INFO = "F_SHARE_UPDATE_EXTEND_INFO";
var SAVE_SHARE_CATEGORY = exports.SAVE_SHARE_CATEGORY = "F_SHARE_SAVE_SHARE_CATEGORY";
var DELETE_SHARE_CATEGORY = exports.DELETE_SHARE_CATEGORY = "F_SHARE_DELETE_SHARE_CATEGORY";
var INIT_DATA = exports.INIT_DATA = "F_SHARE_INIT_DATA";
var SAVE_SHARE_ITEM = exports.SAVE_SHARE_ITEM = "F_SHARE_SAVE_SHARE_ITEM";
var DELETE_SHARE_ITEM = exports.DELETE_SHARE_ITEM = "F_SHARE_DELETE_SHARE_ITEM";

/***/ }),

/***/ "./static/f_share/index.jsx":
/*!**********************************!*\
  !*** ./static/f_share/index.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _share = __webpack_require__(/*! ./views/share.jsx */ "./static/f_share/views/share.jsx");

var _share2 = _interopRequireDefault(_share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _share2.default;

/***/ }),

/***/ "./static/f_share/reducers/index.jsx":
/*!*******************************************!*\
  !*** ./static/f_share/reducers/index.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _share = __webpack_require__(/*! ./share.jsx */ "./static/f_share/reducers/share.jsx");

var _share2 = _interopRequireDefault(_share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    share: _share2.default
};

/***/ }),

/***/ "./static/f_share/reducers/share.jsx":
/*!*******************************************!*\
  !*** ./static/f_share/reducers/share.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var _immutable2 = _interopRequireDefault(_immutable);

var _share = __webpack_require__(/*! ../constants/share.jsx */ "./static/f_share/constants/share.jsx");

var types = _interopRequireWildcard(_share);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducerMap = new Map();

reducerMap.set(types.UPDATE_EXTEND_INFO, function (state, action) {
    return _extends({}, state);
});

reducerMap.set(types.INIT_DATA, function (state, action) {
    return state.update('categories', function (categories) {
        return _immutable2.default.fromJS([]).concat(action.categories);
    });
});

reducerMap.set(types.SAVE_SHARE_CATEGORY, function (state, action) {
    return state.update('categories', function (categories) {
        if (categories.some(function (category) {
            return category._id == action.category._id;
        })) {
            return categories.map(function (category) {
                if (category._id == action.category._id) {
                    category = action.category;
                }
                return category;
            });
        } else {
            return categories.push(action.category);
        }
    });
});
reducerMap.set(types.DELETE_SHARE_CATEGORY, function (state, action) {
    return state.update('categories', function (categories) {
        return categories.filter(function (category) {
            return category._id != action.category;
        });
    });
});
reducerMap.set(types.SAVE_SHARE_ITEM, function (state, action) {
    return state.update('categories', function (categories) {
        return categories.map(function (category) {
            if (category._id == action.item.category) {
                if (category.children.some(function (item) {
                    return item._id == action.item._id;
                })) {
                    category.children = category.children.map(function (item) {
                        if (item._id == action.item._id) {
                            item = action.item;
                        }
                        return item;
                    });
                } else {
                    category.children.push(action.item);
                }
            }
            return category;
        });
    });
});

reducerMap.set(types.DELETE_SHARE_ITEM, function (state, action) {

    return state.update('categories', function (categories) {
        return categories.map(function (category) {
            if (category._id == action.category) {
                category.children = category.children.filter(function (item) {
                    return item._id != action._id;
                });
            }
            return category;
        });
    });
});

exports.default = function (state, action) {
    if (reducerMap.has(action.type)) {
        return reducerMap.get(action.type)(state, action);
    }
    return state ? state : null;
};

/***/ }),

/***/ "./static/f_share/stores/index.jsx":
/*!*****************************************!*\
  !*** ./static/f_share/stores/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _share = __webpack_require__(/*! ./share.jsx */ "./static/f_share/stores/share.jsx");

var _share2 = _interopRequireDefault(_share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    share: _share2.default
};

/***/ }),

/***/ "./static/f_share/stores/share.jsx":
/*!*****************************************!*\
  !*** ./static/f_share/stores/share.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var defaultStore = {
    categories: []
};

exports.default = defaultStore;

/***/ }),

/***/ "./static/f_share/views/share.jsx":
/*!****************************************!*\
  !*** ./static/f_share/views/share.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _share = __webpack_require__(/*! ../actions/share */ "./static/f_share/actions/share.jsx");

var shareAction = _interopRequireWildcard(_share);

var _share2 = __webpack_require__(/*! ../components/share */ "./static/f_share/components/share.jsx");

var _share3 = _interopRequireDefault(_share2);

var _shareItem = __webpack_require__(/*! ../components/shareItem */ "./static/f_share/components/shareItem.jsx");

var _shareItem2 = _interopRequireDefault(_shareItem);

var _shareCategory = __webpack_require__(/*! ../components/shareCategory */ "./static/f_share/components/shareCategory.jsx");

var _shareCategory2 = _interopRequireDefault(_shareCategory);

var _Snackbar = __webpack_require__(/*! ../../f_common/components/Snackbar/Snackbar */ "./static/f_common/components/Snackbar/Snackbar.jsx");

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShareContainer = function (_React$Component) {
    _inherits(ShareContainer, _React$Component);

    function ShareContainer(props) {
        _classCallCheck(this, ShareContainer);

        var _this = _possibleConstructorReturn(this, (ShareContainer.__proto__ || Object.getPrototypeOf(ShareContainer)).call(this, props));

        _this.saveCategory = _this.saveCategory.bind(_this);
        _this.deleteCategory = _this.deleteCategory.bind(_this);
        _this.openAddCategoryDialog = _this.openAddCategoryDialog.bind(_this);
        _this.openEditCategoryDialog = _this.openEditCategoryDialog.bind(_this);
        _this.openAddItemDialog = _this.openAddItemDialog.bind(_this);
        _this.openEditItemDialog = _this.openEditItemDialog.bind(_this);
        _this.saveItem = _this.saveItem.bind(_this);
        _this.deleteItem = _this.deleteItem.bind(_this);
        _this.cancelItem = _this.cancelItem.bind(_this);
        _this.state = {
            categoryDialog: false,
            itemDialog: {
                open: false,
                dialogTitle: '添加项目',
                category: '',
                item: null
            },
            category: '',
            categoryName: '',
            categoryTitle: '添加分类',
            categoryId: '',
            snackbar: {
                autoHideDuration: 3000,
                open: false,
                place: 'tc',
                message: '',
                color: 'success',
                onClose: function onClose() {
                    _this.setState({
                        snackbar: _extends({}, _this.state.snackbar, {
                            open: false
                        })
                    });
                }
            }

        };
        return _this;
    }

    _createClass(ShareContainer, [{
        key: 'openAddCategoryDialog',
        value: function openAddCategoryDialog() {
            this.setState({
                categoryId: '',
                categoryTitle: '添加分类',
                categoryDialog: true,
                categoryName: '新分类名'
            });
        }
    }, {
        key: 'openEditCategoryDialog',
        value: function openEditCategoryDialog(_id, name) {
            this.setState({
                categoryId: _id,
                categoryTitle: '修改分类',
                categoryDialog: true,
                categoryName: name
            });
        }
    }, {
        key: 'saveCategory',
        value: function saveCategory(category) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.props.fetchSaveCategory(_this2.props.match.params.page, category, resolve, reject);
            }).then(function (json) {
                if (json.status) {
                    _this2.setState({
                        categoryDialog: false
                    });
                }
                return json;
            }).catch(function (e) {
                console.error(e);
            });
        }
    }, {
        key: 'deleteCategory',
        value: function deleteCategory(_id) {
            var _this3 = this;

            new Promise(function (resolve, reject) {
                _this3.props.fetchDeleteCategory(_id, resolve, reject);
            }).then(function () {
                _this3.setState({
                    snackbar: _extends({}, _this3.state.snackbar, {
                        open: true,
                        message: '该类已经被删除',
                        color: 'danger'
                    })
                });
            }).catch(function (e) {
                console.error(e);
            });
        }
    }, {
        key: 'openAddItemDialog',
        value: function openAddItemDialog(category) {
            this.setState({
                itemDialog: _extends({}, this.state.itemDialog, {
                    open: true,
                    dialogTitle: '添加项目',
                    category: category,
                    item: ''
                })
            });
        }
    }, {
        key: 'openEditItemDialog',
        value: function openEditItemDialog(item) {
            this.setState({
                itemDialog: _extends({}, this.state.itemDialog, {
                    open: true,
                    dialogTitle: '修改项目',
                    item: item,
                    category: item.category
                })
            });
        }
    }, {
        key: 'saveItem',
        value: function saveItem(item) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                _this4.props.fetchSaveItem(item, resolve, reject);
            }).then(function (json) {
                if (json.status) {
                    _this4.setState({
                        itemDialog: _extends({}, _this4.state.itemDialog, {
                            open: false
                        })
                    });
                }
                return json;
            }).catch(function (e) {
                return Promise.reject(e);
            });
        }
    }, {
        key: 'deleteItem',
        value: function deleteItem(category, item) {
            var _this5 = this;

            new Promise(function (resolve, reject) {
                _this5.props.fetchDeleteItem(_extends({ category: category }, item), resolve, reject);
            }).then(function () {
                _this5.setState({
                    snackbar: _extends({}, _this5.state.snackbar, {
                        open: true,
                        message: '该项已经被删除',
                        color: 'danger'
                    })
                });
            }).catch(function (e) {
                console.error(e);
            });
        }
    }, {
        key: 'cancelItem',
        value: function cancelItem() {
            this.setState({
                itemDialog: _extends({}, this.state.itemDialog, {
                    open: false
                })
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.match.params.page != this.props.match.params.page) {
                this.props.fetchInitShareList(nextProps.match.params.page);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchInitShareList(this.props.match.params.page);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_share3.default, _extends({ deleteCategory: this.deleteCategory,
                    openEditItemDialog: this.openEditItemDialog,
                    openAddItemDialog: this.openAddItemDialog,
                    openAddCategoryDialog: this.openAddCategoryDialog,
                    openEditCategoryDialog: this.openEditCategoryDialog,
                    deleteItem: this.deleteItem
                }, this.props)),
                _react2.default.createElement(_shareCategory2.default, _extends({ saveCategory: this.saveCategory, open: this.state.categoryDialog }, this.props, { _id: this.state.categoryId, title: this.state.categoryTitle, defaultValue: this.state.categoryName })),
                _react2.default.createElement(_shareItem2.default, _extends({
                    cancelItem: this.cancelItem,
                    saveItem: this.saveItem,
                    fetchUploadFile: this.props.fetchUploadFile,
                    open: this.state.itemDialog.open
                }, this.state.itemDialog, this.props)),
                _react2.default.createElement(_Snackbar2.default, this.state.snackbar)
            );
        }
    }]);

    return ShareContainer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        share: state.get("share")
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchInitShareList: function fetchInitShareList(page) {
            dispatch(shareAction.F_SHARE_FETCH_SHARE_INIT_ACTION(page));
        },
        fetchSaveCategory: function fetchSaveCategory(page, category, resolve, reject) {
            dispatch(shareAction.F_SHARE_FETCH_SAVE_SHARE_CATEGORY(page, category, resolve, reject));
        },
        fetchDeleteCategory: function fetchDeleteCategory(_id, resolve, reject) {
            dispatch(shareAction.F_SHARE_FETCH_DELETE_SHARE_CATEGORY(_id, resolve, reject));
        },
        fetchSaveItem: function fetchSaveItem(item, resolve, reject) {
            dispatch(shareAction.F_SHARE_FETCH_SAVE_SHARE_ITEM(item, resolve, reject));
        },
        fetchDeleteItem: function fetchDeleteItem(item, resolve, reject) {
            dispatch(shareAction.F_SHARE_FETCH_DELETE_SHARE_ITEM(item, resolve, reject));
        },
        fetchUploadFile: function fetchUploadFile(file, onUploadProgress, resolve, reject) {
            dispatch(shareAction.F_SHARE_FETCH_UPLOAD_FILE(file, onUploadProgress, resolve, reject));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShareContainer);

/***/ }),

/***/ "./static/index.js":
/*!*************************!*\
  !*** ./static/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

__webpack_require__(/*! ./assets/css/material-dashboard-react.css */ "./static/assets/css/material-dashboard-react.css");

var _index = __webpack_require__(/*! ./store/index.jsx */ "./static/store/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./route/index.jsx */ "./static/route/index.jsx");

var _index4 = _interopRequireDefault(_index3);

var _notification = __webpack_require__(/*! ./public/notification */ "./static/public/notification.js");

var _notification2 = _interopRequireDefault(_notification);

var _socket = __webpack_require__(/*! ./public/socket */ "./static/public/socket.js");

var _socket2 = _interopRequireDefault(_socket);

var _constConfig = __webpack_require__(/*! ../config/constConfig */ "./config/constConfig.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var notify = new _notification2.default({ title: '记录快乐' });

notify.showNotify();

new _socket2.default({
  events: _defineProperty({
    'connect': function connect() {
      console.log('connect');
    }
  }, _constConfig.REDIS_MESSAGE.SHARE_MESSAGE.EVENT, function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '{}';

    var msg = JSON.parse(message);
    if (msg.user && window.__USER_INFO__ && msg.user != window.__USER_INFO__._id) {
      notify.showNotify({ body: JSON.parse(message).body });
    }
  })
});

var hist = (0, _history.createBrowserHistory)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _index2.default },
  _react2.default.createElement(
    _reactRouterDom.Router,
    { history: hist },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _index4.default.map(function (prop, key) {
        return _react2.default.createElement(_reactRouterDom.Route, { path: prop.path, component: prop.component, key: key });
      })
    )
  )
), document.getElementById("root"));

/***/ }),

/***/ "./static/public/http.js":
/*!*******************************!*\
  !*** ./static/public/http.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchPostForm = exports.fetchPostWithHeaders = exports.fetchPost = exports.fetchGetWithHeaders = exports.fetchGet = exports.fetchJsonpGet = exports.injectFetchExtHeader = exports.getOrderDataFromGlobal = exports.getConfigsFromGlobal = exports.getSwitchesFromGlobal = exports.getPrevCondFromGlobal = exports.genUrlFromParams = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.interceptors.request.use(function (config) {
    config.headers = _extends({}, config.headers, { 'Cache-Control': 'no-cache', appName: navigator.appName });
    var r = Math.random();
    if (config.url.includes("?")) {
        config.url = config.url + "&v=" + r;
    } else {
        config.url = config.url + "?v=" + r;
    }
    return config;
});
_axios2.default.interceptors.response.use(function (response) {
    if (response) {}

    return response;
}, function (error) {});

function queryParams(params) {
    return params ? Object.keys(params).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    }).join('&') : '';
}

var genUrlFromParams = exports.genUrlFromParams = function genUrlFromParams(url, params) {
    if (url && params) {
        params = _extends({}, params);
        url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(params);
    }

    return url;
};

/**
 * 从全局变量直接访问 prevCond 【不建议使用，最好从 store 获取】
 */
var getPrevCondFromGlobal = exports.getPrevCondFromGlobal = function getPrevCondFromGlobal() {
    return window.GlobalSearchCriteria || {};
};

/** 
 * 从全局变量直接访问 GlobalSwitches  【不建议使用，最好从 store 获取】
*/
var getSwitchesFromGlobal = exports.getSwitchesFromGlobal = function getSwitchesFromGlobal() {
    return window.GlobalSwitches || {};
};

/** 
 * 从全局变量直接访问 GlobalConfigs  【不建议使用，最好从 store 获取】
*/
var getConfigsFromGlobal = exports.getConfigsFromGlobal = function getConfigsFromGlobal() {
    return window.GlobalConfigs || {};
};

/**
 * 从全局变量直接访问 GlobalOrderData 【不建议使用，最好从 store 获取】
 */
var getOrderDataFromGlobal = exports.getOrderDataFromGlobal = function getOrderDataFromGlobal() {
    return window.GlobalOrderData || {};
};

var prevCond = getPrevCondFromGlobal(),
    transactionID = prevCond.transactionID,
    extHeader = transactionID ? { transactionID: transactionID } : {};

//注入额外的 extHeader 信息
var injectFetchExtHeader = exports.injectFetchExtHeader = function injectFetchExtHeader(ext) {
    extHeader = Object.assign({}, extHeader, ext);
};

var fetchJsonpGet = exports.fetchJsonpGet = function fetchJsonpGet(url, params) {
    url = genUrlFromParams(url, params);

    return new Promise(function (resolve, reject) {
        fetchJsonp(url, Object.assign({ credentials: 'same-origin' }, extHeader)).then(function (res) {
            resolve && resolve({ data: res.json() });
        }, function (reason) {
            reject && reject(reason);
        });
    });
};

var fetchGet = exports.fetchGet = function fetchGet(url, params) {
    var axiosExtendOps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return fetchGetWithHeaders(url, params, {}, axiosExtendOps);
};

var fetchGetWithHeaders = exports.fetchGetWithHeaders = function fetchGetWithHeaders(url, params) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var axiosExtendOps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    url = genUrlFromParams(url, params);
    var ops = {
        withCredentials: true,
        headers: Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        }, extHeader, headers)
    };
    Object.assign(ops, axiosExtendOps);
    return _axios2.default.get(url, ops);
};

var fetchPost = exports.fetchPost = function fetchPost(url, params) {
    var axiosExtendOps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return fetchPostWithHeaders(url, params, {}, axiosExtendOps);
};

var fetchPostWithHeaders = exports.fetchPostWithHeaders = function fetchPostWithHeaders(url, params) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var axiosExtendOps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var ops = {
        withCredentials: true,
        headers: Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        }, extHeader, headers)
    };
    Object.assign(ops, axiosExtendOps);
    return _axios2.default.post(url, params, ops);
};

var fetchPostForm = exports.fetchPostForm = function fetchPostForm(url, params) {
    return _axios2.default.post(url, params, {
        withCredentials: true,
        headers: Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }, extHeader)
    });
};

/***/ }),

/***/ "./static/public/notification.js":
/*!***************************************!*\
  !*** ./static/public/notification.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notifications = function () {
    function Notifications(_ref) {
        var _ref$icon = _ref.icon,
            icon = _ref$icon === undefined ? '/public/icon/logo.svg' : _ref$icon,
            _ref$title = _ref.title,
            title = _ref$title === undefined ? '记录快乐' : _ref$title,
            _ref$body = _ref.body,
            body = _ref$body === undefined ? '记录你遇到的快乐！' : _ref$body;

        _classCallCheck(this, Notifications);

        this.icon = icon;
        if (window.Notification) {
            //判断当前页面是否被允许发出通知
            var permission = Notification.permission;
            if (permission == 'granted') {
                this.showNotify(title, { body: body });
            } else if (permission == 'default') {
                Notification.requestPermission();
            }
        }
    }

    _createClass(Notifications, [{
        key: 'showNotify',
        value: function showNotify() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (Notification.permission != 'granted') return false;
            var _params$title = params.title,
                title = _params$title === undefined ? '记录快乐' : _params$title,
                _params$body = params.body,
                body = _params$body === undefined ? '记录你遇到的快乐！' : _params$body,
                icon = params.icon;

            return new Notification(title, { body: body, icon: icon || this.icon, renotify: true, tag: Math.random() });
        }
    }]);

    return Notifications;
}();

exports.default = Notifications;

/***/ }),

/***/ "./static/public/socket.js":
/*!*********************************!*\
  !*** ./static/public/socket.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SokcetServer = function () {
    function SokcetServer(_ref) {
        var events = _ref.events;

        _classCallCheck(this, SokcetServer);

        this.client = new _socket2.default();
        if (!this.client) {
            return null;
        }
        if (events) {
            this.addEvent(events);
        }
    }

    _createClass(SokcetServer, [{
        key: 'addEvent',
        value: function addEvent(events) {
            var _this = this;

            try {
                Object.entries(events).map(function (event) {
                    _this.client.on.apply(_this.client, event);
                });
            } catch (e) {
                throw 'add events error';
            }
        }
    }]);

    return SokcetServer;
}();

exports.default = SokcetServer;

/***/ }),

/***/ "./static/route/home.jsx":
/*!*******************************!*\
  !*** ./static/route/home.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dashboard = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Collections = __webpack_require__(/*! @material-ui/icons/Collections */ "./node_modules/@material-ui/icons/Collections.js");

var _Collections2 = _interopRequireDefault(_Collections);

var _index = __webpack_require__(/*! ../f_share/index.jsx */ "./static/f_share/index.jsx");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dashboardRoutes = [{
  path: "/view/public",
  sidebarName: "公共分享",
  navbarName: "公共分享",
  icon: _Dashboard2.default,
  loginIsRequired: false,
  component: _index2.default
}, {
  path: "/view/collection",
  sidebarName: "我的收藏",
  navbarName: "我的收藏",
  icon: _Collections2.default,
  loginIsRequired: true,
  component: _index2.default
}];

// core components/views

// @material-ui/icons
exports.default = dashboardRoutes.filter(function (route) {
  return !route.loginIsRequired || route.loginIsRequired && window.__USER_INFO__._id;
});

/***/ }),

/***/ "./static/route/index.jsx":
/*!********************************!*\
  !*** ./static/route/index.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../f_home/index.jsx */ "./static/f_home/index.jsx");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexRoutes = [{ path: "/", component: _index2.default }];

exports.default = indexRoutes;

/***/ }),

/***/ "./static/store/base.jsx":
/*!*******************************!*\
  !*** ./static/store/base.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxPersist = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//ConnectedRouter as Router,
var history = (0, _createBrowserHistory2.default)();
var middleware = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];

// if (process.env.NODE_ENV !== "production") {
//     middleware.push(createLogger({ collapsed: true }))
// }

var devTool = (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, middleware));

var restorePersist = function restorePersist(store, blacklist, whitelist) {
    try {
        (0, _reduxPersist.persistStore)(store, { blacklist: blacklist, whitelist: whitelist }, function () {});
    } catch (e) {
        throw new Error("persist store error!", e);
    }
};

exports.default = {
    devTool: devTool,
    restorePersist: restorePersist
};

/***/ }),

/***/ "./static/store/index.jsx":
/*!********************************!*\
  !*** ./static/store/index.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxImmutable = __webpack_require__(/*! redux-immutable */ "./node_modules/redux-immutable/dist/index.js");

var _immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var _immutable2 = _interopRequireDefault(_immutable);

var _base = __webpack_require__(/*! ./base.jsx */ "./static/store/base.jsx");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeList = function () {
    var cache = {};

    function importAll(r) {
        r.keys().forEach(function (key) {
            return cache[key] = r(key).default;
        });
    }

    importAll(__webpack_require__("./static sync recursive f_.*\\/stores?\\/index.jsx"));

    return Object.assign.apply(null, Object.values(cache));
}();

var reducerList = function () {
    var cache = {};

    function importAll(r) {
        r.keys().forEach(function (key) {
            return cache[key] = r(key).default;
        });
    }

    importAll(__webpack_require__("./static sync recursive f_.*\\/reducers?\\/index.jsx"));

    return Object.assign.apply(null, Object.values(cache));
}();

var defaultReducers = (0, _reduxImmutable.combineReducers)(reducerList);

var defaultStore = _immutable2.default.fromJS(storeList);

var store = (0, _redux.createStore)(defaultReducers, defaultStore, _base2.default.devTool);
exports.default = store;

/***/ }),

/***/ "./util/validate.js":
/*!**************************!*\
  !*** ./util/validate.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const EMAIL_VALIDATE = value => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
const PHONE_VALIDATE = value => /^[1][3-9][0-9]{9}$/.test(value)
const PASSWORD_VALIDATE = value => /^.*(?=.{7,})(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(value)
const URL_VALIDATE = value => /^[a-zA-z]+\:\/\/(?:\w+(?:-\w+)*)(?:\.(?:\w+(?:-\w+)*))*(?:\:\d+)?(?:\?\S*)?/.test(value)

module.exports = class Validate {
    static isEmail(value){
        return EMAIL_VALIDATE(value)
    }
    static isPhone(value){
        return PHONE_VALIDATE(value)
    }
    static isPassword(value){
        return PASSWORD_VALIDATE(value)
    }
    static isUrl(value){
        return URL_VALIDATE(value)
    }
    static isArray(value){
        return Object.prototype.toString.call(value) == "[object Array]"
    }
    static isNotEmpty(value){
        return value != ''
    }
    static isLength(value){
        return value && value.length == (this.length || 1)
    }
    static isMatchReg(value,regexp){
        return (this.regexp || regexp || /.*/).test(value)
    }
}

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./static/index.js","manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvY29uc3RDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9jc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMgc3luYyBmXy4qXFwvcmVkdWNlcnMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljIHN5bmMgZl8uKlxcL3N0b3JlcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2Nzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuY3NzP2ViZGYiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9pbWcvcmVhY3Rsb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2ltZy9zaWRlYmFyLTIuanBnIiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvYnV0dG9uU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2NhcmRCb2R5U3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2NhcmRGb290ZXJTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY2FyZEhlYWRlclN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkSWNvblN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2N1c3RvbUlucHV0U3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2N1c3RvbVRhYnNTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZGlhbG9nQWN0aW9uU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2RpYWxvZ0NvbnRlbnRTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZGlhbG9nU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2RpYWxvZ1RpdGxlU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2Zvb3RlclN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9oZWFkZXJMaW5rc1N0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9oZWFkZXJTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvc2lkZWJhclN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9zbmFja2JhckNvbnRlbnRTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvdHlwb2dyYXBoeVN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvZHJvcGRvd25TdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2xheW91dHMvZGFzaGJvYXJkU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC92aWV3cy9kYXNoYm9hcmRTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2FjdGlvbnMvVXNlci91c2VySW5mby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRDb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRGb290ZXIuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DdXN0b21UYWJzL0N1c3RvbVRhYnMuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2cuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dBY3Rpb24uanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dDb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nVGl0bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9Qcm9ncmVzcy9saW5lYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvU2VsZWN0aW9uL2NoZWNrYm94TGFiZWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9TZWxlY3Rpb24vc3dpdGNoTGFiZWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9TZWxlY3RzL2N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL1NuYWNrYmFyL1NuYWNrYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9UeXBvZ3JhcGh5L0Rhbmdlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvVXNlci91c2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9Vc2VyL3VzZXJJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9Vc2VyL3VzZXJMb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvVXNlci91c2VyTW9kaWZ5LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29uc3RhbnRzL2FwaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbnRhaW5lcnMvVXNlci91c2VyQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29udGFpbmVycy9oZWFkZXIvaGVhZGVyTGlua3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfaG9tZS9jb25zdGFudC9hY3Rpb25UeXBlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfaG9tZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfaG9tZS9yZWR1Y2VyL2hvbWUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2hvbWUvcmVkdWNlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfaG9tZS9zdG9yZS9ob21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9ob21lL3N0b3JlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9ob21lL3ZpZXcvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvYWN0aW9ucy9zaGFyZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvY29tcG9uZW50cy9pbnB1dEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvY29tcG9uZW50cy9zaGFyZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvY29tcG9uZW50cy9zaGFyZUNhdGVnb3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9jb21wb25lbnRzL3NoYXJlSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvY29uc3RhbnRzL2FwaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvY29uc3RhbnRzL3NoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvcmVkdWNlcnMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX3NoYXJlL3JlZHVjZXJzL3NoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9zdG9yZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX3NoYXJlL3N0b3Jlcy9zaGFyZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvdmlld3Mvc2hhcmUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvcHVibGljL2h0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3B1YmxpYy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3B1YmxpYy9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3JvdXRlL2hvbWUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9yb3V0ZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3N0b3JlL2Jhc2UuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9zdG9yZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vdXRpbC92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbImRyYXdlcldpZHRoIiwidHJhbnNpdGlvbiIsImNvbnRhaW5lciIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiYm94U2hhZG93IiwiY2FyZCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJwcmltYXJ5Q29sb3IiLCJ3YXJuaW5nQ29sb3IiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImluZm9Db2xvciIsInJvc2VDb2xvciIsImdyYXlDb2xvciIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwicGFkZGluZyIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWluSGVpZ2h0IiwiY2FyZFRpdGxlIiwiY2FyZFN1YnRpdGxlIiwiY2FyZExpbmsiLCJidXR0b25TdHlsZSIsImJ1dHRvbiIsIm1pbldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsIndpbGxDaGFuZ2UiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwidmVydGljYWxBbGlnbiIsInRvdWNoQWN0aW9uIiwiY3Vyc29yIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsIndoaXRlIiwicm9zZSIsInByaW1hcnkiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJzaW1wbGUiLCJ0cmFuc3BhcmVudCIsImRpc2FibGVkIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJsZyIsInNtIiwicm91bmQiLCJibG9jayIsImxpbmsiLCJqdXN0SWNvbiIsImNhcmRCb2R5U3R5bGUiLCJjYXJkQm9keSIsImZsZXgiLCJXZWJraXRCb3hGbGV4IiwiY2FyZEJvZHlQbGFpbiIsImNhcmRCb2R5UHJvZmlsZSIsImNhcmRGb290ZXJTdHlsZSIsImNhcmRGb290ZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjYXJkRm9vdGVyUHJvZmlsZSIsImNhcmRGb290ZXJQbGFpbiIsImNhcmRGb290ZXJTdGF0cyIsImNhcmRGb290ZXJDaGFydCIsImNhcmRIZWFkZXJTdHlsZSIsImJvcmRlckJvdHRvbSIsInpJbmRleCIsIm92ZXJmbG93IiwiY2FyZEhlYWRlclBsYWluIiwiY2FyZEhlYWRlclN0YXRzIiwiY2FyZEhlYWRlckljb24iLCJjYXJkSWNvblN0eWxlIiwiY2FyZEljb24iLCJmbG9hdCIsImNhcmRTdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJ3b3JkV3JhcCIsImNhcmRQbGFpbiIsImNhcmRQcm9maWxlIiwiY2FyZENoYXJ0IiwiY3VzdG9tSW5wdXRTdHlsZSIsInVuZGVybGluZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJ1bmRlcmxpbmVFcnJvciIsInVuZGVybGluZVN1Y2Nlc3MiLCJsYWJlbFJvb3QiLCJsYWJlbFJvb3RFcnJvciIsImxhYmVsUm9vdFN1Y2Nlc3MiLCJmZWVkYmFjayIsInJpZ2h0IiwiZm9ybUNvbnRyb2wiLCJwYWRkaW5nQm90dG9tIiwidGV4dEluZGVudEZpbGUiLCJjdXN0b21UYWJzU3R5bGUiLCJjYXJkVGl0bGVSVEwiLCJkaXNwbGF5Tm9uZSIsInRhYnNSb290Iiwib3ZlcmZsb3dYIiwidGFiUm9vdEJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwidGFiTGFiZWxDb250YWluZXIiLCJ0YWJMYWJlbCIsInRhYlNlbGVjdGVkIiwidGFiV3JhcHBlciIsImRpYWxvZ1RpdGxlU3R5bGUiLCJyb290IiwiZGlhbG9nQ29udGVudFN0eWxlIiwiZGlhbG9nU3R5bGUiLCJwYXBlciIsImZvb3RlclN0eWxlIiwiZm9vdGVyIiwiYm90dG9tIiwiYSIsImxpc3QiLCJpbmxpbmVCbG9jayIsImhlYWRlckxpbmtzU3R5bGUiLCJ0aGVtZSIsInNlYXJjaCIsImJyZWFrcG9pbnRzIiwiZG93biIsImxpbmtUZXh0IiwiYnV0dG9uTGluayIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaEljb24iLCJub3RpZmljYXRpb25zIiwidXAiLCJtYW5hZ2VyIiwic2VhcmNoV3JhcHBlciIsImhlYWRlclN0eWxlIiwiYXBwQmFyIiwiYXBwUmVzcG9uc2l2ZSIsInNpZGViYXJTdHlsZSIsImRyYXdlclBhcGVyIiwidmlzaWJpbGl0eSIsIm92ZXJmbG93WSIsImxvZ28iLCJjb250ZW50IiwibG9nb0xpbmsiLCJsb2dvSW1hZ2UiLCJpbWciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImxpc3RTdHlsZSIsIml0ZW0iLCJpdGVtTGluayIsIml0ZW1JY29uIiwiaXRlbVRleHQiLCJ3aGl0ZUZvbnQiLCJwdXJwbGUiLCJibHVlIiwiZ3JlZW4iLCJvcmFuZ2UiLCJyZWQiLCJzaWRlYmFyV3JhcHBlciIsIm92ZXJmbG93U2Nyb2xsaW5nIiwiYWN0aXZlUHJvIiwic25hY2tiYXJDb250ZW50U3R5bGUiLCJmbGV4V3JhcCIsInRvcDIwIiwidG9wNDAiLCJtZXNzYWdlIiwiY2xvc2UiLCJpY29uQnV0dG9uIiwiaWNvbiIsImluZm9JY29uIiwic3VjY2Vzc0ljb24iLCJ3YXJuaW5nSWNvbiIsImRhbmdlckljb24iLCJwcmltYXJ5SWNvbiIsInJvc2VJY29uIiwiaWNvbk1lc3NhZ2UiLCJ0eXBvZ3JhcGh5U3R5bGUiLCJkZWZhdWx0Rm9udFN0eWxlIiwiZGVmYXVsdEhlYWRlck1hcmdpbnMiLCJxdW90ZSIsImJvcmRlckxlZnQiLCJxdW90ZVRleHQiLCJmb250U3R5bGUiLCJxdW90ZUF1dGhvciIsIm11dGVkVGV4dCIsInByaW1hcnlUZXh0IiwiaW5mb1RleHQiLCJzdWNjZXNzVGV4dCIsIndhcm5pbmdUZXh0IiwiZGFuZ2VyVGV4dCIsImRyb3Bkb3duU3R5bGUiLCJsaW5rcyIsInBvcHBlckNsb3NlIiwicG9vcGVyUmVzcG9uc2l2ZSIsIldlYmtpdEJveFNoYWRvdyIsInBvb3Blck5hdiIsImRyb3Bkb3duIiwiV2Via2l0QmFja2dyb3VuZENsaXAiLCJiYWNrZ3JvdW5kQ2xpcCIsImRyb3Bkb3duSXRlbSIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJjbGVhciIsImFwcFN0eWxlIiwid3JhcHBlciIsIm1haW5QYW5lbCIsIm1hcCIsImRhc2hib2FyZFN0eWxlIiwidXBBcnJvd0NhcmRDYXRlZ29yeSIsInN0YXRzIiwiY2FyZENhdGVnb3J5IiwiY2FyZENhdGVnb3J5V2hpdGUiLCJjYXJkVGl0bGVXaGl0ZSIsInNwYWNpbmciLCJ1bml0Iiwic2l6ZVNtYWxsIiwidHlwZXMiLCJGX0NPTU1PTl9GRVRDSF9MT0dJTl9VU0VSX0FDVElPTiIsInBhcmFtcyIsImRpc3BhdGNoIiwiQVBJIiwibG9naW5Vc2VyIiwidGhlbiIsInJlcyIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJGX0NPTU1PTl9GRVRDSF9BRERfVVNFUl9BQ1RJT04iLCJjYWxsYmFjayIsImFkZFVzZXIiLCJ0eXBlIiwiRl9DT01NT05fRkVUQ0hfTU9ESUZZX1VTRVJfQUNUSU9OIiwibW9kaWZ5VXNlciIsIkZfQ09NTU9OX0ZFVENIX0xPR09VVF9VU0VSX0FDVElPTiIsImxvZ291dFVzZXIiLCJGX0NPTU1PTl9GRVRDSF9VU0VSX01FU1NBR0VfQUNUSU9OIiwicmVzb2x2ZSIsInJlamVjdCIsIl9fVVNFUl9JTkZPX18iLCJnZXRNZXNzYWdlIiwiRl9DT01NT05fRkVUQ0hfVVNFUl9SRUFEX01FU1NBR0VfQUNUSU9OIiwiX2lkIiwicmVhZE1lc3NhZ2UiLCJDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwbGFpbiIsInByb2ZpbGUiLCJjaGFydCIsInJlc3QiLCJjYXJkQ2xhc3NlcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIiwiQ2FyZEJvZHkiLCJjYXJkQm9keUNsYXNzZXMiLCJzdHlsZXMiLCJ0ZXh0T3ZlcmZsb3ciLCJpbWdib3giLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwiQ29tcGxleEdyaWQiLCJvbk9wZW5FZGl0RGlhbG9nIiwiZGVsZXRlSXRlbSIsInRhcmdldCIsImFkZCIsIm5pY2tuYW1lIiwiZXYiLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImRlZmF1bHRQcmV2ZW50ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNhcmRGb290ZXIiLCJjYXJkRm9vdGVyQ2xhc3NlcyIsIkNhcmRIZWFkZXIiLCJjYXJkSGVhZGVyQ2xhc3NlcyIsIm9uZU9mIiwiQ2FyZEljb24iLCJjYXJkSWNvbkNsYXNzZXMiLCJSZWd1bGFyQnV0dG9uIiwic2l6ZSIsIm11aUNsYXNzZXMiLCJidG5DbGFzc2VzIiwiQ3VzdG9tSW5wdXQiLCJmb3JtQ29udHJvbFByb3BzIiwibGFiZWxUZXh0IiwiaWQiLCJsYWJlbFByb3BzIiwiaW5wdXRQcm9wcyIsImVycm9yIiwibGFiZWxDbGFzc2VzIiwidW5kZXJsaW5lQ2xhc3NlcyIsImlucHV0Iiwibm9kZSIsIkN1c3RvbVRhYnMiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImhlYWRlckNvbG9yIiwicGxhaW5UYWJzIiwidGFicyIsInJ0bEFjdGl2ZSIsImluZGljYXRvciIsInNjcm9sbEJ1dHRvbnMiLCJwcm9wIiwia2V5IiwidGFiSWNvbiIsImxhYmVsQ29udGFpbmVyIiwibGFiZWwiLCJzZWxlY3RlZCIsInRhYk5hbWUiLCJ0YWJDb250ZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJhcnJheU9mIiwic2hhcGUiLCJmdW5jIiwiRGlhbG9nQ29tcG9uZW50Iiwib3BlbiIsIkRpYWxvZ0FjdGlvbkNvbXBvbmVudCIsImRpYWxvZ0FjdGlvblN0eWxlIiwiRGlhbG9nQ29udGVudENvbXBvbmVudCIsIkRpYWxvZ1RpdGxlQ29tcG9uZW50IiwiRm9vdGVyIiwiRGF0ZSIsImdldFllYXIiLCJzdHlsZSIsImdyaWQiLCJhZGRCdXR0b24iLCJHcmlkQ29udGFpbmVyIiwiR3JpZEl0ZW0iLCJIZWFkZXIiLCJtYWtlQnJhbmQiLCJuYW1lIiwicm91dGVzIiwicGF0aCIsInBhdGhuYW1lIiwibmF2YmFyTmFtZSIsImFwcEJhckNsYXNzZXMiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJIZWFkZXJMaW5rcyIsIm9wZW5NZXNzYWdlIiwib3BlblBlcnNvbiIsIm9wZW5Vc2VySW5mbyIsInNob3dTZWFyY2hDb25kaXRpb24iLCJtZXNzYWdlcyIsImtleXdvcmQiLCJzZWFyY2hDYXRlZ29yeSIsImNoZWNrZWQiLCJoYW5kbGVNZXNzYWdlVG9nZ2xlIiwiaGFuZGxlUGVyc29uVG9nZ2xlIiwiaGFuZGxlUGVyc29uQ2xvc2UiLCJwZXJzb25FbCIsImNvbnRhaW5zIiwiaGFuZGxlTWVzc2FnZUNsb3NlIiwibWVzc2FnZUVsIiwib25TZWFyY2hDaGFuZ2UiLCJmZXRjaExvZ291dFVzZXIiLCJtc2ciLCJmZXRjaFJlYWRNZXNzYWdlIiwiZmlsdGVyIiwic2VhcmNoRWwiLCJjYXRlZ29yeSIsImNhdCIsImZldGNoU2VhcmNoIiwiZmV0Y2hHZXRVc2VyTWVzc2FnZSIsIm9uU2VhcmNoQ2xpY2siLCJiaW5kIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJvblNlYXJjaEZvY3VzIiwib25TZWxlY3RTZWFyY2hDYXRlZ29yeSIsIm9uQnRuU2VhcmNoQ2xpY2siLCJpbm5lcldpZHRoIiwiaWNvbnMiLCJsZW5ndGgiLCJoYW5kbGVDbGljayIsIlRyYW5zaXRpb25Qcm9wcyIsInBsYWNlbWVudCIsInRyYW5zZm9ybU9yaWdpbiIsImluZGV4IiwiYm9keSIsIm9uTW9kaWZ5VXNlciIsIm9uTG9nb3V0IiwiZmxleEdyb3ciLCJoaWRlIiwiYmFyQ29sb3JQcmltYXJ5IiwiY29sb3JQcmltYXJ5IiwiTGluZWFyRGV0ZXJtaW5hdGUiLCJncm91cCIsIkNoZWNrYm94TGFiZWxzIiwiY2hlY2tib3hzIiwiY2xhc3NuYW1lIiwiY2hlY2tib3giLCJzd2l0Y2hTdHlsZSIsIlN3aXRjaExhYmVscyIsInN3aXRjaExhYmVscyIsInN3aXRjaGxhYmVsIiwiU2ltcGxlU2VsZWN0Iiwib3B0aW9ucyIsIm9wdGlvbiIsIlNpZGViYXIiLCJhY3RpdmVSb3V0ZSIsInJvdXRlTmFtZSIsImluZGV4T2YiLCJsb2dvVGV4dCIsInJlZGlyZWN0IiwibGlzdEl0ZW1DbGFzc2VzIiwid2hpdGVGb250Q2xhc3NlcyIsInNpZGViYXJOYW1lIiwiYnJhbmQiLCJrZWVwTW91bnRlZCIsImJhY2tncm91bmRJbWFnZSIsIlNuYWNrYmFyIiwicGxhY2UiLCJhdXRvSGlkZUR1cmF0aW9uIiwib25DbG9zZSIsImFjdGlvbiIsIm1lc3NhZ2VDbGFzc2VzIiwiY2xvc2VOb3RpZmljYXRpb24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJEYW5nZXIiLCJJbnB1dFZhbHVlIiwiZmlsZSIsImFjY2VwdCIsIlVzZXJJbmZvIiwib25OYW1lQ2hhbmdlIiwib25OaWNrbmFtZUNoYW5nZSIsIm9uQ29udGFjdENoYW5nZSIsIm9uQXZhdG9yQ2hhbmdlIiwib25QYXNzd29yZENoYW5nZSIsInNldEZpZWxkVmFsdWUiLCJvbkl0ZW1Db25maXJtIiwib25JdGVtQ2FuY2VsIiwiYXZhdG9yIiwiY29udGFjdCIsInBhc3N3b3JkIiwidGVzdCIsInZhbGlkYXRlIiwiaXNFbWFpbCIsImlzUGhvbmUiLCJmaWxlcyIsImlzUGFzc3dvcmQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZW5jcnlwdCIsIkpTRW5jcnlwdCIsInNldFB1YmxpY0tleSIsIl9fUFVCTElDX0tFWV9fIiwiT2JqZWN0IiwiZW50cmllcyIsImFwcGVuZCIsImFwcGx5Iiwic2V0RmllbGRFcnJvciIsImZpZWxkIiwiZmV0Y2hSZWdpc3RlclVzZXIiLCJvbkNhbmNlbCIsInVzZXJJbmZvIiwia2V5cyIsImZldGNoTG9naW5Vc2VyIiwiZW1haWwiLCJwaG9uZSIsImZldGNoTW9kaWZ5VXNlciIsIkFQSV9ST09UIiwidXNlckFjdGlvbiIsIlVzZXJJbmZvQ29udGFpbmVyIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiSGVhZGVyTGlua3NDb250YWluZXIiLCJQcm9taXNlIiwicGFyYW0iLCJVUERBVEVfRVhURU5EX0lORk8iLCJIb21lIiwicmVkdWNlck1hcCIsIk1hcCIsInNldCIsImhhcyIsImdldCIsImhvbWUiLCJkZWZhdWx0U3RvcmUiLCJzd2l0Y2hSb3V0ZXMiLCJzaGFyZVJvdXRlcyIsInRvIiwiY29tcG9uZW50IiwiQXBwIiwibW9iaWxlT3BlbiIsInJlc2l6ZUZ1bmN0aW9uIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJwcyIsIlBlcmZlY3RTY3JvbGxiYXIiLCJyZWZzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoaXN0b3J5Iiwic2Nyb2xsVG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZfU0hBUkVfU0FWRV9TSEFSRV9DQVRFR09SWSIsIlNBVkVfU0hBUkVfQ0FURUdPUlkiLCJGX1NIQVJFX0RFTEVURV9TSEFSRV9DQVRFR09SWSIsIkRFTEVURV9TSEFSRV9DQVRFR09SWSIsIkZfU0hBUkVfSU5JVF9EQVRBX0FDVElPTiIsImNhdGVnb3JpZXMiLCJJTklUX0RBVEEiLCJGX1NIQVJFX1NBVkVfU0hBUkVfSVRFTSIsIlNBVkVfU0hBUkVfSVRFTSIsIkZfU0hBUkVfREVMRVRFX1NIQVJFX0lURU0iLCJERUxFVEVfU0hBUkVfSVRFTSIsIkZfU0hBUkVfRkVUQ0hfU0hBUkVfSU5JVF9BQ1RJT04iLCJwYWdlIiwiZ2V0U2hhcmVMaXN0IiwiRl9TSEFSRV9GRVRDSF9TQVZFX1NIQVJFX0NBVEVHT1JZIiwic2F2ZVNoYXJlQ2F0ZWdvcnkiLCJwdWJsaWNGbGFnIiwiY2F0Y2giLCJGX1NIQVJFX0ZFVENIX0RFTEVURV9TSEFSRV9DQVRFR09SWSIsIkZfU0hBUkVfRkVUQ0hfU0FWRV9TSEFSRV9JVEVNIiwiRl9TSEFSRV9GRVRDSF9ERUxFVEVfU0hBUkVfSVRFTSIsIkZfU0hBUkVfRkVUQ0hfVVBMT0FEX0ZJTEUiLCJvblVwbG9hZFByb2dyZXNzIiwiZmlsZVVwbG9hZCIsIkZfQ09NTU9OX0ZFVENIX1NFQVJDSCIsImdldFNlYXJjaExpc3QiLCJJbnB1dEl0ZW0iLCJzZXRWYWxpZGF0ZSIsInJlYWxWYWx1ZSIsInZhbGlkYXRlcyIsInJlYWRPbmx5IiwicHVzaCIsImNvbmNhdCIsInYiLCJldmVyeSIsIlNoYXJlIiwiaGFuZGxlQ2hhbmdlSW5kZXgiLCJvcGVuRWRpdEl0ZW1EaWFsb2ciLCJuZXh0UHJvcHMiLCJzaGFyZSIsInNoYXJlRmxhZyIsImJlbG9uZyIsIm9wZW5BZGRJdGVtRGlhbG9nIiwib3BlbkVkaXRDYXRlZ29yeURpYWxvZyIsImRlbGV0ZUNhdGVnb3J5Iiwib3BlbkFkZENhdGVnb3J5RGlhbG9nIiwiU2hhcmVDYXRlZ29yeSIsIm9uQ2F0ZWdvcnlDaGFuZ2UiLCJvbkNhdGVnb3J5Q29uZmlybSIsIm9uQ2hhbmdlU3dpdGNoTGFiZWwiLCJpc05vdEVtcHR5Iiwic2VsZWN0cyIsImNoZWNrIiwic2F2ZUNhdGVnb3J5IiwiZGVmYXVsdFZhbHVlIiwiY2hhbmdlU3dpdGNoSW5kZXgiLCJzd2l0Y2hMYWJlbCIsImN1c3RvbUlucHV0Iiwib25CbHVyIiwib25JbnB1dEJsdXIiLCJTaGFyZUl0ZW0iLCJvblRpdGxlQ2hhbmdlIiwib25MaW5rQ2hhbmdlIiwib25EZXNjcmlwdGlvbkNoYW5nZSIsIm9uSWNvbkNoYW5nZSIsIm9uVHlwZUNoYW5nZSIsImlzVXJsIiwiZmV0Y2hVcGxvYWRGaWxlIiwicHJvZ3Jlc3MiLCJsb2FkZWQiLCJ0b3RhbCIsInVwbG9hZEZpbmlzaCIsImZpbmQiLCJyZW1vdmVWYWxpZGF0ZSIsImlzVGl0bGUiLCJpc0xpbmsiLCJzYXZlSXRlbSIsInJlc2V0IiwiY29uc29sZSIsImxvZyIsImNhbmNlbEl0ZW0iLCJkaWFsb2dUaXRsZSIsIlNoYXJlUGFnZSIsInVwZGF0ZSIsIkltbXV0YWJsZSIsImZyb21KUyIsInNvbWUiLCJzaGFyZUFjdGlvbiIsIlNoYXJlQ29udGFpbmVyIiwiY2F0ZWdvcnlEaWFsb2ciLCJpdGVtRGlhbG9nIiwiY2F0ZWdvcnlOYW1lIiwiY2F0ZWdvcnlUaXRsZSIsImNhdGVnb3J5SWQiLCJzbmFja2JhciIsImZldGNoU2F2ZUNhdGVnb3J5IiwibWF0Y2giLCJmZXRjaERlbGV0ZUNhdGVnb3J5IiwiZmV0Y2hTYXZlSXRlbSIsImZldGNoRGVsZXRlSXRlbSIsImZldGNoSW5pdFNoYXJlTGlzdCIsIm5vdGlmeSIsIk5vdGlmaWNhdGlvbnMiLCJzaG93Tm90aWZ5IiwiU29rY2V0U2VydmVyIiwiZXZlbnRzIiwiUkVESVNfTUVTU0FHRSIsIlNIQVJFX01FU1NBR0UiLCJFVkVOVCIsIkpTT04iLCJwYXJzZSIsInVzZXIiLCJoaXN0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJzdG9yZSIsImluZGV4Um91dGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImhlYWRlcnMiLCJhcHBOYW1lIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ1cmwiLCJpbmNsdWRlcyIsInJlc3BvbnNlIiwicXVlcnlQYXJhbXMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJrIiwiam9pbiIsImdlblVybEZyb21QYXJhbXMiLCJnZXRQcmV2Q29uZEZyb21HbG9iYWwiLCJHbG9iYWxTZWFyY2hDcml0ZXJpYSIsImdldFN3aXRjaGVzRnJvbUdsb2JhbCIsIkdsb2JhbFN3aXRjaGVzIiwiZ2V0Q29uZmlnc0Zyb21HbG9iYWwiLCJHbG9iYWxDb25maWdzIiwiZ2V0T3JkZXJEYXRhRnJvbUdsb2JhbCIsIkdsb2JhbE9yZGVyRGF0YSIsInByZXZDb25kIiwidHJhbnNhY3Rpb25JRCIsImV4dEhlYWRlciIsImluamVjdEZldGNoRXh0SGVhZGVyIiwiZXh0IiwiYXNzaWduIiwiZmV0Y2hKc29ucEdldCIsImZldGNoSnNvbnAiLCJjcmVkZW50aWFscyIsInJlYXNvbiIsImZldGNoR2V0IiwiYXhpb3NFeHRlbmRPcHMiLCJmZXRjaEdldFdpdGhIZWFkZXJzIiwib3BzIiwid2l0aENyZWRlbnRpYWxzIiwiZmV0Y2hQb3N0IiwiZmV0Y2hQb3N0V2l0aEhlYWRlcnMiLCJwb3N0IiwiZmV0Y2hQb3N0Rm9ybSIsIk5vdGlmaWNhdGlvbiIsInBlcm1pc3Npb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInJlbm90aWZ5IiwidGFnIiwiY2xpZW50Iiwic29ja2V0Q2xpZW50IiwiYWRkRXZlbnQiLCJvbiIsImRhc2hib2FyZFJvdXRlcyIsIkRhc2hib2FyZCIsImxvZ2luSXNSZXF1aXJlZCIsIlNoYXJlSWNvbiIsInJvdXRlIiwibWlkZGxld2FyZSIsInRodW5rIiwiZGV2VG9vbCIsImFwcGx5TWlkZGxld2FyZSIsInJlc3RvcmVQZXJzaXN0IiwiYmxhY2tsaXN0Iiwid2hpdGVsaXN0IiwiRXJyb3IiLCJzdG9yZUxpc3QiLCJjYWNoZSIsImltcG9ydEFsbCIsImZvckVhY2giLCJkZWZhdWx0IiwicmVxdWlyZSIsInZhbHVlcyIsInJlZHVjZXJMaXN0IiwiZGVmYXVsdFJlZHVjZXJzIiwiYmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ2RBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsZ3FCQUFncUIsdUNBQXVDLHdCQUF3Qiw0QkFBNEIsR0FBRyx1R0FBdUcsdUNBQXVDLEdBQUcsb0NBQW9DLG9DQUFvQyxzQ0FBc0MsaUNBQWlDLDhCQUE4QixtQ0FBbUMsMENBQTBDLGdDQUFnQyxrQ0FBa0MsdUJBQXVCLHlCQUF5QixHQUFHLGVBQWUsc0NBQXNDLEdBQUcsdURBQXVELHFCQUFxQiwyQkFBMkIsd0JBQXdCLDJCQUEyQiw0QkFBNEIsb0JBQW9CLEdBQUcsZUFBZSwrQkFBK0IscUJBQXFCLEdBQUcsVUFBVSwwQ0FBMEMseUNBQXlDLEdBQUcsUUFBUSxnQ0FBZ0MscUJBQXFCLGdCQUFnQix3REFBd0QsdUJBQXVCLHlCQUF5QixHQUFHLHVEQUF1RCwrQkFBK0IsR0FBRyxXQUFXLG1CQUFtQixHQUFHLFFBQVEscUJBQXFCLDBCQUEwQixHQUFHLFFBQVEsdUJBQXVCLEdBQUcsUUFBUSx5QkFBeUIseUJBQXlCLDBCQUEwQixHQUFHLFFBQVEsdUJBQXVCLHlCQUF5QixHQUFHLFFBQVEsd0JBQXdCLHlCQUF5QiwwQkFBMEIsR0FBRyxRQUFRLHFCQUFxQixn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LE9BQU9nUCxNQUFQLENBQWNMLEtBQWQsQ0FBekIsQ0FBUDtBQUNILENBVm1CLEVBQXBCOztBQWlCQSxJQUFNTyxrQkFBa0IscUNBQWdCRCxXQUFoQixDQUF4Qjs7QUFFQSxJQUFNbk4sZUFBZXNHLG9CQUFVQyxNQUFWLENBQWlCcUcsU0FBakIsQ0FBckI7O0FBSUEsSUFBTXZFLFFBQVEsd0JBQ1YrRSxlQURVLEVBRVZwTixZQUZVLEVBR1ZxTixlQUFLZixPQUhLLENBQWQ7a0JBS2VqRSxLOzs7Ozs7Ozs7OztBQzVDZixzRkFBc0YsSUFBSTtBQUMxRixnREFBZ0QsRUFBRTtBQUNsRCw0Q0FBNEMsR0FBRztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDOUJBLGUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJFRElTX01FU1NBR0UgPSB7XG4gICAgU0hBUkVfTUVTU0FHRTp7XG4gICAgICAgIEtFWTonU0hBUkVfTUVTU0FHRV9LRVknLFxuICAgICAgICBFVkVOVDonU0hBUkVfTUVTU0FHRV9FVkVOVCcsXG4gICAgICAgIENPTlRFTlQ6JyVVU0VSJSAlT1BFUkFURSUgJUNPTlRFTlQlJ1xuICAgIH1cbn1cblxuZXhwb3J0cy5SRURJU19NRVNTQUdFID0gUkVESVNfTUVTU0FHRVxuXG5jb25zdCBIQVBQWV9SRUNPUkQgPSB7XG4gICAgSE9TVF9VUkw6J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSdcbn1cblxuZXhwb3J0cy5IQVBQWV9SRUNPUkQgPSBIQVBQWV9SRUNPUkQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIVxcblxcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gKiBNYXRlcmlhbCBEYXNoYm9hcmQgUmVhY3QgLSB2MS41LjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIC0gdjEuMi4wXFxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcbiAqIFByb2R1Y3QgUGFnZTogaHR0cDovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0XFxuICogQ29weXJpZ2h0IDIwMTggQ3JlYXRpdmUgVGltIChodHRwOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXFxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcXG5cXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuXFxuICovXFxuLmN0LWdyaWQge1xcbiAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDJweDtcXG59XFxuXFxuLmN0LXNlcmllcy1hIC5jdC1wb2ludCwgLmN0LXNlcmllcy1hIC5jdC1saW5lLCAuY3Qtc2VyaWVzLWEgLmN0LWJhciwgLmN0LXNlcmllcy1hIC5jdC1zbGljZS1kb251dCB7XFxuICAgIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG4uY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1lbmQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBmbGV4LXN0YXJ0O1xcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgLW1zLWZsZXgtcGFjazogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LWFuY2hvcjogc3RhcnQ7XFxufVxcblxcbi5jdC1sYWJlbCB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi5jdC1jaGFydC1saW5lIC5jdC1sYWJlbCwgLmN0LWNoYXJ0LWJhciAuY3QtbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY3QtbGFiZWwge1xcbiAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5odG1sICoge1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGNvbG9yOiAjM0M0ODU4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxuYmxvY2txdW90ZSBmb290ZXI6YmVmb3JlLCBibG9ja3F1b3RlIHNtYWxsOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjAxNCAgIFxcXFxBMCc7XFxufVxcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBsaW5lLWhlaWdodDogMS4xNWVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMi40ZW07XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjgyNWVtO1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIG1hcmdpbjogMjBweCAwIDEwcHg7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbn1cXG5cXG5oNSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmg2IHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBjb2xvcjogIzNDNDg1ODtcXG59XFxuXFxuYmxvY2txdW90ZSBwIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBcXFwiSGVsdmV0aWNhXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6ICM5YzI3YjA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciwgYTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjODkyMjliO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmxlZ2VuZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbioge1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbio6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbn1cXG5cXG5hOmZvY3VzLCBhOmFjdGl2ZSxcXG5idXR0b246YWN0aXZlLCBidXR0b246Zm9jdXMsIGJ1dHRvbjpob3ZlcixcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5zZWxlY3Q6Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXRbdHlwZT1cXFwiZmlsZVxcXCJdID4gaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6MCAwIDAgNjBweCB3aGl0ZSAgaW5zZXQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzg3ODc4NztcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbn1cXG5cXG5vdXRwdXQge1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XFxuICAgIGNvbG9yOiAjQUFBQUFBO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbmZvb3RlciB1bCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmZvb3RlciB1bCBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuZm9vdGVyIHVsIGxpIGEge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZm9vdGVyIHVsIGxpIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgICBib2R5LFxcbiAgICBodG1sIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAjYm9keUNsaWNrIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IGF1dG87XFxuICAgICAgICByaWdodDogMjYwcHg7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2ZfaG9tZS9yZWR1Y2VyL2luZGV4LmpzeFwiOiBcIi4vc3RhdGljL2ZfaG9tZS9yZWR1Y2VyL2luZGV4LmpzeFwiLFxuXHRcIi4vZl9zaGFyZS9yZWR1Y2Vycy9pbmRleC5qc3hcIjogXCIuL3N0YXRpYy9mX3NoYXJlL3JlZHVjZXJzL2luZGV4LmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3RhdGljIHN5bmMgcmVjdXJzaXZlIGZfLipcXFxcL3JlZHVjZXJzP1xcXFwvaW5kZXguanN4XCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2ZfaG9tZS9zdG9yZS9pbmRleC5qc3hcIjogXCIuL3N0YXRpYy9mX2hvbWUvc3RvcmUvaW5kZXguanN4XCIsXG5cdFwiLi9mX3NoYXJlL3N0b3Jlcy9pbmRleC5qc3hcIjogXCIuL3N0YXRpYy9mX3NoYXJlL3N0b3Jlcy9pbmRleC5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3N0YXRpYyBzeW5jIHJlY3Vyc2l2ZSBmXy4qXFxcXC9zdG9yZXM/XFxcXC9pbmRleC5qc3hcIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFVQUFBQURpQ0FNQUFBQUk3ZTdKQUFBQy9WQk1WRVVBQUFCaDJ2c0EvLytBLy85aDJ2dGgydnVBdi85VjFmOWgydnRWLy85dDIvOWcyL3hoMnZ0aTJ2aGgydnRoMnZ0aDJ2dGcyL3RoMnZ0aDJ2dGYzUHBoMnZ0bTV2OVY0LzlnMmZ4ZzJmeGQwZjloMnZ0azN2OWUyZjltMmY5aTJQOWczLzlkM1A5aTJmdGgydnRoMnZ0aDIveGkydnRoMnZ0aTIvdGIyLzloMi90aDJ2dGkydnRnMi94aTJ2dG0zZjlxMWY5aDJ2dGYyL2hnMnZ0aDIveGcydnBoMnZ0aDJmdGgydnRpMi94ZzEvZGgyZnBoMi90aDJ2eGgydnRpMi90aDJ2dGgyL3BqMi9wZzMvOWgyL3RnMnZ0ZzJmdGkyZnhpMmZ0aDJ2dGkydnBpMi90ZzIveGgydnhoMnZ0aDJ2dGoxZjlmMi9saDJ2dGgyZnRqMXY5aDJ2dGkydnRlMS9oaDJ2dGozUGxoMi94aDJ2dGkydnBoMnZ4aTIvdGgydnBoMi94aDJ2dGgydnRnMmZsZzJmeGUyUGxhNGY5aTNQdGgydnRoMnZ0aDJ2cGgydnRtelA5aDJ2dGcydnhmMmZ0aDJ2eGcxL2xoMi94aDJ2dGcydnRoMnZwaDJ2dGcydnRnMmZwZzJ2eGgydnBoMnZ0aDJ2dGgydnRqMnZ4aDJ2eGgydnRoMnZ0aDJ2dGgyL3BoMi90azJ2bGkyZnhnMnZ0ZzIvcGgydnRoMmZ0aTJQcGgydnBpMmZwaDJ2eGcyZnBtMXY5aDIvdGgydnBrMi85aDJ2dGgyZnBoMnZ0aDJ2dGsyUGRoMnZ0aDJ2dGcydnRoM1A5aDJmcGkydnRqM1BoZzMvOWgydnRqMnZ0aTIveGcydnhoMi9wZzJ2cGgydnBoMi9waDJmdGkyUDlpMmZwaDIvdGgydnBpMi90aTIvcGgydnBnMmZ0aDJ2dGUxLzlpMlBoaTJmdGkyL3RoMnZ0ZzJmdGkyL3RoMi9waDJ2dGgyZnhoMnZ4aDJ2dGkydnBoMmZ4ajJmcGcyL3BnMmZ4ZzJ2eGgyZnBnMmZ0aDJmdGgydnhoMmZ0aTIvdGgydnRoMnZ0ZzJ2eGcydnRnMi9waDIvbGkydnRoMmZ0aDIvOWkyZnhoMnZ0aTJ2cGcyL3RpMnZ0aTJmeGgyL3RnMnZ0aDNQdGkyL3BoMnZwZzJ2dGcydnRnMnZ0aDIvdGgydnhnMi94aTJmcGcydnBpMnZ4aTIveGczUHRlM2Y5aDJQdGgyL3RnM2ZoaTJmdGkyL3hoMnZ0aDJ2dGYyUHRnMnZwaTJ2eGgyZnBoMnZ0aDJ2eGgydnRoMnZ0aDJ2dGcyL3RpMnZ0aDJ2dGgydnRKRGVjQUFBQUEvblJTVGxNQS9nRUMvZndFQnZVREIxWHpJdlQ0KzNmdCtUUDJDZ2xLVUF1TEZ4c1VEUWdXUFBleFQ0anF4QTdTOGN4TlJBOE0raVBSazIvanhjYWFJT0RMM1pIWjhHa3hFTGFzUFY2QXptYXZYWjdXa0JJcjFlY2Y4dTRtdXl4VTZhZmNqYVpjMSs4b1dDNFJRY3E0WWVRRnM5NURtUzJiNjdUaXV1WTFuNld0aE0xTGxzUEE2SEc5S1ZISmF1eStOR2VpbldVWlIrRWNpYWwyNVNHdXNzRWRaSFVrR05NK1cxcWhNS0F5amhvdmpEYzVjRzZIMkJNbnQwYURlbmlvdjFkWjFHaGZOamljbDJ4eWVaaUJoWHZDVW9KaUtxcXdGWlhhWUg5OVNYNlBPbVBmUllxNVAweVVhNlJUVGtnZVFvWWxjMVo4ZER0dGtxTzEyOC9IeUVDODBKS2NWNDhBQUJIcVNVUkJWSGhlN01BeEVZQWdGQURRUC8zRjFXTXlBd0hJWUFFU09CUENEcFNpa3lVY3ZQTzkrQklBQUFBQUFBQUFBSURTK2o2T2VFSE9henRYdlROKzR5SHZQcU9sS05ZMUFMODlhUWQyM3V3SU93WTJzTWs1NTV4elJwSWt5VG1KUkltQ2dJcWlJQndSVURDQWdESG5jRHdLeG1NNDVud01SMDhPOTEzMzN0UFZNMTB6MDlNOUhxOXJkdDNuLzE2OXBsYlhydXJ2KzZxK3dzdDZkdFJJa21XejN2M2lDSDY2L04rL05TYUp1dFEyNmNsUUgzQkQyMHhLaHYxNkJINEszeFVQbGxIaVhUMGFxbk4vVjhZUTJrMkg4aEdsYVlQSE0xVFpzMjRvcldnTXcxdnloKzZJd3ZUclBBenYxV0lvYk1oV1dxbzZVd0tIVnBacnRMUWpHOHJ5YldZa0tiOHVoZ01Ga3pSR01zRUZWZDFPR3gzellDZnhnU1RhK0E2S2VzOURXOHV2UkVTNWI5QldWak1veWRlY2ZsTSsvQ3p2cTk3N0I4NW5zTlQwQkZpcXQ0ckJNdnFmL21UbGlPbFhQRENGZmoyZ3BLTTBUSjNzZ3ZEMUt6czB5dW8yZzRXUDM2ZHMvQjIzdVdFWU40cUd1NkFnMTY4b2JKOE9zK1NYcjZja3FaOExZU1RXOGxBeWU4dGNtSFhyUXFFY0N2cUFncllYUVJJL2EwWEowaUVJTWJvNUpUM3VSTEF2S0dqdG9KNWpGRlloVkdMWE9UU2IzdzFCdnV4Q3M4MVBJb3h5Q3ZkRE9ka2pxZk1rSTV3bWRUSnBrdlU0ek53dmF6U1o4ejNDdXBQQ01DZ25sOEk4V1BqMlBNMFd4c0d2M3FzMFNldFVEeFptVVZCdkR0OUJJUmVXSHNtZ1Nac1NDTk1tMHVTL0ZzSFNaUlIrQjlYMHBTNGxEdFlLbHROa29naE8vV2dlVjArdFJGaXJyVkgzT1JTVG1FYmRSNGpFMVMrRkFSbTlBQ0F2aXdITFppSWlZNjkwRHhSem5NSURpT3pDSUFaa2JRR2U4VEtndkRzaUcweWROeHRxNlUzaEZ0Z282c2tBNytrNkRQQzg0NEtOUnlnOEFiWGNSK0VJN0xoYU5tVllWWG13dFpQQ3BWRExLdXFTWExDM1lBbkRlUFJiMk90TzRXYW9aVE4xZjRNVHlmY3d4STdHY01JWSt6OUJMWTlHOTVsZjJJWkJWc2RGdDEyNkRtcFpSdDB1T0pQNElDV2QzSEJtZzZJeHdWSFVyWU5EN2hZME9RMm5icVN1THRTU1J0MjFjTWgxZ2lhWHdLblBxV3NPdFdqVS9RRU9YVUxKL1hEb2VlcCs5Zjk4QUgvTklDM2hURnZGQi9BRk9ISVZnM2tlaGlPckZCMUFMM1YxNEVTZWx5RXlaOEtKMVlyK0QreEMzYnR3WUdVOERWNzZqYm9TRGx5a3JqWFUwb3E2MTJGdnhIQWFQTGVlb2QvOGtpaTJNUjlCTFZPb2V4QzJpcHJUYnhOY2JlblhJUisyMmxEWEU2cVFmOWNHMlBGOVJMOXZBQ1Fjb0Y5UE4reE1wRzQzMU5MZmNhUzRFLzEydVFBZ2Jqbjkrc0JPQ25VdlFpMVBVOWNGTmliVDcwYWZ5TW10cFVHcmdjaXlLWnlHV3ZwUXlFRkVPOHRvV0o4RG9mWkVHa1lPUlVUdEtEd010VnhONFJ3aUtWbEdRL3NTK0Yyb291R05HWWhrSm9WU3FHVUJoUzhSd2R5YmFJanZCcE5jTHcwOTNJNCtZUXFnbG5hT1F1M1gwcUJkQ3NuTjlQdXRreGhFbVF0cVNjaWs3aWxZZTl0RHcrVUlzcGdHendld05rL1o0cGpPOW9IT2drb2E1cmtSSkxFMURjT1AyRDltSGxTemhycnRzSkp3RXcyRDZqVitMWGxvemYreGMyZk42Y25KSlRPNm8vWStHbllrd0VKaVV5bG9vWklYS055QThKcGNTOGZxTkxGTEMwK0dhbXBRcUFHWmIzVEYzWVA3OTgxZ1ZMYXZQZkJ1eTRiZitxd1c0ZU5RelpVTXlZcjRGZzA0YzJCS1UvNEhNZ2V0T1RONWtRK0doZFNsSlVJMUNTT3Ayd3dBYysvYzFyWkRHWDhtcVEwV2YvWmtIQUIwVURHY0tqeEUzZFFoVjd5NElaNC91N0s2SCtaZGt5cHRsdFJ5TFFXTi8vZXVnbnArdzE5UU42akczV3NnZjBHdjM1SUFoYmhucmh0T1o5SXFPLy9qL0tUWFgwemYxSy9mbXpWcVZEUnE5R1dOR3IzNzlUdWRmbCtMUDg5N3FmNnlrWFJtNC9NTDNGRER0RDd6NmRRWjJLcEZwNjd2ZEJ1cXZmeERzeGhKZklOais0L1JNS1VZdG5MdW9lR3A5RjFyc3hoSjM2dUtVSjFkYU5HRmx0cGY5MXhGTXpkd3RwS0M5eTQ0Y0plWHdvcnVnUHR3M3YwWGw5SFN5SFdMVUYyVnp0TVlYbExkVGpXT1FCaElReTBJVGlmeDB4RDJOT3d6YnlvdDFHM29RdlhqcXRoS0t3UGNDUGhZbzlBNUI0TFRTZXdwUllBdm5WYjYxbkNqbXNsdFFDdnlteFkzUlI2TjZDYnhzRGdFVEtDMTVua3VWQ04zdG1hbytKNWU2aVlpNEFFYUJrZC84STVNaDE5aUZYVVpGK01acWtNdlZCY0Z1elFHeTFyemNENDJVRGdGUTBFU2hXWDVjQ3o3ZlFwSjE0U2VCejJHL0lmWFpESEVkU05RSFNUY25jSWcya09UaXdCZ1UyaUJ3U1FhdmtBVUdnWkdKVFJyOGhzQWFISjBoOFlnV2VrK3hMeWhmMmVRalozR0JxZm02a1A0VWFPd0hGRXBwMkV2ZE83aDFLVVdRWGN3ZlIrRE5OK0oyT1pxbVVwWm0zRno0VmVmd21IeG8vdFNTQjJOcUl5SXB6Qk12Rlc5S0N5Rm55L3ZKY3FhN25jaGhnMHBwOFJUWGhyK3hOeCtxUkFtMmxvZ2VmSHBpbjk3bDhMVjhvcDl3RVBKN0JMRXJMSHphZVk5TVEyeWJ2SWNUbnlmUXZ0c2hIQ2YrdVBUNTErNnFjZnIyOGE2RUNKdUVJWEt4Z0NRc0lLNnRCTEl6ZzMwMHF4Vk44U29lN3ZRYk13cDZ4TmZ2QTBBbnFVaEQ4RUt2bWxGdi9kZnJvMWd0MmdVUGdTQXIyaGRtanJ0SXMxUzhoQ1RqbnBwMG1FbXduaUhRaWNBamJkVG1JMGczZitVU1VsV3JTWUlNb0ZDYXJLcHVKeVhJWXlQdDlMRWN4bGkwS1ZwRElpM3VBR3JtVWJkOWtUZ0RBWHZXTWdXckdDSWZUOUMxaTZWd3ArQmV2SFVwWGEzdUV1Z2lnSGFOc1NjTHp3TStNdlh0dmVTYkVGQlBDM0tjVnQ2R0ViYUlhdnZFYzhpWEVhaFB5d2NYTW9BN1JIRW1DZmk2WmZ5T0N6ZFRhRWNUMUdJTDREa2ZvYW50WVJrUmdhRmNqemtvTEJ5UUFyOXluNUVUQ2taVHI4M0ZzRmE3YWJVTmYybjEySUw4d3F0ZUdwQThpd05sM3FvRzFVTWEyTTcwNi95SkdMSnEvUzdzVEVpT1VDaGlrSmxQWmhOTDZPbGthTmhsamlmUWlhRlR4Rkp2ZjcwTys5QzdCaEF2eE1KaU9nS0J2c2p6TnhiR2NGTExubmhZakNiTElqN0tmcGRqWmlSMDRxR3RtNUVsakNIc3IvR3dleDNqRWlleEs1WmxQV0ZEZGM2R2pZMlFheTRXVHJaWWVOeXlvN0s0enVSRVRXWEg3Q1hzbWRneDdWYnFoV09DZTcyRk9wbncxYXloMlp2SkFTTmlJMjdJSkZqUDFsRFlLdDRMWVVWdmxpN216THBIQno0QzgzZWhHUVZiWFNDNUcyYURZUUR6YnBRYUlqWThDbUZCK0RFVnpUcDZJTmtIMjA4Q3BtMDV0U0VFNXNvTEk2eG0rMm01c01KVjJjR0hJTGtDTzFvUmRhcmVtczRVcnlFdWtHSUNRbmVLSXZ5L2tpLzluR1FmRXhiTlNGeGRhRGZyVkZPR1MwSHNhQlFqb1BZSzZxaTRUSEl4dEhXVjVicGtlRnhjT1lSQ2djUkN3NVR1QUlPbmFEUUpSR3lBYlQxQldTdThjNlhFT0gzRktZakZ0U085bWlCdXlNTnZTRDduclp5SWJ1WGh2R0pjT2I3MkxxcTFxZFIxeUxxbkNUSFFMYUF0dTZFckM3OWVzT1pkeW5rSXlZTW82NHlFWTRzSjYxZXdZTzBOUU9TUmd4WUMwZDhjNmliaU5qUVZzcVAyVHFuTWVBalNGd2JhYU1qWkRmUjVLN296aTd2UW16SW83RGtKQnhvUWJNbklabEFHMjBoK1NmTkpzR0JQZU5qN1pyUXVlTXByUGZCVnBNcW12V0lzcFovQVNRN2FKWlpHN1o4R3loa0ZDTkd2QmpOTlhXdlVQWUV6T0t1dDVuQkNUQzdoYktib3luUHJJVlkwVDJEaGhkZ3B6VmxzeUY1bGhFZGdtUURaZmU0WU9NZEdycWNSY3k0bTM1MUVOazBCdnNBa0FzdUk2anZnOWtuREZicVBCcVpqdGlSc0o1K2JSTVJ5WWNVTkFwL2M4dXowa3RMbVR2bHh6NUtvWXpDS2tRU3Q0NSsvL0FoaGlSWDBXL3JRVmlidTVIQ0R6UThEc2x6dFBTTVJmNU8yK0toTHFVZXJGM1RobjRwb3hGVGNyMzBxN3dYbHI2azBBSHJLU3pMZ2VScHU5cHFJWHNPaGV1dzNFRWZqRWJqNmVlcFFJejVqQUhhNHU2d01DR1FpK3RGdzNPUXVPNWdXQy9BNGxWdGVoaTNVdGdNQzQwWGFnejRBVEZuUDAyR2owTlkrU25VTlgwTjZFRmhaRzNJQmlReFJKZHhrQlYyb2RBQ3lKbEtuYWNBWVYyeGpDWjFFSVBTYVhiamxSRWpjYThDT082eFRJZVBPRUNaTnVHa1ZlY0xKdFUyVjBqZmpUQ205YWZaVzRoSlZ6ZWxTZHJDUFFoUkxoV0M3NmFRZGdyQmFxNk9wMS9TaWVrSU5qWk5LbGt2cGJBVklmWThuMFlUN3pPSVViOGZSYk9VeXdzaG01RkpYVVlpQU94Sm90RGFoUkJOR3RicU1Xelp2bUZMNitSbUk0VHJKZ3JqaXdEQTlRWjFXalBJQ3U5TG9kbklYTVNzWmgwb2lXOXhRL2kyTE0vajMvN0FuOXhFYWtEdzN1YXQ4QnZrRzFyRVUxTC9Tc1N3dUVzMFN0SW0xVVJBVHdwaW81T3pqOEtTczRoSzQrRVVKc2FKS1UyaERRSnFUa3FqN09rY3hMWkdIUm1rd1dPTm9TdE9vbTVxWEVnU3FTMmkwaW0wdk5xWXc1NDl4aUIzWGNzZ3JUNUJ6TXUrM2NzZzhhdEtYZEpock05aDZFSEI4eVNpY053YkdvdW9RNkVmQUxodk9SYlBJTnJDeHFnT3VtMWdpRmFkU2wxNDNyUUdDeU5TNURpQlBYa0Z5VHdYMmhleUJ6QzBUMGVHYUZDSzZtTGNmSVpxLytFSzZyS2FoT3M2OEN3YzYwZUd0dGR3dGFJdXRWWjdocHJUMjRYcUk2NXJLMW9yRHh1K3lob05oNzZ1b3RDcVNNb1ZXS3ZjbElQcXBiaWw5UkIyaGNsTWpVSnJOeHh4emFaaEMwd3FhR1g4L1UxUS9jeXRNWXNXVmx4c1dab0lZVmUway9oM05Qd0ZnbTlvNzRYRE5JYlhzV1UycWlmWHZlVmVXb2wvcWRiUmJva0FTa1pGTjRrTHBsSklPZ2lndU52a085Wm4wWXEyZklzYjFkaEIwVURkZ3Jmem12c2VIc3lvSnZGU0dwNy8vdVUxbmIyTUlPT1MwYWp1M0tVTGsralVkN0RWbTA1NXgvVE9oaEtLSGwrYVNrZktIdXEvYW5DZnU5L2MwcWkwWnMyaHlja25aOHpZay95LzE5SDJhclRsbGU4dS8zUjFqNzhuMFJIdmptMkZVRWpqby8zNUMycHpWUWxVMDR5L29NZWdua2Y0QzlvTjlWeENuVGJ6OUlSOS9QbHBnM2EvTW0yN2lrM1JoUFhVL1JVQUNzYlZtYjJSUDV2MnI3NzF5VmtBbUUyZHR3aXFjYWVFdEtVNm1mdmM2Z1lqK1IvSmFMMzdod1ZEUWlzM2VxbTdodXlIN0pvRjIyNWYwMkFKbytPNXZ1N3FiNjd1VlFoWkJZVnRVRTBGaFFVSUszL29ZanEyNjNBY3dpcWdzQTdxa09OKzJneFlpTnRLUS92cHlhZHFybXpVcUdFTjNkdU5kcDZhTm95R1I3TmhaUVYxNjZHYVNkU3RnS1YybzJqbzc3YXV4R2JLQmZ0ZTdxT2dtZzdVUFFScm4yaldIVzJlb2QvanNMYU93bGtvSnNOSjl1MFNHclJiSWVtVlNjTXFSNldlSzZHVzdvNnFtT2ZXcFNGTEdvRWJsdEJRUHg4UnZFM2hVcWpsTmdvVmlPVElIQnF1UHdtL0pzMXB5R2lHU0pJcDNBKzFOS1N3Q0JFOVVSYW1sMnRDZnhxOGV4R1J6MFBkNjZwMk5peDBmb1BLNWtUby9oVEZPWVpLNmc1QUxiK2xMczBkUlhmWENXNjVueFc1eGdVYjlhbHJBN1cwb0c0NDdQakdVQkRuUDd2U3IwRSs3QmgvUFI5cStaeTZ2OEZXdmViMGV3ZW84Tkl3NXhybkR4b0Z0YnhLM2ZMb2VxeXo2OHhVR3FvV3dkNWc2dEtnbG45UmQyT1VYZjQ5U1RTazdZVURkU2dVUXluL2lLcDNmSjduSnplYWVwbENJWlRTZ0xwSmNPUXhobmdydXVXZXRkVWN3Qk5SUnI4WWJZQnZ2K0lET0JBTzNVN0pnMjQ0OHdPRkkxREtMTGwzZ0QzWENack1qb3U2RzM2Sm1vMGh6OE9waGhvRHJuVkZtejFsTnBSU1RsMWRPUFJtVTVvZGk0TXppeFhkQi82WnV2cHd4UFVDZzR5cEIwY21VSmNCVmNocnduWTQ0VnZJRUwvNkdrNjBwbTRRMUxLSndoRFlPenVHWWN5NUV3NXNwRzRNMURLT3doT3dkYW9qdzBwdENWdE5LQXhVTmFRL0dYYU94ak5nNlNZdkF3WVd3OFp4Q3U5QUxUbGVoODNQNWc2bXlXSWZLc3pqMmFDZDAyL0FQQ2hta0xQdTU4bDFHYUQxQVlBbnhqT2dxaDhpdWtpaEhSU3ptanF0Qk5aY2o4VXpvS25vbTNMNHJ6VHBXUWhycmtycXRydWdtRU1VQnNCUzdhVTBxZG9MNGJYV05GbVJDMHRQVXVnSjFZeXd2YXZZM1hzSlRUcGZnSit2RHMzbVdjN1BZK3FXdDJHS1RjT0ZsUjFvMXJNSVpvOW4wU1RsdVRpRVUxaEduWFlEbFBOYkNnOGlqR3NXZW1qaVRYZEIxbTArelRwZjZrYW9NeFRxUWozTk5BcDdRNGZ2OVZTYVZUWkNpQ0ZMS1JsMGF3S0NITStrMEJVS09rK2g4akFrM1o1T3BlVEcyZ2pEZFZVU0pmZHNlZzFtSnlkU0dGVUVCZDFDdy9XbDhEdjcyVnJLUmg2Q2hXWjFLY3ZzV1ZFUGhpYzcwbkFmbExTREJzL3lXODhWNDdXeEZiZjM5VERJK21SWVNraFBaUkR2ckZwdjVoNmZucnZ0dkVaRFJpR1VkR1VtelRJWnh0VFRDWWhrNkdiYXV4cUs2a01ibnQwbHNET3VQVzM4eXdWRnVlY3hvclh2d1lHYzlDUkcwdjQxS0t0N1gxcXJMN1oyOWdwdVQ2R2xqV09oc01ZdjBjS3NDaGVjSzd4OEtzTjcvMXNvcmZnT0QwT2xydmtBVWFyWHNnSERtRFFEcW50dkE0TzA2VG9FUDhXRmIvWlIxdVp0cUE5NHIwVXJDdHFndHIxSDRLYzdkOW5BenRRMXJWOW41WCszWjhjRUFJSUFBTUQ0dkwxSXdVa0FHMmdOUS9qNUU0SU1wUEh5cFlRbHZHQ3JzVENOMHM2OGJ2WFovOWlDdTEvcFBaWXdEQUFBQUFBQUFBQUFBRDUvVDFGM1UxR2lGd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzEwNTA5Yzk1NTEyODkzZGM2NjFiZDNhNmIwZDJhNWQuanBnXCI7IiwiLyohXG5cbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIE1hdGVyaWFsIERhc2hib2FyZCBSZWFjdCAtIHYxLjUuMCBiYXNlZCBvbiBNYXRlcmlhbCBEYXNoYm9hcmQgLSB2MS4yLjBcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICogUHJvZHVjdCBQYWdlOiBodHRwOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3RcbiAqIENvcHlyaWdodCAyMDE4IENyZWF0aXZlIFRpbSAoaHR0cDovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcblxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICovXG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy8gLy8gLy8gVmFyaWFibGVzIC0gU3R5bGVzIHRoYXQgYXJlIHVzZWQgb24gbW9yZSB0aGFuIG9uZSBjb21wb25lbnRcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xuXG5jb25zdCB0cmFuc2l0aW9uID0ge1xuICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpXCJcbn07XG5cbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgcGFkZGluZ1JpZ2h0OiBcIjE1cHhcIixcbiAgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLFxuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIG1hcmdpbkxlZnQ6IFwiYXV0b1wiXG59O1xuXG5jb25zdCBib3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzpcbiAgICBcIjAgMTBweCAzMHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC40MiksIDAgNHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMilcIlxufTtcblxuY29uc3QgY2FyZCA9IHtcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBtYXJnaW46IFwiMjVweCAwXCIsXG4gIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFxuICBiYWNrZ3JvdW5kOiBcIiNmZmZcIlxufTtcblxuY29uc3QgZGVmYXVsdEZvbnQgPSB7XG4gIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICBsaW5lSGVpZ2h0OiBcIjEuNWVtXCJcbn07XG5cbmNvbnN0IHByaW1hcnlDb2xvciA9IFwiIzljMjdiMFwiO1xuY29uc3Qgd2FybmluZ0NvbG9yID0gXCIjZmY5ODAwXCI7XG5jb25zdCBkYW5nZXJDb2xvciA9IFwiI2Y0NDMzNlwiO1xuY29uc3Qgc3VjY2Vzc0NvbG9yID0gXCIjNGNhZjUwXCI7XG5jb25zdCBpbmZvQ29sb3IgPSBcIiMwMGFjYzFcIjtcbmNvbnN0IHJvc2VDb2xvciA9IFwiI2U5MWU2M1wiO1xuY29uc3QgZ3JheUNvbG9yID0gXCIjOTk5OTk5XCI7XG5cbmNvbnN0IHByaW1hcnlCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzpcbiAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjI4KSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMilcIlxufTtcbmNvbnN0IGluZm9Cb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzpcbiAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuMjgpLCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDAsIDE4OCwgMjEyLCAwLjIpXCJcbn07XG5jb25zdCBzdWNjZXNzQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6XG4gICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjI4KSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSg3NiwgMTc1LCA4MCwgMC4yKVwiXG59O1xuY29uc3Qgd2FybmluZ0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yOCksIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMilcIlxufTtcbmNvbnN0IGRhbmdlckJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yOCksIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuMilcIlxufTtcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzpcbiAgICBcIjAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDIzMywgMzAsIDk5LCAwLjQpXCJcbn07XG5cbmNvbnN0IHdhcm5pbmdDYXJkSGVhZGVyID0ge1xuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2ZmYTcyNiwgI2ZiOGMwMClcIixcbiAgLi4ud2FybmluZ0JveFNoYWRvd1xufTtcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgIzY2YmI2YSwgIzQzYTA0NylcIixcbiAgLi4uc3VjY2Vzc0JveFNoYWRvd1xufTtcbmNvbnN0IGRhbmdlckNhcmRIZWFkZXIgPSB7XG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWY1MzUwLCAjZTUzOTM1KVwiLFxuICAuLi5kYW5nZXJCb3hTaGFkb3dcbn07XG5jb25zdCBpbmZvQ2FyZEhlYWRlciA9IHtcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpXCIsXG4gIC4uLmluZm9Cb3hTaGFkb3dcbn07XG5jb25zdCBwcmltYXJ5Q2FyZEhlYWRlciA9IHtcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNhYjQ3YmMsICM4ZTI0YWEpXCIsXG4gIC4uLnByaW1hcnlCb3hTaGFkb3dcbn07XG5jb25zdCByb3NlQ2FyZEhlYWRlciA9IHtcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNlYzQwN2EsICNkODFiNjApXCIsXG4gIC4uLnJvc2VCb3hTaGFkb3dcbn07XG5cbmNvbnN0IGNhcmRBY3Rpb25zID0ge1xuICBtYXJnaW46IFwiMCAyMHB4IDEwcHhcIixcbiAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gIGJvcmRlclRvcDogXCIxcHggc29saWQgI2VlZWVlZVwiLFxuICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAuLi5kZWZhdWx0Rm9udFxufTtcblxuY29uc3QgY2FyZEhlYWRlciA9IHtcbiAgbWFyZ2luOiBcIi0yMHB4IDE1cHggMFwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gIHBhZGRpbmc6IFwiMTVweFwiXG59O1xuXG5jb25zdCBkZWZhdWx0Qm94U2hhZG93ID0ge1xuICBib3JkZXI6IFwiMFwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gIGJveFNoYWRvdzpcbiAgICBcIjAgMTBweCAyMHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC40MiksIDAgM3B4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcbiAgcGFkZGluZzogXCIxMHB4IDBcIixcbiAgdHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgZWFzZSAwc1wiXG59O1xuXG5jb25zdCB0aXRsZSA9IHtcbiAgY29sb3I6IFwiIzNDNDg1OFwiLFxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXG4gIG1pbkhlaWdodDogXCIzMnB4XCIsXG4gIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmXCIsXG4gIFwiJiBzbWFsbFwiOiB7XG4gICAgY29sb3I6IFwiIzc3N1wiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgbGluZUhlaWdodDogXCIxXCJcbiAgfVxufTtcblxuY29uc3QgY2FyZFRpdGxlID0ge1xuICAuLi50aXRsZSxcbiAgbWFyZ2luVG9wOiBcIjBcIixcbiAgbWFyZ2luQm90dG9tOiBcIjNweFwiLFxuICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxuICBcIiYgYVwiOiB7XG4gICAgLi4udGl0bGUsXG4gICAgbWFyZ2luVG9wOiBcIi42MjVyZW1cIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMC43NXJlbVwiLFxuICAgIG1pbkhlaWdodDogXCJhdXRvXCJcbiAgfVxufTtcblxuY29uc3QgY2FyZFN1YnRpdGxlID0ge1xuICBtYXJnaW5Ub3A6IFwiLS4zNzVyZW1cIlxufTtcblxuY29uc3QgY2FyZExpbmsgPSB7XG4gIFwiJiArICRjYXJkTGlua1wiOiB7XG4gICAgbWFyZ2luTGVmdDogXCIxLjI1cmVtXCJcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgLy92YXJpYWJsZXNcbiAgZHJhd2VyV2lkdGgsXG4gIHRyYW5zaXRpb24sXG4gIGNvbnRhaW5lcixcbiAgYm94U2hhZG93LFxuICBjYXJkLFxuICBkZWZhdWx0Rm9udCxcbiAgcHJpbWFyeUNvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIGluZm9Db2xvcixcbiAgcm9zZUNvbG9yLFxuICBncmF5Q29sb3IsXG4gIHByaW1hcnlCb3hTaGFkb3csXG4gIGluZm9Cb3hTaGFkb3csXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXG4gIHdhcm5pbmdCb3hTaGFkb3csXG4gIGRhbmdlckJveFNoYWRvdyxcbiAgcm9zZUJveFNoYWRvdyxcbiAgd2FybmluZ0NhcmRIZWFkZXIsXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxuICBkYW5nZXJDYXJkSGVhZGVyLFxuICBpbmZvQ2FyZEhlYWRlcixcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXG4gIHJvc2VDYXJkSGVhZGVyLFxuICBjYXJkQWN0aW9ucyxcbiAgY2FyZEhlYWRlcixcbiAgZGVmYXVsdEJveFNoYWRvdyxcbiAgdGl0bGUsXG4gIGNhcmRUaXRsZSxcbiAgY2FyZFN1YnRpdGxlLFxuICBjYXJkTGlua1xufTtcbiIsImltcG9ydCB7XG4gIGdyYXlDb2xvcixcbiAgcHJpbWFyeUNvbG9yLFxuICBpbmZvQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvcixcbiAgcm9zZUNvbG9yXG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICBidXR0b246IHtcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxuICAgIG1pbldpZHRoOiBcImF1dG9cIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYXlDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xMilcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHBhZGRpbmc6IFwiMTJweCAzMHB4XCIsXG4gICAgbWFyZ2luOiBcIi4zMTI1cmVtIDFweFwiLFxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCIwXCIsXG4gICAgd2lsbENoYW5nZTogXCJib3gtc2hhZG93LCB0cmFuc2Zvcm1cIixcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgXCJib3gtc2hhZG93IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSksIGJhY2tncm91bmQtY29sb3IgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3MTQzXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICB0b3VjaEFjdGlvbjogXCJtYW5pcHVsYXRpb25cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMilcIlxuICAgIH0sXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsICYubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgbWFyZ2luVG9wOiBcIi0xZW1cIixcbiAgICAgIG1hcmdpbkJvdHRvbTogXCItMWVtXCIsXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuICAgIH0sXG4gICAgXCImIHN2Z1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICB3aWR0aDogXCIxOHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMThweFwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXG4gICAgfSxcbiAgICBcIiYkanVzdEljb25cIjoge1xuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgdG9wOiBcIjBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjQxcHhcIixcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB3aGl0ZToge1xuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGNvbG9yOiBncmF5Q29sb3JcbiAgICB9XG4gIH0sXG4gIHJvc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMjMzLCAzMCwgOTksIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDIzMywgMzAsIDk5LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDIzMywgMzAsIDk5LCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMjMzLCAzMCwgOTksIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyMzMsIDMwLCA5OSwgMC4yKVwiXG4gICAgfVxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDE1NiwgMzksIDE3NiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDE1NiwgMzksIDE3NiwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDE1NiwgMzksIDE3NiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDE1NiwgMzksIDE3NiwgMC4yKVwiXG4gICAgfVxuICB9LFxuICBpbmZvOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDAsIDE4OCwgMjEyLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAxODgsIDIxMiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAxODgsIDIxMiwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDAsIDE4OCwgMjEyLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSg3NiwgMTc1LCA4MCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoNzYsIDE3NSwgODAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoNzYsIDE3NSwgODAsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSg3NiwgMTc1LCA4MCwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMjU1LCAxNTIsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDI1NSwgMTUyLCAwLCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yKVwiXG4gICAgfVxuICB9LFxuICBkYW5nZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgyNDQsIDY3LCA1NCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMjQ0LCA2NywgNTQsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgc2ltcGxlOiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgfSxcbiAgICBcIiYkcm9zZVwiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiByb3NlQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRwcmltYXJ5XCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHByaW1hcnlDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJGluZm9cIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogaW5mb0NvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkc3VjY2Vzc1wiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiR3YXJuaW5nXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHdhcm5pbmdDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJGRhbmdlclwiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBkYW5nZXJDb2xvclxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdHJhbnNwYXJlbnQ6IHtcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICB9XG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgb3BhY2l0eTogXCIwLjY1XCIsXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCJcbiAgfSxcbiAgbGc6IHtcbiAgICBwYWRkaW5nOiBcIjEuMTI1cmVtIDIuMjVyZW1cIixcbiAgICBmb250U2l6ZTogXCIwLjg3NXJlbVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS4zMzMzMzNcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCJcbiAgfSxcbiAgc206IHtcbiAgICBwYWRkaW5nOiBcIjAuNDA2MjVyZW0gMS4yNXJlbVwiLFxuICAgIGZvbnRTaXplOiBcIjAuNjg3NXJlbVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiXG4gIH0sXG4gIHJvdW5kOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIlxuICB9LFxuICBibG9jazoge1xuICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiXG4gIH0sXG4gIGxpbms6IHtcbiAgICBcIiYsJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgY29sb3I6IFwiIzk5OTk5OVwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH1cbiAgfSxcbiAganVzdEljb246IHtcbiAgICBwYWRkaW5nTGVmdDogXCIxMnB4XCIsXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjEycHhcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjQxcHhcIixcbiAgICBtaW5XaWR0aDogXCI0MXB4XCIsXG4gICAgd2lkdGg6IFwiNDFweFwiLFxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgc3ZnLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiXG4gICAgfSxcbiAgICBcIiYkbGdcIjoge1xuICAgICAgaGVpZ2h0OiBcIjU3cHhcIixcbiAgICAgIG1pbldpZHRoOiBcIjU3cHhcIixcbiAgICAgIHdpZHRoOiBcIjU3cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgICBmb250U2l6ZTogXCIzMnB4XCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiXG4gICAgICB9LFxuICAgICAgXCImIHN2Z1wiOiB7XG4gICAgICAgIHdpZHRoOiBcIjMycHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjMycHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJHNtXCI6IHtcbiAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICBtaW5XaWR0aDogXCIzMHB4XCIsXG4gICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgICAgbGluZUhlaWdodDogXCIyOXB4XCJcbiAgICAgIH0sXG4gICAgICBcIiYgc3ZnXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMTdweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTdweFwiXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b25TdHlsZTtcbiIsImNvbnN0IGNhcmRCb2R5U3R5bGUgPSB7XG4gIGNhcmRCb2R5OiB7XG4gICAgcGFkZGluZzogXCIwLjkzNzVyZW0gMjBweFwiLFxuICAgIGZsZXg6IFwiMSAxIGF1dG9cIixcbiAgICBXZWJraXRCb3hGbGV4OiBcIjFcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIGNhcmRCb2R5UGxhaW46IHtcbiAgICBwYWRkaW5nTGVmdDogXCI1cHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiNXB4XCJcbiAgfSxcbiAgY2FyZEJvZHlQcm9maWxlOiB7XG4gICAgbWFyZ2luVG9wOiBcIjE1cHhcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkQm9keVN0eWxlO1xuIiwiY29uc3QgY2FyZEZvb3RlclN0eWxlID0ge1xuICBjYXJkRm9vdGVyOiB7XG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgbWFyZ2luOiBcIjAgMTVweCAxMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBib3JkZXI6IFwiMFwiXG4gIH0sXG4gIGNhcmRGb290ZXJQcm9maWxlOiB7XG4gICAgbWFyZ2luVG9wOiBcIi0xNXB4XCJcbiAgfSxcbiAgY2FyZEZvb3RlclBsYWluOiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiNXB4XCIsXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjVweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIH0sXG4gIGNhcmRGb290ZXJTdGF0czoge1xuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgXCImIHN2Z1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgdG9wOiBcIjRweFwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiLFxuICAgICAgd2lkdGg6IFwiMTZweFwiLFxuICAgICAgaGVpZ2h0OiBcIjE2cHhcIlxuICAgIH0sXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHRvcDogXCI0cHhcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIlxuICAgIH1cbiAgfSxcbiAgY2FyZEZvb3RlckNoYXJ0OiB7XG4gICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZWVlXCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEZvb3RlclN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgd2FybmluZ0NhcmRIZWFkZXIsXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxuICBkYW5nZXJDYXJkSGVhZGVyLFxuICBpbmZvQ2FyZEhlYWRlcixcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXG4gIHJvc2VDYXJkSGVhZGVyXG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5jb25zdCBjYXJkSGVhZGVyU3R5bGUgPSB7XG4gIGNhcmRIZWFkZXI6IHtcbiAgICBwYWRkaW5nOiBcIjAuNzVyZW0gMS4yNXJlbVwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgekluZGV4OiBcIjMgIWltcG9ydGFudFwiLFxuICAgIFwiJiRjYXJkSGVhZGVyUGxhaW4sJiRjYXJkSGVhZGVySWNvbiwmJGNhcmRIZWFkZXJTdGF0cywmJHdhcm5pbmdDYXJkSGVhZGVyLCYkc3VjY2Vzc0NhcmRIZWFkZXIsJiRkYW5nZXJDYXJkSGVhZGVyLCYkaW5mb0NhcmRIZWFkZXIsJiRwcmltYXJ5Q2FyZEhlYWRlciwmJHJvc2VDYXJkSGVhZGVyXCI6IHtcbiAgICAgIG1hcmdpbjogXCIwIDE1cHhcIixcbiAgICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgIH0sXG4gICAgXCImOmZpcnN0LWNoaWxkXCI6IHtcbiAgICAgIGJvcmRlclJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweCkgY2FsYyguMjVyZW0gLSAxcHgpIDAgMFwiXG4gICAgfSxcbiAgICBcIiYkd2FybmluZ0NhcmRIZWFkZXIsJiRzdWNjZXNzQ2FyZEhlYWRlciwmJGRhbmdlckNhcmRIZWFkZXIsJiRpbmZvQ2FyZEhlYWRlciwmJHByaW1hcnlDYXJkSGVhZGVyLCYkcm9zZUNhcmRIZWFkZXJcIjoge1xuICAgICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTIwcHhcIixcbiAgICAgICAgcGFkZGluZzogXCIxNXB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRjYXJkSGVhZGVyU3RhdHMgaSwmJGNhcmRIZWFkZXJTdGF0cyAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgZm9udFNpemU6IFwiMzZweFwiLFxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXG4gICAgICB3aWR0aDogXCI1NnB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgb3ZlcmZsb3c6IFwidW5zZXRcIixcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxcHhcIlxuICAgIH0sXG4gICAgXCImJGNhcmRIZWFkZXJTdGF0cyRjYXJkSGVhZGVySWNvblwiOiB7XG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgIH1cbiAgfSxcbiAgY2FyZEhlYWRlclBsYWluOiB7XG4gICAgbWFyZ2luTGVmdDogXCIwcHggIWltcG9ydGFudFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjBweCAhaW1wb3J0YW50XCJcbiAgfSxcbiAgY2FyZEhlYWRlclN0YXRzOiB7XG4gICAgXCImICRjYXJkSGVhZGVySWNvblwiOiB7XG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgIH0sXG4gICAgXCImIGgxLCYgaDIsJiBoMywmIGg0LCYgaDUsJiBoNlwiOiB7XG4gICAgICBtYXJnaW46IFwiMCAhaW1wb3J0YW50XCJcbiAgICB9XG4gIH0sXG4gIGNhcmRIZWFkZXJJY29uOiB7XG4gICAgXCImJHdhcm5pbmdDYXJkSGVhZGVyLCYkc3VjY2Vzc0NhcmRIZWFkZXIsJiRkYW5nZXJDYXJkSGVhZGVyLCYkaW5mb0NhcmRIZWFkZXIsJiRwcmltYXJ5Q2FyZEhlYWRlciwmJHJvc2VDYXJkSGVhZGVyXCI6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICB9LFxuICAgIFwiJiBpLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIHdpZHRoOiBcIjMzcHhcIixcbiAgICAgIGhlaWdodDogXCIzM3B4XCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMzcHhcIlxuICAgIH0sXG4gICAgXCImIHN2Z1wiOiB7XG4gICAgICB3aWR0aDogXCIyNHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMjRweFwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgbGluZUhlaWdodDogXCIzM3B4XCIsXG4gICAgICAvLyBtYXJnaW46IFwiNXB4IDRweCAwcHhcIlxuICAgIH1cbiAgfSxcbiAgd2FybmluZ0NhcmRIZWFkZXI6IHtcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcbiAgICAgIC4uLndhcm5pbmdDYXJkSGVhZGVyXG4gICAgfVxuICB9LFxuICBzdWNjZXNzQ2FyZEhlYWRlcjoge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xuICAgICAgLi4uc3VjY2Vzc0NhcmRIZWFkZXJcbiAgICB9XG4gIH0sXG4gIGRhbmdlckNhcmRIZWFkZXI6IHtcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcbiAgICAgIC4uLmRhbmdlckNhcmRIZWFkZXJcbiAgICB9XG4gIH0sXG4gIGluZm9DYXJkSGVhZGVyOiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XG4gICAgICAuLi5pbmZvQ2FyZEhlYWRlclxuICAgIH1cbiAgfSxcbiAgcHJpbWFyeUNhcmRIZWFkZXI6IHtcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcbiAgICAgIC4uLnByaW1hcnlDYXJkSGVhZGVyXG4gICAgfVxuICB9LFxuICByb3NlQ2FyZEhlYWRlcjoge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xuICAgICAgLi4ucm9zZUNhcmRIZWFkZXJcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRIZWFkZXJTdHlsZTtcbiIsImltcG9ydCB7XG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxuICBzdWNjZXNzQ2FyZEhlYWRlcixcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcbiAgaW5mb0NhcmRIZWFkZXIsXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxuICByb3NlQ2FyZEhlYWRlclxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuY29uc3QgY2FyZEljb25TdHlsZSA9IHtcbiAgY2FyZEljb246IHtcbiAgICBcIiYkd2FybmluZ0NhcmRIZWFkZXIsJiRzdWNjZXNzQ2FyZEhlYWRlciwmJGRhbmdlckNhcmRIZWFkZXIsJiRpbmZvQ2FyZEhlYWRlciwmJHByaW1hcnlDYXJkSGVhZGVyLCYkcm9zZUNhcmRIZWFkZXJcIjoge1xuICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM5OTlcIixcbiAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgbWFyZ2luVG9wOiBcIi0yMHB4XCIsXG4gICAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXG4gICAgICBmbG9hdDogXCJsZWZ0XCJcbiAgICB9XG4gIH0sXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxuICBzdWNjZXNzQ2FyZEhlYWRlcixcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcbiAgaW5mb0NhcmRIZWFkZXIsXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxuICByb3NlQ2FyZEhlYWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEljb25TdHlsZTtcbiIsImNvbnN0IGNhcmRTdHlsZSA9IHtcbiAgY2FyZDoge1xuICAgIGJvcmRlcjogXCIwXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcbiAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1pbldpZHRoOiBcIjBcIixcbiAgICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXG4gICAgZm9udFNpemU6IFwiLjg3NXJlbVwiXG4gIH0sXG4gIGNhcmRQbGFpbjoge1xuICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gIH0sXG4gIGNhcmRQcm9maWxlOiB7XG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgfSxcbiAgY2FyZENoYXJ0OiB7XG4gICAgXCImIHBcIjoge1xuICAgICAgbWFyZ2luVG9wOiBcIjBweFwiLFxuICAgICAgcGFkZGluZ1RvcDogXCIwcHhcIlxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZFN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgcHJpbWFyeUNvbG9yLFxuICBkYW5nZXJDb2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICBkZWZhdWx0Rm9udFxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCBjdXN0b21JbnB1dFN0eWxlID0ge1xuICBkaXNhYmxlZDoge1xuICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50ICFpbXBvcnRhbnRcIlxuICAgIH1cbiAgfSxcbiAgdW5kZXJsaW5lOiB7XG4gICAgXCImOmhvdmVyOm5vdCgkZGlzYWJsZWQpOmJlZm9yZSwmOmJlZm9yZVwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjRDJEMkQyICFpbXBvcnRhbnRcIixcbiAgICAgIGJvcmRlcldpZHRoOiBcIjFweCAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogcHJpbWFyeUNvbG9yXG4gICAgfVxuICB9LFxuICB1bmRlcmxpbmVFcnJvcjoge1xuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogZGFuZ2VyQ29sb3JcbiAgICB9XG4gIH0sXG4gIHVuZGVybGluZVN1Y2Nlc3M6IHtcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHN1Y2Nlc3NDb2xvclxuICAgIH1cbiAgfSxcbiAgbGFiZWxSb290OiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgY29sb3I6IFwiI0FBQUFBQSAhaW1wb3J0YW50XCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3XCJcbiAgfSxcbiAgbGFiZWxSb290RXJyb3I6IHtcbiAgICBjb2xvcjogZGFuZ2VyQ29sb3JcbiAgfSxcbiAgbGFiZWxSb290U3VjY2Vzczoge1xuICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgfSxcbiAgZmVlZGJhY2s6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIxOHB4XCIsXG4gICAgcmlnaHQ6IFwiMFwiLFxuICAgIHpJbmRleDogXCIyXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIHdpZHRoOiBcIjI0cHhcIixcbiAgICBoZWlnaHQ6IFwiMjRweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuICB9LFxuICBtYXJnaW5Ub3A6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMTZweFwiXG4gIH0sXG4gIGZvcm1Db250cm9sOiB7XG4gICAgZmxleDogXCIxIDEgYXV0b1wiLFxuICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiLFxuICAgIG1hcmdpbjogXCIwIDAgMCAwXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICB9XG4gICx0ZXh0SW5kZW50RmlsZTp7XG4gICAgJ3RleHQtaW5kZW50JzonLTIwMHB4J1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21JbnB1dFN0eWxlO1xuIiwiY29uc3QgY3VzdG9tVGFic1N0eWxlID0ge1xuICBjYXJkOntcbiAgICBcImJveC1zaGFkb3dcIjpcIm5vbmVcIlxuICB9LFxuICBjYXJkVGl0bGU6IHtcbiAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgcGFkZGluZzogXCIxMHB4IDEwcHggMTBweCAwcHhcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjI0cHhcIlxuICB9LFxuICBjYXJkVGl0bGVSVEw6IHtcbiAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgIHBhZGRpbmc6IFwiMTBweCAwcHggMTBweCAxMHB4ICFpbXBvcnRhbnRcIlxuICB9LFxuICBkaXNwbGF5Tm9uZToge1xuICAgIGRpc3BsYXk6IFwibm9uZSAhaW1wb3J0YW50XCJcbiAgfSxcbiAgdGFic1Jvb3Q6IHtcbiAgICBtaW5IZWlnaHQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIG92ZXJmbG93WDogXCJ2aXNpYmxlXCIsXG4gICAgXCImICR0YWJSb290QnV0dG9uXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCJcbiAgICB9XG4gIH0sXG4gIHRhYlJvb3RCdXR0b246IHtcbiAgICBtaW5IZWlnaHQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIG1pbldpZHRoOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICB3aWR0aDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgaGVpZ2h0OiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBtYXhXaWR0aDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgbWF4SGVpZ2h0OiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMTVweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjI0cHhcIixcbiAgICBib3JkZXI6IFwiMCAhaW1wb3J0YW50XCIsXG4gICAgY29sb3I6IFwiI2ZmZiAhaW1wb3J0YW50XCIsXG4gICAgbWFyZ2luTGVmdDogXCI0cHhcIixcbiAgICBcIiY6bGFzdC1jaGlsZFwiOiB7XG4gICAgICBtYXJnaW5MZWZ0OiBcIjBweFwiXG4gICAgfVxuICB9LFxuICB0YWJMYWJlbENvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IFwiMHB4XCJcbiAgfSxcbiAgdGFiTGFiZWw6IHtcbiAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgIGZvbnRTaXplOiBcIjEycHhcIlxuICB9LFxuICB0YWJTZWxlY3RlZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcIixcbiAgICB0cmFuc2l0aW9uOiBcIjAuMnMgYmFja2dyb3VuZC1jb2xvciAwLjFzXCJcbiAgfSxcbiAgdGFiV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgbWluSGVpZ2h0OiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBtaW5XaWR0aDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgd2lkdGg6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIGhlaWdodDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgbWF4V2lkdGg6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIG1heEhlaWdodDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgXCImID4gc3ZnLCYgPiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICAgIG1hcmdpbjogXCItMXB4IDVweCAwIDBcIlxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tVGFic1N0eWxlO1xuIiwiY29uc3QgZGlhbG9nVGl0bGVTdHlsZSA9IHtcbiAgICByb290OntcbiAgICAgICAgXG4gICAgfVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IGRpYWxvZ1RpdGxlU3R5bGU7XG4gICIsImNvbnN0IGRpYWxvZ0NvbnRlbnRTdHlsZSA9IHtcbiAgICByb290OntcbiAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiXG4gICAgfVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IGRpYWxvZ0NvbnRlbnRTdHlsZTtcbiAgIiwiY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gICAgcGFwZXI6e1xuICAgICAgICAvLyB3aWR0aDpcIjYwMHB4XCIsXG4gICAgICAgIC8vIG92ZXJmbG93OlwiaGlkZGVuXCJcbiAgICB9XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgZGlhbG9nU3R5bGU7XG4gICIsImNvbnN0IGRpYWxvZ1RpdGxlU3R5bGUgPSB7XG4gICAgcm9vdDp7XG4gICAgICAgIFxuICAgIH1cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBkaWFsb2dUaXRsZVN0eWxlO1xuICAiLCJpbXBvcnQge1xuICBkZWZhdWx0Rm9udCxcbiAgY29udGFpbmVyLFxuICBwcmltYXJ5Q29sb3Jcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gIGJsb2NrOiB7XG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgIGZvbnRTaXplOiBcIjEycHhcIlxuICB9LFxuICBsZWZ0OiB7XG4gICAgZmxvYXQ6IFwibGVmdCFpbXBvcnRhbnRcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwYWRkaW5nOiBcIjE1cHggMFwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGZsb2F0OiBcInJpZ2h0IWltcG9ydGFudFwiXG4gIH0sXG4gIGZvb3Rlcjoge1xuICAgIGJvdHRvbTogXCIwXCIsXG4gICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZTdlN2U3XCIsXG4gICAgcGFkZGluZzogXCIxNXB4IDBcIixcbiAgICAuLi5kZWZhdWx0Rm9udFxuICB9LFxuICBjb250YWluZXIsXG4gIGE6IHtcbiAgICBjb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB9LFxuICBsaXN0OiB7XG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBtYXJnaW5Ub3A6IFwiMFwiXG4gIH0sXG4gIGlubGluZUJsb2NrOiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBwYWRkaW5nOiBcIjBweFwiLFxuICAgIHdpZHRoOiBcImF1dG9cIlxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9vdGVyU3R5bGU7XG4iLCJpbXBvcnQge1xuICBkZWZhdWx0Rm9udCxcbiAgZGFuZ2VyQ29sb3Jcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuaW1wb3J0IGRyb3Bkb3duU3R5bGUgZnJvbSBcIi4uL2Ryb3Bkb3duU3R5bGUuanN4XCI7XG5cbmNvbnN0IGhlYWRlckxpbmtzU3R5bGUgPSB0aGVtZSA9PiAoe1xuICAuLi5kcm9wZG93blN0eWxlKHRoZW1lKSxcbiAgc2VhcmNoOiB7XG4gICAgXCImID4gZGl2XCI6IHtcbiAgICAgIG1hcmdpblRvcDogXCIwXCJcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICBtYXJnaW46IFwiMTBweCAxNXB4ICFpbXBvcnRhbnRcIixcbiAgICAgIGZsb2F0OiBcIm5vbmUgIWltcG9ydGFudFwiLFxuICAgICAgcGFkZGluZ1RvcDogXCIxcHhcIixcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMXB4XCIsXG4gICAgICBwYWRkaW5nOiBcIjAhaW1wb3J0YW50XCIsXG4gICAgICB3aWR0aDogXCI2MCVcIixcbiAgICAgIG1hcmdpblRvcDogXCI0MHB4XCIsXG4gICAgICBcIiYgaW5wdXRcIjoge1xuICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGxpbmtUZXh0OiB7XG4gICAgekluZGV4OiBcIjRcIixcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgbWFyZ2luOiBcIjBweFwiXG4gIH0sXG4gIGJ1dHRvbkxpbms6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBtYXJnaW46IFwiMTBweCAxNXB4IDBcIixcbiAgICAgIHdpZHRoOiBcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIixcbiAgICAgIFwiJiBzdmdcIjoge1xuICAgICAgICB3aWR0aDogXCIyNHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcbiAgICAgICAgbWFyZ2luTGVmdDogXCItMTVweFwiXG4gICAgICB9LFxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgICBmb250U2l6ZTogXCIyNHB4XCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgICB3aWR0aDogXCIyNHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcbiAgICAgICAgbWFyZ2luTGVmdDogXCItMTVweFwiXG4gICAgICB9LFxuICAgICAgXCImID4gc3BhblwiOiB7XG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZWFyY2hCdXR0b246IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgdG9wOiBcIi01MHB4ICFpbXBvcnRhbnRcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjIycHhcIixcbiAgICAgIGZsb2F0OiBcInJpZ2h0XCJcbiAgICB9XG4gIH0sXG4gIG1hcmdpbjoge1xuICAgIHpJbmRleDogXCI0XCIsXG4gICAgbWFyZ2luOiBcIjBcIlxuICB9LFxuICBzZWFyY2hJY29uOiB7XG4gICAgd2lkdGg6IFwiMTdweFwiLFxuICAgIHpJbmRleDogXCI0XCJcbiAgfSxcbiAgbm90aWZpY2F0aW9uczoge1xuICAgIHpJbmRleDogXCI0XCIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgdG9wOiBcIjJweFwiLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjRkZGXCIsXG4gICAgICByaWdodDogXCI0cHhcIixcbiAgICAgIGZvbnRTaXplOiBcIjlweFwiLFxuICAgICAgYmFja2dyb3VuZDogZGFuZ2VyQ29sb3IsXG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBtaW5XaWR0aDogXCIxNnB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMTZweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMTZweFwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIC4uLmRlZmF1bHRGb250LFxuICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiOHB4XCJcbiAgICB9XG4gIH0sXG4gIG1hbmFnZXI6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgfSxcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXG4gIH0sXG4gIHNlYXJjaFdyYXBwZXI6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgd2lkdGg6IFwiLXdlYmtpdC1maWxsLWF2YWlsYWJsZVwiLFxuICAgICAgbWFyZ2luOiBcIjEwcHggMTVweCAwXCJcbiAgICB9LFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckxpbmtzU3R5bGU7XG4iLCJpbXBvcnQge1xuICBjb250YWluZXIsXG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIGRlZmF1bHRCb3hTaGFkb3csXG4gIGluZm9Db2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yXG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IGhlYWRlclN0eWxlID0gdGhlbWUgPT4gKHtcbiAgYXBwQmFyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICBib3JkZXJCb3R0b206IFwiMFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgekluZGV4OiBcIjEwMjlcIixcbiAgICBjb2xvcjogXCIjNTU1NTU1XCIsXG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgcGFkZGluZzogXCIxMHB4IDBcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCIsXG4gICAgbWluSGVpZ2h0OiBcIjUwcHhcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgLi4uY29udGFpbmVyLFxuICAgIG1pbkhlaWdodDogXCI1MHB4XCJcbiAgfSxcbiAgZmxleDoge1xuICAgIGZsZXg6IDFcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBtYXJnaW46IFwiMFwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIlxuICAgIH1cbiAgfSxcbiAgYXBwUmVzcG9uc2l2ZToge1xuICAgIHRvcDogXCI4cHhcIlxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIC4uLmRlZmF1bHRCb3hTaGFkb3dcbiAgfSxcbiAgaW5mbzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAuLi5kZWZhdWx0Qm94U2hhZG93XG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgLi4uZGVmYXVsdEJveFNoYWRvd1xuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIC4uLmRlZmF1bHRCb3hTaGFkb3dcbiAgfSxcbiAgZGFuZ2VyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgLi4uZGVmYXVsdEJveFNoYWRvd1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyU3R5bGU7XG4iLCJpbXBvcnQge1xuICBkcmF3ZXJXaWR0aCxcbiAgdHJhbnNpdGlvbixcbiAgYm94U2hhZG93LFxuICBkZWZhdWx0Rm9udCxcbiAgcHJpbWFyeUNvbG9yLFxuICBwcmltYXJ5Qm94U2hhZG93LFxuICBpbmZvQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvclxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCBzaWRlYmFyU3R5bGUgPSB0aGVtZSA9PiAoe1xuICBkcmF3ZXJQYXBlcjoge1xuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB0b3A6IFwiMFwiLFxuICAgIGJvdHRvbTogXCIwXCIsXG4gICAgbGVmdDogXCIwXCIsXG4gICAgekluZGV4OiBcIjFcIixcbiAgICAuLi5ib3hTaGFkb3csXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgICAuLi5ib3hTaGFkb3csXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgdG9wOiBcIjBcIixcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgcmlnaHQ6IFwiMFwiLFxuICAgICAgbGVmdDogXCJhdXRvXCIsXG4gICAgICB6SW5kZXg6IFwiMTAzMlwiLFxuICAgICAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsXG4gICAgICBvdmVyZmxvd1k6IFwidmlzaWJsZVwiLFxuICAgICAgYm9yZGVyVG9wOiBcIm5vbmVcIixcbiAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgICBwYWRkaW5nTGVmdDogXCIwXCIsXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke2RyYXdlcldpZHRofXB4LCAwLCAwKWAsXG4gICAgICAuLi50cmFuc2l0aW9uXG4gICAgfVxuICB9LFxuICBsb2dvOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBwYWRkaW5nOiBcIjE1cHggMTVweFwiLFxuICAgIHpJbmRleDogXCI0XCIsXG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBib3R0b206IFwiMFwiLFxuXG4gICAgICBoZWlnaHQ6IFwiMXB4XCIsXG4gICAgICByaWdodDogXCIxNXB4XCIsXG4gICAgICB3aWR0aDogXCJjYWxjKDEwMCUgLSAzMHB4KVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKVwiXG4gICAgfVxuICB9LFxuICBsb2dvTGluazoge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgcGFkZGluZzogXCI1cHggMFwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBcIiYsJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCJcbiAgICB9XG4gIH0sXG4gIGxvZ29JbWFnZToge1xuICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIG1heEhlaWdodDogXCIzMHB4XCIsXG4gICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiMTVweFwiXG4gIH0sXG4gIGltZzoge1xuICAgIHdpZHRoOiBcIjM1cHhcIixcbiAgICB0b3A6IFwiMjJweFwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICBib3JkZXI6IFwiMFwiXG4gIH0sXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHpJbmRleDogXCIxXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgbGVmdDogXCIwXCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgekluZGV4OiBcIjNcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcIiMwMDBcIixcbiAgICAgIG9wYWNpdHk6IFwiLjhcIlxuICAgIH1cbiAgfSxcbiAgbGlzdDoge1xuICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgcGFkZGluZ0xlZnQ6IFwiMFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiMFwiLFxuICAgIHBhZGRpbmdCb3R0b206IFwiMFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgICBwb3NpdGlvbjogXCJ1bnNldFwiXG4gIH0sXG4gIGl0ZW06IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXMsJjp2aXNpdGVkLCZcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgfVxuICB9LFxuICBpdGVtTGluazoge1xuICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAzMDBtcyBsaW5lYXJcIixcbiAgICBtYXJnaW46IFwiMTBweCAxNXB4IDBcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgcGFkZGluZzogXCIxMHB4IDE1cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAuLi5kZWZhdWx0Rm9udFxuICB9LFxuICBpdGVtSWNvbjoge1xuICAgIHdpZHRoOiBcIjI0cHhcIixcbiAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgIGZvbnRTaXplOiBcIjI0cHhcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiMTVweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIGNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiXG4gIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgbWFyZ2luOiBcIjBcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIHdoaXRlRm9udDoge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICB9LFxuICBwdXJwbGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAuLi5wcmltYXJ5Qm94U2hhZG93LFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgIC4uLnByaW1hcnlCb3hTaGFkb3dcbiAgICB9XG4gIH0sXG4gIGJsdWU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMCwxODgsMjEyLC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMCwxODgsMjEyLC4yKVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDAsMTg4LDIxMiwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDAsMTg4LDIxMiwuMilcIlxuICAgIH1cbiAgfSxcbiAgZ3JlZW46IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoNzYsMTc1LDgwLC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoNzYsMTc1LDgwLC4yKVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDc2LDE3NSw4MCwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDc2LDE3NSw4MCwuMilcIlxuICAgIH1cbiAgfSxcbiAgb3JhbmdlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDI1NSwxNTIsMCwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDI1NSwxNTIsMCwuMilcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgyNTUsMTUyLDAsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgyNTUsMTUyLDAsLjIpXCJcbiAgICB9XG4gIH0sXG4gIHJlZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDI0NCw2Nyw1NCwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDI0NCw2Nyw1NCwuMilcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDI0NCw2Nyw1NCwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDI0NCw2Nyw1NCwuMilcIlxuICAgIH1cbiAgfSxcbiAgc2lkZWJhcldyYXBwZXI6IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGhlaWdodDogXCJjYWxjKDEwMHZoIC0gNzVweClcIixcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgd2lkdGg6IFwiMjYwcHhcIixcbiAgICB6SW5kZXg6IFwiNFwiLFxuICAgIG92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCJcbiAgfSxcbiAgYWN0aXZlUHJvOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgYm90dG9tOiBcIjEzcHhcIlxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXJTdHlsZTtcbiIsImltcG9ydCB7XG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Qm94U2hhZG93LFxuICBpbmZvQm94U2hhZG93LFxuICBzdWNjZXNzQm94U2hhZG93LFxuICB3YXJuaW5nQm94U2hhZG93LFxuICBkYW5nZXJCb3hTaGFkb3csXG4gIHJvc2VCb3hTaGFkb3dcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3Qgc25hY2tiYXJDb250ZW50U3R5bGUgPSB7XG4gIHJvb3Q6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBmbGV4V3JhcDogXCJ1bnNldFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgcGFkZGluZzogXCIxMHB4IDEwcHhcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMjBweFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICBjb2xvcjogXCIjNTU1NTU1XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCJcbiAgfSxcbiAgdG9wMjA6IHtcbiAgICB0b3A6IFwiMjBweFwiXG4gIH0sXG4gIHRvcDQwOiB7XG4gICAgdG9wOiBcIjQwcHhcIlxuICB9LFxuICBpbmZvOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMGQzZWVcIixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLi4uaW5mb0JveFNoYWRvd1xuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Y2I4NjBcIixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLi4uc3VjY2Vzc0JveFNoYWRvd1xuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmEyMWFcIixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLi4ud2FybmluZ0JveFNoYWRvd1xuICB9LFxuICBkYW5nZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y1NWE0ZVwiLFxuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAuLi5kYW5nZXJCb3hTaGFkb3dcbiAgfSxcbiAgcHJpbWFyeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjYWYyY2M1XCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC4uLnByaW1hcnlCb3hTaGFkb3dcbiAgfSxcbiAgcm9zZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWIzNTczXCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC4uLnJvc2VCb3hTaGFkb3dcbiAgfSxcbiAgbWVzc2FnZToge1xuICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBtYXhXaWR0aDogXCI4OSVcIlxuICB9LFxuICBjbG9zZToge1xuICAgIHdpZHRoOiBcIjExcHhcIixcbiAgICBoZWlnaHQ6IFwiMTFweFwiXG4gIH0sXG4gIGljb25CdXR0b246IHtcbiAgICB3aWR0aDogXCIyNHB4XCIsXG4gICAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgICBwYWRkaW5nOiBcIjBweFwiXG4gIH0sXG4gIGljb246IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgbGVmdDogXCIxNXB4XCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiNTAlXCIsXG4gICAgbWFyZ2luVG9wOiBcIi0xNXB4XCIsXG4gICAgd2lkdGg6IFwiMzBweFwiLFxuICAgIGhlaWdodDogXCIzMHB4XCJcbiAgfSxcbiAgaW5mb0ljb246IHtcbiAgICBjb2xvcjogXCIjMDBkM2VlXCJcbiAgfSxcbiAgc3VjY2Vzc0ljb246IHtcbiAgICBjb2xvcjogXCIjNWNiODYwXCJcbiAgfSxcbiAgd2FybmluZ0ljb246IHtcbiAgICBjb2xvcjogXCIjZmZhMjFhXCJcbiAgfSxcbiAgZGFuZ2VySWNvbjoge1xuICAgIGNvbG9yOiBcIiNmNTVhNGVcIlxuICB9LFxuICBwcmltYXJ5SWNvbjoge1xuICAgIGNvbG9yOiBcIiNhZjJjYzVcIlxuICB9LFxuICByb3NlSWNvbjoge1xuICAgIGNvbG9yOiBcIiNlYjM1NzNcIlxuICB9LFxuICBpY29uTWVzc2FnZToge1xuICAgIHBhZGRpbmdMZWZ0OiBcIjUwcHhcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc25hY2tiYXJDb250ZW50U3R5bGU7XG4iLCJpbXBvcnQge1xuICBkZWZhdWx0Rm9udCxcbiAgcHJpbWFyeUNvbG9yLFxuICBpbmZvQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvclxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCB0eXBvZ3JhcGh5U3R5bGUgPSB7XG4gIGRlZmF1bHRGb250U3R5bGU6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBmb250U2l6ZTogXCIxNHB4XCJcbiAgfSxcbiAgZGVmYXVsdEhlYWRlck1hcmdpbnM6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcbiAgfSxcbiAgcXVvdGU6IHtcbiAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxuICAgIG1hcmdpbjogXCIwIDAgMjBweFwiLFxuICAgIGZvbnRTaXplOiBcIjE3LjVweFwiLFxuICAgIGJvcmRlckxlZnQ6IFwiNXB4IHNvbGlkICNlZWVcIlxuICB9LFxuICBxdW90ZVRleHQ6IHtcbiAgICBtYXJnaW46IFwiMCAwIDEwcHhcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgfSxcbiAgcXVvdGVBdXRob3I6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgZm9udFNpemU6IFwiODAlXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3MTQzXCIsXG4gICAgY29sb3I6IFwiIzc3N1wiXG4gIH0sXG4gIG11dGVkVGV4dDoge1xuICAgIGNvbG9yOiBcIiM3NzdcIlxuICB9LFxuICBwcmltYXJ5VGV4dDoge1xuICAgIGNvbG9yOiBwcmltYXJ5Q29sb3JcbiAgfSxcbiAgaW5mb1RleHQ6IHtcbiAgICBjb2xvcjogaW5mb0NvbG9yXG4gIH0sXG4gIHN1Y2Nlc3NUZXh0OiB7XG4gICAgY29sb3I6IHN1Y2Nlc3NDb2xvclxuICB9LFxuICB3YXJuaW5nVGV4dDoge1xuICAgIGNvbG9yOiB3YXJuaW5nQ29sb3JcbiAgfSxcbiAgZGFuZ2VyVGV4dDoge1xuICAgIGNvbG9yOiBkYW5nZXJDb2xvclxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBvZ3JhcGh5U3R5bGU7XG4iLCJpbXBvcnQge1xuICBwcmltYXJ5Q29sb3IsXG4gIHByaW1hcnlCb3hTaGFkb3csXG4gIGRlZmF1bHRGb250XG59IGZyb20gXCIuLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IGRyb3Bkb3duU3R5bGUgPSB0aGVtZSA9PiAoe1xuICBidXR0b25MaW5rOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIzMHB4XCIsXG4gICAgICB3aWR0aDogXCJhdXRvXCJcbiAgICB9XG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgd2lkdGg6IFwiMjBweFwiLFxuICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgekluZGV4OiBcIjRcIixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgd2lkdGg6IFwiMzBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIGNvbG9yOiBcIiNhOWFmYmJcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIlxuICAgIH1cbiAgfSxcbiAgbGlua1RleHQ6IHtcbiAgICB6SW5kZXg6IFwiNFwiLFxuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIlxuICB9LFxuICBwb3BwZXJDbG9zZToge1xuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG4gIH0sXG4gIHBvb3BlclJlc3BvbnNpdmU6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xuICAgICAgekluZGV4OiBcIjE2NDBcIixcbiAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgICAgZmxvYXQ6IFwibm9uZVwiLFxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgbWFyZ2luVG9wOiBcIjBcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm9yZGVyOiBcIjBcIixcbiAgICAgIFdlYmtpdEJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgY29sb3I6IFwiYmxhY2tcIlxuICAgIH1cbiAgfSxcbiAgcG9vcGVyTmF2OiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIHBvc2l0aW9uOiBcInN0YXRpYyAhaW1wb3J0YW50XCIsXG4gICAgICBsZWZ0OiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICAgIHRvcDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgICB0cmFuc2Zvcm06IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICB3aWxsQ2hhbmdlOiBcIm5vbmUgIWltcG9ydGFudFwiLFxuICAgICAgXCImID4gZGl2XCI6IHtcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmUgIWltcG9ydGFudFwiLFxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjByZW1cIixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMHJlbVwiLFxuICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmUgIWltcG9ydGFudFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50ICFpbXBvcnRhbnRcIixcbiAgICAgICAgXCImIHVsIGxpXCI6IHtcbiAgICAgICAgICBjb2xvcjogXCIjRkZGICFpbXBvcnRhbnRcIixcbiAgICAgICAgICBtYXJnaW46IFwiMTBweCAxNXB4IDAhaW1wb3J0YW50XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIxMHB4IDE1cHggIWltcG9ydGFudFwiLFxuICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiaHNsYSgwLDAlLDc4JSwuMilcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRyb3Bkb3duOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIGJvcmRlcjogXCIwXCIsXG4gICAgYm94U2hhZG93OiBcIjAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNilcIixcbiAgICB0b3A6IFwiMTAwJVwiLFxuICAgIHpJbmRleDogXCIxMDAwXCIsXG4gICAgbWluV2lkdGg6IFwiMTYwcHhcIixcbiAgICBwYWRkaW5nOiBcIjVweCAwXCIsXG4gICAgbWFyZ2luOiBcIjJweCAwIDBcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgV2Via2l0QmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICBiYWNrZ3JvdW5kQ2xpcDogXCJwYWRkaW5nLWJveFwiXG4gIH0sXG4gIGRyb3Bkb3duSXRlbToge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxuICAgIG1hcmdpbjogXCIwIDVweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIycHhcIixcbiAgICBXZWJraXRUcmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcbiAgICBNb3pUcmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcbiAgICBPVHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgbGluZWFyXCIsXG4gICAgTXNUcmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgY2xlYXI6IFwiYm90aFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3MTQzXCIsXG4gICAgY29sb3I6IFwiIzMzM1wiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgaGVpZ2h0OiBcInVuc2V0XCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgLi4ucHJpbWFyeUJveFNoYWRvd1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3Bkb3duU3R5bGU7XG4iLCJpbXBvcnQge1xuICBkcmF3ZXJXaWR0aCxcbiAgdHJhbnNpdGlvbixcbiAgY29udGFpbmVyXG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IGFwcFN0eWxlID0gdGhlbWUgPT4gKHtcbiAgd3JhcHBlcjoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIlxuICB9LFxuICBtYWluUGFuZWw6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgXG4gICAgfSxcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgIC4uLnRyYW5zaXRpb24sXG4gICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgb3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIlxuICB9LFxuICBjb250ZW50OiB7XG4gICAgbWFyZ2luVG9wOiBcIjcwcHhcIixcbiAgICBwYWRkaW5nOiBcIjMwcHggMTVweFwiLFxuICAgIG1pbkhlaWdodDogXCJjYWxjKDEwMHZoIC0gMTIzcHgpXCJcbiAgfSxcbiAgY29udGFpbmVyLFxuICBtYXA6IHtcbiAgICBtYXJnaW5Ub3A6IFwiNzBweFwiXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHBTdHlsZTtcbiIsImltcG9ydCB7IHN1Y2Nlc3NDb2xvciB9IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IGRhc2hib2FyZFN0eWxlID0gKHRoZW1lKT0+KHtcbiAgc3VjY2Vzc1RleHQ6IHtcbiAgICBjb2xvcjogc3VjY2Vzc0NvbG9yXG4gIH0sXG4gIHVwQXJyb3dDYXJkQ2F0ZWdvcnk6IHtcbiAgICB3aWR0aDogXCIxNnB4XCIsXG4gICAgaGVpZ2h0OiBcIjE2cHhcIlxuICB9LFxuICBzdGF0czoge1xuICAgIGNvbG9yOiBcIiM5OTk5OTlcIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMjJweFwiLFxuICAgIFwiJiBzdmdcIjoge1xuICAgICAgdG9wOiBcIjRweFwiLFxuICAgICAgd2lkdGg6IFwiMTZweFwiLFxuICAgICAgaGVpZ2h0OiBcIjE2cHhcIixcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBtYXJnaW5SaWdodDogXCIzcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiM3B4XCJcbiAgICB9LFxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIHRvcDogXCI0cHhcIixcbiAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBtYXJnaW5SaWdodDogXCIzcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiM3B4XCJcbiAgICB9XG4gIH0sXG4gIGNhcmRDYXRlZ29yeToge1xuICAgIGNvbG9yOiBcIiM5OTk5OTlcIixcbiAgICBtYXJnaW46IFwiMFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCJcbiAgfSxcbiAgY2FyZENhdGVnb3J5V2hpdGU6IHtcbiAgICBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LC42MilcIixcbiAgICBtYXJnaW46IFwiMFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCJcbiAgfSxcbiAgY2FyZFRpdGxlOiB7XG4gICAgY29sb3I6IFwiIzNDNDg1OFwiLFxuICAgIG1hcmdpblRvcDogXCIwcHhcIixcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxuICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiM3B4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIFwiJiBzbWFsbFwiOiB7XG4gICAgICBjb2xvcjogXCIjNzc3XCIsXG4gICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgbGluZUhlaWdodDogXCIxXCJcbiAgICB9XG4gIH0sXG4gIGNhcmRUaXRsZVdoaXRlOiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIG1hcmdpblRvcDogXCIwcHhcIixcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxuICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiM3B4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIFwiJiBzbWFsbFwiOiB7XG4gICAgICBjb2xvcjogXCIjNzc3XCIsXG4gICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgbGluZUhlaWdodDogXCIxXCJcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5lcjp7XG4gICAgZGlzcGxheTpcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgd2lkdGg6XCI0MHB4XCIsXG4gICAgaGVpZ2h0OlwiNDBweFwiLFxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIGJhY2tncm91bmQ6J2xpbmVhci1ncmFkaWVudCg2MGRlZywgIzI2YzZkYSwgIzAwYWNjMSknLFxuICAgICcmIHN2Zyc6e1xuICAgICAgIGNvbG9yOicjZmZmJ1xuICAgIH0sXG4gICAgJyY6aG92ZXInOntcbiAgICAgIGJhY2tncm91bmQ6J2xpbmVhci1ncmFkaWVudCg2MGRlZywgIzFkOTdhNywgIzAwYWNjMSknLFxuICAgIH1cbiAgfSxcbiAgc2l6ZVNtYWxsOntcbiAgICBmb250U2l6ZTogXCIwLjgxMjVyZW1cIlxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkU3R5bGU7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9jb25zdGFudHMvVXNlci91c2VySW5mbydcbmltcG9ydCB7IGZldGNoUG9zdCAsZmV0Y2hHZXR9IGZyb20gJy4uLy4uLy4uL3B1YmxpYy9odHRwJ1xuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2FwaSdcblxuZXhwb3J0IGNvbnN0IEZfQ09NTU9OX0ZFVENIX0xPR0lOX1VTRVJfQUNUSU9OID0gKHBhcmFtcyk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoLyosIGdldFN0YXRlKi8pID0+IHtcbiAgICAgICAgLy8gbGV0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgZmV0Y2hQb3N0KEFQSS5sb2dpblVzZXIscGFyYW1zKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgaWYoanNvbi5zdGF0dXMpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBGX0NPTU1PTl9GRVRDSF9BRERfVVNFUl9BQ1RJT04gPSAocGFyYW1zLGNhbGxiYWNrKT0+e1xuICAgIHJldHVybiAoZGlzcGF0Y2gvKiwgZ2V0U3RhdGUqLykgPT4ge1xuICAgICAgICAvLyBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBmZXRjaFBvc3QoQVBJLmFkZFVzZXIscGFyYW1zKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgaWYoanNvbi5zdGF0dXMpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soanNvbi50eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgRl9DT01NT05fRkVUQ0hfTU9ESUZZX1VTRVJfQUNUSU9OID0gKHBhcmFtcyxjYWxsYmFjayk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoLyosIGdldFN0YXRlKi8pID0+IHtcbiAgICAgICAgLy8gbGV0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgZmV0Y2hQb3N0KEFQSS5tb2RpZnlVc2VyLHBhcmFtcykudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgIGlmKGpzb24uc3RhdHVzKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGpzb24udHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IEZfQ09NTU9OX0ZFVENIX0xPR09VVF9VU0VSX0FDVElPTiA9IChwYXJhbXMpPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaC8qLCBnZXRTdGF0ZSovKSA9PiB7XG4gICAgICAgIC8vIGxldCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGZldGNoUG9zdChBUEkubG9nb3V0VXNlcixwYXJhbXMpLnRoZW4ocmVzID0+IHJlcy5kYXRhKS50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICBpZihqc29uLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZfQ09NTU9OX0ZFVENIX1VTRVJfTUVTU0FHRV9BQ1RJT04gPSAocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaC8qLCBnZXRTdGF0ZSovKSA9PiB7XG4gICAgICAgIGlmKCF3aW5kb3cuX19VU0VSX0lORk9fXykgcmV0dXJuIFxuICAgICAgICBmZXRjaFBvc3QoQVBJLmdldE1lc3NhZ2UpLnRoZW4ocmVzID0+IHJlcy5kYXRhKS50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGpzb24pXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBGX0NPTU1PTl9GRVRDSF9VU0VSX1JFQURfTUVTU0FHRV9BQ1RJT04gPSAoX2lkLHJlc29sdmUscmVqZWN0KT0+e1xuICAgIHJldHVybiAoZGlzcGF0Y2gvKiwgZ2V0U3RhdGUqLykgPT4ge1xuICAgICAgICBpZighd2luZG93Ll9fVVNFUl9JTkZPX18pIHJldHVybiBcbiAgICAgICAgZmV0Y2hHZXQoYCR7QVBJLnJlYWRNZXNzYWdlfS8ke19pZH1gKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShqc29uKVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgY2FyZFN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2NhcmRTdHlsZS5qc3hcIjtcblxuZnVuY3Rpb24gQ2FyZCh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3Qge1xuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHBsYWluLFxuICAgIHByb2ZpbGUsXG4gICAgY2hhcnQsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuY2FyZF06IHRydWUsXG4gICAgW2NsYXNzZXMuY2FyZFBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzZXMuY2FyZFByb2ZpbGVdOiBwcm9maWxlLFxuICAgIFtjbGFzc2VzLmNhcmRDaGFydF06IGNoYXJ0LFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZENsYXNzZXN9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHByb2ZpbGU6IFByb3BUeXBlcy5ib29sLFxuICBjaGFydDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoY2FyZFN0eWxlKShDYXJkKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgY2FyZEJvZHlTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkQm9keVN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBDYXJkQm9keSh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBwbGFpbiwgcHJvZmlsZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRCb2R5Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRCb2R5XTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy5jYXJkQm9keVBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzZXMuY2FyZEJvZHlQcm9maWxlXTogcHJvZmlsZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRCb2R5Q2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHByb2ZpbGU6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGNhcmRCb2R5U3R5bGUpKENhcmRCb2R5KTtcbiIsIlxuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5cbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIlxuaW1wb3J0IHsgVG9vbHRpcCwgSGlkZGVuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXg6ICcxIDEgMzMuMzMzMzMlJyxcbiAgICBtYXhXaWR0aDonMzMuMzMzMzMlJywgICAgXG4gICAgZGlzcGxheTpcImJsb2NrXCJcblxuICB9LFxuICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpJzp7XG4gICAgICByb290OiB7XG4gICAgICAgIGZsZXg6ICcxIDEgNTAlJyxcbiAgICAgICAgbWF4V2lkdGg6JzUwJScsICAgICBcbiAgICAgICAgZGlzcGxheTpcImJsb2NrXCJcbiAgICAgIH1cbiAgfSxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSc6e1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXg6ICcxIDEgMTAwJScsXG4gICAgICBtYXhXaWR0aDonMTAwJScsICAgICBcbiAgICAgIGRpc3BsYXk6XCJibG9ja1wiXG4gICAgfVxuICB9LFxuICBwYXBlcjp7XG4gICAgbWFyZ2luOicxMHB4IDEwcHgnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG4gICAgaGVpZ2h0OlwiMTMwcHhcIixcbiAgICBvdmVyZmxvdzonaGlkZGVuJyxcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcyxib3JkZXIgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMnLFxuICAgICdib3JkZXItcmFkaXVzJzpcIjZweFwiLFxuICAgICcmOmhvdmVyJzp7XG4gICAgICAgICdib3gtc2hhZG93JzogXCIwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKVwiXG4gICAgfSxcbiAgICAnJjpob3ZlciBidXR0b24nOntcbiAgICAgICAgZGlzcGxheTonaW5saW5lLWZsZXgnXG4gICAgfVxuICB9LFxuICBjb250YWluZXI6e1xuICAgIG92ZXJmbG93OidoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzonZWxsaXBzaXMnXG4gIH0sXG4gIGltZ2JveDp7XG4gICAgd2lkdGg6MTI4LFxuICAgIGhlaWdodDoxMjgsXG4gICAgbWFyZ2luUmlnaHQ6MTBcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICB3aWR0aDogMTI4LFxuICAgIGhlaWdodDogMTI4LFxuICB9LFxuICBcbiAgaW1nOiB7XG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuICB9LFxuICBjb250ZW50OntcbiAgICAgIGZsZXg6JzEgMSBhdXRvJyxcbiAgICAgIG1heFdpZHRoOidub25lJyxcbiAgICAgIHdpZHRoOidhdXRvJ1xuICB9LFxuICBkZXNjcmlwdGlvbjp7XG4gICAgaGVpZ2h0OlwiMjBweFwiLFxuICAgIG92ZXJmbG93OidoaWRkZW4nXG4gIH0sXG4gIGF1dGhvcjp7XG4gICAgaGVpZ2h0OlwiMjBweFwiLFxuICAgIG92ZXJmbG93OidoaWRkZW4nIFxuICB9LFxuICBidXR0b246e1xuICAgICAgd2lkdGg6JzQwcHgnLFxuICAgICAgbWluV2lkdGg6JzQwcHgnLFxuICAgICAgZGlzcGxheTonbm9uZSdcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIENvbXBsZXhHcmlkKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyAsaW5mbyxvbk9wZW5FZGl0RGlhbG9nLGRlbGV0ZUl0ZW19ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGEgICB0YXJnZXQ9e2luZm8udGFyZ2V0fSBocmVmPXtpbmZvLmFkZD8namF2YXNjcmlwdDp2b2lkKDApJzppbmZvLmxpbmt9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICA8UGFwZXIgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHdyYXA9eydub3dyYXAnfSBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXs4fSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSA+XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ2JveH0+XG4gICAgICAgICAgPEJ1dHRvbkJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gYWx0PVwiY29tcGxleFwiIHNyYz17aW5mby5pY29uP2luZm8uaWNvbjppbmZvLmltZ30gd2lkdGg9JzEyOHB4JyBoZWlnaHQ9JzEyOHB4Jy8+XG4gICAgICAgICAgPC9CdXR0b25CYXNlPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IHNtIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cyBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17OH0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIG5vV3JhcD5cbiAgICAgICAgICAgICAgICB7aW5mby50aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT57aW5mby5kZXNjcmlwdGlvbj9pbmZvLmRlc2NyaXB0aW9uOihpbmZvLmFkZD8nJzon5pqC5peg5o+P6L+wJyl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yfT57aW5mby5hdXRob3I/J+iusOW9le+8micraW5mby5hdXRob3Iubmlja25hbWU6Jyd9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuX19VU0VSX0lORk9fXyAmJiB3aW5kb3cuX19VU0VSX0lORk9fXy5faWQgPT0gaW5mby5hdXRob3IuX2lkPyhcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuS/ruaUueWGheWuuVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbk1vdXNlRG93bj17KGV2KT0+e29uT3BlbkVkaXREaWFsb2coaW5mbyk7ZXYubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7ZXYuZGVmYXVsdFByZXZlbnRlZDt9fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSA+PEVkaXRJY29uIGNvbG9yPXsnYWN0aW9uJ30vPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuWIoOmZpOWGheWuuVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXsoZXYpPT57ZGVsZXRlSXRlbShpbmZvKTtldi5uYXRpdmVFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtldi5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtldi5uYXRpdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO319PjxEZWxldGVJY29uIGNvbG9yPXsnYWN0aW9uJ30vPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICk6bnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICBcbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG4gICAgPC9hPlxuICApO1xufVxuXG5Db21wbGV4R3JpZC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb21wbGV4R3JpZCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBjYXJkRm9vdGVyU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY2FyZEZvb3RlclN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBDYXJkRm9vdGVyKHsgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7XG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgcGxhaW4sXG4gICAgcHJvZmlsZSxcbiAgICBzdGF0cyxcbiAgICBjaGFydCxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcbiAgY29uc3QgY2FyZEZvb3RlckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5jYXJkRm9vdGVyXTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy5jYXJkRm9vdGVyUGxhaW5dOiBwbGFpbixcbiAgICBbY2xhc3Nlcy5jYXJkRm9vdGVyUHJvZmlsZV06IHByb2ZpbGUsXG4gICAgW2NsYXNzZXMuY2FyZEZvb3RlclN0YXRzXTogc3RhdHMsXG4gICAgW2NsYXNzZXMuY2FyZEZvb3RlckNoYXJ0XTogY2hhcnQsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkRm9vdGVyQ2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWluOiBQcm9wVHlwZXMuYm9vbCxcbiAgcHJvZmlsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHN0YXRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hhcnQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGNhcmRGb290ZXJTdHlsZSkoQ2FyZEZvb3Rlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IGNhcmRIZWFkZXJTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkSGVhZGVyU3R5bGUuanN4XCI7XG5cbmZ1bmN0aW9uIENhcmRIZWFkZXIoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzLFxuICAgIGNsYXNzTmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBjb2xvcixcbiAgICBwbGFpbixcbiAgICBzdGF0cyxcbiAgICBpY29uLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuICBjb25zdCBjYXJkSGVhZGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJdOiB0cnVlLFxuICAgIFtjbGFzc2VzW2NvbG9yICsgXCJDYXJkSGVhZGVyXCJdXTogY29sb3IsXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlclBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlclN0YXRzXTogc3RhdHMsXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlckljb25dOiBpY29uLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEhlYWRlckNsYXNzZXN9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIndhcm5pbmdcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwicm9zZVwiXG4gIF0pLFxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHN0YXRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoY2FyZEhlYWRlclN0eWxlKShDYXJkSGVhZGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgY2FyZEljb25TdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkSWNvblN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBDYXJkSWNvbih7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBjb2xvciwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRJY29uQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRJY29uXTogdHJ1ZSxcbiAgICBbY2xhc3Nlc1tjb2xvciArIFwiQ2FyZEhlYWRlclwiXV06IGNvbG9yLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEljb25DbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmRJY29uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwid2FybmluZ1wiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJyb3NlXCJcbiAgXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoY2FyZEljb25TdHlsZSkoQ2FyZEljb24pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8vIG1hdGVyaWFsLXVpIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5cbmltcG9ydCBidXR0b25TdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9idXR0b25TdHlsZS5qc3hcIjtcbmZ1bmN0aW9uIFJlZ3VsYXJCdXR0b24oeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzLFxuICAgIGNvbG9yLFxuICAgIHJvdW5kLFxuICAgIGNoaWxkcmVuLFxuICAgIGRpc2FibGVkLFxuICAgIHNpbXBsZSxcbiAgICBzaXplLFxuICAgIGJsb2NrLFxuICAgIGxpbmssXG4gICAganVzdEljb24sXG4gICAgY2xhc3NOYW1lLFxuICAgIG11aUNsYXNzZXMsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGJ0bkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5idXR0b25dOiB0cnVlLFxuICAgIFtjbGFzc2VzW3NpemVdXTogc2l6ZSxcbiAgICBbY2xhc3Nlc1tjb2xvcl1dOiBjb2xvcixcbiAgICBbY2xhc3Nlcy5yb3VuZF06IHJvdW5kLFxuICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgW2NsYXNzZXMuc2ltcGxlXTogc2ltcGxlLFxuICAgIFtjbGFzc2VzLmJsb2NrXTogYmxvY2ssXG4gICAgW2NsYXNzZXMubGlua106IGxpbmssXG4gICAgW2NsYXNzZXMuanVzdEljb25dOiBqdXN0SWNvbixcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gey4uLnJlc3R9IGNsYXNzZXM9e211aUNsYXNzZXN9IGNsYXNzTmFtZT17YnRuQ2xhc3Nlc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9CdXR0b24+XG4gICk7XG59XG5cblJlZ3VsYXJCdXR0b24ucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicHJpbWFyeVwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJyb3NlXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICAgIFwidHJhbnNwYXJlbnRcIlxuICBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInNtXCIsIFwibGdcIl0pLFxuICBzaW1wbGU6IFByb3BUeXBlcy5ib29sLFxuICByb3VuZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sLFxuICBsaW5rOiBQcm9wVHlwZXMuYm9vbCxcbiAganVzdEljb246IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vIHVzZSB0aGlzIHRvIHBhc3MgdGhlIGNsYXNzZXMgcHJvcHMgZnJvbSBNYXRlcmlhbC1VSVxuICBtdWlDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGJ1dHRvblN0eWxlKShSZWd1bGFyQnV0dG9uKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBDbGVhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyXCI7XG5pbXBvcnQgQ2hlY2sgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja1wiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgY3VzdG9tSW5wdXRTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jdXN0b21JbnB1dFN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBDdXN0b21JbnB1dCh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3Qge1xuICAgIGNsYXNzZXMsXG4gICAgZm9ybUNvbnRyb2xQcm9wcyxcbiAgICBsYWJlbFRleHQsXG4gICAgaWQsXG4gICAgbGFiZWxQcm9wcyxcbiAgICBpbnB1dFByb3BzLFxuICAgIGVycm9yLFxuICAgIHN1Y2Nlc3MsXG4gICAgY2hpbGRyZW5cbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtcIiBcIiArIGNsYXNzZXMubGFiZWxSb290RXJyb3JdOiBlcnJvcixcbiAgICBbXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdFN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvclxuICB9KTtcbiAgY29uc3QgdW5kZXJsaW5lQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLnVuZGVybGluZUVycm9yXTogZXJyb3IsXG4gICAgW2NsYXNzZXMudW5kZXJsaW5lU3VjY2Vzc106IHN1Y2Nlc3MgJiYgIWVycm9yLFxuICAgIFtjbGFzc2VzLnVuZGVybGluZV06IHRydWVcbiAgfSk7XG4gIGNvbnN0IG1hcmdpblRvcCA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLm1hcmdpblRvcF06IGxhYmVsVGV4dCA9PT0gdW5kZWZpbmVkXG4gIH0pO1xuICBjb25zdCB0ZXh0SW5kZW50RmlsZSA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLnRleHRJbmRlbnRGaWxlXTppbnB1dFByb3BzLnR5cGU9PSdmaWxlJ1xuICB9KVxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbFxuICAgICAgey4uLmZvcm1Db250cm9sUHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2Zvcm1Db250cm9sUHJvcHMuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc2VzLmZvcm1Db250cm9sfVxuICAgID5cbiAgICAgIHtsYWJlbFRleHQgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxSb290ICsgbGFiZWxDbGFzc2VzfVxuICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsVGV4dH1cbiAgICAgICAgPC9JbnB1dExhYmVsPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8SW5wdXRcbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IG1hcmdpblRvcCxcbiAgICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCxcbiAgICAgICAgICB1bmRlcmxpbmU6IHVuZGVybGluZUNsYXNzZXMsXG4gICAgICAgICAgaW5wdXQ6dGV4dEluZGVudEZpbGVcbiAgICAgICAgfX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgICB7ZXJyb3IgPyAoXG4gICAgICAgIDxDbGVhciBjbGFzc05hbWU9e2NsYXNzZXMuZmVlZGJhY2sgKyBcIiBcIiArIGNsYXNzZXMubGFiZWxSb290RXJyb3J9IC8+XG4gICAgICApIDogc3VjY2VzcyA/IChcbiAgICAgICAgPENoZWNrIGNsYXNzTmFtZT17Y2xhc3Nlcy5mZWVkYmFjayArIFwiIFwiICsgY2xhc3Nlcy5sYWJlbFJvb3RTdWNjZXNzfSAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKTtcbn1cblxuQ3VzdG9tSW5wdXQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxhYmVsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGN1c3RvbUlucHV0U3R5bGUpKEN1c3RvbUlucHV0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG4vLyBtYXRlcmlhbC11aSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBUYWJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCI7XG5pbXBvcnQgVGFiIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NhcmQvQ2FyZC5qc3hcIjtcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiLi4vQ2FyZC9DYXJkQm9keS5qc3hcIjtcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCIuLi9DYXJkL0NhcmRIZWFkZXIuanN4XCI7XG5cbmltcG9ydCBjdXN0b21UYWJzU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY3VzdG9tVGFic1N0eWxlLmpzeFwiO1xuXG5jbGFzcyBDdXN0b21UYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IDBcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc2VzLFxuICAgICAgaGVhZGVyQ29sb3IsXG4gICAgICBwbGFpblRhYnMsXG4gICAgICB0YWJzLFxuICAgICAgdGl0bGUsXG4gICAgICBydGxBY3RpdmVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBjbGFzc05hbWVzKHtcbiAgICAgIFtjbGFzc2VzLmNhcmRUaXRsZV06IHRydWUsXG4gICAgICBbY2xhc3Nlcy5jYXJkVGl0bGVSVExdOiBydGxBY3RpdmVcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmQgcGxhaW49e3BsYWluVGFic30gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj17aGVhZGVyQ29sb3J9IHBsYWluPXtwbGFpblRhYnN9PlxuICAgICAgICAgIHt0aXRsZSAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmRUaXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy50YWJzUm9vdCxcbiAgICAgICAgICAgICAgaW5kaWNhdG9yOiBjbGFzc2VzLmRpc3BsYXlOb25lLFxuICAgICAgICAgICAgICBzY3JvbGxCdXR0b25zOiBjbGFzc2VzLmRpc3BsYXlOb25lXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0YWJzLm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIHZhciBpY29uID0ge307XG4gICAgICAgICAgICAgIGlmIChwcm9wLnRhYkljb24pIHtcbiAgICAgICAgICAgICAgICBpY29uID0ge1xuICAgICAgICAgICAgICAgICAgaWNvbjogPHByb3AudGFiSWNvbiAvPlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudGFiUm9vdEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250YWluZXI6IGNsYXNzZXMudGFiTGFiZWxDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjbGFzc2VzLnRhYkxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogY2xhc3Nlcy50YWJTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogY2xhc3Nlcy50YWJXcmFwcGVyXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17cHJvcC50YWJOYW1lfVxuICAgICAgICAgICAgICAgICAgey4uLmljb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAge3RhYnMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9Pntwcm9wLnRhYkNvbnRlbnR9PC9kaXY+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxufVxuXG5DdXN0b21UYWJzLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoZWFkZXJDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIndhcm5pbmdcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwicHJpbWFyeVwiXG4gIF0pLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFiczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRhYk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHRhYkljb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgdGFiQ29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICAgIH0pXG4gICksXG4gIHJ0bEFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWluVGFiczogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoY3VzdG9tVGFic1N0eWxlKShDdXN0b21UYWJzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIlxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBkaWFsb2dTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9kaWFsb2dTdHlsZS5qc3hcIjtcblxuY2xhc3MgRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGxldCB7Y2hpbGRyZW4sbXVpQ2xhc3NlcyxvcGVuLC4uLnJlc3R9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybihcbiAgICAgIDxEaWFsb2cgey4uLnJlc3R9IG9wZW49e29wZW59IGNsYXNzZXM9e211aUNsYXNzZXN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0RpYWxvZz5cbiAgICApICBcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nU3R5bGUpKERpYWxvZ0NvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIlxuaW1wb3J0IERpYWxvZ0FjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgZGlhbG9nQWN0aW9uU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZGlhbG9nQWN0aW9uU3R5bGUuanN4XCI7XG5cblxuY2xhc3MgRGlhbG9nQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGxldCB7Y2hpbGRyZW4sLi4ucmVzdH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgICAgPERpYWxvZ0FjdGlvbiB7Li4ucmVzdH0gPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0RpYWxvZ0FjdGlvbj5cbiAgICApICBcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nQWN0aW9uU3R5bGUpKERpYWxvZ0FjdGlvbkNvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgZGlhbG9nQ29udGVudFN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2RpYWxvZ0NvbnRlbnRTdHlsZS5qc3hcIjtcblxuXG5jbGFzcyBEaWFsb2dDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGxldCB7Y2hpbGRyZW4sLi4ucmVzdH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgICAgPERpYWxvZ0NvbnRlbnQgey4uLnJlc3R9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgKSAgXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ0NvbnRlbnRTdHlsZSkoRGlhbG9nQ29udGVudENvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgZGlhbG9nVGl0bGVTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9kaWFsb2dUaXRsZVN0eWxlLmpzeFwiO1xuXG5cbmNsYXNzIERpYWxvZ1RpdGxlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGxldCB7Y2hpbGRyZW4sLi4ucmVzdH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgICAgPERpYWxvZ1RpdGxlIHsuLi5yZXN0fSA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRGlhbG9nVGl0bGU+XG4gICAgKSAgXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ1RpdGxlU3R5bGUpKERpYWxvZ1RpdGxlQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IGZvb3RlclN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2Zvb3RlclN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBGb290ZXIoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PlxuICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lQmxvY2t9PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N1bmpwMTIzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrfT5cbiAgICAgICAgICAgICAgICBnaXRodWJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lQmxvY2t9PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY25ibG9ncy5jb20vc2pwdGVjaC9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvY2t9PlxuICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHR9PlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgJmNvcHk7IHsxOTAwICsgbmV3IERhdGUoKS5nZXRZZWFyKCl9e1wiIFwifVxuICAgICAgICAgICDorrDlvZXkvaDnmoTlv6vkuZBcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZm9vdGVyU3R5bGUpKEZvb3Rlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBncmlkOiB7XG4gICAgbWFyZ2luOiBcIjAgLTE1cHggIWltcG9ydGFudFwiLFxuICAgIHdpZHRoOiBcInVuc2V0XCJcbiAgfSxcbiAgYWRkQnV0dG9uOntcbiAgICB3aWR0aDpcIjE3MHB4XCJcbiAgfVxufTtcblxuZnVuY3Rpb24gR3JpZENvbnRhaW5lcihwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGNoaWxkcmVuLCBhZGRCdXR0b24sLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHsuLi5yZXN0fSBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZ3JpZH0gJHthZGRCdXR0b24/Y2xhc3Nlcy5hZGRCdXR0b246Jyd9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlKShHcmlkQ29udGFpbmVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGdyaWQ6IHtcbiAgICBwYWRkaW5nOiBcIjAgMTVweCAhaW1wb3J0YW50XCJcbiAgfVxufTtcblxuZnVuY3Rpb24gR3JpZEl0ZW0oeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGl0ZW0gey4uLnJlc3R9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGUpKEdyaWRJdGVtKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXJMaW5rc0NvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9oZWFkZXIvaGVhZGVyTGlua3NDb250YWluZXJcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQ3VzdG9tQnV0dG9ucy9CdXR0b24uanN4XCI7XG5cbmltcG9ydCBoZWFkZXJTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9oZWFkZXJTdHlsZS5qc3hcIjtcblxuZnVuY3Rpb24gSGVhZGVyKHsgLi4ucHJvcHMgfSkge1xuICBmdW5jdGlvbiBtYWtlQnJhbmQoKSB7XG4gICAgdmFyIG5hbWU7XG4gICAgcHJvcHMucm91dGVzLm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICBpZiAocHJvcC5wYXRoID09PSBwcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICBuYW1lID0gcHJvcC5uYXZiYXJOYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgY29uc3QgeyBjbGFzc2VzLCBjb2xvciB9ID0gcHJvcHM7XG4gIGNvbnN0IGFwcEJhckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbXCIgXCIgKyBjbGFzc2VzW2NvbG9yXV06IGNvbG9yXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhciArIGFwcEJhckNsYXNzZXN9PlxuICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXh9PlxuICAgICAgICAgIHsvKiBIZXJlIHdlIGNyZWF0ZSBuYXZiYXIgYnJhbmQsIGJhc2VkIG9uIHJvdXRlIG5hbWUgKi99XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInRyYW5zcGFyZW50XCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAge21ha2VCcmFuZCgpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhpZGRlbiBzbURvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICA8SGVhZGVyTGlua3NDb250YWluZXIgLz5cbiAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIDxIaWRkZW4gbWRVcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9IaWRkZW4+XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgPC9BcHBCYXI+XG4gICk7XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJwcmltYXJ5XCIsIFwiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCJdKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhoZWFkZXJTdHlsZSkoSGVhZGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCI7XG5pbXBvcnQgR3JvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiO1xuaW1wb3J0IEhpZGRlbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCI7XG5pbXBvcnQgUG9wcGVycyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBQZXJzb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJzb25cIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcIi4uL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0LmpzeFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQ3VzdG9tQnV0dG9ucy9CdXR0b24uanN4XCI7XG5pbXBvcnQgQ2hlY2tib3hMYWJlbHMgZnJvbSBcIi4uL1NlbGVjdGlvbi9jaGVja2JveExhYmVsc1wiXG5pbXBvcnQgVXNlckNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9Vc2VyL3VzZXJDb250YWluZXJcIlxuXG5pbXBvcnQgaGVhZGVyTGlua3NTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9oZWFkZXJMaW5rc1N0eWxlLmpzeFwiO1xuXG5jbGFzcyBIZWFkZXJMaW5rcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW5NZXNzYWdlOiBmYWxzZSxcbiAgICBvcGVuUGVyc29uOiBmYWxzZSxcbiAgICBvcGVuVXNlckluZm86IGZhbHNlLFxuICAgIHNob3dTZWFyY2hDb25kaXRpb246ZmFsc2UsXG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIGtleXdvcmQ6JycsXG4gICAgc2VhcmNoQ2F0ZWdvcnk6W3tcbiAgICAgIGxhYmVsOifnsbsnLHZhbHVlOidjYXRlZ29yeScsY2hlY2tlZDpmYWxzZVxuICAgIH0se1xuICAgICAgbGFiZWw6J+WIhuS6qycsdmFsdWU6J3NoYXJlJyxjaGVja2VkOmZhbHNlXG4gICAgfV1cbiAgfTtcbiAgaGFuZGxlTWVzc2FnZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IG9wZW5NZXNzYWdlOiAhc3RhdGUub3Blbk1lc3NhZ2UgfSkpO1xuICB9O1xuICBoYW5kbGVQZXJzb25Ub2dnbGUgPSAoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cuX19VU0VSX0lORk9fXyB8fCAhd2luZG93Ll9fVVNFUl9JTkZPX18uX2lkKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoeyBvcGVuVXNlckluZm86ICFzdGF0ZS5vcGVuVXNlckluZm8gfSkpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IG9wZW5QZXJzb246ICFzdGF0ZS5vcGVuUGVyc29uLCBvcGVuVXNlckluZm86IGZhbHNlIH0pKTtcbiAgfTtcbiAgaGFuZGxlUGVyc29uQ2xvc2UgPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLnBlcnNvbkVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuUGVyc29uOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG4gIGhhbmRsZU1lc3NhZ2VDbG9zZSA9IGV2ZW50ID0+IHtcbiAgICBpZiAoIXRoaXMubWVzc2FnZUVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTWVzc2FnZTogZmFsc2UgfSk7XG4gICAgfVxuICB9XG4gIG9uU2VhcmNoQ2hhbmdlID0gZXZlbnQgPT57XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGtleXdvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuICBvbkxvZ291dCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoTG9nb3V0VXNlcigpXG4gIH1cbiAgcmVhZE1lc3NhZ2UobXNnKSB7XG4gICAgaWYgKG1zZy50eXBlID09IDApIHtcbiAgICAgIHdpbmRvdy5vcGVuKG1zZy5saW5rLCAnX2JsYW5rJylcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5mZXRjaFJlYWRNZXNzYWdlKG1zZy5faWQpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiB0aGlzLnN0YXRlLm1lc3NhZ2VzLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UuX2lkICE9IG1zZy5faWQpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgb25Nb2RpZnlVc2VyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgb3BlblVzZXJJbmZvOiAhc3RhdGUub3BlblVzZXJJbmZvIH0pKTtcbiAgfVxuICBvblNlYXJjaENsaWNrKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaEVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U2VhcmNoQ29uZGl0aW9uOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cbiAgb25TZWFyY2hGb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IHNob3dTZWFyY2hDb25kaXRpb246IHRydWUgfSkpO1xuICB9XG4gIG9uU2VsZWN0U2VhcmNoQ2F0ZWdvcnkoY2F0ZWdvcnkpe1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgc2VhcmNoQ2F0ZWdvcnk6IHN0YXRlLnNlYXJjaENhdGVnb3J5Lm1hcChjYXQ9PntcbiAgICAgICAgaWYoY2F0LnZhbHVlID09IGNhdGVnb3J5LnZhbHVlKXtcbiAgICAgICAgICBjYXQuY2hlY2tlZCA9ICFjYXQuY2hlY2tlZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXRcbiAgICB9KSB9KSk7XG4gIH1cbiAgb25CdG5TZWFyY2hDbGljaygpe1xuICAgIGNvbnN0IHsga2V5d29yZCAsIHNlYXJjaENhdGVnb3J5IH0gPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dTZWFyY2hDb25kaXRpb246IGZhbHNlIH0pO1xuICAgIHRoaXMucHJvcHMuZmV0Y2hTZWFyY2goe1xuICAgICAgICBrZXl3b3JkOmtleXdvcmRcbiAgICB9KVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hHZXRVc2VyTWVzc2FnZSgpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIGlmIChqc29uLnN0YXR1cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczoganNvbi5yZXNcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG9wZW5NZXNzYWdlLCBvcGVuUGVyc29uLCBvcGVuVXNlckluZm8sIG1lc3NhZ2VzICxzaG93U2VhcmNoQ29uZGl0aW9uICxzZWFyY2hDYXRlZ29yeX0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hXcmFwcGVyfSByZWY9e25vZGU9PnRoaXMuc2VhcmNoRWw9bm9kZX0gPlxuICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e3RoaXMub25TZWFyY2hDbGljay5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8Q3VzdG9tSW5wdXRcbiAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLm1hcmdpbiArIFwiIFwiICsgY2xhc3Nlcy5zZWFyY2hcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6dGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIG9uRm9jdXM6dGhpcy5vblNlYXJjaEZvY3VzLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgPENoZWNrYm94TGFiZWxzIGhpZGU9eyFzaG93U2VhcmNoQ29uZGl0aW9ufSBoYW5kbGVDaGFuZ2UgPSB7dGhpcy5vblNlbGVjdFNlYXJjaENhdGVnb3J5LmJpbmQodGhpcyl9IGNoZWNrYm94cz17c2VhcmNoQ2F0ZWdvcnl9Lz5cbiAgICAgICAgICA8L0N1c3RvbUlucHV0PlxuICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIndoaXRlXCIgYXJpYS1sYWJlbD1cImVkaXRcIiBqdXN0SWNvbiByb3VuZCBvbkNsaWNrPXt0aGlzLm9uQnRuU2VhcmNoQ2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHRvPXsnL3ZpZXcvcHVibGljJ31cbiAgICAgICAgICBhY3RpdmVTdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6IHdpbmRvdy5pbm5lcldpZHRoID4gOTU5ID8gXCIjNTU1NTU1XCIgOiBcIndoaXRlXCJcbiAgICAgICAgICB9fVxuXG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb2xvcj17d2luZG93LmlubmVyV2lkdGggPiA5NTkgPyBcInRyYW5zcGFyZW50XCIgOiBcIndoaXRlXCJ9XG4gICAgICAgICAgICBqdXN0SWNvbj17d2luZG93LmlubmVyV2lkdGggPiA5NTl9XG4gICAgICAgICAgICBzaW1wbGU9eyEod2luZG93LmlubmVyV2lkdGggPiA5NTkpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRhc2hib2FyZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uTGlua31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGFzaGJvYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cbiAgICAgICAgICAgIDxIaWRkZW4gbWRVcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RleHR9PuS4u+mhtTwvcD5cbiAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1hbmFnZXJ9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblJlZj17bm9kZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUVsID0gbm9kZTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb2xvcj17d2luZG93LmlubmVyV2lkdGggPiA5NTkgPyBcInRyYW5zcGFyZW50XCIgOiBcIndoaXRlXCJ9XG4gICAgICAgICAgICBqdXN0SWNvbj17d2luZG93LmlubmVyV2lkdGggPiA5NTl9XG4gICAgICAgICAgICBzaW1wbGU9eyEod2luZG93LmlubmVyV2lkdGggPiA5NTkpfVxuICAgICAgICAgICAgYXJpYS1vd25zPXtvcGVuTWVzc2FnZSA/IFwibWVudS1saXN0LWdyb3ctbWVzc2FnZVwiIDogbnVsbH1cbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVzc2FnZVRvZ2dsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MaW5rfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25zIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXMubGVuZ3RoID8gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbnN9PnttZXNzYWdlcy5sZW5ndGh9PC9zcGFuPiA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxIaWRkZW4gbWRVcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgICAgICA8cCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RleHR9PlxuICAgICAgICAgICAgICAgIOa2iOaBr1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8UG9wcGVyc1xuICAgICAgICAgICAgb3Blbj17b3Blbk1lc3NhZ2V9XG4gICAgICAgICAgICBhbmNob3JFbD17dGhpcy5tZXNzYWdlRWx9XG4gICAgICAgICAgICB0cmFuc2l0aW9uXG4gICAgICAgICAgICBkaXNhYmxlUG9ydGFsXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBjbGFzc05hbWVzKHsgW2NsYXNzZXMucG9wcGVyQ2xvc2VdOiAhb3Blbk1lc3NhZ2UgfSkgK1xuICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgIGNsYXNzZXMucG9vcGVyTmF2XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcbiAgICAgICAgICAgICAgPEdyb3dcbiAgICAgICAgICAgICAgICB7Li4uVHJhbnNpdGlvblByb3BzfVxuICAgICAgICAgICAgICAgIGlkPVwibWVudS1saXN0LWdyb3ctbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSBcImJvdHRvbVwiID8gXCJjZW50ZXIgdG9wXCIgOiBcImNlbnRlciBib3R0b21cIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e3RoaXMuaGFuZGxlTWVzc2FnZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0IHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2KSA9PiB7IHRoaXMuaGFuZGxlTWVzc2FnZUNsb3NlKGV2KTsgdGhpcy5yZWFkTWVzc2FnZShtZXNzYWdlKS5iaW5kKHRoaXMpOyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvR3Jvdz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Qb3BwZXJzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFuYWdlcn0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnV0dG9uUmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wZXJzb25FbCA9IG5vZGU7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY29sb3I9e3dpbmRvdy5pbm5lcldpZHRoID4gOTU5ID8gXCJ0cmFuc3BhcmVudFwiIDogXCJ3aGl0ZVwifVxuICAgICAgICAgICAganVzdEljb249e3dpbmRvdy5pbm5lcldpZHRoID4gOTU5fVxuICAgICAgICAgICAgc2ltcGxlPXshKHdpbmRvdy5pbm5lcldpZHRoID4gOTU5KX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQZXJzb25cIlxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgYXJpYS1vd25zPXtvcGVuUGVyc29uID8gXCJtZW51LWxpc3QtZ3Jvdy1wZXJzb25cIiA6IG51bGx9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVBlcnNvblRvZ2dsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MaW5rfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQZXJzb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfSAvPlxuICAgICAgICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVGV4dH0+55So5oi35L+h5oGvPC9wPlxuICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFBvcHBlcnNcbiAgICAgICAgICAgIG9wZW49e29wZW5QZXJzb259XG4gICAgICAgICAgICBhbmNob3JFbD17dGhpcy5wZXJzb25FbH1cbiAgICAgICAgICAgIHRyYW5zaXRpb25cbiAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGNsYXNzTmFtZXMoeyBbY2xhc3Nlcy5wb3BwZXJDbG9zZV06ICFvcGVuUGVyc29uIH0pICtcbiAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICBjbGFzc2VzLnBvb3Blck5hdlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxHcm93XG4gICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cbiAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93LXBlcnNvblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSBcImJvdHRvbVwiID8gXCJjZW50ZXIgdG9wXCIgOiBcImNlbnRlciBib3R0b21cIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e3RoaXMuaGFuZGxlUGVyc29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3Qgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4geyB0aGlzLm9uTW9kaWZ5VXNlcigpOyB0aGlzLmhhbmRsZVBlcnNvbkNsb3NlKGV2ZW50KSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICDkv67mlLnnlKjmiLfkv6Hmga9cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7IHRoaXMub25Mb2dvdXQoKTsgdGhpcy5oYW5kbGVQZXJzb25DbG9zZShldmVudCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAg6YCA5Ye655m75b2VXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1BvcHBlcnM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VXNlckNvbnRhaW5lciBvcGVuPXtvcGVuVXNlckluZm99IG9uQ2FuY2VsPXt0aGlzLmhhbmRsZVBlcnNvblRvZ2dsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhoZWFkZXJMaW5rc1N0eWxlKShIZWFkZXJMaW5rcyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGhpZGU6e1xuICAgIGRpc3BsYXk6J25vbmUnXG4gIH0sXG4gIGJhckNvbG9yUHJpbWFyeTp7XG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpXCJcbiAgfSxcbiAgY29sb3JQcmltYXJ5OntcbiAgICBiYWNrZ3JvdW5kOidyZ2IoMTkzLCAyMjUsIDI1MSknXG4gIH1cbn07XG5cbmNsYXNzIExpbmVhckRldGVybWluYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyAsIHZhbHVlPTAgLCBoaWRlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5yb290fSAke2hpZGU/Y2xhc3Nlcy5oaWRlOicnfWB9ID5cbiAgICAgICAgPExpbmVhclByb2dyZXNzIHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiIHZhbHVlPXt2YWx1ZX0gY29sb3I9eydwcmltYXJ5J30gXG4gICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICBjb2xvclByaW1hcnk6Y2xhc3Nlcy5jb2xvclByaW1hcnksXG4gICAgICAgICAgICBiYXJDb2xvclByaW1hcnk6Y2xhc3Nlcy5iYXJDb2xvclByaW1hcnlcbiAgICAgICAgICAgIH19Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGluZWFyRGV0ZXJtaW5hdGUucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGluZWFyRGV0ZXJtaW5hdGUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBjbGFzc05hbWUgZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3Qgc3R5bGVzID0ge1xuICBncm91cDp7XG4gICAgIGJhY2tncm91bmQ6JyNmZmYnLFxuICAgICBwYWRkaW5nOicwIDNweCAwIDNweCcsXG4gICAgICdib3JkZXItcmFkaXVzJzonMCAwIDRweCA0cHgnLFxuICAgICAnYm94LXNoYWRvdyc6JzAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCknLFxuICAgICAnanVzdGlmeS1jb250ZW50JzonY2VudGVyJ1xuICB9LFxuICBoaWRlOntcbiAgICBkaXNwbGF5Oidub25lJ1xuICB9LFxuICByb290OiB7XG4gICAgY29sb3I6IGJsdWVbNjAwXSxcbiAgICAnbWFyZ2luLWxlZnQnOjAsXG4gICAgJyYkY2hlY2tlZCc6IHtcbiAgICAgIGNvbG9yOiBibHVlWzUwMF0sXG4gICAgfSxcbiAgfSxcbiAgY2hlY2tlZDoge30sXG59O1xuXG5jbGFzcyBDaGVja2JveExhYmVscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyAsIGNoZWNrYm94cyAsIGhpZGV9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc25hbWUgPSBjbGFzc05hbWUoe1xuICAgICAgICBbY2xhc3Nlcy5ncm91cF06dHJ1ZSxcbiAgICAgICAgW2NsYXNzZXMuaGlkZV06aGlkZSAgXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cCByb3cgY2xhc3NOYW1lPXtjbGFzc25hbWV9PlxuICAgICAgICB7XG4gICAgICAgICAgIGNoZWNrYm94cy5tYXAoKGNoZWNrYm94LGluZGV4KT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2JveC5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtfPT50aGlzLnByb3BzLmhhbmRsZUNoYW5nZShjaGVja2JveCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrYm94LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDpjbGFzc2VzLnJvb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6Y2xhc3Nlcy5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjaGVja2JveC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKTtcbiAgfVxufVxuXG5DaGVja2JveExhYmVscy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDaGVja2JveExhYmVscyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcblxuY29uc3Qgc3dpdGNoU3R5bGUgPSB7XG4gIGNvbG9yUHJpbWFyeTp7XG4gICAgJyYkY2hlY2tlZCc6e1xuICAgICAgY29sb3I6JyMyMTk2ZjMnXG4gICAgfVxuICB9LFxuICBjaGVja2VkOntcbiAgICBjb2xvcjonIzIxOTZmMydcbiAgfVxufVxuXG5jbGFzcyBTd2l0Y2hMYWJlbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgXG4gXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwIHJvdyA+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnN3aXRjaExhYmVscy5tYXAoKHN3aXRjaGxhYmVsLGluZGV4KT0+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N3aXRjaGxhYmVsLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT57dGhpcy5wcm9wcy5vbkNoYW5nZShpbmRleCxldmVudCl9fVxuICAgICAgICAgICAgICAgIHZhbHVlPXtzd2l0Y2hsYWJlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICBjb2xvcj17c3dpdGNobGFiZWwuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17dGhpcy5wcm9wcy5jbGFzc2VzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9e3N3aXRjaGxhYmVsLmxhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN3aXRjaFN0eWxlKShTd2l0Y2hMYWJlbHMpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XG5pbXBvcnQgT3V0bGluZWRJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0JztcbmltcG9ydCBGaWxsZWRJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GaWxsZWRJbnB1dCc7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBjdXN0b21JbnB1dFN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2N1c3RvbUlucHV0U3R5bGUuanN4XCI7XG5cblxuY2xhc3MgU2ltcGxlU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzICxpZCxsYWJlbFRleHQsb3B0aW9ucyxzZWxlY3RlZCxvbkNoYW5nZSxkaXNhYmxlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPXtpZH0+e2xhYmVsVGV4dH08L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgbmFtZTogbGFiZWxUZXh0LFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9wdGlvbnMubWFwKChvcHRpb24saW5kZXgpPT48TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e29wdGlvbi52YWx1ZX0+e29wdGlvbi5uYW1lfTwvTWVudUl0ZW0+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICk7XG4gIH1cbn1cblxuU2ltcGxlU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhjdXN0b21JbnB1dFN0eWxlKShTaW1wbGVTZWxlY3QpO1xuXG5cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xuaW1wb3J0IEhpZGRlbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcbmltcG9ydCBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXJMaW5rc0NvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9oZWFkZXIvaGVhZGVyTGlua3NDb250YWluZXJcIjtcblxuaW1wb3J0IHNpZGViYXJTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9zaWRlYmFyU3R5bGUuanN4XCI7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIHZlcmlmaWVzIGlmIHJvdXRlTmFtZSBpcyB0aGUgb25lIGFjdGl2ZSAoaW4gYnJvd3NlciBpbnB1dClcbiAgZnVuY3Rpb24gYWN0aXZlUm91dGUocm91dGVOYW1lKSB7XG4gICAgcmV0dXJuIHByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2Yocm91dGVOYW1lKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIGNvbnN0IHsgY2xhc3NlcywgY29sb3IsIGxvZ28sIGltYWdlLCBsb2dvVGV4dCwgcm91dGVzIH0gPSBwcm9wcztcbiAgdmFyIGxpbmtzID0gKFxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtyb3V0ZXMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKCFwcm9wIHx8IHByb3AucmVkaXJlY3QpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgYWN0aXZlUHJvID0gXCIgXCI7XG4gICAgICAgIHZhciBsaXN0SXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICBbXCIgXCIgKyBjbGFzc2VzW2NvbG9yXV06IGFjdGl2ZVJvdXRlKHByb3AucGF0aClcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHdoaXRlRm9udENsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICBbXCIgXCIgKyBjbGFzc2VzLndoaXRlRm9udF06IGFjdGl2ZVJvdXRlKHByb3AucGF0aClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIHRvPXtwcm9wLnBhdGh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVBybyArIGNsYXNzZXMuaXRlbX1cbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtTGluayArIGxpc3RJdGVtQ2xhc3Nlc30+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1JY29uICsgd2hpdGVGb250Q2xhc3Nlc30+XG4gICAgICAgICAgICAgICAge3R5cGVvZiBwcm9wLmljb24gPT09IFwic3RyaW5nXCIgPyAoXG4gICAgICAgICAgICAgICAgICA8SWNvbj57cHJvcC5pY29ufTwvSWNvbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHByb3AuaWNvbiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cHJvcC5zaWRlYmFyTmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHQgKyB3aGl0ZUZvbnRDbGFzc2VzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVUeXBvZ3JhcGh5PXt0cnVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0xpc3Q+XG4gICk7XG4gIHZhciBicmFuZCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3VuanAxMjNcIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0xpbmt9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvSW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtsb2dvVGV4dH1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XG4gICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcbiAgICAgICAgICBhbmNob3I9XCJyaWdodFwiXG4gICAgICAgICAgb3Blbj17cHJvcHMub3Blbn1cbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlclxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbG9zZT17cHJvcHMuaGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgIE1vZGFsUHJvcHM9e3tcbiAgICAgICAgICAgIGtlZXBNb3VudGVkOiB0cnVlIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2JyYW5kfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGViYXJXcmFwcGVyfT5cbiAgICAgICAgICAgIDxIZWFkZXJMaW5rc0NvbnRhaW5lciAvPlxuICAgICAgICAgICAge2xpbmtzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpbWFnZSAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGltYWdlICsgXCIpXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9IaWRkZW4+XG4gICAgICA8SGlkZGVuIHNtRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgYW5jaG9yPVwibGVmdFwiXG4gICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXG4gICAgICAgICAgb3BlblxuICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHticmFuZH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyV3JhcHBlcn0+e2xpbmtzfTwvZGl2PlxuICAgICAgICAgIHtpbWFnZSAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGltYWdlICsgXCIpXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9IaWRkZW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaWRlYmFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHNpZGViYXJTdHlsZSkoU2lkZWJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgU25hY2sgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgQ2xvc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgc25hY2tiYXJDb250ZW50U3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvc25hY2tiYXJDb250ZW50U3R5bGUuanN4XCI7XG5cbmZ1bmN0aW9uIFNuYWNrYmFyKHsgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7IGNsYXNzZXMsIG1lc3NhZ2UsIGNvbG9yLCBjbG9zZSwgaWNvbiwgcGxhY2UsIG9wZW4gLGF1dG9IaWRlRHVyYXRpb24sb25DbG9zZX0gPSBwcm9wcztcbiAgdmFyIGFjdGlvbiA9IFtdO1xuICBjb25zdCBtZXNzYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmljb25NZXNzYWdlXTogaWNvbiAhPT0gdW5kZWZpbmVkXG4gIH0pO1xuICBpZiAoY2xvc2UgIT09IHVuZGVmaW5lZCkge1xuICAgIGFjdGlvbiA9IFtcbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxuICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmNsb3NlTm90aWZpY2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIDxDbG9zZSBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2V9IC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgXTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxTbmFja1xuICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgIHZlcnRpY2FsOiBwbGFjZS5pbmRleE9mKFwidFwiKSA9PT0gLTEgPyBcImJvdHRvbVwiIDogXCJ0b3BcIixcbiAgICAgICAgaG9yaXpvbnRhbDpcbiAgICAgICAgICBwbGFjZS5pbmRleE9mKFwibFwiKSAhPT0gLTFcbiAgICAgICAgICAgID8gXCJsZWZ0XCJcbiAgICAgICAgICAgIDogcGxhY2UuaW5kZXhPZihcImNcIikgIT09IC0xID8gXCJjZW50ZXJcIiA6IFwicmlnaHRcIlxuICAgICAgfX1cbiAgICAgIG9wZW49e29wZW59XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgYXV0b0hpZGVEdXJhdGlvbj17YXV0b0hpZGVEdXJhdGlvbn1cbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbj17MTAwMH1cbiAgICAgIHJlc3VtZUhpZGVEdXJhdGlvbj17bnVsbH1cbiAgICAgIG1lc3NhZ2U9e1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtpY29uICE9PSB1bmRlZmluZWQgPyA8cHJvcHMuaWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz4gOiBudWxsfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bWVzc2FnZUNsYXNzZXN9PnttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgIENvbnRlbnRQcm9wcz17e1xuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290ICsgXCIgXCIgKyBjbGFzc2VzW2NvbG9yXSxcbiAgICAgICAgICBtZXNzYWdlOiBjbGFzc2VzLm1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAvPlxuICApO1xufVxuXG5TbmFja2Jhci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIiwgXCJwcmltYXJ5XCJdKSxcbiAgY2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICBpY29uOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGxhY2U6IFByb3BUeXBlcy5vbmVPZihbXCJ0bFwiLCBcInRyXCIsIFwidGNcIiwgXCJiclwiLCBcImJsXCIsIFwiYmNcIl0pLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzbmFja2JhckNvbnRlbnRTdHlsZSkoU25hY2tiYXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCB0eXBvZ3JhcGh5U3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvdHlwb2dyYXBoeVN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBEYW5nZXIoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2hpbGRyZW4gfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlZmF1bHRGb250U3R5bGUgKyBcIiBcIiArIGNsYXNzZXMuZGFuZ2VyVGV4dH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkRhbmdlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyh0eXBvZ3JhcGh5U3R5bGUpKERhbmdlcik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFZhbHVlIHtcbiAgICBjb25zdHJ1Y3RvcihsYWJlbFRleHQscGxhY2Vob2xkZXIsdmFsdWUsb25DaGFuZ2UsdHlwZT0ndGV4dCcpe1xuICAgICAgdGhpcy5sYWJlbFRleHQgPSBsYWJlbFRleHRcbiAgICAgIHRoaXMuaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6cGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQ2hhbmdlOm9uQ2hhbmdlLFxuICAgICAgICB2YWx1ZTp2YWx1ZSxcbiAgICAgIH1cbiAgICAgIGlmKHR5cGUgPT0gJ2ZpbGUnKXtcbiAgICAgICAgdGhpcy5pbnB1dFByb3BzID0ge1xuICAgICAgICAuLi50aGlzLmlucHV0UHJvcHMsXG4gICAgICAgIHR5cGU6J2ZpbGUnLFxuICAgICAgICBmaWxlOicnLFxuICAgICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICBhY2NlcHQ6J2ltYWdlLyonLFxuICAgICAgICAgIHN0eWxlOntcbiAgICAgICAgICAgIFwidGV4dEluZGVudFwiOlwiLTIwMHB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICB9XG4gICAgICB0aGlzLmVycm9yID0gZmFsc2VcbiAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlXG4gICAgfVxuICB9IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSlNFbmNyeXB0IH0gZnJvbSBcImpzZW5jcnlwdFwiXG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmVcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG4vLyBpbXBvcnQgQ2xvdWQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG91ZFwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dUaXRsZUNvbXBvbmVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dBY3Rpb25cIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXRcIjtcblxuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL3ZhbGlkYXRlXCJcblxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gICAgcGFwZXI6e1xuICAgICAgd2lkdGg6XCI1MDBweFwiXG4gICAgfVxufVxuY2xhc3MgSW5wdXRWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsVGV4dCxwbGFjZWhvbGRlcixvbkNoYW5nZSx0eXBlPSd0ZXh0Jyl7XG4gICAgdGhpcy5sYWJlbFRleHQgPSBsYWJlbFRleHRcbiAgICB0aGlzLmlucHV0UHJvcHMgPSB7XG4gICAgICBwbGFjZWhvbGRlcjpwbGFjZWhvbGRlcixcbiAgICAgIG9uQ2hhbmdlOm9uQ2hhbmdlLFxuICAgICAgdmFsdWU6JycsXG4gICAgfVxuICAgIGlmKHR5cGUgPT0gJ2ZpbGUnKXtcbiAgICAgIHRoaXMuaW5wdXRQcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuaW5wdXRQcm9wcyxcbiAgICAgIHR5cGU6J2ZpbGUnLFxuICAgICAgZmlsZTonJyxcbiAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICBhY2NlcHQ6J2ltYWdlLyonLFxuICAgICAgICBzdHlsZTp7XG4gICAgICAgICAgXCJ0ZXh0SW5kZW50XCI6XCItMjAwcHhcIlxuICAgICAgICB9XG4gICAgICB9fVxuICAgIH1cbiAgICB0aGlzLmVycm9yID0gZmFsc2VcbiAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZVxuICB9XG59XG5jbGFzcyBVc2VySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uTmFtZUNoYW5nZSA9IHRoaXMub25OYW1lQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uTmlja25hbWVDaGFuZ2UgPSB0aGlzLm9uTmlja25hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25Db250YWN0Q2hhbmdlID0gdGhpcy5vbkNvbnRhY3RDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25BdmF0b3JDaGFuZ2UgPSB0aGlzLm9uQXZhdG9yQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UgPSB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0RmllbGRWYWx1ZSA9IHRoaXMuc2V0RmllbGRWYWx1ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkl0ZW1Db25maXJtID0gdGhpcy5vbkl0ZW1Db25maXJtLmJpbmQodGhpcylcbiAgICB0aGlzLm9uSXRlbUNhbmNlbCA9IHRoaXMub25JdGVtQ2FuY2VsLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6bmV3IElucHV0VmFsdWUoJ+Wnk+WQjScsJ+ivt+Whq+WGmeecn+WunuWnk+WQjScsdGhpcy5vbk5hbWVDaGFuZ2UpLFxuICAgICAgICBuaWNrbmFtZTpuZXcgSW5wdXRWYWx1ZSgn5pi156ewJywn5pi156ewJyx0aGlzLm9uTmlja25hbWVDaGFuZ2UpLFxuICAgICAgICBhdmF0b3I6bmV3IElucHV0VmFsdWUoJ+WktOWDjycsJ+WktOWDjycsdGhpcy5vbkF2YXRvckNoYW5nZSwnZmlsZScpLFxuICAgICAgICBjb250YWN0Om5ldyBJbnB1dFZhbHVlKCfogZTns7vmlrnlvI8nLCfor7fovpPlhaXmnInmlYjmiYvmnLrmiJbpgq7nrrEnLHRoaXMub25Db250YWN0Q2hhbmdlKSxcbiAgICAgICAgcGFzc3dvcmQ6bmV3IElucHV0VmFsdWUoJ+WvhueggScsJzbkvY3ku6XkuIrvvIzlrZfmr40r5pWw5a2XK+eJueauiuWtl+espuWmgnN1bkAxMjMnLHRoaXMub25QYXNzd29yZENoYW5nZSlcbiAgICB9XG4gIH1cbiAgb25OYW1lQ2hhbmdlKGV2KSB7XG4gICAgIGNvbnN0IHZhbHVlID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgIGNvbnN0IHN1Y2Nlc3MgPSAvXltcXHU0RTAwLVxcdTlGQTVdKyQvLnRlc3QodmFsdWUpIHx8IC9eW2EtekEtWl0rJC8udGVzdCh2YWx1ZSlcbiAgICAgY29uc3QgbmFtZSA9IHtcbiAgICAgICAgIC4uLnRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLm5hbWUuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjohc3VjY2VzcyxcbiAgICAgICAgc3VjY2Vzc1xuICAgICB9XG4gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgIG5hbWVcbiAgICAgfSlcbiAgfVxuICBvbk5pY2tuYW1lQ2hhbmdlKGV2KSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9ICEhZXYudGFyZ2V0LnZhbHVlXG4gICAgY29uc3Qgbmlja25hbWUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUubmlja25hbWUsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLm5pY2tuYW1lLmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmlja25hbWVcbiAgICB9KVxuIH1cbiBvbkNvbnRhY3RDaGFuZ2UoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSB2YWxpZGF0ZS5pc0VtYWlsKHZhbHVlKSB8fCB2YWxpZGF0ZS5pc1Bob25lKHZhbHVlKVxuXG4gICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0LFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGFjdFxuICAgIH0pXG4gIH1cbiAgb25BdmF0b3JDaGFuZ2UoZXYpe1xuICAgIGNvbnN0IGZpbGUgPSBldi50YXJnZXQuZmlsZXNbMF0sc3VjY2VzcyA9ICEhZmlsZVxuICAgIGNvbnN0IGF2YXRvciA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5hdmF0b3IsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmF2YXRvci5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICBmaWxlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXZhdG9yXG4gICAgfSlcbiAgfVxuICBvblBhc3N3b3JkQ2hhbmdlKGV2KXtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSB2YWxpZGF0ZS5pc1Bhc3N3b3JkKHZhbHVlKVxuXG4gICAgY29uc3QgcGFzc3dvcmQgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFzc3dvcmRcbiAgICB9KVxuICB9XG4gIG9uSXRlbUNvbmZpcm0oKXtcblxuICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxlbmNyeXB0ID0gbmV3IEpTRW5jcnlwdCgpO1xuICAgICBlbmNyeXB0LnNldFB1YmxpY0tleSh3aW5kb3cuX19QVUJMSUNfS0VZX18pO1xuICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgbmFtZTp0aGlzLnN0YXRlLm5hbWUuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgIG5pY2tuYW1lOnRoaXMuc3RhdGUubmlja25hbWUuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgIGNvbnRhY3Q6dGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMudmFsdWUsXG4gICAgICBhdmF0b3I6dGhpcy5zdGF0ZS5hdmF0b3IuaW5wdXRQcm9wcy5maWxlLFxuICAgICAgcGFzc3dvcmQ6ZW5jcnlwdC5lbmNyeXB0KHRoaXMuc3RhdGUucGFzc3dvcmQuaW5wdXRQcm9wcy52YWx1ZSksXG4gICAgfTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHBhcmFtcykubWFwKGl0ZW09PntcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChpdGVtWzBdLGl0ZW1bMV0pXG4gICAgICBmb3JtRGF0YS5hcHBlbmQuYXBwbHkoZm9ybURhdGEsaXRlbSlcbiAgICB9KVxuICAgIGNvbnN0IHNldEZpZWxkRXJyb3IgPSAoZmllbGQpPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2ZpZWxkXTp7XG4gICAgICAgICAgIC4uLnRoaXMuc3RhdGVbZmllbGRdLFxuICAgICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICAgICBzdWNjZXNzOmZhbHNlXG4gICAgICAgICB9XG4gICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5mZXRjaFJlZ2lzdGVyVXNlcihmb3JtRGF0YSwodHlwZSk9PntcbiAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICBjYXNlICdOSUNLTkFNRV9FWElTVCc6XG4gICAgICAgICBzZXRGaWVsZEVycm9yKCduaWNrbmFtZScpXG4gICAgICAgICBicmVha1xuICAgICAgICAgY2FzZSAnRU1BSUxfRVhJU1QnOlxuICAgICAgICAgY2FzZSAnUEhPTkVfRVhJU1QnOlxuICAgICAgICAgY2FzZSAnQ09OVEFDVCc6XG4gICAgICAgICBzZXRGaWVsZEVycm9yKCdjb250YWN0JylcbiAgICAgICAgIGJyZWFrXG4gICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25JdGVtQ2FuY2VsKCl7XG4gICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpXG4gIH1cbiAgc2V0RmllbGRWYWx1ZShmaWVsZCx2YWx1ZSl7XG4gICAgaWYoIXRoaXMuc3RhdGVbZmllbGRdKSByZXR1cm5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtmaWVsZF06e1xuICAgICAgICAgLi4udGhpcy5zdGF0ZVtmaWVsZF0sXG4gICAgICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGVbZmllbGRdLmlucHV0UHJvcHMsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgfSxcbiAgICAgICAgIGVycm9yOmZhbHNlLFxuICAgICAgICAgc3VjY2VzczpmYWxzZVxuICAgICAgIH1cbiAgICAgfSlcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKXtcbiAgICBpZihwcm9wcy51c2VySW5mbyYmcHJvcHMudXNlckluZm8uX2lkKXtcbiAgICAgIGNvbnN0IHVzZXJJbmZvID0gcHJvcHMudXNlckluZm87XG4gICAgICBPYmplY3Qua2V5cyh1c2VySW5mbykubWFwKChrZXksaW5kZXgpPT57XG4gICAgICAgICBpZihrZXkhPSdhdmF0b3InKXtcbiAgICAgICAgICAgaWYoKGtleSA9PSAncGhvbmUnIHx8IGtleT09J2VtYWlsJykgJiYgdXNlckluZm9ba2V5XSl7XG4gICAgICAgICAgICAgIGtleSA9ICdjb250YWN0J1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHRoaXMuc2V0RmllbGRWYWx1ZShrZXksdXNlckluZm9ba2V5XSlcbiAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctbmFtZSd9XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLW5pY2tuYW1lJ30gXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUubmlja25hbWV9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctY29udGFjdCd9XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLmNvbnRhY3R9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctcGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5wYXNzd29yZH0vPlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsndXNlci1pdGVtLWRpYWxvZy1hdmF0b3InfSBcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXtcbiAgICAgICAgICAgICAgICAgIHtjbGFzc05hbWU6J2l0ZW0tZm9ybSd9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5hdmF0b3J9Lz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1Db25maXJtfSA+e3VzZXJJbmZvPyfnoa7lrponOifms6jlhownfTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1DYW5jZWx9ID7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ1N0eWxlKShVc2VySW5mbyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBKU0VuY3J5cHQgfSBmcm9tIFwianNlbmNyeXB0XCJcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZVxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbi8vIGltcG9ydCBDbG91ZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3VkXCI7XG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IERpYWxvZ0NvbXBvbmVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ1wiO1xuaW1wb3J0IERpYWxvZ1RpdGxlQ29tcG9uZW50IGZyb20gXCIuLi9EaWFsb2cvRGlhbG9nVGl0bGVcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCIuLi9EaWFsb2cvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0FjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ0FjdGlvblwiO1xuaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gXCIuLi9DdXN0b21JbnB1dC9DdXN0b21JbnB1dFwiO1xuXG5jb25zdCBkaWFsb2dTdHlsZSA9IHtcbiAgICBwYXBlcjp7XG4gICAgICB3aWR0aDpcIjUwMHB4XCJcbiAgICB9XG59XG5cbmNsYXNzIFVzZXJJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25Db250YWN0Q2hhbmdlID0gdGhpcy5vbkNvbnRhY3RDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYXNzd29yZENoYW5nZSA9IHRoaXMub25QYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLm9uSXRlbUNvbmZpcm0gPSB0aGlzLm9uSXRlbUNvbmZpcm0uYmluZCh0aGlzKVxuICAgIHRoaXMub25JdGVtQ2FuY2VsID0gdGhpcy5vbkl0ZW1DYW5jZWwuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgY29udGFjdDp7XG4gICAgICAgICAgICBsYWJlbFRleHQ6J+aJi+acuuOAgemCrueuseaIluaYteensCcsXG4gICAgICAgICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+35aGr5YaZ5pyJ5pWI55qE5omL5py644CB6YKu566x5oiW5pi156ewJyxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTp0aGlzLm9uQ29udGFjdENoYW5nZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTonJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjpmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOntcbiAgICAgICAgICAgIGxhYmVsVGV4dDon5a+G56CBJyxcbiAgICAgICAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7floavlhpnlr4bnoIEnLFxuICAgICAgICAgICAgICAgIHR5cGU6J3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTp0aGlzLm9uUGFzc3dvcmRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6JycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOmZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuICB9XG4gIG9uQ29udGFjdENoYW5nZShldikge1xuICAgICBjb25zdCBzdWNjZXNzID0gISFldi50YXJnZXQudmFsdWVcbiAgICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgICAgIC4uLnRoaXMuc3RhdGUuY29udGFjdCxcbiAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmNvbnRhY3QuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjohc3VjY2VzcyxcbiAgICAgICAgc3VjY2Vzc1xuICAgICB9XG4gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250YWN0XG4gICAgIH0pXG4gIH1cbiAgb25QYXNzd29yZENoYW5nZShldikge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAhIWV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHBhc3N3b3JkID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLmlucHV0UHJvcHMsXG4gICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgIH0sXG4gICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGFzc3dvcmRcbiAgICB9KVxuICB9XG5cbiAgb25JdGVtQ29uZmlybSgpe1xuICAgIGxldCBlbmNyeXB0ID0gbmV3IEpTRW5jcnlwdCgpO1xuICAgIGVuY3J5cHQuc2V0UHVibGljS2V5KHdpbmRvdy5fX1BVQkxJQ19LRVlfXyk7XG4gICAgbGV0IHBhc3N3b3JkID0gZW5jcnlwdC5lbmNyeXB0KCd3YW5neWFuNTIwQCcpO1xuXG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgY29udGFjdDp0aGlzLnN0YXRlLmNvbnRhY3QuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmRcbiAgICB9O1xuICAgIHRoaXMucHJvcHMuZmV0Y2hMb2dpblVzZXIocGFyYW1zKVxuICB9XG4gIG9uSXRlbUNhbmNlbCgpe1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsndXNlci1pdGVtLWRpYWxvZy1jb250YWN0J31cbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXtcbiAgICAgICAgICAgICAgICAgIHtjbGFzc05hbWU6J2l0ZW0tZm9ybSd9XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUuY29udGFjdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctcGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5wYXNzd29yZH0gICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uSXRlbUNvbmZpcm19ID7nmbvlvZU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGVtQ2FuY2VsfSA+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhkaWFsb2dTdHlsZSkoVXNlckluZm8pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSlNFbmNyeXB0IH0gZnJvbSBcImpzZW5jcnlwdFwiXG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmVcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG4vLyBpbXBvcnQgQ2xvdWQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG91ZFwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dUaXRsZUNvbXBvbmVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dBY3Rpb25cIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXRcIjtcblxuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL3ZhbGlkYXRlXCJcbmltcG9ydCBJbnB1dFZhbHVlIGZyb20gXCIuL3VzZXJcIlxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gICAgcGFwZXI6e1xuICAgICAgd2lkdGg6XCI1MDBweFwiXG4gICAgfVxufVxuXG5jbGFzcyBVc2VySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uTmFtZUNoYW5nZSA9IHRoaXMub25OYW1lQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uTmlja25hbWVDaGFuZ2UgPSB0aGlzLm9uTmlja25hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25Db250YWN0Q2hhbmdlID0gdGhpcy5vbkNvbnRhY3RDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25BdmF0b3JDaGFuZ2UgPSB0aGlzLm9uQXZhdG9yQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UgPSB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5vbkl0ZW1Db25maXJtID0gdGhpcy5vbkl0ZW1Db25maXJtLmJpbmQodGhpcylcbiAgICB0aGlzLm9uSXRlbUNhbmNlbCA9IHRoaXMub25JdGVtQ2FuY2VsLmJpbmQodGhpcylcbiAgICBjb25zdCB1c2VySW5mbyA9IHByb3BzLnVzZXJJbmZvO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6bmV3IElucHV0VmFsdWUoJ+Wnk+WQjScsJ+ivt+Whq+WGmeecn+WunuWnk+WQjScsdXNlckluZm8ubmFtZSx0aGlzLm9uTmFtZUNoYW5nZSksXG4gICAgICAgIG5pY2tuYW1lOm5ldyBJbnB1dFZhbHVlKCfmmLXnp7AnLCfmmLXnp7AnLHVzZXJJbmZvLm5pY2tuYW1lLHRoaXMub25OaWNrbmFtZUNoYW5nZSksXG4gICAgICAgIGF2YXRvcjpuZXcgSW5wdXRWYWx1ZSgn5aS05YOPJywn5aS05YOPJywnJyx0aGlzLm9uQXZhdG9yQ2hhbmdlLCdmaWxlJyksXG4gICAgICAgIGNvbnRhY3Q6bmV3IElucHV0VmFsdWUoJ+iBlOezu+aWueW8jycsJ+ivt+i+k+WFpeacieaViOaJi+acuuaIlumCrueusScsdXNlckluZm8uZW1haWx8fHVzZXJJbmZvLnBob25lLHRoaXMub25Db250YWN0Q2hhbmdlKSxcbiAgICAgICAgcGFzc3dvcmQ6bmV3IElucHV0VmFsdWUoJ+WvhueggScsJzbkvY3ku6XkuIrvvIzlrZfmr40r5pWw5a2XK+eJueauiuWtl+espuWmgnN1bkAxMjMnLCcnLHRoaXMub25QYXNzd29yZENoYW5nZSlcbiAgICB9XG4gIH1cbiAgb25OYW1lQ2hhbmdlKGV2KSB7XG4gICAgIGNvbnN0IHZhbHVlID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgIGNvbnN0IHN1Y2Nlc3MgPSAvXltcXHU0RTAwLVxcdTlGQTVdKyQvLnRlc3QodmFsdWUpIHx8IC9eW2EtekEtWl0rJC8udGVzdCh2YWx1ZSlcbiAgICAgY29uc3QgbmFtZSA9IHtcbiAgICAgICAgIC4uLnRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLm5hbWUuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjohc3VjY2VzcyxcbiAgICAgICAgc3VjY2Vzc1xuICAgICB9XG4gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgIG5hbWVcbiAgICAgfSlcbiAgfVxuICBvbk5pY2tuYW1lQ2hhbmdlKGV2KSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9ICEhZXYudGFyZ2V0LnZhbHVlXG4gICAgY29uc3Qgbmlja25hbWUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUubmlja25hbWUsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLm5pY2tuYW1lLmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmlja25hbWVcbiAgICB9KVxuIH1cbiBvbkNvbnRhY3RDaGFuZ2UoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSB2YWxpZGF0ZS5pc0VtYWlsKHZhbHVlKSB8fCB2YWxpZGF0ZS5pc1Bob25lKHZhbHVlKVxuXG4gICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0LFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGFjdFxuICAgIH0pXG4gIH1cbiAgb25BdmF0b3JDaGFuZ2UoZXYpe1xuICAgIGNvbnN0IGZpbGUgPSBldi50YXJnZXQuZmlsZXNbMF0sc3VjY2VzcyA9ICEhZmlsZVxuICAgIGNvbnN0IGF2YXRvciA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5hdmF0b3IsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmF2YXRvci5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICBmaWxlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXZhdG9yXG4gICAgfSlcbiAgfVxuICBvblBhc3N3b3JkQ2hhbmdlKGV2KXtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSB2YWxpZGF0ZS5pc1Bhc3N3b3JkKHZhbHVlKVxuXG4gICAgY29uc3QgcGFzc3dvcmQgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFzc3dvcmRcbiAgICB9KVxuICB9XG4gIG9uSXRlbUNvbmZpcm0oKXtcblxuICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxlbmNyeXB0ID0gbmV3IEpTRW5jcnlwdCgpO1xuICAgICBlbmNyeXB0LnNldFB1YmxpY0tleSh3aW5kb3cuX19QVUJMSUNfS0VZX18pO1xuICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgX2lkOnRoaXMucHJvcHMudXNlckluZm8uX2lkLFxuICAgICAgbmFtZTp0aGlzLnN0YXRlLm5hbWUuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgIG5pY2tuYW1lOnRoaXMuc3RhdGUubmlja25hbWUuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgIGNvbnRhY3Q6dGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMudmFsdWUsXG4gICAgICBhdmF0b3I6dGhpcy5zdGF0ZS5hdmF0b3IuaW5wdXRQcm9wcy5maWxlLFxuICAgICAgcGFzc3dvcmQ6ZW5jcnlwdC5lbmNyeXB0KHRoaXMuc3RhdGUucGFzc3dvcmQuaW5wdXRQcm9wcy52YWx1ZSksXG4gICAgfTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHBhcmFtcykubWFwKGl0ZW09PntcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChpdGVtWzBdLGl0ZW1bMV0pXG4gICAgICBmb3JtRGF0YS5hcHBlbmQuYXBwbHkoZm9ybURhdGEsaXRlbSlcbiAgICB9KVxuICAgIGNvbnN0IHNldEZpZWxkRXJyb3IgPSAoZmllbGQpPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2ZpZWxkXTp7XG4gICAgICAgICAgIC4uLnRoaXMuc3RhdGVbZmllbGRdLFxuICAgICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICAgICBzdWNjZXNzOmZhbHNlXG4gICAgICAgICB9XG4gICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5mZXRjaE1vZGlmeVVzZXIoZm9ybURhdGEsKHR5cGUpPT57XG4gICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgY2FzZSAnTklDS05BTUVfRVhJU1QnOlxuICAgICAgICAgc2V0RmllbGRFcnJvcignbmlja25hbWUnKVxuICAgICAgICAgYnJlYWtcbiAgICAgICAgIGNhc2UgJ0VNQUlMX0VYSVNUJzpcbiAgICAgICAgIGNhc2UgJ1BIT05FX0VYSVNUJzpcbiAgICAgICAgIGNhc2UgJ0NPTlRBQ1QnOlxuICAgICAgICAgc2V0RmllbGRFcnJvcignY29udGFjdCcpXG4gICAgICAgICBicmVha1xuICAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uSXRlbUNhbmNlbCgpe1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctbmFtZSd9XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLW5pY2tuYW1lJ30gXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUubmlja25hbWV9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctY29udGFjdCd9XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLmNvbnRhY3R9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctcGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5wYXNzd29yZH0vPlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsndXNlci1pdGVtLWRpYWxvZy1hdmF0b3InfSBcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXtcbiAgICAgICAgICAgICAgICAgIHtjbGFzc05hbWU6J2l0ZW0tZm9ybSd9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5hdmF0b3J9Lz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1Db25maXJtfSA+e3VzZXJJbmZvPyfnoa7lrponOifms6jlhownfTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1DYW5jZWx9ID7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ1N0eWxlKShVc2VySW5mbyk7XG4iLCJjb25zdCBBUElfUk9PVCA9ICcvYXBpLydcbmV4cG9ydCBjb25zdCAgQVBJID0ge1xuICAgIGFkZFVzZXI6YCR7QVBJX1JPT1R9dXNlci9yZWdpc3RlcmAsXG4gICAgbW9kaWZ5VXNlcjpgJHtBUElfUk9PVH11c2VyL21vZGlmeWAsXG4gICAgbG9naW5Vc2VyOmAke0FQSV9ST09UfXVzZXIvbG9naW5gLFxuICAgIGxvZ291dFVzZXI6YCR7QVBJX1JPT1R9dXNlci9sb2dvdXRgLFxuICAgIGdldE1lc3NhZ2U6YCR7QVBJX1JPT1R9dXNlci9tZXNzYWdlYCxcbiAgICByZWFkTWVzc2FnZTpgJHtBUElfUk9PVH11c2VyL3JlYWRgXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5cbmltcG9ydCAqIGFzIHVzZXJBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9Vc2VyL3VzZXJJbmZvJ1xuXG5pbXBvcnQgQ3VzdG9tVGFicyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1c3RvbVRhYnMvQ3VzdG9tVGFicydcbmltcG9ydCBVc2VySW5mb0NvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXIvdXNlckluZm8nXG5pbXBvcnQgVXNlckxvZ2luQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXNlci91c2VyTG9naW4nXG5pbXBvcnQgVXNlck1vZGlmeUNvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXIvdXNlck1vZGlmeSdcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nJ1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ1RpdGxlJ1xuXG5jb25zdCBkaWFsb2dTdHlsZSA9IHtcbiAgICBwYXBlcjp7XG4gICAgICB3aWR0aDpcIjQwMHB4XCJcbiAgICB9XG59XG5jbGFzcyBVc2VySW5mb0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLm9uQ2FuY2VsID0gdGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpXG4gICAgfVxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKClcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHsgY2xhc3NlcyAsb3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEaWFsb2dDb21wb25lbnQgb3Blbj17b3Blbn0gbXVpQ2xhc3Nlcz17Y2xhc3Nlc30+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX19VU0VSX0lORk9fXyYmd2luZG93Ll9fVVNFUl9JTkZPX18uX2lkPyhcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDkv67mlLnnlKjmiLfkv6Hmga9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlck1vZGlmeUNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gb25DYW5jZWw9e3RoaXMub25DYW5jZWx9IHVzZXJJbmZvPXt3aW5kb3cuX19VU0VSX0lORk9fX30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tVGFicyB0YWJzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJOYW1lOiBcIueUqOaIt+eZu+W9lVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50OiA8VXNlckxvZ2luQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBvbkNhbmNlbD17dGhpcy5vbkNhbmNlbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJOYW1lOiBcIueUqOaIt+azqOWGjFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50OiA8VXNlckluZm9Db21wb25lbnQgey4uLnRoaXMucHJvcHN9IG9uQ2FuY2VsPXt0aGlzLm9uQ2FuY2VsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0gcGxhaW5UYWJzID0ge3RydWV9IHJ0bEFjdGl2ZSA9IHtmYWxzZX0gaGVhZGVyQ29sb3I9eydpbmZvJ30vPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L0RpYWxvZ0NvbXBvbmVudD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSxwcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb3BzXG4gICAgfSAgIFxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgZmV0Y2hMb2dpblVzZXI6KHBhcmFtcyk9PntcbiAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbi5GX0NPTU1PTl9GRVRDSF9MT0dJTl9VU0VSX0FDVElPTihwYXJhbXMpKVxuICAgIH0sXG4gICAgZmV0Y2hSZWdpc3RlclVzZXI6IChwYXJhbXMsY2FsbGJhY2spID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbi5GX0NPTU1PTl9GRVRDSF9BRERfVVNFUl9BQ1RJT04ocGFyYW1zLGNhbGxiYWNrKSlcbiAgICB9LFxuICAgIGZldGNoTW9kaWZ5VXNlcjogKHBhcmFtcyxjYWxsYmFjaykgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1c2VyQWN0aW9uLkZfQ09NTU9OX0ZFVENIX01PRElGWV9VU0VSX0FDVElPTihwYXJhbXMsY2FsbGJhY2spKVxuICAgIH0gIFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhkaWFsb2dTdHlsZSkoVXNlckluZm9Db250YWluZXIpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJMaW5rcydcbmltcG9ydCAqIGFzIHVzZXJBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9Vc2VyL3VzZXJJbmZvJ1xuaW1wb3J0IHsgRl9DT01NT05fRkVUQ0hfU0VBUkNIIH0gZnJvbSAnLi4vLi4vLi4vZl9zaGFyZS9hY3Rpb25zL3NoYXJlJ1xuXG5jbGFzcyBIZWFkZXJMaW5rc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhlYWRlckxpbmtzIHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSxwcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb3BzXG4gICAgfSAgIFxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgZmV0Y2hMb2dvdXRVc2VyOigpPT57XG4gICAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb24uRl9DT01NT05fRkVUQ0hfTE9HT1VUX1VTRVJfQUNUSU9OKCkpXG4gICAgfSxcbiAgICBmZXRjaEdldFVzZXJNZXNzYWdlOigpPT57XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgICAgICBkaXNwYXRjaCh1c2VyQWN0aW9uLkZfQ09NTU9OX0ZFVENIX1VTRVJfTUVTU0FHRV9BQ1RJT04ocmVzb2x2ZSxyZWplY3QpKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgZmV0Y2hSZWFkTWVzc2FnZTooX2lkKT0+e1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbi5GX0NPTU1PTl9GRVRDSF9VU0VSX1JFQURfTUVTU0FHRV9BQ1RJT04oX2lkLHJlc29sdmUscmVqZWN0KSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGZldGNoU2VhcmNoOihwYXJhbSk9PntcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIGRpc3BhdGNoKEZfQ09NTU9OX0ZFVENIX1NFQVJDSChwYXJhbSxyZXNvbHZlLHJlamVjdCkpXG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyTGlua3NDb250YWluZXIpOyIsImV4cG9ydCBjb25zdCBVUERBVEVfRVhURU5EX0lORk8gPSBcIkZfSE9NRV9VUERBVEVfRVhURU5EX0lORk9cIiIsImltcG9ydCBIb21lIGZyb20gJy4vdmlldy9ob21lLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50L2FjdGlvblR5cGVzJ1xuXG5jb25zdCByZWR1Y2VyTWFwID0gbmV3IE1hcCgpO1xuXG5yZWR1Y2VyTWFwLnNldCh0eXBlcy5VUERBVEVfRVhURU5EX0lORk8sIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5kYXRhXG4gICAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBpZiAocmVkdWNlck1hcC5oYXMoYWN0aW9uLnR5cGUpKSB7XG4gICAgICAgIHJldHVybiAocmVkdWNlck1hcC5nZXQoYWN0aW9uLnR5cGUpKShzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlP3N0YXRlOm51bGw7XG59IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGhvbWVcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCJcbmltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuXG5sZXQgZGVmYXVsdFN0b3JlID0ge1xuICAgIGE6MVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0U3RvcmUiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanN4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaG9tZVxufSIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBjcmVhdGVzIGEgYmVhdXRpZnVsIHNjcm9sbGJhclxuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQgXCJwZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmpzeFwiO1xuXG5pbXBvcnQgc2hhcmVSb3V0ZXMgZnJvbSBcIi4uLy4uL3JvdXRlL2hvbWUuanN4XCI7XG5cbmltcG9ydCBkYXNoYm9hcmRTdHlsZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvbGF5b3V0cy9kYXNoYm9hcmRTdHlsZS5qc3hcIjtcblxuaW1wb3J0IGltYWdlIGZyb20gXCIuLi8uLi9hc3NldHMvaW1nL3NpZGViYXItMi5qcGdcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1nL3JlYWN0bG9nby5wbmdcIjtcblxuY29uc3Qgc3dpdGNoUm91dGVzID0gKFxuICA8U3dpdGNoPlxuICAgIHtzaGFyZVJvdXRlcy5tYXAoKHByb3AsIGtleSkgPT4ge1xuICAgICAgaWYoIXByb3ApIHJldHVyblxuICAgICAgaWYgKHByb3AucmVkaXJlY3QpXG4gICAgICAgIHJldHVybiA8UmVkaXJlY3QgZnJvbT17cHJvcC5wYXRofSB0bz17cHJvcC50b30ga2V5PXtrZXl9IC8+O1xuICAgICAgcmV0dXJuIDxSb3V0ZSBwYXRoPScvdmlldy86cGFnZScgY29tcG9uZW50PXtwcm9wLmNvbXBvbmVudH0ga2V5PXtrZXl9IC8+O1xuICAgIH0pfVxuICA8L1N3aXRjaD5cbik7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2JpbGVPcGVuOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5yZXNpemVGdW5jdGlvbiA9IHRoaXMucmVzaXplRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVEcmF3ZXJUb2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZU9wZW46ICF0aGlzLnN0YXRlLm1vYmlsZU9wZW4gfSk7XG4gIH07XG4gIGdldFJvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9tYXBzXCI7XG4gIH1cbiAgcmVzaXplRnVuY3Rpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZU9wZW46IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoXCJXaW5cIikgPiAtMSkge1xuICAgICAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcih0aGlzLnJlZnMubWFpblBhbmVsKTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemVGdW5jdGlvbik7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKGUpIHtcbiAgICBpZiAoZS5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBlLmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICB0aGlzLnJlZnMubWFpblBhbmVsLnNjcm9sbFRvcCA9IDA7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5tb2JpbGVPcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2JpbGVPcGVuOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemVGdW5jdGlvbik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XG4gICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgcm91dGVzPXtzaGFyZVJvdXRlc31cbiAgICAgICAgICBsb2dvVGV4dD17XCLorrDlvZXlv6vkuZBcIn1cbiAgICAgICAgICBsb2dvPXtsb2dvfVxuICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICBoYW5kbGVEcmF3ZXJUb2dnbGU9e3RoaXMuaGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUubW9iaWxlT3Blbn1cbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluUGFuZWx9IHJlZj1cIm1haW5QYW5lbFwiPlxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIHJvdXRlcz17c2hhcmVSb3V0ZXN9XG4gICAgICAgICAgICBoYW5kbGVEcmF3ZXJUb2dnbGU9e3RoaXMuaGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogT24gdGhlIC9tYXBzIHJvdXRlIHdlIHdhbnQgdGhlIG1hcCB0byBiZSBvbiBmdWxsIHNjcmVlbiAtIHRoaXMgaXMgbm90IHBvc3NpYmxlIGlmIHRoZSBjb250ZW50IGFuZCBjb25hdGluZXIgY2xhc3NlcyBhcmUgcHJlc2VudCBiZWNhdXNlIHRoZXkgaGF2ZSBzb21lIHBhZGRpbmdzIHdoaWNoIHdvdWxkIG1ha2UgdGhlIG1hcCBzbWFsbGVyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT57c3dpdGNoUm91dGVzfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhkYXNoYm9hcmRTdHlsZSkoQXBwKTtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9zaGFyZSdcbmltcG9ydCB7IGZldGNoR2V0LCBmZXRjaFBvc3QgfSBmcm9tICcuLi8uLi9wdWJsaWMvaHR0cCdcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbnN0YW50cy9hcGknXG5pbXBvcnQgeyByZWplY3RzIH0gZnJvbSAnYXNzZXJ0JztcbmNvbnN0IEZfU0hBUkVfU0FWRV9TSEFSRV9DQVRFR09SWSA9IChjYXRlZ29yeSk9Pih7XG4gICAgdHlwZTp0eXBlcy5TQVZFX1NIQVJFX0NBVEVHT1JZLFxuICAgIGNhdGVnb3J5XG59KVxuY29uc3QgRl9TSEFSRV9ERUxFVEVfU0hBUkVfQ0FURUdPUlkgPSAoY2F0ZWdvcnkpPT4oe1xuICAgIHR5cGU6dHlwZXMuREVMRVRFX1NIQVJFX0NBVEVHT1JZLFxuICAgIGNhdGVnb3J5XG59KVxuY29uc3QgRl9TSEFSRV9JTklUX0RBVEFfQUNUSU9OID0gKGNhdGVnb3JpZXMpPT4oe1xuICAgIHR5cGU6dHlwZXMuSU5JVF9EQVRBLFxuICAgIGNhdGVnb3JpZXNcbn0pXG5jb25zdCBGX1NIQVJFX1NBVkVfU0hBUkVfSVRFTSA9IChpdGVtKT0+KHtcbiAgICB0eXBlOnR5cGVzLlNBVkVfU0hBUkVfSVRFTSxcbiAgICBpdGVtXG59KVxuY29uc3QgRl9TSEFSRV9ERUxFVEVfU0hBUkVfSVRFTSA9IChjYXRlZ29yeSxfaWQpPT4oe1xuICAgIHR5cGU6dHlwZXMuREVMRVRFX1NIQVJFX0lURU0sXG4gICAgY2F0ZWdvcnksXG4gICAgX2lkXG59KVxuZXhwb3J0IGNvbnN0IEZfU0hBUkVfRkVUQ0hfU0hBUkVfSU5JVF9BQ1RJT04gPSAocGFnZSk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoLyosIGdldFN0YXRlKi8pID0+IHtcbiAgICAgICAgZmV0Y2hQb3N0KGAke0FQSS5nZXRTaGFyZUxpc3R9JHtwYWdlPT0ncHVibGljJz8nJzooJy8nK3dpbmRvdy5fX1VTRVJfSU5GT19fLl9pZCl9YCkudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKEZfU0hBUkVfSU5JVF9EQVRBX0FDVElPTihqc29uLnJlc3x8W10pKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRl9TSEFSRV9GRVRDSF9TQVZFX1NIQVJFX0NBVEVHT1JZID0gKHBhZ2UsY2F0ZWdvcnkscmVzb2x2ZSxyZWplY3QpPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4geyBcbiAgICAgICAgZmV0Y2hQb3N0KEFQSS5zYXZlU2hhcmVDYXRlZ29yeSxjYXRlZ29yeSkudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oanNvbiA9PntcbiAgICAgICAgICAgIGlmKCEocGFnZT09J3B1YmxpYycmJiFjYXRlZ29yeS5wdWJsaWNGbGFnKSAmJiBqc29uLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goRl9TSEFSRV9TQVZFX1NIQVJFX0NBVEVHT1JZKGpzb24ucmVzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoanNvbilcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY29uc3QgRl9TSEFSRV9GRVRDSF9ERUxFVEVfU0hBUkVfQ0FURUdPUlkgPSAoY2F0ZWdvcnkscmVzb2x2ZSxyZWplY3QpPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4geyBcbiAgICAgICAgZmV0Y2hHZXQoYC9hcGkvc2hhcmUvZGVsZXRlL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCkudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oanNvbiA9PntcbiAgICAgICAgICAgIGlmKGpzb24uc3RhdHVzKXtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChGX1NIQVJFX0RFTEVURV9TSEFSRV9DQVRFR09SWShjYXRlZ29yeSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKGpzb24pXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IEZfU0hBUkVfRkVUQ0hfU0FWRV9TSEFSRV9JVEVNID0gKGl0ZW0scmVzb2x2ZSxyZWplY3QpPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4geyBcbiAgICAgICAgZmV0Y2hQb3N0KCcvYXBpL3NoYXJlL3NhdmUvaXRlbScsaXRlbSkudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oanNvbiA9PntcbiAgICAgICAgICAgIGpzb24uc3RhdHVzJiZkaXNwYXRjaChGX1NIQVJFX1NBVkVfU0hBUkVfSVRFTShqc29uLnJlcykpXG4gICAgICAgICAgICByZXNvbHZlKGpzb24pXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IEZfU0hBUkVfRkVUQ0hfREVMRVRFX1NIQVJFX0lURU0gPSAoaXRlbSxyZXNvbHZlLHJlamVjdCk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICAgIGZldGNoR2V0KGAvYXBpL3NoYXJlL2RlbGV0ZS9jYXRlZ29yeS8ke2l0ZW0uY2F0ZWdvcnl9L2l0ZW0vJHtpdGVtLl9pZH1gKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbihqc29uID0+e1xuICAgICAgICAgICAgZGlzcGF0Y2goRl9TSEFSRV9ERUxFVEVfU0hBUkVfSVRFTShpdGVtLmNhdGVnb3J5LGl0ZW0uX2lkKSlcbiAgICAgICAgICAgIHJlc29sdmUoanNvbilcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY29uc3QgRl9TSEFSRV9GRVRDSF9VUExPQURfRklMRSA9IChmaWxlLG9uVXBsb2FkUHJvZ3Jlc3MscmVzb2x2ZSxyZWplY3QpPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgICAgICBmZXRjaFBvc3QoQVBJLmZpbGVVcGxvYWQsZmlsZSx7b25VcGxvYWRQcm9ncmVzc30pLnRoZW4ocmVzID0+IHJlcy5kYXRhKS50aGVuKGpzb24gPT57XG4gICAgICAgICAgICByZXNvbHZlKGpzb24pXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRl9DT01NT05fRkVUQ0hfU0VBUkNIID0gKHBhcmFtcyxyZXNvbHZlLHJlamVjdCk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoLyosIGdldFN0YXRlKi8pID0+IHtcbiAgICAgICAgZmV0Y2hQb3N0KGAke0FQSS5nZXRTZWFyY2hMaXN0fWAscGFyYW1zKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goRl9TSEFSRV9JTklUX0RBVEFfQUNUSU9OKGpzb24ucmVzfHxbXSkpO1xuICAgICAgICAgICAgcmVzb2x2ZShqc29uKVxuICAgICAgICB9KS5jYXRjaChlPT57XG4gICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi8uLi91dGlsL3ZhbGlkYXRlXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SXRlbSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIHZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsaWRhdGUgPSB0aGlzLnNldFZhbGlkYXRlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5yZWFsVmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnZhbGlkYXRlcyA9IFtdXG4gICAgICAgIHRoaXMuc2V0VmFsaWRhdGUodmFsaWRhdGUpXG4gICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZVxuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZVxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2VcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgfVxuICAgIHNldFZhbGlkYXRlKHZhbGlkYXRlKSB7XG4gICAgICAgIGlmICghdmFsaWRhdGUpIHJldHVyblxuICAgICAgICBpZiAodHlwZW9mIHZhbGlkYXRlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVzLnB1c2godmFsaWRhdGUuYmluZCh0aGlzKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheSh2YWxpZGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZXMuY29uY2F0KHZhbGlkYXRlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZVZhbGlkYXRlKHZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZXMuZmlsdGVyKHYgPT4gdiAhPSB2YWxpZGF0ZSlcbiAgICB9XG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucmVhbFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbFZhbHVlXG4gICAgfVxuICAgIGNoZWNrKCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gdGhpcy52YWxpZGF0ZXMuZXZlcnkodmFsaWRhdGUgPT4gdmFsaWRhdGUodGhpcy52YWx1ZSkpXG4gICAgICAgIHJldHVybiBzdWNjZXNzXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCI7XG5cbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuaW1wb3J0IFdhcm5pbmcgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9XYXJuaW5nXCI7XG5pbXBvcnQgVGlwcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luZm9cIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiXG4vLyBjb3JlIGNvbXBvbmVudHNcblxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanN4XCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanN4XCI7XG5cbmltcG9ydCBEYW5nZXIgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9EYW5nZXIuanN4XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmQuanN4XCI7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRIZWFkZXIuanN4XCI7XG5pbXBvcnQgQ2FyZEljb24gZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkSWNvbi5qc3hcIjtcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzeFwiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZENvbnRlbnQuanN4XCI7XG5pbXBvcnQgQ2FyZEZvb3RlciBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRGb290ZXIuanN4XCI7XG5pbXBvcnQgeyAgQnV0dG9uICwgVG9vbHRpcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5cbmltcG9ydCBkYXNoYm9hcmRTdHlsZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3Qvdmlld3MvZGFzaGJvYXJkU3R5bGUuanN4XCI7XG5cblxuY2xhc3MgU2hhcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5vbk9wZW5FZGl0RGlhbG9nID0gdGhpcy5vbk9wZW5FZGl0RGlhbG9nLmJpbmQodGhpcylcbiAgICB0aGlzLmRlbGV0ZUl0ZW0gPSB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKVxuXHQgIHRoaXMuc3RhdGUgPSB7XG5cdFx0IHZhbHVlOiAwXG5cdCAgfVxuICB9XG4gIG9uT3BlbkVkaXREaWFsb2coaXRlbSl7XG4gICAgdGhpcy5wcm9wcy5vcGVuRWRpdEl0ZW1EaWFsb2coaXRlbSlcbiAgfVxuICBkZWxldGVJdGVtKGNhdGVnb3J5LGl0ZW0pe1xuICAgIHRoaXMucHJvcHMuZGVsZXRlSXRlbShjYXRlZ29yeSxpdGVtKVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBcbiAgfVxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZUluZGV4ID0gaW5kZXggPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogaW5kZXggfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgLCBzaGFyZX0gPSB0aGlzLnByb3BzLGNhdGVnb3JpZXMgPSBzaGFyZS5nZXQoJ2NhdGVnb3JpZXMnKXx8W11cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAge1xuICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSxpbmRleCk9PntcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIGtleT17aW5kZXh9ID5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxuICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY29sb3I9XCJpbmZvXCIgc3RhdHMgaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRJY29uIGNvbG9yPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uPntjYXRlZ29yeS5uYW1lfTwvSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX19VU0VSX0lORk9fXyYmKGNhdGVnb3J5LnNoYXJlRmxhZ3x8Y2F0ZWdvcnkuYmVsb25nID09IHdpbmRvdy5fX1VTRVJfSU5GT19fLl9pZCk/KFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIua3u+WKoOWGheWuuVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJmYWJcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwiQWRkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17KCk9Pnt0aGlzLnByb3BzLm9wZW5BZGRJdGVtRGlhbG9nKGNhdGVnb3J5Ll9pZCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk6bnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX19VU0VSX0lORk9fXyAmJiB3aW5kb3cuX19VU0VSX0lORk9fXy5faWQgPT0gY2F0ZWdvcnkuYmVsb25nPyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIue8lui+keWIhuexu1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJmYWJcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwiRWRpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpPT57dGhpcy5wcm9wcy5vcGVuRWRpdENhdGVnb3J5RGlhbG9nKGNhdGVnb3J5Ll9pZCxjYXRlZ29yeS5uYW1lKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiBjb2xvcj1cImFjdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi5Yig6Zmk5YiG57G7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImZhYlwiICBhcmlhLWxhYmVsPVwiRGVsZXRlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17KCk9Pnt0aGlzLnByb3BzLmRlbGV0ZUNhdGVnb3J5KGNhdGVnb3J5Ll9pZCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTpudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5jaGlsZHJlbiYmY2F0ZWdvcnkuY2hpbGRyZW4ubWFwKChpdGVtLGluZGV4KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQga2V5PXtpbmRleH0gZGVsZXRlSXRlbT17KCk9Pnt0aGlzLmRlbGV0ZUl0ZW0oY2F0ZWdvcnkuX2lkLGl0ZW0pfX0gb25PcGVuRWRpdERpYWxvZz17KCk9PnRoaXMub25PcGVuRWRpdERpYWxvZyhpdGVtKX0gaW5mbz17ey4uLml0ZW0saW1nOicuLi8uLi9wdWJsaWMvaWNvbi9sb2dvLnN2Zyd9fSB4cz17NH0gc209ezJ9IG1kPXsxfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIWNhdGVnb3J5LmNoaWxkcmVuIHx8IGNhdGVnb3J5LmNoaWxkcmVuLmxlbmd0aCA9PSAwID8oXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRGb290ZXIgc3RhdHM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGF0c30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5nZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EYW5nZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuivpeexu+S4i+aaguaXoOWGheWuue+8jOivt+a3u+WKoOacieaViOWGheWuuTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj4gXG4gICAgICAgICAgICAgICAgICAgICk6bnVsbFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgd2luZG93Ll9fVVNFUl9JTkZPX18uX2lkPyhcbiAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIGtleT17Y2F0ZWdvcmllcy5sZW5ndGh9IGFkZEJ1dHRvbj17dHJ1ZX0gb25DbGljaz17dGhpcy5wcm9wcy5vcGVuQWRkQ2F0ZWdvcnlEaWFsb2d9PlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj1cImluZm9cIiBzdGF0cyBpY29uPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEljb24gY29sb3I9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRJY29uPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBzdGF0cz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhdHN9PlxuICAgICAgICAgICAgICAgICAgICAgIDxEYW5nZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlwcyBjb2xvcj17J2FjdGlvbid9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Rhbmdlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPueCueWHu+WNoeeJh+a3u+WKoDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgKTpudWxsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblNoYXJlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRhc2hib2FyZFN0eWxlKShTaGFyZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmVcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG4vLyBpbXBvcnQgQ2xvdWQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG91ZFwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ1wiO1xuaW1wb3J0IERpYWxvZ1RpdGxlQ29tcG9uZW50IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ0FjdGlvblwiO1xuaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0XCI7XG5pbXBvcnQgU3dpdGNoTGFiZWxzIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL1NlbGVjdGlvbi9zd2l0Y2hMYWJlbHNcIlxuXG5pbXBvcnQgSW5wdXRJdGVtIGZyb20gXCIuL2lucHV0SXRlbVwiXG5pbXBvcnQgeyBpc05vdEVtcHR5IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdmFsaWRhdGVcIlxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6IFwiNDAwcHhcIlxuICB9XG59XG5cbmNsYXNzIFNoYXJlQ2F0ZWdvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25DYXRlZ29yeUNoYW5nZSA9IHRoaXMub25DYXRlZ29yeUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNhdGVnb3J5Q29uZmlybSA9IHRoaXMub25DYXRlZ29yeUNvbmZpcm0uYmluZCh0aGlzKVxuICAgIHRoaXMub25DaGFuZ2VTd2l0Y2hMYWJlbCA9IHRoaXMub25DaGFuZ2VTd2l0Y2hMYWJlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhdGVnb3J5OiBuZXcgSW5wdXRJdGVtKCcnLCBbaXNOb3RFbXB0eV0pLFxuICAgICAgc3dpdGNoTGFiZWxzOiBbe1xuICAgICAgICBzZWxlY3RzOiBbJ+WFrOWFseWIhuS6qycsICfmiJHnmoTmlLbol48nXSxcbiAgICAgICAgbGFiZWw6ICflhazlhbHliIbkuqsnLFxuICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICB2YWx1ZTogJ3B1YmxpYycsXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeSdcbiAgICAgIH0sIHtcbiAgICAgICAgc2VsZWN0czogWyflhYHorrjlhbbku5bkurrmt7vliqDliIbkuqsnLCAn56aB5q2i5YW25LuW5Lq65re75Yqg5YiG5LqrJ10sXG4gICAgICAgIGxhYmVsOiAn56aB5q2i5YW25LuW5Lq65re75Yqg5YiG5LqrJyxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIHZhbHVlOiAncHVibGljJyxcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5J1xuICAgICAgfV1cbiAgICB9XG4gIH1cbiAgb25JbnB1dEJsdXIobmFtZSkge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVbbmFtZV0sIHN1Y2Nlc3MgPSBzdGF0ZS5jaGVjaygpXG4gICAgc3RhdGUuc3VjY2VzcyA9IHN1Y2Nlc3M7XG4gICAgc3RhdGUuZXJyb3IgPSAhc3VjY2Vzc1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiBzdGF0ZVxuICAgIH0pXG4gIH1cbiAgb25DYXRlZ29yeUNoYW5nZShldikge1xuICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuc3RhdGUuY2F0ZWdvcnk7XG4gICAgY2F0ZWdvcnkudmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjYXRlZ29yeVxuICAgIH0pXG4gIH1cbiAgb25DYXRlZ29yeUNvbmZpcm0oKSB7XG4gICAgbGV0IGNhdGVnb3J5ID0gdGhpcy5zdGF0ZS5jYXRlZ29yeVxuICAgIGlmICghY2F0ZWdvcnkuY2hlY2soKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNhdGVnb3J5XG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMucHJvcHMuc2F2ZUNhdGVnb3J5KHtcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUuY2F0ZWdvcnkudmFsdWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBfaWQ6IHRoaXMucHJvcHMuX2lkLFxuICAgICAgcHVibGljRmxhZzogdGhpcy5zdGF0ZS5zd2l0Y2hMYWJlbHNbMF0uY2hlY2tlZCxcbiAgICAgIHNoYXJlRmxhZzogdGhpcy5zdGF0ZS5zd2l0Y2hMYWJlbHNbMV0uY2hlY2tlZCxcbiAgICB9KS50aGVuKChqc29uKSA9PiB7XG4gICAgICBpZiAoIWpzb24uc3RhdHVzKSB7XG4gICAgICAgIGlmIChqc29uLnJlcy5lcnJvciA9PSAnbmFtZScpIHtcbiAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmNhdGVnb3J5XG4gICAgICAgICAgY2F0ZWdvcnkuZXJyb3IgPSB0cnVlXG4gICAgICAgICAgY2F0ZWdvcnkuc3VjY2VzcyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXRlZ29yeVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY2F0ZWdvcnkudmFsdWUgIT0gbmV4dFByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNhdGVnb3J5OiBuZXcgSW5wdXRJdGVtKG5leHRQcm9wcy5kZWZhdWx0VmFsdWUsIFtpc05vdEVtcHR5XSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uQ2hhbmdlU3dpdGNoTGFiZWwoY2hhbmdlU3dpdGNoSW5kZXgsIGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzd2l0Y2hMYWJlbHM6IHRoaXMuc3RhdGUuc3dpdGNoTGFiZWxzLm1hcCgoc3dpdGNoTGFiZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PSBjaGFuZ2VTd2l0Y2hJbmRleCkge1xuICAgICAgICAgIHN3aXRjaExhYmVsLmNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgIHN3aXRjaExhYmVsLmxhYmVsID0gc3dpdGNoTGFiZWwuY2hlY2tlZCA/IHN3aXRjaExhYmVsLnNlbGVjdHNbMF0gOiBzd2l0Y2hMYWJlbC5zZWxlY3RzWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN3aXRjaExhYmVsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcywgdGl0bGUsIG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY3VzdG9tSW5wdXQgPSB7XG4gICAgICBmb3JtQ29udHJvbFByb3BzOiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NhdGVnb3J5LWZvcm0nXG4gICAgICB9LFxuICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICBwbGFjZWhvbGRlcjogXCJjYXRlZ29yeVwiLFxuICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiY2F0ZWdvcnlcIlxuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNhdGVnb3J5Q2hhbmdlLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5jYXRlZ29yeS52YWx1ZSxcbiAgICAgICAgb25CbHVyOiB0aGlzLm9uSW5wdXRCbHVyLmJpbmQodGhpcywgJ2NhdGVnb3J5JylcbiAgICAgIH0sXG4gICAgICBsYWJlbFRleHQ6ICcnLFxuICAgICAgaWQ6IFwic2hhcmUtY2F0ZWdvcnktaW5wdXRcIixcbiAgICAgIHN1Y2Nlc3M6IHRoaXMuc3RhdGUuY2F0ZWdvcnkuc3VjY2VzcyxcbiAgICAgIGVycm9yOiB0aGlzLnN0YXRlLmNhdGVnb3J5LmVycm9yLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ0NvbXBvbmVudCBtdWlDbGFzc2VzPXtjbGFzc2VzfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPERpYWxvZ1RpdGxlQ29tcG9uZW50PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9EaWFsb2dUaXRsZUNvbXBvbmVudD5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPEN1c3RvbUlucHV0IHsuLi5jdXN0b21JbnB1dH0gLz5cbiAgICAgICAgICA8U3dpdGNoTGFiZWxzIHN3aXRjaExhYmVscz17dGhpcy5zdGF0ZS5zd2l0Y2hMYWJlbHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU3dpdGNoTGFiZWx9IC8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbkNvbXBvbmVudD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DYXRlZ29yeUNvbmZpcm19ID7noa7lrpo8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICA8L0RpYWxvZ0NvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nU3R5bGUpKFNoYXJlQ2F0ZWdvcnkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuLy8gaW1wb3J0IENsb3VkIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvdWRcIjtcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgRGlhbG9nQ29tcG9uZW50IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dUaXRsZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nVGl0bGVcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dDb250ZW50XCI7XG5pbXBvcnQgRGlhbG9nQWN0aW9uQ29tcG9uZW50IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dBY3Rpb25cIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9DdXN0b21JbnB1dC9DdXN0b21JbnB1dFwiO1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9TZWxlY3RzL2N1c3RvbVNlbGVjdFwiO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL1Byb2dyZXNzL2xpbmVhclwiO1xuXG5cbmltcG9ydCB7IGlzTm90RW1wdHksIGlzVXJsIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdmFsaWRhdGVcIlxuaW1wb3J0IElucHV0SXRlbSBmcm9tIFwiLi9pbnB1dEl0ZW1cIlxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6IFwiNTAwcHhcIlxuICB9XG59XG5cblxuY2xhc3MgU2hhcmVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uVGl0bGVDaGFuZ2UgPSB0aGlzLm9uVGl0bGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25MaW5rQ2hhbmdlID0gdGhpcy5vbkxpbmtDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZSA9IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkl0ZW1Db25maXJtID0gdGhpcy5vbkl0ZW1Db25maXJtLmJpbmQodGhpcylcbiAgICB0aGlzLm9uSXRlbUNhbmNlbCA9IHRoaXMub25JdGVtQ2FuY2VsLmJpbmQodGhpcylcbiAgICB0aGlzLm9uSWNvbkNoYW5nZSA9IHRoaXMub25JY29uQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uVHlwZUNoYW5nZSA9IHRoaXMub25UeXBlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IG5ldyBJbnB1dEl0ZW0oJ+agh+mimCcsIFtpc05vdEVtcHR5XSksXG4gICAgICBsaW5rOiBuZXcgSW5wdXRJdGVtKCcnLCBbaXNOb3RFbXB0eSwgaXNVcmxdKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBuZXcgSW5wdXRJdGVtKCcnLCBbaXNOb3RFbXB0eV0pLFxuICAgICAgdHlwZToge1xuICAgICAgICBzZWxlY3RlZDogeyB2YWx1ZTogMCwgbmFtZTogJ+mTvuaOpScgfSxcbiAgICAgICAgb3B0aW9uczogW3sgdmFsdWU6IDAsIG5hbWU6ICfpk77mjqUnIH0sIHsgdmFsdWU6IDEsIG5hbWU6ICfmlofku7YnIH1dXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uVGl0bGVDaGFuZ2UoZXYpIHtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlXG4gICAgdGl0bGUudmFsdWUgPSBldi50YXJnZXQudmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpdGxlXG4gICAgfSlcbiAgfVxuICBvbklucHV0Qmx1cihuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZVtuYW1lXSwgc3VjY2VzcyA9IHN0YXRlLmNoZWNrKClcbiAgICBzdGF0ZS5zdWNjZXNzID0gc3VjY2VzcztcbiAgICBzdGF0ZS5lcnJvciA9ICFzdWNjZXNzXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHN0YXRlXG4gICAgfSlcbiAgfVxuICBvbkxpbmtDaGFuZ2UoZXYpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50eXBlLnNlbGVjdGVkLnZhbHVlID09IDApIHtcbiAgICAgIGxldCBsaW5rID0gdGhpcy5zdGF0ZS5saW5rXG4gICAgICBsaW5rLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlua1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpbGUgPSBldi50YXJnZXQuZmlsZXNbMF1cbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeScsIHRoaXMucHJvcHMuY2F0ZWdvcnkpXG4gICAgICBsZXQgdHlwZSA9IHRoaXMuc3RhdGUudHlwZSwgbGluayA9IHRoaXMuc3RhdGUubGlua1xuICAgICAgdHlwZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgIGxpbmsuZGlzYWJsZWQgPSB0cnVlXG4gICAgICBsaW5rLmVycm9yID0gZmFsc2VcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBsaW5rXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLmZldGNoVXBsb2FkRmlsZShmb3JtRGF0YSwgKHByb2dyZXNzKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGluayA9IHRoaXMuc3RhdGUubGlua1xuICAgICAgICAgICAgbGluay5wcm9ncmVzcyA9IChwcm9ncmVzcy5sb2FkZWQgLyBwcm9ncmVzcy50b3RhbCkgKiAxMDBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgfSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgIGxldCBsaW5rID0gdGhpcy5zdGF0ZS5saW5rXG4gICAgICAgICAgbGluay52YWx1ZSA9IGpzb24ubGlua1xuICAgICAgICAgIGxpbmsudXBsb2FkRmluaXNoID0gdHJ1ZVxuICAgICAgICAgIGxpbmsuZXJyb3IgPSBmYWxzZVxuICAgICAgICAgIGxpbmsuc3VjY2VzcyA9IHRydWVcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG5cbiAgICB9XG5cbiAgfVxuICBvbkRlc2NyaXB0aW9uQ2hhbmdlKGV2KSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5kZXNjcmlwdGlvblxuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZXNjcmlwdGlvblxuICAgIH0pXG4gIH1cbiAgb25JY29uQ2hhbmdlKGV2KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpY29uOiBldi50YXJnZXQuZmlsZXNbMF1cbiAgICB9KVxuICB9XG4gIG9uVHlwZUNoYW5nZShldikge1xuICAgIGxldCB7IGxpbmsgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnR5cGUub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT0gZXYudGFyZ2V0LnZhbHVlKVxuICAgIGlmIChzZWxlY3RlZC52YWx1ZSA9PSAxKSB7XG4gICAgICBsaW5rLnJlbW92ZVZhbGlkYXRlKGlzVXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rLnNldFZhbGlkYXRlKGlzVXJsKVxuICAgIH1cbiAgICBsaW5rLnZhbHVlID0gJyc7XG4gICAgbGluay5lcnJvciA9IGZhbHNlXG4gICAgbGluay5zdWNjZXNzID0gZmFsc2VcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS50eXBlLFxuICAgICAgICBzZWxlY3RlZFxuICAgICAgfSxcbiAgICAgIGxpbmtcbiAgICB9KVxuICB9XG4gIG9uSXRlbUNvbmZpcm0oKSB7XG4gICAgbGV0IHsgdGl0bGUsIGxpbmsgfSA9IHRoaXMuc3RhdGUsXG4gICAgICBpc1RpdGxlID0gdGl0bGUuY2hlY2soKSxcbiAgICAgIGlzTGluayA9IGxpbmsuY2hlY2soKVxuICAgIGlmICghaXNUaXRsZSkge1xuICAgICAgdGl0bGUuZXJyb3IgPSB0cnVlXG4gICAgICB0aXRsZS5zdWNjZXNzID0gZmFsc2VcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aXRsZVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIWlzTGluaykge1xuICAgICAgbGluay5lcnJvciA9IHRydWVcbiAgICAgIGxpbmsuc3VjY2VzcyA9IGZhbHNlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlua1xuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSwgcGFyYW1zID0ge1xuICAgICAgY2F0ZWdvcnk6IHRoaXMucHJvcHMuY2F0ZWdvcnksXG4gICAgICBfaWQ6IHRoaXMucHJvcHMuaXRlbSA/IHRoaXMucHJvcHMuaXRlbS5faWQgOiAnJyxcbiAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLnRpdGxlLnZhbHVlLFxuICAgICAgbGluazogdGhpcy5zdGF0ZS5saW5rLnZhbHVlLFxuICAgICAgaWNvbjogdGhpcy5zdGF0ZS5pY29uLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgIH07XG5cbiAgICBPYmplY3QuZW50cmllcyhwYXJhbXMpLm1hcChpdGVtID0+IHtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChpdGVtWzBdLGl0ZW1bMV0pXG4gICAgICBmb3JtRGF0YS5hcHBlbmQuYXBwbHkoZm9ybURhdGEsIGl0ZW0pXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLnNhdmVJdGVtKGZvcm1EYXRhKS50aGVuKChqc29uKSA9PiB7XG4gICAgICBpZiAoanNvbi5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgICB9IGVsc2UgaWYgKGpzb24ucmVzLmVycm9yID09PSAndGl0bGUnKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGU7XG4gICAgICAgIHRpdGxlLmVycm9yID0gdHJ1ZVxuICAgICAgICB0aXRsZS5zdWNjZXNzID0gZmFsc2VcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9KVxuXG5cbiAgfVxuICBvbkl0ZW1DYW5jZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5jYW5jZWxJdGVtKClcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuICByZXNldCgpIHtcbiAgICBsZXQgdHlwZSA9IHRoaXMuc3RhdGUudHlwZSwgbGluayA9IHRoaXMuc3RhdGUubGlua1xuICAgIHR5cGUuZGlzYWJsZWQgPSBmYWxzZVxuICAgIGxpbmsuZGlzYWJsZWQgPSBmYWxzZVxuICAgIGxpbmsudXBsb2FkRmluaXNoID0gZmFsc2VcbiAgICBsaW5rLmVycm9yID0gZmFsc2VcbiAgICBsaW5rLnN1Y2Nlc3MgPSBmYWxzZVxuICAgIGxpbmsucHJvZ3Jlc3MgPSAwXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0eXBlLFxuICAgICAgbGlua1xuICAgIH0pXG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLml0ZW0pIHtcbiAgICAgIGxldCB7IHRpdGxlLCBsaW5rLCBkZXNjcmlwdGlvbiB9ID0gbmV4dFByb3BzLml0ZW1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aXRsZTogbmV3IElucHV0SXRlbSh0aXRsZSwgW2lzTm90RW1wdHldKSxcbiAgICAgICAgbGluazogbmV3IElucHV0SXRlbShsaW5rLCBbaXNOb3RFbXB0eSwgaXNVcmxdKSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5ldyBJbnB1dEl0ZW0oZGVzY3JpcHRpb24sIFtpc05vdEVtcHR5XSksXG4gICAgICB9KVxuXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMsIGRpYWxvZ1RpdGxlLCBvcGVuIH0gPSB0aGlzLnByb3BzLCB7IHRpdGxlLCBsaW5rLCBkZXNjcmlwdGlvbiwgdHlwZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjdXN0b21JbnB1dCA9IHtcbiAgICAgIGZvcm1Db250cm9sUHJvcHM6IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnaXRlbS1mb3JtJ1xuICAgICAgfSxcbiAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiY2F0ZWdvcnlcIixcbiAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcImNhdGVnb3J5XCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVGV4dDogJ+agh+mimCcsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ0NvbXBvbmVudCBtdWlDbGFzc2VzPXtjbGFzc2VzfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPERpYWxvZ1RpdGxlQ29tcG9uZW50PlxuICAgICAgICAgIHtkaWFsb2dUaXRsZX1cbiAgICAgICAgPC9EaWFsb2dUaXRsZUNvbXBvbmVudD5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsnc2hhcmUtaXRlbS1kaWFsb2ctdGl0bGUnfVxuICAgICAgICAgICAgey4uLmN1c3RvbUlucHV0fVxuICAgICAgICAgICAgbGFiZWxUZXh0PXsn5qCH6aKYJ31cbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgLi4uY3VzdG9tSW5wdXQuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfmoIfpopgnLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vblRpdGxlQ2hhbmdlLFxuICAgICAgICAgICAgICB2YWx1ZTogdGl0bGUudmFsdWUsXG4gICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMsICd0aXRsZScpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3VjY2Vzcz17dGl0bGUuc3VjY2Vzc31cbiAgICAgICAgICAgIGVycm9yPXt0aXRsZS5lcnJvcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDdXN0b21TZWxlY3QgaWQ9eydzaGFyZS1pdGVtLWRpYWxvZy10eXBlLXNlbGVjdCd9XG4gICAgICAgICAgICBsYWJlbFRleHQ9eyfnsbvlnosnfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3R5cGUuZGlzYWJsZWR9XG4gICAgICAgICAgICBzZWxlY3RlZD17dHlwZS5zZWxlY3RlZH1cbiAgICAgICAgICAgIG9wdGlvbnM9e3R5cGUub3B0aW9uc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVHlwZUNoYW5nZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXt0eXBlLmRpc2FibGVkfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eydzaGFyZS1pdGVtLWRpYWxvZy1saW5rJ31cbiAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgLi4uY3VzdG9tSW5wdXQuZm9ybUNvbnRyb2xQcm9wcyxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGxpbmsuZGlzYWJsZWRcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBsYWJlbFRleHQ9eyfpk77mjqUnfVxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAuLi5jdXN0b21JbnB1dC5pbnB1dFByb3BzLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+mTvuaOpScsXG4gICAgICAgICAgICAgIHR5cGU6ICh0eXBlLnNlbGVjdGVkLnZhbHVlID09IDAgfHwgbGluay51cGxvYWRGaW5pc2gpID8gJ3RleHQnIDogJ2ZpbGUnLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkxpbmtDaGFuZ2UsXG4gICAgICAgICAgICAgIHZhbHVlOiAodHlwZS5zZWxlY3RlZC52YWx1ZSA9PSAwIHx8IGxpbmsudXBsb2FkRmluaXNoKSA/IGxpbmsudmFsdWUgOiBcIlwiLFxuICAgICAgICAgICAgICBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzLCAnbGluaycpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3VjY2Vzcz17bGluay5zdWNjZXNzfVxuICAgICAgICAgICAgZXJyb3I9e2xpbmsuZXJyb3J9XG5cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFsdWU9e2xpbmsucHJvZ3Jlc3N9IGhpZGU9e3R5cGUuc2VsZWN0ZWQudmFsdWUgPT0gMCB8fCBsaW5rLnVwbG9hZEZpbmlzaH0gLz5cbiAgICAgICAgICA8L0N1c3RvbUlucHV0PlxuXG4gICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsnc2hhcmUtaXRlbS1kaWFsb2ctZGVzY3JpcHRpb24nfVxuICAgICAgICAgICAgey4uLmN1c3RvbUlucHV0fVxuICAgICAgICAgICAgbGFiZWxUZXh0PXsn5o+P6L+wJ31cbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgLi4uY3VzdG9tSW5wdXQuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfmj4/ov7AnLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlLFxuICAgICAgICAgICAgICB2YWx1ZTogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMsICdkZXNjcmlwdGlvbicpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3VjY2Vzcz17ZGVzY3JpcHRpb24uc3VjY2Vzc31cbiAgICAgICAgICAgIGVycm9yPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3NoYXJlLWl0ZW0tZGlhbG9nLWltYWdlJ31cbiAgICAgICAgICAgIHsuLi5jdXN0b21JbnB1dH1cbiAgICAgICAgICAgIGxhYmVsVGV4dD17J+Wbvuaghyd9XG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIC4uLmN1c3RvbUlucHV0LmlucHV0UHJvcHMsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5Zu+5qCHJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgYWNjZXB0OiAnaW1hZ2UvKidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25JY29uQ2hhbmdlXG4gICAgICAgICAgICB9fSAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uSXRlbUNvbmZpcm19ID7noa7lrpo8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGVtQ2FuY2VsfSA+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgPC9EaWFsb2dDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ1N0eWxlKShTaGFyZUl0ZW0pO1xuIiwiY29uc3QgQVBJX1JPT1QgPSAnL2FwaS8nXG5leHBvcnQgY29uc3QgIEFQSSA9IHtcbiAgICBnZXRTaGFyZUxpc3Q6YCR7QVBJX1JPT1R9c2hhcmUvbGlzdGAsXG4gICAgc2F2ZVNoYXJlQ2F0ZWdvcnk6YCR7QVBJX1JPT1R9c2hhcmUvc2F2ZS9jYXRlZ29yeWAsXG4gICAgZmlsZVVwbG9hZDpgJHtBUElfUk9PVH1maWxlL3VwbG9hZGAsXG4gICAgZ2V0U2VhcmNoTGlzdDpgJHtBUElfUk9PVH1zaGFyZS9zZWFyY2hgXG59IiwiZXhwb3J0IGNvbnN0IFVQREFURV9FWFRFTkRfSU5GTyA9IFwiRl9TSEFSRV9VUERBVEVfRVhURU5EX0lORk9cIlxuZXhwb3J0IGNvbnN0IFNBVkVfU0hBUkVfQ0FURUdPUlkgPSBcIkZfU0hBUkVfU0FWRV9TSEFSRV9DQVRFR09SWVwiXG5leHBvcnQgY29uc3QgREVMRVRFX1NIQVJFX0NBVEVHT1JZID0gXCJGX1NIQVJFX0RFTEVURV9TSEFSRV9DQVRFR09SWVwiXG5leHBvcnQgY29uc3QgSU5JVF9EQVRBID0gXCJGX1NIQVJFX0lOSVRfREFUQVwiXG5leHBvcnQgY29uc3QgU0FWRV9TSEFSRV9JVEVNID0gXCJGX1NIQVJFX1NBVkVfU0hBUkVfSVRFTVwiXG5leHBvcnQgY29uc3QgREVMRVRFX1NIQVJFX0lURU0gPSBcIkZfU0hBUkVfREVMRVRFX1NIQVJFX0lURU1cIlxuIiwiaW1wb3J0IFNoYXJlUGFnZSBmcm9tICcuL3ZpZXdzL3NoYXJlLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgU2hhcmVQYWdlIiwiaW1wb3J0IHNoYXJlIGZyb20gJy4vc2hhcmUuanN4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2hhcmVcbn1cbiIsImltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL3NoYXJlLmpzeCdcblxuY29uc3QgcmVkdWNlck1hcCA9IG5ldyBNYXAoKTtcblxucmVkdWNlck1hcC5zZXQodHlwZXMuVVBEQVRFX0VYVEVORF9JTkZPLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlXG4gICAgfVxufSlcblxucmVkdWNlck1hcC5zZXQodHlwZXMuSU5JVF9EQVRBLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiBzdGF0ZS51cGRhdGUoJ2NhdGVnb3JpZXMnLChjYXRlZ29yaWVzKT0+IEltbXV0YWJsZS5mcm9tSlMoW10pLmNvbmNhdChhY3Rpb24uY2F0ZWdvcmllcykpXG59KVxuXG5yZWR1Y2VyTWFwLnNldCh0eXBlcy5TQVZFX1NIQVJFX0NBVEVHT1JZLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiBzdGF0ZS51cGRhdGUoJ2NhdGVnb3JpZXMnLChjYXRlZ29yaWVzKT0+e1xuICAgICAgICBpZihjYXRlZ29yaWVzLnNvbWUoY2F0ZWdvcnk9PmNhdGVnb3J5Ll9pZD09YWN0aW9uLmNhdGVnb3J5Ll9pZCkpe1xuICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5PT57XG4gICAgICAgICAgICAgICAgaWYoY2F0ZWdvcnkuX2lkPT1hY3Rpb24uY2F0ZWdvcnkuX2lkKXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSBhY3Rpb24uY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5XG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLnB1c2goYWN0aW9uLmNhdGVnb3J5KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59KVxucmVkdWNlck1hcC5zZXQodHlwZXMuREVMRVRFX1NIQVJFX0NBVEVHT1JZLChzdGF0ZSxhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gc3RhdGUudXBkYXRlKCdjYXRlZ29yaWVzJywoY2F0ZWdvcmllcyk9PmNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5Ll9pZCAhPSBhY3Rpb24uY2F0ZWdvcnkpKVxufSlcbnJlZHVjZXJNYXAuc2V0KHR5cGVzLlNBVkVfU0hBUkVfSVRFTSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gc3RhdGUudXBkYXRlKCdjYXRlZ29yaWVzJywoY2F0ZWdvcmllcyk9PntcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5PT57XG4gICAgICAgICAgICBpZihjYXRlZ29yeS5faWQgPT0gYWN0aW9uLml0ZW0uY2F0ZWdvcnkpe1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3J5LmNoaWxkcmVuLnNvbWUoaXRlbSA9PiBpdGVtLl9pZCA9PSBhY3Rpb24uaXRlbS5faWQpKXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2hpbGRyZW4gPSBjYXRlZ29yeS5jaGlsZHJlbi5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLl9pZCA9PSBhY3Rpb24uaXRlbS5faWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBhY3Rpb24uaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2hpbGRyZW4ucHVzaChhY3Rpb24uaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnlcbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxucmVkdWNlck1hcC5zZXQodHlwZXMuREVMRVRFX1NIQVJFX0lURU0sKHN0YXRlLGFjdGlvbikgPT4ge1xuXG4gICAgcmV0dXJuIHN0YXRlLnVwZGF0ZSgnY2F0ZWdvcmllcycsKGNhdGVnb3JpZXMpPT57XG4gICAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBpZihjYXRlZ29yeS5faWQgPT0gYWN0aW9uLmNhdGVnb3J5KXtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5jaGlsZHJlbiA9IGNhdGVnb3J5LmNoaWxkcmVuLmZpbHRlcihpdGVtPT5pdGVtLl9pZCE9YWN0aW9uLl9pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeVxuICAgICAgICB9KVxuICAgIH0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChyZWR1Y2VyTWFwLmhhcyhhY3Rpb24udHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIChyZWR1Y2VyTWFwLmdldChhY3Rpb24udHlwZSkpKHN0YXRlLCBhY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU/c3RhdGU6bnVsbDtcbn0iLCJpbXBvcnQgc2hhcmUgZnJvbSAnLi9zaGFyZS5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaGFyZVxufSIsIlxubGV0IGRlZmF1bHRTdG9yZSA9IHtcbiAgICBjYXRlZ29yaWVzOltdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRTdG9yZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIHNoYXJlQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvc2hhcmUnXG5pbXBvcnQgU2hhcmVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZSdcbmltcG9ydCBTaGFyZUl0ZW1Db21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZUl0ZW0nXG5pbXBvcnQgU2hhcmVDYXRlZ29yeUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlQ2F0ZWdvcnknXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9TbmFja2Jhci9TbmFja2JhcidcbmNsYXNzIFNoYXJlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc2F2ZUNhdGVnb3J5ID0gdGhpcy5zYXZlQ2F0ZWdvcnkuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gdGhpcy5kZWxldGVDYXRlZ29yeS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub3BlbkFkZENhdGVnb3J5RGlhbG9nID0gdGhpcy5vcGVuQWRkQ2F0ZWdvcnlEaWFsb2cuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9wZW5FZGl0Q2F0ZWdvcnlEaWFsb2cgPSB0aGlzLm9wZW5FZGl0Q2F0ZWdvcnlEaWFsb2cuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9wZW5BZGRJdGVtRGlhbG9nID0gdGhpcy5vcGVuQWRkSXRlbURpYWxvZy5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub3BlbkVkaXRJdGVtRGlhbG9nID0gdGhpcy5vcGVuRWRpdEl0ZW1EaWFsb2cuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnNhdmVJdGVtID0gdGhpcy5zYXZlSXRlbS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbSA9IHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuY2FuY2VsSXRlbSA9IHRoaXMuY2FuY2VsSXRlbS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYXRlZ29yeURpYWxvZzpmYWxzZSxcbiAgICAgICAgICAgIGl0ZW1EaWFsb2c6e1xuICAgICAgICAgICAgICAgIG9wZW46ZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlhbG9nVGl0bGU6J+a3u+WKoOmhueebricsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6JycsXG4gICAgICAgICAgICAgICAgaXRlbTpudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcnk6JycsXG4gICAgICAgICAgICBjYXRlZ29yeU5hbWU6JycsXG4gICAgICAgICAgICBjYXRlZ29yeVRpdGxlOifmt7vliqDliIbnsbsnLFxuICAgICAgICAgICAgY2F0ZWdvcnlJZDonJyxcbiAgICAgICAgICAgIHNuYWNrYmFyOntcbiAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOjMwMDAsXG4gICAgICAgICAgICAgICAgb3BlbjpmYWxzZSxcbiAgICAgICAgICAgICAgICBwbGFjZTondGMnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6JycsXG4gICAgICAgICAgICAgICAgY29sb3I6J3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIG9uQ2xvc2U6KCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFja2Jhcjp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zbmFja2JhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIG9wZW5BZGRDYXRlZ29yeURpYWxvZygpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6JycsXG4gICAgICAgICAgICBjYXRlZ29yeVRpdGxlOifmt7vliqDliIbnsbsnLFxuICAgICAgICAgICAgY2F0ZWdvcnlEaWFsb2c6dHJ1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5TmFtZTon5paw5YiG57G75ZCNJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBvcGVuRWRpdENhdGVnb3J5RGlhbG9nKF9pZCxuYW1lKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXRlZ29yeUlkOl9pZCxcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGU6J+S/ruaUueWIhuexuycsXG4gICAgICAgICAgICBjYXRlZ29yeURpYWxvZzp0cnVlLFxuICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOm5hbWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2F2ZUNhdGVnb3J5KGNhdGVnb3J5KXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hTYXZlQ2F0ZWdvcnkodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucGFnZSxjYXRlZ29yeSxyZXNvbHZlLHJlamVjdClcbiAgICAgICAgfSkudGhlbigoanNvbik9PntcbiAgICAgICAgICAgIGlmKGpzb24uc3RhdHVzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlEaWFsb2c6ZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGpzb25cbiAgICAgICAgfSkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGRlbGV0ZUNhdGVnb3J5KF9pZCl7XG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEZWxldGVDYXRlZ29yeShfaWQscmVzb2x2ZSxyZWplY3QpXG4gICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNuYWNrYmFyOntcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zbmFja2JhcixcbiAgICAgICAgICAgICAgICAgICAgb3Blbjp0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOifor6Xnsbvlt7Lnu4/ooqvliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjonZGFuZ2VyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBvcGVuQWRkSXRlbURpYWxvZyhjYXRlZ29yeSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlbURpYWxvZzp7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5pdGVtRGlhbG9nLFxuICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSxcbiAgICAgICAgICAgICAgICBkaWFsb2dUaXRsZTon5re75Yqg6aG555uuJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBpdGVtOicnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIG9wZW5FZGl0SXRlbURpYWxvZyhpdGVtKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpdGVtRGlhbG9nOntcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLml0ZW1EaWFsb2csXG4gICAgICAgICAgICAgICAgb3Blbjp0cnVlLFxuICAgICAgICAgICAgICAgIGRpYWxvZ1RpdGxlOifkv67mlLnpobnnm64nLFxuICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6aXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzYXZlSXRlbShpdGVtKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hTYXZlSXRlbShpdGVtLHJlc29sdmUscmVqZWN0KVxuICAgICAgICB9KS50aGVuKChqc29uKT0+e1xuICAgICAgICAgICAgaWYoanNvbi5zdGF0dXMpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtRGlhbG9nOntcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaXRlbURpYWxvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ganNvbiBcbiAgICAgICAgfSkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZGVsZXRlSXRlbShjYXRlZ29yeSxpdGVtKXtcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERlbGV0ZUl0ZW0oe2NhdGVnb3J5LC4uLml0ZW19LHJlc29sdmUscmVqZWN0KVxuICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzbmFja2Jhcjp7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc25hY2tiYXIsXG4gICAgICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTon6K+l6aG55bey57uP6KKr5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6J2RhbmdlcidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2FuY2VsSXRlbSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGl0ZW1EaWFsb2c6e1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaXRlbURpYWxvZyxcbiAgICAgICAgICAgICAgICBvcGVuOmZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKG5leHRQcm9wcy5tYXRjaC5wYXJhbXMucGFnZSE9dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucGFnZSl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoSW5pdFNoYXJlTGlzdChuZXh0UHJvcHMubWF0Y2gucGFyYW1zLnBhZ2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEluaXRTaGFyZUxpc3QodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucGFnZSlcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPFNoYXJlQ29tcG9uZW50IGRlbGV0ZUNhdGVnb3J5PXt0aGlzLmRlbGV0ZUNhdGVnb3J5fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkVkaXRJdGVtRGlhbG9nPXt0aGlzLm9wZW5FZGl0SXRlbURpYWxvZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5BZGRJdGVtRGlhbG9nPXt0aGlzLm9wZW5BZGRJdGVtRGlhbG9nfSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5BZGRDYXRlZ29yeURpYWxvZz17dGhpcy5vcGVuQWRkQ2F0ZWdvcnlEaWFsb2d9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRWRpdENhdGVnb3J5RGlhbG9nPXt0aGlzLm9wZW5FZGl0Q2F0ZWdvcnlEaWFsb2d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7dGhpcy5kZWxldGVJdGVtfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPFNoYXJlQ2F0ZWdvcnlDb21wb25lbnQgc2F2ZUNhdGVnb3J5PXt0aGlzLnNhdmVDYXRlZ29yeX0gIG9wZW49e3RoaXMuc3RhdGUuY2F0ZWdvcnlEaWFsb2d9IHsuLi50aGlzLnByb3BzfSBfaWQ9e3RoaXMuc3RhdGUuY2F0ZWdvcnlJZH0gdGl0bGU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlUaXRsZX0gZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmNhdGVnb3J5TmFtZX0vPlxuICAgICAgICAgICAgICAgIDxTaGFyZUl0ZW1Db21wb25lbnQgXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEl0ZW09e3RoaXMuY2FuY2VsSXRlbX0gXG4gICAgICAgICAgICAgICAgICAgIHNhdmVJdGVtPXt0aGlzLnNhdmVJdGVtfVxuICAgICAgICAgICAgICAgICAgICBmZXRjaFVwbG9hZEZpbGU9e3RoaXMucHJvcHMuZmV0Y2hVcGxvYWRGaWxlfVxuICAgICAgICAgICAgICAgICAgICBvcGVuID0ge3RoaXMuc3RhdGUuaXRlbURpYWxvZy5vcGVufVxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5pdGVtRGlhbG9nfSBcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPFNuYWNrYmFyIHsuLi50aGlzLnN0YXRlLnNuYWNrYmFyfS8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGFyZTogc3RhdGUuZ2V0KFwic2hhcmVcIilcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBmZXRjaEluaXRTaGFyZUxpc3Q6IChwYWdlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNoYXJlQWN0aW9uLkZfU0hBUkVfRkVUQ0hfU0hBUkVfSU5JVF9BQ1RJT04ocGFnZSkpXG4gICAgfSxcbiAgICBmZXRjaFNhdmVDYXRlZ29yeTogKHBhZ2UsY2F0ZWdvcnkscmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2hhcmVBY3Rpb24uRl9TSEFSRV9GRVRDSF9TQVZFX1NIQVJFX0NBVEVHT1JZKHBhZ2UsY2F0ZWdvcnkscmVzb2x2ZSxyZWplY3QpKVxuICAgIH0sXG4gICAgZmV0Y2hEZWxldGVDYXRlZ29yeTogKF9pZCxyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzaGFyZUFjdGlvbi5GX1NIQVJFX0ZFVENIX0RFTEVURV9TSEFSRV9DQVRFR09SWShfaWQscmVzb2x2ZSxyZWplY3QpKVxuICAgIH0sXG4gICAgZmV0Y2hTYXZlSXRlbTogKGl0ZW0scmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2hhcmVBY3Rpb24uRl9TSEFSRV9GRVRDSF9TQVZFX1NIQVJFX0lURU0oaXRlbSxyZXNvbHZlLHJlamVjdCkpXG4gICAgfSxcbiAgICBmZXRjaERlbGV0ZUl0ZW06KGl0ZW0scmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2hhcmVBY3Rpb24uRl9TSEFSRV9GRVRDSF9ERUxFVEVfU0hBUkVfSVRFTShpdGVtLHJlc29sdmUscmVqZWN0KSlcbiAgICB9LFxuICAgIGZldGNoVXBsb2FkRmlsZTooZmlsZSxvblVwbG9hZFByb2dyZXNzLHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNoYXJlQWN0aW9uLkZfU0hBUkVfRkVUQ0hfVVBMT0FEX0ZJTEUoZmlsZSxvblVwbG9hZFByb2dyZXNzLHJlc29sdmUscmVqZWN0KSlcbiAgICB9ICAgIFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2hhcmVDb250YWluZXIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuXG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmNzc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlL2luZGV4LmpzeFwiXG5pbXBvcnQgaW5kZXhSb3V0ZXMgZnJvbSBcIi4vcm91dGUvaW5kZXguanN4XCI7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiLi9wdWJsaWMvbm90aWZpY2F0aW9uXCJcblxuaW1wb3J0IFNva2NldFNlcnZlciBmcm9tIFwiLi9wdWJsaWMvc29ja2V0XCJcbmltcG9ydCB7IFJFRElTX01FU1NBR0UgfSBmcm9tIFwiLi4vY29uZmlnL2NvbnN0Q29uZmlnXCJcblxuY29uc3Qgbm90aWZ5ID0gbmV3IE5vdGlmaWNhdGlvbnMoe3RpdGxlOiforrDlvZXlv6vkuZAnfSlcblxubm90aWZ5LnNob3dOb3RpZnkoKVxuXG5uZXcgU29rY2V0U2VydmVyKHtcbiAgZXZlbnRzOntcbiAgICAnY29ubmVjdCc6KCk9PntcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0JylcbiAgICB9LFxuICAgIFtSRURJU19NRVNTQUdFLlNIQVJFX01FU1NBR0UuRVZFTlRdOihtZXNzYWdlPSd7fScpPT57XG4gICAgICBjb25zdCBtc2cgPSBKU09OLnBhcnNlKG1lc3NhZ2UpXG4gICAgICBpZihtc2cudXNlciAmJiB3aW5kb3cuX19VU0VSX0lORk9fXyAmJiBtc2cudXNlciE9d2luZG93Ll9fVVNFUl9JTkZPX18uX2lkKXtcbiAgICAgICAgIG5vdGlmeS5zaG93Tm90aWZ5KHtib2R5OkpTT04ucGFyc2UobWVzc2FnZSkuYm9keX0pXG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuXG5jb25zdCBoaXN0ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3R9PlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAge2luZGV4Um91dGVzLm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3V0ZSBwYXRoPXtwcm9wLnBhdGh9IGNvbXBvbmVudD17cHJvcC5jb21wb25lbnR9IGtleT17a2V5fSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcbiIsIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGNvbmZpZyA9PiB7XG4gICAgY29uZmlnLmhlYWRlcnMgPSB7IC4uLmNvbmZpZy5oZWFkZXJzLCAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScgLGFwcE5hbWU6bmF2aWdhdG9yLmFwcE5hbWV9XG4gICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKGNvbmZpZy51cmwuaW5jbHVkZXMoXCI/XCIpKSB7XG4gICAgICAgIGNvbmZpZy51cmwgPSBjb25maWcudXJsICsgXCImdj1cIiArIHI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnLnVybCA9IGNvbmZpZy51cmwgKyBcIj92PVwiICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZ1xufSlcbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVxufSwgKGVycm9yKSA9PiB7XG4gICAgXG59KVxuXG5mdW5jdGlvbiBxdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICByZXR1cm4gcGFyYW1zID8gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgICAubWFwKGsgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGspICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trXSkpXG4gICAgICAgIC5qb2luKCcmJykgOiAnJztcbn1cblxuZXhwb3J0IGNvbnN0IGdlblVybEZyb21QYXJhbXMgPSAodXJsLCBwYXJhbXMpID0+IHtcbiAgICBpZiAodXJsICYmIHBhcmFtcykge1xuICAgICAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcyB9XG4gICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgcXVlcnlQYXJhbXMocGFyYW1zKVxuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cblxuLyoqXG4gKiDku47lhajlsYDlj5jph4/nm7TmjqXorr/pl64gcHJldkNvbmQg44CQ5LiN5bu66K6u5L2/55So77yM5pyA5aW95LuOIHN0b3JlIOiOt+WPluOAkVxuICovXG5leHBvcnQgY29uc3QgZ2V0UHJldkNvbmRGcm9tR2xvYmFsID0gKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cuR2xvYmFsU2VhcmNoQ3JpdGVyaWEgfHwge31cbn1cblxuLyoqIFxuICog5LuO5YWo5bGA5Y+Y6YeP55u05o6l6K6/6ZeuIEdsb2JhbFN3aXRjaGVzICDjgJDkuI3lu7rorq7kvb/nlKjvvIzmnIDlpb3ku44gc3RvcmUg6I635Y+W44CRXG4qL1xuZXhwb3J0IGNvbnN0IGdldFN3aXRjaGVzRnJvbUdsb2JhbCA9ICgpID0+IHtcbiAgICByZXR1cm4gd2luZG93Lkdsb2JhbFN3aXRjaGVzIHx8IHt9XG59XG5cbi8qKiBcbiAqIOS7juWFqOWxgOWPmOmHj+ebtOaOpeiuv+mXriBHbG9iYWxDb25maWdzICDjgJDkuI3lu7rorq7kvb/nlKjvvIzmnIDlpb3ku44gc3RvcmUg6I635Y+W44CRXG4qL1xuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3NGcm9tR2xvYmFsID0gKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cuR2xvYmFsQ29uZmlncyB8fCB7fVxufVxuXG4vKipcbiAqIOS7juWFqOWxgOWPmOmHj+ebtOaOpeiuv+mXriBHbG9iYWxPcmRlckRhdGEg44CQ5LiN5bu66K6u5L2/55So77yM5pyA5aW95LuOIHN0b3JlIOiOt+WPluOAkVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJEYXRhRnJvbUdsb2JhbCA9ICgpID0+IHtcbiAgICByZXR1cm4gd2luZG93Lkdsb2JhbE9yZGVyRGF0YSB8fCB7fVxufVxuXG5sZXQgcHJldkNvbmQgPSBnZXRQcmV2Q29uZEZyb21HbG9iYWwoKSxcbiAgICB0cmFuc2FjdGlvbklEID0gcHJldkNvbmQudHJhbnNhY3Rpb25JRCxcbiAgICBleHRIZWFkZXIgPSB0cmFuc2FjdGlvbklEID8geyB0cmFuc2FjdGlvbklEIH0gOiB7fVxuXG4vL+azqOWFpemineWklueahCBleHRIZWFkZXIg5L+h5oGvXG5leHBvcnQgY29uc3QgaW5qZWN0RmV0Y2hFeHRIZWFkZXIgPSAoZXh0KSA9PiB7XG4gICAgZXh0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7fSwgZXh0SGVhZGVyLCBleHQpXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaEpzb25wR2V0ID0gKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgdXJsID0gZ2VuVXJsRnJvbVBhcmFtcyh1cmwsIHBhcmFtcylcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZldGNoSnNvbnAodXJsLCBPYmplY3QuYXNzaWduKHsgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSwgZXh0SGVhZGVyKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKHsgZGF0YTogcmVzLmpzb24oKSB9KVxuICAgICAgICAgICAgfSwgcmVhc29uID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KHJlYXNvbilcbiAgICAgICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoR2V0ID0gKHVybCwgcGFyYW1zLCBheGlvc0V4dGVuZE9wcyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIGZldGNoR2V0V2l0aEhlYWRlcnModXJsLCBwYXJhbXMsIHt9LCBheGlvc0V4dGVuZE9wcyk7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdldFdpdGhIZWFkZXJzID0gKHVybCwgcGFyYW1zLCBoZWFkZXJzID0ge30sIGF4aW9zRXh0ZW5kT3BzID0ge30pID0+IHtcbiAgICB1cmwgPSBnZW5VcmxGcm9tUGFyYW1zKHVybCwgcGFyYW1zKVxuICAgIGxldCBvcHMgPSB7XG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXG4gICAgICAgIH0sIGV4dEhlYWRlciwgaGVhZGVycylcbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbihvcHMsIGF4aW9zRXh0ZW5kT3BzKTtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCwgb3BzKVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hQb3N0ID0gKHVybCwgcGFyYW1zLCBheGlvc0V4dGVuZE9wcyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIGZldGNoUG9zdFdpdGhIZWFkZXJzKHVybCwgcGFyYW1zLCB7fSwgYXhpb3NFeHRlbmRPcHMpXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RXaXRoSGVhZGVycyA9ICh1cmwsIHBhcmFtcywgaGVhZGVycyA9IHt9LCBheGlvc0V4dGVuZE9wcyA9IHt9KSA9PiB7XG4gICAgbGV0IG9wcyA9IHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcbiAgICAgICAgfSwgZXh0SGVhZGVyLCBoZWFkZXJzKVxuICAgIH07XG4gICAgT2JqZWN0LmFzc2lnbihvcHMsIGF4aW9zRXh0ZW5kT3BzKTtcbiAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsIHBhcmFtcywgb3BzKVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hQb3N0Rm9ybSA9ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBheGlvcy5wb3N0KHVybCwgcGFyYW1zLCB7XG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCdcbiAgICAgICAgfSwgZXh0SGVhZGVyKVxuICAgIH0pXG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKHtpY29uID0gJy9wdWJsaWMvaWNvbi9sb2dvLnN2ZycsdGl0bGU9J+iusOW9leW/q+S5kCcsYm9keT0n6K6w5b2V5L2g6YGH5Yiw55qE5b+r5LmQ77yBJ30pe1xuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICBpZih3aW5kb3cuTm90aWZpY2F0aW9uKXtcbiAgICAgICAgICAgIC8v5Yik5pat5b2T5YmN6aG16Z2i5piv5ZCm6KKr5YWB6K645Y+R5Ye66YCa55+lXG4gICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb25cbiAgICAgICAgICAgIGlmKHBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZnkodGl0bGUse2JvZHl9KVxuICAgICAgICAgICAgfWVsc2UgaWYocGVybWlzc2lvbiA9PSAnZGVmYXVsdCcpe1xuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dOb3RpZnkocGFyYW1zPXt9KXtcbiAgICAgICAgaWYoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24hPSdncmFudGVkJykgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNvbnN0IHt0aXRsZT0n6K6w5b2V5b+r5LmQJyxib2R5PSforrDlvZXkvaDpgYfliLDnmoTlv6vkuZDvvIEnLGljb259ID0gcGFyYW1zO1xuICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbih0aXRsZSx7Ym9keSxpY29uOmljb24gfHwgdGhpcy5pY29uLHJlbm90aWZ5OnRydWUsdGFnOk1hdGgucmFuZG9tKCl9KVxuICAgIH1cbn0iLCJpbXBvcnQgc29ja2V0Q2xpZW50IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2tjZXRTZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHtldmVudHN9KXtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgc29ja2V0Q2xpZW50KClcbiAgICAgICAgaWYoIXRoaXMuY2xpZW50KXtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYoZXZlbnRzKXtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQoZXZlbnRzKVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50KGV2ZW50cyl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGV2ZW50cykubWFwKGV2ZW50ID0+e1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50Lm9uLmFwcGx5KHRoaXMuY2xpZW50LGV2ZW50KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgICAgdGhyb3cgJ2FkZCBldmVudHMgZXJyb3InXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG59IiwiLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkXCI7XG5pbXBvcnQgU2hhcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29sbGVjdGlvbnNcIlxuXG4vLyBjb3JlIGNvbXBvbmVudHMvdmlld3NcblxuaW1wb3J0IFNoYXJlUGFnZSBmcm9tIFwiLi4vZl9zaGFyZS9pbmRleC5qc3hcIjtcblxuY29uc3QgZGFzaGJvYXJkUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCIvdmlldy9wdWJsaWNcIixcbiAgICBzaWRlYmFyTmFtZTogXCLlhazlhbHliIbkuqtcIixcbiAgICBuYXZiYXJOYW1lOiBcIuWFrOWFseWIhuS6q1wiLFxuICAgIGljb246IERhc2hib2FyZCxcbiAgICBsb2dpbklzUmVxdWlyZWQ6ZmFsc2UsXG4gICAgY29tcG9uZW50OiBTaGFyZVBhZ2VcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3ZpZXcvY29sbGVjdGlvblwiLFxuICAgIHNpZGViYXJOYW1lOiBcIuaIkeeahOaUtuiXj1wiLFxuICAgIG5hdmJhck5hbWU6IFwi5oiR55qE5pS26JePXCIsXG4gICAgaWNvbjogU2hhcmVJY29uLFxuICAgIGxvZ2luSXNSZXF1aXJlZDp0cnVlLFxuICAgIGNvbXBvbmVudDogU2hhcmVQYWdlXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZFJvdXRlcy5maWx0ZXIocm91dGU9PiAoIXJvdXRlLmxvZ2luSXNSZXF1aXJlZCB8fCAocm91dGUubG9naW5Jc1JlcXVpcmVkJiZ3aW5kb3cuX19VU0VSX0lORk9fXy5faWQpKSk7XG4iLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi4vZl9ob21lL2luZGV4LmpzeFwiO1xuXG5jb25zdCBpbmRleFJvdXRlcyA9IFt7IHBhdGg6IFwiL1wiLCBjb21wb25lbnQ6IEhvbWUgfV07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Um91dGVzO1xuIiwiaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIiAvL0Nvbm5lY3RlZFJvdXRlciBhcyBSb3V0ZXIsXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIlxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiXG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tIFwiaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeVwiXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIlxuXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSgpXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXVxuXG4vLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4vLyAgICAgbWlkZGxld2FyZS5wdXNoKGNyZWF0ZUxvZ2dlcih7IGNvbGxhcHNlZDogdHJ1ZSB9KSlcbi8vIH1cblxubGV0IGRldlRvb2wgPSBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcblxubGV0IHJlc3RvcmVQZXJzaXN0ID0gKHN0b3JlLCBibGFja2xpc3QsIHdoaXRlbGlzdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIHBlcnNpc3RTdG9yZShcbiAgICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgICAgeyBibGFja2xpc3Q6IGJsYWNrbGlzdCwgd2hpdGVsaXN0OiB3aGl0ZWxpc3QgfSxcbiAgICAgICAgICAgICgpID0+IHsgfVxuICAgICAgICApXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwZXJzaXN0IHN0b3JlIGVycm9yIVwiLCBlKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRldlRvb2w6IGRldlRvb2wsXG4gICAgcmVzdG9yZVBlcnNpc3Q6IHJlc3RvcmVQZXJzaXN0XG59XG4iLCJcblxuXG5cbmNvbnN0IHN0b3JlTGlzdCA9ICgoKT0+e1xuICAgIGxldCBjYWNoZSA9IHt9O1xuXG4gICAgZnVuY3Rpb24gaW1wb3J0QWxsIChyKSB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goa2V5ID0+IGNhY2hlW2tleV0gPSByKGtleSkuZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vJyx0cnVlLC9mXy4qXFwvc3RvcmVzP1xcL2luZGV4LmpzeC8pKVxuXG4gICAgcmV0dXJuICBPYmplY3QuYXNzaWduLmFwcGx5KG51bGwsT2JqZWN0LnZhbHVlcyhjYWNoZSkpXG59KSgpXG5cbmNvbnN0IHJlZHVjZXJMaXN0ID0gKCgpPT57XG4gICAgbGV0IGNhY2hlID0ge307XG5cbiAgICBmdW5jdGlvbiBpbXBvcnRBbGwgKHIpIHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaChrZXkgPT4gY2FjaGVba2V5XSA9IHIoa2V5KS5kZWZhdWx0KTtcbiAgICB9XG5cbiAgICBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi8nLHRydWUsL2ZfLipcXC9yZWR1Y2Vycz9cXC9pbmRleC5qc3gvKSlcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KG51bGwsT2JqZWN0LnZhbHVlcyhjYWNoZSkpXG59KSgpXG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4LWltbXV0YWJsZSdcbmltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuaW1wb3J0IGJhc2UgZnJvbSAnLi9iYXNlLmpzeCdcblxuY29uc3QgZGVmYXVsdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJMaXN0KTtcblxuY29uc3QgZGVmYXVsdFN0b3JlID0gSW1tdXRhYmxlLmZyb21KUyhzdG9yZUxpc3QpO1xuXG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBkZWZhdWx0UmVkdWNlcnMsXG4gICAgZGVmYXVsdFN0b3JlLFxuICAgIGJhc2UuZGV2VG9vbFxuKVxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiLCJjb25zdCBFTUFJTF9WQUxJREFURSA9IHZhbHVlID0+IC9eKFtBLVphLXowLTlfXFwtXFwuXSkrXFxAKFtBLVphLXowLTlfXFwtXFwuXSkrXFwuKFtBLVphLXpdezIsNH0pJC8udGVzdCh2YWx1ZSlcbmNvbnN0IFBIT05FX1ZBTElEQVRFID0gdmFsdWUgPT4gL15bMV1bMy05XVswLTldezl9JC8udGVzdCh2YWx1ZSlcbmNvbnN0IFBBU1NXT1JEX1ZBTElEQVRFID0gdmFsdWUgPT4gL14uKig/PS57Nyx9KSg/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbIUAjJCVeJio/IF0pLiokLy50ZXN0KHZhbHVlKVxuY29uc3QgVVJMX1ZBTElEQVRFID0gdmFsdWUgPT4gL15bYS16QS16XStcXDpcXC9cXC8oPzpcXHcrKD86LVxcdyspKikoPzpcXC4oPzpcXHcrKD86LVxcdyspKikpKig/OlxcOlxcZCspPyg/OlxcP1xcUyopPy8udGVzdCh2YWx1ZSlcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBWYWxpZGF0ZSB7XG4gICAgc3RhdGljIGlzRW1haWwodmFsdWUpe1xuICAgICAgICByZXR1cm4gRU1BSUxfVkFMSURBVEUodmFsdWUpXG4gICAgfVxuICAgIHN0YXRpYyBpc1Bob25lKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIFBIT05FX1ZBTElEQVRFKHZhbHVlKVxuICAgIH1cbiAgICBzdGF0aWMgaXNQYXNzd29yZCh2YWx1ZSl7XG4gICAgICAgIHJldHVybiBQQVNTV09SRF9WQUxJREFURSh2YWx1ZSlcbiAgICB9XG4gICAgc3RhdGljIGlzVXJsKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIFVSTF9WQUxJREFURSh2YWx1ZSlcbiAgICB9XG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpe1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PSBcIltvYmplY3QgQXJyYXldXCJcbiAgICB9XG4gICAgc3RhdGljIGlzTm90RW1wdHkodmFsdWUpe1xuICAgICAgICByZXR1cm4gdmFsdWUgIT0gJydcbiAgICB9XG4gICAgc3RhdGljIGlzTGVuZ3RoKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA9PSAodGhpcy5sZW5ndGggfHwgMSlcbiAgICB9XG4gICAgc3RhdGljIGlzTWF0Y2hSZWcodmFsdWUscmVnZXhwKXtcbiAgICAgICAgcmV0dXJuICh0aGlzLnJlZ2V4cCB8fCByZWdleHAgfHwgLy4qLykudGVzdCh2YWx1ZSlcbiAgICB9XG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==