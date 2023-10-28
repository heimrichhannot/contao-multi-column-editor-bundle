/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@hundh/contao-utils-bundle/js/ajax-util.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@hundh/contao-utils-bundle/js/ajax-util.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _general_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-util */ "./node_modules/@hundh/contao-utils-bundle/js/general-util.js");
/* harmony import */ var _url_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-util */ "./node_modules/@hundh/contao-utils-bundle/js/url-util.js");



class AjaxUtil {
    static get(url, data, config) {
        config = AjaxUtil.setDefaults(config);

        let request = AjaxUtil.initializeRequest('GET', _url_util__WEBPACK_IMPORTED_MODULE_1__["default"].addParametersToUri(url, data), config),
            submitData = {
                config: config,
                action: url,
                data: data
            };

        AjaxUtil.doAjaxSubmit(request, submitData);
    }

    static post(url, data, config) {
        config = AjaxUtil.setDefaults(config);

        let request = AjaxUtil.initializeRequest('POST', url, config),
            submitData = {
                config: config,
                action: url,
                data: data
            };

        AjaxUtil.doAjaxSubmit(request, submitData);
    }

    static jsonPost(url, data, config) {
        config = AjaxUtil.setDefaults(config);

        // set correct header
        if (typeof config.headers === 'object') {
            if (!config.hasOwnProperty('Content-Type')) {
                config.headers['Content-Type'] = 'application/json;charset=UTF-8';
            }
        } else {
            config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        }

        // prepare data
        if (typeof data === 'object') {
            data = JSON.stringify(data);
        }

        let request = AjaxUtil.initializeRequest('POST', url, config),
            submitData = {
                config: config,
                action: url,
                data: data
            };

        AjaxUtil.doAjaxSubmit(request, submitData);
    }

    static doAjaxSubmit(request, submitData) {
        let config = submitData.config;

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                _general_util__WEBPACK_IMPORTED_MODULE_0__["default"].call(config.onSuccess, request);
            } else {
                _general_util__WEBPACK_IMPORTED_MODULE_0__["default"].call(config.onError, request);
            }

            _general_util__WEBPACK_IMPORTED_MODULE_0__["default"].call(config.afterSubmit, submitData.action, submitData.data, config);
        };

        _general_util__WEBPACK_IMPORTED_MODULE_0__["default"].call(config.beforeSubmit, submitData.action, submitData.data, config);

        if ('undefined' === typeof submitData.data) {
            request.send();
        } else {
            submitData.data = AjaxUtil.prepareDataForSend(submitData.data);

            request.send(submitData.data);
        }
    }

    static prepareDataForSend(data) {
        if (!(data instanceof FormData) && typeof data === 'object')
        {
            let formData = new FormData();

            Object.keys(data).forEach(field => {
                formData.append(field, data[field]);
            });

            return formData;
        }

        return data;
    }

    static initializeRequest(method, url, config) {
        let request = new XMLHttpRequest();

        request.open(method, url, true);
        request = AjaxUtil.setRequestHeaders(request, config);

        if (config.hasOwnProperty('responseType'))
        {
            request.responseType = config.responseType;
        }
        return request;
    }

    static setRequestHeaders(request, config) {
        if (config.hasOwnProperty('headers')) {
            Object.keys(config.headers).forEach(key => {
                request.setRequestHeader(key, config.headers[key]);
            });
        }
        return request;
    }

    static setDefaults(config) {
        if (!config.hasOwnProperty('headers')) {
            config.headers = {'X-Requested-With': 'XMLHttpRequest'};
        }
        return config;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AjaxUtil);


/***/ }),

/***/ "./node_modules/@hundh/contao-utils-bundle/js/array-util.js":
/*!******************************************************************!*\
  !*** ./node_modules/@hundh/contao-utils-bundle/js/array-util.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ArrayUtil {
    static removeFromArray(value, array) {
        for (var i = 0; i < array.length; i++) {
            if (JSON.stringify(value) == JSON.stringify(array[i])) {
                array.splice(i, 1);
            }
        }
        return array;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayUtil);

/***/ }),

/***/ "./node_modules/@hundh/contao-utils-bundle/js/contao-utils-bundle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@hundh/contao-utils-bundle/js/contao-utils-bundle.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AjaxUtil: () => (/* reexport safe */ _ajax_util__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   ArrayUtil: () => (/* reexport safe */ _array_util__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   DomUtil: () => (/* reexport safe */ _dom_util__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   EventUtil: () => (/* reexport safe */ _event_util__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   GeneralUtil: () => (/* reexport safe */ _general_util__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   UrlUtil: () => (/* reexport safe */ _url_util__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   utilsBundle: () => (/* binding */ utilsBundle)
/* harmony export */ });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./node_modules/@hundh/contao-utils-bundle/js/polyfills.js");
/* harmony import */ var _array_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-util */ "./node_modules/@hundh/contao-utils-bundle/js/array-util.js");
/* harmony import */ var _dom_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-util */ "./node_modules/@hundh/contao-utils-bundle/js/dom-util.js");
/* harmony import */ var _event_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-util */ "./node_modules/@hundh/contao-utils-bundle/js/event-util.js");
/* harmony import */ var _url_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url-util */ "./node_modules/@hundh/contao-utils-bundle/js/url-util.js");
/* harmony import */ var _general_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-util */ "./node_modules/@hundh/contao-utils-bundle/js/general-util.js");
/* harmony import */ var _ajax_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajax-util */ "./node_modules/@hundh/contao-utils-bundle/js/ajax-util.js");








let utilsBundle = {
    ajax: _ajax_util__WEBPACK_IMPORTED_MODULE_6__["default"],
    array: _array_util__WEBPACK_IMPORTED_MODULE_1__["default"],
    dom: _dom_util__WEBPACK_IMPORTED_MODULE_2__["default"],
    event: _event_util__WEBPACK_IMPORTED_MODULE_3__["default"],
    url: _url_util__WEBPACK_IMPORTED_MODULE_4__["default"],
    util: _general_util__WEBPACK_IMPORTED_MODULE_5__["default"]
};

window.utilsBundle = utilsBundle;




/***/ }),

/***/ "./node_modules/@hundh/contao-utils-bundle/js/dom-util.js":
/*!****************************************************************!*\
  !*** ./node_modules/@hundh/contao-utils-bundle/js/dom-util.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-util */ "./node_modules/@hundh/contao-utils-bundle/js/array-util.js");


class DomUtil {
    static getTextWithoutChildren(element, notrim) {
        let result = element.cloneNode(true);

        Array.prototype.forEach.call(result.children, child => {
            child.remove();
        });

        if (typeof notrim !== 'undefined' && notrim === true) {
            return result.innerText;
        } else {
            return result.innerText.trim();
        }
    }

    static scrollTo(element, offset = 0, delay = 0, force = false) {
        let rect = element.getBoundingClientRect();
        let scrollPosition = (rect.top + window.pageYOffset - offset);
        setTimeout(() => {
            if (!this.elementInViewport(element) || force === true)
            {
                var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
                if (isSmoothScrollSupported)
                {
                    window.scrollTo({
                        'top': scrollPosition,
                        'behavior': 'smooth',
                    });
                }
                else {
                    window.scrollTo(0, scrollPosition);
                }
            }
        }, delay);
    }

    static elementInViewport(el) {
        let top = el.offsetTop;
        let left = el.offsetLeft;
        let width = el.offsetWidth;
        let height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    static getAllParentNodes(node) {
        var parents = [];

        while (node) {
            parents.unshift(node);
            node = node.parentNode;
        }

        for (var i = 0; i < parents.length; i++) {
            if (parents[i] === document) {
                parents.splice(i, 1);
            }
        }

        return parents;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomUtil);


/***/ }),

/***/ "./node_modules/@hundh/contao-utils-bundle/js/event-util.js":
/*!******************************************************************!*\
  !*** ./node_modules/@hundh/contao-utils-bundle/js/event-util.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-util */ "./node_modules/@hundh/contao-utils-bundle/js/dom-util.js");
/* harmony import */ var _general_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-util */ "./node_modules/@hundh/contao-utils-bundle/js/general-util.js");



class EventUtil {
    static addDynamicEventListener(eventName, selector, callback, scope, disableBubbling) {
        if (typeof scope === 'undefined') {
            scope = document;
        }

        scope.addEventListener(eventName, function(e) {

            let parents;

            if (_general_util__WEBPACK_IMPORTED_MODULE_1__["default"].isTruthy(disableBubbling)) {
                parents = [e.target];
            } else if (e.target !== document) {
                parents = _dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].getAllParentNodes(e.target);
            }

            // for instance window load/resize event
            if (!Array.isArray(parents)) {
                document.querySelectorAll(selector).forEach(function(item) {
                    callback(item, e);
                });
                return;
            }

            parents.reverse().forEach(function(item) {
                if (item && item.matches(selector)) {
                    callback(item, e);
                }
            });
        });
    }

    static createEventObject(type, bubbles = false, cancelable = false, composed = false) {
        if (typeof (Event) === 'function') {
            return new Event(type, {
                bubbles: bubbles,
                cancelable: cancelable,
                composed: composed
            });
        } else {
            let event = document.createEvent('Event');
            event.initEvent(type, bubbles, cancelable);

            return event;
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventUtil);


/***/ }),

/***/ "./node_modules/@hundh/contao-utils-bundle/js/general-util.js":
/*!********************************************************************!*\
  !*** ./node_modules/@hundh/contao-utils-bundle/js/general-util.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GeneralUtil {
    static isTruthy(value) {
        return typeof value !== 'undefined' && value !== null;
    }

    static call(func) {
        if (typeof func === 'function') {
            func.apply(this, Array.prototype.slice.call(arguments, 1));
        }
    }

    /**
     * Run a function recursively for a given set of arguments.
     *
     * function doLogic(argument, remainingArguments, callback) {
     *     // do your logic with argument
     *     utilsBundle.util.runRecursiveFunction(doLogic, remainingArguments, callback);
     * }
     *
     * utilsBundle.util.runRecursiveFunction(doLogic, [1, 2, 3, 4], () => {
     *     // do something after all is done
     * });
     *
     * @param func
     * @param args
     * @param callback
     * @param successIndex
     */
    static runRecursiveFunction(func, args, callback, successIndex) {
        if (args.length < 1) {
            if (GeneralUtil.isTruthy(callback) && Array.isArray(callback)) {
                GeneralUtil.call(callback[successIndex]);
            } else {
                GeneralUtil.call(callback);
            }

            return;
        }

        var argument = args[0],
            remainingArgs = args.slice(1, args.length);

        func(argument, remainingArgs, callback);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralUtil);


/***/ }),

/***/ "./node_modules/@hundh/contao-utils-bundle/js/polyfills.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@hundh/contao-utils-bundle/js/polyfills.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-closest */ "./node_modules/element-closest/index.mjs");
// foreach on nodelists


// closest() and matches polyfill


(0,element_closest__WEBPACK_IMPORTED_MODULE_1__["default"])(window);

// replaceWith
function ReplaceWith(Ele) {
    'use-strict'; // For safari, and IE > 10
    var parent = this.parentNode,
        i = arguments.length,
        firstIsNode = +(parent && typeof Ele === 'object');
    if (!parent) return;

    while (i-- > firstIsNode) {
        if (parent && typeof arguments[i] !== 'object') {
            arguments[i] = document.createTextNode(arguments[i]);
        }
        if (!parent && arguments[i].parentNode) {
            arguments[i].parentNode.removeChild(arguments[i]);
            continue;
        }
        parent.insertBefore(this.previousSibling, arguments[i]);
    }
    if (firstIsNode) parent.replaceChild(Ele, this);
}

if (!Element.prototype.replaceWith)
    Element.prototype.replaceWith = ReplaceWith;
