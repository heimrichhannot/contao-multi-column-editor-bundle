/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"contao-multi-column-editor-bundle": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bundles/heimrichhannotcontaomulticolumneditor/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@hundh/contao-multi-column-editor-bundle/js/contao-multi-column-editor-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hundh/contao-multi-column-editor-bundle/js/contao-multi-column-editor-bundle.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@hundh/contao-multi-column-editor-bundle/js/contao-multi-column-editor-bundle.js ***!
  \*******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var formdata_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");
/* harmony import */ var formdata_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formdata_polyfill__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      utilsBundle.event.addDynamicEventListener('click', '.multi-column-editor .add', function (item, event) {
        event.preventDefault();
        MultiColumnEditorBundle.triggerAction(isBackend, item, 'addRow', item.href);
      });
      utilsBundle.event.addDynamicEventListener('click', '.multi-column-editor .delete', function (item, event) {
        event.preventDefault();
        MultiColumnEditorBundle.triggerAction(isBackend, item, 'deleteRow', item.href);
      }); // fix for firefox and IE

      utilsBundle.event.addDynamicEventListener('click', '.multi-column-editor .drag-handle', function (item, event) {
        event.preventDefault();
      });
      utilsBundle.event.addDynamicEventListener('click', '[data-mce-click]', function (item, event) {
        MultiColumnEditorBundle.triggerAction(isBackend, item, 'updateRows', item.getAttribute('data-mce-click'));
      });
      utilsBundle.event.addDynamicEventListener('change', '[data-mce-change]', function (item, event) {
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
        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sortablejs */ "sortablejs", 7)).then(function (Sortable) {
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
      } // set the tinymces' values because later on they get resetted


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
              widget = link.closest('.widget'); // store the texts because after replacing the dom elements are gone

              for (var m = 0; m < scriptElements.length; m++) {
                scriptHtml.push(scriptElements[m].innerHTML);
              }

              link.closest('.multi-column-editor-wrapper').replaceWith(response.querySelector('.multi-column-editor-wrapper'));
              MultiColumnEditorBundle.initChosen(widget);
              MultiColumnEditorBundle.initSortable(isBackend);

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
              link.closest('.multi-column-editor-wrapper').replaceWith(_response.querySelector('.multi-column-editor-wrapper'));
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

document.addEventListener('DOMContentLoaded', MultiColumnEditorBundle.init); // backend only

(function () {
  if (typeof window.addEvent === 'function') {
    window.addEvent('domready', function () {
      MultiColumnEditorBundle.initChosen = function (widget) {
        widget.querySelectorAll('select.tl_chosen').forEach(function (el) {
          $$('#' + el.getAttribute('id')).chosen();
        });
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var h;function l(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(a==Array.prototype||a==Object.prototype)return a;a[c]=b.value;return a};
function n(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");}var p=n(this);function r(a,c){if(c){for(var b=p,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in b||(b[f]={});b=b[f]}d=d[d.length-1];e=b[d];f=c(e);f!=e&&null!=f&&m(b,d,{configurable:!0,writable:!0,value:f})}}
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "sortablejs":
/*!***************************!*\
  !*** external "Sortable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Sortable;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodW5kaC9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvanMvY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtZGF0YS1wb2x5ZmlsbC9mb3JtZGF0YS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJTb3J0YWJsZVwiIl0sIm5hbWVzIjpbIk11bHRpQ29sdW1uRWRpdG9yQnVuZGxlIiwibWNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaXNCYWNrZW5kIiwiZGF0YXNldCIsImVudiIsInV0aWxzQnVuZGxlIiwiZXZlbnQiLCJhZGREeW5hbWljRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXJBY3Rpb24iLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiaW5pdFNvcnRhYmxlIiwiU29ydGFibGVzIiwiY29uc3RyYWluIiwib3BhY2l0eSIsImhhbmRsZSIsIm9uQ29tcGxldGUiLCJyb3ciLCJuZXdJbmRpY2VzIiwiZG9Qb3N0Iiwicm93cyIsImNsb3Nlc3QiLCJpIiwicHVzaCIsImluZGV4Iiwic2xpY2UiLCJjYWxsIiwiaW5kZXhPZiIsImFkZGl0aW9uYWxEYXRhIiwiam9pbiIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiU29ydGFibGUiLCJzb3J0YWJsZXMiLCJmb3JFYWNoIiwiY3JlYXRlIiwib25FbmQiLCJBcnJheSIsInByb3RvdHlwZSIsImxpbmsiLCJhY3Rpb24iLCJ1cmwiLCJhZGRpdGlvbmFsRm9ybURhdGEiLCJjYWxsYmFjayIsImZvcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZWRpdG9yIiwiZWxlbWVudCIsIndpbmRvdyIsInRpbnltY2UiLCJ2YWx1ZSIsImdldCIsImdldENvbnRlbnQiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwiYXBwZW5kIiwiY2hlY2tlZCIsInNldCIsImZpZWxkIiwidGFibGUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJjdXN0b21FdmVudCIsImNyZWF0ZUV2ZW50Iiwid2lkZ2V0IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInN0YXR1cyIsInJlbW92ZSIsInJlc3BvbnNlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsInNjcmlwdEVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHRIdG1sIiwibSIsInJlcGxhY2VXaXRoIiwiaW5pdENob3NlbiIsIm4iLCJldmFsIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInJlc3VsdCIsImh0bWwiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsImFkZEV2ZW50IiwiZWwiLCIkJCIsImNob3NlbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7OztRQUlBO1FBQ0E7UUFDQSwwQ0FBMEM7UUFDMUM7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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RUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkEsMEIiLCJmaWxlIjoiY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGVcIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVuZGxlcy9oZWltcmljaGhhbm5vdGNvbnRhb211bHRpY29sdW1uZWRpdG9yL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy9AaHVuZGgvY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlL2pzL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS5qc1wiKTtcbiIsImltcG9ydCAnZm9ybWRhdGEtcG9seWZpbGwnOyAvLyBpZSBhbmQgZWRnZVxuXG5jbGFzcyBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZSB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGxldCBtY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXVsdGktY29sdW1uLWVkaXRvcicpO1xuXG4gICAgICAgIGlmIChtY2UubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzQmFja2VuZCA9IG1jZVswXS5kYXRhc2V0LmVudiA9PT0gJ2JhY2tlbmQnO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjbGljaycsICcubXVsdGktY29sdW1uLWVkaXRvciAuYWRkJywgZnVuY3Rpb24oaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ2FkZFJvdycsIGl0ZW0uaHJlZik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjbGljaycsICcubXVsdGktY29sdW1uLWVkaXRvciAuZGVsZXRlJywgZnVuY3Rpb24oaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ2RlbGV0ZVJvdycsIGl0ZW0uaHJlZik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpeCBmb3IgZmlyZWZveCBhbmQgSUVcbiAgICAgICAgdXRpbHNCdW5kbGUuZXZlbnQuYWRkRHluYW1pY0V2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJy5tdWx0aS1jb2x1bW4tZWRpdG9yIC5kcmFnLWhhbmRsZScsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlsc0J1bmRsZS5ldmVudC5hZGREeW5hbWljRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnW2RhdGEtbWNlLWNsaWNrXScsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ3VwZGF0ZVJvd3MnLCBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1tY2UtY2xpY2snKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAnW2RhdGEtbWNlLWNoYW5nZV0nLCBmdW5jdGlvbihpdGVtLCBldmVudCkge1xuICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUudHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIGl0ZW0sICd1cGRhdGVSb3dzJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWNlLWNoYW5nZScpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdFNvcnRhYmxlKGlzQmFja2VuZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRTb3J0YWJsZShpc0JhY2tlbmQpIHtcbiAgICAgICAgaWYgKGlzQmFja2VuZCkge1xuICAgICAgICAgICAgbmV3IFNvcnRhYmxlcygnLm11bHRpLWNvbHVtbi1lZGl0b3Itd3JhcHBlciAuc29ydGFibGUnLCB7XG4gICAgICAgICAgICAgICAgY29uc3RyYWluOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgICBoYW5kbGU6ICcuZHJhZy1oYW5kbGUnLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5kaWNlcyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gcm93LmNsb3Nlc3QoJy5yb3dzJykucXVlcnlTZWxlY3RvckFsbCgnLm1jZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXMucHVzaChyb3dzW2ldLmRhdGFzZXQuaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93c1tpXS5kYXRhc2V0LmluZGV4ICE9PSBbXS5zbGljZS5jYWxsKHJvd3MpLmluZGV4T2YodGhpcykgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbmFsRGF0YSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICduZXdJbmRpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBuZXdJbmRpY2VzLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvUG9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUudHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIHJvdy5xdWVyeVNlbGVjdG9yKCcuZHJhZy1oYW5kbGUnKSwgJ3NvcnRSb3dzJywgbnVsbCwgYWRkaXRpb25hbERhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic29ydGFibGVqc1wiICovICdzb3J0YWJsZWpzJykudGhlbihmdW5jdGlvbihTb3J0YWJsZSkge1xuICAgICAgICAgICAgICAgIGxldCBzb3J0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXVsdGktY29sdW1uLWVkaXRvci13cmFwcGVyIC5zb3J0YWJsZScpO1xuXG4gICAgICAgICAgICAgICAgc29ydGFibGVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBTb3J0YWJsZS5jcmVhdGUoaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2hhbmRsZSc6ICcuZHJhZy1oYW5kbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0luZGljZXMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MgPSBldmVudC5pdGVtLmNsb3Nlc3QoJy5yb3dzJykucXVlcnlTZWxlY3RvckFsbCgnLm1jZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzLnB1c2gocm93c1tpXS5kYXRhc2V0LmluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93c1tpXS5kYXRhc2V0LmluZGV4ICE9PSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNvcnRhYmxlcywgaXRlbSkgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb1Bvc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZGl0aW9uYWxEYXRhID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICduZXdJbmRpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IG5ld0luZGljZXMuam9pbignLCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9Qb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLnRyaWdnZXJBY3Rpb24oaXNCYWNrZW5kLCBldmVudC5pdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWhhbmRsZScpLCAnc29ydFJvd3MnLCBudWxsLCBhZGRpdGlvbmFsRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB0cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgbGluaywgYWN0aW9uLCB1cmwsIGFkZGl0aW9uYWxGb3JtRGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGZvcm0gPSBsaW5rLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGxldCBlZGl0b3IgPSBsaW5rLmNsb3Nlc3QoJy5tdWx0aS1jb2x1bW4tZWRpdG9yJyk7XG5cbiAgICAgICAgaWYgKG51bGwgPT09IHVybClcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsID0gZm9ybS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhlIHRpbnltY2VzJyB2YWx1ZXMgYmVjYXVzZSBsYXRlciBvbiB0aGV5IGdldCByZXNldHRlZFxuICAgICAgICBlZGl0b3IucXVlcnlTZWxlY3RvckFsbCgnLm1jZS10aW55bWNlICsgdGV4dGFyZWEnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy50aW55bWNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSB0aW55bWNlLmdldChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSkuZ2V0Q29udGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnaW5wdXRbbmFtZV06bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYVtuYW1lXTpub3QoW2Rpc2FibGVkXSksIHNlbGVjdFtuYW1lXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbltuYW1lXTpub3QoW2Rpc2FibGVkXSknLFxuICAgICAgICApLmZvckVhY2goZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBGT1JNX1NVQk1JVCAtPiBubyBzdWJtaXQgY2FsbGJhY2tzIHNob3VsZCBiZSBmaXJlZFxuICAgICAgICAgICAgaWYgKGlucHV0Lm5hbWUgIT09ICdGT1JNX1NVQk1JVCcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGlucHV0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoaW5wdXQubmFtZSwgaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoaW5wdXQubmFtZSwgaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJvdyA9IGxpbmsuY2xvc2VzdCgnLm1jZS1yb3cnKTtcblxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3JvdycsIHR5cGVvZiByb3cgIT09ICd1bmRlZmluZWQnICYmIHJvdyAhPT0gbnVsbCA/IHJvdy5kYXRhc2V0LmluZGV4IDogMCk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgnZmllbGQnLCBlZGl0b3IuZGF0YXNldC5maWVsZCk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgndGFibGUnLCBlZGl0b3IuZGF0YXNldC50YWJsZSk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgnYWN0aW9uJywgYWN0aW9uKTtcblxuICAgICAgICBpZiAodHlwZW9mIGFkZGl0aW9uYWxGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxGb3JtRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIEZPUk1fU1VCTUlUIC0+IG5vIHN1Ym1pdCBjYWxsYmFja3Mgc2hvdWxkIGJlIGZpcmVkXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0Lm5hbWUgIT09ICdGT1JNX1NVQk1JVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGN1c3RvbSBldmVudFxuICAgICAgICAgICAgICAgIGxldCBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpLFxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQ7XG5cbiAgICAgICAgICAgICAgICBjdXN0b21FdmVudC5pbml0RXZlbnQoJ2FqYXhTdWNjZXNzJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVubG9hZCB0aGUgdGlueW1jZSdzIC0+IGVsc2UgdGhlIG9uZXMgYWRkZWQgdmlhIGFqYXggd291bGRuJ3QgYmUgaW5pdGlhdGVkIGJlY2F1c2UgdGlueW1jZSB0aGlua3MgdGhleVxuICAgICAgICAgICAgICAgICAgICAvLyBhcmUgYWxyZWFkeSAoSUQgc2VlbXMgdG8gYmUgc3RvcmVkISlcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tY2UtdGlueW1jZSArIHRleHRhcmVhJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cudGlueW1jZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW55bWNlLmdldChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JhY2tlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnRzID0gcmVzcG9uc2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdEh0bWwgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0ID0gbGluay5jbG9zZXN0KCcud2lkZ2V0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSB0ZXh0cyBiZWNhdXNlIGFmdGVyIHJlcGxhY2luZyB0aGUgZG9tIGVsZW1lbnRzIGFyZSBnb25lXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtID0gMDsgbSA8IHNjcmlwdEVsZW1lbnRzLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0SHRtbC5wdXNoKHNjcmlwdEVsZW1lbnRzW21dLmlubmVySFRNTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xvc2VzdCgnLm11bHRpLWNvbHVtbi1lZGl0b3Itd3JhcHBlcicpLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnF1ZXJ5U2VsZWN0b3IoJy5tdWx0aS1jb2x1bW4tZWRpdG9yLXdyYXBwZXInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0Q2hvc2VuKHdpZGdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0U29ydGFibGUoaXNCYWNrZW5kKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzY3JpcHRIdG1sLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbChzY3JpcHRIdG1sW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbml0RXZlbnQoJ2FqYXhDb21wbGV0ZScsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pbm5lckhUTUwgPSBkYXRhLnJlc3VsdC5odG1sO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsb3Nlc3QoJy5tdWx0aS1jb2x1bW4tZWRpdG9yLXdyYXBwZXInKS5yZXBsYWNlV2l0aChyZXNwb25zZS5xdWVyeVNlbGVjdG9yKCcubXVsdGktY29sdW1uLWVkaXRvci13cmFwcGVyJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0U29ydGFibGUoaXNCYWNrZW5kKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRXZlbnQuaW5pdEV2ZW50KCdhamF4Q29tcGxldGUnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLmluaXQpO1xuXG4vLyBiYWNrZW5kIG9ubHlcbihmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hZGRFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnQoJ2RvbXJlYWR5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0Q2hvc2VuID0gZnVuY3Rpb24od2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdC50bF9jaG9zZW4nKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkJCgnIycgKyBlbC5nZXRBdHRyaWJ1dGUoJ2lkJykpLmNob3NlbigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnQoJ2FqYXhfY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pKCk7XG4iLCI7KGZ1bmN0aW9uKCl7dmFyIGg7ZnVuY3Rpb24gbChhKXt2YXIgYz0wO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBjPGEubGVuZ3RoP3tkb25lOiExLHZhbHVlOmFbYysrXX06e2RvbmU6ITB9fX12YXIgbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxjLGIpe2lmKGE9PUFycmF5LnByb3RvdHlwZXx8YT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4gYTthW2NdPWIudmFsdWU7cmV0dXJuIGF9O1xuZnVuY3Rpb24gbihhKXthPVtcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsVGhpcyYmZ2xvYmFsVGhpcyxhLFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdyxcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZixcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWxdO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7KytjKXt2YXIgYj1hW2NdO2lmKGImJmIuTWF0aD09TWF0aClyZXR1cm4gYn10aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIGdsb2JhbCBvYmplY3RcIik7fXZhciBwPW4odGhpcyk7ZnVuY3Rpb24gcihhLGMpe2lmKGMpe2Zvcih2YXIgYj1wLGQ9YS5zcGxpdChcIi5cIiksZT0wO2U8ZC5sZW5ndGgtMTtlKyspe3ZhciBmPWRbZV07ZiBpbiBifHwoYltmXT17fSk7Yj1iW2ZdfWQ9ZFtkLmxlbmd0aC0xXTtlPWJbZF07Zj1jKGUpO2YhPWUmJm51bGwhPWYmJm0oYixkLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Zn0pfX1cbnIoXCJTeW1ib2xcIixmdW5jdGlvbihhKXtmdW5jdGlvbiBjKGUpe2lmKHRoaXMgaW5zdGFuY2VvZiBjKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3JcIik7cmV0dXJuIG5ldyBiKFwianNjb21wX3N5bWJvbF9cIisoZXx8XCJcIikrXCJfXCIrZCsrLGUpfWZ1bmN0aW9uIGIoZSxmKXt0aGlzLm89ZTttKHRoaXMsXCJkZXNjcmlwdGlvblwiLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Zn0pfWlmKGEpcmV0dXJuIGE7Yi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vfTt2YXIgZD0wO3JldHVybiBjfSk7XG5yKFwiU3ltYm9sLml0ZXJhdG9yXCIsZnVuY3Rpb24oYSl7aWYoYSlyZXR1cm4gYTthPVN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKTtmb3IodmFyIGM9XCJBcnJheSBJbnQ4QXJyYXkgVWludDhBcnJheSBVaW50OENsYW1wZWRBcnJheSBJbnQxNkFycmF5IFVpbnQxNkFycmF5IEludDMyQXJyYXkgVWludDMyQXJyYXkgRmxvYXQzMkFycmF5IEZsb2F0NjRBcnJheVwiLnNwbGl0KFwiIFwiKSxiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPXBbY1tiXV07XCJmdW5jdGlvblwiPT09dHlwZW9mIGQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGQucHJvdG90eXBlW2FdJiZtKGQucHJvdG90eXBlLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB1KGwodGhpcykpfX0pfXJldHVybiBhfSk7ZnVuY3Rpb24gdShhKXthPXtuZXh0OmF9O2FbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gYX1cbmZ1bmN0aW9uIHYoYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yJiZhW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIGM/Yy5jYWxsKGEpOntuZXh0OmwoYSl9fXZhciB3O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5zZXRQcm90b3R5cGVPZil3PU9iamVjdC5zZXRQcm90b3R5cGVPZjtlbHNle3ZhciB5O2E6e3ZhciB6PXt1OiEwfSxBPXt9O3RyeXtBLl9fcHJvdG9fXz16O3k9QS51O2JyZWFrIGF9Y2F0Y2goYSl7fXk9ITF9dz15P2Z1bmN0aW9uKGEsYyl7YS5fX3Byb3RvX189YztpZihhLl9fcHJvdG9fXyE9PWMpdGhyb3cgbmV3IFR5cGVFcnJvcihhK1wiIGlzIG5vdCBleHRlbnNpYmxlXCIpO3JldHVybiBhfTpudWxsfXZhciBCPXc7ZnVuY3Rpb24gQygpe3RoaXMuaD0hMTt0aGlzLmY9bnVsbDt0aGlzLm09dm9pZCAwO3RoaXMuYj0xO3RoaXMubD10aGlzLnY9MDt0aGlzLmc9bnVsbH1cbmZ1bmN0aW9uIEQoYSl7aWYoYS5oKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO2EuaD0hMH1DLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe3RoaXMubT1hfTtDLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe3RoaXMuZz17dzphLEE6ITB9O3RoaXMuYj10aGlzLnZ8fHRoaXMubH07Qy5wcm90b3R5cGVbXCJyZXR1cm5cIl09ZnVuY3Rpb24oYSl7dGhpcy5nPXtcInJldHVyblwiOmF9O3RoaXMuYj10aGlzLmx9O2Z1bmN0aW9uIEUoYSxjKXthLmI9MztyZXR1cm57dmFsdWU6Y319ZnVuY3Rpb24gRihhKXt0aGlzLmE9bmV3IEM7dGhpcy5CPWF9Ri5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtEKHRoaXMuYSk7aWYodGhpcy5hLmYpcmV0dXJuIEcodGhpcyx0aGlzLmEuZi5uZXh0LGEsdGhpcy5hLmkpO3RoaXMuYS5pKGEpO3JldHVybiBIKHRoaXMpfTtcbmZ1bmN0aW9uIEkoYSxjKXtEKGEuYSk7dmFyIGI9YS5hLmY7aWYoYilyZXR1cm4gRyhhLFwicmV0dXJuXCJpbiBiP2JbXCJyZXR1cm5cIl06ZnVuY3Rpb24oZCl7cmV0dXJue3ZhbHVlOmQsZG9uZTohMH19LGMsYS5hW1wicmV0dXJuXCJdKTthLmFbXCJyZXR1cm5cIl0oYyk7cmV0dXJuIEgoYSl9Ri5wcm90b3R5cGUuaj1mdW5jdGlvbihhKXtEKHRoaXMuYSk7aWYodGhpcy5hLmYpcmV0dXJuIEcodGhpcyx0aGlzLmEuZltcInRocm93XCJdLGEsdGhpcy5hLmkpO3RoaXMuYS5qKGEpO3JldHVybiBIKHRoaXMpfTtcbmZ1bmN0aW9uIEcoYSxjLGIsZCl7dHJ5e3ZhciBlPWMuY2FsbChhLmEuZixiKTtpZighKGUgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJdGVyYXRvciByZXN1bHQgXCIrZStcIiBpcyBub3QgYW4gb2JqZWN0XCIpO2lmKCFlLmRvbmUpcmV0dXJuIGEuYS5oPSExLGU7dmFyIGY9ZS52YWx1ZX1jYXRjaChnKXtyZXR1cm4gYS5hLmY9bnVsbCxhLmEuaihnKSxIKGEpfWEuYS5mPW51bGw7ZC5jYWxsKGEuYSxmKTtyZXR1cm4gSChhKX1mdW5jdGlvbiBIKGEpe2Zvcig7YS5hLmI7KXRyeXt2YXIgYz1hLkIoYS5hKTtpZihjKXJldHVybiBhLmEuaD0hMSx7dmFsdWU6Yy52YWx1ZSxkb25lOiExfX1jYXRjaChiKXthLmEubT12b2lkIDAsYS5hLmooYil9YS5hLmg9ITE7aWYoYS5hLmcpe2M9YS5hLmc7YS5hLmc9bnVsbDtpZihjLkEpdGhyb3cgYy53O3JldHVybnt2YWx1ZTpjW1wicmV0dXJuXCJdLGRvbmU6ITB9fXJldHVybnt2YWx1ZTp2b2lkIDAsZG9uZTohMH19XG5mdW5jdGlvbiBKKGEpe3RoaXMubmV4dD1mdW5jdGlvbihjKXtyZXR1cm4gYS5pKGMpfTt0aGlzW1widGhyb3dcIl09ZnVuY3Rpb24oYyl7cmV0dXJuIGEuaihjKX07dGhpc1tcInJldHVyblwiXT1mdW5jdGlvbihjKXtyZXR1cm4gSShhLGMpfTt0aGlzW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc319ZnVuY3Rpb24gSyhhLGMpe3ZhciBiPW5ldyBKKG5ldyBGKGMpKTtCJiZCKGIsYS5wcm90b3R5cGUpO3JldHVybiBifVxuaWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBCbG9iJiYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBGb3JtRGF0YXx8IUZvcm1EYXRhLnByb3RvdHlwZS5rZXlzKSl7dmFyIEw9ZnVuY3Rpb24oYSxjKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyljKGFbYl0pfSxNPWZ1bmN0aW9uKGEsYyxiKXtyZXR1cm4gYyBpbnN0YW5jZW9mIEJsb2I/W1N0cmluZyhhKSxjLHZvaWQgMCE9PWI/YitcIlwiOlwic3RyaW5nXCI9PT10eXBlb2YgYy5uYW1lP2MubmFtZTpcImJsb2JcIl06W1N0cmluZyhhKSxTdHJpbmcoYyldfSxOPWZ1bmN0aW9uKGEsYyl7aWYoYS5sZW5ndGg8Yyl0aHJvdyBuZXcgVHlwZUVycm9yKGMrXCIgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IFwiK2EubGVuZ3RoK1wiIHByZXNlbnQuXCIpO30sTz1mdW5jdGlvbihhKXt2YXIgYz12KGEpO2E9Yy5uZXh0KCkudmFsdWU7dmFyIGI9Yy5uZXh0KCkudmFsdWU7Yz1jLm5leHQoKS52YWx1ZTtiIGluc3RhbmNlb2YgQmxvYiYmKGI9bmV3IEZpbGUoW2JdLFxuYyx7dHlwZTpiLnR5cGUsbGFzdE1vZGlmaWVkOmIubGFzdE1vZGlmaWVkfSkpO3JldHVyblthLGJdfSxQPVwib2JqZWN0XCI9PT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOlwib2JqZWN0XCI9PT10eXBlb2Ygd2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT09dHlwZW9mIHNlbGY/c2VsZjp0aGlzLFE9UC5Gb3JtRGF0YSxSPVAuWE1MSHR0cFJlcXVlc3QmJlAuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQsUz1QLlJlcXVlc3QmJlAuZmV0Y2gsVD1QLm5hdmlnYXRvciYmUC5uYXZpZ2F0b3Iuc2VuZEJlYWNvbixVPVAuRWxlbWVudCYmUC5FbGVtZW50LnByb3RvdHlwZSxWPVAuU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWc7ViYmKEJsb2IucHJvdG90eXBlW1ZdfHwoQmxvYi5wcm90b3R5cGVbVl09XCJCbG9iXCIpLFwiRmlsZVwiaW4gUCYmIUZpbGUucHJvdG90eXBlW1ZdJiYoRmlsZS5wcm90b3R5cGVbVl09XCJGaWxlXCIpKTt0cnl7bmV3IEZpbGUoW10sXCJcIil9Y2F0Y2goYSl7UC5GaWxlPWZ1bmN0aW9uKGMsXG5iLGQpe2M9bmV3IEJsb2IoYyxkKTtkPWQmJnZvaWQgMCE9PWQubGFzdE1vZGlmaWVkP25ldyBEYXRlKGQubGFzdE1vZGlmaWVkKTpuZXcgRGF0ZTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjLHtuYW1lOnt2YWx1ZTpifSxsYXN0TW9kaWZpZWREYXRlOnt2YWx1ZTpkfSxsYXN0TW9kaWZpZWQ6e3ZhbHVlOitkfSx0b1N0cmluZzp7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgRmlsZV1cIn19fSk7ViYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGMsVix7dmFsdWU6XCJGaWxlXCJ9KTtyZXR1cm4gY319dmFyIFc9ZnVuY3Rpb24oYSl7dGhpcy5jPVtdO3ZhciBjPXRoaXM7YSYmTChhLmVsZW1lbnRzLGZ1bmN0aW9uKGIpe2lmKGIubmFtZSYmIWIuZGlzYWJsZWQmJlwic3VibWl0XCIhPT1iLnR5cGUmJlwiYnV0dG9uXCIhPT1iLnR5cGUmJiFiLm1hdGNoZXMoXCJmb3JtIGZpZWxkc2V0W2Rpc2FibGVkXSAqXCIpKWlmKFwiZmlsZVwiPT09Yi50eXBlKXt2YXIgZD1iLmZpbGVzJiZiLmZpbGVzLmxlbmd0aD9cbmIuZmlsZXM6W25ldyBGaWxlKFtdLFwiXCIse3R5cGU6XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn0pXTtMKGQsZnVuY3Rpb24oZSl7Yy5hcHBlbmQoYi5uYW1lLGUpfSl9ZWxzZVwic2VsZWN0LW11bHRpcGxlXCI9PT1iLnR5cGV8fFwic2VsZWN0LW9uZVwiPT09Yi50eXBlP0woYi5vcHRpb25zLGZ1bmN0aW9uKGUpeyFlLmRpc2FibGVkJiZlLnNlbGVjdGVkJiZjLmFwcGVuZChiLm5hbWUsZS52YWx1ZSl9KTpcImNoZWNrYm94XCI9PT1iLnR5cGV8fFwicmFkaW9cIj09PWIudHlwZT9iLmNoZWNrZWQmJmMuYXBwZW5kKGIubmFtZSxiLnZhbHVlKTooZD1cInRleHRhcmVhXCI9PT1iLnR5cGU/Yi52YWx1ZS5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKS5yZXBsYWNlKC9cXG4vZyxcIlxcclxcblwiKTpiLnZhbHVlLGMuYXBwZW5kKGIubmFtZSxkKSl9KX07aD1XLnByb3RvdHlwZTtoLmFwcGVuZD1mdW5jdGlvbihhLGMsYil7Tihhcmd1bWVudHMsMik7dGhpcy5jLnB1c2goTShhLGMsYikpfTtoW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKGEpe04oYXJndW1lbnRzLFxuMSk7dmFyIGM9W107YT1TdHJpbmcoYSk7TCh0aGlzLmMsZnVuY3Rpb24oYil7YlswXSE9PWEmJmMucHVzaChiKX0pO3RoaXMuYz1jfTtoLmVudHJpZXM9ZnVuY3Rpb24gYygpe3ZhciBiLGQ9dGhpcztyZXR1cm4gSyhjLGZ1bmN0aW9uKGUpezE9PWUuYiYmKGI9MCk7aWYoMyE9ZS5iKXJldHVybiBiPGQuYy5sZW5ndGg/ZT1FKGUsTyhkLmNbYl0pKTooZS5iPTAsZT12b2lkIDApLGU7YisrO2UuYj0yfSl9O2guZm9yRWFjaD1mdW5jdGlvbihjLGIpe04oYXJndW1lbnRzLDEpO2Zvcih2YXIgZD12KHRoaXMpLGU9ZC5uZXh0KCk7IWUuZG9uZTtlPWQubmV4dCgpKXt2YXIgZj12KGUudmFsdWUpO2U9Zi5uZXh0KCkudmFsdWU7Zj1mLm5leHQoKS52YWx1ZTtjLmNhbGwoYixmLGUsdGhpcyl9fTtoLmdldD1mdW5jdGlvbihjKXtOKGFyZ3VtZW50cywxKTt2YXIgYj10aGlzLmM7Yz1TdHJpbmcoYyk7Zm9yKHZhciBkPTA7ZDxiLmxlbmd0aDtkKyspaWYoYltkXVswXT09PWMpcmV0dXJuIE8oYltkXSlbMV07XG5yZXR1cm4gbnVsbH07aC5nZXRBbGw9ZnVuY3Rpb24oYyl7Tihhcmd1bWVudHMsMSk7dmFyIGI9W107Yz1TdHJpbmcoYyk7TCh0aGlzLmMsZnVuY3Rpb24oZCl7ZFswXT09PWMmJmIucHVzaChPKGQpWzFdKX0pO3JldHVybiBifTtoLmhhcz1mdW5jdGlvbihjKXtOKGFyZ3VtZW50cywxKTtjPVN0cmluZyhjKTtmb3IodmFyIGI9MDtiPHRoaXMuYy5sZW5ndGg7YisrKWlmKHRoaXMuY1tiXVswXT09PWMpcmV0dXJuITA7cmV0dXJuITF9O2gua2V5cz1mdW5jdGlvbiBiKCl7dmFyIGQ9dGhpcyxlLGYsZyxrLHE7cmV0dXJuIEsoYixmdW5jdGlvbih0KXsxPT10LmImJihlPXYoZCksZj1lLm5leHQoKSk7aWYoMyE9dC5iKXtpZihmLmRvbmUpe3QuYj0wO3JldHVybn1nPWYudmFsdWU7az12KGcpO3E9ay5uZXh0KCkudmFsdWU7cmV0dXJuIEUodCxxKX1mPWUubmV4dCgpO3QuYj0yfSl9O2guc2V0PWZ1bmN0aW9uKGIsZCxlKXtOKGFyZ3VtZW50cywyKTtiPVN0cmluZyhiKTt2YXIgZj1bXSxnPU0oYixcbmQsZSksaz0hMDtMKHRoaXMuYyxmdW5jdGlvbihxKXtxWzBdPT09Yj9rJiYoaz0hZi5wdXNoKGcpKTpmLnB1c2gocSl9KTtrJiZmLnB1c2goZyk7dGhpcy5jPWZ9O2gudmFsdWVzPWZ1bmN0aW9uIGQoKXt2YXIgZT10aGlzLGYsZyxrLHEsdDtyZXR1cm4gSyhkLGZ1bmN0aW9uKHgpezE9PXguYiYmKGY9dihlKSxnPWYubmV4dCgpKTtpZigzIT14LmIpe2lmKGcuZG9uZSl7eC5iPTA7cmV0dXJufWs9Zy52YWx1ZTtxPXYoayk7cS5uZXh0KCk7dD1xLm5leHQoKS52YWx1ZTtyZXR1cm4gRSh4LHQpfWc9Zi5uZXh0KCk7eC5iPTJ9KX07Vy5wcm90b3R5cGUuX2FzTmF0aXZlPWZ1bmN0aW9uKCl7Zm9yKHZhciBkPW5ldyBRLGU9dih0aGlzKSxmPWUubmV4dCgpOyFmLmRvbmU7Zj1lLm5leHQoKSl7dmFyIGc9dihmLnZhbHVlKTtmPWcubmV4dCgpLnZhbHVlO2c9Zy5uZXh0KCkudmFsdWU7ZC5hcHBlbmQoZixnKX1yZXR1cm4gZH07Vy5wcm90b3R5cGUuX2Jsb2I9ZnVuY3Rpb24oKXtmb3IodmFyIGQ9XG5cIi0tLS1mb3JtZGF0YS1wb2x5ZmlsbC1cIitNYXRoLnJhbmRvbSgpLGU9W10sZj12KHRoaXMpLGc9Zi5uZXh0KCk7IWcuZG9uZTtnPWYubmV4dCgpKXt2YXIgaz12KGcudmFsdWUpO2c9ay5uZXh0KCkudmFsdWU7az1rLm5leHQoKS52YWx1ZTtlLnB1c2goXCItLVwiK2QrXCJcXHJcXG5cIik7ayBpbnN0YW5jZW9mIEJsb2I/ZS5wdXNoKCdDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInK2crJ1wiOyBmaWxlbmFtZT1cIicray5uYW1lKydcIlxcclxcbkNvbnRlbnQtVHlwZTogJysoKGsudHlwZXx8XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIikrXCJcXHJcXG5cXHJcXG5cIiksayxcIlxcclxcblwiKTplLnB1c2goJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicrZysnXCJcXHJcXG5cXHJcXG4nK2srXCJcXHJcXG5cIil9ZS5wdXNoKFwiLS1cIitkK1wiLS1cIik7cmV0dXJuIG5ldyBCbG9iKGUse3R5cGU6XCJtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT1cIitkfSl9O1cucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl09XG5mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX07Vy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgRm9ybURhdGFdXCJ9O1UmJiFVLm1hdGNoZXMmJihVLm1hdGNoZXM9VS5tYXRjaGVzU2VsZWN0b3J8fFUubW96TWF0Y2hlc1NlbGVjdG9yfHxVLm1zTWF0Y2hlc1NlbGVjdG9yfHxVLm9NYXRjaGVzU2VsZWN0b3J8fFUud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxmdW5jdGlvbihkKXtkPSh0aGlzLmRvY3VtZW50fHx0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoZCk7Zm9yKHZhciBlPWQubGVuZ3RoOzA8PS0tZSYmZC5pdGVtKGUpIT09dGhpczspO3JldHVybi0xPGV9KTtWJiYoVy5wcm90b3R5cGVbVl09XCJGb3JtRGF0YVwiKTtpZihSKXt2YXIgWD1QLlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyO1AuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXI9ZnVuY3Rpb24oZCxlKXtYLmNhbGwodGhpcyxcbmQsZSk7XCJjb250ZW50LXR5cGVcIj09PWQudG9Mb3dlckNhc2UoKSYmKHRoaXMucz0hMCl9O1AuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oZCl7ZCBpbnN0YW5jZW9mIFc/KGQ9ZC5fYmxvYigpLHRoaXMuc3x8dGhpcy5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsZC50eXBlKSxSLmNhbGwodGhpcyxkKSk6Ui5jYWxsKHRoaXMsZCl9fVMmJihQLmZldGNoPWZ1bmN0aW9uKGQsZSl7ZSYmZS5ib2R5JiZlLmJvZHkgaW5zdGFuY2VvZiBXJiYoZS5ib2R5PWUuYm9keS5fYmxvYigpKTtyZXR1cm4gUy5jYWxsKHRoaXMsZCxlKX0pO1QmJihQLm5hdmlnYXRvci5zZW5kQmVhY29uPWZ1bmN0aW9uKGQsZSl7ZSBpbnN0YW5jZW9mIFcmJihlPWUuX2FzTmF0aXZlKCkpO3JldHVybiBULmNhbGwodGhpcyxkLGUpfSk7UC5Gb3JtRGF0YT1XfTtcbn0pKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNvcnRhYmxlOyJdLCJzb3VyY2VSb290IjoiIn0=