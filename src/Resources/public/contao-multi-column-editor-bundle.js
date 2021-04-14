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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Resources/assets/js/contao-multi-column-editor-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/Resources/assets/js/contao-multi-column-editor-bundle.js":
/*!**********************************************************************!*\
  !*** ./src/Resources/assets/js/contao-multi-column-editor-bundle.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_package_js_contao_multi_column_editor_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../npm-package/js/contao-multi-column-editor-bundle */ "./src/Resources/npm-package/js/contao-multi-column-editor-bundle.js");


/***/ }),

/***/ "./src/Resources/npm-package/js/contao-multi-column-editor-bundle.js":
/*!***************************************************************************!*\
  !*** ./src/Resources/npm-package/js/contao-multi-column-editor-bundle.js ***!
  \***************************************************************************/
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
              MultiColumnEditorBundle.initTooltip(widget); // TODO hide Contao.tips of current link

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

      MultiColumnEditorBundle.initTooltip = function (widget) {
        widget.querySelectorAll('a[title]').forEach(function (el) {
          new Tips.Contao($$(el).filter(function (i) {
            return i.title != '';
          }), {
            offset: {
              x: 0,
              y: 30
            }
          });
        });
      };
    });
    window.addEvent('ajax_change', function () {
      MultiColumnEditorBundle.init();
    });
  }
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm1kYXRhLXBvbHlmaWxsL2Zvcm1kYXRhLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL25wbS1wYWNrYWdlL2pzL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJTb3J0YWJsZVwiIl0sIm5hbWVzIjpbIk11bHRpQ29sdW1uRWRpdG9yQnVuZGxlIiwibWNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaXNCYWNrZW5kIiwiZGF0YXNldCIsImVudiIsInV0aWxzQnVuZGxlIiwiZXZlbnQiLCJhZGREeW5hbWljRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXJBY3Rpb24iLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiaW5pdFNvcnRhYmxlIiwiU29ydGFibGVzIiwiY29uc3RyYWluIiwib3BhY2l0eSIsImhhbmRsZSIsIm9uQ29tcGxldGUiLCJyb3ciLCJuZXdJbmRpY2VzIiwiZG9Qb3N0Iiwicm93cyIsImNsb3Nlc3QiLCJpIiwicHVzaCIsImluZGV4Iiwic2xpY2UiLCJjYWxsIiwiaW5kZXhPZiIsImFkZGl0aW9uYWxEYXRhIiwiam9pbiIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiU29ydGFibGUiLCJzb3J0YWJsZXMiLCJmb3JFYWNoIiwiY3JlYXRlIiwib25FbmQiLCJBcnJheSIsInByb3RvdHlwZSIsImxpbmsiLCJhY3Rpb24iLCJ1cmwiLCJhZGRpdGlvbmFsRm9ybURhdGEiLCJjYWxsYmFjayIsImZvcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZWRpdG9yIiwiZWxlbWVudCIsIndpbmRvdyIsInRpbnltY2UiLCJ2YWx1ZSIsImdldCIsImdldENvbnRlbnQiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwiYXBwZW5kIiwiY2hlY2tlZCIsInNldCIsImZpZWxkIiwidGFibGUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJjdXN0b21FdmVudCIsImNyZWF0ZUV2ZW50Iiwid2lkZ2V0IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInN0YXR1cyIsInJlbW92ZSIsInJlc3BvbnNlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsInNjcmlwdEVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHRIdG1sIiwibSIsInJlcGxhY2VXaXRoIiwiaW5pdENob3NlbiIsImluaXRUb29sdGlwIiwibiIsImV2YWwiLCJhcHBseSIsImFyZ3VtZW50cyIsImUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzdWx0IiwiaHRtbCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJlbCIsIiQkIiwiY2hvc2VuIiwiVGlwcyIsIkNvbnRhbyIsImZpbHRlciIsInRpdGxlIiwib2Zmc2V0IiwieCIsInkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EsMENBQTBDO1FBQzFDOztRQUVBO1FBQ0E7O1FB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bERBLGNBQU0sQ0FBQ3RFLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0Q29DLE9BQTVDLENBQW9ELFVBQUNrRSxFQUFELEVBQVE7QUFDeERDLFlBQUUsQ0FBQyxNQUFNRCxFQUFFLENBQUMxRixZQUFILENBQWdCLElBQWhCLENBQVAsQ0FBRixDQUFnQzRGLE1BQWhDO0FBQ0gsU0FGRDtBQUdILE9BSkQ7O0FBS0EzRyw2QkFBdUIsQ0FBQ3dGLFdBQXhCLEdBQXNDLFVBQVVmLE1BQVYsRUFBa0I7QUFDcERBLGNBQU0sQ0FBQ3RFLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9Db0MsT0FBcEMsQ0FBNEMsVUFBVWtFLEVBQVYsRUFBYztBQUN0RCxjQUFJRyxJQUFJLENBQUNDLE1BQVQsQ0FBZ0JILEVBQUUsQ0FBQ0QsRUFBRCxDQUFGLENBQU9LLE1BQVAsQ0FBYyxVQUFTbkYsQ0FBVCxFQUFZO0FBQ3RDLG1CQUFPQSxDQUFDLENBQUNvRixLQUFGLElBQVcsRUFBbEI7QUFDSCxXQUZlLENBQWhCLEVBRUk7QUFDQUMsa0JBQU0sRUFBRTtBQUFDQyxlQUFDLEVBQUMsQ0FBSDtBQUFNQyxlQUFDLEVBQUM7QUFBUjtBQURSLFdBRko7QUFLSCxTQU5EO0FBT0gsT0FSRDtBQVNILEtBZkQ7QUFpQkE1RCxVQUFNLENBQUNrRCxRQUFQLENBQWdCLGFBQWhCLEVBQStCLFlBQVc7QUFDdEN4Ryw2QkFBdUIsQ0FBQ3VHLElBQXhCO0FBQ0gsS0FGRDtBQUdIO0FBQ0osQ0F2QkQsSTs7Ozs7Ozs7Ozs7QUNyUEEsMEIiLCJmaWxlIjoiY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGVcIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVuZGxlcy9oZWltcmljaGhhbm5vdGNvbnRhb211bHRpY29sdW1uZWRpdG9yL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS5qc1wiKTtcbiIsIjsoZnVuY3Rpb24oKXt2YXIgaDtmdW5jdGlvbiBsKGEpe3ZhciBjPTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGM8YS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6YVtjKytdfTp7ZG9uZTohMH19fXZhciBtPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihhLGMsYil7aWYoYT09QXJyYXkucHJvdG90eXBlfHxhPT1PYmplY3QucHJvdG90eXBlKXJldHVybiBhO2FbY109Yi52YWx1ZTtyZXR1cm4gYX07XG5mdW5jdGlvbiBuKGEpe2E9W1wib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWxUaGlzJiZnbG9iYWxUaGlzLGEsXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LFwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbF07Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDsrK2Mpe3ZhciBiPWFbY107aWYoYiYmYi5NYXRoPT1NYXRoKXJldHVybiBifXRocm93IEVycm9yKFwiQ2Fubm90IGZpbmQgZ2xvYmFsIG9iamVjdFwiKTt9dmFyIHA9bih0aGlzKTtmdW5jdGlvbiByKGEsYyl7aWYoYyl7Zm9yKHZhciBiPXAsZD1hLnNwbGl0KFwiLlwiKSxlPTA7ZTxkLmxlbmd0aC0xO2UrKyl7dmFyIGY9ZFtlXTtmIGluIGJ8fChiW2ZdPXt9KTtiPWJbZl19ZD1kW2QubGVuZ3RoLTFdO2U9YltkXTtmPWMoZSk7ZiE9ZSYmbnVsbCE9ZiYmbShiLGQse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmfSl9fVxucihcIlN5bWJvbFwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGMoZSl7aWYodGhpcyBpbnN0YW5jZW9mIGMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvclwiKTtyZXR1cm4gbmV3IGIoXCJqc2NvbXBfc3ltYm9sX1wiKyhlfHxcIlwiKStcIl9cIitkKyssZSl9ZnVuY3Rpb24gYihlLGYpe3RoaXMubz1lO20odGhpcyxcImRlc2NyaXB0aW9uXCIse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmfSl9aWYoYSlyZXR1cm4gYTtiLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm99O3ZhciBkPTA7cmV0dXJuIGN9KTtcbnIoXCJTeW1ib2wuaXRlcmF0b3JcIixmdW5jdGlvbihhKXtpZihhKXJldHVybiBhO2E9U3ltYm9sKFwiU3ltYm9sLml0ZXJhdG9yXCIpO2Zvcih2YXIgYz1cIkFycmF5IEludDhBcnJheSBVaW50OEFycmF5IFVpbnQ4Q2xhbXBlZEFycmF5IEludDE2QXJyYXkgVWludDE2QXJyYXkgSW50MzJBcnJheSBVaW50MzJBcnJheSBGbG9hdDMyQXJyYXkgRmxvYXQ2NEFycmF5XCIuc3BsaXQoXCIgXCIpLGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9cFtjW2JdXTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCYmXCJmdW5jdGlvblwiIT10eXBlb2YgZC5wcm90b3R5cGVbYV0mJm0oZC5wcm90b3R5cGUsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHUobCh0aGlzKSl9fSl9cmV0dXJuIGF9KTtmdW5jdGlvbiB1KGEpe2E9e25leHQ6YX07YVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBhfVxuZnVuY3Rpb24gdihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3ImJmFbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gYz9jLmNhbGwoYSk6e25leHQ6bChhKX19dmFyIHc7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mKXc9T2JqZWN0LnNldFByb3RvdHlwZU9mO2Vsc2V7dmFyIHk7YTp7dmFyIHo9e3U6ITB9LEE9e307dHJ5e0EuX19wcm90b19fPXo7eT1BLnU7YnJlYWsgYX1jYXRjaChhKXt9eT0hMX13PXk/ZnVuY3Rpb24oYSxjKXthLl9fcHJvdG9fXz1jO2lmKGEuX19wcm90b19fIT09Yyl0aHJvdyBuZXcgVHlwZUVycm9yKGErXCIgaXMgbm90IGV4dGVuc2libGVcIik7cmV0dXJuIGF9Om51bGx9dmFyIEI9dztmdW5jdGlvbiBDKCl7dGhpcy5oPSExO3RoaXMuZj1udWxsO3RoaXMubT12b2lkIDA7dGhpcy5iPTE7dGhpcy5sPXRoaXMudj0wO3RoaXMuZz1udWxsfVxuZnVuY3Rpb24gRChhKXtpZihhLmgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7YS5oPSEwfUMucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7dGhpcy5tPWF9O0MucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7dGhpcy5nPXt3OmEsQTohMH07dGhpcy5iPXRoaXMudnx8dGhpcy5sfTtDLnByb3RvdHlwZVtcInJldHVyblwiXT1mdW5jdGlvbihhKXt0aGlzLmc9e1wicmV0dXJuXCI6YX07dGhpcy5iPXRoaXMubH07ZnVuY3Rpb24gRShhLGMpe2EuYj0zO3JldHVybnt2YWx1ZTpjfX1mdW5jdGlvbiBGKGEpe3RoaXMuYT1uZXcgQzt0aGlzLkI9YX1GLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe0QodGhpcy5hKTtpZih0aGlzLmEuZilyZXR1cm4gRyh0aGlzLHRoaXMuYS5mLm5leHQsYSx0aGlzLmEuaSk7dGhpcy5hLmkoYSk7cmV0dXJuIEgodGhpcyl9O1xuZnVuY3Rpb24gSShhLGMpe0QoYS5hKTt2YXIgYj1hLmEuZjtpZihiKXJldHVybiBHKGEsXCJyZXR1cm5cImluIGI/YltcInJldHVyblwiXTpmdW5jdGlvbihkKXtyZXR1cm57dmFsdWU6ZCxkb25lOiEwfX0sYyxhLmFbXCJyZXR1cm5cIl0pO2EuYVtcInJldHVyblwiXShjKTtyZXR1cm4gSChhKX1GLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe0QodGhpcy5hKTtpZih0aGlzLmEuZilyZXR1cm4gRyh0aGlzLHRoaXMuYS5mW1widGhyb3dcIl0sYSx0aGlzLmEuaSk7dGhpcy5hLmooYSk7cmV0dXJuIEgodGhpcyl9O1xuZnVuY3Rpb24gRyhhLGMsYixkKXt0cnl7dmFyIGU9Yy5jYWxsKGEuYS5mLGIpO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkl0ZXJhdG9yIHJlc3VsdCBcIitlK1wiIGlzIG5vdCBhbiBvYmplY3RcIik7aWYoIWUuZG9uZSlyZXR1cm4gYS5hLmg9ITEsZTt2YXIgZj1lLnZhbHVlfWNhdGNoKGcpe3JldHVybiBhLmEuZj1udWxsLGEuYS5qKGcpLEgoYSl9YS5hLmY9bnVsbDtkLmNhbGwoYS5hLGYpO3JldHVybiBIKGEpfWZ1bmN0aW9uIEgoYSl7Zm9yKDthLmEuYjspdHJ5e3ZhciBjPWEuQihhLmEpO2lmKGMpcmV0dXJuIGEuYS5oPSExLHt2YWx1ZTpjLnZhbHVlLGRvbmU6ITF9fWNhdGNoKGIpe2EuYS5tPXZvaWQgMCxhLmEuaihiKX1hLmEuaD0hMTtpZihhLmEuZyl7Yz1hLmEuZzthLmEuZz1udWxsO2lmKGMuQSl0aHJvdyBjLnc7cmV0dXJue3ZhbHVlOmNbXCJyZXR1cm5cIl0sZG9uZTohMH19cmV0dXJue3ZhbHVlOnZvaWQgMCxkb25lOiEwfX1cbmZ1bmN0aW9uIEooYSl7dGhpcy5uZXh0PWZ1bmN0aW9uKGMpe3JldHVybiBhLmkoYyl9O3RoaXNbXCJ0aHJvd1wiXT1mdW5jdGlvbihjKXtyZXR1cm4gYS5qKGMpfTt0aGlzW1wicmV0dXJuXCJdPWZ1bmN0aW9uKGMpe3JldHVybiBJKGEsYyl9O3RoaXNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfX1mdW5jdGlvbiBLKGEsYyl7dmFyIGI9bmV3IEoobmV3IEYoYykpO0ImJkIoYixhLnByb3RvdHlwZSk7cmV0dXJuIGJ9XG5pZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIEJsb2ImJihcInVuZGVmaW5lZFwiPT09dHlwZW9mIEZvcm1EYXRhfHwhRm9ybURhdGEucHJvdG90eXBlLmtleXMpKXt2YXIgTD1mdW5jdGlvbihhLGMpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKWMoYVtiXSl9LE09ZnVuY3Rpb24oYSxjLGIpe3JldHVybiBjIGluc3RhbmNlb2YgQmxvYj9bU3RyaW5nKGEpLGMsdm9pZCAwIT09Yj9iK1wiXCI6XCJzdHJpbmdcIj09PXR5cGVvZiBjLm5hbWU/Yy5uYW1lOlwiYmxvYlwiXTpbU3RyaW5nKGEpLFN0cmluZyhjKV19LE49ZnVuY3Rpb24oYSxjKXtpZihhLmxlbmd0aDxjKXRocm93IG5ldyBUeXBlRXJyb3IoYytcIiBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgXCIrYS5sZW5ndGgrXCIgcHJlc2VudC5cIik7fSxPPWZ1bmN0aW9uKGEpe3ZhciBjPXYoYSk7YT1jLm5leHQoKS52YWx1ZTt2YXIgYj1jLm5leHQoKS52YWx1ZTtjPWMubmV4dCgpLnZhbHVlO2IgaW5zdGFuY2VvZiBCbG9iJiYoYj1uZXcgRmlsZShbYl0sXG5jLHt0eXBlOmIudHlwZSxsYXN0TW9kaWZpZWQ6Yi5sYXN0TW9kaWZpZWR9KSk7cmV0dXJuW2EsYl19LFA9XCJvYmplY3RcIj09PXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6XCJvYmplY3RcIj09PXR5cGVvZiB3aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsUT1QLkZvcm1EYXRhLFI9UC5YTUxIdHRwUmVxdWVzdCYmUC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCxTPVAuUmVxdWVzdCYmUC5mZXRjaCxUPVAubmF2aWdhdG9yJiZQLm5hdmlnYXRvci5zZW5kQmVhY29uLFU9UC5FbGVtZW50JiZQLkVsZW1lbnQucHJvdG90eXBlLFY9UC5TeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZztWJiYoQmxvYi5wcm90b3R5cGVbVl18fChCbG9iLnByb3RvdHlwZVtWXT1cIkJsb2JcIiksXCJGaWxlXCJpbiBQJiYhRmlsZS5wcm90b3R5cGVbVl0mJihGaWxlLnByb3RvdHlwZVtWXT1cIkZpbGVcIikpO3RyeXtuZXcgRmlsZShbXSxcIlwiKX1jYXRjaChhKXtQLkZpbGU9ZnVuY3Rpb24oYyxcbmIsZCl7Yz1uZXcgQmxvYihjLGQpO2Q9ZCYmdm9pZCAwIT09ZC5sYXN0TW9kaWZpZWQ/bmV3IERhdGUoZC5sYXN0TW9kaWZpZWQpOm5ldyBEYXRlO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGMse25hbWU6e3ZhbHVlOmJ9LGxhc3RNb2RpZmllZERhdGU6e3ZhbHVlOmR9LGxhc3RNb2RpZmllZDp7dmFsdWU6K2R9LHRvU3RyaW5nOnt2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBGaWxlXVwifX19KTtWJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYyxWLHt2YWx1ZTpcIkZpbGVcIn0pO3JldHVybiBjfX12YXIgVz1mdW5jdGlvbihhKXt0aGlzLmM9W107dmFyIGM9dGhpczthJiZMKGEuZWxlbWVudHMsZnVuY3Rpb24oYil7aWYoYi5uYW1lJiYhYi5kaXNhYmxlZCYmXCJzdWJtaXRcIiE9PWIudHlwZSYmXCJidXR0b25cIiE9PWIudHlwZSYmIWIubWF0Y2hlcyhcImZvcm0gZmllbGRzZXRbZGlzYWJsZWRdICpcIikpaWYoXCJmaWxlXCI9PT1iLnR5cGUpe3ZhciBkPWIuZmlsZXMmJmIuZmlsZXMubGVuZ3RoP1xuYi5maWxlczpbbmV3IEZpbGUoW10sXCJcIix7dHlwZTpcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwifSldO0woZCxmdW5jdGlvbihlKXtjLmFwcGVuZChiLm5hbWUsZSl9KX1lbHNlXCJzZWxlY3QtbXVsdGlwbGVcIj09PWIudHlwZXx8XCJzZWxlY3Qtb25lXCI9PT1iLnR5cGU/TChiLm9wdGlvbnMsZnVuY3Rpb24oZSl7IWUuZGlzYWJsZWQmJmUuc2VsZWN0ZWQmJmMuYXBwZW5kKGIubmFtZSxlLnZhbHVlKX0pOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP2IuY2hlY2tlZCYmYy5hcHBlbmQoYi5uYW1lLGIudmFsdWUpOihkPVwidGV4dGFyZWFcIj09PWIudHlwZT9iLnZhbHVlLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpLnJlcGxhY2UoL1xcbi9nLFwiXFxyXFxuXCIpOmIudmFsdWUsYy5hcHBlbmQoYi5uYW1lLGQpKX0pfTtoPVcucHJvdG90eXBlO2guYXBwZW5kPWZ1bmN0aW9uKGEsYyxiKXtOKGFyZ3VtZW50cywyKTt0aGlzLmMucHVzaChNKGEsYyxiKSl9O2hbXCJkZWxldGVcIl09ZnVuY3Rpb24oYSl7Tihhcmd1bWVudHMsXG4xKTt2YXIgYz1bXTthPVN0cmluZyhhKTtMKHRoaXMuYyxmdW5jdGlvbihiKXtiWzBdIT09YSYmYy5wdXNoKGIpfSk7dGhpcy5jPWN9O2guZW50cmllcz1mdW5jdGlvbiBjKCl7dmFyIGIsZD10aGlzO3JldHVybiBLKGMsZnVuY3Rpb24oZSl7MT09ZS5iJiYoYj0wKTtpZigzIT1lLmIpcmV0dXJuIGI8ZC5jLmxlbmd0aD9lPUUoZSxPKGQuY1tiXSkpOihlLmI9MCxlPXZvaWQgMCksZTtiKys7ZS5iPTJ9KX07aC5mb3JFYWNoPWZ1bmN0aW9uKGMsYil7Tihhcmd1bWVudHMsMSk7Zm9yKHZhciBkPXYodGhpcyksZT1kLm5leHQoKTshZS5kb25lO2U9ZC5uZXh0KCkpe3ZhciBmPXYoZS52YWx1ZSk7ZT1mLm5leHQoKS52YWx1ZTtmPWYubmV4dCgpLnZhbHVlO2MuY2FsbChiLGYsZSx0aGlzKX19O2guZ2V0PWZ1bmN0aW9uKGMpe04oYXJndW1lbnRzLDEpO3ZhciBiPXRoaXMuYztjPVN0cmluZyhjKTtmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKylpZihiW2RdWzBdPT09YylyZXR1cm4gTyhiW2RdKVsxXTtcbnJldHVybiBudWxsfTtoLmdldEFsbD1mdW5jdGlvbihjKXtOKGFyZ3VtZW50cywxKTt2YXIgYj1bXTtjPVN0cmluZyhjKTtMKHRoaXMuYyxmdW5jdGlvbihkKXtkWzBdPT09YyYmYi5wdXNoKE8oZClbMV0pfSk7cmV0dXJuIGJ9O2guaGFzPWZ1bmN0aW9uKGMpe04oYXJndW1lbnRzLDEpO2M9U3RyaW5nKGMpO2Zvcih2YXIgYj0wO2I8dGhpcy5jLmxlbmd0aDtiKyspaWYodGhpcy5jW2JdWzBdPT09YylyZXR1cm4hMDtyZXR1cm4hMX07aC5rZXlzPWZ1bmN0aW9uIGIoKXt2YXIgZD10aGlzLGUsZixnLGsscTtyZXR1cm4gSyhiLGZ1bmN0aW9uKHQpezE9PXQuYiYmKGU9dihkKSxmPWUubmV4dCgpKTtpZigzIT10LmIpe2lmKGYuZG9uZSl7dC5iPTA7cmV0dXJufWc9Zi52YWx1ZTtrPXYoZyk7cT1rLm5leHQoKS52YWx1ZTtyZXR1cm4gRSh0LHEpfWY9ZS5uZXh0KCk7dC5iPTJ9KX07aC5zZXQ9ZnVuY3Rpb24oYixkLGUpe04oYXJndW1lbnRzLDIpO2I9U3RyaW5nKGIpO3ZhciBmPVtdLGc9TShiLFxuZCxlKSxrPSEwO0wodGhpcy5jLGZ1bmN0aW9uKHEpe3FbMF09PT1iP2smJihrPSFmLnB1c2goZykpOmYucHVzaChxKX0pO2smJmYucHVzaChnKTt0aGlzLmM9Zn07aC52YWx1ZXM9ZnVuY3Rpb24gZCgpe3ZhciBlPXRoaXMsZixnLGsscSx0O3JldHVybiBLKGQsZnVuY3Rpb24oeCl7MT09eC5iJiYoZj12KGUpLGc9Zi5uZXh0KCkpO2lmKDMhPXguYil7aWYoZy5kb25lKXt4LmI9MDtyZXR1cm59az1nLnZhbHVlO3E9dihrKTtxLm5leHQoKTt0PXEubmV4dCgpLnZhbHVlO3JldHVybiBFKHgsdCl9Zz1mLm5leHQoKTt4LmI9Mn0pfTtXLnByb3RvdHlwZS5fYXNOYXRpdmU9ZnVuY3Rpb24oKXtmb3IodmFyIGQ9bmV3IFEsZT12KHRoaXMpLGY9ZS5uZXh0KCk7IWYuZG9uZTtmPWUubmV4dCgpKXt2YXIgZz12KGYudmFsdWUpO2Y9Zy5uZXh0KCkudmFsdWU7Zz1nLm5leHQoKS52YWx1ZTtkLmFwcGVuZChmLGcpfXJldHVybiBkfTtXLnByb3RvdHlwZS5fYmxvYj1mdW5jdGlvbigpe2Zvcih2YXIgZD1cblwiLS0tLWZvcm1kYXRhLXBvbHlmaWxsLVwiK01hdGgucmFuZG9tKCksZT1bXSxmPXYodGhpcyksZz1mLm5leHQoKTshZy5kb25lO2c9Zi5uZXh0KCkpe3ZhciBrPXYoZy52YWx1ZSk7Zz1rLm5leHQoKS52YWx1ZTtrPWsubmV4dCgpLnZhbHVlO2UucHVzaChcIi0tXCIrZCtcIlxcclxcblwiKTtrIGluc3RhbmNlb2YgQmxvYj9lLnB1c2goJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicrZysnXCI7IGZpbGVuYW1lPVwiJytrLm5hbWUrJ1wiXFxyXFxuQ29udGVudC1UeXBlOiAnKygoay50eXBlfHxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKStcIlxcclxcblxcclxcblwiKSxrLFwiXFxyXFxuXCIpOmUucHVzaCgnQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJytnKydcIlxcclxcblxcclxcbicraytcIlxcclxcblwiKX1lLnB1c2goXCItLVwiK2QrXCItLVwiKTtyZXR1cm4gbmV3IEJsb2IoZSx7dHlwZTpcIm11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PVwiK2R9KX07Vy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXT1cbmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfTtXLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBGb3JtRGF0YV1cIn07VSYmIVUubWF0Y2hlcyYmKFUubWF0Y2hlcz1VLm1hdGNoZXNTZWxlY3Rvcnx8VS5tb3pNYXRjaGVzU2VsZWN0b3J8fFUubXNNYXRjaGVzU2VsZWN0b3J8fFUub01hdGNoZXNTZWxlY3Rvcnx8VS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGZ1bmN0aW9uKGQpe2Q9KHRoaXMuZG9jdW1lbnR8fHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChkKTtmb3IodmFyIGU9ZC5sZW5ndGg7MDw9LS1lJiZkLml0ZW0oZSkhPT10aGlzOyk7cmV0dXJuLTE8ZX0pO1YmJihXLnByb3RvdHlwZVtWXT1cIkZvcm1EYXRhXCIpO2lmKFIpe3ZhciBYPVAuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXI7UC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihkLGUpe1guY2FsbCh0aGlzLFxuZCxlKTtcImNvbnRlbnQtdHlwZVwiPT09ZC50b0xvd2VyQ2FzZSgpJiYodGhpcy5zPSEwKX07UC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbihkKXtkIGluc3RhbmNlb2YgVz8oZD1kLl9ibG9iKCksdGhpcy5zfHx0aGlzLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixkLnR5cGUpLFIuY2FsbCh0aGlzLGQpKTpSLmNhbGwodGhpcyxkKX19UyYmKFAuZmV0Y2g9ZnVuY3Rpb24oZCxlKXtlJiZlLmJvZHkmJmUuYm9keSBpbnN0YW5jZW9mIFcmJihlLmJvZHk9ZS5ib2R5Ll9ibG9iKCkpO3JldHVybiBTLmNhbGwodGhpcyxkLGUpfSk7VCYmKFAubmF2aWdhdG9yLnNlbmRCZWFjb249ZnVuY3Rpb24oZCxlKXtlIGluc3RhbmNlb2YgVyYmKGU9ZS5fYXNOYXRpdmUoKSk7cmV0dXJuIFQuY2FsbCh0aGlzLGQsZSl9KTtQLkZvcm1EYXRhPVd9O1xufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAnLi4vLi4vbnBtLXBhY2thZ2UvanMvY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlJztcbiIsImltcG9ydCAnZm9ybWRhdGEtcG9seWZpbGwnOyAvLyBpZSBhbmQgZWRnZVxuXG5jbGFzcyBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZSB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGxldCBtY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXVsdGktY29sdW1uLWVkaXRvcicpO1xuXG4gICAgICAgIGlmIChtY2UubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzQmFja2VuZCA9IG1jZVswXS5kYXRhc2V0LmVudiA9PT0gJ2JhY2tlbmQnO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjbGljaycsICcubXVsdGktY29sdW1uLWVkaXRvciAuYWRkJywgZnVuY3Rpb24oaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ2FkZFJvdycsIGl0ZW0uaHJlZik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjbGljaycsICcubXVsdGktY29sdW1uLWVkaXRvciAuZGVsZXRlJywgZnVuY3Rpb24oaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ2RlbGV0ZVJvdycsIGl0ZW0uaHJlZik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpeCBmb3IgZmlyZWZveCBhbmQgSUVcbiAgICAgICAgdXRpbHNCdW5kbGUuZXZlbnQuYWRkRHluYW1pY0V2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJy5tdWx0aS1jb2x1bW4tZWRpdG9yIC5kcmFnLWhhbmRsZScsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlsc0J1bmRsZS5ldmVudC5hZGREeW5hbWljRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnW2RhdGEtbWNlLWNsaWNrXScsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ3VwZGF0ZVJvd3MnLCBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1tY2UtY2xpY2snKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAnW2RhdGEtbWNlLWNoYW5nZV0nLCBmdW5jdGlvbihpdGVtLCBldmVudCkge1xuICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUudHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIGl0ZW0sICd1cGRhdGVSb3dzJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWNlLWNoYW5nZScpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdFNvcnRhYmxlKGlzQmFja2VuZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRTb3J0YWJsZShpc0JhY2tlbmQpIHtcbiAgICAgICAgaWYgKGlzQmFja2VuZCkge1xuICAgICAgICAgICAgbmV3IFNvcnRhYmxlcygnLm11bHRpLWNvbHVtbi1lZGl0b3Itd3JhcHBlciAuc29ydGFibGUnLCB7XG4gICAgICAgICAgICAgICAgY29uc3RyYWluOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgICBoYW5kbGU6ICcuZHJhZy1oYW5kbGUnLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5kaWNlcyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gcm93LmNsb3Nlc3QoJy5yb3dzJykucXVlcnlTZWxlY3RvckFsbCgnLm1jZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXMucHVzaChyb3dzW2ldLmRhdGFzZXQuaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93c1tpXS5kYXRhc2V0LmluZGV4ICE9PSBbXS5zbGljZS5jYWxsKHJvd3MpLmluZGV4T2YodGhpcykgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbmFsRGF0YSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICduZXdJbmRpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBuZXdJbmRpY2VzLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvUG9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUudHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIHJvdy5xdWVyeVNlbGVjdG9yKCcuZHJhZy1oYW5kbGUnKSwgJ3NvcnRSb3dzJywgbnVsbCwgYWRkaXRpb25hbERhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic29ydGFibGVqc1wiICovICdzb3J0YWJsZWpzJykudGhlbihmdW5jdGlvbihTb3J0YWJsZSkge1xuICAgICAgICAgICAgICAgIGxldCBzb3J0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXVsdGktY29sdW1uLWVkaXRvci13cmFwcGVyIC5zb3J0YWJsZScpO1xuXG4gICAgICAgICAgICAgICAgc29ydGFibGVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBTb3J0YWJsZS5jcmVhdGUoaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2hhbmRsZSc6ICcuZHJhZy1oYW5kbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0luZGljZXMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MgPSBldmVudC5pdGVtLmNsb3Nlc3QoJy5yb3dzJykucXVlcnlTZWxlY3RvckFsbCgnLm1jZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzLnB1c2gocm93c1tpXS5kYXRhc2V0LmluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93c1tpXS5kYXRhc2V0LmluZGV4ICE9PSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNvcnRhYmxlcywgaXRlbSkgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb1Bvc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZGl0aW9uYWxEYXRhID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICduZXdJbmRpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IG5ld0luZGljZXMuam9pbignLCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9Qb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLnRyaWdnZXJBY3Rpb24oaXNCYWNrZW5kLCBldmVudC5pdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWhhbmRsZScpLCAnc29ydFJvd3MnLCBudWxsLCBhZGRpdGlvbmFsRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB0cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgbGluaywgYWN0aW9uLCB1cmwsIGFkZGl0aW9uYWxGb3JtRGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGZvcm0gPSBsaW5rLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGxldCBlZGl0b3IgPSBsaW5rLmNsb3Nlc3QoJy5tdWx0aS1jb2x1bW4tZWRpdG9yJyk7XG5cbiAgICAgICAgaWYgKG51bGwgPT09IHVybClcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsID0gZm9ybS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhlIHRpbnltY2VzJyB2YWx1ZXMgYmVjYXVzZSBsYXRlciBvbiB0aGV5IGdldCByZXNldHRlZFxuICAgICAgICBlZGl0b3IucXVlcnlTZWxlY3RvckFsbCgnLm1jZS10aW55bWNlICsgdGV4dGFyZWEnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy50aW55bWNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSB0aW55bWNlLmdldChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSkuZ2V0Q29udGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnaW5wdXRbbmFtZV06bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYVtuYW1lXTpub3QoW2Rpc2FibGVkXSksIHNlbGVjdFtuYW1lXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbltuYW1lXTpub3QoW2Rpc2FibGVkXSknLFxuICAgICAgICApLmZvckVhY2goZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBGT1JNX1NVQk1JVCAtPiBubyBzdWJtaXQgY2FsbGJhY2tzIHNob3VsZCBiZSBmaXJlZFxuICAgICAgICAgICAgaWYgKGlucHV0Lm5hbWUgIT09ICdGT1JNX1NVQk1JVCcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGlucHV0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoaW5wdXQubmFtZSwgaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoaW5wdXQubmFtZSwgaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJvdyA9IGxpbmsuY2xvc2VzdCgnLm1jZS1yb3cnKTtcblxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3JvdycsIHR5cGVvZiByb3cgIT09ICd1bmRlZmluZWQnICYmIHJvdyAhPT0gbnVsbCA/IHJvdy5kYXRhc2V0LmluZGV4IDogMCk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgnZmllbGQnLCBlZGl0b3IuZGF0YXNldC5maWVsZCk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgndGFibGUnLCBlZGl0b3IuZGF0YXNldC50YWJsZSk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgnYWN0aW9uJywgYWN0aW9uKTtcblxuICAgICAgICBpZiAodHlwZW9mIGFkZGl0aW9uYWxGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxGb3JtRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIEZPUk1fU1VCTUlUIC0+IG5vIHN1Ym1pdCBjYWxsYmFja3Mgc2hvdWxkIGJlIGZpcmVkXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0Lm5hbWUgIT09ICdGT1JNX1NVQk1JVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGN1c3RvbSBldmVudFxuICAgICAgICAgICAgICAgIGxldCBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpLFxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQ7XG5cbiAgICAgICAgICAgICAgICBjdXN0b21FdmVudC5pbml0RXZlbnQoJ2FqYXhTdWNjZXNzJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVubG9hZCB0aGUgdGlueW1jZSdzIC0+IGVsc2UgdGhlIG9uZXMgYWRkZWQgdmlhIGFqYXggd291bGRuJ3QgYmUgaW5pdGlhdGVkIGJlY2F1c2UgdGlueW1jZSB0aGlua3MgdGhleVxuICAgICAgICAgICAgICAgICAgICAvLyBhcmUgYWxyZWFkeSAoSUQgc2VlbXMgdG8gYmUgc3RvcmVkISlcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tY2UtdGlueW1jZSArIHRleHRhcmVhJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cudGlueW1jZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW55bWNlLmdldChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JhY2tlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnRzID0gcmVzcG9uc2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdEh0bWwgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0ID0gbGluay5jbG9zZXN0KCcud2lkZ2V0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSB0ZXh0cyBiZWNhdXNlIGFmdGVyIHJlcGxhY2luZyB0aGUgZG9tIGVsZW1lbnRzIGFyZSBnb25lXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtID0gMDsgbSA8IHNjcmlwdEVsZW1lbnRzLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0SHRtbC5wdXNoKHNjcmlwdEVsZW1lbnRzW21dLmlubmVySFRNTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xvc2VzdCgnLm11bHRpLWNvbHVtbi1lZGl0b3Itd3JhcHBlcicpLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnF1ZXJ5U2VsZWN0b3IoJy5tdWx0aS1jb2x1bW4tZWRpdG9yLXdyYXBwZXInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0Q2hvc2VuKHdpZGdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0U29ydGFibGUoaXNCYWNrZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLmluaXRUb29sdGlwKHdpZGdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gaGlkZSBDb250YW8udGlwcyBvZiBjdXJyZW50IGxpbmtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzY3JpcHRIdG1sLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbChzY3JpcHRIdG1sW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbml0RXZlbnQoJ2FqYXhDb21wbGV0ZScsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pbm5lckhUTUwgPSBkYXRhLnJlc3VsdC5odG1sO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsb3Nlc3QoJy5tdWx0aS1jb2x1bW4tZWRpdG9yLXdyYXBwZXInKS5yZXBsYWNlV2l0aChyZXNwb25zZS5xdWVyeVNlbGVjdG9yKCcubXVsdGktY29sdW1uLWVkaXRvci13cmFwcGVyJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0U29ydGFibGUoaXNCYWNrZW5kKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRXZlbnQuaW5pdEV2ZW50KCdhamF4Q29tcGxldGUnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLmluaXQpO1xuXG4vLyBiYWNrZW5kIG9ubHlcbihmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hZGRFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnQoJ2RvbXJlYWR5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0Q2hvc2VuID0gZnVuY3Rpb24od2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdC50bF9jaG9zZW4nKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkJCgnIycgKyBlbC5nZXRBdHRyaWJ1dGUoJ2lkJykpLmNob3NlbigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdFRvb2x0aXAgPSBmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbdGl0bGVdJykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRpcHMuQ29udGFvKCQkKGVsKS5maWx0ZXIoZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkudGl0bGUgIT0gJydcbiAgICAgICAgICAgICAgICAgICAgfSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDoge3g6MCwgeTozMH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnQoJ2FqYXhfY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNvcnRhYmxlOyJdLCJzb3VyY2VSb290IjoiIn0=