if (!CharacterData.prototype.replaceWith)
    CharacterData.prototype.replaceWith = ReplaceWith;
if (!DocumentType.prototype.replaceWith)
    CharacterData.prototype.replaceWith = ReplaceWith;

/***/ }),

/***/ "./node_modules/@hundh/contao-utils-bundle/js/url-util.js":
/*!****************************************************************!*\
  !*** ./node_modules/@hundh/contao-utils-bundle/js/url-util.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class UrlUtil {
    static getParameterByName(name, url)
    {
        if (!url)
        {
            url = window.location.href;
        }

        name = name.replace(/[\[\]]/g, "\\$&");

        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);

        if (!results)
        {
            return null;
        }

        if (!results[2])
        {
            return '';
        }

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    static addParameterToUri(uri, key, value)
    {
        if (!uri)
        {
            uri = window.location.href;
        }

        let re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
            hash;

        if (re.test(uri))
        {
            if (typeof value !== 'undefined' && value !== null)
            {
                return uri.replace(re, '$1' + key + "=" + value + '$2$3');
            }
            else
            {
                hash = uri.split('#');
                uri = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');

                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                {
                    uri += '#' + hash[1];
                }

                return uri;
            }
        }
        else
        {
            if (typeof value !== 'undefined' && value !== null)
            {
                let separator = uri.indexOf('?') !== -1 ? '&' : '?';
                hash = uri.split('#');
                uri = hash[0] + separator + key + '=' + value;

                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                {
                    uri += '#' + hash[1];
                }

                return uri;
            }
            else
            {
                return uri;
            }
        }
    }

    static addParametersToUri(uri, parameters)
    {
        if(parameters instanceof FormData) {
            for(let entry of parameters.entries()) {
                if(parameters.has(entry[0])) {
                    uri = this.addParameterToUri(uri, entry[0], entry[1]);
                }
            }
        } else {
            for (let key in parameters)
            {
                if (parameters.hasOwnProperty(key))
                {
                    uri = this.addParameterToUri(uri, key, parameters[key]);
                }
            }
        }

        return uri;
    }

    static removeParameterFromUri(uri, parameter)
    {
        //prefer to use l.search if you have a location/link object
        let uriparts = uri.split('?');

        if (uriparts.length >= 2)
        {

            let prefix = encodeURIComponent(parameter) + '=';
            let pars = uriparts[1].split(/[&;]/g);

            //reverse iteration as may be destructive
            for (let i = pars.length; i-- > 0;)
            {
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1)
                {
                    pars.splice(i, 1);
                }
            }

            uri = uriparts[0] + '?' + pars.join('&');
            return uri;
        }
        else
        {
            return uri;
        }
    }

    static removeParametersFromUri(uri, parameters)
    {
        for (let key in parameters)
        {
            if (parameters.hasOwnProperty(key))
            {
                uri = this.removeParameterFromUri(uri, key);
            }
        }

        return uri;
    }

    static replaceParameterInUri(uri, key, value)
    {
        this.addParameterToUri(this.removeParameterFromUri(uri, key), key, value);
    }

    static parseQueryString(queryString) {
        return JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    }

    static buildQueryString(parameters) {
        let query = '';

        for (let key in parameters) {
            if ('' !== query) {
                query += '&';
            }

            query += key + '=' + parameters[key];
        }

        return query;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlUtil);


/***/ }),

/***/ "./src/Resources/npm-package/js/contao-multi-column-editor-bundle.js":
/*!***************************************************************************!*\
  !*** ./src/Resources/npm-package/js/contao-multi-column-editor-bundle.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var formdata_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");
/* harmony import */ var formdata_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formdata_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hundh_contao_utils_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hundh/contao-utils-bundle */ "./node_modules/@hundh/contao-utils-bundle/js/contao-utils-bundle.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
 // ie and edge

var MultiColumnEditorBundle = /*#__PURE__*/function () {
  function MultiColumnEditorBundle() {
    _classCallCheck(this, MultiColumnEditorBundle);
  }
  _createClass(MultiColumnEditorBundle, null, [{
    key: "init",
    value: function init() {
      var mce = document.querySelectorAll('.multi-column-editor');
      if (mce.length < 1) {
        return;
      }
      var isBackend = mce[0].dataset.env === 'backend';
      _hundh_contao_utils_bundle__WEBPACK_IMPORTED_MODULE_1__.EventUtil.addDynamicEventListener('click', '.multi-column-editor .add', function (item, event) {
        event.preventDefault();
        MultiColumnEditorBundle.triggerAction(isBackend, item, 'addRow', item.href);
      });
      _hundh_contao_utils_bundle__WEBPACK_IMPORTED_MODULE_1__.EventUtil.addDynamicEventListener('click', '.multi-column-editor .delete', function (item, event) {
        event.preventDefault();
        MultiColumnEditorBundle.triggerAction(isBackend, item, 'deleteRow', item.href);
      });

      // fix for firefox and IE
      _hundh_contao_utils_bundle__WEBPACK_IMPORTED_MODULE_1__.EventUtil.addDynamicEventListener('click', '.multi-column-editor .drag-handle', function (item, event) {
        event.preventDefault();
      });
      _hundh_contao_utils_bundle__WEBPACK_IMPORTED_MODULE_1__.EventUtil.addDynamicEventListener('click', '[data-mce-click]', function (item, event) {
        MultiColumnEditorBundle.triggerAction(isBackend, item, 'updateRows', item.getAttribute('data-mce-click'));
      });
      _hundh_contao_utils_bundle__WEBPACK_IMPORTED_MODULE_1__.EventUtil.addDynamicEventListener('change', '[data-mce-change]', function (item, event) {
        MultiColumnEditorBundle.triggerAction(isBackend, item, 'updateRows', item.getAttribute('data-mce-change'));
      });
      MultiColumnEditorBundle.initSortable(isBackend);
    }
  }, {
    key: "initSortable",
    value: function initSortable(isBackend) {
      if (isBackend) {
        new Sortables('.multi-column-editor-wrapper .sortable', {
          constrain: true,
          opacity: 0.6,
          handle: '.drag-handle',
          onComplete: function onComplete(row) {
            var newIndices = [],
              doPost = false,
              rows = row.closest('.rows').querySelectorAll('.mce-row');
            for (var i = 0; i < rows.length; i++) {
              newIndices.push(rows[i].dataset.index);
              if (rows[i].dataset.index !== [].slice.call(rows).indexOf(this) + 1) {
                doPost = true;
              }
            }
            var additionalData = [{
              'name': 'newIndices',
              'value': newIndices.join(',')
            }];
            if (doPost) {
              MultiColumnEditorBundle.triggerAction(isBackend, row.querySelector('.drag-handle'), 'sortRows', null, additionalData);
            }
          }
        });
      } else {
        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sortablejs */ "sortablejs", 23)).then(function (Sortable) {
          var sortables = document.querySelectorAll('.multi-column-editor-wrapper .sortable');
          sortables.forEach(function (item) {
            Sortable.create(item, {
              'handle': '.drag-handle',
              onEnd: function onEnd(event) {
                var newIndices = [],
                  doPost = false,
                  rows = event.item.closest('.rows').querySelectorAll('.mce-row');
                for (var i = 0; i < rows.length; i++) {
                  newIndices.push(rows[i].dataset.index);
                  if (rows[i].dataset.index !== Array.prototype.indexOf.call(sortables, item) + 1) {
                    doPost = true;
                  }
                }
                var additionalData = [{
                  'name': 'newIndices',
                  'value': newIndices.join(',')
                }];
                if (doPost) {
                  MultiColumnEditorBundle.triggerAction(isBackend, event.item.querySelector('.drag-handle'), 'sortRows', null, additionalData);
                }
              }
            });
          });
        });
      }
    }
  }, {
    key: "triggerAction",
    value: function triggerAction(isBackend, link, action, url, additionalFormData, callback) {
      var form = link.closest('form');
      var formData = new FormData();
      var editor = link.closest('.multi-column-editor');
      if (null === url) {
        url = form.action;
      }

      // set the tinymces' values because later on they get resetted
      editor.querySelectorAll('.mce-tinymce + textarea').forEach(function (element) {
        if (typeof window.tinymce !== 'undefined') {
          element.value = tinymce.get(element.getAttribute('id')).getContent();
        }
      });
      form.querySelectorAll('input[name]:not([disabled]), textarea[name]:not([disabled]), select[name]:not([disabled]), button[name]:not([disabled])').forEach(function (input) {
        // remove FORM_SUBMIT -> no submit callbacks should be fired
        if (input.name !== 'FORM_SUBMIT') {
          switch (input.type) {
            case 'checkbox':
            case 'radio':
              formData.append(input.name, input.checked ? input.value : '');
              break;
            default:
              formData.append(input.name, input.value);
          }
        }
      });
      var row = link.closest('.mce-row');
      formData.set('row', typeof row !== 'undefined' && row !== null ? row.dataset.index : 0);
      formData.set('field', editor.dataset.field);
      formData.set('table', editor.dataset.table);
      formData.set('action', action);
      if (typeof additionalFormData !== 'undefined') {
        additionalFormData.forEach(function (input) {
          // remove FORM_SUBMIT -> no submit callbacks should be fired
          if (input.name !== 'FORM_SUBMIT') {
            switch (input.type) {
              case 'checkbox':
              case 'radio':
                formData.append(input.name, input.checked ? input.value : '');
                break;
              default:
                formData.append(input.name, input.value);
            }
          }
        });
      }
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          // dispatch custom event
          var customEvent = document.createEvent('CustomEvent'),
            widget;
          customEvent.initEvent('ajaxSuccess', true, true);
          document.dispatchEvent(customEvent);
          if (xhr.status === 200) {
            // unload the tinymce's -> else the ones added via ajax wouldn't be initiated because tinymce thinks they
            // are already (ID seems to be stored!)
            editor.querySelectorAll('.mce-tinymce + textarea').forEach(function (element) {
              if (typeof window.tinymce !== 'undefined') {
                tinymce.get(element.getAttribute('id')).remove();
              }
            });
            if (isBackend) {
              var response = document.createElement('div');
              response.innerHTML = xhr.responseText;
              var scriptElements = response.getElementsByTagName('script'),
                scriptHtml = [];
              widget = link.closest('.widget');

              // store the texts because after replacing the dom elements are gone
              for (var m = 0; m < scriptElements.length; m++) {
                scriptHtml.push(scriptElements[m].innerHTML);
              }
              link.closest('.multi-column-editor-wrapper').innerHTML = response.querySelector('.multi-column-editor-wrapper').innerHTML;
              MultiColumnEditorBundle.initChosen(widget);
              MultiColumnEditorBundle.initSortable(isBackend);
              MultiColumnEditorBundle.hideInteractiveHelp();
              Backend.addInteractiveHelp();
              for (var n = 0; n < scriptHtml.length; n++) {
                eval(scriptHtml[n]);
              }
              if (typeof callback === 'function') {
                callback.apply(this, Array.prototype.slice.call(arguments, 1));
              }
              var e = document.createEvent('CustomEvent');
              e.initEvent('ajaxComplete', true, true);
              document.dispatchEvent(e);
            } else {
              var data = JSON.parse(xhr.responseText);
              var _response = document.createElement('div');
              _response.innerHTML = data.result.html;
              link.closest('.multi-column-editor-wrapper').innerHTML = _response.querySelector('.multi-column-editor-wrapper').innerHTML;
              MultiColumnEditorBundle.initSortable(isBackend);
              if (typeof callback === 'function') {
                callback.apply(this, Array.prototype.slice.call(arguments, 1));
              }
              customEvent = document.createEvent('CustomEvent');
              customEvent.initEvent('ajaxComplete', true, true);
              document.dispatchEvent(customEvent);
            }
          }
        }
      };
      xhr.open('POST', url);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(formData);
    }
  }]);
  return MultiColumnEditorBundle;
}();
document.addEventListener('DOMContentLoaded', MultiColumnEditorBundle.init);

