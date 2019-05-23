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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(60);


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
    integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Bitter",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Bitter|Open+Sans",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"
  })));
});

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slogan; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);


function Slogan() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "slogan-section-header"
  }, "Fichman Eye Center")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slogan-section-subtext"
  }, "You can clearly see the difference")));
}

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(5);

// EXTERNAL MODULE: external "google-maps-react"
var external_google_maps_react_ = __webpack_require__(10);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Map.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Map_GoogleMap =
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

      return external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 12,
        md: 6
      }, external_react_default.a.createElement("div", {
        className: "map-col"
      }, external_react_default.a.createElement("a", {
        href: "http://maps.google.com/?q=".concat(this.props.mapSearch),
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Click on address for directions"
      }, external_react_default.a.createElement("div", {
        className: "map-address"
      }, external_react_default.a.createElement("strong", null, this.props.name, " Office"), external_react_default.a.createElement("p", {
        className: "map-address-subtext"
      }, external_react_default.a.createElement("span", {
        className: "map-address-top-line"
      }, this.props.street), external_react_default.a.createElement("br", null), this.props.town, external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
        className: "map-address-bottom-line"
      }, this.props.phone)))), external_react_default.a.createElement(external_google_maps_react_["Map"], {
        google: window.google,
        initialCenter: {
          lat: this.props.lat,
          lng: this.props.lng
        },
        zoom: 15,
        className: "map-item",
        onClick: function onClick() {
          return window.open("http://maps.google.com/?q=".concat(_this.props.mapSearch), "_blank");
        }
      }, external_react_default.a.createElement(external_google_maps_react_["Marker"], {
        title: this.props.title,
        name: this.props.name,
        position: {
          lat: this.props.lat,
          lng: this.props.lng
        },
        onClick: function onClick() {
          return window.open("http://maps.google.com/?q=".concat(_this.props.mapSearch), "_blank");
        }
      }))));
    }
  }]);

  return GoogleMap;
}(external_react_["Component"]);

/* harmony default export */ var Map = (Object(external_google_maps_react_["GoogleApiWrapper"])({
  apiKey: "AIzaSyDuscURNM3rl5VvAmdcW3VpHjCyUlpAqAw"
})(Map_GoogleMap));
// CONCATENATED MODULE: ./components/Locations.js


function Maps() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: "map-header"
  }, "Locations"), external_react_default.a.createElement(Map, {
    street: "178 Hartford Rd,",
    town: "Manchester, Connecticut 06040",
    phone: "1-877-FICHMAN",
    lat: 41.764561,
    lng: -72.528892,
    name: "Manchester",
    title: "Manchester",
    mapSearch: "Fichman Eye Center Manchester"
  }), external_react_default.a.createElement(Map, {
    street: "1144 E Main St,",
    town: "Torrington, CT 06790",
    phone: "1-860-489-8999",
    lat: 41.814979,
    lng: -73.09553,
    name: "Torrrington",
    title: "Torrington",
    mapSearch: "Fichman Eye Center Torrington"
  }), external_react_default.a.createElement(Map, {
    street: "1232 Corbin Ave,",
    town: "New Britain, CT 06053",
    phone: "1-860-357-2349",
    lat: 41.66761,
    lng: -72.806965,
    name: "New Britain",
    title: "New Britain",
    mapSearch: "Fichman Eye Center New Britain"
  }), external_react_default.a.createElement(Map, {
    street: "1500 Albany Ave,",
    town: "Hartford, CT 06112",
    phone: "1-860-560-9563",
    lat: 41.784525,
    lng: -72.702196,
    name: "Hartford",
    title: "Hartford",
    mapSearch: "Fichman Eye Center Hartford Albany Ave"
  }));
}
// EXTERNAL MODULE: ./components/Slogan.js
var Slogan = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Card.js



/* harmony default export */ var Card = (function (props) {
  return external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xs: 12,
    md: 4
  }, external_react_default.a.createElement(external_react_bootstrap_["Panel"], null, external_react_default.a.createElement(external_react_bootstrap_["Panel"].Heading, null, external_react_default.a.createElement(external_react_bootstrap_["Panel"].Title, {
    componentClass: "h3",
    className: "card-header"
  }, props.header)), external_react_default.a.createElement(external_react_bootstrap_["Panel"].Body, {
    className: "card-body"
  }, props.content, external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_react_bootstrap_["Button"], {
    type: "submit",
    bsStyle: "primary",
    className: "card-button"
  }, external_react_default.a.createElement(link_default.a, {
    href: props.link
  }, external_react_default.a.createElement("a", {
    className: "button-link"
  }, props.buttonText))))));
});
// CONCATENATED MODULE: ./pages/index.js









