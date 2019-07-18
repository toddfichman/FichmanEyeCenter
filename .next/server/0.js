exports.ids = [0];
exports.modules = {

/***/ "./components/Locations.js":
/*!*********************************!*\
  !*** ./components/Locations.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Maps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map */ "./components/Map.js");
var _jsxFileName = "/Users/toddfichman/Projects/fichman-eye-center/components/Locations.js";


function Maps() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "map-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Locations"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
    street: "178 Hartford Rd,",
    town: "Manchester, Connecticut 06040",
    phone: "1-877-FICHMAN",
    lat: 41.764561,
    lng: -72.528892,
    name: "Manchester",
    title: "Manchester",
    mapSearch: "Fichman Eye Center Manchester",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
    street: "1144 E Main St,",
    town: "Torrington, CT 06790",
    phone: "1-860-489-8999",
    lat: 41.814979,
    lng: -73.09553,
    name: "Torrrington",
    title: "Torrington",
    mapSearch: "Fichman Eye Center Torrington",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
    street: "1232 Corbin Ave,",
    town: "New Britain, CT 06053",
    phone: "1-860-357-2349",
    lat: 41.66761,
    lng: -72.806965,
    name: "New Britain",
    title: "New Britain",
    mapSearch: "Fichman Eye Center New Britain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
    street: "1500 Albany Ave,",
    town: "Hartford, CT 06112",
    phone: "1-860-560-9563",
    lat: 41.784525,
    lng: -72.702196,
    name: "Hartford",
    title: "Hartford",
    mapSearch: "Fichman Eye Center Hartford Albany Ave",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "google-maps-react");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/toddfichman/Projects/fichman-eye-center/components/Map.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GoogleMap =
/*#__PURE__*/
function (_Component) {
  _inherits(GoogleMap, _Component);

  function GoogleMap() {
    _classCallCheck(this, GoogleMap);

    return _possibleConstructorReturn(this, _getPrototypeOf(GoogleMap).apply(this, arguments));
  }

  _createClass(GoogleMap, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://maps.google.com/?q=".concat(this.props.mapSearch),
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Click on address for directions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.name, " Office"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "map-address-subtext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "map-address-top-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.street), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), this.props.town, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "map-address-bottom-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.props.phone)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
        google: window.google,
        initialCenter: {
          lat: this.props.lat,
          lng: this.props.lng
        },
        zoom: 15,
        className: "map-item",
        onClick: function onClick() {
          return window.open("http://maps.google.com/?q=".concat(_this.props.mapSearch), "_blank");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
        title: this.props.title,
        name: this.props.name,
        position: {
          lat: this.props.lat,
          lng: this.props.lng
        },
        onClick: function onClick() {
          return window.open("http://maps.google.com/?q=".concat(_this.props.mapSearch), "_blank");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }))));
    }
  }]);

  return GoogleMap;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: "AIzaSyDuscURNM3rl5VvAmdcW3VpHjCyUlpAqAw"
})(GoogleMap));

/***/ })

};;
//# sourceMappingURL=0.js.map