// backend only
(function () {
  if (typeof window.addEvent === 'function') {
    window.addEvent('domready', function () {
      MultiColumnEditorBundle.initChosen = function (widget) {
        widget.querySelectorAll('select.tl_chosen').forEach(function (el) {
          $$('#' + el.getAttribute('id')).chosen();
        });
      };
      MultiColumnEditorBundle.hideInteractiveHelp = function () {
        var hideTips = function hideTips() {
          document.querySelectorAll('.tip-wrap').forEach(function (tip) {
            tip.setStyle('display', 'none');
          });
        };
        hideTips();
        // hide delayed tips - timeout: Tips.Contao.options.showDelay
        setTimeout(hideTips, 1000);
      };
    });
    window.addEvent('ajax_change', function () {
      MultiColumnEditorBundle.init();
    });
  }
})();

/***/ }),

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

;(function(){var h;function l(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(a==Array.prototype||a==Object.prototype)return a;a[c]=b.value;return a};
function n(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");}var p=n(this);function r(a,c){if(c){for(var b=p,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in b||(b[f]={});b=b[f]}d=d[d.length-1];e=b[d];f=c(e);f!=e&&null!=f&&m(b,d,{configurable:!0,writable:!0,value:f})}}
r("Symbol",function(a){function c(e){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new b("jscomp_symbol_"+(e||"")+"_"+d++,e)}function b(e,f){this.o=e;m(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;b.prototype.toString=function(){return this.o};var d=0;return c});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<c.length;b++){var d=p[c[b]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&m(d.prototype,a,{configurable:!0,writable:!0,value:function(){return u(l(this))}})}return a});function u(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:l(a)}}var w;if("function"==typeof Object.setPrototypeOf)w=Object.setPrototypeOf;else{var y;a:{var z={u:!0},A={};try{A.__proto__=z;y=A.u;break a}catch(a){}y=!1}w=y?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var B=w;function C(){this.h=!1;this.f=null;this.m=void 0;this.b=1;this.l=this.v=0;this.g=null}
function D(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}C.prototype.i=function(a){this.m=a};C.prototype.j=function(a){this.g={w:a,A:!0};this.b=this.v||this.l};C.prototype["return"]=function(a){this.g={"return":a};this.b=this.l};function E(a,c){a.b=3;return{value:c}}function F(a){this.a=new C;this.B=a}F.prototype.i=function(a){D(this.a);if(this.a.f)return G(this,this.a.f.next,a,this.a.i);this.a.i(a);return H(this)};
function I(a,c){D(a.a);var b=a.a.f;if(b)return G(a,"return"in b?b["return"]:function(d){return{value:d,done:!0}},c,a.a["return"]);a.a["return"](c);return H(a)}F.prototype.j=function(a){D(this.a);if(this.a.f)return G(this,this.a.f["throw"],a,this.a.i);this.a.j(a);return H(this)};
function G(a,c,b,d){try{var e=c.call(a.a.f,b);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.h=!1,e;var f=e.value}catch(g){return a.a.f=null,a.a.j(g),H(a)}a.a.f=null;d.call(a.a,f);return H(a)}function H(a){for(;a.a.b;)try{var c=a.B(a.a);if(c)return a.a.h=!1,{value:c.value,done:!1}}catch(b){a.a.m=void 0,a.a.j(b)}a.a.h=!1;if(a.a.g){c=a.a.g;a.a.g=null;if(c.A)throw c.w;return{value:c["return"],done:!0}}return{value:void 0,done:!0}}
function J(a){this.next=function(c){return a.i(c)};this["throw"]=function(c){return a.j(c)};this["return"]=function(c){return I(a,c)};this[Symbol.iterator]=function(){return this}}function K(a,c){var b=new J(new F(c));B&&B(b,a.prototype);return b}
if("undefined"!==typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var L=function(a,c){for(var b=0;b<a.length;b++)c(a[b])},M=function(a,c,b){return c instanceof Blob?[String(a),c,void 0!==b?b+"":"string"===typeof c.name?c.name:"blob"]:[String(a),String(c)]},N=function(a,c){if(a.length<c)throw new TypeError(c+" argument required, but only "+a.length+" present.");},O=function(a){var c=v(a);a=c.next().value;var b=c.next().value;c=c.next().value;b instanceof Blob&&(b=new File([b],
c,{type:b.type,lastModified:b.lastModified}));return[a,b]},P="object"===typeof globalThis?globalThis:"object"===typeof window?window:"object"===typeof self?self:this,Q=P.FormData,R=P.XMLHttpRequest&&P.XMLHttpRequest.prototype.send,S=P.Request&&P.fetch,T=P.navigator&&P.navigator.sendBeacon,U=P.Element&&P.Element.prototype,V=P.Symbol&&Symbol.toStringTag;V&&(Blob.prototype[V]||(Blob.prototype[V]="Blob"),"File"in P&&!File.prototype[V]&&(File.prototype[V]="File"));try{new File([],"")}catch(a){P.File=function(c,
b,d){c=new Blob(c,d);d=d&&void 0!==d.lastModified?new Date(d.lastModified):new Date;Object.defineProperties(c,{name:{value:b},lastModifiedDate:{value:d},lastModified:{value:+d},toString:{value:function(){return"[object File]"}}});V&&Object.defineProperty(c,V,{value:"File"});return c}}var W=function(a){this.c=[];var c=this;a&&L(a.elements,function(b){if(b.name&&!b.disabled&&"submit"!==b.type&&"button"!==b.type&&!b.matches("form fieldset[disabled] *"))if("file"===b.type){var d=b.files&&b.files.length?
b.files:[new File([],"",{type:"application/octet-stream"})];L(d,function(e){c.append(b.name,e)})}else"select-multiple"===b.type||"select-one"===b.type?L(b.options,function(e){!e.disabled&&e.selected&&c.append(b.name,e.value)}):"checkbox"===b.type||"radio"===b.type?b.checked&&c.append(b.name,b.value):(d="textarea"===b.type?b.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):b.value,c.append(b.name,d))})};h=W.prototype;h.append=function(a,c,b){N(arguments,2);this.c.push(M(a,c,b))};h["delete"]=function(a){N(arguments,
1);var c=[];a=String(a);L(this.c,function(b){b[0]!==a&&c.push(b)});this.c=c};h.entries=function c(){var b,d=this;return K(c,function(e){1==e.b&&(b=0);if(3!=e.b)return b<d.c.length?e=E(e,O(d.c[b])):(e.b=0,e=void 0),e;b++;e.b=2})};h.forEach=function(c,b){N(arguments,1);for(var d=v(this),e=d.next();!e.done;e=d.next()){var f=v(e.value);e=f.next().value;f=f.next().value;c.call(b,f,e,this)}};h.get=function(c){N(arguments,1);var b=this.c;c=String(c);for(var d=0;d<b.length;d++)if(b[d][0]===c)return O(b[d])[1];
return null};h.getAll=function(c){N(arguments,1);var b=[];c=String(c);L(this.c,function(d){d[0]===c&&b.push(O(d)[1])});return b};h.has=function(c){N(arguments,1);c=String(c);for(var b=0;b<this.c.length;b++)if(this.c[b][0]===c)return!0;return!1};h.keys=function b(){var d=this,e,f,g,k,q;return K(b,function(t){1==t.b&&(e=v(d),f=e.next());if(3!=t.b){if(f.done){t.b=0;return}g=f.value;k=v(g);q=k.next().value;return E(t,q)}f=e.next();t.b=2})};h.set=function(b,d,e){N(arguments,2);b=String(b);var f=[],g=M(b,
d,e),k=!0;L(this.c,function(q){q[0]===b?k&&(k=!f.push(g)):f.push(q)});k&&f.push(g);this.c=f};h.values=function d(){var e=this,f,g,k,q,t;return K(d,function(x){1==x.b&&(f=v(e),g=f.next());if(3!=x.b){if(g.done){x.b=0;return}k=g.value;q=v(k);q.next();t=q.next().value;return E(x,t)}g=f.next();x.b=2})};W.prototype._asNative=function(){for(var d=new Q,e=v(this),f=e.next();!f.done;f=e.next()){var g=v(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};W.prototype._blob=function(){for(var d=
"----formdata-polyfill-"+Math.random(),e=[],f=v(this),g=f.next();!g.done;g=f.next()){var k=v(g.value);g=k.next().value;k=k.next().value;e.push("--"+d+"\r\n");k instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+k.name+'"\r\nContent-Type: '+((k.type||"application/octet-stream")+"\r\n\r\n"),k,"\r\n"):e.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+k+"\r\n")}e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};W.prototype[Symbol.iterator]=
function(){return this.entries()};W.prototype.toString=function(){return"[object FormData]"};U&&!U.matches&&(U.matches=U.matchesSelector||U.mozMatchesSelector||U.msMatchesSelector||U.oMatchesSelector||U.webkitMatchesSelector||function(d){d=(this.document||this.ownerDocument).querySelectorAll(d);for(var e=d.length;0<=--e&&d.item(e)!==this;);return-1<e});V&&(W.prototype[V]="FormData");if(R){var X=P.XMLHttpRequest.prototype.setRequestHeader;P.XMLHttpRequest.prototype.setRequestHeader=function(d,e){X.call(this,
d,e);"content-type"===d.toLowerCase()&&(this.s=!0)};P.XMLHttpRequest.prototype.send=function(d){d instanceof W?(d=d._blob(),this.s||this.setRequestHeader("Content-Type",d.type),R.call(this,d)):R.call(this,d)}}S&&(P.fetch=function(d,e){e&&e.body&&e.body instanceof W&&(e.body=e.body._blob());return S.call(this,d,e)});T&&(P.navigator.sendBeacon=function(d,e){e instanceof W&&(e=e._asNative());return T.call(this,d,e)});P.FormData=W};
})();


/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/***/ (() => {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "sortablejs":
/*!***************************!*\
  !*** external "Sortable" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = Sortable;

/***/ }),

