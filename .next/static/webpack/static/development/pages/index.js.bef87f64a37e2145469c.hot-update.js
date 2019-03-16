webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/tommy/React/Moodsick/components/Header.js";

 // function Header() {
//     return <h1>Hello Header!</h1>
// }

var headerStyle = {
  height: 120,
  width: '100%',
  margin: "10 0 0 0",
  background: '#191927' // es6 annoymous func 

};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tommy/React/Moodsick/components/User.js";


function getCurrentUser(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, "Welcome, ", props.name);
}

function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "User",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Avatar",
    src: props.user.avatarUrl,
    alt: props.user.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.user.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Membership-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.user.status));
}

var UserInfo = function UserInfo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ })

})
//# sourceMappingURL=index.js.bef87f64a37e2145469c.hot-update.js.map