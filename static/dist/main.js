(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
      height: "40px",
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
                { color: 'textSecondary' },
                info.author
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { item: true },
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
            dispatch(F_SHARE_INIT_DATA_ACTION(json.res));
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
        (0, _http.fetchGet)('api/share/delete/category/' + category).then(function (res) {
            return res.data;
        }).then(function (json) {
            dispatch(F_SHARE_DELETE_SHARE_CATEGORY(category));
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
                  _react2.default.createElement(
                    _core.Tooltip,
                    { title: "\u6DFB\u52A0\u5185\u5BB9" },
                    _react2.default.createElement(
                      _core.Button,
                      { variant: "fab", color: "inherit", "aria-label": "Add", className: classes.button, onClick: function onClick() {
                          _this2.props.openAddItemDialog(category._id);
                        } },
                      _react2.default.createElement(_Add2.default, null)
                    )
                  ),
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
        _react2.default.createElement(
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
        )
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
        label: '公共分享',
        checked: true,
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
        publicFlag: this.state.switchLabels[0].checked
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
            switchLabel.label = switchLabel.checked ? '公共分享' : '我的收藏';
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

var _socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

var _socket2 = _interopRequireDefault(_socket);

__webpack_require__(/*! ./assets/css/material-dashboard-react.css */ "./static/assets/css/material-dashboard-react.css");

var _index = __webpack_require__(/*! ./store/index.jsx */ "./static/store/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./route/index.jsx */ "./static/route/index.jsx");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)();
socket.on('connect', function () {
  console.log('connect');
});
socket.on('share-message', function (data) {
  console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2Nzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuY3NzIiwid2VicGFjazovLy8uL3N0YXRpYyBzeW5jIGZfLipcXC9yZWR1Y2VycyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMgc3luYyBmXy4qXFwvc3RvcmVzIiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvY3NzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5jc3M/ZWJkZiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2ltZy9yZWFjdGxvZ28ucG5nIiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvaW1nL3NpZGViYXItMi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9idXR0b25TdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY2FyZEJvZHlTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY2FyZEZvb3RlclN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkSGVhZGVyU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2NhcmRJY29uU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2NhcmRTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY3VzdG9tSW5wdXRTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY3VzdG9tVGFic1N0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9kaWFsb2dBY3Rpb25TdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZGlhbG9nQ29udGVudFN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9kaWFsb2dTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZGlhbG9nVGl0bGVTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZm9vdGVyU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2hlYWRlckxpbmtzU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2hlYWRlclN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9zaWRlYmFyU3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL3NuYWNrYmFyQ29udGVudFN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy90eXBvZ3JhcGh5U3R5bGUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9kcm9wZG93blN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvbGF5b3V0cy9kYXNoYm9hcmRTdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L3ZpZXdzL2Rhc2hib2FyZFN0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vYWN0aW9ucy9Vc2VyL3VzZXJJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZENvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0N1c3RvbVRhYnMvQ3VzdG9tVGFicy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ0FjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ0NvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dUaXRsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTGlua3MuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL1NlbGVjdGlvbi9zd2l0Y2hMYWJlbHMuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfY29tbW9uL2NvbXBvbmVudHMvU25hY2tiYXIvU25hY2tiYXIuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL1R5cG9ncmFwaHkvRGFuZ2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9Vc2VyL3VzZXIuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL1VzZXIvdXNlckluZm8uanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb21wb25lbnRzL1VzZXIvdXNlckxvZ2luLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29tcG9uZW50cy9Vc2VyL3VzZXJNb2RpZnkuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb25zdGFudHMvYXBpLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9jb21tb24vY29udGFpbmVycy9Vc2VyL3VzZXJDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2NvbW1vbi9jb250YWluZXJzL2hlYWRlci9oZWFkZXJMaW5rc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9ob21lL2NvbnN0YW50L2FjdGlvblR5cGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9ob21lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9ob21lL3JlZHVjZXIvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ZfaG9tZS9yZWR1Y2VyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9ob21lL3N0b3JlL2hvbWUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2hvbWUvc3RvcmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX2hvbWUvdmlldy9ob21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9hY3Rpb25zL3NoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9jb21wb25lbnRzL3NoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9jb21wb25lbnRzL3NoYXJlQ2F0ZWdvcnkuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX3NoYXJlL2NvbXBvbmVudHMvc2hhcmVJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9jb25zdGFudHMvYXBpLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9jb25zdGFudHMvc2hhcmUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX3NoYXJlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS9yZWR1Y2Vycy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvcmVkdWNlcnMvc2hhcmUuanN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9mX3NoYXJlL3N0b3Jlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Zfc2hhcmUvc3RvcmVzL3NoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZl9zaGFyZS92aWV3cy9zaGFyZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9wdWJsaWMvaHR0cC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvcm91dGUvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3JvdXRlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvc3RvcmUvYmFzZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3N0b3JlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi91dGlsL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29udGFpbmVyIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJib3hTaGFkb3ciLCJjYXJkIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImJhY2tncm91bmQiLCJkZWZhdWx0Rm9udCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInByaW1hcnlDb2xvciIsIndhcm5pbmdDb2xvciIsImRhbmdlckNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiaW5mb0NvbG9yIiwicm9zZUNvbG9yIiwiZ3JheUNvbG9yIiwicHJpbWFyeUJveFNoYWRvdyIsImluZm9Cb3hTaGFkb3ciLCJzdWNjZXNzQm94U2hhZG93Iiwid2FybmluZ0JveFNoYWRvdyIsImRhbmdlckJveFNoYWRvdyIsInJvc2VCb3hTaGFkb3ciLCJ3YXJuaW5nQ2FyZEhlYWRlciIsInN1Y2Nlc3NDYXJkSGVhZGVyIiwiZGFuZ2VyQ2FyZEhlYWRlciIsImluZm9DYXJkSGVhZGVyIiwicHJpbWFyeUNhcmRIZWFkZXIiLCJyb3NlQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwicGFkZGluZ1RvcCIsImJvcmRlclRvcCIsImhlaWdodCIsImNhcmRIZWFkZXIiLCJwYWRkaW5nIiwiZGVmYXVsdEJveFNoYWRvdyIsImJvcmRlciIsInRpdGxlIiwidGV4dERlY29yYXRpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtaW5IZWlnaHQiLCJjYXJkVGl0bGUiLCJjYXJkU3VidGl0bGUiLCJjYXJkTGluayIsImJ1dHRvblN0eWxlIiwiYnV0dG9uIiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJsZXR0ZXJTcGFjaW5nIiwid2lsbENoYW5nZSIsInRleHRBbGlnbiIsIndoaXRlU3BhY2UiLCJ2ZXJ0aWNhbEFsaWduIiwidG91Y2hBY3Rpb24iLCJjdXJzb3IiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJsZWZ0Iiwid2hpdGUiLCJyb3NlIiwicHJpbWFyeSIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhbmdlciIsInNpbXBsZSIsInRyYW5zcGFyZW50IiwiZGlzYWJsZWQiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImxnIiwic20iLCJyb3VuZCIsImJsb2NrIiwibGluayIsImp1c3RJY29uIiwiY2FyZEJvZHlTdHlsZSIsImNhcmRCb2R5IiwiZmxleCIsIldlYmtpdEJveEZsZXgiLCJjYXJkQm9keVBsYWluIiwiY2FyZEJvZHlQcm9maWxlIiwiY2FyZEZvb3RlclN0eWxlIiwiY2FyZEZvb3RlciIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNhcmRGb290ZXJQcm9maWxlIiwiY2FyZEZvb3RlclBsYWluIiwiY2FyZEZvb3RlclN0YXRzIiwiY2FyZEZvb3RlckNoYXJ0IiwiY2FyZEhlYWRlclN0eWxlIiwiYm9yZGVyQm90dG9tIiwiekluZGV4Iiwib3ZlcmZsb3ciLCJjYXJkSGVhZGVyUGxhaW4iLCJjYXJkSGVhZGVyU3RhdHMiLCJjYXJkSGVhZGVySWNvbiIsImNhcmRJY29uU3R5bGUiLCJjYXJkSWNvbiIsImZsb2F0IiwiY2FyZFN0eWxlIiwiZmxleERpcmVjdGlvbiIsIndvcmRXcmFwIiwiY2FyZFBsYWluIiwiY2FyZFByb2ZpbGUiLCJjYXJkQ2hhcnQiLCJjdXN0b21JbnB1dFN0eWxlIiwidW5kZXJsaW5lIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInVuZGVybGluZUVycm9yIiwidW5kZXJsaW5lU3VjY2VzcyIsImxhYmVsUm9vdCIsImxhYmVsUm9vdEVycm9yIiwibGFiZWxSb290U3VjY2VzcyIsImZlZWRiYWNrIiwicmlnaHQiLCJmb3JtQ29udHJvbCIsInBhZGRpbmdCb3R0b20iLCJjdXN0b21UYWJzU3R5bGUiLCJjYXJkVGl0bGVSVEwiLCJkaXNwbGF5Tm9uZSIsInRhYnNSb290Iiwib3ZlcmZsb3dYIiwidGFiUm9vdEJ1dHRvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwidGFiTGFiZWxDb250YWluZXIiLCJ0YWJMYWJlbCIsInRhYlNlbGVjdGVkIiwidGFiV3JhcHBlciIsImRpYWxvZ1RpdGxlU3R5bGUiLCJyb290IiwiZGlhbG9nQ29udGVudFN0eWxlIiwiZGlhbG9nU3R5bGUiLCJwYXBlciIsImZvb3RlclN0eWxlIiwiZm9vdGVyIiwiYm90dG9tIiwiYSIsImxpc3QiLCJpbmxpbmVCbG9jayIsImhlYWRlckxpbmtzU3R5bGUiLCJ0aGVtZSIsInNlYXJjaCIsImJyZWFrcG9pbnRzIiwiZG93biIsImxpbmtUZXh0IiwiYnV0dG9uTGluayIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaEljb24iLCJub3RpZmljYXRpb25zIiwidXAiLCJtYW5hZ2VyIiwic2VhcmNoV3JhcHBlciIsImhlYWRlclN0eWxlIiwiYXBwQmFyIiwiYXBwUmVzcG9uc2l2ZSIsInNpZGViYXJTdHlsZSIsImRyYXdlclBhcGVyIiwidmlzaWJpbGl0eSIsIm92ZXJmbG93WSIsImxvZ28iLCJjb250ZW50IiwibG9nb0xpbmsiLCJsb2dvSW1hZ2UiLCJpbWciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImxpc3RTdHlsZSIsIml0ZW0iLCJpdGVtTGluayIsIml0ZW1JY29uIiwiaXRlbVRleHQiLCJ3aGl0ZUZvbnQiLCJwdXJwbGUiLCJibHVlIiwiZ3JlZW4iLCJvcmFuZ2UiLCJyZWQiLCJzaWRlYmFyV3JhcHBlciIsIm92ZXJmbG93U2Nyb2xsaW5nIiwiYWN0aXZlUHJvIiwic25hY2tiYXJDb250ZW50U3R5bGUiLCJmbGV4V3JhcCIsInRvcDIwIiwidG9wNDAiLCJtZXNzYWdlIiwiY2xvc2UiLCJpY29uQnV0dG9uIiwiaWNvbiIsImluZm9JY29uIiwic3VjY2Vzc0ljb24iLCJ3YXJuaW5nSWNvbiIsImRhbmdlckljb24iLCJwcmltYXJ5SWNvbiIsInJvc2VJY29uIiwiaWNvbk1lc3NhZ2UiLCJ0eXBvZ3JhcGh5U3R5bGUiLCJkZWZhdWx0Rm9udFN0eWxlIiwiZGVmYXVsdEhlYWRlck1hcmdpbnMiLCJxdW90ZSIsImJvcmRlckxlZnQiLCJxdW90ZVRleHQiLCJmb250U3R5bGUiLCJxdW90ZUF1dGhvciIsIm11dGVkVGV4dCIsInByaW1hcnlUZXh0IiwiaW5mb1RleHQiLCJzdWNjZXNzVGV4dCIsIndhcm5pbmdUZXh0IiwiZGFuZ2VyVGV4dCIsImRyb3Bkb3duU3R5bGUiLCJsaW5rcyIsInBvcHBlckNsb3NlIiwicG9vcGVyUmVzcG9uc2l2ZSIsIldlYmtpdEJveFNoYWRvdyIsInBvb3Blck5hdiIsImRyb3Bkb3duIiwiV2Via2l0QmFja2dyb3VuZENsaXAiLCJiYWNrZ3JvdW5kQ2xpcCIsImRyb3Bkb3duSXRlbSIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJjbGVhciIsImFwcFN0eWxlIiwid3JhcHBlciIsIm1haW5QYW5lbCIsIm1hcCIsImRhc2hib2FyZFN0eWxlIiwidXBBcnJvd0NhcmRDYXRlZ29yeSIsInN0YXRzIiwiY2FyZENhdGVnb3J5IiwiY2FyZENhdGVnb3J5V2hpdGUiLCJjYXJkVGl0bGVXaGl0ZSIsInNwYWNpbmciLCJ1bml0Iiwic2l6ZVNtYWxsIiwidHlwZXMiLCJGX0NPTU1PTl9GRVRDSF9MT0dJTl9VU0VSX0FDVElPTiIsInBhcmFtcyIsImRpc3BhdGNoIiwiQVBJIiwibG9naW5Vc2VyIiwidGhlbiIsInJlcyIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJGX0NPTU1PTl9GRVRDSF9BRERfVVNFUl9BQ1RJT04iLCJjYWxsYmFjayIsImFkZFVzZXIiLCJ0eXBlIiwiRl9DT01NT05fRkVUQ0hfTU9ESUZZX1VTRVJfQUNUSU9OIiwibW9kaWZ5VXNlciIsIkZfQ09NTU9OX0ZFVENIX0xPR09VVF9VU0VSX0FDVElPTiIsImxvZ291dFVzZXIiLCJDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwbGFpbiIsInByb2ZpbGUiLCJjaGFydCIsInJlc3QiLCJjYXJkQ2xhc3NlcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIiwiQ2FyZEJvZHkiLCJjYXJkQm9keUNsYXNzZXMiLCJzdHlsZXMiLCJ0ZXh0T3ZlcmZsb3ciLCJpbWdib3giLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiQ29tcGxleEdyaWQiLCJvbk9wZW5FZGl0RGlhbG9nIiwiZGVsZXRlSXRlbSIsInRhcmdldCIsImFkZCIsImF1dGhvciIsImV2IiwibmF0aXZlRXZlbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJkZWZhdWx0UHJldmVudGVkIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDYXJkRm9vdGVyIiwiY2FyZEZvb3RlckNsYXNzZXMiLCJDYXJkSGVhZGVyIiwiY2FyZEhlYWRlckNsYXNzZXMiLCJvbmVPZiIsIkNhcmRJY29uIiwiY2FyZEljb25DbGFzc2VzIiwiUmVndWxhckJ1dHRvbiIsInNpemUiLCJtdWlDbGFzc2VzIiwiYnRuQ2xhc3NlcyIsIkN1c3RvbUlucHV0IiwiZm9ybUNvbnRyb2xQcm9wcyIsImxhYmVsVGV4dCIsImlkIiwibGFiZWxQcm9wcyIsImlucHV0UHJvcHMiLCJlcnJvciIsImxhYmVsQ2xhc3NlcyIsInVuZGVybGluZUNsYXNzZXMiLCJub2RlIiwiQ3VzdG9tVGFicyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwiaGVhZGVyQ29sb3IiLCJwbGFpblRhYnMiLCJ0YWJzIiwicnRsQWN0aXZlIiwiaW5kaWNhdG9yIiwic2Nyb2xsQnV0dG9ucyIsInByb3AiLCJrZXkiLCJ0YWJJY29uIiwibGFiZWxDb250YWluZXIiLCJsYWJlbCIsInNlbGVjdGVkIiwidGFiTmFtZSIsInRhYkNvbnRlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImFycmF5T2YiLCJzaGFwZSIsImZ1bmMiLCJEaWFsb2dDb21wb25lbnQiLCJvcGVuIiwiRGlhbG9nQWN0aW9uQ29tcG9uZW50IiwiZGlhbG9nQWN0aW9uU3R5bGUiLCJEaWFsb2dDb250ZW50Q29tcG9uZW50IiwiRGlhbG9nVGl0bGVDb21wb25lbnQiLCJGb290ZXIiLCJEYXRlIiwiZ2V0WWVhciIsInN0eWxlIiwiZ3JpZCIsImFkZEJ1dHRvbiIsIkdyaWRDb250YWluZXIiLCJHcmlkSXRlbSIsIkhlYWRlciIsIm1ha2VCcmFuZCIsIm5hbWUiLCJyb3V0ZXMiLCJwYXRoIiwicGF0aG5hbWUiLCJuYXZiYXJOYW1lIiwiYXBwQmFyQ2xhc3NlcyIsImhhbmRsZURyYXdlclRvZ2dsZSIsIkhlYWRlckxpbmtzIiwib3Blbk1lc3NhZ2UiLCJvcGVuUGVyc29uIiwib3BlblVzZXJJbmZvIiwiaGFuZGxlTWVzc2FnZVRvZ2dsZSIsImhhbmRsZVBlcnNvblRvZ2dsZSIsIl9fVVNFUl9JTkZPX18iLCJfaWQiLCJoYW5kbGVQZXJzb25DbG9zZSIsInBlcnNvbkVsIiwiY29udGFpbnMiLCJoYW5kbGVNZXNzYWdlQ2xvc2UiLCJtZXNzYWdlRWwiLCJmZXRjaExvZ291dFVzZXIiLCJwbGFjZWhvbGRlciIsImlubmVyV2lkdGgiLCJpY29ucyIsImhhbmRsZUNsaWNrIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwib25Nb2RpZnlVc2VyIiwib25Mb2dvdXQiLCJzd2l0Y2hTdHlsZSIsImNvbG9yUHJpbWFyeSIsImNoZWNrZWQiLCJTd2l0Y2hMYWJlbHMiLCJzd2l0Y2hMYWJlbHMiLCJzd2l0Y2hsYWJlbCIsImluZGV4Iiwib25DaGFuZ2UiLCJTaWRlYmFyIiwiYWN0aXZlUm91dGUiLCJyb3V0ZU5hbWUiLCJpbmRleE9mIiwibG9nb1RleHQiLCJyZWRpcmVjdCIsImxpc3RJdGVtQ2xhc3NlcyIsIndoaXRlRm9udENsYXNzZXMiLCJzaWRlYmFyTmFtZSIsImJyYW5kIiwia2VlcE1vdW50ZWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJTbmFja2JhciIsInBsYWNlIiwiYXV0b0hpZGVEdXJhdGlvbiIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJtZXNzYWdlQ2xhc3NlcyIsImNsb3NlTm90aWZpY2F0aW9uIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiRGFuZ2VyIiwiSW5wdXRWYWx1ZSIsImZpbGUiLCJhY2NlcHQiLCJVc2VySW5mbyIsIm9uTmFtZUNoYW5nZSIsImJpbmQiLCJvbk5pY2tuYW1lQ2hhbmdlIiwib25Db250YWN0Q2hhbmdlIiwib25BdmF0b3JDaGFuZ2UiLCJvblBhc3N3b3JkQ2hhbmdlIiwic2V0RmllbGRWYWx1ZSIsIm9uSXRlbUNvbmZpcm0iLCJvbkl0ZW1DYW5jZWwiLCJuaWNrbmFtZSIsImF2YXRvciIsImNvbnRhY3QiLCJwYXNzd29yZCIsInRlc3QiLCJ2YWxpZGF0ZSIsImlzRW1haWwiLCJpc1Bob25lIiwiZmlsZXMiLCJpc1Bhc3N3b3JkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImVuY3J5cHQiLCJKU0VuY3J5cHQiLCJzZXRQdWJsaWNLZXkiLCJfX1BVQkxJQ19LRVlfXyIsIk9iamVjdCIsImVudHJpZXMiLCJhcHBlbmQiLCJhcHBseSIsInNldEZpZWxkRXJyb3IiLCJmaWVsZCIsImZldGNoUmVnaXN0ZXJVc2VyIiwib25DYW5jZWwiLCJ1c2VySW5mbyIsImtleXMiLCJmZXRjaExvZ2luVXNlciIsImVtYWlsIiwicGhvbmUiLCJmZXRjaE1vZGlmeVVzZXIiLCJBUElfUk9PVCIsInVzZXJBY3Rpb24iLCJVc2VySW5mb0NvbnRhaW5lciIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkhlYWRlckxpbmtzQ29udGFpbmVyIiwiVVBEQVRFX0VYVEVORF9JTkZPIiwiSG9tZSIsInJlZHVjZXJNYXAiLCJNYXAiLCJzZXQiLCJoYXMiLCJnZXQiLCJob21lIiwiZGVmYXVsdFN0b3JlIiwic3dpdGNoUm91dGVzIiwic2hhcmVSb3V0ZXMiLCJ0byIsImNvbXBvbmVudCIsIkFwcCIsIm1vYmlsZU9wZW4iLCJyZXNpemVGdW5jdGlvbiIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwicHMiLCJQZXJmZWN0U2Nyb2xsYmFyIiwicmVmcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGlzdG9yeSIsInNjcm9sbFRvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJGX1NIQVJFX1NBVkVfU0hBUkVfQ0FURUdPUlkiLCJjYXRlZ29yeSIsIlNBVkVfU0hBUkVfQ0FURUdPUlkiLCJGX1NIQVJFX0RFTEVURV9TSEFSRV9DQVRFR09SWSIsIkRFTEVURV9TSEFSRV9DQVRFR09SWSIsIkZfU0hBUkVfSU5JVF9EQVRBX0FDVElPTiIsImNhdGVnb3JpZXMiLCJJTklUX0RBVEEiLCJGX1NIQVJFX1NBVkVfU0hBUkVfSVRFTSIsIlNBVkVfU0hBUkVfSVRFTSIsIkZfU0hBUkVfREVMRVRFX1NIQVJFX0lURU0iLCJERUxFVEVfU0hBUkVfSVRFTSIsIkZfU0hBUkVfRkVUQ0hfU0hBUkVfSU5JVF9BQ1RJT04iLCJwYWdlIiwiZ2V0U2hhcmVMaXN0IiwiRl9TSEFSRV9GRVRDSF9TQVZFX1NIQVJFX0NBVEVHT1JZIiwicmVzb2x2ZSIsInJlamVjdCIsInNhdmVTaGFyZUNhdGVnb3J5IiwicHVibGljRmxhZyIsImNhdGNoIiwiRl9TSEFSRV9GRVRDSF9ERUxFVEVfU0hBUkVfQ0FURUdPUlkiLCJGX1NIQVJFX0ZFVENIX1NBVkVfU0hBUkVfSVRFTSIsIkZfU0hBUkVfRkVUQ0hfREVMRVRFX1NIQVJFX0lURU0iLCJTaGFyZSIsImhhbmRsZUNoYW5nZUluZGV4Iiwib3BlbkVkaXRJdGVtRGlhbG9nIiwibmV4dFByb3BzIiwic2hhcmUiLCJvcGVuQWRkSXRlbURpYWxvZyIsIm9wZW5FZGl0Q2F0ZWdvcnlEaWFsb2ciLCJkZWxldGVDYXRlZ29yeSIsImxlbmd0aCIsIm9wZW5BZGRDYXRlZ29yeURpYWxvZyIsIlNoYXJlQ2F0ZWdvcnkiLCJvbkNhdGVnb3J5Q2hhbmdlIiwib25DYXRlZ29yeUNvbmZpcm0iLCJvbkNoYW5nZVN3aXRjaExhYmVsIiwic2F2ZUNhdGVnb3J5IiwiZGVmYXVsdFZhbHVlIiwiY2hhbmdlU3dpdGNoSW5kZXgiLCJzd2l0Y2hMYWJlbCIsImN1c3RvbUlucHV0IiwiU2hhcmVJdGVtIiwib25UaXRsZUNoYW5nZSIsIm9uTGlua0NoYW5nZSIsIm9uRGVzY3JpcHRpb25DaGFuZ2UiLCJvbkljb25DaGFuZ2UiLCJzYXZlSXRlbSIsImNhbmNlbEl0ZW0iLCJTaGFyZVBhZ2UiLCJ1cGRhdGUiLCJJbW11dGFibGUiLCJmcm9tSlMiLCJjb25jYXQiLCJzb21lIiwicHVzaCIsImZpbHRlciIsInNoYXJlQWN0aW9uIiwiU2hhcmVDb250YWluZXIiLCJjYXRlZ29yeURpYWxvZyIsIml0ZW1EaWFsb2ciLCJjYXRlZ29yeU5hbWUiLCJjYXRlZ29yeVRpdGxlIiwiY2F0ZWdvcnlJZCIsInNuYWNrYmFyIiwiUHJvbWlzZSIsImZldGNoU2F2ZUNhdGVnb3J5IiwibWF0Y2giLCJjb25zb2xlIiwiZmV0Y2hEZWxldGVDYXRlZ29yeSIsImZldGNoU2F2ZUl0ZW0iLCJmZXRjaERlbGV0ZUl0ZW0iLCJmZXRjaEluaXRTaGFyZUxpc3QiLCJzb2NrZXQiLCJvbiIsImxvZyIsImhpc3QiLCJSZWFjdERPTSIsInJlbmRlciIsInN0b3JlIiwiaW5kZXhSb3V0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXhpb3MiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiaGVhZGVycyIsImFwcE5hbWUiLCJyIiwiTWF0aCIsInJhbmRvbSIsInVybCIsImluY2x1ZGVzIiwicmVzcG9uc2UiLCJxdWVyeVBhcmFtcyIsImVuY29kZVVSSUNvbXBvbmVudCIsImsiLCJqb2luIiwiZ2VuVXJsRnJvbVBhcmFtcyIsImdldFByZXZDb25kRnJvbUdsb2JhbCIsIkdsb2JhbFNlYXJjaENyaXRlcmlhIiwiZ2V0U3dpdGNoZXNGcm9tR2xvYmFsIiwiR2xvYmFsU3dpdGNoZXMiLCJnZXRDb25maWdzRnJvbUdsb2JhbCIsIkdsb2JhbENvbmZpZ3MiLCJnZXRPcmRlckRhdGFGcm9tR2xvYmFsIiwiR2xvYmFsT3JkZXJEYXRhIiwicHJldkNvbmQiLCJ0cmFuc2FjdGlvbklEIiwiZXh0SGVhZGVyIiwiaW5qZWN0RmV0Y2hFeHRIZWFkZXIiLCJleHQiLCJhc3NpZ24iLCJmZXRjaEpzb25wR2V0IiwiZmV0Y2hKc29ucCIsImNyZWRlbnRpYWxzIiwicmVhc29uIiwiZmV0Y2hHZXQiLCJheGlvc0V4dGVuZE9wcyIsImZldGNoR2V0V2l0aEhlYWRlcnMiLCJvcHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJmZXRjaFBvc3QiLCJmZXRjaFBvc3RXaXRoSGVhZGVycyIsInBvc3QiLCJmZXRjaFBvc3RGb3JtIiwiZGFzaGJvYXJkUm91dGVzIiwiRGFzaGJvYXJkIiwibG9naW5Jc1JlcXVpcmVkIiwiU2hhcmVJY29uIiwicm91dGUiLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJkZXZUb29sIiwiYXBwbHlNaWRkbGV3YXJlIiwicmVzdG9yZVBlcnNpc3QiLCJibGFja2xpc3QiLCJ3aGl0ZWxpc3QiLCJFcnJvciIsInN0b3JlTGlzdCIsImNhY2hlIiwiaW1wb3J0QWxsIiwiZm9yRWFjaCIsImRlZmF1bHQiLCJyZXF1aXJlIiwidmFsdWVzIiwicmVkdWNlckxpc3QiLCJkZWZhdWx0UmVkdWNlcnMiLCJiYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGdxQkFBZ3FCLHVDQUF1Qyx3QkFBd0IsNEJBQTRCLEdBQUcsdUdBQXVHLHVDQUF1QyxHQUFHLG9DQUFvQyxvQ0FBb0Msc0NBQXNDLGlDQUFpQyw4QkFBOEIsbUNBQW1DLDBDQUEwQyxnQ0FBZ0Msa0NBQWtDLHVCQUF1Qix5QkFBeUIsR0FBRyxlQUFlLHNDQUFzQyxHQUFHLHVEQUF1RCxxQkFBcUIsMkJBQTJCLHdCQUF3QiwyQkFBMkIsNEJBQTRCLG9CQUFvQixHQUFHLGVBQWUsK0JBQStCLHFCQUFxQixHQUFHLFVBQVUsMENBQTBDLHlDQUF5QyxHQUFHLFFBQVEsZ0NBQWdDLHFCQUFxQixnQkFBZ0Is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LEtBQWQsQ0FBb0IsSUFBcEIsRUFBeUJILE9BQU9rTSxNQUFQLENBQWNMLEtBQWQsQ0FBekIsQ0FBUDtBQUNILENBVm1CLEVBQXBCOztBQWlCQSxJQUFNTyxrQkFBa0IscUNBQWdCRCxXQUFoQixDQUF4Qjs7QUFFQSxJQUFNdkssZUFBZXNFLG9CQUFVQyxNQUFWLENBQWlCeUYsU0FBakIsQ0FBckI7O0FBSUEsSUFBTTlELFFBQVEsd0JBQ1ZzRSxlQURVLEVBRVZ4SyxZQUZVLEVBR1Z5SyxlQUFLZixPQUhLLENBQWQ7a0JBS2V4RCxLOzs7Ozs7Ozs7OztBQzVDZixzRkFBc0YsSUFBSTtBQUMxRixnREFBZ0QsRUFBRTtBQUNsRCw0Q0FBNEMsR0FBRzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ2RBLGUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxuXFxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAqIE1hdGVyaWFsIERhc2hib2FyZCBSZWFjdCAtIHYxLjUuMCBiYXNlZCBvbiBNYXRlcmlhbCBEYXNoYm9hcmQgLSB2MS4yLjBcXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFxuICogUHJvZHVjdCBQYWdlOiBodHRwOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3RcXG4gKiBDb3B5cmlnaHQgMjAxOCBDcmVhdGl2ZSBUaW0gKGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxcblxcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cXG5cXG4gKi9cXG4uY3QtZ3JpZCB7XFxuICAgIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMnB4O1xcbn1cXG5cXG4uY3Qtc2VyaWVzLWEgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUsIC5jdC1zZXJpZXMtYSAuY3QtYmFyLCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcXG4gICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbi5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LWVuZCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LXN0YXJ0O1xcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGZsZXgtc3RhcnQ7XFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtYW5jaG9yOiBzdGFydDtcXG59XFxuXFxuLmN0LWxhYmVsIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLmN0LWNoYXJ0LWxpbmUgLmN0LWxhYmVsLCAuY3QtY2hhcnQtYmFyIC5jdC1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jdC1sYWJlbCB7XFxuICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbmh0bWwgKiB7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgY29sb3I6ICMzQzQ4NTg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG5ibG9ja3F1b3RlIGZvb3RlcjpiZWZvcmUsIGJsb2NrcXVvdGUgc21hbGw6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ1xcXFwyMDE0ICAgXFxcXEEwJztcXG59XFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1ZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyLjRlbTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuODI1ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweDtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuaDYge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGNvbG9yOiAjM0M0ODU4O1xcbn1cXG5cXG5ibG9ja3F1b3RlIHAge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogIzljMjdiMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyLCBhOmZvY3VzIHtcXG4gICAgY29sb3I6ICM4OTIyOWI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuKiB7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuKjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7XFxufVxcblxcbmE6Zm9jdXMsIGE6YWN0aXZlLFxcbmJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cywgYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbnNlbGVjdDo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl0gPiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzowIDAgMCA2MHB4IHdoaXRlICBpbnNldDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjODc4Nzg3O1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIxcHg7XFxufVxcblxcbm91dHB1dCB7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NztcXG4gICAgY29sb3I6ICNBQUFBQUE7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuZm9vdGVyIHVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHVsIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5mb290ZXIgdWwgbGkgYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5mb290ZXIgdWwgbGkgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAgIGJvZHksXFxuICAgIGh0bWwge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgICNib2R5Q2xpY2sge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogYXV0bztcXG4gICAgICAgIHJpZ2h0OiAyNjBweDtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgei1pbmRleDogOTk5OTtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZl9ob21lL3JlZHVjZXIvaW5kZXguanN4XCI6IFwiLi9zdGF0aWMvZl9ob21lL3JlZHVjZXIvaW5kZXguanN4XCIsXG5cdFwiLi9mX3NoYXJlL3JlZHVjZXJzL2luZGV4LmpzeFwiOiBcIi4vc3RhdGljL2Zfc2hhcmUvcmVkdWNlcnMvaW5kZXguanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zdGF0aWMgc3luYyByZWN1cnNpdmUgZl8uKlxcXFwvcmVkdWNlcnM/XFxcXC9pbmRleC5qc3hcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZl9ob21lL3N0b3JlL2luZGV4LmpzeFwiOiBcIi4vc3RhdGljL2ZfaG9tZS9zdG9yZS9pbmRleC5qc3hcIixcblx0XCIuL2Zfc2hhcmUvc3RvcmVzL2luZGV4LmpzeFwiOiBcIi4vc3RhdGljL2Zfc2hhcmUvc3RvcmVzL2luZGV4LmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3RhdGljIHN5bmMgcmVjdXJzaXZlIGZfLipcXFxcL3N0b3Jlcz9cXFxcL2luZGV4LmpzeFwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVVBQUFBRGlDQU1BQUFBSTdlN0pBQUFDL1ZCTVZFVUFBQUJoMnZzQS8vK0EvLzloMnZ0aDJ2dUF2LzlWMWY5aDJ2dFYvLzl0Mi85ZzIveGgydnRpMnZoaDJ2dGgydnRoMnZ0ZzIvdGgydnRoMnZ0ZjNQcGgydnRtNXY5VjQvOWcyZnhnMmZ4ZDBmOWgydnRrM3Y5ZTJmOW0yZjlpMlA5ZzMvOWQzUDlpMmZ0aDJ2dGgydnRoMi94aTJ2dGgydnRpMi90YjIvOWgyL3RoMnZ0aTJ2dGcyL3hpMnZ0bTNmOXExZjloMnZ0ZjIvaGcydnRoMi94ZzJ2cGgydnRoMmZ0aDJ2dGkyL3hnMS9kaDJmcGgyL3RoMnZ4aDJ2dGkyL3RoMnZ0aDIvcGoyL3BnMy85aDIvdGcydnRnMmZ0aTJmeGkyZnRoMnZ0aTJ2cGkyL3RnMi94aDJ2eGgydnRoMnZ0ajFmOWYyL2xoMnZ0aDJmdGoxdjloMnZ0aTJ2dGUxL2hoMnZ0ajNQbGgyL3hoMnZ0aTJ2cGgydnhpMi90aDJ2cGgyL3hoMnZ0aDJ2dGcyZmxnMmZ4ZTJQbGE0ZjlpM1B0aDJ2dGgydnRoMnZwaDJ2dG16UDloMnZ0ZzJ2eGYyZnRoMnZ4ZzEvbGgyL3hoMnZ0ZzJ2dGgydnBoMnZ0ZzJ2dGcyZnBnMnZ4aDJ2cGgydnRoMnZ0aDJ2dGoydnhoMnZ4aDJ2dGgydnRoMnZ0aDIvcGgyL3RrMnZsaTJmeGcydnRnMi9waDJ2dGgyZnRpMlBwaDJ2cGkyZnBoMnZ4ZzJmcG0xdjloMi90aDJ2cGsyLzloMnZ0aDJmcGgydnRoMnZ0azJQZGgydnRoMnZ0ZzJ2dGgzUDloMmZwaTJ2dGozUGhnMy85aDJ2dGoydnRpMi94ZzJ2eGgyL3BnMnZwaDJ2cGgyL3BoMmZ0aTJQOWkyZnBoMi90aDJ2cGkyL3RpMi9waDJ2cGcyZnRoMnZ0ZTEvOWkyUGhpMmZ0aTIvdGgydnRnMmZ0aTIvdGgyL3BoMnZ0aDJmeGgydnhoMnZ0aTJ2cGgyZnhqMmZwZzIvcGcyZnhnMnZ4aDJmcGcyZnRoMmZ0aDJ2eGgyZnRpMi90aDJ2dGgydnRnMnZ4ZzJ2dGcyL3BoMi9saTJ2dGgyZnRoMi85aTJmeGgydnRpMnZwZzIvdGkydnRpMmZ4aDIvdGcydnRoM1B0aTIvcGgydnBnMnZ0ZzJ2dGcydnRoMi90aDJ2eGcyL3hpMmZwZzJ2cGkydnhpMi94ZzNQdGUzZjloMlB0aDIvdGczZmhpMmZ0aTIveGgydnRoMnZ0ZjJQdGcydnBpMnZ4aDJmcGgydnRoMnZ4aDJ2dGgydnRoMnZ0ZzIvdGkydnRoMnZ0aDJ2dEpEZWNBQUFBQS9uUlNUbE1BL2dFQy9md0VCdlVEQjFYekl2VDQrM2Z0K1RQMkNnbEtVQXVMRnhzVURRZ1dQUGV4VDRqcXhBN1M4Y3hOUkE4TStpUFJrMi9qeGNhYUlPREwzWkhaOEdreEVMYXNQVjZBem1hdlhaN1drQklyMWVjZjh1NG11eXhVNmFmY2phWmMxKzhvV0M0UlFjcTRZZVFGczk1RG1TMmI2N1RpdXVZMW42V3RoTTFMbHNQQTZIRzlLVkhKYXV5K05HZWluV1VaUitFY2lhbDI1U0d1c3NFZFpIVWtHTk0rVzFxaE1LQXlqaG92akRjNWNHNkgyQk1udDBhRGVuaW92MWRaMUdoZk5qaWNsMnh5ZVppQmhYdkNVb0ppS3Fxd0ZaWGFZSDk5U1g2UE9tUGZSWXE1UDB5VWE2UlRUa2dlUW9ZbGMxWjhkRHR0a3FPMTI4L0h5RUM4MEpLY1Y0OEFBQkhxU1VSQlZIaGU3TUF4RVlBZ0ZBRFFQLzNGMVdNeUF3SElZQUVTT0JQQ0RwU2lreVVjdlBPOStCSUFBQUFBQUFBQUFJRFMrajZPZUVIT2F6dFh2VE4rNHlIdlBxT2xLTlkxQUw4OWFRZDIzdXdJT3dZMnNNazU1NXh6UnBJa3lUbUpSSW1DZ0lxaUlCd1JVRENBZ0RIbmNEd0t4bU00NW53TVIwOE85MTMzM3RQVk0xMHowOU05SHE5cmR0M24vMTY5cGxiWHJ1cnYrNnErd3N0NmR0UklrbVd6M3YzaUNINjYvTisvTlNhSnV0UTI2Y2xRSDNCRDIweEtodjE2Qkg0SzN4VVBsbEhpWFQwYXFuTi9WOFlRMmsySDhoR2xhWVBITTFUWnMyNG9yV2dNdzF2eWgrNkl3dlRyUEF6djFXSW9iTWhXV3FvNlV3S0hWcFpydExRakc4cnliV1lrS2I4dWhnTUZrelJHTXNFRlZkMU9HeDN6WUNmeGdTVGErQTZLZXM5RFc4dXZSRVM1YjlCV1ZqTW95ZGVjZmxNKy9DenZxOTc3Qjg1bnNOVDBCRmlxdDRyQk12cWYvbVRsaU9sWFBEQ0ZmajJncEtNMFRKM3NndkQxS3pzMHl1bzJnNFdQMzZkcy9CMjN1V0VZTjRxR3U2QWcxNjhvYko4T3MrU1hyNmNrcVo4TFlTVFc4bEF5ZTh0Y21IWHJRcUVjQ3ZxQWdyWVhRUkkvYTBYSjBpRUlNYm81SlQzdVJMQXZLR2p0b0o1akZGWWhWR0xYT1RTYjN3MUJ2dXhDczgxUElveHlDdmRET2RranFmTWtJNXdtZFRKcGt2VTR6Tnd2YXpTWjh6M0N1cFBDTUNnbmw4SThXUGoyUE0wV3hzR3YzcXMwU2V0VUR4Wm1VVkJ2RHQ5QklSZVdIc21nU1pzU0NOTW0wdVMvRnNIU1pSUitCOVgwcFM0bER0WUtsdE5rb2doTy9XZ2VWMCt0UkZpcnJWSDNPUlNUbUViZFI0akUxUytGQVJtOUFDQXZpd0hMWmlJaVk2OTBEeFJ6bk1JRGlPekNJQVprYlFHZThUS2d2RHNpRzB5ZE54dHE2VTNoRnRnbzZza0E3K2s2RFBDODQ0S05SeWc4QWJYY1IrRUk3TGhhTm1WWVZYbXd0WlBDcFZETEt1cVNYTEMzWUFuRGVQUmIyT3RPNFdhb1pUTjFmNE1UeWZjd3hJN0djTUlZK3o5QkxZOUc5NWxmMklaQlZzZEZ0MTI2RG1wWlJ0MHVPSlA0SUNXZDNIQm1nNkl4d1ZIVXJZTkQ3aFkwT1EybmJxU3VMdFNTUnQyMWNNaDFnaWFYd0tuUHFXc090V2pVL1FFT1hVTEovWERvZWVwKzlmOThBSC9OSUMzaFRGdkZCL0FGT0hJVmcza2VoaU9yRkIxQUwzVjE0RVNlbHlFeVo4S0oxWXIrRCt4QzNidHdZR1U4RFY3Nmpib1NEbHlrcmpYVTBvcTYxMkZ2eEhBYVBMZWVvZC84a2lpMk1SOUJMVk9vZXhDMmlwclRieE5jYmVuWElSKzIybERYRTZxUWY5Y0cyUEY5Ukw5dkFDUWNvRjlQTit4TXBHNDMxTkxmY2FTNEUvMTJ1UUFnYmpuOStzQk9DblV2UWkxUFU5Y0ZOaWJUNzBhZnlNbXRwVUdyZ2NpeUtaeUdXdnBReUVGRU84dG9XSjhEb2ZaRUdrWU9SVVR0S0R3TXRWeE40UndpS1ZsR1Evc1MrRjJvb3VHTkdZaGtKb1ZTcUdVQmhTOFJ3ZHliYUlqdkJwTmNMdzA5M0k0K1lRcWdsbmFPUXUzWDBxQmRDc25OOVB1dGt4aEVtUXRxU2NpazdpbFllOXREdytVSXNwZ0d6d2V3TmsvWjRwak85b0hPZ2tvYTVya1JKTEUxRGNPUDJEOW1IbFN6aHJydHNKSndFdzJENmpWK0xYbG96Zit4YzJmTjZjbkpKVE82by9ZK0duWWt3RUppVXlsb29aSVhLTnlBOEpwY1M4ZnFOTEZMQzArR2FtcFFxQUdaYjNURjNZUDc5ODFnVkxhdlBmQnV5NGJmK3F3VzRlTlF6WlVNeVlyNEZnMDRjMkJLVS80SE1nZXRPVE41a1ErR2hkU2xKVUkxQ1NPcDJ3d0FjKy9jMXJaREdYOG1xUTBXZi9aa0hBQjBVREdjS2p4RTNkUWhWN3k0SVo0L3U3SzZIK1pka3lwdGx0UnlMUVdOLy9ldWducCt3MTlRTjZqRzNXc2dmMEd2MzVJQWhiaG5yaHRPWjlJcU8vL2ovS1RYWDB6ZjFLL2ZtelZxVkRScTlHV05HcjM3OVR1ZGZsK0xQODk3cWY2eWtYUm00L01MM0ZERHREN3o2ZFFaMktwRnA2N3ZkQnVxdmZ4RHN4aEpmSU5qKzQvUk1LVVl0bkx1b2VHcDlGMXJzeGhKMzZ1S1VKMWRhTkdGbHRwZjkxeEZNemR3dHBLQzl5NDRjSmVYd29ydWdQdHczdjBYbDlIU3lIV0xVRjJWenRNWVhsTGRUaldPUUJoSVF5MElUaWZ4MHhEMk5Pd3pieW90MUczb1F2WGpxdGhLS3dQY0NQaFlvOUE1QjRMVFNld3BSWUF2blZiNjFuQ2ptc2x0UUN2eW14WTNSUjZONkNieHNEZ0VUS0MxNW5rdVZDTjN0bWFvK0o1ZTZpWWk0QUVhQmtkLzhJNU1oMTlpRlhVWkYrTVpxa012VkJjRnV6UUd5MXJ6Y0Q0MlVEZ0ZRMEVTaFdYNWNDejdmUXBKMTRTZUJ6MkcvSWZYWkRIRWRTTlFIU1RjbmNJZzJrT1Rpd0JnVTJpQndTUWF2a0FVR2daR0pUUnI4aHNBYUhKMGg4WWdXZWsreEx5aGYyZVFqWjNHQnFmbTZrUDRVYU93SEZFcHAyRXZkTzdoMUtVV1FYY3dmUitETk4rSjJPWnFtVXBabTNGejRWZWZ3bUh4by90U1NCMk5xSXlJcHpCTXZGVzlLQ3lGbnkvdkpjcWE3bmNoaGcwcHA4UlRYaHIreE54K3FSQW0ybG9nZWZIcGluOTdsOExWOG9wOXdFUEo3QkxFckxIemFlWTlNUTJ5YnZJY1RueWZRdnRzaEhDZit1UFQ1MSs2cWNmcjI4YTZFQ0p1RUlYS3hnQ1FzSUs2dEJMSXpnMzAwcXhWTjhTb2U3dlFiTXdwNnhOZnZBMEFucVVoRDhFS3ZtbEZ2L2Rmcm8xZ3QyZ1VQZ1NBcjJoZG1qcnRJczFTOGhDVGpucHAwbUVtd25pSFFpY0FqYmRUbUkwZzNmK1VTVWxXclNZSU1vRkNhcktwdUp5WElZeVB0OUxFY3hsaTBLVnBESWkzdUFHcm1VYmQ5a1RnREFYdldNZ1dyR0NJZlQ5QzFpNlZ3cCtCZXZIVXBYYTN1RXVnaWdIYU5zU2NMendNK012WHR2ZVNiRUZCUEMzS2NWdDZHRWJhSWF2dkVjOGlYRWFoUHl3Y1hNb0E3UkhFbUNmaTZaZnlPQ3pkVGFFY1QxR0lMNERrZm9hbnRZUmtSZ2FGY2p6a29MQnlRQXI5eW41RVRDa1pUcjgzRnNGYTdhYlVOZjJuMTJJTDh3cXRlR3BBOGl3TmwzcW9HMVVNYTJNNzA2L3lKR0xKcS9TN3NURWlPVUNoaWtKbFBaaE5MNk9sa2FOaGxqaWZRaWFGVHhGSnZmNzBPKzlDN0JoQXZ4TUppT2dLQnZzanpOeGJHY0ZMTG5uaFlqQ2JMSWo3S2ZwZGpaaVIwNHFHdG01RWxqQ0hzci9Hd2V4M2pFaWV4SzVabFBXRkRkYzZHalkyUWF5NFdUclpZZU55eW83SzR6dVJFVFdYSDdDWHNtZGd4N1ZicWhXT0NlNzJGT3BudzFheWgyWnZKQVNOaUkyN0lKRmpQMWxEWUt0NExZVVZ2bGk3bXpMcEhCejRDODNlaEdRVmJYU0M1RzJhRFlRRHpicFFhSWpZOENtRkIrREVWelRwNklOa0gyMDhDcG0wNXRTRUU1c29MSTZ4bSsybTVzTUpWMmNHSElMa0NPMW9SZGFyZW1zNFVyeUV1a0dJQ1FuZUtJdnkva2kvOW5HUWZFeGJOU0Z4ZGFEZnJWRk9HUzBIc2FCUWpvUFlLNnFpNFRISXh0SFdWNWJwa2VGeGNPWVJDZ2NSQ3c1VHVBSU9uYURRSlJHeUFiVDFCV1N1OGM2WEVPSDNGS1lqRnRTTzltaUJ1eU1OdlNEN25yWnlJYnVYaHZHSmNPYjcyTHFxMXFkUjF5THFuQ1RIUUxhQXR1NkVyQzc5ZXNPWmR5bmtJeVlNbzY0eUVZNHNKNjFld1lPME5RT1NSZ3hZQzBkOGM2aWJpTmpRVnNxUDJUcW5NZUFqU0Z3YmFhTWpaRGZSNUs3b3ppN3ZRbXpJbzdEa0pCeG9RYk1uSVpsQUcyMGgrU2ZOSnNHQlBlTmo3WnJRdWVNcHJQZkJWcE1xbXZXSXNwWi9BU1E3YUpaWkc3WjhHeWhrRkNOR3ZCak5OWFd2VVBZRXpPS3V0NW5CQ1RDN2hiS2JveW5QcklWWTBUMkRoaGRncHpWbHN5RjVsaEVkZ21RRFpmZTRZT01kR3JxY1JjeTRtMzUxRU5rMEJ2c0FrQXN1STZqdmc5a25ERmJxUEJxWmp0aVJzSjUrYlJNUnlZY1VOQXAvYzh1ejBrdExtVHZseHo1S29ZekNLa1FTdDQ1Ky8vQWhoaVJYMFcvclFWaWJ1NUhDRHpROERzbHp0UFNNUmY1TzIrS2hMcVVlckYzVGhuNHBveEZUY3IzMHE3d1hscjZrMEFIcktTekxnZVJwdTlwcUlYc09oZXV3M0VFZmpFYmo2ZWVwUUl6NWpBSGE0dTZ3TUNHUWkrdEZ3M09RdU81Z1dDL0E0bFZ0ZWhpM1V0Z01DNDBYYWd6NEFURm5QMDJHajBOWStTblVOWDBONkVGaFpHM0lCaVF4UkpkeGtCVjJvZEFDeUpsS25hY0FZVjJ4akNaMUVJUFNhWGJqbFJFamNhOENPTzZ4VEllUE9FQ1pOdUdrVmVjTEp0VTJWMGpmalRDbTlhZlpXNGhKVnplbFNkckNQUWhSTGhXQzc2YVFkZ3JCYXE2T3AxL1NpZWtJTmpaTktsa3ZwYkFWSWZZOG4wWVQ3ek9JVWI4ZlJiT1V5d3NobTVGSlhVWWlBT3hKb3REYWhSQk5HdGJxTVd6WnZtRkw2K1JtSTRUckpncmppd0RBOVFaMVdqUElDdTlMb2RuSVhNU3NaaDBvaVc5eFEvaTJMTS9qMy83QW45eEVha0R3M3VhdDhCdmtHMXJFVTFML1NzU3d1RXMwU3RJbTFVUkFUd3BpbzVPemo4S1NzNGhLNCtFVUpzYUpLVTJoRFFKcVRrcWo3T2tjeExaR0hSbWt3V09Ob1N0T29tNXFYRWdTcVMyaTBpbTB2TnFZdzU0OXhpQjNYY3NnclQ1QnpNdSszY3NnOGF0S1hkSmhyTTloNkVIQjh5U2ljTndiR291b1E2RWZBTGh2T1JiUElOckN4cWdPdW0xZ2lGYWRTbDE0M3JRR0N5TlM1RGlCUFhrRnlUd1gyaGV5QnpDMFQwZUdhRkNLNm1MY2ZJWnEvK0VLNnJLYWhPczY4Q3djNjBlR3R0ZHd0YUl1dFZaN2hwclQyNFhxSTY1cksxb3JEeHUreWhvTmg3NnVvdENxU01vVldLdmNsSVBxcGJpbDlSQjJoY2xNalVKck54eHh6YVpoQzB3cWFHWDgvVTFRL2N5dE1Zc1dWbHhzV1pvSVlWZTBrL2gzTlB3RmdtOW83NFhETkliWHNXVTJxaWZYdmVWZVdvbC9xZGJSYm9rQVNrWkZONGtMcGxKSU9naWd1TnZrTzlabjBZcTJmSXNiMWRoQjBVRGRncmZ6bXZzZUhzeW9KdkZTR3A3Ly91VTFuYjJNSU9PUzBhanUzS1VMaytqVWQ3RFZtMDU1eC9UT2hoS0tIbCthU2tmS0h1cS9hbkNmdTkvYzBxaTBaczJoeWNrblo4ellrL3kvMTlIMmFyVGxsZTh1LzNSMWo3OG4wUkh2am0yRlVFampvLzM1QzJwelZRbFUwNHkvb01lZ25rZjRDOW9OOVZ4Q25UYno5SVI5L1BscGczYS9NbTI3aWszUmhQWFUvUlVBQ3NiVm1iMlJQNXYycjc3MXlWa0FtRTJkdHdpcWNhZUV0S1U2bWZ2YzZnWWorUi9KYUwzN2h3VkRRaXMzZXFtN2h1eUg3Sm9GMjI1ZjAyQUpvK081dnU3cWI2N3VWUWhaQllWdFVFMEZoUVVJSzMvb1lqcTI2M0Fjd2lxZ3NBN3FrT04rMmd4WWlOdEtRL3ZweWFkcXJtelVxR0VOM2R1TmRwNmFOb3lHUjdOaFpRVjE2NkdhU2RTdGdLVjJvMmpvNzdhdXhHYktCZnRlN3FPZ21nN1VQUVJybjJqV0hXMmVvZC9qc0xhT3dsa29Kc05KOXUwU0dyUmJJZW1WU2NNcVI2V2VLNkdXN282cW1PZldwU0ZMR29FYmx0QlFQeDhSdkUzaFVxamxOZ29WaU9USUhCcXVQd20vSnMxcHlHaUdTSklwM0ErMU5LU3dDQkU5VVJhbWwydENmeHE4ZXhHUnowUGQ2NnAyTml4MGZvUEs1a1RvL2hURk9ZWks2ZzVBTGIrbExzMGRSWGZYQ1c2NW54VzV4Z1ViOWFsckE3VzBvRzQ0N1BqR1VCRG5QN3ZTcjBFKzdCaC9QUjlxK1p5NnY4Rld2ZWIwZXdlbzhOSXc1eHJuRHhvRnRieEszZkxvZXF5ejY4eFVHcW9Xd2Q1ZzZ0S2dsbjlSZDJPVVhmNDlTVFNrN1lVRGRTZ1VReW4vaUtwM2ZKN25KemVhZXBsQ0laVFNnTHBKY09ReGhuZ3J1dVdldGRVY3dCTlJScjhZYllCdnYrSURPQkFPM1U3SmcyNDQ4d09GSTFES0xMbDNnRDNYQ1pyTWpvdTZHMzZKbW8waHo4T3BoaG9Ecm5WRm16MWxOcFJTVGwxZE9QUm1VNW9kaTRNeml4WGRCLzZadXZwd3hQVUNnNHlwQjBjbVVKY0JWY2hyd25ZNDRWdklFTC82R2s2MHBtNFExTEtKd2hEWU96dUdZY3k1RXc1c3BHNE0xREtPd2hPd2Rhb2p3MHB0Q1Z0TktBeFVOYVEvR1hhT3hqTmc2U1l2QXdZV3c4WnhDdTlBTFRsZWg4M1A1ZzZteVdJZktzemoyYUNkMDIvQVBDaG1rTFB1NThsMUdhRDFBWUFueGpPZ3FoOGl1a2loSFJTem1qcXRCTlpjajhVem9Lbm9tM0w0cnpUcFdRaHJya3JxdHJ1Z21FTVVCc0JTN2FVMHFkb0w0YlhXTkZtUkMwdFBVdWdKMVl5d3ZhdlkzWHNKVFRwZmdKK3ZEczNtV2M3UFkrcVd0MkdLVGNPRmxSMW8xck1JWm85bjBTVGx1VGlFVTFoR25YWURsUE5iQ2c4aWpHc1dlbWppVFhkQjFtMCt6VHBmNmthb014VHFRajNOTkFwN1E0ZnY5VlNhVlRaQ2lDRkxLUmwwYXdLQ0hNK2swQlVLT2sraDhqQWszWjVPcGVURzJnakRkVlVTSmZkc2VnMW1KeWRTR0ZVRUJkMUN3L1dsOER2NzJWcktSaDZDaFdaMUtjdnNXVkVQaGljNzBuQWZsTFNEQnMveVc4OFY0N1d4RmJmMzlUREkrbVJZU2toUFpSRHZyRnB2NWg2Zm5ydnR2RVpEUmlHVWRHVW16VElaeHRUVENZaGs2R2JhdXhxSzZrTWJudDBsc0RPdVBXMzh5d1ZGdWVjeG9yWHZ3WUdjOUNSRzB2NDFLS3Q3WDFxckw3WjI5Z3B1VDZHbGpXT2hzTVl2MGNLc0NoZWNLN3g4S3NONy8xc29yZmdPRDBPbHJ2a0FVYXJYc2dIRG1EUURxbnR2QTRPMDZUb0VQOFdGYi9aUjF1WnRxQTk0cjBVckN0cWd0cjFINEtjN2Q5bkF6dFExclY5bjVYKzNaOGNFQUlJQUFNRDR2TDFJd1VrQUcyZ05RL2o1RTRJTXBQSHlwWVFsdkdDcnNUQ04wczY4YnZYWi85aUN1MS9wUFpZd0RBQUFBQUFBQUFBQUFENS9UMUYzVTFHaUZ3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMTA1MDljOTU1MTI4OTNkYzY2MWJkM2E2YjBkMmE1ZC5qcGdcIjsiLCIvKiFcblxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IC0gdjEuNS4wIGJhc2VkIG9uIE1hdGVyaWFsIERhc2hib2FyZCAtIHYxLjIuMFxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gKiBQcm9kdWN0IFBhZ2U6IGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdFxuICogQ29weXJpZ2h0IDIwMTggQ3JlYXRpdmUgVGltIChodHRwOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxuXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gKi9cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyAvLyAvLyBWYXJpYWJsZXMgLSBTdHlsZXMgdGhhdCBhcmUgdXNlZCBvbiBtb3JlIHRoYW4gb25lIGNvbXBvbmVudFxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNjA7XG5cbmNvbnN0IHRyYW5zaXRpb24gPSB7XG4gIHRyYW5zaXRpb246IFwiYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSlcIlxufTtcblxuY29uc3QgY29udGFpbmVyID0ge1xuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxuICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXG4gIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCJcbn07XG5cbmNvbnN0IGJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDMwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiXG59O1xuXG5jb25zdCBjYXJkID0ge1xuICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG1hcmdpbjogXCIyNXB4IDBcIixcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNClcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsXG4gIGJhY2tncm91bmQ6IFwiI2ZmZlwiXG59O1xuXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcbiAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIlxufTtcblxuY29uc3QgcHJpbWFyeUNvbG9yID0gXCIjOWMyN2IwXCI7XG5jb25zdCB3YXJuaW5nQ29sb3IgPSBcIiNmZjk4MDBcIjtcbmNvbnN0IGRhbmdlckNvbG9yID0gXCIjZjQ0MzM2XCI7XG5jb25zdCBzdWNjZXNzQ29sb3IgPSBcIiM0Y2FmNTBcIjtcbmNvbnN0IGluZm9Db2xvciA9IFwiIzAwYWNjMVwiO1xuY29uc3Qgcm9zZUNvbG9yID0gXCIjZTkxZTYzXCI7XG5jb25zdCBncmF5Q29sb3IgPSBcIiM5OTk5OTlcIjtcblxuY29uc3QgcHJpbWFyeUJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMjgpLCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDE1NiwgMzksIDE3NiwgMC4yKVwiXG59O1xuY29uc3QgaW5mb0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgwLCAxODgsIDIxMiwgMC4yOCksIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuMilcIlxufTtcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzpcbiAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoNzYsIDE3NSwgODAsIDAuMjgpLCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjIpXCJcbn07XG5jb25zdCB3YXJuaW5nQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6XG4gICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjI4KSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yKVwiXG59O1xuY29uc3QgZGFuZ2VyQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6XG4gICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjI4KSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKVwiXG59O1xuY29uc3Qgcm9zZUJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjMzLCAzMCwgOTksIDAuNClcIlxufTtcblxuY29uc3Qgd2FybmluZ0NhcmRIZWFkZXIgPSB7XG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZmZhNzI2LCAjZmI4YzAwKVwiLFxuICAuLi53YXJuaW5nQm94U2hhZG93XG59O1xuY29uc3Qgc3VjY2Vzc0NhcmRIZWFkZXIgPSB7XG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNjZiYjZhLCAjNDNhMDQ3KVwiLFxuICAuLi5zdWNjZXNzQm94U2hhZG93XG59O1xuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNlZjUzNTAsICNlNTM5MzUpXCIsXG4gIC4uLmRhbmdlckJveFNoYWRvd1xufTtcbmNvbnN0IGluZm9DYXJkSGVhZGVyID0ge1xuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgIzI2YzZkYSwgIzAwYWNjMSlcIixcbiAgLi4uaW5mb0JveFNoYWRvd1xufTtcbmNvbnN0IHByaW1hcnlDYXJkSGVhZGVyID0ge1xuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2FiNDdiYywgIzhlMjRhYSlcIixcbiAgLi4ucHJpbWFyeUJveFNoYWRvd1xufTtcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VjNDA3YSwgI2Q4MWI2MClcIixcbiAgLi4ucm9zZUJveFNoYWRvd1xufTtcblxuY29uc3QgY2FyZEFjdGlvbnMgPSB7XG4gIG1hcmdpbjogXCIwIDIwcHggMTBweFwiLFxuICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZWVlZWVlXCIsXG4gIGhlaWdodDogXCJhdXRvXCIsXG4gIC4uLmRlZmF1bHRGb250XG59O1xuXG5jb25zdCBjYXJkSGVhZGVyID0ge1xuICBtYXJnaW46IFwiLTIwcHggMTVweCAwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgcGFkZGluZzogXCIxNXB4XCJcbn07XG5cbmNvbnN0IGRlZmF1bHRCb3hTaGFkb3cgPSB7XG4gIGJvcmRlcjogXCIwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDIwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxuICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCJcbn07XG5cbmNvbnN0IHRpdGxlID0ge1xuICBjb2xvcjogXCIjM0M0ODU4XCIsXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgbWFyZ2luQm90dG9tOiBcIjI1cHhcIixcbiAgbWluSGVpZ2h0OiBcIjMycHhcIixcbiAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixcbiAgXCImIHNtYWxsXCI6IHtcbiAgICBjb2xvcjogXCIjNzc3XCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjFcIlxuICB9XG59O1xuXG5jb25zdCBjYXJkVGl0bGUgPSB7XG4gIC4uLnRpdGxlLFxuICBtYXJnaW5Ub3A6IFwiMFwiLFxuICBtYXJnaW5Cb3R0b206IFwiM3B4XCIsXG4gIG1pbkhlaWdodDogXCJhdXRvXCIsXG4gIFwiJiBhXCI6IHtcbiAgICAuLi50aXRsZSxcbiAgICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwLjc1cmVtXCIsXG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIlxuICB9XG59O1xuXG5jb25zdCBjYXJkU3VidGl0bGUgPSB7XG4gIG1hcmdpblRvcDogXCItLjM3NXJlbVwiXG59O1xuXG5jb25zdCBjYXJkTGluayA9IHtcbiAgXCImICsgJGNhcmRMaW5rXCI6IHtcbiAgICBtYXJnaW5MZWZ0OiBcIjEuMjVyZW1cIlxuICB9XG59O1xuXG5leHBvcnQge1xuICAvL3ZhcmlhYmxlc1xuICBkcmF3ZXJXaWR0aCxcbiAgdHJhbnNpdGlvbixcbiAgY29udGFpbmVyLFxuICBib3hTaGFkb3csXG4gIGNhcmQsXG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgaW5mb0NvbG9yLFxuICByb3NlQ29sb3IsXG4gIGdyYXlDb2xvcixcbiAgcHJpbWFyeUJveFNoYWRvdyxcbiAgaW5mb0JveFNoYWRvdyxcbiAgc3VjY2Vzc0JveFNoYWRvdyxcbiAgd2FybmluZ0JveFNoYWRvdyxcbiAgZGFuZ2VyQm94U2hhZG93LFxuICByb3NlQm94U2hhZG93LFxuICB3YXJuaW5nQ2FyZEhlYWRlcixcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXG4gIGRhbmdlckNhcmRIZWFkZXIsXG4gIGluZm9DYXJkSGVhZGVyLFxuICBwcmltYXJ5Q2FyZEhlYWRlcixcbiAgcm9zZUNhcmRIZWFkZXIsXG4gIGNhcmRBY3Rpb25zLFxuICBjYXJkSGVhZGVyLFxuICBkZWZhdWx0Qm94U2hhZG93LFxuICB0aXRsZSxcbiAgY2FyZFRpdGxlLFxuICBjYXJkU3VidGl0bGUsXG4gIGNhcmRMaW5rXG59O1xuIiwiaW1wb3J0IHtcbiAgZ3JheUNvbG9yLFxuICBwcmltYXJ5Q29sb3IsXG4gIGluZm9Db2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICByb3NlQ29sb3Jcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIGJ1dHRvbjoge1xuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXG4gICAgbWluV2lkdGg6IFwiYXV0b1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjEyKVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgcGFkZGluZzogXCIxMnB4IDMwcHhcIixcbiAgICBtYXJnaW46IFwiLjMxMjVyZW0gMXB4XCIsXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjBcIixcbiAgICB3aWxsQ2hhbmdlOiBcImJveC1zaGFkb3csIHRyYW5zZm9ybVwiLFxuICAgIHRyYW5zaXRpb246XG4gICAgICBcImJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIHRvdWNoQWN0aW9uOiBcIm1hbmlwdWxhdGlvblwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKVwiXG4gICAgfSxcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwgJi5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiLTFlbVwiLFxuICAgICAgbWFyZ2luQm90dG9tOiBcIi0xZW1cIixcbiAgICAgIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXG4gICAgfSxcbiAgICBcIiYgc3ZnXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgdG9wOiBcIjBcIixcbiAgICAgIHdpZHRoOiBcIjE4cHhcIixcbiAgICAgIGhlaWdodDogXCIxOHB4XCIsXG4gICAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJcbiAgICB9LFxuICAgIFwiJiRqdXN0SWNvblwiOiB7XG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdoaXRlOiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgY29sb3I6IGdyYXlDb2xvclxuICAgIH1cbiAgfSxcbiAgcm9zZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgyMzMsIDMwLCA5OSwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMjMzLCAzMCwgOTksIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMjMzLCAzMCwgOTksIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgyMzMsIDMwLCA5OSwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDIzMywgMzAsIDk5LCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIHByaW1hcnk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIGluZm86IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMCwgMTg4LCAyMTIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDE4OCwgMjEyLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDE4OCwgMjEyLCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAxODgsIDIxMiwgMC4yKVwiXG4gICAgfVxuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDc2LCAxNzUsIDgwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSg3NiwgMTc1LCA4MCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSg3NiwgMTc1LCA4MCwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoNzYsIDE3NSwgODAsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgyNTUsIDE1MiwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMjU1LCAxNTIsIDAsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgyNTUsIDE1MiwgMCwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIGRhbmdlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDI0NCwgNjcsIDU0LCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgyNDQsIDY3LCA1NCwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKVwiXG4gICAgfVxuICB9LFxuICBzaW1wbGU6IHtcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICB9LFxuICAgIFwiJiRyb3NlXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHJvc2VDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJHByaW1hcnlcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogcHJpbWFyeUNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkaW5mb1wiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBpbmZvQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRzdWNjZXNzXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHN1Y2Nlc3NDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJHdhcm5pbmdcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogd2FybmluZ0NvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkZGFuZ2VyXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IGRhbmdlckNvbG9yXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0cmFuc3BhcmVudDoge1xuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xuICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH1cbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiBcIjAuNjVcIixcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuICB9LFxuICBsZzoge1xuICAgIHBhZGRpbmc6IFwiMS4xMjVyZW0gMi4yNXJlbVwiLFxuICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjMzMzMzM1wiLFxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIlxuICB9LFxuICBzbToge1xuICAgIHBhZGRpbmc6IFwiMC40MDYyNXJlbSAxLjI1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC42ODc1cmVtXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCJcbiAgfSxcbiAgcm91bmQ6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiXG4gIH0sXG4gIGJsb2NrOiB7XG4gICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCJcbiAgfSxcbiAgbGluazoge1xuICAgIFwiJiwmOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogXCIjOTk5OTk5XCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgfVxuICB9LFxuICBqdXN0SWNvbjoge1xuICAgIHBhZGRpbmdMZWZ0OiBcIjEycHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICBoZWlnaHQ6IFwiNDFweFwiLFxuICAgIG1pbldpZHRoOiBcIjQxcHhcIixcbiAgICB3aWR0aDogXCI0MXB4XCIsXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiBzdmcsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCJcbiAgICB9LFxuICAgIFwiJiRsZ1wiOiB7XG4gICAgICBoZWlnaHQ6IFwiNTdweFwiLFxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxuICAgICAgd2lkdGg6IFwiNTdweFwiLFxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjMycHhcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI1NnB4XCJcbiAgICAgIH0sXG4gICAgICBcIiYgc3ZnXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMzJweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzJweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkc21cIjoge1xuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIG1pbldpZHRoOiBcIjMwcHhcIixcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIlxuICAgICAgfSxcbiAgICAgIFwiJiBzdmdcIjoge1xuICAgICAgICB3aWR0aDogXCIxN3B4XCIsXG4gICAgICAgIGhlaWdodDogXCIxN3B4XCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblN0eWxlO1xuIiwiY29uc3QgY2FyZEJvZHlTdHlsZSA9IHtcbiAgY2FyZEJvZHk6IHtcbiAgICBwYWRkaW5nOiBcIjAuOTM3NXJlbSAyMHB4XCIsXG4gICAgZmxleDogXCIxIDEgYXV0b1wiLFxuICAgIFdlYmtpdEJveEZsZXg6IFwiMVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgY2FyZEJvZHlQbGFpbjoge1xuICAgIHBhZGRpbmdMZWZ0OiBcIjVweFwiLFxuICAgIHBhZGRpbmdSaWdodDogXCI1cHhcIlxuICB9LFxuICBjYXJkQm9keVByb2ZpbGU6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMTVweFwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRCb2R5U3R5bGU7XG4iLCJjb25zdCBjYXJkRm9vdGVyU3R5bGUgPSB7XG4gIGNhcmRGb290ZXI6IHtcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICBtYXJnaW46IFwiMCAxNXB4IDEwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJvcmRlcjogXCIwXCJcbiAgfSxcbiAgY2FyZEZvb3RlclByb2ZpbGU6IHtcbiAgICBtYXJnaW5Ub3A6IFwiLTE1cHhcIlxuICB9LFxuICBjYXJkRm9vdGVyUGxhaW46IHtcbiAgICBwYWRkaW5nTGVmdDogXCI1cHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiNXB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgfSxcbiAgY2FyZEZvb3RlclN0YXRzOiB7XG4gICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICBcIiYgc3ZnXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICB0b3A6IFwiNHB4XCIsXG4gICAgICBtYXJnaW5SaWdodDogXCIzcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiM3B4XCIsXG4gICAgICB3aWR0aDogXCIxNnB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMTZweFwiXG4gICAgfSxcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgdG9wOiBcIjRweFwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiXG4gICAgfVxuICB9LFxuICBjYXJkRm9vdGVyQ2hhcnQ6IHtcbiAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNlZWVcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkRm9vdGVyU3R5bGU7XG4iLCJpbXBvcnQge1xuICB3YXJuaW5nQ2FyZEhlYWRlcixcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXG4gIGRhbmdlckNhcmRIZWFkZXIsXG4gIGluZm9DYXJkSGVhZGVyLFxuICBwcmltYXJ5Q2FyZEhlYWRlcixcbiAgcm9zZUNhcmRIZWFkZXJcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcbmNvbnN0IGNhcmRIZWFkZXJTdHlsZSA9IHtcbiAgY2FyZEhlYWRlcjoge1xuICAgIHBhZGRpbmc6IFwiMC43NXJlbSAxLjI1cmVtXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICBib3JkZXJCb3R0b206IFwibm9uZVwiLFxuICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICB6SW5kZXg6IFwiMyAhaW1wb3J0YW50XCIsXG4gICAgXCImJGNhcmRIZWFkZXJQbGFpbiwmJGNhcmRIZWFkZXJJY29uLCYkY2FyZEhlYWRlclN0YXRzLCYkd2FybmluZ0NhcmRIZWFkZXIsJiRzdWNjZXNzQ2FyZEhlYWRlciwmJGRhbmdlckNhcmRIZWFkZXIsJiRpbmZvQ2FyZEhlYWRlciwmJHByaW1hcnlDYXJkSGVhZGVyLCYkcm9zZUNhcmRIZWFkZXJcIjoge1xuICAgICAgbWFyZ2luOiBcIjAgMTVweFwiLFxuICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgfSxcbiAgICBcIiY6Zmlyc3QtY2hpbGRcIjoge1xuICAgICAgYm9yZGVyUmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KSBjYWxjKC4yNXJlbSAtIDFweCkgMCAwXCJcbiAgICB9LFxuICAgIFwiJiR3YXJuaW5nQ2FyZEhlYWRlciwmJHN1Y2Nlc3NDYXJkSGVhZGVyLCYkZGFuZ2VyQ2FyZEhlYWRlciwmJGluZm9DYXJkSGVhZGVyLCYkcHJpbWFyeUNhcmRIZWFkZXIsJiRyb3NlQ2FyZEhlYWRlclwiOiB7XG4gICAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCItMjBweFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJGNhcmRIZWFkZXJTdGF0cyBpLCYkY2FyZEhlYWRlclN0YXRzIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBmb250U2l6ZTogXCIzNnB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjU2cHhcIixcbiAgICAgIHdpZHRoOiBcIjU2cHhcIixcbiAgICAgIGhlaWdodDogXCI1NnB4XCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBvdmVyZmxvdzogXCJ1bnNldFwiLFxuICAgICAgbWFyZ2luQm90dG9tOiBcIjFweFwiXG4gICAgfSxcbiAgICBcIiYkY2FyZEhlYWRlclN0YXRzJGNhcmRIZWFkZXJJY29uXCI6IHtcbiAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgfVxuICB9LFxuICBjYXJkSGVhZGVyUGxhaW46IHtcbiAgICBtYXJnaW5MZWZ0OiBcIjBweCAhaW1wb3J0YW50XCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiMHB4ICFpbXBvcnRhbnRcIlxuICB9LFxuICBjYXJkSGVhZGVyU3RhdHM6IHtcbiAgICBcIiYgJGNhcmRIZWFkZXJJY29uXCI6IHtcbiAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgfSxcbiAgICBcIiYgaDEsJiBoMiwmIGgzLCYgaDQsJiBoNSwmIGg2XCI6IHtcbiAgICAgIG1hcmdpbjogXCIwICFpbXBvcnRhbnRcIlxuICAgIH1cbiAgfSxcbiAgY2FyZEhlYWRlckljb246IHtcbiAgICBcIiYkd2FybmluZ0NhcmRIZWFkZXIsJiRzdWNjZXNzQ2FyZEhlYWRlciwmJGRhbmdlckNhcmRIZWFkZXIsJiRpbmZvQ2FyZEhlYWRlciwmJHByaW1hcnlDYXJkSGVhZGVyLCYkcm9zZUNhcmRIZWFkZXJcIjoge1xuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH0sXG4gICAgXCImIGksJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgd2lkdGg6IFwiMzNweFwiLFxuICAgICAgaGVpZ2h0OiBcIjMzcHhcIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMzNweFwiXG4gICAgfSxcbiAgICBcIiYgc3ZnXCI6IHtcbiAgICAgIHdpZHRoOiBcIjI0cHhcIixcbiAgICAgIGhlaWdodDogXCIyNHB4XCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMzcHhcIixcbiAgICAgIC8vIG1hcmdpbjogXCI1cHggNHB4IDBweFwiXG4gICAgfVxuICB9LFxuICB3YXJuaW5nQ2FyZEhlYWRlcjoge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xuICAgICAgLi4ud2FybmluZ0NhcmRIZWFkZXJcbiAgICB9XG4gIH0sXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyOiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XG4gICAgICAuLi5zdWNjZXNzQ2FyZEhlYWRlclxuICAgIH1cbiAgfSxcbiAgZGFuZ2VyQ2FyZEhlYWRlcjoge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xuICAgICAgLi4uZGFuZ2VyQ2FyZEhlYWRlclxuICAgIH1cbiAgfSxcbiAgaW5mb0NhcmRIZWFkZXI6IHtcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcbiAgICAgIC4uLmluZm9DYXJkSGVhZGVyXG4gICAgfVxuICB9LFxuICBwcmltYXJ5Q2FyZEhlYWRlcjoge1xuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xuICAgICAgLi4ucHJpbWFyeUNhcmRIZWFkZXJcbiAgICB9XG4gIH0sXG4gIHJvc2VDYXJkSGVhZGVyOiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XG4gICAgICAuLi5yb3NlQ2FyZEhlYWRlclxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEhlYWRlclN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgd2FybmluZ0NhcmRIZWFkZXIsXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxuICBkYW5nZXJDYXJkSGVhZGVyLFxuICBpbmZvQ2FyZEhlYWRlcixcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXG4gIHJvc2VDYXJkSGVhZGVyXG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5jb25zdCBjYXJkSWNvblN0eWxlID0ge1xuICBjYXJkSWNvbjoge1xuICAgIFwiJiR3YXJuaW5nQ2FyZEhlYWRlciwmJHN1Y2Nlc3NDYXJkSGVhZGVyLCYkZGFuZ2VyQ2FyZEhlYWRlciwmJGluZm9DYXJkSGVhZGVyLCYkcHJpbWFyeUNhcmRIZWFkZXIsJiRyb3NlQ2FyZEhlYWRlclwiOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzk5OVwiLFxuICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiLTIwcHhcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcbiAgICAgIGZsb2F0OiBcImxlZnRcIlxuICAgIH1cbiAgfSxcbiAgd2FybmluZ0NhcmRIZWFkZXIsXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxuICBkYW5nZXJDYXJkSGVhZGVyLFxuICBpbmZvQ2FyZEhlYWRlcixcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXG4gIHJvc2VDYXJkSGVhZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkSWNvblN0eWxlO1xuIiwiY29uc3QgY2FyZFN0eWxlID0ge1xuICBjYXJkOiB7XG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxuICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC44NylcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNClcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgbWluV2lkdGg6IFwiMFwiLFxuICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgICBmb250U2l6ZTogXCIuODc1cmVtXCJcbiAgfSxcbiAgY2FyZFBsYWluOiB7XG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgfSxcbiAgY2FyZFByb2ZpbGU6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICB9LFxuICBjYXJkQ2hhcnQ6IHtcbiAgICBcIiYgcFwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXG4gICAgICBwYWRkaW5nVG9wOiBcIjBweFwiXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkU3R5bGU7XG4iLCJpbXBvcnQge1xuICBwcmltYXJ5Q29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIGRlZmF1bHRGb250XG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IGN1c3RvbUlucHV0U3R5bGUgPSB7XG4gIGRpc2FibGVkOiB7XG4gICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnQgIWltcG9ydGFudFwiXG4gICAgfVxuICB9LFxuICB1bmRlcmxpbmU6IHtcbiAgICBcIiY6aG92ZXI6bm90KCRkaXNhYmxlZCk6YmVmb3JlLCY6YmVmb3JlXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNEMkQyRDIgIWltcG9ydGFudFwiLFxuICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4ICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBwcmltYXJ5Q29sb3JcbiAgICB9XG4gIH0sXG4gIHVuZGVybGluZUVycm9yOiB7XG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBkYW5nZXJDb2xvclxuICAgIH1cbiAgfSxcbiAgdW5kZXJsaW5lU3VjY2Vzczoge1xuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogc3VjY2Vzc0NvbG9yXG4gICAgfVxuICB9LFxuICBsYWJlbFJvb3Q6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBjb2xvcjogXCIjQUFBQUFBICFpbXBvcnRhbnRcIixcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTdcIlxuICB9LFxuICBsYWJlbFJvb3RFcnJvcjoge1xuICAgIGNvbG9yOiBkYW5nZXJDb2xvclxuICB9LFxuICBsYWJlbFJvb3RTdWNjZXNzOiB7XG4gICAgY29sb3I6IHN1Y2Nlc3NDb2xvclxuICB9LFxuICBmZWVkYmFjazoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjE4cHhcIixcbiAgICByaWdodDogXCIwXCIsXG4gICAgekluZGV4OiBcIjJcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgd2lkdGg6IFwiMjRweFwiLFxuICAgIGhlaWdodDogXCIyNHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG4gIH0sXG4gIG1hcmdpblRvcDoge1xuICAgIG1hcmdpblRvcDogXCIxNnB4XCJcbiAgfSxcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICBmbGV4OiBcIjEgMSBhdXRvXCIsXG4gICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXG4gICAgbWFyZ2luOiBcIjAgMCAwIDBcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUlucHV0U3R5bGU7XG4iLCJjb25zdCBjdXN0b21UYWJzU3R5bGUgPSB7XG4gIGNhcmQ6e1xuICAgIFwiYm94LXNoYWRvd1wiOlwibm9uZVwiXG4gIH0sXG4gIGNhcmRUaXRsZToge1xuICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMTBweCAxMHB4IDBweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMjRweFwiXG4gIH0sXG4gIGNhcmRUaXRsZVJUTDoge1xuICAgIGZsb2F0OiBcInJpZ2h0XCIsXG4gICAgcGFkZGluZzogXCIxMHB4IDBweCAxMHB4IDEwcHggIWltcG9ydGFudFwiXG4gIH0sXG4gIGRpc3BsYXlOb25lOiB7XG4gICAgZGlzcGxheTogXCJub25lICFpbXBvcnRhbnRcIlxuICB9LFxuICB0YWJzUm9vdDoge1xuICAgIG1pbkhlaWdodDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgb3ZlcmZsb3dYOiBcInZpc2libGVcIixcbiAgICBcIiYgJHRhYlJvb3RCdXR0b25cIjoge1xuICAgICAgZm9udFNpemU6IFwiMC44NzVyZW1cIlxuICAgIH1cbiAgfSxcbiAgdGFiUm9vdEJ1dHRvbjoge1xuICAgIG1pbkhlaWdodDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgbWluV2lkdGg6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIHdpZHRoOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBoZWlnaHQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIG1heFdpZHRoOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBtYXhIZWlnaHQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIHBhZGRpbmc6IFwiMTBweCAxNXB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMjRweFwiLFxuICAgIGJvcmRlcjogXCIwICFpbXBvcnRhbnRcIixcbiAgICBjb2xvcjogXCIjZmZmICFpbXBvcnRhbnRcIixcbiAgICBtYXJnaW5MZWZ0OiBcIjRweFwiLFxuICAgIFwiJjpsYXN0LWNoaWxkXCI6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMHB4XCJcbiAgICB9XG4gIH0sXG4gIHRhYkxhYmVsQ29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogXCIwcHhcIlxuICB9LFxuICB0YWJMYWJlbDoge1xuICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgZm9udFNpemU6IFwiMTJweFwiXG4gIH0sXG4gIHRhYlNlbGVjdGVkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiLFxuICAgIHRyYW5zaXRpb246IFwiMC4ycyBiYWNrZ3JvdW5kLWNvbG9yIDAuMXNcIlxuICB9LFxuICB0YWJXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBtaW5IZWlnaHQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgIG1pbldpZHRoOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICB3aWR0aDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgaGVpZ2h0OiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBtYXhXaWR0aDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXG4gICAgbWF4SGVpZ2h0OiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICBcIiYgPiBzdmcsJiA+IC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgbWFyZ2luOiBcIi0xcHggNXB4IDAgMFwiXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21UYWJzU3R5bGU7XG4iLCJjb25zdCBkaWFsb2dUaXRsZVN0eWxlID0ge1xuICAgIHJvb3Q6e1xuICAgICAgICBcbiAgICB9XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgZGlhbG9nVGl0bGVTdHlsZTtcbiAgIiwiY29uc3QgZGlhbG9nQ29udGVudFN0eWxlID0ge1xuICAgIHJvb3Q6e1xuICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJcbiAgICB9XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgZGlhbG9nQ29udGVudFN0eWxlO1xuICAiLCJjb25zdCBkaWFsb2dTdHlsZSA9IHtcbiAgICBwYXBlcjp7XG4gICAgICAgIC8vIHdpZHRoOlwiNjAwcHhcIixcbiAgICAgICAgLy8gb3ZlcmZsb3c6XCJoaWRkZW5cIlxuICAgIH1cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBkaWFsb2dTdHlsZTtcbiAgIiwiY29uc3QgZGlhbG9nVGl0bGVTdHlsZSA9IHtcbiAgICByb290OntcbiAgICAgICAgXG4gICAgfVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IGRpYWxvZ1RpdGxlU3R5bGU7XG4gICIsImltcG9ydCB7XG4gIGRlZmF1bHRGb250LFxuICBjb250YWluZXIsXG4gIHByaW1hcnlDb2xvclxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCBmb290ZXJTdHlsZSA9IHtcbiAgYmxvY2s6IHtcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgZm9udFNpemU6IFwiMTJweFwiXG4gIH0sXG4gIGxlZnQ6IHtcbiAgICBmbG9hdDogXCJsZWZ0IWltcG9ydGFudFwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICB9LFxuICByaWdodDoge1xuICAgIHBhZGRpbmc6IFwiMTVweCAwXCIsXG4gICAgbWFyZ2luOiBcIjBcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgZmxvYXQ6IFwicmlnaHQhaW1wb3J0YW50XCJcbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgYm90dG9tOiBcIjBcIixcbiAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNlN2U3ZTdcIixcbiAgICBwYWRkaW5nOiBcIjE1cHggMFwiLFxuICAgIC4uLmRlZmF1bHRGb250XG4gIH0sXG4gIGNvbnRhaW5lcixcbiAgYToge1xuICAgIGNvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgIG1hcmdpblRvcDogXCIwXCJcbiAgfSxcbiAgaW5saW5lQmxvY2s6IHtcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIHBhZGRpbmc6IFwiMHB4XCIsXG4gICAgd2lkdGg6IFwiYXV0b1wiXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb290ZXJTdHlsZTtcbiIsImltcG9ydCB7XG4gIGRlZmF1bHRGb250LFxuICBkYW5nZXJDb2xvclxufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5pbXBvcnQgZHJvcGRvd25TdHlsZSBmcm9tIFwiLi4vZHJvcGRvd25TdHlsZS5qc3hcIjtcblxuY29uc3QgaGVhZGVyTGlua3NTdHlsZSA9IHRoZW1lID0+ICh7XG4gIC4uLmRyb3Bkb3duU3R5bGUodGhlbWUpLFxuICBzZWFyY2g6IHtcbiAgICBcIiYgPiBkaXZcIjoge1xuICAgICAgbWFyZ2luVG9wOiBcIjBcIlxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIG1hcmdpbjogXCIxMHB4IDE1cHggIWltcG9ydGFudFwiLFxuICAgICAgZmxvYXQ6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICBwYWRkaW5nVG9wOiBcIjFweFwiLFxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcHhcIixcbiAgICAgIHBhZGRpbmc6IFwiMCFpbXBvcnRhbnRcIixcbiAgICAgIHdpZHRoOiBcIjYwJVwiLFxuICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcbiAgICAgIFwiJiBpbnB1dFwiOiB7XG4gICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGlua1RleHQ6IHtcbiAgICB6SW5kZXg6IFwiNFwiLFxuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBtYXJnaW46IFwiMHB4XCJcbiAgfSxcbiAgYnV0dG9uTGluazoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIG1hcmdpbjogXCIxMHB4IDE1cHggMFwiLFxuICAgICAgd2lkdGg6IFwiLXdlYmtpdC1maWxsLWF2YWlsYWJsZVwiLFxuICAgICAgXCImIHN2Z1wiOiB7XG4gICAgICAgIHdpZHRoOiBcIjI0cHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVweFwiLFxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0xNXB4XCJcbiAgICAgIH0sXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcbiAgICAgICAgbGluZUhlaWdodDogXCIzMHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjI0cHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVweFwiLFxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0xNXB4XCJcbiAgICAgIH0sXG4gICAgICBcIiYgPiBzcGFuXCI6IHtcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNlYXJjaEJ1dHRvbjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICB0b3A6IFwiLTUwcHggIWltcG9ydGFudFwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMjJweFwiLFxuICAgICAgZmxvYXQ6IFwicmlnaHRcIlxuICAgIH1cbiAgfSxcbiAgbWFyZ2luOiB7XG4gICAgekluZGV4OiBcIjRcIixcbiAgICBtYXJnaW46IFwiMFwiXG4gIH0sXG4gIHNlYXJjaEljb246IHtcbiAgICB3aWR0aDogXCIxN3B4XCIsXG4gICAgekluZGV4OiBcIjRcIlxuICB9LFxuICBub3RpZmljYXRpb25zOiB7XG4gICAgekluZGV4OiBcIjRcIixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IFwiMnB4XCIsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNGRkZcIixcbiAgICAgIHJpZ2h0OiBcIjRweFwiLFxuICAgICAgZm9udFNpemU6IFwiOXB4XCIsXG4gICAgICBiYWNrZ3JvdW5kOiBkYW5nZXJDb2xvcixcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIG1pbldpZHRoOiBcIjE2cHhcIixcbiAgICAgIGhlaWdodDogXCIxNnB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgbGluZUhlaWdodDogXCIxNnB4XCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICBtYXJnaW5SaWdodDogXCI4cHhcIlxuICAgIH1cbiAgfSxcbiAgbWFuYWdlcjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICB9LFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJcbiAgfSxcbiAgc2VhcmNoV3JhcHBlcjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICB3aWR0aDogXCItd2Via2l0LWZpbGwtYXZhaWxhYmxlXCIsXG4gICAgICBtYXJnaW46IFwiMTBweCAxNXB4IDBcIlxuICAgIH0sXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyTGlua3NTdHlsZTtcbiIsImltcG9ydCB7XG4gIGNvbnRhaW5lcixcbiAgZGVmYXVsdEZvbnQsXG4gIHByaW1hcnlDb2xvcixcbiAgZGVmYXVsdEJveFNoYWRvdyxcbiAgaW5mb0NvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3Jcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3QgaGVhZGVyU3R5bGUgPSB0aGVtZSA9PiAoe1xuICBhcHBCYXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgIGJvcmRlckJvdHRvbTogXCIwXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICB6SW5kZXg6IFwiMTAyOVwiLFxuICAgIGNvbG9yOiBcIiM1NTU1NTVcIixcbiAgICBib3JkZXI6IFwiMFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMFwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIixcbiAgICBtaW5IZWlnaHQ6IFwiNTBweFwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICAuLi5jb250YWluZXIsXG4gICAgbWluSGVpZ2h0OiBcIjUwcHhcIlxuICB9LFxuICBmbGV4OiB7XG4gICAgZmxleDogMVxuICB9LFxuICB0aXRsZToge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxuICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiXG4gICAgfVxuICB9LFxuICBhcHBSZXNwb25zaXZlOiB7XG4gICAgdG9wOiBcIjhweFwiXG4gIH0sXG4gIHByaW1hcnk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgLi4uZGVmYXVsdEJveFNoYWRvd1xuICB9LFxuICBpbmZvOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3IsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIC4uLmRlZmF1bHRCb3hTaGFkb3dcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAuLi5kZWZhdWx0Qm94U2hhZG93XG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgLi4uZGVmYXVsdEJveFNoYWRvd1xuICB9LFxuICBkYW5nZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAuLi5kZWZhdWx0Qm94U2hhZG93XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTdHlsZTtcbiIsImltcG9ydCB7XG4gIGRyYXdlcldpZHRoLFxuICB0cmFuc2l0aW9uLFxuICBib3hTaGFkb3csXG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIHByaW1hcnlCb3hTaGFkb3csXG4gIGluZm9Db2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yXG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IHNpZGViYXJTdHlsZSA9IHRoZW1lID0+ICh7XG4gIGRyYXdlclBhcGVyOiB7XG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgYm90dG9tOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICB6SW5kZXg6IFwiMVwiLFxuICAgIC4uLmJveFNoYWRvdyxcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICAgIC4uLmJveFNoYWRvdyxcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICByaWdodDogXCIwXCIsXG4gICAgICBsZWZ0OiBcImF1dG9cIixcbiAgICAgIHpJbmRleDogXCIxMDMyXCIsXG4gICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIixcbiAgICAgIG92ZXJmbG93WTogXCJ2aXNpYmxlXCIsXG4gICAgICBib3JkZXJUb3A6IFwibm9uZVwiLFxuICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgIHBhZGRpbmdSaWdodDogXCIwcHhcIixcbiAgICAgIHBhZGRpbmdMZWZ0OiBcIjBcIixcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7ZHJhd2VyV2lkdGh9cHgsIDAsIDApYCxcbiAgICAgIC4uLnRyYW5zaXRpb25cbiAgICB9XG4gIH0sXG4gIGxvZ286IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHBhZGRpbmc6IFwiMTVweCAxNXB4XCIsXG4gICAgekluZGV4OiBcIjRcIixcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGJvdHRvbTogXCIwXCIsXG5cbiAgICAgIGhlaWdodDogXCIxcHhcIixcbiAgICAgIHJpZ2h0OiBcIjE1cHhcIixcbiAgICAgIHdpZHRoOiBcImNhbGMoMTAwJSAtIDMwcHgpXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxODAsIDE4MCwgMTgwLCAwLjMpXCJcbiAgICB9XG4gIH0sXG4gIGxvZ29MaW5rOiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBwYWRkaW5nOiBcIjVweCAwXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgbGluZUhlaWdodDogXCIzMHB4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIFwiJiwmOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgIH1cbiAgfSxcbiAgbG9nb0ltYWdlOiB7XG4gICAgd2lkdGg6IFwiMzBweFwiLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgbWF4SGVpZ2h0OiBcIjMwcHhcIixcbiAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcbiAgICBtYXJnaW5SaWdodDogXCIxNXB4XCJcbiAgfSxcbiAgaW1nOiB7XG4gICAgd2lkdGg6IFwiMzVweFwiLFxuICAgIHRvcDogXCIyMnB4XCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIGJvcmRlcjogXCIwXCJcbiAgfSxcbiAgYmFja2dyb3VuZDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgekluZGV4OiBcIjFcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB6SW5kZXg6IFwiM1wiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIGJhY2tncm91bmQ6IFwiIzAwMFwiLFxuICAgICAgb3BhY2l0eTogXCIuOFwiXG4gICAgfVxuICB9LFxuICBsaXN0OiB7XG4gICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICBwYWRkaW5nTGVmdDogXCIwXCIsXG4gICAgcGFkZGluZ1RvcDogXCIwXCIsXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgIHBvc2l0aW9uOiBcInVuc2V0XCJcbiAgfSxcbiAgaXRlbToge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1cywmOnZpc2l0ZWQsJlwiOiB7XG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCJcbiAgICB9XG4gIH0sXG4gIGl0ZW1MaW5rOiB7XG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDMwMG1zIGxpbmVhclwiLFxuICAgIG1hcmdpbjogXCIxMHB4IDE1cHggMFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMTVweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIC4uLmRlZmF1bHRGb250XG4gIH0sXG4gIGl0ZW1JY29uOiB7XG4gICAgd2lkdGg6IFwiMjRweFwiLFxuICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMjRweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxuICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXCJcbiAgfSxcbiAgaXRlbVRleHQ6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBtYXJnaW46IFwiMFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgd2hpdGVGb250OiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIHB1cnBsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgIC4uLnByaW1hcnlCb3hTaGFkb3csXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgICAgLi4ucHJpbWFyeUJveFNoYWRvd1xuICAgIH1cbiAgfSxcbiAgYmx1ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSgwLDE4OCwyMTIsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSgwLDE4OCwyMTIsLjIpXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMCwxODgsMjEyLC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMCwxODgsMjEyLC4yKVwiXG4gICAgfVxuICB9LFxuICBncmVlbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYSg3NiwxNzUsODAsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYSg3NiwxNzUsODAsLjIpXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoNzYsMTc1LDgwLC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoNzYsMTc1LDgwLC4yKVwiXG4gICAgfVxuICB9LFxuICBvcmFuZ2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMjU1LDE1MiwwLC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC4yKVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDI1NSwxNTIsMCwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDI1NSwxNTIsMCwuMilcIlxuICAgIH1cbiAgfSxcbiAgcmVkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMjQ0LDY3LDU0LC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMjQ0LDY3LDU0LC4yKVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoMjQ0LDY3LDU0LC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoMjQ0LDY3LDU0LC4yKVwiXG4gICAgfVxuICB9LFxuICBzaWRlYmFyV3JhcHBlcjoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA3NXB4KVwiLFxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICB3aWR0aDogXCIyNjBweFwiLFxuICAgIHpJbmRleDogXCI0XCIsXG4gICAgb3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIlxuICB9LFxuICBhY3RpdmVQcm86IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBib3R0b206IFwiMTNweFwiXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhclN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgZGVmYXVsdEZvbnQsXG4gIHByaW1hcnlCb3hTaGFkb3csXG4gIGluZm9Cb3hTaGFkb3csXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXG4gIHdhcm5pbmdCb3hTaGFkb3csXG4gIGRhbmdlckJveFNoYWRvdyxcbiAgcm9zZUJveFNoYWRvd1xufSBmcm9tIFwiLi4vLi4vbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0LmpzeFwiO1xuXG5jb25zdCBzbmFja2JhckNvbnRlbnRTdHlsZSA9IHtcbiAgcm9vdDoge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGZsZXhXcmFwOiBcInVuc2V0XCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMTBweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGNvbG9yOiBcIiM1NTU1NTVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpLCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcIlxuICB9LFxuICB0b3AyMDoge1xuICAgIHRvcDogXCIyMHB4XCJcbiAgfSxcbiAgdG9wNDA6IHtcbiAgICB0b3A6IFwiNDBweFwiXG4gIH0sXG4gIGluZm86IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwZDNlZVwiLFxuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAuLi5pbmZvQm94U2hhZG93XG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVjYjg2MFwiLFxuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAuLi5zdWNjZXNzQm94U2hhZG93XG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmYTIxYVwiLFxuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAuLi53YXJuaW5nQm94U2hhZG93XG4gIH0sXG4gIGRhbmdlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjU1YTRlXCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC4uLmRhbmdlckJveFNoYWRvd1xuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNhZjJjYzVcIixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLi4ucHJpbWFyeUJveFNoYWRvd1xuICB9LFxuICByb3NlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNlYjM1NzNcIixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLi4ucm9zZUJveFNoYWRvd1xuICB9LFxuICBtZXNzYWdlOiB7XG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIG1heFdpZHRoOiBcIjg5JVwiXG4gIH0sXG4gIGNsb3NlOiB7XG4gICAgd2lkdGg6IFwiMTFweFwiLFxuICAgIGhlaWdodDogXCIxMXB4XCJcbiAgfSxcbiAgaWNvbkJ1dHRvbjoge1xuICAgIHdpZHRoOiBcIjI0cHhcIixcbiAgICBoZWlnaHQ6IFwiMjRweFwiLFxuICAgIHBhZGRpbmc6IFwiMHB4XCJcbiAgfSxcbiAgaWNvbjoge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBsZWZ0OiBcIjE1cHhcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCI1MCVcIixcbiAgICBtYXJnaW5Ub3A6IFwiLTE1cHhcIixcbiAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjMwcHhcIlxuICB9LFxuICBpbmZvSWNvbjoge1xuICAgIGNvbG9yOiBcIiMwMGQzZWVcIlxuICB9LFxuICBzdWNjZXNzSWNvbjoge1xuICAgIGNvbG9yOiBcIiM1Y2I4NjBcIlxuICB9LFxuICB3YXJuaW5nSWNvbjoge1xuICAgIGNvbG9yOiBcIiNmZmEyMWFcIlxuICB9LFxuICBkYW5nZXJJY29uOiB7XG4gICAgY29sb3I6IFwiI2Y1NWE0ZVwiXG4gIH0sXG4gIHByaW1hcnlJY29uOiB7XG4gICAgY29sb3I6IFwiI2FmMmNjNVwiXG4gIH0sXG4gIHJvc2VJY29uOiB7XG4gICAgY29sb3I6IFwiI2ViMzU3M1wiXG4gIH0sXG4gIGljb25NZXNzYWdlOiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiNTBweFwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbmFja2JhckNvbnRlbnRTdHlsZTtcbiIsImltcG9ydCB7XG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIGluZm9Db2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yXG59IGZyb20gXCIuLi8uLi9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuanN4XCI7XG5cbmNvbnN0IHR5cG9ncmFwaHlTdHlsZSA9IHtcbiAgZGVmYXVsdEZvbnRTdHlsZToge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIlxuICB9LFxuICBkZWZhdWx0SGVhZGVyTWFyZ2luczoge1xuICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuICB9LFxuICBxdW90ZToge1xuICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4XCIsXG4gICAgbWFyZ2luOiBcIjAgMCAyMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMTcuNXB4XCIsXG4gICAgYm9yZGVyTGVmdDogXCI1cHggc29saWQgI2VlZVwiXG4gIH0sXG4gIHF1b3RlVGV4dDoge1xuICAgIG1hcmdpbjogXCIwIDAgMTBweFwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxuICB9LFxuICBxdW90ZUF1dGhvcjoge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBmb250U2l6ZTogXCI4MCVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcbiAgICBjb2xvcjogXCIjNzc3XCJcbiAgfSxcbiAgbXV0ZWRUZXh0OiB7XG4gICAgY29sb3I6IFwiIzc3N1wiXG4gIH0sXG4gIHByaW1hcnlUZXh0OiB7XG4gICAgY29sb3I6IHByaW1hcnlDb2xvclxuICB9LFxuICBpbmZvVGV4dDoge1xuICAgIGNvbG9yOiBpbmZvQ29sb3JcbiAgfSxcbiAgc3VjY2Vzc1RleHQ6IHtcbiAgICBjb2xvcjogc3VjY2Vzc0NvbG9yXG4gIH0sXG4gIHdhcm5pbmdUZXh0OiB7XG4gICAgY29sb3I6IHdhcm5pbmdDb2xvclxuICB9LFxuICBkYW5nZXJUZXh0OiB7XG4gICAgY29sb3I6IGRhbmdlckNvbG9yXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cG9ncmFwaHlTdHlsZTtcbiIsImltcG9ydCB7XG4gIHByaW1hcnlDb2xvcixcbiAgcHJpbWFyeUJveFNoYWRvdyxcbiAgZGVmYXVsdEZvbnRcbn0gZnJvbSBcIi4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3QgZHJvcGRvd25TdHlsZSA9IHRoZW1lID0+ICh7XG4gIGJ1dHRvbkxpbms6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjMwcHhcIixcbiAgICAgIHdpZHRoOiBcImF1dG9cIlxuICAgIH1cbiAgfSxcbiAgbGlua3M6IHtcbiAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICB6SW5kZXg6IFwiNFwiLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgY29sb3I6IFwiI2E5YWZiYlwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVweFwiXG4gICAgfVxuICB9LFxuICBsaW5rVGV4dDoge1xuICAgIHpJbmRleDogXCI0XCIsXG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgZm9udFNpemU6IFwiMTRweFwiXG4gIH0sXG4gIHBvcHBlckNsb3NlOiB7XG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCJcbiAgfSxcbiAgcG9vcGVyUmVzcG9uc2l2ZToge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XG4gICAgICB6SW5kZXg6IFwiMTY0MFwiLFxuICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICBmbG9hdDogXCJub25lXCIsXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBib3JkZXI6IFwiMFwiLFxuICAgICAgV2Via2l0Qm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICBjb2xvcjogXCJibGFja1wiXG4gICAgfVxuICB9LFxuICBwb29wZXJOYXY6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgcG9zaXRpb246IFwic3RhdGljICFpbXBvcnRhbnRcIixcbiAgICAgIGxlZnQ6IFwidW5zZXQgIWltcG9ydGFudFwiLFxuICAgICAgdG9wOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcbiAgICAgIHRyYW5zZm9ybTogXCJub25lICFpbXBvcnRhbnRcIixcbiAgICAgIHdpbGxDaGFuZ2U6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICBcIiYgPiBkaXZcIjoge1xuICAgICAgICBib3hTaGFkb3c6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMHJlbVwiLFxuICAgICAgICBtYXJnaW5SaWdodDogXCIwcmVtXCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIwcHggIWltcG9ydGFudFwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgcGFkZGluZzogXCIwcHggIWltcG9ydGFudFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnQgIWltcG9ydGFudFwiLFxuICAgICAgICBcIiYgdWwgbGlcIjoge1xuICAgICAgICAgIGNvbG9yOiBcIiNGRkYgIWltcG9ydGFudFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDE1cHggMCFpbXBvcnRhbnRcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMTVweCAhaW1wb3J0YW50XCIsXG4gICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJoc2xhKDAsMCUsNzglLC4yKVwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZHJvcGRvd246IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBib3hTaGFkb3c6IFwiMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KVwiLFxuICAgIHRvcDogXCIxMDAlXCIsXG4gICAgekluZGV4OiBcIjEwMDBcIixcbiAgICBtaW5XaWR0aDogXCIxNjBweFwiLFxuICAgIHBhZGRpbmc6IFwiNXB4IDBcIixcbiAgICBtYXJnaW46IFwiMnB4IDAgMFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICBXZWJraXRCYWNrZ3JvdW5kQ2xpcDogXCJwYWRkaW5nLWJveFwiLFxuICAgIGJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94XCJcbiAgfSxcbiAgZHJvcGRvd25JdGVtOiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4XCIsXG4gICAgbWFyZ2luOiBcIjAgNXB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjJweFwiLFxuICAgIFdlYmtpdFRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGxpbmVhclwiLFxuICAgIE1velRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGxpbmVhclwiLFxuICAgIE9UcmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcbiAgICBNc1RyYW5zaXRpb246IFwiYWxsIDE1MG1zIGxpbmVhclwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGxpbmVhclwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBjbGVhcjogXCJib3RoXCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcbiAgICBjb2xvcjogXCIjMzMzXCIsXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICBoZWlnaHQ6IFwidW5zZXRcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAuLi5wcmltYXJ5Qm94U2hhZG93XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZHJvcGRvd25TdHlsZTtcbiIsImltcG9ydCB7XG4gIGRyYXdlcldpZHRoLFxuICB0cmFuc2l0aW9uLFxuICBjb250YWluZXJcbn0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3QgYXBwU3R5bGUgPSB0aGVtZSA9PiAoe1xuICB3cmFwcGVyOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB0b3A6IFwiMFwiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiXG4gIH0sXG4gIG1haW5QYW5lbDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWBcbiAgICB9LFxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGZsb2F0OiBcInJpZ2h0XCIsXG4gICAgLi4udHJhbnNpdGlvbixcbiAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBvdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBtYXJnaW5Ub3A6IFwiNzBweFwiLFxuICAgIHBhZGRpbmc6IFwiMzBweCAxNXB4XCIsXG4gICAgbWluSGVpZ2h0OiBcImNhbGMoMTAwdmggLSAxMjNweClcIlxuICB9LFxuICBjb250YWluZXIsXG4gIG1hcDoge1xuICAgIG1hcmdpblRvcDogXCI3MHB4XCJcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFN0eWxlO1xuIiwiaW1wb3J0IHsgc3VjY2Vzc0NvbG9yIH0gZnJvbSBcIi4uLy4uL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC5qc3hcIjtcblxuY29uc3QgZGFzaGJvYXJkU3R5bGUgPSAodGhlbWUpPT4oe1xuICBzdWNjZXNzVGV4dDoge1xuICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgfSxcbiAgdXBBcnJvd0NhcmRDYXRlZ29yeToge1xuICAgIHdpZHRoOiBcIjE2cHhcIixcbiAgICBoZWlnaHQ6IFwiMTZweFwiXG4gIH0sXG4gIHN0YXRzOiB7XG4gICAgY29sb3I6IFwiIzk5OTk5OVwiLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgbGluZUhlaWdodDogXCIyMnB4XCIsXG4gICAgXCImIHN2Z1wiOiB7XG4gICAgICB0b3A6IFwiNHB4XCIsXG4gICAgICB3aWR0aDogXCIxNnB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMTZweFwiLFxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIlxuICAgIH0sXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgdG9wOiBcIjRweFwiLFxuICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIzcHhcIlxuICAgIH1cbiAgfSxcbiAgY2FyZENhdGVnb3J5OiB7XG4gICAgY29sb3I6IFwiIzk5OTk5OVwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIlxuICB9LFxuICBjYXJkQ2F0ZWdvcnlXaGl0ZToge1xuICAgIGNvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsLjYyKVwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIlxuICB9LFxuICBjYXJkVGl0bGU6IHtcbiAgICBjb2xvcjogXCIjM0M0ODU4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjBweFwiLFxuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXG4gICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZlwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIzcHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgXCImIHNtYWxsXCI6IHtcbiAgICAgIGNvbG9yOiBcIiM3NzdcIixcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjFcIlxuICAgIH1cbiAgfSxcbiAgY2FyZFRpdGxlV2hpdGU6IHtcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgbWFyZ2luVG9wOiBcIjBweFwiLFxuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXG4gICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZlwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIzcHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgXCImIHNtYWxsXCI6IHtcbiAgICAgIGNvbG9yOiBcIiM3NzdcIixcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjFcIlxuICAgIH1cbiAgfSxcbiAgY29udGFpbmVyOntcbiAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIlxuICB9LFxuICBidXR0b246IHtcbiAgICB3aWR0aDpcIjQwcHhcIixcbiAgICBoZWlnaHQ6XCI0MHB4XCIsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgYmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMjZjNmRhLCAjMDBhY2MxKScsXG4gICAgJyYgc3ZnJzp7XG4gICAgICAgY29sb3I6JyNmZmYnXG4gICAgfSxcbiAgICAnJjpob3Zlcic6e1xuICAgICAgYmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWQ5N2E3LCAjMDBhY2MxKScsXG4gICAgfVxuICB9LFxuICBzaXplU21hbGw6e1xuICAgIGZvbnRTaXplOiBcIjAuODEyNXJlbVwiXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmRTdHlsZTtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9Vc2VyL3VzZXJJbmZvJ1xuaW1wb3J0IHsgZmV0Y2hQb3N0IH0gZnJvbSAnLi4vLi4vLi4vcHVibGljL2h0dHAnXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvYXBpJ1xuXG5leHBvcnQgY29uc3QgRl9DT01NT05fRkVUQ0hfTE9HSU5fVVNFUl9BQ1RJT04gPSAocGFyYW1zKT0+e1xuICAgIHJldHVybiAoZGlzcGF0Y2gvKiwgZ2V0U3RhdGUqLykgPT4ge1xuICAgICAgICAvLyBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBmZXRjaFBvc3QoQVBJLmxvZ2luVXNlcixwYXJhbXMpLnRoZW4ocmVzID0+IHJlcy5kYXRhKS50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICBpZihqc29uLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZfQ09NTU9OX0ZFVENIX0FERF9VU0VSX0FDVElPTiA9IChwYXJhbXMsY2FsbGJhY2spPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaC8qLCBnZXRTdGF0ZSovKSA9PiB7XG4gICAgICAgIC8vIGxldCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGZldGNoUG9zdChBUEkuYWRkVXNlcixwYXJhbXMpLnRoZW4ocmVzID0+IHJlcy5kYXRhKS50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICBpZihqc29uLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhqc29uLnR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBGX0NPTU1PTl9GRVRDSF9NT0RJRllfVVNFUl9BQ1RJT04gPSAocGFyYW1zLGNhbGxiYWNrKT0+e1xuICAgIHJldHVybiAoZGlzcGF0Y2gvKiwgZ2V0U3RhdGUqLykgPT4ge1xuICAgICAgICAvLyBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBmZXRjaFBvc3QoQVBJLm1vZGlmeVVzZXIscGFyYW1zKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgaWYoanNvbi5zdGF0dXMpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soanNvbi50eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgRl9DT01NT05fRkVUQ0hfTE9HT1VUX1VTRVJfQUNUSU9OID0gKHBhcmFtcyk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoLyosIGdldFN0YXRlKi8pID0+IHtcbiAgICAgICAgLy8gbGV0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgZmV0Y2hQb3N0KEFQSS5sb2dvdXRVc2VyLHBhcmFtcykudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgIGlmKGpzb24uc3RhdHVzKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IGNhcmRTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9jYXJkU3R5bGUuanN4XCI7XG5cbmZ1bmN0aW9uIENhcmQoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzLFxuICAgIGNsYXNzTmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBwbGFpbixcbiAgICBwcm9maWxlLFxuICAgIGNoYXJ0LFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuICBjb25zdCBjYXJkQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRdOiB0cnVlLFxuICAgIFtjbGFzc2VzLmNhcmRQbGFpbl06IHBsYWluLFxuICAgIFtjbGFzc2VzLmNhcmRQcm9maWxlXTogcHJvZmlsZSxcbiAgICBbY2xhc3Nlcy5jYXJkQ2hhcnRdOiBjaGFydCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRDbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxuICBwcm9maWxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hhcnQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGNhcmRTdHlsZSkoQ2FyZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IGNhcmRCb2R5U3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY2FyZEJvZHlTdHlsZS5qc3hcIjtcblxuZnVuY3Rpb24gQ2FyZEJvZHkoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcGxhaW4sIHByb2ZpbGUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjYXJkQm9keUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5jYXJkQm9keV06IHRydWUsXG4gICAgW2NsYXNzZXMuY2FyZEJvZHlQbGFpbl06IHBsYWluLFxuICAgIFtjbGFzc2VzLmNhcmRCb2R5UHJvZmlsZV06IHByb2ZpbGUsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkQm9keUNsYXNzZXN9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQ2FyZEJvZHkucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxuICBwcm9maWxlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhjYXJkQm9keVN0eWxlKShDYXJkQm9keSk7XG4iLCJcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCJcbmltcG9ydCB7IFRvb2x0aXAsIEhpZGRlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4OiAnMSAxIDMzLjMzMzMzJScsXG4gICAgbWF4V2lkdGg6JzMzLjMzMzMzJScsICAgIFxuICAgIGRpc3BsYXk6XCJibG9ja1wiXG5cbiAgfSxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSc6e1xuICAgICAgcm9vdDoge1xuICAgICAgICBmbGV4OiAnMSAxIDUwJScsXG4gICAgICAgIG1heFdpZHRoOic1MCUnLCAgICAgXG4gICAgICAgIGRpc3BsYXk6XCJibG9ja1wiXG4gICAgICB9XG4gIH0sXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCknOntcbiAgICByb290OiB7XG4gICAgICBmbGV4OiAnMSAxIDEwMCUnLFxuICAgICAgbWF4V2lkdGg6JzEwMCUnLCAgICAgXG4gICAgICBkaXNwbGF5OlwiYmxvY2tcIlxuICAgIH1cbiAgfSxcbiAgcGFwZXI6e1xuICAgIG1hcmdpbjonMTBweCAxMHB4JyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuICAgIGhlaWdodDpcIjEzMHB4XCIsXG4gICAgb3ZlcmZsb3c6J2hpZGRlbicsXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMsYm9yZGVyIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zJyxcbiAgICAnYm9yZGVyLXJhZGl1cyc6XCI2cHhcIixcbiAgICAnJjpob3Zlcic6e1xuICAgICAgICAnYm94LXNoYWRvdyc6IFwiMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMilcIlxuICAgIH0sXG4gICAgJyY6aG92ZXIgYnV0dG9uJzp7XG4gICAgICAgIGRpc3BsYXk6J2lubGluZS1mbGV4J1xuICAgIH1cbiAgfSxcbiAgY29udGFpbmVyOntcbiAgICBvdmVyZmxvdzonaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6J2VsbGlwc2lzJ1xuICB9LFxuICBpbWdib3g6e1xuICAgIHdpZHRoOjEyOCxcbiAgICBoZWlnaHQ6MTI4LFxuICAgIG1hcmdpblJpZ2h0OjEwXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgd2lkdGg6IDEyOCxcbiAgICBoZWlnaHQ6IDEyOCxcbiAgfSxcbiAgXG4gIGltZzoge1xuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgY29udGVudDp7XG4gICAgICBmbGV4OicxIDEgYXV0bycsXG4gICAgICBtYXhXaWR0aDonbm9uZScsXG4gICAgICB3aWR0aDonYXV0bydcbiAgfSxcbiAgZGVzY3JpcHRpb246e1xuICAgIGhlaWdodDpcIjQwcHhcIixcbiAgICBvdmVyZmxvdzonaGlkZGVuJ1xuICB9LFxuICBidXR0b246e1xuICAgICAgd2lkdGg6JzQwcHgnLFxuICAgICAgbWluV2lkdGg6JzQwcHgnLFxuICAgICAgZGlzcGxheTonbm9uZSdcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIENvbXBsZXhHcmlkKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyAsaW5mbyxvbk9wZW5FZGl0RGlhbG9nLGRlbGV0ZUl0ZW19ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGEgICB0YXJnZXQ9e2luZm8udGFyZ2V0fSBocmVmPXtpbmZvLmFkZD8namF2YXNjcmlwdDp2b2lkKDApJzppbmZvLmxpbmt9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICA8UGFwZXIgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHdyYXA9eydub3dyYXAnfSBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXs4fSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSA+XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ2JveH0+XG4gICAgICAgICAgPEJ1dHRvbkJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gYWx0PVwiY29tcGxleFwiIHNyYz17aW5mby5pY29uP2luZm8uaWNvbjppbmZvLmltZ30gd2lkdGg9JzEyOHB4JyBoZWlnaHQ9JzEyOHB4Jy8+XG4gICAgICAgICAgPC9CdXR0b25CYXNlPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IHNtIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cyBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17OH0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIG5vV3JhcD5cbiAgICAgICAgICAgICAgICB7aW5mby50aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT57aW5mby5kZXNjcmlwdGlvbj9pbmZvLmRlc2NyaXB0aW9uOihpbmZvLmFkZD8nJzon5pqC5peg5o+P6L+wJyl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57aW5mby5hdXRob3J9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuS/ruaUueWGheWuuVwiID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbk1vdXNlRG93bj17KGV2KT0+e29uT3BlbkVkaXREaWFsb2coaW5mbyk7ZXYubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7ZXYuZGVmYXVsdFByZXZlbnRlZDt9fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSA+PEVkaXRJY29uIGNvbG9yPXsnYWN0aW9uJ30vPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuWIoOmZpOWGheWuuVwiID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXsoZXYpPT57ZGVsZXRlSXRlbShpbmZvKTtldi5uYXRpdmVFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtldi5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtldi5uYXRpdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO319PjxEZWxldGVJY29uIGNvbG9yPXsnYWN0aW9uJ30vPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgXG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuICAgIDwvYT5cbiAgKTtcbn1cblxuQ29tcGxleEdyaWQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ29tcGxleEdyaWQpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgY2FyZEZvb3RlclN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2NhcmRGb290ZXJTdHlsZS5qc3hcIjtcblxuZnVuY3Rpb24gQ2FyZEZvb3Rlcih7IC4uLnByb3BzIH0pIHtcbiAgY29uc3Qge1xuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHBsYWluLFxuICAgIHByb2ZpbGUsXG4gICAgc3RhdHMsXG4gICAgY2hhcnQsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRGb290ZXJDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuY2FyZEZvb3Rlcl06IHRydWUsXG4gICAgW2NsYXNzZXMuY2FyZEZvb3RlclBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzZXMuY2FyZEZvb3RlclByb2ZpbGVdOiBwcm9maWxlLFxuICAgIFtjbGFzc2VzLmNhcmRGb290ZXJTdGF0c106IHN0YXRzLFxuICAgIFtjbGFzc2VzLmNhcmRGb290ZXJDaGFydF06IGNoYXJ0LFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEZvb3RlckNsYXNzZXN9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQ2FyZEZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHByb2ZpbGU6IFByb3BUeXBlcy5ib29sLFxuICBzdGF0czogUHJvcFR5cGVzLmJvb2wsXG4gIGNoYXJ0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhjYXJkRm9vdGVyU3R5bGUpKENhcmRGb290ZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBjYXJkSGVhZGVyU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY2FyZEhlYWRlclN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBDYXJkSGVhZGVyKHsgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7XG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgY29sb3IsXG4gICAgcGxhaW4sXG4gICAgc3RhdHMsXG4gICAgaWNvbixcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcbiAgY29uc3QgY2FyZEhlYWRlckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5jYXJkSGVhZGVyXTogdHJ1ZSxcbiAgICBbY2xhc3Nlc1tjb2xvciArIFwiQ2FyZEhlYWRlclwiXV06IGNvbG9yLFxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJQbGFpbl06IHBsYWluLFxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJTdGF0c106IHN0YXRzLFxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJJY29uXTogaWNvbixcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRIZWFkZXJDbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgICBcImluZm9cIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInJvc2VcIlxuICBdKSxcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxuICBzdGF0czogUHJvcFR5cGVzLmJvb2wsXG4gIGljb246IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGNhcmRIZWFkZXJTdHlsZSkoQ2FyZEhlYWRlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IGNhcmRJY29uU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY2FyZEljb25TdHlsZS5qc3hcIjtcblxuZnVuY3Rpb24gQ2FyZEljb24oeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY29sb3IsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjYXJkSWNvbkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5jYXJkSWNvbl06IHRydWUsXG4gICAgW2NsYXNzZXNbY29sb3IgKyBcIkNhcmRIZWFkZXJcIl1dOiBjb2xvcixcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRJY29uQ2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIndhcm5pbmdcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwicm9zZVwiXG4gIF0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGNhcmRJY29uU3R5bGUpKENhcmRJY29uKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG4vLyBtYXRlcmlhbC11aSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuXG5pbXBvcnQgYnV0dG9uU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvYnV0dG9uU3R5bGUuanN4XCI7XG5mdW5jdGlvbiBSZWd1bGFyQnV0dG9uKHsgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7XG4gICAgY2xhc3NlcyxcbiAgICBjb2xvcixcbiAgICByb3VuZCxcbiAgICBjaGlsZHJlbixcbiAgICBkaXNhYmxlZCxcbiAgICBzaW1wbGUsXG4gICAgc2l6ZSxcbiAgICBibG9jayxcbiAgICBsaW5rLFxuICAgIGp1c3RJY29uLFxuICAgIGNsYXNzTmFtZSxcbiAgICBtdWlDbGFzc2VzLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuICBjb25zdCBidG5DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuYnV0dG9uXTogdHJ1ZSxcbiAgICBbY2xhc3Nlc1tzaXplXV06IHNpemUsXG4gICAgW2NsYXNzZXNbY29sb3JdXTogY29sb3IsXG4gICAgW2NsYXNzZXMucm91bmRdOiByb3VuZCxcbiAgICBbY2xhc3Nlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgIFtjbGFzc2VzLnNpbXBsZV06IHNpbXBsZSxcbiAgICBbY2xhc3Nlcy5ibG9ja106IGJsb2NrLFxuICAgIFtjbGFzc2VzLmxpbmtdOiBsaW5rLFxuICAgIFtjbGFzc2VzLmp1c3RJY29uXToganVzdEljb24sXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZVxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIHsuLi5yZXN0fSBjbGFzc2VzPXttdWlDbGFzc2VzfSBjbGFzc05hbWU9e2J0bkNsYXNzZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQnV0dG9uPlxuICApO1xufVxuXG5SZWd1bGFyQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInByaW1hcnlcIixcbiAgICBcImluZm9cIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwicm9zZVwiLFxuICAgIFwid2hpdGVcIixcbiAgICBcInRyYW5zcGFyZW50XCJcbiAgXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcImxnXCJdKSxcbiAgc2ltcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm91bmQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGluazogUHJvcFR5cGVzLmJvb2wsXG4gIGp1c3RJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyB1c2UgdGhpcyB0byBwYXNzIHRoZSBjbGFzc2VzIHByb3BzIGZyb20gTWF0ZXJpYWwtVUlcbiAgbXVpQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhidXR0b25TdHlsZSkoUmVndWxhckJ1dHRvbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgQ2xlYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiO1xuaW1wb3J0IENoZWNrIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IGN1c3RvbUlucHV0U3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY3VzdG9tSW5wdXRTdHlsZS5qc3hcIjtcblxuZnVuY3Rpb24gQ3VzdG9tSW5wdXQoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzLFxuICAgIGZvcm1Db250cm9sUHJvcHMsXG4gICAgbGFiZWxUZXh0LFxuICAgIGlkLFxuICAgIGxhYmVsUHJvcHMsXG4gICAgaW5wdXRQcm9wcyxcbiAgICBlcnJvcixcbiAgICBzdWNjZXNzXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBsYWJlbENsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdEVycm9yXTogZXJyb3IsXG4gICAgW1wiIFwiICsgY2xhc3Nlcy5sYWJlbFJvb3RTdWNjZXNzXTogc3VjY2VzcyAmJiAhZXJyb3JcbiAgfSk7XG4gIGNvbnN0IHVuZGVybGluZUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy51bmRlcmxpbmVFcnJvcl06IGVycm9yLFxuICAgIFtjbGFzc2VzLnVuZGVybGluZVN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvcixcbiAgICBbY2xhc3Nlcy51bmRlcmxpbmVdOiB0cnVlXG4gIH0pO1xuICBjb25zdCBtYXJnaW5Ub3AgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5tYXJnaW5Ub3BdOiBsYWJlbFRleHQgPT09IHVuZGVmaW5lZFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbFxuICAgICAgey4uLmZvcm1Db250cm9sUHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2Zvcm1Db250cm9sUHJvcHMuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc2VzLmZvcm1Db250cm9sfVxuICAgID5cbiAgICAgIHtsYWJlbFRleHQgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxSb290ICsgbGFiZWxDbGFzc2VzfVxuICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsVGV4dH1cbiAgICAgICAgPC9JbnB1dExhYmVsPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8SW5wdXRcbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IG1hcmdpblRvcCxcbiAgICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCxcbiAgICAgICAgICB1bmRlcmxpbmU6IHVuZGVybGluZUNsYXNzZXNcbiAgICAgICAgfX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgICB7ZXJyb3IgPyAoXG4gICAgICAgIDxDbGVhciBjbGFzc05hbWU9e2NsYXNzZXMuZmVlZGJhY2sgKyBcIiBcIiArIGNsYXNzZXMubGFiZWxSb290RXJyb3J9IC8+XG4gICAgICApIDogc3VjY2VzcyA/IChcbiAgICAgICAgPENoZWNrIGNsYXNzTmFtZT17Y2xhc3Nlcy5mZWVkYmFjayArIFwiIFwiICsgY2xhc3Nlcy5sYWJlbFJvb3RTdWNjZXNzfSAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKTtcbn1cblxuQ3VzdG9tSW5wdXQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxhYmVsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGN1c3RvbUlucHV0U3R5bGUpKEN1c3RvbUlucHV0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG4vLyBtYXRlcmlhbC11aSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBUYWJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCI7XG5pbXBvcnQgVGFiIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NhcmQvQ2FyZC5qc3hcIjtcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiLi4vQ2FyZC9DYXJkQm9keS5qc3hcIjtcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCIuLi9DYXJkL0NhcmRIZWFkZXIuanN4XCI7XG5cbmltcG9ydCBjdXN0b21UYWJzU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvY3VzdG9tVGFic1N0eWxlLmpzeFwiO1xuXG5jbGFzcyBDdXN0b21UYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IDBcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc2VzLFxuICAgICAgaGVhZGVyQ29sb3IsXG4gICAgICBwbGFpblRhYnMsXG4gICAgICB0YWJzLFxuICAgICAgdGl0bGUsXG4gICAgICBydGxBY3RpdmVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBjbGFzc05hbWVzKHtcbiAgICAgIFtjbGFzc2VzLmNhcmRUaXRsZV06IHRydWUsXG4gICAgICBbY2xhc3Nlcy5jYXJkVGl0bGVSVExdOiBydGxBY3RpdmVcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmQgcGxhaW49e3BsYWluVGFic30gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj17aGVhZGVyQ29sb3J9IHBsYWluPXtwbGFpblRhYnN9PlxuICAgICAgICAgIHt0aXRsZSAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmRUaXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy50YWJzUm9vdCxcbiAgICAgICAgICAgICAgaW5kaWNhdG9yOiBjbGFzc2VzLmRpc3BsYXlOb25lLFxuICAgICAgICAgICAgICBzY3JvbGxCdXR0b25zOiBjbGFzc2VzLmRpc3BsYXlOb25lXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0YWJzLm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIHZhciBpY29uID0ge307XG4gICAgICAgICAgICAgIGlmIChwcm9wLnRhYkljb24pIHtcbiAgICAgICAgICAgICAgICBpY29uID0ge1xuICAgICAgICAgICAgICAgICAgaWNvbjogPHByb3AudGFiSWNvbiAvPlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudGFiUm9vdEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDb250YWluZXI6IGNsYXNzZXMudGFiTGFiZWxDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjbGFzc2VzLnRhYkxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogY2xhc3Nlcy50YWJTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogY2xhc3Nlcy50YWJXcmFwcGVyXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17cHJvcC50YWJOYW1lfVxuICAgICAgICAgICAgICAgICAgey4uLmljb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAge3RhYnMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9Pntwcm9wLnRhYkNvbnRlbnR9PC9kaXY+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxufVxuXG5DdXN0b21UYWJzLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoZWFkZXJDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIndhcm5pbmdcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwicHJpbWFyeVwiXG4gIF0pLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFiczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRhYk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHRhYkljb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgdGFiQ29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICAgIH0pXG4gICksXG4gIHJ0bEFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWluVGFiczogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoY3VzdG9tVGFic1N0eWxlKShDdXN0b21UYWJzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIlxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBkaWFsb2dTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9kaWFsb2dTdHlsZS5qc3hcIjtcblxuY2xhc3MgRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGxldCB7Y2hpbGRyZW4sbXVpQ2xhc3NlcyxvcGVuLC4uLnJlc3R9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybihcbiAgICAgIDxEaWFsb2cgey4uLnJlc3R9IG9wZW49e29wZW59IGNsYXNzZXM9e211aUNsYXNzZXN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0RpYWxvZz5cbiAgICApICBcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nU3R5bGUpKERpYWxvZ0NvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIlxuaW1wb3J0IERpYWxvZ0FjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgZGlhbG9nQWN0aW9uU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvZGlhbG9nQWN0aW9uU3R5bGUuanN4XCI7XG5cblxuY2xhc3MgRGlhbG9nQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGxldCB7Y2hpbGRyZW4sLi4ucmVzdH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgICAgPERpYWxvZ0FjdGlvbiB7Li4ucmVzdH0gPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0RpYWxvZ0FjdGlvbj5cbiAgICApICBcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nQWN0aW9uU3R5bGUpKERpYWxvZ0FjdGlvbkNvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgZGlhbG9nQ29udGVudFN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2RpYWxvZ0NvbnRlbnRTdHlsZS5qc3hcIjtcblxuXG5jbGFzcyBEaWFsb2dDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGxldCB7Y2hpbGRyZW4sLi4ucmVzdH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgICAgPERpYWxvZ0NvbnRlbnQgey4uLnJlc3R9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgKSAgXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ0NvbnRlbnRTdHlsZSkoRGlhbG9nQ29udGVudENvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIlxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgZGlhbG9nVGl0bGVTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9kaWFsb2dUaXRsZVN0eWxlLmpzeFwiO1xuXG5cbmNsYXNzIERpYWxvZ1RpdGxlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGxldCB7Y2hpbGRyZW4sLi4ucmVzdH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgICAgPERpYWxvZ1RpdGxlIHsuLi5yZXN0fSA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRGlhbG9nVGl0bGU+XG4gICAgKSAgXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ1RpdGxlU3R5bGUpKERpYWxvZ1RpdGxlQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IGZvb3RlclN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL2Zvb3RlclN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBGb290ZXIoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PlxuICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lQmxvY2t9PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N1bmpwMTIzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrfT5cbiAgICAgICAgICAgICAgICBnaXRodWJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lQmxvY2t9PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY25ibG9ncy5jb20vc2pwdGVjaC9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvY2t9PlxuICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHR9PlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgJmNvcHk7IHsxOTAwICsgbmV3IERhdGUoKS5nZXRZZWFyKCl9e1wiIFwifVxuICAgICAgICAgICDorrDlvZXkvaDnmoTlv6vkuZBcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZm9vdGVyU3R5bGUpKEZvb3Rlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBncmlkOiB7XG4gICAgbWFyZ2luOiBcIjAgLTE1cHggIWltcG9ydGFudFwiLFxuICAgIHdpZHRoOiBcInVuc2V0XCJcbiAgfSxcbiAgYWRkQnV0dG9uOntcbiAgICB3aWR0aDpcIjE3MHB4XCJcbiAgfVxufTtcblxuZnVuY3Rpb24gR3JpZENvbnRhaW5lcihwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGNoaWxkcmVuLCBhZGRCdXR0b24sLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHsuLi5yZXN0fSBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZ3JpZH0gJHthZGRCdXR0b24/Y2xhc3Nlcy5hZGRCdXR0b246Jyd9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlKShHcmlkQ29udGFpbmVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGdyaWQ6IHtcbiAgICBwYWRkaW5nOiBcIjAgMTVweCAhaW1wb3J0YW50XCJcbiAgfVxufTtcblxuZnVuY3Rpb24gR3JpZEl0ZW0oeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGl0ZW0gey4uLnJlc3R9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGUpKEdyaWRJdGVtKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXJMaW5rc0NvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9oZWFkZXIvaGVhZGVyTGlua3NDb250YWluZXJcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQ3VzdG9tQnV0dG9ucy9CdXR0b24uanN4XCI7XG5cbmltcG9ydCBoZWFkZXJTdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy9oZWFkZXJTdHlsZS5qc3hcIjtcblxuZnVuY3Rpb24gSGVhZGVyKHsgLi4ucHJvcHMgfSkge1xuICBmdW5jdGlvbiBtYWtlQnJhbmQoKSB7XG4gICAgdmFyIG5hbWU7XG4gICAgcHJvcHMucm91dGVzLm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICBpZiAocHJvcC5wYXRoID09PSBwcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICBuYW1lID0gcHJvcC5uYXZiYXJOYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgY29uc3QgeyBjbGFzc2VzLCBjb2xvciB9ID0gcHJvcHM7XG4gIGNvbnN0IGFwcEJhckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbXCIgXCIgKyBjbGFzc2VzW2NvbG9yXV06IGNvbG9yXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhciArIGFwcEJhckNsYXNzZXN9PlxuICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXh9PlxuICAgICAgICAgIHsvKiBIZXJlIHdlIGNyZWF0ZSBuYXZiYXIgYnJhbmQsIGJhc2VkIG9uIHJvdXRlIG5hbWUgKi99XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInRyYW5zcGFyZW50XCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAge21ha2VCcmFuZCgpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhpZGRlbiBzbURvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICA8SGVhZGVyTGlua3NDb250YWluZXIgLz5cbiAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIDxIaWRkZW4gbWRVcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9IaWRkZW4+XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgPC9BcHBCYXI+XG4gICk7XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJwcmltYXJ5XCIsIFwiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCJdKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhoZWFkZXJTdHlsZSkoSGVhZGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIjtcbmltcG9ydCBHcm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCI7XG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcbmltcG9ydCBQb3BwZXJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuaW1wb3J0IFBlcnNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanN4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9DdXN0b21CdXR0b25zL0J1dHRvbi5qc3hcIjtcblxuaW1wb3J0IFVzZXJDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvVXNlci91c2VyQ29udGFpbmVyXCJcblxuaW1wb3J0IGhlYWRlckxpbmtzU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvaGVhZGVyTGlua3NTdHlsZS5qc3hcIjtcblxuY2xhc3MgSGVhZGVyTGlua3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvcGVuTWVzc2FnZTogZmFsc2UsXG4gICAgb3BlblBlcnNvbjogZmFsc2UsXG4gICAgb3BlblVzZXJJbmZvOmZhbHNlXG4gIH07XG4gIGhhbmRsZU1lc3NhZ2VUb2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoeyBvcGVuTWVzc2FnZTogIXN0YXRlLm9wZW5NZXNzYWdlIH0pKTtcbiAgfTtcbiAgaGFuZGxlUGVyc29uVG9nZ2xlID0gKCkgPT4ge1xuICAgIGlmKCF3aW5kb3cuX19VU0VSX0lORk9fXyB8fCAhd2luZG93Ll9fVVNFUl9JTkZPX18uX2lkKXtcbiAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IG9wZW5Vc2VySW5mbzogIXN0YXRlLm9wZW5Vc2VySW5mbyB9KSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgb3BlblBlcnNvbjogIXN0YXRlLm9wZW5QZXJzb24gLG9wZW5Vc2VySW5mbzpmYWxzZX0pKTtcbiAgfTtcbiAgaGFuZGxlUGVyc29uQ2xvc2UgPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLnBlcnNvbkVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuUGVyc29uOiBmYWxzZX0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlTWVzc2FnZUNsb3NlID0gZXZlbnQgPT4ge1xuICAgIGlmICghdGhpcy5tZXNzYWdlRWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5NZXNzYWdlOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuICBvbkxvZ291dCgpe1xuICAgIHRoaXMucHJvcHMuZmV0Y2hMb2dvdXRVc2VyKClcbiAgfVxuICBvbk1vZGlmeVVzZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IG9wZW5Vc2VySW5mbzogIXN0YXRlLm9wZW5Vc2VySW5mbyB9KSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG9wZW5NZXNzYWdlICxvcGVuUGVyc29uLG9wZW5Vc2VySW5mb30gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hXcmFwcGVyfT5cbiAgICAgICAgICA8Q3VzdG9tSW5wdXRcbiAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLm1hcmdpbiArIFwiIFwiICsgY2xhc3Nlcy5zZWFyY2hcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ3aGl0ZVwiIGFyaWEtbGFiZWw9XCJlZGl0XCIganVzdEljb24gcm91bmQ+XG4gICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3I9e3dpbmRvdy5pbm5lcldpZHRoID4gOTU5ID8gXCJ0cmFuc3BhcmVudFwiIDogXCJ3aGl0ZVwifVxuICAgICAgICAgIGp1c3RJY29uPXt3aW5kb3cuaW5uZXJXaWR0aCA+IDk1OX1cbiAgICAgICAgICBzaW1wbGU9eyEod2luZG93LmlubmVyV2lkdGggPiA5NTkpfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJEYXNoYm9hcmRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MaW5rfVxuICAgICAgICA+XG4gICAgICAgICAgPERhc2hib2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbnN9IC8+XG4gICAgICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RleHR9PuS4u+mhtTwvcD5cbiAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1hbmFnZXJ9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblJlZj17bm9kZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUVsID0gbm9kZTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb2xvcj17d2luZG93LmlubmVyV2lkdGggPiA5NTkgPyBcInRyYW5zcGFyZW50XCIgOiBcIndoaXRlXCJ9XG4gICAgICAgICAgICBqdXN0SWNvbj17d2luZG93LmlubmVyV2lkdGggPiA5NTl9XG4gICAgICAgICAgICBzaW1wbGU9eyEod2luZG93LmlubmVyV2lkdGggPiA5NTkpfVxuICAgICAgICAgICAgYXJpYS1vd25zPXtvcGVuTWVzc2FnZSA/IFwibWVudS1saXN0LWdyb3ctbWVzc2FnZVwiIDogbnVsbH1cbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVzc2FnZVRvZ2dsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MaW5rfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25zIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25zfT41PC9zcGFuPlxuICAgICAgICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XG4gICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVGV4dH0+XG4gICAgICAgICAgICAgICAg5raI5oGvXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxQb3BwZXJzXG4gICAgICAgICAgICBvcGVuPXtvcGVuTWVzc2FnZX1cbiAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLm1lc3NhZ2VFbH1cbiAgICAgICAgICAgIHRyYW5zaXRpb25cbiAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGNsYXNzTmFtZXMoeyBbY2xhc3Nlcy5wb3BwZXJDbG9zZV06ICFvcGVuTWVzc2FnZSB9KSArXG4gICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgY2xhc3Nlcy5wb29wZXJOYXZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxuICAgICAgICAgICAgICA8R3Jvd1xuICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgaWQ9XCJtZW51LWxpc3QtZ3Jvdy1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09IFwiYm90dG9tXCIgPyBcImNlbnRlciB0b3BcIiA6IFwiY2VudGVyIGJvdHRvbVwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17dGhpcy5oYW5kbGVNZXNzYWdlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3Qgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVzc2FnZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBNaWtlIEpvaG4gcmVzcG9uZGVkIHRvIHlvdXIgZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZXNzYWdlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIDUgbmV3IHRhc2tzXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVzc2FnZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UncmUgbm93IGZyaWVuZCB3aXRoIEFuZHJld1xuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lc3NhZ2VDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQW5vdGhlciBOb3RpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZXNzYWdlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFub3RoZXIgT25lXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1BvcHBlcnM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYW5hZ2VyfT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJ1dHRvblJlZj17bm9kZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbkVsID0gbm9kZTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNvbG9yPXt3aW5kb3cuaW5uZXJXaWR0aCA+IDk1OSA/IFwidHJhbnNwYXJlbnRcIiA6IFwid2hpdGVcIn1cbiAgICAgICAgICBqdXN0SWNvbj17d2luZG93LmlubmVyV2lkdGggPiA5NTl9XG4gICAgICAgICAgc2ltcGxlPXshKHdpbmRvdy5pbm5lcldpZHRoID4gOTU5KX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiUGVyc29uXCJcbiAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgYXJpYS1vd25zPXtvcGVuUGVyc29uID8gXCJtZW51LWxpc3QtZ3Jvdy1wZXJzb25cIiA6IG51bGx9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQZXJzb25Ub2dnbGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkxpbmt9XG4gICAgICAgID5cbiAgICAgICAgICA8UGVyc29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cbiAgICAgICAgICA8SGlkZGVuIG1kVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVGV4dH0+55So5oi35L+h5oGvPC9wPlxuICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPFBvcHBlcnNcbiAgICAgICAgICAgIG9wZW49e29wZW5QZXJzb259XG4gICAgICAgICAgICBhbmNob3JFbD17dGhpcy5wZXJzb25FbH1cbiAgICAgICAgICAgIHRyYW5zaXRpb25cbiAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGNsYXNzTmFtZXMoeyBbY2xhc3Nlcy5wb3BwZXJDbG9zZV06ICFvcGVuUGVyc29uIH0pICtcbiAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICBjbGFzc2VzLnBvb3Blck5hdlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxHcm93XG4gICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cbiAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93LXBlcnNvblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSBcImJvdHRvbVwiID8gXCJjZW50ZXIgdG9wXCIgOiBcImNlbnRlciBib3R0b21cIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e3RoaXMuaGFuZGxlUGVyc29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3Qgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCk9Pnt0aGlzLm9uTW9kaWZ5VXNlcigpO3RoaXMuaGFuZGxlUGVyc29uQ2xvc2UoZXZlbnQpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAg5L+u5pS555So5oi35L+h5oGvXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCk9Pnt0aGlzLm9uTG9nb3V0KCk7dGhpcy5oYW5kbGVQZXJzb25DbG9zZShldmVudCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICDpgIDlh7rnmbvlvZVcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L0dyb3c+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUG9wcGVycz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VXNlckNvbnRhaW5lciBvcGVuPXtvcGVuVXNlckluZm99IG9uQ2FuY2VsPXt0aGlzLmhhbmRsZVBlcnNvblRvZ2dsZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGhlYWRlckxpbmtzU3R5bGUpKEhlYWRlckxpbmtzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuXG5jb25zdCBzd2l0Y2hTdHlsZSA9IHtcbiAgY29sb3JQcmltYXJ5OntcbiAgICAnJiRjaGVja2VkJzp7XG4gICAgICBjb2xvcjonIzIxOTZmMydcbiAgICB9XG4gIH0sXG4gIGNoZWNrZWQ6e1xuICAgIGNvbG9yOicjMjE5NmYzJ1xuICB9XG59XG5cbmNsYXNzIFN3aXRjaExhYmVscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuICBcbiBcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtR3JvdXAgcm93ID5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuc3dpdGNoTGFiZWxzLm1hcCgoc3dpdGNobGFiZWwsaW5kZXgpPT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c3dpdGNobGFiZWwuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9Pnt0aGlzLnByb3BzLm9uQ2hhbmdlKGluZGV4LGV2ZW50KX19XG4gICAgICAgICAgICAgICAgdmFsdWU9e3N3aXRjaGxhYmVsLnZhbHVlfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtzd2l0Y2hsYWJlbC5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt0aGlzLnByb3BzLmNsYXNzZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbD17c3dpdGNobGFiZWwubGFiZWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3dpdGNoU3R5bGUpKFN3aXRjaExhYmVscyk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvblwiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyTGlua3NDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvaGVhZGVyL2hlYWRlckxpbmtzQ29udGFpbmVyXCI7XG5cbmltcG9ydCBzaWRlYmFyU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwtZGFzaGJvYXJkLXJlYWN0L2NvbXBvbmVudHMvc2lkZWJhclN0eWxlLmpzeFwiO1xuXG5jb25zdCBTaWRlYmFyID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICAvLyB2ZXJpZmllcyBpZiByb3V0ZU5hbWUgaXMgdGhlIG9uZSBhY3RpdmUgKGluIGJyb3dzZXIgaW5wdXQpXG4gIGZ1bmN0aW9uIGFjdGl2ZVJvdXRlKHJvdXRlTmFtZSkge1xuICAgIHJldHVybiBwcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKHJvdXRlTmFtZSkgPiAtMSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuICBjb25zdCB7IGNsYXNzZXMsIGNvbG9yLCBsb2dvLCBpbWFnZSwgbG9nb1RleHQsIHJvdXRlcyB9ID0gcHJvcHM7XG4gIHZhciBsaW5rcyA9IChcbiAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICB7cm91dGVzLm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICAgIGlmICghcHJvcCB8fCBwcm9wLnJlZGlyZWN0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGFjdGl2ZVBybyA9IFwiIFwiO1xuICAgICAgICB2YXIgbGlzdEl0ZW1DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgW1wiIFwiICsgY2xhc3Nlc1tjb2xvcl1dOiBhY3RpdmVSb3V0ZShwcm9wLnBhdGgpXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3aGl0ZUZvbnRDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgW1wiIFwiICsgY2xhc3Nlcy53aGl0ZUZvbnRdOiBhY3RpdmVSb3V0ZShwcm9wLnBhdGgpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICB0bz17cHJvcC5wYXRofVxuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVQcm8gKyBjbGFzc2VzLml0ZW19XG4gICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbUxpbmsgKyBsaXN0SXRlbUNsYXNzZXN9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtSWNvbiArIHdoaXRlRm9udENsYXNzZXN9PlxuICAgICAgICAgICAgICAgIHt0eXBlb2YgcHJvcC5pY29uID09PSBcInN0cmluZ1wiID8gKFxuICAgICAgICAgICAgICAgICAgPEljb24+e3Byb3AuaWNvbn08L0ljb24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxwcm9wLmljb24gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3Byb3Auc2lkZWJhck5hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0ICsgd2hpdGVGb250Q2xhc3Nlc31cbiAgICAgICAgICAgICAgICBkaXNhYmxlVHlwb2dyYXBoeT17dHJ1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9MaXN0PlxuICApO1xuICB2YXIgYnJhbmQgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N1bmpwMTIzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29MaW5rfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0ltYWdlfT5cbiAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bG9nb1RleHR9XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIaWRkZW4gbWRVcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXG4gICAgICAgICAgYW5jaG9yPVwicmlnaHRcIlxuICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXJcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xvc2U9e3Byb3BzLmhhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICBNb2RhbFByb3BzPXt7XG4gICAgICAgICAgICBrZWVwTW91bnRlZDogdHJ1ZSAvLyBCZXR0ZXIgb3BlbiBwZXJmb3JtYW5jZSBvbiBtb2JpbGUuXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHticmFuZH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyV3JhcHBlcn0+XG4gICAgICAgICAgICA8SGVhZGVyTGlua3NDb250YWluZXIgLz5cbiAgICAgICAgICAgIHtsaW5rc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aW1hZ2UgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tncm91bmR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBpbWFnZSArIFwiKVwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgIDwvSGlkZGVuPlxuICAgICAgPEhpZGRlbiBzbURvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgPERyYXdlclxuICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxuICAgICAgICAgIG9wZW5cbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlclxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7YnJhbmR9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZWJhcldyYXBwZXJ9PntsaW5rc308L2Rpdj5cbiAgICAgICAgICB7aW1hZ2UgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tncm91bmR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBpbWFnZSArIFwiKVwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgIDwvSGlkZGVuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2lkZWJhci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzaWRlYmFyU3R5bGUpKFNpZGViYXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IFNuYWNrIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuaW1wb3J0IENsb3NlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IHNuYWNrYmFyQ29udGVudFN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL3NuYWNrYmFyQ29udGVudFN0eWxlLmpzeFwiO1xuXG5mdW5jdGlvbiBTbmFja2Jhcih7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBtZXNzYWdlLCBjb2xvciwgY2xvc2UsIGljb24sIHBsYWNlLCBvcGVuICxhdXRvSGlkZUR1cmF0aW9uLG9uQ2xvc2V9ID0gcHJvcHM7XG4gIHZhciBhY3Rpb24gPSBbXTtcbiAgY29uc3QgbWVzc2FnZUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5pY29uTWVzc2FnZV06IGljb24gIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgaWYgKGNsb3NlICE9PSB1bmRlZmluZWQpIHtcbiAgICBhY3Rpb24gPSBbXG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn1cbiAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbG9zZU5vdGlmaWNhdGlvbigpfVxuICAgICAgPlxuICAgICAgICA8Q2xvc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlfSAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgIF07XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8U25hY2tcbiAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICB2ZXJ0aWNhbDogcGxhY2UuaW5kZXhPZihcInRcIikgPT09IC0xID8gXCJib3R0b21cIiA6IFwidG9wXCIsXG4gICAgICAgIGhvcml6b250YWw6XG4gICAgICAgICAgcGxhY2UuaW5kZXhPZihcImxcIikgIT09IC0xXG4gICAgICAgICAgICA/IFwibGVmdFwiXG4gICAgICAgICAgICA6IHBsYWNlLmluZGV4T2YoXCJjXCIpICE9PSAtMSA/IFwiY2VudGVyXCIgOiBcInJpZ2h0XCJcbiAgICAgIH19XG4gICAgICBvcGVuPXtvcGVufVxuICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgIGF1dG9IaWRlRHVyYXRpb249e2F1dG9IaWRlRHVyYXRpb259XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb249ezEwMDB9XG4gICAgICByZXN1bWVIaWRlRHVyYXRpb249e251bGx9XG4gICAgICBtZXNzYWdlPXtcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7aWNvbiAhPT0gdW5kZWZpbmVkID8gPHByb3BzLmljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+IDogbnVsbH1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e21lc3NhZ2VDbGFzc2VzfT57bWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICBDb250ZW50UHJvcHM9e3tcbiAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMucm9vdCArIFwiIFwiICsgY2xhc3Nlc1tjb2xvcl0sXG4gICAgICAgICAgbWVzc2FnZTogY2xhc3Nlcy5tZXNzYWdlXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cblxuU25hY2tiYXIucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1wiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCIsIFwicHJpbWFyeVwiXSksXG4gIGNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIHBsYWNlOiBQcm9wVHlwZXMub25lT2YoW1widGxcIiwgXCJ0clwiLCBcInRjXCIsIFwiYnJcIiwgXCJibFwiLCBcImJjXCJdKSxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc25hY2tiYXJDb250ZW50U3R5bGUpKFNuYWNrYmFyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgdHlwb2dyYXBoeVN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9jb21wb25lbnRzL3R5cG9ncmFwaHlTdHlsZS5qc3hcIjtcblxuZnVuY3Rpb24gRGFuZ2VyKHsgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7IGNsYXNzZXMsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWZhdWx0Rm9udFN0eWxlICsgXCIgXCIgKyBjbGFzc2VzLmRhbmdlclRleHR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5EYW5nZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXModHlwb2dyYXBoeVN0eWxlKShEYW5nZXIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRWYWx1ZSB7XG4gICAgY29uc3RydWN0b3IobGFiZWxUZXh0LHBsYWNlaG9sZGVyLHZhbHVlLG9uQ2hhbmdlLHR5cGU9J3RleHQnKXtcbiAgICAgIHRoaXMubGFiZWxUZXh0ID0gbGFiZWxUZXh0XG4gICAgICB0aGlzLmlucHV0UHJvcHMgPSB7XG4gICAgICAgIHBsYWNlaG9sZGVyOnBsYWNlaG9sZGVyLFxuICAgICAgICBvbkNoYW5nZTpvbkNoYW5nZSxcbiAgICAgICAgdmFsdWU6dmFsdWUsXG4gICAgICB9XG4gICAgICBpZih0eXBlID09ICdmaWxlJyl7XG4gICAgICAgIHRoaXMuaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgLi4udGhpcy5pbnB1dFByb3BzLFxuICAgICAgICB0eXBlOidmaWxlJyxcbiAgICAgICAgZmlsZTonJyxcbiAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgYWNjZXB0OidpbWFnZS8qJyxcbiAgICAgICAgICBzdHlsZTp7XG4gICAgICAgICAgICBcInRleHRJbmRlbnRcIjpcIi0yMDBweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgfVxuICAgICAgdGhpcy5lcnJvciA9IGZhbHNlXG4gICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZVxuICAgIH1cbiAgfSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEpTRW5jcnlwdCB9IGZyb20gXCJqc2VuY3J5cHRcIlxuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuLy8gaW1wb3J0IENsb3VkIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvdWRcIjtcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgRGlhbG9nQ29tcG9uZW50IGZyb20gXCIuLi9EaWFsb2cvRGlhbG9nXCI7XG5pbXBvcnQgRGlhbG9nVGl0bGVDb21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dDb250ZW50XCI7XG5pbXBvcnQgRGlhbG9nQWN0aW9uQ29tcG9uZW50IGZyb20gXCIuLi9EaWFsb2cvRGlhbG9nQWN0aW9uXCI7XG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcIi4uL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0XCI7XG5cbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC92YWxpZGF0ZVwiXG5cbmNvbnN0IGRpYWxvZ1N0eWxlID0ge1xuICAgIHBhcGVyOntcbiAgICAgIHdpZHRoOlwiNTAwcHhcIlxuICAgIH1cbn1cbmNsYXNzIElucHV0VmFsdWUge1xuICBjb25zdHJ1Y3RvcihsYWJlbFRleHQscGxhY2Vob2xkZXIsb25DaGFuZ2UsdHlwZT0ndGV4dCcpe1xuICAgIHRoaXMubGFiZWxUZXh0ID0gbGFiZWxUZXh0XG4gICAgdGhpcy5pbnB1dFByb3BzID0ge1xuICAgICAgcGxhY2Vob2xkZXI6cGxhY2Vob2xkZXIsXG4gICAgICBvbkNoYW5nZTpvbkNoYW5nZSxcbiAgICAgIHZhbHVlOicnLFxuICAgIH1cbiAgICBpZih0eXBlID09ICdmaWxlJyl7XG4gICAgICB0aGlzLmlucHV0UHJvcHMgPSB7XG4gICAgICAuLi50aGlzLmlucHV0UHJvcHMsXG4gICAgICB0eXBlOidmaWxlJyxcbiAgICAgIGZpbGU6JycsXG4gICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgYWNjZXB0OidpbWFnZS8qJyxcbiAgICAgICAgc3R5bGU6e1xuICAgICAgICAgIFwidGV4dEluZGVudFwiOlwiLTIwMHB4XCJcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICB9XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlXG4gICAgdGhpcy5zdWNjZXNzID0gZmFsc2VcbiAgfVxufVxuY2xhc3MgVXNlckluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5vbk5hbWVDaGFuZ2UgPSB0aGlzLm9uTmFtZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbk5pY2tuYW1lQ2hhbmdlID0gdGhpcy5vbk5pY2tuYW1lQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ29udGFjdENoYW5nZSA9IHRoaXMub25Db250YWN0Q2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQXZhdG9yQ2hhbmdlID0gdGhpcy5vbkF2YXRvckNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhc3N3b3JkQ2hhbmdlID0gdGhpcy5vblBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnNldEZpZWxkVmFsdWUgPSB0aGlzLnNldEZpZWxkVmFsdWUuYmluZCh0aGlzKVxuICAgIHRoaXMub25JdGVtQ29uZmlybSA9IHRoaXMub25JdGVtQ29uZmlybS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkl0ZW1DYW5jZWwgPSB0aGlzLm9uSXRlbUNhbmNlbC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBuYW1lOm5ldyBJbnB1dFZhbHVlKCflp5PlkI0nLCfor7floavlhpnnnJ/lrp7lp5PlkI0nLHRoaXMub25OYW1lQ2hhbmdlKSxcbiAgICAgICAgbmlja25hbWU6bmV3IElucHV0VmFsdWUoJ+aYteensCcsJ+aYteensCcsdGhpcy5vbk5pY2tuYW1lQ2hhbmdlKSxcbiAgICAgICAgYXZhdG9yOm5ldyBJbnB1dFZhbHVlKCflpLTlg48nLCflpLTlg48nLHRoaXMub25BdmF0b3JDaGFuZ2UsJ2ZpbGUnKSxcbiAgICAgICAgY29udGFjdDpuZXcgSW5wdXRWYWx1ZSgn6IGU57O75pa55byPJywn6K+36L6T5YWl5pyJ5pWI5omL5py65oiW6YKu566xJyx0aGlzLm9uQ29udGFjdENoYW5nZSksXG4gICAgICAgIHBhc3N3b3JkOm5ldyBJbnB1dFZhbHVlKCflr4bnoIEnLCc25L2N5Lul5LiK77yM5a2X5q+NK+aVsOWtlyvnibnmrorlrZfnrKblpoJzdW5AMTIzJyx0aGlzLm9uUGFzc3dvcmRDaGFuZ2UpXG4gICAgfVxuICB9XG4gIG9uTmFtZUNoYW5nZShldikge1xuICAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgICBjb25zdCBzdWNjZXNzID0gL15bXFx1NEUwMC1cXHU5RkE1XSskLy50ZXN0KHZhbHVlKSB8fCAvXlthLXpBLVpdKyQvLnRlc3QodmFsdWUpXG4gICAgIGNvbnN0IG5hbWUgPSB7XG4gICAgICAgICAuLi50aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5uYW1lLmlucHV0UHJvcHMsXG4gICAgICAgICAgICB2YWx1ZTpldi50YXJnZXQudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgfVxuICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICBuYW1lXG4gICAgIH0pXG4gIH1cbiAgb25OaWNrbmFtZUNoYW5nZShldikge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAhIWV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IG5pY2tuYW1lID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLm5pY2tuYW1lLFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5uaWNrbmFtZS5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yOiFzdWNjZXNzLFxuICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5pY2tuYW1lXG4gICAgfSlcbiB9XG4gb25Db250YWN0Q2hhbmdlKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldi50YXJnZXQudmFsdWVcbiAgICBjb25zdCBzdWNjZXNzID0gdmFsaWRhdGUuaXNFbWFpbCh2YWx1ZSkgfHwgdmFsaWRhdGUuaXNQaG9uZSh2YWx1ZSlcblxuICAgIGNvbnN0IGNvbnRhY3QgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuY29udGFjdCxcbiAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUuY29udGFjdC5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yOiFzdWNjZXNzLFxuICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRhY3RcbiAgICB9KVxuICB9XG4gIG9uQXZhdG9yQ2hhbmdlKGV2KXtcbiAgICBjb25zdCBmaWxlID0gZXYudGFyZ2V0LmZpbGVzWzBdLHN1Y2Nlc3MgPSAhIWZpbGVcbiAgICBjb25zdCBhdmF0b3IgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuYXZhdG9yLFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5hdmF0b3IuaW5wdXRQcm9wcyxcbiAgICAgICAgICB2YWx1ZTpldi50YXJnZXQudmFsdWUsXG4gICAgICAgICAgZmlsZVxuICAgICAgfSxcbiAgICAgIGVycm9yOiFzdWNjZXNzLFxuICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGF2YXRvclxuICAgIH0pXG4gIH1cbiAgb25QYXNzd29yZENoYW5nZShldil7XG4gICAgY29uc3QgdmFsdWUgPSBldi50YXJnZXQudmFsdWVcbiAgICBjb25zdCBzdWNjZXNzID0gdmFsaWRhdGUuaXNQYXNzd29yZCh2YWx1ZSlcblxuICAgIGNvbnN0IHBhc3N3b3JkID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5wYXNzd29yZC5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yOiFzdWNjZXNzLFxuICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhc3N3b3JkXG4gICAgfSlcbiAgfVxuICBvbkl0ZW1Db25maXJtKCl7XG5cbiAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCksZW5jcnlwdCA9IG5ldyBKU0VuY3J5cHQoKTtcbiAgICAgZW5jcnlwdC5zZXRQdWJsaWNLZXkod2luZG93Ll9fUFVCTElDX0tFWV9fKTtcbiAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIG5hbWU6dGhpcy5zdGF0ZS5uYW1lLmlucHV0UHJvcHMudmFsdWUsXG4gICAgICBuaWNrbmFtZTp0aGlzLnN0YXRlLm5pY2tuYW1lLmlucHV0UHJvcHMudmFsdWUsXG4gICAgICBjb250YWN0OnRoaXMuc3RhdGUuY29udGFjdC5pbnB1dFByb3BzLnZhbHVlLFxuICAgICAgYXZhdG9yOnRoaXMuc3RhdGUuYXZhdG9yLmlucHV0UHJvcHMuZmlsZSxcbiAgICAgIHBhc3N3b3JkOmVuY3J5cHQuZW5jcnlwdCh0aGlzLnN0YXRlLnBhc3N3b3JkLmlucHV0UHJvcHMudmFsdWUpLFxuICAgIH07XG5cbiAgICBPYmplY3QuZW50cmllcyhwYXJhbXMpLm1hcChpdGVtPT57XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoaXRlbVswXSxpdGVtWzFdKVxuICAgICAgZm9ybURhdGEuYXBwZW5kLmFwcGx5KGZvcm1EYXRhLGl0ZW0pXG4gICAgfSlcbiAgICBjb25zdCBzZXRGaWVsZEVycm9yID0gKGZpZWxkKT0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtmaWVsZF06e1xuICAgICAgICAgICAuLi50aGlzLnN0YXRlW2ZpZWxkXSxcbiAgICAgICAgICAgZXJyb3I6dHJ1ZSxcbiAgICAgICAgICAgc3VjY2VzczpmYWxzZVxuICAgICAgICAgfVxuICAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMucHJvcHMuZmV0Y2hSZWdpc3RlclVzZXIoZm9ybURhdGEsKHR5cGUpPT57XG4gICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgY2FzZSAnTklDS05BTUVfRVhJU1QnOlxuICAgICAgICAgc2V0RmllbGRFcnJvcignbmlja25hbWUnKVxuICAgICAgICAgYnJlYWtcbiAgICAgICAgIGNhc2UgJ0VNQUlMX0VYSVNUJzpcbiAgICAgICAgIGNhc2UgJ1BIT05FX0VYSVNUJzpcbiAgICAgICAgIGNhc2UgJ0NPTlRBQ1QnOlxuICAgICAgICAgc2V0RmllbGRFcnJvcignY29udGFjdCcpXG4gICAgICAgICBicmVha1xuICAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uSXRlbUNhbmNlbCgpe1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKVxuICB9XG4gIHNldEZpZWxkVmFsdWUoZmllbGQsdmFsdWUpe1xuICAgIGlmKCF0aGlzLnN0YXRlW2ZpZWxkXSkgcmV0dXJuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZmllbGRdOntcbiAgICAgICAgIC4uLnRoaXMuc3RhdGVbZmllbGRdLFxuICAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlW2ZpZWxkXS5pbnB1dFByb3BzLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgIH0sXG4gICAgICAgICBlcnJvcjpmYWxzZSxcbiAgICAgICAgIHN1Y2Nlc3M6ZmFsc2VcbiAgICAgICB9XG4gICAgIH0pXG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcyl7XG4gICAgaWYocHJvcHMudXNlckluZm8mJnByb3BzLnVzZXJJbmZvLl9pZCl7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IHByb3BzLnVzZXJJbmZvO1xuICAgICAgT2JqZWN0LmtleXModXNlckluZm8pLm1hcCgoa2V5LGluZGV4KT0+e1xuICAgICAgICAgaWYoa2V5IT0nYXZhdG9yJyl7XG4gICAgICAgICAgIGlmKChrZXkgPT0gJ3Bob25lJyB8fCBrZXk9PSdlbWFpbCcpICYmIHVzZXJJbmZvW2tleV0pe1xuICAgICAgICAgICAgICBrZXkgPSAnY29udGFjdCdcbiAgICAgICAgICAgfVxuICAgICAgICAgICB0aGlzLnNldEZpZWxkVmFsdWUoa2V5LHVzZXJJbmZvW2tleV0pXG4gICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLW5hbWUnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsndXNlci1pdGVtLWRpYWxvZy1uaWNrbmFtZSd9IFxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLm5pY2tuYW1lfS8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLWNvbnRhY3QnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5jb250YWN0fS8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLXBhc3N3b3JkJ31cbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXtcbiAgICAgICAgICAgICAgICAgIHtjbGFzc05hbWU6J2l0ZW0tZm9ybSd9XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUucGFzc3dvcmR9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctYXZhdG9yJ30gXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUuYXZhdG9yfS8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbkNvbXBvbmVudD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGVtQ29uZmlybX0gPnt1c2VySW5mbz8n56Gu5a6aJzon5rOo5YaMJ308L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGVtQ2FuY2VsfSA+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhkaWFsb2dTdHlsZSkoVXNlckluZm8pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSlNFbmNyeXB0IH0gZnJvbSBcImpzZW5jcnlwdFwiXG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmVcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG4vLyBpbXBvcnQgQ2xvdWQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG91ZFwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dUaXRsZUNvbXBvbmVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiLi4vRGlhbG9nL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dBY3Rpb25cIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXRcIjtcblxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gICAgcGFwZXI6e1xuICAgICAgd2lkdGg6XCI1MDBweFwiXG4gICAgfVxufVxuXG5jbGFzcyBVc2VySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uQ29udGFjdENoYW5nZSA9IHRoaXMub25Db250YWN0Q2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UgPSB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5vbkl0ZW1Db25maXJtID0gdGhpcy5vbkl0ZW1Db25maXJtLmJpbmQodGhpcylcbiAgICB0aGlzLm9uSXRlbUNhbmNlbCA9IHRoaXMub25JdGVtQ2FuY2VsLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGNvbnRhY3Q6e1xuICAgICAgICAgICAgbGFiZWxUZXh0OifmiYvmnLrjgIHpgq7nrrHmiJbmmLXnp7AnLFxuICAgICAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+Whq+WGmeacieaViOeahOaJi+acuuOAgemCrueuseaIluaYteensCcsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6dGhpcy5vbkNvbnRhY3RDaGFuZ2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6JycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDp7XG4gICAgICAgICAgICBsYWJlbFRleHQ6J+WvhueggScsXG4gICAgICAgICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+35aGr5YaZ5a+G56CBJyxcbiAgICAgICAgICAgICAgICB0eXBlOidwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6dGhpcy5vblBhc3N3b3JkQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHZhbHVlOicnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOmZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczpmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkNvbnRhY3RDaGFuZ2UoZXYpIHtcbiAgICAgY29uc3Qgc3VjY2VzcyA9ICEhZXYudGFyZ2V0LnZhbHVlXG4gICAgIGNvbnN0IGNvbnRhY3QgPSB7XG4gICAgICAgICAuLi50aGlzLnN0YXRlLmNvbnRhY3QsXG4gICAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMsXG4gICAgICAgICAgICB2YWx1ZTpldi50YXJnZXQudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgfVxuICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGFjdFxuICAgICB9KVxuICB9XG4gIG9uUGFzc3dvcmRDaGFuZ2UoZXYpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gISFldi50YXJnZXQudmFsdWVcbiAgICBjb25zdCBwYXNzd29yZCA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgICBpbnB1dFByb3BzOntcbiAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wYXNzd29yZC5pbnB1dFByb3BzLFxuICAgICAgICAgICB2YWx1ZTpldi50YXJnZXQudmFsdWVcbiAgICAgICB9LFxuICAgICAgIGVycm9yOiFzdWNjZXNzLFxuICAgICAgIHN1Y2Nlc3NcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBhc3N3b3JkXG4gICAgfSlcbiAgfVxuXG4gIG9uSXRlbUNvbmZpcm0oKXtcbiAgICBsZXQgZW5jcnlwdCA9IG5ldyBKU0VuY3J5cHQoKTtcbiAgICBlbmNyeXB0LnNldFB1YmxpY0tleSh3aW5kb3cuX19QVUJMSUNfS0VZX18pO1xuICAgIGxldCBwYXNzd29yZCA9IGVuY3J5cHQuZW5jcnlwdCgnd2FuZ3lhbjUyMEAnKTtcblxuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIGNvbnRhY3Q6dGhpcy5zdGF0ZS5jb250YWN0LmlucHV0UHJvcHMudmFsdWUsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgfTtcbiAgICB0aGlzLnByb3BzLmZldGNoTG9naW5Vc2VyKHBhcmFtcylcbiAgfVxuICBvbkl0ZW1DYW5jZWwoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctY29udGFjdCd9XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLmNvbnRhY3R9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLXBhc3N3b3JkJ31cbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXtcbiAgICAgICAgICAgICAgICAgIHtjbGFzc05hbWU6J2l0ZW0tZm9ybSd9XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUucGFzc3dvcmR9ICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1Db25maXJtfSA+55m75b2VPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uSXRlbUNhbmNlbH0gPuWPlua2iDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbkNvbXBvbmVudD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nU3R5bGUpKFVzZXJJbmZvKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEpTRW5jcnlwdCB9IGZyb20gXCJqc2VuY3J5cHRcIlxuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuLy8gaW1wb3J0IENsb3VkIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvdWRcIjtcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgRGlhbG9nQ29tcG9uZW50IGZyb20gXCIuLi9EaWFsb2cvRGlhbG9nXCI7XG5pbXBvcnQgRGlhbG9nVGl0bGVDb21wb25lbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIi4uL0RpYWxvZy9EaWFsb2dDb250ZW50XCI7XG5pbXBvcnQgRGlhbG9nQWN0aW9uQ29tcG9uZW50IGZyb20gXCIuLi9EaWFsb2cvRGlhbG9nQWN0aW9uXCI7XG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcIi4uL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0XCI7XG5cbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC92YWxpZGF0ZVwiXG5pbXBvcnQgSW5wdXRWYWx1ZSBmcm9tIFwiLi91c2VyXCJcbmNvbnN0IGRpYWxvZ1N0eWxlID0ge1xuICAgIHBhcGVyOntcbiAgICAgIHdpZHRoOlwiNTAwcHhcIlxuICAgIH1cbn1cblxuY2xhc3MgVXNlckluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5vbk5hbWVDaGFuZ2UgPSB0aGlzLm9uTmFtZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbk5pY2tuYW1lQ2hhbmdlID0gdGhpcy5vbk5pY2tuYW1lQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ29udGFjdENoYW5nZSA9IHRoaXMub25Db250YWN0Q2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQXZhdG9yQ2hhbmdlID0gdGhpcy5vbkF2YXRvckNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhc3N3b3JkQ2hhbmdlID0gdGhpcy5vblBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcylcblxuICAgIHRoaXMub25JdGVtQ29uZmlybSA9IHRoaXMub25JdGVtQ29uZmlybS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkl0ZW1DYW5jZWwgPSB0aGlzLm9uSXRlbUNhbmNlbC5iaW5kKHRoaXMpXG4gICAgY29uc3QgdXNlckluZm8gPSBwcm9wcy51c2VySW5mbztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBuYW1lOm5ldyBJbnB1dFZhbHVlKCflp5PlkI0nLCfor7floavlhpnnnJ/lrp7lp5PlkI0nLHVzZXJJbmZvLm5hbWUsdGhpcy5vbk5hbWVDaGFuZ2UpLFxuICAgICAgICBuaWNrbmFtZTpuZXcgSW5wdXRWYWx1ZSgn5pi156ewJywn5pi156ewJyx1c2VySW5mby5uaWNrbmFtZSx0aGlzLm9uTmlja25hbWVDaGFuZ2UpLFxuICAgICAgICBhdmF0b3I6bmV3IElucHV0VmFsdWUoJ+WktOWDjycsJ+WktOWDjycsJycsdGhpcy5vbkF2YXRvckNoYW5nZSwnZmlsZScpLFxuICAgICAgICBjb250YWN0Om5ldyBJbnB1dFZhbHVlKCfogZTns7vmlrnlvI8nLCfor7fovpPlhaXmnInmlYjmiYvmnLrmiJbpgq7nrrEnLHVzZXJJbmZvLmVtYWlsfHx1c2VySW5mby5waG9uZSx0aGlzLm9uQ29udGFjdENoYW5nZSksXG4gICAgICAgIHBhc3N3b3JkOm5ldyBJbnB1dFZhbHVlKCflr4bnoIEnLCc25L2N5Lul5LiK77yM5a2X5q+NK+aVsOWtlyvnibnmrorlrZfnrKblpoJzdW5AMTIzJywnJyx0aGlzLm9uUGFzc3dvcmRDaGFuZ2UpXG4gICAgfVxuICB9XG4gIG9uTmFtZUNoYW5nZShldikge1xuICAgICBjb25zdCB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZVxuICAgICBjb25zdCBzdWNjZXNzID0gL15bXFx1NEUwMC1cXHU5RkE1XSskLy50ZXN0KHZhbHVlKSB8fCAvXlthLXpBLVpdKyQvLnRlc3QodmFsdWUpXG4gICAgIGNvbnN0IG5hbWUgPSB7XG4gICAgICAgICAuLi50aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5uYW1lLmlucHV0UHJvcHMsXG4gICAgICAgICAgICB2YWx1ZTpldi50YXJnZXQudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IXN1Y2Nlc3MsXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgfVxuICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICBuYW1lXG4gICAgIH0pXG4gIH1cbiAgb25OaWNrbmFtZUNoYW5nZShldikge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAhIWV2LnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IG5pY2tuYW1lID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLm5pY2tuYW1lLFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5uaWNrbmFtZS5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yOiFzdWNjZXNzLFxuICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5pY2tuYW1lXG4gICAgfSlcbiB9XG4gb25Db250YWN0Q2hhbmdlKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldi50YXJnZXQudmFsdWVcbiAgICBjb25zdCBzdWNjZXNzID0gdmFsaWRhdGUuaXNFbWFpbCh2YWx1ZSkgfHwgdmFsaWRhdGUuaXNQaG9uZSh2YWx1ZSlcblxuICAgIGNvbnN0IGNvbnRhY3QgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuY29udGFjdCxcbiAgICAgIGlucHV0UHJvcHM6e1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUuY29udGFjdC5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yOiFzdWNjZXNzLFxuICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRhY3RcbiAgICB9KVxuICB9XG4gIG9uQXZhdG9yQ2hhbmdlKGV2KXtcbiAgICBjb25zdCBmaWxlID0gZXYudGFyZ2V0LmZpbGVzWzBdLHN1Y2Nlc3MgPSAhIWZpbGVcbiAgICBjb25zdCBhdmF0b3IgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuYXZhdG9yLFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5hdmF0b3IuaW5wdXRQcm9wcyxcbiAgICAgICAgICB2YWx1ZTpldi50YXJnZXQudmFsdWUsXG4gICAgICAgICAgZmlsZVxuICAgICAgfSxcbiAgICAgIGVycm9yOiFzdWNjZXNzLFxuICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGF2YXRvclxuICAgIH0pXG4gIH1cbiAgb25QYXNzd29yZENoYW5nZShldil7XG4gICAgY29uc3QgdmFsdWUgPSBldi50YXJnZXQudmFsdWVcbiAgICBjb25zdCBzdWNjZXNzID0gdmFsaWRhdGUuaXNQYXNzd29yZCh2YWx1ZSlcblxuICAgIGNvbnN0IHBhc3N3b3JkID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5wYXNzd29yZC5pbnB1dFByb3BzLFxuICAgICAgICAgIHZhbHVlOmV2LnRhcmdldC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yOiFzdWNjZXNzLFxuICAgICAgc3VjY2Vzc1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhc3N3b3JkXG4gICAgfSlcbiAgfVxuICBvbkl0ZW1Db25maXJtKCl7XG5cbiAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCksZW5jcnlwdCA9IG5ldyBKU0VuY3J5cHQoKTtcbiAgICAgZW5jcnlwdC5zZXRQdWJsaWNLZXkod2luZG93Ll9fUFVCTElDX0tFWV9fKTtcbiAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIF9pZDp0aGlzLnByb3BzLnVzZXJJbmZvLl9pZCxcbiAgICAgIG5hbWU6dGhpcy5zdGF0ZS5uYW1lLmlucHV0UHJvcHMudmFsdWUsXG4gICAgICBuaWNrbmFtZTp0aGlzLnN0YXRlLm5pY2tuYW1lLmlucHV0UHJvcHMudmFsdWUsXG4gICAgICBjb250YWN0OnRoaXMuc3RhdGUuY29udGFjdC5pbnB1dFByb3BzLnZhbHVlLFxuICAgICAgYXZhdG9yOnRoaXMuc3RhdGUuYXZhdG9yLmlucHV0UHJvcHMuZmlsZSxcbiAgICAgIHBhc3N3b3JkOmVuY3J5cHQuZW5jcnlwdCh0aGlzLnN0YXRlLnBhc3N3b3JkLmlucHV0UHJvcHMudmFsdWUpLFxuICAgIH07XG5cbiAgICBPYmplY3QuZW50cmllcyhwYXJhbXMpLm1hcChpdGVtPT57XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoaXRlbVswXSxpdGVtWzFdKVxuICAgICAgZm9ybURhdGEuYXBwZW5kLmFwcGx5KGZvcm1EYXRhLGl0ZW0pXG4gICAgfSlcbiAgICBjb25zdCBzZXRGaWVsZEVycm9yID0gKGZpZWxkKT0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtmaWVsZF06e1xuICAgICAgICAgICAuLi50aGlzLnN0YXRlW2ZpZWxkXSxcbiAgICAgICAgICAgZXJyb3I6dHJ1ZSxcbiAgICAgICAgICAgc3VjY2VzczpmYWxzZVxuICAgICAgICAgfVxuICAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMucHJvcHMuZmV0Y2hNb2RpZnlVc2VyKGZvcm1EYXRhLCh0eXBlKT0+e1xuICAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgIGNhc2UgJ05JQ0tOQU1FX0VYSVNUJzpcbiAgICAgICAgIHNldEZpZWxkRXJyb3IoJ25pY2tuYW1lJylcbiAgICAgICAgIGJyZWFrXG4gICAgICAgICBjYXNlICdFTUFJTF9FWElTVCc6XG4gICAgICAgICBjYXNlICdQSE9ORV9FWElTVCc6XG4gICAgICAgICBjYXNlICdDT05UQUNUJzpcbiAgICAgICAgIHNldEZpZWxkRXJyb3IoJ2NvbnRhY3QnKVxuICAgICAgICAgYnJlYWtcbiAgICAgICB9XG4gICAgfSlcbiAgfVxuICBvbkl0ZW1DYW5jZWwoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLW5hbWUnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0IGlkPXsndXNlci1pdGVtLWRpYWxvZy1uaWNrbmFtZSd9IFxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLm5pY2tuYW1lfS8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLWNvbnRhY3QnfVxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e1xuICAgICAgICAgICAgICAgICAge2NsYXNzTmFtZTonaXRlbS1mb3JtJ31cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5jb250YWN0fS8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eyd1c2VyLWl0ZW0tZGlhbG9nLXBhc3N3b3JkJ31cbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXtcbiAgICAgICAgICAgICAgICAgIHtjbGFzc05hbWU6J2l0ZW0tZm9ybSd9XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUucGFzc3dvcmR9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3VzZXItaXRlbS1kaWFsb2ctYXZhdG9yJ30gXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17XG4gICAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lOidpdGVtLWZvcm0nfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUuYXZhdG9yfS8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbkNvbXBvbmVudD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGVtQ29uZmlybX0gPnt1c2VySW5mbz8n56Gu5a6aJzon5rOo5YaMJ308L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGVtQ2FuY2VsfSA+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhkaWFsb2dTdHlsZSkoVXNlckluZm8pO1xuIiwiY29uc3QgQVBJX1JPT1QgPSAnL2FwaS8nXG5leHBvcnQgY29uc3QgIEFQSSA9IHtcbiAgICBhZGRVc2VyOmAke0FQSV9ST09UfXVzZXIvcmVnaXN0ZXJgLFxuICAgIG1vZGlmeVVzZXI6YCR7QVBJX1JPT1R9dXNlci9tb2RpZnlgLFxuICAgIGxvZ2luVXNlcjpgJHtBUElfUk9PVH11c2VyL2xvZ2luYCxcbiAgICBsb2dvdXRVc2VyOmAke0FQSV9ST09UfXVzZXIvbG9nb3V0YFxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuXG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvVXNlci91c2VySW5mbydcblxuaW1wb3J0IEN1c3RvbVRhYnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXN0b21UYWJzL0N1c3RvbVRhYnMnXG5pbXBvcnQgVXNlckluZm9Db21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyL3VzZXJJbmZvJ1xuaW1wb3J0IFVzZXJMb2dpbkNvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXIvdXNlckxvZ2luJ1xuaW1wb3J0IFVzZXJNb2RpZnlDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyL3VzZXJNb2RpZnknXG5pbXBvcnQgRGlhbG9nQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZydcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dUaXRsZSdcblxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gICAgcGFwZXI6e1xuICAgICAgd2lkdGg6XCI0MDBweFwiXG4gICAgfVxufVxuY2xhc3MgVXNlckluZm9Db250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5vbkNhbmNlbCA9IHRoaXMub25DYW5jZWwuYmluZCh0aGlzKVxuICAgIH1cbiAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCB7IGNsYXNzZXMgLG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RGlhbG9nQ29tcG9uZW50IG9wZW49e29wZW59IG11aUNsYXNzZXM9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Ll9fVVNFUl9JTkZPX18mJndpbmRvdy5fX1VTRVJfSU5GT19fLl9pZD8oXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5L+u5pS555So5oi35L+h5oGvXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJNb2RpZnlDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IG9uQ2FuY2VsPXt0aGlzLm9uQ2FuY2VsfSB1c2VySW5mbz17d2luZG93Ll9fVVNFUl9JTkZPX199Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVRhYnMgdGFicz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiTmFtZTogXCLnlKjmiLfnmbvlvZVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQ29udGVudDogPFVzZXJMb2dpbkNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gb25DYW5jZWw9e3RoaXMub25DYW5jZWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiTmFtZTogXCLnlKjmiLfms6jlhoxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQ29udGVudDogPFVzZXJJbmZvQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBvbkNhbmNlbD17dGhpcy5vbkNhbmNlbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19IHBsYWluVGFicyA9IHt0cnVlfSBydGxBY3RpdmUgPSB7ZmFsc2V9IGhlYWRlckNvbG9yPXsnaW5mbyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9EaWFsb2dDb21wb25lbnQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUscHJvcHMpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcm9wc1xuICAgIH0gICBcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGZldGNoTG9naW5Vc2VyOihwYXJhbXMpPT57XG4gICAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb24uRl9DT01NT05fRkVUQ0hfTE9HSU5fVVNFUl9BQ1RJT04ocGFyYW1zKSlcbiAgICB9LFxuICAgIGZldGNoUmVnaXN0ZXJVc2VyOiAocGFyYW1zLGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb24uRl9DT01NT05fRkVUQ0hfQUREX1VTRVJfQUNUSU9OKHBhcmFtcyxjYWxsYmFjaykpXG4gICAgfSxcbiAgICBmZXRjaE1vZGlmeVVzZXI6IChwYXJhbXMsY2FsbGJhY2spID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbi5GX0NPTU1PTl9GRVRDSF9NT0RJRllfVVNFUl9BQ1RJT04ocGFyYW1zLGNhbGxiYWNrKSlcbiAgICB9ICBcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoZGlhbG9nU3R5bGUpKFVzZXJJbmZvQ29udGFpbmVyKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTGlua3MnXG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvVXNlci91c2VySW5mbydcblxuXG5jbGFzcyBIZWFkZXJMaW5rc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhlYWRlckxpbmtzIHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSxwcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb3BzXG4gICAgfSAgIFxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgZmV0Y2hMb2dvdXRVc2VyOigpPT57XG4gICAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb24uRl9DT01NT05fRkVUQ0hfTE9HT1VUX1VTRVJfQUNUSU9OKCkpXG4gICAgfSAgXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXJMaW5rc0NvbnRhaW5lcik7IiwiZXhwb3J0IGNvbnN0IFVQREFURV9FWFRFTkRfSU5GTyA9IFwiRl9IT01FX1VQREFURV9FWFRFTkRfSU5GT1wiIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3L2hvbWUuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnQvYWN0aW9uVHlwZXMnXG5cbmNvbnN0IHJlZHVjZXJNYXAgPSBuZXcgTWFwKCk7XG5cbnJlZHVjZXJNYXAuc2V0KHR5cGVzLlVQREFURV9FWFRFTkRfSU5GTywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLmRhdGFcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChyZWR1Y2VyTWFwLmhhcyhhY3Rpb24udHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIChyZWR1Y2VyTWFwLmdldChhY3Rpb24udHlwZSkpKHN0YXRlLCBhY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU/c3RhdGU6bnVsbDtcbn0iLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanN4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaG9tZVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5cbmxldCBkZWZhdWx0U3RvcmUgPSB7XG4gICAgYToxXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRTdG9yZSIsImltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBob21lXG59IiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbi8vIGNyZWF0ZXMgYSBiZWF1dGlmdWwgc2Nyb2xsYmFyXG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcbmltcG9ydCBcInBlcmZlY3Qtc2Nyb2xsYmFyL2Nzcy9wZXJmZWN0LXNjcm9sbGJhci5jc3NcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4XCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanN4XCI7XG5cbmltcG9ydCBzaGFyZVJvdXRlcyBmcm9tIFwiLi4vLi4vcm91dGUvaG9tZS5qc3hcIjtcblxuaW1wb3J0IGRhc2hib2FyZFN0eWxlIGZyb20gXCIuLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC9sYXlvdXRzL2Rhc2hib2FyZFN0eWxlLmpzeFwiO1xuXG5pbXBvcnQgaW1hZ2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWcvc2lkZWJhci0yLmpwZ1wiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWcvcmVhY3Rsb2dvLnBuZ1wiO1xuXG5jb25zdCBzd2l0Y2hSb3V0ZXMgPSAoXG4gIDxTd2l0Y2g+XG4gICAge3NoYXJlUm91dGVzLm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICBpZighcHJvcCkgcmV0dXJuXG4gICAgICBpZiAocHJvcC5yZWRpcmVjdClcbiAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCBmcm9tPXtwcm9wLnBhdGh9IHRvPXtwcm9wLnRvfSBrZXk9e2tleX0gLz47XG4gICAgICByZXR1cm4gPFJvdXRlIHBhdGg9Jy92aWV3LzpwYWdlJyBjb21wb25lbnQ9e3Byb3AuY29tcG9uZW50fSBrZXk9e2tleX0gLz47XG4gICAgfSl9XG4gIDwvU3dpdGNoPlxuKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vYmlsZU9wZW46IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLnJlc2l6ZUZ1bmN0aW9uID0gdGhpcy5yZXNpemVGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlT3BlbjogIXRoaXMuc3RhdGUubW9iaWxlT3BlbiB9KTtcbiAgfTtcbiAgZ2V0Um91dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL21hcHNcIjtcbiAgfVxuICByZXNpemVGdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTYwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlT3BlbjogZmFsc2UgfSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZihcIldpblwiKSA+IC0xKSB7XG4gICAgICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKHRoaXMucmVmcy5tYWluUGFuZWwpO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUZ1bmN0aW9uKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoZSkge1xuICAgIGlmIChlLmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUgIT09IGUubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIHRoaXMucmVmcy5tYWluUGFuZWwuc2Nyb2xsVG9wID0gMDtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm1vYmlsZU9wZW4pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZU9wZW46IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUZ1bmN0aW9uKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cbiAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICByb3V0ZXM9e3NoYXJlUm91dGVzfVxuICAgICAgICAgIGxvZ29UZXh0PXtcIuiusOW9leW/q+S5kFwifVxuICAgICAgICAgIGxvZ289e2xvZ299XG4gICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgIGhhbmRsZURyYXdlclRvZ2dsZT17dGhpcy5oYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5tb2JpbGVPcGVufVxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5QYW5lbH0gcmVmPVwibWFpblBhbmVsXCI+XG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgcm91dGVzPXtzaGFyZVJvdXRlc31cbiAgICAgICAgICAgIGhhbmRsZURyYXdlclRvZ2dsZT17dGhpcy5oYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBPbiB0aGUgL21hcHMgcm91dGUgd2Ugd2FudCB0aGUgbWFwIHRvIGJlIG9uIGZ1bGwgc2NyZWVuIC0gdGhpcyBpcyBub3QgcG9zc2libGUgaWYgdGhlIGNvbnRlbnQgYW5kIGNvbmF0aW5lciBjbGFzc2VzIGFyZSBwcmVzZW50IGJlY2F1c2UgdGhleSBoYXZlIHNvbWUgcGFkZGluZ3Mgd2hpY2ggd291bGQgbWFrZSB0aGUgbWFwIHNtYWxsZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9Pntzd2l0Y2hSb3V0ZXN9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRhc2hib2FyZFN0eWxlKShBcHApO1xuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL3NoYXJlJ1xuaW1wb3J0IHsgZmV0Y2hHZXQsIGZldGNoUG9zdCB9IGZyb20gJy4uLy4uL3B1YmxpYy9odHRwJ1xuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FwaSdcbmNvbnN0IEZfU0hBUkVfU0FWRV9TSEFSRV9DQVRFR09SWSA9IChjYXRlZ29yeSk9Pih7XG4gICAgdHlwZTp0eXBlcy5TQVZFX1NIQVJFX0NBVEVHT1JZLFxuICAgIGNhdGVnb3J5XG59KVxuY29uc3QgRl9TSEFSRV9ERUxFVEVfU0hBUkVfQ0FURUdPUlkgPSAoY2F0ZWdvcnkpPT4oe1xuICAgIHR5cGU6dHlwZXMuREVMRVRFX1NIQVJFX0NBVEVHT1JZLFxuICAgIGNhdGVnb3J5XG59KVxuY29uc3QgRl9TSEFSRV9JTklUX0RBVEFfQUNUSU9OID0gKGNhdGVnb3JpZXMpPT4oe1xuICAgIHR5cGU6dHlwZXMuSU5JVF9EQVRBLFxuICAgIGNhdGVnb3JpZXNcbn0pXG5jb25zdCBGX1NIQVJFX1NBVkVfU0hBUkVfSVRFTSA9IChpdGVtKT0+KHtcbiAgICB0eXBlOnR5cGVzLlNBVkVfU0hBUkVfSVRFTSxcbiAgICBpdGVtXG59KVxuY29uc3QgRl9TSEFSRV9ERUxFVEVfU0hBUkVfSVRFTSA9IChjYXRlZ29yeSxfaWQpPT4oe1xuICAgIHR5cGU6dHlwZXMuREVMRVRFX1NIQVJFX0lURU0sXG4gICAgY2F0ZWdvcnksXG4gICAgX2lkXG59KVxuZXhwb3J0IGNvbnN0IEZfU0hBUkVfRkVUQ0hfU0hBUkVfSU5JVF9BQ1RJT04gPSAocGFnZSk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoLyosIGdldFN0YXRlKi8pID0+IHtcbiAgICAgICAgZmV0Y2hQb3N0KGAke0FQSS5nZXRTaGFyZUxpc3R9JHtwYWdlPT0ncHVibGljJz8nJzooJy8nK3dpbmRvdy5fX1VTRVJfSU5GT19fLl9pZCl9YCkudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKEZfU0hBUkVfSU5JVF9EQVRBX0FDVElPTihqc29uLnJlcykpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBGX1NIQVJFX0ZFVENIX1NBVkVfU0hBUkVfQ0FURUdPUlkgPSAocGFnZSxjYXRlZ29yeSxyZXNvbHZlLHJlamVjdCk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7IFxuICAgICAgICBmZXRjaFBvc3QoQVBJLnNhdmVTaGFyZUNhdGVnb3J5LGNhdGVnb3J5KS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbihqc29uID0+e1xuICAgICAgICAgICAgaWYoIShwYWdlPT0ncHVibGljJyYmIWNhdGVnb3J5LnB1YmxpY0ZsYWcpKXtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChGX1NIQVJFX1NBVkVfU0hBUkVfQ0FURUdPUlkoanNvbi5yZXMpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShqc29uKVxuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBGX1NIQVJFX0ZFVENIX0RFTEVURV9TSEFSRV9DQVRFR09SWSA9IChjYXRlZ29yeSxyZXNvbHZlLHJlamVjdCk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7IFxuICAgICAgICBmZXRjaEdldChgYXBpL3NoYXJlL2RlbGV0ZS9jYXRlZ29yeS8ke2NhdGVnb3J5fWApLnRoZW4ocmVzID0+IHJlcy5kYXRhKS50aGVuKGpzb24gPT57XG4gICAgICAgICAgICBkaXNwYXRjaChGX1NIQVJFX0RFTEVURV9TSEFSRV9DQVRFR09SWShjYXRlZ29yeSkpXG4gICAgICAgICAgICByZXNvbHZlKGpzb24pXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IEZfU0hBUkVfRkVUQ0hfU0FWRV9TSEFSRV9JVEVNID0gKGl0ZW0scmVzb2x2ZSxyZWplY3QpPT57XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4geyBcbiAgICAgICAgZmV0Y2hQb3N0KCcvYXBpL3NoYXJlL3NhdmUvaXRlbScsaXRlbSkudGhlbihyZXMgPT4gcmVzLmRhdGEpLnRoZW4oanNvbiA9PntcbiAgICAgICAgICAgIGpzb24ucmVzJiZkaXNwYXRjaChGX1NIQVJFX1NBVkVfU0hBUkVfSVRFTShqc29uLnJlcykpXG4gICAgICAgICAgICByZXNvbHZlKGpzb24pXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IEZfU0hBUkVfRkVUQ0hfREVMRVRFX1NIQVJFX0lURU0gPSAoaXRlbSxyZXNvbHZlLHJlamVjdCk9PntcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICAgIGZldGNoR2V0KGAvYXBpL3NoYXJlL2RlbGV0ZS9jYXRlZ29yeS8ke2l0ZW0uY2F0ZWdvcnl9L2l0ZW0vJHtpdGVtLl9pZH1gKS50aGVuKHJlcyA9PiByZXMuZGF0YSkudGhlbihqc29uID0+e1xuICAgICAgICAgICAgZGlzcGF0Y2goRl9TSEFSRV9ERUxFVEVfU0hBUkVfSVRFTShpdGVtLmNhdGVnb3J5LGl0ZW0uX2lkKSlcbiAgICAgICAgICAgIHJlc29sdmUoanNvbilcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmVcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIjtcblxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5pbXBvcnQgV2FybmluZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1dhcm5pbmdcIjtcbmltcG9ydCBUaXBzIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb1wiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIlxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCJcbi8vIGNvcmUgY29tcG9uZW50c1xuXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc3hcIjtcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc3hcIjtcblxuaW1wb3J0IERhbmdlciBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9UeXBvZ3JhcGh5L0Rhbmdlci5qc3hcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3hcIjtcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qc3hcIjtcbmltcG9ydCBDYXJkSWNvbiBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9DYXJkL0NhcmRJY29uLmpzeFwiO1xuaW1wb3J0IENhcmRCb2R5IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanN4XCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvQ2FyZC9DYXJkQ29udGVudC5qc3hcIjtcbmltcG9ydCBDYXJkRm9vdGVyIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qc3hcIjtcbmltcG9ydCB7ICBCdXR0b24gLCBUb29sdGlwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cblxuaW1wb3J0IGRhc2hib2FyZFN0eWxlIGZyb20gXCIuLi8uLi9hc3NldHMvanNzL21hdGVyaWFsLWRhc2hib2FyZC1yZWFjdC92aWV3cy9kYXNoYm9hcmRTdHlsZS5qc3hcIjtcblxuXG5jbGFzcyBTaGFyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uT3BlbkVkaXREaWFsb2cgPSB0aGlzLm9uT3BlbkVkaXREaWFsb2cuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVsZXRlSXRlbSA9IHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpXG5cdCAgdGhpcy5zdGF0ZSA9IHtcblx0XHQgdmFsdWU6IDBcblx0ICB9XG4gIH1cbiAgb25PcGVuRWRpdERpYWxvZyhjYXRlZ29yeSxpdGVtKXtcbiAgICB0aGlzLnByb3BzLm9wZW5FZGl0SXRlbURpYWxvZyhjYXRlZ29yeSxpdGVtKVxuICB9XG4gIGRlbGV0ZUl0ZW0oY2F0ZWdvcnksaXRlbSl7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVJdGVtKGNhdGVnb3J5LGl0ZW0pXG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIFxuICB9XG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlSW5kZXggPSBpbmRleCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBpbmRleCB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyAsIHNoYXJlfSA9IHRoaXMucHJvcHMsY2F0ZWdvcmllcyA9IHNoYXJlLmdldCgnY2F0ZWdvcmllcycpfHxbXVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICB7XG4gICAgICAgICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LGluZGV4KT0+e1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXIga2V5PXtpbmRleH0gPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj1cImluZm9cIiBzdGF0cyBpY29uPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEljb24gY29sb3I9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEljb24+e2NhdGVnb3J5Lm5hbWV9PC9JY29uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRJY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi5re75Yqg5YaF5a65XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZmFiXCIgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIkFkZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpPT57dGhpcy5wcm9wcy5vcGVuQWRkSXRlbURpYWxvZyhjYXRlZ29yeS5faWQpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLnvJbovpHliIbnsbtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJmYWJcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwiRWRpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpPT57dGhpcy5wcm9wcy5vcGVuRWRpdENhdGVnb3J5RGlhbG9nKGNhdGVnb3J5Ll9pZCxjYXRlZ29yeS5uYW1lKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIGNvbG9yPVwiYWN0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLliKDpmaTliIbnsbtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJmYWJcIiAgYXJpYS1sYWJlbD1cIkRlbGV0ZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpPT57dGhpcy5wcm9wcy5kZWxldGVDYXRlZ29yeShjYXRlZ29yeS5faWQpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2hpbGRyZW4mJmNhdGVnb3J5LmNoaWxkcmVuLm1hcCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGtleT17aW5kZXh9IGRlbGV0ZUl0ZW09eygpPT57dGhpcy5kZWxldGVJdGVtKGNhdGVnb3J5Ll9pZCxpdGVtKX19IG9uT3BlbkVkaXREaWFsb2c9eygpPT50aGlzLm9uT3BlbkVkaXREaWFsb2coY2F0ZWdvcnkuX2lkLGl0ZW0pfSBpbmZvPXt7Li4uaXRlbSxpbWc6Jy4uLy4uL3B1YmxpYy9pY29uL2xvZ28uc3ZnJ319IHhzPXs0fSBzbT17Mn0gbWQ9ezF9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhY2F0ZWdvcnkuY2hpbGRyZW4gfHwgY2F0ZWdvcnkuY2hpbGRyZW4ubGVuZ3RoID09IDAgPyhcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBzdGF0cz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YXRzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmdlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2FybmluZyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rhbmdlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+6K+l57G75LiL5pqC5peg5YaF5a6577yM6K+35re75Yqg5pyJ5pWI5YaF5a65PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPiBcbiAgICAgICAgICAgICAgICAgICAgKTpudWxsXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxHcmlkQ29udGFpbmVyIGtleT17Y2F0ZWdvcmllcy5sZW5ndGh9IGFkZEJ1dHRvbj17dHJ1ZX0gb25DbGljaz17dGhpcy5wcm9wcy5vcGVuQWRkQ2F0ZWdvcnlEaWFsb2d9PlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj1cImluZm9cIiBzdGF0cyBpY29uPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEljb24gY29sb3I9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRJY29uPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBzdGF0cz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhdHN9PlxuICAgICAgICAgICAgICAgICAgICAgIDxEYW5nZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlwcyBjb2xvcj17J2FjdGlvbid9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Rhbmdlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPueCueWHu+WNoeeJh+a3u+WKoDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblNoYXJlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRhc2hib2FyZFN0eWxlKShTaGFyZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmVcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG4vLyBpbXBvcnQgQ2xvdWQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG91ZFwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ1wiO1xuaW1wb3J0IERpYWxvZ1RpdGxlQ29tcG9uZW50IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ0FjdGlvblwiO1xuaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0XCI7XG5pbXBvcnQgU3dpdGNoTGFiZWxzIGZyb20gXCIuLi8uLi9mX2NvbW1vbi9jb21wb25lbnRzL1NlbGVjdGlvbi9zd2l0Y2hMYWJlbHNcIlxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XG4gICAgcGFwZXI6e1xuICAgICAgd2lkdGg6XCI0MDBweFwiXG4gICAgfVxufVxuXG5jbGFzcyBTaGFyZUNhdGVnb3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25DYXRlZ29yeUNoYW5nZSA9IHRoaXMub25DYXRlZ29yeUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNhdGVnb3J5Q29uZmlybSA9IHRoaXMub25DYXRlZ29yeUNvbmZpcm0uYmluZCh0aGlzKVxuICAgIHRoaXMub25DaGFuZ2VTd2l0Y2hMYWJlbCA9IHRoaXMub25DaGFuZ2VTd2l0Y2hMYWJlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgY2F0ZWdvcnk6JycsXG4gICAgICAgIHN3aXRjaExhYmVsczpbe1xuICAgICAgICAgIGxhYmVsOiflhazlhbHliIbkuqsnLFxuICAgICAgICAgIGNoZWNrZWQ6dHJ1ZSxcbiAgICAgICAgICB2YWx1ZToncHVibGljJyxcbiAgICAgICAgICBjb2xvcjoncHJpbWFyeSdcbiAgICAgICAgfV1cbiAgICB9XG4gIH1cbiAgb25DYXRlZ29yeUNoYW5nZShldikge1xuICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2F0ZWdvcnk6ZXYudGFyZ2V0LnZhbHVlXG4gICAgIH0pXG4gIH1cbiAgb25DYXRlZ29yeUNvbmZpcm0oKXtcbiAgICAgdGhpcy5wcm9wcy5zYXZlQ2F0ZWdvcnkoe25hbWU6dGhpcy5zdGF0ZS5jYXRlZ29yeXx8dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBfaWQ6dGhpcy5wcm9wcy5faWQsXG4gICAgICBwdWJsaWNGbGFnOnRoaXMuc3RhdGUuc3dpdGNoTGFiZWxzWzBdLmNoZWNrZWRcbiAgICB9KVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLmNhdGVnb3J5IT1uZXh0UHJvcHMuZGVmYXVsdFZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjYXRlZ29yeTpuZXh0UHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgICB9KVxuICAgIH0gIFxuICB9XG4gIG9uQ2hhbmdlU3dpdGNoTGFiZWwoY2hhbmdlU3dpdGNoSW5kZXgsZXZlbnQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3dpdGNoTGFiZWxzOnRoaXMuc3RhdGUuc3dpdGNoTGFiZWxzLm1hcCgoc3dpdGNoTGFiZWwsaW5kZXgpPT57XG4gICAgICAgICAgaWYoaW5kZXggPT0gY2hhbmdlU3dpdGNoSW5kZXgpe1xuICAgICAgICAgICAgc3dpdGNoTGFiZWwuY2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICBzd2l0Y2hMYWJlbC5sYWJlbCA9IHN3aXRjaExhYmVsLmNoZWNrZWQ/J+WFrOWFseWIhuS6qyc6J+aIkeeahOaUtuiXjydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN3aXRjaExhYmVsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyAsdGl0bGUgLCBvcGVufSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY3VzdG9tSW5wdXQgPSB7XG4gICAgICBmb3JtQ29udHJvbFByb3BzOntcbiAgICAgICAgICBjbGFzc05hbWU6J2NhdGVnb3J5LWZvcm0nXG4gICAgICB9LFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcImNhdGVnb3J5XCIsXG4gICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJjYXRlZ29yeVwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlOnRoaXMub25DYXRlZ29yeUNoYW5nZSxcbiAgICAgICAgdmFsdWU6dGhpcy5zdGF0ZS5jYXRlZ29yeVxuICAgICAgfSxcbiAgICAgIGxhYmVsVGV4dDonJyxcbiAgICAgIGlkOlwic2hhcmUtY2F0ZWdvcnktaW5wdXRcIixcbiAgICAgIHN1Y2Nlc3M6ZmFsc2UsXG4gICAgICBlcnJvcjpmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ0NvbXBvbmVudCBtdWlDbGFzc2VzPXtjbGFzc2VzfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPERpYWxvZ1RpdGxlQ29tcG9uZW50PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0RpYWxvZ1RpdGxlQ29tcG9uZW50PlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCB7Li4uY3VzdG9tSW5wdXR9IC8+XG4gICAgICAgICAgICA8U3dpdGNoTGFiZWxzIHN3aXRjaExhYmVscyA9IHt0aGlzLnN0YXRlLnN3aXRjaExhYmVsc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTd2l0Y2hMYWJlbH0vPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2F0ZWdvcnlDb25maXJtfSA+56Gu5a6aPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9uQ29tcG9uZW50PlxuICAgICAgPC9EaWFsb2dDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGRpYWxvZ1N0eWxlKShTaGFyZUNhdGVnb3J5KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZVxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbi8vIGltcG9ydCBDbG91ZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3VkXCI7XG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IERpYWxvZ0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nXCI7XG5pbXBvcnQgRGlhbG9nVGl0bGVDb21wb25lbnQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvRGlhbG9nL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0FjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi4vLi4vZl9jb21tb24vY29tcG9uZW50cy9EaWFsb2cvRGlhbG9nQWN0aW9uXCI7XG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcIi4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXRcIjtcbmNvbnN0IGRpYWxvZ1N0eWxlID0ge1xuICAgIHBhcGVyOntcbiAgICAgIHdpZHRoOlwiNTAwcHhcIlxuICAgIH1cbn1cblxuY2xhc3MgU2hhcmVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25UaXRsZUNoYW5nZSA9IHRoaXMub25UaXRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkxpbmtDaGFuZ2UgPSB0aGlzLm9uTGlua0NoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlID0gdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uSXRlbUNvbmZpcm0gPSB0aGlzLm9uSXRlbUNvbmZpcm0uYmluZCh0aGlzKVxuICAgIHRoaXMub25JdGVtQ2FuY2VsID0gdGhpcy5vbkl0ZW1DYW5jZWwuYmluZCh0aGlzKVxuICAgIHRoaXMub25JY29uQ2hhbmdlID0gdGhpcy5vbkljb25DaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHRpdGxlOifmoIfpopgnLFxuICAgICAgICBsaW5rOicnLFxuICAgICAgICBkZXNjcmlwdGlvbjonJ1xuICAgIH1cbiAgfVxuICBvblRpdGxlQ2hhbmdlKGV2KSB7XG4gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgIHRpdGxlOmV2LnRhcmdldC52YWx1ZVxuICAgICB9KVxuICB9XG4gIG9uTGlua0NoYW5nZShldikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaW5rOmV2LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gfVxuIG9uRGVzY3JpcHRpb25DaGFuZ2UoZXYpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRlc2NyaXB0aW9uOmV2LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cbiAgb25JY29uQ2hhbmdlKGV2KXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGljb246ZXYudGFyZ2V0LmZpbGVzWzBdXG4gICAgfSlcbiAgfVxuICBvbkl0ZW1Db25maXJtKCl7XG4gICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpLHBhcmFtcyA9IHtcbiAgICAgIGNhdGVnb3J5OnRoaXMucHJvcHMuY2F0ZWdvcnksXG4gICAgICBfaWQ6dGhpcy5wcm9wcy5pdGVtP3RoaXMucHJvcHMuaXRlbS5faWQ6JycsXG4gICAgICB0aXRsZTp0aGlzLnN0YXRlLnRpdGxlLFxuICAgICAgbGluazp0aGlzLnN0YXRlLmxpbmssXG4gICAgICBpY29uOnRoaXMuc3RhdGUuaWNvbixcbiAgICAgIGRlc2NyaXB0aW9uOnRoaXMuc3RhdGUuZGVzY3JpcHRpb24sXG4gICAgICB0YXJnZXQ6J19ibGFuaycsXG4gICAgfTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHBhcmFtcykubWFwKGl0ZW09PntcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChpdGVtWzBdLGl0ZW1bMV0pXG4gICAgICBmb3JtRGF0YS5hcHBlbmQuYXBwbHkoZm9ybURhdGEsaXRlbSlcbiAgICB9KVxuXG4gICAgdGhpcy5wcm9wcy5zYXZlSXRlbShmb3JtRGF0YSlcbiAgfVxuICBvbkl0ZW1DYW5jZWwoKXtcbiAgICB0aGlzLnByb3BzLmNhbmNlbEl0ZW0oKVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBpZihuZXh0UHJvcHMuaXRlbSl7XG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAuLi5uZXh0UHJvcHMuaXRlbVxuICAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgLHRpdGxlICwgb3Blbn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGN1c3RvbUlucHV0ID0ge1xuICAgICAgZm9ybUNvbnRyb2xQcm9wczp7XG4gICAgICAgICAgY2xhc3NOYW1lOidpdGVtLWZvcm0nXG4gICAgICB9LFxuICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcImNhdGVnb3J5XCIsXG4gICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJjYXRlZ29yeVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsYWJlbFRleHQ6J+agh+mimCcsXG4gICAgICBzdWNjZXNzOmZhbHNlLFxuICAgICAgZXJyb3I6ZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dDb21wb25lbnQgbXVpQ2xhc3Nlcz17Y2xhc3Nlc30gb3Blbj17b3Blbn0+XG4gICAgICAgIDxEaWFsb2dUaXRsZUNvbXBvbmVudD5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9EaWFsb2dUaXRsZUNvbXBvbmVudD5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eydzaGFyZS1pdGVtLWRpYWxvZy10aXRsZSd9ICBcbiAgICAgICAgICAgICAgICB7Li4uY3VzdG9tSW5wdXR9IFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dD17J+agh+mimCd9IFxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3suLi5jdXN0b21JbnB1dC5pbnB1dFByb3BzLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifmoIfpopgnLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOnRoaXMub25UaXRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTp0aGlzLnN0YXRlLnRpdGxlXG4gICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3NoYXJlLWl0ZW0tZGlhbG9nLWxpbmsnfSBcbiAgICAgICAgICAgICAgICB7Li4uY3VzdG9tSW5wdXR9IFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dD17J+mTvuaOpSd9ICBcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7Li4uY3VzdG9tSW5wdXQuaW5wdXRQcm9wcyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6ZO+5o6lJyxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTp0aGlzLm9uTGlua0NoYW5nZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTp0aGlzLnN0YXRlLmxpbmtcbiAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICA8Q3VzdG9tSW5wdXQgaWQ9eydzaGFyZS1pdGVtLWRpYWxvZy1kZXNjcmlwdGlvbid9IFxuICAgICAgICAgICAgICAgIHsuLi5jdXN0b21JbnB1dH0gXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0PXsn5o+P6L+wJ30gIFxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3suLi5jdXN0b21JbnB1dC5pbnB1dFByb3BzLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifmj4/ov7AnLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOnRoaXMub25EZXNjcmlwdGlvbkNoYW5nZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTp0aGlzLnN0YXRlLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbnB1dCBpZD17J3NoYXJlLWl0ZW0tZGlhbG9nLWltYWdlJ30gXG4gICAgICAgICAgICAgICAgey4uLmN1c3RvbUlucHV0fSBcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ9eyflm77moIcnfSAgXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17ey4uLmN1c3RvbUlucHV0LmlucHV0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+WbvuaghycsXG4gICAgICAgICAgICAgICAgdHlwZTonZmlsZScsXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wczp7XG4gICAgICAgICAgICAgICAgICBhY2NlcHQ6J2ltYWdlLyonXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTp0aGlzLm9uSWNvbkNoYW5nZVxuICAgICAgICAgICAgICB9fS8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbkNvbXBvbmVudD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGVtQ29uZmlybX0gPuehruWumjwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkl0ZW1DYW5jZWx9ID7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25Db21wb25lbnQ+XG4gICAgICA8L0RpYWxvZ0NvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoZGlhbG9nU3R5bGUpKFNoYXJlSXRlbSk7XG4iLCJjb25zdCBBUElfUk9PVCA9ICcvYXBpLydcbmV4cG9ydCBjb25zdCAgQVBJID0ge1xuICAgIGdldFNoYXJlTGlzdDpgJHtBUElfUk9PVH1zaGFyZS9saXN0YCxcbiAgICBzYXZlU2hhcmVDYXRlZ29yeTpgJHtBUElfUk9PVH1zaGFyZS9zYXZlL2NhdGVnb3J5YFxufSIsImV4cG9ydCBjb25zdCBVUERBVEVfRVhURU5EX0lORk8gPSBcIkZfU0hBUkVfVVBEQVRFX0VYVEVORF9JTkZPXCJcbmV4cG9ydCBjb25zdCBTQVZFX1NIQVJFX0NBVEVHT1JZID0gXCJGX1NIQVJFX1NBVkVfU0hBUkVfQ0FURUdPUllcIlxuZXhwb3J0IGNvbnN0IERFTEVURV9TSEFSRV9DQVRFR09SWSA9IFwiRl9TSEFSRV9ERUxFVEVfU0hBUkVfQ0FURUdPUllcIlxuZXhwb3J0IGNvbnN0IElOSVRfREFUQSA9IFwiRl9TSEFSRV9JTklUX0RBVEFcIlxuZXhwb3J0IGNvbnN0IFNBVkVfU0hBUkVfSVRFTSA9IFwiRl9TSEFSRV9TQVZFX1NIQVJFX0lURU1cIlxuZXhwb3J0IGNvbnN0IERFTEVURV9TSEFSRV9JVEVNID0gXCJGX1NIQVJFX0RFTEVURV9TSEFSRV9JVEVNXCJcbiIsImltcG9ydCBTaGFyZVBhZ2UgZnJvbSAnLi92aWV3cy9zaGFyZS5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlUGFnZSIsImltcG9ydCBzaGFyZSBmcm9tICcuL3NoYXJlLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNoYXJlXG59XG4iLCJpbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSdcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9zaGFyZS5qc3gnXG5cbmNvbnN0IHJlZHVjZXJNYXAgPSBuZXcgTWFwKCk7XG5cbnJlZHVjZXJNYXAuc2V0KHR5cGVzLlVQREFURV9FWFRFTkRfSU5GTywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgIH1cbn0pXG5cbnJlZHVjZXJNYXAuc2V0KHR5cGVzLklOSVRfREFUQSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gc3RhdGUudXBkYXRlKCdjYXRlZ29yaWVzJywoY2F0ZWdvcmllcyk9PiBJbW11dGFibGUuZnJvbUpTKFtdKS5jb25jYXQoYWN0aW9uLmNhdGVnb3JpZXMpKVxufSlcblxucmVkdWNlck1hcC5zZXQodHlwZXMuU0FWRV9TSEFSRV9DQVRFR09SWSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gc3RhdGUudXBkYXRlKCdjYXRlZ29yaWVzJywoY2F0ZWdvcmllcyk9PntcbiAgICAgICAgaWYoY2F0ZWdvcmllcy5zb21lKGNhdGVnb3J5PT5jYXRlZ29yeS5faWQ9PWFjdGlvbi5jYXRlZ29yeS5faWQpKXtcbiAgICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeT0+e1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3J5Ll9pZD09YWN0aW9uLmNhdGVnb3J5Ll9pZCl7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gYWN0aW9uLmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5wdXNoKGFjdGlvbi5jYXRlZ29yeSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxufSlcbnJlZHVjZXJNYXAuc2V0KHR5cGVzLkRFTEVURV9TSEFSRV9DQVRFR09SWSwoc3RhdGUsYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLnVwZGF0ZSgnY2F0ZWdvcmllcycsKGNhdGVnb3JpZXMpPT5jYXRlZ29yaWVzLmZpbHRlcihjYXRlZ29yeSA9PiBjYXRlZ29yeS5faWQgIT0gYWN0aW9uLmNhdGVnb3J5KSlcbn0pXG5yZWR1Y2VyTWFwLnNldCh0eXBlcy5TQVZFX1NIQVJFX0lURU0sIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLnVwZGF0ZSgnY2F0ZWdvcmllcycsKGNhdGVnb3JpZXMpPT57XG4gICAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeT0+e1xuICAgICAgICAgICAgaWYoY2F0ZWdvcnkuX2lkID09IGFjdGlvbi5pdGVtLmNhdGVnb3J5KXtcbiAgICAgICAgICAgICAgICBpZihjYXRlZ29yeS5jaGlsZHJlbi5zb21lKGl0ZW0gPT4gaXRlbS5faWQgPT0gYWN0aW9uLml0ZW0uX2lkKSl7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNoaWxkcmVuID0gY2F0ZWdvcnkuY2hpbGRyZW4ubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5faWQgPT0gYWN0aW9uLml0ZW0uX2lkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gYWN0aW9uLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNoaWxkcmVuLnB1c2goYWN0aW9uLml0ZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5XG4gICAgICAgIH0pXG4gICAgfSlcbn0pXG5cbnJlZHVjZXJNYXAuc2V0KHR5cGVzLkRFTEVURV9TSEFSRV9JVEVNLChzdGF0ZSxhY3Rpb24pID0+IHtcblxuICAgIHJldHVybiBzdGF0ZS51cGRhdGUoJ2NhdGVnb3JpZXMnLChjYXRlZ29yaWVzKT0+e1xuICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgaWYoY2F0ZWdvcnkuX2lkID09IGFjdGlvbi5jYXRlZ29yeSl7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2hpbGRyZW4gPSBjYXRlZ29yeS5jaGlsZHJlbi5maWx0ZXIoaXRlbT0+aXRlbS5faWQhPWFjdGlvbi5faWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnlcbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBpZiAocmVkdWNlck1hcC5oYXMoYWN0aW9uLnR5cGUpKSB7XG4gICAgICAgIHJldHVybiAocmVkdWNlck1hcC5nZXQoYWN0aW9uLnR5cGUpKShzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlP3N0YXRlOm51bGw7XG59IiwiaW1wb3J0IHNoYXJlIGZyb20gJy4vc2hhcmUuanN4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2hhcmVcbn0iLCJcbmxldCBkZWZhdWx0U3RvcmUgPSB7XG4gICAgY2F0ZWdvcmllczpbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0U3RvcmUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBzaGFyZUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3NoYXJlJ1xuaW1wb3J0IFNoYXJlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmUnXG5pbXBvcnQgU2hhcmVJdGVtQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVJdGVtJ1xuaW1wb3J0IFNoYXJlQ2F0ZWdvcnlDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZUNhdGVnb3J5J1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4uLy4uL2ZfY29tbW9uL2NvbXBvbmVudHMvU25hY2tiYXIvU25hY2tiYXInXG5jbGFzcyBTaGFyZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnNhdmVDYXRlZ29yeSA9IHRoaXMuc2F2ZUNhdGVnb3J5LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IHRoaXMuZGVsZXRlQ2F0ZWdvcnkuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9wZW5BZGRDYXRlZ29yeURpYWxvZyA9IHRoaXMub3BlbkFkZENhdGVnb3J5RGlhbG9nLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vcGVuRWRpdENhdGVnb3J5RGlhbG9nID0gdGhpcy5vcGVuRWRpdENhdGVnb3J5RGlhbG9nLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vcGVuQWRkSXRlbURpYWxvZyA9IHRoaXMub3BlbkFkZEl0ZW1EaWFsb2cuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9wZW5FZGl0SXRlbURpYWxvZyA9IHRoaXMub3BlbkVkaXRJdGVtRGlhbG9nLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zYXZlSXRlbSA9IHRoaXMuc2F2ZUl0ZW0uYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0gPSB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmNhbmNlbEl0ZW0gPSB0aGlzLmNhbmNlbEl0ZW0uYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2F0ZWdvcnlEaWFsb2c6ZmFsc2UsXG4gICAgICAgICAgICBpdGVtRGlhbG9nOntcbiAgICAgICAgICAgICAgICBvcGVuOmZhbHNlLFxuICAgICAgICAgICAgICAgIHRpdGxlOifmt7vliqDpobnnm64nLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OicnLFxuICAgICAgICAgICAgICAgIGl0ZW06bnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3J5OicnLFxuICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOicnLFxuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZTon5re75Yqg5YiG57G7JyxcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6JycsXG4gICAgICAgICAgICBzbmFja2Jhcjp7XG4gICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbjozMDAwLFxuICAgICAgICAgICAgICAgIG9wZW46ZmFsc2UsXG4gICAgICAgICAgICAgICAgcGxhY2U6J3RjJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOicnLFxuICAgICAgICAgICAgICAgIGNvbG9yOidzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBvbkNsb3NlOigpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc25hY2tiYXI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc25hY2tiYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBvcGVuQWRkQ2F0ZWdvcnlEaWFsb2coKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXRlZ29yeUlkOicnLFxuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZTon5re75Yqg5YiG57G7JyxcbiAgICAgICAgICAgIGNhdGVnb3J5RGlhbG9nOnRydWUsXG4gICAgICAgICAgICBjYXRlZ29yeU5hbWU6J+aWsOWIhuexu+WQjSdcbiAgICAgICAgfSlcbiAgICB9XG4gICAgb3BlbkVkaXRDYXRlZ29yeURpYWxvZyhfaWQsbmFtZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2F0ZWdvcnlJZDpfaWQsXG4gICAgICAgICAgICBjYXRlZ29yeVRpdGxlOifkv67mlLnliIbnsbsnLFxuICAgICAgICAgICAgY2F0ZWdvcnlEaWFsb2c6dHJ1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5TmFtZTpuYW1lXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNhdmVDYXRlZ29yeShjYXRlZ29yeSl7XG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hTYXZlQ2F0ZWdvcnkodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucGFnZSxjYXRlZ29yeSxyZXNvbHZlLHJlamVjdClcbiAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlEaWFsb2c6ZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBkZWxldGVDYXRlZ29yeShfaWQpe1xuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoRGVsZXRlQ2F0ZWdvcnkoX2lkLHJlc29sdmUscmVqZWN0KVxuICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzbmFja2Jhcjp7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc25hY2tiYXIsXG4gICAgICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTon6K+l57G75bey57uP6KKr5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6J2RhbmdlcidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgb3BlbkFkZEl0ZW1EaWFsb2coY2F0ZWdvcnkpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGl0ZW1EaWFsb2c6e1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaXRlbURpYWxvZyxcbiAgICAgICAgICAgICAgICBvcGVuOnRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6J+a3u+WKoOmhueebricsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgb3BlbkVkaXRJdGVtRGlhbG9nKGNhdGVnb3J5LGl0ZW0pe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGl0ZW1EaWFsb2c6e1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaXRlbURpYWxvZyxcbiAgICAgICAgICAgICAgICBvcGVuOnRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S/ruaUuemhueebricsXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzYXZlSXRlbShpdGVtKXtcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFNhdmVJdGVtKGl0ZW0scmVzb2x2ZSxyZWplY3QpXG4gICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGl0ZW1EaWFsb2c6e1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLml0ZW1EaWFsb2csXG4gICAgICAgICAgICAgICAgICAgIG9wZW46ZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZGVsZXRlSXRlbShjYXRlZ29yeSxpdGVtKXtcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERlbGV0ZUl0ZW0oe2NhdGVnb3J5LC4uLml0ZW19LHJlc29sdmUscmVqZWN0KVxuICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzbmFja2Jhcjp7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc25hY2tiYXIsXG4gICAgICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTon6K+l6aG55bey57uP6KKr5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6J2RhbmdlcidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2FuY2VsSXRlbSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGl0ZW1EaWFsb2c6e1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaXRlbURpYWxvZyxcbiAgICAgICAgICAgICAgICBvcGVuOmZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKG5leHRQcm9wcy5tYXRjaC5wYXJhbXMucGFnZSE9dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucGFnZSl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoSW5pdFNoYXJlTGlzdChuZXh0UHJvcHMubWF0Y2gucGFyYW1zLnBhZ2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEluaXRTaGFyZUxpc3QodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucGFnZSlcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPFNoYXJlQ29tcG9uZW50IGRlbGV0ZUNhdGVnb3J5PXt0aGlzLmRlbGV0ZUNhdGVnb3J5fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkVkaXRJdGVtRGlhbG9nPXt0aGlzLm9wZW5FZGl0SXRlbURpYWxvZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5BZGRJdGVtRGlhbG9nPXt0aGlzLm9wZW5BZGRJdGVtRGlhbG9nfSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5BZGRDYXRlZ29yeURpYWxvZz17dGhpcy5vcGVuQWRkQ2F0ZWdvcnlEaWFsb2d9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRWRpdENhdGVnb3J5RGlhbG9nPXt0aGlzLm9wZW5FZGl0Q2F0ZWdvcnlEaWFsb2d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7dGhpcy5kZWxldGVJdGVtfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPFNoYXJlQ2F0ZWdvcnlDb21wb25lbnQgc2F2ZUNhdGVnb3J5PXt0aGlzLnNhdmVDYXRlZ29yeX0gIG9wZW49e3RoaXMuc3RhdGUuY2F0ZWdvcnlEaWFsb2d9IHsuLi50aGlzLnByb3BzfSBfaWQ9e3RoaXMuc3RhdGUuY2F0ZWdvcnlJZH0gdGl0bGU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlUaXRsZX0gZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmNhdGVnb3J5TmFtZX0vPlxuICAgICAgICAgICAgICAgIDxTaGFyZUl0ZW1Db21wb25lbnQgXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEl0ZW09e3RoaXMuY2FuY2VsSXRlbX0gXG4gICAgICAgICAgICAgICAgICAgIHNhdmVJdGVtPXt0aGlzLnNhdmVJdGVtfVxuICAgICAgICAgICAgICAgICAgICBvcGVuID0ge3RoaXMuc3RhdGUuaXRlbURpYWxvZy5vcGVufVxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5pdGVtRGlhbG9nfSBcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPFNuYWNrYmFyIHsuLi50aGlzLnN0YXRlLnNuYWNrYmFyfS8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGFyZTogc3RhdGUuZ2V0KFwic2hhcmVcIilcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBmZXRjaEluaXRTaGFyZUxpc3Q6IChwYWdlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNoYXJlQWN0aW9uLkZfU0hBUkVfRkVUQ0hfU0hBUkVfSU5JVF9BQ1RJT04ocGFnZSkpXG4gICAgfSxcbiAgICBmZXRjaFNhdmVDYXRlZ29yeTogKHBhZ2UsY2F0ZWdvcnkscmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2hhcmVBY3Rpb24uRl9TSEFSRV9GRVRDSF9TQVZFX1NIQVJFX0NBVEVHT1JZKHBhZ2UsY2F0ZWdvcnkscmVzb2x2ZSxyZWplY3QpKVxuICAgIH0sXG4gICAgZmV0Y2hEZWxldGVDYXRlZ29yeTogKF9pZCxyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzaGFyZUFjdGlvbi5GX1NIQVJFX0ZFVENIX0RFTEVURV9TSEFSRV9DQVRFR09SWShfaWQscmVzb2x2ZSxyZWplY3QpKVxuICAgIH0sXG4gICAgZmV0Y2hTYXZlSXRlbTogKGl0ZW0scmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2hhcmVBY3Rpb24uRl9TSEFSRV9GRVRDSF9TQVZFX1NIQVJFX0lURU0oaXRlbSxyZXNvbHZlLHJlamVjdCkpXG4gICAgfSxcbiAgICBmZXRjaERlbGV0ZUl0ZW06KGl0ZW0scmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2hhcmVBY3Rpb24uRl9TSEFSRV9GRVRDSF9ERUxFVEVfU0hBUkVfSVRFTShpdGVtLHJlc29sdmUscmVqZWN0KSlcbiAgICB9ICAgIFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2hhcmVDb250YWluZXIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBzb2NrZXRDbGllbnQgZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QuY3NzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmUvaW5kZXguanN4XCJcbmltcG9ydCBpbmRleFJvdXRlcyBmcm9tIFwiLi9yb3V0ZS9pbmRleC5qc3hcIjtcblxuY29uc3Qgc29ja2V0ID0gc29ja2V0Q2xpZW50KCk7XG5zb2NrZXQub24oJ2Nvbm5lY3QnLCgpPT57XG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3QnKVxufSlcbnNvY2tldC5vbignc2hhcmUtbWVzc2FnZScsKGRhdGEpPT57XG4gIGNvbnNvbGUubG9nKGRhdGEpXG59KVxuXG5jb25zdCBoaXN0ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3R9PlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAge2luZGV4Um91dGVzLm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3V0ZSBwYXRoPXtwcm9wLnBhdGh9IGNvbXBvbmVudD17cHJvcC5jb21wb25lbnR9IGtleT17a2V5fSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcbiIsIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGNvbmZpZyA9PiB7XG4gICAgY29uZmlnLmhlYWRlcnMgPSB7IC4uLmNvbmZpZy5oZWFkZXJzLCAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScgLGFwcE5hbWU6bmF2aWdhdG9yLmFwcE5hbWV9XG4gICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKGNvbmZpZy51cmwuaW5jbHVkZXMoXCI/XCIpKSB7XG4gICAgICAgIGNvbmZpZy51cmwgPSBjb25maWcudXJsICsgXCImdj1cIiArIHI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnLnVybCA9IGNvbmZpZy51cmwgKyBcIj92PVwiICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZ1xufSlcbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVxufSwgKGVycm9yKSA9PiB7XG4gICAgXG59KVxuXG5mdW5jdGlvbiBxdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICByZXR1cm4gcGFyYW1zID8gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgICAubWFwKGsgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGspICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trXSkpXG4gICAgICAgIC5qb2luKCcmJykgOiAnJztcbn1cblxuZXhwb3J0IGNvbnN0IGdlblVybEZyb21QYXJhbXMgPSAodXJsLCBwYXJhbXMpID0+IHtcbiAgICBpZiAodXJsICYmIHBhcmFtcykge1xuICAgICAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcyB9XG4gICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgcXVlcnlQYXJhbXMocGFyYW1zKVxuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cblxuLyoqXG4gKiDku47lhajlsYDlj5jph4/nm7TmjqXorr/pl64gcHJldkNvbmQg44CQ5LiN5bu66K6u5L2/55So77yM5pyA5aW95LuOIHN0b3JlIOiOt+WPluOAkVxuICovXG5leHBvcnQgY29uc3QgZ2V0UHJldkNvbmRGcm9tR2xvYmFsID0gKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cuR2xvYmFsU2VhcmNoQ3JpdGVyaWEgfHwge31cbn1cblxuLyoqIFxuICog5LuO5YWo5bGA5Y+Y6YeP55u05o6l6K6/6ZeuIEdsb2JhbFN3aXRjaGVzICDjgJDkuI3lu7rorq7kvb/nlKjvvIzmnIDlpb3ku44gc3RvcmUg6I635Y+W44CRXG4qL1xuZXhwb3J0IGNvbnN0IGdldFN3aXRjaGVzRnJvbUdsb2JhbCA9ICgpID0+IHtcbiAgICByZXR1cm4gd2luZG93Lkdsb2JhbFN3aXRjaGVzIHx8IHt9XG59XG5cbi8qKiBcbiAqIOS7juWFqOWxgOWPmOmHj+ebtOaOpeiuv+mXriBHbG9iYWxDb25maWdzICDjgJDkuI3lu7rorq7kvb/nlKjvvIzmnIDlpb3ku44gc3RvcmUg6I635Y+W44CRXG4qL1xuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3NGcm9tR2xvYmFsID0gKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cuR2xvYmFsQ29uZmlncyB8fCB7fVxufVxuXG4vKipcbiAqIOS7juWFqOWxgOWPmOmHj+ebtOaOpeiuv+mXriBHbG9iYWxPcmRlckRhdGEg44CQ5LiN5bu66K6u5L2/55So77yM5pyA5aW95LuOIHN0b3JlIOiOt+WPluOAkVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJEYXRhRnJvbUdsb2JhbCA9ICgpID0+IHtcbiAgICByZXR1cm4gd2luZG93Lkdsb2JhbE9yZGVyRGF0YSB8fCB7fVxufVxuXG5sZXQgcHJldkNvbmQgPSBnZXRQcmV2Q29uZEZyb21HbG9iYWwoKSxcbiAgICB0cmFuc2FjdGlvbklEID0gcHJldkNvbmQudHJhbnNhY3Rpb25JRCxcbiAgICBleHRIZWFkZXIgPSB0cmFuc2FjdGlvbklEID8geyB0cmFuc2FjdGlvbklEIH0gOiB7fVxuXG4vL+azqOWFpemineWklueahCBleHRIZWFkZXIg5L+h5oGvXG5leHBvcnQgY29uc3QgaW5qZWN0RmV0Y2hFeHRIZWFkZXIgPSAoZXh0KSA9PiB7XG4gICAgZXh0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7fSwgZXh0SGVhZGVyLCBleHQpXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaEpzb25wR2V0ID0gKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgdXJsID0gZ2VuVXJsRnJvbVBhcmFtcyh1cmwsIHBhcmFtcylcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZldGNoSnNvbnAodXJsLCBPYmplY3QuYXNzaWduKHsgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSwgZXh0SGVhZGVyKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKHsgZGF0YTogcmVzLmpzb24oKSB9KVxuICAgICAgICAgICAgfSwgcmVhc29uID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KHJlYXNvbilcbiAgICAgICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoR2V0ID0gKHVybCwgcGFyYW1zLCBheGlvc0V4dGVuZE9wcyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIGZldGNoR2V0V2l0aEhlYWRlcnModXJsLCBwYXJhbXMsIHt9LCBheGlvc0V4dGVuZE9wcyk7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdldFdpdGhIZWFkZXJzID0gKHVybCwgcGFyYW1zLCBoZWFkZXJzID0ge30sIGF4aW9zRXh0ZW5kT3BzID0ge30pID0+IHtcbiAgICB1cmwgPSBnZW5VcmxGcm9tUGFyYW1zKHVybCwgcGFyYW1zKVxuICAgIGxldCBvcHMgPSB7XG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXG4gICAgICAgIH0sIGV4dEhlYWRlciwgaGVhZGVycylcbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbihvcHMsIGF4aW9zRXh0ZW5kT3BzKTtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCwgb3BzKVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hQb3N0ID0gKHVybCwgcGFyYW1zLCBheGlvc0V4dGVuZE9wcyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIGZldGNoUG9zdFdpdGhIZWFkZXJzKHVybCwgcGFyYW1zLCB7fSwgYXhpb3NFeHRlbmRPcHMpXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RXaXRoSGVhZGVycyA9ICh1cmwsIHBhcmFtcywgaGVhZGVycyA9IHt9LCBheGlvc0V4dGVuZE9wcyA9IHt9KSA9PiB7XG4gICAgbGV0IG9wcyA9IHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcbiAgICAgICAgfSwgZXh0SGVhZGVyLCBoZWFkZXJzKVxuICAgIH07XG4gICAgT2JqZWN0LmFzc2lnbihvcHMsIGF4aW9zRXh0ZW5kT3BzKTtcbiAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsIHBhcmFtcywgb3BzKVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hQb3N0Rm9ybSA9ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBheGlvcy5wb3N0KHVybCwgcGFyYW1zLCB7XG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCdcbiAgICAgICAgfSwgZXh0SGVhZGVyKVxuICAgIH0pXG59XG4iLCIvLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmRcIjtcbmltcG9ydCBTaGFyZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Db2xsZWN0aW9uc1wiXG5cbi8vIGNvcmUgY29tcG9uZW50cy92aWV3c1xuXG5pbXBvcnQgU2hhcmVQYWdlIGZyb20gXCIuLi9mX3NoYXJlL2luZGV4LmpzeFwiO1xuXG5jb25zdCBkYXNoYm9hcmRSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIi92aWV3L3B1YmxpY1wiLFxuICAgIHNpZGViYXJOYW1lOiBcIuWFrOWFseWIhuS6q1wiLFxuICAgIG5hdmJhck5hbWU6IFwi5YWs5YWx5YiG5LqrXCIsXG4gICAgaWNvbjogRGFzaGJvYXJkLFxuICAgIGxvZ2luSXNSZXF1aXJlZDpmYWxzZSxcbiAgICBjb21wb25lbnQ6IFNoYXJlUGFnZVxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvdmlldy9jb2xsZWN0aW9uXCIsXG4gICAgc2lkZWJhck5hbWU6IFwi5oiR55qE5pS26JePXCIsXG4gICAgbmF2YmFyTmFtZTogXCLmiJHnmoTmlLbol49cIixcbiAgICBpY29uOiBTaGFyZUljb24sXG4gICAgbG9naW5Jc1JlcXVpcmVkOnRydWUsXG4gICAgY29tcG9uZW50OiBTaGFyZVBhZ2VcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkUm91dGVzLmZpbHRlcihyb3V0ZT0+ICghcm91dGUubG9naW5Jc1JlcXVpcmVkIHx8IChyb3V0ZS5sb2dpbklzUmVxdWlyZWQmJndpbmRvdy5fX1VTRVJfSU5GT19fLl9pZCkpKTtcbiIsImltcG9ydCBIb21lIGZyb20gXCIuLi9mX2hvbWUvaW5kZXguanN4XCI7XG5cbmNvbnN0IGluZGV4Um91dGVzID0gW3sgcGF0aDogXCIvXCIsIGNvbXBvbmVudDogSG9tZSB9XTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhSb3V0ZXM7XG4iLCJpbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1yZWR1eFwiIC8vQ29ubmVjdGVkUm91dGVyIGFzIFJvdXRlcixcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCJcbmltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gXCJoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5XCJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCJcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiXG5cbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KClcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSldXG5cbi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbi8vICAgICBtaWRkbGV3YXJlLnB1c2goY3JlYXRlTG9nZ2VyKHsgY29sbGFwc2VkOiB0cnVlIH0pKVxuLy8gfVxuXG5sZXQgZGV2VG9vbCA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuXG5sZXQgcmVzdG9yZVBlcnNpc3QgPSAoc3RvcmUsIGJsYWNrbGlzdCwgd2hpdGVsaXN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcGVyc2lzdFN0b3JlKFxuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICB7IGJsYWNrbGlzdDogYmxhY2tsaXN0LCB3aGl0ZWxpc3Q6IHdoaXRlbGlzdCB9LFxuICAgICAgICAgICAgKCkgPT4geyB9XG4gICAgICAgIClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInBlcnNpc3Qgc3RvcmUgZXJyb3IhXCIsIGUpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGV2VG9vbDogZGV2VG9vbCxcbiAgICByZXN0b3JlUGVyc2lzdDogcmVzdG9yZVBlcnNpc3Rcbn1cbiIsIlxuXG5cblxuY29uc3Qgc3RvcmVMaXN0ID0gKCgpPT57XG4gICAgbGV0IGNhY2hlID0ge307XG5cbiAgICBmdW5jdGlvbiBpbXBvcnRBbGwgKHIpIHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaChrZXkgPT4gY2FjaGVba2V5XSA9IHIoa2V5KS5kZWZhdWx0KTtcbiAgICB9XG5cbiAgICBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi8nLHRydWUsL2ZfLipcXC9zdG9yZXM/XFwvaW5kZXguanN4LykpXG5cbiAgICByZXR1cm4gIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCxPYmplY3QudmFsdWVzKGNhY2hlKSlcbn0pKClcblxuY29uc3QgcmVkdWNlckxpc3QgPSAoKCk9PntcbiAgICBsZXQgY2FjaGUgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGltcG9ydEFsbCAocikge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKGtleSA9PiBjYWNoZVtrZXldID0gcihrZXkpLmRlZmF1bHQpO1xuICAgIH1cblxuICAgIGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uLycsdHJ1ZSwvZl8uKlxcL3JlZHVjZXJzP1xcL2luZGV4LmpzeC8pKVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCxPYmplY3QudmFsdWVzKGNhY2hlKSlcbn0pKClcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgtaW1tdXRhYmxlJ1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5pbXBvcnQgYmFzZSBmcm9tICcuL2Jhc2UuanN4J1xuXG5jb25zdCBkZWZhdWx0UmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMocmVkdWNlckxpc3QpO1xuXG5jb25zdCBkZWZhdWx0U3RvcmUgPSBJbW11dGFibGUuZnJvbUpTKHN0b3JlTGlzdCk7XG5cblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIGRlZmF1bHRSZWR1Y2VycyxcbiAgICBkZWZhdWx0U3RvcmUsXG4gICAgYmFzZS5kZXZUb29sXG4pXG5leHBvcnQgZGVmYXVsdCBzdG9yZSIsImNvbnN0IEVNQUlMX1ZBTElEQVRFID0gdmFsdWUgPT4gL14oW0EtWmEtejAtOV9cXC1cXC5dKStcXEAoW0EtWmEtejAtOV9cXC1cXC5dKStcXC4oW0EtWmEtel17Miw0fSkkLy50ZXN0KHZhbHVlKVxuY29uc3QgUEhPTkVfVkFMSURBVEUgPSB2YWx1ZSA9PiAvXlsxXVszLTldWzAtOV17OX0kLy50ZXN0KHZhbHVlKVxuY29uc3QgUEFTU1dPUkRfVkFMSURBVEUgPSB2YWx1ZSA9PiAvXi4qKD89Lns3LH0pKD89LipcXGQpKD89LipbYS16XSkoPz0uKlshQCMkJV4mKj8gXSkuKiQvLnRlc3QodmFsdWUpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVmFsaWRhdGUge1xuICAgIHN0YXRpYyBpc0VtYWlsKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIEVNQUlMX1ZBTElEQVRFKHZhbHVlKVxuICAgIH1cbiAgICBzdGF0aWMgaXNQaG9uZSh2YWx1ZSl7XG4gICAgICAgIHJldHVybiBQSE9ORV9WQUxJREFURSh2YWx1ZSlcbiAgICB9XG4gICAgc3RhdGljIGlzUGFzc3dvcmQodmFsdWUpe1xuICAgICAgICByZXR1cm4gUEFTU1dPUkRfVkFMSURBVEUodmFsdWUpXG4gICAgfVxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=