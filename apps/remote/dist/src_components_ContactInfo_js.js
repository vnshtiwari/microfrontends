"use strict";
(self["webpackChunknextjs_host_react_remote_remote"] = self["webpackChunknextjs_host_react_remote_remote"] || []).push([["src_components_ContactInfo_js"],{

/***/ "./node_modules/@mui/icons-material/ContactPhone.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/ContactPhone.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"
}), 'ContactPhone');
exports["default"] = _default;

/***/ }),

/***/ "./src/components/ContactInfo.js":
/*!***************************************!*\
  !*** ./src/components/ContactInfo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/InputAdornment */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_icons_material_ContactPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ContactPhone */ "./node_modules/@mui/icons-material/ContactPhone.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Send */ "./node_modules/@mui/icons-material/Send.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _styles_basic_info_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/basic-info.module.css */ "./src/components/styles/basic-info.module.css");
/* harmony import */ var _common_OtpInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/OtpInput */ "./src/components/common/OtpInput.js");
/* harmony import */ var _utility_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/common */ "./src/utility/common.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./src/firebase.js");
















// import Claims from "home/Claims";
// const PurposeDetail = React.lazy(() => import("home/PurposeDetail"));

function ContactInfo({
  contactData,
  setContactData,
  setPlan,
  error,
  validate,
  setLoader
}) {
  let [isEmailOtpActive, setEmailOtpActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [isMobileOtpActive, setMobileOtpActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [isAadharOtpActive, setAadharOtpActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [isEmailVarified, setEmailVerified] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [isMobileVarified, setMobileVerified] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [isAadharVerified, setAadharVerified] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [emailOtp, setEmailOtp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  let [mobileOtp, setMobileOtp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  let [aadharOtp, setAadharOtp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [payload, setPayload] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [final, setfinal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (emailOtp.length == 6) setEmailVerified(true);
  }, [emailOtp]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    gtag("event", "contact_info_init");
  }, []);

  // useEffect(() => {
  //   const mojoauth = new MojoAuth("test-70d678ab-4b55-4445-9b2e-040ba352a6ce", {
  //     source: [{ type: "phone", feature: "otp" }],
  //   });
  //   mojoauth.signIn().then((payload) => {
  //     setPayload(payload);
  //     document.getElementById("mojoauth-passwordless-form").remove();
  //   });
  // }, []);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (final == "") {
      let verify = new _firebase__WEBPACK_IMPORTED_MODULE_4__.firebase.auth.RecaptchaVerifier("recaptcha-container");
      _firebase__WEBPACK_IMPORTED_MODULE_4__.auth.signInWithPhoneNumber("+91" + contactData["mobile"], verify).then(result => {
        setfinal(result);
        setMobileOtpActive(true);
      }).catch(err => {
        alert(err);
      });
    }
  }, [final]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mobileOtp.length == 6) {
      final.confirm(mobileOtp).then(result => {
        setMobileVerified(true);
      }).catch(err => {
        alert("Wrong code");
      });
    }
  }, [mobileOtp]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (aadharOtp.length == 6) setAadharVerified(true);
  }, [aadharOtp]);
  let navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  async function next() {
    if (validate(0, "mobile") && validate(0, "pincode")) {
      console.log(contactData);
      setLoader(true);
      debugger;
      const rawResponse = await fetch("https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/quote/request", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
      });
      const content = await rawResponse.json();
      setLoader(false);
      setPlan([...content.quote]);
      gtag("event", "contact_info_done");
      navigate("../plans");
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    class: "chat-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "questions-container user_name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: " cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    class: " fFoQAK"
  }, "Welcome! Start your insurance journey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_basic_info_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].basicDetailContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "input-container  mt30 text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "filled-basic",
    fullWidth: true,
    label: "Mobile No.",
    variant: "outlined",
    value: contactData["mobile"],
    onChange: e => {
      setMobileOtpActive(false);
      setMobileVerified(false);
      contactData["mobile"] = e.target.value.slice(0, 10);
      setContactData({
        ...contactData
      });
    },
    onBlur: e => {
      validate(0, "mobile");
    },
    error: error["mobile"] != null,
    helperText: error["mobile"],
    spellCheck: false,
    type: "number",
    required: true,
    inputProps: {
      maxlength: 13,
      autocomplete: "off"
    },
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7__["default"], {
        position: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ContactPhone__WEBPACK_IMPORTED_MODULE_8__["default"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "prefix-code"
      }, "+91"))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "input-container  mt30 text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "filled-basic",
    fullWidth: true,
    label: "Pin code",
    variant: "outlined",
    value: contactData["pincode"],
    onChange: e => {
      setMobileOtpActive(false);
      setMobileVerified(false);
      contactData["pincode"] = e.target.value.slice(0, 6);
      setContactData({
        ...contactData
      });
    },
    onBlur: e => {
      validate(0, "pincode");
    },
    error: error["pincode"] != null,
    helperText: error["pincode"],
    spellCheck: false,
    type: "number",
    required: true,
    inputProps: {
      maxlength: 6,
      autocomplete: "off"
    }
  })), final == "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "30px"
    },
    id: "recaptcha-container"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "submit-wrap align-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    onClick: next,
    color: "error",
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }, "Next")))));
}

/***/ })

}]);
//# sourceMappingURL=src_components_ContactInfo_js.js.map