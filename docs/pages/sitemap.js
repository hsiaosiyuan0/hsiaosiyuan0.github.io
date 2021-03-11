((typeof(window)!=='undefined'?window:global)["webpackChunkgadget_template_default"] = (typeof(window)!=='undefined'?window:global)["webpackChunkgadget_template_default"] || []).push([["pages/sitemap"],{

/***/ "./components/header/index.tsx":
/*!*************************************!*\
  !*** ./components/header/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollToAnchor": () => (/* binding */ scrollToAnchor),
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-top-loading-bar */ "./node_modules/react-top-loading-bar/dist/index.modern.js");
/* harmony import */ var gadget_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gadget.js */ "./node_modules/gadget.js/salver/index.ts");
/* harmony import */ var _components_header_index_pure_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/header/index.pure.scss */ "./components/header/index.pure.scss");






function scrollToAnchor(hash, offset) {
  var id = decodeURIComponent(hash).replace("#", "");
  var element = document.getElementById(id);

  if (element) {
    var position = window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo(0, position - offset);
  }
}
var offset = 89;

function hackClick(mouseEvent) {
  var _ref = mouseEvent.target,
      hash = _ref.hash,
      pathname = _ref.pathname;

  if (hash) {
    if (window.location.pathname === pathname) {
      mouseEvent.preventDefault();

      if (window.location.hash === hash) {
        scrollToAnchor(hash, offset);
      } else {
        window.location.hash = hash;
      }
    }
  }
}

function Header(props) {
  var bar = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    function handleHashChange() {
      scrollToAnchor(window.location.hash, offset);
    }

    document.addEventListener("click", hackClick);
    window.addEventListener("hashchange", handleHashChange);

    (function () {
      document.removeEventListener("click", hackClick);
      window.removeEventListener("hashchange", handleHashChange);
    });
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    gadget_js__WEBPACK_IMPORTED_MODULE_4__.EventBus.on(gadget_js__WEBPACK_IMPORTED_MODULE_4__.EventBeforeRouteChanged, function () {
      var _bar$current;

      (_bar$current = bar.current) === null || _bar$current === void 0 ? void 0 : _bar$current.continuousStart();
    });
    gadget_js__WEBPACK_IMPORTED_MODULE_4__.EventBus.on(gadget_js__WEBPACK_IMPORTED_MODULE_4__.EventAfterRouteChanged, function () {
      var _bar$current2;

      (_bar$current2 = bar.current) === null || _bar$current2 === void 0 ? void 0 : _bar$current2.complete();
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__.default, {
    color: "#2998ff",
    ref: bar,
    shadow: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: _components_header_index_pure_scss__WEBPACK_IMPORTED_MODULE_5__.default.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: _components_header_index_pure_scss__WEBPACK_IMPORTED_MODULE_5__.default.title
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: _components_header_index_pure_scss__WEBPACK_IMPORTED_MODULE_5__.default.sitemap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: "/sitemap.html"
  }, "all"))));
}

/***/ }),

/***/ "./components/sidebar/index.tsx":
/*!**************************************!*\
  !*** ./components/sidebar/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "../../node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gadget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gadget.js */ "./node_modules/gadget.js/salver/index.ts");
/* harmony import */ var _components_sidebar_index_pure_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/sidebar/index.pure.scss */ "./components/sidebar/index.pure.scss");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Node(data) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  function title() {
    var _data$url;

    if ((_data$url = data.url) !== null && _data$url !== void 0 && _data$url.endsWith(".html")) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(gadget_js__WEBPACK_IMPORTED_MODULE_9__.Link, {
        html: {
          className: _components_sidebar_index_pure_scss__WEBPACK_IMPORTED_MODULE_10__.default.title,
          style: {
            paddingLeft: data.indent
          }
        },
        activeClassName: _components_sidebar_index_pure_scss__WEBPACK_IMPORTED_MODULE_10__.default.active,
        href: data.url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("i", {
        className: data.children.length ? "mi mi-arrow-drop-down" : ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", null, data.name));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
      className: _components_sidebar_index_pure_scss__WEBPACK_IMPORTED_MODULE_10__.default.title,
      style: {
        paddingLeft: data.indent
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("i", {
      className: data.children.length ? "mi mi-arrow-drop-down" : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", null, data.name));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: [_components_sidebar_index_pure_scss__WEBPACK_IMPORTED_MODULE_10__.default.node, open ? _components_sidebar_index_pure_scss__WEBPACK_IMPORTED_MODULE_10__.default.open : ""].join(" "),
    onClick: function onClick(evt) {
      evt.stopPropagation();
      setOpen(!open);
    }
  }, title(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("ul", null, data.children.map(function (cd, i) {
    var _data$indent;

    var indent = (_data$indent = data.indent) !== null && _data$indent !== void 0 ? _data$indent : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("li", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(Node, _extends({}, cd, {
      indent: indent + (data.children.length ? 15 : 0)
    })));
  })));
}
function Sidebar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: [_components_sidebar_index_pure_scss__WEBPACK_IMPORTED_MODULE_10__.default.sidebar, props.className].join(" ")
  }, props.data.map(function (data, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(Node, _extends({
      key: i
    }, data));
  }));
}

/***/ }),

/***/ "./pages/sitemap.tsx":
/*!***************************!*\
  !*** ./pages/sitemap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "outlet": () => (/* binding */ outlet),
/* harmony export */   "default": () => (/* binding */ Sitemap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header */ "./components/header/index.tsx");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/sidebar */ "./components/sidebar/index.tsx");




var outlet = "@/outlets/default.tsx";
function Sitemap(props) {
  var _props$data = props.data,
      catalog = _props$data.catalog,
      title = _props$data.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__.Header, {
    title: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {
    data: catalog
  }));
}
;((typeof(window)!=='undefined'?window:__webpack_require__.g)["__gadget__"]["pageModules"]).push(["/sitemap", function () {
  var mod = __webpack_require__(/*! ./pages/sitemap.tsx */ "./pages/sitemap.tsx");
  return mod;
}]);


/***/ }),

/***/ "./components/header/index.pure.scss":
/*!*******************************************!*\
  !*** ./components/header/index.pure.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"_3k0uOgdSRfNa0MZs6QS7ku","title":"_1G63502GZaEXBXykcWz6cX","sitemap":"_3HRY5_KLp8kngNq9437Zqi"});

/***/ }),

/***/ "./components/sidebar/index.pure.scss":
/*!********************************************!*\
  !*** ./components/sidebar/index.pure.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"sidebar":"Z_a6ax5LrTSVASNRR2aN6","node":"_3quX88R9lR5BSdfAKHIoaF","title":"_15sI_H5F3ci3xYIfWDB4vZ","active":"_2nlZm6KFp6CmYe6H9305Me","open":"_1lO9qEBu6kafjPHlc111Kf"});

/***/ })

},
0,[["./pages/sitemap.tsx","foundation","lib"]]]);
//# sourceMappingURL=sitemap.js.map