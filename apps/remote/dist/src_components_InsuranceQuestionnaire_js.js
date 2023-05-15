"use strict";
(self["webpackChunknextjs_host_react_remote_remote"] = self["webpackChunknextjs_host_react_remote_remote"] || []).push([["src_components_InsuranceQuestionnaire_js"],{

/***/ "./src/components/InsuranceQuestionnaire.js":
/*!**************************************************!*\
  !*** ./src/components/InsuranceQuestionnaire.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InsuranceQuestionnair)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.css */ "./src/components/home.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Slider */ "./node_modules/@mui/material/Slider/Slider.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");












function InsuranceQuestionnair({
  setLoader,
  setPolicyStatus
}) {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  let [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  let [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  function handleClick(opt) {
    if (opt == "no" && step == 0) {
      setStep(step + 3);
    } else next();
  }
  let [arr, setArr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  let [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  let [currAnswer, setCurrAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  let [questionType, setQuestionType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  let [currQuestion, setCurrQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  let [quesSeq, setQuesSeq] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let [currIdx, setCurrIdx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  let [questionObj, setQuestionObj] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLoader(true);
    fetch("https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/uw/questions") //api for the get request
    .then(response => {
      return response.json();
    }).then(data => {
      let questionObj = data;
      debugger;
      setArr([{
        obj: questionObj.questions,
        index: 0
      }]);
      setQuestion(questionObj.questions[0].question);
      setQuestionType(questionObj.questions[0].answerFormat);
      setCurrQuestion(questionObj.questions[0]);
      quesSeq.push();
      console.log(data);
      setLoader(false);
    });
    gtag("event", "underwriting_init");

    // let [ques, setQues] = useState({ ...questionObj });
  }, []);
  function nextQ(res) {
    let elem = arr[arr.length - 1];
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].id == elem.obj[elem.index].id) {
        answer.splice(i, 1);
      }
    }
    if (res == "yes" || res == "no") {
      answer.push({
        id: elem.obj[elem.index].id,
        key: elem.obj[elem.index].key,
        answer: res == "yes" ? true : false
      });
    } else answer.push({
      id: elem.obj[elem.index].id,
      key: elem.obj[elem.index].key,
      answer: currAnswer
    });
    setAnswer([...answer]);
    console.log(answer);
    if (elem.index >= elem.obj.length - 1) {
      arr.pop();
      if (arr.length == 0) {
        let data = {
          requestId: "uw_70880",
          customerId: 124,
          answers: [...answer]
        };
        setLoader(true);
        fetch("https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/uw/answers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
          setLoader(false);
          setPolicyStatus(data.statusId);
          gtag("event", "underwriting_done");
          navigate("../policyIssuance");
        }).catch(err => {
          console.log(err);
        });
      }
      if (arr.length != 0) {
        elem = arr[arr.length - 1];
        elem.index = elem.index + 1;
        // while (elem.index >= elem.obj.length - 1) {}
        setQuestion(elem.obj[elem.index].question);
        setQuestionType(elem.obj[elem.index].answerFormat);
        setCurrQuestion(elem.obj[elem.index]);
      }
      setArr([...arr]);
      return;
    }
    if (elem.obj[elem.index].hasNext && res == "yes") {
      arr.push({
        obj: elem.obj[elem.index].next,
        index: 0
      });
      setQuestion(elem.obj[elem.index].next[0].question);
      setQuestionType(elem.obj[elem.index].next[0].answerFormat);
      setCurrQuestion(elem.obj[elem.index].next[0]);

      //elem.index = elem.index + 1;

      setArr([...arr]);
    } else {
      elem.index = elem.index + 1;
      setQuestion(elem.obj[elem.index].question);
      setQuestionType(elem.obj[elem.index].answerFormat);
      setCurrQuestion(elem.obj[elem.index]);
      setArr([...arr]);
    }
    console.log(currQuestion);
    setCurrAnswer("");
  }
  function previousQ(res) {
    let elem = arr[arr.length - 1];
    if (arr.length == 0) {
      return;
    }
    // if (res == "yes" || res == "no") {
    //   answer.push({
    //     id: elem.obj[elem.index].id,
    //     answer: res == "yes" ? true : false,
    //   });
    // } else answer.push({ id: elem.obj[elem.index].id, answer: currAnswer });
    answer.pop();
    setAnswer([...answer]);
    console.log(answer);
    if (elem.index <= 0) {
      arr.pop();
      if (arr.length == 0) {
        return;
      }
      if (arr.length != 0) {
        elem = arr[arr.length - 1];
        // elem.index = elem.index - 1;
        // while (elem.index >= elem.obj.length - 1) {}
        setQuestion(elem.obj[elem.index].question);
        setQuestionType(elem.obj[elem.index].answerFormat);
        setCurrQuestion(elem.obj[elem.index]);
      }
      setArr([...arr]);
      return;
    } else {
      elem.index = elem.index - 1;
      // while (elem.index >= elem.obj.length - 1) {}
      setQuestion(elem.obj[elem.index].question);
      setQuestionType(elem.obj[elem.index].answerFormat);
      setCurrQuestion(elem.obj[elem.index]);
    }

    // if (elem.obj[elem.index].hasNext && res == "yes") {
    //   arr.push({ obj: elem.obj[elem.index].next, index: 0 });

    //   setQuestion(elem.obj[elem.index].next[0].question);
    //   setQuestionType(elem.obj[elem.index].next[0].answerFormat);
    //   setCurrQuestion(elem.obj[elem.index].next[0]);

    //   //elem.index = elem.index + 1;

    //   setArr([...arr]);
    // } else {
    //   elem.index = elem.index + 1;
    //   setQuestion(elem.obj[elem.index].question);
    //   setQuestionType(elem.obj[elem.index].answerFormat);
    //   setCurrQuestion(elem.obj[elem.index]);

    //   setArr([...arr]);
    // }
    console.log(currQuestion);
    setCurrAnswer("");
  }
  function next() {
    if (step < _constants__WEBPACK_IMPORTED_MODULE_1__.HealthInsuranceQuestion.length - 1) {
      setStep(++step);
    } else {
      navigate("../plans");
    }
  }
  function valuetext(value) {
    return `${value}°C`;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", {
    class: "chat-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    class: "questions-container user_name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    class: " cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", {
    class: " fFoQAK"
  }, "Let's make sure our health offering is right for you"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("form", {
    autocomplete: "off",
    novalidate: "",
    class: "bcuijq"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      position: "relative",
      left: "-50px",
      top: "100px",
      "font-size": "40px",
      cursor: "pointer"
    },
    onClick: previousQ
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    className: "question-form",
    style: {
      width: "100%",
      "min-width": "300px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    style: {
      "max-width": "416px"
    },
    class: "faXeTW hLEbcr"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    style: {
      width: "100%"
    },
    class: "cZobsb gLeraX"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    class: "cGIqAI gQDvru",
    style: {
      opacity: "1"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    height: "auto,57",
    class: "ifOqJt kIFXiF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    timeout: "400",
    class: "flgDQF",
    reversed: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    class: "cGIqAI gLeraX enter-done"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    class: "cDIwQB gQIPbk"
  }, question)))), questionType == "number" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      color: "red",
      marginTop: "20px"
    },
    "aria-label": "Always visible",
    defaultValue: 10,
    getAriaValueText: valuetext,
    valueLabelDisplay: "auto",
    step: 1,
    value: parseInt(currAnswer),
    key: question,
    onChange: (event, newValue) => {
      console.log(currQuestion, _constants__WEBPACK_IMPORTED_MODULE_1__.marks);
      setCurrAnswer(newValue);
    }
    // marks={marks}
    ,
    marks: currQuestion.key == "height" ? _constants__WEBPACK_IMPORTED_MODULE_1__.marks.height : _constants__WEBPACK_IMPORTED_MODULE_1__.marks.age
  }), questionType == "string" && currQuestion.answerOptions === undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      marginTop: 4
    },
    id: "filled-basic",
    fullWidth: true,
    variant: "outlined",
    spellCheck: false,
    type: "string",
    value: currAnswer,
    key: question,
    onChange: event => {
      setCurrAnswer(event.target.value);
      console.log(currQuestion);
    }
  }), questionType == "string" && currQuestion.answerOptions != undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      marginTop: 4
    },
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "demo-simple-select-label"
  }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: currAnswer,
    label: "Options",
    onChange: event => {
      setCurrAnswer(event.target.value);
    }
  }, currQuestion.answerOptions.map(elem => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: elem,
      value: elem
    }, elem);
  }))), questionType == "boolean" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    class: "EJVGF eqJfKL"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: e => nextQ("no"),
    variant: "outlined",
    class: "DaHEG dGJoGc"
  }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: e => nextQ("yes"),
    variant: "outlined",
    class: "DaHEG dGJoGc"
  }, "Yes")), (questionType == "string" || questionType == "number") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
    class: "EJVGF eqJfKL"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: e => nextQ("next"),
    variant: "outlined",
    class: "DaHEG dGJoGc"
  }, "Next")))))))))));
}

/***/ })

}]);
//# sourceMappingURL=src_components_InsuranceQuestionnaire_js.js.map