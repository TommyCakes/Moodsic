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
  display: 'flex'
};
var userInfoStyle = {
  margin: 10
};
var avatarStyle = {
  borderRadius: '50%',
  width: 100
};
var profileStyle = {
  display: "inline-block",
  marginLeft: 20,
  verticalAlign: 'top'
};
var buttonStyle = {
  backgroundColor: 'transparent'
};

function getCurrentUser() {
  return {
    avatarUrl: 'https://placekitten.com/g/100/100',
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
      lineNumber: 35
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
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Avatar, {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "UserInfo",
    style: profileStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, props.user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
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
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserInfo, {
    user: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
}

var Profile = function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, {
    user: getCurrentUser(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=index.js.701fc811d6463a5d1933.hot-update.js.map