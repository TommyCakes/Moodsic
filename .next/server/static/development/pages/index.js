module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FlexParent.js":
/*!**********************************!*\
  !*** ./components/FlexParent.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tommy/React/Moodsick/components/FlexParent.js";

var mainImage1 = "/static/images/music/10.jpg";
var mainImage2 = "/static/images/music/11.jpg";
var mainImage3 = "/static/images/music/15.jpg";
var smallImage1 = "/static/images/music/11.jpg";
var smallImage2 = "/static/images/music/11.jpg";
var smallImage3 = "/static/images/music/11.jpg";
var smallImage4 = "/static/images/music/11.jpg";
var smallImage5 = "/static/images/music/11.jpg";
var discImage1 = "/static/images/music/6.jpg";
var discImage2 = "/static/images/music/11.jpg";
var discImage3 = "/static/images/music/11.jpg";
var discImage4 = "/static/images/music/11.jpg";
var discImage5 = "/static/images/music/11.jpg";
var parentStyle = {
  margin: "10px 0px",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "flex-start",
  justifyContent: "center",
  alignContent: "center" // background:'#191927',

};
var div1Style = {
  // width:180,
  // height: 360,
  width: 420,
  height: 680,
  margin: 10,
  background: '#191927',
  borderRadius: 5,
  backgroundImage: "url(".concat(mainImage1, ")"),
  backgroundPosition: '10',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};
var div2Style = {
  // width:180,
  // height: 360,
  width: 420,
  height: 680,
  margin: 10,
  background: '#191927',
  borderRadius: 5,
  backgroundImage: "url(".concat(mainImage2, ")"),
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};
var div3Style = {
  // width:250,
  // height: 400,
  width: 550,
  height: 750,
  margin: 10,
  marginBottom: 50,
  background: '#191927',
  borderRadius: 5,
  backgroundImage: "url(".concat(mainImage3, ")"),
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};
var itemsStyle = {
  // background:'steelblue', 
  height: 110,
  width: '100',
  margin: 0,
  display: "flex",
  justifyContent: "center",
  marginBottom: '10%'
};
var boxStyle = {
  // height:100,
  // width: 100,
  width: 200,
  height: 200,
  background: "purple",
  borderRadius: 5,
  margin: 10,
  alignContent: "center",
  backgroundImage: "url(".concat(discImage1, ")"),
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

var parentEl = function parentEl() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "parent",
    style: parentStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "div-1",
    style: div1Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "div-2",
    style: div2Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "div-3",
    style: div3Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "items",
    style: itemsStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "box",
    styles: [boxStyle],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "box",
    style: boxStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "box",
    style: boxStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "box",
    style: boxStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "box",
    style: boxStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "box",
    style: boxStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "box",
    style: boxStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (parentEl);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/tommy/React/Moodsick/components/Header.js";


var headerStyle = {
  height: 110,
  width: '100%',
  padding: 30,
  margin: "10 0 0 0",
  background: '#282837',
  color: 'white' // es6 annoymous func 

};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Padding.js":
/*!*******************************!*\
  !*** ./components/Padding.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tommy/React/Moodsick/components/Padding.js";

var paddingStyle = {
  padding: 20
};

var Padding = function Padding() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: paddingStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Padding);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tommy/React/Moodsick/components/User.js";

var userStyle = {
  margin: 10,
  display: 'flex',
  fontFamily: 'helvetica',
  fontWeight: 100
};
var userInfoStyle = {
  margin: 10
};
var avatarStyle = {
  borderRadius: '50%',
  width: 90
};
var profileStyle = {
  display: "inline-block",
  marginLeft: 20,
  verticalAlign: 'top'
};
var buttonStyle = {
  backgroundColor: 'transparent',
  border: '1px solid lightblue',
  color: 'lightblue',
  padding: 6,
  borderRadius: 6,
  width: 110
};

function getCurrentUser() {
  return {
    avatarUrl: 'https://placekitten.com/g/90/90',
    name: "TommyCakes",
    status: "Preminum"
  };
}

function Avatar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Avatar",
    style: avatarStyle,
    src: props.user.avatarUrl,
    alt: props.user.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  });
}

function UserInfo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo",
    style: userInfoStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Avatar, {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo",
    style: profileStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, props.user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, props.user.status)));
}

function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "User",
    style: userStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserInfo, {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }));
}

var Profile = function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, {
    user: getCurrentUser(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FlexParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FlexParent */ "./components/FlexParent.js");
/* harmony import */ var _components_Padding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Padding */ "./components/Padding.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "/Users/tommy/React/Moodsick/pages/index.js";




var layoutStyle = {
  background: '#191927'
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Padding__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FlexParent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tommy/React/Moodsick/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map