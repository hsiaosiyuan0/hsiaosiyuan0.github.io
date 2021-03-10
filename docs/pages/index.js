((typeof(window)!=='undefined'?window:global)["webpackChunkgadget_template_default"] = (typeof(window)!=='undefined'?window:global)["webpackChunkgadget_template_default"] || []).push([["pages/index"],{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "outlet": () => (/* binding */ outlet),
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var outlet = "@/outlets/default.tsx";
function Index(props) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.location.href = "/post/".concat(props.data.entry, ".html");
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
}
;((typeof(window)!=='undefined'?window:__webpack_require__.g)["__gadget__"]["pageModules"]).push(["/index", function () {
  var mod = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx");
  return mod;
}]);


/***/ })

},
0,[["./pages/index.tsx","foundation","lib"]]]);
//# sourceMappingURL=index.js.map