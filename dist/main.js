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
function addToDo(i, toDoListText, toDoListSubmit, divProjectView) {
        const toDoArray = [];
    toDoListSubmit.addEventListener("click", function() {
        var currentForm = JSON.parse(localStorage.getItem("submissions" + i));
        let toDoList = currentForm.toDo;

        toDoText = toDoListText.value;
        const toDoListDiv = document.createElement('ul');
        toDoListDiv.setAttribute('id', 'toDoList');

        if (currentForm.toDo === undefined) {
            toDoArray.push(toDoText);
            currentForm.toDo = toDoArray;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
            const toDoItem = document.createElement('li');
            toDoItem.textContent = toDoText;
            toDoListDiv.appendChild(toDoItem);
            divProjectView.appendChild(toDoListDiv);
        }
        else {
            var existingToDoListDiv = document.getElementById("toDoList");
            const toDoArray = [];
            toDoArray.push(...currentForm.toDo, toDoText);
            currentForm.toDo = toDoArray;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
            const toDoItem = document.createElement('li');
            toDoItem.textContent = toDoText;
            existingToDoListDiv.appendChild(toDoItem);
        };
        })};

/***/ }),

/***/ "./src/edit-to-do-list.js":
/*!********************************!*\
  !*** ./src/edit-to-do-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editToDoList": () => (/* binding */ editToDoList)
/* harmony export */ });
function editToDoList () {
    var toDoItem = document.getElementById("toDoList").getElementsByTagName("li");
    toDoItem.addEventListener("click", function() {
        console.log(toDoItem.textContent);
    })
}

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

        let projectName = formSubmissionData.project;

        const newProjectDiv = document.createElement('div');
        const newProjectHeading = document.createElement('h3');
        newProjectDiv.setAttribute ('id', 'projectNum' + projectCount);
        newProjectDiv.classList.add("projectHeaders");
        newProjectHeading.innerHTML = projectName;
        newProjectDiv.appendChild(newProjectHeading);
        projectOptions.appendChild(newProjectDiv);

        (0,_project_main_js__WEBPACK_IMPORTED_MODULE_0__.projectMainSection)();
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
/* harmony import */ var _to_do_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do-list */ "./src/to-do-list.js");




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

           

            (0,_add_to_do_list__WEBPACK_IMPORTED_MODULE_0__.addToDo)(i, toDoListText, toDoListSubmit, divProjectView);

            (0,_to_do_list__WEBPACK_IMPORTED_MODULE_2__.toDoListListed)(divProjectView, formSubmissionArray);
       

            
            })}}

/***/ }),

/***/ "./src/to-do-list.js":
/*!***************************!*\
  !*** ./src/to-do-list.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoListListed": () => (/* binding */ toDoListListed)
