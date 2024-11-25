/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/extend.ts":
/*!******************************!*\
  !*** ./src/common/extend.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_Problem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Problem */ "./src/common/model/Problem.ts");
/* harmony import */ var _model_Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Test */ "./src/common/model/Test.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Store)().add('register-quiz-problem', _model_Problem__WEBPACK_IMPORTED_MODULE_1__["default"]).add('register-quiz-test', _model_Test__WEBPACK_IMPORTED_MODULE_2__["default"])]);

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./src/common/extend.ts");


/***/ }),

/***/ "./src/common/model/Problem.ts":
/*!*************************************!*\
  !*** ./src/common/model/Problem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Problem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var Problem = /*#__PURE__*/function (_Model) {
  function Problem() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.title = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('title');
    _this.content = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('content');
    _this.answer = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('answer');
    _this.problem = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('problem');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Problem, _Model);
  return Problem;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/model/Test.ts":
/*!**********************************!*\
  !*** ./src/common/model/Test.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Test)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var Test = /*#__PURE__*/function (_Model) {
  function Test() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.created_at = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('created_at', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.saved = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('saved');
    _this.problems = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('problems');
    _this.submitted = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('submitted');
    _this.score = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('score');
    _this.expired_at = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('expired_at', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Test, _Model);
  var _proto = Test.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return '/register-quiz-test';
  };
  return Test;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/addTip.tsx":
/*!******************************!*\
  !*** ./src/forum/addTip.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTip: () => (/* binding */ addTip)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);




function addTip() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.override)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default().prototype), 'hero', function (original) {
    var _app$current, _app$session;
    var existing = original();
    var tip = null;
    if (((_app$current = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().current)) == null || (_app$current = _app$current.data) == null ? void 0 : _app$current.routeName) != 'xypp-register-quiz.quiz' && !flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute("xypp-register-quiz.authorized")) if ((_app$session = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().session)) != null && _app$session.user) {
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().session.user.attribute("register_quiz_require")) {
        tip = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xypp-register-quiz.forum.quiz-tip.required');
      }
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().session.user.attribute("in_quiz")) {
        tip = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xypp-register-quiz.forum.quiz-tip.in_quiz');
      }
    }
    if (!tip) {
      return existing;
    }
    var additional = m("div", {
      className: "quiz-tip Alert Alert-info"
    }, m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().route('xypp-register-quiz.quiz')
    }, tip));
    if (Array.isArray(existing)) {
      return [additional].concat(existing);
    }
    return m("div", null, " ", [additional, existing]);
  });
}

/***/ }),

/***/ "./src/forum/components/QuizPage.tsx":
/*!*******************************************!*\
  !*** ./src/forum/components/QuizPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizPage: () => (/* binding */ QuizPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10__);











