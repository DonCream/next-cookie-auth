webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.jsx");





var Layout = function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children,
      auth = _ref.auth;

  var _ref2 = auth || {},
      _ref2$user = _ref2.user,
      user = _ref2$user === void 0 ? {} : _ref2$user;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1072969326" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1072969326" + " " + "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1072969326"
  }, "Welcome ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1072969326"
  }, user.name || 'Guest'), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1072969326"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1072969326"
  }, "Home")), user.email ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1072969326"
  }, "Profile")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: _lib_auth__WEBPACK_IMPORTED_MODULE_3__["logoutUser"],
    className: "jsx-1072969326"
  }, "Logout")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1072969326"
  }, "Login")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1072969326"
  }, title), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1072969326"
  }, ".root.jsx-1072969326{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.navbar.jsx-1072969326{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}a.jsx-1072969326{margin-right:0.5em;}button.jsx-1072969326{-webkit-text-decoration:underline;text-decoration:underline;padding:0;font:inherit;cursor:pointer;border-style:none;color:rgb(0,0,238);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL1dlYkplbGx5L1dlYnNpdGVzL25leHQtY29va2llLWF1dGgvY29tcG9uZW50cy9MYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DYyxBQUdrQixBQU1GLEFBS1EsQUFHTyxXQVBiLFFBS2QseUNBR1csVUFDRyxJQWZNLFNBZ0JKLEVBVGMsYUFVWCxrQkFDRyxtQkFDdEIsZ0NBbEJ3Qix5Q0FPeEIsMERBTnVCLDhFQUN2QiIsImZpbGUiOiIvaG9tZS9XZWJKZWxseS9XZWJzaXRlcy9uZXh0LWNvb2tpZS1hdXRoL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7bG9nb3V0VXNlcn0gZnJvbSAnLi4vbGliL2F1dGgnO1xuXG5cbmNvbnN0IExheW91dCA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgYXV0aCB9KSA9PiB7XG4gY29uc3Qge3VzZXIgPSB7fSB9ID0gYXV0aCB8fCB7fTtcblxuIHJldHVybiAoXG4gPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICA8c3Bhbj5cbiAgICBXZWxjb21lIDxzdHJvbmc+e3VzZXIubmFtZSB8fCAnR3Vlc3QnfTwvc3Ryb25nPntcIiBcIn1cbiAgIDwvc3Bhbj5cbiAgIDxkaXY+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgPGE+SG9tZTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICB7dXNlci5lbWFpbCA/ICAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICA8YT5Qcm9maWxlPC9hPlxuICAgIDwvTGluaz5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dFVzZXJ9PkxvZ291dDwvYnV0dG9uPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKSA6IChcbiAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgIDxhPkxvZ2luPC9hPlxuICAgIDwvTGluaz5cbiAgICl9XG4gICA8L2Rpdj5cbiAgPC9uYXY+XG5cbiAgPGgxPnt0aXRsZX08L2gxPlxuICB7Y2hpbGRyZW59XG4gIFxuICA8c3R5bGUganN4PntgXG4gICAucm9vdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICB9XG4gICAubmF2YmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgfVxuICAgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgIH1cbiAgIGJ1dHRvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgY29sb3I6IHJnYigwLCAwLCAyMzgpO1xuICAgfVxuICBgfTwvc3R5bGU+XG4gPC9kaXY+XG4pfTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/home/WebJelly/Websites/next-cookie-auth/components/Layout.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=profile.js.b1e7de4266e05820c33a.hot-update.js.map