/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formSubmission": () => (/* binding */ formSubmission)
/* harmony export */ });
const formSubmissions = [];


function formSubmission(form) {
    var j = 0;
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        //store form details in local storage
        var items = document.getElementsByClassName("projectForm");
        j += 1;
        const formData = {};
        
        for (let i = 0; i < items.length; i++) {
            formData[items[i].name]=items[i].value;
        }
        formSubmissions.push(formData);
        localStorage.setItem("submissions", JSON.stringify(formSubmissions));
    }

    )
};


/***/ }),

/***/ "./src/project-lists.js":
/*!******************************!*\
  !*** ./src/project-lists.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectSidebar": () => (/* binding */ projectSidebar)
/* harmony export */ });
var projectCount = -1;

function projectSidebar(projectOptions) {
    form.addEventListener("submit", function(e) {
    projectCount +=1;

        var formSubmissionArray = JSON.parse(localStorage.getItem("submissions"));
        var formSubmissionData = formSubmissionArray[projectCount];
 
        let projectName = formSubmissionData.project;
        let description = formSubmissionData.Description;
        let dueDate = formSubmissionData.dueDate;
        let priority = formSubmissionData.priority;
        let toDoList = formSubmissionData.toDo;

        const newProjectDiv = document.createElement('div');
        const newProjectHeading = document.createElement('h3');
        newProjectDiv.className = 'projectNum' + projectCount;
        newProjectHeading.innerHTML = projectName;
        newProjectDiv.appendChild(newProjectHeading);
        projectOptions.appendChild(newProjectDiv);

                console.log(projectName);
                console.log(description);
                console.log(dueDate);
                console.log(priority);
                console.log(toDoList);
        })}
 


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _project_lists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-lists.js */ "./src/project-lists.js");



const newProjectButton = document.getElementById("newProjectButton");
const sideBar = document.getElementById("sidebar");
const projectView = document.getElementById("projectView");
const projectLists = document.getElementById("projectLists");
const closeButton = document.getElementById("close-form");
const form = document.getElementById("form");

localStorage.clear();

//opens the project view
newProjectButton.addEventListener("click", function(a) {
    form.style.display="block";
});


//close the project view
closeButton.addEventListener("click", function(a) {
    form.style.display="none";
});

//Form submissions
(0,_form_js__WEBPACK_IMPORTED_MODULE_0__.formSubmission)(form);

//Display and select projects in the sidebar
(0,_project_lists_js__WEBPACK_IMPORTED_MODULE_1__.projectSidebar)(projectLists);

//module to show the projects and the associated tasks in the main section

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7Ozs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDUTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSx3REFBYzs7QUFFZDtBQUNBLGlFQUFjOztBQUVkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LWxpc3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybVN1Ym1pc3Npb25zID0gW107XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1TdWJtaXNzaW9uKGZvcm0pIHtcbiAgICB2YXIgaiA9IDA7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgLy9zdG9yZSBmb3JtIGRldGFpbHMgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEZvcm1cIik7XG4gICAgICAgIGogKz0gMTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2l0ZW1zW2ldLm5hbWVdPWl0ZW1zW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1TdWJtaXNzaW9ucy5wdXNoKGZvcm1EYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdWJtaXNzaW9uc1wiLCBKU09OLnN0cmluZ2lmeShmb3JtU3VibWlzc2lvbnMpKTtcbiAgICB9XG5cbiAgICApXG59O1xuIiwidmFyIHByb2plY3RDb3VudCA9IC0xO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFNpZGViYXIocHJvamVjdE9wdGlvbnMpIHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgIHByb2plY3RDb3VudCArPTE7XG5cbiAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3VibWlzc2lvbnNcIikpO1xuICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25EYXRhID0gZm9ybVN1Ym1pc3Npb25BcnJheVtwcm9qZWN0Q291bnRdO1xuIFxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBmb3JtU3VibWlzc2lvbkRhdGEucHJvamVjdDtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybVN1Ym1pc3Npb25EYXRhLkRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGZvcm1TdWJtaXNzaW9uRGF0YS5kdWVEYXRlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtU3VibWlzc2lvbkRhdGEucHJpb3JpdHk7XG4gICAgICAgIGxldCB0b0RvTGlzdCA9IGZvcm1TdWJtaXNzaW9uRGF0YS50b0RvO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTmFtZSA9ICdwcm9qZWN0TnVtJyArIHByb2plY3RDb3VudDtcbiAgICAgICAgbmV3UHJvamVjdEhlYWRpbmcuaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XG4gICAgICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEhlYWRpbmcpO1xuICAgICAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvRG9MaXN0KTtcbiAgICAgICAgfSl9XG4gXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZvcm1TdWJtaXNzaW9uIH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IHByb2plY3RTaWRlYmFyIH0gZnJvbSAnLi9wcm9qZWN0LWxpc3RzLmpzJ1xuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnV0dG9uXCIpO1xuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbmNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Vmlld1wiKTtcbmNvbnN0IHByb2plY3RMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RzXCIpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWZvcm1cIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuLy9vcGVucyB0aGUgcHJvamVjdCB2aWV3XG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihhKSB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbn0pO1xuXG5cbi8vY2xvc2UgdGhlIHByb2plY3Qgdmlld1xuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGEpIHtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG59KTtcblxuLy9Gb3JtIHN1Ym1pc3Npb25zXG5mb3JtU3VibWlzc2lvbihmb3JtKTtcblxuLy9EaXNwbGF5IGFuZCBzZWxlY3QgcHJvamVjdHMgaW4gdGhlIHNpZGViYXJcbnByb2plY3RTaWRlYmFyKHByb2plY3RMaXN0cyk7XG5cbi8vbW9kdWxlIHRvIHNob3cgdGhlIHByb2plY3RzIGFuZCB0aGUgYXNzb2NpYXRlZCB0YXNrcyBpbiB0aGUgbWFpbiBzZWN0aW9uXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=