function _trans(key, args) {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans("xypp-register-quiz.forum.quiz." + key, args);
}
var QuizPage = /*#__PURE__*/function (_Page) {
  function QuizPage() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Page.call.apply(_Page, [this].concat(args)) || this;
    _this.loading = false;
    _this.inQuiz = false;
    _this.test = void 0;
    _this.doorkey = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()("");
    _this.loading_doorkey = false;
    _this.answers = void 0;
    _this.interval = void 0;
    _this.lastSaving = void 0;
    _this.checkedDoorkey = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(QuizPage, _Page);
  var _proto = QuizPage.prototype;
  _proto.oninit = function oninit(vnode) {
    var _app$session,
      _this2 = this;
    _Page.prototype.oninit.call(this, vnode);
    this.inQuiz = !!((_app$session = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session)) != null && _app$session.user && flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session.user.attribute("in_quiz"));
    if (this.inQuiz) {
      this.loading = true;
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.find("register-quiz-test").then(function (test) {
        _this2.test = test;
        _this2.loading = false;
        _this2.answers = (test.problems() || []).map(function (_, i) {
          return new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default())(test.saved()[i]);
        });
        _this2.interval = setInterval(_this2.checkAndSaveAnswer.bind(_this2), 10000);
        m.redraw();
      });
    }
  };
  _proto.onbeforeremove = function onbeforeremove(vnode) {
    _Page.prototype.onbeforeremove.call(this, vnode);
    this.interval && clearInterval(this.interval);
  };
  _proto.view = function view() {
    return m("div", null, flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default().prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default().prototype.sidebarItems().toArray()))), m("div", {
      className: "quiz-page"
    }, this.main()))));
  };
  _proto.main = function main() {
    var _app$session2;
    if (!((_app$session2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session)) != null && _app$session2.user)) {
      return m("h1", null, _trans("login_first"));
    }
    if (!this.inQuiz && !flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session.user.attribute("register_quiz_require")) {
      return m("h1", null, _trans("already_authorized"));
    }
    if (this.checkedDoorkey) {
      return m("h1", null, _trans("invite_code_checked"));
    }
    if (!this.inQuiz) {
      return this.prepareForm().toArray();
    } else {
      return this.quiz().toArray();
    }
  };
  _proto.prepareForm = function prepareForm() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default())();
    items.add('title', m("h1", null, _trans("title")), 10);
    items.add('description', m("div", null, _trans("desc", {
      time: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute("xypp-register-quiz.test_time"),
      count: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute("xypp-register-quiz.problem_count"),
      require: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute("xypp-register-quiz.require")
    })));
    items.add('startQuiz', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
      onclick: this.start.bind(this),
      className: "Button Button--primary",
      loading: this.loading,
      disabled: this.loading
    }, _trans("start")));
    if (flarum.extensions['fof-doorman']) items.add('doorkey', m("div", {
      className: "doorkey-input"
    }, m("h2", null, _trans("invite")), m("label", null, _trans("invite_code")), m("input", {
      type: "text",
      placeholder: _trans("invite"),
      bidi: this.doorkey,
      className: "FormControl doorkey-input-input"
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
      className: "Button Button--primary",
      onclick: this.submitDoorkey.bind(this),
      loading: this.loading,
      disabled: this.loading
    }, _trans("submit"))));
    return items;
  };
  _proto.quiz = function quiz() {
    var _this3 = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default())();
    if (!this.test) {
      items.add("loading", m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default()), null));
    } else if (this.test.submitted()) {
      items.add("submitted", m("h1", null, _trans("submitted")));
      items.add("score", m("div", {
        className: "score"
      }, _trans("score", {
        score: this.test.score(),
        total: (this.test.problems() || []).length,
        span: m("span", {
          className: "score-value"
        })
      })));
      if (this.test.score() >= flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute("xypp-register-quiz.require")) {
        items.add("authorized", m("div", null, _trans("authorized")));
      } else {
        items.add("not-pass", m("div", null, _trans("not_pass", {
          score: this.test.score(),
          require: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute("xypp-register-quiz.require"),
          retry: m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
            className: "Button Button--primary",
            onclick: function onclick() {
              _this3.inQuiz = false;
              _this3.test = undefined;
            }
          })
        })));
      }
    } else {
      var _this$test$expired_at;
      items.add("title", m("h1", null, _trans("in_quiz")));
      items.add("expired_at", m("div", null, _trans("expired_at", {
        time: (_this$test$expired_at = this.test.expired_at()) == null ? void 0 : _this$test$expired_at.toLocaleString()
      })));
      var problems = this.test.problems() || [];
      problems.forEach(function (problem, problemIdx) {
        problem && items.add("pid-" + problem.id(), m("div", {
          className: "quiz-problem"
        }, m("div", {
          className: "quiz-problem-title"
        }, problem.title()), m("div", {
          className: "quiz-problem-content"
        }, problem.content()), m("div", {
          className: "quiz-problem-options"
        }, problem.problem().map(function (o, idx) {
          var _this3$answers;
          return m("div", {
            className: "quiz-problem-option"
          }, m("input", {
            type: "radio",
            id: "pid-" + problem.id() + "answer-" + idx,
            name: "pid-" + problem.id() + "answer",
            value: idx,
            checked: ((_this3$answers = _this3.answers) == null ? void 0 : _this3$answers[problemIdx]()) == idx,
            onclick: function onclick() {
              var _this3$answers2;
              return (_this3$answers2 = _this3.answers) == null ? void 0 : _this3$answers2[problemIdx](idx);
            }
          }), m("label", {
            "for": "pid-" + problem.id() + "answer-" + idx
          }, o));
        }))));
      });
      items.add("submit", m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
        className: "Button Button--primary",
        onclick: this.submitQuiz.bind(this),
        loading: this.loading,
        disabled: this.loading
      }, _trans("submit")));
    }
    return items;
  };
  _proto.start = function start() {
    var _this4 = this;
    this.loading = true;
    this.inQuiz = true;
    m.redraw();
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.createRecord("register-quiz-test").save({}).then(function (test) {
      _this4.test = test;
      _this4.loading = false;
      _this4.answers = (test.problems() || []).map(function (_) {
        return new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default())(null);
      });
      _this4.interval = setInterval(_this4.checkAndSaveAnswer.bind(_this4), 10000);
      m.redraw();
    });
  };
  _proto.submitDoorkey = /*#__PURE__*/function () {
    var _submitDoorkey = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.loading = true;
            m.redraw();
            _context.prev = 2;
            _context.next = 5;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().request({
              method: "POST",
              url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute("apiUrl") + "/register-quiz-submit-doorkey",
              body: {
                doorkey: this.doorkey()
              }
            });
          case 5:
            this.checkedDoorkey = true;
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.pushAttributes({
              "xypp-register-quiz.authorized": true
            });
          case 7:
            _context.prev = 7;
            this.loading = false;
            m.redraw();
            return _context.finish(7);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[2,, 7, 11]]);
    }));
    function submitDoorkey() {
      return _submitDoorkey.apply(this, arguments);
    }
    return submitDoorkey;
  }();
  _proto.getAnswer = function getAnswer() {
    var _this5 = this;
    if (this.test && this.answers) {
      var changed = false;
      var p = this.test.problems() || [];
      var toSaveAnswer = this.test.saved();
      p.map(function (_, i) {
        if (_this5.answers[i]() != toSaveAnswer[i]) {
          toSaveAnswer[i] = _this5.answers[i]();
          changed = true;
        }
      });
      if (changed) {
        return toSaveAnswer;
      }
    }
    return false;
  };
  _proto.checkAndSaveAnswer = function checkAndSaveAnswer() {
    var _this6 = this;
    if (this.lastSaving) {
      return;
    }
    var toSaveAnswer = this.getAnswer();
    if (toSaveAnswer) {
      this.lastSaving = this.test.save({
        saved: toSaveAnswer
      })["finally"](function () {
        return _this6.lastSaving = undefined;
      });
    }
  };
  _proto.submitQuiz = /*#__PURE__*/function () {
    var _submitQuiz = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var toSaveAnswer;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            this.loading = true;
            this.interval && clearInterval(this.interval);
            m.redraw();
            _context2.t0 = this.lastSaving;
            if (!_context2.t0) {
              _context2.next = 7;
              break;
            }
            _context2.next = 7;
            return this.lastSaving;
          case 7:
            toSaveAnswer = this.getAnswer();
            _context2.next = 10;
            return this.test.save({
              saved: toSaveAnswer,
              submit: true
            });
          case 10:
            this.test = _context2.sent;
            this.loading = false;
            m.redraw();
            if (this.test.score() >= flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute("xypp-register-quiz.require")) {
              flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.pushAttributes({
                "xypp-register-quiz.authorized": true
              });
            }
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function submitQuiz() {
      return _submitQuiz.apply(this, arguments);
    }
    return submitQuiz;
  }();
  return QuizPage;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_4___default()));

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_QuizPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/QuizPage */ "./src/forum/components/QuizPage.tsx");
/* harmony import */ var _addTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTip */ "./src/forum/addTip.tsx");



flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xypp/flarum-register-quiz', function () {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes)['xypp-register-quiz.quiz'] = {
    "path": "/register-quiz",
    "component": _components_QuizPage__WEBPACK_IMPORTED_MODULE_1__.QuizPage
  };
  (0,_addTip__WEBPACK_IMPORTED_MODULE_2__.addTip)();
});

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map