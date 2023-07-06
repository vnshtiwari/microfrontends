"use strict";
(self["webpackChunknextjs_host_react_remote_remote"] = self["webpackChunknextjs_host_react_remote_remote"] || []).push([["src_components_PersonalisedQuote_js"],{

/***/ "./node_modules/@mui/icons-material/Add.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/icons-material/Add.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/Remove.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Remove.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 13H5v-2h14v2z"
}), 'Remove');
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/material/ListItemIcon/ListItemIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _listItemIconClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listItemIconClasses */ "./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../List/ListContext */ "./node_modules/@mui/material/List/ListContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className"];









const useUtilityClasses = ownerState => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ['root', alignItems === 'flex-start' && 'alignItemsFlexStart']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _listItemIconClasses__WEBPACK_IMPORTED_MODULE_6__.getListItemIconUtilityClass, classes);
};
const ListItemIconRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiListItemIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  minWidth: 56,
  color: (theme.vars || theme).palette.action.active,
  flexShrink: 0,
  display: 'inline-flex'
}, ownerState.alignItems === 'flex-start' && {
  marginTop: 8
}));

/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */
const ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ListItemIcon(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiListItemIcon'
  });
  const {
      className
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);
  const context = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_9__["default"]);
  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    alignItems: context.alignItems
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ListItemIconRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 true ? ListItemIcon.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemIcon);

/***/ }),

/***/ "./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js":
/*!************************************************************************!*\
  !*** ./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getListItemIconUtilityClass": () => (/* binding */ getListItemIconUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getListItemIconUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiListItemIcon', slot);
}
const listItemIconClasses = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemIconClasses);

/***/ }),

/***/ "./src/components/PersonalisedQuote.js":
/*!*********************************************!*\
  !*** ./src/components/PersonalisedQuote.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Plans)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Add */ "./node_modules/@mui/icons-material/Add.js");
/* harmony import */ var _mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Remove */ "./node_modules/@mui/icons-material/Remove.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _styles_basic_info_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/basic-info.module.css */ "./src/components/styles/basic-info.module.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.css */ "./src/components/home.css");
/* harmony import */ var _styles_plans_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/plans.module.css */ "./src/components/styles/plans.module.css");


















function Plans({
  selectedPlan,
  plan,
  amount,
  setPlan,
  setAmount,
  setLoader
}) {
  let [planBenefits, setPlanBenefits] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let [planId, setPlanId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let [selectedAddsOns, setSelectedAddsOns] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  function selectAddsOns(item) {
    if (!selectedAddsOns.includes(item.name)) {
      selectedAddsOns.push(item.name);
      setSelectedAddsOns([...selectedAddsOns]);
      setAmount(amount + item.amount);
    } else {
      selectedAddsOns.splice(selectedAddsOns.indexOf(item.name), 1), setSelectedAddsOns([...selectedAddsOns]);
      setAmount(amount - item.amount);
    }
  }
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
    gtag("event", "personalise_quote_done");
    navigate("../ekyc");
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
    gtag("event", "personalise_quote_init");
  }, []);
  const [personName, setPersonName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const selectGender = gender => {
    setGender(gender);
  };
  const handleChange = event => {
    const {
      target: {
        value
      }
    } = event;
    setPersonName(
    // On autofill we get a stringified value.
    typeof value === "string" ? value.split(",") : value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", {
    className: "plan-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    sx: {
      marginTop: 10
    },
    justifyContent: "space-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: selectedPlan.productId,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "subtitle1",
    component: "div"
  }, selectedPlan.productName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    gutterBottom: true
  }, selectedPlan.productDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "ID: ", selectedPlan.productId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "$ ", selectedPlan.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Benefits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("ul", null, selectedPlan.productFeatures.map(pf => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("li", {
      key: pf
    }, pf);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "h6"
  }, "AddOns"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__["default"], null, selectedPlan.addsOns.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: item.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: () => selectAddsOns(item)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, !selectedAddsOns.includes(item.name) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_12__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__["default"], {
      primary: `₹ ${item.amount}        ${item.name}`
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    sx: {
      marginTop: 10
    },
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: selectedPlan.productId,
    sx: {
      width: 300
    },
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "quote-gen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "subtitle1",
    component: "div"
  }, "Plan Selected"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "subtitle1",
    color: "text.secondary",
    component: "div"
  }, selectedPlan.productName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "quote-gen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "subtitle1",
    component: "div"
  }, "AddOns"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "text.secondary",
    component: "div"
  }, selectedAddsOns.join(", "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "quote-gen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "subtitle1",
    component: "div"
  }, "Net premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "text.secondary",
    component: "div"
  }, "₹ " + amount * 82 / 100)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "quote-gen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "subtitle1",
    component: "div"
  }, "GST (18%)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "text.secondary",
    component: "div"
  }, "₹ " + amount * 18 / 100)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "quote-gen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "subtitle1",
    component: "div"
  }, "Total Premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "text.secondary",
    component: "div"
  }, "₹ " + amount))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null), amount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    position: "fixed",
    sx: {
      top: "auto",
      bottom: 0,
      color: "black",
      backgroundColor: "white"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      "text-align": "right"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "action-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", {
    className: "premium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "premium-label"
  }, "Total premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "premium-amount"
  }, "Rs ", amount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onClick: buyNow,
    color: "error",
    sx: {
      borderRadius: "20px"
    },
    size: "large",
    variant: "contained"
  }, "Proceed")))));
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
//# sourceMappingURL=src_components_PersonalisedQuote_js.js.map