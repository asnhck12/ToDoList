/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-to-do-list.js":
/*!*******************************!*\
  !*** ./src/add-to-do-list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDo": () => (/* binding */ addToDo)
/* harmony export */ });
function addToDo(i, toDoListText, toDoListSubmit) {
        const toDoArray = [];
    toDoListSubmit.addEventListener("click", function() {
        var currentForm = JSON.parse(localStorage.getItem("submissions" + i));

        toDoText = toDoListText.value;

        if (currentForm.toDo === undefined) {
            toDoArray.push(toDoText);
            currentForm.toDo = toDoArray;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
    
        }
        else {
            const toDoArray = [];
            toDoArray.push(...currentForm.toDo, toDoText);
            currentForm.toDo = toDoArray;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
    
        };
        }    
    )};

/***/ }),

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
    var j = -1;
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const formSubmissions = [];

        //store form details in local storage
        var items = document.getElementsByClassName("projectForm");
        j += 1;
        const formData = {};
        
        for (let i = 0; i < items.length; i++) {
            formData[items[i].name]=items[i].value;
        }
        console.log("form: " + formData);
        var submission = "submissions" + j;
        localStorage.setItem(submission, JSON.stringify(formData));
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
/* harmony import */ var _project_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-main.js */ "./src/project-main.js");


var projectCount = -1;

function projectSidebar(projectOptions) {
    form.addEventListener("submit", function(e) {
    projectCount +=1;

        var submission = "submissions" + projectCount;
        var formSubmissionData = JSON.parse(localStorage.getItem(submission));
        // var formSubmissionData = formSubmissionArray[projectCount];
 
        // console.log(formSubmissionData);
        let projectName = formSubmissionData.project;

        const newProjectDiv = document.createElement('div');
        const newProjectHeading = document.createElement('h3');
        newProjectDiv.setAttribute ('id', 'projectNum' + projectCount);
        newProjectDiv.classList.add("projectHeaders");
        newProjectHeading.innerHTML = projectName;
        newProjectDiv.appendChild(newProjectHeading);
        projectOptions.appendChild(newProjectDiv);

        (0,_project_main_js__WEBPACK_IMPORTED_MODULE_0__.projectMainSection)();
        // formSubmissionArray, projectName, description, dueDate, priority, toDoList
        })}

/***/ }),

/***/ "./src/project-main.js":
/*!*****************************!*\
  !*** ./src/project-main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectMainSection": () => (/* binding */ projectMainSection)
/* harmony export */ });
/* harmony import */ var _add_to_do_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-do-list */ "./src/add-to-do-list.js");
/* harmony import */ var _project_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-lists */ "./src/project-lists.js");



function projectMainSection () {

var mainDiv = document.getElementById("projectLists");
var divProjects = mainDiv.getElementsByClassName("projectHeaders");
var divProjectView = document.getElementById("fullProjectView");


for (let i = 0; i < divProjects.length; i++) {
        divProjects[i].addEventListener("click", function() {
            divProjectView.innerHTML="";
            var formSubmissionArray = JSON.parse(localStorage.getItem("submissions" + i));

            let title = formSubmissionArray.project;
            let description = formSubmissionArray.Description;
            let dueDate = formSubmissionArray.dueDate;
            let priority = formSubmissionArray.priority;
            let toDoList = formSubmissionArray.toDo;

            
            const projectHeader = document.createElement('h1');
            projectHeader.innerHTML = title;
            divProjectView.appendChild(projectHeader);

            const projectDescription = document.createElement('p');
            projectDescription.innerHTML = description;
            divProjectView.appendChild(projectDescription);

            const projectDueDate = document.createElement('p');
            projectDueDate.innerHTML = dueDate;
            divProjectView.appendChild(projectDueDate);

            const projectPriority = document.createElement('p');
            projectPriority.innerHTML = priority;
            divProjectView.appendChild(projectPriority);

            const toDoListText = document.createElement('input');
            toDoListText.setAttribute("type", "text");
            toDoListText.setAttribute('id','toDoText');
            divProjectView.appendChild(toDoListText);

            const toDoListSubmit = document.createElement('button');
            toDoListSubmit.setAttribute('type', 'submit');
            toDoListSubmit.setAttribute('id','submitToDo');
            toDoListSubmit.innerHTML = "Add";
            divProjectView.appendChild(toDoListSubmit);
            

            (0,_add_to_do_list__WEBPACK_IMPORTED_MODULE_0__.addToDo)(i, toDoListText, toDoListSubmit);

            
            })}}

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
/* harmony import */ var _project_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-main.js */ "./src/project-main.js");
/* harmony import */ var _add_to_do_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-to-do-list.js */ "./src/add-to-do-list.js");