/* harmony export */ });
function toDoListListed(divProjectView, currentForm) {

let toDoListCurrent = currentForm.toDo;

        if (toDoListCurrent === undefined) {
        }
        else {
            
                const toDoListDiv = document.createElement('ul');
                toDoListDiv.setAttribute('id', 'toDoList')
                
            for (let i = 0; i < toDoListCurrent.length; i++) {
                const toDoItem = document.createElement('li');
                toDoItem.textContent = toDoListCurrent[i];
                toDoListDiv.appendChild(toDoItem);
                divProjectView.appendChild(toDoListDiv);
                toDoItem.addEventListener("click", function() {
                    console.log(toDoItem.textContent);
                })

            }
        }}


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
/* harmony import */ var _edit_to_do_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-to-do-list.js */ "./src/edit-to-do-list.js");






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUM3QkY7QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDTEE7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnVEOztBQUV2RDs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLG9FQUFrQjtBQUMxQixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCa0M7QUFDTTtBQUNIOztBQUV2Qzs7QUFFUDtBQUNBO0FBQ0E7OztBQUdBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxZQUFZLHdEQUFPOztBQUVuQixZQUFZLDJEQUFjO0FBQzFCOztBQUVBO0FBQ0EsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUMxRE47O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7Ozs7OztVQ3JCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNRO0FBQ0k7QUFDVDtBQUNNOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esd0RBQWM7O0FBRWQ7QUFDQSxpRUFBYzs7QUFFZCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZC10by1kby1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXQtdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtbGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC1tYWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvLWRvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYWRkVG9EbyhpLCB0b0RvTGlzdFRleHQsIHRvRG9MaXN0U3VibWl0LCBkaXZQcm9qZWN0Vmlldykge1xuICAgICAgICBjb25zdCB0b0RvQXJyYXkgPSBbXTtcbiAgICB0b0RvTGlzdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjdXJyZW50Rm9ybSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuICAgICAgICBsZXQgdG9Eb0xpc3QgPSBjdXJyZW50Rm9ybS50b0RvO1xuXG4gICAgICAgIHRvRG9UZXh0ID0gdG9Eb0xpc3RUZXh0LnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRvRG9MaXN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9Eb0xpc3QnKTtcblxuICAgICAgICBpZiAoY3VycmVudEZvcm0udG9EbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b0RvQXJyYXkucHVzaCh0b0RvVGV4dCk7XG4gICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvID0gdG9Eb0FycmF5O1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZvcm0pKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHRvRG9JdGVtLnRleHRDb250ZW50ID0gdG9Eb1RleHQ7XG4gICAgICAgICAgICB0b0RvTGlzdERpdi5hcHBlbmRDaGlsZCh0b0RvSXRlbSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdERpdik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdUb0RvTGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9Eb0xpc3RcIik7XG4gICAgICAgICAgICBjb25zdCB0b0RvQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHRvRG9BcnJheS5wdXNoKC4uLmN1cnJlbnRGb3JtLnRvRG8sIHRvRG9UZXh0KTtcbiAgICAgICAgICAgIGN1cnJlbnRGb3JtLnRvRG8gPSB0b0RvQXJyYXk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdG9Eb0l0ZW0udGV4dENvbnRlbnQgPSB0b0RvVGV4dDtcbiAgICAgICAgICAgIGV4aXN0aW5nVG9Eb0xpc3REaXYuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pO1xuICAgICAgICB9O1xuICAgICAgICB9KX07IiwiZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb0RvTGlzdCAoKSB7XG4gICAgdmFyIHRvRG9JdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvTGlzdFwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgIHRvRG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb0l0ZW0udGV4dENvbnRlbnQpO1xuICAgIH0pXG59IiwiY29uc3QgZm9ybVN1Ym1pc3Npb25zID0gW107XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1TdWJtaXNzaW9uKGZvcm0pIHtcbiAgICB2YXIgaiA9IC0xO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybVN1Ym1pc3Npb25zID0gW107XG5cbiAgICAgICAgLy9zdG9yZSBmb3JtIGRldGFpbHMgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEZvcm1cIik7XG4gICAgICAgIGogKz0gMTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2l0ZW1zW2ldLm5hbWVdPWl0ZW1zW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm9ybTogXCIgKyBmb3JtRGF0YSk7XG4gICAgICAgIHZhciBzdWJtaXNzaW9uID0gXCJzdWJtaXNzaW9uc1wiICsgajtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3VibWlzc2lvbiwgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpKTtcbiAgICB9XG5cbiAgICApXG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdE1haW5TZWN0aW9uIH0gZnJvbSAnLi9wcm9qZWN0LW1haW4uanMnO1xuXG52YXIgcHJvamVjdENvdW50ID0gLTE7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0U2lkZWJhcihwcm9qZWN0T3B0aW9ucykge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgcHJvamVjdENvdW50ICs9MTtcblxuICAgICAgICB2YXIgc3VibWlzc2lvbiA9IFwic3VibWlzc2lvbnNcIiArIHByb2plY3RDb3VudDtcbiAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3VibWlzc2lvbikpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGZvcm1TdWJtaXNzaW9uRGF0YS5wcm9qZWN0O1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSAoJ2lkJywgJ3Byb2plY3ROdW0nICsgcHJvamVjdENvdW50KTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlcnNcIik7XG4gICAgICAgIG5ld1Byb2plY3RIZWFkaW5nLmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RIZWFkaW5nKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICAgICAgcHJvamVjdE1haW5TZWN0aW9uKCk7XG4gICAgICAgIH0pfSIsImltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi9hZGQtdG8tZG8tbGlzdFwiO1xuaW1wb3J0IHsgcHJvamVjdFNpZGViYXIgfSBmcm9tIFwiLi9wcm9qZWN0LWxpc3RzXCI7XG5pbXBvcnQgeyB0b0RvTGlzdExpc3RlZCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNYWluU2VjdGlvbiAoKSB7XG5cbnZhciBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdHNcIik7XG52YXIgZGl2UHJvamVjdHMgPSBtYWluRGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0SGVhZGVyc1wiKTtcbnZhciBkaXZQcm9qZWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbFByb2plY3RWaWV3XCIpO1xuXG5cbmZvciAobGV0IGkgPSAwOyBpIDwgZGl2UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGl2UHJvamVjdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuaW5uZXJIVE1MPVwiXCI7XG4gICAgICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByb2plY3Q7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtU3VibWlzc2lvbkFycmF5LkRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LmR1ZURhdGU7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByaW9yaXR5O1xuICAgICAgICAgICAgbGV0IHRvRG9MaXN0ID0gZm9ybVN1Ym1pc3Npb25BcnJheS50b0RvO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHByb2plY3REdWVEYXRlLmlubmVySFRNTCA9IGR1ZURhdGU7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5pbm5lckhUTUwgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvRG9UZXh0Jyk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdFRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvTGlzdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ3N1Ym1pdFRvRG8nKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0LmlubmVySFRNTCA9IFwiQWRkXCI7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdFN1Ym1pdCk7XG5cbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGFkZFRvRG8oaSwgdG9Eb0xpc3RUZXh0LCB0b0RvTGlzdFN1Ym1pdCwgZGl2UHJvamVjdFZpZXcpO1xuXG4gICAgICAgICAgICB0b0RvTGlzdExpc3RlZChkaXZQcm9qZWN0VmlldywgZm9ybVN1Ym1pc3Npb25BcnJheSk7XG4gICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSl9fSIsImV4cG9ydCBmdW5jdGlvbiB0b0RvTGlzdExpc3RlZChkaXZQcm9qZWN0VmlldywgY3VycmVudEZvcm0pIHtcblxubGV0IHRvRG9MaXN0Q3VycmVudCA9IGN1cnJlbnRGb3JtLnRvRG87XG5cbiAgICAgICAgaWYgKHRvRG9MaXN0Q3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgdG9Eb0xpc3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b0RvTGlzdCcpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9MaXN0Q3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS50ZXh0Q29udGVudCA9IHRvRG9MaXN0Q3VycmVudFtpXTtcbiAgICAgICAgICAgICAgICB0b0RvTGlzdERpdi5hcHBlbmRDaGlsZCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9Eb0xpc3REaXYpO1xuICAgICAgICAgICAgICAgIHRvRG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9Eb0l0ZW0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfX1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZm9ybVN1Ym1pc3Npb24gfSBmcm9tICcuL2Zvcm0uanMnO1xuaW1wb3J0IHsgcHJvamVjdFNpZGViYXIgfSBmcm9tICcuL3Byb2plY3QtbGlzdHMuanMnXG5pbXBvcnQgeyBwcm9qZWN0TWFpblNlY3Rpb24gfSBmcm9tICcuL3Byb2plY3QtbWFpbi5qcyc7XG5pbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSAnLi9hZGQtdG8tZG8tbGlzdC5qcyc7XG5pbXBvcnQgeyBlZGl0VG9Eb0xpc3QgfSBmcm9tICcuL2VkaXQtdG8tZG8tbGlzdC5qcyc7XG5cbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdXR0b25cIik7XG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RWaWV3XCIpO1xuY29uc3QgcHJvamVjdExpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdHNcIik7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZm9ybVwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG52YXIgZGl2UHJvamVjdFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxQcm9qZWN0Vmlld1wiKTtcblxuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuLy9vcGVucyB0aGUgcHJvamVjdCB2aWV3XG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihhKSB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbn0pO1xuXG4vL2Nsb3NlIHRoZSBwcm9qZWN0IHZpZXdcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihhKSB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xufSk7XG5cbi8vRm9ybSBzdWJtaXNzaW9uc1xuZm9ybVN1Ym1pc3Npb24oZm9ybSk7XG5cbi8vRGlzcGxheSBhbmQgc2VsZWN0IHByb2plY3RzIGluIHRoZSBzaWRlYmFyXG5wcm9qZWN0U2lkZWJhcihwcm9qZWN0TGlzdHMpO1xuXG4vLyBhZGRUb0RvKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=