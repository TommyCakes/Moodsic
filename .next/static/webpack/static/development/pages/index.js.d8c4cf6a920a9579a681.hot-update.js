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
var _jsxFileName = "/Users/tommy/React/Moodsick/components/User.js";


function getCurrentUser() {
  return {
    avatarUrl: 'https://placekitten.com/g/64/64',
    name: "TommyCakes",
    status: "Preminum"
  };
}

function Avatar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Avatar",
    src: props.user.avatarUrl,
    alt: props.user.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });
}

function UserInfo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Avatar, {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Membership-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.user.status));
}

function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "User",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserInfo, {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
}

var Profile = function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=index.js.d8c4cf6a920a9579a681.hot-update.js.map