const newProjectButton = document.getElementById("newProjectButton");
const sideBar = document.getElementById("sidebar");
const projectView = document.getElementById("projectView");
const projectLists = document.getElementById("projectLists");
const closeButton = document.getElementById("close-form");
const form = document.getElementById("form");
var divProjectView = document.getElementById("fullProjectView");


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

// addToDo();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnVEOztBQUV2RDs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsb0VBQWtCO0FBQzFCO0FBQ0EsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCa0M7QUFDTTs7QUFFMUM7O0FBRVA7QUFDQTtBQUNBOzs7QUFHQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHdEQUFPOztBQUVuQjtBQUNBLGFBQWE7Ozs7OztVQ3JEYjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ1E7QUFDSTtBQUNUOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esd0RBQWM7O0FBRWQ7QUFDQSxpRUFBYzs7QUFFZCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZC10by1kby1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC1saXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LW1haW4uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYWRkVG9EbyhpLCB0b0RvTGlzdFRleHQsIHRvRG9MaXN0U3VibWl0KSB7XG4gICAgICAgIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuICAgIHRvRG9MaXN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRGb3JtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpKSk7XG5cbiAgICAgICAgdG9Eb1RleHQgPSB0b0RvTGlzdFRleHQudmFsdWU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRGb3JtLnRvRG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG9Eb0FycmF5LnB1c2godG9Eb1RleHQpO1xuICAgICAgICAgICAgY3VycmVudEZvcm0udG9EbyA9IHRvRG9BcnJheTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRGb3JtKSk7XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0b0RvQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHRvRG9BcnJheS5wdXNoKC4uLmN1cnJlbnRGb3JtLnRvRG8sIHRvRG9UZXh0KTtcbiAgICAgICAgICAgIGN1cnJlbnRGb3JtLnRvRG8gPSB0b0RvQXJyYXk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpO1xuICAgIFxuICAgICAgICB9O1xuICAgICAgICB9ICAgIFxuICAgICl9OyIsImNvbnN0IGZvcm1TdWJtaXNzaW9ucyA9IFtdO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtU3VibWlzc2lvbihmb3JtKSB7XG4gICAgdmFyIGogPSAtMTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1TdWJtaXNzaW9ucyA9IFtdO1xuXG4gICAgICAgIC8vc3RvcmUgZm9ybSBkZXRhaWxzIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RGb3JtXCIpO1xuICAgICAgICBqICs9IDE7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge307XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtpdGVtc1tpXS5uYW1lXT1pdGVtc1tpXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImZvcm06IFwiICsgZm9ybURhdGEpO1xuICAgICAgICB2YXIgc3VibWlzc2lvbiA9IFwic3VibWlzc2lvbnNcIiArIGo7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN1Ym1pc3Npb24sIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSk7XG4gICAgfVxuXG4gICAgKVxufTtcbiIsImltcG9ydCB7IHByb2plY3RNYWluU2VjdGlvbiB9IGZyb20gJy4vcHJvamVjdC1tYWluLmpzJztcblxudmFyIHByb2plY3RDb3VudCA9IC0xO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFNpZGViYXIocHJvamVjdE9wdGlvbnMpIHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgIHByb2plY3RDb3VudCArPTE7XG5cbiAgICAgICAgdmFyIHN1Ym1pc3Npb24gPSBcInN1Ym1pc3Npb25zXCIgKyBwcm9qZWN0Q291bnQ7XG4gICAgICAgIHZhciBmb3JtU3VibWlzc2lvbkRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN1Ym1pc3Npb24pKTtcbiAgICAgICAgLy8gdmFyIGZvcm1TdWJtaXNzaW9uRGF0YSA9IGZvcm1TdWJtaXNzaW9uQXJyYXlbcHJvamVjdENvdW50XTtcbiBcbiAgICAgICAgLy8gY29uc29sZS5sb2coZm9ybVN1Ym1pc3Npb25EYXRhKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZm9ybVN1Ym1pc3Npb25EYXRhLnByb2plY3Q7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuc2V0QXR0cmlidXRlICgnaWQnLCAncHJvamVjdE51bScgKyBwcm9qZWN0Q291bnQpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SGVhZGVyc1wiKTtcbiAgICAgICAgbmV3UHJvamVjdEhlYWRpbmcuaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XG4gICAgICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEhlYWRpbmcpO1xuICAgICAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcblxuICAgICAgICBwcm9qZWN0TWFpblNlY3Rpb24oKTtcbiAgICAgICAgLy8gZm9ybVN1Ym1pc3Npb25BcnJheSwgcHJvamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdG9Eb0xpc3RcbiAgICAgICAgfSl9IiwiaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gXCIuL2FkZC10by1kby1saXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0U2lkZWJhciB9IGZyb20gXCIuL3Byb2plY3QtbGlzdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNYWluU2VjdGlvbiAoKSB7XG5cbnZhciBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdHNcIik7XG52YXIgZGl2UHJvamVjdHMgPSBtYWluRGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0SGVhZGVyc1wiKTtcbnZhciBkaXZQcm9qZWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbFByb2plY3RWaWV3XCIpO1xuXG5cbmZvciAobGV0IGkgPSAwOyBpIDwgZGl2UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGl2UHJvamVjdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuaW5uZXJIVE1MPVwiXCI7XG4gICAgICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByb2plY3Q7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtU3VibWlzc2lvbkFycmF5LkRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LmR1ZURhdGU7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByaW9yaXR5O1xuICAgICAgICAgICAgbGV0IHRvRG9MaXN0ID0gZm9ybVN1Ym1pc3Npb25BcnJheS50b0RvO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHByb2plY3REdWVEYXRlLmlubmVySFRNTCA9IGR1ZURhdGU7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5pbm5lckhUTUwgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvRG9UZXh0Jyk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdFRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvTGlzdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ3N1Ym1pdFRvRG8nKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0LmlubmVySFRNTCA9IFwiQWRkXCI7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdFN1Ym1pdCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgYWRkVG9EbyhpLCB0b0RvTGlzdFRleHQsIHRvRG9MaXN0U3VibWl0KTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KX19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtU3VibWlzc2lvbiB9IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0U2lkZWJhciB9IGZyb20gJy4vcHJvamVjdC1saXN0cy5qcydcbmltcG9ydCB7IHByb2plY3RNYWluU2VjdGlvbiB9IGZyb20gJy4vcHJvamVjdC1tYWluLmpzJztcbmltcG9ydCB7IGFkZFRvRG8gfSBmcm9tICcuL2FkZC10by1kby1saXN0LmpzJztcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ1dHRvblwiKTtcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG5jb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFZpZXdcIik7XG5jb25zdCBwcm9qZWN0TGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0c1wiKTtcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1mb3JtXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbnZhciBkaXZQcm9qZWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbFByb2plY3RWaWV3XCIpO1xuXG5cbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vL29wZW5zIHRoZSBwcm9qZWN0IHZpZXdcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGEpIHtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xufSk7XG5cbi8vY2xvc2UgdGhlIHByb2plY3Qgdmlld1xuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGEpIHtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG59KTtcblxuLy9Gb3JtIHN1Ym1pc3Npb25zXG5mb3JtU3VibWlzc2lvbihmb3JtKTtcblxuLy9EaXNwbGF5IGFuZCBzZWxlY3QgcHJvamVjdHMgaW4gdGhlIHNpZGViYXJcbnByb2plY3RTaWRlYmFyKHByb2plY3RMaXN0cyk7XG5cbi8vIGFkZFRvRG8oKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=