var pages_Home = function Home() {
  return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(Meta["a" /* default */], {
    title: "Fichman Eye Center | Home",
    description: "Home page for Fichman Eye Center"
  }), external_react_default.a.createElement(external_react_bootstrap_["Jumbotron"], {
    className: "jumbo",
    style: {
      backgroundImage: "linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/fichman-doctors.jpg)",
      backgroundRepeat: "no-repeat"
    }
  }, " ", external_react_default.a.createElement("div", {
    className: "jumbotron-container"
  }, external_react_default.a.createElement("h1", {
    className: "jumbotron-header"
  }, "Welcome to Fichman Eye Center"), external_react_default.a.createElement("p", null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
    role: "button",
    className: "jumbotron-btn",
    bsSize: "large",
    bsStyle: "primary"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/contact"
  }, external_react_default.a.createElement("a", {
    className: "button-link"
  }, "Schedule Your Appointment Today")))))), external_react_default.a.createElement(external_react_bootstrap_["Grid"], {
    className: "content-container"
  }, external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "card-row"
  }, external_react_default.a.createElement(Card, {
    header: "About",
    content: "Donec non elit massa. Cras at neque in lectus euismod rutrum quis et odio. Suspendisse id iaculis nisi. Curabitur egestas nibh odio, non efficitur risus efficitur quis. Sed nec justo ut nunc blandit tempus vel ut tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut dapibus velit. Proin scelerisque eu ligula sit amet efficitur. Nam accumsan elementum elit, ultricies efficitur ante venenatis at.",
    buttonText: "About",
    link: "/about"
  }), external_react_default.a.createElement(Card, {
    header: "Resources",
    content: "Donec non elit massa. Cras at neque in lectus euismod rutrum quis et odio. Suspendisse id iaculis nisi. Curabitur egestas nibh odio, non efficitur risus efficitur quis. Sed nec justo ut nunc blandit tempus vel ut tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut dapibus velit. Proin scelerisque eu ligula sit amet efficitur. Nam accumsan elementum elit, ultricies efficitur ante venenatis at.",
    buttonText: "Resources",
    link: "/resources"
  }), external_react_default.a.createElement(Card, {
    header: "Testimonials",
    content: "Donec non elit massa. Cras at neque in lectus euismod rutrum quis et odio. Suspendisse id iaculis nisi. Curabitur egestas nibh odio, non efficitur risus efficitur quis. Sed nec justo ut nunc blandit tempus vel ut tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut dapibus velit. Proin scelerisque eu ligula sit amet efficitur. Nam accumsan elementum elit, ultricies efficitur ante venenatis at.",
    buttonText: "Testimonials",
    link: "/about"
  })), external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "slogan-section"
  }, external_react_default.a.createElement(Slogan["a" /* default */], null)), external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "map-container"
  }, external_react_default.a.createElement(Maps, null))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Nav.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var timeoutLength = 300;

