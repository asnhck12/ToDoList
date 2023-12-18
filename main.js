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
/* harmony import */ var _to_do_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-list */ "./src/to-do-list.js");


function addToDo(i, toDoListText, toDoListSubmit, divProjectView) {
        var currentForm = JSON.parse(localStorage.getItem("submissions" + i));

    //Submits a to do item
    toDoListSubmit.addEventListener("submit", function(e) {
        e.preventDefault();
        const toDoArray = [];
        const toDoClassArray = [];

        toDoText = toDoListText.value;
        const toDoListDiv = document.createElement('ul');
        toDoListDiv.setAttribute('id', 'toDoList');
        
        //Creates a new item to the to-do list to be stored into localstorage
        if (currentForm.toDo === undefined) {
            toDoArray.push(toDoText);
            toDoClassArray.push("No");
        }
        else {
            toDoArray.push(...currentForm.toDo, toDoText);
            toDoClassArray.push(...currentForm.toDoClass, "No");
        }
        currentForm.toDo = toDoArray;
            currentForm.toDoClass = toDoClassArray;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
            toDoListText.value = '';
            (0,_to_do_list__WEBPACK_IMPORTED_MODULE_0__.toDoListListed)(divProjectView, currentForm, "submissions" + i) 
}
)}


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
function editToDoList (i, currentForm, formSubmissionItem, toDoItem) {
    let toDoClassArrayCurrent = currentForm.toDoClass;
    
        //Adds or removes the class that is striked through whichever todo is selected
            toDoItem.addEventListener("click", function() {
                if (toDoItem.classList.contains("strkthru")){
                    console.log("Array Class: " + toDoClassArrayCurrent);
                    toDoItem.classList.remove("strkthru");
                    toDoClassArrayCurrent[i] = "No";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionItem), JSON.stringify(currentForm));    
                }
                else {
                    toDoItem.classList.add("strkthru");
                    console.log("Array Class: " + toDoClassArrayCurrent);
                    toDoClassArrayCurrent[i] = "Yes";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionItem), JSON.stringify(currentForm));    
    }
   }   )
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
function formSubmission(form) {
    var j = -1;
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        //stores all form details in local storage
        var items = document.getElementsByClassName("projectForm");
        j += 1;
        const formData = {};
        
        for (let i = 0; i < items.length; i++) {
            formData[items[i].name]=items[i].value;
        }
        var submission = "submissions" + j;
        localStorage.setItem(submission, JSON.stringify(formData));
        formSection.style.display="none";
    })};


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

