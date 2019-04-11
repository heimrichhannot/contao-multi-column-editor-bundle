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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 	__webpack_require__.p = "/public/js/";
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

var MultiColumnEditorBundle =
/*#__PURE__*/
function () {
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
              MultiColumnEditorBundle.triggerAction(isBackend, row.querySelector('.drag-handle'), 'sortRows', additionalData);
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
                  MultiColumnEditorBundle.triggerAction(isBackend, event.item.querySelector('.drag-handle'), 'sortRows', additionalData);
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
      var form = link.closest('form'),
          formData = new FormData(),
          editor = link.closest('.multi-column-editor');
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
          var customEvent = document.createEvent('CustomEvent');
          customEvent.initEvent('ajaxSuccess', true, true);
          document.dispatchEvent(customEvent);

          if (xhr.status === 200) {
            if (isBackend) {
              var response = document.createElement('div');
              response.innerHTML = xhr.responseText;
              var scriptElements = response.childNodes[0].getElementsByTagName('script');
              link.closest('.multi-column-editor-wrapper').replaceWith(response.childNodes[0]);
              MultiColumnEditorBundle.initChosen();
              MultiColumnEditorBundle.initSortable(isBackend);

              for (var n = 0; n < scriptElements.length; n++) {
                eval(scriptElements[n].innerHTML);
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
              link.closest('.multi-column-editor-wrapper').replaceWith(_response.childNodes[0]);
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
      MultiColumnEditorBundle.initChosen = function () {
        $$('.multi-column-editor select.tl_chosen').each(function (el) {
          if (typeof el.initialized === 'undefined') {
            el.initialized = $$('#' + el.getAttribute('id')).chosen();
          }
        });
      };
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

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function p(){p=function(){};n.Symbol||(n.Symbol=r)}var r=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function u(){p();var a=n.Symbol.iterator;a||(a=n.Symbol.iterator=n.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&m(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return v(l(this))}});u=function(){}}function v(a){u();a={next:a};a[n.Symbol.iterator]=function(){return this};return a}function x(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:l(a)}}var y;
if("function"==typeof Object.setPrototypeOf)y=Object.setPrototypeOf;else{var z;a:{var A={s:!0},B={};try{B.__proto__=A;z=B.s;break a}catch(a){}z=!1}y=z?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var C=y;function D(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.u=0;this.g=null}function E(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}D.prototype.i=function(a){this.o=a};
D.prototype.j=function(a){this.g={v:a,w:!0};this.b=this.u||this.m};D.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function F(a,b,e){a.b=e;return{value:b}}function G(a){this.A=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function H(a){this.a=new D;this.B=a}H.prototype.i=function(a){E(this.a);if(this.a.c)return I(this,this.a.c.next,a,this.a.i);this.a.i(a);return J(this)};
function K(a,b){E(a.a);var e=a.a.c;if(e)return I(a,"return"in e?e["return"]:function(a){return{value:a,done:!0}},b,a.a["return"]);a.a["return"](b);return J(a)}H.prototype.j=function(a){E(this.a);if(this.a.c)return I(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return J(this)};
function I(a,b,e,c){try{var d=b.call(a.a.c,e);if(!(d instanceof Object))throw new TypeError("Iterator result "+d+" is not an object");if(!d.done)return a.a.h=!1,d;var f=d.value}catch(g){return a.a.c=null,a.a.j(g),J(a)}a.a.c=null;c.call(a.a,f);return J(a)}function J(a){for(;a.a.b;)try{var b=a.B(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(e){a.a.o=void 0,a.a.j(e)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.w)throw b.v;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function L(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return K(a,b)};u();this[Symbol.iterator]=function(){return this}}function M(a,b){var e=new L(new H(b));C&&C(e,a.prototype);return e}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var N=function(a,b){for(var e=0;e<a.length;e++)b(a[e])},O=function(a,b,e){return b instanceof Blob?[String(a),b,void 0!==e?e+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},P=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},Q=function(a){var b=x(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},R="object"===typeof window?window:"object"===typeof self?self:this,S=R.FormData,T=R.XMLHttpRequest&&R.XMLHttpRequest.prototype.send,U=R.Request&&R.fetch,V=R.navigator&&R.navigator.sendBeacon;p();var W=R.Symbol&&Symbol.toStringTag;W&&(Blob.prototype[W]||(Blob.prototype[W]="Blob"),"File"in R&&!File.prototype[W]&&(File.prototype[W]="File"));try{new File([],"")}catch(a){R.File=function(b,e,c){b=new Blob(b,c);c=c&&void 0!==c.lastModified?new Date(c.lastModified):new Date;Object.defineProperties(b,
{name:{value:e},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});W&&Object.defineProperty(b,W,{value:"File"});return b}}p();u();var X=function(a){this.f=Object.create(null);if(!a)return this;var b=this;N(a.elements,function(a){if(a.name&&!a.disabled&&"submit"!==a.type&&"button"!==a.type)if("file"===a.type){var c=a.files&&a.files.length?a.files:[new File([],"",{type:"application/octet-stream"})];N(c,function(c){b.append(a.name,c)})}else"select-multiple"===
a.type||"select-one"===a.type?N(a.options,function(c){!c.disabled&&c.selected&&b.append(a.name,c.value)}):"checkbox"===a.type||"radio"===a.type?a.checked&&b.append(a.name,a.value):(c="textarea"===a.type?a.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):a.value,b.append(a.name,c))})};k=X.prototype;k.append=function(a,b,e){P(arguments,2);var c=x(O.apply(null,arguments));a=c.next().value;b=c.next().value;e=c.next().value;c=this.f;c[a]||(c[a]=[]);c[a].push([b,e])};k["delete"]=function(a){P(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var e=this,c,d,f,g,h,q;return M(b,function(b){switch(b.b){case 1:c=e.f,f=new G(c);case 2:var t;a:{for(t=f;0<t.l.length;){var w=t.l.pop();if(w in t.A){t=w;break a}}t=null}if(null==(d=t)){b.b=0;break}g=x(c[d]);h=g.next();case 5:if(h.done){b.b=2;break}q=h.value;return F(b,[d,Q(q)],6);case 6:h=g.next(),b.b=5}})};k.forEach=function(b,e){P(arguments,1);for(var c=x(this),d=c.next();!d.done;d=c.next()){var f=x(d.value);d=f.next().value;f=f.next().value;
b.call(e,f,d,this)}};k.get=function(b){P(arguments,1);var e=this.f;b=String(b);return e[b]?Q(e[b][0]):null};k.getAll=function(b){P(arguments,1);return(this.f[String(b)]||[]).map(Q)};k.has=function(b){P(arguments,1);return String(b)in this.f};k.keys=function e(){var c=this,d,f,g,h,q;return M(e,function(e){1==e.b&&(d=x(c),f=d.next());if(3!=e.b){if(f.done){e.b=0;return}g=f.value;h=x(g);q=h.next().value;return F(e,q,3)}f=d.next();e.b=2})};k.set=function(e,c,d){P(arguments,2);var f=O.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function c(){var d=this,f,g,h,q,w;return M(c,function(c){1==c.b&&(f=x(d),g=f.next());if(3!=c.b){if(g.done){c.b=0;return}h=g.value;q=x(h);q.next();w=q.next().value;return F(c,w,3)}g=f.next();c.b=2})};X.prototype._asNative=function(){for(var c=new S,d=x(this),f=d.next();!f.done;f=d.next()){var g=x(f.value);f=g.next().value;g=g.next().value;c.append(f,g)}return c};X.prototype._blob=function(){for(var c="----formdata-polyfill-"+Math.random(),d=[],f=x(this),g=f.next();!g.done;g=
f.next()){var h=x(g.value);g=h.next().value;h=h.next().value;d.push("--"+c+"\r\n");h instanceof Blob?d.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):d.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}d.push("--"+c+"--");return new Blob(d,{type:"multipart/form-data; boundary="+c})};X.prototype[Symbol.iterator]=function(){return this.entries()};X.prototype.toString=function(){return"[object FormData]"};
W&&(X.prototype[W]="FormData");T&&(R.XMLHttpRequest.prototype.send=function(c){c instanceof X?(c=c._blob(),this.setRequestHeader("Content-Type",c.type),T.call(this,c)):T.call(this,c)});if(U){var Y=R.fetch;R.fetch=function(c,d){d&&d.body&&d.body instanceof X&&(d.body=d.body._blob());return Y.call(this,c,d)}}V&&(R.navigator.sendBeacon=function(c,d){d instanceof X&&(d=d._asNative());return V.call(this,c,d)});R.FormData=X};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodW5kaC9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvanMvY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtZGF0YS1wb2x5ZmlsbC9mb3JtZGF0YS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJTb3J0YWJsZVwiIl0sIm5hbWVzIjpbIk11bHRpQ29sdW1uRWRpdG9yQnVuZGxlIiwibWNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaXNCYWNrZW5kIiwiZGF0YXNldCIsImVudiIsInV0aWxzQnVuZGxlIiwiZXZlbnQiLCJhZGREeW5hbWljRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXJBY3Rpb24iLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiaW5pdFNvcnRhYmxlIiwiU29ydGFibGVzIiwiY29uc3RyYWluIiwib3BhY2l0eSIsImhhbmRsZSIsIm9uQ29tcGxldGUiLCJyb3ciLCJuZXdJbmRpY2VzIiwiZG9Qb3N0Iiwicm93cyIsImNsb3Nlc3QiLCJpIiwicHVzaCIsImluZGV4Iiwic2xpY2UiLCJjYWxsIiwiaW5kZXhPZiIsImFkZGl0aW9uYWxEYXRhIiwiam9pbiIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiU29ydGFibGUiLCJzb3J0YWJsZXMiLCJmb3JFYWNoIiwiY3JlYXRlIiwib25FbmQiLCJBcnJheSIsInByb3RvdHlwZSIsImxpbmsiLCJhY3Rpb24iLCJ1cmwiLCJhZGRpdGlvbmFsRm9ybURhdGEiLCJjYWxsYmFjayIsImZvcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZWRpdG9yIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsImFwcGVuZCIsImNoZWNrZWQiLCJ2YWx1ZSIsInNldCIsImZpZWxkIiwidGFibGUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJjdXN0b21FdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInN0YXR1cyIsInJlc3BvbnNlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsInNjcmlwdEVsZW1lbnRzIiwiY2hpbGROb2RlcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicmVwbGFjZVdpdGgiLCJpbml0Q2hvc2VuIiwibiIsImV2YWwiLCJhcHBseSIsImFyZ3VtZW50cyIsImUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzdWx0IiwiaHRtbCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0Iiwid2luZG93IiwiYWRkRXZlbnQiLCIkJCIsImVhY2giLCJlbCIsImluaXRpYWxpemVkIiwiY2hvc2VuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxrREFBMEM7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtB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Z0JBQWdCLE1BQU0sTUFBTSxVQUFVLFdBQVcsa0JBQWtCLE1BQU0sTUFBTSxVQUFVLHVCQUF1Qix5QkFBeUIsR0FBRyx3QkFBd0IsZUFBZSw2QkFBNkIsUUFBUSxZQUFZLGlCQUFpQixpQkFBaUI7QUFDcGUscUJBQXFCLGtCQUFrQixlQUFlLGFBQWEsWUFBWSw2QkFBNkIscUJBQXFCLGVBQWUsc0NBQXNDLGtCQUFrQixlQUFlLDJCQUEyQixvQkFBb0IscUJBQXFCLHVCQUF1Qiw0QkFBNEIsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLE9BQU8saUJBQWlCLGdCQUFnQixXQUFXLE1BQU0sR0FBRyxzQkFBc0IsZUFBZTtBQUM1ZCw0QkFBNEIsc0JBQXNCLHFCQUFxQix1QkFBdUIsNEJBQTRCLFdBQVcsV0FBVyxNQUFNLE9BQU8sVUFBVSxPQUFPLFNBQVMsaUJBQWlCLGdCQUFnQixXQUFXLE1BQU0sR0FBRyxpQ0FBaUMscUNBQXFDLFFBQVEsWUFBWSxpQkFBaUIsaUJBQWlCLGlCQUFpQixjQUFjLFVBQVUsNkJBQTZCLDJFQUEyRSxRQUFRO0FBQ2pnQixVQUFVLGlCQUFpQixpQkFBaUIsaUJBQWlCLHNCQUFzQix5REFBeUQsY0FBYyw4SUFBOEksaUNBQWlDLG9CQUFvQixtQkFBbUIsMEJBQTBCLGNBQWMsR0FBRyx3Q0FBd0MsdUJBQXVCLGdDQUFnQztBQUMxZiwrQkFBK0IsZ0RBQWdELHdHQUF3RyxFQUFFLE1BQU0sY0FBYyxzQkFBc0Isd0RBQXdELHlCQUF5Qix5Q0FBeUMsa0NBQWtDLHdCQUF3QixFQUFFO0FBQ3paLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkEsMEIiLCJmaWxlIjoiY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGVcIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcHVibGljL2pzL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy9AaHVuZGgvY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlL2pzL2NvbnRhby1tdWx0aS1jb2x1bW4tZWRpdG9yLWJ1bmRsZS5qc1wiKTtcbiIsImltcG9ydCAnZm9ybWRhdGEtcG9seWZpbGwnOyAvLyBpZSBhbmQgZWRnZVxuXG5jbGFzcyBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZSB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGxldCBtY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXVsdGktY29sdW1uLWVkaXRvcicpO1xuXG4gICAgICAgIGlmIChtY2UubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzQmFja2VuZCA9IG1jZVswXS5kYXRhc2V0LmVudiA9PT0gJ2JhY2tlbmQnO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjbGljaycsICcubXVsdGktY29sdW1uLWVkaXRvciAuYWRkJywgZnVuY3Rpb24oaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ2FkZFJvdycsIGl0ZW0uaHJlZik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjbGljaycsICcubXVsdGktY29sdW1uLWVkaXRvciAuZGVsZXRlJywgZnVuY3Rpb24oaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ2RlbGV0ZVJvdycsIGl0ZW0uaHJlZik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpeCBmb3IgZmlyZWZveCBhbmQgSUVcbiAgICAgICAgdXRpbHNCdW5kbGUuZXZlbnQuYWRkRHluYW1pY0V2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJy5tdWx0aS1jb2x1bW4tZWRpdG9yIC5kcmFnLWhhbmRsZScsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlsc0J1bmRsZS5ldmVudC5hZGREeW5hbWljRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnW2RhdGEtbWNlLWNsaWNrXScsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ3VwZGF0ZVJvd3MnLCBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1tY2UtY2xpY2snKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAnW2RhdGEtbWNlLWNoYW5nZV0nLCBmdW5jdGlvbihpdGVtLCBldmVudCkge1xuICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUudHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIGl0ZW0sICd1cGRhdGVSb3dzJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWNlLWNoYW5nZScpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdFNvcnRhYmxlKGlzQmFja2VuZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRTb3J0YWJsZShpc0JhY2tlbmQpIHtcbiAgICAgICAgaWYgKGlzQmFja2VuZCkge1xuICAgICAgICAgICAgbmV3IFNvcnRhYmxlcygnLm11bHRpLWNvbHVtbi1lZGl0b3Itd3JhcHBlciAuc29ydGFibGUnLCB7XG4gICAgICAgICAgICAgICAgY29uc3RyYWluOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgICBoYW5kbGU6ICcuZHJhZy1oYW5kbGUnLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5kaWNlcyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gcm93LmNsb3Nlc3QoJy5yb3dzJykucXVlcnlTZWxlY3RvckFsbCgnLm1jZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXMucHVzaChyb3dzW2ldLmRhdGFzZXQuaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93c1tpXS5kYXRhc2V0LmluZGV4ICE9PSBbXS5zbGljZS5jYWxsKHJvd3MpLmluZGV4T2YodGhpcykgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbmFsRGF0YSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICduZXdJbmRpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBuZXdJbmRpY2VzLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvUG9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUudHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIHJvdy5xdWVyeVNlbGVjdG9yKCcuZHJhZy1oYW5kbGUnKSwgJ3NvcnRSb3dzJywgYWRkaXRpb25hbERhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic29ydGFibGVqc1wiICovICdzb3J0YWJsZWpzJykudGhlbihmdW5jdGlvbihTb3J0YWJsZSkge1xuICAgICAgICAgICAgICAgIGxldCBzb3J0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXVsdGktY29sdW1uLWVkaXRvci13cmFwcGVyIC5zb3J0YWJsZScpO1xuXG4gICAgICAgICAgICAgICAgc29ydGFibGVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBTb3J0YWJsZS5jcmVhdGUoaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2hhbmRsZSc6ICcuZHJhZy1oYW5kbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0luZGljZXMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MgPSBldmVudC5pdGVtLmNsb3Nlc3QoJy5yb3dzJykucXVlcnlTZWxlY3RvckFsbCgnLm1jZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzLnB1c2gocm93c1tpXS5kYXRhc2V0LmluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93c1tpXS5kYXRhc2V0LmluZGV4ICE9PSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNvcnRhYmxlcywgaXRlbSkgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb1Bvc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZGl0aW9uYWxEYXRhID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICduZXdJbmRpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IG5ld0luZGljZXMuam9pbignLCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9Qb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLnRyaWdnZXJBY3Rpb24oaXNCYWNrZW5kLCBldmVudC5pdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWhhbmRsZScpLCAnc29ydFJvd3MnLCBhZGRpdGlvbmFsRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB0cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgbGluaywgYWN0aW9uLCB1cmwsIGFkZGl0aW9uYWxGb3JtRGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGZvcm0gPSBsaW5rLmNsb3Nlc3QoJ2Zvcm0nKSxcbiAgICAgICAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCksXG4gICAgICAgICAgICBlZGl0b3IgPSBsaW5rLmNsb3Nlc3QoJy5tdWx0aS1jb2x1bW4tZWRpdG9yJyk7XG5cbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgJ2lucHV0W25hbWVdOm5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWFbbmFtZV06bm90KFtkaXNhYmxlZF0pLCBzZWxlY3RbbmFtZV06bm90KFtkaXNhYmxlZF0pLCBidXR0b25bbmFtZV06bm90KFtkaXNhYmxlZF0pJyxcbiAgICAgICAgKS5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgRk9STV9TVUJNSVQgLT4gbm8gc3VibWl0IGNhbGxiYWNrcyBzaG91bGQgYmUgZmlyZWRcbiAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lICE9PSAnRk9STV9TVUJNSVQnKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByb3cgPSBsaW5rLmNsb3Nlc3QoJy5tY2Utcm93Jyk7XG5cbiAgICAgICAgZm9ybURhdGEuc2V0KCdyb3cnLCB0eXBlb2Ygcm93ICE9PSAndW5kZWZpbmVkJyAmJiByb3cgIT09IG51bGwgPyByb3cuZGF0YXNldC5pbmRleCA6IDApO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ2ZpZWxkJywgZWRpdG9yLmRhdGFzZXQuZmllbGQpO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ3RhYmxlJywgZWRpdG9yLmRhdGFzZXQudGFibGUpO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ2FjdGlvbicsIGFjdGlvbik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhZGRpdGlvbmFsRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhZGRpdGlvbmFsRm9ybURhdGEuZm9yRWFjaChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBGT1JNX1NVQk1JVCAtPiBubyBzdWJtaXQgY2FsbGJhY2tzIHNob3VsZCBiZSBmaXJlZFxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lICE9PSAnRk9STV9TVUJNSVQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChpbnB1dC5uYW1lLCBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChpbnB1dC5uYW1lLCBpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCBjdXN0b20gZXZlbnRcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgICAgICBjdXN0b21FdmVudC5pbml0RXZlbnQoJ2FqYXhTdWNjZXNzJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JhY2tlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnRzID0gcmVzcG9uc2UuY2hpbGROb2Rlc1swXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xvc2VzdCgnLm11bHRpLWNvbHVtbi1lZGl0b3Itd3JhcHBlcicpLnJlcGxhY2VXaXRoKHJlc3BvbnNlLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdENob3NlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdFNvcnRhYmxlKGlzQmFja2VuZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgc2NyaXB0RWxlbWVudHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsKHNjcmlwdEVsZW1lbnRzW25dLmlubmVySFRNTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5pdEV2ZW50KCdhamF4Q29tcGxldGUnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaW5uZXJIVE1MID0gZGF0YS5yZXN1bHQuaHRtbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbG9zZXN0KCcubXVsdGktY29sdW1uLWVkaXRvci13cmFwcGVyJykucmVwbGFjZVdpdGgocmVzcG9uc2UuY2hpbGROb2Rlc1swXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLmluaXRTb3J0YWJsZShpc0JhY2tlbmQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21FdmVudC5pbml0RXZlbnQoJ2FqYXhDb21wbGV0ZScsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdCk7XG5cbi8vIGJhY2tlbmQgb25seVxuKGZ1bmN0aW9uKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmFkZEV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudCgnZG9tcmVhZHknLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLmluaXRDaG9zZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkJCgnLm11bHRpLWNvbHVtbi1lZGl0b3Igc2VsZWN0LnRsX2Nob3NlbicpLmVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbC5pbml0aWFsaXplZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmluaXRpYWxpemVkID0gJCQoJyMnICsgZWwuZ2V0QXR0cmlidXRlKCdpZCcpKS5jaG9zZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufSkoKTsiLCI7KGZ1bmN0aW9uKCl7dmFyIGs7ZnVuY3Rpb24gbChhKXt2YXIgYj0wO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBiPGEubGVuZ3RoP3tkb25lOiExLHZhbHVlOmFbYisrXX06e2RvbmU6ITB9fX12YXIgbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxiLGUpe2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbYl09ZS52YWx1ZSl9LG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09dGhpcz90aGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6dGhpcztmdW5jdGlvbiBwKCl7cD1mdW5jdGlvbigpe307bi5TeW1ib2x8fChuLlN5bWJvbD1yKX12YXIgcj1mdW5jdGlvbigpe3ZhciBhPTA7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVyblwianNjb21wX3N5bWJvbF9cIisoYnx8XCJcIikrYSsrfX0oKTtcbmZ1bmN0aW9uIHUoKXtwKCk7dmFyIGE9bi5TeW1ib2wuaXRlcmF0b3I7YXx8KGE9bi5TeW1ib2wuaXRlcmF0b3I9bi5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2FdJiZtKEFycmF5LnByb3RvdHlwZSxhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdihsKHRoaXMpKX19KTt1PWZ1bmN0aW9uKCl7fX1mdW5jdGlvbiB2KGEpe3UoKTthPXtuZXh0OmF9O2Fbbi5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBhfWZ1bmN0aW9uIHgoYSl7dmFyIGI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yJiZhW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIGI/Yi5jYWxsKGEpOntuZXh0OmwoYSl9fXZhciB5O1xuaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mKXk9T2JqZWN0LnNldFByb3RvdHlwZU9mO2Vsc2V7dmFyIHo7YTp7dmFyIEE9e3M6ITB9LEI9e307dHJ5e0IuX19wcm90b19fPUE7ej1CLnM7YnJlYWsgYX1jYXRjaChhKXt9ej0hMX15PXo/ZnVuY3Rpb24oYSxiKXthLl9fcHJvdG9fXz1iO2lmKGEuX19wcm90b19fIT09Yil0aHJvdyBuZXcgVHlwZUVycm9yKGErXCIgaXMgbm90IGV4dGVuc2libGVcIik7cmV0dXJuIGF9Om51bGx9dmFyIEM9eTtmdW5jdGlvbiBEKCl7dGhpcy5oPSExO3RoaXMuYz1udWxsO3RoaXMubz12b2lkIDA7dGhpcy5iPTE7dGhpcy5tPXRoaXMudT0wO3RoaXMuZz1udWxsfWZ1bmN0aW9uIEUoYSl7aWYoYS5oKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO2EuaD0hMH1ELnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe3RoaXMubz1hfTtcbkQucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7dGhpcy5nPXt2OmEsdzohMH07dGhpcy5iPXRoaXMudXx8dGhpcy5tfTtELnByb3RvdHlwZVtcInJldHVyblwiXT1mdW5jdGlvbihhKXt0aGlzLmc9e1wicmV0dXJuXCI6YX07dGhpcy5iPXRoaXMubX07ZnVuY3Rpb24gRihhLGIsZSl7YS5iPWU7cmV0dXJue3ZhbHVlOmJ9fWZ1bmN0aW9uIEcoYSl7dGhpcy5BPWE7dGhpcy5sPVtdO2Zvcih2YXIgYiBpbiBhKXRoaXMubC5wdXNoKGIpO3RoaXMubC5yZXZlcnNlKCl9ZnVuY3Rpb24gSChhKXt0aGlzLmE9bmV3IEQ7dGhpcy5CPWF9SC5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtFKHRoaXMuYSk7aWYodGhpcy5hLmMpcmV0dXJuIEkodGhpcyx0aGlzLmEuYy5uZXh0LGEsdGhpcy5hLmkpO3RoaXMuYS5pKGEpO3JldHVybiBKKHRoaXMpfTtcbmZ1bmN0aW9uIEsoYSxiKXtFKGEuYSk7dmFyIGU9YS5hLmM7aWYoZSlyZXR1cm4gSShhLFwicmV0dXJuXCJpbiBlP2VbXCJyZXR1cm5cIl06ZnVuY3Rpb24oYSl7cmV0dXJue3ZhbHVlOmEsZG9uZTohMH19LGIsYS5hW1wicmV0dXJuXCJdKTthLmFbXCJyZXR1cm5cIl0oYik7cmV0dXJuIEooYSl9SC5wcm90b3R5cGUuaj1mdW5jdGlvbihhKXtFKHRoaXMuYSk7aWYodGhpcy5hLmMpcmV0dXJuIEkodGhpcyx0aGlzLmEuY1tcInRocm93XCJdLGEsdGhpcy5hLmkpO3RoaXMuYS5qKGEpO3JldHVybiBKKHRoaXMpfTtcbmZ1bmN0aW9uIEkoYSxiLGUsYyl7dHJ5e3ZhciBkPWIuY2FsbChhLmEuYyxlKTtpZighKGQgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJdGVyYXRvciByZXN1bHQgXCIrZCtcIiBpcyBub3QgYW4gb2JqZWN0XCIpO2lmKCFkLmRvbmUpcmV0dXJuIGEuYS5oPSExLGQ7dmFyIGY9ZC52YWx1ZX1jYXRjaChnKXtyZXR1cm4gYS5hLmM9bnVsbCxhLmEuaihnKSxKKGEpfWEuYS5jPW51bGw7Yy5jYWxsKGEuYSxmKTtyZXR1cm4gSihhKX1mdW5jdGlvbiBKKGEpe2Zvcig7YS5hLmI7KXRyeXt2YXIgYj1hLkIoYS5hKTtpZihiKXJldHVybiBhLmEuaD0hMSx7dmFsdWU6Yi52YWx1ZSxkb25lOiExfX1jYXRjaChlKXthLmEubz12b2lkIDAsYS5hLmooZSl9YS5hLmg9ITE7aWYoYS5hLmcpe2I9YS5hLmc7YS5hLmc9bnVsbDtpZihiLncpdGhyb3cgYi52O3JldHVybnt2YWx1ZTpiW1wicmV0dXJuXCJdLGRvbmU6ITB9fXJldHVybnt2YWx1ZTp2b2lkIDAsZG9uZTohMH19XG5mdW5jdGlvbiBMKGEpe3RoaXMubmV4dD1mdW5jdGlvbihiKXtyZXR1cm4gYS5pKGIpfTt0aGlzW1widGhyb3dcIl09ZnVuY3Rpb24oYil7cmV0dXJuIGEuaihiKX07dGhpc1tcInJldHVyblwiXT1mdW5jdGlvbihiKXtyZXR1cm4gSyhhLGIpfTt1KCk7dGhpc1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9fWZ1bmN0aW9uIE0oYSxiKXt2YXIgZT1uZXcgTChuZXcgSChiKSk7QyYmQyhlLGEucHJvdG90eXBlKTtyZXR1cm4gZX1cbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBCbG9iJiYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBGb3JtRGF0YXx8IUZvcm1EYXRhLnByb3RvdHlwZS5rZXlzKSl7dmFyIE49ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGU9MDtlPGEubGVuZ3RoO2UrKyliKGFbZV0pfSxPPWZ1bmN0aW9uKGEsYixlKXtyZXR1cm4gYiBpbnN0YW5jZW9mIEJsb2I/W1N0cmluZyhhKSxiLHZvaWQgMCE9PWU/ZStcIlwiOlwic3RyaW5nXCI9PT10eXBlb2YgYi5uYW1lP2IubmFtZTpcImJsb2JcIl06W1N0cmluZyhhKSxTdHJpbmcoYildfSxQPWZ1bmN0aW9uKGEsYil7aWYoYS5sZW5ndGg8Yil0aHJvdyBuZXcgVHlwZUVycm9yKGIrXCIgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IFwiK2EubGVuZ3RoK1wiIHByZXNlbnQuXCIpO30sUT1mdW5jdGlvbihhKXt2YXIgYj14KGEpO2E9Yi5uZXh0KCkudmFsdWU7Yj1iLm5leHQoKS52YWx1ZTthIGluc3RhbmNlb2YgQmxvYiYmKGE9bmV3IEZpbGUoW2FdLGIse3R5cGU6YS50eXBlLGxhc3RNb2RpZmllZDphLmxhc3RNb2RpZmllZH0pKTtcbnJldHVybiBhfSxSPVwib2JqZWN0XCI9PT10eXBlb2Ygd2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT09dHlwZW9mIHNlbGY/c2VsZjp0aGlzLFM9Ui5Gb3JtRGF0YSxUPVIuWE1MSHR0cFJlcXVlc3QmJlIuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQsVT1SLlJlcXVlc3QmJlIuZmV0Y2gsVj1SLm5hdmlnYXRvciYmUi5uYXZpZ2F0b3Iuc2VuZEJlYWNvbjtwKCk7dmFyIFc9Ui5TeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZztXJiYoQmxvYi5wcm90b3R5cGVbV118fChCbG9iLnByb3RvdHlwZVtXXT1cIkJsb2JcIiksXCJGaWxlXCJpbiBSJiYhRmlsZS5wcm90b3R5cGVbV10mJihGaWxlLnByb3RvdHlwZVtXXT1cIkZpbGVcIikpO3RyeXtuZXcgRmlsZShbXSxcIlwiKX1jYXRjaChhKXtSLkZpbGU9ZnVuY3Rpb24oYixlLGMpe2I9bmV3IEJsb2IoYixjKTtjPWMmJnZvaWQgMCE9PWMubGFzdE1vZGlmaWVkP25ldyBEYXRlKGMubGFzdE1vZGlmaWVkKTpuZXcgRGF0ZTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhiLFxue25hbWU6e3ZhbHVlOmV9LGxhc3RNb2RpZmllZERhdGU6e3ZhbHVlOmN9LGxhc3RNb2RpZmllZDp7dmFsdWU6K2N9LHRvU3RyaW5nOnt2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBGaWxlXVwifX19KTtXJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYixXLHt2YWx1ZTpcIkZpbGVcIn0pO3JldHVybiBifX1wKCk7dSgpO3ZhciBYPWZ1bmN0aW9uKGEpe3RoaXMuZj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKCFhKXJldHVybiB0aGlzO3ZhciBiPXRoaXM7TihhLmVsZW1lbnRzLGZ1bmN0aW9uKGEpe2lmKGEubmFtZSYmIWEuZGlzYWJsZWQmJlwic3VibWl0XCIhPT1hLnR5cGUmJlwiYnV0dG9uXCIhPT1hLnR5cGUpaWYoXCJmaWxlXCI9PT1hLnR5cGUpe3ZhciBjPWEuZmlsZXMmJmEuZmlsZXMubGVuZ3RoP2EuZmlsZXM6W25ldyBGaWxlKFtdLFwiXCIse3R5cGU6XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn0pXTtOKGMsZnVuY3Rpb24oYyl7Yi5hcHBlbmQoYS5uYW1lLGMpfSl9ZWxzZVwic2VsZWN0LW11bHRpcGxlXCI9PT1cbmEudHlwZXx8XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGU/TihhLm9wdGlvbnMsZnVuY3Rpb24oYyl7IWMuZGlzYWJsZWQmJmMuc2VsZWN0ZWQmJmIuYXBwZW5kKGEubmFtZSxjLnZhbHVlKX0pOlwiY2hlY2tib3hcIj09PWEudHlwZXx8XCJyYWRpb1wiPT09YS50eXBlP2EuY2hlY2tlZCYmYi5hcHBlbmQoYS5uYW1lLGEudmFsdWUpOihjPVwidGV4dGFyZWFcIj09PWEudHlwZT9hLnZhbHVlLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpLnJlcGxhY2UoL1xcbi9nLFwiXFxyXFxuXCIpOmEudmFsdWUsYi5hcHBlbmQoYS5uYW1lLGMpKX0pfTtrPVgucHJvdG90eXBlO2suYXBwZW5kPWZ1bmN0aW9uKGEsYixlKXtQKGFyZ3VtZW50cywyKTt2YXIgYz14KE8uYXBwbHkobnVsbCxhcmd1bWVudHMpKTthPWMubmV4dCgpLnZhbHVlO2I9Yy5uZXh0KCkudmFsdWU7ZT1jLm5leHQoKS52YWx1ZTtjPXRoaXMuZjtjW2FdfHwoY1thXT1bXSk7Y1thXS5wdXNoKFtiLGVdKX07a1tcImRlbGV0ZVwiXT1mdW5jdGlvbihhKXtQKGFyZ3VtZW50cyxcbjEpO2RlbGV0ZSB0aGlzLmZbU3RyaW5nKGEpXX07ay5lbnRyaWVzPWZ1bmN0aW9uIGIoKXt2YXIgZT10aGlzLGMsZCxmLGcsaCxxO3JldHVybiBNKGIsZnVuY3Rpb24oYil7c3dpdGNoKGIuYil7Y2FzZSAxOmM9ZS5mLGY9bmV3IEcoYyk7Y2FzZSAyOnZhciB0O2E6e2Zvcih0PWY7MDx0LmwubGVuZ3RoOyl7dmFyIHc9dC5sLnBvcCgpO2lmKHcgaW4gdC5BKXt0PXc7YnJlYWsgYX19dD1udWxsfWlmKG51bGw9PShkPXQpKXtiLmI9MDticmVha31nPXgoY1tkXSk7aD1nLm5leHQoKTtjYXNlIDU6aWYoaC5kb25lKXtiLmI9MjticmVha31xPWgudmFsdWU7cmV0dXJuIEYoYixbZCxRKHEpXSw2KTtjYXNlIDY6aD1nLm5leHQoKSxiLmI9NX19KX07ay5mb3JFYWNoPWZ1bmN0aW9uKGIsZSl7UChhcmd1bWVudHMsMSk7Zm9yKHZhciBjPXgodGhpcyksZD1jLm5leHQoKTshZC5kb25lO2Q9Yy5uZXh0KCkpe3ZhciBmPXgoZC52YWx1ZSk7ZD1mLm5leHQoKS52YWx1ZTtmPWYubmV4dCgpLnZhbHVlO1xuYi5jYWxsKGUsZixkLHRoaXMpfX07ay5nZXQ9ZnVuY3Rpb24oYil7UChhcmd1bWVudHMsMSk7dmFyIGU9dGhpcy5mO2I9U3RyaW5nKGIpO3JldHVybiBlW2JdP1EoZVtiXVswXSk6bnVsbH07ay5nZXRBbGw9ZnVuY3Rpb24oYil7UChhcmd1bWVudHMsMSk7cmV0dXJuKHRoaXMuZltTdHJpbmcoYildfHxbXSkubWFwKFEpfTtrLmhhcz1mdW5jdGlvbihiKXtQKGFyZ3VtZW50cywxKTtyZXR1cm4gU3RyaW5nKGIpaW4gdGhpcy5mfTtrLmtleXM9ZnVuY3Rpb24gZSgpe3ZhciBjPXRoaXMsZCxmLGcsaCxxO3JldHVybiBNKGUsZnVuY3Rpb24oZSl7MT09ZS5iJiYoZD14KGMpLGY9ZC5uZXh0KCkpO2lmKDMhPWUuYil7aWYoZi5kb25lKXtlLmI9MDtyZXR1cm59Zz1mLnZhbHVlO2g9eChnKTtxPWgubmV4dCgpLnZhbHVlO3JldHVybiBGKGUscSwzKX1mPWQubmV4dCgpO2UuYj0yfSl9O2suc2V0PWZ1bmN0aW9uKGUsYyxkKXtQKGFyZ3VtZW50cywyKTt2YXIgZj1PLmFwcGx5KG51bGwsYXJndW1lbnRzKTtcbnRoaXMuZltmWzBdXT1bW2ZbMV0sZlsyXV1dfTtrLnZhbHVlcz1mdW5jdGlvbiBjKCl7dmFyIGQ9dGhpcyxmLGcsaCxxLHc7cmV0dXJuIE0oYyxmdW5jdGlvbihjKXsxPT1jLmImJihmPXgoZCksZz1mLm5leHQoKSk7aWYoMyE9Yy5iKXtpZihnLmRvbmUpe2MuYj0wO3JldHVybn1oPWcudmFsdWU7cT14KGgpO3EubmV4dCgpO3c9cS5uZXh0KCkudmFsdWU7cmV0dXJuIEYoYyx3LDMpfWc9Zi5uZXh0KCk7Yy5iPTJ9KX07WC5wcm90b3R5cGUuX2FzTmF0aXZlPWZ1bmN0aW9uKCl7Zm9yKHZhciBjPW5ldyBTLGQ9eCh0aGlzKSxmPWQubmV4dCgpOyFmLmRvbmU7Zj1kLm5leHQoKSl7dmFyIGc9eChmLnZhbHVlKTtmPWcubmV4dCgpLnZhbHVlO2c9Zy5uZXh0KCkudmFsdWU7Yy5hcHBlbmQoZixnKX1yZXR1cm4gY307WC5wcm90b3R5cGUuX2Jsb2I9ZnVuY3Rpb24oKXtmb3IodmFyIGM9XCItLS0tZm9ybWRhdGEtcG9seWZpbGwtXCIrTWF0aC5yYW5kb20oKSxkPVtdLGY9eCh0aGlzKSxnPWYubmV4dCgpOyFnLmRvbmU7Zz1cbmYubmV4dCgpKXt2YXIgaD14KGcudmFsdWUpO2c9aC5uZXh0KCkudmFsdWU7aD1oLm5leHQoKS52YWx1ZTtkLnB1c2goXCItLVwiK2MrXCJcXHJcXG5cIik7aCBpbnN0YW5jZW9mIEJsb2I/ZC5wdXNoKCdDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInK2crJ1wiOyBmaWxlbmFtZT1cIicraC5uYW1lKydcIlxcclxcbicsXCJDb250ZW50LVR5cGU6IFwiKyhoLnR5cGV8fFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIpK1wiXFxyXFxuXFxyXFxuXCIsaCxcIlxcclxcblwiKTpkLnB1c2goJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicrZysnXCJcXHJcXG5cXHJcXG4nK2grXCJcXHJcXG5cIil9ZC5wdXNoKFwiLS1cIitjK1wiLS1cIik7cmV0dXJuIG5ldyBCbG9iKGQse3R5cGU6XCJtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT1cIitjfSl9O1gucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9O1gucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEZvcm1EYXRhXVwifTtcblcmJihYLnByb3RvdHlwZVtXXT1cIkZvcm1EYXRhXCIpO1QmJihSLlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGMpe2MgaW5zdGFuY2VvZiBYPyhjPWMuX2Jsb2IoKSx0aGlzLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixjLnR5cGUpLFQuY2FsbCh0aGlzLGMpKTpULmNhbGwodGhpcyxjKX0pO2lmKFUpe3ZhciBZPVIuZmV0Y2g7Ui5mZXRjaD1mdW5jdGlvbihjLGQpe2QmJmQuYm9keSYmZC5ib2R5IGluc3RhbmNlb2YgWCYmKGQuYm9keT1kLmJvZHkuX2Jsb2IoKSk7cmV0dXJuIFkuY2FsbCh0aGlzLGMsZCl9fVYmJihSLm5hdmlnYXRvci5zZW5kQmVhY29uPWZ1bmN0aW9uKGMsZCl7ZCBpbnN0YW5jZW9mIFgmJihkPWQuX2FzTmF0aXZlKCkpO3JldHVybiBWLmNhbGwodGhpcyxjLGQpfSk7Ui5Gb3JtRGF0YT1YfTtcbn0pKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNvcnRhYmxlOyJdLCJzb3VyY2VSb290IjoiIn0=