var Nav_Navigation =
/*#__PURE__*/
function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navigation).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_bootstrap_["Navbar"], {
        inverse: true,
        collapseOnSelect: true,
        className: "navbar-container"
      }, external_react_default.a.createElement(external_react_bootstrap_["Navbar"].Header, null, external_react_default.a.createElement("a", {
        href: "/"
      }, external_react_default.a.createElement(external_react_bootstrap_["Image"], {
        className: "navbar-logo",
        src: "/static/images/fichman-logo-new.png"
      })), external_react_default.a.createElement(external_react_bootstrap_["Navbar"].Toggle, null)), external_react_default.a.createElement(external_react_bootstrap_["Navbar"].Collapse, null, external_react_default.a.createElement(external_react_bootstrap_["Nav"], {
        pullRight: true,
        className: "nav-bar"
      }, external_react_default.a.createElement(external_react_bootstrap_["NavItem"], {
        eventKey: 0,
        href: "#"
      }, external_react_default.a.createElement("span", {
        className: "nav-btn",
        onClick: function onClick() {
          return router_default.a.push('/');
        }
      }, "Home")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 1,
        title: "About",
        id: "basic-nav-dropdown",
        className: "nav-btn"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/about');
        }
      }, "About Fichman Eye Center")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        divider: true
      }), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/about/surgery-center');
        }
      }, "Surgey Center")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/about/optical-boutique');
        }
      }, "Optical Boutique")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/about/costs-fees');
        }
      }, "Costs & Fees")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/about/insurances');
        }
      }, "Insurances We Accept")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/about/patient-financing');
        }
      }, "Patient Financing")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/about/testimonials');
        }
      }, "Testimonials")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/office-tours');
        }
      }, "Office Tours"))), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 3,
        title: "Resources",
        id: "basic-nav-dropdown",
        className: "nav-btn"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/resources/patient-education');
        }
      }, "Patient Education")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/resources/patient-forms');
        }
      }, "Patient Forms")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/resources/informational-videos');
        }
      }, "Informational Videos")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/resources/lasik');
        }
      }, "Lasik Information")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/resources/privacy-policy');
        }
      }, "Privacy Policy")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/resources/FAQs');
        }
      }, "FAQ")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/resources/laser-assisted-cataract-surgery');
        }
      }, "Cataract Surgery"))), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 3,
        title: "Our Doctors",
        id: "basic-nav-dropdown",
        className: "nav-btn"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 3.1
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push('/doctors');
        }
      }, "Meet Our Doctors")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        divider: true
      }), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 3.2
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push("/doctors/Richard-Fichman-MD");
        }
      }, "Richard Fichman, M.D.")), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 3.3
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return router_default.a.push("/doctors/Dr-Steven-Tu");
        }
      }, "Steve Tu, D.O."))), external_react_default.a.createElement(external_react_bootstrap_["NavItem"], {
        eventKey: 0,
        href: "#"
      }, external_react_default.a.createElement("span", {
        className: "nav-btn",
        onClick: function onClick() {
          return router_default.a.push('/contact');
        }
      }, "Contact"))))));
    }
  }]);

  return Navigation;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Footer.js
function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }





var Footer_Footer =
/*#__PURE__*/
function (_Component) {
  Footer_inherits(Footer, _Component);

  function Footer() {
    Footer_classCallCheck(this, Footer);

    return Footer_possibleConstructorReturn(this, Footer_getPrototypeOf(Footer).apply(this, arguments));
  }

  Footer_createClass(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("footer", {
        className: "footer-basic-centered"
      }, external_react_default.a.createElement("h3", {
        className: "footer-company-motto"
      }, "Fichman Eye Center"), external_react_default.a.createElement("div", {
        className: "footer-links"
      }, external_react_default.a.createElement(external_react_bootstrap_["Row"], {
        className: "footer-top"
      }, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 12,
        md: 3
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", null, "Home"))), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 12,
        md: 3
      }, external_react_default.a.createElement(link_default.a, {
        href: "/about"
      }, external_react_default.a.createElement("a", null, "About"))), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 12,
        md: 3
      }, external_react_default.a.createElement(link_default.a, {
        href: "/resources/patient-education"
      }, external_react_default.a.createElement("a", null, "Resources"))), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 12,
        md: 3
      }, external_react_default.a.createElement(link_default.a, {
        href: "/contact"
      }, external_react_default.a.createElement("a", null, "Contact"))))), external_react_default.a.createElement("p", {
        className: "footer-company-name"
      }, "Copyright \xA92018. Fichman Eye Center. All Rights Reserved."));
    }
  }]);

  return Footer;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/Layout.js


function Layout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout_typeof = function _typeof(obj) { return typeof obj; }; } else { Layout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout_typeof(obj); }

function Layout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layout_createClass(Constructor, protoProps, staticProps) { if (protoProps) Layout_defineProperties(Constructor.prototype, protoProps); if (staticProps) Layout_defineProperties(Constructor, staticProps); return Constructor; }

function Layout_possibleConstructorReturn(self, call) { if (call && (Layout_typeof(call) === "object" || typeof call === "function")) { return call; } return Layout_assertThisInitialized(self); }

function Layout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Layout_getPrototypeOf(o) { Layout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Layout_getPrototypeOf(o); }

function Layout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Layout_setPrototypeOf(subClass, superClass); }

function Layout_setPrototypeOf(o, p) { Layout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Layout_setPrototypeOf(o, p); }





var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  Layout_inherits(Layout, _Component);

  function Layout() {
    Layout_classCallCheck(this, Layout);

    return Layout_possibleConstructorReturn(this, Layout_getPrototypeOf(Layout).apply(this, arguments));
  }

  Layout_createClass(Layout, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "app"
      }, external_react_default.a.createElement(Nav_Navigation, null), external_react_default.a.createElement("section", null, this.props.children), external_react_default.a.createElement(Footer_Footer, null));
    }
  }]);

  return Layout;
}(external_react_["Component"]);

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ })

/******/ });