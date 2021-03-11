((typeof(window)!=='undefined'?window:global)["webpackChunkgadget_template_default"] = (typeof(window)!=='undefined'?window:global)["webpackChunkgadget_template_default"] || []).push([["outlet__outlets_default_tsx"],{

/***/ "./outlets/default.tsx":
/*!*****************************!*\
  !*** ./outlets/default.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileHtml)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gadget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gadget.js */ "./node_modules/gadget.js/salver/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./outlets/index.scss");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var MobileHtml = /*#__PURE__*/function (_Html) {
  _inherits(MobileHtml, _Html);

  var _super = _createSuper(MobileHtml);

  function MobileHtml() {
    _classCallCheck(this, MobileHtml);

    return _super.apply(this, arguments);
  }

  _createClass(MobileHtml, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styles = _this$props.styles,
          scripts = _this$props.scripts,
          children = _this$props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", null, "Gadget"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        charSet: "UTF-8"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1, user-scalable=no, viewport-fit=cover"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/prism-themes@1.5.0/themes/prism-vsc-dark-plus.css"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/toolbar/prism-toolbar.css"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/line-numbers/prism-line-numbers.css"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/line-highlight/prism-line-highlight.css"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/material-icons@0.3.1/iconfont/material-icons.css"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/material-icons@0.3.1/css/material-icons.min.css"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gadget_js__WEBPACK_IMPORTED_MODULE_2__.Styles, {
        list: styles
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
        id: "fork-me",
        href: "https://github.com/hsiaosiyuan0/hsiaosiyuan0.github.io",
        style: {
          position: "fixed",
          top: 0,
          right: 0,
          border: 0,
          width: 150,
          height: 150,
          zIndex: 3000
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        style: {
          position: "absolute",
          top: 0,
          right: 0,
          border: 0
        },
        src: "https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67",
        alt: "Fork me on GitHub",
        "data-canonical-src": "https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
      })), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-core.min.js",
        "data-manual": true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-markup.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-clike.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-json.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-javascript.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-jsx.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-typescript.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-tsx.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-bash.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-python.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-xml-doc.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-docker.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-rust.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-nasm.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-c.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-cpp.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-xml-doc.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/toolbar/prism-toolbar.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/line-numbers/prism-line-numbers.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/line-highlight/prism-line-highlight.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/show-language/prism-show-language.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/gh/cferdinandi/gumshoe@5.1.1/dist/gumshoe.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/react@16.14.0/umd/react.production.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/react-dom@16.14.0/umd/react-dom.production.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/react@16.14.0/umd/react.production.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/react-dom@16.14.0/umd/react-dom.production.min.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gadget_js__WEBPACK_IMPORTED_MODULE_2__.Scripts, {
        list: scripts
      })));
    }
  }]);

  return MobileHtml;
}(gadget_js__WEBPACK_IMPORTED_MODULE_2__.Html);


;((typeof(window)!=='undefined'?window:__webpack_require__.g)["__gadget__"]["pageModules"]).push(["outlet__outlets_default_tsx", function () {
  var mod = __webpack_require__(/*! ./outlets/default.tsx */ "./outlets/default.tsx");
  return mod;
}]);


/***/ }),

/***/ "./outlets/index.scss":
/*!****************************!*\
  !*** ./outlets/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./outlets/default.tsx","foundation","lib"]]]);
//# sourceMappingURL=outlet__outlets_default_tsx.js.map