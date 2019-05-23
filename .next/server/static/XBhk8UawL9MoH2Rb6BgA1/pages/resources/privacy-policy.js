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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
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

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _components_Slogan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);






var PrivacyPolicy = function PrivacyPolicy() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Fichman Eye Center | Costs & Fees",
    description: "About page for Fichman Costs & Fees"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    className: "content-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "text-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-section-header"
  }, "Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "Notice of Privacy Practices"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "As Required by the Privacy Regulations Created as a Result of the Health Insurance Portability and Accountability Act of 1996 (HIPAA)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "THIS NOTICE DESCRIBES HOW HEALTH INFORMATION ABOUT YOU (AS A PATIENT OF THIS PRACTICE) MAY BE USED AND DISCLOSED, AND HOW YOU CAN GET ACCESS TO YOUR INDIVIDUALLY IDENTIFIABLE HEALTH INFORMATION"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "PLEASE REVIEW THIS NOTICE CAREFULLY."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "A. OUR COMMITMENT TO YOUR PRIVACY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "Our practice is dedicated to maintaining the privacy of your individually identifiable health information (IIHI). In conducting our business, we will create records regarding you and the treatment and services we provide to you. We are required by law to maintain the confidentiality of health information that identifies you. We also are required by law to provide you with this notice of our legal duties and the privacy practices that we maintain in our practice concerning your IIHI. By federal and state law, we must follow the terms of the notice of privacy practices that we have in effect at the time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "We realize that these laws are complicated, but we must provide you with the following important information:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 How we may use and disclose your IIHI"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Your privacy rights in your IIHI"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Our obligations concerning the use and disclosure of your IIHI")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "B. IF YOU HAVE QUESTIONS ABOUT THIS NOTICE, PLEASE CONTACT:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "C. WE MAY USE AND DISCLOSE YOUR INDIVIDUALLY IDENTIFIABLE HEALTH INFORMATION (IIHI) IN THE FOLLOWING WAYS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "The following categories describe the different ways in which we may use and disclose your IIHI."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1. Treatment."), " Our practice may use your IIHI to treat you. For example, we may ask you to have laboratory tests (such as blood or urine tests), and we may use the results to help us reach a diagnosis. We might use your IIHI in order to write a prescription for you, or we might disclose your IIHI to a pharmacy when we order a prescription for you. Many of the people who work for our practice \u2013 including, but not limited to, our doctors and nurses \u2013 may use or disclose your IIHI in order to treat you or to assist others in your treatment. Additionally, we may disclose your IIHI to others who may assist in your care, such as your spouse, children or parents"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "Finally, we may also disclose your IIHI to other health care providers for purposes related to your treatment."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "2. Payment."), " Our practice may use and disclose your IIHI in order to bill and collect payment for the services and items you may receive from us. For example, we may contact your health insurer to certify that you are eligible for benefits (and for what range of benefits), and we may provide your insurer with details regarding your treatment to determine if your insurer will cover, or pay for, your treatment. We also may use and disclose your IIHI to obtain payment from third parties that may be responsible for such costs, such as family members. Also, we may use your IIHI to bill you directly for services and items. We may disclose your IIHI to other health care providers and entities to assist in their billing and collection efforts."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "3. Health Care Operations."), " Our practice may use and disclose your IIHI to operate our business. As examples of the ways in which we may use and disclose your information for our operations, our practice may use your IIHI to evaluate the quality of care you received from us, or to conduct cost-management and business planning activities for our practice. We may disclose your IIHI to other health care providers and entities to assist in their health care operations."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "4. Appointment Reminders."), " Our practice may use and disclose your IIHI to contact you and remind you of an appointment."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "5. Treatment Options."), " Our practice may use and disclose your IIHI to inform you of potential treatment options or alternatives."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "6. Health-Related Benefits and Services."), " Our practice may use and disclose your IIHI to inform you of health-related benefits or services that may be of interest to you."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "7. Release of Information to Family/Friends."), " Our practice may release your IIHI to a friend or family member that is involved in your care, or who assists in taking care of you. For example, a parent or guardian may ask that a babysitter take their child to the pediatrician\u2019s office for treatment of a cold. In this example, the babysitter may have access to this child\u2019s medical information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "8. Disclosures Required By Law."), " Our practice will use and disclose your IIHI when we are required to do so by federal, state or local law."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "D. USE AND DISCLOSURE OF YOUR IIHI IN CERTAIN SPECIAL CIRCUMSTANCES"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "The following categories describe unique scenarios in which we may use or disclose your identifiable health information:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1. Public Health Risks."), " Our practice may disclose your IIHI to public health authorities that are authorized by law to collect information for the purpose of:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 maintaining vital records, such as births and deaths"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 reporting child abuse or neglect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 preventing or controlling disease, injury, or disability"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 notifying a person regarding potential exposure to a communicable disease"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 notifying a person regarding a potential risk for spreading or contracting a disease or condition"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 reporting recations to drugs or problems with products or devices"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 notifying individuals if a product or device they may be using has been recalled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 notifying appropriate government agency(ies) and authority(ies) regarding the potential abuse or neglect of an adult patient (including domestic violence); however, we will only disclose this information if the patient agrees or we are required or authorized by law to disclose this information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 notifying your employer under limited circumstances related primarily to workplace injury or illness or medical surveillance.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "2. Health Oversight Activities."), " Our practice may disclose your IIHI to a health oversight agency for activities authorized by law. Oversight activities can include, for example, investigations, inspections, audits, surveys, licensure and disciplinary actions; civil, administrative, and criminal procedures or actions; or other activities necessary for the government to monitor government programs, compliance with civil rights laws and the health care system in general."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "3. Lawsuits and Similar Proceedings."), " Our practice may use and disclose your IIHI in response to a court or administrative order, if you are involved in a lawsuit or similar proceeding. We also may disclose your IIHI in response to a discovery request, subpoena, or other lawful process by another party involved in the dispute, but only if we have made an effort to inform you of the request or to obtain an order protecting the information the party has requested."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "4. Law Enforcement."), " We may release IIHI if asked to do so by a law enforcement official:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Regarding a crime victim in certain situations, if we are unable to obtain the person\u2019s agreement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Concerning a death we believe has resulted from criminal conduct"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 Regarding criminal conduct at our office"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 In response to a warrant, summons, court order, subpoena or similar legal process"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 To identify/locate a suspect, material witness, fugitive or missing person"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-item"
  }, "\u2192 In an emergency, to report a crime (including the location or victim(s) of the crime, or the description, identity or location of the perpetrator)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "5. Deceased Patients."), " Our practice may release IIHI to a medical examiner or coroner to identify a deceased individual or to identify the cause of death. If necessary, we also may release information in order for funeral directors to perform their jobs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "6. Organ and Tissue Donation."), " Our practice may release your IIHI to organizations that handle organ, eye or tissue procurement or transplantation, including organ donation banks, as necessary to facilitate organ or tissue donation and transplantation if you are an organ donor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "7. Research."), " Our practice may use and disclose your IIHI for research purposes in certain limited circumstances. We will obtain your written authorization to use your IIHI for research purposes except when an Institutional Review Board or Privacy Board has determined that the waiver of your authorization satisfies the following: (i) the use or disclosure involves no more than a minimal risk to your privacy based on the following: (A) an adequate plan to protect the identifiers from improper use and disclosure; (B) an adequate plan to destroy the identifiers at the earliest opportunity consistent with the research (unless there is a health or research justification for retaining the identifiers or such retention is otherwise required by law); and (C) adequate written assurances that the PHI will not be re-used or disclosed to any other person or entity (except as required by law) for authorized oversight of the research study, or for other research for which the use or disclosure would otherwise be permitted; (ii) the research could not practicably be conducted without the waiver; and (iii) the research could not practicably be conducted without access to and use of the PHI."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "8. Serious Threats to Health or Safety."), " Our practice may use and disclose your IIHI when necessary to reduce or prevent a serious threat to your health and safety or the health and safety of another individual or the public. Under these circumstances, we will only make disclosures to a person or organization able to help prevent the threat."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "9. Military."), " Our practice may disclose your IIHI if you are a member of U.S. or foreign military forces (including veterans) and if required by the appropriate authorities."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "10. National Security."), " Our practice may disclose your IIHI to federal officials for intelligence and national security activities authorized by law. We also may disclose your IIHI to federal officials in order to protect the President, other officials or foreign heads of state, or to conduct investigations."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "11. Inmates. "), " Our practice may disclose your IIHI to correctional institutions or law enforcement officials if you are an inmate or under the custody of a law enforcement official. Disclosure for these purposes would be necessary: (a) for the institution to provide health care services to you, (b) for the safety and security of the institution, and/or (c) to protect your health and safety or the health and safety of other individuals."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "12. Workers\u2019 Compensation."), " Our practice may release your IIHI for workers\u2019 compensation and similar programs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "list-header"
  }, "E. YOUR RIGHTS REGARDING YOUR IIHI"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, "You have the following rights regarding the IIHI that we maintain about you:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1. Confidential Communications."), " You have the right to request that our practice communicate with you about your health and related issues in a particular manner or at a certain location. For instance, you may ask that we contact you at home, rather than work. In order to request a type of confidential communication, you must make a written request to OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973, specifying the requested method of contact, or the location where you wish to be contacted. Our practice will accommodate reasonable requests. You do not need to give a reason for your request."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "2. Requesting Restrictions."), " You have the right to request a restriction in our use or disclosure of your IIHI for treatment, payment or health care operations. Additionally, you have the right to request that we restrict our disclosure of your IIHI to only certain individuals involved in your care or the payment for your care, such as family members and friends. We are not required to agree to your request; however, if we do agree, we are bound by our agreement except when otherwise required by law, in emergencies, or when the information is necessary to treat you. In order to request a restriction in our use or disclosure of your IIHI, you must make your request in writing to OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973. Your request must describe in a clear and concise fashion:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "(a) the information you wish restricted;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "(b) whether you are requesting to limit our practice\u2019s use, disclosure or both; and"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "(c) to whom you want the limits to apply.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "3. Inspection and Copies."), " You have the right to inspect and obtain a copy of the IIHI that may be used to make decisions about you, including patient medical records and billing records, but not including psychotherapy notes. You must submit your request in writing to OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973, in order to inspect and/or obtain a copy of your IIHI. Our practice may charge a fee for the costs of copying, mailing, labor and supplies associated with your request. Our practice may deny your request to inspect and/or copy in certain limited circumstances; however, you may request a review of our denial. Another licensed health care professional chosen by us will conduct reviews."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "4. Amendment."), " You may ask us to amend your health information if you believe it is incorrect or incomplete, and you may request an amendment for as long as the information is kept by or for our practice. To request an amendment, your request must be made in writing and submitted to OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973. You must provide us with a reason that supports your request for amendment. Our practice will deny your request if you fail to submit your request (and the reason supporting your request) in writing. Also, we may deny your request if you ask us to amend information that is in our opinion: (a) accurate and complete; (b) not part of the IIHI kept by or for the practice; (c) not part of the IIHI which you would be permitted to inspect and copy; or (d) not created by our practice, unless the individual or entity that created the information is not available to amend the information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "5. Accounting of Disclosures."), " All of our patients have the right to request an \u201Caccounting of disclosures.\u201D An \u201Caccounting of disclosures\u201D is a list of certain non-routine disclosures our practice has made of your IIHI for non-treatment, non-payment or non-operations purposes. Use of your IIHI as part of the routine patient care in our practice is not required to be documented. For example, the doctor sharing information with the nurse; or the billing department using your information to file your insurance claim. In order to obtain an accounting of disclosures, you must submit your request in writing to OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973. All requests for an \u201Caccounting of disclosures\u201D must state a time period, which may not be longer than six (6) years from the date of disclosure and may not include dates before April 14, 2003. The first list you request within a 12-month period is free of charge, but our practice may charge you for additional lists within the same 12-month period. Our practice will notify you of the costs involved with additional requests, and you may withdraw your request before you incur any costs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "6. Right to a Paper Copy of This Notice."), " You are entitled to receive a paper copy of our notice of privacy practices. You may ask us to give you a copy of this notice at any time. To obtain a paper copy of this notice, contact OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "7. Right to File a Complaint."), " If you believe your privacy rights have been violated, you may file a complaint with our practice or with the Secretary of the Department of Health and Human Services. To file a complaint with our practice, contact OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973. All complaints must be submitted in writing. You will not be penalized for filing a complaint."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-section-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "8. Right to Provide an Authorization for Other Uses and Disclosures."), " ", "Our practice will obtain your written authorization for uses and disclosures that are not identified by this notice or permitted by applicable law. Any authorization you provide to us regarding the use and disclosure of your IIHI may be revoked at any time in writing. After you revoke your authorization, we will no longer use or disclose your IIHI for the reasons described in the authorization. Please note, we are required to retain records of your care."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-section-footer"
  }, "Again, if you have any questions regarding this notice or our health information privacy policies, please contact OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "slogan-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slogan__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivacyPolicy);

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