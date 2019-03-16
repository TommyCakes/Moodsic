webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tommy/React/Moodsick/components/User.js";


var user = {
  avatarUrl: 'https://placekitten.com/g/64/64',
  name: "TommyCakes",
  status: "Preminum"
};

function getCurrentUser(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Welcome, ", props.name);
}

function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "User",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("userInfo", {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
}

function Avatar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Avatar",
    src: props.user.avatarUrl,
    alt: props.user.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  });
}

function UserInfo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Avatar, {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Membership-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.status));
}

var Profile = function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, {
    avatarUrl: user.avatarUrl,
    name: user.name,
    status: user.status,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=index.js.aa40cf626c1e1c17056d.hot-update.js.map