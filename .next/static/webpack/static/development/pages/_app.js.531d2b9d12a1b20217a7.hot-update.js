webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/toddfichman/Projects/fichman-eye-center/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
        className: "jsx-2269547168",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Fichman Eye Center | CT Eye Care"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        name: "description",
        content: "Fichman Eye Center is Home to Connecticut's Best Eye Surgery Providers With A Full Service Eye Center.",
        className: "jsx-2269547168",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        name: "keywords",
        content: "CT eye doctor, Connecticut eye doctor, glaucoma, eyeglasses,cataracts,glasses, contacts,cataract surgery, sunglasses, CT Eye surgery, Best Eye Surgery, Full service, Eye Center, lasik",
        className: "jsx-2269547168",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        key: "viewport",
        className: "jsx-2269547168",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        property: "og:locale",
        content: "en_US",
        className: "jsx-2269547168",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        property: "og:type",
        content: "website",
        className: "jsx-2269547168",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        property: "og:title",
        content: "Fichman Eye Center | CT Eye Care",
        className: "jsx-2269547168",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        property: "og:description",
        content: "Fichman Eye Center is Home to Connecticut's Best Eye Surgery Providers With A Full Service Eye Center.",
        className: "jsx-2269547168",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
        property: "og:site_name",
        content: "Fichman Eye Center",
        className: "jsx-2269547168",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_page_transitions__WEBPACK_IMPORTED_MODULE_5__["PageTransition"], {
        timeout: 500,
        classNames: "page-transition",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, _extends({}, pageProps, {
        key: router.route,
        className: "jsx-2269547168" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2269547168",
        css: ".page-transition-enter{opacity:0;}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 500ms;transition:opacity 500ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 500ms;transition:opacity 500ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2RkZmljaG1hbi9Qcm9qZWN0cy9maWNobWFuLWV5ZS1jZW50ZXIvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QzJCLEFBR3VCLEFBR0EsQUFJQSxBQUdBLFVBVFosQUFHMkIsQUFJM0IsQUFHMkIsMERBTjNCLEFBT0EiLCJmaWxlIjoiL1VzZXJzL3RvZGRmaWNobWFuL1Byb2plY3RzL2ZpY2htYW4tZXllLWNlbnRlci9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uIH0gZnJvbSBcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgRmljaG1hbiBFeWUgQ2VudGVyIHwgQ1QgRXllIENhcmUgXG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJGaWNobWFuIEV5ZSBDZW50ZXIgaXMgSG9tZSB0byBDb25uZWN0aWN1dCdzIEJlc3QgRXllIFN1cmdlcnkgUHJvdmlkZXJzIFdpdGggQSBGdWxsIFNlcnZpY2UgRXllIENlbnRlci5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXG4gICAgICAgICAgICBjb250ZW50PVwiQ1QgZXllIGRvY3RvciwgQ29ubmVjdGljdXQgZXllIGRvY3RvciwgZ2xhdWNvbWEsIGV5ZWdsYXNzZXMsY2F0YXJhY3RzLGdsYXNzZXMsIGNvbnRhY3RzLGNhdGFyYWN0IHN1cmdlcnksIHN1bmdsYXNzZXMsIENUIEV5ZSBzdXJnZXJ5LCBCZXN0IEV5ZSBTdXJnZXJ5LCBGdWxsIHNlcnZpY2UsIEV5ZSBDZW50ZXIsIGxhc2lrXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIga2V5PVwidmlld3BvcnRcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJGaWNobWFuIEV5ZSBDZW50ZXIgfCBDVCBFeWUgQ2FyZVwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJGaWNobWFuIEV5ZSBDZW50ZXIgaXMgSG9tZSB0byBDb25uZWN0aWN1dCdzIEJlc3QgRXllIFN1cmdlcnkgUHJvdmlkZXJzIFdpdGggQSBGdWxsIFNlcnZpY2UgRXllIENlbnRlci5cIi8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiRmljaG1hbiBFeWUgQ2VudGVyXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UGFnZVRyYW5zaXRpb24gdGltZW91dD17NTAwfSBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cbiAgICAgICAgPC9QYWdlVHJhbnNpdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/toddfichman/Projects/fichman-eye-center/pages/_app.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.531d2b9d12a1b20217a7.hot-update.js.map