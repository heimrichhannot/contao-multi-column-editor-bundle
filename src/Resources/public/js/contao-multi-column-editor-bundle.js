/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "sortablejs");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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
        MultiColumnEditorBundle.triggerAction(isBackend, item, 'addRow');
      });
      utilsBundle.event.addDynamicEventListener('click', '.multi-column-editor .delete', function (item, event) {
        event.preventDefault();
        MultiColumnEditorBundle.triggerAction(isBackend, item, 'deleteRow');
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
        var sortables = document.querySelectorAll('.multi-column-editor-wrapper .sortable');
        sortables.forEach(function (item) {
          sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a.create(item, {
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
      }
    }
  }, {
    key: "triggerAction",
    value: function triggerAction(isBackend, link, action, additionalFormData, callback) {
      var form = link.closest('form'),
          formData = new FormData(),
          editor = link.closest('.multi-column-editor'),
          url = link.href;
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
                eval(arr[n].innerHTML);
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

/***/ "sortablejs":
/*!***************************!*\
  !*** external "Sortable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Sortable;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodW5kaC9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvanMvY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlNvcnRhYmxlXCIiXSwibmFtZXMiOlsiTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUiLCJtY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJpc0JhY2tlbmQiLCJkYXRhc2V0IiwiZW52IiwidXRpbHNCdW5kbGUiLCJldmVudCIsImFkZER5bmFtaWNFdmVudExpc3RlbmVyIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwidHJpZ2dlckFjdGlvbiIsImluaXRTb3J0YWJsZSIsIlNvcnRhYmxlcyIsImNvbnN0cmFpbiIsIm9wYWNpdHkiLCJoYW5kbGUiLCJvbkNvbXBsZXRlIiwicm93IiwibmV3SW5kaWNlcyIsImRvUG9zdCIsInJvd3MiLCJjbG9zZXN0IiwiaSIsInB1c2giLCJpbmRleCIsInNsaWNlIiwiY2FsbCIsImluZGV4T2YiLCJhZGRpdGlvbmFsRGF0YSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yIiwic29ydGFibGVzIiwiZm9yRWFjaCIsIlNvcnRhYmxlIiwiY3JlYXRlIiwib25FbmQiLCJBcnJheSIsInByb3RvdHlwZSIsImxpbmsiLCJhY3Rpb24iLCJhZGRpdGlvbmFsRm9ybURhdGEiLCJjYWxsYmFjayIsImZvcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZWRpdG9yIiwidXJsIiwiaHJlZiIsImlucHV0IiwibmFtZSIsInR5cGUiLCJhcHBlbmQiLCJjaGVja2VkIiwidmFsdWUiLCJzZXQiLCJmaWVsZCIsInRhYmxlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiY3VzdG9tRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzdGF0dXMiLCJyZXNwb25zZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJyZXNwb25zZVRleHQiLCJzY3JpcHRFbGVtZW50cyIsImNoaWxkTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInJlcGxhY2VXaXRoIiwiaW5pdENob3NlbiIsIm4iLCJldmFsIiwiYXJyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInJlc3VsdCIsImh0bWwiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsIndpbmRvdyIsImFkZEV2ZW50IiwiJCQiLCJlYWNoIiwiZWwiLCJpbml0aWFsaXplZCIsImdldEF0dHJpYnV0ZSIsImNob3NlbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7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QUFJLE9BQU9BLEVBQUUsQ0FBQ0MsV0FBVixLQUEwQixXQUE5QixFQUEyQztBQUN2Q0QsY0FBRSxDQUFDQyxXQUFILEdBQWlCSCxFQUFFLENBQUMsTUFBTUUsRUFBRSxDQUFDRSxZQUFILENBQWdCLElBQWhCLENBQVAsQ0FBRixDQUFnQ0MsTUFBaEMsRUFBakI7QUFDSDtBQUNKLFNBSkQ7QUFLSCxPQU5EO0FBT0gsS0FSRDtBQVNIO0FBQ0osQ0FaRCxJOzs7Ozs7Ozs7OztBQy9NQSwwQiIsImZpbGUiOiJjb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL0BodW5kaC9jb250YW8tbXVsdGktY29sdW1uLWVkaXRvci1idW5kbGUvanMvY29udGFvLW11bHRpLWNvbHVtbi1lZGl0b3ItYnVuZGxlLmpzXCIpO1xuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuXG5jbGFzcyBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZSB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGxldCBtY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXVsdGktY29sdW1uLWVkaXRvcicpO1xuXG4gICAgICAgIGlmIChtY2UubGVuZ3RoIDwgMSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzQmFja2VuZCA9IG1jZVswXS5kYXRhc2V0LmVudiA9PT0gJ2JhY2tlbmQnO1xuXG4gICAgICAgIHV0aWxzQnVuZGxlLmV2ZW50LmFkZER5bmFtaWNFdmVudExpc3RlbmVyKCdjbGljaycsICcubXVsdGktY29sdW1uLWVkaXRvciAuYWRkJywgZnVuY3Rpb24oaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgaXRlbSwgJ2FkZFJvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlsc0J1bmRsZS5ldmVudC5hZGREeW5hbWljRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnLm11bHRpLWNvbHVtbi1lZGl0b3IgLmRlbGV0ZScsIGZ1bmN0aW9uKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUudHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIGl0ZW0sICdkZWxldGVSb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdFNvcnRhYmxlKGlzQmFja2VuZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRTb3J0YWJsZShpc0JhY2tlbmQpIHtcbiAgICAgICAgaWYgKGlzQmFja2VuZClcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3IFNvcnRhYmxlcygnLm11bHRpLWNvbHVtbi1lZGl0b3Itd3JhcHBlciAuc29ydGFibGUnLCB7XG4gICAgICAgICAgICAgICAgY29uc3RyYWluOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgICBoYW5kbGU6ICcuZHJhZy1oYW5kbGUnLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5kaWNlcyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gcm93LmNsb3Nlc3QoJy5yb3dzJykucXVlcnlTZWxlY3RvckFsbCgnLm1jZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXMucHVzaChyb3dzW2ldLmRhdGFzZXQuaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93c1tpXS5kYXRhc2V0LmluZGV4ICE9PSBbXS5zbGljZS5jYWxsKHJvd3MpLmluZGV4T2YodGhpcykgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbmFsRGF0YSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICduZXdJbmRpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBuZXdJbmRpY2VzLmpvaW4oJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb1Bvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpQ29sdW1uRWRpdG9yQnVuZGxlLnRyaWdnZXJBY3Rpb24oaXNCYWNrZW5kLCByb3cucXVlcnlTZWxlY3RvcignLmRyYWctaGFuZGxlJyksICdzb3J0Um93cycsIGFkZGl0aW9uYWxEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHNvcnRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdWx0aS1jb2x1bW4tZWRpdG9yLXdyYXBwZXIgLnNvcnRhYmxlJyk7XG5cbiAgICAgICAgICAgIHNvcnRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBTb3J0YWJsZS5jcmVhdGUoaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAnaGFuZGxlJyA6ICcuZHJhZy1oYW5kbGUnLFxuICAgICAgICAgICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJbmRpY2VzID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cyA9IGV2ZW50Lml0ZW0uY2xvc2VzdCgnLnJvd3MnKS5xdWVyeVNlbGVjdG9yQWxsKCcubWNlLXJvdycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzLnB1c2gocm93c1tpXS5kYXRhc2V0LmluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3dzW2ldLmRhdGFzZXQuaW5kZXggIT09IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc29ydGFibGVzLCBpdGVtKSArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Qb3N0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbmFsRGF0YSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ25ld0luZGljZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBuZXdJbmRpY2VzLmpvaW4oJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb1Bvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS50cmlnZ2VyQWN0aW9uKGlzQmFja2VuZCwgZXZlbnQuaXRlbS5xdWVyeVNlbGVjdG9yKCcuZHJhZy1oYW5kbGUnKSwgJ3NvcnRSb3dzJywgYWRkaXRpb25hbERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgdHJpZ2dlckFjdGlvbihpc0JhY2tlbmQsIGxpbmssIGFjdGlvbiwgYWRkaXRpb25hbEZvcm1EYXRhLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgZm9ybSA9IGxpbmsuY2xvc2VzdCgnZm9ybScpLFxuICAgICAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxcbiAgICAgICAgICAgIGVkaXRvciA9IGxpbmsuY2xvc2VzdCgnLm11bHRpLWNvbHVtbi1lZGl0b3InKSxcbiAgICAgICAgICAgIHVybCA9IGxpbmsuaHJlZjtcblxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnaW5wdXRbbmFtZV06bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYVtuYW1lXTpub3QoW2Rpc2FibGVkXSksIHNlbGVjdFtuYW1lXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbltuYW1lXTpub3QoW2Rpc2FibGVkXSknXG4gICAgICAgICkuZm9yRWFjaChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIEZPUk1fU1VCTUlUIC0+IG5vIHN1Ym1pdCBjYWxsYmFja3Mgc2hvdWxkIGJlIGZpcmVkXG4gICAgICAgICAgICBpZiAoaW5wdXQubmFtZSAhPT0gJ0ZPUk1fU1VCTUlUJykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByb3cgPSBsaW5rLmNsb3Nlc3QoJy5tY2Utcm93Jyk7XG5cbiAgICAgICAgZm9ybURhdGEuc2V0KCdyb3cnLCB0eXBlb2Ygcm93ICE9PSAndW5kZWZpbmVkJyAmJiByb3cgIT09IG51bGwgPyByb3cuZGF0YXNldC5pbmRleCA6IDApO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ2ZpZWxkJywgZWRpdG9yLmRhdGFzZXQuZmllbGQpO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ3RhYmxlJywgZWRpdG9yLmRhdGFzZXQudGFibGUpO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ2FjdGlvbicsIGFjdGlvbik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhZGRpdGlvbmFsRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhZGRpdGlvbmFsRm9ybURhdGEuZm9yRWFjaChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBGT1JNX1NVQk1JVCAtPiBubyBzdWJtaXQgY2FsbGJhY2tzIHNob3VsZCBiZSBmaXJlZFxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lICE9PSAnRk9STV9TVUJNSVQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChpbnB1dC5uYW1lLCBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChpbnB1dC5uYW1lLCBpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCBjdXN0b20gZXZlbnRcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgICAgICBjdXN0b21FdmVudC5pbml0RXZlbnQoJ2FqYXhTdWNjZXNzJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JhY2tlbmQpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnRzID0gcmVzcG9uc2UuY2hpbGROb2Rlc1swXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xvc2VzdCgnLm11bHRpLWNvbHVtbi1lZGl0b3Itd3JhcHBlcicpLnJlcGxhY2VXaXRoKHJlc3BvbnNlLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdENob3NlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdFNvcnRhYmxlKGlzQmFja2VuZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgc2NyaXB0RWxlbWVudHMubGVuZ3RoOyBuKyspXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbChhcnJbbl0uaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbml0RXZlbnQoJ2FqYXhDb21wbGV0ZScsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pbm5lckhUTUwgPSBkYXRhLnJlc3VsdC5odG1sO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsb3Nlc3QoJy5tdWx0aS1jb2x1bW4tZWRpdG9yLXdyYXBwZXInKS5yZXBsYWNlV2l0aChyZXNwb25zZS5jaGlsZE5vZGVzWzBdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdFNvcnRhYmxlKGlzQmFja2VuZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUV2ZW50LmluaXRFdmVudCgnYWpheENvbXBsZXRlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBNdWx0aUNvbHVtbkVkaXRvckJ1bmRsZS5pbml0KTtcblxuLy8gYmFja2VuZCBvbmx5XG4oZnVuY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuYWRkRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50KCdkb21yZWFkeScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgTXVsdGlDb2x1bW5FZGl0b3JCdW5kbGUuaW5pdENob3NlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQkKCcubXVsdGktY29sdW1uLWVkaXRvciBzZWxlY3QudGxfY2hvc2VuJykuZWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsLmluaXRpYWxpemVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaW5pdGlhbGl6ZWQgPSAkJCgnIycgKyBlbC5nZXRBdHRyaWJ1dGUoJ2lkJykpLmNob3NlbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gU29ydGFibGU7Il0sInNvdXJjZVJvb3QiOiIifQ==