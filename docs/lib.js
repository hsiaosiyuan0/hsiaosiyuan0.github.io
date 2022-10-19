((typeof(window)!=='undefined'?window:global)["webpackChunkgadget_template_default"] = (typeof(window)!=='undefined'?window:global)["webpackChunkgadget_template_default"] || []).push([["lib"],{

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkOptions": () => (/* binding */ checkOptions)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js");

function checkOptions(options) {
   true ? (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(!options.debug, 'The `debug` option is meant for development debugging and should not be used in production.') : 0;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAutocomplete": () => (/* binding */ createAutocomplete)
/* harmony export */ });
/* harmony import */ var _checkOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkOptions */ "./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStore */ "./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js");
/* harmony import */ var _getAutocompleteSetters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getAutocompleteSetters */ "./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js");
/* harmony import */ var _getDefaultProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDefaultProps */ "./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js");
/* harmony import */ var _getPropGetters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getPropGetters */ "./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata */ "./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js");
/* harmony import */ var _onInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onInput */ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js");
/* harmony import */ var _stateReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateReducer */ "./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function createAutocomplete(options) {
  (0,_checkOptions__WEBPACK_IMPORTED_MODULE_0__.checkOptions)(options);
  var subscribers = [];
  var props = (0,_getDefaultProps__WEBPACK_IMPORTED_MODULE_1__.getDefaultProps)(options, subscribers);
  var store = (0,_createStore__WEBPACK_IMPORTED_MODULE_2__.createStore)(_stateReducer__WEBPACK_IMPORTED_MODULE_3__.stateReducer, props, onStoreStateChange);
  var setters = (0,_getAutocompleteSetters__WEBPACK_IMPORTED_MODULE_4__.getAutocompleteSetters)({
    store: store
  });
  var propGetters = (0,_getPropGetters__WEBPACK_IMPORTED_MODULE_5__.getPropGetters)(_objectSpread({
    props: props,
    refresh: refresh,
    store: store
  }, setters));

  function onStoreStateChange(_ref) {
    var prevState = _ref.prevState,
        state = _ref.state;
    props.onStateChange(_objectSpread({
      prevState: prevState,
      state: state,
      refresh: refresh
    }, setters));
  }

  function refresh() {
    return (0,_onInput__WEBPACK_IMPORTED_MODULE_6__.onInput)(_objectSpread({
      event: new Event('input'),
      nextState: {
        isOpen: store.getState().isOpen
      },
      props: props,
      query: store.getState().query,
      refresh: refresh,
      store: store
    }, setters));
  }

  props.plugins.forEach(function (plugin) {
    var _plugin$subscribe;

    return (_plugin$subscribe = plugin.subscribe) === null || _plugin$subscribe === void 0 ? void 0 : _plugin$subscribe.call(plugin, _objectSpread(_objectSpread({}, setters), {}, {
      refresh: refresh,
      onSelect: function onSelect(fn) {
        subscribers.push({
          onSelect: fn
        });
      },
      onActive: function onActive(fn) {
        subscribers.push({
          onActive: fn
        });
      }
    }));
  });
  (0,_metadata__WEBPACK_IMPORTED_MODULE_7__.injectMetadata)({
    metadata: (0,_metadata__WEBPACK_IMPORTED_MODULE_7__.getMetadata)({
      plugins: props.plugins,
      options: options
    }),
    environment: props.environment
  });
  return _objectSpread(_objectSpread({
    refresh: refresh
  }, propGetters), setters);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function createStore(reducer, props, onStoreStateChange) {
  var state = props.initialState;
  return {
    getState: function getState() {
      return state;
    },
    dispatch: function dispatch(action, payload) {
      var prevState = _objectSpread({}, state);

      state = reducer(state, {
        type: action,
        props: props,
        payload: payload
      });
      onStoreStateChange({
        state: state,
        prevState: prevState
      });
    },
    pendingRequests: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createCancelablePromiseList)()
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAutocompleteSetters": () => (/* binding */ getAutocompleteSetters)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getAutocompleteSetters(_ref) {
  var store = _ref.store;

  var setActiveItemId = function setActiveItemId(value) {
    store.dispatch('setActiveItemId', value);
  };

  var setQuery = function setQuery(value) {
    store.dispatch('setQuery', value);
  };

  var setCollections = function setCollections(rawValue) {
    var baseItemId = 0;
    var value = rawValue.map(function (collection) {
      return _objectSpread(_objectSpread({}, collection), {}, {
        // We flatten the stored items to support calling `getAlgoliaResults`
        // from the source itself.
        items: (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.flatten)(collection.items).map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            __autocomplete_id: baseItemId++
          });
        })
      });
    });
    store.dispatch('setCollections', value);
  };

  var setIsOpen = function setIsOpen(value) {
    store.dispatch('setIsOpen', value);
  };

  var setStatus = function setStatus(value) {
    store.dispatch('setStatus', value);
  };

  var setContext = function setContext(value) {
    store.dispatch('setContext', value);
  };

  return {
    setActiveItemId: setActiveItemId,
    setQuery: setQuery,
    setCollections: setCollections,
    setIsOpen: setIsOpen,
    setStatus: setStatus,
    setContext: setContext
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCompletion": () => (/* binding */ getCompletion)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js");

function getCompletion(_ref) {
  var _getActiveItem;

  var state = _ref.state;

  if (state.isOpen === false || state.activeItemId === null) {
    return null;
  }

  return ((_getActiveItem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getActiveItem)(state)) === null || _getActiveItem === void 0 ? void 0 : _getActiveItem.itemInputValue) || null;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultProps": () => (/* binding */ getDefaultProps)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getDefaultProps(props, pluginSubscribers) {
  var _props$id;

  /* eslint-disable no-restricted-globals */
  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */

  var plugins = props.plugins || [];
  return _objectSpread(_objectSpread({
    debug: false,
    openOnFocus: false,
    placeholder: '',
    autoFocus: false,
    defaultActiveItemId: null,
    stallThreshold: 300,
    environment: environment,
    shouldPanelOpen: function shouldPanelOpen(_ref) {
      var state = _ref.state;
      return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.getItemsCount)(state) > 0;
    },
    reshape: function reshape(_ref2) {
      var sources = _ref2.sources;
      return sources;
    }
  }, props), {}, {
    // Since `generateAutocompleteId` triggers a side effect (it increments
    // an internal counter), we don't want to execute it if unnecessary.
    id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.generateAutocompleteId)(),
    plugins: plugins,
    // The following props need to be deeply defaulted.
    initialState: _objectSpread({
      activeItemId: null,
      query: '',
      completion: null,
      collections: [],
      isOpen: false,
      status: 'idle',
      context: {}
    }, props.initialState),
    onStateChange: function onStateChange(params) {
      var _props$onStateChange;

      (_props$onStateChange = props.onStateChange) === null || _props$onStateChange === void 0 ? void 0 : _props$onStateChange.call(props, params);
      plugins.forEach(function (x) {
        var _x$onStateChange;

        return (_x$onStateChange = x.onStateChange) === null || _x$onStateChange === void 0 ? void 0 : _x$onStateChange.call(x, params);
      });
    },
    onSubmit: function onSubmit(params) {
      var _props$onSubmit;

      (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 ? void 0 : _props$onSubmit.call(props, params);
      plugins.forEach(function (x) {
        var _x$onSubmit;

        return (_x$onSubmit = x.onSubmit) === null || _x$onSubmit === void 0 ? void 0 : _x$onSubmit.call(x, params);
      });
    },
    onReset: function onReset(params) {
      var _props$onReset;

      (_props$onReset = props.onReset) === null || _props$onReset === void 0 ? void 0 : _props$onReset.call(props, params);
      plugins.forEach(function (x) {
        var _x$onReset;

        return (_x$onReset = x.onReset) === null || _x$onReset === void 0 ? void 0 : _x$onReset.call(x, params);
      });
    },
    getSources: function getSources(params) {
      return Promise.all([].concat(_toConsumableArray(plugins.map(function (plugin) {
        return plugin.getSources;
      })), [props.getSources]).filter(Boolean).map(function (getSources) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getNormalizedSources)(getSources, params);
      })).then(function (nested) {
        return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.flatten)(nested);
      }).then(function (sources) {
        return sources.map(function (source) {
          return _objectSpread(_objectSpread({}, source), {}, {
            onSelect: function onSelect(params) {
              source.onSelect(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onSelect;

                return (_x$onSelect = x.onSelect) === null || _x$onSelect === void 0 ? void 0 : _x$onSelect.call(x, params);
              });
            },
            onActive: function onActive(params) {
              source.onActive(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onActive;

                return (_x$onActive = x.onActive) === null || _x$onActive === void 0 ? void 0 : _x$onActive.call(x, params);
              });
            }
          });
        });
      });
    },
    navigator: _objectSpread({
      navigate: function navigate(_ref3) {
        var itemUrl = _ref3.itemUrl;
        environment.location.assign(itemUrl);
      },
      navigateNewTab: function navigateNewTab(_ref4) {
        var itemUrl = _ref4.itemUrl;
        var windowReference = environment.open(itemUrl, '_blank', 'noopener');
        windowReference === null || windowReference === void 0 ? void 0 : windowReference.focus();
      },
      navigateNewWindow: function navigateNewWindow(_ref5) {
        var itemUrl = _ref5.itemUrl;
        environment.open(itemUrl, '_blank', 'noopener');
      }
    }, props.navigator)
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPropGetters": () => (/* binding */ getPropGetters)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js");
/* harmony import */ var _onInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onInput */ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js");
/* harmony import */ var _onKeyDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onKeyDown */ "./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js");
var _excluded = ["props", "refresh", "store"],
    _excluded2 = ["inputElement", "formElement", "panelElement"],
    _excluded3 = ["inputElement"],
    _excluded4 = ["inputElement", "maxLength"],
    _excluded5 = ["item", "source"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function getPropGetters(_ref) {
  var props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  var getEnvironmentProps = function getEnvironmentProps(providedProps) {
    var inputElement = providedProps.inputElement,
        formElement = providedProps.formElement,
        panelElement = providedProps.panelElement,
        rest = _objectWithoutProperties(providedProps, _excluded2);

    function onMouseDownOrTouchStart(event) {
      // The `onTouchStart`/`onMouseDown` events shouldn't trigger the `blur`
      // handler when it's not an interaction with Autocomplete.
      // We detect it with the following heuristics:
      // - the panel is closed AND there are no pending requests
      //   (no interaction with the autocomplete, no future state updates)
      // - OR the touched target is the input element (should open the panel)
      var isAutocompleteInteraction = store.getState().isOpen || !store.pendingRequests.isEmpty();

      if (!isAutocompleteInteraction || event.target === inputElement) {
        return;
      } // @TODO: support cases where there are multiple Autocomplete instances.
      // Right now, a second instance makes this computation return false.


      var isTargetWithinAutocomplete = [formElement, panelElement].some(function (contextNode) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isOrContainsNode)(contextNode, event.target);
      });

      if (isTargetWithinAutocomplete === false) {
        store.dispatch('blur', null); // If requests are still pending when the user closes the panel, they
        // could reopen the panel once they resolve.
        // We want to prevent any subsequent query from reopening the panel
        // because it would result in an unsolicited UI behavior.

        if (!props.debug) {
          store.pendingRequests.cancelAll();
        }
      }
    }

    return _objectSpread({
      // We do not rely on the native `blur` event of the input to close the
      // panel, but rather on a custom `touchstart`/`mousedown` event outside
      // of the autocomplete elements.
      // This ensures we don't mistakenly interpret interactions within the
      // autocomplete (but outside of the input) as a signal to close the panel.
      // For example, clicking reset button causes an input blur, but if
      // `openOnFocus=true`, it shouldn't close the panel.
      // On touch devices, scrolling results (`touchmove`) causes an input blur
      // but shouldn't close the panel.
      onTouchStart: onMouseDownOrTouchStart,
      onMouseDown: onMouseDownOrTouchStart,
      // When scrolling on touch devices (mobiles, tablets, etc.), we want to
      // mimic the native platform behavior where the input is blurred to
      // hide the virtual keyboard. This gives more vertical space to
      // discover all the suggestions showing up in the panel.
      onTouchMove: function onTouchMove(event) {
        if (store.getState().isOpen === false || inputElement !== props.environment.document.activeElement || event.target === inputElement) {
          return;
        }

        inputElement.blur();
      }
    }, rest);
  };

  var getRootProps = function getRootProps(rest) {
    return _objectSpread({
      role: 'combobox',
      'aria-expanded': store.getState().isOpen,
      'aria-haspopup': 'listbox',
      'aria-owns': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label")
    }, rest);
  };

  var getFormProps = function getFormProps(providedProps) {
    var inputElement = providedProps.inputElement,
        rest = _objectWithoutProperties(providedProps, _excluded3);

    return _objectSpread({
      action: '',
      noValidate: true,
      role: 'search',
      onSubmit: function onSubmit(event) {
        var _providedProps$inputE;

        event.preventDefault();
        props.onSubmit(_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('submit', null);
        (_providedProps$inputE = providedProps.inputElement) === null || _providedProps$inputE === void 0 ? void 0 : _providedProps$inputE.blur();
      },
      onReset: function onReset(event) {
        var _providedProps$inputE2;

        event.preventDefault();
        props.onReset(_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('reset', null);
        (_providedProps$inputE2 = providedProps.inputElement) === null || _providedProps$inputE2 === void 0 ? void 0 : _providedProps$inputE2.focus();
      }
    }, rest);
  };

  var getInputProps = function getInputProps(providedProps) {
    var _props$environment$na;

    function onFocus(event) {
      // We want to trigger a query when `openOnFocus` is true
      // because the panel should open with the current query.
      if (props.openOnFocus || Boolean(store.getState().query)) {
        (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
          event: event,
          props: props,
          query: store.getState().completion || store.getState().query,
          refresh: refresh,
          store: store
        }, setters));
      }

      store.dispatch('focus', null);
    }

    var _ref2 = providedProps || {},
        inputElement = _ref2.inputElement,
        _ref2$maxLength = _ref2.maxLength,
        maxLength = _ref2$maxLength === void 0 ? 512 : _ref2$maxLength,
        rest = _objectWithoutProperties(_ref2, _excluded4);

    var activeItem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getActiveItem)(store.getState());
    var userAgent = ((_props$environment$na = props.environment.navigator) === null || _props$environment$na === void 0 ? void 0 : _props$environment$na.userAgent) || '';
    var shouldFallbackKeyHint = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSamsung)(userAgent);
    var enterKeyHint = activeItem !== null && activeItem !== void 0 && activeItem.itemUrl && !shouldFallbackKeyHint ? 'go' : 'search';
    return _objectSpread({
      'aria-autocomplete': 'both',
      'aria-activedescendant': store.getState().isOpen && store.getState().activeItemId !== null ? "".concat(props.id, "-item-").concat(store.getState().activeItemId) : undefined,
      'aria-controls': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label"),
      value: store.getState().completion || store.getState().query,
      id: "".concat(props.id, "-input"),
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      enterKeyHint: enterKeyHint,
      spellCheck: 'false',
      autoFocus: props.autoFocus,
      placeholder: props.placeholder,
      maxLength: maxLength,
      type: 'search',
      onChange: function onChange(event) {
        (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
          event: event,
          props: props,
          query: event.currentTarget.value.slice(0, maxLength),
          refresh: refresh,
          store: store
        }, setters));
      },
      onKeyDown: function onKeyDown(event) {
        (0,_onKeyDown__WEBPACK_IMPORTED_MODULE_4__.onKeyDown)(_objectSpread({
          event: event,
          props: props,
          refresh: refresh,
          store: store
        }, setters));
      },
      onFocus: onFocus,
      // We don't rely on the `blur` event.
      // See explanation in `onTouchStart`/`onMouseDown`.
      // @MAJOR See if we need to keep this handler.
      onBlur: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_5__.noop,
      onClick: function onClick(event) {
        // When the panel is closed and you click on the input while
        // the input is focused, the `onFocus` event is not triggered
        // (default browser behavior).
        // In an autocomplete context, it makes sense to open the panel in this
        // case.
        // We mimic this event by catching the `onClick` event which
        // triggers the `onFocus` for the panel to open.
        if (providedProps.inputElement === props.environment.document.activeElement && !store.getState().isOpen) {
          onFocus(event);
        }
      }
    }, rest);
  };

  var getLabelProps = function getLabelProps(rest) {
    return _objectSpread({
      htmlFor: "".concat(props.id, "-input"),
      id: "".concat(props.id, "-label")
    }, rest);
  };

  var getListProps = function getListProps(rest) {
    return _objectSpread({
      role: 'listbox',
      'aria-labelledby': "".concat(props.id, "-label"),
      id: "".concat(props.id, "-list")
    }, rest);
  };

  var getPanelProps = function getPanelProps(rest) {
    return _objectSpread({
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the panel so
        // that the blur event is not triggered, otherwise it closes the
        // panel.
        event.preventDefault();
      },
      onMouseLeave: function onMouseLeave() {
        store.dispatch('mouseleave', null);
      }
    }, rest);
  };

  var getItemProps = function getItemProps(providedProps) {
    var item = providedProps.item,
        source = providedProps.source,
        rest = _objectWithoutProperties(providedProps, _excluded5);

    return _objectSpread({
      id: "".concat(props.id, "-item-").concat(item.__autocomplete_id),
      role: 'option',
      'aria-selected': store.getState().activeItemId === item.__autocomplete_id,
      onMouseMove: function onMouseMove(event) {
        if (item.__autocomplete_id === store.getState().activeItemId) {
          return;
        }

        store.dispatch('mousemove', item.__autocomplete_id);
        var activeItem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getActiveItem)(store.getState());

        if (store.getState().activeItemId !== null && activeItem) {
          var _item = activeItem.item,
              itemInputValue = activeItem.itemInputValue,
              itemUrl = activeItem.itemUrl,
              _source = activeItem.source;

          _source.onActive(_objectSpread({
            event: event,
            item: _item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: _source,
            state: store.getState()
          }, setters));
        }
      },
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the item so it
        // can remain with the current `activeElement`.
        event.preventDefault();
      },
      onClick: function onClick(event) {
        var itemInputValue = source.getItemInputValue({
          item: item,
          state: store.getState()
        });
        var itemUrl = source.getItemUrl({
          item: item,
          state: store.getState()
        }); // If `getItemUrl` is provided, it means that the suggestion
        // is a link, not plain text that aims at updating the query.
        // We can therefore skip the state change because it will update
        // the `activeItemId`, resulting in a UI flash, especially
        // noticeable on mobile.

        var runPreCommand = itemUrl ? Promise.resolve() : (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
          event: event,
          nextState: {
            isOpen: false
          },
          props: props,
          query: itemInputValue,
          refresh: refresh,
          store: store
        }, setters));
        runPreCommand.then(function () {
          source.onSelect(_objectSpread({
            event: event,
            item: item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: source,
            state: store.getState()
          }, setters));
        });
      }
    }, rest);
  };

  return {
    getEnvironmentProps: getEnvironmentProps,
    getRootProps: getRootProps,
    getFormProps: getFormProps,
    getLabelProps: getLabelProps,
    getInputProps: getInputProps,
    getPanelProps: getPanelProps,
    getListProps: getListProps,
    getItemProps: getItemProps
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMetadata": () => (/* binding */ getMetadata),
/* harmony export */   "injectMetadata": () => (/* binding */ injectMetadata)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getMetadata(_ref) {
  var _, _options$__autocomple, _options$__autocomple2, _options$__autocomple3;

  var plugins = _ref.plugins,
      options = _ref.options;
  var optionsKey = (_ = (((_options$__autocomple = options.__autocomplete_metadata) === null || _options$__autocomple === void 0 ? void 0 : _options$__autocomple.userAgents) || [])[0]) === null || _ === void 0 ? void 0 : _.segment;
  var extraOptions = optionsKey ? _defineProperty({}, optionsKey, Object.keys(((_options$__autocomple2 = options.__autocomplete_metadata) === null || _options$__autocomple2 === void 0 ? void 0 : _options$__autocomple2.options) || {})) : {};
  return {
    plugins: plugins.map(function (plugin) {
      return {
        name: plugin.name,
        options: Object.keys(plugin.__autocomplete_pluginOptions || [])
      };
    }),
    options: _objectSpread({
      'autocomplete-core': Object.keys(options)
    }, extraOptions),
    ua: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.userAgents.concat(((_options$__autocomple3 = options.__autocomplete_metadata) === null || _options$__autocomple3 === void 0 ? void 0 : _options$__autocomple3.userAgents) || [])
  };
}
function injectMetadata(_ref3) {
  var _environment$navigato, _environment$navigato2;

  var metadata = _ref3.metadata,
      environment = _ref3.environment;
  var isMetadataEnabled = (_environment$navigato = environment.navigator) === null || _environment$navigato === void 0 ? void 0 : (_environment$navigato2 = _environment$navigato.userAgent) === null || _environment$navigato2 === void 0 ? void 0 : _environment$navigato2.includes('Algolia Crawler');

  if (isMetadataEnabled) {
    var metadataContainer = environment.document.createElement('meta');
    var headRef = environment.document.querySelector('head');
    metadataContainer.name = 'algolia:metadata';
    setTimeout(function () {
      metadataContainer.content = JSON.stringify(metadata);
      headRef.appendChild(metadataContainer);
    }, 0);
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onInput": () => (/* binding */ onInput)
/* harmony export */ });
/* harmony import */ var _reshape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reshape */ "./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js");
/* harmony import */ var _resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolve */ "./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js");
var _excluded = ["event", "nextState", "props", "query", "refresh", "store"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var lastStalledId = null;
var runConcurrentSafePromise = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createConcurrentSafePromise)();
function onInput(_ref) {
  var event = _ref.event,
      _ref$nextState = _ref.nextState,
      nextState = _ref$nextState === void 0 ? {} : _ref$nextState,
      props = _ref.props,
      query = _ref.query,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  if (lastStalledId) {
    props.environment.clearTimeout(lastStalledId);
  }

  var setCollections = setters.setCollections,
      setIsOpen = setters.setIsOpen,
      setQuery = setters.setQuery,
      setActiveItemId = setters.setActiveItemId,
      setStatus = setters.setStatus;
  setQuery(query);
  setActiveItemId(props.defaultActiveItemId);

  if (!query && props.openOnFocus === false) {
    var _nextState$isOpen;

    var collections = store.getState().collections.map(function (collection) {
      return _objectSpread(_objectSpread({}, collection), {}, {
        items: []
      });
    });
    setStatus('idle');
    setCollections(collections);
    setIsOpen((_nextState$isOpen = nextState.isOpen) !== null && _nextState$isOpen !== void 0 ? _nextState$isOpen : props.shouldPanelOpen({
      state: store.getState()
    })); // We make sure to update the latest resolved value of the tracked
    // promises to keep late resolving promises from "cancelling" the state
    // updates performed in this code path.
    // We chain with a void promise to respect `onInput`'s expected return type.

    var _request = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.cancelable)(runConcurrentSafePromise(collections).then(function () {
      return Promise.resolve();
    }));

    return store.pendingRequests.add(_request);
  }

  setStatus('loading');
  lastStalledId = props.environment.setTimeout(function () {
    setStatus('stalled');
  }, props.stallThreshold); // We track the entire promise chain triggered by `onInput` before mutating
  // the Autocomplete state to make sure that any state manipulation is based on
  // fresh data regardless of when promises individually resolve.
  // We don't track nested promises and only rely on the full chain resolution,
  // meaning we should only ever manipulate the state once this concurrent-safe
  // promise is resolved.

  var request = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.cancelable)(runConcurrentSafePromise(props.getSources(_objectSpread({
    query: query,
    refresh: refresh,
    state: store.getState()
  }, setters)).then(function (sources) {
    return Promise.all(sources.map(function (source) {
      return Promise.resolve(source.getItems(_objectSpread({
        query: query,
        refresh: refresh,
        state: store.getState()
      }, setters))).then(function (itemsOrDescription) {
        return (0,_resolve__WEBPACK_IMPORTED_MODULE_2__.preResolve)(itemsOrDescription, source.sourceId);
      });
    })).then(_resolve__WEBPACK_IMPORTED_MODULE_2__.resolve).then(function (responses) {
      return (0,_resolve__WEBPACK_IMPORTED_MODULE_2__.postResolve)(responses, sources);
    }).then(function (collections) {
      return (0,_reshape__WEBPACK_IMPORTED_MODULE_3__.reshape)({
        collections: collections,
        props: props,
        state: store.getState()
      });
    });
  }))).then(function (collections) {
    var _nextState$isOpen2;

    // Parameters passed to `onInput` could be stale when the following code
    // executes, because `onInput` calls may not resolve in order.
    // If it becomes a problem we'll need to save the last passed parameters.
    // See: https://codesandbox.io/s/agitated-cookies-y290z
    setStatus('idle');
    setCollections(collections);
    var isPanelOpen = props.shouldPanelOpen({
      state: store.getState()
    });
    setIsOpen((_nextState$isOpen2 = nextState.isOpen) !== null && _nextState$isOpen2 !== void 0 ? _nextState$isOpen2 : props.openOnFocus && !query && isPanelOpen || isPanelOpen);
    var highlightedItem = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getActiveItem)(store.getState());

    if (store.getState().activeItemId !== null && highlightedItem) {
      var item = highlightedItem.item,
          itemInputValue = highlightedItem.itemInputValue,
          itemUrl = highlightedItem.itemUrl,
          source = highlightedItem.source;
      source.onActive(_objectSpread({
        event: event,
        item: item,
        itemInputValue: itemInputValue,
        itemUrl: itemUrl,
        refresh: refresh,
        source: source,
        state: store.getState()
      }, setters));
    }
  }).finally(function () {
    setStatus('idle');

    if (lastStalledId) {
      props.environment.clearTimeout(lastStalledId);
    }
  });
  return store.pendingRequests.add(request);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onKeyDown": () => (/* binding */ onKeyDown)
/* harmony export */ });
/* harmony import */ var _onInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onInput */ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js");
var _excluded = ["event", "props", "refresh", "store"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function onKeyDown(_ref) {
  var event = _ref.event,
      props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    // eslint-disable-next-line no-inner-declarations
    var triggerScrollIntoView = function triggerScrollIntoView() {
      var nodeItem = props.environment.document.getElementById("".concat(props.id, "-item-").concat(store.getState().activeItemId));

      if (nodeItem) {
        if (nodeItem.scrollIntoViewIfNeeded) {
          nodeItem.scrollIntoViewIfNeeded(false);
        } else {
          nodeItem.scrollIntoView(false);
        }
      }
    }; // eslint-disable-next-line no-inner-declarations


    var triggerOnActive = function triggerOnActive() {
      var highlightedItem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getActiveItem)(store.getState());

      if (store.getState().activeItemId !== null && highlightedItem) {
        var item = highlightedItem.item,
            itemInputValue = highlightedItem.itemInputValue,
            itemUrl = highlightedItem.itemUrl,
            source = highlightedItem.source;
        source.onActive(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      }
    }; // Default browser behavior changes the caret placement on ArrowUp and
    // ArrowDown.


    event.preventDefault(); // When re-opening the panel, we need to split the logic to keep the actions
    // synchronized as `onInput` returns a promise.

    if (store.getState().isOpen === false && (props.openOnFocus || Boolean(store.getState().query))) {
      (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
        event: event,
        props: props,
        query: store.getState().query,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        store.dispatch(event.key, {
          nextActiveItemId: props.defaultActiveItemId
        });
        triggerOnActive(); // Since we rely on the DOM, we need to wait for all the micro tasks to
        // finish (which include re-opening the panel) to make sure all the
        // elements are available.

        setTimeout(triggerScrollIntoView, 0);
      });
    } else {
      store.dispatch(event.key, {});
      triggerOnActive();
      triggerScrollIntoView();
    }
  } else if (event.key === 'Escape') {
    // This prevents the default browser behavior on `input[type="search"]`
    // from removing the query right away because we first want to close the
    // panel.
    event.preventDefault();
    store.dispatch(event.key, null); // Hitting the `Escape` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.

    store.pendingRequests.cancelAll();
  } else if (event.key === 'Tab') {
    store.dispatch('blur', null); // Hitting the `Escape` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.

    store.pendingRequests.cancelAll();
  } else if (event.key === 'Enter') {
    // No active item, so we let the browser handle the native `onSubmit` form
    // event.
    if (store.getState().activeItemId === null || store.getState().collections.every(function (collection) {
      return collection.items.length === 0;
    })) {
      // If requests are still pending when the panel closes, they could reopen
      // the panel once they resolve.
      // We want to prevent any subsequent query from reopening the panel
      // because it would result in an unsolicited UI behavior.
      if (!props.debug) {
        store.pendingRequests.cancelAll();
      }

      return;
    } // This prevents the `onSubmit` event to be sent because an item is
    // highlighted.


    event.preventDefault();

    var _ref2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getActiveItem)(store.getState()),
        item = _ref2.item,
        itemInputValue = _ref2.itemInputValue,
        itemUrl = _ref2.itemUrl,
        source = _ref2.source;

    if (event.metaKey || event.ctrlKey) {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewTab({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.shiftKey) {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewWindow({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.altKey) {// Keep native browser behavior
    } else {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigate({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
        return;
      }

      (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
        event: event,
        nextState: {
          isOpen: false
        },
        props: props,
        query: itemInputValue,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      });
    }
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reshape": () => (/* binding */ reshape)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function reshape(_ref) {
  var collections = _ref.collections,
      props = _ref.props,
      state = _ref.state;
  // Sources are grouped by `sourceId` to conveniently pick them via destructuring.
  // Example: `const { recentSearchesPlugin } = sourcesBySourceId`
  var sourcesBySourceId = collections.reduce(function (acc, collection) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, collection.source.sourceId, _objectSpread(_objectSpread({}, collection.source), {}, {
      getItems: function getItems() {
        // We provide the resolved items from the collection to the `reshape` prop.
        return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.flatten)(collection.items);
      }
    })));
  }, {});
  var reshapeSources = props.reshape({
    sources: Object.values(sourcesBySourceId),
    sourcesBySourceId: sourcesBySourceId,
    state: state
  }); // We reconstruct the collections with the items modified by the `reshape` prop.

  return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.flatten)(reshapeSources).filter(Boolean).map(function (source) {
    return {
      source: source,
      items: source.getItems()
    };
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preResolve": () => (/* binding */ preResolve),
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "postResolve": () => (/* binding */ postResolve)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function isDescription(item) {
  return Boolean(item.execute);
}

function isRequesterDescription(description) {
  return Boolean(description === null || description === void 0 ? void 0 : description.execute);
}

function preResolve(itemsOrDescription, sourceId) {
  if (isRequesterDescription(itemsOrDescription)) {
    return _objectSpread(_objectSpread({}, itemsOrDescription), {}, {
      requests: itemsOrDescription.queries.map(function (query) {
        return {
          query: query,
          sourceId: sourceId,
          transformResponse: itemsOrDescription.transformResponse
        };
      })
    });
  }

  return {
    items: itemsOrDescription,
    sourceId: sourceId
  };
}
function resolve(items) {
  var packed = items.reduce(function (acc, current) {
    if (!isDescription(current)) {
      acc.push(current);
      return acc;
    }

    var searchClient = current.searchClient,
        execute = current.execute,
        requesterId = current.requesterId,
        requests = current.requests;
    var container = acc.find(function (item) {
      return isDescription(current) && isDescription(item) && item.searchClient === searchClient && Boolean(requesterId) && item.requesterId === requesterId;
    });

    if (container) {
      var _container$items;

      (_container$items = container.items).push.apply(_container$items, _toConsumableArray(requests));
    } else {
      var request = {
        execute: execute,
        requesterId: requesterId,
        items: requests,
        searchClient: searchClient
      };
      acc.push(request);
    }

    return acc;
  }, []);
  var values = packed.map(function (maybeDescription) {
    if (!isDescription(maybeDescription)) {
      return Promise.resolve(maybeDescription);
    }

    var _ref = maybeDescription,
        execute = _ref.execute,
        items = _ref.items,
        searchClient = _ref.searchClient;
    return execute({
      searchClient: searchClient,
      requests: items
    });
  });
  return Promise.all(values).then(function (responses) {
    return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.flatten)(responses);
  });
}
function postResolve(responses, sources) {
  return sources.map(function (source) {
    var matches = responses.filter(function (response) {
      return response.sourceId === source.sourceId;
    });
    var results = matches.map(function (_ref2) {
      var items = _ref2.items;
      return items;
    });
    var transform = matches[0].transformResponse;
    var items = transform ? transform((0,_utils__WEBPACK_IMPORTED_MODULE_1__.mapToAlgoliaResponse)(results)) : results;
    (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__.invariant)(Array.isArray(items), function () {
      return "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned type ").concat(JSON.stringify(_typeof(items)), ":\n\n").concat(JSON.stringify((0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.decycle)(items), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
    });
    (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__.invariant)(items.every(Boolean), "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned ").concat(JSON.stringify(undefined), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"));
    return {
      source: source,
      items: items
    };
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stateReducer": () => (/* binding */ stateReducer)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js");
/* harmony import */ var _getCompletion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCompletion */ "./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var stateReducer = function stateReducer(state, action) {
  switch (action.type) {
    case 'setActiveItemId':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'setQuery':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          query: action.payload,
          completion: null
        });
      }

    case 'setCollections':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          collections: action.payload
        });
      }

    case 'setIsOpen':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isOpen: action.payload
        });
      }

    case 'setStatus':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          status: action.payload
        });
      }

    case 'setContext':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          context: _objectSpread(_objectSpread({}, state.context), action.payload)
        });
      }

    case 'ArrowDown':
      {
        var nextState = _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload.hasOwnProperty('nextActiveItemId') ? action.payload.nextActiveItemId : (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNextActiveItemId)(1, state.activeItemId, (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.getItemsCount)(state), action.props.defaultActiveItemId)
        });

        return _objectSpread(_objectSpread({}, nextState), {}, {
          completion: (0,_getCompletion__WEBPACK_IMPORTED_MODULE_2__.getCompletion)({
            state: nextState
          })
        });
      }

    case 'ArrowUp':
      {
        var _nextState = _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNextActiveItemId)(-1, state.activeItemId, (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.getItemsCount)(state), action.props.defaultActiveItemId)
        });

        return _objectSpread(_objectSpread({}, _nextState), {}, {
          completion: (0,_getCompletion__WEBPACK_IMPORTED_MODULE_2__.getCompletion)({
            state: _nextState
          })
        });
      }

    case 'Escape':
      {
        if (state.isOpen) {
          return _objectSpread(_objectSpread({}, state), {}, {
            activeItemId: null,
            isOpen: false,
            completion: null
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: null,
          query: '',
          status: 'idle',
          collections: []
        });
      }

    case 'submit':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: null,
          isOpen: false,
          status: 'idle'
        });
      }

    case 'reset':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: // Since we open the panel on reset when openOnFocus=true
          // we need to restore the highlighted index to the defaultActiveItemId. (DocSearch use-case)
          // Since we close the panel when openOnFocus=false
          // we lose track of the highlighted index. (Query-suggestions use-case)
          action.props.openOnFocus === true ? action.props.defaultActiveItemId : null,
          status: 'idle',
          query: ''
        });
      }

    case 'focus':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId,
          isOpen: (action.props.openOnFocus || Boolean(state.query)) && action.props.shouldPanelOpen({
            state: state
          })
        });
      }

    case 'blur':
      {
        if (action.props.debug) {
          return state;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          isOpen: false,
          activeItemId: null
        });
      }

    case 'mousemove':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'mouseleave':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId
        });
      }

    default:
      (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.invariant)(false, "The reducer action ".concat(JSON.stringify(action.type), " is not supported."));
      return state;
  }
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCancelablePromise": () => (/* binding */ createCancelablePromise),
/* harmony export */   "cancelable": () => (/* binding */ cancelable)
/* harmony export */ });
function createInternalCancelablePromise(promise, initialState) {
  var state = initialState;
  return {
    then: function then(onfulfilled, onrejected) {
      return createInternalCancelablePromise(promise.then(createCallback(onfulfilled, state, promise), createCallback(onrejected, state, promise)), state);
    },
    catch: function _catch(onrejected) {
      return createInternalCancelablePromise(promise.catch(createCallback(onrejected, state, promise)), state);
    },
    finally: function _finally(onfinally) {
      if (onfinally) {
        state.onCancelList.push(onfinally);
      }

      return createInternalCancelablePromise(promise.finally(createCallback(onfinally && function () {
        state.onCancelList = [];
        return onfinally();
      }, state, promise)), state);
    },
    cancel: function cancel() {
      state.isCanceled = true;
      var callbacks = state.onCancelList;
      state.onCancelList = [];
      callbacks.forEach(function (callback) {
        callback();
      });
    },
    isCanceled: function isCanceled() {
      return state.isCanceled === true;
    }
  };
}

function createCancelablePromise(executor) {
  return createInternalCancelablePromise(new Promise(function (resolve, reject) {
    return executor(resolve, reject);
  }), {
    isCanceled: false,
    onCancelList: []
  });
}

createCancelablePromise.resolve = function (value) {
  return cancelable(Promise.resolve(value));
};

createCancelablePromise.reject = function (reason) {
  return cancelable(Promise.reject(reason));
};

function cancelable(promise) {
  return createInternalCancelablePromise(promise, {
    isCanceled: false,
    onCancelList: []
  });
}

function createCallback(onResult, state, fallback) {
  if (!onResult) {
    return fallback;
  }

  return function callback(arg) {
    if (state.isCanceled) {
      return arg;
    }

    return onResult(arg);
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCancelablePromiseList": () => (/* binding */ createCancelablePromiseList)
/* harmony export */ });
function createCancelablePromiseList() {
  var list = [];
  return {
    add: function add(cancelablePromise) {
      list.push(cancelablePromise);
      return cancelablePromise.finally(function () {
        list = list.filter(function (item) {
          return item !== cancelablePromise;
        });
      });
    },
    cancelAll: function cancelAll() {
      list.forEach(function (promise) {
        return promise.cancel();
      });
    },
    isEmpty: function isEmpty() {
      return list.length === 0;
    }
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConcurrentSafePromise": () => (/* binding */ createConcurrentSafePromise)
/* harmony export */ });
/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */
function createConcurrentSafePromise() {
  var basePromiseId = -1;
  var latestResolvedId = -1;
  var latestResolvedValue = undefined;
  return function runConcurrentSafePromise(promise) {
    basePromiseId++;
    var currentPromiseId = basePromiseId;
    return Promise.resolve(promise).then(function (x) {
      // The promise might take too long to resolve and get outdated. This would
      // result in resolving stale values.
      // When this happens, we ignore the promise value and return the one
      // coming from the latest resolved value.
      //
      // +----------------------------------+
      // |        100ms                     |
      // | run(1) +--->  R1                 |
      // |        300ms                     |
      // | run(2) +-------------> R2 (SKIP) |
      // |        200ms                     |
      // | run(3) +--------> R3             |
      // +----------------------------------+
      if (latestResolvedValue && currentPromiseId < latestResolvedId) {
        return latestResolvedValue;
      }

      latestResolvedId = currentPromiseId;
      latestResolvedValue = x;
      return x;
    });
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActiveItem": () => (/* binding */ getActiveItem)
/* harmony export */ });
// We don't have access to the autocomplete source when we call `onKeyDown`
// or `onClick` because those are native browser events.
// However, we can get the source from the suggestion index.
function getCollectionFromActiveItemId(state) {
  // Given 3 sources with respectively 1, 2 and 3 suggestions: [1, 2, 3]
  // We want to get the accumulated counts:
  // [1, 1 + 2, 1 + 2 + 3] = [1, 3, 3 + 3] = [1, 3, 6]
  var accumulatedCollectionsCount = state.collections.map(function (collections) {
    return collections.items.length;
  }).reduce(function (acc, collectionsCount, index) {
    var previousValue = acc[index - 1] || 0;
    var nextValue = previousValue + collectionsCount;
    acc.push(nextValue);
    return acc;
  }, []); // Based on the accumulated counts, we can infer the index of the suggestion.

  var collectionIndex = accumulatedCollectionsCount.reduce(function (acc, current) {
    if (current <= state.activeItemId) {
      return acc + 1;
    }

    return acc;
  }, 0);
  return state.collections[collectionIndex];
}
/**
 * Gets the highlighted index relative to a suggestion object (not the absolute
 * highlighted index).
 *
 * Example:
 *  [['a', 'b'], ['c', 'd', 'e'], ['f']]
 *                      ↑
 *         (absolute: 3, relative: 1)
 */


function getRelativeActiveItemId(_ref) {
  var state = _ref.state,
      collection = _ref.collection;
  var isOffsetFound = false;
  var counter = 0;
  var previousItemsOffset = 0;

  while (isOffsetFound === false) {
    var currentCollection = state.collections[counter];

    if (currentCollection === collection) {
      isOffsetFound = true;
      break;
    }

    previousItemsOffset += currentCollection.items.length;
    counter++;
  }

  return state.activeItemId - previousItemsOffset;
}

function getActiveItem(state) {
  var collection = getCollectionFromActiveItemId(state);

  if (!collection) {
    return null;
  }

  var item = collection.items[getRelativeActiveItemId({
    state: state,
    collection: collection
  })];
  var source = collection.source;
  var itemInputValue = source.getItemInputValue({
    item: item,
    state: state
  });
  var itemUrl = source.getItemUrl({
    item: item,
    state: state
  });
  return {
    item: item,
    itemInputValue: itemInputValue,
    itemUrl: itemUrl,
    source: source
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextActiveItemId": () => (/* binding */ getNextActiveItemId)
/* harmony export */ });
/**
 * Returns the next active item ID from the current state.
 *
 * We allow circular keyboard navigation from the base index.
 * The base index can either be `null` (nothing is highlighted) or `0`
 * (the first item is highlighted).
 * The base index is allowed to get assigned `null` only if
 * `props.defaultActiveItemId` is `null`. This pattern allows to "stop"
 * by the actual query before navigating to other suggestions as seen on
 * Google or Amazon.
 *
 * @param moveAmount The offset to increment (or decrement) the last index
 * @param baseIndex The current index to compute the next index from
 * @param itemCount The number of items
 * @param defaultActiveItemId The default active index to fallback to
 */
function getNextActiveItemId(moveAmount, baseIndex, itemCount, defaultActiveItemId) {
  if (!itemCount) {
    return null;
  }

  if (moveAmount < 0 && (baseIndex === null || defaultActiveItemId !== null && baseIndex === 0)) {
    return itemCount + moveAmount;
  }

  var numericIndex = (baseIndex === null ? -1 : baseIndex) + moveAmount;

  if (numericIndex <= -1 || numericIndex >= itemCount) {
    return defaultActiveItemId === null ? null : 0;
  }

  return numericIndex;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNormalizedSources": () => (/* binding */ getNormalizedSources)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


function getNormalizedSources(getSources, params) {
  var seenSourceIds = [];
  return Promise.resolve(getSources(params)).then(function (sources) {
    (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.invariant)(Array.isArray(sources), function () {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(_typeof(sources)), ":\n\n").concat(JSON.stringify((0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.decycle)(sources), null, 2));
    });
    return Promise.all(sources // We allow `undefined` and `false` sources to allow users to use
    // `Boolean(query) && source` (=> `false`).
    // We need to remove these values at this point.
    .filter(function (maybeSource) {
      return Boolean(maybeSource);
    }).map(function (source) {
      (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof source.sourceId === 'string', 'A source must provide a `sourceId` string.');

      if (seenSourceIds.includes(source.sourceId)) {
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(source.sourceId), " is not unique."));
      }

      seenSourceIds.push(source.sourceId);

      var normalizedSource = _objectSpread({
        getItemInputValue: function getItemInputValue(_ref) {
          var state = _ref.state;
          return state.query;
        },
        getItemUrl: function getItemUrl() {
          return undefined;
        },
        onSelect: function onSelect(_ref2) {
          var setIsOpen = _ref2.setIsOpen;
          setIsOpen(false);
        },
        onActive: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__.noop
      }, source);

      return Promise.resolve(normalizedSource);
    }));
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isOrContainsNode": () => (/* binding */ isOrContainsNode)
/* harmony export */ });
function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSamsung": () => (/* binding */ isSamsung)
/* harmony export */ });
var regex = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function isSamsung(userAgent) {
  return Boolean(userAgent && userAgent.match(regex));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapToAlgoliaResponse": () => (/* binding */ mapToAlgoliaResponse)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapToAlgoliaResponse(rawResults) {
  var results = rawResults.map(function (result) {
    var _hits;

    return _objectSpread(_objectSpread({}, result), {}, {
      hits: (_hits = result.hits) === null || _hits === void 0 ? void 0 : _hits.map(function (hit) {
        // Bring support for the Insights plugin.
        return _objectSpread(_objectSpread({}, hit), {}, {
          __autocomplete_indexName: result.index,
          __autocomplete_queryID: result.queryID
        });
      })
    });
  });
  return {
    results: results,
    hits: results.map(function (result) {
      return result.hits;
    }).filter(Boolean),
    facetHits: results.map(function (result) {
      var _facetHits;

      return (_facetHits = result.facetHits) === null || _facetHits === void 0 ? void 0 : _facetHits.map(function (facetHit) {
        // Bring support for the highlighting components.
        return {
          label: facetHit.value,
          count: facetHit.count,
          _highlightResult: {
            label: {
              value: facetHit.highlighted
            }
          }
        };
      });
    }).filter(Boolean)
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decycle": () => (/* binding */ decycle)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Decycles objects with circular references.
 * This is used to print cyclic structures in development environment only.
 */
function decycle(obj) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if ( false || !obj || _typeof(obj) !== 'object') {
    return obj;
  }

  if (seen.has(obj)) {
    return '[Circular]';
  }

  var newSeen = seen.add(obj);

  if (Array.isArray(obj)) {
    return obj.map(function (x) {
      return decycle(x, newSeen);
    });
  }

  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return [key, decycle(value, newSeen)];
  }));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flatten": () => (/* binding */ flatten)
/* harmony export */ });
function flatten(values) {
  return values.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateAutocompleteId": () => (/* binding */ generateAutocompleteId)
/* harmony export */ });
var autocompleteId = 0;
function generateAutocompleteId() {
  return "autocomplete-".concat(autocompleteId++);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItemsCount": () => (/* binding */ getItemsCount)
/* harmony export */ });
function getItemsCount(state) {
  if (state.collections.length === 0) {
    return 0;
  }

  return state.collections.reduce(function (sum, collection) {
    return sum + collection.items.length;
  }, 0);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariant": () => (/* binding */ invariant)
/* harmony export */ });
/**
 * Throws an error if the condition is not met in development mode.
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */
function invariant(condition, message) {
  if (false) {}

  if (!condition) {
    throw new Error("[Autocomplete] ".concat(typeof message === 'function' ? message() : message));
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
var noop = function noop() {};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAgents": () => (/* binding */ userAgents)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/@algolia/autocomplete-shared/dist/esm/version.js");

var userAgents = [{
  segment: 'autocomplete-core',
  version: _version__WEBPACK_IMPORTED_MODULE_0__.version
}];

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/version.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/version.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
var version = '1.7.1';

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js":
/*!********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warnCache": () => (/* binding */ warnCache),
/* harmony export */   "warn": () => (/* binding */ warn)
/* harmony export */ });
var warnCache = {
  current: {}
};
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */

function warn(condition, message) {
  if (false) {}

  if (condition) {
    return;
  }

  var sanitizedMessage = message.trim();
  var hasAlreadyPrinted = warnCache.current[sanitizedMessage];

  if (!hasAlreadyPrinted) {
    warnCache.current[sanitizedMessage] = true; // eslint-disable-next-line no-console

    console.warn("[Autocomplete] ".concat(sanitizedMessage));
  }
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/AlgoliaLogo.js":
/*!***************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/AlgoliaLogo.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlgoliaLogo": () => (/* binding */ AlgoliaLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AlgoliaLogo(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations;
  var _translations$searchB = translations.searchByText,
      searchByText = _translations$searchB === void 0 ? 'Search by' : _translations$searchB;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "DocSearch-Label"
  }, searchByText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "77",
    height: "19",
    "aria-label": "Algolia",
    role: "img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/DocSearch.js":
/*!*************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/DocSearch.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocSearch": () => (/* binding */ DocSearch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../node_modules/gadget.js/ignition/bundle/config/react-dom.ts");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DocSearchButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DocSearchButton */ "./node_modules/@docsearch/react/dist/esm/DocSearchButton.js");
/* harmony import */ var _DocSearchModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DocSearchModal */ "./node_modules/@docsearch/react/dist/esm/DocSearchModal.js");
/* harmony import */ var _useDocSearchKeyboardEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDocSearchKeyboardEvents */ "./node_modules/@docsearch/react/dist/esm/useDocSearchKeyboardEvents.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function DocSearch(props) {
  var _props$translations, _props$translations2;

  var searchButtonRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState((props === null || props === void 0 ? void 0 : props.initialQuery) || undefined),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      initialQuery = _React$useState4[0],
      setInitialQuery = _React$useState4[1];

  var onOpen = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function () {
    setIsOpen(true);
  }, [setIsOpen]);
  var onClose = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function () {
    setIsOpen(false);
  }, [setIsOpen]);
  var onInput = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function (event) {
    setIsOpen(true);
    setInitialQuery(event.key);
  }, [setIsOpen, setInitialQuery]);
  (0,_useDocSearchKeyboardEvents__WEBPACK_IMPORTED_MODULE_2__.useDocSearchKeyboardEvents)({
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose,
    onInput: onInput,
    searchButtonRef: searchButtonRef
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DocSearchButton__WEBPACK_IMPORTED_MODULE_3__.DocSearchButton, {
    ref: searchButtonRef,
    translations: props === null || props === void 0 ? void 0 : (_props$translations = props.translations) === null || _props$translations === void 0 ? void 0 : _props$translations.button,
    onClick: onOpen
  }), isOpen && (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DocSearchModal__WEBPACK_IMPORTED_MODULE_4__.DocSearchModal, _extends({}, props, {
    initialScrollY: window.scrollY,
    initialQuery: initialQuery,
    translations: props === null || props === void 0 ? void 0 : (_props$translations2 = props.translations) === null || _props$translations2 === void 0 ? void 0 : _props$translations2.modal,
    onClose: onClose
  })), document.body));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/DocSearchButton.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/DocSearchButton.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocSearchButton": () => (/* binding */ DocSearchButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_ControlKeyIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/ControlKeyIcon */ "./node_modules/@docsearch/react/dist/esm/icons/ControlKeyIcon.js");
/* harmony import */ var _icons_SearchIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/SearchIcon */ "./node_modules/@docsearch/react/dist/esm/icons/SearchIcon.js");
var _excluded = ["translations"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var ACTION_KEY_DEFAULT = 'Ctrl';
var ACTION_KEY_APPLE = '⌘';

function isAppleDevice() {
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}

var DocSearchButton = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = _objectWithoutProperties(_ref, _excluded);

  var _translations$buttonT = translations.buttonText,
      buttonText = _translations$buttonT === void 0 ? 'Search' : _translations$buttonT,
      _translations$buttonA = translations.buttonAriaLabel,
      buttonAriaLabel = _translations$buttonA === void 0 ? 'Search' : _translations$buttonA;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof navigator !== 'undefined') {
      isAppleDevice() ? setKey(ACTION_KEY_APPLE) : setKey(ACTION_KEY_DEFAULT);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    type: "button",
    className: "DocSearch DocSearch-Button",
    "aria-label": buttonAriaLabel
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "DocSearch-Button-Container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "DocSearch-Button-Placeholder"
  }, buttonText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "DocSearch-Button-Keys"
  }, key !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("kbd", {
    className: "DocSearch-Button-Key"
  }, key === ACTION_KEY_DEFAULT ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_ControlKeyIcon__WEBPACK_IMPORTED_MODULE_2__.ControlKeyIcon, null) : key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("kbd", {
    className: "DocSearch-Button-Key"
  }, "K"))));
});

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/DocSearchModal.js":
/*!******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/DocSearchModal.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocSearchModal": () => (/* binding */ DocSearchModal)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @algolia/autocomplete-core */ "./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@docsearch/react/dist/esm/constants.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Footer */ "./node_modules/@docsearch/react/dist/esm/Footer.js");
/* harmony import */ var _Hit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hit */ "./node_modules/@docsearch/react/dist/esm/Hit.js");
/* harmony import */ var _ScreenState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ScreenState */ "./node_modules/@docsearch/react/dist/esm/ScreenState.js");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SearchBox */ "./node_modules/@docsearch/react/dist/esm/SearchBox.js");
/* harmony import */ var _stored_searches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stored-searches */ "./node_modules/@docsearch/react/dist/esm/stored-searches.js");
/* harmony import */ var _useSearchClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useSearchClient */ "./node_modules/@docsearch/react/dist/esm/useSearchClient.js");
/* harmony import */ var _useTouchEvents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useTouchEvents */ "./node_modules/@docsearch/react/dist/esm/useTouchEvents.js");
/* harmony import */ var _useTrapFocus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useTrapFocus */ "./node_modules/@docsearch/react/dist/esm/useTrapFocus.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@docsearch/react/dist/esm/utils/noop.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@docsearch/react/dist/esm/utils/identity.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/@docsearch/react/dist/esm/utils/groupBy.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/@docsearch/react/dist/esm/utils/removeHighlightTags.js");
var _excluded = ["footer", "searchBox"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













function DocSearchModal(_ref) {
  var appId = _ref.appId,
      apiKey = _ref.apiKey,
      indexName = _ref.indexName,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Search docs' : _ref$placeholder,
      searchParameters = _ref.searchParameters,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? _utils__WEBPACK_IMPORTED_MODULE_1__.noop : _ref$onClose,
      _ref$transformItems = _ref.transformItems,
      transformItems = _ref$transformItems === void 0 ? _utils__WEBPACK_IMPORTED_MODULE_2__.identity : _ref$transformItems,
      _ref$hitComponent = _ref.hitComponent,
      hitComponent = _ref$hitComponent === void 0 ? _Hit__WEBPACK_IMPORTED_MODULE_3__.Hit : _ref$hitComponent,
      _ref$resultsFooterCom = _ref.resultsFooterComponent,
      resultsFooterComponent = _ref$resultsFooterCom === void 0 ? function () {
    return null;
  } : _ref$resultsFooterCom,
      navigator = _ref.navigator,
      _ref$initialScrollY = _ref.initialScrollY,
      initialScrollY = _ref$initialScrollY === void 0 ? 0 : _ref$initialScrollY,
      _ref$transformSearchC = _ref.transformSearchClient,
      transformSearchClient = _ref$transformSearchC === void 0 ? _utils__WEBPACK_IMPORTED_MODULE_2__.identity : _ref$transformSearchC,
      _ref$disableUserPerso = _ref.disableUserPersonalization,
      disableUserPersonalization = _ref$disableUserPerso === void 0 ? false : _ref$disableUserPerso,
      _ref$initialQuery = _ref.initialQuery,
      initialQueryFromProp = _ref$initialQuery === void 0 ? '' : _ref$initialQuery,
      _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      getMissingResultsUrl = _ref.getMissingResultsUrl;

  var footerTranslations = translations.footer,
      searchBoxTranslations = translations.searchBox,
      screenStateTranslations = _objectWithoutProperties(translations, _excluded);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    query: '',
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    activeItemId: null,
    status: 'idle'
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var containerRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  var modalRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  var formElementRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  var dropdownRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  var inputRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  var snippetLength = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(10);
  var initialQueryFromSelection = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(typeof window !== 'undefined' ? window.getSelection().toString().slice(0, _constants__WEBPACK_IMPORTED_MODULE_4__.MAX_QUERY_SIZE) : '').current;
  var initialQuery = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(initialQueryFromProp || initialQueryFromSelection).current;
  var searchClient = (0,_useSearchClient__WEBPACK_IMPORTED_MODULE_5__.useSearchClient)(appId, apiKey, transformSearchClient);
  var favoriteSearches = react__WEBPACK_IMPORTED_MODULE_0___default().useRef((0,_stored_searches__WEBPACK_IMPORTED_MODULE_6__.createStoredSearches)({
    key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(indexName),
    limit: 10
  })).current;
  var recentSearches = react__WEBPACK_IMPORTED_MODULE_0___default().useRef((0,_stored_searches__WEBPACK_IMPORTED_MODULE_6__.createStoredSearches)({
    key: "__DOCSEARCH_RECENT_SEARCHES__".concat(indexName),
    // We display 7 recent searches and there's no favorites, but only
    // 4 when there are favorites.
    limit: favoriteSearches.getAll().length === 0 ? 7 : 4
  })).current;
  var saveRecentSearch = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function saveRecentSearch(item) {
    if (disableUserPersonalization) {
      return;
    } // We don't store `content` record, but their parent if available.


    var search = item.type === 'content' ? item.__docsearch_parent : item; // We save the recent search only if it's not favorited.

    if (search && favoriteSearches.getAll().findIndex(function (x) {
      return x.objectID === search.objectID;
    }) === -1) {
      recentSearches.add(search);
    }
  }, [favoriteSearches, recentSearches, disableUserPersonalization]);
  var autocomplete = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return (0,_algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_7__.createAutocomplete)({
      id: 'docsearch',
      defaultActiveItemId: 0,
      placeholder: placeholder,
      openOnFocus: true,
      initialState: {
        query: initialQuery,
        context: {
          searchSuggestions: []
        }
      },
      navigator: navigator,
      onStateChange: function onStateChange(props) {
        setState(props.state);
      },
      getSources: function getSources(_ref2) {
        var query = _ref2.query,
            sourcesState = _ref2.state,
            setContext = _ref2.setContext,
            setStatus = _ref2.setStatus;

        if (!query) {
          if (disableUserPersonalization) {
            return [];
          }

          return [{
            sourceId: 'recentSearches',
            onSelect: function onSelect(_ref3) {
              var item = _ref3.item,
                  event = _ref3.event;
              saveRecentSearch(item);

              if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                onClose();
              }
            },
            getItemUrl: function getItemUrl(_ref4) {
              var item = _ref4.item;
              return item.url;
            },
            getItems: function getItems() {
              return recentSearches.getAll();
            }
          }, {
            sourceId: 'favoriteSearches',
            onSelect: function onSelect(_ref5) {
              var item = _ref5.item,
                  event = _ref5.event;
              saveRecentSearch(item);

              if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                onClose();
              }
            },
            getItemUrl: function getItemUrl(_ref6) {
              var item = _ref6.item;
              return item.url;
            },
            getItems: function getItems() {
              return favoriteSearches.getAll();
            }
          }];
        }

        return searchClient.search([{
          query: query,
          indexName: indexName,
          params: _objectSpread({
            attributesToRetrieve: ['hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'hierarchy.lvl4', 'hierarchy.lvl5', 'hierarchy.lvl6', 'content', 'type', 'url'],
            attributesToSnippet: ["hierarchy.lvl1:".concat(snippetLength.current), "hierarchy.lvl2:".concat(snippetLength.current), "hierarchy.lvl3:".concat(snippetLength.current), "hierarchy.lvl4:".concat(snippetLength.current), "hierarchy.lvl5:".concat(snippetLength.current), "hierarchy.lvl6:".concat(snippetLength.current), "content:".concat(snippetLength.current)],
            snippetEllipsisText: '…',
            highlightPreTag: '<mark>',
            highlightPostTag: '</mark>',
            hitsPerPage: 20
          }, searchParameters)
        }]).catch(function (error) {
          // The Algolia `RetryError` happens when all the servers have
          // failed, meaning that there's no chance the response comes
          // back. This is the right time to display an error.
          // See https://github.com/algolia/algoliasearch-client-javascript/blob/2ffddf59bc765cd1b664ee0346b28f00229d6e12/packages/transporter/src/errors/createRetryError.ts#L5
          if (error.name === 'RetryError') {
            setStatus('error');
          }

          throw error;
        }).then(function (_ref7) {
          var results = _ref7.results;
          var _results$ = results[0],
              hits = _results$.hits,
              nbHits = _results$.nbHits;
          var sources = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.groupBy)(hits, function (hit) {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_9__.removeHighlightTags)(hit);
          }); // We store the `lvl0`s to display them as search suggestions
          // in the "no results" screen.

          if (sourcesState.context.searchSuggestions.length < Object.keys(sources).length) {
            setContext({
              searchSuggestions: Object.keys(sources)
            });
          }

          setContext({
            nbHits: nbHits
          });
          return Object.values(sources).map(function (items, index) {
            return {
              sourceId: "hits".concat(index),
              onSelect: function onSelect(_ref8) {
                var item = _ref8.item,
                    event = _ref8.event;
                saveRecentSearch(item);

                if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                  onClose();
                }
              },
              getItemUrl: function getItemUrl(_ref9) {
                var item = _ref9.item;
                return item.url;
              },
              getItems: function getItems() {
                return Object.values((0,_utils__WEBPACK_IMPORTED_MODULE_8__.groupBy)(items, function (item) {
                  return item.hierarchy.lvl1;
                })).map(transformItems).map(function (groupedHits) {
                  return groupedHits.map(function (item) {
                    return _objectSpread(_objectSpread({}, item), {}, {
                      __docsearch_parent: item.type !== 'lvl1' && groupedHits.find(function (siblingItem) {
                        return siblingItem.type === 'lvl1' && siblingItem.hierarchy.lvl1 === item.hierarchy.lvl1;
                      })
                    });
                  });
                }).flat();
              }
            };
          });
        });
      }
    });
  }, [indexName, searchParameters, searchClient, onClose, recentSearches, favoriteSearches, saveRecentSearch, initialQuery, placeholder, navigator, transformItems, disableUserPersonalization]);
  var getEnvironmentProps = autocomplete.getEnvironmentProps,
      getRootProps = autocomplete.getRootProps,
      refresh = autocomplete.refresh;
  (0,_useTouchEvents__WEBPACK_IMPORTED_MODULE_10__.useTouchEvents)({
    getEnvironmentProps: getEnvironmentProps,
    panelElement: dropdownRef.current,
    formElement: formElementRef.current,
    inputElement: inputRef.current
  });
  (0,_useTrapFocus__WEBPACK_IMPORTED_MODULE_11__.useTrapFocus)({
    container: containerRef.current
  });
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    document.body.classList.add('DocSearch--active');
    return function () {
      var _window$scrollTo, _window;

      document.body.classList.remove('DocSearch--active'); // IE11 doesn't support `scrollTo` so we check that the method exists
      // first.

      (_window$scrollTo = (_window = window).scrollTo) === null || _window$scrollTo === void 0 ? void 0 : _window$scrollTo.call(_window, 0, initialScrollY);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    var isMobileMediaQuery = window.matchMedia('(max-width: 768px)');

    if (isMobileMediaQuery.matches) {
      snippetLength.current = 5;
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (dropdownRef.current) {
      dropdownRef.current.scrollTop = 0;
    }
  }, [state.query]); // We don't focus the input when there's an initial query (i.e. Selection
  // Search) because users rather want to see the results directly, without the
  // keyboard appearing.
  // We therefore need to refresh the autocomplete instance to load all the
  // results, which is usually triggered on focus.

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (initialQuery.length > 0) {
      refresh();

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [initialQuery, refresh]); // We rely on a CSS property to set the modal height to the full viewport height
  // because all mobile browsers don't compute their height the same way.
  // See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    function setFullViewportHeight() {
      if (modalRef.current) {
        var vh = window.innerHeight * 0.01;
        modalRef.current.style.setProperty('--docsearch-vh', "".concat(vh, "px"));
      }
    }

    setFullViewportHeight();
    window.addEventListener('resize', setFullViewportHeight);
    return function () {
      window.removeEventListener('resize', setFullViewportHeight);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    ref: containerRef
  }, getRootProps({
    'aria-expanded': true
  }), {
    className: ['DocSearch', 'DocSearch-Container', state.status === 'stalled' && 'DocSearch-Container--Stalled', state.status === 'error' && 'DocSearch-Container--Errored'].filter(Boolean).join(' '),
    role: "button",
    tabIndex: 0,
    onMouseDown: function onMouseDown(event) {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Modal",
    ref: modalRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "DocSearch-SearchBar",
    ref: formElementRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SearchBox__WEBPACK_IMPORTED_MODULE_12__.SearchBox, _extends({}, autocomplete, {
    state: state,
    autoFocus: initialQuery.length === 0,
    inputRef: inputRef,
    isFromSelection: Boolean(initialQuery) && initialQuery === initialQueryFromSelection,
    translations: searchBoxTranslations,
    onClose: onClose
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Dropdown",
    ref: dropdownRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ScreenState__WEBPACK_IMPORTED_MODULE_13__.ScreenState, _extends({}, autocomplete, {
    indexName: indexName,
    state: state,
    hitComponent: hitComponent,
    resultsFooterComponent: resultsFooterComponent,
    disableUserPersonalization: disableUserPersonalization,
    recentSearches: recentSearches,
    favoriteSearches: favoriteSearches,
    inputRef: inputRef,
    translations: screenStateTranslations,
    getMissingResultsUrl: getMissingResultsUrl,
    onItemClick: function onItemClick(item) {
      saveRecentSearch(item);
      onClose();
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "DocSearch-Footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_14__.Footer, {
    translations: footerTranslations
  }))));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/ErrorScreen.js":
/*!***************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/ErrorScreen.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorScreen": () => (/* binding */ ErrorScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./node_modules/@docsearch/react/dist/esm/icons/ErrorIcon.js");


function ErrorScreen(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations;
  var _translations$titleTe = translations.titleText,
      titleText = _translations$titleTe === void 0 ? 'Unable to fetch results' : _translations$titleTe,
      _translations$helpTex = translations.helpText,
      helpText = _translations$helpTex === void 0 ? 'You might want to check your network connection.' : _translations$helpTex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-ErrorScreen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Screen-Icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.ErrorIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "DocSearch-Title"
  }, titleText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "DocSearch-Help"
  }, helpText));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/Footer.js":
/*!**********************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/Footer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AlgoliaLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlgoliaLogo */ "./node_modules/@docsearch/react/dist/esm/AlgoliaLogo.js");



function CommandIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "15",
    height: "15",
    "aria-label": props.ariaLabel,
    role: "img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2"
  }, props.children));
}

function Footer(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations;
  var _translations$selectT = translations.selectText,
      selectText = _translations$selectT === void 0 ? 'to select' : _translations$selectT,
      _translations$selectK = translations.selectKeyAriaLabel,
      selectKeyAriaLabel = _translations$selectK === void 0 ? 'Enter key' : _translations$selectK,
      _translations$navigat = translations.navigateText,
      navigateText = _translations$navigat === void 0 ? 'to navigate' : _translations$navigat,
      _translations$navigat2 = translations.navigateUpKeyAriaLabel,
      navigateUpKeyAriaLabel = _translations$navigat2 === void 0 ? 'Arrow up' : _translations$navigat2,
      _translations$navigat3 = translations.navigateDownKeyAriaLabel,
      navigateDownKeyAriaLabel = _translations$navigat3 === void 0 ? 'Arrow down' : _translations$navigat3,
      _translations$closeTe = translations.closeText,
      closeText = _translations$closeTe === void 0 ? 'to close' : _translations$closeTe,
      _translations$closeKe = translations.closeKeyAriaLabel,
      closeKeyAriaLabel = _translations$closeKe === void 0 ? 'Escape key' : _translations$closeKe,
      _translations$searchB = translations.searchByText,
      searchByText = _translations$searchB === void 0 ? 'Search by' : _translations$searchB;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AlgoliaLogo__WEBPACK_IMPORTED_MODULE_1__.AlgoliaLogo, {
    translations: {
      searchByText: searchByText
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "DocSearch-Commands"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("kbd", {
    className: "DocSearch-Commands-Key"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CommandIcon, {
    ariaLabel: selectKeyAriaLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "DocSearch-Label"
  }, selectText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("kbd", {
    className: "DocSearch-Commands-Key"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CommandIcon, {
    ariaLabel: navigateDownKeyAriaLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("kbd", {
    className: "DocSearch-Commands-Key"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CommandIcon, {
    ariaLabel: navigateUpKeyAriaLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "DocSearch-Label"
  }, navigateText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("kbd", {
    className: "DocSearch-Commands-Key"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CommandIcon, {
    ariaLabel: closeKeyAriaLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "DocSearch-Label"
  }, closeText))));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/Hit.js":
/*!*******************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/Hit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hit": () => (/* binding */ Hit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Hit(_ref) {
  var hit = _ref.hit,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: hit.url
  }, children);
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/NoResultsScreen.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/NoResultsScreen.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoResultsScreen": () => (/* binding */ NoResultsScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./node_modules/@docsearch/react/dist/esm/icons/NoResultsIcon.js");
var _excluded = ["translations"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function NoResultsScreen(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = _objectWithoutProperties(_ref, _excluded);

  var _translations$noResul = translations.noResultsText,
      noResultsText = _translations$noResul === void 0 ? 'No results for' : _translations$noResul,
      _translations$suggest = translations.suggestedQueryText,
      suggestedQueryText = _translations$suggest === void 0 ? 'Try searching for' : _translations$suggest,
      _translations$reportM = translations.reportMissingResultsText,
      reportMissingResultsText = _translations$reportM === void 0 ? 'Believe this query should return results?' : _translations$reportM,
      _translations$reportM2 = translations.reportMissingResultsLinkText,
      reportMissingResultsLinkText = _translations$reportM2 === void 0 ? 'Let us know.' : _translations$reportM2;
  var searchSuggestions = props.state.context.searchSuggestions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-NoResults"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Screen-Icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.NoResultsIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "DocSearch-Title"
  }, noResultsText, " \"", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, props.state.query), "\""), searchSuggestions && searchSuggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-NoResults-Prefill-List"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "DocSearch-Help"
  }, suggestedQueryText, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, searchSuggestions.slice(0, 3).reduce(function (acc, search) {
    return [].concat(_toConsumableArray(acc), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: search
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "DocSearch-Prefill",
      key: search,
      type: "button",
      onClick: function onClick() {
        props.setQuery(search.toLowerCase() + ' ');
        props.refresh();
        props.inputRef.current.focus();
      }
    }, search))]);
  }, []))), props.getMissingResultsUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "DocSearch-Help"
  }, "".concat(reportMissingResultsText, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.getMissingResultsUrl({
      query: props.state.query
    }),
    target: "_blank",
    rel: "noopener noreferrer"
  }, reportMissingResultsLinkText)));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/Results.js":
/*!***********************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/Results.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Results": () => (/* binding */ Results)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Snippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snippet */ "./node_modules/@docsearch/react/dist/esm/Snippet.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function Results(props) {
  if (!props.collection || props.collection.items.length === 0) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "DocSearch-Hits"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Hit-source"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", props.getListProps(), props.collection.items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Result, _extends({
      key: [props.title, item.objectID].join(':'),
      item: item,
      index: index
    }, props));
  })));
}

function Result(_ref) {
  var item = _ref.item,
      index = _ref.index,
      renderIcon = _ref.renderIcon,
      renderAction = _ref.renderAction,
      getItemProps = _ref.getItemProps,
      onItemClick = _ref.onItemClick,
      collection = _ref.collection,
      hitComponent = _ref.hitComponent;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isDeleting = _React$useState2[0],
      setIsDeleting = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isFavoriting = _React$useState4[0],
      setIsFavoriting = _React$useState4[1];

  var action = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  var Hit = hitComponent;

  function runDeleteTransition(cb) {
    setIsDeleting(true);
    action.current = cb;
  }

  function runFavoriteTransition(cb) {
    setIsFavoriting(true);
    action.current = cb;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", _extends({
    className: ['DocSearch-Hit', item.__docsearch_parent && 'DocSearch-Hit--Child', isDeleting && 'DocSearch-Hit--deleting', isFavoriting && 'DocSearch-Hit--favoriting'].filter(Boolean).join(' '),
    onTransitionEnd: function onTransitionEnd() {
      if (action.current) {
        action.current();
      }
    }
  }, getItemProps({
    item: item,
    source: collection.source,
    onClick: function onClick() {
      onItemClick(item);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Hit, {
    hit: item
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Hit-Container"
  }, renderIcon({
    item: item,
    index: index
  }), item.hierarchy[item.type] && item.type === 'lvl1' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Hit-content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Snippet__WEBPACK_IMPORTED_MODULE_1__.Snippet, {
    className: "DocSearch-Hit-title",
    hit: item,
    attribute: "hierarchy.lvl1"
  }), item.content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Snippet__WEBPACK_IMPORTED_MODULE_1__.Snippet, {
    className: "DocSearch-Hit-path",
    hit: item,
    attribute: "content"
  })), item.hierarchy[item.type] && (item.type === 'lvl2' || item.type === 'lvl3' || item.type === 'lvl4' || item.type === 'lvl5' || item.type === 'lvl6') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Hit-content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Snippet__WEBPACK_IMPORTED_MODULE_1__.Snippet, {
    className: "DocSearch-Hit-title",
    hit: item,
    attribute: "hierarchy.".concat(item.type)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Snippet__WEBPACK_IMPORTED_MODULE_1__.Snippet, {
    className: "DocSearch-Hit-path",
    hit: item,
    attribute: "hierarchy.lvl1"
  })), item.type === 'content' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Hit-content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Snippet__WEBPACK_IMPORTED_MODULE_1__.Snippet, {
    className: "DocSearch-Hit-title",
    hit: item,
    attribute: "content"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Snippet__WEBPACK_IMPORTED_MODULE_1__.Snippet, {
    className: "DocSearch-Hit-path",
    hit: item,
    attribute: "hierarchy.lvl1"
  })), renderAction({
    item: item,
    runDeleteTransition: runDeleteTransition,
    runFavoriteTransition: runFavoriteTransition
  }))));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/ResultsScreen.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/ResultsScreen.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsScreen": () => (/* binding */ ResultsScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./node_modules/@docsearch/react/dist/esm/icons/SourceIcon.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./node_modules/@docsearch/react/dist/esm/icons/SelectIcon.js");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ "./node_modules/@docsearch/react/dist/esm/Results.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@docsearch/react/dist/esm/utils/removeHighlightTags.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function ResultsScreen(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Dropdown-Container"
  }, props.state.collections.map(function (collection) {
    if (collection.items.length === 0) {
      return null;
    }

    var title = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.removeHighlightTags)(collection.items[0]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Results__WEBPACK_IMPORTED_MODULE_2__.Results, _extends({}, props, {
      key: collection.source.sourceId,
      title: title,
      collection: collection,
      renderIcon: function renderIcon(_ref) {
        var _collection$items;

        var item = _ref.item,
            index = _ref.index;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, item.__docsearch_parent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
          className: "DocSearch-Hit-Tree",
          viewBox: "0 0 24 54"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
          stroke: "currentColor",
          fill: "none",
          fillRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }, item.__docsearch_parent !== ((_collection$items = collection.items[index + 1]) === null || _collection$items === void 0 ? void 0 : _collection$items.__docsearch_parent) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
          d: "M8 6v21M20 27H8.3"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
          d: "M8 6v42M20 27H8.3"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "DocSearch-Hit-icon"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.SourceIcon, {
          type: item.type
        })));
      },
      renderAction: function renderAction() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "DocSearch-Hit-action"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.SelectIcon, null));
      }
    }));
  }), props.resultsFooterComponent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "DocSearch-HitsFooter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(props.resultsFooterComponent, {
    state: props.state
  })));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/ScreenState.js":
/*!***************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/ScreenState.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenState": () => (/* binding */ ScreenState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorScreen */ "./node_modules/@docsearch/react/dist/esm/ErrorScreen.js");
/* harmony import */ var _NoResultsScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NoResultsScreen */ "./node_modules/@docsearch/react/dist/esm/NoResultsScreen.js");
/* harmony import */ var _ResultsScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResultsScreen */ "./node_modules/@docsearch/react/dist/esm/ResultsScreen.js");
/* harmony import */ var _StartScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StartScreen */ "./node_modules/@docsearch/react/dist/esm/StartScreen.js");
var _excluded = ["translations"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ScreenState = react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = _objectWithoutProperties(_ref, _excluded);

  if (props.state.status === 'error') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ErrorScreen__WEBPACK_IMPORTED_MODULE_1__.ErrorScreen, {
      translations: translations === null || translations === void 0 ? void 0 : translations.errorScreen
    });
  }

  var hasCollections = props.state.collections.some(function (collection) {
    return collection.items.length > 0;
  });

  if (!props.state.query) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StartScreen__WEBPACK_IMPORTED_MODULE_2__.StartScreen, _extends({}, props, {
      hasCollections: hasCollections,
      translations: translations === null || translations === void 0 ? void 0 : translations.startScreen
    }));
  }

  if (hasCollections === false) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NoResultsScreen__WEBPACK_IMPORTED_MODULE_3__.NoResultsScreen, _extends({}, props, {
      translations: translations === null || translations === void 0 ? void 0 : translations.noResultsScreen
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResultsScreen__WEBPACK_IMPORTED_MODULE_4__.ResultsScreen, props);
}, function areEqual(_prevProps, nextProps) {
  // We don't update the screen when Autocomplete is loading or stalled to
  // avoid UI flashes:
  //  - Empty screen → Results screen
  //  - NoResults screen → NoResults screen with another query
  return nextProps.state.status === 'loading' || nextProps.state.status === 'stalled';
});

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/SearchBox.js":
/*!*************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/SearchBox.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBox": () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@docsearch/react/dist/esm/constants.js");
/* harmony import */ var _icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/LoadingIcon */ "./node_modules/@docsearch/react/dist/esm/icons/LoadingIcon.js");
/* harmony import */ var _icons_ResetIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/ResetIcon */ "./node_modules/@docsearch/react/dist/esm/icons/ResetIcon.js");
/* harmony import */ var _icons_SearchIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/SearchIcon */ "./node_modules/@docsearch/react/dist/esm/icons/SearchIcon.js");
var _excluded = ["translations"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function SearchBox(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = _objectWithoutProperties(_ref, _excluded);

  var _translations$resetBu = translations.resetButtonTitle,
      resetButtonTitle = _translations$resetBu === void 0 ? 'Clear the query' : _translations$resetBu,
      _translations$resetBu2 = translations.resetButtonAriaLabel,
      resetButtonAriaLabel = _translations$resetBu2 === void 0 ? 'Clear the query' : _translations$resetBu2,
      _translations$cancelB = translations.cancelButtonText,
      cancelButtonText = _translations$cancelB === void 0 ? 'Cancel' : _translations$cancelB,
      _translations$cancelB2 = translations.cancelButtonAriaLabel,
      cancelButtonAriaLabel = _translations$cancelB2 === void 0 ? 'Cancel' : _translations$cancelB2;

  var _props$getFormProps = props.getFormProps({
    inputElement: props.inputRef.current
  }),
      onReset = _props$getFormProps.onReset;

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (props.autoFocus && props.inputRef.current) {
      props.inputRef.current.focus();
    }
  }, [props.autoFocus, props.inputRef]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (props.isFromSelection && props.inputRef.current) {
      props.inputRef.current.select();
    }
  }, [props.isFromSelection, props.inputRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "DocSearch-Form",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
    },
    onReset: onReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", _extends({
    className: "DocSearch-MagnifierLabel"
  }, props.getLabelProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-LoadingIndicator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__.LoadingIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "DocSearch-Input",
    ref: props.inputRef
  }, props.getInputProps({
    inputElement: props.inputRef.current,
    autoFocus: props.autoFocus,
    maxLength: _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_QUERY_SIZE
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "reset",
    title: resetButtonTitle,
    className: "DocSearch-Reset",
    "aria-label": resetButtonAriaLabel,
    hidden: !props.state.query
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_ResetIcon__WEBPACK_IMPORTED_MODULE_4__.ResetIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "DocSearch-Cancel",
    type: "reset",
    "aria-label": cancelButtonAriaLabel,
    onClick: props.onClose
  }, cancelButtonText));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/Snippet.js":
/*!***********************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/Snippet.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Snippet": () => (/* binding */ Snippet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["hit", "attribute", "tagName"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function getPropertyByPath(object, path) {
  var parts = path.split('.');
  return parts.reduce(function (prev, current) {
    if (prev !== null && prev !== void 0 && prev[current]) return prev[current];
    return null;
  }, object);
}

function Snippet(_ref) {
  var hit = _ref.hit,
      attribute = _ref.attribute,
      _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? 'span' : _ref$tagName,
      rest = _objectWithoutProperties(_ref, _excluded);

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tagName, _objectSpread(_objectSpread({}, rest), {}, {
    dangerouslySetInnerHTML: {
      __html: getPropertyByPath(hit, "_snippetResult.".concat(attribute, ".value")) || getPropertyByPath(hit, attribute)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/StartScreen.js":
/*!***************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/StartScreen.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartScreen": () => (/* binding */ StartScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./node_modules/@docsearch/react/dist/esm/icons/RecentIcon.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./node_modules/@docsearch/react/dist/esm/icons/StarIcon.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./node_modules/@docsearch/react/dist/esm/icons/ResetIcon.js");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results */ "./node_modules/@docsearch/react/dist/esm/Results.js");
var _excluded = ["translations"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function StartScreen(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = _objectWithoutProperties(_ref, _excluded);

  var _translations$recentS = translations.recentSearchesTitle,
      recentSearchesTitle = _translations$recentS === void 0 ? 'Recent' : _translations$recentS,
      _translations$noRecen = translations.noRecentSearchesText,
      noRecentSearchesText = _translations$noRecen === void 0 ? 'No recent searches' : _translations$noRecen,
      _translations$saveRec = translations.saveRecentSearchButtonTitle,
      saveRecentSearchButtonTitle = _translations$saveRec === void 0 ? 'Save this search' : _translations$saveRec,
      _translations$removeR = translations.removeRecentSearchButtonTitle,
      removeRecentSearchButtonTitle = _translations$removeR === void 0 ? 'Remove this search from history' : _translations$removeR,
      _translations$favorit = translations.favoriteSearchesTitle,
      favoriteSearchesTitle = _translations$favorit === void 0 ? 'Favorite' : _translations$favorit,
      _translations$removeF = translations.removeFavoriteSearchButtonTitle,
      removeFavoriteSearchButtonTitle = _translations$removeF === void 0 ? 'Remove this search from favorites' : _translations$removeF;

  if (props.state.status === 'idle' && props.hasCollections === false) {
    if (props.disableUserPersonalization) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "DocSearch-StartScreen"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "DocSearch-Help"
    }, noRecentSearchesText));
  }

  if (props.hasCollections === false) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "DocSearch-Dropdown-Container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Results__WEBPACK_IMPORTED_MODULE_1__.Results, _extends({}, props, {
    title: recentSearchesTitle,
    collection: props.state.collections[0],
    renderIcon: function renderIcon() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "DocSearch-Hit-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.RecentIcon, null));
    },
    renderAction: function renderAction(_ref2) {
      var item = _ref2.item,
          runFavoriteTransition = _ref2.runFavoriteTransition,
          runDeleteTransition = _ref2.runDeleteTransition;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "DocSearch-Hit-action"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "DocSearch-Hit-action-button",
        title: saveRecentSearchButtonTitle,
        type: "submit",
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          runFavoriteTransition(function () {
            props.favoriteSearches.add(item);
            props.recentSearches.remove(item);
            props.refresh();
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.StarIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "DocSearch-Hit-action"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "DocSearch-Hit-action-button",
        title: removeRecentSearchButtonTitle,
        type: "submit",
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          runDeleteTransition(function () {
            props.recentSearches.remove(item);
            props.refresh();
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.ResetIcon, null))));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Results__WEBPACK_IMPORTED_MODULE_1__.Results, _extends({}, props, {
    title: favoriteSearchesTitle,
    collection: props.state.collections[1],
    renderIcon: function renderIcon() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "DocSearch-Hit-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.StarIcon, null));
    },
    renderAction: function renderAction(_ref3) {
      var item = _ref3.item,
          runDeleteTransition = _ref3.runDeleteTransition;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "DocSearch-Hit-action"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "DocSearch-Hit-action-button",
        title: removeFavoriteSearchButtonTitle,
        type: "submit",
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          runDeleteTransition(function () {
            props.favoriteSearches.remove(item);
            props.refresh();
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.ResetIcon, null)));
    }
  })));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/constants.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_QUERY_SIZE": () => (/* binding */ MAX_QUERY_SIZE)
/* harmony export */ });
var MAX_QUERY_SIZE = 64;

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/ControlKeyIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/ControlKeyIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlKeyIcon": () => (/* binding */ ControlKeyIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ControlKeyIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "15",
    height: "15",
    className: "DocSearch-Control-Key-Icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
    strokeWidth: "1.2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "square"
  }));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/ErrorIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/ErrorIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorIcon": () => (/* binding */ ErrorIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ErrorIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 20 20",
    fill: "none",
    fillRule: "evenodd",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"
  }));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/LoadingIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/LoadingIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingIcon": () => (/* binding */ LoadingIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function LoadingIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    viewBox: "0 0 38 38",
    stroke: "currentColor",
    strokeOpacity: ".5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    strokeOpacity: ".3",
    cx: "18",
    cy: "18",
    r: "18"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite"
  })))));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/NoResultsIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/NoResultsIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoResultsIcon": () => (/* binding */ NoResultsIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NoResultsIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 20 20",
    fill: "none",
    fillRule: "evenodd",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"
  }));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/RecentIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/RecentIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentIcon": () => (/* binding */ RecentIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function RecentIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"
  })));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/ResetIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/ResetIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetIcon": () => (/* binding */ ResetIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ResetIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/SearchIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/SearchIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchIcon": () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SearchIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    className: "DocSearch-Search-Icon",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/SelectIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/SelectIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectIcon": () => (/* binding */ SelectIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SelectIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "DocSearch-Hit-Select-Icon",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 3v4c0 2-2 4-4 4H2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 17l-6-6 6-6"
  })));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/SourceIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/SourceIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceIcon": () => (/* binding */ SourceIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LvlIcon = function LvlIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }));
};

function SourceIcon(props) {
  switch (props.type) {
    case 'lvl1':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LvlIcon, null);

    case 'content':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentIcon, null);

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnchorIcon, null);
  }
}

function AnchorIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

function ContentIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/icons/StarIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/icons/StarIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarIcon": () => (/* binding */ StarIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function StarIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }));
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/stored-searches.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/stored-searches.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStoredSearches": () => (/* binding */ createStoredSearches)
/* harmony export */ });
var _excluded = ["_highlightResult", "_snippetResult"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function isLocalStorageSupported() {
  var key = '__TEST_KEY__';

  try {
    localStorage.setItem(key, '');
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

function createStorage(key) {
  if (isLocalStorageSupported() === false) {
    return {
      setItem: function setItem() {},
      getItem: function getItem() {
        return [];
      }
    };
  }

  return {
    setItem: function setItem(item) {
      return window.localStorage.setItem(key, JSON.stringify(item));
    },
    getItem: function getItem() {
      var item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    }
  };
}

function createStoredSearches(_ref) {
  var key = _ref.key,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 5 : _ref$limit;
  var storage = createStorage(key);
  var items = storage.getItem().slice(0, limit);
  return {
    add: function add(item) {
      var _ref2 = item,
          _highlightResult = _ref2._highlightResult,
          _snippetResult = _ref2._snippetResult,
          hit = _objectWithoutProperties(_ref2, _excluded);

      var isQueryAlreadySaved = items.findIndex(function (x) {
        return x.objectID === hit.objectID;
      });

      if (isQueryAlreadySaved > -1) {
        items.splice(isQueryAlreadySaved, 1);
      }

      items.unshift(hit);
      items = items.slice(0, limit);
      storage.setItem(items);
    },
    remove: function remove(item) {
      items = items.filter(function (x) {
        return x.objectID !== item.objectID;
      });
      storage.setItem(items);
    },
    getAll: function getAll() {
      return items;
    }
  };
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/useDocSearchKeyboardEvents.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/useDocSearchKeyboardEvents.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDocSearchKeyboardEvents": () => (/* binding */ useDocSearchKeyboardEvents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function isEditingContent(event) {
  var element = event.target;
  var tagName = element.tagName;
  return element.isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA';
}

function useDocSearchKeyboardEvents(_ref) {
  var isOpen = _ref.isOpen,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onInput = _ref.onInput,
      searchButtonRef = _ref.searchButtonRef;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    function onKeyDown(event) {
      function open() {
        // We check that no other DocSearch modal is showing before opening
        // another one.
        if (!document.body.classList.contains('DocSearch--active')) {
          onOpen();
        }
      }

      if (event.keyCode === 27 && isOpen || // The `Cmd+K` shortcut both opens and closes the modal.
      event.key === 'k' && (event.metaKey || event.ctrlKey) || // The `/` shortcut opens but doesn't close the modal because it's
      // a character.
      !isEditingContent(event) && event.key === '/' && !isOpen) {
        event.preventDefault();

        if (isOpen) {
          onClose();
        } else if (!document.body.classList.contains('DocSearch--active')) {
          open();
        }
      }

      if (searchButtonRef && searchButtonRef.current === document.activeElement && onInput) {
        if (/[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
          onInput(event);
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onOpen, onClose, onInput, searchButtonRef]);
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/useSearchClient.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/useSearchClient.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSearchClient": () => (/* binding */ useSearchClient)
/* harmony export */ });
/* harmony import */ var algoliasearch_dist_algoliasearch_lite_esm_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! algoliasearch/dist/algoliasearch-lite.esm.browser */ "./node_modules/algoliasearch/dist/algoliasearch-lite.esm.browser.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "./node_modules/@docsearch/react/dist/esm/version.js");



function useSearchClient(appId, apiKey, transformSearchClient) {
  var searchClient = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    var client = (0,algoliasearch_dist_algoliasearch_lite_esm_browser__WEBPACK_IMPORTED_MODULE_1__.default)(appId, apiKey);
    client.addAlgoliaAgent('docsearch', _version__WEBPACK_IMPORTED_MODULE_2__.version); // Since DocSearch.js relies on DocSearch React with an alias to Preact,
    // we cannot add the `docsearch-react` user agent by default, otherwise
    // it would also be sent on a DocSearch.js integration.
    // We therefore only add the `docsearch-react` user agent if `docsearch.js`
    // is not present.

    if (/docsearch.js \(.*\)/.test(client.transporter.userAgent.value) === false) {
      client.addAlgoliaAgent('docsearch-react', _version__WEBPACK_IMPORTED_MODULE_2__.version);
    }

    return transformSearchClient(client);
  }, [appId, apiKey, transformSearchClient]);
  return searchClient;
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/useTouchEvents.js":
/*!******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/useTouchEvents.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTouchEvents": () => (/* binding */ useTouchEvents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTouchEvents(_ref) {
  var getEnvironmentProps = _ref.getEnvironmentProps,
      panelElement = _ref.panelElement,
      formElement = _ref.formElement,
      inputElement = _ref.inputElement;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (!(panelElement && formElement && inputElement)) {
      return undefined;
    }

    var _getEnvironmentProps = getEnvironmentProps({
      panelElement: panelElement,
      formElement: formElement,
      inputElement: inputElement
    }),
        onTouchStart = _getEnvironmentProps.onTouchStart,
        onTouchMove = _getEnvironmentProps.onTouchMove;

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    return function () {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [getEnvironmentProps, panelElement, formElement, inputElement]);
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/useTrapFocus.js":
/*!****************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/useTrapFocus.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTrapFocus": () => (/* binding */ useTrapFocus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTrapFocus(_ref) {
  var container = _ref.container;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (!container) {
      return undefined;
    }

    var focusableElements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), input:not([disabled])');
    var firstElement = focusableElements[0];
    var lastElement = focusableElements[focusableElements.length - 1];

    function trapFocus(event) {
      if (event.key !== 'Tab') {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    container.addEventListener('keydown', trapFocus);
    return function () {
      container.removeEventListener('keydown', trapFocus);
    };
  }, [container]);
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/utils/groupBy.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/utils/groupBy.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupBy": () => (/* binding */ groupBy)
/* harmony export */ });
function groupBy(values, predicate) {
  return values.reduce(function (acc, item) {
    var key = predicate(item);

    if (!acc.hasOwnProperty(key)) {
      acc[key] = [];
    } // We limit each section to show 5 hits maximum.
    // This acts as a frontend alternative to `distinct`.


    if (acc[key].length < 5) {
      acc[key].push(item);
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/utils/identity.js":
/*!******************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/utils/identity.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/utils/noop.js":
/*!**************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/utils/noop.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/utils/removeHighlightTags.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/utils/removeHighlightTags.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeHighlightTags": () => (/* binding */ removeHighlightTags)
/* harmony export */ });
var regexHighlightTags = /(<mark>|<\/mark>)/g;
var regexHasHighlightTags = RegExp(regexHighlightTags.source);
function removeHighlightTags(hit) {
  var _internalDocSearchHit, _internalDocSearchHit2, _internalDocSearchHit3, _hit$_highlightResult, _hit$_highlightResult2;

  var internalDocSearchHit = hit;

  if (!internalDocSearchHit.__docsearch_parent && !hit._highlightResult) {
    return hit.hierarchy.lvl0;
  }

  var _ref = (internalDocSearchHit.__docsearch_parent ? (_internalDocSearchHit = internalDocSearchHit.__docsearch_parent) === null || _internalDocSearchHit === void 0 ? void 0 : (_internalDocSearchHit2 = _internalDocSearchHit._highlightResult) === null || _internalDocSearchHit2 === void 0 ? void 0 : (_internalDocSearchHit3 = _internalDocSearchHit2.hierarchy) === null || _internalDocSearchHit3 === void 0 ? void 0 : _internalDocSearchHit3.lvl0 : (_hit$_highlightResult = hit._highlightResult) === null || _hit$_highlightResult === void 0 ? void 0 : (_hit$_highlightResult2 = _hit$_highlightResult.hierarchy) === null || _hit$_highlightResult2 === void 0 ? void 0 : _hit$_highlightResult2.lvl0) || {},
      value = _ref.value;

  return value && regexHasHighlightTags.test(value) ? value.replace(regexHighlightTags, '') : value;
}

/***/ }),

/***/ "./node_modules/@docsearch/react/dist/esm/version.js":
/*!***********************************************************!*\
  !*** ./node_modules/@docsearch/react/dist/esm/version.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
var version = '3.2.1';

/***/ }),

/***/ "./node_modules/@mapbox/hast-util-table-cell-style/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@mapbox/hast-util-table-cell-style/index.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
var hastCssPropertyMap = {
  align: 'text-align',
  valign: 'vertical-align',
  height: 'height',
  width: 'width'
};

module.exports = function tableCellStyle(node) {
  visit(node, 'element', visitor);
  return node;
};

function visitor(node) {
  if (node.tagName !== 'tr' && node.tagName !== 'td' && node.tagName !== 'th') {
    return;
  }

  var hastName;
  var cssName;
  for (hastName in hastCssPropertyMap) {
    if (
      !hasOwnProperty.call(hastCssPropertyMap, hastName) ||
      node.properties[hastName] === undefined
    ) {
      continue;
    }
    cssName = hastCssPropertyMap[hastName];
    appendStyle(node, cssName, node.properties[hastName]);
    delete node.properties[hastName];
  }
}

function appendStyle(node, property, value) {
  var prevStyle = (node.properties.style || '').trim();
  if (prevStyle && !/;\s*/.test(prevStyle)) {
    prevStyle += ';';
  }
  if (prevStyle) {
    prevStyle += ' ';
  }
  var nextStyle = prevStyle + property + ': ' + value + ';';
  node.properties.style = nextStyle;
}


/***/ }),

/***/ "./node_modules/algoliasearch/dist/algoliasearch-lite.esm.browser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/algoliasearch/dist/algoliasearch-lite.esm.browser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createBrowserLocalStorageCache(options) {
    const namespaceKey = `algoliasearch-client-js-${options.key}`;
    // eslint-disable-next-line functional/no-let
    let storage;
    const getStorage = () => {
        if (storage === undefined) {
            storage = options.localStorage || window.localStorage;
        }
        return storage;
    };
    const getNamespace = () => {
        return JSON.parse(getStorage().getItem(namespaceKey) || '{}');
    };
    return {
        get(key, defaultValue, events = {
            miss: () => Promise.resolve(),
        }) {
            return Promise.resolve()
                .then(() => {
                const keyAsString = JSON.stringify(key);
                const value = getNamespace()[keyAsString];
                return Promise.all([value || defaultValue(), value !== undefined]);
            })
                .then(([value, exists]) => {
                return Promise.all([value, exists || events.miss(value)]);
            })
                .then(([value]) => value);
        },
        set(key, value) {
            return Promise.resolve().then(() => {
                const namespace = getNamespace();
                // eslint-disable-next-line functional/immutable-data
                namespace[JSON.stringify(key)] = value;
                getStorage().setItem(namespaceKey, JSON.stringify(namespace));
                return value;
            });
        },
        delete(key) {
            return Promise.resolve().then(() => {
                const namespace = getNamespace();
                // eslint-disable-next-line functional/immutable-data
                delete namespace[JSON.stringify(key)];
                getStorage().setItem(namespaceKey, JSON.stringify(namespace));
            });
        },
        clear() {
            return Promise.resolve().then(() => {
                getStorage().removeItem(namespaceKey);
            });
        },
    };
}

// @todo Add logger on options to debug when caches go wrong.
function createFallbackableCache(options) {
    const caches = [...options.caches];
    const current = caches.shift(); // eslint-disable-line functional/immutable-data
    if (current === undefined) {
        return createNullCache();
    }
    return {
        get(key, defaultValue, events = {
            miss: () => Promise.resolve(),
        }) {
            return current.get(key, defaultValue, events).catch(() => {
                return createFallbackableCache({ caches }).get(key, defaultValue, events);
            });
        },
        set(key, value) {
            return current.set(key, value).catch(() => {
                return createFallbackableCache({ caches }).set(key, value);
            });
        },
        delete(key) {
            return current.delete(key).catch(() => {
                return createFallbackableCache({ caches }).delete(key);
            });
        },
        clear() {
            return current.clear().catch(() => {
                return createFallbackableCache({ caches }).clear();
            });
        },
    };
}

function createNullCache() {
    return {
        get(_key, defaultValue, events = {
            miss: () => Promise.resolve(),
        }) {
            const value = defaultValue();
            return value
                .then(result => Promise.all([result, events.miss(result)]))
                .then(([result]) => result);
        },
        set(_key, value) {
            return Promise.resolve(value);
        },
        delete(_key) {
            return Promise.resolve();
        },
        clear() {
            return Promise.resolve();
        },
    };
}

function createInMemoryCache(options = { serializable: true }) {
    // eslint-disable-next-line functional/no-let
    let cache = {};
    return {
        get(key, defaultValue, events = {
            miss: () => Promise.resolve(),
        }) {
            const keyAsString = JSON.stringify(key);
            if (keyAsString in cache) {
                return Promise.resolve(options.serializable ? JSON.parse(cache[keyAsString]) : cache[keyAsString]);
            }
            const promise = defaultValue();
            const miss = (events && events.miss) || (() => Promise.resolve());
            return promise.then((value) => miss(value)).then(() => promise);
        },
        set(key, value) {
            // eslint-disable-next-line functional/immutable-data
            cache[JSON.stringify(key)] = options.serializable ? JSON.stringify(value) : value;
            return Promise.resolve(value);
        },
        delete(key) {
            // eslint-disable-next-line functional/immutable-data
            delete cache[JSON.stringify(key)];
            return Promise.resolve();
        },
        clear() {
            cache = {};
            return Promise.resolve();
        },
    };
}

function createAuth(authMode, appId, apiKey) {
    const credentials = {
        'x-algolia-api-key': apiKey,
        'x-algolia-application-id': appId,
    };
    return {
        headers() {
            return authMode === AuthMode.WithinHeaders ? credentials : {};
        },
        queryParameters() {
            return authMode === AuthMode.WithinQueryParameters ? credentials : {};
        },
    };
}

// eslint-disable-next-line functional/prefer-readonly-type
function shuffle(array) {
    let c = array.length - 1; // eslint-disable-line functional/no-let
    // eslint-disable-next-line functional/no-loop-statement
    for (c; c > 0; c--) {
        const b = Math.floor(Math.random() * (c + 1));
        const a = array[c];
        array[c] = array[b]; // eslint-disable-line functional/immutable-data, no-param-reassign
        array[b] = a; // eslint-disable-line functional/immutable-data, no-param-reassign
    }
    return array;
}
function addMethods(base, methods) {
    if (!methods) {
        return base;
    }
    Object.keys(methods).forEach(key => {
        // eslint-disable-next-line functional/immutable-data, no-param-reassign
        base[key] = methods[key](base);
    });
    return base;
}
function encode(format, ...args) {
    // eslint-disable-next-line functional/no-let
    let i = 0;
    return format.replace(/%s/g, () => encodeURIComponent(args[i++]));
}

const version = '4.14.2';

const AuthMode = {
    /**
     * If auth credentials should be in query parameters.
     */
    WithinQueryParameters: 0,
    /**
     * If auth credentials should be in headers.
     */
    WithinHeaders: 1,
};

function createMappedRequestOptions(requestOptions, timeout) {
    const options = requestOptions || {};
    const data = options.data || {};
    Object.keys(options).forEach(key => {
        if (['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(key) === -1) {
            data[key] = options[key]; // eslint-disable-line functional/immutable-data
        }
    });
    return {
        data: Object.entries(data).length > 0 ? data : undefined,
        timeout: options.timeout || timeout,
        headers: options.headers || {},
        queryParameters: options.queryParameters || {},
        cacheable: options.cacheable,
    };
}

const CallEnum = {
    /**
     * If the host is read only.
     */
    Read: 1,
    /**
     * If the host is write only.
     */
    Write: 2,
    /**
     * If the host is both read and write.
     */
    Any: 3,
};

const HostStatusEnum = {
    Up: 1,
    Down: 2,
    Timeouted: 3,
};

// By default, API Clients at Algolia have expiration delay
// of 5 mins. In the JavaScript client, we have 2 mins.
const EXPIRATION_DELAY = 2 * 60 * 1000;
function createStatefulHost(host, status = HostStatusEnum.Up) {
    return {
        ...host,
        status,
        lastUpdate: Date.now(),
    };
}
function isStatefulHostUp(host) {
    return host.status === HostStatusEnum.Up || Date.now() - host.lastUpdate > EXPIRATION_DELAY;
}
function isStatefulHostTimeouted(host) {
    return (host.status === HostStatusEnum.Timeouted && Date.now() - host.lastUpdate <= EXPIRATION_DELAY);
}

function createStatelessHost(options) {
    if (typeof options === 'string') {
        return {
            protocol: 'https',
            url: options,
            accept: CallEnum.Any,
        };
    }
    return {
        protocol: options.protocol || 'https',
        url: options.url,
        accept: options.accept || CallEnum.Any,
    };
}

const MethodEnum = {
    Delete: 'DELETE',
    Get: 'GET',
    Post: 'POST',
    Put: 'PUT',
};

function createRetryableOptions(hostsCache, statelessHosts) {
    return Promise.all(statelessHosts.map(statelessHost => {
        return hostsCache.get(statelessHost, () => {
            return Promise.resolve(createStatefulHost(statelessHost));
        });
    })).then(statefulHosts => {
        const hostsUp = statefulHosts.filter(host => isStatefulHostUp(host));
        const hostsTimeouted = statefulHosts.filter(host => isStatefulHostTimeouted(host));
        /**
         * Note, we put the hosts that previously timeouted on the end of the list.
         */
        const hostsAvailable = [...hostsUp, ...hostsTimeouted];
        const statelessHostsAvailable = hostsAvailable.length > 0
            ? hostsAvailable.map(host => createStatelessHost(host))
            : statelessHosts;
        return {
            getTimeout(timeoutsCount, baseTimeout) {
                /**
                 * Imagine that you have 4 hosts, if timeouts will increase
                 * on the following way: 1 (timeouted) > 4 (timeouted) > 5 (200)
                 *
                 * Note that, the very next request, we start from the previous timeout
                 *
                 *  5 (timeouted) > 6 (timeouted) > 7 ...
                 *
                 * This strategy may need to be reviewed, but is the strategy on the our
                 * current v3 version.
                 */
                const timeoutMultiplier = hostsTimeouted.length === 0 && timeoutsCount === 0
                    ? 1
                    : hostsTimeouted.length + 3 + timeoutsCount;
                return timeoutMultiplier * baseTimeout;
            },
            statelessHosts: statelessHostsAvailable,
        };
    });
}

const isNetworkError = ({ isTimedOut, status }) => {
    return !isTimedOut && ~~status === 0;
};
const isRetryable = (response) => {
    const status = response.status;
    const isTimedOut = response.isTimedOut;
    return (isTimedOut || isNetworkError(response) || (~~(status / 100) !== 2 && ~~(status / 100) !== 4));
};
const isSuccess = ({ status }) => {
    return ~~(status / 100) === 2;
};
const retryDecision = (response, outcomes) => {
    if (isRetryable(response)) {
        return outcomes.onRetry(response);
    }
    if (isSuccess(response)) {
        return outcomes.onSuccess(response);
    }
    return outcomes.onFail(response);
};

function retryableRequest(transporter, statelessHosts, request, requestOptions) {
    const stackTrace = []; // eslint-disable-line functional/prefer-readonly-type
    /**
     * First we prepare the payload that do not depend from hosts.
     */
    const data = serializeData(request, requestOptions);
    const headers = serializeHeaders(transporter, requestOptions);
    const method = request.method;
    // On `GET`, the data is proxied to query parameters.
    const dataQueryParameters = request.method !== MethodEnum.Get
        ? {}
        : {
            ...request.data,
            ...requestOptions.data,
        };
    const queryParameters = {
        'x-algolia-agent': transporter.userAgent.value,
        ...transporter.queryParameters,
        ...dataQueryParameters,
        ...requestOptions.queryParameters,
    };
    let timeoutsCount = 0; // eslint-disable-line functional/no-let
    const retry = (hosts, // eslint-disable-line functional/prefer-readonly-type
    getTimeout) => {
        /**
         * We iterate on each host, until there is no host left.
         */
        const host = hosts.pop(); // eslint-disable-line functional/immutable-data
        if (host === undefined) {
            throw createRetryError(stackTraceWithoutCredentials(stackTrace));
        }
        const payload = {
            data,
            headers,
            method,
            url: serializeUrl(host, request.path, queryParameters),
            connectTimeout: getTimeout(timeoutsCount, transporter.timeouts.connect),
            responseTimeout: getTimeout(timeoutsCount, requestOptions.timeout),
        };
        /**
         * The stackFrame is pushed to the stackTrace so we
         * can have information about onRetry and onFailure
         * decisions.
         */
        const pushToStackTrace = (response) => {
            const stackFrame = {
                request: payload,
                response,
                host,
                triesLeft: hosts.length,
            };
            // eslint-disable-next-line functional/immutable-data
            stackTrace.push(stackFrame);
            return stackFrame;
        };
        const decisions = {
            onSuccess: response => deserializeSuccess(response),
            onRetry(response) {
                const stackFrame = pushToStackTrace(response);
                /**
                 * If response is a timeout, we increaset the number of
                 * timeouts so we can increase the timeout later.
                 */
                if (response.isTimedOut) {
                    timeoutsCount++;
                }
                return Promise.all([
                    /**
                     * Failures are individually send the logger, allowing
                     * the end user to debug / store stack frames even
                     * when a retry error does not happen.
                     */
                    transporter.logger.info('Retryable failure', stackFrameWithoutCredentials(stackFrame)),
                    /**
                     * We also store the state of the host in failure cases. If the host, is
                     * down it will remain down for the next 2 minutes. In a timeout situation,
                     * this host will be added end of the list of hosts on the next request.
                     */
                    transporter.hostsCache.set(host, createStatefulHost(host, response.isTimedOut ? HostStatusEnum.Timeouted : HostStatusEnum.Down)),
                ]).then(() => retry(hosts, getTimeout));
            },
            onFail(response) {
                pushToStackTrace(response);
                throw deserializeFailure(response, stackTraceWithoutCredentials(stackTrace));
            },
        };
        return transporter.requester.send(payload).then(response => {
            return retryDecision(response, decisions);
        });
    };
    /**
     * Finally, for each retryable host perform request until we got a non
     * retryable response. Some notes here:
     *
     * 1. The reverse here is applied so we can apply a `pop` later on => more performant.
     * 2. We also get from the retryable options a timeout multiplier that is tailored
     * for the current context.
     */
    return createRetryableOptions(transporter.hostsCache, statelessHosts).then(options => {
        return retry([...options.statelessHosts].reverse(), options.getTimeout);
    });
}

function createTransporter(options) {
    const { hostsCache, logger, requester, requestsCache, responsesCache, timeouts, userAgent, hosts, queryParameters, headers, } = options;
    const transporter = {
        hostsCache,
        logger,
        requester,
        requestsCache,
        responsesCache,
        timeouts,
        userAgent,
        headers,
        queryParameters,
        hosts: hosts.map(host => createStatelessHost(host)),
        read(request, requestOptions) {
            /**
             * First, we compute the user request options. Now, keep in mind,
             * that using request options the user is able to modified the intire
             * payload of the request. Such as headers, query parameters, and others.
             */
            const mappedRequestOptions = createMappedRequestOptions(requestOptions, transporter.timeouts.read);
            const createRetryableRequest = () => {
                /**
                 * Then, we prepare a function factory that contains the construction of
                 * the retryable request. At this point, we may *not* perform the actual
                 * request. But we want to have the function factory ready.
                 */
                return retryableRequest(transporter, transporter.hosts.filter(host => (host.accept & CallEnum.Read) !== 0), request, mappedRequestOptions);
            };
            /**
             * Once we have the function factory ready, we need to determine of the
             * request is "cacheable" - should be cached. Note that, once again,
             * the user can force this option.
             */
            const cacheable = mappedRequestOptions.cacheable !== undefined
                ? mappedRequestOptions.cacheable
                : request.cacheable;
            /**
             * If is not "cacheable", we immediatly trigger the retryable request, no
             * need to check cache implementations.
             */
            if (cacheable !== true) {
                return createRetryableRequest();
            }
            /**
             * If the request is "cacheable", we need to first compute the key to ask
             * the cache implementations if this request is on progress or if the
             * response already exists on the cache.
             */
            const key = {
                request,
                mappedRequestOptions,
                transporter: {
                    queryParameters: transporter.queryParameters,
                    headers: transporter.headers,
                },
            };
            /**
             * With the computed key, we first ask the responses cache
             * implemention if this request was been resolved before.
             */
            return transporter.responsesCache.get(key, () => {
                /**
                 * If the request has never resolved before, we actually ask if there
                 * is a current request with the same key on progress.
                 */
                return transporter.requestsCache.get(key, () => {
                    return (transporter.requestsCache
                        /**
                         * Finally, if there is no request in progress with the same key,
                         * this `createRetryableRequest()` will actually trigger the
                         * retryable request.
                         */
                        .set(key, createRetryableRequest())
                        .then(response => Promise.all([transporter.requestsCache.delete(key), response]), err => Promise.all([transporter.requestsCache.delete(key), Promise.reject(err)]))
                        .then(([_, response]) => response));
                });
            }, {
                /**
                 * Of course, once we get this response back from the server, we
                 * tell response cache to actually store the received response
                 * to be used later.
                 */
                miss: response => transporter.responsesCache.set(key, response),
            });
        },
        write(request, requestOptions) {
            /**
             * On write requests, no cache mechanisms are applied, and we
             * proxy the request immediately to the requester.
             */
            return retryableRequest(transporter, transporter.hosts.filter(host => (host.accept & CallEnum.Write) !== 0), request, createMappedRequestOptions(requestOptions, transporter.timeouts.write));
        },
    };
    return transporter;
}

function createUserAgent(version) {
    const userAgent = {
        value: `Algolia for JavaScript (${version})`,
        add(options) {
            const addedUserAgent = `; ${options.segment}${options.version !== undefined ? ` (${options.version})` : ''}`;
            if (userAgent.value.indexOf(addedUserAgent) === -1) {
                // eslint-disable-next-line functional/immutable-data
                userAgent.value = `${userAgent.value}${addedUserAgent}`;
            }
            return userAgent;
        },
    };
    return userAgent;
}

function deserializeSuccess(response) {
    // eslint-disable-next-line functional/no-try-statement
    try {
        return JSON.parse(response.content);
    }
    catch (e) {
        throw createDeserializationError(e.message, response);
    }
}
function deserializeFailure({ content, status }, stackFrame) {
    // eslint-disable-next-line functional/no-let
    let message = content;
    // eslint-disable-next-line functional/no-try-statement
    try {
        message = JSON.parse(content).message;
    }
    catch (e) {
        // ..
    }
    return createApiError(message, status, stackFrame);
}

function serializeUrl(host, path, queryParameters) {
    const queryParametersAsString = serializeQueryParameters(queryParameters);
    // eslint-disable-next-line functional/no-let
    let url = `${host.protocol}://${host.url}/${path.charAt(0) === '/' ? path.substr(1) : path}`;
    if (queryParametersAsString.length) {
        url += `?${queryParametersAsString}`;
    }
    return url;
}
function serializeQueryParameters(parameters) {
    const isObjectOrArray = (value) => Object.prototype.toString.call(value) === '[object Object]' ||
        Object.prototype.toString.call(value) === '[object Array]';
    return Object.keys(parameters)
        .map(key => encode('%s=%s', key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]))
        .join('&');
}
function serializeData(request, requestOptions) {
    if (request.method === MethodEnum.Get ||
        (request.data === undefined && requestOptions.data === undefined)) {
        return undefined;
    }
    const data = Array.isArray(request.data)
        ? request.data
        : { ...request.data, ...requestOptions.data };
    return JSON.stringify(data);
}
function serializeHeaders(transporter, requestOptions) {
    const headers = {
        ...transporter.headers,
        ...requestOptions.headers,
    };
    const serializedHeaders = {};
    Object.keys(headers).forEach(header => {
        const value = headers[header];
        // @ts-ignore
        // eslint-disable-next-line functional/immutable-data
        serializedHeaders[header.toLowerCase()] = value;
    });
    return serializedHeaders;
}

function stackTraceWithoutCredentials(stackTrace) {
    return stackTrace.map(stackFrame => stackFrameWithoutCredentials(stackFrame));
}
function stackFrameWithoutCredentials(stackFrame) {
    const modifiedHeaders = stackFrame.request.headers['x-algolia-api-key']
        ? { 'x-algolia-api-key': '*****' }
        : {};
    return {
        ...stackFrame,
        request: {
            ...stackFrame.request,
            headers: {
                ...stackFrame.request.headers,
                ...modifiedHeaders,
            },
        },
    };
}

function createApiError(message, status, transporterStackTrace) {
    return {
        name: 'ApiError',
        message,
        status,
        transporterStackTrace,
    };
}

function createDeserializationError(message, response) {
    return {
        name: 'DeserializationError',
        message,
        response,
    };
}

function createRetryError(transporterStackTrace) {
    return {
        name: 'RetryError',
        message: 'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
        transporterStackTrace,
    };
}

const createSearchClient = options => {
    const appId = options.appId;
    const auth = createAuth(options.authMode !== undefined ? options.authMode : AuthMode.WithinHeaders, appId, options.apiKey);
    const transporter = createTransporter({
        hosts: [
            { url: `${appId}-dsn.algolia.net`, accept: CallEnum.Read },
            { url: `${appId}.algolia.net`, accept: CallEnum.Write },
        ].concat(shuffle([
            { url: `${appId}-1.algolianet.com` },
            { url: `${appId}-2.algolianet.com` },
            { url: `${appId}-3.algolianet.com` },
        ])),
        ...options,
        headers: {
            ...auth.headers(),
            ...{ 'content-type': 'application/x-www-form-urlencoded' },
            ...options.headers,
        },
        queryParameters: {
            ...auth.queryParameters(),
            ...options.queryParameters,
        },
    });
    const base = {
        transporter,
        appId,
        addAlgoliaAgent(segment, version) {
            transporter.userAgent.add({ segment, version });
        },
        clearCache() {
            return Promise.all([
                transporter.requestsCache.clear(),
                transporter.responsesCache.clear(),
            ]).then(() => undefined);
        },
    };
    return addMethods(base, options.methods);
};

const customRequest = (base) => {
    return (request, requestOptions) => {
        if (request.method === MethodEnum.Get) {
            return base.transporter.read(request, requestOptions);
        }
        return base.transporter.write(request, requestOptions);
    };
};

const initIndex = (base) => {
    return (indexName, options = {}) => {
        const searchIndex = {
            transporter: base.transporter,
            appId: base.appId,
            indexName,
        };
        return addMethods(searchIndex, options.methods);
    };
};

const multipleQueries = (base) => {
    return (queries, requestOptions) => {
        const requests = queries.map(query => {
            return {
                ...query,
                params: serializeQueryParameters(query.params || {}),
            };
        });
        return base.transporter.read({
            method: MethodEnum.Post,
            path: '1/indexes/*/queries',
            data: {
                requests,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const multipleSearchForFacetValues = (base) => {
    return (queries, requestOptions) => {
        return Promise.all(queries.map(query => {
            const { facetName, facetQuery, ...params } = query.params;
            return initIndex(base)(query.indexName, {
                methods: { searchForFacetValues },
            }).searchForFacetValues(facetName, facetQuery, {
                ...requestOptions,
                ...params,
            });
        }));
    };
};

const findAnswers = (base) => {
    return (query, queryLanguages, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/answers/%s/prediction', base.indexName),
            data: {
                query,
                queryLanguages,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const search = (base) => {
    return (query, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/query', base.indexName),
            data: {
                query,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const searchForFacetValues = (base) => {
    return (facetName, facetQuery, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/facets/%s/query', base.indexName, facetName),
            data: {
                facetQuery,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const LogLevelEnum = {
    Debug: 1,
    Info: 2,
    Error: 3,
};

/* eslint no-console: 0 */
function createConsoleLogger(logLevel) {
    return {
        debug(message, args) {
            if (LogLevelEnum.Debug >= logLevel) {
                console.debug(message, args);
            }
            return Promise.resolve();
        },
        info(message, args) {
            if (LogLevelEnum.Info >= logLevel) {
                console.info(message, args);
            }
            return Promise.resolve();
        },
        error(message, args) {
            console.error(message, args);
            return Promise.resolve();
        },
    };
}

function createBrowserXhrRequester() {
    return {
        send(request) {
            return new Promise((resolve) => {
                const baseRequester = new XMLHttpRequest();
                baseRequester.open(request.method, request.url, true);
                Object.keys(request.headers).forEach(key => baseRequester.setRequestHeader(key, request.headers[key]));
                const createTimeout = (timeout, content) => {
                    return setTimeout(() => {
                        baseRequester.abort();
                        resolve({
                            status: 0,
                            content,
                            isTimedOut: true,
                        });
                    }, timeout * 1000);
                };
                const connectTimeout = createTimeout(request.connectTimeout, 'Connection timeout');
                // eslint-disable-next-line functional/no-let
                let responseTimeout;
                // eslint-disable-next-line functional/immutable-data
                baseRequester.onreadystatechange = () => {
                    if (baseRequester.readyState > baseRequester.OPENED && responseTimeout === undefined) {
                        clearTimeout(connectTimeout);
                        responseTimeout = createTimeout(request.responseTimeout, 'Socket timeout');
                    }
                };
                // eslint-disable-next-line functional/immutable-data
                baseRequester.onerror = () => {
                    // istanbul ignore next
                    if (baseRequester.status === 0) {
                        clearTimeout(connectTimeout);
                        clearTimeout(responseTimeout);
                        resolve({
                            content: baseRequester.responseText || 'Network request failed',
                            status: baseRequester.status,
                            isTimedOut: false,
                        });
                    }
                };
                //  eslint-disable-next-line functional/immutable-data
                baseRequester.onload = () => {
                    clearTimeout(connectTimeout);
                    clearTimeout(responseTimeout);
                    resolve({
                        content: baseRequester.responseText,
                        status: baseRequester.status,
                        isTimedOut: false,
                    });
                };
                baseRequester.send(request.data);
            });
        },
    };
}

function algoliasearch(appId, apiKey, options) {
    const commonOptions = {
        appId,
        apiKey,
        timeouts: {
            connect: 1,
            read: 2,
            write: 30,
        },
        requester: createBrowserXhrRequester(),
        logger: createConsoleLogger(LogLevelEnum.Error),
        responsesCache: createInMemoryCache(),
        requestsCache: createInMemoryCache({ serializable: false }),
        hostsCache: createFallbackableCache({
            caches: [
                createBrowserLocalStorageCache({ key: `${version}-${appId}` }),
                createInMemoryCache(),
            ],
        }),
        userAgent: createUserAgent(version).add({
            segment: 'Browser',
            version: 'lite',
        }),
        authMode: AuthMode.WithinQueryParameters,
    };
    return createSearchClient({
        ...commonOptions,
        ...options,
        methods: {
            search: multipleQueries,
            searchForFacetValues: multipleSearchForFacetValues,
            multipleQueries,
            multipleSearchForFacetValues,
            customRequest,
            initIndex: base => (indexName) => {
                return initIndex(base)(indexName, {
                    methods: { search, searchForFacetValues, findAnswers },
                });
            },
        },
    });
}
// eslint-disable-next-line functional/immutable-data
algoliasearch.version = version;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (algoliasearch);


/***/ }),

/***/ "./node_modules/bail/index.js":
/*!************************************!*\
  !*** ./node_modules/bail/index.js ***!
  \************************************/
/***/ ((module) => {

"use strict";


module.exports = bail

function bail(err) {
  if (err) {
    throw err
  }
}


/***/ }),

/***/ "./node_modules/ccount/index.js":
/*!**************************************!*\
  !*** ./node_modules/ccount/index.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


module.exports = ccount

function ccount(source, character) {
  var value = String(source)
  var count = 0
  var index

  if (typeof character !== 'string') {
    throw new Error('Expected character')
  }

  index = value.indexOf(character)

  while (index !== -1) {
    count++
    index = value.indexOf(character, index + character.length)
  }

  return count
}


/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.parse = parse
exports.stringify = stringify

var comma = ','
var space = ' '
var empty = ''

// Parse comma-separated tokens to an array.
function parse(value) {
  var values = []
  var input = String(value || empty)
  var index = input.indexOf(comma)
  var lastIndex = 0
  var end = false
  var val

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    val = input.slice(lastIndex, index).trim()

    if (val || !end) {
      values.push(val)
    }

    lastIndex = index + 1
    index = input.indexOf(comma, lastIndex)
  }

  return values
}

// Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.
function stringify(values, options) {
  var settings = options || {}
  var left = settings.padLeft === false ? empty : space
  var right = settings.padRight ? space : empty

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === empty) {
    values = values.concat(empty)
  }

  return values.join(right + comma + left).trim()
}


/***/ }),

/***/ "./node_modules/escape-string-regexp/index.js":
/*!****************************************************!*\
  !*** ./node_modules/escape-string-regexp/index.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ "./node_modules/hast-to-hyperscript/index.js":
/*!***************************************************!*\
  !*** ./node_modules/hast-to-hyperscript/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var html = __webpack_require__(/*! property-information/html */ "./node_modules/property-information/html.js")
var svg = __webpack_require__(/*! property-information/svg */ "./node_modules/property-information/svg.js")
var find = __webpack_require__(/*! property-information/find */ "./node_modules/property-information/find.js")
var hastToReact = __webpack_require__(/*! property-information/hast-to-react.json */ "./node_modules/property-information/hast-to-react.json")
var spaces = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js")
var commas = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js")
var style = __webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/index.js")
var ns = __webpack_require__(/*! web-namespaces */ "./node_modules/web-namespaces/index.json")
var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")

var root = convert('root')
var element = convert('element')
var text = convert('text')

module.exports = wrapper

function wrapper(h, node, options) {
  var settings = options || {}
  var r = react(h)
  var v = vue(h)
  var vd = vdom(h)
  var prefix

  if (typeof h !== 'function') {
    throw new Error('h is not a function')
  }

  if (typeof settings === 'string' || typeof settings === 'boolean') {
    prefix = settings
    settings = {}
  } else {
    prefix = settings.prefix
  }

  if (root(node)) {
    node =
      node.children.length === 1 && element(node.children[0])
        ? node.children[0]
        : {
            type: 'element',
            tagName: 'div',
            properties: {},
            children: node.children
          }
  } else if (!element(node)) {
    throw new Error(
      'Expected root or element, not `' + ((node && node.type) || node) + '`'
    )
  }

  return toH(h, node, {
    schema: settings.space === 'svg' ? svg : html,
    prefix: prefix == null ? (r || v || vd ? 'h-' : null) : prefix,
    key: 0,
    react: r,
    vue: v,
    vdom: vd,
    hyperscript: hyperscript(h)
  })
}

// Transform a hast node through a hyperscript interface to *anything*!
function toH(h, node, ctx) {
  var parentSchema = ctx.schema
  var schema = parentSchema
  var name = node.tagName
  var attributes = {}
  var nodes = []
  var index = -1
  var key
  var value

  if (parentSchema.space === 'html' && name.toLowerCase() === 'svg') {
    schema = svg
    ctx.schema = schema
  }

  for (key in node.properties) {
    addAttribute(attributes, key, node.properties[key], ctx, name)
  }

  if (ctx.vdom) {
    if (schema.space === 'html') {
      name = name.toUpperCase()
    } else {
      attributes.namespace = ns[schema.space]
    }
  }

  if (ctx.prefix) {
    ctx.key++
    attributes.key = ctx.prefix + ctx.key
  }

  if (node.children) {
    while (++index < node.children.length) {
      value = node.children[index]

      if (element(value)) {
        nodes.push(toH(h, value, ctx))
      } else if (text(value)) {
        nodes.push(value.value)
      }
    }
  }

  // Restore parent schema.
  ctx.schema = parentSchema

  // Ensure no React warnings are triggered for void elements having children
  // passed in.
  return nodes.length
    ? h.call(node, name, attributes, nodes)
    : h.call(node, name, attributes)
}

function addAttribute(props, prop, value, ctx, name) {
  var info = find(ctx.schema, prop)
  var subprop

  // Ignore nullish and `NaN` values.
  // Ignore `false` and falsey known booleans for hyperlike DSLs.
  if (
    value == null ||
    value !== value ||
    (value === false && (ctx.vue || ctx.vdom || ctx.hyperscript)) ||
    (!value && info.boolean && (ctx.vue || ctx.vdom || ctx.hyperscript))
  ) {
    return
  }

  if (value && typeof value === 'object' && 'length' in value) {
    // Accept `array`.
    // Most props are space-separated.
    value = (info.commaSeparated ? commas : spaces).stringify(value)
  }

  // Treat `true` and truthy known booleans.
  if (info.boolean && ctx.hyperscript) {
    value = ''
  }

  // VDOM, Vue, and React accept `style` as object.
  if (
    info.property === 'style' &&
    typeof value === 'string' &&
    (ctx.react || ctx.vue || ctx.vdom)
  ) {
    value = parseStyle(value, name)
  }

  if (ctx.vue) {
    if (info.property !== 'style') subprop = 'attrs'
  } else if (!info.mustUseProperty) {
    if (ctx.vdom) {
      if (info.property !== 'style') subprop = 'attributes'
    } else if (ctx.hyperscript) {
      subprop = 'attrs'
    }
  }

  if (subprop) {
    if (!props[subprop]) props[subprop] = {}
    props[subprop][info.attribute] = value
  } else if (info.space && ctx.react) {
    props[hastToReact[info.property] || info.property] = value
  } else {
    props[info.attribute] = value
  }
}

// Check if `h` is `react.createElement`.
function react(h) {
  var node = h && h('div')
  return Boolean(
    node && ('_owner' in node || '_store' in node) && node.key == null
  )
}

// Check if `h` is `hyperscript`.
function hyperscript(h) {
  return Boolean(h && h.context && h.cleanup)
}

// Check if `h` is `virtual-dom/h`.
function vdom(h) {
  return h && h('div').type === 'VirtualNode'
}

function vue(h) {
  var node = h && h('div')
  return Boolean(node && node.context && node.context._isVue)
}

function parseStyle(value, tagName) {
  var result = {}

  try {
    style(value, iterator)
  } catch (error) {
    error.message =
      tagName + '[style]' + error.message.slice('undefined'.length)
    throw error
  }

  return result

  function iterator(name, value) {
    if (name.slice(0, 4) === '-ms-') name = 'ms-' + name.slice(4)
    result[name.replace(/-([a-z])/g, styleReplacer)] = value
  }
}

function styleReplacer($0, $1) {
  return $1.toUpperCase()
}


/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/***/ ((module) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/***/ ((module) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
};


/***/ }),

/***/ "./node_modules/markdown-table/index.js":
/*!**********************************************!*\
  !*** ./node_modules/markdown-table/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

module.exports = markdownTable

var trailingWhitespace = / +$/

// Characters.
var space = ' '
var lineFeed = '\n'
var dash = '-'
var colon = ':'
var verticalBar = '|'

var x = 0
var C = 67
var L = 76
var R = 82
var c = 99
var l = 108
var r = 114

// Create a table from a matrix of strings.
function markdownTable(table, options) {
  var settings = options || {}
  var padding = settings.padding !== false
  var start = settings.delimiterStart !== false
  var end = settings.delimiterEnd !== false
  var align = (settings.align || []).concat()
  var alignDelimiters = settings.alignDelimiters !== false
  var alignments = []
  var stringLength = settings.stringLength || defaultStringLength
  var rowIndex = -1
  var rowLength = table.length
  var cellMatrix = []
  var sizeMatrix = []
  var row = []
  var sizes = []
  var longestCellByColumn = []
  var mostCellsPerRow = 0
  var cells
  var columnIndex
  var columnLength
  var largest
  var size
  var cell
  var lines
  var line
  var before
  var after
  var code

  // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.
  while (++rowIndex < rowLength) {
    cells = table[rowIndex]
    columnIndex = -1
    columnLength = cells.length
    row = []
    sizes = []

    if (columnLength > mostCellsPerRow) {
      mostCellsPerRow = columnLength
    }

    while (++columnIndex < columnLength) {
      cell = serialize(cells[columnIndex])

      if (alignDelimiters === true) {
        size = stringLength(cell)
        sizes[columnIndex] = size

        largest = longestCellByColumn[columnIndex]

        if (largest === undefined || size > largest) {
          longestCellByColumn[columnIndex] = size
        }
      }

      row.push(cell)
    }

    cellMatrix[rowIndex] = row
    sizeMatrix[rowIndex] = sizes
  }

  // Figure out which alignments to use.
  columnIndex = -1
  columnLength = mostCellsPerRow

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < columnLength) {
      alignments[columnIndex] = toAlignment(align[columnIndex])
    }
  } else {
    code = toAlignment(align)

    while (++columnIndex < columnLength) {
      alignments[columnIndex] = code
    }
  }

  // Inject the alignment row.
  columnIndex = -1
  columnLength = mostCellsPerRow
  row = []
  sizes = []

  while (++columnIndex < columnLength) {
    code = alignments[columnIndex]
    before = ''
    after = ''

    if (code === l) {
      before = colon
    } else if (code === r) {
      after = colon
    } else if (code === c) {
      before = colon
      after = colon
    }

    // There *must* be at least one hyphen-minus in each alignment cell.
    size = alignDelimiters
      ? Math.max(
          1,
          longestCellByColumn[columnIndex] - before.length - after.length
        )
      : 1

    cell = before + repeat(dash, size) + after

    if (alignDelimiters === true) {
      size = before.length + size + after.length

      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size
      }

      sizes[columnIndex] = size
    }

    row[columnIndex] = cell
  }

  // Inject the alignment row.
  cellMatrix.splice(1, 0, row)
  sizeMatrix.splice(1, 0, sizes)

  rowIndex = -1
  rowLength = cellMatrix.length
  lines = []

  while (++rowIndex < rowLength) {
    row = cellMatrix[rowIndex]
    sizes = sizeMatrix[rowIndex]
    columnIndex = -1
    columnLength = mostCellsPerRow
    line = []

    while (++columnIndex < columnLength) {
      cell = row[columnIndex] || ''
      before = ''
      after = ''

      if (alignDelimiters === true) {
        size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0)
        code = alignments[columnIndex]

        if (code === r) {
          before = repeat(space, size)
        } else if (code === c) {
          if (size % 2 === 0) {
            before = repeat(space, size / 2)
            after = before
          } else {
            before = repeat(space, size / 2 + 0.5)
            after = repeat(space, size / 2 - 0.5)
          }
        } else {
          after = repeat(space, size)
        }
      }

      if (start === true && columnIndex === 0) {
        line.push(verticalBar)
      }

      if (
        padding === true &&
        // Don’t add the opening space if we’re not aligning and the cell is
        // empty: there will be a closing space.
        !(alignDelimiters === false && cell === '') &&
        (start === true || columnIndex !== 0)
      ) {
        line.push(space)
      }

      if (alignDelimiters === true) {
        line.push(before)
      }

      line.push(cell)

      if (alignDelimiters === true) {
        line.push(after)
      }

      if (padding === true) {
        line.push(space)
      }

      if (end === true || columnIndex !== columnLength - 1) {
        line.push(verticalBar)
      }
    }

    line = line.join('')

    if (end === false) {
      line = line.replace(trailingWhitespace, '')
    }

    lines.push(line)
  }

  return lines.join(lineFeed)
}

function serialize(value) {
  return value === null || value === undefined ? '' : String(value)
}

function defaultStringLength(value) {
  return value.length
}

function toAlignment(value) {
  var code = typeof value === 'string' ? value.charCodeAt(0) : x

  return code === L || code === l
    ? l
    : code === R || code === r
    ? r
    : code === C || code === c
    ? c
    : x
}


/***/ }),

/***/ "./node_modules/mdast-util-definitions/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-definitions/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js")

module.exports = getDefinitionFactory

var own = {}.hasOwnProperty

// Get a definition in `node` by `identifier`.
function getDefinitionFactory(node, options) {
  return getterFactory(gather(node, options))
}

// Gather all definitions in `node`
function gather(node) {
  var cache = {}

  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node')
  }

  visit(node, 'definition', ondefinition)

  return cache

  function ondefinition(definition) {
    var id = normalise(definition.identifier)
    if (!own.call(cache, id)) {
      cache[id] = definition
    }
  }
}

// Factory to get a node from the given definition-cache.
function getterFactory(cache) {
  return getter

  // Get a node from the bound definition-cache.
  function getter(identifier) {
    var id = identifier && normalise(identifier)
    return id && own.call(cache, id) ? cache[id] : null
  }
}

function normalise(identifier) {
  return identifier.toUpperCase()
}


/***/ }),

/***/ "./node_modules/mdast-util-find-and-replace/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = findAndReplace

var visit = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js")
var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")
var escape = __webpack_require__(/*! escape-string-regexp */ "./node_modules/escape-string-regexp/index.js")

var splice = [].splice

function findAndReplace(tree, find, replace, options) {
  var settings
  var schema

  if (typeof find === 'string' || (find && typeof find.exec === 'function')) {
    schema = [[find, replace]]
  } else {
    schema = find
    options = replace
  }

  settings = options || {}

  search(tree, settings, handlerFactory(toPairs(schema)))

  return tree

  function handlerFactory(pairs) {
    var pair = pairs[0]

    return handler

    function handler(node, parent) {
      var find = pair[0]
      var replace = pair[1]
      var nodes = []
      var start = 0
      var index = parent.children.indexOf(node)
      var position
      var match
      var subhandler
      var value

      find.lastIndex = 0

      match = find.exec(node.value)

      while (match) {
        position = match.index
        value = replace.apply(
          null,
          [].concat(match, {index: match.index, input: match.input})
        )

        if (value !== false) {
          if (start !== position) {
            nodes.push({type: 'text', value: node.value.slice(start, position)})
          }

          if (typeof value === 'string' && value.length > 0) {
            value = {type: 'text', value: value}
          }

          if (value) {
            nodes = [].concat(nodes, value)
          }

          start = position + match[0].length
        }

        if (!find.global) {
          break
        }

        match = find.exec(node.value)
      }

      if (position === undefined) {
        nodes = [node]
        index--
      } else {
        if (start < node.value.length) {
          nodes.push({type: 'text', value: node.value.slice(start)})
        }

        nodes.unshift(index, 1)
        splice.apply(parent.children, nodes)
      }

      if (pairs.length > 1) {
        subhandler = handlerFactory(pairs.slice(1))
        position = -1

        while (++position < nodes.length) {
          node = nodes[position]

          if (node.type === 'text') {
            subhandler(node, parent)
          } else {
            search(node, settings, subhandler)
          }
        }
      }

      return index + nodes.length + 1
    }
  }
}

function search(tree, settings, handler) {
  var ignored = convert(settings.ignore || [])
  var result = []

  visit(tree, 'text', visitor)

  return result

  function visitor(node, parents) {
    var index = -1
    var parent
    var grandparent

    while (++index < parents.length) {
      parent = parents[index]

      if (
        ignored(
          parent,
          grandparent ? grandparent.children.indexOf(parent) : undefined,
          grandparent
        )
      ) {
        return
      }

      grandparent = parent
    }

    return handler(node, grandparent)
  }
}

function toPairs(schema) {
  var result = []
  var key
  var index

  if (typeof schema !== 'object') {
    throw new Error('Expected array or object as schema')
  }

  if ('length' in schema) {
    index = -1

    while (++index < schema.length) {
      result.push([
        toExpression(schema[index][0]),
        toFunction(schema[index][1])
      ])
    }
  } else {
    for (key in schema) {
      result.push([toExpression(key), toFunction(schema[key])])
    }
  }

  return result
}

function toExpression(find) {
  return typeof find === 'string' ? new RegExp(escape(find), 'g') : find
}

function toFunction(replace) {
  return typeof replace === 'function' ? replace : returner

  function returner() {
    return replace
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-from-markdown/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/mdast-util-from-markdown/dist/index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = fromMarkdown

// These three are compiled away in the `dist/`

var toString = __webpack_require__(/*! mdast-util-to-string */ "./node_modules/mdast-util-to-string/index.js")
var assign = __webpack_require__(/*! micromark/dist/constant/assign */ "./node_modules/micromark/dist/constant/assign.js")
var own = __webpack_require__(/*! micromark/dist/constant/has-own-property */ "./node_modules/micromark/dist/constant/has-own-property.js")
var normalizeIdentifier = __webpack_require__(/*! micromark/dist/util/normalize-identifier */ "./node_modules/micromark/dist/util/normalize-identifier.js")
var safeFromInt = __webpack_require__(/*! micromark/dist/util/safe-from-int */ "./node_modules/micromark/dist/util/safe-from-int.js")
var parser = __webpack_require__(/*! micromark/dist/parse */ "./node_modules/micromark/dist/parse.js")
var preprocessor = __webpack_require__(/*! micromark/dist/preprocess */ "./node_modules/micromark/dist/preprocess.js")
var postprocess = __webpack_require__(/*! micromark/dist/postprocess */ "./node_modules/micromark/dist/postprocess.js")
var decode = __webpack_require__(/*! parse-entities/decode-entity */ "./node_modules/parse-entities/decode-entity.browser.js")
var stringifyPosition = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/index.js")

function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding
    encoding = undefined
  }

  return compiler(options)(
    postprocess(
      parser(options).document().write(preprocessor()(value, encoding, true))
    )
  )
}

// Note this compiler only understand complete buffering, not streaming.
function compiler(options) {
  var settings = options || {}
  var config = configure(
    {
      transforms: [],
      canContainEols: [
        'emphasis',
        'fragment',
        'heading',
        'paragraph',
        'strong'
      ],

      enter: {
        autolink: opener(link),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading),
        blockQuote: opener(blockQuote),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis),
        hardBreakEscape: opener(hardBreak),
        hardBreakTrailing: opener(hardBreak),
        htmlFlow: opener(html, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html, buffer),
        htmlTextData: onenterdata,
        image: opener(image),
        label: buffer,
        link: opener(link),
        listItem: opener(listItem),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list, onenterlistordered),
        listUnordered: opener(list),
        paragraph: opener(paragraph),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading),
        strong: opener(strong),
        thematicBreak: opener(thematicBreak)
      },

      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    },

    settings.mdastExtensions || []
  )

  var data = {}

  return compile

  function compile(events) {
    var tree = {type: 'root', children: []}
    var stack = [tree]
    var tokenStack = []
    var listStack = []
    var index = -1
    var handler
    var listStart

    var context = {
      stack: stack,
      tokenStack: tokenStack,
      config: config,
      enter: enter,
      exit: exit,
      buffer: buffer,
      resume: resume,
      setData: setData,
      getData: getData
    }

    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (
        events[index][1].type === 'listOrdered' ||
        events[index][1].type === 'listUnordered'
      ) {
        if (events[index][0] === 'enter') {
          listStack.push(index)
        } else {
          listStart = listStack.pop(index)
          index = prepareList(events, listStart, index)
        }
      }
    }

    index = -1

    while (++index < events.length) {
      handler = config[events[index][0]]

      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          assign({sliceSerialize: events[index][2].sliceSerialize}, context),
          events[index][1]
        )
      }
    }

    if (tokenStack.length) {
      throw new Error(
        'Cannot close document, a token (`' +
          tokenStack[tokenStack.length - 1].type +
          '`, ' +
          stringifyPosition({
            start: tokenStack[tokenStack.length - 1].start,
            end: tokenStack[tokenStack.length - 1].end
          }) +
          ') is still open'
      )
    }

    // Figure out `root` position.
    tree.position = {
      start: point(
        events.length ? events[0][1].start : {line: 1, column: 1, offset: 0}
      ),

      end: point(
        events.length
          ? events[events.length - 2][1].end
          : {line: 1, column: 1, offset: 0}
      )
    }

    index = -1
    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree
    }

    return tree
  }

  function prepareList(events, start, length) {
    var index = start - 1
    var containerBalance = -1
    var listSpread = false
    var listItem
    var tailIndex
    var lineIndex
    var tailEvent
    var event
    var firstBlankLineIndex
    var atMarker

    while (++index <= length) {
      event = events[index]

      if (
        event[1].type === 'listUnordered' ||
        event[1].type === 'listOrdered' ||
        event[1].type === 'blockQuote'
      ) {
        if (event[0] === 'enter') {
          containerBalance++
        } else {
          containerBalance--
        }

        atMarker = undefined
      } else if (event[1].type === 'lineEndingBlank') {
        if (event[0] === 'enter') {
          if (
            listItem &&
            !atMarker &&
            !containerBalance &&
            !firstBlankLineIndex
          ) {
            firstBlankLineIndex = index
          }

          atMarker = undefined
        }
      } else if (
        event[1].type === 'linePrefix' ||
        event[1].type === 'listItemValue' ||
        event[1].type === 'listItemMarker' ||
        event[1].type === 'listItemPrefix' ||
        event[1].type === 'listItemPrefixWhitespace'
      ) {
        // Empty.
      } else {
        atMarker = undefined
      }

      if (
        (!containerBalance &&
          event[0] === 'enter' &&
          event[1].type === 'listItemPrefix') ||
        (containerBalance === -1 &&
          event[0] === 'exit' &&
          (event[1].type === 'listUnordered' ||
            event[1].type === 'listOrdered'))
      ) {
        if (listItem) {
          tailIndex = index
          lineIndex = undefined

          while (tailIndex--) {
            tailEvent = events[tailIndex]

            if (
              tailEvent[1].type === 'lineEnding' ||
              tailEvent[1].type === 'lineEndingBlank'
            ) {
              if (tailEvent[0] === 'exit') continue

              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank'
                listSpread = true
              }

              tailEvent[1].type = 'lineEnding'
              lineIndex = tailIndex
            } else if (
              tailEvent[1].type === 'linePrefix' ||
              tailEvent[1].type === 'blockQuotePrefix' ||
              tailEvent[1].type === 'blockQuotePrefixWhitespace' ||
              tailEvent[1].type === 'blockQuoteMarker' ||
              tailEvent[1].type === 'listItemIndent'
            ) {
              // Empty
            } else {
              break
            }
          }

          if (
            firstBlankLineIndex &&
            (!lineIndex || firstBlankLineIndex < lineIndex)
          ) {
            listItem._spread = true
          }

          // Fix position.
          listItem.end = point(
            lineIndex ? events[lineIndex][1].start : event[1].end
          )

          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]])
          index++
          length++
        }

        // Create a new list item.
        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            _spread: false,
            start: point(event[1].start)
          }

          events.splice(index, 0, ['enter', listItem, event[2]])
          index++
          length++
          firstBlankLineIndex = undefined
          atMarker = true
        }
      }
    }

    events[start][1]._spread = listSpread
    return length
  }

  function setData(key, value) {
    data[key] = value
  }

  function getData(key) {
    return data[key]
  }

  function point(d) {
    return {line: d.line, column: d.column, offset: d.offset}
  }

  function opener(create, and) {
    return open

    function open(token) {
      enter.call(this, create(token), token)
      if (and) and.call(this, token)
    }
  }

  function buffer() {
    this.stack.push({type: 'fragment', children: []})
  }

  function enter(node, token) {
    this.stack[this.stack.length - 1].children.push(node)
    this.stack.push(node)
    this.tokenStack.push(token)
    node.position = {start: point(token.start)}
    return node
  }

  function closer(and) {
    return close

    function close(token) {
      if (and) and.call(this, token)
      exit.call(this, token)
    }
  }

  function exit(token) {
    var node = this.stack.pop()
    var open = this.tokenStack.pop()

    if (!open) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          stringifyPosition({start: token.start, end: token.end}) +
          '): it’s not open'
      )
    } else if (open.type !== token.type) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          stringifyPosition({start: token.start, end: token.end}) +
          '): a different token (`' +
          open.type +
          '`, ' +
          stringifyPosition({start: open.start, end: open.end}) +
          ') is open'
      )
    }

    node.position.end = point(token.end)
    return node
  }

  function resume() {
    return toString(this.stack.pop())
  }

  //
  // Handlers.
  //

  function onenterlistordered() {
    setData('expectingFirstListItemValue', true)
  }

  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      this.stack[this.stack.length - 2].start = parseInt(
        this.sliceSerialize(token),
        10
      )

      setData('expectingFirstListItemValue')
    }
  }

  function onexitcodefencedfenceinfo() {
    var data = this.resume()
    this.stack[this.stack.length - 1].lang = data
  }

  function onexitcodefencedfencemeta() {
    var data = this.resume()
    this.stack[this.stack.length - 1].meta = data
  }

  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return
    this.buffer()
    setData('flowCodeInside', true)
  }

  function onexitcodefenced() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data.replace(
      /^(\r?\n|\r)|(\r?\n|\r)$/g,
      ''
    )

    setData('flowCodeInside')
  }

  function onexitcodeindented() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    var label = this.resume()
    this.stack[this.stack.length - 1].label = label
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
  }

  function onexitdefinitiontitlestring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].title = data
  }

  function onexitdefinitiondestinationstring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].url = data
  }

  function onexitatxheadingsequence(token) {
    if (!this.stack[this.stack.length - 1].depth) {
      this.stack[this.stack.length - 1].depth = this.sliceSerialize(
        token
      ).length
    }
  }

  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true)
  }

  function onexitsetextheadinglinesequence(token) {
    this.stack[this.stack.length - 1].depth =
      this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2
  }

  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding')
  }

  function onenterdata(token) {
    var siblings = this.stack[this.stack.length - 1].children
    var tail = siblings[siblings.length - 1]

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text()
      tail.position = {start: point(token.start)}
      this.stack[this.stack.length - 1].children.push(tail)
    }

    this.stack.push(tail)
  }

  function onexitdata(token) {
    var tail = this.stack.pop()
    tail.value += this.sliceSerialize(token)
    tail.position.end = point(token.end)
  }

  function onexitlineending(token) {
    var context = this.stack[this.stack.length - 1]

    // If we’re at a hard break, include the line ending in there.
    if (getData('atHardBreak')) {
      context.children[context.children.length - 1].position.end = point(
        token.end
      )

      setData('atHardBreak')
      return
    }

    if (
      !getData('setextHeadingSlurpLineEnding') &&
      config.canContainEols.indexOf(context.type) > -1
    ) {
      onenterdata.call(this, token)
      onexitdata.call(this, token)
    }
  }

  function onexithardbreak() {
    setData('atHardBreak', true)
  }

  function onexithtmlflow() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexithtmltext() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitcodetext() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitlink() {
    var context = this.stack[this.stack.length - 1]

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference'
      context.referenceType = getData('referenceType') || 'shortcut'
      delete context.url
      delete context.title
    } else {
      delete context.identifier
      delete context.label
      delete context.referenceType
    }

    setData('referenceType')
  }

  function onexitimage() {
    var context = this.stack[this.stack.length - 1]

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference'
      context.referenceType = getData('referenceType') || 'shortcut'
      delete context.url
      delete context.title
    } else {
      delete context.identifier
      delete context.label
      delete context.referenceType
    }

    setData('referenceType')
  }

  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
  }

  function onexitlabel() {
    var fragment = this.stack[this.stack.length - 1]
    var value = this.resume()

    this.stack[this.stack.length - 1].label = value

    // Assume a reference.
    setData('inReference', true)

    if (this.stack[this.stack.length - 1].type === 'link') {
      this.stack[this.stack.length - 1].children = fragment.children
    } else {
      this.stack[this.stack.length - 1].alt = value
    }
  }

  function onexitresourcedestinationstring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].url = data
  }

  function onexitresourcetitlestring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].title = data
  }

  function onexitresource() {
    setData('inReference')
  }

  function onenterreference() {
    setData('referenceType', 'collapsed')
  }

  function onexitreferencestring(token) {
    var label = this.resume()
    this.stack[this.stack.length - 1].label = label
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
    setData('referenceType', 'full')
  }

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type)
  }

  function onexitcharacterreferencevalue(token) {
    var data = this.sliceSerialize(token)
    var type = getData('characterReferenceType')
    var value
    var tail

    if (type) {
      value = safeFromInt(
        data,
        type === 'characterReferenceMarkerNumeric' ? 10 : 16
      )

      setData('characterReferenceType')
    } else {
      value = decode(data)
    }

    tail = this.stack.pop()
    tail.value += value
    tail.position.end = point(token.end)
  }

  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token)
    this.stack[this.stack.length - 1].url = this.sliceSerialize(token)
  }

  function onexitautolinkemail(token) {
    onexitdata.call(this, token)
    this.stack[this.stack.length - 1].url =
      'mailto:' + this.sliceSerialize(token)
  }

  //
  // Creaters.
  //

  function blockQuote() {
    return {type: 'blockquote', children: []}
  }

  function codeFlow() {
    return {type: 'code', lang: null, meta: null, value: ''}
  }

  function codeText() {
    return {type: 'inlineCode', value: ''}
  }

  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    }
  }

  function emphasis() {
    return {type: 'emphasis', children: []}
  }

  function heading() {
    return {type: 'heading', depth: undefined, children: []}
  }

  function hardBreak() {
    return {type: 'break'}
  }

  function html() {
    return {type: 'html', value: ''}
  }

  function image() {
    return {type: 'image', title: null, url: '', alt: null}
  }

  function link() {
    return {type: 'link', title: null, url: '', children: []}
  }

  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    }
  }

  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    }
  }

  function paragraph() {
    return {type: 'paragraph', children: []}
  }

  function strong() {
    return {type: 'strong', children: []}
  }

  function text() {
    return {type: 'text', value: ''}
  }

  function thematicBreak() {
    return {type: 'thematicBreak'}
  }
}

function configure(config, extensions) {
  var index = -1

  while (++index < extensions.length) {
    extension(config, extensions[index])
  }

  return config
}

function extension(config, extension) {
  var key
  var left

  for (key in extension) {
    left = own.call(config, key) ? config[key] : (config[key] = {})

    if (key === 'canContainEols' || key === 'transforms') {
      config[key] = [].concat(left, extension[key])
    } else {
      Object.assign(left, extension[key])
    }
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-from-markdown/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mdast-util-from-markdown/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./dist */ "./node_modules/mdast-util-from-markdown/dist/index.js")


/***/ }),

/***/ "./node_modules/mdast-util-gfm-autolink-literal/from-markdown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-autolink-literal/from-markdown.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var ccount = __webpack_require__(/*! ccount */ "./node_modules/ccount/index.js")
var findAndReplace = __webpack_require__(/*! mdast-util-find-and-replace */ "./node_modules/mdast-util-find-and-replace/index.js")
var unicodePunctuation = __webpack_require__(/*! micromark/dist/character/unicode-punctuation */ "./node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! micromark/dist/character/unicode-whitespace */ "./node_modules/micromark/dist/character/unicode-whitespace.js")

exports.transforms = [transformGfmAutolinkLiterals]
exports.enter = {
  literalAutolink: enterLiteralAutolink,
  literalAutolinkEmail: enterLiteralAutolinkValue,
  literalAutolinkHttp: enterLiteralAutolinkValue,
  literalAutolinkWww: enterLiteralAutolinkValue
}
exports.exit = {
  literalAutolink: exitLiteralAutolink,
  literalAutolinkEmail: exitLiteralAutolinkEmail,
  literalAutolinkHttp: exitLiteralAutolinkHttp,
  literalAutolinkWww: exitLiteralAutolinkWww
}

function enterLiteralAutolink(token) {
  this.enter({type: 'link', title: null, url: '', children: []}, token)
}

function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token)
}

function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token)
}

function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token)
  this.stack[this.stack.length - 1].url = 'http://' + this.sliceSerialize(token)
}

function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token)
}

function exitLiteralAutolink(token) {
  this.exit(token)
}

function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, findUrl],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, findEmail]
    ],
    {ignore: ['link', 'linkReference']}
  )
}

function findUrl($0, protocol, domain, path, match) {
  var prefix = ''
  var parts
  var result

  // Not an expected previous character.
  if (!previous(match)) {
    return false
  }

  // Treat `www` as part of the domain.
  if (/^w/i.test(protocol)) {
    domain = protocol + domain
    protocol = ''
    prefix = 'http://'
  }

  if (!isCorrectDomain(domain)) {
    return false
  }

  parts = splitUrl(domain + path)

  if (!parts[0]) return false

  result = {
    type: 'link',
    title: null,
    url: prefix + protocol + parts[0],
    children: [{type: 'text', value: protocol + parts[0]}]
  }

  if (parts[1]) {
    result = [result, {type: 'text', value: parts[1]}]
  }

  return result
}

function findEmail($0, atext, label, match) {
  // Not an expected previous character.
  if (!previous(match, true) || /[_-]$/.test(label)) {
    return false
  }

  return {
    type: 'link',
    title: null,
    url: 'mailto:' + atext + '@' + label,
    children: [{type: 'text', value: atext + '@' + label}]
  }
}

function isCorrectDomain(domain) {
  var parts = domain.split('.')

  if (
    parts.length < 2 ||
    (parts[parts.length - 1] &&
      (/_/.test(parts[parts.length - 1]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
    (parts[parts.length - 2] &&
      (/_/.test(parts[parts.length - 2]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
  ) {
    return false
  }

  return true
}

function splitUrl(url) {
  var trail = /[!"&'),.:;<>?\]}]+$/.exec(url)
  var closingParenIndex
  var openingParens
  var closingParens

  if (trail) {
    url = url.slice(0, trail.index)
    trail = trail[0]
    closingParenIndex = trail.indexOf(')')
    openingParens = ccount(url, '(')
    closingParens = ccount(url, ')')

    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail.slice(0, closingParenIndex + 1)
      trail = trail.slice(closingParenIndex + 1)
      closingParenIndex = trail.indexOf(')')
      closingParens++
    }
  }

  return [url, trail]
}

function previous(match, email) {
  var code = match.input.charCodeAt(match.index - 1)
  return (
    (code !== code || unicodeWhitespace(code) || unicodePunctuation(code)) &&
    (!email || code !== 47)
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-autolink-literal/to-markdown.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-autolink-literal/to-markdown.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var inConstruct = 'phrasing'
var notInConstruct = ['autolink', 'link', 'image', 'label']

exports.unsafe = [
  {
    character: '@',
    before: '[+\\-.\\w]',
    after: '[\\-.\\w]',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  },
  {
    character: '.',
    before: '[Ww]',
    after: '[\\-.\\w]',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  },
  {
    character: ':',
    before: '[ps]',
    after: '\\/',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  }
]


/***/ }),

/***/ "./node_modules/mdast-util-gfm-strikethrough/from-markdown.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/from-markdown.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.canContainEols = ['delete']
exports.enter = {strikethrough: enterStrikethrough}
exports.exit = {strikethrough: exitStrikethrough}

function enterStrikethrough(token) {
  this.enter({type: 'delete', children: []}, token)
}

function exitStrikethrough(token) {
  this.exit(token)
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-strikethrough/to-markdown.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/to-markdown.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var phrasing = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing */ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")

exports.unsafe = [{character: '~', inConstruct: 'phrasing'}]
exports.handlers = {delete: handleDelete}

handleDelete.peek = peekDelete

function handleDelete(node, _, context) {
  var exit = context.enter('emphasis')
  var value = phrasing(node, context, {before: '~', after: '~'})
  exit()
  return '~~' + value + '~~'
}

function peekDelete() {
  return '~'
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-table/from-markdown.js":
/*!************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-table/from-markdown.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.enter = {
  table: enterTable,
  tableData: enterCell,
  tableHeader: enterCell,
  tableRow: enterRow
}
exports.exit = {
  codeText: exitCodeText,
  table: exitTable,
  tableData: exit,
  tableHeader: exit,
  tableRow: exit
}

function enterTable(token) {
  this.enter({type: 'table', align: token._align, children: []}, token)
  this.setData('inTable', true)
}

function exitTable(token) {
  this.exit(token)
  this.setData('inTable')
}

function enterRow(token) {
  this.enter({type: 'tableRow', children: []}, token)
}

function exit(token) {
  this.exit(token)
}

function enterCell(token) {
  this.enter({type: 'tableCell', children: []}, token)
}

// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
function exitCodeText(token) {
  var value = this.resume()

  if (this.getData('inTable')) {
    value = value.replace(/\\([\\|])/g, replace)
  }

  this.stack[this.stack.length - 1].value = value
  this.exit(token)
}

function replace($0, $1) {
  // Pipes work, backslashes don’t (but can’t escape pipes).
  return $1 === '|' ? $1 : $0
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-table/to-markdown.js":
/*!**********************************************************!*\
  !*** ./node_modules/mdast-util-gfm-table/to-markdown.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var phrasing = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing */ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")
var defaultInlineCode = __webpack_require__(/*! mdast-util-to-markdown/lib/handle/inline-code */ "./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js")
var markdownTable = __webpack_require__(/*! markdown-table */ "./node_modules/markdown-table/index.js")

module.exports = toMarkdown

function toMarkdown(options) {
  var settings = options || {}
  var padding = settings.tableCellPadding
  var alignDelimiters = settings.tablePipeAlign
  var stringLength = settings.stringLength
  var around = padding ? ' ' : '|'

  return {
    unsafe: [
      {character: '\r', inConstruct: 'tableCell'},
      {character: '\n', inConstruct: 'tableCell'},
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      {atBreak: true, character: '|', after: '[\t :-]'},
      // A pipe in a cell must be encoded.
      {character: '|', inConstruct: 'tableCell'},
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      {atBreak: true, character: ':', after: '-'},
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      {atBreak: true, character: '-', after: '[:|-]'}
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  }

  function handleTable(node, _, context) {
    return serializeData(handleTableAsData(node, context), node.align)
  }

  // This function isn’t really used normally, because we handle rows at the
  // table level.
  // But, if someone passes in a table row, this ensures we make somewhat sense.
  function handleTableRow(node, _, context) {
    var row = handleTableRowAsData(node, context)
    // `markdown-table` will always add an align row
    var value = serializeData([row])
    return value.slice(0, value.indexOf('\n'))
  }

  function handleTableCell(node, _, context) {
    var exit = context.enter('tableCell')
    var value = phrasing(node, context, {before: around, after: around})
    exit()
    return value
  }

  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align: align,
      alignDelimiters: alignDelimiters,
      padding: padding,
      stringLength: stringLength
    })
  }

  function handleTableAsData(node, context) {
    var children = node.children
    var index = -1
    var length = children.length
    var result = []
    var subexit = context.enter('table')

    while (++index < length) {
      result[index] = handleTableRowAsData(children[index], context)
    }

    subexit()

    return result
  }

  function handleTableRowAsData(node, context) {
    var children = node.children
    var index = -1
    var length = children.length
    var result = []
    var subexit = context.enter('tableRow')

    while (++index < length) {
      result[index] = handleTableCell(children[index], node, context)
    }

    subexit()

    return result
  }

  function inlineCodeWithTable(node, parent, context) {
    var value = defaultInlineCode(node, parent, context)

    if (context.stack.indexOf('tableCell') !== -1) {
      value = value.replace(/\|/g, '\\$&')
    }

    return value
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-task-list-item/from-markdown.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/from-markdown.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.exit = {
  taskListCheckValueChecked: exitCheck,
  taskListCheckValueUnchecked: exitCheck,
  paragraph: exitParagraphWithTaskListItem
}

function exitCheck(token) {
  // We’re always in a paragraph, in a list item.
  this.stack[this.stack.length - 2].checked =
    token.type === 'taskListCheckValueChecked'
}

function exitParagraphWithTaskListItem(token) {
  var parent = this.stack[this.stack.length - 2]
  var node = this.stack[this.stack.length - 1]
  var siblings = parent.children
  var head = node.children[0]
  var index = -1
  var firstParaghraph

  if (
    parent &&
    parent.type === 'listItem' &&
    typeof parent.checked === 'boolean' &&
    head &&
    head.type === 'text'
  ) {
    while (++index < siblings.length) {
      if (siblings[index].type === 'paragraph') {
        firstParaghraph = siblings[index]
        break
      }
    }

    if (firstParaghraph === node) {
      // Must start with a space or a tab.
      head.value = head.value.slice(1)

      if (head.value.length === 0) {
        node.children.shift()
      } else {
        head.position.start.column++
        head.position.start.offset++
        node.position.start = Object.assign({}, head.position.start)
      }
    }
  }

  this.exit(token)
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-task-list-item/to-markdown.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/to-markdown.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var defaultListItem = __webpack_require__(/*! mdast-util-to-markdown/lib/handle/list-item */ "./node_modules/mdast-util-to-markdown/lib/handle/list-item.js")

exports.unsafe = [{atBreak: true, character: '-', after: '[:|-]'}]

exports.handlers = {
  listItem: listItemWithTaskListItem
}

function listItemWithTaskListItem(node, parent, context) {
  var value = defaultListItem(node, parent, context)
  var head = node.children[0]

  if (typeof node.checked === 'boolean' && head && head.type === 'paragraph') {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check)
  }

  return value

  function check($0) {
    return $0 + '[' + (node.checked ? 'x' : ' ') + '] '
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm/from-markdown.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-gfm/from-markdown.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var autolinkLiteral = __webpack_require__(/*! mdast-util-gfm-autolink-literal/from-markdown */ "./node_modules/mdast-util-gfm-autolink-literal/from-markdown.js")
var strikethrough = __webpack_require__(/*! mdast-util-gfm-strikethrough/from-markdown */ "./node_modules/mdast-util-gfm-strikethrough/from-markdown.js")
var table = __webpack_require__(/*! mdast-util-gfm-table/from-markdown */ "./node_modules/mdast-util-gfm-table/from-markdown.js")
var taskListItem = __webpack_require__(/*! mdast-util-gfm-task-list-item/from-markdown */ "./node_modules/mdast-util-gfm-task-list-item/from-markdown.js")

var own = {}.hasOwnProperty

module.exports = configure([
  autolinkLiteral,
  strikethrough,
  table,
  taskListItem
])

function configure(extensions) {
  var config = {transforms: [], canContainEols: []}
  var length = extensions.length
  var index = -1

  while (++index < length) {
    extension(config, extensions[index])
  }

  return config
}

function extension(config, extension) {
  var key
  var left
  var right

  for (key in extension) {
    left = own.call(config, key) ? config[key] : (config[key] = {})
    right = extension[key]

    if (key === 'canContainEols' || key === 'transforms') {
      config[key] = [].concat(left, right)
    } else {
      Object.assign(left, right)
    }
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm/to-markdown.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-gfm/to-markdown.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var autolinkLiteral = __webpack_require__(/*! mdast-util-gfm-autolink-literal/to-markdown */ "./node_modules/mdast-util-gfm-autolink-literal/to-markdown.js")
var strikethrough = __webpack_require__(/*! mdast-util-gfm-strikethrough/to-markdown */ "./node_modules/mdast-util-gfm-strikethrough/to-markdown.js")
var table = __webpack_require__(/*! mdast-util-gfm-table/to-markdown */ "./node_modules/mdast-util-gfm-table/to-markdown.js")
var taskListItem = __webpack_require__(/*! mdast-util-gfm-task-list-item/to-markdown */ "./node_modules/mdast-util-gfm-task-list-item/to-markdown.js")
var configure = __webpack_require__(/*! mdast-util-to-markdown/lib/configure */ "./node_modules/mdast-util-to-markdown/lib/configure.js")

module.exports = toMarkdown

function toMarkdown(options) {
  var config = configure(
    {handlers: {}, join: [], unsafe: [], options: {}},
    {
      extensions: [autolinkLiteral, strikethrough, table(options), taskListItem]
    }
  )

  return Object.assign(config.options, {
    handlers: config.handlers,
    join: config.join,
    unsafe: config.unsafe
  })
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/mdast-util-to-hast/lib/index.js")


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/all.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/all.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = all

var one = __webpack_require__(/*! ./one */ "./node_modules/mdast-util-to-hast/lib/one.js")

function all(h, parent) {
  var nodes = parent.children || []
  var length = nodes.length
  var values = []
  var index = -1
  var result
  var head

  while (++index < length) {
    result = one(h, nodes[index], parent)

    if (result) {
      if (index && nodes[index - 1].type === 'break') {
        if (result.value) {
          result.value = result.value.replace(/^\s+/, '')
        }

        head = result.children && result.children[0]

        if (head && head.value) {
          head.value = head.value.replace(/^\s+/, '')
        }
      }

      values = values.concat(result)
    }
  }

  return values
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/footer.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/footer.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = generateFootnotes

var thematicBreak = __webpack_require__(/*! ./handlers/thematic-break */ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js")
var list = __webpack_require__(/*! ./handlers/list */ "./node_modules/mdast-util-to-hast/lib/handlers/list.js")
var wrap = __webpack_require__(/*! ./wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")

function generateFootnotes(h) {
  var footnoteById = h.footnoteById
  var footnoteOrder = h.footnoteOrder
  var length = footnoteOrder.length
  var index = -1
  var listItems = []
  var def
  var backReference
  var content
  var tail

  while (++index < length) {
    def = footnoteById[footnoteOrder[index].toUpperCase()]

    if (!def) {
      continue
    }

    content = def.children.concat()
    tail = content[content.length - 1]
    backReference = {
      type: 'link',
      url: '#fnref-' + def.identifier,
      data: {hProperties: {className: ['footnote-backref']}},
      children: [{type: 'text', value: '↩'}]
    }

    if (!tail || tail.type !== 'paragraph') {
      tail = {type: 'paragraph', children: []}
      content.push(tail)
    }

    tail.children.push(backReference)

    listItems.push({
      type: 'listItem',
      data: {hProperties: {id: 'fn-' + def.identifier}},
      children: content,
      position: def.position
    })
  }

  if (listItems.length === 0) {
    return null
  }

  return h(
    null,
    'div',
    {className: ['footnotes']},
    wrap(
      [
        thematicBreak(h),
        list(h, {type: 'list', ordered: true, children: listItems})
      ],
      true
    )
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = blockquote

var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function blockquote(h, node) {
  return h(node, 'blockquote', wrap(all(h, node), true))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/break.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/break.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = hardBreak

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function hardBreak(h, node) {
  return [h(node, 'br'), u('text', '\n')]
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/code.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/code.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = code

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function code(h, node) {
  var value = node.value ? node.value + '\n' : ''
  // To do: next major, use `node.lang` w/o regex, the splitting’s been going
  // on for years in remark now.
  var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  var props = {}
  var code

  if (lang) {
    props.className = ['language-' + lang]
  }

  code = h(node, 'code', props, [u('text', value)])

  if (node.meta) {
    code.data = {meta: node.meta}
  }

  return h(node.position, 'pre', [code])
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/delete.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/delete.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = strikethrough

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function strikethrough(h, node) {
  return h(node, 'del', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = emphasis

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function emphasis(h, node) {
  return h(node, 'em', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = footnoteReference

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function footnoteReference(h, node) {
  var footnoteOrder = h.footnoteOrder
  var identifier = String(node.identifier)

  if (footnoteOrder.indexOf(identifier) === -1) {
    footnoteOrder.push(identifier)
  }

  return h(node.position, 'sup', {id: 'fnref-' + identifier}, [
    h(node, 'a', {href: '#fn-' + identifier, className: ['footnote-ref']}, [
      u('text', node.label || identifier)
    ])
  ])
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/footnote.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/footnote.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = footnote

var footnoteReference = __webpack_require__(/*! ./footnote-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js")

function footnote(h, node) {
  var footnoteById = h.footnoteById
  var footnoteOrder = h.footnoteOrder
  var identifier = 1

  while (identifier in footnoteById) {
    identifier++
  }

  identifier = String(identifier)

  // No need to check if `identifier` exists in `footnoteOrder`, it’s guaranteed
  // to not exist because we just generated it.
  footnoteOrder.push(identifier)

  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier: identifier,
    children: [{type: 'paragraph', children: node.children}],
    position: node.position
  }

  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier: identifier,
    position: node.position
  })
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/heading.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/heading.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = heading

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function heading(h, node) {
  return h(node, 'h' + node.depth, all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/html.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/html.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = html

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

// Return either a `raw` node in dangerous mode, otherwise nothing.
function html(h, node) {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = imageReference

var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")
var revert = __webpack_require__(/*! ../revert */ "./node_modules/mdast-util-to-hast/lib/revert.js")

function imageReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {src: normalize(def.url || ''), alt: node.alt}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'img', props)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/image.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/image.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")

module.exports = image

function image(h, node) {
  var props = {src: normalize(node.url), alt: node.alt}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'img', props)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = {
  blockquote: __webpack_require__(/*! ./blockquote */ "./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js"),
  break: __webpack_require__(/*! ./break */ "./node_modules/mdast-util-to-hast/lib/handlers/break.js"),
  code: __webpack_require__(/*! ./code */ "./node_modules/mdast-util-to-hast/lib/handlers/code.js"),
  delete: __webpack_require__(/*! ./delete */ "./node_modules/mdast-util-to-hast/lib/handlers/delete.js"),
  emphasis: __webpack_require__(/*! ./emphasis */ "./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js"),
  footnoteReference: __webpack_require__(/*! ./footnote-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js"),
  footnote: __webpack_require__(/*! ./footnote */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote.js"),
  heading: __webpack_require__(/*! ./heading */ "./node_modules/mdast-util-to-hast/lib/handlers/heading.js"),
  html: __webpack_require__(/*! ./html */ "./node_modules/mdast-util-to-hast/lib/handlers/html.js"),
  imageReference: __webpack_require__(/*! ./image-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js"),
  image: __webpack_require__(/*! ./image */ "./node_modules/mdast-util-to-hast/lib/handlers/image.js"),
  inlineCode: __webpack_require__(/*! ./inline-code */ "./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js"),
  linkReference: __webpack_require__(/*! ./link-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js"),
  link: __webpack_require__(/*! ./link */ "./node_modules/mdast-util-to-hast/lib/handlers/link.js"),
  listItem: __webpack_require__(/*! ./list-item */ "./node_modules/mdast-util-to-hast/lib/handlers/list-item.js"),
  list: __webpack_require__(/*! ./list */ "./node_modules/mdast-util-to-hast/lib/handlers/list.js"),
  paragraph: __webpack_require__(/*! ./paragraph */ "./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js"),
  root: __webpack_require__(/*! ./root */ "./node_modules/mdast-util-to-hast/lib/handlers/root.js"),
  strong: __webpack_require__(/*! ./strong */ "./node_modules/mdast-util-to-hast/lib/handlers/strong.js"),
  table: __webpack_require__(/*! ./table */ "./node_modules/mdast-util-to-hast/lib/handlers/table.js"),
  text: __webpack_require__(/*! ./text */ "./node_modules/mdast-util-to-hast/lib/handlers/text.js"),
  thematicBreak: __webpack_require__(/*! ./thematic-break */ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js"),
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
}

// Return nothing for nodes that are ignored.
function ignore() {
  return null
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = inlineCode

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function inlineCode(h, node) {
  var value = node.value.replace(/\r?\n|\r/g, ' ')
  return h(node, 'code', [u('text', value)])
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = linkReference

var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")
var revert = __webpack_require__(/*! ../revert */ "./node_modules/mdast-util-to-hast/lib/revert.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function linkReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {href: normalize(def.url || '')}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/link.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/link.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

module.exports = link

function link(h, node) {
  var props = {href: normalize(node.url)}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/list-item.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/list-item.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = listItem

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function listItem(h, node, parent) {
  var result = all(h, node)
  var head = result[0]
  var loose = parent ? listLoose(parent) : listItemLoose(node)
  var props = {}
  var wrapped = []
  var length
  var index
  var child

  if (typeof node.checked === 'boolean') {
    if (!head || head.tagName !== 'p') {
      head = h(null, 'p', [])
      result.unshift(head)
    }

    if (head.children.length > 0) {
      head.children.unshift(u('text', ' '))
    }

    head.children.unshift(
      h(null, 'input', {
        type: 'checkbox',
        checked: node.checked,
        disabled: true
      })
    )

    // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.
    props.className = ['task-list-item']
  }

  length = result.length
  index = -1

  while (++index < length) {
    child = result[index]

    // Add eols before nodes, except if this is a loose, first paragraph.
    if (loose || index !== 0 || child.tagName !== 'p') {
      wrapped.push(u('text', '\n'))
    }

    if (child.tagName === 'p' && !loose) {
      wrapped = wrapped.concat(child.children)
    } else {
      wrapped.push(child)
    }
  }

  // Add a final eol.
  if (length && (loose || child.tagName !== 'p')) {
    wrapped.push(u('text', '\n'))
  }

  return h(node, 'li', props, wrapped)
}

function listLoose(node) {
  var loose = node.spread
  var children = node.children
  var length = children.length
  var index = -1

  while (!loose && ++index < length) {
    loose = listItemLoose(children[index])
  }

  return loose
}

function listItemLoose(node) {
  var spread = node.spread

  return spread === undefined || spread === null
    ? node.children.length > 1
    : spread
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/list.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/list.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = list

var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function list(h, node) {
  var props = {}
  var name = node.ordered ? 'ol' : 'ul'
  var items
  var index = -1
  var length

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  items = all(h, node)
  length = items.length

  // Like GitHub, add a class for custom styling.
  while (++index < length) {
    if (
      items[index].properties.className &&
      items[index].properties.className.indexOf('task-list-item') !== -1
    ) {
      props.className = ['contains-task-list']
      break
    }
  }

  return h(node, name, props, wrap(items, true))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = paragraph

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function paragraph(h, node) {
  return h(node, 'p', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/root.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/root.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = root

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function root(h, node) {
  return h.augment(node, u('root', wrap(all(h, node))))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/strong.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/strong.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = strong

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function strong(h, node) {
  return h(node, 'strong', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/table.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/table.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = table

var position = __webpack_require__(/*! unist-util-position */ "./node_modules/unist-util-position/index.js")
var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function table(h, node) {
  var rows = node.children
  var index = rows.length
  var align = node.align || []
  var alignLength = align.length
  var result = []
  var pos
  var row
  var out
  var name
  var cell

  while (index--) {
    row = rows[index].children
    name = index === 0 ? 'th' : 'td'
    pos = alignLength || row.length
    out = []

    while (pos--) {
      cell = row[pos]
      out[pos] = h(cell, name, {align: align[pos]}, cell ? all(h, cell) : [])
    }

    result[index] = h(rows[index], 'tr', wrap(out, true))
  }

  return h(
    node,
    'table',
    wrap(
      [h(result[0].position, 'thead', wrap([result[0]], true))].concat(
        result[1]
          ? h(
              {
                start: position.start(result[1]),
                end: position.end(result[result.length - 1])
              },
              'tbody',
              wrap(result.slice(1), true)
            )
          : []
      ),
      true
    )
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/text.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/text.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = text

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function text(h, node) {
  return h.augment(
    node,
    u('text', String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, '$1'))
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = thematicBreak

function thematicBreak(h, node) {
  return h(node, 'hr')
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = toHast

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js")
var position = __webpack_require__(/*! unist-util-position */ "./node_modules/unist-util-position/index.js")
var generated = __webpack_require__(/*! unist-util-generated */ "./node_modules/unist-util-generated/index.js")
var definitions = __webpack_require__(/*! mdast-util-definitions */ "./node_modules/mdast-util-definitions/index.js")
var one = __webpack_require__(/*! ./one */ "./node_modules/mdast-util-to-hast/lib/one.js")
var footer = __webpack_require__(/*! ./footer */ "./node_modules/mdast-util-to-hast/lib/footer.js")
var handlers = __webpack_require__(/*! ./handlers */ "./node_modules/mdast-util-to-hast/lib/handlers/index.js")

var own = {}.hasOwnProperty

var deprecationWarningIssued = false

// Factory to transform.
function factory(tree, options) {
  var settings = options || {}

  // Issue a warning if the deprecated tag 'allowDangerousHTML' is used
  if (settings.allowDangerousHTML !== undefined && !deprecationWarningIssued) {
    deprecationWarningIssued = true
    console.warn(
      'mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead'
    )
  }

  var dangerous = settings.allowDangerousHtml || settings.allowDangerousHTML
  var footnoteById = {}

  h.dangerous = dangerous
  h.definition = definitions(tree)
  h.footnoteById = footnoteById
  h.footnoteOrder = []
  h.augment = augment
  h.handlers = Object.assign({}, handlers, settings.handlers)
  h.unknownHandler = settings.unknownHandler
  h.passThrough = settings.passThrough

  visit(tree, 'footnoteDefinition', onfootnotedefinition)

  return h

  // Finalise the created `right`, a hast node, from `left`, an mdast node.
  function augment(left, right) {
    var data
    var ctx

    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (left && left.data) {
      data = left.data

      if (data.hName) {
        if (right.type !== 'element') {
          right = {
            type: 'element',
            tagName: '',
            properties: {},
            children: []
          }
        }

        right.tagName = data.hName
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = Object.assign({}, right.properties, data.hProperties)
      }

      if (right.children && data.hChildren) {
        right.children = data.hChildren
      }
    }

    ctx = left && left.position ? left : {position: left}

    if (!generated(ctx)) {
      right.position = {
        start: position.start(ctx),
        end: position.end(ctx)
      }
    }

    return right
  }

  // Create an element for `node`.
  function h(node, tagName, props, children) {
    if (
      (children === undefined || children === null) &&
      typeof props === 'object' &&
      'length' in props
    ) {
      children = props
      props = {}
    }

    return augment(node, {
      type: 'element',
      tagName: tagName,
      properties: props || {},
      children: children || []
    })
  }

  function onfootnotedefinition(definition) {
    var id = String(definition.identifier).toUpperCase()

    // Mimick CM behavior of link definitions.
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
    if (!own.call(footnoteById, id)) {
      footnoteById[id] = definition
    }
  }
}

// Transform `tree`, which is an mdast node, to a hast node.
function toHast(tree, options) {
  var h = factory(tree, options)
  var node = one(h, tree)
  var foot = footer(h)

  if (foot) {
    node.children = node.children.concat(u('text', '\n'), foot)
  }

  return node
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/one.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/one.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = one

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ./all */ "./node_modules/mdast-util-to-hast/lib/all.js")

var own = {}.hasOwnProperty

// Transform an unknown node.
function unknown(h, node) {
  if (text(node)) {
    return h.augment(node, u('text', node.value))
  }

  return h(node, 'div', all(h, node))
}

// Visit a node.
function one(h, node, parent) {
  var type = node && node.type
  var fn

  // Fail on non-nodes.
  if (!type) {
    throw new Error('Expected node, got `' + node + '`')
  }

  if (own.call(h.handlers, type)) {
    fn = h.handlers[type]
  } else if (h.passThrough && h.passThrough.indexOf(type) > -1) {
    fn = returnNode
  } else {
    fn = h.unknownHandler
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent)
}

// Check if the node should be renderered as a text node.
function text(node) {
  var data = node.data || {}

  if (
    own.call(data, 'hName') ||
    own.call(data, 'hProperties') ||
    own.call(data, 'hChildren')
  ) {
    return false
  }

  return 'value' in node
}

function returnNode(h, node) {
  var clone

  if (node.children) {
    clone = Object.assign({}, node)
    clone.children = all(h, node)
    return clone
  }

  return node
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/revert.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/revert.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = revert

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ./all */ "./node_modules/mdast-util-to-hast/lib/all.js")

// Return the content of a reference without definition as Markdown.
function revert(h, node) {
  var subtype = node.referenceType
  var suffix = ']'
  var contents
  var head
  var tail

  if (subtype === 'collapsed') {
    suffix += '[]'
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']'
  }

  if (node.type === 'imageReference') {
    return u('text', '![' + node.alt + suffix)
  }

  contents = all(h, node)
  head = contents[0]

  if (head && head.type === 'text') {
    head.value = '[' + head.value
  } else {
    contents.unshift(u('text', '['))
  }

  tail = contents[contents.length - 1]

  if (tail && tail.type === 'text') {
    tail.value += suffix
  } else {
    contents.push(u('text', suffix))
  }

  return contents
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/wrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/wrap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = wrap

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

// Wrap `nodes` with line feeds between each entry.
// Optionally adds line feeds at the start and end.
function wrap(nodes, loose) {
  var result = []
  var index = -1
  var length = nodes.length

  if (loose) {
    result.push(u('text', '\n'))
  }

  while (++index < length) {
    if (index) {
      result.push(u('text', '\n'))
    }

    result.push(nodes[index])
  }

  if (loose && nodes.length > 0) {
    result.push(u('text', '\n'))
  }

  return result
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/configure.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/configure.js ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = configure

function configure(base, extension) {
  var index = -1
  var key

  // First do subextensions.
  if (extension.extensions) {
    while (++index < extension.extensions.length) {
      configure(base, extension.extensions[index])
    }
  }

  for (key in extension) {
    if (key === 'extensions') {
      // Empty.
    } else if (key === 'unsafe' || key === 'join') {
      base[key] = base[key].concat(extension[key] || [])
    } else if (key === 'handlers') {
      base[key] = Object.assign(base[key], extension[key] || {})
    } else {
      base.options[key] = extension[key]
    }
  }

  return base
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = inlineCode
inlineCode.peek = inlineCodePeek

var patternCompile = __webpack_require__(/*! ../util/pattern-compile */ "./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js")

function inlineCode(node, parent, context) {
  var value = node.value || ''
  var sequence = '`'
  var index = -1
  var pattern
  var expression
  var match
  var position

  // If there is a single grave accent on its own in the code, use a fence of
  // two.
  // If there are two in a row, use one.
  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
    sequence += '`'
  }

  // If this is not just spaces or eols (tabs don’t count), and either the
  // first or last character are a space, eol, or tick, then pad with spaces.
  if (
    /[^ \r\n]/.test(value) &&
    (/[ \r\n`]/.test(value.charAt(0)) ||
      /[ \r\n`]/.test(value.charAt(value.length - 1)))
  ) {
    value = ' ' + value + ' '
  }

  // We have a potential problem: certain characters after eols could result in
  // blocks being seen.
  // For example, if someone injected the string `'\n# b'`, then that would
  // result in an ATX heading.
  // We can’t escape characters in `inlineCode`, but because eols are
  // transformed to spaces when going from markdown to HTML anyway, we can swap
  // them out.
  while (++index < context.unsafe.length) {
    pattern = context.unsafe[index]

    // Only look for `atBreak`s.
    // Btw: note that `atBreak` patterns will always start the regex at LF or
    // CR.
    if (!pattern.atBreak) continue

    expression = patternCompile(pattern)

    while ((match = expression.exec(value))) {
      position = match.index

      // Support CRLF (patterns only look for one of the characters).
      if (
        value.charCodeAt(position) === 10 /* `\n` */ &&
        value.charCodeAt(position - 1) === 13 /* `\r` */
      ) {
        position--
      }

      value = value.slice(0, position) + ' ' + value.slice(match.index + 1)
    }
  }

  return sequence + value + sequence
}

function inlineCodePeek() {
  return '`'
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/list-item.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/list-item.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = listItem

var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")
var checkBullet = __webpack_require__(/*! ../util/check-bullet */ "./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js")
var checkListItemIndent = __webpack_require__(/*! ../util/check-list-item-indent */ "./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js")
var flow = __webpack_require__(/*! ../util/container-flow */ "./node_modules/mdast-util-to-markdown/lib/util/container-flow.js")
var indentLines = __webpack_require__(/*! ../util/indent-lines */ "./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js")

function listItem(node, parent, context) {
  var bullet = checkBullet(context)
  var listItemIndent = checkListItemIndent(context)
  var size
  var value
  var exit

  if (parent && parent.ordered) {
    bullet =
      (parent.start > -1 ? parent.start : 1) +
      (context.options.incrementListMarker === false
        ? 0
        : parent.children.indexOf(node)) +
      '.'
  }

  size = bullet.length + 1

  if (
    listItemIndent === 'tab' ||
    (listItemIndent === 'mixed' && ((parent && parent.spread) || node.spread))
  ) {
    size = Math.ceil(size / 4) * 4
  }

  exit = context.enter('listItem')
  value = indentLines(flow(node, context), map)
  exit()

  return value

  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : repeat(' ', size)) + line
    }

    return (blank ? bullet : bullet + repeat(' ', size - bullet.length)) + line
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = checkBullet

function checkBullet(context) {
  var marker = context.options.bullet || '*'

  if (marker !== '*' && marker !== '+' && marker !== '-') {
    throw new Error(
      'Cannot serialize items with `' +
        marker +
        '` for `options.bullet`, expected `*`, `+`, or `-`'
    )
  }

  return marker
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = checkListItemIndent

function checkListItemIndent(context) {
  var style = context.options.listItemIndent || 'tab'

  if (style === 1 || style === '1') {
    return 'one'
  }

  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error(
      'Cannot serialize items with `' +
        style +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
    )
  }

  return style
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-flow.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/container-flow.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = flow

var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

function flow(parent, context) {
  var children = parent.children || []
  var results = []
  var index = -1
  var child

  while (++index < children.length) {
    child = children[index]

    results.push(
      context.handle(child, parent, context, {before: '\n', after: '\n'})
    )

    if (index + 1 < children.length) {
      results.push(between(child, children[index + 1]))
    }
  }

  return results.join('')

  function between(left, right) {
    var index = -1
    var result

    while (++index < context.join.length) {
      result = context.join[index](left, right, parent, context)

      if (result === true || result === 1) {
        break
      }

      if (typeof result === 'number') {
        return repeat('\n', 1 + Number(result))
      }

      if (result === false) {
        return '\n\n<!---->\n\n'
      }
    }

    return '\n\n'
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = phrasing

function phrasing(parent, context, safeOptions) {
  var children = parent.children || []
  var results = []
  var index = -1
  var before = safeOptions.before
  var after
  var handle
  var child

  while (++index < children.length) {
    child = children[index]

    if (index + 1 < children.length) {
      handle = context.handle.handlers[children[index + 1].type]
      if (handle && handle.peek) handle = handle.peek
      after = handle
        ? handle(children[index + 1], parent, context, {
            before: '',
            after: ''
          }).charAt(0)
        : ''
    } else {
      after = safeOptions.after
    }

    // In some cases, html (text) can be found in phrasing right after an eol.
    // When we’d serialize that, in most cases that would be seen as html
    // (flow).
    // As we can’t escape or so to prevent it from happening, we take a somewhat
    // reasonable approach: replace that eol with a space.
    // See: <https://github.com/syntax-tree/mdast-util-to-markdown/issues/15>
    if (
      results.length > 0 &&
      (before === '\r' || before === '\n') &&
      child.type === 'html'
    ) {
      results[results.length - 1] = results[results.length - 1].replace(
        /(\r?\n|\r)$/,
        ' '
      )
      before = ' '
    }

    results.push(
      context.handle(child, parent, context, {
        before: before,
        after: after
      })
    )

    before = results[results.length - 1].slice(-1)
  }

  return results.join('')
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = indentLines

var eol = /\r?\n|\r/g

function indentLines(value, map) {
  var result = []
  var start = 0
  var line = 0
  var match

  while ((match = eol.exec(value))) {
    one(value.slice(start, match.index))
    result.push(match[0])
    start = match.index + match[0].length
    line++
  }

  one(value.slice(start))

  return result.join('')

  function one(value) {
    result.push(map(value, line, !value))
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = patternCompile

function patternCompile(pattern) {
  var before
  var after

  if (!pattern._compiled) {
    before = pattern.before ? '(?:' + pattern.before + ')' : ''
    after = pattern.after ? '(?:' + pattern.after + ')' : ''

    if (pattern.atBreak) {
      before = '[\\r\\n][\\t ]*' + before
    }

    pattern._compiled = new RegExp(
      (before ? '(' + before + ')' : '') +
        (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') +
        pattern.character +
        (after || ''),
      'g'
    )
  }

  return pattern._compiled
}


/***/ }),

/***/ "./node_modules/mdast-util-to-string/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-string/index.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = toString

// Get the text content of a node.
// Prefer the node’s plain-text fields, otherwise serialize its children,
// and if the given value is an array, serialize the nodes in it.
function toString(node) {
  return (
    (node &&
      (node.value ||
        node.alt ||
        node.title ||
        ('children' in node && all(node.children)) ||
        ('length' in node && all(node)))) ||
    ''
  )
}

function all(values) {
  var result = []
  var index = -1

  while (++index < values.length) {
    result[index] = toString(values[index])
  }

  return result.join('')
}


/***/ }),

/***/ "./node_modules/mdurl/encode.js":
/*!**************************************!*\
  !*** ./node_modules/mdurl/encode.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";




var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-autolink-literal/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-autolink-literal/index.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm-autolink-literal/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-autolink-literal/syntax.js":
/*!*************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-autolink-literal/syntax.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var asciiAlpha = __webpack_require__(/*! micromark/dist/character/ascii-alpha */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! micromark/dist/character/ascii-alphanumeric */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiControl = __webpack_require__(/*! micromark/dist/character/ascii-control */ "./node_modules/micromark/dist/character/ascii-control.js")
var markdownLineEnding = __webpack_require__(/*! micromark/dist/character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var unicodePunctuation = __webpack_require__(/*! micromark/dist/character/unicode-punctuation */ "./node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! micromark/dist/character/unicode-whitespace */ "./node_modules/micromark/dist/character/unicode-whitespace.js")

var www = {tokenize: tokenizeWww, partial: true}
var domain = {tokenize: tokenizeDomain, partial: true}
var path = {tokenize: tokenizePath, partial: true}
var punctuation = {tokenize: tokenizePunctuation, partial: true}
var paren = {tokenize: tokenizeParen, partial: true}
var namedCharacterReference = {
  tokenize: tokenizeNamedCharacterReference,
  partial: true
}

var wwwAutolink = {tokenize: tokenizeWwwAutolink, previous: previousWww}
var httpAutolink = {tokenize: tokenizeHttpAutolink, previous: previousHttp}
var emailAutolink = {tokenize: tokenizeEmailAutolink, previous: previousEmail}

var text = {}

// Export hooked constructs.
exports.text = text

// `0`
var code = 48

// While the code is smaller than `{`.
while (code < 123) {
  text[code] = emailAutolink
  code++
  // Jump from `:` -> `A`
  if (code === 58) code = 65
  // Jump from `[` -> `a`
  else if (code === 91) code = 97
}

// `+`
text[43] = emailAutolink
// `-`
text[45] = emailAutolink
// `.`
text[46] = emailAutolink
// `_`
text[95] = emailAutolink
// `h`.
text[72] = [emailAutolink, httpAutolink]
text[104] = [emailAutolink, httpAutolink]
// `w`.
text[87] = [emailAutolink, wwwAutolink]
text[119] = [emailAutolink, wwwAutolink]

function tokenizeEmailAutolink(effects, ok, nok) {
  var self = this
  var hasDot

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (
      !gfmAtext(code) ||
      !previousEmail(self.previous) ||
      previous(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkEmail')
    return atext(code)
  }

  function atext(code) {
    if (gfmAtext(code)) {
      effects.consume(code)
      return atext
    }

    // `@`
    if (code === 64) {
      effects.consume(code)
      return label
    }

    return nok(code)
  }

  function label(code) {
    // `.`
    if (code === 46) {
      return effects.check(punctuation, done, dotContinuation)(code)
    }

    if (
      // `-`
      code === 45 ||
      // `_`
      code === 95
    ) {
      return effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code)
    }

    if (asciiAlphanumeric(code)) {
      effects.consume(code)
      return label
    }

    return done(code)
  }

  function dotContinuation(code) {
    effects.consume(code)
    hasDot = true
    return label
  }

  function dashOrUnderscoreContinuation(code) {
    effects.consume(code)
    return afterDashOrUnderscore
  }

  function afterDashOrUnderscore(code) {
    // `.`
    if (code === 46) {
      return effects.check(punctuation, nok, dotContinuation)(code)
    }

    return label(code)
  }

  function done(code) {
    if (hasDot) {
      effects.exit('literalAutolinkEmail')
      effects.exit('literalAutolink')
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeWwwAutolink(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (
      (code !== 87 && code - 32 !== 87) ||
      !previousWww(self.previous) ||
      previous(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkWww')
    // For `www.` we check instead of attempt, because when it matches, GH
    // treats it as part of a domain (yes, it says a valid domain must come
    // after `www.`, but that’s not how it’s implemented by them).
    return effects.check(
      www,
      effects.attempt(domain, effects.attempt(path, done), nok),
      nok
    )(code)
  }

  function done(code) {
    effects.exit('literalAutolinkWww')
    effects.exit('literalAutolink')
    return ok(code)
  }
}

function tokenizeHttpAutolink(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (
      (code !== 72 && code - 32 !== 72) ||
      !previousHttp(self.previous) ||
      previous(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkHttp')
    effects.consume(code)
    return t1
  }

  function t1(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code)
      return t2
    }

    return nok(code)
  }

  function t2(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code)
      return p
    }

    return nok(code)
  }

  function p(code) {
    // `p`
    if (code === 80 || code - 32 === 80) {
      effects.consume(code)
      return s
    }

    return nok(code)
  }

  function s(code) {
    // `s`
    if (code === 83 || code - 32 === 83) {
      effects.consume(code)
      return colon
    }

    return colon(code)
  }

  function colon(code) {
    // `:`
    if (code === 58) {
      effects.consume(code)
      return slash1
    }

    return nok(code)
  }

  function slash1(code) {
    // `/`
    if (code === 47) {
      effects.consume(code)
      return slash2
    }

    return nok(code)
  }

  function slash2(code) {
    // `/`
    if (code === 47) {
      effects.consume(code)
      return after
    }

    return nok(code)
  }

  function after(code) {
    return asciiControl(code) ||
      unicodeWhitespace(code) ||
      unicodePunctuation(code)
      ? nok(code)
      : effects.attempt(domain, effects.attempt(path, done), nok)(code)
  }

  function done(code) {
    effects.exit('literalAutolinkHttp')
    effects.exit('literalAutolink')
    return ok(code)
  }
}

function tokenizeWww(effects, ok, nok) {
  return start

  function start(code) {
    // Assume a `w`.
    effects.consume(code)
    return w2
  }

  function w2(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code)
      return w3
    }

    return nok(code)
  }

  function w3(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code)
      return dot
    }

    return nok(code)
  }

  function dot(code) {
    // `.`
    if (code === 46) {
      effects.consume(code)
      return after
    }

    return nok(code)
  }

  function after(code) {
    return code === null || markdownLineEnding(code) ? nok(code) : ok(code)
  }
}

function tokenizeDomain(effects, ok, nok) {
  var hasUnderscoreInLastSegment
  var hasUnderscoreInLastLastSegment

  return domain

  function domain(code) {
    // `&`
    if (code === 38) {
      return effects.check(
        namedCharacterReference,
        done,
        punctuationContinuation
      )(code)
    }

    if (code === 46 /* `.` */ || code === 95 /* `_` */) {
      return effects.check(punctuation, done, punctuationContinuation)(code)
    }

    // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
    // occur, which sounds like ASCII only, but they also support `www.點看.com`,
    // so that’s Unicode.
    // Instead of some new production for Unicode alphanumerics, markdown
    // already has that for Unicode punctuation and whitespace, so use those.
    if (
      asciiControl(code) ||
      unicodeWhitespace(code) ||
      (code !== 45 /* `-` */ && unicodePunctuation(code))
    ) {
      return done(code)
    }

    effects.consume(code)
    return domain
  }

  function punctuationContinuation(code) {
    // `.`
    if (code === 46) {
      hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment
      hasUnderscoreInLastSegment = undefined
      effects.consume(code)
      return domain
    }

    // `_`
    if (code === 95) hasUnderscoreInLastSegment = true

    effects.consume(code)
    return domain
  }

  function done(code) {
    if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizePath(effects, ok) {
  var balance = 0

  return inPath

  function inPath(code) {
    // `&`
    if (code === 38) {
      return effects.check(
        namedCharacterReference,
        ok,
        continuedPunctuation
      )(code)
    }

    // `(`
    if (code === 40) {
      balance++
    }

    // `)`
    if (code === 41) {
      return effects.check(paren, parenAtPathEnd, continuedPunctuation)(code)
    }

    if (pathEnd(code)) {
      return ok(code)
    }

    if (trailingPunctuation(code)) {
      return effects.check(punctuation, ok, continuedPunctuation)(code)
    }

    effects.consume(code)
    return inPath
  }

  function continuedPunctuation(code) {
    effects.consume(code)
    return inPath
  }

  function parenAtPathEnd(code) {
    balance--
    return balance < 0 ? ok(code) : continuedPunctuation(code)
  }
}

function tokenizeNamedCharacterReference(effects, ok, nok) {
  return start

  function start(code) {
    // Assume an ampersand.
    effects.consume(code)
    return inside
  }

  function inside(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return inside
    }

    // `;`
    if (code === 59) {
      effects.consume(code)
      return after
    }

    return nok(code)
  }

  function after(code) {
    // If the named character reference is followed by the end of the path, it’s
    // not continued punctuation.
    return pathEnd(code) ? ok(code) : nok(code)
  }
}

function tokenizeParen(effects, ok, nok) {
  return start

  function start(code) {
    // Assume a right paren.
    effects.consume(code)
    return after
  }

  function after(code) {
    // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.
    return pathEnd(code) ||
      // `)`
      code === 41
      ? ok(code)
      : nok(code)
  }
}

function tokenizePunctuation(effects, ok, nok) {
  return start

  function start(code) {
    // Always a valid trailing punctuation marker.
    effects.consume(code)
    return after
  }

  function after(code) {
    // Check the next.
    if (trailingPunctuation(code)) {
      effects.consume(code)
      return after
    }

    // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.
    return pathEnd(code) ? ok(code) : nok(code)
  }
}

function trailingPunctuation(code) {
  return (
    // `!`
    code === 33 ||
    // `"`
    code === 34 ||
    // `'`
    code === 39 ||
    // `)`
    code === 41 ||
    // `*`
    code === 42 ||
    // `,`
    code === 44 ||
    // `.`
    code === 46 ||
    // `:`
    code === 58 ||
    // `;`
    code === 59 ||
    // `<`
    code === 60 ||
    // `?`
    code === 63 ||
    // `_`.
    code === 95 ||
    // `~`
    code === 126
  )
}

function pathEnd(code) {
  return (
    // EOF.
    code === null ||
    // CR, LF, CRLF, HT, VS.
    code < 0 ||
    // Space.
    code === 32 ||
    // `<`
    code === 60
  )
}

function gfmAtext(code) {
  return (
    code === 43 /* `+` */ ||
    code === 45 /* `-` */ ||
    code === 46 /* `.` */ ||
    code === 95 /* `_` */ ||
    asciiAlphanumeric(code)
  )
}

function previousWww(code) {
  return (
    code === null ||
    code < 0 ||
    code === 32 /* ` ` */ ||
    code === 40 /* `(` */ ||
    code === 42 /* `*` */ ||
    code === 95 /* `_` */ ||
    code === 126 /* `~` */
  )
}

function previousHttp(code) {
  return code === null || !asciiAlpha(code)
}

function previousEmail(code) {
  return code !== 47 /* `/` */ && previousHttp(code)
}

function previous(events) {
  var index = events.length

  while (index--) {
    if (
      (events[index][1].type === 'labelLink' ||
        events[index][1].type === 'labelImage') &&
      !events[index][1]._balanced
    ) {
      return true
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-strikethrough/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/index.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = create

var classifyCharacter = __webpack_require__(/*! micromark/dist/util/classify-character */ "./node_modules/micromark/dist/util/classify-character.js")
var chunkedSplice = __webpack_require__(/*! micromark/dist/util/chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")
var resolveAll = __webpack_require__(/*! micromark/dist/util/resolve-all */ "./node_modules/micromark/dist/util/resolve-all.js")
var shallow = __webpack_require__(/*! micromark/dist/util/shallow */ "./node_modules/micromark/dist/util/shallow.js")

function create(options) {
  var settings = options || {}
  var single = settings.singleTilde
  var tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  }

  if (single === null || single === undefined) {
    single = true
  }

  return {text: {126: tokenizer}, insideSpan: {null: tokenizer}}

  // Take events and resolve strikethrough.
  function resolveAllStrikethrough(events, context) {
    var index = -1
    var strikethrough
    var text
    var open
    var nextEvents

    // Walk through all events.
    while (++index < events.length) {
      // Find a token that can close.
      if (
        events[index][0] === 'enter' &&
        events[index][1].type === 'strikethroughSequenceTemporary' &&
        events[index][1]._close
      ) {
        open = index

        // Now walk back to find an opener.
        while (open--) {
          // Find a token that can open the closer.
          if (
            events[open][0] === 'exit' &&
            events[open][1].type === 'strikethroughSequenceTemporary' &&
            events[open][1]._open &&
            // If the sizes are the same:
            events[index][1].end.offset - events[index][1].start.offset ===
              events[open][1].end.offset - events[open][1].start.offset
          ) {
            events[index][1].type = 'strikethroughSequence'
            events[open][1].type = 'strikethroughSequence'

            strikethrough = {
              type: 'strikethrough',
              start: shallow(events[open][1].start),
              end: shallow(events[index][1].end)
            }

            text = {
              type: 'strikethroughText',
              start: shallow(events[open][1].end),
              end: shallow(events[index][1].start)
            }

            // Opening.
            nextEvents = [
              ['enter', strikethrough, context],
              ['enter', events[open][1], context],
              ['exit', events[open][1], context],
              ['enter', text, context]
            ]

            // Between.
            chunkedSplice(
              nextEvents,
              nextEvents.length,
              0,
              resolveAll(
                context.parser.constructs.insideSpan.null,
                events.slice(open + 1, index),
                context
              )
            )

            // Closing.
            chunkedSplice(nextEvents, nextEvents.length, 0, [
              ['exit', text, context],
              ['enter', events[index][1], context],
              ['exit', events[index][1], context],
              ['exit', strikethrough, context]
            ])

            chunkedSplice(events, open - 1, index - open + 3, nextEvents)

            index = open + nextEvents.length - 2
            break
          }
        }
      }
    }

    return removeRemainingSequences(events)
  }

  function removeRemainingSequences(events) {
    var index = -1
    var length = events.length

    while (++index < length) {
      if (events[index][1].type === 'strikethroughSequenceTemporary') {
        events[index][1].type = 'data'
      }
    }

    return events
  }

  function tokenizeStrikethrough(effects, ok, nok) {
    var previous = this.previous
    var events = this.events
    var size = 0

    return start

    function start(code) {
      if (
        code !== 126 ||
        (previous === 126 &&
          events[events.length - 1][1].type !== 'characterEscape')
      ) {
        return nok(code)
      }

      effects.enter('strikethroughSequenceTemporary')
      return more(code)
    }

    function more(code) {
      var before = classifyCharacter(previous)
      var token
      var after

      if (code === 126) {
        // If this is the third marker, exit.
        if (size > 1) return nok(code)
        effects.consume(code)
        size++
        return more
      }

      if (size < 2 && !single) return nok(code)
      token = effects.exit('strikethroughSequenceTemporary')
      after = classifyCharacter(code)
      token._open = !after || (after === 2 && before)
      token._close = !before || (before === 2 && after)
      return ok(code)
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-table/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-table/index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm-table/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-table/syntax.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-table/syntax.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.flow = {
  null: {tokenize: tokenizeTable, resolve: resolveTable, interruptible: true}
}

var createSpace = __webpack_require__(/*! micromark/dist/tokenize/factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var setextUnderlineMini = {tokenize: tokenizeSetextUnderlineMini, partial: true}
var nextPrefixedOrBlank = {tokenize: tokenizeNextPrefixedOrBlank, partial: true}

function resolveTable(events, context) {
  var length = events.length
  var index = -1
  var token
  var inHead
  var inDelimiterRow
  var inRow
  var cell
  var content
  var text
  var contentStart
  var contentEnd
  var cellStart

  while (++index < length) {
    token = events[index][1]

    if (inRow) {
      if (token.type === 'temporaryTableCellContent') {
        contentStart = contentStart || index
        contentEnd = index
      }

      if (
        // Combine separate content parts into one.
        (token.type === 'tableCellDivider' || token.type === 'tableRow') &&
        contentEnd
      ) {
        content = {
          type: 'tableContent',
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        }
        text = {
          type: 'chunkText',
          start: content.start,
          end: content.end,
          contentType: 'text'
        }

        events.splice(
          contentStart,
          contentEnd - contentStart + 1,
          ['enter', content, context],
          ['enter', text, context],
          ['exit', text, context],
          ['exit', content, context]
        )
        index -= contentEnd - contentStart - 3
        length = events.length
        contentStart = undefined
        contentEnd = undefined
      }
    }

    if (
      events[index][0] === 'exit' &&
      cellStart &&
      cellStart + 1 < index &&
      (token.type === 'tableCellDivider' ||
        (token.type === 'tableRow' &&
          (cellStart + 3 < index ||
            events[cellStart][1].type !== 'whitespace')))
    ) {
      cell = {
        type: inDelimiterRow
          ? 'tableDelimiter'
          : inHead
          ? 'tableHeader'
          : 'tableData',
        start: events[cellStart][1].start,
        end: events[index][1].end
      }
      events.splice(index + (token.type === 'tableCellDivider' ? 1 : 0), 0, [
        'exit',
        cell,
        context
      ])
      events.splice(cellStart, 0, ['enter', cell, context])
      index += 2
      length = events.length
      cellStart = index + 1
    }

    if (token.type === 'tableRow') {
      inRow = events[index][0] === 'enter'

      if (inRow) {
        cellStart = index + 1
      }
    }

    if (token.type === 'tableDelimiterRow') {
      inDelimiterRow = events[index][0] === 'enter'

      if (inDelimiterRow) {
        cellStart = index + 1
      }
    }

    if (token.type === 'tableHead') {
      inHead = events[index][0] === 'enter'
    }
  }

  return events
}

function tokenizeTable(effects, ok, nok) {
  var align = []
  var tableHeaderCount = 0
  var seenDelimiter
  var hasDash

  return start

  function start(code) {
    /* istanbul ignore if - used to be passed in beta micromark versions. */
    if (code === null || code === -5 || code === -4 || code === -3) {
      return nok(code)
    }

    effects.enter('table')._align = align
    effects.enter('tableHead')
    effects.enter('tableRow')

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      return cellDividerHead(code)
    }

    tableHeaderCount++
    effects.enter('temporaryTableCellContent')
    // Can’t be space or eols at the start of a construct, so we’re in a cell.
    return inCellContentHead(code)
  }

  function cellDividerHead(code) {
    // Always a pipe.
    effects.enter('tableCellDivider')
    effects.consume(code)
    effects.exit('tableCellDivider')
    seenDelimiter = true
    return cellBreakHead
  }

  function cellBreakHead(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndHead(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceHead
    }

    if (seenDelimiter) {
      seenDelimiter = undefined
      tableHeaderCount++
    }

    // `|`
    if (code === 124) {
      return cellDividerHead(code)
    }

    // Anything else is cell content.
    effects.enter('temporaryTableCellContent')
    return inCellContentHead(code)
  }

  function inWhitespaceHead(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return inWhitespaceHead
    }

    effects.exit('whitespace')
    return cellBreakHead(code)
  }

  function inCellContentHead(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent')
      return cellBreakHead(code)
    }

    effects.consume(code)
    // `\`
    return code === 92 ? inCellContentEscapeHead : inCellContentHead
  }

  function inCellContentEscapeHead(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code)
      return inCellContentHead
    }

    // Anything else.
    return inCellContentHead(code)
  }

  function atRowEndHead(code) {
    if (code === null) {
      return nok(code)
    }

    effects.exit('tableRow')
    effects.exit('tableHead')

    // Always a line ending.
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')

    // If a setext heading, exit.
    return effects.check(
      setextUnderlineMini,
      nok,
      // Support an indent before the delimiter row.
      createSpace(effects, rowStartDelimiter, 'linePrefix', 4)
    )
  }

  function rowStartDelimiter(code) {
    // If there’s another space, or we’re at the EOL/EOF, exit.
    if (code === null || code < 0 || code === 32) {
      return nok(code)
    }

    effects.enter('tableDelimiterRow')
    return atDelimiterRowBreak(code)
  }

  function atDelimiterRowBreak(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceDelimiter
    }

    // `-`
    if (code === 45) {
      effects.enter('tableDelimiterFiller')
      effects.consume(code)
      hasDash = true
      align.push(null)
      return inFillerDelimiter
    }

    // `:`
    if (code === 58) {
      effects.enter('tableDelimiterAlignment')
      effects.consume(code)
      effects.exit('tableDelimiterAlignment')
      align.push('left')
      return afterLeftAlignment
    }

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      effects.enter('tableCellDivider')
      effects.consume(code)
      effects.exit('tableCellDivider')
      return atDelimiterRowBreak
    }

    return nok(code)
  }

  function inWhitespaceDelimiter(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return inWhitespaceDelimiter
    }

    effects.exit('whitespace')
    return atDelimiterRowBreak(code)
  }

  function inFillerDelimiter(code) {
    // `-`
    if (code === 45) {
      effects.consume(code)
      return inFillerDelimiter
    }

    effects.exit('tableDelimiterFiller')

    // `:`
    if (code === 58) {
      effects.enter('tableDelimiterAlignment')
      effects.consume(code)
      effects.exit('tableDelimiterAlignment')

      align[align.length - 1] =
        align[align.length - 1] === 'left' ? 'center' : 'right'

      return afterRightAlignment
    }

    return atDelimiterRowBreak(code)
  }

  function afterLeftAlignment(code) {
    // `-`
    if (code === 45) {
      effects.enter('tableDelimiterFiller')
      effects.consume(code)
      hasDash = true
      return inFillerDelimiter
    }

    // Anything else is not ok.
    return nok(code)
  }

  function afterRightAlignment(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceDelimiter
    }

    // `|`
    if (code === 124) {
      effects.enter('tableCellDivider')
      effects.consume(code)
      effects.exit('tableCellDivider')
      return atDelimiterRowBreak
    }

    return nok(code)
  }

  function rowEndDelimiter(code) {
    effects.exit('tableDelimiterRow')

    // Exit if there was no dash at all, or if the header cell count is not the
    // delimiter cell count.
    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code)
    }

    if (code === null) {
      return tableClose(code)
    }

    return effects.check(nextPrefixedOrBlank, tableClose, tableContinue)(code)
  }

  function tableClose(code) {
    effects.exit('table')
    return ok(code)
  }

  function tableContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    // We checked that it’s not a prefixed or blank line, so we’re certain a
    // body is coming, though it may be indented.
    return createSpace(effects, bodyStart, 'linePrefix', 4)
  }

  function bodyStart(code) {
    effects.enter('tableBody')
    return rowStartBody(code)
  }

  function rowStartBody(code) {
    effects.enter('tableRow')

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      return cellDividerBody(code)
    }

    effects.enter('temporaryTableCellContent')
    // Can’t be space or eols at the start of a construct, so we’re in a cell.
    return inCellContentBody(code)
  }

  function cellDividerBody(code) {
    // Always a pipe.
    effects.enter('tableCellDivider')
    effects.consume(code)
    effects.exit('tableCellDivider')
    return cellBreakBody
  }

  function cellBreakBody(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndBody(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceBody
    }

    // `|`
    if (code === 124) {
      return cellDividerBody(code)
    }

    // Anything else is cell content.
    effects.enter('temporaryTableCellContent')
    return inCellContentBody(code)
  }

  function inWhitespaceBody(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return inWhitespaceBody
    }

    effects.exit('whitespace')
    return cellBreakBody(code)
  }

  function inCellContentBody(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent')
      return cellBreakBody(code)
    }

    effects.consume(code)
    // `\`
    return code === 92 ? inCellContentEscapeBody : inCellContentBody
  }

  function inCellContentEscapeBody(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code)
      return inCellContentBody
    }

    // Anything else.
    return inCellContentBody(code)
  }

  function atRowEndBody(code) {
    effects.exit('tableRow')

    if (code === null) {
      return tableBodyClose(code)
    }

    return effects.check(
      nextPrefixedOrBlank,
      tableBodyClose,
      tableBodyContinue
    )(code)
  }

  function tableBodyClose(code) {
    effects.exit('tableBody')
    return tableClose(code)
  }

  function tableBodyContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    // Support an optional prefix, then start a body row.
    return createSpace(effects, rowStartBody, 'linePrefix', 4)
  }
}

// Based on micromark, but that won’t work as we’re in a table, and that expects
// content.
// <https://github.com/micromark/micromark/blob/main/lib/tokenize/setext-underline.js>
function tokenizeSetextUnderlineMini(effects, ok, nok) {
  return start

  function start(code) {
    // `-`
    if (code !== 45) {
      return nok(code)
    }

    effects.enter('setextUnderline')
    return sequence(code)
  }

  function sequence(code) {
    if (code === 45) {
      effects.consume(code)
      return sequence
    }

    return whitespace(code)
  }

  function whitespace(code) {
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return whitespace
    }

    if (code === null || code === -5 || code === -4 || code === -3) {
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeNextPrefixedOrBlank(effects, ok, nok) {
  var size = 0

  return start

  function start(code) {
    // This is a check, so we don’t care about tokens, but we open a bogus one
    // so we’re valid.
    effects.enter('check')
    // EOL.
    effects.consume(code)
    return whitespace
  }

  function whitespace(code) {
    // VS or SP.
    if (code === -1 || code === 32) {
      effects.consume(code)
      size++
      return size === 4 ? ok : whitespace
    }

    // EOF or whitespace
    if (code === null || code < 0) {
      return ok(code)
    }

    // Anything else.
    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-task-list-item/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/index.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm-task-list-item/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-task-list-item/syntax.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/syntax.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var markdownLineEndingOrSpace = __webpack_require__(/*! micromark/dist/character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var spaceFactory = __webpack_require__(/*! micromark/dist/tokenize/factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var prefixSize = __webpack_require__(/*! micromark/dist/util/prefix-size */ "./node_modules/micromark/dist/util/prefix-size.js")

var tasklistCheck = {tokenize: tokenizeTasklistCheck}

exports.text = {91: tasklistCheck}

function tokenizeTasklistCheck(effects, ok, nok) {
  var self = this

  return open

  function open(code) {
    if (
      // Exit if not `[`.
      code !== 91 ||
      // Exit if there’s stuff before.
      self.previous !== null ||
      // Exit if not in the first content that is the first child of a list
      // item.
      !self._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code)
    }

    effects.enter('taskListCheck')
    effects.enter('taskListCheckMarker')
    effects.consume(code)
    effects.exit('taskListCheckMarker')
    return inside
  }

  function inside(code) {
    // Tab or space.
    if (code === -2 || code === 32) {
      effects.enter('taskListCheckValueUnchecked')
      effects.consume(code)
      effects.exit('taskListCheckValueUnchecked')
      return close
    }

    // Upper- and lower `x`.
    if (code === 88 || code === 120) {
      effects.enter('taskListCheckValueChecked')
      effects.consume(code)
      effects.exit('taskListCheckValueChecked')
      return close
    }

    return nok(code)
  }

  function close(code) {
    // `]`
    if (code === 93) {
      effects.enter('taskListCheckMarker')
      effects.consume(code)
      effects.exit('taskListCheckMarker')
      effects.exit('taskListCheck')
      return effects.check({tokenize: spaceThenNonSpace}, ok, nok)
    }

    return nok(code)
  }
}

function spaceThenNonSpace(effects, ok, nok) {
  var self = this

  return spaceFactory(effects, after, 'whitespace')

  function after(code) {
    return prefixSize(self.events, 'whitespace') &&
      code !== null &&
      !markdownLineEndingOrSpace(code)
      ? ok(code)
      : nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm/syntax.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/syntax.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var combine = __webpack_require__(/*! micromark/dist/util/combine-extensions */ "./node_modules/micromark/dist/util/combine-extensions.js")
var autolink = __webpack_require__(/*! micromark-extension-gfm-autolink-literal */ "./node_modules/micromark-extension-gfm-autolink-literal/index.js")
var strikethrough = __webpack_require__(/*! micromark-extension-gfm-strikethrough */ "./node_modules/micromark-extension-gfm-strikethrough/index.js")
var table = __webpack_require__(/*! micromark-extension-gfm-table */ "./node_modules/micromark-extension-gfm-table/index.js")
var tasklist = __webpack_require__(/*! micromark-extension-gfm-task-list-item */ "./node_modules/micromark-extension-gfm-task-list-item/index.js")

module.exports = create

function create(options) {
  return combine([autolink, strikethrough(options), table, tasklist])
}


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-alpha.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-alpha.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiAlpha = regexCheck(/[A-Za-z]/)

module.exports = asciiAlpha


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-alphanumeric.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-alphanumeric.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/)

module.exports = asciiAlphanumeric


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-atext.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-atext.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/)

module.exports = asciiAtext


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-control.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-control.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


// Note: EOF is seen as ASCII control here, because `null < 32 == true`.
function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code < 32 || code === 127
  )
}

module.exports = asciiControl


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-digit.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-digit.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiDigit = regexCheck(/\d/)

module.exports = asciiDigit


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-hex-digit.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-hex-digit.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiHexDigit = regexCheck(/[\dA-Fa-f]/)

module.exports = asciiHexDigit


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-punctuation.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-punctuation.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/)

module.exports = asciiPunctuation


/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js":
/*!********************************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-line-ending-or-space.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


function markdownLineEndingOrSpace(code) {
  return code < 0 || code === 32
}

module.exports = markdownLineEndingOrSpace


/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-line-ending.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-line-ending.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


function markdownLineEnding(code) {
  return code < -2
}

module.exports = markdownLineEnding


/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-space.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-space.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";


function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32
}

module.exports = markdownSpace


/***/ }),

/***/ "./node_modules/micromark/dist/character/unicode-punctuation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/unicode-punctuation.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var unicodePunctuationRegex = __webpack_require__(/*! ../constant/unicode-punctuation-regex.js */ "./node_modules/micromark/dist/constant/unicode-punctuation-regex.js")
var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

// In fact adds to the bundle size.

var unicodePunctuation = regexCheck(unicodePunctuationRegex)

module.exports = unicodePunctuation


/***/ }),

/***/ "./node_modules/micromark/dist/character/unicode-whitespace.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/unicode-whitespace.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var unicodeWhitespace = regexCheck(/\s/)

module.exports = unicodeWhitespace


/***/ }),

/***/ "./node_modules/micromark/dist/constant/assign.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/constant/assign.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


var assign = Object.assign

module.exports = assign


/***/ }),

/***/ "./node_modules/micromark/dist/constant/from-char-code.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/from-char-code.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


var fromCharCode = String.fromCharCode

module.exports = fromCharCode


/***/ }),

/***/ "./node_modules/micromark/dist/constant/has-own-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/has-own-property.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";


var own = {}.hasOwnProperty

module.exports = own


/***/ }),

/***/ "./node_modules/micromark/dist/constant/html-block-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/html-block-names.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";


// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
var basics = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
]

module.exports = basics


/***/ }),

/***/ "./node_modules/micromark/dist/constant/html-raw-names.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/html-raw-names.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
var raws = ['pre', 'script', 'style', 'textarea']

module.exports = raws


/***/ }),

/***/ "./node_modules/micromark/dist/constant/splice.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/constant/splice.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


var splice = [].splice

module.exports = splice


/***/ }),

/***/ "./node_modules/micromark/dist/constant/unicode-punctuation-regex.js":
/*!***************************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/unicode-punctuation-regex.js ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";


// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
var unicodePunctuation = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/

module.exports = unicodePunctuation


/***/ }),

/***/ "./node_modules/micromark/dist/constructs.js":
/*!***************************************************!*\
  !*** ./node_modules/micromark/dist/constructs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({value: true}))

var text$1 = __webpack_require__(/*! ./initialize/text.js */ "./node_modules/micromark/dist/initialize/text.js")
var attention = __webpack_require__(/*! ./tokenize/attention.js */ "./node_modules/micromark/dist/tokenize/attention.js")
var autolink = __webpack_require__(/*! ./tokenize/autolink.js */ "./node_modules/micromark/dist/tokenize/autolink.js")
var blockQuote = __webpack_require__(/*! ./tokenize/block-quote.js */ "./node_modules/micromark/dist/tokenize/block-quote.js")
var characterEscape = __webpack_require__(/*! ./tokenize/character-escape.js */ "./node_modules/micromark/dist/tokenize/character-escape.js")
var characterReference = __webpack_require__(/*! ./tokenize/character-reference.js */ "./node_modules/micromark/dist/tokenize/character-reference.js")
var codeFenced = __webpack_require__(/*! ./tokenize/code-fenced.js */ "./node_modules/micromark/dist/tokenize/code-fenced.js")
var codeIndented = __webpack_require__(/*! ./tokenize/code-indented.js */ "./node_modules/micromark/dist/tokenize/code-indented.js")
var codeText = __webpack_require__(/*! ./tokenize/code-text.js */ "./node_modules/micromark/dist/tokenize/code-text.js")
var definition = __webpack_require__(/*! ./tokenize/definition.js */ "./node_modules/micromark/dist/tokenize/definition.js")
var hardBreakEscape = __webpack_require__(/*! ./tokenize/hard-break-escape.js */ "./node_modules/micromark/dist/tokenize/hard-break-escape.js")
var headingAtx = __webpack_require__(/*! ./tokenize/heading-atx.js */ "./node_modules/micromark/dist/tokenize/heading-atx.js")
var htmlFlow = __webpack_require__(/*! ./tokenize/html-flow.js */ "./node_modules/micromark/dist/tokenize/html-flow.js")
var htmlText = __webpack_require__(/*! ./tokenize/html-text.js */ "./node_modules/micromark/dist/tokenize/html-text.js")
var labelEnd = __webpack_require__(/*! ./tokenize/label-end.js */ "./node_modules/micromark/dist/tokenize/label-end.js")
var labelStartImage = __webpack_require__(/*! ./tokenize/label-start-image.js */ "./node_modules/micromark/dist/tokenize/label-start-image.js")
var labelStartLink = __webpack_require__(/*! ./tokenize/label-start-link.js */ "./node_modules/micromark/dist/tokenize/label-start-link.js")
var lineEnding = __webpack_require__(/*! ./tokenize/line-ending.js */ "./node_modules/micromark/dist/tokenize/line-ending.js")
var list = __webpack_require__(/*! ./tokenize/list.js */ "./node_modules/micromark/dist/tokenize/list.js")
var setextUnderline = __webpack_require__(/*! ./tokenize/setext-underline.js */ "./node_modules/micromark/dist/tokenize/setext-underline.js")
var thematicBreak = __webpack_require__(/*! ./tokenize/thematic-break.js */ "./node_modules/micromark/dist/tokenize/thematic-break.js")

var document = {
  42: list,
  // Asterisk
  43: list,
  // Plus sign
  45: list,
  // Dash
  48: list,
  // 0
  49: list,
  // 1
  50: list,
  // 2
  51: list,
  // 3
  52: list,
  // 4
  53: list,
  // 5
  54: list,
  // 6
  55: list,
  // 7
  56: list,
  // 8
  57: list,
  // 9
  62: blockQuote // Greater than
}
var contentInitial = {
  91: definition // Left square bracket
}
var flowInitial = {
  '-2': codeIndented,
  // Horizontal tab
  '-1': codeIndented,
  // Virtual space
  32: codeIndented // Space
}
var flow = {
  35: headingAtx,
  // Number sign
  42: thematicBreak,
  // Asterisk
  45: [setextUnderline, thematicBreak],
  // Dash
  60: htmlFlow,
  // Less than
  61: setextUnderline,
  // Equals to
  95: thematicBreak,
  // Underscore
  96: codeFenced,
  // Grave accent
  126: codeFenced // Tilde
}
var string = {
  38: characterReference,
  // Ampersand
  92: characterEscape // Backslash
}
var text = {
  '-5': lineEnding,
  // Carriage return
  '-4': lineEnding,
  // Line feed
  '-3': lineEnding,
  // Carriage return + line feed
  33: labelStartImage,
  // Exclamation mark
  38: characterReference,
  // Ampersand
  42: attention,
  // Asterisk
  60: [autolink, htmlText],
  // Less than
  91: labelStartLink,
  // Left square bracket
  92: [hardBreakEscape, characterEscape],
  // Backslash
  93: labelEnd,
  // Right square bracket
  95: attention,
  // Underscore
  96: codeText // Grave accent
}
var insideSpan = {
  null: [attention, text$1.resolver]
}
var disable = {
  null: []
}

exports.contentInitial = contentInitial
exports.disable = disable
exports.document = document
exports.flow = flow
exports.flowInitial = flowInitial
exports.insideSpan = insideSpan
exports.string = string
exports.text = text


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/content.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/content.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({value: true}))

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var factorySpace = __webpack_require__(/*! ../tokenize/factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var tokenize = initializeContent

function initializeContent(effects) {
  var contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  )
  var previous
  return contentStart

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return factorySpace(effects, contentStart, 'linePrefix')
  }

  function paragraphInitial(code) {
    effects.enter('paragraph')
    return lineStart(code)
  }

  function lineStart(code) {
    var token = effects.enter('chunkText', {
      contentType: 'text',
      previous: previous
    })

    if (previous) {
      previous.next = token
    }

    previous = token
    return data(code)
  }

  function data(code) {
    if (code === null) {
      effects.exit('chunkText')
      effects.exit('paragraph')
      effects.consume(code)
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      effects.exit('chunkText')
      return lineStart
    } // Data.

    effects.consume(code)
    return data
  }
}

exports.tokenize = tokenize


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/document.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/document.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({value: true}))

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var factorySpace = __webpack_require__(/*! ../tokenize/factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var partialBlankLine = __webpack_require__(/*! ../tokenize/partial-blank-line.js */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")

var tokenize = initializeDocument
var containerConstruct = {
  tokenize: tokenizeContainer
}
var lazyFlowConstruct = {
  tokenize: tokenizeLazyFlow
}

function initializeDocument(effects) {
  var self = this
  var stack = []
  var continued = 0
  var inspectConstruct = {
    tokenize: tokenizeInspect,
    partial: true
  }
  var inspectResult
  var childFlow
  var childToken
  return start

  function start(code) {
    if (continued < stack.length) {
      self.containerState = stack[continued][1]
      return effects.attempt(
        stack[continued][0].continuation,
        documentContinue,
        documentContinued
      )(code)
    }

    return documentContinued(code)
  }

  function documentContinue(code) {
    continued++
    return start(code)
  }

  function documentContinued(code) {
    // If we’re in a concrete construct (such as when expecting another line of
    // HTML, or we resulted in lazy content), we can immediately start flow.
    if (inspectResult && inspectResult.flowContinue) {
      return flowStart(code)
    }

    self.interrupt =
      childFlow &&
      childFlow.currentConstruct &&
      childFlow.currentConstruct.interruptible
    self.containerState = {}
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code)
  }

  function containerContinue(code) {
    stack.push([self.currentConstruct, self.containerState])
    self.containerState = undefined
    return documentContinued(code)
  }

  function flowStart(code) {
    if (code === null) {
      exitContainers(0, true)
      effects.consume(code)
      return
    }

    childFlow = childFlow || self.parser.flow(self.now())
    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    })
    return flowContinue(code)
  }

  function flowContinue(code) {
    if (code === null) {
      continueFlow(effects.exit('chunkFlow'))
      return flowStart(code)
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      continueFlow(effects.exit('chunkFlow'))
      return effects.check(inspectConstruct, documentAfterPeek)
    }

    effects.consume(code)
    return flowContinue
  }

  function documentAfterPeek(code) {
    exitContainers(
      inspectResult.continued,
      inspectResult && inspectResult.flowEnd
    )
    continued = 0
    return start(code)
  }

  function continueFlow(token) {
    if (childToken) childToken.next = token
    childToken = token
    childFlow.lazy = inspectResult && inspectResult.lazy
    childFlow.defineSkip(token.start)
    childFlow.write(self.sliceStream(token))
  }

  function exitContainers(size, end) {
    var index = stack.length // Close the flow.

    if (childFlow && end) {
      childFlow.write([null])
      childToken = childFlow = undefined
    } // Exit open containers.

    while (index-- > size) {
      self.containerState = stack[index][1]
      stack[index][0].exit.call(self, effects)
    }

    stack.length = size
  }

  function tokenizeInspect(effects, ok) {
    var subcontinued = 0
    inspectResult = {}
    return inspectStart

    function inspectStart(code) {
      if (subcontinued < stack.length) {
        self.containerState = stack[subcontinued][1]
        return effects.attempt(
          stack[subcontinued][0].continuation,
          inspectContinue,
          inspectLess
        )(code)
      } // If we’re continued but in a concrete flow, we can’t have more
      // containers.

      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        inspectResult.flowContinue = true
        return inspectDone(code)
      }

      self.interrupt =
        childFlow.currentConstruct && childFlow.currentConstruct.interruptible
      self.containerState = {}
      return effects.attempt(
        containerConstruct,
        inspectFlowEnd,
        inspectDone
      )(code)
    }

    function inspectContinue(code) {
      subcontinued++
      return self.containerState._closeFlow
        ? inspectFlowEnd(code)
        : inspectStart(code)
    }

    function inspectLess(code) {
      if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
        // Maybe another container?
        self.containerState = {}
        return effects.attempt(
          containerConstruct,
          inspectFlowEnd, // Maybe flow, or a blank line?
          effects.attempt(
            lazyFlowConstruct,
            inspectFlowEnd,
            effects.check(partialBlankLine, inspectFlowEnd, inspectLazy)
          )
        )(code)
      } // Otherwise we’re interrupting.

      return inspectFlowEnd(code)
    }

    function inspectLazy(code) {
      // Act as if all containers are continued.
      subcontinued = stack.length
      inspectResult.lazy = true
      inspectResult.flowContinue = true
      return inspectDone(code)
    } // We’re done with flow if we have more containers, or an interruption.

    function inspectFlowEnd(code) {
      inspectResult.flowEnd = true
      return inspectDone(code)
    }

    function inspectDone(code) {
      inspectResult.continued = subcontinued
      self.interrupt = self.containerState = undefined
      return ok(code)
    }
  }
}

function tokenizeContainer(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : 4
  )
}

function tokenizeLazyFlow(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.lazy(this.parser.constructs.flow, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : 4
  )
}

exports.tokenize = tokenize


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/flow.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/flow.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({value: true}))

var content = __webpack_require__(/*! ../tokenize/content.js */ "./node_modules/micromark/dist/tokenize/content.js")
var factorySpace = __webpack_require__(/*! ../tokenize/factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var partialBlankLine = __webpack_require__(/*! ../tokenize/partial-blank-line.js */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")

var tokenize = initializeFlow

function initializeFlow(effects) {
  var self = this
  var initial = effects.attempt(
    // Try to parse a blank line.
    partialBlankLine,
    atBlankEnding, // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content, afterConstruct)
        ),
        'linePrefix'
      )
    )
  )
  return initial

  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEndingBlank')
    effects.consume(code)
    effects.exit('lineEndingBlank')
    self.currentConstruct = undefined
    return initial
  }

  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    self.currentConstruct = undefined
    return initial
  }
}

exports.tokenize = tokenize


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/text.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/text.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({value: true}))

var assign = __webpack_require__(/*! ../constant/assign.js */ "./node_modules/micromark/dist/constant/assign.js")
var shallow = __webpack_require__(/*! ../util/shallow.js */ "./node_modules/micromark/dist/util/shallow.js")

var text = initializeFactory('text')
var string = initializeFactory('string')
var resolver = {
  resolveAll: createResolver()
}

function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === 'text' ? resolveAllLineSuffixes : undefined
    )
  }

  function initializeText(effects) {
    var self = this
    var constructs = this.parser.constructs[field]
    var text = effects.attempt(constructs, start, notText)
    return start

    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }

    function notText(code) {
      if (code === null) {
        effects.consume(code)
        return
      }

      effects.enter('data')
      effects.consume(code)
      return data
    }

    function data(code) {
      if (atBreak(code)) {
        effects.exit('data')
        return text(code)
      } // Data.

      effects.consume(code)
      return data
    }

    function atBreak(code) {
      var list = constructs[code]
      var index = -1

      if (code === null) {
        return true
      }

      if (list) {
        while (++index < list.length) {
          if (
            !list[index].previous ||
            list[index].previous.call(self, self.previous)
          ) {
            return true
          }
        }
      }
    }
  }
}

function createResolver(extraResolver) {
  return resolveAllText

  function resolveAllText(events, context) {
    var index = -1
    var enter // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.

    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index
          index++
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end
          events.splice(enter + 2, index - enter - 2)
          index = enter + 2
        }

        enter = undefined
      }
    }

    return extraResolver ? extraResolver(events, context) : events
  }
} // A rather ugly set of instructions which again looks at chunks in the input
// stream.
// The reason to do this here is that it is *much* faster to parse in reverse.
// And that we can’t hook into `null` to split the line suffix before an EOF.
// To do: figure out if we can make this into a clean utility, or even in core.
// As it will be useful for GFMs literal autolink extension (and maybe even
// tables?)

function resolveAllLineSuffixes(events, context) {
  var eventIndex = -1
  var chunks
  var data
  var chunk
  var index
  var bufferIndex
  var size
  var tabs
  var token

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === 'lineEnding') &&
      events[eventIndex - 1][1].type === 'data'
    ) {
      data = events[eventIndex - 1][1]
      chunks = context.sliceStream(data)
      index = chunks.length
      bufferIndex = -1
      size = 0
      tabs = undefined

      while (index--) {
        chunk = chunks[index]

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length

          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++
            bufferIndex--
          }

          if (bufferIndex) break
          bufferIndex = -1
        } // Number
        else if (chunk === -2) {
          tabs = true
          size++
        } else if (chunk === -1);
        else {
          // Replacement character, exit.
          index++
          break
        }
      }

      if (size) {
        token = {
          type:
            eventIndex === events.length || tabs || size < 2
              ? 'lineSuffix'
              : 'hardBreakTrailing',
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },
          end: shallow(data.end)
        }
        data.end = shallow(token.start)

        if (data.start.offset === data.end.offset) {
          assign(data, token)
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          )
          eventIndex += 2
        }
      }

      eventIndex++
    }
  }

  return events
}

exports.resolver = resolver
exports.string = string
exports.text = text


/***/ }),

/***/ "./node_modules/micromark/dist/parse.js":
/*!**********************************************!*\
  !*** ./node_modules/micromark/dist/parse.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var content = __webpack_require__(/*! ./initialize/content.js */ "./node_modules/micromark/dist/initialize/content.js")
var document = __webpack_require__(/*! ./initialize/document.js */ "./node_modules/micromark/dist/initialize/document.js")
var flow = __webpack_require__(/*! ./initialize/flow.js */ "./node_modules/micromark/dist/initialize/flow.js")
var text = __webpack_require__(/*! ./initialize/text.js */ "./node_modules/micromark/dist/initialize/text.js")
var combineExtensions = __webpack_require__(/*! ./util/combine-extensions.js */ "./node_modules/micromark/dist/util/combine-extensions.js")
var createTokenizer = __webpack_require__(/*! ./util/create-tokenizer.js */ "./node_modules/micromark/dist/util/create-tokenizer.js")
var miniflat = __webpack_require__(/*! ./util/miniflat.js */ "./node_modules/micromark/dist/util/miniflat.js")
var constructs = __webpack_require__(/*! ./constructs.js */ "./node_modules/micromark/dist/constructs.js")

function parse(options) {
  var settings = options || {}
  var parser = {
    defined: [],
    constructs: combineExtensions(
      [constructs].concat(miniflat(settings.extensions))
    ),
    content: create(content),
    document: create(document),
    flow: create(flow),
    string: create(text.string),
    text: create(text.text)
  }
  return parser

  function create(initializer) {
    return creator

    function creator(from) {
      return createTokenizer(parser, initializer, from)
    }
  }
}

module.exports = parse


/***/ }),

/***/ "./node_modules/micromark/dist/postprocess.js":
/*!****************************************************!*\
  !*** ./node_modules/micromark/dist/postprocess.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var subtokenize = __webpack_require__(/*! ./util/subtokenize.js */ "./node_modules/micromark/dist/util/subtokenize.js")

function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }

  return events
}

module.exports = postprocess


/***/ }),

/***/ "./node_modules/micromark/dist/preprocess.js":
/*!***************************************************!*\
  !*** ./node_modules/micromark/dist/preprocess.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


var search = /[\0\t\n\r]/g

function preprocess() {
  var start = true
  var column = 1
  var buffer = ''
  var atCarriageReturn
  return preprocessor

  function preprocessor(value, encoding, end) {
    var chunks = []
    var match
    var next
    var startPosition
    var endPosition
    var code
    value = buffer + value.toString(encoding)
    startPosition = 0
    buffer = ''

    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++
      }

      start = undefined
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition
      match = search.exec(value)
      endPosition = match ? match.index : value.length
      code = value.charCodeAt(endPosition)

      if (!match) {
        buffer = value.slice(startPosition)
        break
      }

      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3)
        atCarriageReturn = undefined
      } else {
        if (atCarriageReturn) {
          chunks.push(-5)
          atCarriageReturn = undefined
        }

        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition))
          column += endPosition - startPosition
        }

        if (code === 0) {
          chunks.push(65533)
          column++
        } else if (code === 9) {
          next = Math.ceil(column / 4) * 4
          chunks.push(-2)

          while (column++ < next) chunks.push(-1)
        } else if (code === 10) {
          chunks.push(-4)
          column = 1
        } // Must be carriage return.
        else {
          atCarriageReturn = true
          column = 1
        }
      }

      startPosition = endPosition + 1
    }

    if (end) {
      if (atCarriageReturn) chunks.push(-5)
      if (buffer) chunks.push(buffer)
      chunks.push(null)
    }

    return chunks
  }
}

module.exports = preprocess


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/attention.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/attention.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var chunkedPush = __webpack_require__(/*! ../util/chunked-push.js */ "./node_modules/micromark/dist/util/chunked-push.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var classifyCharacter = __webpack_require__(/*! ../util/classify-character.js */ "./node_modules/micromark/dist/util/classify-character.js")
var movePoint = __webpack_require__(/*! ../util/move-point.js */ "./node_modules/micromark/dist/util/move-point.js")
var resolveAll = __webpack_require__(/*! ../util/resolve-all.js */ "./node_modules/micromark/dist/util/resolve-all.js")
var shallow = __webpack_require__(/*! ../util/shallow.js */ "./node_modules/micromark/dist/util/shallow.js")

var attention = {
  name: 'attention',
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
}

function resolveAllAttention(events, context) {
  var index = -1
  var open
  var group
  var text
  var openingSequence
  var closingSequence
  var use
  var nextEvents
  var offset // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.

  while (++index < events.length) {
    // Find a token that can close.
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === 'attentionSequence' &&
      events[index][1]._close
    ) {
      open = index // Now walk back to find an opener.

      while (open--) {
        // Find a token that can open the closer.
        if (
          events[open][0] === 'exit' &&
          events[open][1].type === 'attentionSequence' &&
          events[open][1]._open && // If the markers are the same:
          context.sliceSerialize(events[open][1]).charCodeAt(0) ===
            context.sliceSerialize(events[index][1]).charCodeAt(0)
        ) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if (
            (events[open][1]._close || events[index][1]._open) &&
            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
            !(
              (events[open][1].end.offset -
                events[open][1].start.offset +
                events[index][1].end.offset -
                events[index][1].start.offset) %
              3
            )
          ) {
            continue
          } // Number of markers to use from the sequence.

          use =
            events[open][1].end.offset - events[open][1].start.offset > 1 &&
            events[index][1].end.offset - events[index][1].start.offset > 1
              ? 2
              : 1
          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: movePoint(shallow(events[open][1].end), -use),
            end: shallow(events[open][1].end)
          }
          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: shallow(events[index][1].start),
            end: movePoint(shallow(events[index][1].start), use)
          }
          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: shallow(events[open][1].end),
            end: shallow(events[index][1].start)
          }
          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: shallow(openingSequence.start),
            end: shallow(closingSequence.end)
          }
          events[open][1].end = shallow(openingSequence.start)
          events[index][1].start = shallow(closingSequence.end)
          nextEvents = [] // If there are more markers in the opening, add them before.

          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = chunkedPush(nextEvents, [
              ['enter', events[open][1], context],
              ['exit', events[open][1], context]
            ])
          } // Opening.

          nextEvents = chunkedPush(nextEvents, [
            ['enter', group, context],
            ['enter', openingSequence, context],
            ['exit', openingSequence, context],
            ['enter', text, context]
          ]) // Between.

          nextEvents = chunkedPush(
            nextEvents,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index),
              context
            )
          ) // Closing.

          nextEvents = chunkedPush(nextEvents, [
            ['exit', text, context],
            ['enter', closingSequence, context],
            ['exit', closingSequence, context],
            ['exit', group, context]
          ]) // If there are more markers in the closing, add them after.

          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2
            nextEvents = chunkedPush(nextEvents, [
              ['enter', events[index][1], context],
              ['exit', events[index][1], context]
            ])
          } else {
            offset = 0
          }

          chunkedSplice(events, open - 1, index - open + 3, nextEvents)
          index = open + nextEvents.length - offset - 2
          break
        }
      }
    }
  } // Remove remaining sequences.

  index = -1

  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data'
    }
  }

  return events
}

function tokenizeAttention(effects, ok) {
  var before = classifyCharacter(this.previous)
  var marker
  return start

  function start(code) {
    effects.enter('attentionSequence')
    marker = code
    return sequence(code)
  }

  function sequence(code) {
    var token
    var after
    var open
    var close

    if (code === marker) {
      effects.consume(code)
      return sequence
    }

    token = effects.exit('attentionSequence')
    after = classifyCharacter(code)
    open = !after || (after === 2 && before)
    close = !before || (before === 2 && after)
    token._open = marker === 42 ? open : open && (before || !close)
    token._close = marker === 42 ? close : close && (after || !open)
    return ok(code)
  }
}

module.exports = attention


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/autolink.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/autolink.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha.js */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric.js */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiAtext = __webpack_require__(/*! ../character/ascii-atext.js */ "./node_modules/micromark/dist/character/ascii-atext.js")
var asciiControl = __webpack_require__(/*! ../character/ascii-control.js */ "./node_modules/micromark/dist/character/ascii-control.js")

var autolink = {
  name: 'autolink',
  tokenize: tokenizeAutolink
}

function tokenizeAutolink(effects, ok, nok) {
  var size = 1
  return start

  function start(code) {
    effects.enter('autolink')
    effects.enter('autolinkMarker')
    effects.consume(code)
    effects.exit('autolinkMarker')
    effects.enter('autolinkProtocol')
    return open
  }

  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return schemeOrEmailAtext
    }

    return asciiAtext(code) ? emailAtext(code) : nok(code)
  }

  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)
      ? schemeInsideOrEmailAtext(code)
      : emailAtext(code)
  }

  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code)
      return urlInside
    }

    if (
      (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&
      size++ < 32
    ) {
      effects.consume(code)
      return schemeInsideOrEmailAtext
    }

    return emailAtext(code)
  }

  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol')
      return end(code)
    }

    if (code === 32 || code === 60 || asciiControl(code)) {
      return nok(code)
    }

    effects.consume(code)
    return urlInside
  }

  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (asciiAtext(code)) {
      effects.consume(code)
      return emailAtext
    }

    return nok(code)
  }

  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
  }

  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (code === 62) {
      // Exit, then change the type.
      effects.exit('autolinkProtocol').type = 'autolinkEmail'
      return end(code)
    }

    return emailValue(code)
  }

  function emailValue(code) {
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      effects.consume(code)
      return code === 45 ? emailValue : emailLabel
    }

    return nok(code)
  }

  function end(code) {
    effects.enter('autolinkMarker')
    effects.consume(code)
    effects.exit('autolinkMarker')
    effects.exit('autolink')
    return ok
  }
}

module.exports = autolink


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/block-quote.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/block-quote.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit: exit
}

function tokenizeBlockQuoteStart(effects, ok, nok) {
  var self = this
  return start

  function start(code) {
    if (code === 62) {
      if (!self.containerState.open) {
        effects.enter('blockQuote', {
          _container: true
        })
        self.containerState.open = true
      }

      effects.enter('blockQuotePrefix')
      effects.enter('blockQuoteMarker')
      effects.consume(code)
      effects.exit('blockQuoteMarker')
      return after
    }

    return nok(code)
  }

  function after(code) {
    if (markdownSpace(code)) {
      effects.enter('blockQuotePrefixWhitespace')
      effects.consume(code)
      effects.exit('blockQuotePrefixWhitespace')
      effects.exit('blockQuotePrefix')
      return ok
    }

    effects.exit('blockQuotePrefix')
    return ok(code)
  }
}

function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(blockQuote, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : 4
  )
}

function exit(effects) {
  effects.exit('blockQuote')
}

module.exports = blockQuote


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/character-escape.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/character-escape.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var asciiPunctuation = __webpack_require__(/*! ../character/ascii-punctuation.js */ "./node_modules/micromark/dist/character/ascii-punctuation.js")

var characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
}

function tokenizeCharacterEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('characterEscape')
    effects.enter('escapeMarker')
    effects.consume(code)
    effects.exit('escapeMarker')
    return open
  }

  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter('characterEscapeValue')
      effects.consume(code)
      effects.exit('characterEscapeValue')
      effects.exit('characterEscape')
      return ok
    }

    return nok(code)
  }
}

module.exports = characterEscape


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/character-reference.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/character-reference.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var decodeEntity = __webpack_require__(/*! parse-entities/decode-entity.js */ "./node_modules/parse-entities/decode-entity.browser.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric.js */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiDigit = __webpack_require__(/*! ../character/ascii-digit.js */ "./node_modules/micromark/dist/character/ascii-digit.js")
var asciiHexDigit = __webpack_require__(/*! ../character/ascii-hex-digit.js */ "./node_modules/micromark/dist/character/ascii-hex-digit.js")

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var decodeEntity__default = /*#__PURE__*/ _interopDefaultLegacy(decodeEntity)

var characterReference = {
  name: 'characterReference',
  tokenize: tokenizeCharacterReference
}

function tokenizeCharacterReference(effects, ok, nok) {
  var self = this
  var size = 0
  var max
  var test
  return start

  function start(code) {
    effects.enter('characterReference')
    effects.enter('characterReferenceMarker')
    effects.consume(code)
    effects.exit('characterReferenceMarker')
    return open
  }

  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric')
      effects.consume(code)
      effects.exit('characterReferenceMarkerNumeric')
      return numeric
    }

    effects.enter('characterReferenceValue')
    max = 31
    test = asciiAlphanumeric
    return value(code)
  }

  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal')
      effects.consume(code)
      effects.exit('characterReferenceMarkerHexadecimal')
      effects.enter('characterReferenceValue')
      max = 6
      test = asciiHexDigit
      return value
    }

    effects.enter('characterReferenceValue')
    max = 7
    test = asciiDigit
    return value(code)
  }

  function value(code) {
    var token

    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue')

      if (
        test === asciiAlphanumeric &&
        !decodeEntity__default['default'](self.sliceSerialize(token))
      ) {
        return nok(code)
      }

      effects.enter('characterReferenceMarker')
      effects.consume(code)
      effects.exit('characterReferenceMarker')
      effects.exit('characterReference')
      return ok
    }

    if (test(code) && size++ < max) {
      effects.consume(code)
      return value
    }

    return nok(code)
  }
}

module.exports = characterReference


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-fenced.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-fenced.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size.js */ "./node_modules/micromark/dist/util/prefix-size.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var codeFenced = {
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced,
  concrete: true
}

function tokenizeCodeFenced(effects, ok, nok) {
  var self = this
  var closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  }
  var initialPrefix = prefixSize(this.events, 'linePrefix')
  var sizeOpen = 0
  var marker
  return start

  function start(code) {
    effects.enter('codeFenced')
    effects.enter('codeFencedFence')
    effects.enter('codeFencedFenceSequence')
    marker = code
    return sequenceOpen(code)
  }

  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code)
      sizeOpen++
      return sequenceOpen
    }

    effects.exit('codeFencedFenceSequence')
    return sizeOpen < 3
      ? nok(code)
      : factorySpace(effects, infoOpen, 'whitespace')(code)
  }

  function infoOpen(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceInfo')
    effects.enter('chunkString', {
      contentType: 'string'
    })
    return info(code)
  }

  function info(code) {
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('chunkString')
      effects.exit('codeFencedFenceInfo')
      return factorySpace(effects, infoAfter, 'whitespace')(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code)
    return info
  }

  function infoAfter(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceMeta')
    effects.enter('chunkString', {
      contentType: 'string'
    })
    return meta(code)
  }

  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('chunkString')
      effects.exit('codeFencedFenceMeta')
      return openAfter(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code)
    return meta
  }

  function openAfter(code) {
    effects.exit('codeFencedFence')
    return self.interrupt ? ok(code) : content(code)
  }

  function content(code) {
    if (code === null) {
      return after(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return effects.attempt(
        closingFenceConstruct,
        after,
        initialPrefix
          ? factorySpace(effects, content, 'linePrefix', initialPrefix + 1)
          : content
      )
    }

    effects.enter('codeFlowValue')
    return contentContinue(code)
  }

  function contentContinue(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue')
      return content(code)
    }

    effects.consume(code)
    return contentContinue
  }

  function after(code) {
    effects.exit('codeFenced')
    return ok(code)
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0
    return factorySpace(
      effects,
      closingSequenceStart,
      'linePrefix',
      this.parser.constructs.disable.null.indexOf('codeIndented') > -1
        ? undefined
        : 4
    )

    function closingSequenceStart(code) {
      effects.enter('codeFencedFence')
      effects.enter('codeFencedFenceSequence')
      return closingSequence(code)
    }

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code)
        size++
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit('codeFencedFenceSequence')
      return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
    }

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFencedFence')
        return ok(code)
      }

      return nok(code)
    }
  }
}

module.exports = codeFenced


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-indented.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-indented.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size.js */ "./node_modules/micromark/dist/util/prefix-size.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented,
  resolve: resolveCodeIndented
}
var indentedContentConstruct = {
  tokenize: tokenizeIndentedContent,
  partial: true
}

function resolveCodeIndented(events, context) {
  var code = {
    type: 'codeIndented',
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  }
  chunkedSplice(events, 0, 0, [['enter', code, context]])
  chunkedSplice(events, events.length, 0, [['exit', code, context]])
  return events
}

function tokenizeCodeIndented(effects, ok, nok) {
  return effects.attempt(indentedContentConstruct, afterPrefix, nok)

  function afterPrefix(code) {
    if (code === null) {
      return ok(code)
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(indentedContentConstruct, afterPrefix, ok)(code)
    }

    effects.enter('codeFlowValue')
    return content(code)
  }

  function content(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue')
      return afterPrefix(code)
    }

    effects.consume(code)
    return content
  }
}

function tokenizeIndentedContent(effects, ok, nok) {
  var self = this
  return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)

  function afterPrefix(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)
    }

    return prefixSize(self.events, 'linePrefix') < 4 ? nok(code) : ok(code)
  }
}

module.exports = codeIndented


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-text.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-text.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var codeText = {
  name: 'codeText',
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous: previous
}

function resolveCodeText(events) {
  var tailExitIndex = events.length - 4
  var headEnterIndex = 3
  var index
  var enter // If we start and end with an EOL or a space.

  if (
    (events[headEnterIndex][1].type === 'lineEnding' ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === 'lineEnding' ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex // And we have data.

    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = events[headEnterIndex][1].type =
          'codeTextPadding'
        headEnterIndex += 2
        tailExitIndex -= 2
        break
      }
    }
  } // Merge adjacent spaces and data.

  index = headEnterIndex - 1
  tailExitIndex++

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === 'lineEnding'
    ) {
      events[enter][1].type = 'codeTextData'

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end
        events.splice(enter + 2, index - enter - 2)
        tailExitIndex -= index - enter - 2
        index = enter + 2
      }

      enter = undefined
    }
  }

  return events
}

function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}

function tokenizeCodeText(effects, ok, nok) {
  var sizeOpen = 0
  var size
  var token
  return start

  function start(code) {
    effects.enter('codeText')
    effects.enter('codeTextSequence')
    return openingSequence(code)
  }

  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code)
      sizeOpen++
      return openingSequence
    }

    effects.exit('codeTextSequence')
    return gap(code)
  }

  function gap(code) {
    // EOF.
    if (code === null) {
      return nok(code)
    } // Closing fence?
    // Could also be data.

    if (code === 96) {
      token = effects.enter('codeTextSequence')
      size = 0
      return closingSequence(code)
    } // Tabs don’t work, and virtual spaces don’t make sense.

    if (code === 32) {
      effects.enter('space')
      effects.consume(code)
      effects.exit('space')
      return gap
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return gap
    } // Data.

    effects.enter('codeTextData')
    return data(code)
  } // In code.

  function data(code) {
    if (
      code === null ||
      code === 32 ||
      code === 96 ||
      markdownLineEnding(code)
    ) {
      effects.exit('codeTextData')
      return gap(code)
    }

    effects.consume(code)
    return data
  } // Closing fence.

  function closingSequence(code) {
    // More.
    if (code === 96) {
      effects.consume(code)
      size++
      return closingSequence
    } // Done!

    if (size === sizeOpen) {
      effects.exit('codeTextSequence')
      effects.exit('codeText')
      return ok(code)
    } // More or less accents: mark as data.

    token.type = 'codeTextData'
    return data(code)
  }
}

module.exports = codeText


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/content.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/content.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size.js */ "./node_modules/micromark/dist/util/prefix-size.js")
var subtokenize = __webpack_require__(/*! ../util/subtokenize.js */ "./node_modules/micromark/dist/util/subtokenize.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

// No name because it must not be turned off.
var content = {
  tokenize: tokenizeContent,
  resolve: resolveContent,
  interruptible: true,
  lazy: true
}
var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
} // Content is transparent: it’s parsed right now. That way, definitions are also
// parsed right now: before text in paragraphs (specifically, media) are parsed.

function resolveContent(events) {
  subtokenize(events)
  return events
}

function tokenizeContent(effects, ok) {
  var previous
  return start

  function start(code) {
    effects.enter('content')
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    })
    return data(code)
  }

  function data(code) {
    if (code === null) {
      return contentEnd(code)
    }

    if (markdownLineEnding(code)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code)
    } // Data.

    effects.consume(code)
    return data
  }

  function contentEnd(code) {
    effects.exit('chunkContent')
    effects.exit('content')
    return ok(code)
  }

  function contentContinue(code) {
    effects.consume(code)
    effects.exit('chunkContent')
    previous = previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous: previous
    })
    return data
  }
}

function tokenizeContinuation(effects, ok, nok) {
  var self = this
  return startLookahead

  function startLookahead(code) {
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return factorySpace(effects, prefixed, 'linePrefix')
  }

  function prefixed(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    if (
      self.parser.constructs.disable.null.indexOf('codeIndented') > -1 ||
      prefixSize(self.events, 'linePrefix') < 4
    ) {
      return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
    }

    return ok(code)
  }
}

module.exports = content


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/definition.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/definition.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier.js */ "./node_modules/micromark/dist/util/normalize-identifier.js")
var factoryDestination = __webpack_require__(/*! ./factory-destination.js */ "./node_modules/micromark/dist/tokenize/factory-destination.js")
var factoryLabel = __webpack_require__(/*! ./factory-label.js */ "./node_modules/micromark/dist/tokenize/factory-label.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var factoryWhitespace = __webpack_require__(/*! ./factory-whitespace.js */ "./node_modules/micromark/dist/tokenize/factory-whitespace.js")
var factoryTitle = __webpack_require__(/*! ./factory-title.js */ "./node_modules/micromark/dist/tokenize/factory-title.js")

var definition = {
  name: 'definition',
  tokenize: tokenizeDefinition
}
var titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
}

function tokenizeDefinition(effects, ok, nok) {
  var self = this
  var identifier
  return start

  function start(code) {
    effects.enter('definition')
    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(code)
  }

  function labelAfter(code) {
    identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    )

    if (code === 58) {
      effects.enter('definitionMarker')
      effects.consume(code)
      effects.exit('definitionMarker') // Note: blank lines can’t exist in content.

      return factoryWhitespace(
        effects,
        factoryDestination(
          effects,
          effects.attempt(
            titleConstruct,
            factorySpace(effects, after, 'whitespace'),
            factorySpace(effects, after, 'whitespace')
          ),
          nok,
          'definitionDestination',
          'definitionDestinationLiteral',
          'definitionDestinationLiteralMarker',
          'definitionDestinationRaw',
          'definitionDestinationString'
        )
      )
    }

    return nok(code)
  }

  function after(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('definition')

      if (self.parser.defined.indexOf(identifier) < 0) {
        self.parser.defined.push(identifier)
      }

      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeTitle(effects, ok, nok) {
  return start

  function start(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, before)(code)
      : nok(code)
  }

  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(
        effects,
        factorySpace(effects, after, 'whitespace'),
        nok,
        'definitionTitle',
        'definitionTitleMarker',
        'definitionTitleString'
      )(code)
    }

    return nok(code)
  }

  function after(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}

module.exports = definition


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-destination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-destination.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var asciiControl = __webpack_require__(/*! ../character/ascii-control.js */ "./node_modules/micromark/dist/character/ascii-control.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

// eslint-disable-next-line max-params
function destinationFactory(
  effects,
  ok,
  nok,
  type,
  literalType,
  literalMarkerType,
  rawType,
  stringType,
  max
) {
  var limit = max || Infinity
  var balance = 0
  return start

  function start(code) {
    if (code === 60) {
      effects.enter(type)
      effects.enter(literalType)
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      return destinationEnclosedBefore
    }

    if (asciiControl(code) || code === 41) {
      return nok(code)
    }

    effects.enter(type)
    effects.enter(rawType)
    effects.enter(stringType)
    effects.enter('chunkString', {
      contentType: 'string'
    })
    return destinationRaw(code)
  }

  function destinationEnclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      effects.exit(literalType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    effects.enter('chunkString', {
      contentType: 'string'
    })
    return destinationEnclosed(code)
  }

  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString')
      effects.exit(stringType)
      return destinationEnclosedBefore(code)
    }

    if (code === null || code === 60 || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code)
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed
  }

  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code)
      return destinationEnclosed
    }

    return destinationEnclosed(code)
  }

  function destinationRaw(code) {
    if (code === 40) {
      if (++balance > limit) return nok(code)
      effects.consume(code)
      return destinationRaw
    }

    if (code === 41) {
      if (!balance--) {
        effects.exit('chunkString')
        effects.exit(stringType)
        effects.exit(rawType)
        effects.exit(type)
        return ok(code)
      }

      effects.consume(code)
      return destinationRaw
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code)
      effects.exit('chunkString')
      effects.exit(stringType)
      effects.exit(rawType)
      effects.exit(type)
      return ok(code)
    }

    if (asciiControl(code)) return nok(code)
    effects.consume(code)
    return code === 92 ? destinationRawEscape : destinationRaw
  }

  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code)
      return destinationRaw
    }

    return destinationRaw(code)
  }
}

module.exports = destinationFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-label.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-label.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")

// eslint-disable-next-line max-params
function labelFactory(effects, ok, nok, type, markerType, stringType) {
  var self = this
  var size = 0
  var data
  return start

  function start(code) {
    effects.enter(type)
    effects.enter(markerType)
    effects.consume(code)
    effects.exit(markerType)
    effects.enter(stringType)
    return atBreak
  }

  function atBreak(code) {
    if (
      code === null ||
      code === 91 ||
      (code === 93 && !data) ||
      /* c8 ignore next */
      (code === 94 &&
        /* c8 ignore next */
        !size &&
        /* c8 ignore next */
        '_hiddenFootnoteSupport' in self.parser.constructs) ||
      size > 999
    ) {
      return nok(code)
    }

    if (code === 93) {
      effects.exit(stringType)
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return atBreak
    }

    effects.enter('chunkString', {
      contentType: 'string'
    })
    return label(code)
  }

  function label(code) {
    if (
      code === null ||
      code === 91 ||
      code === 93 ||
      markdownLineEnding(code) ||
      size++ > 999
    ) {
      effects.exit('chunkString')
      return atBreak(code)
    }

    effects.consume(code)
    data = data || !markdownSpace(code)
    return code === 92 ? labelEscape : label
  }

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code)
      size++
      return label
    }

    return label(code)
  }
}

module.exports = labelFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-space.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-space.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")

function spaceFactory(effects, ok, type, max) {
  var limit = max ? max - 1 : Infinity
  var size = 0
  return start

  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type)
      return prefix(code)
    }

    return ok(code)
  }

  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code)
      return prefix
    }

    effects.exit(type)
    return ok(code)
  }
}

module.exports = spaceFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-title.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-title.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function titleFactory(effects, ok, nok, type, markerType, stringType) {
  var marker
  return start

  function start(code) {
    effects.enter(type)
    effects.enter(markerType)
    effects.consume(code)
    effects.exit(markerType)
    marker = code === 40 ? 41 : code
    return atFirstTitleBreak
  }

  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    return atTitleBreak(code)
  }

  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType)
      return atFirstTitleBreak(marker)
    }

    if (code === null) {
      return nok(code)
    } // Note: blank lines can’t exist in content.

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return factorySpace(effects, atTitleBreak, 'linePrefix')
    }

    effects.enter('chunkString', {
      contentType: 'string'
    })
    return title(code)
  }

  function title(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit('chunkString')
      return atTitleBreak(code)
    }

    effects.consume(code)
    return code === 92 ? titleEscape : title
  }

  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code)
      return title
    }

    return title(code)
  }
}

module.exports = titleFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-whitespace.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-whitespace.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function whitespaceFactory(effects, ok) {
  var seen
  return start

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      seen = true
      return start
    }

    if (markdownSpace(code)) {
      return factorySpace(
        effects,
        start,
        seen ? 'linePrefix' : 'lineSuffix'
      )(code)
    }

    return ok(code)
  }
}

module.exports = whitespaceFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/hard-break-escape.js":
/*!*******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/hard-break-escape.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
}

function tokenizeHardBreakEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('hardBreakEscape')
    effects.enter('escapeMarker')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (markdownLineEnding(code)) {
      effects.exit('escapeMarker')
      effects.exit('hardBreakEscape')
      return ok(code)
    }

    return nok(code)
  }
}

module.exports = hardBreakEscape


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/heading-atx.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/heading-atx.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
}

function resolveHeadingAtx(events, context) {
  var contentEnd = events.length - 2
  var contentStart = 3
  var content
  var text // Prefix whitespace, part of the opening.

  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2
  } // Suffix whitespace, part of the closing.

  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === 'whitespace'
  ) {
    contentEnd -= 2
  }

  if (
    events[contentEnd][1].type === 'atxHeadingSequence' &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === 'whitespace'))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4
  }

  if (contentEnd > contentStart) {
    content = {
      type: 'atxHeadingText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    }
    text = {
      type: 'chunkText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: 'text'
    }
    chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ])
  }

  return events
}

function tokenizeHeadingAtx(effects, ok, nok) {
  var self = this
  var size = 0
  return start

  function start(code) {
    effects.enter('atxHeading')
    effects.enter('atxHeadingSequence')
    return fenceOpenInside(code)
  }

  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code)
      return fenceOpenInside
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingSequence')
      return self.interrupt ? ok(code) : headingBreak(code)
    }

    return nok(code)
  }

  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence')
      return sequence(code)
    }

    if (code === null || markdownLineEnding(code)) {
      effects.exit('atxHeading')
      return ok(code)
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, headingBreak, 'whitespace')(code)
    }

    effects.enter('atxHeadingText')
    return data(code)
  }

  function sequence(code) {
    if (code === 35) {
      effects.consume(code)
      return sequence
    }

    effects.exit('atxHeadingSequence')
    return headingBreak(code)
  }

  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingText')
      return headingBreak(code)
    }

    effects.consume(code)
    return data
  }
}

module.exports = headingAtx


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/html-flow.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/html-flow.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha.js */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric.js */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var fromCharCode = __webpack_require__(/*! ../constant/from-char-code.js */ "./node_modules/micromark/dist/constant/from-char-code.js")
var htmlBlockNames = __webpack_require__(/*! ../constant/html-block-names.js */ "./node_modules/micromark/dist/constant/html-block-names.js")
var htmlRawNames = __webpack_require__(/*! ../constant/html-raw-names.js */ "./node_modules/micromark/dist/constant/html-raw-names.js")
var partialBlankLine = __webpack_require__(/*! ./partial-blank-line.js */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")

var htmlFlow = {
  name: 'htmlFlow',
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
}
var nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
}

function resolveToHtmlFlow(events) {
  var index = events.length

  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break
    }
  }

  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start // Add the prefix start to the HTML line token.

    events[index + 1][1].start = events[index - 2][1].start // Remove the line prefix.

    events.splice(index - 2, 2)
  }

  return events
}

function tokenizeHtmlFlow(effects, ok, nok) {
  var self = this
  var kind
  var startTag
  var buffer
  var index
  var marker
  return start

  function start(code) {
    effects.enter('htmlFlow')
    effects.enter('htmlFlowData')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code)
      return declarationStart
    }

    if (code === 47) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code)
      kind = 3 // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.

      return self.interrupt ? ok : continuationDeclarationInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      startTag = true
      return tagName
    }

    return nok(code)
  }

  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code)
      kind = 2
      return commentOpenInside
    }

    if (code === 91) {
      effects.consume(code)
      kind = 5
      buffer = 'CDATA['
      index = 0
      return cdataOpenInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      kind = 4
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code)
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length
        ? self.interrupt
          ? ok
          : continuation
        : cdataOpenInside
    }

    return nok(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function tagName(code) {
    if (
      code === null ||
      code === 47 ||
      code === 62 ||
      markdownLineEndingOrSpace(code)
    ) {
      if (
        code !== 47 &&
        startTag &&
        htmlRawNames.indexOf(buffer.toLowerCase()) > -1
      ) {
        kind = 1
        return self.interrupt ? ok(code) : continuation(code)
      }

      if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
        kind = 6

        if (code === 47) {
          effects.consume(code)
          return basicSelfClosing
        }

        return self.interrupt ? ok(code) : continuation(code)
      }

      kind = 7 // Do not support complete HTML when interrupting.

      return self.interrupt
        ? nok(code)
        : startTag
        ? completeAttributeNameBefore(code)
        : completeClosingTagAfter(code)
    }

    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code)
      return self.interrupt ? ok : continuation
    }

    return nok(code)
  }

  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeClosingTagAfter
    }

    return completeEnd(code)
  }

  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code)
      return completeEnd
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code)
      return completeAttributeName
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameBefore
    }

    return completeEnd(code)
  }

  function completeAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return completeAttributeName
    }

    return completeAttributeNameAfter(code)
  }

  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameAfter
    }

    return completeAttributeNameBefore(code)
  }

  function completeAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code)
      marker = code
      return completeAttributeValueQuoted
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    marker = undefined
    return completeAttributeValueUnquoted(code)
  }

  function completeAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return completeAttributeValueQuotedAfter
    }

    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code)
    return completeAttributeValueQuoted
  }

  function completeAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96 ||
      markdownLineEndingOrSpace(code)
    ) {
      return completeAttributeNameAfter(code)
    }

    effects.consume(code)
    return completeAttributeValueUnquoted
  }

  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace(code)) {
      return completeAttributeNameBefore(code)
    }

    return nok(code)
  }

  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code)
      return completeAfter
    }

    return nok(code)
  }

  function completeAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAfter
    }

    return code === null || markdownLineEnding(code)
      ? continuation(code)
      : nok(code)
  }

  function continuation(code) {
    if (code === 45 && kind === 2) {
      effects.consume(code)
      return continuationCommentInside
    }

    if (code === 60 && kind === 1) {
      effects.consume(code)
      return continuationRawTagOpen
    }

    if (code === 62 && kind === 4) {
      effects.consume(code)
      return continuationClose
    }

    if (code === 63 && kind === 3) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    if (code === 93 && kind === 5) {
      effects.consume(code)
      return continuationCharacterDataInside
    }

    if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
      return effects.check(
        nextBlankConstruct,
        continuationClose,
        continuationAtLineEnding
      )(code)
    }

    if (code === null || markdownLineEnding(code)) {
      return continuationAtLineEnding(code)
    }

    effects.consume(code)
    return continuation
  }

  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData')
    return htmlContinueStart(code)
  }

  function htmlContinueStart(code) {
    if (code === null) {
      return done(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return htmlContinueStart
    }

    effects.enter('htmlFlowData')
    return continuation(code)
  }

  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code)
      buffer = ''
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationRawEndTag(code) {
    if (code === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
      effects.consume(code)
      return continuationClose
    }

    if (asciiAlpha(code) && buffer.length < 8) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code)
      return continuationClose
    }

    return continuation(code)
  }

  function continuationClose(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('htmlFlowData')
      return done(code)
    }

    effects.consume(code)
    return continuationClose
  }

  function done(code) {
    effects.exit('htmlFlow')
    return ok(code)
  }
}

function tokenizeNextBlank(effects, ok, nok) {
  return start

  function start(code) {
    effects.exit('htmlFlowData')
    effects.enter('lineEndingBlank')
    effects.consume(code)
    effects.exit('lineEndingBlank')
    return effects.attempt(partialBlankLine, ok, nok)
  }
}

module.exports = htmlFlow


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/html-text.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/html-text.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha.js */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric.js */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var htmlText = {
  name: 'htmlText',
  tokenize: tokenizeHtmlText
}

function tokenizeHtmlText(effects, ok, nok) {
  var self = this
  var marker
  var buffer
  var index
  var returnState
  return start

  function start(code) {
    effects.enter('htmlText')
    effects.enter('htmlTextData')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code)
      return declarationOpen
    }

    if (code === 47) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code)
      return instruction
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagOpen
    }

    return nok(code)
  }

  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code)
      return commentOpen
    }

    if (code === 91) {
      effects.consume(code)
      buffer = 'CDATA['
      index = 0
      return cdataOpen
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return declaration
    }

    return nok(code)
  }

  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code)
      return commentStart
    }

    return nok(code)
  }

  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code)
      return commentStartDash
    }

    return comment(code)
  }

  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    return comment(code)
  }

  function comment(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code)
      return commentClose
    }

    if (markdownLineEnding(code)) {
      returnState = comment
      return atLineEnding(code)
    }

    effects.consume(code)
    return comment
  }

  function commentClose(code) {
    if (code === 45) {
      effects.consume(code)
      return end
    }

    return comment(code)
  }

  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length ? cdata : cdataOpen
    }

    return nok(code)
  }

  function cdata(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 93) {
      effects.consume(code)
      return cdataClose
    }

    if (markdownLineEnding(code)) {
      returnState = cdata
      return atLineEnding(code)
    }

    effects.consume(code)
    return cdata
  }

  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  function cdataEnd(code) {
    if (code === 62) {
      return end(code)
    }

    if (code === 93) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  function declaration(code) {
    if (code === null || code === 62) {
      return end(code)
    }

    if (markdownLineEnding(code)) {
      returnState = declaration
      return atLineEnding(code)
    }

    effects.consume(code)
    return declaration
  }

  function instruction(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 63) {
      effects.consume(code)
      return instructionClose
    }

    if (markdownLineEnding(code)) {
      returnState = instruction
      return atLineEnding(code)
    }

    effects.consume(code)
    return instruction
  }

  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagClose
    }

    return nok(code)
  }

  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagClose
    }

    return tagCloseBetween(code)
  }

  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagCloseBetween
    }

    return end(code)
  }

  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagOpen
    }

    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code)
      return end
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenBetween
    }

    return end(code)
  }

  function tagOpenAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    return tagOpenAttributeNameAfter(code)
  }

  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeNameAfter
    }

    return tagOpenBetween(code)
  }

  function tagOpenAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code)
      marker = code
      return tagOpenAttributeValueQuoted
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    effects.consume(code)
    marker = undefined
    return tagOpenAttributeValueUnquoted
  }

  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return tagOpenAttributeValueQuotedAfter
    }

    if (code === null) {
      return nok(code)
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted
      return atLineEnding(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueQuoted
  }

  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueUnquoted
  } // We can’t have blank lines in content, so no need to worry about empty
  // tokens.

  function atLineEnding(code) {
    effects.exit('htmlTextData')
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return factorySpace(
      effects,
      afterPrefix,
      'linePrefix',
      self.parser.constructs.disable.null.indexOf('codeIndented') > -1
        ? undefined
        : 4
    )
  }

  function afterPrefix(code) {
    effects.enter('htmlTextData')
    return returnState(code)
  }

  function end(code) {
    if (code === 62) {
      effects.consume(code)
      effects.exit('htmlTextData')
      effects.exit('htmlText')
      return ok
    }

    return nok(code)
  }
}

module.exports = htmlText


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-end.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-end.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var chunkedPush = __webpack_require__(/*! ../util/chunked-push.js */ "./node_modules/micromark/dist/util/chunked-push.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier.js */ "./node_modules/micromark/dist/util/normalize-identifier.js")
var resolveAll = __webpack_require__(/*! ../util/resolve-all.js */ "./node_modules/micromark/dist/util/resolve-all.js")
var shallow = __webpack_require__(/*! ../util/shallow.js */ "./node_modules/micromark/dist/util/shallow.js")
var factoryDestination = __webpack_require__(/*! ./factory-destination.js */ "./node_modules/micromark/dist/tokenize/factory-destination.js")
var factoryLabel = __webpack_require__(/*! ./factory-label.js */ "./node_modules/micromark/dist/tokenize/factory-label.js")
var factoryTitle = __webpack_require__(/*! ./factory-title.js */ "./node_modules/micromark/dist/tokenize/factory-title.js")
var factoryWhitespace = __webpack_require__(/*! ./factory-whitespace.js */ "./node_modules/micromark/dist/tokenize/factory-whitespace.js")

var labelEnd = {
  name: 'labelEnd',
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
}
var resourceConstruct = {
  tokenize: tokenizeResource
}
var fullReferenceConstruct = {
  tokenize: tokenizeFullReference
}
var collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
}

function resolveAllLabelEnd(events) {
  var index = -1
  var token

  while (++index < events.length) {
    token = events[index][1]

    if (
      !token._used &&
      (token.type === 'labelImage' ||
        token.type === 'labelLink' ||
        token.type === 'labelEnd')
    ) {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2)
      token.type = 'data'
      index++
    }
  }

  return events
}

function resolveToLabelEnd(events, context) {
  var index = events.length
  var offset = 0
  var group
  var label
  var text
  var token
  var open
  var close
  var media // Find an opening.

  while (index--) {
    token = events[index][1]

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (
        token.type === 'link' ||
        (token.type === 'labelLink' && token._inactive)
      ) {
        break
      } // Mark other link openings as inactive, as we can’t have links in
      // links.

      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === 'labelImage' || token.type === 'labelLink') &&
        !token._balanced
      ) {
        open = index

        if (token.type !== 'labelLink') {
          offset = 2
          break
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index
    }
  }

  group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: shallow(events[open][1].start),
    end: shallow(events[events.length - 1][1].end)
  }
  label = {
    type: 'label',
    start: shallow(events[open][1].start),
    end: shallow(events[close][1].end)
  }
  text = {
    type: 'labelText',
    start: shallow(events[open + offset + 2][1].end),
    end: shallow(events[close - 2][1].start)
  }
  media = [
    ['enter', group, context],
    ['enter', label, context]
  ] // Opening marker.

  media = chunkedPush(media, events.slice(open + 1, open + offset + 3)) // Text open.

  media = chunkedPush(media, [['enter', text, context]]) // Between.

  media = chunkedPush(
    media,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  ) // Text close, marker close, label close.

  media = chunkedPush(media, [
    ['exit', text, context],
    events[close - 2],
    events[close - 1],
    ['exit', label, context]
  ]) // Reference, resource, or so.

  media = chunkedPush(media, events.slice(close + 1)) // Media close.

  media = chunkedPush(media, [['exit', group, context]])
  chunkedSplice(events, open, events.length, media)
  return events
}

function tokenizeLabelEnd(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var labelStart
  var defined // Find an opening.

  while (index--) {
    if (
      (self.events[index][1].type === 'labelImage' ||
        self.events[index][1].type === 'labelLink') &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1]
      break
    }
  }

  return start

  function start(code) {
    if (!labelStart) {
      return nok(code)
    } // It’s a balanced bracket, but contains a link.

    if (labelStart._inactive) return balanced(code)
    defined =
      self.parser.defined.indexOf(
        normalizeIdentifier(
          self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
          })
        )
      ) > -1
    effects.enter('labelEnd')
    effects.enter('labelMarker')
    effects.consume(code)
    effects.exit('labelMarker')
    effects.exit('labelEnd')
    return afterLabelEnd
  }

  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt(
        resourceConstruct,
        ok,
        defined ? ok : balanced
      )(code)
    } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?

    if (code === 91) {
      return effects.attempt(
        fullReferenceConstruct,
        ok,
        defined
          ? effects.attempt(collapsedReferenceConstruct, ok, balanced)
          : balanced
      )(code)
    } // Shortcut reference: `[asd]`?

    return defined ? ok(code) : balanced(code)
  }

  function balanced(code) {
    labelStart._balanced = true
    return nok(code)
  }
}

function tokenizeResource(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('resource')
    effects.enter('resourceMarker')
    effects.consume(code)
    effects.exit('resourceMarker')
    return factoryWhitespace(effects, open)
  }

  function open(code) {
    if (code === 41) {
      return end(code)
    }

    return factoryDestination(
      effects,
      destinationAfter,
      nok,
      'resourceDestination',
      'resourceDestinationLiteral',
      'resourceDestinationLiteralMarker',
      'resourceDestinationRaw',
      'resourceDestinationString',
      3
    )(code)
  }

  function destinationAfter(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, between)(code)
      : end(code)
  }

  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(
        effects,
        factoryWhitespace(effects, end),
        nok,
        'resourceTitle',
        'resourceTitleMarker',
        'resourceTitleString'
      )(code)
    }

    return end(code)
  }

  function end(code) {
    if (code === 41) {
      effects.enter('resourceMarker')
      effects.consume(code)
      effects.exit('resourceMarker')
      effects.exit('resource')
      return ok
    }

    return nok(code)
  }
}

function tokenizeFullReference(effects, ok, nok) {
  var self = this
  return start

  function start(code) {
    return factoryLabel.call(
      self,
      effects,
      afterLabel,
      nok,
      'reference',
      'referenceMarker',
      'referenceString'
    )(code)
  }

  function afterLabel(code) {
    return self.parser.defined.indexOf(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    ) < 0
      ? nok(code)
      : ok(code)
  }
}

function tokenizeCollapsedReference(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('reference')
    effects.enter('referenceMarker')
    effects.consume(code)
    effects.exit('referenceMarker')
    return open
  }

  function open(code) {
    if (code === 93) {
      effects.enter('referenceMarker')
      effects.consume(code)
      effects.exit('referenceMarker')
      effects.exit('reference')
      return ok
    }

    return nok(code)
  }
}

module.exports = labelEnd


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-start-image.js":
/*!*******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-start-image.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var labelEnd = __webpack_require__(/*! ./label-end.js */ "./node_modules/micromark/dist/tokenize/label-end.js")

var labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
}

function tokenizeLabelStartImage(effects, ok, nok) {
  var self = this
  return start

  function start(code) {
    effects.enter('labelImage')
    effects.enter('labelImageMarker')
    effects.consume(code)
    effects.exit('labelImageMarker')
    return open
  }

  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker')
      effects.consume(code)
      effects.exit('labelMarker')
      effects.exit('labelImage')
      return after
    }

    return nok(code)
  }

  function after(code) {
    /* c8 ignore next */
    return code === 94 &&
      /* c8 ignore next */
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? /* c8 ignore next */
        nok(code)
      : ok(code)
  }
}

module.exports = labelStartImage


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-start-link.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-start-link.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var labelEnd = __webpack_require__(/*! ./label-end.js */ "./node_modules/micromark/dist/tokenize/label-end.js")

var labelStartLink = {
  name: 'labelStartLink',
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
}

function tokenizeLabelStartLink(effects, ok, nok) {
  var self = this
  return start

  function start(code) {
    effects.enter('labelLink')
    effects.enter('labelMarker')
    effects.consume(code)
    effects.exit('labelMarker')
    effects.exit('labelLink')
    return after
  }

  function after(code) {
    /* c8 ignore next */
    return code === 94 &&
      /* c8 ignore next */
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? /* c8 ignore next */
        nok(code)
      : ok(code)
  }
}

module.exports = labelStartLink


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/line-ending.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/line-ending.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
}

function tokenizeLineEnding(effects, ok) {
  return start

  function start(code) {
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return factorySpace(effects, ok, 'linePrefix')
  }
}

module.exports = lineEnding


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/list.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/list.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var asciiDigit = __webpack_require__(/*! ../character/ascii-digit.js */ "./node_modules/micromark/dist/character/ascii-digit.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size.js */ "./node_modules/micromark/dist/util/prefix-size.js")
var sizeChunks = __webpack_require__(/*! ../util/size-chunks.js */ "./node_modules/micromark/dist/util/size-chunks.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var partialBlankLine = __webpack_require__(/*! ./partial-blank-line.js */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")
var thematicBreak = __webpack_require__(/*! ./thematic-break.js */ "./node_modules/micromark/dist/tokenize/thematic-break.js")

var list = {
  name: 'list',
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
}
var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
}
var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
}

function tokenizeListStart(effects, ok, nok) {
  var self = this
  var initialSize = prefixSize(self.events, 'linePrefix')
  var size = 0
  return start

  function start(code) {
    var kind =
      self.containerState.type ||
      (code === 42 || code === 43 || code === 45
        ? 'listUnordered'
        : 'listOrdered')

    if (
      kind === 'listUnordered'
        ? !self.containerState.marker || code === self.containerState.marker
        : asciiDigit(code)
    ) {
      if (!self.containerState.type) {
        self.containerState.type = kind
        effects.enter(kind, {
          _container: true
        })
      }

      if (kind === 'listUnordered') {
        effects.enter('listItemPrefix')
        return code === 42 || code === 45
          ? effects.check(thematicBreak, nok, atMarker)(code)
          : atMarker(code)
      }

      if (!self.interrupt || code === 49) {
        effects.enter('listItemPrefix')
        effects.enter('listItemValue')
        return inside(code)
      }
    }

    return nok(code)
  }

  function inside(code) {
    if (asciiDigit(code) && ++size < 10) {
      effects.consume(code)
      return inside
    }

    if (
      (!self.interrupt || size < 2) &&
      (self.containerState.marker
        ? code === self.containerState.marker
        : code === 41 || code === 46)
    ) {
      effects.exit('listItemValue')
      return atMarker(code)
    }

    return nok(code)
  }

  function atMarker(code) {
    effects.enter('listItemMarker')
    effects.consume(code)
    effects.exit('listItemMarker')
    self.containerState.marker = self.containerState.marker || code
    return effects.check(
      partialBlankLine, // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    )
  }

  function onBlank(code) {
    self.containerState.initialBlankLine = true
    initialSize++
    return endOfPrefix(code)
  }

  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter('listItemPrefixWhitespace')
      effects.consume(code)
      effects.exit('listItemPrefixWhitespace')
      return endOfPrefix
    }

    return nok(code)
  }

  function endOfPrefix(code) {
    self.containerState.size =
      initialSize + sizeChunks(self.sliceStream(effects.exit('listItemPrefix')))
    return ok(code)
  }
}

function tokenizeListContinuation(effects, ok, nok) {
  var self = this
  self.containerState._closeFlow = undefined
  return effects.check(partialBlankLine, onBlank, notBlank)

  function onBlank(code) {
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine // We have a blank line.
    // Still, try to consume at most the items size.

    return factorySpace(
      effects,
      ok,
      'listItemIndent',
      self.containerState.size + 1
    )(code)
  }

  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
      return notInCurrentItem(code)
    }

    self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code)
  }

  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true // As we’re closing flow, we’re no longer interrupting.

    self.interrupt = undefined
    return factorySpace(
      effects,
      effects.attempt(list, ok, nok),
      'linePrefix',
      self.parser.constructs.disable.null.indexOf('codeIndented') > -1
        ? undefined
        : 4
    )(code)
  }
}

function tokenizeIndent(effects, ok, nok) {
  var self = this
  return factorySpace(
    effects,
    afterPrefix,
    'listItemIndent',
    self.containerState.size + 1
  )

  function afterPrefix(code) {
    return prefixSize(self.events, 'listItemIndent') ===
      self.containerState.size
      ? ok(code)
      : nok(code)
  }
}

function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type)
}

function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  var self = this
  return factorySpace(
    effects,
    afterPrefix,
    'listItemPrefixWhitespace',
    self.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : 4 + 1
  )

  function afterPrefix(code) {
    return markdownSpace(code) ||
      !prefixSize(self.events, 'listItemPrefixWhitespace')
      ? nok(code)
      : ok(code)
  }
}

module.exports = list


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/partial-blank-line.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/partial-blank-line.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var partialBlankLine = {
  tokenize: tokenizePartialBlankLine,
  partial: true
}

function tokenizePartialBlankLine(effects, ok, nok) {
  return factorySpace(effects, afterWhitespace, 'linePrefix')

  function afterWhitespace(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}

module.exports = partialBlankLine


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/setext-underline.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/setext-underline.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var shallow = __webpack_require__(/*! ../util/shallow.js */ "./node_modules/micromark/dist/util/shallow.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var setextUnderline = {
  name: 'setextUnderline',
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
}

function resolveToSetextUnderline(events, context) {
  var index = events.length
  var content
  var text
  var definition
  var heading // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.

  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index
        break
      }

      if (events[index][1].type === 'paragraph') {
        text = index
      }
    } // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1)
      }

      if (!definition && events[index][1].type === 'definition') {
        definition = index
      }
    }
  }

  heading = {
    type: 'setextHeading',
    start: shallow(events[text][1].start),
    end: shallow(events[events.length - 1][1].end)
  } // Change the paragraph to setext heading text.

  events[text][1].type = 'setextHeadingText' // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.

  if (definition) {
    events.splice(text, 0, ['enter', heading, context])
    events.splice(definition + 1, 0, ['exit', events[content][1], context])
    events[content][1].end = shallow(events[definition][1].end)
  } else {
    events[content][1] = heading
  } // Add the heading exit at the end.

  events.push(['exit', heading, context])
  return events
}

function tokenizeSetextUnderline(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var marker
  var paragraph // Find an opening.

  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (
      self.events[index][1].type !== 'lineEnding' &&
      self.events[index][1].type !== 'linePrefix' &&
      self.events[index][1].type !== 'content'
    ) {
      paragraph = self.events[index][1].type === 'paragraph'
      break
    }
  }

  return start

  function start(code) {
    if (!self.lazy && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine')
      effects.enter('setextHeadingLineSequence')
      marker = code
      return closingSequence(code)
    }

    return nok(code)
  }

  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code)
      return closingSequence
    }

    effects.exit('setextHeadingLineSequence')
    return factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code)
  }

  function closingSequenceEnd(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('setextHeadingLine')
      return ok(code)
    }

    return nok(code)
  }
}

module.exports = setextUnderline


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/thematic-break.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/thematic-break.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var thematicBreak = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
}

function tokenizeThematicBreak(effects, ok, nok) {
  var size = 0
  var marker
  return start

  function start(code) {
    effects.enter('thematicBreak')
    marker = code
    return atBreak(code)
  }

  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence')
      return sequence(code)
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, atBreak, 'whitespace')(code)
    }

    if (size < 3 || (code !== null && !markdownLineEnding(code))) {
      return nok(code)
    }

    effects.exit('thematicBreak')
    return ok(code)
  }

  function sequence(code) {
    if (code === marker) {
      effects.consume(code)
      size++
      return sequence
    }

    effects.exit('thematicBreakSequence')
    return atBreak(code)
  }
}

module.exports = thematicBreak


/***/ }),

/***/ "./node_modules/micromark/dist/util/chunked-push.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/util/chunked-push.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var chunkedSplice = __webpack_require__(/*! ./chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")

function chunkedPush(list, items) {
  if (list.length) {
    chunkedSplice(list, list.length, 0, items)
    return list
  }

  return items
}

module.exports = chunkedPush


/***/ }),

/***/ "./node_modules/micromark/dist/util/chunked-splice.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/util/chunked-splice.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var splice = __webpack_require__(/*! ../constant/splice.js */ "./node_modules/micromark/dist/constant/splice.js")

// causes a stack overflow in V8 when trying to insert 100k items for instance.

function chunkedSplice(list, start, remove, items) {
  var end = list.length
  var chunkStart = 0
  var parameters // Make start between zero and `end` (included).

  if (start < 0) {
    start = -start > end ? 0 : end + start
  } else {
    start = start > end ? end : start
  }

  remove = remove > 0 ? remove : 0 // No need to chunk the items if there’s only a couple (10k) items.

  if (items.length < 10000) {
    parameters = Array.from(items)
    parameters.unshift(start, remove)
    splice.apply(list, parameters)
  } else {
    // Delete `remove` items starting from `start`
    if (remove) splice.apply(list, [start, remove]) // Insert the items in chunks to not cause stack overflows.

    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 10000)
      parameters.unshift(start, 0)
      splice.apply(list, parameters)
      chunkStart += 10000
      start += 10000
    }
  }
}

module.exports = chunkedSplice


/***/ }),

/***/ "./node_modules/micromark/dist/util/classify-character.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/util/classify-character.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var unicodePunctuation = __webpack_require__(/*! ../character/unicode-punctuation.js */ "./node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! ../character/unicode-whitespace.js */ "./node_modules/micromark/dist/character/unicode-whitespace.js")

// Classify whether a character is unicode whitespace, unicode punctuation, or
// anything else.
// Used for attention (emphasis, strong), whose sequences can open or close
// based on the class of surrounding characters.
function classifyCharacter(code) {
  if (
    code === null ||
    markdownLineEndingOrSpace(code) ||
    unicodeWhitespace(code)
  ) {
    return 1
  }

  if (unicodePunctuation(code)) {
    return 2
  }
}

module.exports = classifyCharacter


/***/ }),

/***/ "./node_modules/micromark/dist/util/combine-extensions.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/util/combine-extensions.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasOwnProperty = __webpack_require__(/*! ../constant/has-own-property.js */ "./node_modules/micromark/dist/constant/has-own-property.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var miniflat = __webpack_require__(/*! ./miniflat.js */ "./node_modules/micromark/dist/util/miniflat.js")

function combineExtensions(extensions) {
  var all = {}
  var index = -1

  while (++index < extensions.length) {
    extension(all, extensions[index])
  }

  return all
}

function extension(all, extension) {
  var hook
  var left
  var right
  var code

  for (hook in extension) {
    left = hasOwnProperty.call(all, hook) ? all[hook] : (all[hook] = {})
    right = extension[hook]

    for (code in right) {
      left[code] = constructs(
        miniflat(right[code]),
        hasOwnProperty.call(left, code) ? left[code] : []
      )
    }
  }
}

function constructs(list, existing) {
  var index = -1
  var before = []

  while (++index < list.length) {
    ;(list[index].add === 'after' ? existing : before).push(list[index])
  }

  chunkedSplice(existing, 0, 0, before)
  return existing
}

module.exports = combineExtensions


/***/ }),

/***/ "./node_modules/micromark/dist/util/create-tokenizer.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/util/create-tokenizer.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var assign = __webpack_require__(/*! ../constant/assign.js */ "./node_modules/micromark/dist/constant/assign.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var chunkedPush = __webpack_require__(/*! ./chunked-push.js */ "./node_modules/micromark/dist/util/chunked-push.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var miniflat = __webpack_require__(/*! ./miniflat.js */ "./node_modules/micromark/dist/util/miniflat.js")
var resolveAll = __webpack_require__(/*! ./resolve-all.js */ "./node_modules/micromark/dist/util/resolve-all.js")
var serializeChunks = __webpack_require__(/*! ./serialize-chunks.js */ "./node_modules/micromark/dist/util/serialize-chunks.js")
var shallow = __webpack_require__(/*! ./shallow.js */ "./node_modules/micromark/dist/util/shallow.js")
var sliceChunks = __webpack_require__(/*! ./slice-chunks.js */ "./node_modules/micromark/dist/util/slice-chunks.js")

// Create a tokenizer.
// Tokenizers deal with one type of data (e.g., containers, flow, text).
// The parser is the object dealing with it all.
// `initialize` works like other constructs, except that only its `tokenize`
// function is used, in which case it doesn’t receive an `ok` or `nok`.
// `from` can be given to set the point before the first character, although
// when further lines are indented, they must be set with `defineSkip`.
function createTokenizer(parser, initialize, from) {
  var point = from
    ? shallow(from)
    : {
        line: 1,
        column: 1,
        offset: 0
      }
  var columnStart = {}
  var resolveAllConstructs = []
  var chunks = []
  var stack = []

  var effects = {
    consume: consume,
    enter: enter,
    exit: exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    }),
    lazy: constructFactory(onsuccessfulcheck, {
      lazy: true
    })
  } // State and tools for resolving and serializing.

  var context = {
    previous: null,
    events: [],
    parser: parser,
    sliceStream: sliceStream,
    sliceSerialize: sliceSerialize,
    now: now,
    defineSkip: skip,
    write: write
  } // The state function.

  var state = initialize.tokenize.call(context, effects) // Track which character we expect to be consumed, to catch bugs.

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize)
  } // Store where we are in the input stream.

  point._index = 0
  point._bufferIndex = -1
  return context

  function write(slice) {
    chunks = chunkedPush(chunks, slice)
    main() // Exit if we’re not done, resolve might change stuff.

    if (chunks[chunks.length - 1] !== null) {
      return []
    }

    addResult(initialize, 0) // Otherwise, resolve, and exit.

    context.events = resolveAll(resolveAllConstructs, context.events, context)
    return context.events
  } //
  // Tools.
  //

  function sliceSerialize(token) {
    return serializeChunks(sliceStream(token))
  }

  function sliceStream(token) {
    return sliceChunks(chunks, token)
  }

  function now() {
    return shallow(point)
  }

  function skip(value) {
    columnStart[value.line] = value.column
    accountForPotentialSkip()
  } //
  // State management.
  //
  // Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
  // `consume`).
  // Here is where we walk through the chunks, which either include strings of
  // several characters, or numerical character codes.
  // The reason to do this in a loop instead of a call is so the stack can
  // drain.

  function main() {
    var chunkIndex
    var chunk

    while (point._index < chunks.length) {
      chunk = chunks[point._index] // If we’re in a buffer chunk, loop through it.

      if (typeof chunk === 'string') {
        chunkIndex = point._index

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0
        }

        while (
          point._index === chunkIndex &&
          point._bufferIndex < chunk.length
        ) {
          go(chunk.charCodeAt(point._bufferIndex))
        }
      } else {
        go(chunk)
      }
    }
  } // Deal with one code.

  function go(code) {
    state = state(code)
  } // Move a character forward.

  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++
      point.column = 1
      point.offset += code === -3 ? 2 : 1
      accountForPotentialSkip()
    } else if (code !== -1) {
      point.column++
      point.offset++
    } // Not in a string chunk.

    if (point._bufferIndex < 0) {
      point._index++
    } else {
      point._bufferIndex++ // At end of string chunk.

      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1
        point._index++
      }
    } // Expose the previous character.

    context.previous = code // Mark as consumed.
  } // Start a token.

  function enter(type, fields) {
    var token = fields || {}
    token.type = type
    token.start = now()
    context.events.push(['enter', token, context])
    stack.push(token)
    return token
  } // Stop a token.

  function exit(type) {
    var token = stack.pop()
    token.end = now()
    context.events.push(['exit', token, context])
    return token
  } // Use results.

  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from)
  } // Discard results.

  function onsuccessfulcheck(construct, info) {
    info.restore()
  } // Factory to attempt/check/interrupt.

  function constructFactory(onreturn, fields) {
    return hook // Handle either an object mapping codes to constructs, a list of
    // constructs, or a single construct.

    function hook(constructs, returnState, bogusState) {
      var listOfConstructs
      var constructIndex
      var currentConstruct
      var info
      return constructs.tokenize || 'length' in constructs
        ? handleListOfConstructs(miniflat(constructs))
        : handleMapOfConstructs

      function handleMapOfConstructs(code) {
        if (code in constructs || null in constructs) {
          return handleListOfConstructs(
            constructs.null
              ? /* c8 ignore next */
                miniflat(constructs[code]).concat(miniflat(constructs.null))
              : constructs[code]
          )(code)
        }

        return bogusState(code)
      }

      function handleListOfConstructs(list) {
        listOfConstructs = list
        constructIndex = 0
        return handleConstruct(list[constructIndex])
      }

      function handleConstruct(construct) {
        return start

        function start(code) {
          // To do: not nede to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store()
          currentConstruct = construct

          if (!construct.partial) {
            context.currentConstruct = construct
          }

          if (
            construct.name &&
            context.parser.constructs.disable.null.indexOf(construct.name) > -1
          ) {
            return nok()
          }

          return construct.tokenize.call(
            fields ? assign({}, context, fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }

      function ok(code) {
        onreturn(currentConstruct, info)
        return returnState
      }

      function nok(code) {
        info.restore()

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex])
        }

        return bogusState
      }
    }
  }

  function addResult(construct, from) {
    if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
      resolveAllConstructs.push(construct)
    }

    if (construct.resolve) {
      chunkedSplice(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      )
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context)
    }
  }

  function store() {
    var startPoint = now()
    var startPrevious = context.previous
    var startCurrentConstruct = context.currentConstruct
    var startEventsIndex = context.events.length
    var startStack = Array.from(stack)
    return {
      restore: restore,
      from: startEventsIndex
    }

    function restore() {
      point = startPoint
      context.previous = startPrevious
      context.currentConstruct = startCurrentConstruct
      context.events.length = startEventsIndex
      stack = startStack
      accountForPotentialSkip()
    }
  }

  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line]
      point.offset += columnStart[point.line] - 1
    }
  }
}

module.exports = createTokenizer


/***/ }),

/***/ "./node_modules/micromark/dist/util/miniflat.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dist/util/miniflat.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


function miniflat(value) {
  return value === null || value === undefined
    ? []
    : 'length' in value
    ? value
    : [value]
}

module.exports = miniflat


/***/ }),

/***/ "./node_modules/micromark/dist/util/move-point.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/util/move-point.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


// chunks (replacement characters, tabs, or line endings).

function movePoint(point, offset) {
  point.column += offset
  point.offset += offset
  point._bufferIndex += offset
  return point
}

module.exports = movePoint


/***/ }),

/***/ "./node_modules/micromark/dist/util/normalize-identifier.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/util/normalize-identifier.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";


function normalizeIdentifier(value) {
  return (
    value // Collapse Markdown whitespace.
      .replace(/[\t\n\r ]+/g, ' ') // Trim.
      .replace(/^ | $/g, '') // Some characters are considered “uppercase”, but if their lowercase
      // counterpart is uppercased will result in a different uppercase
      // character.
      // Hence, to get that form, we perform both lower- and uppercase.
      // Upper case makes sure keys will not interact with default prototypal
      // methods: no object method is uppercase.
      .toLowerCase()
      .toUpperCase()
  )
}

module.exports = normalizeIdentifier


/***/ }),

/***/ "./node_modules/micromark/dist/util/prefix-size.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/prefix-size.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var sizeChunks = __webpack_require__(/*! ./size-chunks.js */ "./node_modules/micromark/dist/util/size-chunks.js")

function prefixSize(events, type) {
  var tail = events[events.length - 1]
  if (!tail || tail[1].type !== type) return 0
  return sizeChunks(tail[2].sliceStream(tail[1]))
}

module.exports = prefixSize


/***/ }),

/***/ "./node_modules/micromark/dist/util/regex-check.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/regex-check.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fromCharCode = __webpack_require__(/*! ../constant/from-char-code.js */ "./node_modules/micromark/dist/constant/from-char-code.js")

function regexCheck(regex) {
  return check

  function check(code) {
    return regex.test(fromCharCode(code))
  }
}

module.exports = regexCheck


/***/ }),

/***/ "./node_modules/micromark/dist/util/resolve-all.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/resolve-all.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


function resolveAll(constructs, events, context) {
  var called = []
  var index = -1
  var resolve

  while (++index < constructs.length) {
    resolve = constructs[index].resolveAll

    if (resolve && called.indexOf(resolve) < 0) {
      events = resolve(events, context)
      called.push(resolve)
    }
  }

  return events
}

module.exports = resolveAll


/***/ }),

/***/ "./node_modules/micromark/dist/util/safe-from-int.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/util/safe-from-int.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fromCharCode = __webpack_require__(/*! ../constant/from-char-code.js */ "./node_modules/micromark/dist/constant/from-char-code.js")

function safeFromInt(value, base) {
  var code = parseInt(value, base)

  if (
    // C0 except for HT, LF, FF, CR, space
    code < 9 ||
    code === 11 ||
    (code > 13 && code < 32) || // Control character (DEL) of the basic block and C1 controls.
    (code > 126 && code < 160) || // Lone high surrogates and low surrogates.
    (code > 55295 && code < 57344) || // Noncharacters.
    (code > 64975 && code < 65008) ||
    (code & 65535) === 65535 ||
    (code & 65535) === 65534 || // Out of range
    code > 1114111
  ) {
    return '\uFFFD'
  }

  return fromCharCode(code)
}

module.exports = safeFromInt


/***/ }),

/***/ "./node_modules/micromark/dist/util/serialize-chunks.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/util/serialize-chunks.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fromCharCode = __webpack_require__(/*! ../constant/from-char-code.js */ "./node_modules/micromark/dist/constant/from-char-code.js")

function serializeChunks(chunks) {
  var index = -1
  var result = []
  var chunk
  var value
  var atTab

  while (++index < chunks.length) {
    chunk = chunks[index]

    if (typeof chunk === 'string') {
      value = chunk
    } else if (chunk === -5) {
      value = '\r'
    } else if (chunk === -4) {
      value = '\n'
    } else if (chunk === -3) {
      value = '\r' + '\n'
    } else if (chunk === -2) {
      value = '\t'
    } else if (chunk === -1) {
      if (atTab) continue
      value = ' '
    } else {
      // Currently only replacement character.
      value = fromCharCode(chunk)
    }

    atTab = chunk === -2
    result.push(value)
  }

  return result.join('')
}

module.exports = serializeChunks


/***/ }),

/***/ "./node_modules/micromark/dist/util/shallow.js":
/*!*****************************************************!*\
  !*** ./node_modules/micromark/dist/util/shallow.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var assign = __webpack_require__(/*! ../constant/assign.js */ "./node_modules/micromark/dist/constant/assign.js")

function shallow(object) {
  return assign({}, object)
}

module.exports = shallow


/***/ }),

/***/ "./node_modules/micromark/dist/util/size-chunks.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/size-chunks.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


// Counts tabs based on their expanded size, and CR+LF as one character.

function sizeChunks(chunks) {
  var index = -1
  var size = 0

  while (++index < chunks.length) {
    size += typeof chunks[index] === 'string' ? chunks[index].length : 1
  }

  return size
}

module.exports = sizeChunks


/***/ }),

/***/ "./node_modules/micromark/dist/util/slice-chunks.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/util/slice-chunks.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


function sliceChunks(chunks, token) {
  var startIndex = token.start._index
  var startBufferIndex = token.start._bufferIndex
  var endIndex = token.end._index
  var endBufferIndex = token.end._bufferIndex
  var view

  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)]
  } else {
    view = chunks.slice(startIndex, endIndex)

    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex)
    }

    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex))
    }
  }

  return view
}

module.exports = sliceChunks


/***/ }),

/***/ "./node_modules/micromark/dist/util/subtokenize.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/subtokenize.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var assign = __webpack_require__(/*! ../constant/assign.js */ "./node_modules/micromark/dist/constant/assign.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var shallow = __webpack_require__(/*! ./shallow.js */ "./node_modules/micromark/dist/util/shallow.js")

function subtokenize(events) {
  var jumps = {}
  var index = -1
  var event
  var lineIndex
  var otherIndex
  var otherEvent
  var parameters
  var subevents
  var more

  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index]
    }

    event = events[index] // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.

    if (
      index &&
      event[1].type === 'chunkFlow' &&
      events[index - 1][1].type === 'listItemPrefix'
    ) {
      subevents = event[1]._tokenizer.events
      otherIndex = 0

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'lineEndingBlank'
      ) {
        otherIndex += 2
      }

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'content'
      ) {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break
          }

          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1].isInFirstContentOfListItem = true
            otherIndex++
          }
        }
      }
    } // Enter.

    if (event[0] === 'enter') {
      if (event[1].contentType) {
        assign(jumps, subcontent(events, index))
        index = jumps[index]
        more = true
      }
    } // Exit.
    else if (event[1]._container || event[1]._movePreviousLineEndings) {
      otherIndex = index
      lineIndex = undefined

      while (otherIndex--) {
        otherEvent = events[otherIndex]

        if (
          otherEvent[1].type === 'lineEnding' ||
          otherEvent[1].type === 'lineEndingBlank'
        ) {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank'
            }

            otherEvent[1].type = 'lineEnding'
            lineIndex = otherIndex
          }
        } else {
          break
        }
      }

      if (lineIndex) {
        // Fix position.
        event[1].end = shallow(events[lineIndex][1].start) // Switch container exit w/ line endings.

        parameters = events.slice(lineIndex, index)
        parameters.unshift(event)
        chunkedSplice(events, lineIndex, index - lineIndex + 1, parameters)
      }
    }
  }

  return !more
}

function subcontent(events, eventIndex) {
  var token = events[eventIndex][1]
  var context = events[eventIndex][2]
  var startPosition = eventIndex - 1
  var startPositions = []
  var tokenizer =
    token._tokenizer || context.parser[token.contentType](token.start)
  var childEvents = tokenizer.events
  var jumps = []
  var gaps = {}
  var stream
  var previous
  var index
  var entered
  var end
  var adjust // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.

  while (token) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== token) {
      // Empty.
    }

    startPositions.push(startPosition)

    if (!token._tokenizer) {
      stream = context.sliceStream(token)

      if (!token.next) {
        stream.push(null)
      }

      if (previous) {
        tokenizer.defineSkip(token.start)
      }

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true
      }

      tokenizer.write(stream)

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined
      }
    } // Unravel the next token.

    previous = token
    token = token.next
  } // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.

  token = previous
  index = childEvents.length

  while (index--) {
    // Make sure we’ve at least seen something (final eol is part of the last
    // token).
    if (childEvents[index][0] === 'enter') {
      entered = true
    } else if (
      // Find a void token that includes a break.
      entered &&
      childEvents[index][1].type === childEvents[index - 1][1].type &&
      childEvents[index][1].start.line !== childEvents[index][1].end.line
    ) {
      add(childEvents.slice(index + 1, end))
      // Help GC.
      token._tokenizer = token.next = undefined
      token = token.previous
      end = index + 1
    }
  }

  // Help GC.
  tokenizer.events = token._tokenizer = token.next = undefined // Do head:

  add(childEvents.slice(0, end))
  index = -1
  adjust = 0

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1]
    adjust += jumps[index][1] - jumps[index][0] - 1
  }

  return gaps

  function add(slice) {
    var start = startPositions.pop()
    jumps.unshift([start, start + slice.length - 1])
    chunkedSplice(events, start, 2, slice)
  }
}

module.exports = subtokenize


/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/property-information/find.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/find.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! ./normalize */ "./node_modules/property-information/normalize.js")
var DefinedInfo = __webpack_require__(/*! ./lib/util/defined-info */ "./node_modules/property-information/lib/util/defined-info.js")
var Info = __webpack_require__(/*! ./lib/util/info */ "./node_modules/property-information/lib/util/info.js")

var data = 'data'

module.exports = find

var valid = /^data[-\w.:]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

function find(schema, value) {
  var normal = normalize(value)
  var prop = value
  var Type = Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = DefinedInfo
  }

  return new Type(prop, value)
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return data + value.charAt(0).toUpperCase() + value.slice(1)
}

function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return data + value
}

function kebab($0) {
  return '-' + $0.toLowerCase()
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/hast-to-react.json":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/hast-to-react.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}');

/***/ }),

/***/ "./node_modules/property-information/html.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/html.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "./node_modules/property-information/lib/aria.js")
var html = __webpack_require__(/*! ./lib/html */ "./node_modules/property-information/lib/html.js")

module.exports = merge([xml, xlink, xmlns, aria, html])


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/aria.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated

module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
})

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/html.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

var boolean = types.boolean
var overloadedBoolean = types.overloadedBoolean
var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated

module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/svg.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/svg.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseSensitiveTransform = __webpack_require__(/*! ./util/case-sensitive-transform */ "./node_modules/property-information/lib/util/case-sensitive-transform.js")

var boolean = types.boolean
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated
var commaOrSpaceSeparated = types.commaOrSpaceSeparated

module.exports = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var caseSensitiveTransform = __webpack_require__(/*! ./case-sensitive-transform */ "./node_modules/property-information/lib/util/case-sensitive-transform.js")

module.exports = caseInsensitiveTransform

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = caseSensitiveTransform

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/create.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! ../../normalize */ "./node_modules/property-information/normalize.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")
var DefinedInfo = __webpack_require__(/*! ./defined-info */ "./node_modules/property-information/lib/util/defined-info.js")

module.exports = create

function create(definition) {
  var space = definition.space
  var mustUseProperty = definition.mustUseProperty || []
  var attributes = definition.attributes || {}
  var props = definition.properties
  var transform = definition.transform
  var property = {}
  var normal = {}
  var prop
  var info

  for (prop in props) {
    info = new DefinedInfo(
      prop,
      transform(attributes, prop),
      props[prop],
      space
    )

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true
    }

    property[prop] = info

    normal[normalize(prop)] = prop
    normal[normalize(info.attribute)] = prop
  }

  return new Schema(property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/*!********************************************************************!*\
  !*** ./node_modules/property-information/lib/util/defined-info.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Info = __webpack_require__(/*! ./info */ "./node_modules/property-information/lib/util/info.js")
var types = __webpack_require__(/*! ./types */ "./node_modules/property-information/lib/util/types.js")

module.exports = DefinedInfo

DefinedInfo.prototype = new Info()
DefinedInfo.prototype.defined = true

var checks = [
  'boolean',
  'booleanish',
  'overloadedBoolean',
  'number',
  'commaSeparated',
  'spaceSeparated',
  'commaOrSpaceSeparated'
]
var checksLength = checks.length

function DefinedInfo(property, attribute, mask, space) {
  var index = -1
  var check

  mark(this, 'space', space)

  Info.call(this, property, attribute)

  while (++index < checksLength) {
    check = checks[index]
    mark(this, check, (mask & types[check]) === types[check])
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/util/info.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = Info

var proto = Info.prototype

proto.space = null
proto.attribute = null
proto.property = null
proto.boolean = false
proto.booleanish = false
proto.overloadedBoolean = false
proto.number = false
proto.commaSeparated = false
proto.spaceSeparated = false
proto.commaOrSpaceSeparated = false
proto.mustUseProperty = false
proto.defined = false

function Info(property, attribute) {
  this.property = property
  this.attribute = attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/merge.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")

module.exports = merge

function merge(definitions) {
  var length = definitions.length
  var property = []
  var normal = []
  var index = -1
  var info
  var space

  while (++index < length) {
    info = definitions[index]
    property.push(info.property)
    normal.push(info.normal)
    space = info.space
  }

  return new Schema(
    xtend.apply(null, property),
    xtend.apply(null, normal),
    space
  )
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/schema.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = Schema

var proto = Schema.prototype

proto.space = null
proto.normal = {}
proto.property = {}

function Schema(property, normal, space) {
  this.property = property
  this.normal = normal

  if (space) {
    this.space = space
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/types.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var powers = 0

exports.boolean = increment()
exports.booleanish = increment()
exports.overloadedBoolean = increment()
exports.number = increment()
exports.spaceSeparated = increment()
exports.commaSeparated = increment()
exports.commaOrSpaceSeparated = increment()

function increment() {
  return Math.pow(2, ++powers)
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xlink.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/xml.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
})

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xmlns.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/normalize.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/normalize.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = normalize

function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/svg.js":
/*!**************************************************!*\
  !*** ./node_modules/property-information/svg.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "./node_modules/property-information/lib/aria.js")
var svg = __webpack_require__(/*! ./lib/svg */ "./node_modules/property-information/lib/svg.js")

module.exports = merge([xml, xlink, xmlns, aria, svg])


/***/ }),

/***/ "./node_modules/rehype-react/index.js":
/*!********************************************!*\
  !*** ./node_modules/rehype-react/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toH = __webpack_require__(/*! hast-to-hyperscript */ "./node_modules/hast-to-hyperscript/index.js")
var tableCellStyle = __webpack_require__(/*! @mapbox/hast-util-table-cell-style */ "./node_modules/@mapbox/hast-util-table-cell-style/index.js")

module.exports = rehypeReact

var own = {}.hasOwnProperty

// Add a React compiler.
function rehypeReact(options) {
  var settings = options || {}
  var createElement = settings.createElement

  this.Compiler = compiler

  function compiler(node) {
    var result = toH(h, tableCellStyle(node), settings.prefix)

    if (node.type === 'root') {
      // Invert <https://github.com/syntax-tree/hast-to-hyperscript/blob/d227372/index.js#L46-L56>.
      result =
        result.type === 'div' &&
        (node.children.length !== 1 || node.children[0].type !== 'element')
          ? result.props.children
          : [result]

      return createElement(settings.Fragment || 'div', {}, result)
    }

    return result
  }

  // Wrap `createElement` to pass components in.
  function h(name, props, children) {
    var component = name

    if (settings.components && own.call(settings.components, name)) {
      component = settings.components[name]

      if (settings.passNode) {
        props.node = this
      }
    }

    return createElement(component, props, children)
  }
}


/***/ }),

/***/ "./node_modules/remark-gfm/index.js":
/*!******************************************!*\
  !*** ./node_modules/remark-gfm/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var syntax = __webpack_require__(/*! micromark-extension-gfm */ "./node_modules/micromark-extension-gfm/index.js")
var fromMarkdown = __webpack_require__(/*! mdast-util-gfm/from-markdown */ "./node_modules/mdast-util-gfm/from-markdown.js")
var toMarkdown = __webpack_require__(/*! mdast-util-gfm/to-markdown */ "./node_modules/mdast-util-gfm/to-markdown.js")

var warningIssued

module.exports = gfm

function gfm(options) {
  var data = this.data()

  /* istanbul ignore next - old remark. */
  if (
    !warningIssued &&
    ((this.Parser &&
      this.Parser.prototype &&
      this.Parser.prototype.blockTokenizers) ||
      (this.Compiler &&
        this.Compiler.prototype &&
        this.Compiler.prototype.visitors))
  ) {
    warningIssued = true
    console.warn(
      '[remark-gfm] Warning: please upgrade to remark 13 to use this plugin'
    )
  }

  add('micromarkExtensions', syntax(options))
  add('fromMarkdownExtensions', fromMarkdown)
  add('toMarkdownExtensions', toMarkdown(options))

  function add(field, value) {
    /* istanbul ignore if - other extensions. */
    if (data[field]) data[field].push(value)
    else data[field] = [value]
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-parse/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = parse

var fromMarkdown = __webpack_require__(/*! mdast-util-from-markdown */ "./node_modules/mdast-util-from-markdown/index.js")

function parse(options) {
  var self = this

  this.Parser = parse

  function parse(doc) {
    return fromMarkdown(
      doc,
      Object.assign({}, self.data('settings'), options, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: self.data('micromarkExtensions') || [],
        mdastExtensions: self.data('fromMarkdownExtensions') || []
      })
    )
  }
}


/***/ }),

/***/ "./node_modules/remark-rehype/index.js":
/*!*********************************************!*\
  !*** ./node_modules/remark-rehype/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var mdast2hast = __webpack_require__(/*! mdast-util-to-hast */ "./node_modules/mdast-util-to-hast/index.js")

module.exports = remark2rehype

// Attacher.
// If a destination is given, runs the destination with the new hast tree
// (bridge mode).
// Without destination, returns the tree: further plugins run on that tree
// (mutate mode).
function remark2rehype(destination, options) {
  if (destination && !destination.process) {
    options = destination
    destination = null
  }

  return destination ? bridge(destination, options) : mutate(options)
}

// Bridge mode.
// Runs the destination with the new hast tree.
function bridge(destination, options) {
  return transformer

  function transformer(node, file, next) {
    destination.run(mdast2hast(node, options), file, done)

    function done(err) {
      next(err)
    }
  }
}

// Mutate-mode.
// Further transformers run on the hast tree.
function mutate(options) {
  return transformer

  function transformer(node) {
    return mdast2hast(node, options)
  }
}


/***/ }),

/***/ "./node_modules/repeat-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/repeat-string/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/space-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.parse = parse
exports.stringify = stringify

var empty = ''
var space = ' '
var whiteSpace = /[ \t\n\r\f]+/g

function parse(value) {
  var input = String(value || empty).trim()
  return input === empty ? [] : input.split(whiteSpace)
}

function stringify(values) {
  return values.join(space).trim()
}


/***/ }),

/***/ "./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js");

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;


/***/ }),

/***/ "./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var wrap = __webpack_require__(/*! ./wrap.js */ "./node_modules/trough/wrap.js")

module.exports = trough

trough.wrap = wrap

var slice = [].slice

// Create new middleware.
function trough() {
  var fns = []
  var middleware = {}

  middleware.run = run
  middleware.use = use

  return middleware

  // Run `fns`.  Last argument must be a completion handler.
  function run() {
    var index = -1
    var input = slice.call(arguments, 0, -1)
    var done = arguments[arguments.length - 1]

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input))

    // Run the next `fn`, if any.
    function next(err) {
      var fn = fns[++index]
      var params = slice.call(arguments, 0)
      var values = params.slice(1)
      var length = input.length
      var pos = -1

      if (err) {
        done(err)
        return
      }

      // Copy non-nully input into values.
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos]
        }
      }

      input = values

      // Next or done.
      if (fn) {
        wrap(fn, next).apply(null, input)
      } else {
        done.apply(null, [null].concat(input))
      }
    }
  }

  // Add `fn` to the list.
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn)

    return middleware
  }
}


/***/ }),

/***/ "./node_modules/trough/wrap.js":
/*!*************************************!*\
  !*** ./node_modules/trough/wrap.js ***!
  \*************************************/
/***/ ((module) => {

"use strict";


var slice = [].slice

module.exports = wrap

// Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.
function wrap(fn, callback) {
  var invoked

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0)
    var callback = fn.length > params.length
    var result

    if (callback) {
      params.push(done)
    }

    try {
      result = fn.apply(null, params)
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error
      }

      return done(error)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  // Invoke `next`, only once.
  function done() {
    if (!invoked) {
      invoked = true

      callback.apply(null, arguments)
    }
  }

  // Invoke `done` with one value.
  // Tracks if an error is passed, too.
  function then(value) {
    done(null, value)
  }
}


/***/ }),

/***/ "./node_modules/unified/index.js":
/*!***************************************!*\
  !*** ./node_modules/unified/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bail = __webpack_require__(/*! bail */ "./node_modules/bail/index.js")
var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js")
var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js")
var plain = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js")
var trough = __webpack_require__(/*! trough */ "./node_modules/trough/index.js")
var vfile = __webpack_require__(/*! vfile */ "./node_modules/vfile/index.js")

// Expose a frozen processor.
module.exports = unified().freeze()

var slice = [].slice
var own = {}.hasOwnProperty

// Process pipeline.
var pipeline = trough()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify)

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file)
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done)

  function done(error, tree, file) {
    if (error) {
      next(error)
    } else {
      ctx.tree = tree
      ctx.file = file
      next()
    }
  }
}

function pipelineStringify(p, ctx) {
  var result = p.stringify(ctx.tree, ctx.file)

  if (result === undefined || result === null) {
    // Empty.
  } else if (typeof result === 'string' || buffer(result)) {
    ctx.file.contents = result
  } else {
    ctx.file.result = result
  }
}

// Function to create the first processor.
function unified() {
  var attachers = []
  var transformers = trough()
  var namespace = {}
  var freezeIndex = -1
  var frozen

  // Data management.
  processor.data = data

  // Lock.
  processor.freeze = freeze

  // Plugins.
  processor.attachers = attachers
  processor.use = use

  // API.
  processor.parse = parse
  processor.stringify = stringify
  processor.run = run
  processor.runSync = runSync
  processor.process = process
  processor.processSync = processSync

  // Expose.
  return processor

  // Create a new processor based on the processor in the current scope.
  function processor() {
    var destination = unified()
    var index = -1

    while (++index < attachers.length) {
      destination.use.apply(null, attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  // Freeze: used to signal a processor that has finished configuration.
  //
  // For example, take unified itself: it’s frozen.
  // Plugins should not be added to it.
  // Rather, it should be extended, by invoking it, before modifying it.
  //
  // In essence, always invoke this when exporting a processor.
  function freeze() {
    var values
    var transformer

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex]

      if (values[1] === false) {
        continue
      }

      if (values[1] === true) {
        values[1] = undefined
      }

      transformer = values[0].apply(processor, values.slice(1))

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Infinity

    return processor
  }

  // Data management.
  // Getter / setter for processor-specific informtion.
  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)
        namespace[key] = value
        return processor
      }

      // Get `key`.
      return (own.call(namespace, key) && namespace[key]) || null
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    // Get space.
    return namespace
  }

  // Plugin management.
  //
  // Pass it:
  // *   an attacher and options,
  // *   a preset,
  // *   a list of presets, attachers, and arguments (list of attachers and
  //     options).
  function use(value) {
    var settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      // Empty.
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments)
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings)
    }

    return processor

    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = extend(settings || {}, result.settings)
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value)
        } else {
          addPreset(value)
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var index = -1

      if (plugins === null || plugins === undefined) {
        // Empty.
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        while (++index < plugins.length) {
          add(plugins[index])
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin)

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(true, entry[1], value)
        }

        entry[1] = value
      } else {
        attachers.push(slice.call(arguments))
      }
    }
  }

  function find(plugin) {
    var index = -1

    while (++index < attachers.length) {
      if (attachers[index][0] === plugin) {
        return attachers[index]
      }
    }
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor.
  function parse(doc) {
    var file = vfile(doc)
    var Parser

    freeze()
    Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser, 'parse')) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), async.
  function run(node, file, cb) {
    assertNode(node)
    freeze()

    if (!cb && typeof file === 'function') {
      cb = file
      file = null
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done)

      function done(error, tree, file) {
        tree = tree || node
        if (error) {
          reject(error)
        } else if (resolve) {
          resolve(tree)
        } else {
          cb(null, tree, file)
        }
      }
    }
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), sync.
  function runSync(node, file) {
    var result
    var complete

    run(node, file, done)

    assertDone('runSync', 'run', complete)

    return result

    function done(error, tree) {
      complete = true
      result = tree
      bail(error)
    }
  }

  // Stringify a unist node representation of a file (in string or vfile
  // representation) into a string using the `Compiler` on the processor.
  function stringify(node, doc) {
    var file = vfile(doc)
    var Compiler

    freeze()
    Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler, 'compile')) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor, then run transforms on that node, and
  // compile the resulting node using the `Compiler` on the processor, and
  // store that result on the vfile.
  function process(doc, cb) {
    freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      var file = vfile(doc)

      pipeline.run(processor, {file: file}, done)

      function done(error) {
        if (error) {
          reject(error)
        } else if (resolve) {
          resolve(file)
        } else {
          cb(null, file)
        }
      }
    }
  }

  // Process the given document (in string or vfile representation), sync.
  function processSync(doc) {
    var file
    var complete

    freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)
    file = vfile(doc)

    process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    function done(error) {
      complete = true
      bail(error)
    }
  }
}

// Check if `value` is a constructor.
function newable(value, name) {
  return (
    typeof value === 'function' &&
    value.prototype &&
    // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    (keys(value.prototype) || name in value.prototype)
  )
}

// Check if `value` is an object with keys.
function keys(value) {
  var key
  for (key in value) {
    return true
  }

  return false
}

// Assert a parser is available.
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

// Assert a compiler is available.
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

// Assert the processor is not frozen.
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot invoke `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
    )
  }
}

// Assert `node` is a unist node.
function assertNode(node) {
  if (!node || typeof node.type !== 'string') {
    throw new Error('Expected node, got `' + node + '`')
  }
}

// Assert that `complete` is `true`.
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}


/***/ }),

/***/ "./node_modules/unist-builder/index.js":
/*!*********************************************!*\
  !*** ./node_modules/unist-builder/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = u

function u(type, props, value) {
  var node

  if (
    (value === null || value === undefined) &&
    (typeof props !== 'object' || Array.isArray(props))
  ) {
    value = props
    props = {}
  }

  node = Object.assign({type: String(type)}, props)

  if (Array.isArray(value)) {
    node.children = value
  } else if (value !== null && value !== undefined) {
    node.value = String(value)
  }

  return node
}


/***/ }),

/***/ "./node_modules/unist-util-generated/index.js":
/*!****************************************************!*\
  !*** ./node_modules/unist-util-generated/index.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = generated

function generated(node) {
  return (
    !node ||
    !node.position ||
    !node.position.start ||
    !node.position.start.line ||
    !node.position.start.column ||
    !node.position.end ||
    !node.position.end.line ||
    !node.position.end.column
  )
}


/***/ }),

/***/ "./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = convert

function convert(test) {
  if (test == null) {
    return ok
  }

  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (typeof test === 'object') {
    return 'length' in test ? anyFactory(test) : allFactory(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function allFactory(test) {
  return all

  function all(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) return false
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = []
  var index = -1

  while (++index < tests.length) {
    checks[index] = convert(tests[index])
  }

  return any

  function any() {
    var index = -1

    while (++index < checks.length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "./node_modules/unist-util-position/index.js":
/*!***************************************************!*\
  !*** ./node_modules/unist-util-position/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


var start = factory('start')
var end = factory('end')

module.exports = position

position.start = start
position.end = end

function position(node) {
  return {start: start(node), end: end(node)}
}

function factory(type) {
  point.displayName = type

  return point

  function point(node) {
    var point = (node && node.position && node.position[type]) || {}

    return {
      line: point.line || null,
      column: point.column || null,
      offset: isNaN(point.offset) ? null : point.offset
    }
  }
}


/***/ }),

/***/ "./node_modules/unist-util-stringify-position/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/index.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


var own = {}.hasOwnProperty

module.exports = stringify

function stringify(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  // Position.
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  // Point.
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  // ?
  return ''
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {}
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {}
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/color.browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/color.browser.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = identity
function identity(d) {
  return d
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")
var color = __webpack_require__(/*! ./color */ "./node_modules/unist-util-visit-parents/color.browser.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var step
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)
  step = reverse ? -1 : 1

  factory(tree, null, [])()

  function factory(node, index, parents) {
    var value = typeof node === 'object' && node !== null ? node : {}
    var name

    if (typeof value.type === 'string') {
      name =
        typeof value.tagName === 'string'
          ? value.tagName
          : typeof value.name === 'string'
          ? value.name
          : undefined

      visit.displayName =
        'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'
    }

    return visit

    function visit() {
      var grandparents = parents.concat(node)
      var result = []
      var subresult
      var offset

      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents))

        if (result[0] === EXIT) {
          return result
        }
      }

      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step

        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)()

          if (subresult[0] === EXIT) {
            return subresult
          }

          offset =
            typeof subresult[1] === 'number' ? subresult[1] : offset + step
        }
      }

      return result
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/vfile-message/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vfile-message/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var stringify = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/index.js")

module.exports = VMessage

// Inherit from `Error#`.
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype
VMessage.prototype = new VMessagePrototype()

// Message properties.
var proto = VMessage.prototype

proto.file = ''
proto.name = ''
proto.reason = ''
proto.message = ''
proto.stack = ''
proto.fatal = null
proto.column = null
proto.line = null

// Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.
function VMessage(reason, position, origin) {
  var parts
  var range
  var location

  if (typeof position === 'string') {
    origin = position
    position = null
  }

  parts = parseOrigin(origin)
  range = stringify(position) || '1:1'

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  }

  // Node.
  if (position && position.position) {
    position = position.position
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position
      position = position.start
    } else {
      // Point.
      location.start = position
    }
  }

  if (reason.stack) {
    this.stack = reason.stack
    reason = reason.message
  }

  this.message = reason
  this.name = range
  this.reason = reason
  this.line = position ? position.line : null
  this.column = position ? position.column : null
  this.location = location
  this.source = parts[0]
  this.ruleId = parts[1]
}

function parseOrigin(origin) {
  var result = [null, null]
  var index

  if (typeof origin === 'string') {
    index = origin.indexOf(':')

    if (index === -1) {
      result[1] = origin
    } else {
      result[0] = origin.slice(0, index)
      result[1] = origin.slice(index + 1)
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/vfile/index.js":
/*!*************************************!*\
  !*** ./node_modules/vfile/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./lib */ "./node_modules/vfile/lib/index.js")


/***/ }),

/***/ "./node_modules/vfile/lib/core.js":
/*!****************************************!*\
  !*** ./node_modules/vfile/lib/core.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var p = __webpack_require__(/*! ./minpath */ "./node_modules/vfile/lib/minpath.browser.js")
var proc = __webpack_require__(/*! ./minproc */ "./node_modules/vfile/lib/minproc.browser.js")
var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js")

module.exports = VFile

var own = {}.hasOwnProperty

// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']

VFile.prototype.toString = toString

// Access full path (`~/index.min.js`).
Object.defineProperty(VFile.prototype, 'path', {get: getPath, set: setPath})

// Access parent path (`~`).
Object.defineProperty(VFile.prototype, 'dirname', {
  get: getDirname,
  set: setDirname
})

// Access basename (`index.min.js`).
Object.defineProperty(VFile.prototype, 'basename', {
  get: getBasename,
  set: setBasename
})

// Access extname (`.js`).
Object.defineProperty(VFile.prototype, 'extname', {
  get: getExtname,
  set: setExtname
})

// Access stem (`index.min`).
Object.defineProperty(VFile.prototype, 'stem', {get: getStem, set: setStem})

// Construct a new file.
function VFile(options) {
  var prop
  var index

  if (!options) {
    options = {}
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options}
  } else if ('message' in options && 'messages' in options) {
    return options
  }

  if (!(this instanceof VFile)) {
    return new VFile(options)
  }

  this.data = {}
  this.messages = []
  this.history = []
  this.cwd = proc.cwd()

  // Set path related properties in the correct order.
  index = -1

  while (++index < order.length) {
    prop = order[index]

    if (own.call(options, prop)) {
      this[prop] = options[prop]
    }
  }

  // Set non-path related properties.
  for (prop in options) {
    if (order.indexOf(prop) < 0) {
      this[prop] = options[prop]
    }
  }
}

function getPath() {
  return this.history[this.history.length - 1]
}

function setPath(path) {
  assertNonEmpty(path, 'path')

  if (this.path !== path) {
    this.history.push(path)
  }
}

function getDirname() {
  return typeof this.path === 'string' ? p.dirname(this.path) : undefined
}

function setDirname(dirname) {
  assertPath(this.path, 'dirname')
  this.path = p.join(dirname || '', this.basename)
}

function getBasename() {
  return typeof this.path === 'string' ? p.basename(this.path) : undefined
}

function setBasename(basename) {
  assertNonEmpty(basename, 'basename')
  assertPart(basename, 'basename')
  this.path = p.join(this.dirname || '', basename)
}

function getExtname() {
  return typeof this.path === 'string' ? p.extname(this.path) : undefined
}

function setExtname(extname) {
  assertPart(extname, 'extname')
  assertPath(this.path, 'extname')

  if (extname) {
    if (extname.charCodeAt(0) !== 46 /* `.` */) {
      throw new Error('`extname` must start with `.`')
    }

    if (extname.indexOf('.', 1) > -1) {
      throw new Error('`extname` cannot contain multiple dots')
    }
  }

  this.path = p.join(this.dirname, this.stem + (extname || ''))
}

function getStem() {
  return typeof this.path === 'string'
    ? p.basename(this.path, this.extname)
    : undefined
}

function setStem(stem) {
  assertNonEmpty(stem, 'stem')
  assertPart(stem, 'stem')
  this.path = p.join(this.dirname || '', stem + (this.extname || ''))
}

// Get the value of the file.
function toString(encoding) {
  return (this.contents || '').toString(encoding)
}

// Assert that `part` is not a path (i.e., does not contain `p.sep`).
function assertPart(part, name) {
  if (part && part.indexOf(p.sep) > -1) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + p.sep + '`'
    )
  }
}

// Assert that `part` is not empty.
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

// Assert `path` exists.
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}


/***/ }),

/***/ "./node_modules/vfile/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/vfile/lib/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VMessage = __webpack_require__(/*! vfile-message */ "./node_modules/vfile-message/index.js")
var VFile = __webpack_require__(/*! ./core.js */ "./node_modules/vfile/lib/core.js")

module.exports = VFile

VFile.prototype.message = message
VFile.prototype.info = info
VFile.prototype.fail = fail

// Create a message with `reason` at `position`.
// When an error is passed in as `reason`, copies the stack.
function message(reason, position, origin) {
  var message = new VMessage(reason, position, origin)

  if (this.path) {
    message.name = this.path + ':' + message.name
    message.file = this.path
  }

  message.fatal = false

  this.messages.push(message)

  return message
}

// Fail: creates a vmessage, associates it with the file, and throws it.
function fail() {
  var message = this.message.apply(this, arguments)

  message.fatal = true

  throw message
}

// Info: creates a vmessage, associates it with the file, and marks the fatality
// as null.
function info() {
  var message = this.message.apply(this, arguments)

  message.fatal = null

  return message
}


/***/ }),

/***/ "./node_modules/vfile/lib/minpath.browser.js":
/*!***************************************************!*\
  !*** ./node_modules/vfile/lib/minpath.browser.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// A derivative work based on:
// <https://github.com/browserify/path-browserify>.
// Which is licensed:
//
// MIT License
//
// Copyright (c) 2013 James Halliday
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// A derivative work based on:
//
// Parts of that are extracted from Node’s internal `path` module:
// <https://github.com/nodejs/node/blob/master/lib/path.js>.
// Which is licensed:
//
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

exports.basename = basename
exports.dirname = dirname
exports.extname = extname
exports.join = join
exports.sep = '/'

function basename(path, ext) {
  var start = 0
  var end = -1
  var index
  var firstNonSlashEnd
  var seenNonSlash
  var extIndex

  if (ext !== undefined && typeof ext !== 'string') {
    throw new TypeError('"ext" argument must be a string')
  }

  assertPath(path)
  index = path.length

  if (ext === undefined || !ext.length || ext.length > path.length) {
    while (index--) {
      if (path.charCodeAt(index) === 47 /* `/` */) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now.
        if (seenNonSlash) {
          start = index + 1
          break
        }
      } else if (end < 0) {
        // We saw the first non-path separator, mark this as the end of our
        // path component.
        seenNonSlash = true
        end = index + 1
      }
    }

    return end < 0 ? '' : path.slice(start, end)
  }

  if (ext === path) {
    return ''
  }

  firstNonSlashEnd = -1
  extIndex = ext.length - 1

  while (index--) {
    if (path.charCodeAt(index) === 47 /* `/` */) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (seenNonSlash) {
        start = index + 1
        break
      }
    } else {
      if (firstNonSlashEnd < 0) {
        // We saw the first non-path separator, remember this index in case
        // we need it if the extension ends up not matching.
        seenNonSlash = true
        firstNonSlashEnd = index + 1
      }

      if (extIndex > -1) {
        // Try to match the explicit extension.
        if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
          if (extIndex < 0) {
            // We matched the extension, so mark this as the end of our path
            // component
            end = index
          }
        } else {
          // Extension does not match, so our result is the entire path
          // component
          extIndex = -1
          end = firstNonSlashEnd
        }
      }
    }
  }

  if (start === end) {
    end = firstNonSlashEnd
  } else if (end < 0) {
    end = path.length
  }

  return path.slice(start, end)
}

function dirname(path) {
  var end
  var unmatchedSlash
  var index

  assertPath(path)

  if (!path.length) {
    return '.'
  }

  end = -1
  index = path.length

  // Prefix `--` is important to not run on `0`.
  while (--index) {
    if (path.charCodeAt(index) === 47 /* `/` */) {
      if (unmatchedSlash) {
        end = index
        break
      }
    } else if (!unmatchedSlash) {
      // We saw the first non-path separator
      unmatchedSlash = true
    }
  }

  return end < 0
    ? path.charCodeAt(0) === 47 /* `/` */
      ? '/'
      : '.'
    : end === 1 && path.charCodeAt(0) === 47 /* `/` */
    ? '//'
    : path.slice(0, end)
}

function extname(path) {
  var startDot = -1
  var startPart = 0
  var end = -1
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find.
  var preDotState = 0
  var unmatchedSlash
  var code
  var index

  assertPath(path)

  index = path.length

  while (index--) {
    code = path.charCodeAt(index)

    if (code === 47 /* `/` */) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (unmatchedSlash) {
        startPart = index + 1
        break
      }

      continue
    }

    if (end < 0) {
      // We saw the first non-path separator, mark this as the end of our
      // extension.
      unmatchedSlash = true
      end = index + 1
    }

    if (code === 46 /* `.` */) {
      // If this is our first dot, mark it as the start of our extension.
      if (startDot < 0) {
        startDot = index
      } else if (preDotState !== 1) {
        preDotState = 1
      }
    } else if (startDot > -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension.
      preDotState = -1
    }
  }

  if (
    startDot < 0 ||
    end < 0 ||
    // We saw a non-dot character immediately before the dot.
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly `..`.
    (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
  ) {
    return ''
  }

  return path.slice(startDot, end)
}

function join() {
  var index = -1
  var joined

  while (++index < arguments.length) {
    assertPath(arguments[index])

    if (arguments[index]) {
      joined =
        joined === undefined
          ? arguments[index]
          : joined + '/' + arguments[index]
    }
  }

  return joined === undefined ? '.' : normalize(joined)
}

// Note: `normalize` is not exposed as `path.normalize`, so some code is
// manually removed from it.
function normalize(path) {
  var absolute
  var value

  assertPath(path)

  absolute = path.charCodeAt(0) === 47 /* `/` */

  // Normalize the path according to POSIX rules.
  value = normalizeString(path, !absolute)

  if (!value.length && !absolute) {
    value = '.'
  }

  if (value.length && path.charCodeAt(path.length - 1) === 47 /* / */) {
    value += '/'
  }

  return absolute ? '/' + value : value
}

// Resolve `.` and `..` elements in a path with directory names.
function normalizeString(path, allowAboveRoot) {
  var result = ''
  var lastSegmentLength = 0
  var lastSlash = -1
  var dots = 0
  var index = -1
  var code
  var lastSlashIndex

  while (++index <= path.length) {
    if (index < path.length) {
      code = path.charCodeAt(index)
    } else if (code === 47 /* `/` */) {
      break
    } else {
      code = 47 /* `/` */
    }

    if (code === 47 /* `/` */) {
      if (lastSlash === index - 1 || dots === 1) {
        // Empty.
      } else if (lastSlash !== index - 1 && dots === 2) {
        if (
          result.length < 2 ||
          lastSegmentLength !== 2 ||
          result.charCodeAt(result.length - 1) !== 46 /* `.` */ ||
          result.charCodeAt(result.length - 2) !== 46 /* `.` */
        ) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf('/')

            /* istanbul ignore else - No clue how to cover it. */
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = ''
                lastSegmentLength = 0
              } else {
                result = result.slice(0, lastSlashIndex)
                lastSegmentLength = result.length - 1 - result.lastIndexOf('/')
              }

              lastSlash = index
              dots = 0
              continue
            }
          } else if (result.length) {
            result = ''
            lastSegmentLength = 0
            lastSlash = index
            dots = 0
            continue
          }
        }

        if (allowAboveRoot) {
          result = result.length ? result + '/..' : '..'
          lastSegmentLength = 2
        }
      } else {
        if (result.length) {
          result += '/' + path.slice(lastSlash + 1, index)
        } else {
          result = path.slice(lastSlash + 1, index)
        }

        lastSegmentLength = index - lastSlash - 1
      }

      lastSlash = index
      dots = 0
    } else if (code === 46 /* `.` */ && dots > -1) {
      dots++
    } else {
      dots = -1
    }
  }

  return result
}

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError(
      'Path must be a string. Received ' + JSON.stringify(path)
    )
  }
}


/***/ }),

/***/ "./node_modules/vfile/lib/minproc.browser.js":
/*!***************************************************!*\
  !*** ./node_modules/vfile/lib/minproc.browser.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// Somewhat based on:
// <https://github.com/defunctzombie/node-process/blob/master/browser.js>.
// But I don’t think one tiny line of code can be copyrighted. 😅
exports.cwd = cwd

function cwd() {
  return '/'
}


/***/ }),

/***/ "./node_modules/web-namespaces/index.json":
/*!************************************************!*\
  !*** ./node_modules/web-namespaces/index.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}');

/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./node_modules/gadget.js/salver/app/index.tsx":
/*!*****************************************************!*\
  !*** ./node_modules/gadget.js/salver/app/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventAfterRouteChanged": () => (/* binding */ EventAfterRouteChanged),
/* harmony export */   "EventBeforeRouteChanged": () => (/* binding */ EventBeforeRouteChanged),
/* harmony export */   "getCurRoute": () => (/* binding */ getCurRoute),
/* harmony export */   "pushHistory": () => (/* binding */ pushHistory),
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "../../node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "../../node_modules/gadget.js/ignition/bundle/config/react-dom.ts");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared */ "./node_modules/gadget.js/shared/index.ts");
/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./module-loader */ "./node_modules/gadget.js/salver/app/module-loader.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./node_modules/gadget.js/salver/config/index.ts");
/* harmony import */ var _page_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-loader */ "./node_modules/gadget.js/salver/app/page-loader.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util */ "./node_modules/gadget.js/salver/app/util.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var EventAfterRouteChanged = Symbol("after-route-changed");
var EventBeforeRouteChanged = Symbol("before-route-changed");
var curRoute = {
  pattern: "/",
  href: {
    pathname: "/"
  }
};
function getCurRoute() {
  if ((0,_config__WEBPACK_IMPORTED_MODULE_12__.IS_CLIENT)()) return curRoute;
  return __webpack_require__.g[_config__WEBPACK_IMPORTED_MODULE_12__.NS].currentRoute;
}
function pushHistory(href) {
  if ((0,_config__WEBPACK_IMPORTED_MODULE_12__.IS_SERVER)()) return;

  if (typeof href === "string") {
    href = {
      pathname: href
    };
  } // ensure pathname is a legal route


  (0,_util__WEBPACK_IMPORTED_MODULE_14__.assertIsRouteUrl)(href.pathname);
  var route = (0,_util__WEBPACK_IMPORTED_MODULE_14__.hrefToRoute)(href);

  if (!(0,_util__WEBPACK_IMPORTED_MODULE_14__.isHrefEqual)(href, curRoute.href)) {
    (0,_shared__WEBPACK_IMPORTED_MODULE_10__.emit)(EventBeforeRouteChanged, route, curRoute);
    window.history.pushState(route, "", (0,_util__WEBPACK_IMPORTED_MODULE_14__.hrefToUrl)(href));
  }
}

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(_props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "handlePopStateChange", function (evt) {
      if (evt.state) (0,_shared__WEBPACK_IMPORTED_MODULE_10__.emit)(EventBeforeRouteChanged, evt.state, curRoute);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRouteChangeBefore", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(route) {
        var pageModule, page, props, pattern, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_page_loader__WEBPACK_IMPORTED_MODULE_13__.loadPageScript)(route.pattern);

              case 2:
                pageModule = _context.sent;

                if (!(pageModule instanceof Error)) {
                  _context.next = 5;
                  break;
                }

                throw pageModule;

              case 5:
                page = pageModule.default;
                props = {};
                pattern = route.pattern;
                pattern = pattern.startsWith("/") ? pattern.slice(1) : pattern;
                pattern = "/data/" + pattern;
                _context.next = 12;
                return fetch("".concat((0,_util__WEBPACK_IMPORTED_MODULE_14__.hrefToUrl)({
                  pathname: pattern
                }), ".json")).then(function (resp) {
                  return resp.json();
                });

              case 12:
                resp = _context.sent;
                props.data = resp.data;
                (0,_shared__WEBPACK_IMPORTED_MODULE_10__.emit)(EventAfterRouteChanged, route, curRoute);
                curRoute = route;

                _this.setState({
                  route,
                  page,
                  pageProps: props
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      route: _props.route,
      page: _props.page,
      pageProps: _props.pageProps
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.listen();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.drop();
    }
  }, {
    key: "listen",
    value: function listen() {
      window.addEventListener("popstate", this.handlePopStateChange);
      (0,_shared__WEBPACK_IMPORTED_MODULE_10__.on)(EventBeforeRouteChanged, this.handleRouteChangeBefore);
    }
  }, {
    key: "drop",
    value: function drop() {
      window.removeEventListener("popstate", this.handlePopStateChange);
      (0,_shared__WEBPACK_IMPORTED_MODULE_10__.off)(EventBeforeRouteChanged, this.handleRouteChangeBefore);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          page = _this$state.page,
          pageProps = _this$state.pageProps;
      return (0,react__WEBPACK_IMPORTED_MODULE_8__.createElement)(page, pageProps);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);



function recoverRoute() {
  var url = window.location.href;
  var u = (0,_shared__WEBPACK_IMPORTED_MODULE_10__.parseUrlRaiseErr)(url);
  (0,_util__WEBPACK_IMPORTED_MODULE_14__.assertIsRouteUrl)(u);
  var route = (0,_util__WEBPACK_IMPORTED_MODULE_14__.urlToRoute)(u);

  if (route) {
    curRoute = route;
    window.history.replaceState(curRoute, "", url);
  }
}

function bootstrap() {
  return _bootstrap.apply(this, arguments);
}

function _bootstrap() {
  _bootstrap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            recoverRoute();
            (0,_module_loader__WEBPACK_IMPORTED_MODULE_11__.waitModuleLoaded)(curRoute.pattern, /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(module) {
                var page, props, r;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        page = module.default;
                        props = (0,_config__WEBPACK_IMPORTED_MODULE_12__.initialProps)();

                        if (!(props && props.error)) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 4:
                        // use `render` instead of `hydrate` when either in pure-csr or in ssr but
                        // `getInitialProps` was failed in server side
                        //
                        // if we keep using `hydrate` despite `getInitialProps` was failed in server side
                        // then we'll meet the `content did not match` error
                        r = props === null ? react_dom__WEBPACK_IMPORTED_MODULE_9__.render : react_dom__WEBPACK_IMPORTED_MODULE_9__.hydrate;

                        try {
                          r( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(App, {
                            route: curRoute,
                            page: page,
                            pageProps: props
                          }), document.getElementById((0,_config__WEBPACK_IMPORTED_MODULE_12__.mountPoint)()));
                        } catch (error) {
                          console.log(error);
                        }

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()); // we do not need to load the page for the initial route since
            // the related page scripts was embedded in the response html
            // of the SSR routine, however this initial page loading is
            // necessary for the pure CSR routine
            //
            // `loadPageScript` will take its internally maintained loading
            // scripts with the script tags in the response html to prevent
            // loading one script repeatedly

            (0,_page_loader__WEBPACK_IMPORTED_MODULE_13__.loadPageScript)(curRoute.pattern);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _bootstrap.apply(this, arguments);
}

if ((0,_config__WEBPACK_IMPORTED_MODULE_12__.IS_CLIENT)()) {
  try {
    bootstrap();
  } catch (error) {
    console.error("Failed to bootstrap: ", error);
  }
} // register to outside module manager


(0,_config__WEBPACK_IMPORTED_MODULE_12__.useModule)("APP", App);
(0,_config__WEBPACK_IMPORTED_MODULE_12__.useModule)("REACT", (react__WEBPACK_IMPORTED_MODULE_8___default()));

/***/ }),

/***/ "./node_modules/gadget.js/salver/app/module-loader.ts":
/*!************************************************************!*\
  !*** ./node_modules/gadget.js/salver/app/module-loader.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitModuleLoaded": () => (/* binding */ waitModuleLoaded),
/* harmony export */   "loadScript": () => (/* binding */ loadScript),
/* harmony export */   "loadStyle": () => (/* binding */ loadStyle),
/* harmony export */   "loadModule": () => (/* binding */ loadModule),
/* harmony export */   "retrievePageModule": () => (/* binding */ retrievePageModule)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.map.js */ "../../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "../../node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "../../node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared */ "./node_modules/gadget.js/shared/index.ts");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config/constant */ "./node_modules/gadget.js/salver/config/constant.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../config */ "./node_modules/gadget.js/salver/config/index.ts");


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















var deferredModules = new Map();
/**
 * @browser
 * @param id
 * @param cb
 */

function waitModuleLoaded(id, cb) {
  var meta = deferredModules.get(normalizeId(id));
  if (meta !== null && meta !== void 0 && meta.exports) cb(meta.exports);

  var handler = function handler(loadedId, module) {
    if (id === loadedId) {
      (0,_shared__WEBPACK_IMPORTED_MODULE_17__.off)(_config_constant__WEBPACK_IMPORTED_MODULE_18__.EVT_MODULE_LOADED, handler);
      cb(module);
    }
  };

  (0,_shared__WEBPACK_IMPORTED_MODULE_17__.on)(_config_constant__WEBPACK_IMPORTED_MODULE_18__.EVT_MODULE_LOADED, handler);
}

function markModuleLoaded(id, module) {
  var meta = deferredModules.get(id);
  meta.exports = module;
}

function emitModuleLoadedEvent(id, module) {
  (0,_shared__WEBPACK_IMPORTED_MODULE_17__.emit)(_config_constant__WEBPACK_IMPORTED_MODULE_18__.EVT_MODULE_LOADED, id, module);
}

function handleModuleLoaded(loaded) {
  var _loaded = _slicedToArray(loaded, 2),
      id = _loaded[0],
      moduleFactory = _loaded[1];

  var module = moduleFactory();
  markModuleLoaded(id, module);
  emitModuleLoadedEvent(id, module);
}

if ((0,_config__WEBPACK_IMPORTED_MODULE_19__.IS_CLIENT)()) {
  var restoreModules = function restoreModules() {
    var raw = window[_config_constant__WEBPACK_IMPORTED_MODULE_18__.NS].pageModules;
    Object.keys(raw).forEach(function (k) {
      return deferredModules.set(k, {
        files: raw[k]
      });
    }); // forcedly replace the `push` method on the array to be `handleModuleLoaded`,
    // doing this for the later loaded module can register themselves directly
    // into `deferredModules`

    raw.push = handleModuleLoaded;
  };

  restoreModules();
}

var loadingScripts = new Map();
/**
 * @browser
 * @param url
 */

function loadScript(_x) {
  return _loadScript.apply(this, arguments);
}

function _loadScript() {
  _loadScript = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var deferred, exist, script;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!loadingScripts.has(url)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", loadingScripts.get(url));

          case 2:
            deferred = (0,_shared__WEBPACK_IMPORTED_MODULE_17__.defer)();
            loadingScripts.set(url, deferred);
            exist = document.querySelector("script[src=\"".concat(url, "\"]"));

            if (!exist) {
              _context.next = 8;
              break;
            }

            deferred.done(true);
            return _context.abrupt("return", deferred.promise);

          case 8:
            script = document.createElement("script");
            script.src = url;
            script.crossOrigin = "anonymous";

            script.onerror = function () {
              loadingScripts.delete(url);
              deferred.done(false);
            };

            script.onload = function () {
              deferred.done(true);
            };

            document.body.appendChild(script);
            return _context.abrupt("return", deferred.promise);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadScript.apply(this, arguments);
}

var loadingStyles = new Map();
/**
 * @browser
 * @param url
 */

function loadStyle(_x2) {
  return _loadStyle.apply(this, arguments);
}

function _loadStyle() {
  _loadStyle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
    var deferred, exist, link;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!loadingStyles.has(url)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", loadingStyles.get(url));

          case 2:
            deferred = (0,_shared__WEBPACK_IMPORTED_MODULE_17__.defer)();
            loadingStyles.set(url, deferred);
            exist = document.querySelector("link[rel=stylesheet][href=\"".concat(url, "\"]"));

            if (!exist) {
              _context2.next = 8;
              break;
            }

            deferred.done(true);
            return _context2.abrupt("return", deferred.promise);

          case 8:
            link = document.createElement("link");
            link.href = url;
            link.rel = "stylesheet";

            link.onerror = function () {
              loadingStyles.delete(url);
              deferred.done(false);
            };

            link.onload = function () {
              deferred.done(true);
            };

            document.getElementsByTagName("head")[0].appendChild(link);
            return _context2.abrupt("return", deferred.promise);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadStyle.apply(this, arguments);
}

function normalizeId(id) {
  var keys = deferredModules.keys();

  var _iterator = _createForOfIteratorHelper(keys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      if (key.includes("*") && new RegExp(key).test(id)) return key;
      if (id === key || id + "/index" === key) return key;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  throw new Error("unexpected module id: " + id);
}
/**
 * @browser
 * @param id
 */


function loadModule(_x3) {
  return _loadModule.apply(this, arguments);
}

function _loadModule() {
  _loadModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var moduleId, meta, deferred, _handleModuleLoaded, loadings, ok;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            moduleId = normalizeId(id);
            meta = deferredModules.get(moduleId);

            if (meta) {
              _context3.next = 4;
              break;
            }

            throw new Error("no module info for id: ".concat(id));

          case 4:
            deferred = (0,_shared__WEBPACK_IMPORTED_MODULE_17__.defer)();

            if (!meta.exports) {
              _context3.next = 9;
              break;
            }

            deferred.done(meta.exports);
            _context3.next = 17;
            break;

          case 9:
            _handleModuleLoaded = function _handleModuleLoaded(loadedId, module) {
              if (loadedId === moduleId || loadedId + "/*" === moduleId) {
                if (moduleId.includes("*")) {
                  meta.exports = module;
                  emitModuleLoadedEvent(id, module);
                }

                (0,_shared__WEBPACK_IMPORTED_MODULE_17__.off)(_config_constant__WEBPACK_IMPORTED_MODULE_18__.EVT_MODULE_LOADED, _handleModuleLoaded);
                deferred.done(module);
              }
            };

            (0,_shared__WEBPACK_IMPORTED_MODULE_17__.on)(_config_constant__WEBPACK_IMPORTED_MODULE_18__.EVT_MODULE_LOADED, _handleModuleLoaded);
            loadings = meta.files.map(function (f) {
              return f.endsWith(".js") ? loadScript(f) : loadStyle(f);
            });
            _context3.next = 14;
            return Promise.all(loadings);

          case 14:
            ok = _context3.sent.every(function (v) {
              return v;
            });

            if (ok) {
              _context3.next = 17;
              break;
            }

            throw new Error("failed to load module script: ".concat(id));

          case 17:
            return _context3.abrupt("return", deferred.promise);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadModule.apply(this, arguments);
}

function retrievePageModule(route) {
  return deferredModules.get(route);
}

/***/ }),

/***/ "./node_modules/gadget.js/salver/app/page-loader.ts":
/*!**********************************************************!*\
  !*** ./node_modules/gadget.js/salver/app/page-loader.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPageScript": () => (/* binding */ loadPageScript)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-loader */ "./node_modules/gadget.js/salver/app/module-loader.ts");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function loadPageScript(_x) {
  return _loadPageScript.apply(this, arguments);
}

function _loadPageScript() {
  _loadPageScript = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(route) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0,_module_loader__WEBPACK_IMPORTED_MODULE_3__.loadModule)(route));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadPageScript.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/gadget.js/salver/app/util.ts":
/*!***************************************************!*\
  !*** ./node_modules/gadget.js/salver/app/util.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hrefToUrl": () => (/* binding */ hrefToUrl),
/* harmony export */   "isHrefEqual": () => (/* binding */ isHrefEqual),
/* harmony export */   "isLocalUrl": () => (/* binding */ isLocalUrl),
/* harmony export */   "IllegalRouteError": () => (/* binding */ IllegalRouteError),
/* harmony export */   "isRouteUrl": () => (/* binding */ isRouteUrl),
/* harmony export */   "assertIsRouteUrl": () => (/* binding */ assertIsRouteUrl),
/* harmony export */   "omitExt": () => (/* binding */ omitExt),
/* harmony export */   "normalizeRoute": () => (/* binding */ normalizeRoute),
/* harmony export */   "urlToRoute": () => (/* binding */ urlToRoute),
/* harmony export */   "hrefToRoute": () => (/* binding */ hrefToRoute)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "../../node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "../../node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "../../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "../../node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.map.js */ "../../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared */ "./node_modules/gadget.js/shared/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config */ "./node_modules/gadget.js/salver/config/index.ts");
/* harmony import */ var _shared_url__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/url */ "./node_modules/gadget.js/shared/url.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















// @internal
function hrefToUrl(href) {
  var fully = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var pathname = href.pathname;
  pathname = pathname.startsWith((0,_config__WEBPACK_IMPORTED_MODULE_18__.basename)()) ? pathname : (0,_shared__WEBPACK_IMPORTED_MODULE_17__.trimRight)((0,_config__WEBPACK_IMPORTED_MODULE_18__.basename)(), ["/"]) + "/" + (0,_shared__WEBPACK_IMPORTED_MODULE_17__.trimLeft)(pathname, ["/"]);
  var u = (0,_shared_url__WEBPACK_IMPORTED_MODULE_19__.parseUrlRaiseErr)(pathname, (0,_config__WEBPACK_IMPORTED_MODULE_18__.config)().baseUrl);

  if (href.query) {
    if (!u.searchParams) u.searchParams = {};
    Object.entries(href.query).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      u.searchParams[k] = v;
    });
  }

  var url = "";

  if ((0,_config__WEBPACK_IMPORTED_MODULE_18__.isHashMode)()) {
    url = "#".concat(u.pathname).concat(u.search);
  } else {
    var search = u.search ? "?" + u.search : "";
    var hash = u.hash ? "#" + u.hash : "";
    url = fully ? u.toString() : "".concat(u.pathname).concat(search).concat(hash);
  }

  return url;
} // @internal

function isHrefEqual(h1, h2) {
  var r1 = urlToRoute(h1.pathname);
  var r2 = urlToRoute(h2.pathname);
  if (r1 === false || r2 === false) return false;
  var q1 = h1.query;
  if (q1 && Object.keys(q1).length === 0) q1 = undefined;
  var q2 = h2.query;
  if (q2 && Object.keys(q2).length === 0) q2 = undefined;
  var p1 = decodeURIComponent(r1.pattern);
  var p2 = decodeURIComponent(r2.pattern);
  return p1 === p2 && (0,_shared__WEBPACK_IMPORTED_MODULE_17__.isObjEqual)(q1, q2);
} // @internal

function isLocalUrl(u) {
  var lu = (0,_shared_url__WEBPACK_IMPORTED_MODULE_19__.parseUrl)((0,_config__WEBPACK_IMPORTED_MODULE_18__.config)().baseUrl);
  if (lu === false) throw new Error("deformed config.baseUrl: " + (0,_config__WEBPACK_IMPORTED_MODULE_18__.config)().baseUrl);
  return u.origin === lu.origin;
}
var IllegalRouteError = /*#__PURE__*/function (_Error) {
  _inherits(IllegalRouteError, _Error);

  var _super = _createSuper(IllegalRouteError);

  function IllegalRouteError() {
    _classCallCheck(this, IllegalRouteError);

    return _super.apply(this, arguments);
  }

  return IllegalRouteError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * a url is route if it's:
 * 1. a validate url
 * 2. a local one
 * 3. listed in `config.router.routes`
 *
 * @internal
 * @param url
 */

function isRouteUrl(url) {
  var raiseError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var u = typeof url === "string" ? (0,_shared_url__WEBPACK_IMPORTED_MODULE_19__.parseUrlRaiseErr)(url, (0,_config__WEBPACK_IMPORTED_MODULE_18__.config)().baseUrl) : url;
  var local = isLocalUrl(u);
  var isSet = (0,_config__WEBPACK_IMPORTED_MODULE_18__.hasRoute)(normalizeRoute(u.pathname));

  if (!(local && isSet)) {
    if (raiseError) throw new IllegalRouteError("URL is not a legal route: " + url);
    return false;
  }

  return true;
} // @internal

function assertIsRouteUrl(url) {
  isRouteUrl(url, true);
} // @internal

function omitExt(route) {
  var dot = route.lastIndexOf(".");
  return dot > 0 ? route.slice(0, dot) : route;
} // @internal

function normalizeRoute(route) {
  route = omitExt(route);
  if (route.startsWith((0,_config__WEBPACK_IMPORTED_MODULE_18__.basename)())) route = "/" + (0,_shared__WEBPACK_IMPORTED_MODULE_17__.trimLeft)(route.replace((0,_config__WEBPACK_IMPORTED_MODULE_18__.basename)(), ""), ["/"]);
  route = route.endsWith("/") ? route + "index" : route;
  return route;
}
/**
 * convert `url` to its associated `route`, return `false` if
 * url is an external one
 *
 * @internal
 * @param url
 */

function urlToRoute(url) {
  try {
    var u = typeof url === "string" ? (0,_shared_url__WEBPACK_IMPORTED_MODULE_19__.parseUrlRaiseErr)(url, (0,_config__WEBPACK_IMPORTED_MODULE_18__.config)().baseUrl) : url;
    assertIsRouteUrl(u);
    var query = u.searchParams || {};
    return {
      pattern: normalizeRoute(u.pathname),
      href: {
        pathname: u.pathname,
        query
      }
    };
  } catch (error) {
    return false;
  }
} // @internal

function hrefToRoute(href) {
  return urlToRoute(hrefToUrl(href));
}

/***/ }),

/***/ "./node_modules/gadget.js/salver/config/constant.ts":
/*!**********************************************************!*\
  !*** ./node_modules/gadget.js/salver/config/constant.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NS": () => (/* binding */ NS),
/* harmony export */   "EVT_MODULE_LOADED": () => (/* binding */ EVT_MODULE_LOADED)
/* harmony export */ });
var NS = "__gadget__";
var EVT_MODULE_LOADED = "gadget-module-loaded";

/***/ }),

/***/ "./node_modules/gadget.js/salver/config/index.ts":
/*!*******************************************************!*\
  !*** ./node_modules/gadget.js/salver/config/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_SERVER": () => (/* binding */ IS_SERVER),
/* harmony export */   "IS_CLIENT": () => (/* binding */ IS_CLIENT),
/* harmony export */   "useModule": () => (/* binding */ useModule),
/* harmony export */   "setTitle": () => (/* binding */ setTitle),
/* harmony export */   "hasRoute": () => (/* binding */ hasRoute),
/* harmony export */   "isHashMode": () => (/* binding */ isHashMode),
/* harmony export */   "initialProps": () => (/* binding */ initialProps),
/* harmony export */   "mountPoint": () => (/* binding */ mountPoint),
/* harmony export */   "basename": () => (/* binding */ basename),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "EVT_MODULE_LOADED": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_13__.EVT_MODULE_LOADED),
/* harmony export */   "NS": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_13__.NS)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "../../node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared */ "./node_modules/gadget.js/shared/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constant */ "./node_modules/gadget.js/salver/config/constant.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function duaGlobal() {
  var g = typeof __webpack_require__.g !== undefined ? __webpack_require__.g : window;
  return g;
}

function IS_SERVER() {
  return !!duaGlobal().SERVER;
}
function IS_CLIENT() {
  return !IS_SERVER();
}
function useModule(name, module) {
  var fn = duaGlobal().useModule;

  if (typeof fn === "function") {
    fn(name, module);
  }
}
function setTitle(title) {
  var fn = duaGlobal().setTitle;

  if (typeof fn === "function") {
    fn(title);
  }
}
var defaultConfig = {
  initialProps: {},
  mnt: _constant__WEBPACK_IMPORTED_MODULE_13__.NS,
  baseUrl: "ssr:///",
  router: {
    hash: false,
    basename: "/",
    routes: [],
    rewrites: []
  },
  pages: []
};
var _config = {};
var presetCfg = {};

if (IS_SERVER()) {
  // preCfg will be injected by runtime-server
  var c = __webpack_require__.g[_constant__WEBPACK_IMPORTED_MODULE_13__.NS];
  Object.keys(defaultConfig).forEach(function (k) {
    if (c[k]) presetCfg[k] = c[k];
  });
} else {
  defaultConfig.baseUrl = window.location.origin;
  presetCfg = window[_constant__WEBPACK_IMPORTED_MODULE_13__.NS];
  if (!presetCfg) throw new Error("Missing configuration");
}

(0,_shared__WEBPACK_IMPORTED_MODULE_12__.merge)(_config, defaultConfig);
(0,_shared__WEBPACK_IMPORTED_MODULE_12__.merge)(_config, presetCfg);

_config.pages.forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      route = _ref2[0];

  _config.router.routes.push(route);
});

function hasRoute(route) {
  var match = !!_config.router.routes.find(function (r) {
    if (r.includes("*")) return new RegExp(r).test(route);
    return r === route || route + "/index" === r;
  });
  return match;
}
function isHashMode() {
  return _config.router.hash;
}
function initialProps() {
  return _config.initialProps;
}
function mountPoint() {
  return _config.mnt;
}
function basename() {
  return _config.router.basename || "/";
}
function config() {
  return _config;
}


/***/ }),

/***/ "./node_modules/gadget.js/salver/head/index.ts":
/*!*****************************************************!*\
  !*** ./node_modules/gadget.js/salver/head/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/gadget.js/salver/config/index.ts");



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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Head = /*#__PURE__*/function (_React$Component) {
  _inherits(Head, _React$Component);

  var _super = _createSuper(Head);

  function Head(props) {
    var _this;

    _classCallCheck(this, Head);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "mounted", void 0);

    (0,_config__WEBPACK_IMPORTED_MODULE_3__.setTitle)(_this._title(_this.props));
    _this.mounted = false;
    return _this;
  }

  _createClass(Head, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this._updateTitle(nextProps);
    }
  }, {
    key: "_title",
    value: function _title(props) {
      if (props.children) {
        var title = "";
        react__WEBPACK_IMPORTED_MODULE_2___default().Children.forEach(props.children, function (child) {
          var isTitle = child.type === "title"; // since user would misunderstand the `Head` therefor add more stuff then `title`
          // we give some advice for user could quickly locate this problem

          if (!isTitle) {
            if (process.env.DEBUG) {
              console.error("consider only use `title` as the child of `Head`");
            }

            return;
          }

          var h = child;
          title = h.props.children;
        });
        return title;
      }

      return "";
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle(props) {
      var head = document.getElementsByTagName("head")[0];

      if (!head) {
        head = document.createElement("head");
        document.insertBefore(head, document.body);
      }

      document.title = this._title(props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;

      this._updateTitle(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Head;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

/***/ }),

/***/ "./node_modules/gadget.js/salver/html/index.tsx":
/*!******************************************************!*\
  !*** ./node_modules/gadget.js/salver/html/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scripts": () => (/* binding */ Scripts),
/* harmony export */   "Styles": () => (/* binding */ Styles),
/* harmony export */   "Html": () => (/* binding */ Html)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/gadget.js/salver/config/index.ts");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var Scripts = function Scripts(_ref) {
  var list = _ref.list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, list.map(function (props, i) {
    var p = props;
    var content = typeof p.children === "string" ? p.children : "";

    if (content) {
      delete p.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("script", _extends({}, props, {
        key: i,
        dangerouslySetInnerHTML: {
          __html: content
        }
      }));
    }

    if (typeof props === "string") {
      p = {
        src: props
      };
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("script", _extends({
      crossOrigin: "anonymous",
      key: p.src
    }, p));
  }));
};
var Styles = function Styles(_ref2) {
  var list = _ref2.list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, list.map(function (props) {
    var p = props;

    if (typeof props === "string") {
      p = {
        href: props
      };
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("link", _extends({
      rel: "stylesheet",
      key: p.href
    }, p));
  }));
};
var Html = /*#__PURE__*/function (_React$Component) {
  _inherits(Html, _React$Component);

  var _super = _createSuper(Html);

  function Html() {
    _classCallCheck(this, Html);

    return _super.apply(this, arguments);
  }

  _createClass(Html, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styles = _this$props.styles,
          scripts = _this$props.scripts,
          children = _this$props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("title", null, "__title__"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Styles, {
        list: styles
      })), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Scripts, {
        list: scripts
      }));
    }
  }]);

  return Html;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

_defineProperty(Html, "doctype", "<!DOCTYPE html>");

(0,_config__WEBPACK_IMPORTED_MODULE_3__.useModule)("HTML", Html);

/***/ }),

/***/ "./node_modules/gadget.js/salver/index.ts":
/*!************************************************!*\
  !*** ./node_modules/gadget.js/salver/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_2__.Link),
/* harmony export */   "unifyHref": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_2__.unifyHref),
/* harmony export */   "Html": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_3__.Html),
/* harmony export */   "Scripts": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_3__.Scripts),
/* harmony export */   "Styles": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_3__.Styles),
/* harmony export */   "Head": () => (/* reexport safe */ _head__WEBPACK_IMPORTED_MODULE_4__.Head),
/* harmony export */   "EventBus": () => (/* reexport module object */ _shared_evt_bus__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "EventAfterRouteChanged": () => (/* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_1__.EventAfterRouteChanged),
/* harmony export */   "EventBeforeRouteChanged": () => (/* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_1__.EventBeforeRouteChanged)
/* harmony export */ });
/* harmony import */ var _shared_evt_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/evt-bus */ "./node_modules/gadget.js/shared/evt-bus.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./node_modules/gadget.js/salver/app/index.tsx");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./node_modules/gadget.js/salver/link/index.tsx");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "./node_modules/gadget.js/salver/html/index.tsx");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./head */ "./node_modules/gadget.js/salver/head/index.ts");







/***/ }),

/***/ "./node_modules/gadget.js/salver/link/impl.tsx":
/*!*****************************************************!*\
  !*** ./node_modules/gadget.js/salver/link/impl.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../../node_modules/gadget.js/ignition/bundle/config/react.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/util */ "./node_modules/gadget.js/salver/app/util.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app */ "./node_modules/gadget.js/salver/app/index.tsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared */ "./node_modules/gadget.js/shared/index.ts");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./type */ "./node_modules/gadget.js/salver/link/type.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function unifyChildren(children, active, href) {
  return (0,_shared__WEBPACK_IMPORTED_MODULE_13__.packToArray)(children).map(function (c, i) {
    if (typeof c !== "function") return c;
    var param = {
      active,
      href
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_10__.cloneElement)(c(param), {
      key: i
    });
  });
}

function classNameList(active) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var activeClassName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "active";
  var classList = className.split(/\s+/g).filter(function (c) {
    return !!c && c !== activeClassName;
  });
  if (active) classList.push(activeClassName);
  return classList;
}

var Link = function Link(props) {
  var _props$html2;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)((0,_type__WEBPACK_IMPORTED_MODULE_14__.unifyHref)(props.href)),
      _useState2 = _slicedToArray(_useState, 2),
      href = _useState2[0],
      setHref = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)((0,_app_util__WEBPACK_IMPORTED_MODULE_11__.isHrefEqual)(href, (0,_app__WEBPACK_IMPORTED_MODULE_12__.getCurRoute)().href)),
      _useState4 = _slicedToArray(_useState3, 2),
      active = _useState4[0],
      setActive = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(unifyChildren(props.children, active, href)),
      _useState6 = _slicedToArray(_useState5, 2),
      children = _useState6[0],
      setChildren = _useState6[1];

  var elem = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    var href = (0,_type__WEBPACK_IMPORTED_MODULE_14__.unifyHref)(props.href);
    setHref(href);
    setActive(!!href && (0,_app_util__WEBPACK_IMPORTED_MODULE_11__.isHrefEqual)(href, (0,_app__WEBPACK_IMPORTED_MODULE_12__.getCurRoute)().href));

    function handleRouteChanged(routeState) {
      if (href) setActive((0,_app_util__WEBPACK_IMPORTED_MODULE_11__.isHrefEqual)(href, routeState.href));
    }

    (0,_shared__WEBPACK_IMPORTED_MODULE_13__.on)(_app__WEBPACK_IMPORTED_MODULE_12__.EventAfterRouteChanged, handleRouteChanged);
    return function () {
      (0,_shared__WEBPACK_IMPORTED_MODULE_13__.off)(_app__WEBPACK_IMPORTED_MODULE_12__.EventAfterRouteChanged, handleRouteChanged);
    };
  }, [props.href]);
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    if (elem.current) {
      var _props$html;

      elem.current.className = (0,_shared__WEBPACK_IMPORTED_MODULE_13__.classNames)(classNameList(active, (_props$html = props.html) === null || _props$html === void 0 ? void 0 : _props$html.className, props.activeClassName));
    }
  }, [(_props$html2 = props.html) === null || _props$html2 === void 0 ? void 0 : _props$html2.className, active]);
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    setChildren(unifyChildren(props.children, active, href));
  }, [props.children, active, href]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("a", _extends({}, props.html, {
    ref: elem,
    href: href && (0,_app_util__WEBPACK_IMPORTED_MODULE_11__.hrefToUrl)(href, false),
    onClick: function onClick(evt) {
      var _props$html3;

      if ((_props$html3 = props.html) !== null && _props$html3 !== void 0 && _props$html3.onClick) {
        props.html.onClick(evt);
      }

      if (props.href) {
        (0,_app__WEBPACK_IMPORTED_MODULE_12__.pushHistory)(props.href);
      }

      evt.preventDefault();
    }
  }), children);
};

/***/ }),

/***/ "./node_modules/gadget.js/salver/link/index.tsx":
/*!******************************************************!*\
  !*** ./node_modules/gadget.js/salver/link/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* reexport safe */ _impl__WEBPACK_IMPORTED_MODULE_0__.Link),
/* harmony export */   "unifyHref": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_1__.unifyHref)
/* harmony export */ });
/* harmony import */ var _impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impl */ "./node_modules/gadget.js/salver/link/impl.tsx");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/gadget.js/salver/link/type.tsx");



/***/ }),

/***/ "./node_modules/gadget.js/salver/link/type.tsx":
/*!*****************************************************!*\
  !*** ./node_modules/gadget.js/salver/link/type.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unifyHref": () => (/* binding */ unifyHref)
/* harmony export */ });
// users could provide a function with type `LinkPass` as the children of
// `Link`, the function can accept a param with type `LinkPassThrough` and
// return their custom element
// @internal
function unifyHref(href) {
  if (typeof href === "string") {
    return {
      pathname: href
    };
  }

  return href;
}

/***/ }),

/***/ "./node_modules/gadget.js/shared/defer.ts":
/*!************************************************!*\
  !*** ./node_modules/gadget.js/shared/defer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defer": () => (/* binding */ defer)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * create an new deferred object
 */
function defer() {
  var resolve;
  var reject;
  var promise = new Promise(function (r1, r2) {
    resolve = r1;
    reject = r2;
  });
  return {
    done(valueOrReason) {
      if (valueOrReason instanceof Error) {
        reject(valueOrReason);
        return;
      }

      resolve(valueOrReason);
    },

    promise
  };
}

/***/ }),

/***/ "./node_modules/gadget.js/shared/evt-bus.ts":
/*!**************************************************!*\
  !*** ./node_modules/gadget.js/shared/evt-bus.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHandlers": () => (/* binding */ getHandlers),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "makeOnceHandler": () => (/* binding */ makeOnceHandler),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "emit": () => (/* binding */ emit)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.map.js */ "../../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.set.js */ "../../node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);






var evtHandlers = new Map();
function getHandlers(evt) {
  var hs = evtHandlers.get(evt);

  if (!hs) {
    hs = new Set();
    evtHandlers.set(evt, hs);
  }

  return hs;
}
function on(evt, handler) {
  var hs = getHandlers(evt);
  hs.add(handler);
} // store the once version of the handlers
// firstly use the handler itself to retrieve a map which records
// the pairs to relate the evt-name to the once-handler

var onceHandlerStore = new Map();
function makeOnceHandler(evt, h) {
  var ehs = onceHandlerStore.get(h);

  if (!ehs) {
    ehs = new Map();
    onceHandlerStore.set(h, ehs);
  } // evt-name to once-handler


  var _oh = ehs.get(evt);

  if (!_oh) {
    _oh = function oh() {
      h.apply(void 0, arguments);
      off(evt, _oh);
    };

    ehs.set(evt, _oh);
  }

  return _oh;
}
function once(evt, handler) {
  var oh = makeOnceHandler(evt, handler);
  var hs = getHandlers(evt);
  hs.add(oh);
}
function off(evt, handler) {
  if (!handler) {
    evtHandlers.delete(evt);
    return;
  }

  var hs = getHandlers(evt);
  hs.delete(handler);
}
function emit(evt) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var hs = getHandlers(evt);
  hs.forEach(function (h) {
    return h.apply(void 0, args);
  });
}

/***/ }),

/***/ "./node_modules/gadget.js/shared/index.ts":
/*!************************************************!*\
  !*** ./node_modules/gadget.js/shared/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObjEqual": () => (/* binding */ isObjEqual),
/* harmony export */   "uniqueArray": () => (/* binding */ uniqueArray),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "trim": () => (/* binding */ trim),
/* harmony export */   "trimLeft": () => (/* binding */ trimLeft),
/* harmony export */   "trimRight": () => (/* binding */ trimRight),
/* harmony export */   "assertValueInEnum": () => (/* binding */ assertValueInEnum),
/* harmony export */   "classNames": () => (/* binding */ classNames),
/* harmony export */   "packToArray": () => (/* binding */ packToArray),
/* harmony export */   "defer": () => (/* reexport safe */ _defer__WEBPACK_IMPORTED_MODULE_10__.defer),
/* harmony export */   "emit": () => (/* reexport safe */ _evt_bus__WEBPACK_IMPORTED_MODULE_11__.emit),
/* harmony export */   "getHandlers": () => (/* reexport safe */ _evt_bus__WEBPACK_IMPORTED_MODULE_11__.getHandlers),
/* harmony export */   "makeOnceHandler": () => (/* reexport safe */ _evt_bus__WEBPACK_IMPORTED_MODULE_11__.makeOnceHandler),
/* harmony export */   "off": () => (/* reexport safe */ _evt_bus__WEBPACK_IMPORTED_MODULE_11__.off),
/* harmony export */   "on": () => (/* reexport safe */ _evt_bus__WEBPACK_IMPORTED_MODULE_11__.on),
/* harmony export */   "once": () => (/* reexport safe */ _evt_bus__WEBPACK_IMPORTED_MODULE_11__.once),
/* harmony export */   "resultify": () => (/* reexport safe */ _resultify__WEBPACK_IMPORTED_MODULE_12__.resultify),
/* harmony export */   "URL": () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_13__.URL),
/* harmony export */   "parseHash": () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_13__.parseHash),
/* harmony export */   "parseSearch": () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_13__.parseSearch),
/* harmony export */   "parseUrl": () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_13__.parseUrl),
/* harmony export */   "parseUrlRaiseErr": () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_13__.parseUrlRaiseErr)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "../../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.set.js */ "../../node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./defer */ "./node_modules/gadget.js/shared/defer.ts");
/* harmony import */ var _evt_bus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./evt-bus */ "./node_modules/gadget.js/shared/evt-bus.ts");
/* harmony import */ var _resultify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resultify */ "./node_modules/gadget.js/shared/resultify.ts");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./url */ "./node_modules/gadget.js/shared/url.ts");










function isObjEqual(o1, o2) {
  if (!o1 || !o2) return o1 === o2;
  var ks1 = Object.keys(o1);
  var ks2 = Object.keys(o2);
  return (ks1.length > ks2.length ? ks1 : ks2).every(function (ok1) {
    return o2[ok1] === o1[ok1];
  });
}
function uniqueArray() {
  var items = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    return items = items.concat(arg);
  });
  return Array.from(new Set(items));
}
function isObject(o) {
  return o && typeof o === "object";
}
function merge(to, from) {
  Object.keys(from).forEach(function (k2) {
    if (isObject(from[k2])) {
      if (!isObject(to[k2])) {
        to[k2] = Array.isArray(from[k2]) ? [] : {};
      }

      merge(to[k2], from[k2]);
    } else {
      to[k2] = from[k2];
    }
  });
}
function trim(str, terminators) {
  var i = 0;
  var j = str.length - 1;

  while (i <= j) {
    var goon = false;

    if (terminators.includes(str[i])) {
      i++;
      goon = true;
    }

    if (terminators.includes(str[j])) {
      j--;
      goon = true;
    }

    if (!goon) break;
  }

  if (i > j) return "";
  return str.slice(i, j + 1);
}
function trimLeft(str, terminators) {
  var i = 0;
  var len = str.length;

  for (; i < len; i++) {
    if (!terminators.includes(str[i])) break;
  }

  return str.slice(i);
}
function trimRight(str, terminators) {
  var len = str.length;
  var i = len - 1;

  for (; i >= 0; i--) {
    if (!terminators.includes(str[i])) break;
  }

  return str.slice(0, i + 1);
}
function assertValueInEnum(value, enumValues) {
  var ok = enumValues.includes(value);
  if (ok) return value;
  throw new Error("".concat(value, " is not in Enum [").concat(enumValues.join(", "), "]"));
}
function classNames(names) {
  return names.filter(function (n) {
    return !!n;
  }).join(" ");
}
function packToArray(stuff) {
  if (stuff === undefined) return [];
  if (Array.isArray(stuff)) return stuff;
  return [stuff];
}





/***/ }),

/***/ "./node_modules/gadget.js/shared/resultify.ts":
/*!****************************************************!*\
  !*** ./node_modules/gadget.js/shared/resultify.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resultify": () => (/* binding */ resultify)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function resultify(_x) {
  return _resultify.apply(this, arguments);
}

function _resultify() {
  _resultify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(p) {
    var r;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(p instanceof Promise)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", p.then(function (r) {
              return {
                r,
                e: null,
                take: function take() {
                  return r;
                }
              };
            }).catch(function (e) {
              return {
                r: null,
                e,
                take: function take() {
                  throw e;
                }
              };
            }));

          case 2:
            _context.prev = 2;
            r = p();
            return _context.abrupt("return", Promise.resolve({
              r,
              e: null,
              take: function take() {
                return r;
              }
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", Promise.resolve({
              r: null,
              e: _context.t0,
              take: function take() {
                throw _context.t0;
              }
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));
  return _resultify.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/gadget.js/shared/url.ts":
/*!**********************************************!*\
  !*** ./node_modules/gadget.js/shared/url.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "parseSearch": () => (/* binding */ parseSearch),
/* harmony export */   "parseHash": () => (/* binding */ parseHash),
/* harmony export */   "parseUrl": () => (/* binding */ parseUrl),
/* harmony export */   "parseUrlRaiseErr": () => (/* binding */ parseUrlRaiseErr)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "../../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "../../node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "../../node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "../../node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var URL = /*#__PURE__*/function () {
  // TODO:
  // <host>:<port>
  // domain name
  function URL(_ref) {
    var protocol = _ref.protocol,
        hostname = _ref.hostname,
        port = _ref.port,
        pathname = _ref.pathname,
        search = _ref.search,
        hash = _ref.hash;

    _classCallCheck(this, URL);

    _defineProperty(this, "origin", void 0);

    _defineProperty(this, "href", void 0);

    _defineProperty(this, "protocol", void 0);

    _defineProperty(this, "username", void 0);

    _defineProperty(this, "password", void 0);

    _defineProperty(this, "host", void 0);

    _defineProperty(this, "hostname", void 0);

    _defineProperty(this, "port", void 0);

    _defineProperty(this, "pathname", void 0);

    _defineProperty(this, "search", void 0);

    _defineProperty(this, "searchParams", void 0);

    _defineProperty(this, "hash", void 0);

    _defineProperty(this, "hashPathname", void 0);

    _defineProperty(this, "hashParams", void 0);

    this.hostname = hostname;
    this.port = port;
    this.protocol = protocol;
    this.pathname = pathname;
    this.search = search;
    this.hash = hash;
    this.host = hostname ? "".concat(hostname).concat(port ? ':' + port : '') : undefined;
    this.origin = "".concat(protocol, "://").concat(this.host ? this.host : '');
    this.href = this._href();
    this.searchParams = search ? parseSearch(search) : undefined;
  }

  _createClass(URL, [{
    key: "_href",
    value: function _href() {
      return "".concat(this.origin).concat(this.pathname).concat(this.search ? '?' + this.search : '').concat(this.hash ? '#' + this.hash : '');
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.searchParams) {
        this.search = URL.encodeParams(this.searchParams);
      }

      return this._href();
    }
  }], [{
    key: "encodeParams",
    value: function encodeParams(params) {
      return Object.entries(params).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            k = _ref3[0],
            v = _ref3[1];

        return "".concat(k, "=").concat(encodeURIComponent(v));
      }).join('&');
    }
  }]);

  return URL;
}(); // fast check below regexp via: https://regex101.com/r/ObnDEa/3

var rUrl = /^(?:([^:]+):)\/\/([^\/:]+)?(?::(\d+))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/;
function parseSearch(str) {
  if (str[0] === '?') str = str.slice(1);
  var ret = {};
  var kv = str.split('&');

  for (var i = 0, len = kv.length; i < len; i++) {
    var p = kv[i].split('=');
    var _k = p[0];
    if (_k.length === 0) continue;
    ret[decodeURIComponent(_k)] = decodeURIComponent(p[1] || '');
  }

  return ret;
}
var rHashMode = /^([^?]+)(\?.*)?$/;
function parseHash(str) {
  if (str[0] === '#') str = str.slice(1);
  var matched = str.match(rHashMode);
  if (matched === null) return false;

  var _matched = _slicedToArray(matched, 3),
      _ = _matched[0],
      pathname = _matched[1],
      _matched$ = _matched[2],
      search = _matched$ === void 0 ? '' : _matched$;

  return {
    pathname,
    search: parseSearch(search)
  };
}
/**
 *
 * @param url a fully qualified URL string or a string starts with `/` represent a path
 * @param base if the url is a `path` then this parameter is required to construct
 *             a fully qualified URL to fulfill the parsing
 */

function parseUrl(url, base) {
  if (url.startsWith('/')) {
    if (!base) throw new Error('[base] is required when url is a path');
    if (base.endsWith('/')) base = base.slice(0, -1);
    url = base + url;
  }

  var matched = url.match(rUrl);
  if (matched === null) return false;

  var _matched2 = _slicedToArray(matched, 7),
      _ = _matched2[0],
      protocol = _matched2[1],
      hostname = _matched2[2],
      port = _matched2[3],
      _matched2$ = _matched2[4],
      pathname = _matched2$ === void 0 ? '/' : _matched2$,
      search = _matched2[5],
      hash = _matched2[6];

  return new URL({
    protocol,
    hostname,
    port,
    pathname,
    search,
    hash
  });
}
function parseUrlRaiseErr(url, base) {
  var u = parseUrl(url, base);
  if (u === false) throw new Error('deformed url: ' + url);
  return u;
}

/***/ }),

/***/ "../../node_modules/gadget.js/ignition/bundle/config/react-dom.ts":
/*!************************************************************************!*\
  !*** ../../node_modules/gadget.js/ignition/bundle/config/react-dom.ts ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = typeof window !== "undefined" ? window.ReactDOM : require(require.resolve("react-dom", {
  paths: [process.cwd()]
}));

/***/ }),

/***/ "../../node_modules/gadget.js/ignition/bundle/config/react.ts":
/*!********************************************************************!*\
  !*** ../../node_modules/gadget.js/ignition/bundle/config/react.ts ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = typeof window !== "undefined" ? window.React : require(require.resolve("react", {
  paths: [process.cwd()]
}));

/***/ })

}]);
//# sourceMappingURL=lib.js.map