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

var userStyle = {
  margin: 10,
  width: 100,
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: "flex-start",
  justifyContent: "center",
  alignContent: "center"
};
var userInfoStyle = {// margin:10
};
var spacing = {// marginTop: 8,
};

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
      lineNumber: 29
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
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Avatar, {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo-name",
    style: spacing,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Membership-status",
    style: spacing,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.user.status));
}

function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "User",
    style: userStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserInfo, {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
}

var Profile = function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, {
    user: getCurrentUser(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=index.js.6ecec04e844da5d120d5.hot-update.js.map