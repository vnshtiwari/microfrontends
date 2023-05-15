"use strict";
(self["webpackChunknextjs_host_react_remote_remote"] = self["webpackChunknextjs_host_react_remote_remote"] || []).push([["src_components_Plans_js"],{

/***/ "./src/components/Plans.js":
/*!*********************************!*\
  !*** ./src/components/Plans.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Plans)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/FormHelperText */ "./node_modules/@mui/material/FormHelperText/FormHelperText.js");
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/FormGroup */ "./node_modules/@mui/material/FormGroup/FormGroup.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Slider */ "./node_modules/@mui/material/Slider/Slider.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/FormLabel */ "./node_modules/@mui/material/FormLabel/FormLabel.js");
/* harmony import */ var _mui_icons_material_Man__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Man */ "./node_modules/@mui/icons-material/Man.js");
/* harmony import */ var _mui_icons_material_Woman__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Woman */ "./node_modules/@mui/icons-material/Woman.js");
/* harmony import */ var _mui_icons_material_Transgender__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Transgender */ "./node_modules/@mui/icons-material/Transgender.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _styles_basic_info_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/basic-info.module.css */ "./src/components/styles/basic-info.module.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.css */ "./src/components/home.css");
/* harmony import */ var _styles_plans_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/plans.module.css */ "./src/components/styles/plans.module.css");
