/***/ "./node_modules/element-closest/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/element-closest/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function polyfill(window) {
  var ElementPrototype = window.Element.prototype;

  if (typeof ElementPrototype.matches !== 'function') {
    ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof ElementPrototype.closest !== 'function') {
    ElementPrototype.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (polyfill);
//# sourceMappingURL=index.mjs.map


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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************!*\
  !*** ./src/Resources/assets/js/contao-multi-column-editor-bundle.js ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_package_js_contao_multi_column_editor_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../npm-package/js/contao-multi-column-editor-bundle */ "./src/Resources/npm-package/js/contao-multi-column-editor-bundle.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDUjs7QUFFakM7QUFDQTtBQUNBOztBQUVBLHdEQUF3RCxpREFBTztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBLFVBQVU7QUFDViwrREFBK0Q7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUFXO0FBQzNCLGNBQWM7QUFDZCxnQkFBZ0IscURBQVc7QUFDM0I7O0FBRUEsWUFBWSxxREFBVztBQUN2Qjs7QUFFQSxRQUFRLHFEQUFXOztBQUVuQjtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SHhCO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWE07QUFDZTtBQUNKO0FBQ0k7QUFDSjtBQUNRO0FBQ047O0FBRWxDO0FBQ0EsVUFBVSxrREFBUTtBQUNsQixXQUFXLG1EQUFTO0FBQ3BCLFNBQVMsaURBQU87QUFDaEIsV0FBVyxtREFBUztBQUNwQixTQUFTLGlEQUFPO0FBQ2hCLFVBQVUscURBQVc7QUFDckI7O0FBRUE7O0FBVUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JvQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFVztBQUNPOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQixxREFBVztBQUMzQjtBQUNBLGNBQWM7QUFDZCwwQkFBMEIsaURBQU87QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRHhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QzFCO0FBQ21DOztBQUVuQztBQUM2Qzs7QUFFN0MsMkRBQWM7O0FBRWQ7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQSxz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V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BodW5kaC9jb250YW8tdXRpbHMtYnVuZGxlL2pzL2FqYXgtdXRpbC5qcyIsIndlYnBhY2s6Ly9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvLi9ub2RlX21vZHVsZXMvQGh1bmRoL2NvbnRhby11dGlscy1idW5kbGUvanMvYXJyYXktdXRpbC5qcyIsIndlYnBhY2s6Ly9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvLi9ub2RlX21vZHVsZXMvQGh1bmRoL2NvbnRhby11dGlscy1idW5kbGUvanMvY29udGFvLXV0aWxzLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvLi9ub2RlX21vZHVsZXMvQGh1bmRoL2NvbnRhby11dGlscy1idW5kbGUvanMvZG9tLXV0aWwuanMiLCJ3ZWJwYWNrOi8vY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BodW5kaC9jb250YW8tdXRpbHMtYnVuZGxlL2pzL2V2ZW50LXV0aWwuanMiLCJ3ZWJwYWNrOi8vY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BodW5kaC9jb250YW8tdXRpbHMtYnVuZGxlL2pzL2dlbmVyYWwtdXRpbC5qcyIsIndlYnBhY2s6Ly9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvLi9ub2RlX21vZHVsZXMvQGh1bmRoL2NvbnRhby11dGlscy1idW5kbGUvanMvcG9seWZpbGxzLmpzIiwid2VicGFjazovL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS8uL25vZGVfbW9kdWxlcy9AaHVuZGgvY29udGFvLXV0aWxzLWJ1bmRsZS9qcy91cmwtdXRpbC5qcyIsIndlYnBhY2s6Ly9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvLi9zcmMvUmVzb3VyY2VzL25wbS1wYWNrYWdlL2pzL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvLi9ub2RlX21vZHVsZXMvZm9ybWRhdGEtcG9seWZpbGwvZm9ybWRhdGEubWluLmpzIiwid2VicGFjazovL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS8uL25vZGVfbW9kdWxlcy9ub2RlbGlzdC1mb3JlYWNoLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS9leHRlcm5hbCB2YXIgXCJTb3J0YWJsZVwiIiwid2VicGFjazovL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS8uL25vZGVfbW9kdWxlcy9lbGVtZW50LWNsb3Nlc3QvaW5kZXgubWpzIiwid2VicGFjazovL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9hc3NldHMvanMvY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHZW5lcmFsVXRpbCBmcm9tICcuL2dlbmVyYWwtdXRpbCc7XG5pbXBvcnQgVXJsVXRpbCBmcm9tICcuL3VybC11dGlsJztcblxuY2xhc3MgQWpheFV0aWwge1xuICAgIHN0YXRpYyBnZXQodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gQWpheFV0aWwuc2V0RGVmYXVsdHMoY29uZmlnKTtcblxuICAgICAgICBsZXQgcmVxdWVzdCA9IEFqYXhVdGlsLmluaXRpYWxpemVSZXF1ZXN0KCdHRVQnLCBVcmxVdGlsLmFkZFBhcmFtZXRlcnNUb1VyaSh1cmwsIGRhdGEpLCBjb25maWcpLFxuICAgICAgICAgICAgc3VibWl0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHVybCxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIEFqYXhVdGlsLmRvQWpheFN1Ym1pdChyZXF1ZXN0LCBzdWJtaXREYXRhKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9zdCh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBBamF4VXRpbC5zZXREZWZhdWx0cyhjb25maWcpO1xuXG4gICAgICAgIGxldCByZXF1ZXN0ID0gQWpheFV0aWwuaW5pdGlhbGl6ZVJlcXVlc3QoJ1BPU1QnLCB1cmwsIGNvbmZpZyksXG4gICAgICAgICAgICBzdWJtaXREYXRhID0ge1xuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogdXJsLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgQWpheFV0aWwuZG9BamF4U3VibWl0KHJlcXVlc3QsIHN1Ym1pdERhdGEpO1xuICAgIH1cblxuICAgIHN0YXRpYyBqc29uUG9zdCh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBBamF4VXRpbC5zZXREZWZhdWx0cyhjb25maWcpO1xuXG4gICAgICAgIC8vIHNldCBjb3JyZWN0IGhlYWRlclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5oZWFkZXJzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKCFjb25maWcuaGFzT3duUHJvcGVydHkoJ0NvbnRlbnQtVHlwZScpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXBhcmUgZGF0YVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVxdWVzdCA9IEFqYXhVdGlsLmluaXRpYWxpemVSZXF1ZXN0KCdQT1NUJywgdXJsLCBjb25maWcpLFxuICAgICAgICAgICAgc3VibWl0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHVybCxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIEFqYXhVdGlsLmRvQWpheFN1Ym1pdChyZXF1ZXN0LCBzdWJtaXREYXRhKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZG9BamF4U3VibWl0KHJlcXVlc3QsIHN1Ym1pdERhdGEpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHN1Ym1pdERhdGEuY29uZmlnO1xuXG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgR2VuZXJhbFV0aWwuY2FsbChjb25maWcub25TdWNjZXNzLCByZXF1ZXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgR2VuZXJhbFV0aWwuY2FsbChjb25maWcub25FcnJvciwgcmVxdWVzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEdlbmVyYWxVdGlsLmNhbGwoY29uZmlnLmFmdGVyU3VibWl0LCBzdWJtaXREYXRhLmFjdGlvbiwgc3VibWl0RGF0YS5kYXRhLCBjb25maWcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIEdlbmVyYWxVdGlsLmNhbGwoY29uZmlnLmJlZm9yZVN1Ym1pdCwgc3VibWl0RGF0YS5hY3Rpb24sIHN1Ym1pdERhdGEuZGF0YSwgY29uZmlnKTtcblxuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBzdWJtaXREYXRhLmRhdGEpIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VibWl0RGF0YS5kYXRhID0gQWpheFV0aWwucHJlcGFyZURhdGFGb3JTZW5kKHN1Ym1pdERhdGEuZGF0YSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZChzdWJtaXREYXRhLmRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHByZXBhcmVEYXRhRm9yU2VuZChkYXRhKSB7XG4gICAgICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGZpZWxkLCBkYXRhW2ZpZWxkXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRpYWxpemVSZXF1ZXN0KG1ldGhvZCwgdXJsLCBjb25maWcpIHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0ID0gQWpheFV0aWwuc2V0UmVxdWVzdEhlYWRlcnMocmVxdWVzdCwgY29uZmlnKTtcblxuICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KCdyZXNwb25zZVR5cGUnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRSZXF1ZXN0SGVhZGVycyhyZXF1ZXN0LCBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnaGVhZGVycycpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcuaGVhZGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIGNvbmZpZy5oZWFkZXJzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRzKGNvbmZpZykge1xuICAgICAgICBpZiAoIWNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnaGVhZGVycycpKSB7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVycyA9IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBamF4VXRpbDtcbiIsImNsYXNzIEFycmF5VXRpbCB7XG4gICAgc3RhdGljIHJlbW92ZUZyb21BcnJheSh2YWx1ZSwgYXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PSBKU09OLnN0cmluZ2lmeShhcnJheVtpXSkpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlVdGlsIiwiaW1wb3J0ICcuL3BvbHlmaWxscyc7XG5pbXBvcnQgQXJyYXlVdGlsIGZyb20gJy4vYXJyYXktdXRpbCdcbmltcG9ydCBEb21VdGlsIGZyb20gJy4vZG9tLXV0aWwnXG5pbXBvcnQgRXZlbnRVdGlsIGZyb20gJy4vZXZlbnQtdXRpbCdcbmltcG9ydCBVcmxVdGlsIGZyb20gJy4vdXJsLXV0aWwnXG5pbXBvcnQgR2VuZXJhbFV0aWwgZnJvbSAnLi9nZW5lcmFsLXV0aWwnXG5pbXBvcnQgQWpheFV0aWwgZnJvbSAnLi9hamF4LXV0aWwnXG5cbmxldCB1dGlsc0J1bmRsZSA9IHtcbiAgICBhamF4OiBBamF4VXRpbCxcbiAgICBhcnJheTogQXJyYXlVdGlsLFxuICAgIGRvbTogRG9tVXRpbCxcbiAgICBldmVudDogRXZlbnRVdGlsLFxuICAgIHVybDogVXJsVXRpbCxcbiAgICB1dGlsOiBHZW5lcmFsVXRpbFxufTtcblxud2luZG93LnV0aWxzQnVuZGxlID0gdXRpbHNCdW5kbGU7XG5cbmV4cG9ydCB7XG4gICAgdXRpbHNCdW5kbGUsXG4gICAgQWpheFV0aWwsXG4gICAgQXJyYXlVdGlsLFxuICAgIERvbVV0aWwsXG4gICAgRXZlbnRVdGlsLFxuICAgIEdlbmVyYWxVdGlsLFxuICAgIFVybFV0aWxcbn1cbiIsImltcG9ydCBBcnJheVV0aWwgZnJvbSAnLi9hcnJheS11dGlsJztcblxuY2xhc3MgRG9tVXRpbCB7XG4gICAgc3RhdGljIGdldFRleHRXaXRob3V0Q2hpbGRyZW4oZWxlbWVudCwgbm90cmltKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHJlc3VsdC5jaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygbm90cmltICE9PSAndW5kZWZpbmVkJyAmJiBub3RyaW0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuaW5uZXJUZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5pbm5lclRleHQudHJpbSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHNjcm9sbFRvKGVsZW1lbnQsIG9mZnNldCA9IDAsIGRlbGF5ID0gMCwgZm9yY2UgPSBmYWxzZSkge1xuICAgICAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IChyZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIG9mZnNldCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRJblZpZXdwb3J0KGVsZW1lbnQpIHx8IGZvcmNlID09PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBpc1Ntb290aFNjcm9sbFN1cHBvcnRlZCA9ICdzY3JvbGxCZWhhdmlvcicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuICAgICAgICAgICAgICAgIGlmIChpc1Ntb290aFNjcm9sbFN1cHBvcnRlZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAndG9wJzogc2Nyb2xsUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmVoYXZpb3InOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBlbGVtZW50SW5WaWV3cG9ydChlbCkge1xuICAgICAgICBsZXQgdG9wID0gZWwub2Zmc2V0VG9wO1xuICAgICAgICBsZXQgbGVmdCA9IGVsLm9mZnNldExlZnQ7XG4gICAgICAgIGxldCB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHdoaWxlIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcbiAgICAgICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0b3AgPCAod2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0KSAmJlxuICAgICAgICAgICAgbGVmdCA8ICh3aW5kb3cucGFnZVhPZmZzZXQgKyB3aW5kb3cuaW5uZXJXaWR0aCkgJiZcbiAgICAgICAgICAgICh0b3AgKyBoZWlnaHQpID4gd2luZG93LnBhZ2VZT2Zmc2V0ICYmXG4gICAgICAgICAgICAobGVmdCArIHdpZHRoKSA+IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxQYXJlbnROb2Rlcyhub2RlKSB7XG4gICAgICAgIHZhciBwYXJlbnRzID0gW107XG5cbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzW2ldID09PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb21VdGlsXG4iLCJpbXBvcnQgRG9tVXRpbCBmcm9tICcuL2RvbS11dGlsJztcbmltcG9ydCBHZW5lcmFsVXRpbCBmcm9tICcuL2dlbmVyYWwtdXRpbCdcblxuY2xhc3MgRXZlbnRVdGlsIHtcbiAgICBzdGF0aWMgYWRkRHluYW1pY0V2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBzZWxlY3RvciwgY2FsbGJhY2ssIHNjb3BlLCBkaXNhYmxlQnViYmxpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzY29wZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHNjb3BlID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBsZXQgcGFyZW50cztcblxuICAgICAgICAgICAgaWYgKEdlbmVyYWxVdGlsLmlzVHJ1dGh5KGRpc2FibGVCdWJibGluZykpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzID0gW2UudGFyZ2V0XTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50cyA9IERvbVV0aWwuZ2V0QWxsUGFyZW50Tm9kZXMoZS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmb3IgaW5zdGFuY2Ugd2luZG93IGxvYWQvcmVzaXplIGV2ZW50XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocGFyZW50cykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soaXRlbSwgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJlbnRzLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGl0ZW0sIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRXZlbnRPYmplY3QodHlwZSwgYnViYmxlcyA9IGZhbHNlLCBjYW5jZWxhYmxlID0gZmFsc2UsIGNvbXBvc2VkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoRXZlbnQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV2ZW50KHR5cGUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiBidWJibGVzLFxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGNhbmNlbGFibGUsXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IGNvbXBvc2VkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgICAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50VXRpbFxuIiwiY2xhc3MgR2VuZXJhbFV0aWwge1xuICAgIHN0YXRpYyBpc1RydXRoeSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2FsbChmdW5jKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biBhIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IGZvciBhIGdpdmVuIHNldCBvZiBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBmdW5jdGlvbiBkb0xvZ2ljKGFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGNhbGxiYWNrKSB7XG4gICAgICogICAgIC8vIGRvIHlvdXIgbG9naWMgd2l0aCBhcmd1bWVudFxuICAgICAqICAgICB1dGlsc0J1bmRsZS51dGlsLnJ1blJlY3Vyc2l2ZUZ1bmN0aW9uKGRvTG9naWMsIHJlbWFpbmluZ0FyZ3VtZW50cywgY2FsbGJhY2spO1xuICAgICAqIH1cbiAgICAgKlxuICAgICAqIHV0aWxzQnVuZGxlLnV0aWwucnVuUmVjdXJzaXZlRnVuY3Rpb24oZG9Mb2dpYywgWzEsIDIsIDMsIDRdLCAoKSA9PiB7XG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZyBhZnRlciBhbGwgaXMgZG9uZVxuICAgICAqIH0pO1xuICAgICAqXG4gICAgICogQHBhcmFtIGZ1bmNcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBzdWNjZXNzSW5kZXhcbiAgICAgKi9cbiAgICBzdGF0aWMgcnVuUmVjdXJzaXZlRnVuY3Rpb24oZnVuYywgYXJncywgY2FsbGJhY2ssIHN1Y2Nlc3NJbmRleCkge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICBpZiAoR2VuZXJhbFV0aWwuaXNUcnV0aHkoY2FsbGJhY2spICYmIEFycmF5LmlzQXJyYXkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgR2VuZXJhbFV0aWwuY2FsbChjYWxsYmFja1tzdWNjZXNzSW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgR2VuZXJhbFV0aWwuY2FsbChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhcmd1bWVudCA9IGFyZ3NbMF0sXG4gICAgICAgICAgICByZW1haW5pbmdBcmdzID0gYXJncy5zbGljZSgxLCBhcmdzLmxlbmd0aCk7XG5cbiAgICAgICAgZnVuYyhhcmd1bWVudCwgcmVtYWluaW5nQXJncywgY2FsbGJhY2spO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhbFV0aWxcbiIsIi8vIGZvcmVhY2ggb24gbm9kZWxpc3RzXG5pbXBvcnQgJ25vZGVsaXN0LWZvcmVhY2gtcG9seWZpbGwnO1xuXG4vLyBjbG9zZXN0KCkgYW5kIG1hdGNoZXMgcG9seWZpbGxcbmltcG9ydCBlbGVtZW50Q2xvc2VzdCBmcm9tICdlbGVtZW50LWNsb3Nlc3QnO1xuXG5lbGVtZW50Q2xvc2VzdCh3aW5kb3cpO1xuXG4vLyByZXBsYWNlV2l0aFxuZnVuY3Rpb24gUmVwbGFjZVdpdGgoRWxlKSB7XG4gICAgJ3VzZS1zdHJpY3QnOyAvLyBGb3Igc2FmYXJpLCBhbmQgSUUgPiAxMFxuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGUsXG4gICAgICAgIGkgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICBmaXJzdElzTm9kZSA9ICsocGFyZW50ICYmIHR5cGVvZiBFbGUgPT09ICdvYmplY3QnKTtcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuXG4gICAgd2hpbGUgKGktLSA+IGZpcnN0SXNOb2RlKSB7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdHlwZW9mIGFyZ3VtZW50c1tpXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1tpXSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJlbnQgJiYgYXJndW1lbnRzW2ldLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMucHJldmlvdXNTaWJsaW5nLCBhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBpZiAoZmlyc3RJc05vZGUpIHBhcmVudC5yZXBsYWNlQ2hpbGQoRWxlLCB0aGlzKTtcbn1cblxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aClcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCA9IFJlcGxhY2VXaXRoO1xuaWYgKCFDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZS5yZXBsYWNlV2l0aClcbiAgICBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZS5yZXBsYWNlV2l0aCA9IFJlcGxhY2VXaXRoO1xuaWYgKCFEb2N1bWVudFR5cGUucHJvdG90eXBlLnJlcGxhY2VXaXRoKVxuICAgIENoYXJhY3RlckRhdGEucHJvdG90eXBlLnJlcGxhY2VXaXRoID0gUmVwbGFjZVdpdGg7IiwiY2xhc3MgVXJsVXRpbCB7XG4gICAgc3RhdGljIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpXG4gICAge1xuICAgICAgICBpZiAoIXVybClcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcblxuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG4gICAgICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuXG4gICAgICAgIGlmICghcmVzdWx0cylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdHNbMl0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUGFyYW1ldGVyVG9VcmkodXJpLCBrZXksIHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKCF1cmkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVyaSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChcIihbPyZdKVwiICsga2V5ICsgXCI9Lio/KCZ8I3wkKSguKilcIiwgXCJnaVwiKSxcbiAgICAgICAgICAgIGhhc2g7XG5cbiAgICAgICAgaWYgKHJlLnRlc3QodXJpKSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVyaS5yZXBsYWNlKHJlLCAnJDEnICsga2V5ICsgXCI9XCIgKyB2YWx1ZSArICckMiQzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGFzaCA9IHVyaS5zcGxpdCgnIycpO1xuICAgICAgICAgICAgICAgIHVyaSA9IGhhc2hbMF0ucmVwbGFjZShyZSwgJyQxJDMnKS5yZXBsYWNlKC8oJnxcXD8pJC8sICcnKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaFsxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzaFsxXSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVyaSArPSAnIycgKyBoYXNoWzFdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0gdXJpLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPyc7XG4gICAgICAgICAgICAgICAgaGFzaCA9IHVyaS5zcGxpdCgnIycpO1xuICAgICAgICAgICAgICAgIHVyaSA9IGhhc2hbMF0gKyBzZXBhcmF0b3IgKyBrZXkgKyAnPScgKyB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaFsxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgaGFzaFsxXSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVyaSArPSAnIycgKyBoYXNoWzFdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQYXJhbWV0ZXJzVG9VcmkodXJpLCBwYXJhbWV0ZXJzKVxuICAgIHtcbiAgICAgICAgaWYocGFyYW1ldGVycyBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBmb3IobGV0IGVudHJ5IG9mIHBhcmFtZXRlcnMuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgaWYocGFyYW1ldGVycy5oYXMoZW50cnlbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVyaSA9IHRoaXMuYWRkUGFyYW1ldGVyVG9VcmkodXJpLCBlbnRyeVswXSwgZW50cnlbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbWV0ZXJzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1cmkgPSB0aGlzLmFkZFBhcmFtZXRlclRvVXJpKHVyaSwga2V5LCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVBhcmFtZXRlckZyb21VcmkodXJpLCBwYXJhbWV0ZXIpXG4gICAge1xuICAgICAgICAvL3ByZWZlciB0byB1c2UgbC5zZWFyY2ggaWYgeW91IGhhdmUgYSBsb2NhdGlvbi9saW5rIG9iamVjdFxuICAgICAgICBsZXQgdXJpcGFydHMgPSB1cmkuc3BsaXQoJz8nKTtcblxuICAgICAgICBpZiAodXJpcGFydHMubGVuZ3RoID49IDIpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgbGV0IHByZWZpeCA9IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbWV0ZXIpICsgJz0nO1xuICAgICAgICAgICAgbGV0IHBhcnMgPSB1cmlwYXJ0c1sxXS5zcGxpdCgvWyY7XS9nKTtcblxuICAgICAgICAgICAgLy9yZXZlcnNlIGl0ZXJhdGlvbiBhcyBtYXkgYmUgZGVzdHJ1Y3RpdmVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJzLmxlbmd0aDsgaS0tID4gMDspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy9pZGlvbSBmb3Igc3RyaW5nLnN0YXJ0c1dpdGhcbiAgICAgICAgICAgICAgICBpZiAocGFyc1tpXS5sYXN0SW5kZXhPZihwcmVmaXgsIDApICE9PSAtMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJpID0gdXJpcGFydHNbMF0gKyAnPycgKyBwYXJzLmpvaW4oJyYnKTtcbiAgICAgICAgICAgIHJldHVybiB1cmk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdXJpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVBhcmFtZXRlcnNGcm9tVXJpKHVyaSwgcGFyYW1ldGVycylcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbWV0ZXJzKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVyaSA9IHRoaXMucmVtb3ZlUGFyYW1ldGVyRnJvbVVyaSh1cmksIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXBsYWNlUGFyYW1ldGVySW5VcmkodXJpLCBrZXksIHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5hZGRQYXJhbWV0ZXJUb1VyaSh0aGlzLnJlbW92ZVBhcmFtZXRlckZyb21VcmkodXJpLCBrZXkpLCBrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGFyc2VRdWVyeVN0cmluZyhxdWVyeVN0cmluZykge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSgne1wiJyArIGRlY29kZVVSSShxdWVyeVN0cmluZykucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoLyYvZywgJ1wiLFwiJykucmVwbGFjZSgvPS9nLCdcIjpcIicpICsgJ1wifScpXG4gICAgfVxuXG4gICAgc3RhdGljIGJ1aWxkUXVlcnlTdHJpbmcocGFyYW1ldGVycykge1xuICAgICAgICBsZXQgcXVlcnkgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1ldGVycykge1xuICAgICAgICAgICAgaWYgKCcnICE9PSBxdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ICs9ICcmJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcXVlcnkgKz0ga2V5ICsgJz0nICsgcGFyYW1ldGVyc1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXJsVXRpbFxuIiwiaW1wb3J0ICdmb3JtZGF0YS1wb2x5ZmlsbCc7IC8vIGllIGFuZCBlZGdlXG5pbXBvcnQge0V2ZW50VXRpbH0gZnJvbSAnQGh1bmRoL2NvbnRhby11dGlscy1idW5kbGUnO1xuXG5jbGFzcyBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZSB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGxldCBtY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXVsdGktY29sdW1uLWVkaXRvcicpO1xuXG4gICAgICAgIGlmIChtY2UubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzQmFja2VuZCA9IG1jZVswXS5kYXRhc2V0LmVudiA9PT0gJ2JhY2tlbmQnO1xuXG4gICAgICAgIEV2ZW50VXRpbC5hZGREeW5hbWljRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnLm11bHRpLWNvbHVtbi1lZGl0b3IgLmFkZCcsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ2FkZFJvdycsIGl0ZW0uaHJlZik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV2ZW50VXRpbC5hZGREeW5hbWljRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnLm11bHRpLWNvbHVtbi1lZGl0b3IgLmRlbGV0ZScsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUudHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIGl0ZW0sICdkZWxldGVSb3cnLCBpdGVtLmhyZWYpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBmaXggZm9yIGZpcmVmb3ggYW5kIElFXG4gICAgICAgIEV2ZW50VXRpbC5hZGREeW5hbWljRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnLm11bHRpLWNvbHVtbi1lZGl0b3IgLmRyYWctaGFuZGxlJywgZnVuY3Rpb24oaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV2ZW50VXRpbC5hZGREeW5hbWljRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnW2RhdGEtbWNlLWNsaWNrXScsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ3VwZGF0ZVJvd3MnLCBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1tY2UtY2xpY2snKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV2ZW50VXRpbC5hZGREeW5hbWljRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgJ1tkYXRhLW1jZS1jaGFuZ2VdJywgZnVuY3Rpb24oaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLnRyaWdnZXJBY3Rpb24oaXNCYWNrZW5kLCBpdGVtLCAndXBkYXRlUm93cycsIGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW1jZS1jaGFuZ2UnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLmluaXRTb3J0YWJsZShpc0JhY2tlbmQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0U29ydGFibGUoaXNCYWNrZW5kKSB7XG4gICAgICAgIGlmIChpc0JhY2tlbmQpIHtcbiAgICAgICAgICAgIG5ldyBTb3J0YWJsZXMoJy5tdWx0aS1jb2x1bW4tZWRpdG9yLXdyYXBwZXIgLnNvcnRhYmxlJywge1xuICAgICAgICAgICAgICAgIGNvbnN0cmFpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiAnLmRyYWctaGFuZGxlJyxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbihyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGljZXMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvUG9zdCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cyA9IHJvdy5jbG9zZXN0KCcucm93cycpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tY2Utcm93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzLnB1c2gocm93c1tpXS5kYXRhc2V0LmluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3NbaV0uZGF0YXNldC5pbmRleCAhPT0gW10uc2xpY2UuY2FsbChyb3dzKS5pbmRleE9mKHRoaXMpICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvUG9zdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkaXRpb25hbERhdGEgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnbmV3SW5kaWNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogbmV3SW5kaWNlcy5qb2luKCcsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb1Bvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLnRyaWdnZXJBY3Rpb24oaXNCYWNrZW5kLCByb3cucXVlcnlTZWxlY3RvcignLmRyYWctaGFuZGxlJyksICdzb3J0Um93cycsIG51bGwsIGFkZGl0aW9uYWxEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNvcnRhYmxlanNcIiAqLyAnc29ydGFibGVqcycpLnRoZW4oZnVuY3Rpb24oU29ydGFibGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc29ydGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm11bHRpLWNvbHVtbi1lZGl0b3Itd3JhcHBlciAuc29ydGFibGUnKTtcblxuICAgICAgICAgICAgICAgIHNvcnRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgU29ydGFibGUuY3JlYXRlKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdoYW5kbGUnOiAnLmRyYWctaGFuZGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJbmRpY2VzID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvUG9zdCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gZXZlbnQuaXRlbS5jbG9zZXN0KCcucm93cycpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tY2Utcm93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlcy5wdXNoKHJvd3NbaV0uZGF0YXNldC5pbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3NbaV0uZGF0YXNldC5pbmRleCAhPT0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChzb3J0YWJsZXMsIGl0ZW0pICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbmFsRGF0YSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnbmV3SW5kaWNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBuZXdJbmRpY2VzLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvUG9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgZXZlbnQuaXRlbS5xdWVyeVNlbGVjdG9yKCcuZHJhZy1oYW5kbGUnKSwgJ3NvcnRSb3dzJywgbnVsbCwgYWRkaXRpb25hbERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgdHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIGxpbmssIGFjdGlvbiwgdXJsLCBhZGRpdGlvbmFsRm9ybURhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBmb3JtID0gbGluay5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBsZXQgZWRpdG9yID0gbGluay5jbG9zZXN0KCcubXVsdGktY29sdW1uLWVkaXRvcicpO1xuXG4gICAgICAgIGlmIChudWxsID09PSB1cmwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybCA9IGZvcm0uYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSB0aW55bWNlcycgdmFsdWVzIGJlY2F1c2UgbGF0ZXIgb24gdGhleSBnZXQgcmVzZXR0ZWRcbiAgICAgICAgZWRpdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tY2UtdGlueW1jZSArIHRleHRhcmVhJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cudGlueW1jZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gdGlueW1jZS5nZXQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykpLmdldENvbnRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgJ2lucHV0W25hbWVdOm5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWFbbmFtZV06bm90KFtkaXNhYmxlZF0pLCBzZWxlY3RbbmFtZV06bm90KFtkaXNhYmxlZF0pLCBidXR0b25bbmFtZV06bm90KFtkaXNhYmxlZF0pJyxcbiAgICAgICAgKS5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgRk9STV9TVUJNSVQgLT4gbm8gc3VibWl0IGNhbGxiYWNrcyBzaG91bGQgYmUgZmlyZWRcbiAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lICE9PSAnRk9STV9TVUJNSVQnKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByb3cgPSBsaW5rLmNsb3Nlc3QoJy5tY2Utcm93Jyk7XG5cbiAgICAgICAgZm9ybURhdGEuc2V0KCdyb3cnLCB0eXBlb2Ygcm93ICE9PSAndW5kZWZpbmVkJyAmJiByb3cgIT09IG51bGwgPyByb3cuZGF0YXNldC5pbmRleCA6IDApO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ2ZpZWxkJywgZWRpdG9yLmRhdGFzZXQuZmllbGQpO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ3RhYmxlJywgZWRpdG9yLmRhdGFzZXQudGFibGUpO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ2FjdGlvbicsIGFjdGlvbik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhZGRpdGlvbmFsRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhZGRpdGlvbmFsRm9ybURhdGEuZm9yRWFjaChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBGT1JNX1NVQk1JVCAtPiBubyBzdWJtaXQgY2FsbGJhY2tzIHNob3VsZCBiZSBmaXJlZFxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lICE9PSAnRk9STV9TVUJNSVQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChpbnB1dC5uYW1lLCBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChpbnB1dC5uYW1lLCBpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCBjdXN0b20gZXZlbnRcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0O1xuXG4gICAgICAgICAgICAgICAgY3VzdG9tRXZlbnQuaW5pdEV2ZW50KCdhamF4U3VjY2VzcycsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmxvYWQgdGhlIHRpbnltY2UncyAtPiBlbHNlIHRoZSBvbmVzIGFkZGVkIHZpYSBhamF4IHdvdWxkbid0IGJlIGluaXRpYXRlZCBiZWNhdXNlIHRpbnltY2UgdGhpbmtzIHRoZXlcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJlIGFscmVhZHkgKElEIHNlZW1zIHRvIGJlIHN0b3JlZCEpXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5xdWVyeVNlbGVjdG9yQWxsKCcubWNlLXRpbnltY2UgKyB0ZXh0YXJlYScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LnRpbnltY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlueW1jZS5nZXQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCYWNrZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY3JpcHRFbGVtZW50cyA9IHJlc3BvbnNlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRIdG1sID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldCA9IGxpbmsuY2xvc2VzdCgnLndpZGdldCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgdGV4dHMgYmVjYXVzZSBhZnRlciByZXBsYWNpbmcgdGhlIGRvbSBlbGVtZW50cyBhcmUgZ29uZVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSA9IDA7IG0gPCBzY3JpcHRFbGVtZW50cy5sZW5ndGg7IG0rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdEh0bWwucHVzaChzY3JpcHRFbGVtZW50c1ttXS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsb3Nlc3QoJy5tdWx0aS1jb2x1bW4tZWRpdG9yLXdyYXBwZXInKS5pbm5lckhUTUwgPSByZXNwb25zZS5xdWVyeVNlbGVjdG9yKCcubXVsdGktY29sdW1uLWVkaXRvci13cmFwcGVyJykuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0Q2hvc2VuKHdpZGdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0U29ydGFibGUoaXNCYWNrZW5kKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaGlkZUludGVyYWN0aXZlSGVscCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQmFja2VuZC5hZGRJbnRlcmFjdGl2ZUhlbHAoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzY3JpcHRIdG1sLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbChzY3JpcHRIdG1sW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbml0RXZlbnQoJ2FqYXhDb21wbGV0ZScsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pbm5lckhUTUwgPSBkYXRhLnJlc3VsdC5odG1sO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsb3Nlc3QoJy5tdWx0aS1jb2x1bW4tZWRpdG9yLXdyYXBwZXInKS5pbm5lckhUTUwgPSByZXNwb25zZS5xdWVyeVNlbGVjdG9yKCcubXVsdGktY29sdW1uLWVkaXRvci13cmFwcGVyJykuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0U29ydGFibGUoaXNCYWNrZW5kKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRXZlbnQuaW5pdEV2ZW50KCdhamF4Q29tcGxldGUnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLmluaXQpO1xuXG4vLyBiYWNrZW5kIG9ubHlcbihmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hZGRFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnQoJ2RvbXJlYWR5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0Q2hvc2VuID0gZnVuY3Rpb24od2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdC50bF9jaG9zZW4nKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkJCgnIycgKyBlbC5nZXRBdHRyaWJ1dGUoJ2lkJykpLmNob3NlbigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaGlkZUludGVyYWN0aXZlSGVscCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGlkZVRpcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXAtd3JhcCcpLmZvckVhY2goZnVuY3Rpb24gKHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlwLnNldFN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBoaWRlVGlwcygpO1xuICAgICAgICAgICAgICAgIC8vIGhpZGUgZGVsYXllZCB0aXBzIC0gdGltZW91dDogVGlwcy5Db250YW8ub3B0aW9ucy5zaG93RGVsYXlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVUaXBzLCAxMDAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudCgnYWpheF9jaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLmluaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSkoKTtcbiIsIjsoZnVuY3Rpb24oKXt2YXIgaDtmdW5jdGlvbiBsKGEpe3ZhciBjPTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGM8YS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6YVtjKytdfTp7ZG9uZTohMH19fXZhciBtPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihhLGMsYil7aWYoYT09QXJyYXkucHJvdG90eXBlfHxhPT1PYmplY3QucHJvdG90eXBlKXJldHVybiBhO2FbY109Yi52YWx1ZTtyZXR1cm4gYX07XG5mdW5jdGlvbiBuKGEpe2E9W1wib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWxUaGlzJiZnbG9iYWxUaGlzLGEsXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LFwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbF07Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDsrK2Mpe3ZhciBiPWFbY107aWYoYiYmYi5NYXRoPT1NYXRoKXJldHVybiBifXRocm93IEVycm9yKFwiQ2Fubm90IGZpbmQgZ2xvYmFsIG9iamVjdFwiKTt9dmFyIHA9bih0aGlzKTtmdW5jdGlvbiByKGEsYyl7aWYoYyl7Zm9yKHZhciBiPXAsZD1hLnNwbGl0KFwiLlwiKSxlPTA7ZTxkLmxlbmd0aC0xO2UrKyl7dmFyIGY9ZFtlXTtmIGluIGJ8fChiW2ZdPXt9KTtiPWJbZl19ZD1kW2QubGVuZ3RoLTFdO2U9YltkXTtmPWMoZSk7ZiE9ZSYmbnVsbCE9ZiYmbShiLGQse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmfSl9fVxucihcIlN5bWJvbFwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGMoZSl7aWYodGhpcyBpbnN0YW5jZW9mIGMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvclwiKTtyZXR1cm4gbmV3IGIoXCJqc2NvbXBfc3ltYm9sX1wiKyhlfHxcIlwiKStcIl9cIitkKyssZSl9ZnVuY3Rpb24gYihlLGYpe3RoaXMubz1lO20odGhpcyxcImRlc2NyaXB0aW9uXCIse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmfSl9aWYoYSlyZXR1cm4gYTtiLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm99O3ZhciBkPTA7cmV0dXJuIGN9KTtcbnIoXCJTeW1ib2wuaXRlcmF0b3JcIixmdW5jdGlvbihhKXtpZihhKXJldHVybiBhO2E9U3ltYm9sKFwiU3ltYm9sLml0ZXJhdG9yXCIpO2Zvcih2YXIgYz1cIkFycmF5IEludDhBcnJheSBVaW50OEFycmF5IFVpbnQ4Q2xhbXBlZEFycmF5IEludDE2QXJyYXkgVWludDE2QXJyYXkgSW50MzJBcnJheSBVaW50MzJBcnJheSBGbG9hdDMyQXJyYXkgRmxvYXQ2NEFycmF5XCIuc3BsaXQoXCIgXCIpLGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9cFtjW2JdXTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCYmXCJmdW5jdGlvblwiIT10eXBlb2YgZC5wcm90b3R5cGVbYV0mJm0oZC5wcm90b3R5cGUsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHUobCh0aGlzKSl9fSl9cmV0dXJuIGF9KTtmdW5jdGlvbiB1KGEpe2E9e25leHQ6YX07YVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBhfVxuZnVuY3Rpb24gdihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3ImJmFbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gYz9jLmNhbGwoYSk6e25leHQ6bChhKX19dmFyIHc7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mKXc9T2JqZWN0LnNldFByb3RvdHlwZU9mO2Vsc2V7dmFyIHk7YTp7dmFyIHo9e3U6ITB9LEE9e307dHJ5e0EuX19wcm90b19fPXo7eT1BLnU7YnJlYWsgYX1jYXRjaChhKXt9eT0hMX13PXk/ZnVuY3Rpb24oYSxjKXthLl9fcHJvdG9fXz1jO2lmKGEuX19wcm90b19fIT09Yyl0aHJvdyBuZXcgVHlwZUVycm9yKGErXCIgaXMgbm90IGV4dGVuc2libGVcIik7cmV0dXJuIGF9Om51bGx9dmFyIEI9dztmdW5jdGlvbiBDKCl7dGhpcy5oPSExO3RoaXMuZj1udWxsO3RoaXMubT12b2lkIDA7dGhpcy5iPTE7dGhpcy5sPXRoaXMudj0wO3RoaXMuZz1udWxsfVxuZnVuY3Rpb24gRChhKXtpZihhLmgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7YS5oPSEwfUMucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7dGhpcy5tPWF9O0MucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7dGhpcy5nPXt3OmEsQTohMH07dGhpcy5iPXRoaXMudnx8dGhpcy5sfTtDLnByb3RvdHlwZVtcInJldHVyblwiXT1mdW5jdGlvbihhKXt0aGlzLmc9e1wicmV0dXJuXCI6YX07dGhpcy5iPXRoaXMubH07ZnVuY3Rpb24gRShhLGMpe2EuYj0zO3JldHVybnt2YWx1ZTpjfX1mdW5jdGlvbiBGKGEpe3RoaXMuYT1uZXcgQzt0aGlzLkI9YX1GLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe0QodGhpcy5hKTtpZih0aGlzLmEuZilyZXR1cm4gRyh0aGlzLHRoaXMuYS5mLm5leHQsYSx0aGlzLmEuaSk7dGhpcy5hLmkoYSk7cmV0dXJuIEgodGhpcyl9O1xuZnVuY3Rpb24gSShhLGMpe0QoYS5hKTt2YXIgYj1hLmEuZjtpZihiKXJldHVybiBHKGEsXCJyZXR1cm5cImluIGI/YltcInJldHVyblwiXTpmdW5jdGlvbihkKXtyZXR1cm57dmFsdWU6ZCxkb25lOiEwfX0sYyxhLmFbXCJyZXR1cm5cIl0pO2EuYVtcInJldHVyblwiXShjKTtyZXR1cm4gSChhKX1GLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe0QodGhpcy5hKTtpZih0aGlzLmEuZilyZXR1cm4gRyh0aGlzLHRoaXMuYS5mW1widGhyb3dcIl0sYSx0aGlzLmEuaSk7dGhpcy5hLmooYSk7cmV0dXJuIEgodGhpcyl9O1xuZnVuY3Rpb24gRyhhLGMsYixkKXt0cnl7dmFyIGU9Yy5jYWxsKGEuYS5mLGIpO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkl0ZXJhdG9yIHJlc3VsdCBcIitlK1wiIGlzIG5vdCBhbiBvYmplY3RcIik7aWYoIWUuZG9uZSlyZXR1cm4gYS5hLmg9ITEsZTt2YXIgZj1lLnZhbHVlfWNhdGNoKGcpe3JldHVybiBhLmEuZj1udWxsLGEuYS5qKGcpLEgoYSl9YS5hLmY9bnVsbDtkLmNhbGwoYS5hLGYpO3JldHVybiBIKGEpfWZ1bmN0aW9uIEgoYSl7Zm9yKDthLmEuYjspdHJ5e3ZhciBjPWEuQihhLmEpO2lmKGMpcmV0dXJuIGEuYS5oPSExLHt2YWx1ZTpjLnZhbHVlLGRvbmU6ITF9fWNhdGNoKGIpe2EuYS5tPXZvaWQgMCxhLmEuaihiKX1hLmEuaD0hMTtpZihhLmEuZyl7Yz1hLmEuZzthLmEuZz1udWxsO2lmKGMuQSl0aHJvdyBjLnc7cmV0dXJue3ZhbHVlOmNbXCJyZXR1cm5cIl0sZG9uZTohMH19cmV0dXJue3ZhbHVlOnZvaWQgMCxkb25lOiEwfX1cbmZ1bmN0aW9uIEooYSl7dGhpcy5uZXh0PWZ1bmN0aW9uKGMpe3JldHVybiBhLmkoYyl9O3RoaXNbXCJ0aHJvd1wiXT1mdW5jdGlvbihjKXtyZXR1cm4gYS5qKGMpfTt0aGlzW1wicmV0dXJuXCJdPWZ1bmN0aW9uKGMpe3JldHVybiBJKGEsYyl9O3RoaXNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfX1mdW5jdGlvbiBLKGEsYyl7dmFyIGI9bmV3IEoobmV3IEYoYykpO0ImJkIoYixhLnByb3RvdHlwZSk7cmV0dXJuIGJ9XG5pZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIEJsb2ImJihcInVuZGVmaW5lZFwiPT09dHlwZW9mIEZvcm1EYXRhfHwhRm9ybURhdGEucHJvdG90eXBlLmtleXMpKXt2YXIgTD1mdW5jdGlvbihhLGMpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKWMoYVtiXSl9LE09ZnVuY3Rpb24oYSxjLGIpe3JldHVybiBjIGluc3RhbmNlb2YgQmxvYj9bU3RyaW5nKGEpLGMsdm9pZCAwIT09Yj9iK1wiXCI6XCJzdHJpbmdcIj09PXR5cGVvZiBjLm5hbWU/Yy5uYW1lOlwiYmxvYlwiXTpbU3RyaW5nKGEpLFN0cmluZyhjKV19LE49ZnVuY3Rpb24oYSxjKXtpZihhLmxlbmd0aDxjKXRocm93IG5ldyBUeXBlRXJyb3IoYytcIiBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgXCIrYS5sZW5ndGgrXCIgcHJlc2VudC5cIik7fSxPPWZ1bmN0aW9uKGEpe3ZhciBjPXYoYSk7YT1jLm5leHQoKS52YWx1ZTt2YXIgYj1jLm5leHQoKS52YWx1ZTtjPWMubmV4dCgpLnZhbHVlO2IgaW5zdGFuY2VvZiBCbG9iJiYoYj1uZXcgRmlsZShbYl0sXG5jLHt0eXBlOmIudHlwZSxsYXN0TW9kaWZpZWQ6Yi5sYXN0TW9kaWZpZWR9KSk7cmV0dXJuW2EsYl19LFA9XCJvYmplY3RcIj09PXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6XCJvYmplY3RcIj09PXR5cGVvZiB3aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsUT1QLkZvcm1EYXRhLFI9UC5YTUxIdHRwUmVxdWVzdCYmUC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCxTPVAuUmVxdWVzdCYmUC5mZXRjaCxUPVAubmF2aWdhdG9yJiZQLm5hdmlnYXRvci5zZW5kQmVhY29uLFU9UC5FbGVtZW50JiZQLkVsZW1lbnQucHJvdG90eXBlLFY9UC5TeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZztWJiYoQmxvYi5wcm90b3R5cGVbVl18fChCbG9iLnByb3RvdHlwZVtWXT1cIkJsb2JcIiksXCJGaWxlXCJpbiBQJiYhRmlsZS5wcm90b3R5cGVbVl0mJihGaWxlLnByb3RvdHlwZVtWXT1cIkZpbGVcIikpO3RyeXtuZXcgRmlsZShbXSxcIlwiKX1jYXRjaChhKXtQLkZpbGU9ZnVuY3Rpb24oYyxcbmIsZCl7Yz1uZXcgQmxvYihjLGQpO2Q9ZCYmdm9pZCAwIT09ZC5sYXN0TW9kaWZpZWQ/bmV3IERhdGUoZC5sYXN0TW9kaWZpZWQpOm5ldyBEYXRlO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGMse25hbWU6e3ZhbHVlOmJ9LGxhc3RNb2RpZmllZERhdGU6e3ZhbHVlOmR9LGxhc3RNb2RpZmllZDp7dmFsdWU6K2R9LHRvU3RyaW5nOnt2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBGaWxlXVwifX19KTtWJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYyxWLHt2YWx1ZTpcIkZpbGVcIn0pO3JldHVybiBjfX12YXIgVz1mdW5jdGlvbihhKXt0aGlzLmM9W107dmFyIGM9dGhpczthJiZMKGEuZWxlbWVudHMsZnVuY3Rpb24oYil7aWYoYi5uYW1lJiYhYi5kaXNhYmxlZCYmXCJzdWJtaXRcIiE9PWIudHlwZSYmXCJidXR0b25cIiE9PWIudHlwZSYmIWIubWF0Y2hlcyhcImZvcm0gZmllbGRzZXRbZGlzYWJsZWRdICpcIikpaWYoXCJmaWxlXCI9PT1iLnR5cGUpe3ZhciBkPWIuZmlsZXMmJmIuZmlsZXMubGVuZ3RoP1xuYi5maWxlczpbbmV3IEZpbGUoW10sXCJcIix7dHlwZTpcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwifSldO0woZCxmdW5jdGlvbihlKXtjLmFwcGVuZChiLm5hbWUsZSl9KX1lbHNlXCJzZWxlY3QtbXVsdGlwbGVcIj09PWIudHlwZXx8XCJzZWxlY3Qtb25lXCI9PT1iLnR5cGU/TChiLm9wdGlvbnMsZnVuY3Rpb24oZSl7IWUuZGlzYWJsZWQmJmUuc2VsZWN0ZWQmJmMuYXBwZW5kKGIubmFtZSxlLnZhbHVlKX0pOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP2IuY2hlY2tlZCYmYy5hcHBlbmQoYi5uYW1lLGIudmFsdWUpOihkPVwidGV4dGFyZWFcIj09PWIudHlwZT9iLnZhbHVlLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpLnJlcGxhY2UoL1xcbi9nLFwiXFxyXFxuXCIpOmIudmFsdWUsYy5hcHBlbmQoYi5uYW1lLGQpKX0pfTtoPVcucHJvdG90eXBlO2guYXBwZW5kPWZ1bmN0aW9uKGEsYyxiKXtOKGFyZ3VtZW50cywyKTt0aGlzLmMucHVzaChNKGEsYyxiKSl9O2hbXCJkZWxldGVcIl09ZnVuY3Rpb24oYSl7Tihhcmd1bWVudHMsXG4xKTt2YXIgYz1bXTthPVN0cmluZyhhKTtMKHRoaXMuYyxmdW5jdGlvbihiKXtiWzBdIT09YSYmYy5wdXNoKGIpfSk7dGhpcy5jPWN9O2guZW50cmllcz1mdW5jdGlvbiBjKCl7dmFyIGIsZD10aGlzO3JldHVybiBLKGMsZnVuY3Rpb24oZSl7MT09ZS5iJiYoYj0wKTtpZigzIT1lLmIpcmV0dXJuIGI8ZC5jLmxlbmd0aD9lPUUoZSxPKGQuY1tiXSkpOihlLmI9MCxlPXZvaWQgMCksZTtiKys7ZS5iPTJ9KX07aC5mb3JFYWNoPWZ1bmN0aW9uKGMsYil7Tihhcmd1bWVudHMsMSk7Zm9yKHZhciBkPXYodGhpcyksZT1kLm5leHQoKTshZS5kb25lO2U9ZC5uZXh0KCkpe3ZhciBmPXYoZS52YWx1ZSk7ZT1mLm5leHQoKS52YWx1ZTtmPWYubmV4dCgpLnZhbHVlO2MuY2FsbChiLGYsZSx0aGlzKX19O2guZ2V0PWZ1bmN0aW9uKGMpe04oYXJndW1lbnRzLDEpO3ZhciBiPXRoaXMuYztjPVN0cmluZyhjKTtmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKylpZihiW2RdWzBdPT09YylyZXR1cm4gTyhiW2RdKVsxXTtcbnJldHVybiBudWxsfTtoLmdldEFsbD1mdW5jdGlvbihjKXtOKGFyZ3VtZW50cywxKTt2YXIgYj1bXTtjPVN0cmluZyhjKTtMKHRoaXMuYyxmdW5jdGlvbihkKXtkWzBdPT09YyYmYi5wdXNoKE8oZClbMV0pfSk7cmV0dXJuIGJ9O2guaGFzPWZ1bmN0aW9uKGMpe04oYXJndW1lbnRzLDEpO2M9U3RyaW5nKGMpO2Zvcih2YXIgYj0wO2I8dGhpcy5jLmxlbmd0aDtiKyspaWYodGhpcy5jW2JdWzBdPT09YylyZXR1cm4hMDtyZXR1cm4hMX07aC5rZXlzPWZ1bmN0aW9uIGIoKXt2YXIgZD10aGlzLGUsZixnLGsscTtyZXR1cm4gSyhiLGZ1bmN0aW9uKHQpezE9PXQuYiYmKGU9dihkKSxmPWUubmV4dCgpKTtpZigzIT10LmIpe2lmKGYuZG9uZSl7dC5iPTA7cmV0dXJufWc9Zi52YWx1ZTtrPXYoZyk7cT1rLm5leHQoKS52YWx1ZTtyZXR1cm4gRSh0LHEpfWY9ZS5uZXh0KCk7dC5iPTJ9KX07aC5zZXQ9ZnVuY3Rpb24oYixkLGUpe04oYXJndW1lbnRzLDIpO2I9U3RyaW5nKGIpO3ZhciBmPVtdLGc9TShiLFxuZCxlKSxrPSEwO0wodGhpcy5jLGZ1bmN0aW9uKHEpe3FbMF09PT1iP2smJihrPSFmLnB1c2goZykpOmYucHVzaChxKX0pO2smJmYucHVzaChnKTt0aGlzLmM9Zn07aC52YWx1ZXM9ZnVuY3Rpb24gZCgpe3ZhciBlPXRoaXMsZixnLGsscSx0O3JldHVybiBLKGQsZnVuY3Rpb24oeCl7MT09eC5iJiYoZj12KGUpLGc9Zi5uZXh0KCkpO2lmKDMhPXguYil7aWYoZy5kb25lKXt4LmI9MDtyZXR1cm59az1nLnZhbHVlO3E9dihrKTtxLm5leHQoKTt0PXEubmV4dCgpLnZhbHVlO3JldHVybiBFKHgsdCl9Zz1mLm5leHQoKTt4LmI9Mn0pfTtXLnByb3RvdHlwZS5fYXNOYXRpdmU9ZnVuY3Rpb24oKXtmb3IodmFyIGQ9bmV3IFEsZT12KHRoaXMpLGY9ZS5uZXh0KCk7IWYuZG9uZTtmPWUubmV4dCgpKXt2YXIgZz12KGYudmFsdWUpO2Y9Zy5uZXh0KCkudmFsdWU7Zz1nLm5leHQoKS52YWx1ZTtkLmFwcGVuZChmLGcpfXJldHVybiBkfTtXLnByb3RvdHlwZS5fYmxvYj1mdW5jdGlvbigpe2Zvcih2YXIgZD1cblwiLS0tLWZvcm1kYXRhLXBvbHlmaWxsLVwiK01hdGgucmFuZG9tKCksZT1bXSxmPXYodGhpcyksZz1mLm5leHQoKTshZy5kb25lO2c9Zi5uZXh0KCkpe3ZhciBrPXYoZy52YWx1ZSk7Zz1rLm5leHQoKS52YWx1ZTtrPWsubmV4dCgpLnZhbHVlO2UucHVzaChcIi0tXCIrZCtcIlxcclxcblwiKTtrIGluc3RhbmNlb2YgQmxvYj9lLnB1c2goJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicrZysnXCI7IGZpbGVuYW1lPVwiJytrLm5hbWUrJ1wiXFxyXFxuQ29udGVudC1UeXBlOiAnKygoay50eXBlfHxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKStcIlxcclxcblxcclxcblwiKSxrLFwiXFxyXFxuXCIpOmUucHVzaCgnQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJytnKydcIlxcclxcblxcclxcbicraytcIlxcclxcblwiKX1lLnB1c2goXCItLVwiK2QrXCItLVwiKTtyZXR1cm4gbmV3IEJsb2IoZSx7dHlwZTpcIm11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PVwiK2R9KX07Vy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXT1cbmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfTtXLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBGb3JtRGF0YV1cIn07VSYmIVUubWF0Y2hlcyYmKFUubWF0Y2hlcz1VLm1hdGNoZXNTZWxlY3Rvcnx8VS5tb3pNYXRjaGVzU2VsZWN0b3J8fFUubXNNYXRjaGVzU2VsZWN0b3J8fFUub01hdGNoZXNTZWxlY3Rvcnx8VS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGZ1bmN0aW9uKGQpe2Q9KHRoaXMuZG9jdW1lbnR8fHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChkKTtmb3IodmFyIGU9ZC5sZW5ndGg7MDw9LS1lJiZkLml0ZW0oZSkhPT10aGlzOyk7cmV0dXJuLTE8ZX0pO1YmJihXLnByb3RvdHlwZVtWXT1cIkZvcm1EYXRhXCIpO2lmKFIpe3ZhciBYPVAuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXI7UC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihkLGUpe1guY2FsbCh0aGlzLFxuZCxlKTtcImNvbnRlbnQtdHlwZVwiPT09ZC50b0xvd2VyQ2FzZSgpJiYodGhpcy5zPSEwKX07UC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbihkKXtkIGluc3RhbmNlb2YgVz8oZD1kLl9ibG9iKCksdGhpcy5zfHx0aGlzLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixkLnR5cGUpLFIuY2FsbCh0aGlzLGQpKTpSLmNhbGwodGhpcyxkKX19UyYmKFAuZmV0Y2g9ZnVuY3Rpb24oZCxlKXtlJiZlLmJvZHkmJmUuYm9keSBpbnN0YW5jZW9mIFcmJihlLmJvZHk9ZS5ib2R5Ll9ibG9iKCkpO3JldHVybiBTLmNhbGwodGhpcyxkLGUpfSk7VCYmKFAubmF2aWdhdG9yLnNlbmRCZWFjb249ZnVuY3Rpb24oZCxlKXtlIGluc3RhbmNlb2YgVyYmKGU9ZS5fYXNOYXRpdmUoKSk7cmV0dXJuIFQuY2FsbCh0aGlzLGQsZSl9KTtQLkZvcm1EYXRhPVd9O1xufSkoKTtcbiIsImlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XHJcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xyXG4gICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gU29ydGFibGU7IiwiZnVuY3Rpb24gcG9seWZpbGwod2luZG93KSB7XG4gIHZhciBFbGVtZW50UHJvdG90eXBlID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuXG4gIGlmICh0eXBlb2YgRWxlbWVudFByb3RvdHlwZS5tYXRjaGVzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgRWxlbWVudFByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudFByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50UHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50UHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbiBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXM7XG4gICAgICB2YXIgZWxlbWVudHMgPSAoZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgdmFyIGluZGV4ID0gMDtcblxuICAgICAgd2hpbGUgKGVsZW1lbnRzW2luZGV4XSAmJiBlbGVtZW50c1tpbmRleF0gIT09IGVsZW1lbnQpIHtcbiAgICAgICAgKytpbmRleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEJvb2xlYW4oZWxlbWVudHNbaW5kZXhdKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBFbGVtZW50UHJvdG90eXBlLmNsb3Nlc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICBFbGVtZW50UHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXM7XG5cbiAgICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9seWZpbGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uLy4uL25wbS1wYWNrYWdlL2pzL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZSc7XG4iXSwibmFtZXMiOlsiRXZlbnRVdGlsIiwiTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImluaXQiLCJtY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJpc0JhY2tlbmQiLCJkYXRhc2V0IiwiZW52IiwiYWRkRHluYW1pY0V2ZW50TGlzdGVuZXIiLCJpdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXJBY3Rpb24iLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiaW5pdFNvcnRhYmxlIiwiU29ydGFibGVzIiwiY29uc3RyYWluIiwib3BhY2l0eSIsImhhbmRsZSIsIm9uQ29tcGxldGUiLCJyb3ciLCJuZXdJbmRpY2VzIiwiZG9Qb3N0Iiwicm93cyIsImNsb3Nlc3QiLCJpIiwicHVzaCIsImluZGV4Iiwic2xpY2UiLCJjYWxsIiwiaW5kZXhPZiIsImFkZGl0aW9uYWxEYXRhIiwiam9pbiIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiU29ydGFibGUiLCJzb3J0YWJsZXMiLCJmb3JFYWNoIiwiY3JlYXRlIiwib25FbmQiLCJBcnJheSIsInByb3RvdHlwZSIsImxpbmsiLCJhY3Rpb24iLCJ1cmwiLCJhZGRpdGlvbmFsRm9ybURhdGEiLCJjYWxsYmFjayIsImZvcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZWRpdG9yIiwiZWxlbWVudCIsIndpbmRvdyIsInRpbnltY2UiLCJnZXQiLCJnZXRDb250ZW50IiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsImFwcGVuZCIsImNoZWNrZWQiLCJzZXQiLCJmaWVsZCIsInRhYmxlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiY3VzdG9tRXZlbnQiLCJjcmVhdGVFdmVudCIsIndpZGdldCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzdGF0dXMiLCJyZW1vdmUiLCJyZXNwb25zZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJyZXNwb25zZVRleHQiLCJzY3JpcHRFbGVtZW50cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2NyaXB0SHRtbCIsIm0iLCJpbml0Q2hvc2VuIiwiaGlkZUludGVyYWN0aXZlSGVscCIsIkJhY2tlbmQiLCJhZGRJbnRlcmFjdGl2ZUhlbHAiLCJuIiwiZXZhbCIsImFwcGx5IiwiYXJndW1lbnRzIiwiZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiLCJodG1sIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50IiwiZWwiLCIkJCIsImNob3NlbiIsImhpZGVUaXBzIiwidGlwIiwic2V0U3R5bGUiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==