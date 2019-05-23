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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _components_Slogan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);







var Doctors = function Doctors() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Fichman Eye Center | Doctors",
    description: "All Doctors At Fichman Eye Center"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
    style: {
      backgroundImage: "linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/fichman-doctors.jpg)",
      backgroundRepeat: "no-repeat"
    }
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jumbotron-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "jumbotron-header-center"
  }, "Meet Our Doctors"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: "content-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "doctors-short-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "doctors-short-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "doctors-short-title"
  }, "Ophthalmologist, Medical Director: Richard A. Fichman, MD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    className: "doctors-img",
    src: "../../static/images/drFichman.jpeg",
    rounded: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doctors-short-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"God fortunately has given me a gift...the gift of microsurgery. Eyesight is one of the most precious gifts I can think of. That\u2019s why it gives me great personal satisfaction to give the gift of sight to my patients through the latest surgical techniques.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"When it comes to specialized eye care, time is often as important as skill. We\u2019re ready to handle emergencies anytime\u201424 hours a day, seven days a week. Because we know that sometimes quick action can keep a trauma from becoming a tragedy.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    role: "button",
    className: "doctors-info-btn",
    bsSize: "large",
    bsStyle: "primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/doctors/Richard-Fichman-MD"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button-link"
  }, "View Dr. Fichman's Credentials & Bio"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "doctors-short-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "doctors-short-title"
  }, "Ophthalmologist: Dr. Steven Tu, DO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    className: "doctors-img",
    src: "../../static/images/drTu.jpg",
    rounded: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doctors-short-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dr. Tu was born and raised in the hills of New Jersey. He went to Rutgers University and then the University of Health Sciences in Kansas City, MO for medical school. His medical training involved traveling to several areas across the country, from Florida to Michigan to Pennsylvania."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    role: "button",
    className: "doctors-info-btn",
    bsSize: "large",
    bsStyle: "primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/doctors/Dr-Steven-Tu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button-link"
  }, "View Dr. Tu's Credentials & Bio"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "doctors-short-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "doctors-short-title"
  }, "Optometrist: Dr. Jason Delisle, OD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    className: "doctors-img",
    src: "../../static/images/drDelisle.jpg",
    rounded: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doctors-short-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A Connecticut native, Jason Delisle graduated from the New England College of Optometry in May 2008. His experience includes externships at the Eye Centers of South Florida in Miami, Vision Care of Maine in Bangor, the Newington VA Hospital in Connecticut and the East Boston health center in Massachusetts."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    role: "button",
    className: "doctors-info-btn",
    bsSize: "large",
    bsStyle: "primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/doctors/Richard-Fichman-MD"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button-link"
  }, "View Dr. Deslisle's Credentials & Bio"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "doctors-short-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "doctors-short-title"
  }, "Ophthalmologist: Dr. Randy Bouligny, MD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    className: "doctors-img",
    src: "../../static/images/drBouligny.jpg",
    rounded: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doctors-short-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dr. Bouligny was born and raised in New Orleans, Louisiana. He graduated from Xavier University of Louisiana and went to medical school at Cornell University Medical College in New York City. Between his third and fourth year of medical school, Dr. Bouligny became interested in ophthalmology and took a year off to perform research in ocular immunology at the National Institutes of Health as a member of the Howard Hughes Medical Institute Research Scholars Program in Bethesda, MD."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    role: "button",
    className: "doctors-info-btn",
    bsSize: "large",
    bsStyle: "primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/doctors/Richard-Fichman-MD"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button-link"
  }, "View Dr. Bouligny's Credentials & Bio"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "doctors-short-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "doctors-short-title"
  }, "Dr. Carly Olsin, OD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    className: "doctors-img",
    src: "../../static/images/drOslin.jpg",
    rounded: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doctors-short-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dr. Olsin was born and raised in small town Ohio. She graduated University of Dayton and went on to optometry school at The Ohio State University College of Optometry. After graduation Dr. Olsin moved to Charleston, South Carolina where her husband was stationed in the Navy. There she worked for the Association for the Blind and also worked for a private practice. She moved to Connecticut in September 2014 once her husband was re stationed to Groton and began work at the Fichman Eye Center in October."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    role: "button",
    className: "doctors-info-btn",
    bsSize: "large",
    bsStyle: "primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/doctors/Richard-Fichman-MD"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button-link"
  }, "View Dr. Olsin's Credentials & Bio")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "slogan-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slogan__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Doctors);

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