//Create a list of the projects
function projectSidebar(projectOptions) {
    form.addEventListener("submit", function(e) {
    projectCount +=1;

        var submission = "submissions" + projectCount;
        var formSubmissionData = JSON.parse(localStorage.getItem(submission));

        let projectName = formSubmissionData.project;

        const newProjectDiv = document.createElement('div');
        const newProjectHeading = document.createElement('h3');
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
/* harmony import */ var _to_do_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do-list */ "./src/to-do-list.js");



function projectMainSection () {

var mainDiv = document.getElementById("projectLists");
var divProjects = mainDiv.getElementsByClassName("projectHeaders");
var divProjectView = document.getElementById("fullProjectView");
var br = document.createElement("br");

//Generates details of a submitted project based on stored details submitted using the form
for (let i = 0; i < divProjects.length; i++) {
        divProjects[i].addEventListener("click", function() {
            for (let j = 0; j < divProjects.length; j++) {
                divProjects[j].removeAttribute("id");
            }
            divProjects[i].setAttribute("id", "selectedProject");
            this.setAttribute("id", "selected-project"); 
            divProjectView.innerHTML="";
            
            var formSubmissionArray = JSON.parse(localStorage.getItem("submissions" + i));
            var formSubmissionSpecific = "submissions" + i;

            let title = formSubmissionArray.project;
            let description = formSubmissionArray.Description;
            let dueDate = formSubmissionArray.dueDate;
            let priority = formSubmissionArray.priority;
            let toDoList = formSubmissionArray.toDo;
            
            const projectHeader = document.createElement('h1');
            projectHeader.innerHTML = title;
            divProjectView.appendChild(projectHeader);

            const projectDescription = document.createElement('p');
            projectDescription.innerHTML = "Description: " + description;
            divProjectView.appendChild(projectDescription);

            const projectDueDate = document.createElement('input');
            projectDueDate.type = "date";
            projectDueDate.value = dueDate;
            projectDueDate.setAttribute("id", "dueDate");
            const projectDueDateTitle = document.createElement("label")
            projectDueDateTitle.setAttribute("for", "date");
            projectDueDateTitle.innerHTML = "Due Date: ";
            divProjectView.appendChild(projectDueDateTitle);
            divProjectView.appendChild(projectDueDate);
            projectDueDate.addEventListener("change", function(e) {
                var formSubmissionArray = JSON.parse(localStorage.getItem("submissions" + i));
                formSubmissionArray.dueDate = projectDueDate.value;
                localStorage.setItem("submissions" + i, JSON.stringify(formSubmissionArray));
            });
            divProjectView.appendChild(document.createElement("br"));
            divProjectView.appendChild(document.createElement("br"));

            const projectPriority = document.createElement('select');
            projectPriority.classList.add("projectForm");
            projectPriority.setAttribute("id", "priority");            
            projectPriority.setAttribute("name", "priority");
            const projectPriorityOption1 = document.createElement("option");
            projectPriorityOption1.setAttribute("value","High");
            projectPriorityOption1.innerHTML = "High";
            const projectPriorityOption2 = document.createElement("option");
            projectPriorityOption2.setAttribute("value","Medium");
            projectPriorityOption2.innerHTML = "Medium";
            const projectPriorityOption3 = document.createElement("option");
            projectPriorityOption3.setAttribute("value","Low");
            projectPriorityOption3.innerHTML = "Low";            
            const projectPriorityTitle = document.createElement("label")
            projectPriorityTitle.setAttribute("for", "priority");
            projectPriorityTitle.innerHTML = "Priority: ";
            projectPriority.appendChild(projectPriorityOption1);
            projectPriority.appendChild(projectPriorityOption2);
            projectPriority.appendChild(projectPriorityOption3);
            projectPriority.value = priority;
            divProjectView.appendChild(projectPriorityTitle);
            divProjectView.appendChild(projectPriority);
            projectPriority.addEventListener("change", function(e) {
                var formSubmissionArray = JSON.parse(localStorage.getItem("submissions" + i));
                formSubmissionArray.priority = projectPriority.value;
                localStorage.setItem("submissions" + i, JSON.stringify(formSubmissionArray));
            })
    
            divProjectView.appendChild(document.createElement("br"));
            divProjectView.appendChild(document.createElement("br"));

            const toDoListText = document.createElement('input');
            toDoListText.setAttribute("type", "text");
            toDoListText.setAttribute('id','toDoText');
            toDoListText.setAttribute('minlength', '5');
            toDoListText.required = true;
            const toDoListSubmitTitle = document.createElement("label");
            toDoListSubmitTitle.setAttribute("for", "toDoList");
            toDoListSubmitTitle.innerHTML = "To Do List: ";
            divProjectView.appendChild(toDoListSubmitTitle);

            const toDoListSubmit = document.createElement('button');
            toDoListSubmit.setAttribute('type', 'submit');
            toDoListSubmit.setAttribute('id','submitToDo');
            toDoListSubmit.innerHTML = "Add";

            const toDoForm = document.createElement( 'form' );
            toDoForm.setAttribute("id","toDoForm");
            toDoForm.appendChild(toDoListText);
            toDoForm.appendChild(toDoListSubmit);
            divProjectView.appendChild(toDoForm);

            (0,_add_to_do_list__WEBPACK_IMPORTED_MODULE_0__.addToDo)(i, toDoListText, toDoForm, divProjectView);
            (0,_to_do_list__WEBPACK_IMPORTED_MODULE_1__.toDoListListed)(divProjectView, formSubmissionArray, formSubmissionSpecific);
            

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
/* harmony import */ var _edit_to_do_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-to-do-list */ "./src/edit-to-do-list.js");


function toDoListListed(divProjectView, currentForm, formSubmissionSpecific) {

let toDoListCurrent = currentForm.toDo;
let toDoListDiv;



if (document.getElementById("toDoList") === null) {
    toDoListDiv = document.createElement('ul');
    toDoListDiv.setAttribute('id', 'toDoList');
}
else {
    toDoListDiv = document.getElementById("toDoList"); 
}
    //Checks if there are any items in the to do list
        if (toDoListCurrent === undefined) {
        }
        //Runs when there are items in the to do list
        else {
            toDoListDiv.innerHTML = "";
                //for each item in the to do list a list item is created and appended to To Do section
            for (let i = 0; i < toDoListCurrent.length; i++) {
                const toDoItem = document.createElement('li');
                toDoItem.textContent = toDoListCurrent[i];
                toDoListDiv.appendChild(toDoItem);
                if (currentForm.toDoClass[i] === "Yes"){
                    toDoItem.classList.add("strkthru");
                }
                (0,_edit_to_do_list__WEBPACK_IMPORTED_MODULE_0__.editToDoList)(i, currentForm,formSubmissionSpecific, toDoItem);    
            }
            divProjectView.appendChild(toDoListDiv);
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



const newProjectButton = document.getElementById("newProjectButton");
const projectLists = document.getElementById("projectLists");
const closeButton = document.getElementById("close-form");
const form = document.getElementById("form");
const formSection = document.getElementById("formSection");


localStorage.clear();
formSection.style.display="none";

//opens the project view
newProjectButton.addEventListener("click", function(a) {
    formSection.style.display="block";
});

//close the project view
closeButton.addEventListener("click", function(a) {
    formSection.style.display="none";
    form.reset();
});

//Form submissions
(0,_form_js__WEBPACK_IMPORTED_MODULE_0__.formSubmission)(form);

//Display and select projects in the sidebar
(0,_project_lists_js__WEBPACK_IMPORTED_MODULE_1__.projectSidebar)(projectLists);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRXZDO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYztBQUMxQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7O0FDcEJPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJrRDs7QUFFdkQ7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxvRUFBa0I7QUFDMUIsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCa0M7QUFDRzs7QUFFdkM7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHdEQUFPO0FBQ25CLFlBQVksMkRBQWM7QUFDMUI7O0FBRUEsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDOUdvQzs7QUFFMUM7O0FBRVA7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4REFBWTtBQUM1QjtBQUNBO0FBQ0E7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNROztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esd0RBQWM7O0FBRWQ7QUFDQSxpRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZC10by1kby1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXQtdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtbGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC1tYWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvLWRvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0RvTGlzdExpc3RlZCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8oaSwgdG9Eb0xpc3RUZXh0LCB0b0RvTGlzdFN1Ym1pdCwgZGl2UHJvamVjdFZpZXcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRGb3JtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpKSk7XG5cbiAgICAvL1N1Ym1pdHMgYSB0byBkbyBpdGVtXG4gICAgdG9Eb0xpc3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdG9Eb0FycmF5ID0gW107XG4gICAgICAgIGNvbnN0IHRvRG9DbGFzc0FycmF5ID0gW107XG5cbiAgICAgICAgdG9Eb1RleHQgPSB0b0RvTGlzdFRleHQudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9MaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdG9Eb0xpc3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b0RvTGlzdCcpO1xuICAgICAgICBcbiAgICAgICAgLy9DcmVhdGVzIGEgbmV3IGl0ZW0gdG8gdGhlIHRvLWRvIGxpc3QgdG8gYmUgc3RvcmVkIGludG8gbG9jYWxzdG9yYWdlXG4gICAgICAgIGlmIChjdXJyZW50Rm9ybS50b0RvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvRG9BcnJheS5wdXNoKHRvRG9UZXh0KTtcbiAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5LnB1c2goXCJOb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvRG9BcnJheS5wdXNoKC4uLmN1cnJlbnRGb3JtLnRvRG8sIHRvRG9UZXh0KTtcbiAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5LnB1c2goLi4uY3VycmVudEZvcm0udG9Eb0NsYXNzLCBcIk5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRGb3JtLnRvRG8gPSB0b0RvQXJyYXk7XG4gICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvQ2xhc3MgPSB0b0RvQ2xhc3NBcnJheTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRGb3JtKSk7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRvRG9MaXN0TGlzdGVkKGRpdlByb2plY3RWaWV3LCBjdXJyZW50Rm9ybSwgXCJzdWJtaXNzaW9uc1wiICsgaSkgXG59XG4pfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb0RvTGlzdCAoaSwgY3VycmVudEZvcm0sIGZvcm1TdWJtaXNzaW9uSXRlbSwgdG9Eb0l0ZW0pIHtcbiAgICBsZXQgdG9Eb0NsYXNzQXJyYXlDdXJyZW50ID0gY3VycmVudEZvcm0udG9Eb0NsYXNzO1xuICAgIFxuICAgICAgICAvL0FkZHMgb3IgcmVtb3ZlcyB0aGUgY2xhc3MgdGhhdCBpcyBzdHJpa2VkIHRocm91Z2ggd2hpY2hldmVyIHRvZG8gaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIHRvRG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodG9Eb0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Rya3RocnVcIikpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFycmF5IENsYXNzOiBcIiArIHRvRG9DbGFzc0FycmF5Q3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXlDdXJyZW50W2ldID0gXCJOb1wiO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvQ2xhc3MgPSB0b0RvQ2xhc3NBcnJheUN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKChmb3JtU3VibWlzc2lvbkl0ZW0pLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpOyAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBcnJheSBDbGFzczogXCIgKyB0b0RvQ2xhc3NBcnJheUN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvQ2xhc3NBcnJheUN1cnJlbnRbaV0gPSBcIlllc1wiO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvQ2xhc3MgPSB0b0RvQ2xhc3NBcnJheUN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKChmb3JtU3VibWlzc2lvbkl0ZW0pLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpOyAgICBcbiAgICB9XG4gICB9ICAgKVxuICAgIH0iLCJleHBvcnQgZnVuY3Rpb24gZm9ybVN1Ym1pc3Npb24oZm9ybSkge1xuICAgIHZhciBqID0gLTE7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vc3RvcmVzIGFsbCBmb3JtIGRldGFpbHMgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEZvcm1cIik7XG4gICAgICAgIGogKz0gMTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2l0ZW1zW2ldLm5hbWVdPWl0ZW1zW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJtaXNzaW9uID0gXCJzdWJtaXNzaW9uc1wiICsgajtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3VibWlzc2lvbiwgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpKTtcbiAgICAgICAgZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICB9KX07XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFpblNlY3Rpb24gfSBmcm9tICcuL3Byb2plY3QtbWFpbi5qcyc7XG5cbnZhciBwcm9qZWN0Q291bnQgPSAtMTtcblxuLy9DcmVhdGUgYSBsaXN0IG9mIHRoZSBwcm9qZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RTaWRlYmFyKHByb2plY3RPcHRpb25zKSB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBwcm9qZWN0Q291bnQgKz0xO1xuXG4gICAgICAgIHZhciBzdWJtaXNzaW9uID0gXCJzdWJtaXNzaW9uc1wiICsgcHJvamVjdENvdW50O1xuICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdWJtaXNzaW9uKSk7XG5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZm9ybVN1Ym1pc3Npb25EYXRhLnByb2plY3Q7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RIZWFkZXJzXCIpO1xuICAgICAgICBuZXdQcm9qZWN0SGVhZGluZy5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SGVhZGluZyk7XG4gICAgICAgIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuXG4gICAgICAgIHByb2plY3RNYWluU2VjdGlvbigpO1xuICAgICAgICB9KX0iLCJpbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSBcIi4vYWRkLXRvLWRvLWxpc3RcIjtcbmltcG9ydCB7IHRvRG9MaXN0TGlzdGVkIH0gZnJvbSBcIi4vdG8tZG8tbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE1haW5TZWN0aW9uICgpIHtcblxudmFyIG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0c1wiKTtcbnZhciBkaXZQcm9qZWN0cyA9IG1haW5EaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RIZWFkZXJzXCIpO1xudmFyIGRpdlByb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWxsUHJvamVjdFZpZXdcIik7XG52YXIgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbi8vR2VuZXJhdGVzIGRldGFpbHMgb2YgYSBzdWJtaXR0ZWQgcHJvamVjdCBiYXNlZCBvbiBzdG9yZWQgZGV0YWlscyBzdWJtaXR0ZWQgdXNpbmcgdGhlIGZvcm1cbmZvciAobGV0IGkgPSAwOyBpIDwgZGl2UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGl2UHJvamVjdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkaXZQcm9qZWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGRpdlByb2plY3RzW2pdLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2UHJvamVjdHNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZFByb2plY3RcIik7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtcHJvamVjdFwiKTsgXG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5pbm5lckhUTUw9XCJcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGkpKTtcbiAgICAgICAgICAgIHZhciBmb3JtU3VibWlzc2lvblNwZWNpZmljID0gXCJzdWJtaXNzaW9uc1wiICsgaTtcblxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZm9ybVN1Ym1pc3Npb25BcnJheS5wcm9qZWN0O1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybVN1Ym1pc3Npb25BcnJheS5EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlID0gZm9ybVN1Ym1pc3Npb25BcnJheS5kdWVEYXRlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybVN1Ym1pc3Npb25BcnJheS5wcmlvcml0eTtcbiAgICAgICAgICAgIGxldCB0b0RvTGlzdCA9IGZvcm1TdWJtaXNzaW9uQXJyYXkudG9EbztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IHRpdGxlO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUudmFsdWUgPSBkdWVEYXRlO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdER1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICAgICAgcHJvamVjdER1ZURhdGVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGVUaXRsZS5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlOiBcIjtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlVGl0bGUpO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGUpO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGkpKTtcbiAgICAgICAgICAgICAgICBmb3JtU3VibWlzc2lvbkFycmF5LmR1ZURhdGUgPSBwcm9qZWN0RHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpLCBKU09OLnN0cmluZ2lmeShmb3JtU3VibWlzc2lvbkFycmF5KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIkhpZ2hcIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24xLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5T3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJNZWRpdW1cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24yLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjMuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIkxvd1wiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjMuaW5uZXJIVE1MID0gXCJMb3dcIjsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eU9wdGlvbjEpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eU9wdGlvbjIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eU9wdGlvbjMpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlUaXRsZSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3JtU3VibWlzc2lvbkFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpKSk7XG4gICAgICAgICAgICAgICAgZm9ybVN1Ym1pc3Npb25BcnJheS5wcmlvcml0eSA9IHByb2plY3RQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpLCBKU09OLnN0cmluZ2lmeShmb3JtU3VibWlzc2lvbkFycmF5KSk7XG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvRG9UZXh0Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnNScpO1xuICAgICAgICAgICAgdG9Eb0xpc3RUZXh0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0U3VibWl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvRG9MaXN0XCIpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXRUaXRsZS5pbm5lckhUTUwgPSBcIlRvIERvIExpc3Q6IFwiO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9Eb0xpc3RTdWJtaXRUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VibWl0VG9EbycpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXQuaW5uZXJIVE1MID0gXCJBZGRcIjtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZm9ybScgKTtcbiAgICAgICAgICAgIHRvRG9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0b0RvRm9ybVwiKTtcbiAgICAgICAgICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9MaXN0VGV4dCk7XG4gICAgICAgICAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvTGlzdFN1Ym1pdCk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvRm9ybSk7XG5cbiAgICAgICAgICAgIGFkZFRvRG8oaSwgdG9Eb0xpc3RUZXh0LCB0b0RvRm9ybSwgZGl2UHJvamVjdFZpZXcpO1xuICAgICAgICAgICAgdG9Eb0xpc3RMaXN0ZWQoZGl2UHJvamVjdFZpZXcsIGZvcm1TdWJtaXNzaW9uQXJyYXksIGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH0pfX0iLCJpbXBvcnQgeyBlZGl0VG9Eb0xpc3QgfSBmcm9tIFwiLi9lZGl0LXRvLWRvLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvRG9MaXN0TGlzdGVkKGRpdlByb2plY3RWaWV3LCBjdXJyZW50Rm9ybSwgZm9ybVN1Ym1pc3Npb25TcGVjaWZpYykge1xuXG5sZXQgdG9Eb0xpc3RDdXJyZW50ID0gY3VycmVudEZvcm0udG9EbztcbmxldCB0b0RvTGlzdERpdjtcblxuXG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvRG9MaXN0XCIpID09PSBudWxsKSB7XG4gICAgdG9Eb0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRvRG9MaXN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9Eb0xpc3QnKTtcbn1cbmVsc2Uge1xuICAgIHRvRG9MaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvTGlzdFwiKTsgXG59XG4gICAgLy9DaGVja3MgaWYgdGhlcmUgYXJlIGFueSBpdGVtcyBpbiB0aGUgdG8gZG8gbGlzdFxuICAgICAgICBpZiAodG9Eb0xpc3RDdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgfVxuICAgICAgICAvL1J1bnMgd2hlbiB0aGVyZSBhcmUgaXRlbXMgaW4gdGhlIHRvIGRvIGxpc3RcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b0RvTGlzdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIC8vZm9yIGVhY2ggaXRlbSBpbiB0aGUgdG8gZG8gbGlzdCBhIGxpc3QgaXRlbSBpcyBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byBUbyBEbyBzZWN0aW9uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9MaXN0Q3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS50ZXh0Q29udGVudCA9IHRvRG9MaXN0Q3VycmVudFtpXTtcbiAgICAgICAgICAgICAgICB0b0RvTGlzdERpdi5hcHBlbmRDaGlsZCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGb3JtLnRvRG9DbGFzc1tpXSA9PT0gXCJZZXNcIil7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWRpdFRvRG9MaXN0KGksIGN1cnJlbnRGb3JtLGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMsIHRvRG9JdGVtKTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdERpdik7XG4gICAgICAgIH19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtU3VibWlzc2lvbiB9IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0U2lkZWJhciB9IGZyb20gJy4vcHJvamVjdC1saXN0cy5qcydcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RzXCIpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWZvcm1cIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1TZWN0aW9uXCIpO1xuXG5cbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuLy9vcGVucyB0aGUgcHJvamVjdCB2aWV3XG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihhKSB7XG4gICAgZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG59KTtcblxuLy9jbG9zZSB0aGUgcHJvamVjdCB2aWV3XG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oYSkge1xuICAgIGZvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgZm9ybS5yZXNldCgpO1xufSk7XG5cbi8vRm9ybSBzdWJtaXNzaW9uc1xuZm9ybVN1Ym1pc3Npb24oZm9ybSk7XG5cbi8vRGlzcGxheSBhbmQgc2VsZWN0IHByb2plY3RzIGluIHRoZSBzaWRlYmFyXG5wcm9qZWN0U2lkZWJhcihwcm9qZWN0TGlzdHMpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=