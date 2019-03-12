webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./lib/auth.jsx":
/*!**********************!*\
  !*** ./lib/auth.jsx ***!
  \**********************/
/*! exports provided: getServerSideToken, getClientSideToken, getUserScript, authInitialProps, loginUser, logoutUser, getUserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideToken", function() { return getServerSideToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientSideToken", function() { return getClientSideToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserScript", function() { return getUserScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialProps", function() { return authInitialProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return getUserProfile; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.withCredentials = true;
var getServerSideToken = function getServerSideToken(req) {
  var _req$signedCookies = req.signedCookies,
      signedCookies = _req$signedCookies === void 0 ? {} : _req$signedCookies;

  if (!signedCookies) {
    return {};
  } else if (!signedCookies.token) {
    return {};
  }

  return {
    user: signedCookies.token
  };
};
var getClientSideToken = function getClientSideToken() {
  if (typeof window !== 'undefined') {
    var user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    return {
      user: user
    };
  }

  return {
    user: {}
  };
};
var WINDOW_USER_SCRIPT_VARIABLE = '__USER__';
var getUserScript = function getUserScript(user) {
  return "".concat(WINDOW_USER_SCRIPT_VARIABLE, " = ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(user), ";");
};
var authInitialProps = function authInitialProps(isProtectedRoute) {
  return function (_ref) {
    var req = _ref.req,
        res = _ref.res;
    var auth = req ? getServerSideToken(req) : getClientSideToken();
    var currentPath = req ? req.url : window.location.pathname;
    var user = auth.user;
    var isAnonymous = !user || user.type !== 'authenticated';

    if (isProtectedRoute && isAnonymous && currentPath !== '/login') {
      return redirectUser(res, '/login');
    }

    return {
      auth: auth
    };
  };
};
var loginUser =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password) {
    var _ref3, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/login", {
              email: email,
              password: password
            });

          case 2:
            _ref3 = _context.sent;
            data = _ref3.data;

            if (typeof window !== 'undefined') {
              window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loginUser(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var logoutUser =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (typeof window !== 'undefined') {
              window[WINDOW_USER_SCRIPT_VARIABLE] = {};
            }

            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/logout');

          case 3:
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function logoutUser() {
    return _ref4.apply(this, arguments);
  };
}();
var getUserProfile =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var _ref6, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/profile");

          case 2:
            _ref6 = _context3.sent;
            data = _ref6.data;
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUserProfile() {
    return _ref5.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=profile.js.d50f58ed73ec028d180c.hot-update.js.map