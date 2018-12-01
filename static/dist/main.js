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
exports.F_COMMON_FETCH_LOGOUT_USER_ACTION = exports.F_COMMON_FETCH_MODIFY_USER_ACTION = exports.F_COMMON_FETCH_ADD_USER_ACTION = exports.F_COMMON_FETCH_LOGIN_USER_ACTION = undefined;

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
      success = props.success;


  var labelClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, " " + classes.labelRootError, error), _defineProperty(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.underlineError, error), _defineProperty(_classNames2, classes.underlineSuccess, success && !error), _defineProperty(_classNames2, classes.underline, true), _classNames2));
  var marginTop = (0, _classnames2.default)(_defineProperty({}, classes.marginTop, labelText === undefined));

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
        underline: underlineClasses
      },
      id: id
    }, inputProps)),
    error ? _react2.default.createElement(_Clear2.default, { className: classes.feedback + " " + classes.labelRootError }) : success ? _react2.default.createElement(_Check2.default, { className: classes.feedback + " " + classes.labelRootSuccess }) : null
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
      openUserInfo: false
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderLinks, [{
    key: "onLogout",
    value: function onLogout() {
      this.props.fetchLogoutUser();
    }
  }, {
    key: "onModifyUser",
    value: function onModifyUser() {
      this.setState(function (state) {
        return { openUserInfo: !state.openUserInfo };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _state = this.state,
          openMessage = _state.openMessage,
          openPerson = _state.openPerson,
          openUserInfo = _state.openUserInfo;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: classes.searchWrapper },
          _react2.default.createElement(_CustomInput2.default, {
            formControlProps: {
              className: classes.margin + " " + classes.search
            },
            inputProps: {
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search"
              }
            }
          }),
          _react2.default.createElement(
            _Button2.default,
            { color: "white", "aria-label": "edit", justIcon: true, round: true },
            _react2.default.createElement(_Search2.default, null)
          )
        ),
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
        ),
        _react2.default.createElement(
          "div",
          { className: classes.manager },
          _react2.default.createElement(
            _Button2.default,
            {
              buttonRef: function buttonRef(node) {
                _this2.messageEl = node;
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
            _react2.default.createElement(
              "span",
              { className: classes.notifications },
              "5"
            ),
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
                    { onClickAway: _this2.handleMessageClose },
                    _react2.default.createElement(
                      _MenuList2.default,
                      { role: "menu" },
                      _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          onClick: _this2.handleMessageClose,
                          className: classes.dropdownItem
                        },
                        "Mike John responded to your email"
                      ),
                      _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          onClick: _this2.handleMessageClose,
                          className: classes.dropdownItem
                        },
                        "You have 5 new tasks"
                      ),
                      _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          onClick: _this2.handleMessageClose,
                          className: classes.dropdownItem
                        },
                        "You're now friend with Andrew"
                      ),
                      _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          onClick: _this2.handleMessageClose,
                          className: classes.dropdownItem
                        },
                        "Another Notification"
                      ),
                      _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          onClick: _this2.handleMessageClose,
                          className: classes.dropdownItem
                        },
                        "Another One"
                      )
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
                _this2.personEl = node;
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
                    { onClickAway: _this2.handlePersonClose },
                    _react2.default.createElement(
                      _MenuList2.default,
                      { role: "menu" },
                      _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          onClick: function onClick(event) {
                            _this2.onModifyUser();_this2.handlePersonClose(event);
                          },
                          className: classes.dropdownItem
                        },
                        "\u4FEE\u6539\u7528\u6237\u4FE1\u606F"
                      ),
                      _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          onClick: function onClick(event) {
                            _this2.onLogout();_this2.handlePersonClose(event);
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
    logoutUser: API_ROOT + 'user/logout'
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
exports.F_SHARE_FETCH_DELETE_SHARE_ITEM = exports.F_SHARE_FETCH_SAVE_SHARE_ITEM = exports.F_SHARE_FETCH_DELETE_SHARE_CATEGORY = exports.F_SHARE_FETCH_SAVE_SHARE_CATEGORY = exports.F_SHARE_FETCH_SHARE_INIT_ACTION = undefined;

var _share = __webpack_require__(/*! ../constants/share */ "./static/f_share/constants/share.jsx");

var types = _interopRequireWildcard(_share);

var _http = __webpack_require__(/*! ../../public/http */ "./static/public/http.js");

var _api = __webpack_require__(/*! ../constants/api */ "./static/f_share/constants/api.jsx");

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
            if (!(page == 'public' && !category.publicFlag)) {
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
            json.res && dispatch(F_SHARE_SAVE_SHARE_ITEM(json.res));
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
    value: function onOpenEditDialog(category, item) {
      this.props.openEditItemDialog(category, item);
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
                          return _this2.onOpenEditDialog(category._id, item);
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
      category: '',
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
    key: "onCategoryChange",
    value: function onCategoryChange(ev) {
      this.setState({
        category: ev.target.value
      });
    }
  }, {
    key: "onCategoryConfirm",
    value: function onCategoryConfirm() {
      this.props.saveCategory({ name: this.state.category || this.props.defaultValue,
        _id: this.props._id,
        publicFlag: this.state.switchLabels[0].checked,
        shareFlag: this.state.switchLabels[1].checked
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.category != nextProps.defaultValue) {
        this.setState({
          category: nextProps.defaultValue
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
          value: this.state.category
        },
        labelText: '',
        id: "share-category-input",
        success: false,
        error: false
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
    _this.state = {
      title: '标题',
      link: '',
      description: ''
    };
    return _this;
  }

  _createClass(ShareItem, [{
    key: "onTitleChange",
    value: function onTitleChange(ev) {
      this.setState({
        title: ev.target.value
      });
    }
  }, {
    key: "onLinkChange",
    value: function onLinkChange(ev) {
      this.setState({
        link: ev.target.value
      });
    }
  }, {
    key: "onDescriptionChange",
    value: function onDescriptionChange(ev) {
      this.setState({
        description: ev.target.value
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
    key: "onItemConfirm",
    value: function onItemConfirm() {
      var formData = new FormData(),
          params = {
        category: this.props.category,
        _id: this.props.item ? this.props.item._id : '',
        title: this.state.title,
        link: this.state.link,
        icon: this.state.icon,
        description: this.state.description,
        target: '_blank'
      };

      Object.entries(params).map(function (item) {
        // formData.append(item[0],item[1])
        formData.append.apply(formData, item);
      });

      this.props.saveItem(formData);
    }
  }, {
    key: "onItemCancel",
    value: function onItemCancel() {
      this.props.cancelItem();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.item) {
        this.setState(_extends({}, nextProps.item));
      }
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
          title
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
              value: this.state.title
            }) })),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'share-item-dialog-link'
          }, customInput, {
            labelText: '链接',
            inputProps: _extends({}, customInput.inputProps, {
              placeholder: '链接',
              onChange: this.onLinkChange,
              value: this.state.link
            }) })),
          _react2.default.createElement(_CustomInput2.default, _extends({ id: 'share-item-dialog-description'
          }, customInput, {
            labelText: '描述',
            inputProps: _extends({}, customInput.inputProps, {
              placeholder: '描述',
              onChange: this.onDescriptionChange,
              value: this.state.description
            }) })),
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
    saveShareCategory: API_ROOT + 'share/save/category'
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
                title: '添加项目',
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

            new Promise(function (resolve, reject) {
                _this2.props.fetchSaveCategory(_this2.props.match.params.page, category, resolve, reject);
            }).then(function () {
                _this2.setState({
                    categoryDialog: false
                });
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
                    title: '添加项目',
                    category: category
                })
            });
        }
    }, {
        key: 'openEditItemDialog',
        value: function openEditItemDialog(category, item) {
            this.setState({
                itemDialog: _extends({}, this.state.itemDialog, {
                    open: true,
                    title: '修改项目',
                    item: item,
                    category: category
                })
            });
        }
    }, {
        key: 'saveItem',
        value: function saveItem(item) {
            var _this4 = this;

            new Promise(function (resolve, reject) {
                _this4.props.fetchSaveItem(item, resolve, reject);
            }).then(function () {
                _this4.setState({
                    itemDialog: _extends({}, _this4.state.itemDialog, {
                        open: false
                    })
                });
            }).catch(function (e) {
                console.error(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvY29uc3RDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9jc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMgc3luYyBmXy4qXFwvcmVkdWNlcnMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljIHN5bmMgZl8uKlxcL3N0b3JlcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2Nzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuY3NzP2ViZGYiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9pbWcvcmVhY3Rsb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2ltZy9zaWRlYmFyLTIuanBnIiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvYnV0dG9uU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2NhcmRCb2R5U3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2NhcmRGb290ZXJTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY2FyZEhlYWRlclN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkSWNvblN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2N1c3RvbUlucHV0U3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2N1c3RvbVRhYnNTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZGlhbG9nQWN0aW9uU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2RpYWxvZ0NvbnRlbnRTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZGlhbG9nU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2RpYWxvZ1RpdGxlU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2Zvb3RlclN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9oZWFkZXJMaW5rc1N0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9oZWFkZXJTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvc2lkZWJhclN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9zbmFja2JhckNvbnRlbnRTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvdHlwb2dyYXBoeVN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvZHJvcGRvd25TdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2xheW91dHMvZGFzaGJvYXJkU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC92aWV3cy9kYXNoYm9hcmRTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2FjdGlvbnMvVXNlci91c2VySW5mby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRDb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRGb290ZXIuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DdXN0b21UYWJzL0N1c3RvbVRhYnMuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2cuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dBY3Rpb24uanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dDb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nVGl0bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9TZWxlY3Rpb24vc3dpdGNoTGFiZWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL1NuYWNrYmFyL1NuYWNrYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9UeXBvZ3JhcGh5L0Rhbmdlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvVXNlci91c2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9Vc2VyL3VzZXJJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9Vc2VyL3VzZXJMb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvVXNlci91c2VyTW9kaWZ5LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29uc3RhbnRzL2FwaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbnRhaW5lcnMvVXNlci91c2VyQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29udGFpbmVycy9oZWFkZXIvaGVhZGVyTGlua3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfaG9tZS9jb25zdGFudC9hY3Rpb25UeXBlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfaG9tZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfaG9tZS9yZWR1Y2VyL2hvbWUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2hvbWUvcmVkdWNlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfaG9tZS9zdG9yZS9ob21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9ob21lL3N0b3JlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9ob21lL3ZpZXcvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvYWN0aW9ucy9zaGFyZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvY29tcG9uZW50cy9zaGFyZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvY29tcG9uZW50cy9zaGFyZUNhdGVnb3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9jb21wb25lbnRzL3NoYXJlSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvY29uc3RhbnRzL2FwaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvY29uc3RhbnRzL3NoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvcmVkdWNlcnMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX3NoYXJlL3JlZHVjZXJzL3NoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9zdG9yZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX3NoYXJlL3N0b3Jlcy9zaGFyZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvdmlld3Mvc2hhcmUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvcHVibGljL2h0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3B1YmxpYy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3B1YmxpYy9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3JvdXRlL2hvbWUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9yb3V0ZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3N0b3JlL2Jhc2UuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9zdG9yZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vdXRpbC92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbImRyYXdlcldpZHRoIiwidHJhbnNpdGlvbiIsImNvbnRhaW5lciIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiYm94U2hhZG93IiwiY2FyZCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJwcmltYXJ5Q29sb3IiLCJ3YXJuaW5nQ29sb3IiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImluZm9Db2xvciIsInJvc2VDb2xvciIsImdyYXlDb2xvciIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwicGFkZGluZyIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWluSGVpZ2h0IiwiY2FyZFRpdGxlIiwiY2FyZFN1YnRpdGxlIiwiY2FyZExpbmsiLCJidXR0b25TdHlsZSIsImJ1dHRvbiIsIm1pbldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsIndpbGxDaGFuZ2UiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwidmVydGljYWxBbGlnbiIsInRvdWNoQWN0aW9uIiwiY3Vyc29yIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsIndoaXRlIiwicm9zZSIsInByaW1hcnkiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJzaW1wbGUiLCJ0cmFuc3BhcmVudCIsImRpc2FibGVkIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJsZyIsInNtIiwicm91bmQiLCJibG9jayIsImxpbmsiLCJqdXN0SWNvbiIsImNhcmRCb2R5U3R5bGUiLCJjYXJkQm9keSIsImZsZXgiLCJXZWJraXRCb3hGbGV4IiwiY2FyZEJvZHlQbGFpbiIsImNhcmRCb2R5UHJvZmlsZSIsImNhcmRGb290ZXJTdHlsZSIsImNhcmRGb290ZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjYXJkRm9vdGVyUHJvZmlsZSIsImNhcmRGb290ZXJQbGFpbiIsImNhcmRGb290ZXJTdGF0cyIsImNhcmRGb290ZXJDaGFydCIsImNhcmRIZWFkZXJTdHlsZSIsImJvcmRlckJvdHRvbSIsInpJbmRleCIsIm92ZXJmbG93IiwiY2FyZEhlYWRlclBsYWluIiwiY2FyZEhlYWRlclN0YXRzIiwiY2FyZEhlYWRlckljb24iLCJjYXJkSWNvblN0eWxlIiwiY2FyZEljb24iLCJmbG9hdCIsImNhcmRTdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJ3b3JkV3JhcCIsImNhcmRQbGFpbiIsImNhcmRQcm9maWxlIiwiY2FyZENoYXJ0IiwiY3VzdG9tSW5wdXRTdHlsZSIsInVuZGVybGluZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJ1bmRlcmxpbmVFcnJvciIsInVuZGVybGluZVN1Y2Nlc3MiLCJsYWJlbFJvb3QiLCJsYWJlbFJvb3RFcnJvciIsImxhYmVsUm9vdFN1Y2Nlc3MiLCJmZWVkYmFjayIsInJpZ2h0IiwiZm9ybUNvbnRyb2wiLCJwYWRkaW5nQm90dG9tIiwiY3VzdG9tVGFic1N0eWxlIiwiY2FyZFRpdGxlUlRMIiwiZGlzcGxheU5vbmUiLCJ0YWJzUm9vdCIsIm92ZXJmbG93WCIsInRhYlJvb3RCdXR0b24iLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInRhYkxhYmVsQ29udGFpbmVyIiwidGFiTGFiZWwiLCJ0YWJTZWxlY3RlZCIsInRhYldyYXBwZXIiLCJkaWFsb2dUaXRsZVN0eWxlIiwicm9vdCIsImRpYWxvZ0NvbnRlbnRTdHlsZSIsImRpYWxvZ1N0eWxlIiwicGFwZXIiLCJmb290ZXJTdHlsZSIsImZvb3RlciIsImJvdHRvbSIsImEiLCJsaXN0IiwiaW5saW5lQmxvY2siLCJoZWFkZXJMaW5rc1N0eWxlIiwidGhlbWUiLCJzZWFyY2giLCJicmVha3BvaW50cyIsImRvd24iLCJsaW5rVGV4dCIsImJ1dHRvbkxpbmsiLCJzZWFyY2hCdXR0b24iLCJzZWFyY2hJY29uIiwibm90aWZpY2F0aW9ucyIsInVwIiwibWFuYWdlciIsInNlYXJjaFdyYXBwZXIiLCJoZWFkZXJTdHlsZSIsImFwcEJhciIsImFwcFJlc3BvbnNpdmUiLCJzaWRlYmFyU3R5bGUiLCJkcmF3ZXJQYXBlciIsInZpc2liaWxpdHkiLCJvdmVyZmxvd1kiLCJsb2dvIiwiY29udGVudCIsImxvZ29MaW5rIiwibG9nb0ltYWdlIiwiaW1nIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJsaXN0U3R5bGUiLCJpdGVtIiwiaXRlbUxpbmsiLCJpdGVtSWNvbiIsIml0ZW1UZXh0Iiwid2hpdGVGb250IiwicHVycGxlIiwiYmx1ZSIsImdyZWVuIiwib3JhbmdlIiwicmVkIiwic2lkZWJhcldyYXBwZXIiLCJvdmVyZmxvd1Njcm9sbGluZyIsImFjdGl2ZVBybyIsInNuYWNrYmFyQ29udGVudFN0eWxlIiwiZmxleFdyYXAiLCJ0b3AyMCIsInRvcDQwIiwibWVzc2FnZSIsImNsb3NlIiwiaWNvbkJ1dHRvbiIsImljb24iLCJpbmZvSWNvbiIsInN1Y2Nlc3NJY29uIiwid2FybmluZ0ljb24iLCJkYW5nZXJJY29uIiwicHJpbWFyeUljb24iLCJyb3NlSWNvbiIsImljb25NZXNzYWdlIiwidHlwb2dyYXBoeVN0eWxlIiwiZGVmYXVsdEZvbnRTdHlsZSIsImRlZmF1bHRIZWFkZXJNYXJnaW5zIiwicXVvdGUiLCJib3JkZXJMZWZ0IiwicXVvdGVUZXh0IiwiZm9udFN0eWxlIiwicXVvdGVBdXRob3IiLCJtdXRlZFRleHQiLCJwcmltYXJ5VGV4dCIsImluZm9UZXh0Iiwic3VjY2Vzc1RleHQiLCJ3YXJuaW5nVGV4dCIsImRhbmdlclRleHQiLCJkcm9wZG93blN0eWxlIiwibGlua3MiLCJwb3BwZXJDbG9zZSIsInBvb3BlclJlc3BvbnNpdmUiLCJXZWJraXRCb3hTaGFkb3ciLCJwb29wZXJOYXYiLCJkcm9wZG93biIsIldlYmtpdEJhY2tncm91bmRDbGlwIiwiYmFja2dyb3VuZENsaXAiLCJkcm9wZG93bkl0ZW0iLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwiTXNUcmFuc2l0aW9uIiwiY2xlYXIiLCJhcHBTdHlsZSIsIndyYXBwZXIiLCJtYWluUGFuZWwiLCJtYXAiLCJkYXNoYm9hcmRTdHlsZSIsInVwQXJyb3dDYXJkQ2F0ZWdvcnkiLCJzdGF0cyIsImNhcmRDYXRlZ29yeSIsImNhcmRDYXRlZ29yeVdoaXRlIiwiY2FyZFRpdGxlV2hpdGUiLCJzcGFjaW5nIiwidW5pdCIsInNpemVTbWFsbCIsInR5cGVzIiwiRl9DT01NT05fRkVUQ0hfTE9HSU5fVVNFUl9BQ1RJT04iLCJwYXJhbXMiLCJkaXNwYXRjaCIsIkFQSSIsImxvZ2luVXNlciIsInRoZW4iLCJyZXMiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiRl9DT01NT05fRkVUQ0hfQUREX1VTRVJfQUNUSU9OIiwiY2FsbGJhY2siLCJhZGRVc2VyIiwidHlwZSIsIkZfQ09NTU9OX0ZFVENIX01PRElGWV9VU0VSX0FDVElPTiIsIm1vZGlmeVVzZXIiLCJGX0NPTU1PTl9GRVRDSF9MT0dPVVRfVVNFUl9BQ1RJT04iLCJsb2dvdXRVc2VyIiwiQ2FyZCIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicGxhaW4iLCJwcm9maWxlIiwiY2hhcnQiLCJyZXN0IiwiY2FyZENsYXNzZXMiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsIkNhcmRCb2R5IiwiY2FyZEJvZHlDbGFzc2VzIiwic3R5bGVzIiwidGV4dE92ZXJmbG93IiwiaW1nYm94IiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImF1dGhvciIsIkNvbXBsZXhHcmlkIiwib25PcGVuRWRpdERpYWxvZyIsImRlbGV0ZUl0ZW0iLCJ0YXJnZXQiLCJhZGQiLCJuaWNrbmFtZSIsIl9fVVNFUl9JTkZPX18iLCJfaWQiLCJldiIsIm5hdGl2ZUV2ZW50Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiQ2FyZEZvb3RlciIsImNhcmRGb290ZXJDbGFzc2VzIiwiQ2FyZEhlYWRlciIsImNhcmRIZWFkZXJDbGFzc2VzIiwib25lT2YiLCJDYXJkSWNvbiIsImNhcmRJY29uQ2xhc3NlcyIsIlJlZ3VsYXJCdXR0b24iLCJzaXplIiwibXVpQ2xhc3NlcyIsImJ0bkNsYXNzZXMiLCJDdXN0b21JbnB1dCIsImZvcm1Db250cm9sUHJvcHMiLCJsYWJlbFRleHQiLCJpZCIsImxhYmVsUHJvcHMiLCJpbnB1dFByb3BzIiwiZXJyb3IiLCJsYWJlbENsYXNzZXMiLCJ1bmRlcmxpbmVDbGFzc2VzIiwibm9kZSIsIkN1c3RvbVRhYnMiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImhlYWRlckNvbG9yIiwicGxhaW5UYWJzIiwidGFicyIsInJ0bEFjdGl2ZSIsImluZGljYXRvciIsInNjcm9sbEJ1dHRvbnMiLCJwcm9wIiwia2V5IiwidGFiSWNvbiIsImxhYmVsQ29udGFpbmVyIiwibGFiZWwiLCJzZWxlY3RlZCIsInRhYk5hbWUiLCJ0YWJDb250ZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJhcnJheU9mIiwic2hhcGUiLCJmdW5jIiwiRGlhbG9nQ29tcG9uZW50Iiwib3BlbiIsIkRpYWxvZ0FjdGlvbkNvbXBvbmVudCIsImRpYWxvZ0FjdGlvblN0eWxlIiwiRGlhbG9nQ29udGVudENvbXBvbmVudCIsIkRpYWxvZ1RpdGxlQ29tcG9uZW50IiwiRm9vdGVyIiwiRGF0ZSIsImdldFllYXIiLCJzdHlsZSIsImdyaWQiLCJhZGRCdXR0b24iLCJHcmlkQ29udGFpbmVyIiwiR3JpZEl0ZW0iLCJIZWFkZXIiLCJtYWtlQnJhbmQiLCJuYW1lIiwicm91dGVzIiwicGF0aCIsInBhdGhuYW1lIiwibmF2YmFyTmFtZSIsImFwcEJhckNsYXNzZXMiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJIZWFkZXJMaW5rcyIsIm9wZW5NZXNzYWdlIiwib3BlblBlcnNvbiIsIm9wZW5Vc2VySW5mbyIsImhhbmRsZU1lc3NhZ2VUb2dnbGUiLCJoYW5kbGVQZXJzb25Ub2dnbGUiLCJoYW5kbGVQZXJzb25DbG9zZSIsInBlcnNvbkVsIiwiY29udGFpbnMiLCJoYW5kbGVNZXNzYWdlQ2xvc2UiLCJtZXNzYWdlRWwiLCJmZXRjaExvZ291dFVzZXIiLCJwbGFjZWhvbGRlciIsImlubmVyV2lkdGgiLCJpY29ucyIsImhhbmRsZUNsaWNrIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwib25Nb2RpZnlVc2VyIiwib25Mb2dvdXQiLCJzd2l0Y2hTdHlsZSIsImNvbG9yUHJpbWFyeSIsImNoZWNrZWQiLCJTd2l0Y2hMYWJlbHMiLCJzd2l0Y2hMYWJlbHMiLCJzd2l0Y2hsYWJlbCIsImluZGV4Iiwib25DaGFuZ2UiLCJTaWRlYmFyIiwiYWN0aXZlUm91dGUiLCJyb3V0ZU5hbWUiLCJpbmRleE9mIiwibG9nb1RleHQiLCJyZWRpcmVjdCIsImxpc3RJdGVtQ2xhc3NlcyIsIndoaXRlRm9udENsYXNzZXMiLCJzaWRlYmFyTmFtZSIsImJyYW5kIiwia2VlcE1vdW50ZWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJTbmFja2JhciIsInBsYWNlIiwiYXV0b0hpZGVEdXJhdGlvbiIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJtZXNzYWdlQ2xhc3NlcyIsImNsb3NlTm90aWZpY2F0aW9uIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiRGFuZ2VyIiwiSW5wdXRWYWx1ZSIsImZpbGUiLCJhY2NlcHQiLCJVc2VySW5mbyIsIm9uTmFtZUNoYW5nZSIsImJpbmQiLCJvbk5pY2tuYW1lQ2hhbmdlIiwib25Db250YWN0Q2hhbmdlIiwib25BdmF0b3JDaGFuZ2UiLCJvblBhc3N3b3JkQ2hhbmdlIiwic2V0RmllbGRWYWx1ZSIsIm9uSXRlbUNvbmZpcm0iLCJvbkl0ZW1DYW5jZWwiLCJhdmF0b3IiLCJjb250YWN0IiwicGFzc3dvcmQiLCJ0ZXN0IiwidmFsaWRhdGUiLCJpc0VtYWlsIiwiaXNQaG9uZSIsImZpbGVzIiwiaXNQYXNzd29yZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJlbmNyeXB0IiwiSlNFbmNyeXB0Iiwic2V0UHVibGljS2V5IiwiX19QVUJMSUNfS0VZX18iLCJPYmplY3QiLCJlbnRyaWVzIiwiYXBwZW5kIiwiYXBwbHkiLCJzZXRGaWVsZEVycm9yIiwiZmllbGQiLCJmZXRjaFJlZ2lzdGVyVXNlciIsIm9uQ2FuY2VsIiwidXNlckluZm8iLCJrZXlzIiwiZmV0Y2hMb2dpblVzZXIiLCJlbWFpbCIsInBob25lIiwiZmV0Y2hNb2RpZnlVc2VyIiwiQVBJX1JPT1QiLCJ1c2VyQWN0aW9uIiwiVXNlckluZm9Db250YWluZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJIZWFkZXJMaW5rc0NvbnRhaW5lciIsIlVQREFURV9FWFRFTkRfSU5GTyIsIkhvbWUiLCJyZWR1Y2VyTWFwIiwiTWFwIiwic2V0IiwiaGFzIiwiZ2V0IiwiaG9tZSIsImRlZmF1bHRTdG9yZSIsInN3aXRjaFJvdXRlcyIsInNoYXJlUm91dGVzIiwidG8iLCJjb21wb25lbnQiLCJBcHAiLCJtb2JpbGVPcGVuIiwicmVzaXplRnVuY3Rpb24iLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInBzIiwiUGVyZmVjdFNjcm9sbGJhciIsInJlZnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhpc3RvcnkiLCJzY3JvbGxUb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRl9TSEFSRV9TQVZFX1NIQVJFX0NBVEVHT1JZIiwiY2F0ZWdvcnkiLCJTQVZFX1NIQVJFX0NBVEVHT1JZIiwiRl9TSEFSRV9ERUxFVEVfU0hBUkVfQ0FURUdPUlkiLCJERUxFVEVfU0hBUkVfQ0FURUdPUlkiLCJGX1NIQVJFX0lOSVRfREFUQV9BQ1RJT04iLCJjYXRlZ29yaWVzIiwiSU5JVF9EQVRBIiwiRl9TSEFSRV9TQVZFX1NIQVJFX0lURU0iLCJTQVZFX1NIQVJFX0lURU0iLCJGX1NIQVJFX0RFTEVURV9TSEFSRV9JVEVNIiwiREVMRVRFX1NIQVJFX0lURU0iLCJGX1NIQVJFX0ZFVENIX1NIQVJFX0lOSVRfQUNUSU9OIiwicGFnZSIsImdldFNoYXJlTGlzdCIsIkZfU0hBUkVfRkVUQ0hfU0FWRV9TSEFSRV9DQVRFR09SWSIsInJlc29sdmUiLCJyZWplY3QiLCJzYXZlU2hhcmVDYXRlZ29yeSIsInB1YmxpY0ZsYWciLCJjYXRjaCIsIkZfU0hBUkVfRkVUQ0hfREVMRVRFX1NIQVJFX0NBVEVHT1JZIiwiRl9TSEFSRV9GRVRDSF9TQVZFX1NIQVJFX0lURU0iLCJGX1NIQVJFX0ZFVENIX0RFTEVURV9TSEFSRV9JVEVNIiwiU2hhcmUiLCJoYW5kbGVDaGFuZ2VJbmRleCIsIm9wZW5FZGl0SXRlbURpYWxvZyIsIm5leHRQcm9wcyIsInNoYXJlIiwic2hhcmVGbGFnIiwiYmVsb25nIiwib3BlbkFkZEl0ZW1EaWFsb2ciLCJvcGVuRWRpdENhdGVnb3J5RGlhbG9nIiwiZGVsZXRlQ2F0ZWdvcnkiLCJsZW5ndGgiLCJvcGVuQWRkQ2F0ZWdvcnlEaWFsb2ciLCJTaGFyZUNhdGVnb3J5Iiwib25DYXRlZ29yeUNoYW5nZSIsIm9uQ2F0ZWdvcnlDb25maXJtIiwib25DaGFuZ2VTd2l0Y2hMYWJlbCIsInNlbGVjdHMiLCJzYXZlQ2F0ZWdvcnkiLCJkZWZhdWx0VmFsdWUiLCJjaGFuZ2VTd2l0Y2hJbmRleCIsInN3aXRjaExhYmVsIiwiY3VzdG9tSW5wdXQiLCJTaGFyZUl0ZW0iLCJvblRpdGxlQ2hhbmdlIiwib25MaW5rQ2hhbmdlIiwib25EZXNjcmlwdGlvbkNoYW5nZSIsIm9uSWNvbkNoYW5nZSIsInNhdmVJdGVtIiwiY2FuY2VsSXRlbSIsIlNoYXJlUGFnZSIsInVwZGF0ZSIsIkltbXV0YWJsZSIsImZyb21KUyIsImNvbmNhdCIsInNvbWUiLCJwdXNoIiwiZmlsdGVyIiwic2hhcmVBY3Rpb24iLCJTaGFyZUNvbnRhaW5lciIsImNhdGVnb3J5RGlhbG9nIiwiaXRlbURpYWxvZyIsImNhdGVnb3J5TmFtZSIsImNhdGVnb3J5VGl0bGUiLCJjYXRlZ29yeUlkIiwic25hY2tiYXIiLCJQcm9taXNlIiwiZmV0Y2hTYXZlQ2F0ZWdvcnkiLCJtYXRjaCIsImNvbnNvbGUiLCJmZXRjaERlbGV0ZUNhdGVnb3J5IiwiZmV0Y2hTYXZlSXRlbSIsImZldGNoRGVsZXRlSXRlbSIsImZldGNoSW5pdFNoYXJlTGlzdCIsIm5vdGlmeSIsIk5vdGlmaWNhdGlvbnMiLCJzaG93Tm90aWZ5IiwiU29rY2V0U2VydmVyIiwiZXZlbnRzIiwibG9nIiwiUkVESVNfTUVTU0FHRSIsIlNIQVJFX01FU1NBR0UiLCJFVkVOVCIsIm1zZyIsIkpTT04iLCJwYXJzZSIsInVzZXIiLCJib2R5IiwiaGlzdCIsIlJlYWN0RE9NIiwicmVuZGVyIiwic3RvcmUiLCJpbmRleFJvdXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJheGlvcyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJoZWFkZXJzIiwiYXBwTmFtZSIsInIiLCJNYXRoIiwicmFuZG9tIiwidXJsIiwiaW5jbHVkZXMiLCJyZXNwb25zZSIsInF1ZXJ5UGFyYW1zIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiayIsImpvaW4iLCJnZW5VcmxGcm9tUGFyYW1zIiwiZ2V0UHJldkNvbmRGcm9tR2xvYmFsIiwiR2xvYmFsU2VhcmNoQ3JpdGVyaWEiLCJnZXRTd2l0Y2hlc0Zyb21HbG9iYWwiLCJHbG9iYWxTd2l0Y2hlcyIsImdldENvbmZpZ3NGcm9tR2xvYmFsIiwiR2xvYmFsQ29uZmlncyIsImdldE9yZGVyRGF0YUZyb21HbG9iYWwiLCJHbG9iYWxPcmRlckRhdGEiLCJwcmV2Q29uZCIsInRyYW5zYWN0aW9uSUQiLCJleHRIZWFkZXIiLCJpbmplY3RGZXRjaEV4dEhlYWRlciIsImV4dCIsImFzc2lnbiIsImZldGNoSnNvbnBHZXQiLCJmZXRjaEpzb25wIiwiY3JlZGVudGlhbHMiLCJyZWFzb24iLCJmZXRjaEdldCIsImF4aW9zRXh0ZW5kT3BzIiwiZmV0Y2hHZXRXaXRoSGVhZGVycyIsIm9wcyIsIndpdGhDcmVkZW50aWFscyIsImZldGNoUG9zdCIsImZldGNoUG9zdFdpdGhIZWFkZXJzIiwicG9zdCIsImZldGNoUG9zdEZvcm0iLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJyZW5vdGlmeSIsInRhZyIsImNsaWVudCIsInNvY2tldENsaWVudCIsImFkZEV2ZW50Iiwib24iLCJkYXNoYm9hcmRSb3V0ZXMiLCJEYXNoYm9hcmQiLCJsb2dpbklzUmVxdWlyZWQiLCJTaGFyZUljb24iLCJyb3V0ZSIsIm1pZGRsZXdhcmUiLCJ0aHVuayIsImRldlRvb2wiLCJhcHBseU1pZGRsZXdhcmUiLCJyZXN0b3JlUGVyc2lzdCIsImJsYWNrbGlzdCIsIndoaXRlbGlzdCIsIkVycm9yIiwic3RvcmVMaXN0IiwiY2FjaGUiLCJpbXBvcnRBbGwiLCJmb3JFYWNoIiwiZGVmYXVsdCIsInJlcXVpcmUiLCJ2YWx1ZXMiLCJyZWR1Y2VyTGlzdCIsImRlZmF1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TUFBUCxDQUFjTCxLQUFkLENBQXpCLENBQVI7QUFDSCxDQVZpQixFQUFsQjs7QUFZQSxJQUFNTSxjQUFlLFlBQUk7QUFDckIsUUFBSU4sUUFBUSxFQUFaOztBQUVBLGFBQVNDLFNBQVQsQ0FBb0I5RCxDQUFwQixFQUF1QjtBQUNuQkEsVUFBRTlJLElBQUYsR0FBUzZNLE9BQVQsQ0FBaUI7QUFBQSxtQkFBT0YsTUFBTXRVLEdBQU4sSUFBYXlRLEVBQUV6USxHQUFGLEVBQU95VSxPQUEzQjtBQUFBLFNBQWpCO0FBQ0g7O0FBRURGLGNBQVVHLDJFQUFWOztBQUVBLFdBQU94TixPQUFPK0ssTUFBUCxDQUFjNUssS0FBZCxDQUFvQixJQUFwQixFQUF5QkgsT0FBT3lOLE1BQVAsQ0FBY0wsS0FBZCxDQUF6QixDQUFQO0FBQ0gsQ0FWbUIsRUFBcEI7O0FBaUJBLElBQU1PLGtCQUFrQixxQ0FBZ0JELFdBQWhCLENBQXhCOztBQUVBLElBQU05TCxlQUFleUUsb0JBQVVDLE1BQVYsQ0FBaUI2RyxTQUFqQixDQUFyQjs7QUFJQSxJQUFNdkUsUUFBUSx3QkFDVitFLGVBRFUsRUFFVi9MLFlBRlUsRUFHVmdNLGVBQUtmLE9BSEssQ0FBZDtrQkFLZWpFLEs7Ozs7Ozs7Ozs7O0FDNUNmLHNGQUFzRixJQUFJO0FBQzFGLGdEQUFnRCxFQUFFO0FBQ2xELDRDQUE0QyxHQUFHOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDZEEsZSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUkVESVNfTUVTU0FHRSA9IHtcbiAgICBTSEFSRV9NRVNTQUdFOntcbiAgICAgICAgS0VZOidTSEFSRV9NRVNTQUdFX0tFWScsXG4gICAgICAgIEVWRU5UOidTSEFSRV9NRVNTQUdFX0VWRU5UJyxcbiAgICAgICAgQ09OVEVOVDonJVVTRVIlICVPUEVSQVRFJSAlQ09OVEVOVCUnXG4gICAgfVxufVxuXG5leHBvcnRzLlJFRElTX01FU1NBR0UgPSBSRURJU19NRVNTQUdFIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiFcXG5cXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICogTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IC0gdjEuNS4wIGJhc2VkIG9uIE1hdGVyaWFsIERhc2hib2FyZCAtIHYxLjIuMFxcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXG4gKiBQcm9kdWN0IFBhZ2U6IGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdFxcbiAqIENvcHlyaWdodCAyMDE4IENyZWF0aXZlIFRpbSAoaHR0cDovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NyZWF0aXZldGltb2ZmaWNpYWwvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXFxuXFxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcblxcbiAqL1xcbi5jdC1ncmlkIHtcXG4gICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAycHg7XFxufVxcblxcbi5jdC1zZXJpZXMtYSAuY3QtcG9pbnQsIC5jdC1zZXJpZXMtYSAuY3QtbGluZSwgLmN0LXNlcmllcy1hIC5jdC1iYXIsIC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQge1xcbiAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuLmN0LWxhYmVsLmN0LWhvcml6b250YWwuY3QtZW5kIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtc3RhcnQ7XFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xcbn1cXG5cXG4uY3QtbGFiZWwge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbn1cXG5cXG4uY3QtY2hhcnQtbGluZSAuY3QtbGFiZWwsIC5jdC1jaGFydC1iYXIgLmN0LWxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmN0LWxhYmVsIHtcXG4gICAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuaHRtbCAqIHtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBjb2xvcjogIzNDNDg1ODtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxufVxcblxcbmJsb2NrcXVvdGUgZm9vdGVyOmJlZm9yZSwgYmxvY2txdW90ZSBzbWFsbDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnXFxcXDIwMTQgICBcXFxcQTAnO1xcbn1cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTVlbTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDIuNGVtO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS44MjVlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4O1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG59XFxuXFxuaDUge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG5oNiB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgY29sb3I6ICMzQzQ4NTg7XFxufVxcblxcbmJsb2NrcXVvdGUgcCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiAjOWMyN2IwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIsIGE6Zm9jdXMge1xcbiAgICBjb2xvcjogIzg5MjI5YjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4qIHtcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4qOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG59XFxuXFxuYTpmb2N1cywgYTphY3RpdmUsXFxuYnV0dG9uOmFjdGl2ZSwgYnV0dG9uOmZvY3VzLCBidXR0b246aG92ZXIsXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuc2VsZWN0OjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0W3R5cGU9XFxcImZpbGVcXFwiXSA+IGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XFxuICBib3gtc2hhZG93OjAgMCAwIDYwcHggd2hpdGUgIGluc2V0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICM4Nzg3ODc7XFxufVxcblxcbmxlZ2VuZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG59XFxuXFxub3V0cHV0IHtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NztcXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xcbiAgICBjb2xvcjogI0FBQUFBQTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG5mb290ZXIgdWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5mb290ZXIgdWwgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmZvb3RlciB1bCBsaSBhIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmZvb3RlciB1bCBsaSBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgYm9keSxcXG4gICAgaHRtbCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgI2JvZHlDbGljayB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiBhdXRvO1xcbiAgICAgICAgcmlnaHQ6IDI2MHB4O1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB6LWluZGV4OiA5OTk5O1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9mX2hvbWUvcmVkdWNlci9pbmRleC5qc3hcIjogXCIuL3N0YXRpYy9mX2hvbWUvcmVkdWNlci9pbmRleC5qc3hcIixcblx0XCIuL2Zfc2hhcmUvcmVkdWNlcnMvaW5kZXguanN4XCI6IFwiLi9zdGF0aWMvZl9zaGFyZS9yZWR1Y2Vycy9pbmRleC5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3N0YXRpYyBzeW5jIHJlY3Vyc2l2ZSBmXy4qXFxcXC9yZWR1Y2Vycz9cXFxcL2luZGV4LmpzeFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9mX2hvbWUvc3RvcmUvaW5kZXguanN4XCI6IFwiLi9zdGF0aWMvZl9ob21lL3N0b3JlL2luZGV4LmpzeFwiLFxuXHRcIi4vZl9zaGFyZS9zdG9yZXMvaW5kZXguanN4XCI6IFwiLi9zdGF0aWMvZl9zaGFyZS9zdG9yZXMvaW5kZXguanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zdGF0aWMgc3luYyByZWN1cnNpdmUgZl8uKlxcXFwvc3RvcmVzP1xcXFwvaW5kZXguanN4XCI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVUFBQUFEaUNBTUFBQUFJN2U3SkFBQUMvVkJNVkVVQUFBQmgydnNBLy8rQS8vOWgydnRoMnZ1QXYvOVYxZjloMnZ0Vi8vOXQyLzlnMi94aDJ2dGkydmhoMnZ0aDJ2dGgydnRnMi90aDJ2dGgydnRmM1BwaDJ2dG01djlWNC85ZzJmeGcyZnhkMGY5aDJ2dGszdjllMmY5bTJmOWkyUDlnMy85ZDNQOWkyZnRoMnZ0aDJ2dGgyL3hpMnZ0aDJ2dGkyL3RiMi85aDIvdGgydnRpMnZ0ZzIveGkydnRtM2Y5cTFmOWgydnRmMi9oZzJ2dGgyL3hnMnZwaDJ2dGgyZnRoMnZ0aTIveGcxL2RoMmZwaDIvdGgydnhoMnZ0aTIvdGgydnRoMi9wajIvcGczLzloMi90ZzJ2dGcyZnRpMmZ4aTJmdGgydnRpMnZwaTIvdGcyL3hoMnZ4aDJ2dGgydnRqMWY5ZjIvbGgydnRoMmZ0ajF2OWgydnRpMnZ0ZTEvaGgydnRqM1BsaDIveGgydnRpMnZwaDJ2eGkyL3RoMnZwaDIveGgydnRoMnZ0ZzJmbGcyZnhlMlBsYTRmOWkzUHRoMnZ0aDJ2dGgydnBoMnZ0bXpQOWgydnRnMnZ4ZjJmdGgydnhnMS9saDIveGgydnRnMnZ0aDJ2cGgydnRnMnZ0ZzJmcGcydnhoMnZwaDJ2dGgydnRoMnZ0ajJ2eGgydnhoMnZ0aDJ2dGgydnRoMi9waDIvdGsydmxpMmZ4ZzJ2dGcyL3BoMnZ0aDJmdGkyUHBoMnZwaTJmcGgydnhnMmZwbTF2OWgyL3RoMnZwazIvOWgydnRoMmZwaDJ2dGgydnRrMlBkaDJ2dGgydnRnMnZ0aDNQOWgyZnBpMnZ0ajNQaGczLzloMnZ0ajJ2dGkyL3hnMnZ4aDIvcGcydnBoMnZwaDIvcGgyZnRpMlA5aTJmcGgyL3RoMnZwaTIvdGkyL3BoMnZwZzJmdGgydnRlMS85aTJQaGkyZnRpMi90aDJ2dGcyZnRpMi90aDIvcGgydnRoMmZ4aDJ2eGgydnRpMnZwaDJmeGoyZnBnMi9wZzJmeGcydnhoMmZwZzJmdGgyZnRoMnZ4aDJmdGkyL3RoMnZ0aDJ2dGcydnhnMnZ0ZzIvcGgyL2xpMnZ0aDJmdGgyLzlpMmZ4aDJ2dGkydnBnMi90aTJ2dGkyZnhoMi90ZzJ2dGgzUHRpMi9waDJ2cGcydnRnMnZ0ZzJ2dGgyL3RoMnZ4ZzIveGkyZnBnMnZwaTJ2eGkyL3hnM1B0ZTNmOWgyUHRoMi90ZzNmaGkyZnRpMi94aDJ2dGgydnRmMlB0ZzJ2cGkydnhoMmZwaDJ2dGgydnhoMnZ0aDJ2dGgydnRnMi90aTJ2dGgydnRoMnZ0SkRlY0FBQUFBL25SU1RsTUEvZ0VDL2Z3RUJ2VURCMVh6SXZUNCszZnQrVFAyQ2dsS1VBdUxGeHNVRFFnV1BQZXhUNGpxeEE3UzhjeE5SQThNK2lQUmsyL2p4Y2FhSU9ETDNaSFo4R2t4RUxhc1BWNkF6bWF2WFo3V2tCSXIxZWNmOHU0bXV5eFU2YWZjamFaYzErOG9XQzRSUWNxNFllUUZzOTVEbVMyYjY3VGl1dVkxbjZXdGhNMUxsc1BBNkhHOUtWSEphdXkrTkdlaW5XVVpSK0VjaWFsMjVTR3Vzc0VkWkhVa0dOTStXMXFoTUtBeWpob3ZqRGM1Y0c2SDJCTW50MGFEZW5pb3YxZFoxR2hmTmppY2wyeHllWmlCaFh2Q1VvSmlLcXF3RlpYYVlIOTlTWDZQT21QZlJZcTVQMHlVYTZSVFRrZ2VRb1lsYzFaOGREdHRrcU8xMjgvSHlFQzgwSktjVjQ4QUFCSHFTVVJCVkhoZTdNQXhFWUFnRkFEUVAvM0YxV015QXdISVlBRVNPQlBDRHBTaWt5VWN2UE85K0JJQUFBQUFBQUFBQUlEUytqNk9lRUhPYXp0WHZUTis0eUh2UHFPbEtOWTFBTDg5YVFkMjN1d0lPd1kyc01rNTU1eHpScElreVRtSlJJbUNnSXFpSUJ3UlVEQ0FnREhuY0R3S3htTTQ1bndNUjA4TzkxMzMzdFBWTTEwejA5TTlIcTlyZHQzbi8xNjlwbGJYcnVydis2cSt3c3Q2ZHRSSWttV3ozdjNpQ0g2Ni9OKy9OU2FKdXRRMjZjbFFIM0JEMjB4S2h2MTZCSDRLM3hVUGxsSGlYVDBhcW5OL1Y4WVEyazJIOGhHbGFZUEhNMVRaczI0b3JXZ013MXZ5aCs2SXd2VHJQQXp2MVdJb2JNaFdXcW82VXdLSFZwWnJ0TFFqRzhyeWJXWWtLYjh1aGdNRmt6UkdNc0VGVmQxT0d4M3pZQ2Z4Z1NUYStBNktlczlEVzh1dlJFUzViOUJXVmpNb3lkZWNmbE0rL0N6dnE5NzdCODVuc05UMEJGaXF0NHJCTXZxZi9tVGxpT2xYUERDRmZqMmdwS00wVEozc2d2RDFLenMweXVvMmc0V1AzNmRzL0IyM3VXRVlONHFHdTZBZzE2OG9iSjhPcytTWHI2Y2txWjhMWVNUVzhsQXllOHRjbUhYclFxRWNDdnFBZ3JZWFFSSS9hMFhKMGlFSU1ibzVKVDN1UkxBdktHanRvSjVqRkZZaFZHTFhPVFNiM3cxQnZ1eENzODFQSW94eUN2ZERPZGtqcWZNa0k1d21kVEpwa3ZVNHpOd3ZhelNaOHozQ3VwUENNQ2dubDhJOFdQajJQTTBXeHNHdjNxczBTZXRVRHhabVVWQnZEdDlCSVJlV0hzbWdTWnNTQ05NbTB1Uy9Gc0hTWlJSK0I5WDBwUzRsRHRZS2x0TmtvZ2hPL1dnZVYwK3RSRmlyclZIM09SU1RtRWJkUjRqRTFTK0ZBUm05QUNBdml3SExaaUlpWTY5MER4UnpuTUlEaU96Q0lBWmtiUUdlOFRLZ3ZEc2lHMHlkTnh0cTZVM2hGdGdvNnNrQTcrazZEUEM4NDRLTlJ5ZzhBYlhjUitFSTdMaGFObVZZVlhtd3RaUENwVkRMS3VxU1hMQzNZQW5EZVBSYjJPdE80V2FvWlROMWY0TVR5ZmN3eEk3R2NNSVkrejlCTFk5Rzk1bGYySVpCVnNkRnQxMjZEbXBaUnQwdU9KUDRJQ1dkM0hCbWc2SXh3VkhVcllORDdoWTBPUTJuYnFTdUx0U1NSdDIxY01oMWdpYVh3S25QcVdzT3RXalUvUUVPWFVMSi9YRG9lZXArOWY5OEFIL05JQzNoVEZ2RkIvQUZPSElWZzNrZWhpT3JGQjFBTDNWMTRFU2VseUV5WjhLSjFZcitEK3hDM2J0d1lHVThEVjc2amJvU0RseWtyalhVMG9xNjEyRnZ4SEFhUExlZW9kLzhraWkyTVI5QkxWT29leEMyaXByVGJ4TmNiZW5YSVIrMjJsRFhFNnFRZjljRzJQRjlSTDl2QUNRY29GOVBOK3hNcEc0MzFOTGZjYVM0RS8xMnVRQWdiam45K3NCT0NuVXZRaTFQVTljRk5pYlQ3MGFmeU1tdHBVR3JnY2l5S1p5R1d2cFF5RUZFTzh0b1dKOERvZlpFR2tZT1JVVHRLRHdNdFZ4TjRSd2lLVmxHUS9zUytGMm9vdUdOR1loa0pvVlNxR1VCaFM4UndkeWJhSWp2QnBOY0x3MDkzSTQrWVFxZ2xuYU9RdTNYMHFCZENzbk45UHV0a3hoRW1RdHFTY2lrN2lsWWU5dER3K1VJc3BnR3p3ZXdOay9aNHBqTzlvSE9na29hNXJrUkpMRTFEY09QMkQ5bUhsU3pocnJ0c0pKd0V3MkQ2alYrTFhsb3pmK3hjMmZONmNuSkpUTzZvL1krR25Za3dFSmlVeWxvb1pJWEtOeUE4SnBjUzhmcU5MRkxDMCtHYW1wUXFBR1piM1RGM1lQNzk4MWdWTGF2UGZCdXk0YmYrcXdXNGVOUXpaVU15WXI0RmcwNGMyQktVLzRITWdldE9UTjVrUStHaGRTbEpVSTFDU09wMnd3QWMrL2MxclpER1g4bXFRMFdmL1prSEFCMFVER2NLanhFM2RRaFY3eTRJWjQvdTdLNkgrWmRreXB0bHRSeUxRV04vL2V1Z25wK3cxOVFONmpHM1dzZ2YwR3YzNUlBaGJobnJodE9aOUlxTy8vai9LVFhYMHpmMUsvZm16VnFWRFJxOUdXTkdyMzc5VHVkZmwrTFA4OTdxZjZ5a1hSbTQvTUwzRkREdEQ3ejZkUVoyS3BGcDY3dmRCdXF2ZnhEc3hoSmZJTmorNC9STUtVWXRuTHVvZUdwOUYxcnN4aEozNnVLVUoxZGFOR0ZsdHBmOTF4Rk16ZHd0cEtDOXk0NGNKZVh3b3J1Z1B0dzN2MFhsOUhTeUhXTFVGMlZ6dE1ZWGxMZFRqV09RQmhJUXkwSVRpZngweEQyTk93emJ5b3QxRzNvUXZYanF0aEtLd1BjQ1BoWW85QTVCNExUU2V3cFJZQXZuVmI2MW5Dam1zbHRRQ3Z5bXhZM1JSNk42Q2J4c0RnRVRLQzE1bmt1VkNOM3RtYW8rSjVlNmlZaTRBRWFCa2QvOEk1TWgxOWlGWFVaRitNWnFrTXZWQmNGdXpRR3kxcnpjRDQyVURnRlEwRVNoV1g1Y0N6N2ZRcEoxNFNlQnoyRy9JZlhaREhFZFNOUUhTVGNuY0lnMmtPVGl3QmdVMmlCd1NRYXZrQVVHZ1pHSlRScjhoc0FhSEowaDhZZ1dlayt4THloZjJlUWpaM0dCcWZtNmtQNFVhT3dIRkVwcDJFdmRPN2gxS1VXUVhjd2ZSK0ROTitKMk9acW1VcFptM0Z6NFZlZndtSHhvL3RTU0IyTnFJeUlwekJNdkZXOUtDeUZueS92SmNxYTduY2hoZzBwcDhSVFhocit4TngrcVJBbTJsb2dlZkhwaW45N2w4TFY4b3A5d0VQSjdCTEVyTEh6YWVZOU1RMnlidkljVG55ZlF2dHNoSENmK3VQVDUxKzZxY2ZyMjhhNkVDSnVFSVhLeGdDUXNJSzZ0QkxJemczMDBxeFZOOFNvZTd2UWJNd3A2eE5mdkEwQW5xVWhEOEVLdm1sRnYvZGZybzFndDJnVVBnU0FyMmhkbWpydElzMVM4aENUam5wcDBtRW13bmlIUWljQWpiZFRtSTBnM2YrVVNVbFdyU1lJTW9GQ2FyS3B1SnlYSVl5UHQ5TEVjeGxpMEtWcERJaTN1QUdybVViZDlrVGdEQVh2V01nV3JHQ0lmVDlDMWk2VndwK0JldkhVcFhhM3VFdWdpZ0hhTnNTY0x6d00rTXZYdHZlU2JFRkJQQzNLY1Z0NkdFYmFJYXZ2RWM4aVhFYWhQeXdjWE1vQTdSSEVtQ2ZpNlpmeU9DemRUYUVjVDFHSUw0RGtmb2FudFlSa1JnYUZjanprb0xCeVFBcjl5bjVFVENrWlRyODNGc0ZhN2FiVU5mMm4xMklMOHdxdGVHcEE4aXdObDNxb0cxVU1hMk03MDYveUpHTEpxL1M3c1RFaU9VQ2hpa0psUFpoTkw2T2xrYU5obGppZlFpYUZUeEZKdmY3ME8rOUM3QmhBdnhNSmlPZ0tCdnNqek54YkdjRkxMbm5oWWpDYkxJajdLZnBkalppUjA0cUd0bTVFbGpDSHNyL0d3ZXgzakVpZXhLNVpsUFdGRGRjNkdqWTJRYXk0V1RyWlllTnl5bzdLNHp1UkVUV1hIN0NYc21kZ3g3VmJxaFdPQ2U3MkZPcG53MWF5aDJadkpBU05pSTI3SUpGalAxbERZS3Q0TFlVVnZsaTdtekxwSEJ6NEM4M2VoR1FWYlhTQzVHMmFEWVFEemJwUWFJalk4Q21GQitERVZ6VHA2SU5rSDIwOENwbTA1dFNFRTVzb0xJNnhtKzJtNXNNSlYyY0dISUxrQ08xb1JkYXJlbXM0VXJ5RXVrR0lDUW5lS0l2eS9raS85bkdRZkV4Yk5TRnhkYURmclZGT0dTMEhzYUJRam9QWUs2cWk0VEhJeHRIV1Y1YnBrZUZ4Y09ZUkNnY1JDdzVUdUFJT25hRFFKUkd5QWJUMUJXU3U4YzZYRU9IM0ZLWWpGdFNPOW1pQnV5TU52U0Q3bnJaeUlidVhodkdKY09iNzJMcXExcWRSMXlMcW5DVEhRTGFBdHU2RXJDNzllc09aZHlua0l5WU1vNjR5RVk0c0o2MWV3WU8wTlFPU1JneFlDMGQ4YzZpYmlOalFWc3FQMlRxbk1lQWpTRndiYWFNalpEZlI1Szdvemk3dlFteklvN0RrSkJ4b1FiTW5JWmxBRzIwaCtTZk5Kc0dCUGVOajdaclF1ZU1wclBmQlZwTXFtdldJc3BaL0FTUTdhSlpaRzdaOEd5aGtGQ05HdkJqTk5YV3ZVUFlFek9LdXQ1bkJDVEM3aGJLYm95blBySVZZMFQyRGhoZGdwelZsc3lGNWxoRWRnbVFEWmZlNFlPTWRHcnFjUmN5NG0zNTFFTmswQnZzQWtBc3VJNmp2ZzlrbkRGYnFQQnFaanRpUnNKNStiUk1SeVljVU5BcC9jOHV6MGt0TG1Udmx4ejVLb1l6Q0trUVN0NDUrLy9BaGhpUlgwVy9yUVZpYnU1SENEelE4RHNsenRQU01SZjVPMitLaExxVWVyRjNUaG40cG94RlRjcjMwcTd3WGxyNmswQUhyS1N6TGdlUnB1OXBxSVhzT2hldXczRUVmakViajZlZXBRSXo1akFIYTR1NndNQ0dRaSt0RnczT1F1TzVnV0MvQTRsVnRlaGkzVXRnTUM0MFhhZ3o0QVRGblAwMkdqME5ZK1NuVU5YME42RUZoWkczSUJpUXhSSmR4a0JWMm9kQUN5SmxLbmFjQVlWMnhqQ1oxRUlQU2FYYmpsUkVqY2E4Q09PNnhUSWVQT0VDWk51R2tWZWNMSnRVMlYwamZqVENtOWFmWlc0aEpWemVsU2RyQ1BRaFJMaFdDNzZhUWRnckJhcTZPcDEvU2lla0lOalpOS2xrdnBiQVZJZlk4bjBZVDd6T0lVYjhmUmJPVXl3c2htNUZKWFVZaUFPeEpvdERhaFJCTkd0YnFNV3padm1GTDYrUm1JNFRySmdyaml3REE5UVoxV2pQSUN1OUxvZG5JWE1Tc1poMG9pVzl4US9pMkxNL2ozLzdBbjl4RWFrRHczdWF0OEJ2a0cxckVVMUwvU3NTd3VFczBTdEltMVVSQVR3cGlvNU96ajhLU3M0aEs0K0VVSnNhSktVMmhEUUpxVGtxajdPa2N4TFpHSFJta3dXT05vU3RPb201cVhFZ1NxUzJpMGltMHZOcVl3NTQ5eGlCM1hjc2dyVDVCek11KzNjc2c4YXRLWGRKaHJNOWg2RUhCOHlTaWNOd2JHb3VvUTZFZkFMaHZPUmJQSU5yQ3hxZ091bTFnaUZhZFNsMTQzclFHQ3lOUzVEaUJQWGtGeVR3WDJoZXlCekMwVDBlR2FGQ0s2bUxjZklacS8rRUs2ckthaE9zNjhDd2M2MGVHdHRkd3RhSXV0Vlo3aHByVDI0WHFJNjVySzFvckR4dSt5aG9OaDc2dW90Q3FTTW9WV0t2Y2xJUHFwYmlsOVJCMmhjbE1qVUpyTnh4eHphWmhDMHdxYUdYOC9VMVEvY3l0TVlzV1ZseHNXWm9JWVZlMGsvaDNOUHdGZ205bzc0WEROSWJYc1dVMnFpZlh2ZVZlV29sL3FkYlJib2tBU2taRk40a0xwbEpJT2dpZ3VOdmtPOVpuMFlxMmZJc2IxZGhCMFVEZGdyZnptdnNlSHN5b0p2RlNHcDcvL3VVMW5iMk1JT09TMGFqdTNLVUxrK2pVZDdEVm0wNTV4L1RPaGhLS0hsK2FTa2ZLSHVxL2FuQ2Z1OS9jMHFpMFpzMmh5Y2tuWjh6WWsveS8xOUgyYXJUbGxlOHUvM1Ixajc4bjBSSHZqbTJGVUVqam8vMzVDMnB6VlFsVTA0eS9vTWVnbmtmNEM5b045VnhDblRiejlJUjkvUGxwZzNhL01tMjdpazNSaFBYVS9SVUFDc2JWbWIyUlA1djJyNzcxeVZrQW1FMmR0d2lxY2FlRXRLVTZtZnZjNmdZaitSL0phTDM3aHdWRFFpczNlcW03aHV5SDdKb0YyMjVmMDJBSm8rTzV2dTdxYjY3dVZRaFpCWVZ0VUUwRmhRVUlLMy9vWWpxMjYzQWN3aXFnc0E3cWtPTisyZ3hZaU50S1EvdnB5YWRxcm16VXFHRU4zZHVOZHA2YU5veUdSN05oWlFWMTY2R2FTZFN0Z0tWMm8yam83N2F1eEdiS0JmdGU3cU9nbWc3VVBRUnJuMmpXSFcyZW9kL2pzTGFPd2xrb0pzTko5dTBTR3JSYkllbVZTY01xUjZXZUs2R1c3bzZxbU9mV3BTRkxHb0VibHRCUVB4OFJ2RTNoVXFqbE5nb1ZpT1RJSEJxdVB3bS9KczFweUdpR1NKSXAzQSsxTktTd0NCRTlVUmFtbDJ0Q2Z4cThleEdSejBQZDY2cDJOaXgwZm9QSzVrVG8vaFRGT1laSzZnNUFMYitsTHMwZFJYZlhDVzY1bnhXNXhnVWI5YWxyQTdXMG9HNDQ3UGpHVUJEblA3dlNyMEUrN0JoL1BSOXErWnk2djhGV3ZlYjBld2VvOE5JdzV4cm5EeG9GdGJ4SzNmTG9lcXl6Njh4VUdxb1d3ZDVnNnRLZ2xuOVJkMk9VWGY0OVNUU2s3WVVEZFNnVVF5bi9pS3AzZko3bkp6ZWFlcGxDSVpUU2dMcEpjT1F4aG5ncnV1V2V0ZFVjd0JOUlJyOFliWUJ2ditJRE9CQU8zVTdKZzI0NDh3T0ZJMURLTExsM2dEM1hDWnJNam91NkczNkptbzBoejhPcGhob0RyblZGbXoxbE5wUlNUbDFkT1BSbVU1b2RpNE16aXhYZEIvNlp1dnB3eFBVQ2c0eXBCMGNtVUpjQlZjaHJ3blk0NFZ2SUVMLzZHazYwcG00UTFMS0p3aERZT3p1R1ljeTVFdzVzcEc0TTFES093aE93ZGFvancwcHRDVnROS0F4VU5hUS9HWGFPeGpOZzZTWXZBd1lXdzhaeEN1OUFMVGxlaDgzUDVnNm15V0lmS3N6ajJhQ2QwMi9BUENobWtMUHU1OGwxR2FEMUFZQW54ak9ncWg4aXVraWhIUlN6bWpxdEJOWmNqOFV6b0tub20zTDRyelRwV1FocnJrcnF0cnVnbUVNVUJzQlM3YVUwcWRvTDRiWFdORm1SQzB0UFV1Z0oxWXl3dmF2WTNYc0pUVHBmZ0ordkRzM21XYzdQWStxV3QyR0tUY09GbFIxbzFyTUlabzluMFNUbHVUaUVVMWhHblhZRGxQTmJDZzhpakdzV2VtamlUWGRCMW0wK3pUcGY2a2FvTXhUcVFqM05OQXA3UTRmdjlWU2FWVFpDaUNGTEtSbDBhd0tDSE0razBCVUtPaytoOGpBazNaNU9wZVRHMmdqRGRWVVNKZmRzZWcxbUp5ZFNHRlVFQmQxQ3cvV2w4RHY3MlZyS1JoNkNoV1oxS2N2c1dWRVBoaWM3MG5BZmxMU0RCcy95Vzg4VjQ3V3hGYmYzOVRESSttUllTa2hQWlJEdnJGcHY1aDZmbnJ2dHZFWkRSaUdVZEdVbXpUSVp4dFRUQ1loazZHYmF1eHFLNmtNYm50MGxzRE91UFczOHl3VkZ1ZWN4b3JYdndZR2M5Q1JHMHY0MUtLdDdYMXFyTDdaMjlncHVUNkdsaldPaHNNWXYwY0tzQ2hlY0s3eDhLc043LzFzb3JmZ09EME9scnZrQVVhclhzZ0hEbURRRHFudHZBNE8wNlRvRVA4V0ZiL1pSMXVadHFBOTRyMFVyQ3RxZ3RyMUg0S2M3ZDluQXp0UTFyVjluNVgrM1o4Y0VBSUlBQU1ENHZMMUl3VWtBRzJnTlEvajVFNElNcFBIeXBZUWx2R0Nyc1RDTjBzNjhidlhaLzlpQ3UxL3BQWll3REFBQUFBQUFBQUFBQUQ1L1QxRjNVMUdpRndBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxMDUwOWM5NTUxMjg5M2RjNjYxYmQzYTZiMGQyYTVkLmpwZ1wiOyIsIi8qIVxuXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBNYXRlcmlhbCBEYXNoYm9hcmQgUmVhY3QgLSB2MS41LjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIC0gdjEuMi4wXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAqIFByb2R1Y3QgUGFnZTogaHR0cDovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0XG4gKiBDb3B5cmlnaHQgMjAxOCBDcmVhdGl2ZSBUaW0gKGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NyZWF0aXZldGltb2ZmaWNpYWwvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXG5cbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAqL1xuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIC8vIC8vIFZhcmlhYmxlcyAtIFN0eWxlcyB0aGF0IGFyZSB1c2VkIG9uIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50XG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI2MDtcblxuY29uc3QgdHJhbnNpdGlvbiA9IHtcbiAgdHJhbnNpdGlvbjogXCJhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKVwiXG59O1xuXG5jb25zdCBjb250YWluZXIgPSB7XG4gIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXG4gIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICBtYXJnaW5MZWZ0OiBcImF1dG9cIlxufTtcblxuY29uc3QgYm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6XG4gICAgXCIwIDEwcHggMzBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpXCJcbn07XG5cbmNvbnN0IGNhcmQgPSB7XG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgbWFyZ2luOiBcIjI1cHggMFwiLFxuICBib3hTaGFkb3c6IFwiMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KVwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC44NylcIixcbiAgYmFja2dyb3VuZDogXCIjZmZmXCJcbn07XG5cbmNvbnN0IGRlZmF1bHRGb250ID0ge1xuICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcbiAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgbGluZUhlaWdodDogXCIxLjVlbVwiXG59O1xuXG5jb25zdCBwcmltYXJ5Q29sb3IgPSBcIiM5YzI3YjBcIjtcbmNvbnN0IHdhcm5pbmdDb2xvciA9IFwiI2ZmOTgwMFwiO1xuY29uc3QgZGFuZ2VyQ29sb3IgPSBcIiNmNDQzMzZcIjtcbmNvbnN0IHN1Y2Nlc3NDb2xvciA9IFwiIzRjYWY1MFwiO1xuY29uc3QgaW5mb0NvbG9yID0gXCIjMDBhY2MxXCI7XG5jb25zdCByb3NlQ29sb3IgPSBcIiNlOTFlNjNcIjtcbmNvbnN0IGdyYXlDb2xvciA9IFwiIzk5OTk5OVwiO1xuXG5jb25zdCBwcmltYXJ5Qm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6XG4gICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDE1NiwgMzksIDE3NiwgMC4yOCksIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjIpXCJcbn07XG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6XG4gICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDAsIDE4OCwgMjEyLCAwLjI4KSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgwLCAxODgsIDIxMiwgMC4yKVwiXG59O1xuY29uc3Qgc3VjY2Vzc0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSg3NiwgMTc1LCA4MCwgMC4yOCksIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoNzYsIDE3NSwgODAsIDAuMilcIlxufTtcbmNvbnN0IHdhcm5pbmdCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzpcbiAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMjgpLCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjIpXCJcbn07XG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzpcbiAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuMjgpLCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpXCJcbn07XG5jb25zdCByb3NlQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6XG4gICAgXCIwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgyMzMsIDMwLCA5OSwgMC40KVwiXG59O1xuXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNmZmE3MjYsICNmYjhjMDApXCIsXG4gIC4uLndhcm5pbmdCb3hTaGFkb3dcbn07XG5jb25zdCBzdWNjZXNzQ2FyZEhlYWRlciA9IHtcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM2NmJiNmEsICM0M2EwNDcpXCIsXG4gIC4uLnN1Y2Nlc3NCb3hTaGFkb3dcbn07XG5jb25zdCBkYW5nZXJDYXJkSGVhZGVyID0ge1xuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VmNTM1MCwgI2U1MzkzNSlcIixcbiAgLi4uZGFuZ2VyQm94U2hhZG93XG59O1xuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMjZjNmRhLCAjMDBhY2MxKVwiLFxuICAuLi5pbmZvQm94U2hhZG93XG59O1xuY29uc3QgcHJpbWFyeUNhcmRIZWFkZXIgPSB7XG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjYWI0N2JjLCAjOGUyNGFhKVwiLFxuICAuLi5wcmltYXJ5Qm94U2hhZG93XG59O1xuY29uc3Qgcm9zZUNhcmRIZWFkZXIgPSB7XG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWM0MDdhLCAjZDgxYjYwKVwiLFxuICAuLi5yb3NlQm94U2hhZG93XG59O1xuXG5jb25zdCBjYXJkQWN0aW9ucyA9IHtcbiAgbWFyZ2luOiBcIjAgMjBweCAxMHB4XCIsXG4gIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNlZWVlZWVcIixcbiAgaGVpZ2h0OiBcImF1dG9cIixcbiAgLi4uZGVmYXVsdEZvbnRcbn07XG5cbmNvbnN0IGNhcmRIZWFkZXIgPSB7XG4gIG1hcmdpbjogXCItMjBweCAxNXB4IDBcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBwYWRkaW5nOiBcIjE1cHhcIlxufTtcblxuY29uc3QgZGVmYXVsdEJveFNoYWRvdyA9IHtcbiAgYm9yZGVyOiBcIjBcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBib3hTaGFkb3c6XG4gICAgXCIwIDEwcHggMjBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNDIpLCAwIDNweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXG4gIHBhZGRpbmc6IFwiMTBweCAwXCIsXG4gIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIlxufTtcblxuY29uc3QgdGl0bGUgPSB7XG4gIGNvbG9yOiBcIiMzQzQ4NThcIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICBtYXJnaW5Cb3R0b206IFwiMjVweFwiLFxuICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxuICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZlwiLFxuICBcIiYgc21hbGxcIjoge1xuICAgIGNvbG9yOiBcIiM3NzdcIixcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMVwiXG4gIH1cbn07XG5cbmNvbnN0IGNhcmRUaXRsZSA9IHtcbiAgLi4udGl0bGUsXG4gIG1hcmdpblRvcDogXCIwXCIsXG4gIG1hcmdpbkJvdHRvbTogXCIzcHhcIixcbiAgbWluSGVpZ2h0OiBcImF1dG9cIixcbiAgXCImIGFcIjoge1xuICAgIC4uLnRpdGxlLFxuICAgIG1hcmdpblRvcDogXCIuNjI1cmVtXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjAuNzVyZW1cIixcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiXG4gIH1cbn07XG5cbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcbiAgbWFyZ2luVG9wOiBcIi0uMzc1cmVtXCJcbn07XG5cbmNvbnN0IGNhcmRMaW5rID0ge1xuICBcIiYgKyAkY2FyZExpbmtcIjoge1xuICAgIG1hcmdpbkxlZnQ6IFwiMS4yNXJlbVwiXG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIC8vdmFyaWFibGVzXG4gIGRyYXdlcldpZHRoLFxuICB0cmFuc2l0aW9uLFxuICBjb250YWluZXIsXG4gIGJveFNoYWRvdyxcbiAgY2FyZCxcbiAgZGVmYXVsdEZvbnQsXG4gIHByaW1hcnlDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICBpbmZvQ29sb3IsXG4gIHJvc2VDb2xvcixcbiAgZ3JheUNvbG9yLFxuICBwcmltYXJ5Qm94U2hhZG93LFxuICBpbmZvQm94U2hhZG93LFxuICBzdWNjZXNzQm94U2hhZG93LFxuICB3YXJuaW5nQm94U2hhZG93LFxuICBkYW5nZXJCb3hTaGFkb3csXG4gIHJvc2VCb3hTaGFkb3csXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxuICBzdWNjZXNzQ2FyZEhlYWRlcixcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcbiAgaW5mb0NhcmRIZWFkZXIsXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxuICByb3NlQ2FyZEhlYWRlcixcbiAgY2FyZEFjdGlvbnMsXG4gIGNhcmRIZWFkZXIsXG4gIGRlZmF1bHRCb3hTaGFkb3csXG4gIHRpdGxlLFxuICBjYXJkVGl0bGUsXG4gIGNhcmRTdWJ0aXRsZSxcbiAgY2FyZExpbmtcbn07XG4iLCJpbXBvcnQge1xuICBncmF5Q29sb3IsXG4gIHByaW1hcnlDb2xvcixcbiAgaW5mb0NvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHJvc2VDb2xvclxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCBidXR0b25TdHlsZSA9IHtcbiAgYnV0dG9uOiB7XG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIixcbiAgICBtaW5XaWR0aDogXCJhdXRvXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3IsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMTIpXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBwYWRkaW5nOiBcIjEycHggMzBweFwiLFxuICAgIG1hcmdpbjogXCIuMzEyNXJlbSAxcHhcIixcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwiMFwiLFxuICAgIHdpbGxDaGFuZ2U6IFwiYm94LXNoYWRvdywgdHJhbnNmb3JtXCIsXG4gICAgdHJhbnNpdGlvbjpcbiAgICAgIFwiYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1NzE0M1wiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgdG91Y2hBY3Rpb246IFwibWFuaXB1bGF0aW9uXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYXlDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpXCJcbiAgICB9LFxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCAmLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgdG9wOiBcIjBcIixcbiAgICAgIG1hcmdpblRvcDogXCItMWVtXCIsXG4gICAgICBtYXJnaW5Cb3R0b206IFwiLTFlbVwiLFxuICAgICAgZm9udFNpemU6IFwiMS4xcmVtXCIsXG4gICAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJcbiAgICB9LFxuICAgIFwiJiBzdmdcIjoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgd2lkdGg6IFwiMThweFwiLFxuICAgICAgaGVpZ2h0OiBcIjE4cHhcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuICAgIH0sXG4gICAgXCImJGp1c3RJY29uXCI6IHtcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgICAgbWFyZ2luVG9wOiBcIjBweFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIHRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgIGxlZnQ6IFwiMHB4XCIsXG4gICAgICAgIHRvcDogXCIwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI0MXB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2hpdGU6IHtcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBjb2xvcjogZ3JheUNvbG9yXG4gICAgfVxuICB9LFxuICByb3NlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDIzMywgMzAsIDk5LCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgyMzMsIDMwLCA5OSwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgyMzMsIDMwLCA5OSwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDIzMywgMzAsIDk5LCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMjMzLCAzMCwgOTksIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgcHJpbWFyeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgxNTYsIDM5LCAxNzYsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDE1NiwgMzksIDE3NiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgxNTYsIDM5LCAxNzYsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgaW5mbzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgwLCAxODgsIDIxMiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMTg4LCAyMTIsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgwLCAxODgsIDIxMiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDE4OCwgMjEyLCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoNzYsIDE3NSwgODAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDc2LCAxNzUsIDgwLCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoNzYsIDE3NSwgODAsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSg3NiwgMTc1LCA4MCwgMC4yKVwiXG4gICAgfVxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDI1NSwgMTUyLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgyNTUsIDE1MiwgMCwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgZGFuZ2VyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMjQ0LCA2NywgNTQsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDI0NCwgNjcsIDU0LCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgyNDQsIDY3LCA1NCwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIHNpbXBsZToge1xuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH0sXG4gICAgXCImJHJvc2VcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogcm9zZUNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkcHJpbWFyeVwiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBwcmltYXJ5Q29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRpbmZvXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IGluZm9Db2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJHN1Y2Nlc3NcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogc3VjY2Vzc0NvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkd2FybmluZ1wiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiB3YXJuaW5nQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRkYW5nZXJcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogZGFuZ2VyQ29sb3JcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRyYW5zcGFyZW50OiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgfVxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIG9wYWNpdHk6IFwiMC42NVwiLFxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG4gIH0sXG4gIGxnOiB7XG4gICAgcGFkZGluZzogXCIxLjEyNXJlbSAyLjI1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC44NzVyZW1cIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuMzMzMzMzXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiXG4gIH0sXG4gIHNtOiB7XG4gICAgcGFkZGluZzogXCIwLjQwNjI1cmVtIDEuMjVyZW1cIixcbiAgICBmb250U2l6ZTogXCIwLjY4NzVyZW1cIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIlxuICB9LFxuICByb3VuZDoge1xuICAgIGJvcmRlclJhZGl1czogXCIzMHB4XCJcbiAgfSxcbiAgYmxvY2s6IHtcbiAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIlxuICB9LFxuICBsaW5rOiB7XG4gICAgXCImLCY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGNvbG9yOiBcIiM5OTk5OTlcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICB9XG4gIH0sXG4gIGp1c3RJY29uOiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiMTJweFwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIxMnB4XCIsXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGhlaWdodDogXCI0MXB4XCIsXG4gICAgbWluV2lkdGg6IFwiNDFweFwiLFxuICAgIHdpZHRoOiBcIjQxcHhcIixcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIHN2ZywmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBtYXJnaW5SaWdodDogXCIwcHhcIlxuICAgIH0sXG4gICAgXCImJGxnXCI6IHtcbiAgICAgIGhlaWdodDogXCI1N3B4XCIsXG4gICAgICBtaW5XaWR0aDogXCI1N3B4XCIsXG4gICAgICB3aWR0aDogXCI1N3B4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjU2cHhcIixcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMzJweFwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjU2cHhcIlxuICAgICAgfSxcbiAgICAgIFwiJiBzdmdcIjoge1xuICAgICAgICB3aWR0aDogXCIzMnB4XCIsXG4gICAgICAgIGhlaWdodDogXCIzMnB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRzbVwiOiB7XG4gICAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgbWluV2lkdGg6IFwiMzBweFwiLFxuICAgICAgd2lkdGg6IFwiMzBweFwiLFxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMjlweFwiXG4gICAgICB9LFxuICAgICAgXCImIHN2Z1wiOiB7XG4gICAgICAgIHdpZHRoOiBcIjE3cHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjE3cHhcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uU3R5bGU7XG4iLCJjb25zdCBjYXJkQm9keVN0eWxlID0ge1xuICBjYXJkQm9keToge1xuICAgIHBhZGRpbmc6IFwiMC45Mzc1cmVtIDIwcHhcIixcbiAgICBmbGV4OiBcIjEgMSBhdXRvXCIsXG4gICAgV2Via2l0Qm94RmxleDogXCIxXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICB9LFxuICBjYXJkQm9keVBsYWluOiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiNXB4XCIsXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjVweFwiXG4gIH0sXG4gIGNhcmRCb2R5UHJvZmlsZToge1xuICAgIG1hcmdpblRvcDogXCIxNXB4XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEJvZHlTdHlsZTtcbiIsImNvbnN0IGNhcmRGb290ZXJTdHlsZSA9IHtcbiAgY2FyZEZvb3Rlcjoge1xuICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgIG1hcmdpbjogXCIwIDE1cHggMTBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIwXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgYm9yZGVyOiBcIjBcIlxuICB9LFxuICBjYXJkRm9vdGVyUHJvZmlsZToge1xuICAgIG1hcmdpblRvcDogXCItMTVweFwiXG4gIH0sXG4gIGNhcmRGb290ZXJQbGFpbjoge1xuICAgIHBhZGRpbmdMZWZ0OiBcIjVweFwiLFxuICAgIHBhZGRpbmdSaWdodDogXCI1cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB9LFxuICBjYXJkRm9vdGVyU3RhdHM6IHtcbiAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgIFwiJiBzdmdcIjoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHRvcDogXCI0cHhcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIixcbiAgICAgIHdpZHRoOiBcIjE2cHhcIixcbiAgICAgIGhlaWdodDogXCIxNnB4XCJcbiAgICB9LFxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICB0b3A6IFwiNHB4XCIsXG4gICAgICBtYXJnaW5SaWdodDogXCIzcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiM3B4XCJcbiAgICB9XG4gIH0sXG4gIGNhcmRGb290ZXJDaGFydDoge1xuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgI2VlZVwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRGb290ZXJTdHlsZTtcbiIsImltcG9ydCB7XG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxuICBzdWNjZXNzQ2FyZEhlYWRlcixcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcbiAgaW5mb0NhcmRIZWFkZXIsXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxuICByb3NlQ2FyZEhlYWRlclxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuY29uc3QgY2FyZEhlYWRlclN0eWxlID0ge1xuICBjYXJkSGVhZGVyOiB7XG4gICAgcGFkZGluZzogXCIwLjc1cmVtIDEuMjVyZW1cIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgIGJvcmRlckJvdHRvbTogXCJub25lXCIsXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgIHpJbmRleDogXCIzICFpbXBvcnRhbnRcIixcbiAgICBcIiYkY2FyZEhlYWRlclBsYWluLCYkY2FyZEhlYWRlckljb24sJiRjYXJkSGVhZGVyU3RhdHMsJiR3YXJuaW5nQ2FyZEhlYWRlciwmJHN1Y2Nlc3NDYXJkSGVhZGVyLCYkZGFuZ2VyQ2FyZEhlYWRlciwmJGluZm9DYXJkSGVhZGVyLCYkcHJpbWFyeUNhcmRIZWFkZXIsJiRyb3NlQ2FyZEhlYWRlclwiOiB7XG4gICAgICBtYXJnaW46IFwiMCAxNXB4XCIsXG4gICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCJcbiAgICB9LFxuICAgIFwiJjpmaXJzdC1jaGlsZFwiOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IFwiY2FsYyguMjVyZW0gLSAxcHgpIGNhbGMoLjI1cmVtIC0gMXB4KSAwIDBcIlxuICAgIH0sXG4gICAgXCImJHdhcm5pbmdDYXJkSGVhZGVyLCYkc3VjY2Vzc0NhcmRIZWFkZXIsJiRkYW5nZXJDYXJkSGVhZGVyLCYkaW5mb0NhcmRIZWFkZXIsJiRwcmltYXJ5Q2FyZEhlYWRlciwmJHJvc2VDYXJkSGVhZGVyXCI6IHtcbiAgICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0yMHB4XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMTVweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkY2FyZEhlYWRlclN0YXRzIGksJiRjYXJkSGVhZGVyU3RhdHMgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjM2cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgd2lkdGg6IFwiNTZweFwiLFxuICAgICAgaGVpZ2h0OiBcIjU2cHhcIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIG92ZXJmbG93OiBcInVuc2V0XCIsXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMXB4XCJcbiAgICB9LFxuICAgIFwiJiRjYXJkSGVhZGVyU3RhdHMkY2FyZEhlYWRlckljb25cIjoge1xuICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICB9XG4gIH0sXG4gIGNhcmRIZWFkZXJQbGFpbjoge1xuICAgIG1hcmdpbkxlZnQ6IFwiMHB4ICFpbXBvcnRhbnRcIixcbiAgICBtYXJnaW5SaWdodDogXCIwcHggIWltcG9ydGFudFwiXG4gIH0sXG4gIGNhcmRIZWFkZXJTdGF0czoge1xuICAgIFwiJiAkY2FyZEhlYWRlckljb25cIjoge1xuICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICB9LFxuICAgIFwiJiBoMSwmIGgyLCYgaDMsJiBoNCwmIGg1LCYgaDZcIjoge1xuICAgICAgbWFyZ2luOiBcIjAgIWltcG9ydGFudFwiXG4gICAgfVxuICB9LFxuICBjYXJkSGVhZGVySWNvbjoge1xuICAgIFwiJiR3YXJuaW5nQ2FyZEhlYWRlciwmJHN1Y2Nlc3NDYXJkSGVhZGVyLCYkZGFuZ2VyQ2FyZEhlYWRlciwmJGluZm9DYXJkSGVhZGVyLCYkcHJpbWFyeUNhcmRIZWFkZXIsJiRyb3NlQ2FyZEhlYWRlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgfSxcbiAgICBcIiYgaSwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICB3aWR0aDogXCIzM3B4XCIsXG4gICAgICBoZWlnaHQ6IFwiMzNweFwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgbGluZUhlaWdodDogXCIzM3B4XCJcbiAgICB9LFxuICAgIFwiJiBzdmdcIjoge1xuICAgICAgd2lkdGg6IFwiMjRweFwiLFxuICAgICAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMzNweFwiLFxuICAgICAgLy8gbWFyZ2luOiBcIjVweCA0cHggMHB4XCJcbiAgICB9XG4gIH0sXG4gIHdhcm5pbmdDYXJkSGVhZGVyOiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XG4gICAgICAuLi53YXJuaW5nQ2FyZEhlYWRlclxuICAgIH1cbiAgfSxcbiAgc3VjY2Vzc0NhcmRIZWFkZXI6IHtcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcbiAgICAgIC4uLnN1Y2Nlc3NDYXJkSGVhZGVyXG4gICAgfVxuICB9LFxuICBkYW5nZXJDYXJkSGVhZGVyOiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XG4gICAgICAuLi5kYW5nZXJDYXJkSGVhZGVyXG4gICAgfVxuICB9LFxuICBpbmZvQ2FyZEhlYWRlcjoge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xuICAgICAgLi4uaW5mb0NhcmRIZWFkZXJcbiAgICB9XG4gIH0sXG4gIHByaW1hcnlDYXJkSGVhZGVyOiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XG4gICAgICAuLi5wcmltYXJ5Q2FyZEhlYWRlclxuICAgIH1cbiAgfSxcbiAgcm9zZUNhcmRIZWFkZXI6IHtcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcbiAgICAgIC4uLnJvc2VDYXJkSGVhZGVyXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkSGVhZGVyU3R5bGU7XG4iLCJpbXBvcnQge1xuICB3YXJuaW5nQ2FyZEhlYWRlcixcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXG4gIGRhbmdlckNhcmRIZWFkZXIsXG4gIGluZm9DYXJkSGVhZGVyLFxuICBwcmltYXJ5Q2FyZEhlYWRlcixcbiAgcm9zZUNhcmRIZWFkZXJcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcbmNvbnN0IGNhcmRJY29uU3R5bGUgPSB7XG4gIGNhcmRJY29uOiB7XG4gICAgXCImJHdhcm5pbmdDYXJkSGVhZGVyLCYkc3VjY2Vzc0NhcmRIZWFkZXIsJiRkYW5nZXJDYXJkSGVhZGVyLCYkaW5mb0NhcmRIZWFkZXIsJiRwcmltYXJ5Q2FyZEhlYWRlciwmJHJvc2VDYXJkSGVhZGVyXCI6IHtcbiAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjOTk5XCIsXG4gICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgIG1hcmdpblRvcDogXCItMjBweFwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVweFwiLFxuICAgICAgZmxvYXQ6IFwibGVmdFwiXG4gICAgfVxuICB9LFxuICB3YXJuaW5nQ2FyZEhlYWRlcixcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXG4gIGRhbmdlckNhcmRIZWFkZXIsXG4gIGluZm9DYXJkSGVhZGVyLFxuICBwcmltYXJ5Q2FyZEhlYWRlcixcbiAgcm9zZUNhcmRIZWFkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRJY29uU3R5bGU7XG4iLCJjb25zdCBjYXJkU3R5bGUgPSB7XG4gIGNhcmQ6IHtcbiAgICBib3JkZXI6IFwiMFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3hTaGFkb3c6IFwiMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtaW5XaWR0aDogXCIwXCIsXG4gICAgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiLFxuICAgIGZvbnRTaXplOiBcIi44NzVyZW1cIlxuICB9LFxuICBjYXJkUGxhaW46IHtcbiAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICB9LFxuICBjYXJkUHJvZmlsZToge1xuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIH0sXG4gIGNhcmRDaGFydDoge1xuICAgIFwiJiBwXCI6IHtcbiAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcbiAgICAgIHBhZGRpbmdUb3A6IFwiMHB4XCJcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRTdHlsZTtcbiIsImltcG9ydCB7XG4gIHByaW1hcnlDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgZGVmYXVsdEZvbnRcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3QgY3VzdG9tSW5wdXRTdHlsZSA9IHtcbiAgZGlzYWJsZWQ6IHtcbiAgICBcIiY6YmVmb3JlXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudCAhaW1wb3J0YW50XCJcbiAgICB9XG4gIH0sXG4gIHVuZGVybGluZToge1xuICAgIFwiJjpob3Zlcjpub3QoJGRpc2FibGVkKTpiZWZvcmUsJjpiZWZvcmVcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IFwiI0QyRDJEMiAhaW1wb3J0YW50XCIsXG4gICAgICBib3JkZXJXaWR0aDogXCIxcHggIWltcG9ydGFudFwiXG4gICAgfSxcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHByaW1hcnlDb2xvclxuICAgIH1cbiAgfSxcbiAgdW5kZXJsaW5lRXJyb3I6IHtcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IGRhbmdlckNvbG9yXG4gICAgfVxuICB9LFxuICB1bmRlcmxpbmVTdWNjZXNzOiB7XG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgICB9XG4gIH0sXG4gIGxhYmVsUm9vdDoge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGNvbG9yOiBcIiNBQUFBQUEgIWltcG9ydGFudFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1N1wiXG4gIH0sXG4gIGxhYmVsUm9vdEVycm9yOiB7XG4gICAgY29sb3I6IGRhbmdlckNvbG9yXG4gIH0sXG4gIGxhYmVsUm9vdFN1Y2Nlc3M6IHtcbiAgICBjb2xvcjogc3VjY2Vzc0NvbG9yXG4gIH0sXG4gIGZlZWRiYWNrOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiMThweFwiLFxuICAgIHJpZ2h0OiBcIjBcIixcbiAgICB6SW5kZXg6IFwiMlwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB3aWR0aDogXCIyNHB4XCIsXG4gICAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCJcbiAgfSxcbiAgbWFyZ2luVG9wOiB7XG4gICAgbWFyZ2luVG9wOiBcIjE2cHhcIlxuICB9LFxuICBmb3JtQ29udHJvbDoge1xuICAgIGZsZXg6IFwiMSAxIGF1dG9cIixcbiAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcbiAgICBtYXJnaW46IFwiMCAwIDAgMFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tSW5wdXRTdHlsZTtcbiIsImNvbnN0IGN1c3RvbVRhYnNTdHlsZSA9IHtcbiAgY2FyZDp7XG4gICAgXCJib3gtc2hhZG93XCI6XCJub25lXCJcbiAgfSxcbiAgY2FyZFRpdGxlOiB7XG4gICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgIHBhZGRpbmc6IFwiMTBweCAxMHB4IDEwcHggMHB4XCIsXG4gICAgbGluZUhlaWdodDogXCIyNHB4XCJcbiAgfSxcbiAgY2FyZFRpdGxlUlRMOiB7XG4gICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMHB4IDEwcHggMTBweCAhaW1wb3J0YW50XCJcbiAgfSxcbiAgZGlzcGxheU5vbmU6IHtcbiAgICBkaXNwbGF5OiBcIm5vbmUgIWltcG9ydGFudFwiXG4gIH0sXG4gIHRhYnNSb290OiB7XG4gICAgbWluSGVpZ2h0OiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBvdmVyZmxvd1g6IFwidmlzaWJsZVwiLFxuICAgIFwiJiAkdGFiUm9vdEJ1dHRvblwiOiB7XG4gICAgICBmb250U2l6ZTogXCIwLjg3NXJlbVwiXG4gICAgfVxuICB9LFxuICB0YWJSb290QnV0dG9uOiB7XG4gICAgbWluSGVpZ2h0OiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBtaW5XaWR0aDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgd2lkdGg6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIGhlaWdodDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgbWF4V2lkdGg6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIG1heEhlaWdodDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgcGFkZGluZzogXCIxMHB4IDE1cHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgbGluZUhlaWdodDogXCIyNHB4XCIsXG4gICAgYm9yZGVyOiBcIjAgIWltcG9ydGFudFwiLFxuICAgIGNvbG9yOiBcIiNmZmYgIWltcG9ydGFudFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiNHB4XCIsXG4gICAgXCImOmxhc3QtY2hpbGRcIjoge1xuICAgICAgbWFyZ2luTGVmdDogXCIwcHhcIlxuICAgIH1cbiAgfSxcbiAgdGFiTGFiZWxDb250YWluZXI6IHtcbiAgICBwYWRkaW5nOiBcIjBweFwiXG4gIH0sXG4gIHRhYkxhYmVsOiB7XG4gICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICBmb250U2l6ZTogXCIxMnB4XCJcbiAgfSxcbiAgdGFiU2VsZWN0ZWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCIsXG4gICAgdHJhbnNpdGlvbjogXCIwLjJzIGJhY2tncm91bmQtY29sb3IgMC4xc1wiXG4gIH0sXG4gIHRhYldyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIG1pbkhlaWdodDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgbWluV2lkdGg6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIHdpZHRoOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBoZWlnaHQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIG1heFdpZHRoOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBtYXhIZWlnaHQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIFwiJiA+IHN2ZywmID4gLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgICBtYXJnaW46IFwiLTFweCA1cHggMCAwXCJcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbVRhYnNTdHlsZTtcbiIsImNvbnN0IGRpYWxvZ1RpdGxlU3R5bGUgPSB7XG4gICAgcm9vdDp7XG4gICAgICAgIFxuICAgIH1cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBkaWFsb2dUaXRsZVN0eWxlO1xuICAiLCJjb25zdCBkaWFsb2dDb250ZW50U3R5bGUgPSB7XG4gICAgcm9vdDp7XG4gICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIlxuICAgIH1cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBkaWFsb2dDb250ZW50U3R5bGU7XG4gICIsImNvbnN0IGRpYWxvZ1N0eWxlID0ge1xuICAgIHBhcGVyOntcbiAgICAgICAgLy8gd2lkdGg6XCI2MDBweFwiLFxuICAgICAgICAvLyBvdmVyZmxvdzpcImhpZGRlblwiXG4gICAgfVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IGRpYWxvZ1N0eWxlO1xuICAiLCJjb25zdCBkaWFsb2dUaXRsZVN0eWxlID0ge1xuICAgIHJvb3Q6e1xuICAgICAgICBcbiAgICB9XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgZGlhbG9nVGl0bGVTdHlsZTtcbiAgIiwiaW1wb3J0IHtcbiAgZGVmYXVsdEZvbnQsXG4gIGNvbnRhaW5lcixcbiAgcHJpbWFyeUNvbG9yXG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IGZvb3RlclN0eWxlID0ge1xuICBibG9jazoge1xuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICBmb250U2l6ZTogXCIxMnB4XCJcbiAgfSxcbiAgbGVmdDoge1xuICAgIGZsb2F0OiBcImxlZnQhaW1wb3J0YW50XCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiXG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcGFkZGluZzogXCIxNXB4IDBcIixcbiAgICBtYXJnaW46IFwiMFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBmbG9hdDogXCJyaWdodCFpbXBvcnRhbnRcIlxuICB9LFxuICBmb290ZXI6IHtcbiAgICBib3R0b206IFwiMFwiLFxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgI2U3ZTdlN1wiLFxuICAgIHBhZGRpbmc6IFwiMTVweCAwXCIsXG4gICAgLi4uZGVmYXVsdEZvbnRcbiAgfSxcbiAgY29udGFpbmVyLFxuICBhOiB7XG4gICAgY29sb3I6IHByaW1hcnlDb2xvcixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgfSxcbiAgbGlzdDoge1xuICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgbWFyZ2luVG9wOiBcIjBcIlxuICB9LFxuICBpbmxpbmVCbG9jazoge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgcGFkZGluZzogXCIwcHhcIixcbiAgICB3aWR0aDogXCJhdXRvXCJcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvb3RlclN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgZGVmYXVsdEZvbnQsXG4gIGRhbmdlckNvbG9yXG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmltcG9ydCBkcm9wZG93blN0eWxlIGZyb20gXCIuLi9kcm9wZG93blN0eWxlLmpzeFwiO1xuXG5jb25zdCBoZWFkZXJMaW5rc1N0eWxlID0gdGhlbWUgPT4gKHtcbiAgLi4uZHJvcGRvd25TdHlsZSh0aGVtZSksXG4gIHNlYXJjaDoge1xuICAgIFwiJiA+IGRpdlwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiMFwiXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgbWFyZ2luOiBcIjEwcHggMTVweCAhaW1wb3J0YW50XCIsXG4gICAgICBmbG9hdDogXCJub25lICFpbXBvcnRhbnRcIixcbiAgICAgIHBhZGRpbmdUb3A6IFwiMXB4XCIsXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjFweFwiLFxuICAgICAgcGFkZGluZzogXCIwIWltcG9ydGFudFwiLFxuICAgICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiNDBweFwiLFxuICAgICAgXCImIGlucHV0XCI6IHtcbiAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBsaW5rVGV4dDoge1xuICAgIHpJbmRleDogXCI0XCIsXG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIG1hcmdpbjogXCIwcHhcIlxuICB9LFxuICBidXR0b25MaW5rOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgbWFyZ2luOiBcIjEwcHggMTVweCAwXCIsXG4gICAgICB3aWR0aDogXCItd2Via2l0LWZpbGwtYXZhaWxhYmxlXCIsXG4gICAgICBcIiYgc3ZnXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMjRweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiLTE1cHhcIlxuICAgICAgfSxcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiMjRweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiLTE1cHhcIlxuICAgICAgfSxcbiAgICAgIFwiJiA+IHNwYW5cIjoge1xuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2VhcmNoQnV0dG9uOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIHRvcDogXCItNTBweCAhaW1wb3J0YW50XCIsXG4gICAgICBtYXJnaW5SaWdodDogXCIyMnB4XCIsXG4gICAgICBmbG9hdDogXCJyaWdodFwiXG4gICAgfVxuICB9LFxuICBtYXJnaW46IHtcbiAgICB6SW5kZXg6IFwiNFwiLFxuICAgIG1hcmdpbjogXCIwXCJcbiAgfSxcbiAgc2VhcmNoSWNvbjoge1xuICAgIHdpZHRoOiBcIjE3cHhcIixcbiAgICB6SW5kZXg6IFwiNFwiXG4gIH0sXG4gIG5vdGlmaWNhdGlvbnM6IHtcbiAgICB6SW5kZXg6IFwiNFwiLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHRvcDogXCIycHhcIixcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI0ZGRlwiLFxuICAgICAgcmlnaHQ6IFwiNHB4XCIsXG4gICAgICBmb250U2l6ZTogXCI5cHhcIixcbiAgICAgIGJhY2tncm91bmQ6IGRhbmdlckNvbG9yLFxuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgbWluV2lkdGg6IFwiMTZweFwiLFxuICAgICAgaGVpZ2h0OiBcIjE2cHhcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjE2cHhcIixcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjhweFwiXG4gICAgfVxuICB9LFxuICBtYW5hZ2VyOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgIH0sXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxuICB9LFxuICBzZWFyY2hXcmFwcGVyOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIHdpZHRoOiBcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIixcbiAgICAgIG1hcmdpbjogXCIxMHB4IDE1cHggMFwiXG4gICAgfSxcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJMaW5rc1N0eWxlO1xuIiwiaW1wb3J0IHtcbiAgY29udGFpbmVyLFxuICBkZWZhdWx0Rm9udCxcbiAgcHJpbWFyeUNvbG9yLFxuICBkZWZhdWx0Qm94U2hhZG93LFxuICBpbmZvQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvclxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHRoZW1lID0+ICh7XG4gIGFwcEJhcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIjBcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgIHpJbmRleDogXCIxMDI5XCIsXG4gICAgY29sb3I6IFwiIzU1NTU1NVwiLFxuICAgIGJvcmRlcjogXCIwXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIHBhZGRpbmc6IFwiMTBweCAwXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgZWFzZSAwc1wiLFxuICAgIG1pbkhlaWdodDogXCI1MHB4XCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIC4uLmNvbnRhaW5lcixcbiAgICBtaW5IZWlnaHQ6IFwiNTBweFwiXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBmbGV4OiAxXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgbGluZUhlaWdodDogXCIzMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgbWFyZ2luOiBcIjBcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCJcbiAgICB9XG4gIH0sXG4gIGFwcFJlc3BvbnNpdmU6IHtcbiAgICB0b3A6IFwiOHB4XCJcbiAgfSxcbiAgcHJpbWFyeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAuLi5kZWZhdWx0Qm94U2hhZG93XG4gIH0sXG4gIGluZm86IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgLi4uZGVmYXVsdEJveFNoYWRvd1xuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3IsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIC4uLmRlZmF1bHRCb3hTaGFkb3dcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAuLi5kZWZhdWx0Qm94U2hhZG93XG4gIH0sXG4gIGRhbmdlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIC4uLmRlZmF1bHRCb3hTaGFkb3dcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlclN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgZHJhd2VyV2lkdGgsXG4gIHRyYW5zaXRpb24sXG4gIGJveFNoYWRvdyxcbiAgZGVmYXVsdEZvbnQsXG4gIHByaW1hcnlDb2xvcixcbiAgcHJpbWFyeUJveFNoYWRvdyxcbiAgaW5mb0NvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3Jcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3Qgc2lkZWJhclN0eWxlID0gdGhlbWUgPT4gKHtcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBib3R0b206IFwiMFwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIHpJbmRleDogXCIxXCIsXG4gICAgLi4uYm94U2hhZG93LFxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgICAgLi4uYm94U2hhZG93LFxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgIHJpZ2h0OiBcIjBcIixcbiAgICAgIGxlZnQ6IFwiYXV0b1wiLFxuICAgICAgekluZGV4OiBcIjEwMzJcIixcbiAgICAgIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxuICAgICAgb3ZlcmZsb3dZOiBcInZpc2libGVcIixcbiAgICAgIGJvcmRlclRvcDogXCJub25lXCIsXG4gICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgICAgcGFkZGluZ0xlZnQ6IFwiMFwiLFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtkcmF3ZXJXaWR0aH1weCwgMCwgMClgLFxuICAgICAgLi4udHJhbnNpdGlvblxuICAgIH1cbiAgfSxcbiAgbG9nbzoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgcGFkZGluZzogXCIxNXB4IDE1cHhcIixcbiAgICB6SW5kZXg6IFwiNFwiLFxuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgYm90dG9tOiBcIjBcIixcblxuICAgICAgaGVpZ2h0OiBcIjFweFwiLFxuICAgICAgcmlnaHQ6IFwiMTVweFwiLFxuICAgICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gMzBweClcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDE4MCwgMTgwLCAxODAsIDAuMylcIlxuICAgIH1cbiAgfSxcbiAgbG9nb0xpbms6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIHBhZGRpbmc6IFwiNXB4IDBcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgXCImLCY6aG92ZXJcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgfVxuICB9LFxuICBsb2dvSW1hZ2U6IHtcbiAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBtYXhIZWlnaHQ6IFwiMzBweFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIlxuICB9LFxuICBpbWc6IHtcbiAgICB3aWR0aDogXCIzNXB4XCIsXG4gICAgdG9wOiBcIjIycHhcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgYm9yZGVyOiBcIjBcIlxuICB9LFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB6SW5kZXg6IFwiMVwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB0b3A6IFwiMFwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHpJbmRleDogXCIzXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXG4gICAgICBvcGFjaXR5OiBcIi44XCJcbiAgICB9XG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgIHBhZGRpbmdMZWZ0OiBcIjBcIixcbiAgICBwYWRkaW5nVG9wOiBcIjBcIixcbiAgICBwYWRkaW5nQm90dG9tOiBcIjBcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgcG9zaXRpb246IFwidW5zZXRcIlxuICB9LFxuICBpdGVtOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzLCY6dmlzaXRlZCwmXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgIH1cbiAgfSxcbiAgaXRlbUxpbms6IHtcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMzAwbXMgbGluZWFyXCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMTVweCAwXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIHBhZGRpbmc6IFwiMTBweCAxNXB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgLi4uZGVmYXVsdEZvbnRcbiAgfSxcbiAgaXRlbUljb246IHtcbiAgICB3aWR0aDogXCIyNHB4XCIsXG4gICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICBmb250U2l6ZTogXCIyNHB4XCIsXG4gICAgbGluZUhlaWdodDogXCIzMHB4XCIsXG4gICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICBjb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcIlxuICB9LFxuICBpdGVtVGV4dDoge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgbGluZUhlaWdodDogXCIzMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICB9LFxuICB3aGl0ZUZvbnQ6IHtcbiAgICBjb2xvcjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgcHVycGxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgLi4ucHJpbWFyeUJveFNoYWRvdyxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICAuLi5wcmltYXJ5Qm94U2hhZG93XG4gICAgfVxuICB9LFxuICBibHVlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDAsMTg4LDIxMiwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDAsMTg4LDIxMiwuMilcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgwLDE4OCwyMTIsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgwLDE4OCwyMTIsLjIpXCJcbiAgICB9XG4gIH0sXG4gIGdyZWVuOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDc2LDE3NSw4MCwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDc2LDE3NSw4MCwuMilcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSg3NiwxNzUsODAsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSg3NiwxNzUsODAsLjIpXCJcbiAgICB9XG4gIH0sXG4gIG9yYW5nZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgyNTUsMTUyLDAsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgyNTUsMTUyLDAsLjIpXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMjU1LDE1MiwwLC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC4yKVwiXG4gICAgfVxuICB9LFxuICByZWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgyNDQsNjcsNTQsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgyNDQsNjcsNTQsLjIpXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgyNDQsNjcsNTQsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgyNDQsNjcsNTQsLjIpXCJcbiAgICB9XG4gIH0sXG4gIHNpZGViYXJXcmFwcGVyOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDc1cHgpXCIsXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgIHdpZHRoOiBcIjI2MHB4XCIsXG4gICAgekluZGV4OiBcIjRcIixcbiAgICBvdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiXG4gIH0sXG4gIGFjdGl2ZVBybzoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGJvdHRvbTogXCIxM3B4XCJcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyU3R5bGU7XG4iLCJpbXBvcnQge1xuICBkZWZhdWx0Rm9udCxcbiAgcHJpbWFyeUJveFNoYWRvdyxcbiAgaW5mb0JveFNoYWRvdyxcbiAgc3VjY2Vzc0JveFNoYWRvdyxcbiAgd2FybmluZ0JveFNoYWRvdyxcbiAgZGFuZ2VyQm94U2hhZG93LFxuICByb3NlQm94U2hhZG93XG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IHNuYWNrYmFyQ29udGVudFN0eWxlID0ge1xuICByb290OiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgZmxleFdyYXA6IFwidW5zZXRcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHBhZGRpbmc6IFwiMTBweCAxMHB4XCIsXG4gICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgY29sb3I6IFwiIzU1NTU1NVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yOCksIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiXG4gIH0sXG4gIHRvcDIwOiB7XG4gICAgdG9wOiBcIjIwcHhcIlxuICB9LFxuICB0b3A0MDoge1xuICAgIHRvcDogXCI0MHB4XCJcbiAgfSxcbiAgaW5mbzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDBkM2VlXCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC4uLmluZm9Cb3hTaGFkb3dcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNWNiODYwXCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC4uLnN1Y2Nlc3NCb3hTaGFkb3dcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZhMjFhXCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC4uLndhcm5pbmdCb3hTaGFkb3dcbiAgfSxcbiAgZGFuZ2VyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNTVhNGVcIixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLi4uZGFuZ2VyQm94U2hhZG93XG4gIH0sXG4gIHByaW1hcnk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2FmMmNjNVwiLFxuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAuLi5wcmltYXJ5Qm94U2hhZG93XG4gIH0sXG4gIHJvc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ViMzU3M1wiLFxuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAuLi5yb3NlQm94U2hhZG93XG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgbWF4V2lkdGg6IFwiODklXCJcbiAgfSxcbiAgY2xvc2U6IHtcbiAgICB3aWR0aDogXCIxMXB4XCIsXG4gICAgaGVpZ2h0OiBcIjExcHhcIlxuICB9LFxuICBpY29uQnV0dG9uOiB7XG4gICAgd2lkdGg6IFwiMjRweFwiLFxuICAgIGhlaWdodDogXCIyNHB4XCIsXG4gICAgcGFkZGluZzogXCIwcHhcIlxuICB9LFxuICBpY29uOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGxlZnQ6IFwiMTVweFwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjUwJVwiLFxuICAgIG1hcmdpblRvcDogXCItMTVweFwiLFxuICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICBoZWlnaHQ6IFwiMzBweFwiXG4gIH0sXG4gIGluZm9JY29uOiB7XG4gICAgY29sb3I6IFwiIzAwZDNlZVwiXG4gIH0sXG4gIHN1Y2Nlc3NJY29uOiB7XG4gICAgY29sb3I6IFwiIzVjYjg2MFwiXG4gIH0sXG4gIHdhcm5pbmdJY29uOiB7XG4gICAgY29sb3I6IFwiI2ZmYTIxYVwiXG4gIH0sXG4gIGRhbmdlckljb246IHtcbiAgICBjb2xvcjogXCIjZjU1YTRlXCJcbiAgfSxcbiAgcHJpbWFyeUljb246IHtcbiAgICBjb2xvcjogXCIjYWYyY2M1XCJcbiAgfSxcbiAgcm9zZUljb246IHtcbiAgICBjb2xvcjogXCIjZWIzNTczXCJcbiAgfSxcbiAgaWNvbk1lc3NhZ2U6IHtcbiAgICBwYWRkaW5nTGVmdDogXCI1MHB4XCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNuYWNrYmFyQ29udGVudFN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgZGVmYXVsdEZvbnQsXG4gIHByaW1hcnlDb2xvcixcbiAgaW5mb0NvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3Jcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3QgdHlwb2dyYXBoeVN0eWxlID0ge1xuICBkZWZhdWx0Rm9udFN0eWxlOiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgZm9udFNpemU6IFwiMTRweFwiXG4gIH0sXG4gIGRlZmF1bHRIZWFkZXJNYXJnaW5zOiB7XG4gICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiXG4gIH0sXG4gIHF1b3RlOiB7XG4gICAgcGFkZGluZzogXCIxMHB4IDIwcHhcIixcbiAgICBtYXJnaW46IFwiMCAwIDIwcHhcIixcbiAgICBmb250U2l6ZTogXCIxNy41cHhcIixcbiAgICBib3JkZXJMZWZ0OiBcIjVweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgcXVvdGVUZXh0OiB7XG4gICAgbWFyZ2luOiBcIjAgMCAxMHB4XCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gIH0sXG4gIHF1b3RlQXV0aG9yOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGZvbnRTaXplOiBcIjgwJVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1NzE0M1wiLFxuICAgIGNvbG9yOiBcIiM3NzdcIlxuICB9LFxuICBtdXRlZFRleHQ6IHtcbiAgICBjb2xvcjogXCIjNzc3XCJcbiAgfSxcbiAgcHJpbWFyeVRleHQ6IHtcbiAgICBjb2xvcjogcHJpbWFyeUNvbG9yXG4gIH0sXG4gIGluZm9UZXh0OiB7XG4gICAgY29sb3I6IGluZm9Db2xvclxuICB9LFxuICBzdWNjZXNzVGV4dDoge1xuICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgfSxcbiAgd2FybmluZ1RleHQ6IHtcbiAgICBjb2xvcjogd2FybmluZ0NvbG9yXG4gIH0sXG4gIGRhbmdlclRleHQ6IHtcbiAgICBjb2xvcjogZGFuZ2VyQ29sb3JcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwb2dyYXBoeVN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgcHJpbWFyeUNvbG9yLFxuICBwcmltYXJ5Qm94U2hhZG93LFxuICBkZWZhdWx0Rm9udFxufSBmcm9tIFwiLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCBkcm9wZG93blN0eWxlID0gdGhlbWUgPT4gKHtcbiAgYnV0dG9uTGluazoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMzBweFwiLFxuICAgICAgd2lkdGg6IFwiYXV0b1wiXG4gICAgfVxuICB9LFxuICBsaW5rczoge1xuICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgIHpJbmRleDogXCI0XCIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICBjb2xvcjogXCIjYTlhZmJiXCIsXG4gICAgICBtYXJnaW5SaWdodDogXCIxNXB4XCJcbiAgICB9XG4gIH0sXG4gIGxpbmtUZXh0OiB7XG4gICAgekluZGV4OiBcIjRcIixcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBmb250U2l6ZTogXCIxNHB4XCJcbiAgfSxcbiAgcG9wcGVyQ2xvc2U6IHtcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuICB9LFxuICBwb29wZXJSZXNwb25zaXZlOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcbiAgICAgIHpJbmRleDogXCIxNjQwXCIsXG4gICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgIGZsb2F0OiBcIm5vbmVcIixcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICBXZWJraXRCb3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgIGNvbG9yOiBcImJsYWNrXCJcbiAgICB9XG4gIH0sXG4gIHBvb3Blck5hdjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICBwb3NpdGlvbjogXCJzdGF0aWMgIWltcG9ydGFudFwiLFxuICAgICAgbGVmdDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgICB0b3A6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgICAgdHJhbnNmb3JtOiBcIm5vbmUgIWltcG9ydGFudFwiLFxuICAgICAgd2lsbENoYW5nZTogXCJub25lICFpbXBvcnRhbnRcIixcbiAgICAgIFwiJiA+IGRpdlwiOiB7XG4gICAgICAgIGJveFNoYWRvdzogXCJub25lICFpbXBvcnRhbnRcIixcbiAgICAgICAgbWFyZ2luTGVmdDogXCIwcmVtXCIsXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjByZW1cIixcbiAgICAgICAgdHJhbnNpdGlvbjogXCJub25lICFpbXBvcnRhbnRcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjBweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIwcHggIWltcG9ydGFudFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjBweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudCAhaW1wb3J0YW50XCIsXG4gICAgICAgIFwiJiB1bCBsaVwiOiB7XG4gICAgICAgICAgY29sb3I6IFwiI0ZGRiAhaW1wb3J0YW50XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjEwcHggMTVweCAwIWltcG9ydGFudFwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAxNXB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImhzbGEoMCwwJSw3OCUsLjIpXCIsXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkcm9wZG93bjoge1xuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBib3JkZXI6IFwiMFwiLFxuICAgIGJveFNoYWRvdzogXCIwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpXCIsXG4gICAgdG9wOiBcIjEwMCVcIixcbiAgICB6SW5kZXg6IFwiMTAwMFwiLFxuICAgIG1pbldpZHRoOiBcIjE2MHB4XCIsXG4gICAgcGFkZGluZzogXCI1cHggMFwiLFxuICAgIG1hcmdpbjogXCIycHggMCAwXCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgIFdlYmtpdEJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94XCIsXG4gICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIlxuICB9LFxuICBkcm9wZG93bkl0ZW06IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBmb250U2l6ZTogXCIxM3B4XCIsXG4gICAgcGFkZGluZzogXCIxMHB4IDIwcHhcIixcbiAgICBtYXJnaW46IFwiMCA1cHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMnB4XCIsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgbGluZWFyXCIsXG4gICAgTW96VHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgbGluZWFyXCIsXG4gICAgT1RyYW5zaXRpb246IFwiYWxsIDE1MG1zIGxpbmVhclwiLFxuICAgIE1zVHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgbGluZWFyXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgbGluZWFyXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGNsZWFyOiBcImJvdGhcIixcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1NzE0M1wiLFxuICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIGhlaWdodDogXCJ1bnNldFwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIC4uLnByaW1hcnlCb3hTaGFkb3dcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkcm9wZG93blN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgZHJhd2VyV2lkdGgsXG4gIHRyYW5zaXRpb24sXG4gIGNvbnRhaW5lclxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCBhcHBTdHlsZSA9IHRoZW1lID0+ICh7XG4gIHdyYXBwZXI6IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCJcbiAgfSxcbiAgbWFpblBhbmVsOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XG4gICAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYFxuICAgIH0sXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICAuLi50cmFuc2l0aW9uLFxuICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIG92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCJcbiAgfSxcbiAgY29udGVudDoge1xuICAgIG1hcmdpblRvcDogXCI3MHB4XCIsXG4gICAgcGFkZGluZzogXCIzMHB4IDE1cHhcIixcbiAgICBtaW5IZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDEyM3B4KVwiXG4gIH0sXG4gIGNvbnRhaW5lcixcbiAgbWFwOiB7XG4gICAgbWFyZ2luVG9wOiBcIjcwcHhcIlxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwU3R5bGU7XG4iLCJpbXBvcnQgeyBzdWNjZXNzQ29sb3IgfSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCBkYXNoYm9hcmRTdHlsZSA9ICh0aGVtZSk9Pih7XG4gIHN1Y2Nlc3NUZXh0OiB7XG4gICAgY29sb3I6IHN1Y2Nlc3NDb2xvclxuICB9LFxuICB1cEFycm93Q2FyZENhdGVnb3J5OiB7XG4gICAgd2lkdGg6IFwiMTZweFwiLFxuICAgIGhlaWdodDogXCIxNnB4XCJcbiAgfSxcbiAgc3RhdHM6IHtcbiAgICBjb2xvcjogXCIjOTk5OTk5XCIsXG4gICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjIycHhcIixcbiAgICBcIiYgc3ZnXCI6IHtcbiAgICAgIHRvcDogXCI0cHhcIixcbiAgICAgIHdpZHRoOiBcIjE2cHhcIixcbiAgICAgIGhlaWdodDogXCIxNnB4XCIsXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiXG4gICAgfSxcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICB0b3A6IFwiNHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiXG4gICAgfVxuICB9LFxuICBjYXJkQ2F0ZWdvcnk6IHtcbiAgICBjb2xvcjogXCIjOTk5OTk5XCIsXG4gICAgbWFyZ2luOiBcIjBcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjBcIixcbiAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiXG4gIH0sXG4gIGNhcmRDYXRlZ29yeVdoaXRlOiB7XG4gICAgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwuNjIpXCIsXG4gICAgbWFyZ2luOiBcIjBcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjBcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiXG4gIH0sXG4gIGNhcmRUaXRsZToge1xuICAgIGNvbG9yOiBcIiMzQzQ4NThcIixcbiAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIixcbiAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjNweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBcIiYgc21hbGxcIjoge1xuICAgICAgY29sb3I6IFwiIzc3N1wiLFxuICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiXG4gICAgfVxuICB9LFxuICBjYXJkVGl0bGVXaGl0ZToge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIixcbiAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjNweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBcIiYgc21hbGxcIjoge1xuICAgICAgY29sb3I6IFwiIzc3N1wiLFxuICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMVwiXG4gICAgfVxuICB9LFxuICBjb250YWluZXI6e1xuICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIHdpZHRoOlwiNDBweFwiLFxuICAgIGhlaWdodDpcIjQwcHhcIixcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpJyxcbiAgICAnJiBzdmcnOntcbiAgICAgICBjb2xvcjonI2ZmZidcbiAgICB9LFxuICAgICcmOmhvdmVyJzp7XG4gICAgICBiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZDk3YTcsICMwMGFjYzEpJyxcbiAgICB9XG4gIH0sXG4gIHNpemVTbWFsbDp7XG4gICAgZm9udFNpemU6IFwiMC44MTI1cmVtXCJcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZFN0eWxlO1xuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1VzZXIvdXNlckluZm8nXG5pbXBvcnQgeyBmZXRjaFBvc3QgfSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaHR0cCdcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hcGknXG5cbmV4cG9ydCBjb25zdCBGX0NPTU1PTl9GRVRDSF9MT0dJTl9VU0VSX0FDVElPTiA9IChwYXJhbXMpPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaC8qLCBnZXRTdGF0ZSovKSA9PiB7XG4gICAgICAgIC8vIGxldCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGZldGNoUG9zdChBUEkubG9naW5Vc2VyLHBhcmFtcykudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgIGlmKGpzb24uc3RhdHVzKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRl9DT01NT05fRkVUQ0hfQUREX1VTRVJfQUNUSU9OID0gKHBhcmFtcyxjYWxsYmFjayk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoLyosIGdldFN0YXRlKi8pID0+IHtcbiAgICAgICAgLy8gbGV0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgZmV0Y2hQb3N0KEFQSS5hZGRVc2VyLHBhcmFtcykudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgIGlmKGpzb24uc3RhdHVzKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGpzb24udHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IEZfQ09NTU9OX0ZFVENIX01PRElGWV9VU0VSX0FDVElPTiA9IChwYXJhbXMsY2FsbGJhY2spPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaC8qLCBnZXRTdGF0ZSovKSA9PiB7XG4gICAgICAgIC8vIGxldCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGZldGNoUG9zdChBUEkubW9kaWZ5VXNlcixwYXJhbXMpLnRoZW4ocmVzID0+IHJlcy5kYXRhKS50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICBpZihqc29uLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhqc29uLnR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBGX0NPTU1PTl9GRVRDSF9MT0dPVVRfVVNFUl9BQ1RJT04gPSAocGFyYW1zKT0+e1xuICAgIHJldHVybiAoZGlzcGF0Y2gvKiwgZ2V0U3RhdGUqLykgPT4ge1xuICAgICAgICAvLyBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBmZXRjaFBvc3QoQVBJLmxvZ291dFVzZXIscGFyYW1zKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgaWYoanNvbi5zdGF0dXMpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgY2FyZFN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2NhcmRTdHlsZS5qc3hcIjtcblxuZnVuY3Rpb24gQ2FyZCh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3Qge1xuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHBsYWluLFxuICAgIHByb2ZpbGUsXG4gICAgY2hhcnQsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuY2FyZF06IHRydWUsXG4gICAgW2NsYXNzZXMuY2FyZFBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzZXMuY2FyZFByb2ZpbGVdOiBwcm9maWxlLFxuICAgIFtjbGFzc2VzLmNhcmRDaGFydF06IGNoYXJ0LFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZENsYXNzZXN9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHByb2ZpbGU6IFByb3BUeXBlcy5ib29sLFxuICBjaGFydDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoY2FyZFN0eWxlKShDYXJkKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgY2FyZEJvZHlTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkQm9keVN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBDYXJkQm9keSh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBwbGFpbiwgcHJvZmlsZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRCb2R5Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRCb2R5XTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy5jYXJkQm9keVBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzZXMuY2FyZEJvZHlQcm9maWxlXTogcHJvZmlsZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRCb2R5Q2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHByb2ZpbGU6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGNhcmRCb2R5U3R5bGUpKENhcmRCb2R5KTtcbiIsIlxuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5cbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIlxuaW1wb3J0IHsgVG9vbHRpcCwgSGlkZGVuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXg6ICcxIDEgMzMuMzMzMzMlJyxcbiAgICBtYXhXaWR0aDonMzMuMzMzMzMlJywgICAgXG4gICAgZGlzcGxheTpcImJsb2NrXCJcblxuICB9LFxuICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpJzp7XG4gICAgICByb290OiB7XG4gICAgICAgIGZsZXg6ICcxIDEgNTAlJyxcbiAgICAgICAgbWF4V2lkdGg6JzUwJScsICAgICBcbiAgICAgICAgZGlzcGxheTpcImJsb2NrXCJcbiAgICAgIH1cbiAgfSxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSc6e1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXg6ICcxIDEgMTAwJScsXG4gICAgICBtYXhXaWR0aDonMTAwJScsICAgICBcbiAgICAgIGRpc3BsYXk6XCJibG9ja1wiXG4gICAgfVxuICB9LFxuICBwYXBlcjp7XG4gICAgbWFyZ2luOicxMHB4IDEwcHgnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG4gICAgaGVpZ2h0OlwiMTMwcHhcIixcbiAgICBvdmVyZmxvdzonaGlkZGVuJyxcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcyxib3JkZXIgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMnLFxuICAgICdib3JkZXItcmFkaXVzJzpcIjZweFwiLFxuICAgICcmOmhvdmVyJzp7XG4gICAgICAgICdib3gtc2hhZG93JzogXCIwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKVwiXG4gICAgfSxcbiAgICAnJjpob3ZlciBidXR0b24nOntcbiAgICAgICAgZGlzcGxheTonaW5saW5lLWZsZXgnXG4gICAgfVxuICB9LFxuICBjb250YWluZXI6e1xuICAgIG92ZXJmbG93OidoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzonZWxsaXBzaXMnXG4gIH0sXG4gIGltZ2JveDp7XG4gICAgd2lkdGg6MTI4LFxuICAgIGhlaWdodDoxMjgsXG4gICAgbWFyZ2luUmlnaHQ6MTBcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICB3aWR0aDogMTI4LFxuICAgIGhlaWdodDogMTI4LFxuICB9LFxuICBcbiAgaW1nOiB7XG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuICB9LFxuICBjb250ZW50OntcbiAgICAgIGZsZXg6JzEgMSBhdXRvJyxcbiAgICAgIG1heFdpZHRoOidub25lJyxcbiAgICAgIHdpZHRoOidhdXRvJ1xuICB9LFxuICBkZXNjcmlwdGlvbjp7XG4gICAgaGVpZ2h0OlwiMjBweFwiLFxuICAgIG92ZXJmbG93OidoaWRkZW4nXG4gIH0sXG4gIGF1dGhvcjp7XG4gICAgaGVpZ2h0OlwiMjBweFwiLFxuICAgIG92ZXJmbG93OidoaWRkZW4nIFxuICB9LFxuICBidXR0b246e1xuICAgICAgd2lkdGg6JzQwcHgnLFxuICAgICAgbWluV2lkdGg6JzQwcHgnLFxuICAgICAgZGlzcGxheTonbm9uZSdcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIENvbXBsZXhHcmlkKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyAsaW5mbyxvbk9wZW5FZGl0RGlhbG9nLGRlbGV0ZUl0ZW19ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGEgICB0YXJnZXQ9e2luZm8udGFyZ2V0fSBocmVmPXtpbmZvLmFkZD8namF2YXNjcmlwdDp2b2lkKDApJzppbmZvLmxpbmt9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICA8UGFwZXIgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHdyYXA9eydub3dyYXAnfSBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXs4fSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSA+XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ2JveH0+XG4gICAgICAgICAgPEJ1dHRvbkJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gYWx0PVwiY29tcGxleFwiIHNyYz17aW5mby5pY29uP2luZm8uaWNvbjppbmZvLmltZ30gd2lkdGg9JzEyOHB4JyBoZWlnaHQ9JzEyOHB4Jy8+XG4gICAgICAgICAgPC9CdXR0b25CYXNlPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IHNtIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cyBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17OH0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIG5vV3JhcD5cbiAgICAgICAgICAgICAgICB7aW5mby50aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT57aW5mby5kZXNjcmlwdGlvbj9pbmZvLmRlc2NyaXB0aW9uOihpbmZvLmFkZD8nJzon5pqC5peg5o+P6L+wJyl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yfT57aW5mby5hdXRob3I/J+iusOW9le+8micraW5mby5hdXRob3Iubmlja25hbWU6Jyd9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuX19VU0VSX0lORk9fXyAmJiB3aW5kb3cuX19VU0VSX0lORk9fXy5faWQgPT0gaW5mby5hdXRob3IuX2lkPyhcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuS/ruaUueWGheWuuVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbk1vdXNlRG93bj17KGV2KT0+e29uT3BlbkVkaXREaWFsb2coaW5mbyk7ZXYubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7ZXYuZGVmYXVsdFByZXZlbnRlZDt9fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSA+PEVkaXRJY29uIGNvbG9yPXsnYWN0aW9uJ30vPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuWIoOmZpOWGheWuuVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXsoZXYpPT57ZGVsZXRlSXRlbShpbmZvKTtldi5uYXRpdmVFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtldi5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtldi5uYXRpdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO319PjxEZWxldGVJY29uIGNvbG9yPXsnYWN0aW9uJ30vPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICk6bnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICBcbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG4gICAgPC9hPlxuICApO1xufVxuXG5Db21wbGV4R3JpZC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb21wbGV4R3JpZCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBjYXJkRm9vdGVyU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY2FyZEZvb3RlclN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBDYXJkRm9vdGVyKHsgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7XG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgcGxhaW4sXG4gICAgcHJvZmlsZSxcbiAgICBzdGF0cyxcbiAgICBjaGFydCxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcbiAgY29uc3QgY2FyZEZvb3RlckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5jYXJkRm9vdGVyXTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy5jYXJkRm9vdGVyUGxhaW5dOiBwbGFpbixcbiAgICBbY2xhc3Nlcy5jYXJkRm9vdGVyUHJvZmlsZV06IHByb2ZpbGUsXG4gICAgW2NsYXNzZXMuY2FyZEZvb3RlclN0YXRzXTogc3RhdHMsXG4gICAgW2NsYXNzZXMuY2FyZEZvb3RlckNoYXJ0XTogY2hhcnQsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkRm9vdGVyQ2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWluOiBQcm9wVHlwZXMuYm9vbCxcbiAgcHJvZmlsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHN0YXRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hhcnQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGNhcmRGb290ZXJTdHlsZSkoQ2FyZEZvb3Rlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IGNhcmRIZWFkZXJTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkSGVhZGVyU3R5bGUuanN4XCI7XG5cbmZ1bmN0aW9uIENhcmRIZWFkZXIoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzLFxuICAgIGNsYXNzTmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBjb2xvcixcbiAgICBwbGFpbixcbiAgICBzdGF0cyxcbiAgICBpY29uLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuICBjb25zdCBjYXJkSGVhZGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJdOiB0cnVlLFxuICAgIFtjbGFzc2VzW2NvbG9yICsgXCJDYXJkSGVhZGVyXCJdXTogY29sb3IsXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlclBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlclN0YXRzXTogc3RhdHMsXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlckljb25dOiBpY29uLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEhlYWRlckNsYXNzZXN9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIndhcm5pbmdcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwicm9zZVwiXG4gIF0pLFxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHN0YXRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoY2FyZEhlYWRlclN0eWxlKShDYXJkSGVhZGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgY2FyZEljb25TdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkSWNvblN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBDYXJkSWNvbih7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBjb2xvciwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRJY29uQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRJY29uXTogdHJ1ZSxcbiAgICBbY2xhc3Nlc1tjb2xvciArIFwiQ2FyZEhlYWRlclwiXV06IGNvbG9yLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEljb25DbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmRJY29uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwid2FybmluZ1wiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJyb3NlXCJcbiAgXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoY2FyZEljb25TdHlsZSkoQ2FyZEljb24pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8vIG1hdGVyaWFsLXVpIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5cbmltcG9ydCBidXR0b25TdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9idXR0b25TdHlsZS5qc3hcIjtcbmZ1bmN0aW9uIFJlZ3VsYXJCdXR0b24oeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzLFxuICAgIGNvbG9yLFxuICAgIHJvdW5kLFxuICAgIGNoaWxkcmVuLFxuICAgIGRpc2FibGVkLFxuICAgIHNpbXBsZSxcbiAgICBzaXplLFxuICAgIGJsb2NrLFxuICAgIGxpbmssXG4gICAganVzdEljb24sXG4gICAgY2xhc3NOYW1lLFxuICAgIG11aUNsYXNzZXMsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGJ0bkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5idXR0b25dOiB0cnVlLFxuICAgIFtjbGFzc2VzW3NpemVdXTogc2l6ZSxcbiAgICBbY2xhc3Nlc1tjb2xvcl1dOiBjb2xvcixcbiAgICBbY2xhc3Nlcy5yb3VuZF06IHJvdW5kLFxuICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgW2NsYXNzZXMuc2ltcGxlXTogc2ltcGxlLFxuICAgIFtjbGFzc2VzLmJsb2NrXTogYmxvY2ssXG4gICAgW2NsYXNzZXMubGlua106IGxpbmssXG4gICAgW2NsYXNzZXMuanVzdEljb25dOiBqdXN0SWNvbixcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gey4uLnJlc3R9IGNsYXNzZXM9e211aUNsYXNzZXN9IGNsYXNzTmFtZT17YnRuQ2xhc3Nlc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9CdXR0b24+XG4gICk7XG59XG5cblJlZ3VsYXJCdXR0b24ucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicHJpbWFyeVwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJyb3NlXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICAgIFwidHJhbnNwYXJlbnRcIlxuICBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInNtXCIsIFwibGdcIl0pLFxuICBzaW1wbGU6IFByb3BUeXBlcy5ib29sLFxuICByb3VuZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sLFxuICBsaW5rOiBQcm9wVHlwZXMuYm9vbCxcbiAganVzdEljb246IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vIHVzZSB0aGlzIHRvIHBhc3MgdGhlIGNsYXNzZXMgcHJvcHMgZnJvbSBNYXRlcmlhbC1VSVxuICBtdWlDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGJ1dHRvblN0eWxlKShSZWd1bGFyQnV0dG9uKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBDbGVhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyXCI7XG5pbXBvcnQgQ2hlY2sgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja1wiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgY3VzdG9tSW5wdXRTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jdXN0b21JbnB1dFN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBDdXN0b21JbnB1dCh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3Qge1xuICAgIGNsYXNzZXMsXG4gICAgZm9ybUNvbnRyb2xQcm9wcyxcbiAgICBsYWJlbFRleHQsXG4gICAgaWQsXG4gICAgbGFiZWxQcm9wcyxcbiAgICBpbnB1dFByb3BzLFxuICAgIGVycm9yLFxuICAgIHN1Y2Nlc3NcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtcIiBcIiArIGNsYXNzZXMubGFiZWxSb290RXJyb3JdOiBlcnJvcixcbiAgICBbXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdFN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvclxuICB9KTtcbiAgY29uc3QgdW5kZXJsaW5lQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLnVuZGVybGluZUVycm9yXTogZXJyb3IsXG4gICAgW2NsYXNzZXMudW5kZXJsaW5lU3VjY2Vzc106IHN1Y2Nlc3MgJiYgIWVycm9yLFxuICAgIFtjbGFzc2VzLnVuZGVybGluZV06IHRydWVcbiAgfSk7XG4gIGNvbnN0IG1hcmdpblRvcCA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLm1hcmdpblRvcF06IGxhYmVsVGV4dCA9PT0gdW5kZWZpbmVkXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sXG4gICAgICB7Li4uZm9ybUNvbnRyb2xQcm9wc31cbiAgICAgIGNsYXNzTmFtZT17Zm9ybUNvbnRyb2xQcm9wcy5jbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzZXMuZm9ybUNvbnRyb2x9XG4gICAgPlxuICAgICAge2xhYmVsVGV4dCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbFJvb3QgKyBsYWJlbENsYXNzZXN9XG4gICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgey4uLmxhYmVsUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWxUZXh0fVxuICAgICAgICA8L0lucHV0TGFiZWw+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxJbnB1dFxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogbWFyZ2luVG9wLFxuICAgICAgICAgIGRpc2FibGVkOiBjbGFzc2VzLmRpc2FibGVkLFxuICAgICAgICAgIHVuZGVybGluZTogdW5kZXJsaW5lQ2xhc3Nlc1xuICAgICAgICB9fVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICAgIHtlcnJvciA/IChcbiAgICAgICAgPENsZWFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mZWVkYmFjayArIFwiIFwiICsgY2xhc3Nlcy5sYWJlbFJvb3RFcnJvcn0gLz5cbiAgICAgICkgOiBzdWNjZXNzID8gKFxuICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPXtjbGFzc2VzLmZlZWRiYWNrICsgXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdFN1Y2Nlc3N9IC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L0Zvcm1Db250cm9sPlxuICApO1xufVxuXG5DdXN0b21JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbGFiZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VjY2VzczogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoY3VzdG9tSW5wdXRTdHlsZSkoQ3VzdG9tSW5wdXQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8vIG1hdGVyaWFsLXVpIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcbmltcG9ydCBUYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vQ2FyZC9DYXJkLmpzeFwiO1xuaW1wb3J0IENhcmRCb2R5IGZyb20gXCIuLi9DYXJkL0NhcmRCb2R5LmpzeFwiO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcIi4uL0NhcmQvQ2FyZEhlYWRlci5qc3hcIjtcblxuaW1wb3J0IGN1c3RvbVRhYnNTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jdXN0b21UYWJzU3R5bGUuanN4XCI7XG5cbmNsYXNzIEN1c3RvbVRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogMFxuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzZXMsXG4gICAgICBoZWFkZXJDb2xvcixcbiAgICAgIHBsYWluVGFicyxcbiAgICAgIHRhYnMsXG4gICAgICB0aXRsZSxcbiAgICAgIHJ0bEFjdGl2ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGNsYXNzTmFtZXMoe1xuICAgICAgW2NsYXNzZXMuY2FyZFRpdGxlXTogdHJ1ZSxcbiAgICAgIFtjbGFzc2VzLmNhcmRUaXRsZVJUTF06IHJ0bEFjdGl2ZVxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZCBwbGFpbj17cGxhaW5UYWJzfSBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgIDxDYXJkSGVhZGVyIGNvbG9yPXtoZWFkZXJDb2xvcn0gcGxhaW49e3BsYWluVGFic30+XG4gICAgICAgICAge3RpdGxlICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZFRpdGxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnRhYnNSb290LFxuICAgICAgICAgICAgICBpbmRpY2F0b3I6IGNsYXNzZXMuZGlzcGxheU5vbmUsXG4gICAgICAgICAgICAgIHNjcm9sbEJ1dHRvbnM6IGNsYXNzZXMuZGlzcGxheU5vbmVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICBzY3JvbGxCdXR0b25zPVwiYXV0b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RhYnMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGljb24gPSB7fTtcbiAgICAgICAgICAgICAgaWYgKHByb3AudGFiSWNvbikge1xuICAgICAgICAgICAgICAgIGljb24gPSB7XG4gICAgICAgICAgICAgICAgICBpY29uOiA8cHJvcC50YWJJY29uIC8+XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy50YWJSb290QnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbENvbnRhaW5lcjogY2xhc3Nlcy50YWJMYWJlbENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGNsYXNzZXMudGFiTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBjbGFzc2VzLnRhYlNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiBjbGFzc2VzLnRhYldyYXBwZXJcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9wLnRhYk5hbWV9XG4gICAgICAgICAgICAgICAgICB7Li4uaWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICB7dGFicy5tYXAoKHByb3AsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2tleX0+e3Byb3AudGFiQ29udGVudH08L2Rpdj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDwvQ2FyZD5cbiAgICApO1xuICB9XG59XG5cbkN1c3RvbVRhYnMucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGhlYWRlckNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwid2FybmluZ1wiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJwcmltYXJ5XCJcbiAgXSksXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWJzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdGFiTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdGFiSWNvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICB0YWJDb250ZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG4gICAgfSlcbiAgKSxcbiAgcnRsQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGxhaW5UYWJzOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhjdXN0b21UYWJzU3R5bGUpKEN1c3RvbVRhYnMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIlxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IGRpYWxvZ1N0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2RpYWxvZ1N0eWxlLmpzeFwiO1xuXG5jbGFzcyBEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgbGV0IHtjaGlsZHJlbixtdWlDbGFzc2VzLG9wZW4sLi4ucmVzdH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgICAgPERpYWxvZyB7Li4ucmVzdH0gb3Blbj17b3Blbn0gY2xhc3Nlcz17bXVpQ2xhc3Nlc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRGlhbG9nPlxuICAgICkgIFxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhkaWFsb2dTdHlsZSkoRGlhbG9nQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIlxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiXG5pbXBvcnQgRGlhbG9nQWN0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBkaWFsb2dBY3Rpb25TdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9kaWFsb2dBY3Rpb25TdHlsZS5qc3hcIjtcblxuXG5jbGFzcyBEaWFsb2dBY3Rpb25Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgbGV0IHtjaGlsZHJlbiwuLi5yZXN0fSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4oXG4gICAgICA8RGlhbG9nQWN0aW9uIHsuLi5yZXN0fSA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRGlhbG9nQWN0aW9uPlxuICAgICkgIFxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhkaWFsb2dBY3Rpb25TdHlsZSkoRGlhbG9nQWN0aW9uQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIlxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBkaWFsb2dDb250ZW50U3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZGlhbG9nQ29udGVudFN0eWxlLmpzeFwiO1xuXG5cbmNsYXNzIERpYWxvZ0NvbnRlbnRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgbGV0IHtjaGlsZHJlbiwuLi5yZXN0fSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4oXG4gICAgICA8RGlhbG9nQ29udGVudCB7Li4ucmVzdH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICApICBcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nQ29udGVudFN0eWxlKShEaWFsb2dDb250ZW50Q29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIlxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBkaWFsb2dUaXRsZVN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2RpYWxvZ1RpdGxlU3R5bGUuanN4XCI7XG5cblxuY2xhc3MgRGlhbG9nVGl0bGVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgbGV0IHtjaGlsZHJlbiwuLi5yZXN0fSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4oXG4gICAgICA8RGlhbG9nVGl0bGUgey4uLnJlc3R9ID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9EaWFsb2dUaXRsZT5cbiAgICApICBcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nVGl0bGVTdHlsZSkoRGlhbG9nVGl0bGVDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgZm9vdGVyU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZm9vdGVyU3R5bGUuanN4XCI7XG5cbmZ1bmN0aW9uIEZvb3Rlcih7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+XG4gICAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmVCbG9ja30+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3VuanAxMjNcIiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvY2t9PlxuICAgICAgICAgICAgICAgIGdpdGh1YlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmVCbG9ja30+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jbmJsb2dzLmNvbS9zanB0ZWNoL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9ja30+XG4gICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodH0+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAmY29weTsgezE5MDAgKyBuZXcgRGF0ZSgpLmdldFllYXIoKX17XCIgXCJ9XG4gICAgICAgICAgIOiusOW9leS9oOeahOW/q+S5kFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhmb290ZXJTdHlsZSkoRm9vdGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGdyaWQ6IHtcbiAgICBtYXJnaW46IFwiMCAtMTVweCAhaW1wb3J0YW50XCIsXG4gICAgd2lkdGg6IFwidW5zZXRcIlxuICB9LFxuICBhZGRCdXR0b246e1xuICAgIHdpZHRoOlwiMTcwcHhcIlxuICB9XG59O1xuXG5mdW5jdGlvbiBHcmlkQ29udGFpbmVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2hpbGRyZW4sIGFkZEJ1dHRvbiwuLi5yZXN0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgey4uLnJlc3R9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5ncmlkfSAke2FkZEJ1dHRvbj9jbGFzc2VzLmFkZEJ1dHRvbjonJ31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGUpKEdyaWRDb250YWluZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgZ3JpZDoge1xuICAgIHBhZGRpbmc6IFwiMCAxNXB4ICFpbXBvcnRhbnRcIlxuICB9XG59O1xuXG5mdW5jdGlvbiBHcmlkSXRlbSh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgaXRlbSB7Li4ucmVzdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZSkoR3JpZEl0ZW0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEhlYWRlckxpbmtzQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb250YWluZXJzL2hlYWRlci9oZWFkZXJMaW5rc0NvbnRhaW5lclwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9DdXN0b21CdXR0b25zL0J1dHRvbi5qc3hcIjtcblxuaW1wb3J0IGhlYWRlclN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2hlYWRlclN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBIZWFkZXIoeyAuLi5wcm9wcyB9KSB7XG4gIGZ1bmN0aW9uIG1ha2VCcmFuZCgpIHtcbiAgICB2YXIgbmFtZTtcbiAgICBwcm9wcy5yb3V0ZXMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgIGlmIChwcm9wLnBhdGggPT09IHByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBwcm9wLm5hdmJhck5hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBjb25zdCB7IGNsYXNzZXMsIGNvbG9yIH0gPSBwcm9wcztcbiAgY29uc3QgYXBwQmFyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtcIiBcIiArIGNsYXNzZXNbY29sb3JdXTogY29sb3JcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyICsgYXBwQmFyQ2xhc3Nlc30+XG4gICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleH0+XG4gICAgICAgICAgey8qIEhlcmUgd2UgY3JlYXRlIG5hdmJhciBicmFuZCwgYmFzZWQgb24gcm91dGUgbmFtZSAqL31cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwidHJhbnNwYXJlbnRcIiBocmVmPVwiI1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICB7bWFrZUJyYW5kKCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SGlkZGVuIHNtRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgIDxIZWFkZXJMaW5rc0NvbnRhaW5lciAvPlxuICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L0hpZGRlbj5cbiAgICAgIDwvVG9vbGJhcj5cbiAgICA8L0FwcEJhcj5cbiAgKTtcbn1cblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiwgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIl0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGhlYWRlclN0eWxlKShIZWFkZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiO1xuaW1wb3J0IEdyb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIjtcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xuaW1wb3J0IFBvcHBlcnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgUGVyc29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmRcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gXCIuLi9DdXN0b21JbnB1dC9DdXN0b21JbnB1dC5qc3hcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzeFwiO1xuXG5pbXBvcnQgVXNlckNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9Vc2VyL3VzZXJDb250YWluZXJcIlxuXG5pbXBvcnQgaGVhZGVyTGlua3NTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9oZWFkZXJMaW5rc1N0eWxlLmpzeFwiO1xuXG5jbGFzcyBIZWFkZXJMaW5rcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW5NZXNzYWdlOiBmYWxzZSxcbiAgICBvcGVuUGVyc29uOiBmYWxzZSxcbiAgICBvcGVuVXNlckluZm86ZmFsc2VcbiAgfTtcbiAgaGFuZGxlTWVzc2FnZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IG9wZW5NZXNzYWdlOiAhc3RhdGUub3Blbk1lc3NhZ2UgfSkpO1xuICB9O1xuICBoYW5kbGVQZXJzb25Ub2dnbGUgPSAoKSA9PiB7XG4gICAgaWYoIXdpbmRvdy5fX1VTRVJfSU5GT19fIHx8ICF3aW5kb3cuX19VU0VSX0lORk9fXy5faWQpe1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgb3BlblVzZXJJbmZvOiAhc3RhdGUub3BlblVzZXJJbmZvIH0pKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoeyBvcGVuUGVyc29uOiAhc3RhdGUub3BlblBlcnNvbiAsb3BlblVzZXJJbmZvOmZhbHNlfSkpO1xuICB9O1xuICBoYW5kbGVQZXJzb25DbG9zZSA9IGV2ZW50ID0+IHtcbiAgICBpZiAoIXRoaXMucGVyc29uRWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5QZXJzb246IGZhbHNlfSk7XG4gICAgfVxuICB9O1xuICBoYW5kbGVNZXNzYWdlQ2xvc2UgPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLm1lc3NhZ2VFbC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1lc3NhZ2U6IGZhbHNlfSk7XG4gICAgfVxuICB9XG4gIG9uTG9nb3V0KCl7XG4gICAgdGhpcy5wcm9wcy5mZXRjaExvZ291dFVzZXIoKVxuICB9XG4gIG9uTW9kaWZ5VXNlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgb3BlblVzZXJJbmZvOiAhc3RhdGUub3BlblVzZXJJbmZvIH0pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3Blbk1lc3NhZ2UgLG9wZW5QZXJzb24sb3BlblVzZXJJbmZvfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaFdyYXBwZXJ9PlxuICAgICAgICAgIDxDdXN0b21JbnB1dFxuICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMubWFyZ2luICsgXCIgXCIgKyBjbGFzc2VzLnNlYXJjaFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWFyY2hcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIndoaXRlXCIgYXJpYS1sYWJlbD1cImVkaXRcIiBqdXN0SWNvbiByb3VuZD5cbiAgICAgICAgICAgIDxTZWFyY2ggLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb2xvcj17d2luZG93LmlubmVyV2lkdGggPiA5NTkgPyBcInRyYW5zcGFyZW50XCIgOiBcIndoaXRlXCJ9XG4gICAgICAgICAganVzdEljb249e3dpbmRvdy5pbm5lcldpZHRoID4gOTU5fVxuICAgICAgICAgIHNpbXBsZT17ISh3aW5kb3cuaW5uZXJXaWR0aCA+IDk1OSl9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkRhc2hib2FyZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkxpbmt9XG4gICAgICAgID5cbiAgICAgICAgICA8RGFzaGJvYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cbiAgICAgICAgICA8SGlkZGVuIG1kVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVGV4dH0+5Li76aG1PC9wPlxuICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFuYWdlcn0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnV0dG9uUmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlRWwgPSBub2RlO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNvbG9yPXt3aW5kb3cuaW5uZXJXaWR0aCA+IDk1OSA/IFwidHJhbnNwYXJlbnRcIiA6IFwid2hpdGVcIn1cbiAgICAgICAgICAgIGp1c3RJY29uPXt3aW5kb3cuaW5uZXJXaWR0aCA+IDk1OX1cbiAgICAgICAgICAgIHNpbXBsZT17ISh3aW5kb3cuaW5uZXJXaWR0aCA+IDk1OSl9XG4gICAgICAgICAgICBhcmlhLW93bnM9e29wZW5NZXNzYWdlID8gXCJtZW51LWxpc3QtZ3Jvdy1tZXNzYWdlXCIgOiBudWxsfVxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZXNzYWdlVG9nZ2xlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkxpbmt9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnMgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbnN9PjU8L3NwYW4+XG4gICAgICAgICAgICA8SGlkZGVuIG1kVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICAgICAgPHAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUZXh0fT5cbiAgICAgICAgICAgICAgICDmtojmga9cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFBvcHBlcnNcbiAgICAgICAgICAgIG9wZW49e29wZW5NZXNzYWdlfVxuICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMubWVzc2FnZUVsfVxuICAgICAgICAgICAgdHJhbnNpdGlvblxuICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcyh7IFtjbGFzc2VzLnBvcHBlckNsb3NlXTogIW9wZW5NZXNzYWdlIH0pICtcbiAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICBjbGFzc2VzLnBvb3Blck5hdlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxHcm93XG4gICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cbiAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93LW1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PT0gXCJib3R0b21cIiA/IFwiY2VudGVyIHRvcFwiIDogXCJjZW50ZXIgYm90dG9tXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXt0aGlzLmhhbmRsZU1lc3NhZ2VDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdCByb2xlPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZXNzYWdlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1pa2UgSm9obiByZXNwb25kZWQgdG8geW91ciBlbWFpbFxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lc3NhZ2VDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgNSBuZXcgdGFza3NcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZXNzYWdlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSdyZSBub3cgZnJpZW5kIHdpdGggQW5kcmV3XG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVzc2FnZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbm90aGVyIE5vdGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lc3NhZ2VDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQW5vdGhlciBPbmVcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L0dyb3c+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUG9wcGVycz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1hbmFnZXJ9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYnV0dG9uUmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMucGVyc29uRWwgPSBub2RlO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY29sb3I9e3dpbmRvdy5pbm5lcldpZHRoID4gOTU5ID8gXCJ0cmFuc3BhcmVudFwiIDogXCJ3aGl0ZVwifVxuICAgICAgICAgIGp1c3RJY29uPXt3aW5kb3cuaW5uZXJXaWR0aCA+IDk1OX1cbiAgICAgICAgICBzaW1wbGU9eyEod2luZG93LmlubmVyV2lkdGggPiA5NTkpfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJQZXJzb25cIlxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICBhcmlhLW93bnM9e29wZW5QZXJzb24gPyBcIm1lbnUtbGlzdC1ncm93LXBlcnNvblwiIDogbnVsbH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVBlcnNvblRvZ2dsZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uTGlua31cbiAgICAgICAgPlxuICAgICAgICAgIDxQZXJzb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfSAvPlxuICAgICAgICAgIDxIaWRkZW4gbWRVcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUZXh0fT7nlKjmiLfkv6Hmga88L3A+XG4gICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8UG9wcGVyc1xuICAgICAgICAgICAgb3Blbj17b3BlblBlcnNvbn1cbiAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLnBlcnNvbkVsfVxuICAgICAgICAgICAgdHJhbnNpdGlvblxuICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcyh7IFtjbGFzc2VzLnBvcHBlckNsb3NlXTogIW9wZW5QZXJzb24gfSkgK1xuICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgIGNsYXNzZXMucG9vcGVyTmF2XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcbiAgICAgICAgICAgICAgPEdyb3dcbiAgICAgICAgICAgICAgICB7Li4uVHJhbnNpdGlvblByb3BzfVxuICAgICAgICAgICAgICAgIGlkPVwibWVudS1saXN0LWdyb3ctcGVyc29uXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09IFwiYm90dG9tXCIgPyBcImNlbnRlciB0b3BcIiA6IFwiY2VudGVyIGJvdHRvbVwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17dGhpcy5oYW5kbGVQZXJzb25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdCByb2xlPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KT0+e3RoaXMub25Nb2RpZnlVc2VyKCk7dGhpcy5oYW5kbGVQZXJzb25DbG9zZShldmVudCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICDkv67mlLnnlKjmiLfkv6Hmga9cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KT0+e3RoaXMub25Mb2dvdXQoKTt0aGlzLmhhbmRsZVBlcnNvbkNsb3NlKGV2ZW50KX19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIOmAgOWHuueZu+W9lVxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvR3Jvdz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Qb3BwZXJzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxVc2VyQ29udGFpbmVyIG9wZW49e29wZW5Vc2VySW5mb30gb25DYW5jZWw9e3RoaXMuaGFuZGxlUGVyc29uVG9nZ2xlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoaGVhZGVyTGlua3NTdHlsZSkoSGVhZGVyTGlua3MpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5cbmNvbnN0IHN3aXRjaFN0eWxlID0ge1xuICBjb2xvclByaW1hcnk6e1xuICAgICcmJGNoZWNrZWQnOntcbiAgICAgIGNvbG9yOicjMjE5NmYzJ1xuICAgIH1cbiAgfSxcbiAgY2hlY2tlZDp7XG4gICAgY29sb3I6JyMyMTk2ZjMnXG4gIH1cbn1cblxuY2xhc3MgU3dpdGNoTGFiZWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIFxuIFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cCByb3cgPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zd2l0Y2hMYWJlbHMubWFwKChzd2l0Y2hsYWJlbCxpbmRleCk9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzd2l0Y2hsYWJlbC5jaGVja2VkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+e3RoaXMucHJvcHMub25DaGFuZ2UoaW5kZXgsZXZlbnQpfX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17c3dpdGNobGFiZWwudmFsdWV9XG4gICAgICAgICAgICAgICAgY29sb3I9e3N3aXRjaGxhYmVsLmNvbG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3RoaXMucHJvcHMuY2xhc3Nlc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsPXtzd2l0Y2hsYWJlbC5sYWJlbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzd2l0Y2hTdHlsZSkoU3dpdGNoTGFiZWxzKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xuaW1wb3J0IEhpZGRlbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcbmltcG9ydCBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXJMaW5rc0NvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9oZWFkZXIvaGVhZGVyTGlua3NDb250YWluZXJcIjtcblxuaW1wb3J0IHNpZGViYXJTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9zaWRlYmFyU3R5bGUuanN4XCI7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIHZlcmlmaWVzIGlmIHJvdXRlTmFtZSBpcyB0aGUgb25lIGFjdGl2ZSAoaW4gYnJvd3NlciBpbnB1dClcbiAgZnVuY3Rpb24gYWN0aXZlUm91dGUocm91dGVOYW1lKSB7XG4gICAgcmV0dXJuIHByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2Yocm91dGVOYW1lKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIGNvbnN0IHsgY2xhc3NlcywgY29sb3IsIGxvZ28sIGltYWdlLCBsb2dvVGV4dCwgcm91dGVzIH0gPSBwcm9wcztcbiAgdmFyIGxpbmtzID0gKFxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtyb3V0ZXMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKCFwcm9wIHx8IHByb3AucmVkaXJlY3QpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgYWN0aXZlUHJvID0gXCIgXCI7XG4gICAgICAgIHZhciBsaXN0SXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICBbXCIgXCIgKyBjbGFzc2VzW2NvbG9yXV06IGFjdGl2ZVJvdXRlKHByb3AucGF0aClcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHdoaXRlRm9udENsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICBbXCIgXCIgKyBjbGFzc2VzLndoaXRlRm9udF06IGFjdGl2ZVJvdXRlKHByb3AucGF0aClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIHRvPXtwcm9wLnBhdGh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVBybyArIGNsYXNzZXMuaXRlbX1cbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtTGluayArIGxpc3RJdGVtQ2xhc3Nlc30+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1JY29uICsgd2hpdGVGb250Q2xhc3Nlc30+XG4gICAgICAgICAgICAgICAge3R5cGVvZiBwcm9wLmljb24gPT09IFwic3RyaW5nXCIgPyAoXG4gICAgICAgICAgICAgICAgICA8SWNvbj57cHJvcC5pY29ufTwvSWNvbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHByb3AuaWNvbiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cHJvcC5zaWRlYmFyTmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHQgKyB3aGl0ZUZvbnRDbGFzc2VzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVUeXBvZ3JhcGh5PXt0cnVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0xpc3Q+XG4gICk7XG4gIHZhciBicmFuZCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3VuanAxMjNcIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0xpbmt9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvSW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtsb2dvVGV4dH1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XG4gICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcbiAgICAgICAgICBhbmNob3I9XCJyaWdodFwiXG4gICAgICAgICAgb3Blbj17cHJvcHMub3Blbn1cbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlclxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbG9zZT17cHJvcHMuaGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgIE1vZGFsUHJvcHM9e3tcbiAgICAgICAgICAgIGtlZXBNb3VudGVkOiB0cnVlIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2JyYW5kfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGViYXJXcmFwcGVyfT5cbiAgICAgICAgICAgIDxIZWFkZXJMaW5rc0NvbnRhaW5lciAvPlxuICAgICAgICAgICAge2xpbmtzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpbWFnZSAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGltYWdlICsgXCIpXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9IaWRkZW4+XG4gICAgICA8SGlkZGVuIHNtRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgYW5jaG9yPVwibGVmdFwiXG4gICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXG4gICAgICAgICAgb3BlblxuICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHticmFuZH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyV3JhcHBlcn0+e2xpbmtzfTwvZGl2PlxuICAgICAgICAgIHtpbWFnZSAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGltYWdlICsgXCIpXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9IaWRkZW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaWRlYmFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHNpZGViYXJTdHlsZSkoU2lkZWJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgU25hY2sgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgQ2xvc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgc25hY2tiYXJDb250ZW50U3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvc25hY2tiYXJDb250ZW50U3R5bGUuanN4XCI7XG5cbmZ1bmN0aW9uIFNuYWNrYmFyKHsgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7IGNsYXNzZXMsIG1lc3NhZ2UsIGNvbG9yLCBjbG9zZSwgaWNvbiwgcGxhY2UsIG9wZW4gLGF1dG9IaWRlRHVyYXRpb24sb25DbG9zZX0gPSBwcm9wcztcbiAgdmFyIGFjdGlvbiA9IFtdO1xuICBjb25zdCBtZXNzYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmljb25NZXNzYWdlXTogaWNvbiAhPT0gdW5kZWZpbmVkXG4gIH0pO1xuICBpZiAoY2xvc2UgIT09IHVuZGVmaW5lZCkge1xuICAgIGFjdGlvbiA9IFtcbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxuICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmNsb3NlTm90aWZpY2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIDxDbG9zZSBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2V9IC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgXTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxTbmFja1xuICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgIHZlcnRpY2FsOiBwbGFjZS5pbmRleE9mKFwidFwiKSA9PT0gLTEgPyBcImJvdHRvbVwiIDogXCJ0b3BcIixcbiAgICAgICAgaG9yaXpvbnRhbDpcbiAgICAgICAgICBwbGFjZS5pbmRleE9mKFwibFwiKSAhPT0gLTFcbiAgICAgICAgICAgID8gXCJsZWZ0XCJcbiAgICAgICAgICAgIDogcGxhY2UuaW5kZXhPZihcImNcIikgIT09IC0xID8gXCJjZW50ZXJcIiA6IFwicmlnaHRcIlxuICAgICAgfX1cbiAgICAgIG9wZW49e29wZW59XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgYXV0b0hpZGVEdXJhdGlvbj17YXV0b0hpZGVEdXJhdGlvbn1cbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbj17MTAwMH1cbiAgICAgIHJlc3VtZUhpZGVEdXJhdGlvbj17bnVsbH1cbiAgICAgIG1lc3NhZ2U9e1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtpY29uICE9PSB1bmRlZmluZWQgPyA8cHJvcHMuaWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz4gOiBudWxsfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bWVzc2FnZUNsYXNzZXN9PnttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgIENvbnRlbnRQcm9wcz17e1xuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290ICsgXCIgXCIgKyBjbGFzc2VzW2NvbG9yXSxcbiAgICAgICAgICBtZXNzYWdlOiBjbGFzc2VzLm1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAvPlxuICApO1xufVxuXG5TbmFja2Jhci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIiwgXCJwcmltYXJ5XCJdKSxcbiAgY2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICBpY29uOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGxhY2U6IFByb3BUeXBlcy5vbmVPZihbXCJ0bFwiLCBcInRyXCIsIFwidGNcIiwgXCJiclwiLCBcImJsXCIsIFwiYmNcIl0pLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzbmFja2JhckNvbnRlbnRTdHlsZSkoU25hY2tiYXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCB0eXBvZ3JhcGh5U3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvdHlwb2dyYXBoeVN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBEYW5nZXIoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2hpbGRyZW4gfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlZmF1bHRGb250U3R5bGUgKyBcIiBcIiArIGNsYXNzZXMuZGFuZ2VyVGV4dH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkRhbmdlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyh0eXBvZ3JhcGh5U3R5bGUpKERhbmdlcik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFZhbHVlIHtcbiAgICBjb25zdHJ1Y3RvcihsYWJlbFRleHQscGxhY2Vob2xkZXIsdmFsdWUsb25DaGFuZ2UsdHlwZT0ndGV4dCcpe1xuICAgICAgdGhpcy5sYWJlbFRleHQgPSBsYWJlbFRleHRcbiAgICAgIHRoaXMuaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6cGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQ2hhbmdlOm9uQ2hhbmdlLFxuICAgICAgICB2YWx1ZTp2YWx1ZSxcbiAgICAgIH1cbiAgICAgIGlmKHR5cGUgPT0gJ2ZpbGUnKXtcbiAgICAgICAgdGhpcy5pbnB1dFByb3BzID0ge1xuICAgICAgICAuLi50aGlzLmlucHV0UHJvcHMsXG4gICAgICAgIHR5cGU6J2ZpbGUnLFxuICAgICAgICBmaWxlOicnLFxuICAgICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICBhY2NlcHQ6J2ltYWdlLyonLFxuICAgICAgICAgIHN0eWxlOntcbiAgICAgICAgICAgIFwidGV4dEluZGVudFwiOlwiLTIwMHB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICB9XG4gICAgICB0aGlzLmVycm9yID0gZmFsc2VcbiAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlXG4gICAgfVxuICB9IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSlNFbmNyeXB0IH0gZnJvbSBcImpzZW5jcnlwdFwiXG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmVcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG4vLyBpbXBvcnQgQ2xvdWQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG91ZFwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dUaXRsZUNvbXBvbmVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dBY3Rpb25cIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXRcIjtcblxuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL3ZhbGlkYXRlXCJcblxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gICAgcGFwZXI6e1xuICAgICAgd2lkdGg6XCI1MDBweFwiXG4gICAgfVxufVxuY2xhc3MgSW5wdXRWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsVGV4dCxwbGFjZWhvbGRlcixvbkNoYW5nZSx0eXBlPSd0ZXh0Jyl7XG4gICAgdGhpcy5sYWJlbFRleHQgPSBsYWJlbFRleHRcbiAgICB0aGlzLmlucHV0UHJvcHMgPSB7XG4gICAgICBwbGFjZWhvbGRlcjpwbGFjZWhvbGRlcixcbiAgICAgIG9uQ2hhbmdlOm9uQ2hhbmdlLFxuICAgICAgdmFsdWU6JycsXG4gICAgfVxuICAgIGlmKHR5cGUgPT0gJ2ZpbGUnKXtcbiAgICAgIHRoaXMuaW5wdXRQcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuaW5wdXRQcm9wcyxcbiAgICAgIHR5cGU6J2ZpbGUnLFxuICAgICAgZmlsZTonJyxcbiAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICBhY2NlcHQ6J2ltYWdlLyonLFxuICAgICAgICBzdHlsZTp7XG4gICAgICAgICAgXCJ0ZXh0SW5kZW50XCI6XCItMjAwcHhcIlxuICAgICAgICB9XG4gICAgICB9fVxuICAgIH1cbiAgICB0aGlzLmVycm9yID0gZmFsc2VcbiAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZVxuICB9XG59XG5jbGFzcyBVc2VySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uTmFtZUNoYW5nZSA9IHRoaXMub25OYW1lQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uTmlja25hbWVDaGFuZ2UgPSB0aGlzLm9uTmlja25hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25Db250YWN0Q2hhbmdlID0gdGhpcy5vbkNvbnRhY3RDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25BdmF0b3JDaGFuZ2UgPSB0aGlzLm9uQXZhdG9yQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UgPSB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0RmllbGRWYWx1ZSA9IHRoaXMuc2V0RmllbGRWYWx1ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkl0ZW1Db25maXJtID0gdGhpcy5vbkl0ZW1Db25maXJtLmJpbmQodGhpcylcbiAgICB0aGlzLm9uSXRlbUNhbmNlbCA9IHRoaXMub25JdGVtQ2FuY2VsLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6bmV3IElucHV0VmFsdWUoJ+Wnk+WQjScsJ+ivt+Whq+WGmeecn+WunuWnk+WQjScsdGhpcy5vbk5hbWVDaGFuZ2UpLFxuICAgICAgICBuaWNrbmFtZTpuZXcgSW5wdXRWYWx1ZSgn5pi156ewJywn5pi156ewJyx0aGlzLm9uTmlja25hbWVDaGFuZ2UpLFxuICAgICAgICBhdmF0b3I6bmV3IElucHV0VmFsdWUoJ+WktOWDjycsJ+WktOWDjycsdGhpcy5vbkF2YXRvckNoYW5nZSwnZmlsZScpLFxuICAgICAgICBjb250YWN0Om5ldyBJbnB1dFZhbHVlKCfogZTns7vmlrnlvI8nLCfor7fovpPlhaXmnInmlYjmiYvmnLrmiJbpgq7nrrEnLHRoaXMub25Db250YWN0Q2hhbmdlKSxcbiAgICAgICAgcGFzc3dvcmQ6bmV3IElucHV0VmFsdWUoJ+WvhueggScsJzbkvY3ku6XkuIrvvIzlrZfmr40r5pWw5a2XK+eJueauiuWtl+espuWmgnN1bkAxMjMnLHRoaXMub25QYXNzd29yZENoYW5nZSlcbiAgICB9XG4gIH1cbiAgb25OYW1lQ2hhbmdlKGV2KSB7XG4gICAgIGNvbnN0IHZhbHVlID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgIGNvbnN0IHN1Y2Nlc3MgPSAvXltcXHU0RTAwLVxcdTlGQTVdKyQvLnRlc3QodmFsdWUpIHx8IC9eW2EtekEtWl0rJC8udGVzdCh2YWx1ZSlcbiAgICAgY29uc3QgbmFtZSA9IHtcbiAgICAgICAgIC4uLnRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLm5hbWUuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjohc3VjY2VzcyxcbiAgICAgICAgc3VjY2Vzc1xuICAgICB9XG4gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgIG5hbWVcbiAgICAgfSlcbiAgfVxuICBvbk5pY2tuYW1lQ2hhbmdlKGV2KSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9ICEhZXYudGFyZ2V0LnZhbHVlXG4gICAgY29uc3Qgbmlja25hbWUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUubmlja25hbWUsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLm5pY2tuYW1lLmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmlja25hbWVcbiAgICB9KVxuIH1cbiBvbkNvbnRhY3RDaGFuZ2UoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSB2YWxpZGF0ZS5pc0VtYWlsKHZhbHVlKSB8fCB2YWxpZGF0ZS5pc1Bob25lKHZhbHVlKVxuXG4gICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0LFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGFjdFxuICAgIH0pXG4gIH1cbiAgb25BdmF0b3JDaGFuZ2UoZXYpe1xuICAgIGNvbnN0IGZpbGUgPSBldi50YXJnZXQuZmlsZXNbMF0sc3VjY2VzcyA9ICEhZmlsZVxuICAgIGNvbnN0IGF2YXRvciA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5hdmF0b3IsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmF2YXRvci5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICBmaWxlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXZhdG9yXG4gICAgfSlcbiAgfVxuICBvblBhc3N3b3JkQ2hhbmdlKGV2KXtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSB2YWxpZGF0ZS5pc1Bhc3N3b3JkKHZhbHVlKVxuXG4gICAgY29uc3QgcGFzc3dvcmQgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFzc3dvcmRcbiAgICB9KVxuICB9XG4gIG9uSXRlbUNvbmZpcm0oKXtcblxuICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxlbmNyeXB0ID0gbmV3IEpTRW5jcnlwdCgpO1xuICAgICBlbmNyeXB0LnNldFB1YmxpY0tleSh3aW5kb3cuX19QVUJMSUNfS0VZX18pO1xuICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgbmFtZTp0aGlzLnN0YXRlLm5hbWUuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgIG5pY2tuYW1lOnRoaXMuc3RhdGUubmlja25hbWUuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgIGNvbnRhY3Q6dGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMudmFsdWUsXG4gICAgICBhdmF0b3I6dGhpcy5zdGF0ZS5hdmF0b3IuaW5wdXRQcm9wcy5maWxlLFxuICAgICAgcGFzc3dvcmQ6ZW5jcnlwdC5lbmNyeXB0KHRoaXMuc3RhdGUucGFzc3dvcmQuaW5wdXRQcm9wcy52YWx1ZSksXG4gICAgfTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHBhcmFtcykubWFwKGl0ZW09PntcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChpdGVtWzBdLGl0ZW1bMV0pXG4gICAgICBmb3JtRGF0YS5hcHBlbmQuYXBwbHkoZm9ybURhdGEsaXRlbSlcbiAgICB9KVxuICAgIGNvbnN0IHNldEZpZWxkRXJyb3IgPSAoZmllbGQpPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2ZpZWxkXTp7XG4gICAgICAgICAgIC4uLnRoaXMuc3RhdGVbZmllbGRdLFxuICAgICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICAgICBzdWNjZXNzOmZhbHNlXG4gICAgICAgICB9XG4gICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5mZXRjaFJlZ2lzdGVyVXNlcihmb3JtRGF0YSwodHlwZSk9PntcbiAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICBjYXNlICdOSUNLTkFNRV9FWElTVCc6XG4gICAgICAgICBzZXRGaWVsZEVycm9yKCduaWNrbmFtZScpXG4gICAgICAgICBicmVha1xuICAgICAgICAgY2FzZSAnRU1BSUxfRVhJU1QnOlxuICAgICAgICAgY2FzZSAnUEhPTkVfRVhJU1QnOlxuICAgICAgICAgY2FzZSAnQ09OVEFDVCc6XG4gICAgICAgICBzZXRGaWVsZEVycm9yKCdjb250YWN0JylcbiAgICAgICAgIGJyZWFrXG4gICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25JdGVtQ2FuY2VsKCl7XG4gICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpXG4gIH1cbiAgc2V0RmllbGRWYWx1ZShmaWVsZCx2YWx1ZSl7XG4gICAgaWYoIXRoaXMuc3RhdGVbZmllbGRdKSByZXR1cm5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtmaWVsZF06e1xuICAgICAgICAgLi4udGhpcy5zdGF0ZVtmaWVsZF0sXG4gICAgICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGVbZmllbGRdLmlucHV0UHJvcHMsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgfSxcbiAgICAgICAgIGVycm9yOmZhbHNlLFxuICAgICAgICAgc3VjY2VzczpmYWxzZVxuICAgICAgIH1cbiAgICAgfSlcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKXtcbiAgICBpZihwcm9wcy51c2VySW5mbyYmcHJvcHMudXNlckluZm8uX2lkKXtcbiAgICAgIGNvbnN0IHVzZXJJbmZvID0gcHJvcHMudXNlckluZm87XG4gICAgICBPYmplY3Qua2V5cyh1c2VySW5mbykubWFwKChrZXksaW5kZXgpPT57XG4gICAgICAgICBpZihrZXkhPSdhdmF0b3InKXtcbiAgICAgICAgICAgaWYoKGtleSA9PSAncGhvbmUnIHx8IGtleT09J2VtYWlsJykgJiYgdXNlckluZm9ba2V5XSl7XG4gICAgICAgICAgICAgIGtleSA9ICdjb250YWN0J1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHRoaXMuc2V0RmllbGRWYWx1ZShrZXksdXNlckluZm9ba2V5XSlcbiAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctbmFtZSd9XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLW5pY2tuYW1lJ30gXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUubmlja25hbWV9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctY29udGFjdCd9XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLmNvbnRhY3R9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctcGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5wYXNzd29yZH0vPlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsndXNlci1pdGVtLWRpYWxvZy1hdmF0b3InfSBcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXtcbiAgICAgICAgICAgICAgICAgIHtjbGFzc05hbWU6J2l0ZW0tZm9ybSd9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5hdmF0b3J9Lz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1Db25maXJtfSA+e3VzZXJJbmZvPyfnoa7lrponOifms6jlhownfTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1DYW5jZWx9ID7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ1N0eWxlKShVc2VySW5mbyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBKU0VuY3J5cHQgfSBmcm9tIFwianNlbmNyeXB0XCJcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZVxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbi8vIGltcG9ydCBDbG91ZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3VkXCI7XG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IERpYWxvZ0NvbXBvbmVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ1wiO1xuaW1wb3J0IERpYWxvZ1RpdGxlQ29tcG9uZW50IGZyb20gXCIuLi9EaWFsb2cvRGlhbG9nVGl0bGVcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCIuLi9EaWFsb2cvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0FjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ0FjdGlvblwiO1xuaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gXCIuLi9DdXN0b21JbnB1dC9DdXN0b21JbnB1dFwiO1xuXG5jb25zdCBkaWFsb2dTdHlsZSA9IHtcbiAgICBwYXBlcjp7XG4gICAgICB3aWR0aDpcIjUwMHB4XCJcbiAgICB9XG59XG5cbmNsYXNzIFVzZXJJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25Db250YWN0Q2hhbmdlID0gdGhpcy5vbkNvbnRhY3RDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYXNzd29yZENoYW5nZSA9IHRoaXMub25QYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLm9uSXRlbUNvbmZpcm0gPSB0aGlzLm9uSXRlbUNvbmZpcm0uYmluZCh0aGlzKVxuICAgIHRoaXMub25JdGVtQ2FuY2VsID0gdGhpcy5vbkl0ZW1DYW5jZWwuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgY29udGFjdDp7XG4gICAgICAgICAgICBsYWJlbFRleHQ6J+aJi+acuuOAgemCrueuseaIluaYteensCcsXG4gICAgICAgICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+35aGr5YaZ5pyJ5pWI55qE5omL5py644CB6YKu566x5oiW5pi156ewJyxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTp0aGlzLm9uQ29udGFjdENoYW5nZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTonJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjpmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOntcbiAgICAgICAgICAgIGxhYmVsVGV4dDon5a+G56CBJyxcbiAgICAgICAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7floavlhpnlr4bnoIEnLFxuICAgICAgICAgICAgICAgIHR5cGU6J3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTp0aGlzLm9uUGFzc3dvcmRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6JycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOmZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuICB9XG4gIG9uQ29udGFjdENoYW5nZShldikge1xuICAgICBjb25zdCBzdWNjZXNzID0gISFldi50YXJnZXQudmFsdWVcbiAgICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgICAgIC4uLnRoaXMuc3RhdGUuY29udGFjdCxcbiAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmNvbnRhY3QuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjohc3VjY2VzcyxcbiAgICAgICAgc3VjY2Vzc1xuICAgICB9XG4gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250YWN0XG4gICAgIH0pXG4gIH1cbiAgb25QYXNzd29yZENoYW5nZShldikge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAhIWV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHBhc3N3b3JkID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLmlucHV0UHJvcHMsXG4gICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgIH0sXG4gICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGFzc3dvcmRcbiAgICB9KVxuICB9XG5cbiAgb25JdGVtQ29uZmlybSgpe1xuICAgIGxldCBlbmNyeXB0ID0gbmV3IEpTRW5jcnlwdCgpO1xuICAgIGVuY3J5cHQuc2V0UHVibGljS2V5KHdpbmRvdy5fX1BVQkxJQ19LRVlfXyk7XG4gICAgbGV0IHBhc3N3b3JkID0gZW5jcnlwdC5lbmNyeXB0KCd3YW5neWFuNTIwQCcpO1xuXG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgY29udGFjdDp0aGlzLnN0YXRlLmNvbnRhY3QuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmRcbiAgICB9O1xuICAgIHRoaXMucHJvcHMuZmV0Y2hMb2dpblVzZXIocGFyYW1zKVxuICB9XG4gIG9uSXRlbUNhbmNlbCgpe1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsndXNlci1pdGVtLWRpYWxvZy1jb250YWN0J31cbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXtcbiAgICAgICAgICAgICAgICAgIHtjbGFzc05hbWU6J2l0ZW0tZm9ybSd9XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUuY29udGFjdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctcGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5wYXNzd29yZH0gICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uSXRlbUNvbmZpcm19ID7nmbvlvZU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGVtQ2FuY2VsfSA+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhkaWFsb2dTdHlsZSkoVXNlckluZm8pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSlNFbmNyeXB0IH0gZnJvbSBcImpzZW5jcnlwdFwiXG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmVcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG4vLyBpbXBvcnQgQ2xvdWQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG91ZFwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dUaXRsZUNvbXBvbmVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dBY3Rpb25cIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXRcIjtcblxuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL3ZhbGlkYXRlXCJcbmltcG9ydCBJbnB1dFZhbHVlIGZyb20gXCIuL3VzZXJcIlxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gICAgcGFwZXI6e1xuICAgICAgd2lkdGg6XCI1MDBweFwiXG4gICAgfVxufVxuXG5jbGFzcyBVc2VySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uTmFtZUNoYW5nZSA9IHRoaXMub25OYW1lQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uTmlja25hbWVDaGFuZ2UgPSB0aGlzLm9uTmlja25hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25Db250YWN0Q2hhbmdlID0gdGhpcy5vbkNvbnRhY3RDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25BdmF0b3JDaGFuZ2UgPSB0aGlzLm9uQXZhdG9yQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UgPSB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5vbkl0ZW1Db25maXJtID0gdGhpcy5vbkl0ZW1Db25maXJtLmJpbmQodGhpcylcbiAgICB0aGlzLm9uSXRlbUNhbmNlbCA9IHRoaXMub25JdGVtQ2FuY2VsLmJpbmQodGhpcylcbiAgICBjb25zdCB1c2VySW5mbyA9IHByb3BzLnVzZXJJbmZvO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6bmV3IElucHV0VmFsdWUoJ+Wnk+WQjScsJ+ivt+Whq+WGmeecn+WunuWnk+WQjScsdXNlckluZm8ubmFtZSx0aGlzLm9uTmFtZUNoYW5nZSksXG4gICAgICAgIG5pY2tuYW1lOm5ldyBJbnB1dFZhbHVlKCfmmLXnp7AnLCfmmLXnp7AnLHVzZXJJbmZvLm5pY2tuYW1lLHRoaXMub25OaWNrbmFtZUNoYW5nZSksXG4gICAgICAgIGF2YXRvcjpuZXcgSW5wdXRWYWx1ZSgn5aS05YOPJywn5aS05YOPJywnJyx0aGlzLm9uQXZhdG9yQ2hhbmdlLCdmaWxlJyksXG4gICAgICAgIGNvbnRhY3Q6bmV3IElucHV0VmFsdWUoJ+iBlOezu+aWueW8jycsJ+ivt+i+k+WFpeacieaViOaJi+acuuaIlumCrueusScsdXNlckluZm8uZW1haWx8fHVzZXJJbmZvLnBob25lLHRoaXMub25Db250YWN0Q2hhbmdlKSxcbiAgICAgICAgcGFzc3dvcmQ6bmV3IElucHV0VmFsdWUoJ+WvhueggScsJzbkvY3ku6XkuIrvvIzlrZfmr40r5pWw5a2XK+eJueauiuWtl+espuWmgnN1bkAxMjMnLCcnLHRoaXMub25QYXNzd29yZENoYW5nZSlcbiAgICB9XG4gIH1cbiAgb25OYW1lQ2hhbmdlKGV2KSB7XG4gICAgIGNvbnN0IHZhbHVlID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgIGNvbnN0IHN1Y2Nlc3MgPSAvXltcXHU0RTAwLVxcdTlGQTVdKyQvLnRlc3QodmFsdWUpIHx8IC9eW2EtekEtWl0rJC8udGVzdCh2YWx1ZSlcbiAgICAgY29uc3QgbmFtZSA9IHtcbiAgICAgICAgIC4uLnRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLm5hbWUuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjohc3VjY2VzcyxcbiAgICAgICAgc3VjY2Vzc1xuICAgICB9XG4gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgIG5hbWVcbiAgICAgfSlcbiAgfVxuICBvbk5pY2tuYW1lQ2hhbmdlKGV2KSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9ICEhZXYudGFyZ2V0LnZhbHVlXG4gICAgY29uc3Qgbmlja25hbWUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUubmlja25hbWUsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLm5pY2tuYW1lLmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmlja25hbWVcbiAgICB9KVxuIH1cbiBvbkNvbnRhY3RDaGFuZ2UoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSB2YWxpZGF0ZS5pc0VtYWlsKHZhbHVlKSB8fCB2YWxpZGF0ZS5pc1Bob25lKHZhbHVlKVxuXG4gICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0LFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGFjdFxuICAgIH0pXG4gIH1cbiAgb25BdmF0b3JDaGFuZ2UoZXYpe1xuICAgIGNvbnN0IGZpbGUgPSBldi50YXJnZXQuZmlsZXNbMF0sc3VjY2VzcyA9ICEhZmlsZVxuICAgIGNvbnN0IGF2YXRvciA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5hdmF0b3IsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmF2YXRvci5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICBmaWxlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXZhdG9yXG4gICAgfSlcbiAgfVxuICBvblBhc3N3b3JkQ2hhbmdlKGV2KXtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSB2YWxpZGF0ZS5pc1Bhc3N3b3JkKHZhbHVlKVxuXG4gICAgY29uc3QgcGFzc3dvcmQgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLmlucHV0UHJvcHMsXG4gICAgICAgICAgdmFsdWU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFzc3dvcmRcbiAgICB9KVxuICB9XG4gIG9uSXRlbUNvbmZpcm0oKXtcblxuICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxlbmNyeXB0ID0gbmV3IEpTRW5jcnlwdCgpO1xuICAgICBlbmNyeXB0LnNldFB1YmxpY0tleSh3aW5kb3cuX19QVUJMSUNfS0VZX18pO1xuICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgX2lkOnRoaXMucHJvcHMudXNlckluZm8uX2lkLFxuICAgICAgbmFtZTp0aGlzLnN0YXRlLm5hbWUuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgIG5pY2tuYW1lOnRoaXMuc3RhdGUubmlja25hbWUuaW5wdXRQcm9wcy52YWx1ZSxcbiAgICAgIGNvbnRhY3Q6dGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMudmFsdWUsXG4gICAgICBhdmF0b3I6dGhpcy5zdGF0ZS5hdmF0b3IuaW5wdXRQcm9wcy5maWxlLFxuICAgICAgcGFzc3dvcmQ6ZW5jcnlwdC5lbmNyeXB0KHRoaXMuc3RhdGUucGFzc3dvcmQuaW5wdXRQcm9wcy52YWx1ZSksXG4gICAgfTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHBhcmFtcykubWFwKGl0ZW09PntcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChpdGVtWzBdLGl0ZW1bMV0pXG4gICAgICBmb3JtRGF0YS5hcHBlbmQuYXBwbHkoZm9ybURhdGEsaXRlbSlcbiAgICB9KVxuICAgIGNvbnN0IHNldEZpZWxkRXJyb3IgPSAoZmllbGQpPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2ZpZWxkXTp7XG4gICAgICAgICAgIC4uLnRoaXMuc3RhdGVbZmllbGRdLFxuICAgICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICAgICBzdWNjZXNzOmZhbHNlXG4gICAgICAgICB9XG4gICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5mZXRjaE1vZGlmeVVzZXIoZm9ybURhdGEsKHR5cGUpPT57XG4gICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgY2FzZSAnTklDS05BTUVfRVhJU1QnOlxuICAgICAgICAgc2V0RmllbGRFcnJvcignbmlja25hbWUnKVxuICAgICAgICAgYnJlYWtcbiAgICAgICAgIGNhc2UgJ0VNQUlMX0VYSVNUJzpcbiAgICAgICAgIGNhc2UgJ1BIT05FX0VYSVNUJzpcbiAgICAgICAgIGNhc2UgJ0NPTlRBQ1QnOlxuICAgICAgICAgc2V0RmllbGRFcnJvcignY29udGFjdCcpXG4gICAgICAgICBicmVha1xuICAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uSXRlbUNhbmNlbCgpe1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctbmFtZSd9XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLW5pY2tuYW1lJ30gXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUubmlja25hbWV9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctY29udGFjdCd9XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLmNvbnRhY3R9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctcGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5wYXNzd29yZH0vPlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsndXNlci1pdGVtLWRpYWxvZy1hdmF0b3InfSBcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXtcbiAgICAgICAgICAgICAgICAgIHtjbGFzc05hbWU6J2l0ZW0tZm9ybSd9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5hdmF0b3J9Lz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1Db25maXJtfSA+e3VzZXJJbmZvPyfnoa7lrponOifms6jlhownfTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1DYW5jZWx9ID7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ1N0eWxlKShVc2VySW5mbyk7XG4iLCJjb25zdCBBUElfUk9PVCA9ICcvYXBpLydcbmV4cG9ydCBjb25zdCAgQVBJID0ge1xuICAgIGFkZFVzZXI6YCR7QVBJX1JPT1R9dXNlci9yZWdpc3RlcmAsXG4gICAgbW9kaWZ5VXNlcjpgJHtBUElfUk9PVH11c2VyL21vZGlmeWAsXG4gICAgbG9naW5Vc2VyOmAke0FQSV9ST09UfXVzZXIvbG9naW5gLFxuICAgIGxvZ291dFVzZXI6YCR7QVBJX1JPT1R9dXNlci9sb2dvdXRgXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5cbmltcG9ydCAqIGFzIHVzZXJBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9Vc2VyL3VzZXJJbmZvJ1xuXG5pbXBvcnQgQ3VzdG9tVGFicyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1c3RvbVRhYnMvQ3VzdG9tVGFicydcbmltcG9ydCBVc2VySW5mb0NvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXIvdXNlckluZm8nXG5pbXBvcnQgVXNlckxvZ2luQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXNlci91c2VyTG9naW4nXG5pbXBvcnQgVXNlck1vZGlmeUNvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXIvdXNlck1vZGlmeSdcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nJ1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ1RpdGxlJ1xuXG5jb25zdCBkaWFsb2dTdHlsZSA9IHtcbiAgICBwYXBlcjp7XG4gICAgICB3aWR0aDpcIjQwMHB4XCJcbiAgICB9XG59XG5jbGFzcyBVc2VySW5mb0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLm9uQ2FuY2VsID0gdGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpXG4gICAgfVxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKClcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHsgY2xhc3NlcyAsb3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEaWFsb2dDb21wb25lbnQgb3Blbj17b3Blbn0gbXVpQ2xhc3Nlcz17Y2xhc3Nlc30+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX19VU0VSX0lORk9fXyYmd2luZG93Ll9fVVNFUl9JTkZPX18uX2lkPyhcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDkv67mlLnnlKjmiLfkv6Hmga9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlck1vZGlmeUNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gb25DYW5jZWw9e3RoaXMub25DYW5jZWx9IHVzZXJJbmZvPXt3aW5kb3cuX19VU0VSX0lORk9fX30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tVGFicyB0YWJzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJOYW1lOiBcIueUqOaIt+eZu+W9lVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50OiA8VXNlckxvZ2luQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBvbkNhbmNlbD17dGhpcy5vbkNhbmNlbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJOYW1lOiBcIueUqOaIt+azqOWGjFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50OiA8VXNlckluZm9Db21wb25lbnQgey4uLnRoaXMucHJvcHN9IG9uQ2FuY2VsPXt0aGlzLm9uQ2FuY2VsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0gcGxhaW5UYWJzID0ge3RydWV9IHJ0bEFjdGl2ZSA9IHtmYWxzZX0gaGVhZGVyQ29sb3I9eydpbmZvJ30vPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L0RpYWxvZ0NvbXBvbmVudD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSxwcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb3BzXG4gICAgfSAgIFxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgZmV0Y2hMb2dpblVzZXI6KHBhcmFtcyk9PntcbiAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbi5GX0NPTU1PTl9GRVRDSF9MT0dJTl9VU0VSX0FDVElPTihwYXJhbXMpKVxuICAgIH0sXG4gICAgZmV0Y2hSZWdpc3RlclVzZXI6IChwYXJhbXMsY2FsbGJhY2spID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbi5GX0NPTU1PTl9GRVRDSF9BRERfVVNFUl9BQ1RJT04ocGFyYW1zLGNhbGxiYWNrKSlcbiAgICB9LFxuICAgIGZldGNoTW9kaWZ5VXNlcjogKHBhcmFtcyxjYWxsYmFjaykgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1c2VyQWN0aW9uLkZfQ09NTU9OX0ZFVENIX01PRElGWV9VU0VSX0FDVElPTihwYXJhbXMsY2FsbGJhY2spKVxuICAgIH0gIFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhkaWFsb2dTdHlsZSkoVXNlckluZm9Db250YWluZXIpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJMaW5rcydcbmltcG9ydCAqIGFzIHVzZXJBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9Vc2VyL3VzZXJJbmZvJ1xuXG5cbmNsYXNzIEhlYWRlckxpbmtzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SGVhZGVyTGlua3Mgey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvcHNcbiAgICB9ICAgXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBmZXRjaExvZ291dFVzZXI6KCk9PntcbiAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbi5GX0NPTU1PTl9GRVRDSF9MT0dPVVRfVVNFUl9BQ1RJT04oKSlcbiAgICB9ICBcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWRlckxpbmtzQ29udGFpbmVyKTsiLCJleHBvcnQgY29uc3QgVVBEQVRFX0VYVEVORF9JTkZPID0gXCJGX0hPTUVfVVBEQVRFX0VYVEVORF9JTkZPXCIiLCJpbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXcvaG9tZS5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9jb25zdGFudC9hY3Rpb25UeXBlcydcblxuY29uc3QgcmVkdWNlck1hcCA9IG5ldyBNYXAoKTtcblxucmVkdWNlck1hcC5zZXQodHlwZXMuVVBEQVRFX0VYVEVORF9JTkZPLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24uZGF0YVxuICAgIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgaWYgKHJlZHVjZXJNYXAuaGFzKGFjdGlvbi50eXBlKSkge1xuICAgICAgICByZXR1cm4gKHJlZHVjZXJNYXAuZ2V0KGFjdGlvbi50eXBlKSkoc3RhdGUsIGFjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZT9zdGF0ZTpudWxsO1xufSIsImltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBob21lXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSdcblxubGV0IGRlZmF1bHRTdG9yZSA9IHtcbiAgICBhOjFcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFN0b3JlIiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGhvbWVcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy8gY3JlYXRlcyBhIGJlYXV0aWZ1bCBzY3JvbGxiYXJcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IFwicGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3hcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3hcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5qc3hcIjtcblxuaW1wb3J0IHNoYXJlUm91dGVzIGZyb20gXCIuLi8uLi9yb3V0ZS9ob21lLmpzeFwiO1xuXG5pbXBvcnQgZGFzaGJvYXJkU3R5bGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2xheW91dHMvZGFzaGJvYXJkU3R5bGUuanN4XCI7XG5cbmltcG9ydCBpbWFnZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9zaWRlYmFyLTIuanBnXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9yZWFjdGxvZ28ucG5nXCI7XG5cbmNvbnN0IHN3aXRjaFJvdXRlcyA9IChcbiAgPFN3aXRjaD5cbiAgICB7c2hhcmVSb3V0ZXMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgIGlmKCFwcm9wKSByZXR1cm5cbiAgICAgIGlmIChwcm9wLnJlZGlyZWN0KVxuICAgICAgICByZXR1cm4gPFJlZGlyZWN0IGZyb209e3Byb3AucGF0aH0gdG89e3Byb3AudG99IGtleT17a2V5fSAvPjtcbiAgICAgIHJldHVybiA8Um91dGUgcGF0aD0nL3ZpZXcvOnBhZ2UnIGNvbXBvbmVudD17cHJvcC5jb21wb25lbnR9IGtleT17a2V5fSAvPjtcbiAgICB9KX1cbiAgPC9Td2l0Y2g+XG4pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9iaWxlT3BlbjogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMucmVzaXplRnVuY3Rpb24gPSB0aGlzLnJlc2l6ZUZ1bmN0aW9uLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlRHJhd2VyVG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2JpbGVPcGVuOiAhdGhpcy5zdGF0ZS5tb2JpbGVPcGVuIH0pO1xuICB9O1xuICBnZXRSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvbWFwc1wiO1xuICB9XG4gIHJlc2l6ZUZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5NjApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2JpbGVPcGVuOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKFwiV2luXCIpID4gLTEpIHtcbiAgICAgIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcy5yZWZzLm1haW5QYW5lbCk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplRnVuY3Rpb24pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShlKSB7XG4gICAgaWYgKGUuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSAhPT0gZS5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgdGhpcy5yZWZzLm1haW5QYW5lbC5zY3JvbGxUb3AgPSAwO1xuICAgICAgaWYgKHRoaXMuc3RhdGUubW9iaWxlT3Blbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlT3BlbjogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplRnVuY3Rpb24pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIHJvdXRlcz17c2hhcmVSb3V0ZXN9XG4gICAgICAgICAgbG9nb1RleHQ9e1wi6K6w5b2V5b+r5LmQXCJ9XG4gICAgICAgICAgbG9nbz17bG9nb31cbiAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgaGFuZGxlRHJhd2VyVG9nZ2xlPXt0aGlzLmhhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm1vYmlsZU9wZW59XG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpblBhbmVsfSByZWY9XCJtYWluUGFuZWxcIj5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICByb3V0ZXM9e3NoYXJlUm91dGVzfVxuICAgICAgICAgICAgaGFuZGxlRHJhd2VyVG9nZ2xlPXt0aGlzLmhhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIE9uIHRoZSAvbWFwcyByb3V0ZSB3ZSB3YW50IHRoZSBtYXAgdG8gYmUgb24gZnVsbCBzY3JlZW4gLSB0aGlzIGlzIG5vdCBwb3NzaWJsZSBpZiB0aGUgY29udGVudCBhbmQgY29uYXRpbmVyIGNsYXNzZXMgYXJlIHByZXNlbnQgYmVjYXVzZSB0aGV5IGhhdmUgc29tZSBwYWRkaW5ncyB3aGljaCB3b3VsZCBtYWtlIHRoZSBtYXAgc21hbGxlciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+e3N3aXRjaFJvdXRlc308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGFzaGJvYXJkU3R5bGUpKEFwcCk7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9jb25zdGFudHMvc2hhcmUnXG5pbXBvcnQgeyBmZXRjaEdldCwgZmV0Y2hQb3N0IH0gZnJvbSAnLi4vLi4vcHVibGljL2h0dHAnXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25zdGFudHMvYXBpJ1xuY29uc3QgRl9TSEFSRV9TQVZFX1NIQVJFX0NBVEVHT1JZID0gKGNhdGVnb3J5KT0+KHtcbiAgICB0eXBlOnR5cGVzLlNBVkVfU0hBUkVfQ0FURUdPUlksXG4gICAgY2F0ZWdvcnlcbn0pXG5jb25zdCBGX1NIQVJFX0RFTEVURV9TSEFSRV9DQVRFR09SWSA9IChjYXRlZ29yeSk9Pih7XG4gICAgdHlwZTp0eXBlcy5ERUxFVEVfU0hBUkVfQ0FURUdPUlksXG4gICAgY2F0ZWdvcnlcbn0pXG5jb25zdCBGX1NIQVJFX0lOSVRfREFUQV9BQ1RJT04gPSAoY2F0ZWdvcmllcyk9Pih7XG4gICAgdHlwZTp0eXBlcy5JTklUX0RBVEEsXG4gICAgY2F0ZWdvcmllc1xufSlcbmNvbnN0IEZfU0hBUkVfU0FWRV9TSEFSRV9JVEVNID0gKGl0ZW0pPT4oe1xuICAgIHR5cGU6dHlwZXMuU0FWRV9TSEFSRV9JVEVNLFxuICAgIGl0ZW1cbn0pXG5jb25zdCBGX1NIQVJFX0RFTEVURV9TSEFSRV9JVEVNID0gKGNhdGVnb3J5LF9pZCk9Pih7XG4gICAgdHlwZTp0eXBlcy5ERUxFVEVfU0hBUkVfSVRFTSxcbiAgICBjYXRlZ29yeSxcbiAgICBfaWRcbn0pXG5leHBvcnQgY29uc3QgRl9TSEFSRV9GRVRDSF9TSEFSRV9JTklUX0FDVElPTiA9IChwYWdlKT0+e1xuICAgIHJldHVybiAoZGlzcGF0Y2gvKiwgZ2V0U3RhdGUqLykgPT4ge1xuICAgICAgICBmZXRjaFBvc3QoYCR7QVBJLmdldFNoYXJlTGlzdH0ke3BhZ2U9PSdwdWJsaWMnPycnOignLycrd2luZG93Ll9fVVNFUl9JTkZPX18uX2lkKX1gKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goRl9TSEFSRV9JTklUX0RBVEFfQUNUSU9OKGpzb24ucmVzfHxbXSkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBGX1NIQVJFX0ZFVENIX1NBVkVfU0hBUkVfQ0FURUdPUlkgPSAocGFnZSxjYXRlZ29yeSxyZXNvbHZlLHJlamVjdCk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7IFxuICAgICAgICBmZXRjaFBvc3QoQVBJLnNhdmVTaGFyZUNhdGVnb3J5LGNhdGVnb3J5KS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbihqc29uID0+e1xuICAgICAgICAgICAgaWYoIShwYWdlPT0ncHVibGljJyYmIWNhdGVnb3J5LnB1YmxpY0ZsYWcpKXtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChGX1NIQVJFX1NBVkVfU0hBUkVfQ0FURUdPUlkoanNvbi5yZXMpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShqc29uKVxuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBGX1NIQVJFX0ZFVENIX0RFTEVURV9TSEFSRV9DQVRFR09SWSA9IChjYXRlZ29yeSxyZXNvbHZlLHJlamVjdCk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7IFxuICAgICAgICBmZXRjaEdldChgL2FwaS9zaGFyZS9kZWxldGUvY2F0ZWdvcnkvJHtjYXRlZ29yeX1gKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbihqc29uID0+e1xuICAgICAgICAgICAgaWYoanNvbi5zdGF0dXMpe1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKEZfU0hBUkVfREVMRVRFX1NIQVJFX0NBVEVHT1JZKGNhdGVnb3J5KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoanNvbilcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY29uc3QgRl9TSEFSRV9GRVRDSF9TQVZFX1NIQVJFX0lURU0gPSAoaXRlbSxyZXNvbHZlLHJlamVjdCk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7IFxuICAgICAgICBmZXRjaFBvc3QoJy9hcGkvc2hhcmUvc2F2ZS9pdGVtJyxpdGVtKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbihqc29uID0+e1xuICAgICAgICAgICAganNvbi5yZXMmJmRpc3BhdGNoKEZfU0hBUkVfU0FWRV9TSEFSRV9JVEVNKGpzb24ucmVzKSlcbiAgICAgICAgICAgIHJlc29sdmUoanNvbilcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY29uc3QgRl9TSEFSRV9GRVRDSF9ERUxFVEVfU0hBUkVfSVRFTSA9IChpdGVtLHJlc29sdmUscmVqZWN0KT0+e1xuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgZmV0Y2hHZXQoYC9hcGkvc2hhcmUvZGVsZXRlL2NhdGVnb3J5LyR7aXRlbS5jYXRlZ29yeX0vaXRlbS8ke2l0ZW0uX2lkfWApLnRoZW4ocmVzID0+IHJlcy5kYXRhKS50aGVuKGpzb24gPT57XG4gICAgICAgICAgICBkaXNwYXRjaChGX1NIQVJFX0RFTEVURV9TSEFSRV9JVEVNKGl0ZW0uY2F0ZWdvcnksaXRlbS5faWQpKVxuICAgICAgICAgICAgcmVzb2x2ZShqc29uKVxuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZVxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvblwiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBXYXJuaW5nIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2FybmluZ1wiO1xuaW1wb3J0IFRpcHMgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIlxuLy8gY29yZSBjb21wb25lbnRzXG5cbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzeFwiO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzeFwiO1xuXG5pbXBvcnQgRGFuZ2VyIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL1R5cG9ncmFwaHkvRGFuZ2VyLmpzeFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzeFwiO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzeFwiO1xuaW1wb3J0IENhcmRJY29uIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZEljb24uanN4XCI7XG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qc3hcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRDb250ZW50LmpzeFwiO1xuaW1wb3J0IENhcmRGb290ZXIgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkRm9vdGVyLmpzeFwiO1xuaW1wb3J0IHsgIEJ1dHRvbiAsIFRvb2x0aXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuXG5pbXBvcnQgZGFzaGJvYXJkU3R5bGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L3ZpZXdzL2Rhc2hib2FyZFN0eWxlLmpzeFwiO1xuXG5cbmNsYXNzIFNoYXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25PcGVuRWRpdERpYWxvZyA9IHRoaXMub25PcGVuRWRpdERpYWxvZy5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWxldGVJdGVtID0gdGhpcy5kZWxldGVJdGVtLmJpbmQodGhpcylcblx0ICB0aGlzLnN0YXRlID0ge1xuXHRcdCB2YWx1ZTogMFxuXHQgIH1cbiAgfVxuICBvbk9wZW5FZGl0RGlhbG9nKGNhdGVnb3J5LGl0ZW0pe1xuICAgIHRoaXMucHJvcHMub3BlbkVkaXRJdGVtRGlhbG9nKGNhdGVnb3J5LGl0ZW0pXG4gIH1cbiAgZGVsZXRlSXRlbShjYXRlZ29yeSxpdGVtKXtcbiAgICB0aGlzLnByb3BzLmRlbGV0ZUl0ZW0oY2F0ZWdvcnksaXRlbSlcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgXG4gIH1cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2VJbmRleCA9IGluZGV4ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGluZGV4IH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzICwgc2hhcmV9ID0gdGhpcy5wcm9wcyxjYXRlZ29yaWVzID0gc2hhcmUuZ2V0KCdjYXRlZ29yaWVzJyl8fFtdXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtcbiAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksaW5kZXgpPT57XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8R3JpZENvbnRhaW5lciBrZXk9e2luZGV4fSA+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNvbG9yPVwiaW5mb1wiIHN0YXRzIGljb24+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSWNvbiBjb2xvcj1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbj57Y2F0ZWdvcnkubmFtZX08L0ljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEljb24+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Ll9fVVNFUl9JTkZPX18mJihjYXRlZ29yeS5zaGFyZUZsYWd8fGNhdGVnb3J5LmJlbG9uZyA9PSB3aW5kb3cuX19VU0VSX0lORk9fXy5faWQpPyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLmt7vliqDlhoXlrrlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZmFiXCIgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIkFkZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpPT57dGhpcy5wcm9wcy5vcGVuQWRkSXRlbURpYWxvZyhjYXRlZ29yeS5faWQpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApOm51bGxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Ll9fVVNFUl9JTkZPX18gJiYgd2luZG93Ll9fVVNFUl9JTkZPX18uX2lkID09IGNhdGVnb3J5LmJlbG9uZz8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLnvJbovpHliIbnsbtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZmFiXCIgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIkVkaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXsoKT0+e3RoaXMucHJvcHMub3BlbkVkaXRDYXRlZ29yeURpYWxvZyhjYXRlZ29yeS5faWQsY2F0ZWdvcnkubmFtZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gY29sb3I9XCJhY3Rpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuWIoOmZpOWIhuexu1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJmYWJcIiAgYXJpYS1sYWJlbD1cIkRlbGV0ZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpPT57dGhpcy5wcm9wcy5kZWxldGVDYXRlZ29yeShjYXRlZ29yeS5faWQpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk6bnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2hpbGRyZW4mJmNhdGVnb3J5LmNoaWxkcmVuLm1hcCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGtleT17aW5kZXh9IGRlbGV0ZUl0ZW09eygpPT57dGhpcy5kZWxldGVJdGVtKGNhdGVnb3J5Ll9pZCxpdGVtKX19IG9uT3BlbkVkaXREaWFsb2c9eygpPT50aGlzLm9uT3BlbkVkaXREaWFsb2coY2F0ZWdvcnkuX2lkLGl0ZW0pfSBpbmZvPXt7Li4uaXRlbSxpbWc6Jy4uLy4uL3B1YmxpYy9pY29uL2xvZ28uc3ZnJ319IHhzPXs0fSBzbT17Mn0gbWQ9ezF9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhY2F0ZWdvcnkuY2hpbGRyZW4gfHwgY2F0ZWdvcnkuY2hpbGRyZW4ubGVuZ3RoID09IDAgPyhcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBzdGF0cz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YXRzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmdlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2FybmluZyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rhbmdlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+6K+l57G75LiL5pqC5peg5YaF5a6577yM6K+35re75Yqg5pyJ5pWI5YaF5a65PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPiBcbiAgICAgICAgICAgICAgICAgICAgKTpudWxsXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICB3aW5kb3cuX19VU0VSX0lORk9fXy5faWQ/KFxuICAgICAgICAgICAgPEdyaWRDb250YWluZXIga2V5PXtjYXRlZ29yaWVzLmxlbmd0aH0gYWRkQnV0dG9uPXt0cnVlfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9wZW5BZGRDYXRlZ29yeURpYWxvZ30+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNvbG9yPVwiaW5mb1wiIHN0YXRzIGljb24+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSWNvbiBjb2xvcj1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEljb24+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxDYXJkRm9vdGVyIHN0YXRzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGF0c30+XG4gICAgICAgICAgICAgICAgICAgICAgPERhbmdlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXBzIGNvbG9yPXsnYWN0aW9uJ30vPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRGFuZ2VyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+54K55Ye75Y2h54mH5re75YqgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICApOm51bGxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU2hhcmUucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGFzaGJvYXJkU3R5bGUpKFNoYXJlKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZVxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbi8vIGltcG9ydCBDbG91ZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3VkXCI7XG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IERpYWxvZ0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nXCI7XG5pbXBvcnQgRGlhbG9nVGl0bGVDb21wb25lbnQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0FjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nQWN0aW9uXCI7XG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXRcIjtcbmltcG9ydCBTd2l0Y2hMYWJlbHMgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvU2VsZWN0aW9uL3N3aXRjaExhYmVsc1wiXG5jb25zdCBkaWFsb2dTdHlsZSA9IHtcbiAgICBwYXBlcjp7XG4gICAgICB3aWR0aDpcIjQwMHB4XCJcbiAgICB9XG59XG5cbmNsYXNzIFNoYXJlQ2F0ZWdvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5vbkNhdGVnb3J5Q2hhbmdlID0gdGhpcy5vbkNhdGVnb3J5Q2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ2F0ZWdvcnlDb25maXJtID0gdGhpcy5vbkNhdGVnb3J5Q29uZmlybS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNoYW5nZVN3aXRjaExhYmVsID0gdGhpcy5vbkNoYW5nZVN3aXRjaExhYmVsLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBjYXRlZ29yeTonJyxcbiAgICAgICAgc3dpdGNoTGFiZWxzOlt7XG4gICAgICAgICAgc2VsZWN0czpbJ+WFrOWFseWIhuS6qycsJ+aIkeeahOaUtuiXjyddLFxuICAgICAgICAgIGxhYmVsOiflhazlhbHliIbkuqsnLFxuICAgICAgICAgIGNoZWNrZWQ6dHJ1ZSxcbiAgICAgICAgICB2YWx1ZToncHVibGljJyxcbiAgICAgICAgICBjb2xvcjoncHJpbWFyeSdcbiAgICAgICAgfSx7XG4gICAgICAgICAgc2VsZWN0czpbJ+WFgeiuuOWFtuS7luS6uua3u+WKoOWIhuS6qycsJ+emgeatouWFtuS7luS6uua3u+WKoOWIhuS6qyddLFxuICAgICAgICAgIGxhYmVsOifnpoHmraLlhbbku5bkurrmt7vliqDliIbkuqsnLFxuICAgICAgICAgIGNoZWNrZWQ6ZmFsc2UsXG4gICAgICAgICAgdmFsdWU6J3B1YmxpYycsXG4gICAgICAgICAgY29sb3I6J3ByaW1hcnknXG4gICAgICAgIH1dXG4gICAgfVxuICB9XG4gIG9uQ2F0ZWdvcnlDaGFuZ2UoZXYpIHtcbiAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNhdGVnb3J5OmV2LnRhcmdldC52YWx1ZVxuICAgICB9KVxuICB9XG4gIG9uQ2F0ZWdvcnlDb25maXJtKCl7XG4gICAgIHRoaXMucHJvcHMuc2F2ZUNhdGVnb3J5KHtuYW1lOnRoaXMuc3RhdGUuY2F0ZWdvcnl8fHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgX2lkOnRoaXMucHJvcHMuX2lkLFxuICAgICAgcHVibGljRmxhZzp0aGlzLnN0YXRlLnN3aXRjaExhYmVsc1swXS5jaGVja2VkLFxuICAgICAgc2hhcmVGbGFnOnRoaXMuc3RhdGUuc3dpdGNoTGFiZWxzWzFdLmNoZWNrZWQsXG4gICAgfSlcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5jYXRlZ29yeSE9bmV4dFByb3BzLmRlZmF1bHRWYWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2F0ZWdvcnk6bmV4dFByb3BzLmRlZmF1bHRWYWx1ZVxuICAgICAgfSlcbiAgICB9ICBcbiAgfVxuICBvbkNoYW5nZVN3aXRjaExhYmVsKGNoYW5nZVN3aXRjaEluZGV4LGV2ZW50KXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN3aXRjaExhYmVsczp0aGlzLnN0YXRlLnN3aXRjaExhYmVscy5tYXAoKHN3aXRjaExhYmVsLGluZGV4KT0+e1xuICAgICAgICAgIGlmKGluZGV4ID09IGNoYW5nZVN3aXRjaEluZGV4KXtcbiAgICAgICAgICAgIHN3aXRjaExhYmVsLmNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgc3dpdGNoTGFiZWwubGFiZWwgPSBzd2l0Y2hMYWJlbC5jaGVja2VkP3N3aXRjaExhYmVsLnNlbGVjdHNbMF06c3dpdGNoTGFiZWwuc2VsZWN0c1sxXVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3dpdGNoTGFiZWxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzICx0aXRsZSAsIG9wZW59ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjdXN0b21JbnB1dCA9IHtcbiAgICAgIGZvcm1Db250cm9sUHJvcHM6e1xuICAgICAgICAgIGNsYXNzTmFtZTonY2F0ZWdvcnktZm9ybSdcbiAgICAgIH0sXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiY2F0ZWdvcnlcIixcbiAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcImNhdGVnb3J5XCJcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6dGhpcy5vbkNhdGVnb3J5Q2hhbmdlLFxuICAgICAgICB2YWx1ZTp0aGlzLnN0YXRlLmNhdGVnb3J5XG4gICAgICB9LFxuICAgICAgbGFiZWxUZXh0OicnLFxuICAgICAgaWQ6XCJzaGFyZS1jYXRlZ29yeS1pbnB1dFwiLFxuICAgICAgc3VjY2VzczpmYWxzZSxcbiAgICAgIGVycm9yOmZhbHNlXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nQ29tcG9uZW50IG11aUNsYXNzZXM9e2NsYXNzZXN9IG9wZW49e29wZW59PlxuICAgICAgICA8RGlhbG9nVGl0bGVDb21wb25lbnQ+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvRGlhbG9nVGl0bGVDb21wb25lbnQ+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IHsuLi5jdXN0b21JbnB1dH0gLz5cbiAgICAgICAgICAgIDxTd2l0Y2hMYWJlbHMgc3dpdGNoTGFiZWxzID0ge3RoaXMuc3RhdGUuc3dpdGNoTGFiZWxzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVN3aXRjaExhYmVsfS8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbkNvbXBvbmVudD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DYXRlZ29yeUNvbmZpcm19ID7noa7lrpo8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICA8L0RpYWxvZ0NvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nU3R5bGUpKFNoYXJlQ2F0ZWdvcnkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuLy8gaW1wb3J0IENsb3VkIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvdWRcIjtcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgRGlhbG9nQ29tcG9uZW50IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dUaXRsZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nVGl0bGVcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dDb250ZW50XCI7XG5pbXBvcnQgRGlhbG9nQWN0aW9uQ29tcG9uZW50IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dBY3Rpb25cIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9DdXN0b21JbnB1dC9DdXN0b21JbnB1dFwiO1xuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gICAgcGFwZXI6e1xuICAgICAgd2lkdGg6XCI1MDBweFwiXG4gICAgfVxufVxuXG5jbGFzcyBTaGFyZUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5vblRpdGxlQ2hhbmdlID0gdGhpcy5vblRpdGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uTGlua0NoYW5nZSA9IHRoaXMub25MaW5rQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UgPSB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25JdGVtQ29uZmlybSA9IHRoaXMub25JdGVtQ29uZmlybS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkl0ZW1DYW5jZWwgPSB0aGlzLm9uSXRlbUNhbmNlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkljb25DaGFuZ2UgPSB0aGlzLm9uSWNvbkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdGl0bGU6J+agh+mimCcsXG4gICAgICAgIGxpbms6JycsXG4gICAgICAgIGRlc2NyaXB0aW9uOicnXG4gICAgfVxuICB9XG4gIG9uVGl0bGVDaGFuZ2UoZXYpIHtcbiAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgdGl0bGU6ZXYudGFyZ2V0LnZhbHVlXG4gICAgIH0pXG4gIH1cbiAgb25MaW5rQ2hhbmdlKGV2KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpbms6ZXYudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiB9XG4gb25EZXNjcmlwdGlvbkNoYW5nZShldikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGVzY3JpcHRpb246ZXYudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuICBvbkljb25DaGFuZ2UoZXYpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaWNvbjpldi50YXJnZXQuZmlsZXNbMF1cbiAgICB9KVxuICB9XG4gIG9uSXRlbUNvbmZpcm0oKXtcbiAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCkscGFyYW1zID0ge1xuICAgICAgY2F0ZWdvcnk6dGhpcy5wcm9wcy5jYXRlZ29yeSxcbiAgICAgIF9pZDp0aGlzLnByb3BzLml0ZW0/dGhpcy5wcm9wcy5pdGVtLl9pZDonJyxcbiAgICAgIHRpdGxlOnRoaXMuc3RhdGUudGl0bGUsXG4gICAgICBsaW5rOnRoaXMuc3RhdGUubGluayxcbiAgICAgIGljb246dGhpcy5zdGF0ZS5pY29uLFxuICAgICAgZGVzY3JpcHRpb246dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbixcbiAgICAgIHRhcmdldDonX2JsYW5rJyxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5tYXAoaXRlbT0+e1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKGl0ZW1bMF0saXRlbVsxXSlcbiAgICAgIGZvcm1EYXRhLmFwcGVuZC5hcHBseShmb3JtRGF0YSxpdGVtKVxuICAgIH0pXG5cbiAgICB0aGlzLnByb3BzLnNhdmVJdGVtKGZvcm1EYXRhKVxuICB9XG4gIG9uSXRlbUNhbmNlbCgpe1xuICAgIHRoaXMucHJvcHMuY2FuY2VsSXRlbSgpXG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKG5leHRQcm9wcy5pdGVtKXtcbiAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgIC4uLm5leHRQcm9wcy5pdGVtXG4gICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyAsdGl0bGUgLCBvcGVufSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY3VzdG9tSW5wdXQgPSB7XG4gICAgICBmb3JtQ29udHJvbFByb3BzOntcbiAgICAgICAgICBjbGFzc05hbWU6J2l0ZW0tZm9ybSdcbiAgICAgIH0sXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiY2F0ZWdvcnlcIixcbiAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcImNhdGVnb3J5XCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVGV4dDon5qCH6aKYJyxcbiAgICAgIHN1Y2Nlc3M6ZmFsc2UsXG4gICAgICBlcnJvcjpmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ0NvbXBvbmVudCBtdWlDbGFzc2VzPXtjbGFzc2VzfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPERpYWxvZ1RpdGxlQ29tcG9uZW50PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0RpYWxvZ1RpdGxlQ29tcG9uZW50PlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3NoYXJlLWl0ZW0tZGlhbG9nLXRpdGxlJ30gIFxuICAgICAgICAgICAgICAgIHsuLi5jdXN0b21JbnB1dH0gXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0PXsn5qCH6aKYJ30gXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17ey4uLmN1c3RvbUlucHV0LmlucHV0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+agh+mimCcsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6dGhpcy5vblRpdGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHZhbHVlOnRoaXMuc3RhdGUudGl0bGVcbiAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsnc2hhcmUtaXRlbS1kaWFsb2ctbGluayd9IFxuICAgICAgICAgICAgICAgIHsuLi5jdXN0b21JbnB1dH0gXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0PXsn6ZO+5o6lJ30gIFxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3suLi5jdXN0b21JbnB1dC5pbnB1dFByb3BzLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifpk77mjqUnLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOnRoaXMub25MaW5rQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHZhbHVlOnRoaXMuc3RhdGUubGlua1xuICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3NoYXJlLWl0ZW0tZGlhbG9nLWRlc2NyaXB0aW9uJ30gXG4gICAgICAgICAgICAgICAgey4uLmN1c3RvbUlucHV0fSBcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ9eyfmj4/ov7AnfSAgXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17ey4uLmN1c3RvbUlucHV0LmlucHV0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+aPj+i/sCcsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6dGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHZhbHVlOnRoaXMuc3RhdGUuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsnc2hhcmUtaXRlbS1kaWFsb2ctaW1hZ2UnfSBcbiAgICAgICAgICAgICAgICB7Li4uY3VzdG9tSW5wdXR9IFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dD17J+Wbvuaghyd9ICBcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7Li4uY3VzdG9tSW5wdXQuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon5Zu+5qCHJyxcbiAgICAgICAgICAgICAgICB0eXBlOidmaWxlJyxcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAgICAgICAgIGFjY2VwdDonaW1hZ2UvKidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOnRoaXMub25JY29uQ2hhbmdlXG4gICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1Db25maXJtfSA+56Gu5a6aPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uSXRlbUNhbmNlbH0gPuWPlua2iDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbkNvbXBvbmVudD5cbiAgICAgIDwvRGlhbG9nQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhkaWFsb2dTdHlsZSkoU2hhcmVJdGVtKTtcbiIsImNvbnN0IEFQSV9ST09UID0gJy9hcGkvJ1xuZXhwb3J0IGNvbnN0ICBBUEkgPSB7XG4gICAgZ2V0U2hhcmVMaXN0OmAke0FQSV9ST09UfXNoYXJlL2xpc3RgLFxuICAgIHNhdmVTaGFyZUNhdGVnb3J5OmAke0FQSV9ST09UfXNoYXJlL3NhdmUvY2F0ZWdvcnlgXG59IiwiZXhwb3J0IGNvbnN0IFVQREFURV9FWFRFTkRfSU5GTyA9IFwiRl9TSEFSRV9VUERBVEVfRVhURU5EX0lORk9cIlxuZXhwb3J0IGNvbnN0IFNBVkVfU0hBUkVfQ0FURUdPUlkgPSBcIkZfU0hBUkVfU0FWRV9TSEFSRV9DQVRFR09SWVwiXG5leHBvcnQgY29uc3QgREVMRVRFX1NIQVJFX0NBVEVHT1JZID0gXCJGX1NIQVJFX0RFTEVURV9TSEFSRV9DQVRFR09SWVwiXG5leHBvcnQgY29uc3QgSU5JVF9EQVRBID0gXCJGX1NIQVJFX0lOSVRfREFUQVwiXG5leHBvcnQgY29uc3QgU0FWRV9TSEFSRV9JVEVNID0gXCJGX1NIQVJFX1NBVkVfU0hBUkVfSVRFTVwiXG5leHBvcnQgY29uc3QgREVMRVRFX1NIQVJFX0lURU0gPSBcIkZfU0hBUkVfREVMRVRFX1NIQVJFX0lURU1cIlxuIiwiaW1wb3J0IFNoYXJlUGFnZSBmcm9tICcuL3ZpZXdzL3NoYXJlLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgU2hhcmVQYWdlIiwiaW1wb3J0IHNoYXJlIGZyb20gJy4vc2hhcmUuanN4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2hhcmVcbn1cbiIsImltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL3NoYXJlLmpzeCdcblxuY29uc3QgcmVkdWNlck1hcCA9IG5ldyBNYXAoKTtcblxucmVkdWNlck1hcC5zZXQodHlwZXMuVVBEQVRFX0VYVEVORF9JTkZPLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlXG4gICAgfVxufSlcblxucmVkdWNlck1hcC5zZXQodHlwZXMuSU5JVF9EQVRBLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiBzdGF0ZS51cGRhdGUoJ2NhdGVnb3JpZXMnLChjYXRlZ29yaWVzKT0+IEltbXV0YWJsZS5mcm9tSlMoW10pLmNvbmNhdChhY3Rpb24uY2F0ZWdvcmllcykpXG59KVxuXG5yZWR1Y2VyTWFwLnNldCh0eXBlcy5TQVZFX1NIQVJFX0NBVEVHT1JZLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiBzdGF0ZS51cGRhdGUoJ2NhdGVnb3JpZXMnLChjYXRlZ29yaWVzKT0+e1xuICAgICAgICBpZihjYXRlZ29yaWVzLnNvbWUoY2F0ZWdvcnk9PmNhdGVnb3J5Ll9pZD09YWN0aW9uLmNhdGVnb3J5Ll9pZCkpe1xuICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5PT57XG4gICAgICAgICAgICAgICAgaWYoY2F0ZWdvcnkuX2lkPT1hY3Rpb24uY2F0ZWdvcnkuX2lkKXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSBhY3Rpb24uY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5XG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLnB1c2goYWN0aW9uLmNhdGVnb3J5KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59KVxucmVkdWNlck1hcC5zZXQodHlwZXMuREVMRVRFX1NIQVJFX0NBVEVHT1JZLChzdGF0ZSxhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gc3RhdGUudXBkYXRlKCdjYXRlZ29yaWVzJywoY2F0ZWdvcmllcyk9PmNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5Ll9pZCAhPSBhY3Rpb24uY2F0ZWdvcnkpKVxufSlcbnJlZHVjZXJNYXAuc2V0KHR5cGVzLlNBVkVfU0hBUkVfSVRFTSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gc3RhdGUudXBkYXRlKCdjYXRlZ29yaWVzJywoY2F0ZWdvcmllcyk9PntcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5PT57XG4gICAgICAgICAgICBpZihjYXRlZ29yeS5faWQgPT0gYWN0aW9uLml0ZW0uY2F0ZWdvcnkpe1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3J5LmNoaWxkcmVuLnNvbWUoaXRlbSA9PiBpdGVtLl9pZCA9PSBhY3Rpb24uaXRlbS5faWQpKXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2hpbGRyZW4gPSBjYXRlZ29yeS5jaGlsZHJlbi5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLl9pZCA9PSBhY3Rpb24uaXRlbS5faWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBhY3Rpb24uaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2hpbGRyZW4ucHVzaChhY3Rpb24uaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnlcbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxucmVkdWNlck1hcC5zZXQodHlwZXMuREVMRVRFX1NIQVJFX0lURU0sKHN0YXRlLGFjdGlvbikgPT4ge1xuXG4gICAgcmV0dXJuIHN0YXRlLnVwZGF0ZSgnY2F0ZWdvcmllcycsKGNhdGVnb3JpZXMpPT57XG4gICAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBpZihjYXRlZ29yeS5faWQgPT0gYWN0aW9uLmNhdGVnb3J5KXtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5jaGlsZHJlbiA9IGNhdGVnb3J5LmNoaWxkcmVuLmZpbHRlcihpdGVtPT5pdGVtLl9pZCE9YWN0aW9uLl9pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeVxuICAgICAgICB9KVxuICAgIH0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChyZWR1Y2VyTWFwLmhhcyhhY3Rpb24udHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIChyZWR1Y2VyTWFwLmdldChhY3Rpb24udHlwZSkpKHN0YXRlLCBhY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU/c3RhdGU6bnVsbDtcbn0iLCJpbXBvcnQgc2hhcmUgZnJvbSAnLi9zaGFyZS5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaGFyZVxufSIsIlxubGV0IGRlZmF1bHRTdG9yZSA9IHtcbiAgICBjYXRlZ29yaWVzOltdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRTdG9yZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIHNoYXJlQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvc2hhcmUnXG5pbXBvcnQgU2hhcmVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZSdcbmltcG9ydCBTaGFyZUl0ZW1Db21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZUl0ZW0nXG5pbXBvcnQgU2hhcmVDYXRlZ29yeUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlQ2F0ZWdvcnknXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9TbmFja2Jhci9TbmFja2JhcidcbmNsYXNzIFNoYXJlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc2F2ZUNhdGVnb3J5ID0gdGhpcy5zYXZlQ2F0ZWdvcnkuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gdGhpcy5kZWxldGVDYXRlZ29yeS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub3BlbkFkZENhdGVnb3J5RGlhbG9nID0gdGhpcy5vcGVuQWRkQ2F0ZWdvcnlEaWFsb2cuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9wZW5FZGl0Q2F0ZWdvcnlEaWFsb2cgPSB0aGlzLm9wZW5FZGl0Q2F0ZWdvcnlEaWFsb2cuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9wZW5BZGRJdGVtRGlhbG9nID0gdGhpcy5vcGVuQWRkSXRlbURpYWxvZy5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub3BlbkVkaXRJdGVtRGlhbG9nID0gdGhpcy5vcGVuRWRpdEl0ZW1EaWFsb2cuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnNhdmVJdGVtID0gdGhpcy5zYXZlSXRlbS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbSA9IHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuY2FuY2VsSXRlbSA9IHRoaXMuY2FuY2VsSXRlbS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYXRlZ29yeURpYWxvZzpmYWxzZSxcbiAgICAgICAgICAgIGl0ZW1EaWFsb2c6e1xuICAgICAgICAgICAgICAgIG9wZW46ZmFsc2UsXG4gICAgICAgICAgICAgICAgdGl0bGU6J+a3u+WKoOmhueebricsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6JycsXG4gICAgICAgICAgICAgICAgaXRlbTpudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcnk6JycsXG4gICAgICAgICAgICBjYXRlZ29yeU5hbWU6JycsXG4gICAgICAgICAgICBjYXRlZ29yeVRpdGxlOifmt7vliqDliIbnsbsnLFxuICAgICAgICAgICAgY2F0ZWdvcnlJZDonJyxcbiAgICAgICAgICAgIHNuYWNrYmFyOntcbiAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOjMwMDAsXG4gICAgICAgICAgICAgICAgb3BlbjpmYWxzZSxcbiAgICAgICAgICAgICAgICBwbGFjZTondGMnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6JycsXG4gICAgICAgICAgICAgICAgY29sb3I6J3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIG9uQ2xvc2U6KCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFja2Jhcjp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zbmFja2JhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIG9wZW5BZGRDYXRlZ29yeURpYWxvZygpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6JycsXG4gICAgICAgICAgICBjYXRlZ29yeVRpdGxlOifmt7vliqDliIbnsbsnLFxuICAgICAgICAgICAgY2F0ZWdvcnlEaWFsb2c6dHJ1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5TmFtZTon5paw5YiG57G75ZCNJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBvcGVuRWRpdENhdGVnb3J5RGlhbG9nKF9pZCxuYW1lKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXRlZ29yeUlkOl9pZCxcbiAgICAgICAgICAgIGNhdGVnb3J5VGl0bGU6J+S/ruaUueWIhuexuycsXG4gICAgICAgICAgICBjYXRlZ29yeURpYWxvZzp0cnVlLFxuICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOm5hbWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2F2ZUNhdGVnb3J5KGNhdGVnb3J5KXtcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFNhdmVDYXRlZ29yeSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5wYWdlLGNhdGVnb3J5LHJlc29sdmUscmVqZWN0KVxuICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeURpYWxvZzpmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGRlbGV0ZUNhdGVnb3J5KF9pZCl7XG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEZWxldGVDYXRlZ29yeShfaWQscmVzb2x2ZSxyZWplY3QpXG4gICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNuYWNrYmFyOntcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zbmFja2JhcixcbiAgICAgICAgICAgICAgICAgICAgb3Blbjp0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOifor6Xnsbvlt7Lnu4/ooqvliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjonZGFuZ2VyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBvcGVuQWRkSXRlbURpYWxvZyhjYXRlZ29yeSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlbURpYWxvZzp7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5pdGVtRGlhbG9nLFxuICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSxcbiAgICAgICAgICAgICAgICB0aXRsZTon5re75Yqg6aG555uuJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBvcGVuRWRpdEl0ZW1EaWFsb2coY2F0ZWdvcnksaXRlbSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlbURpYWxvZzp7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5pdGVtRGlhbG9nLFxuICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSxcbiAgICAgICAgICAgICAgICB0aXRsZTon5L+u5pS56aG555uuJyxcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNhdmVJdGVtKGl0ZW0pe1xuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoU2F2ZUl0ZW0oaXRlbSxyZXNvbHZlLHJlamVjdClcbiAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXRlbURpYWxvZzp7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaXRlbURpYWxvZyxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjpmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBkZWxldGVJdGVtKGNhdGVnb3J5LGl0ZW0pe1xuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoRGVsZXRlSXRlbSh7Y2F0ZWdvcnksLi4uaXRlbX0scmVzb2x2ZSxyZWplY3QpXG4gICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNuYWNrYmFyOntcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zbmFja2JhcixcbiAgICAgICAgICAgICAgICAgICAgb3Blbjp0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOifor6Xpobnlt7Lnu4/ooqvliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjonZGFuZ2VyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjYW5jZWxJdGVtKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlbURpYWxvZzp7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5pdGVtRGlhbG9nLFxuICAgICAgICAgICAgICAgIG9wZW46ZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYobmV4dFByb3BzLm1hdGNoLnBhcmFtcy5wYWdlIT10aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5wYWdlKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hJbml0U2hhcmVMaXN0KG5leHRQcm9wcy5tYXRjaC5wYXJhbXMucGFnZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoSW5pdFNoYXJlTGlzdCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5wYWdlKVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8U2hhcmVDb21wb25lbnQgZGVsZXRlQ2F0ZWdvcnk9e3RoaXMuZGVsZXRlQ2F0ZWdvcnl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRWRpdEl0ZW1EaWFsb2c9e3RoaXMub3BlbkVkaXRJdGVtRGlhbG9nfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkFkZEl0ZW1EaWFsb2c9e3RoaXMub3BlbkFkZEl0ZW1EaWFsb2d9ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkFkZENhdGVnb3J5RGlhbG9nPXt0aGlzLm9wZW5BZGRDYXRlZ29yeURpYWxvZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5FZGl0Q2F0ZWdvcnlEaWFsb2c9e3RoaXMub3BlbkVkaXRDYXRlZ29yeURpYWxvZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbSA9IHt0aGlzLmRlbGV0ZUl0ZW19IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8U2hhcmVDYXRlZ29yeUNvbXBvbmVudCBzYXZlQ2F0ZWdvcnk9e3RoaXMuc2F2ZUNhdGVnb3J5fSAgb3Blbj17dGhpcy5zdGF0ZS5jYXRlZ29yeURpYWxvZ30gey4uLnRoaXMucHJvcHN9IF9pZD17dGhpcy5zdGF0ZS5jYXRlZ29yeUlkfSB0aXRsZT17dGhpcy5zdGF0ZS5jYXRlZ29yeVRpdGxlfSBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlOYW1lfS8+XG4gICAgICAgICAgICAgICAgPFNoYXJlSXRlbUNvbXBvbmVudCBcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsSXRlbT17dGhpcy5jYW5jZWxJdGVtfSBcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUl0ZW09e3RoaXMuc2F2ZUl0ZW19XG4gICAgICAgICAgICAgICAgICAgIG9wZW4gPSB7dGhpcy5zdGF0ZS5pdGVtRGlhbG9nLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLml0ZW1EaWFsb2d9IFxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8U25hY2tiYXIgey4uLnRoaXMuc3RhdGUuc25hY2tiYXJ9Lz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNoYXJlOiBzdGF0ZS5nZXQoXCJzaGFyZVwiKVxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGZldGNoSW5pdFNoYXJlTGlzdDogKHBhZ2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2hhcmVBY3Rpb24uRl9TSEFSRV9GRVRDSF9TSEFSRV9JTklUX0FDVElPTihwYWdlKSlcbiAgICB9LFxuICAgIGZldGNoU2F2ZUNhdGVnb3J5OiAocGFnZSxjYXRlZ29yeSxyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzaGFyZUFjdGlvbi5GX1NIQVJFX0ZFVENIX1NBVkVfU0hBUkVfQ0FURUdPUlkocGFnZSxjYXRlZ29yeSxyZXNvbHZlLHJlamVjdCkpXG4gICAgfSxcbiAgICBmZXRjaERlbGV0ZUNhdGVnb3J5OiAoX2lkLHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNoYXJlQWN0aW9uLkZfU0hBUkVfRkVUQ0hfREVMRVRFX1NIQVJFX0NBVEVHT1JZKF9pZCxyZXNvbHZlLHJlamVjdCkpXG4gICAgfSxcbiAgICBmZXRjaFNhdmVJdGVtOiAoaXRlbSxyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzaGFyZUFjdGlvbi5GX1NIQVJFX0ZFVENIX1NBVkVfU0hBUkVfSVRFTShpdGVtLHJlc29sdmUscmVqZWN0KSlcbiAgICB9LFxuICAgIGZldGNoRGVsZXRlSXRlbTooaXRlbSxyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzaGFyZUFjdGlvbi5GX1NIQVJFX0ZFVENIX0RFTEVURV9TSEFSRV9JVEVNKGl0ZW0scmVzb2x2ZSxyZWplY3QpKVxuICAgIH0gICAgXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaGFyZUNvbnRhaW5lcik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5cbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuY3NzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmUvaW5kZXguanN4XCJcbmltcG9ydCBpbmRleFJvdXRlcyBmcm9tIFwiLi9yb3V0ZS9pbmRleC5qc3hcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCIuL3B1YmxpYy9ub3RpZmljYXRpb25cIlxuXG5pbXBvcnQgU29rY2V0U2VydmVyIGZyb20gXCIuL3B1YmxpYy9zb2NrZXRcIlxuaW1wb3J0IHsgUkVESVNfTUVTU0FHRSB9IGZyb20gXCIuLi9jb25maWcvY29uc3RDb25maWdcIlxuXG5jb25zdCBub3RpZnkgPSBuZXcgTm90aWZpY2F0aW9ucyh7dGl0bGU6J+iusOW9leW/q+S5kCd9KVxuXG5ub3RpZnkuc2hvd05vdGlmeSgpXG5cbm5ldyBTb2tjZXRTZXJ2ZXIoe1xuICBldmVudHM6e1xuICAgICdjb25uZWN0JzooKT0+e1xuICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3QnKVxuICAgIH0sXG4gICAgW1JFRElTX01FU1NBR0UuU0hBUkVfTUVTU0FHRS5FVkVOVF06KG1lc3NhZ2U9J3t9Jyk9PntcbiAgICAgIGNvbnN0IG1zZyA9IEpTT04ucGFyc2UobWVzc2FnZSlcbiAgICAgIGlmKG1zZy51c2VyICYmIHdpbmRvdy5fX1VTRVJfSU5GT19fICYmIG1zZy51c2VyIT13aW5kb3cuX19VU0VSX0lORk9fXy5faWQpe1xuICAgICAgICAgbm90aWZ5LnNob3dOb3RpZnkoe2JvZHk6SlNPTi5wYXJzZShtZXNzYWdlKS5ib2R5fSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5cbmNvbnN0IGhpc3QgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdH0+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICB7aW5kZXhSb3V0ZXMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFJvdXRlIHBhdGg9e3Byb3AucGF0aH0gY29tcG9uZW50PXtwcm9wLmNvbXBvbmVudH0ga2V5PXtrZXl9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoY29uZmlnID0+IHtcbiAgICBjb25maWcuaGVhZGVycyA9IHsgLi4uY29uZmlnLmhlYWRlcnMsICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyAsYXBwTmFtZTpuYXZpZ2F0b3IuYXBwTmFtZX1cbiAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoY29uZmlnLnVybC5pbmNsdWRlcyhcIj9cIikpIHtcbiAgICAgICAgY29uZmlnLnVybCA9IGNvbmZpZy51cmwgKyBcIiZ2PVwiICsgcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcudXJsID0gY29uZmlnLnVybCArIFwiP3Y9XCIgKyByO1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlnXG59KVxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlXG59LCAoZXJyb3IpID0+IHtcbiAgICBcbn0pXG5cbmZ1bmN0aW9uIHF1ZXJ5UGFyYW1zKHBhcmFtcykge1xuICAgIHJldHVybiBwYXJhbXMgPyBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAgIC5tYXAoayA9PiBlbmNvZGVVUklDb21wb25lbnQoaykgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tdKSlcbiAgICAgICAgLmpvaW4oJyYnKSA6ICcnO1xufVxuXG5leHBvcnQgY29uc3QgZ2VuVXJsRnJvbVBhcmFtcyA9ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgIGlmICh1cmwgJiYgcGFyYW1zKSB7XG4gICAgICAgIHBhcmFtcyA9IHsgLi4ucGFyYW1zIH1cbiAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBxdWVyeVBhcmFtcyhwYXJhbXMpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuXG4vKipcbiAqIOS7juWFqOWxgOWPmOmHj+ebtOaOpeiuv+mXriBwcmV2Q29uZCDjgJDkuI3lu7rorq7kvb/nlKjvvIzmnIDlpb3ku44gc3RvcmUg6I635Y+W44CRXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQcmV2Q29uZEZyb21HbG9iYWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5HbG9iYWxTZWFyY2hDcml0ZXJpYSB8fCB7fVxufVxuXG4vKiogXG4gKiDku47lhajlsYDlj5jph4/nm7TmjqXorr/pl64gR2xvYmFsU3dpdGNoZXMgIOOAkOS4jeW7uuiuruS9v+eUqO+8jOacgOWlveS7jiBzdG9yZSDojrflj5bjgJFcbiovXG5leHBvcnQgY29uc3QgZ2V0U3dpdGNoZXNGcm9tR2xvYmFsID0gKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cuR2xvYmFsU3dpdGNoZXMgfHwge31cbn1cblxuLyoqIFxuICog5LuO5YWo5bGA5Y+Y6YeP55u05o6l6K6/6ZeuIEdsb2JhbENvbmZpZ3MgIOOAkOS4jeW7uuiuruS9v+eUqO+8jOacgOWlveS7jiBzdG9yZSDojrflj5bjgJFcbiovXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnc0Zyb21HbG9iYWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5HbG9iYWxDb25maWdzIHx8IHt9XG59XG5cbi8qKlxuICog5LuO5YWo5bGA5Y+Y6YeP55u05o6l6K6/6ZeuIEdsb2JhbE9yZGVyRGF0YSDjgJDkuI3lu7rorq7kvb/nlKjvvIzmnIDlpb3ku44gc3RvcmUg6I635Y+W44CRXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPcmRlckRhdGFGcm9tR2xvYmFsID0gKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cuR2xvYmFsT3JkZXJEYXRhIHx8IHt9XG59XG5cbmxldCBwcmV2Q29uZCA9IGdldFByZXZDb25kRnJvbUdsb2JhbCgpLFxuICAgIHRyYW5zYWN0aW9uSUQgPSBwcmV2Q29uZC50cmFuc2FjdGlvbklELFxuICAgIGV4dEhlYWRlciA9IHRyYW5zYWN0aW9uSUQgPyB7IHRyYW5zYWN0aW9uSUQgfSA6IHt9XG5cbi8v5rOo5YWl6aKd5aSW55qEIGV4dEhlYWRlciDkv6Hmga9cbmV4cG9ydCBjb25zdCBpbmplY3RGZXRjaEV4dEhlYWRlciA9IChleHQpID0+IHtcbiAgICBleHRIZWFkZXIgPSBPYmplY3QuYXNzaWduKHt9LCBleHRIZWFkZXIsIGV4dClcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoSnNvbnBHZXQgPSAodXJsLCBwYXJhbXMpID0+IHtcbiAgICB1cmwgPSBnZW5VcmxGcm9tUGFyYW1zKHVybCwgcGFyYW1zKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmV0Y2hKc29ucCh1cmwsIE9iamVjdC5hc3NpZ24oeyBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyB9LCBleHRIZWFkZXIpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlICYmIHJlc29sdmUoeyBkYXRhOiByZXMuanNvbigpIH0pXG4gICAgICAgICAgICB9LCByZWFzb24gPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCAmJiByZWplY3QocmVhc29uKVxuICAgICAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hHZXQgPSAodXJsLCBwYXJhbXMsIGF4aW9zRXh0ZW5kT3BzID0ge30pID0+IHtcbiAgICByZXR1cm4gZmV0Y2hHZXRXaXRoSGVhZGVycyh1cmwsIHBhcmFtcywge30sIGF4aW9zRXh0ZW5kT3BzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoR2V0V2l0aEhlYWRlcnMgPSAodXJsLCBwYXJhbXMsIGhlYWRlcnMgPSB7fSwgYXhpb3NFeHRlbmRPcHMgPSB7fSkgPT4ge1xuICAgIHVybCA9IGdlblVybEZyb21QYXJhbXModXJsLCBwYXJhbXMpXG4gICAgbGV0IG9wcyA9IHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcbiAgICAgICAgfSwgZXh0SGVhZGVyLCBoZWFkZXJzKVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKG9wcywgYXhpb3NFeHRlbmRPcHMpO1xuICAgIHJldHVybiBheGlvcy5nZXQodXJsLCBvcHMpXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3QgPSAodXJsLCBwYXJhbXMsIGF4aW9zRXh0ZW5kT3BzID0ge30pID0+IHtcbiAgICByZXR1cm4gZmV0Y2hQb3N0V2l0aEhlYWRlcnModXJsLCBwYXJhbXMsIHt9LCBheGlvc0V4dGVuZE9wcylcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUG9zdFdpdGhIZWFkZXJzID0gKHVybCwgcGFyYW1zLCBoZWFkZXJzID0ge30sIGF4aW9zRXh0ZW5kT3BzID0ge30pID0+IHtcbiAgICBsZXQgb3BzID0ge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xuICAgICAgICB9LCBleHRIZWFkZXIsIGhlYWRlcnMpXG4gICAgfTtcbiAgICBPYmplY3QuYXNzaWduKG9wcywgYXhpb3NFeHRlbmRPcHMpO1xuICAgIHJldHVybiBheGlvcy5wb3N0KHVybCwgcGFyYW1zLCBvcHMpXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RGb3JtID0gKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMsIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04J1xuICAgICAgICB9LCBleHRIZWFkZXIpXG4gICAgfSlcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XG4gICAgY29uc3RydWN0b3Ioe2ljb24gPSAnL3B1YmxpYy9pY29uL2xvZ28uc3ZnJyx0aXRsZT0n6K6w5b2V5b+r5LmQJyxib2R5PSforrDlvZXkvaDpgYfliLDnmoTlv6vkuZDvvIEnfSl7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgIGlmKHdpbmRvdy5Ob3RpZmljYXRpb24pe1xuICAgICAgICAgICAgLy/liKTmlq3lvZPliY3pobXpnaLmmK/lkKbooqvlhYHorrjlj5Hlh7rpgJrnn6VcbiAgICAgICAgICAgIGNvbnN0IHBlcm1pc3Npb24gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvblxuICAgICAgICAgICAgaWYocGVybWlzc2lvbiA9PSAnZ3JhbnRlZCcpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmeSh0aXRsZSx7Ym9keX0pXG4gICAgICAgICAgICB9ZWxzZSBpZihwZXJtaXNzaW9uID09ICdkZWZhdWx0Jyl7XG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd05vdGlmeShwYXJhbXM9e30pe1xuICAgICAgICBpZihOb3RpZmljYXRpb24ucGVybWlzc2lvbiE9J2dyYW50ZWQnKSByZXR1cm4gZmFsc2VcbiAgICAgICAgY29uc3Qge3RpdGxlPSforrDlvZXlv6vkuZAnLGJvZHk9J+iusOW9leS9oOmBh+WIsOeahOW/q+S5kO+8gScsaWNvbn0gPSBwYXJhbXM7XG4gICAgICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uKHRpdGxlLHtib2R5LGljb246aWNvbiB8fCB0aGlzLmljb24scmVub3RpZnk6dHJ1ZSx0YWc6TWF0aC5yYW5kb20oKX0pXG4gICAgfVxufSIsImltcG9ydCBzb2NrZXRDbGllbnQgZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNva2NldFNlcnZlciB7XG4gICAgY29uc3RydWN0b3Ioe2V2ZW50c30pe1xuICAgICAgICB0aGlzLmNsaWVudCA9IG5ldyBzb2NrZXRDbGllbnQoKVxuICAgICAgICBpZighdGhpcy5jbGllbnQpe1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZihldmVudHMpe1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudChldmVudHMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkRXZlbnQoZXZlbnRzKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZXZlbnRzKS5tYXAoZXZlbnQgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQub24uYXBwbHkodGhpcy5jbGllbnQsZXZlbnQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICB0aHJvdyAnYWRkIGV2ZW50cyBlcnJvcidcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbn0iLCIvLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmRcIjtcbmltcG9ydCBTaGFyZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Db2xsZWN0aW9uc1wiXG5cbi8vIGNvcmUgY29tcG9uZW50cy92aWV3c1xuXG5pbXBvcnQgU2hhcmVQYWdlIGZyb20gXCIuLi9mX3NoYXJlL2luZGV4LmpzeFwiO1xuXG5jb25zdCBkYXNoYm9hcmRSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIi92aWV3L3B1YmxpY1wiLFxuICAgIHNpZGViYXJOYW1lOiBcIuWFrOWFseWIhuS6q1wiLFxuICAgIG5hdmJhck5hbWU6IFwi5YWs5YWx5YiG5LqrXCIsXG4gICAgaWNvbjogRGFzaGJvYXJkLFxuICAgIGxvZ2luSXNSZXF1aXJlZDpmYWxzZSxcbiAgICBjb21wb25lbnQ6IFNoYXJlUGFnZVxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvdmlldy9jb2xsZWN0aW9uXCIsXG4gICAgc2lkZWJhck5hbWU6IFwi5oiR55qE5pS26JePXCIsXG4gICAgbmF2YmFyTmFtZTogXCLmiJHnmoTmlLbol49cIixcbiAgICBpY29uOiBTaGFyZUljb24sXG4gICAgbG9naW5Jc1JlcXVpcmVkOnRydWUsXG4gICAgY29tcG9uZW50OiBTaGFyZVBhZ2VcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkUm91dGVzLmZpbHRlcihyb3V0ZT0+ICghcm91dGUubG9naW5Jc1JlcXVpcmVkIHx8IChyb3V0ZS5sb2dpbklzUmVxdWlyZWQmJndpbmRvdy5fX1VTRVJfSU5GT19fLl9pZCkpKTtcbiIsImltcG9ydCBIb21lIGZyb20gXCIuLi9mX2hvbWUvaW5kZXguanN4XCI7XG5cbmNvbnN0IGluZGV4Um91dGVzID0gW3sgcGF0aDogXCIvXCIsIGNvbXBvbmVudDogSG9tZSB9XTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhSb3V0ZXM7XG4iLCJpbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1yZWR1eFwiIC8vQ29ubmVjdGVkUm91dGVyIGFzIFJvdXRlcixcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCJcbmltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gXCJoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5XCJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCJcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiXG5cbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KClcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSldXG5cbi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbi8vICAgICBtaWRkbGV3YXJlLnB1c2goY3JlYXRlTG9nZ2VyKHsgY29sbGFwc2VkOiB0cnVlIH0pKVxuLy8gfVxuXG5sZXQgZGV2VG9vbCA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuXG5sZXQgcmVzdG9yZVBlcnNpc3QgPSAoc3RvcmUsIGJsYWNrbGlzdCwgd2hpdGVsaXN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcGVyc2lzdFN0b3JlKFxuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICB7IGJsYWNrbGlzdDogYmxhY2tsaXN0LCB3aGl0ZWxpc3Q6IHdoaXRlbGlzdCB9LFxuICAgICAgICAgICAgKCkgPT4geyB9XG4gICAgICAgIClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInBlcnNpc3Qgc3RvcmUgZXJyb3IhXCIsIGUpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGV2VG9vbDogZGV2VG9vbCxcbiAgICByZXN0b3JlUGVyc2lzdDogcmVzdG9yZVBlcnNpc3Rcbn1cbiIsIlxuXG5cblxuY29uc3Qgc3RvcmVMaXN0ID0gKCgpPT57XG4gICAgbGV0IGNhY2hlID0ge307XG5cbiAgICBmdW5jdGlvbiBpbXBvcnRBbGwgKHIpIHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaChrZXkgPT4gY2FjaGVba2V5XSA9IHIoa2V5KS5kZWZhdWx0KTtcbiAgICB9XG5cbiAgICBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi8nLHRydWUsL2ZfLipcXC9zdG9yZXM/XFwvaW5kZXguanN4LykpXG5cbiAgICByZXR1cm4gIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCxPYmplY3QudmFsdWVzKGNhY2hlKSlcbn0pKClcblxuY29uc3QgcmVkdWNlckxpc3QgPSAoKCk9PntcbiAgICBsZXQgY2FjaGUgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGltcG9ydEFsbCAocikge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKGtleSA9PiBjYWNoZVtrZXldID0gcihrZXkpLmRlZmF1bHQpO1xuICAgIH1cblxuICAgIGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uLycsdHJ1ZSwvZl8uKlxcL3JlZHVjZXJzP1xcL2luZGV4LmpzeC8pKVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCxPYmplY3QudmFsdWVzKGNhY2hlKSlcbn0pKClcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgtaW1tdXRhYmxlJ1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5pbXBvcnQgYmFzZSBmcm9tICcuL2Jhc2UuanN4J1xuXG5jb25zdCBkZWZhdWx0UmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMocmVkdWNlckxpc3QpO1xuXG5jb25zdCBkZWZhdWx0U3RvcmUgPSBJbW11dGFibGUuZnJvbUpTKHN0b3JlTGlzdCk7XG5cblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIGRlZmF1bHRSZWR1Y2VycyxcbiAgICBkZWZhdWx0U3RvcmUsXG4gICAgYmFzZS5kZXZUb29sXG4pXG5leHBvcnQgZGVmYXVsdCBzdG9yZSIsImNvbnN0IEVNQUlMX1ZBTElEQVRFID0gdmFsdWUgPT4gL14oW0EtWmEtejAtOV9cXC1cXC5dKStcXEAoW0EtWmEtejAtOV9cXC1cXC5dKStcXC4oW0EtWmEtel17Miw0fSkkLy50ZXN0KHZhbHVlKVxuY29uc3QgUEhPTkVfVkFMSURBVEUgPSB2YWx1ZSA9PiAvXlsxXVszLTldWzAtOV17OX0kLy50ZXN0KHZhbHVlKVxuY29uc3QgUEFTU1dPUkRfVkFMSURBVEUgPSB2YWx1ZSA9PiAvXi4qKD89Lns3LH0pKD89LipcXGQpKD89LipbYS16XSkoPz0uKlshQCMkJV4mKj8gXSkuKiQvLnRlc3QodmFsdWUpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVmFsaWRhdGUge1xuICAgIHN0YXRpYyBpc0VtYWlsKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIEVNQUlMX1ZBTElEQVRFKHZhbHVlKVxuICAgIH1cbiAgICBzdGF0aWMgaXNQaG9uZSh2YWx1ZSl7XG4gICAgICAgIHJldHVybiBQSE9ORV9WQUxJREFURSh2YWx1ZSlcbiAgICB9XG4gICAgc3RhdGljIGlzUGFzc3dvcmQodmFsdWUpe1xuICAgICAgICByZXR1cm4gUEFTU1dPUkRfVkFMSURBVEUodmFsdWUpXG4gICAgfVxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=