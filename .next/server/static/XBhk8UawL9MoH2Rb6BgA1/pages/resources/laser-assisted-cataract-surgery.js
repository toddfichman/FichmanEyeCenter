module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
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

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _components_Slogan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);







var CataractSurgery = function CataractSurgery() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Fichman Eye Center | Cataract Surgery",
    description: "Laser Assisted Cataract Surgery At Fichman Eye Center"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
    style: {
      backgroundImage: "linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpg)",
      backgroundRepeat: "no-repeat"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jumbotron-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "jumbotron-header-center"
  }, "Laser Assisted Cataract Surgery"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: "content-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-section-header"
  }, "Discover the advantages of laser cataract refractive surgery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "An advancement in cataract treatment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "How your cataract procedure is performed is up to you and your doctor. You\u2019ve probably heard a lot about your options, but the truth is that laser-assisted surgery is proven to be more precise and reproducible than traditional cataract surgery. Cataract refractive surgery can help you get back to the lifestyle you love with improved vision."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "Developing a personalized treatment plan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "While our eyes share the same basic anatomy, each eye is unique when it comes to certain key measurements. Before your cataract procedure, the technology behind the LenSx\xAE Laser captures high-resolution images of your eyes. These images help your surgeon plan and complete a procedure to exacting specifications not possible with traditional cataract surgery."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "A precise procedure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "The LenSx\xAE Laser system takes real-time video and generates three-dimensional images of your eye to help your surgeon automate and execute the challenging steps of cataract surgery. Laser fragmentation helps the surgeon remove the cataract precisely and efficiently while limiting stress to your eye."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "Cataract refractive surgery is designed to help you see the world better"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "After laser fragmentation of your lens, your cataract is removed and an artificial replacement lens, or IOL, is inserted to help you see clearly again. Many patients experience improved vision after two weeks, and they approach optimal vision between two and four months after their procedure."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "Reduce your dependence on glasses with advanced technology lenses"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "The LenSx\xAE Laser can also be used with advanced technology IOLs, which are designed to help you enjoy less dependence on spectacles during activities such as:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Knitting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Reading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Playing cards"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Watching TV"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Playing golf and tennis"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "What is the LenSx\xAE Laser?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "The system is designed to automate some of the most demanding steps of cataract refractive surgery and offers:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 A laser procedure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Precise, reproducible performance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Increased surgeon control"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 More predictable surgical outcomes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "Investing in the added value of laser procedures"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "Medicare and private insurance typically cover some of the costs of cataract surgery. However, there may be out-of-pocket expenses involved because of the premium nature of a laser-assisted cataract procedure. Even so, many patients still choose laser-assisted cataract refractive surgery."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://drive.google.com/file/d/1DDARVR7Ga-2EzZfVmcoYMhX-ARf7p9Y3/view?usp=sharing",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "visible-link-large"
  }, "Click Here For Outlook Magazine Article"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/about/testimonials");
    },
    className: "visible-link-large"
  }, "Click Here For Testimonials"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "slogan-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slogan__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (CataractSurgery);

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