function Plans({
  planList,
  plan,
  amount,
  setPlan,
  setAmount,
  setSelectedPlan,
  handleChange,
  state,
  setLoader,
  selectedPlan
}) {
  let [planBenefits, setPlanBenefits] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let [planId, setPlanId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  function selectCard(name, amount, productId) {
    if (name == plan) {
      setPlan("");
      setAmount(null);
      return;
    }
    setPlan(name);
    setPlanId(productId);
    setAmount(amount);
  }
  function buyNow() {
    if (!error) navigate("../ekyc");
  }
  async function getPersonaliseQuote() {
    debugger;
    if (error) return;
    let quoteData = {
      mobile: "7338209890",
      gender: "male",
      messageOptIn: true,
      sumInsured: 100000,
      tenure: 2,
      amount: 7500,
      insurableParty: [{
        smokingStatus: false,
        dob: "10/02/1989",
        relationship: "self"
      }, {
        smokingStatus: false,
        dob: "12/04/1991",
        relationship: "father"
      }]
    };
    quoteData["selectedProductId"] = planId || selectedPlan.productId;
    console.log(quoteData);
    setLoader(true);
    const rawResponse = await fetch("https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/quote/request", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(quoteData)
    });
    const content = await rawResponse.json();
    setLoader(false);
    console.log(content);
    setSelectedPlan({
      ...content.quote[0]
    });
    setAmount(content.quote[0].amount);
    debugger;
    sessionStorage.setItem("customerId", content.customerId);
    sessionStorage.setItem("quoteId", content.quoteId);
    gtag("event", "quote_gen_done");
    navigate("../personalisedQuote");
  }
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  const names = ["Self", "Mother", "Father", "Spouse", "Children"];
  function createData(benefitName, cover) {
    return {
      benefitName,
      cover
    };
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    gtag("event", "quote_gen_init");
  }, []);
  const [personName, setPersonName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const selectGender = gender => {
    setGender(gender);
  };
  const error = Object.values(state).filter(v => v).length >= 1 ? false : true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", {
    className: "plan-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    class: " cGIqAI dmGYTj  chat-question-inner user_name  text_single "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gutterBottom: true,
    variant: "h2",
    component: "h2"
  }, "Pru Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    sx: {},
    justifyContent: "space-around"
  }, planList.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.productId,
      sx: {
        cursor: "pointer",
        borderTop: plan == item.productName ? "red solid 4px" : null,
        width: "300px",
        marginTop: 8
      },
      item: true,
      onClick: () => {
        selectCard(item.productName, item.amount, item.productId);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gutterBottom: true,
      variant: "h4",
      component: "h2"
    }, item.productName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "body2",
      gutterBottom: true
    }, item.productDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "ID: ", item.productId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "\u20B9 ", item.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "Benefits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("ul", null, item.productFeatures.map(pf => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("li", {
        key: pf
      }, pf);
    }))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    light: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, plan && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      marginTop: 10
    },
    justifyContent: "space-around",
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {},
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      width: 300
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gutterBottom: true
  }, "Sum Insured (Lakhs)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    "aria-label": "Small steps",
    getAriaValueText: value => {
      return `₹{value} Lakh`;
    },
    style: {
      color: "red"
    },
    sx: {
      marginBottom: 5
    },
    defaultValue: 1,
    step: 1,
    min: 0,
    max: 5,
    valueLabelDisplay: "auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gutterBottom: true
  }, "Tenure (Years)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    "aria-label": "Small steps",
    getAriaValueText: value => {
      return `₹{value} Year`;
    },
    style: {
      color: "red"
    },
    sx: {
      marginBottom: 5
    },
    defaultValue: 1,
    step: 1,
    min: 0,
    max: 5,
    valueLabelDisplay: "auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: "100%"
    },
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: `mt10 ${_styles_basic_info_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].genderList}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    onClick: e => selectGender("Women")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_icons_material_Woman__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: gender == "Women" ? _styles_basic_info_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].active : null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "Women")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    onClick: e => selectGender("Man")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_icons_material_Man__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: gender == "Man" ? _styles_basic_info_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].active : null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "Man")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    onClick: e => selectGender("Other")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_icons_material_Transgender__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: gender == "Other" ? _styles_basic_info_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].active : null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "Other"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gutterBottom: true
  }, "Who would you like to insure today?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      m: 3
    },
    component: "fieldset",
    variant: "standard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
      style: {
        color: "red"
      },
      onChange: handleChange,
      name: "Self"
    }),
    label: "Self"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
      style: {
        color: "red"
      },
      onChange: handleChange,
      name: "Spouse"
    }),
    label: "Spouse"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
      style: {
        color: "red"
      },
      onChange: handleChange,
      name: "Son"
    }),
    label: "Son"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
      style: {
        color: "red"
      },
      onChange: handleChange,
      name: "Daughter"
    }),
    label: "Daughter"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    component: "fieldset",
    sx: {
      m: 3
    },
    variant: "standard",
    error: error
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onChange: handleChange,
      style: {
        color: "red"
      },
      name: "Mother"
    }),
    label: "Mother"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onChange: handleChange,
      style: {
        color: "red"
      },
      name: "Father"
    }),
    label: "Father"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onChange: handleChange,
      style: {
        color: "red"
      },
      name: "Mother-in-law"
    }),
    label: "Mother-in-law"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onChange: handleChange,
      style: {
        color: "red"
      },
      name: "Father-in-law"
    }),
    label: "Father-in-law"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_18__["default"], null, "Please select at least one.")))))), amount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_19__["default"], {
    position: "fixed",
    sx: {
      top: "auto",
      bottom: 0,
      color: "black",
      backgroundColor: "white"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
    style: {
      "text-align": "right"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "action-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", {
    className: "premium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "premium-label"
  }, "Base premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "premium-amount"
  }, "Rs ", amount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onClick: getPersonaliseQuote,
    color: "error",
    sx: {
      borderRadius: "20px"
    },
    size: "large",
    variant: "contained"
  }, "Get Quote")))));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/styles/plans.module.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/styles/plans.module.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".n9If0yeKQLIiXH2FhiKS{\n    display: flex;\n}\n\n.oO8bgFmAdJIDEKaUoGtr {\n    width: 70px;\n    height: 70px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/components/styles/plans.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":[".plan-item{\n    display: flex;\n}\n\n.plan-icon {\n    width: 70px;\n    height: 70px;\n}\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"plan-item": "n9If0yeKQLIiXH2FhiKS",
	"plan-icon": "oO8bgFmAdJIDEKaUoGtr"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/styles/plans.module.css":
/*!************************************************!*\
  !*** ./src/components/styles/plans.module.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_plans_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./plans.module.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/styles/plans.module.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_plans_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_plans_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_plans_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_plans_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_Plans_js.js.map