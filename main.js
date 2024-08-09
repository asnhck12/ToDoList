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
        
        //Adds a new item to the to-do list to be stored in the localstorage
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
                    toDoItem.classList.remove("strkthru");
                    toDoClassArrayCurrent[i] = "No";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionItem), JSON.stringify(currentForm));    
                }
                else {
                    toDoItem.classList.add("strkthru");
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

        //stores all form details in the local storage
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

//Generates a list of the projects to be displayed in the side panel
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
var divNewProjectView = document.getElementById("formSection");

//Displays the details of the selected project
for (let i = 0; i < divProjects.length; i++) {
        divProjects[i].addEventListener("click", function() {
            //removes the 'selected' visual in the side panel
            for (let j = 0; j < divProjects.length; j++) {
                divProjects[j].removeAttribute("id");
                divProjectView.removeAttribute("style");
                divNewProjectView.style.display="none";
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
            
            const projectHeader = document.createElement('h3');
            const projectHeaderDiv = document.createElement('div');
            projectHeaderDiv.setAttribute("class", "projectHeaderDiv");
            projectHeader.innerHTML = title;
            projectHeaderDiv.appendChild(projectHeader);
            divProjectView.appendChild(projectHeaderDiv);

            const projectDescription = document.createElement('p');
            const projectDescriptionDiv = document.createElement('div');
            projectDescriptionDiv.setAttribute("class","projectDescriptionDiv");
            projectDescription.innerHTML = description;
            projectDescriptionDiv.appendChild(projectDescription);
            divProjectView.appendChild(projectDescriptionDiv)

            const projectDueDate = document.createElement('input');
            const projectDueDateDiv = document.createElement('div');
            projectDueDateDiv.setAttribute("class","projectMainFields");
            projectDueDate.type = "date";
            projectDueDate.value = dueDate;
            projectDueDate.setAttribute("id", "dueDate");
            const projectDueDateTitle = document.createElement("label")
            projectDueDateTitle.setAttribute("for", "date");
            projectDueDateTitle.innerHTML = "Due Date ";
            projectDueDateDiv.appendChild(projectDueDateTitle);
            projectDueDateDiv.appendChild(projectDueDate);
            divProjectView.appendChild(projectDueDateDiv);
            projectDueDate.addEventListener("change", function(e) {
                var formSubmissionArray = JSON.parse(localStorage.getItem("submissions" + i));
                formSubmissionArray.dueDate = projectDueDate.value;
                localStorage.setItem("submissions" + i, JSON.stringify(formSubmissionArray));
            });

            const projectPriority = document.createElement('select');
            const projectPriorityDiv = document.createElement('div');
            projectPriorityDiv.setAttribute("class","projectMainFields");
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
            projectPriorityTitle.innerHTML = "Priority ";
            projectPriority.appendChild(projectPriorityOption1);
            projectPriority.appendChild(projectPriorityOption2);
            projectPriority.appendChild(projectPriorityOption3);
            projectPriority.value = priority;
            projectPriorityDiv.appendChild(projectPriorityTitle);
            projectPriorityDiv.appendChild(projectPriority);
            divProjectView.appendChild(projectPriorityDiv);
            projectPriority.addEventListener("change", function(e) {
                var formSubmissionArray = JSON.parse(localStorage.getItem("submissions" + i));
                formSubmissionArray.priority = projectPriority.value;
                localStorage.setItem("submissions" + i, JSON.stringify(formSubmissionArray));
            })

            const toDoListText = document.createElement('input');
            const toDoListFormDiv = document.createElement('div');
            toDoListFormDiv.setAttribute("class","projectMainFields");
            toDoListText.setAttribute("type", "text");
            toDoListText.setAttribute('id','toDoText');
            toDoListText.setAttribute('minlength', '5');
            toDoListText.required = true;
            const toDoListSubmitTitle = document.createElement("label");
            toDoListSubmitTitle.setAttribute("for", "toDoList");
            toDoListSubmitTitle.innerHTML = "To Do List ";
            toDoListFormDiv.appendChild(toDoListSubmitTitle);

            const toDoListSubmit = document.createElement('button');
            toDoListSubmit.setAttribute('type', 'submit');
            toDoListSubmit.setAttribute('id','submitToDo');
            toDoListSubmit.innerHTML = "Add";

            const toDoForm = document.createElement( 'form' );
            toDoForm.setAttribute("id","toDoForm");
            toDoForm.appendChild(toDoListText);
            toDoForm.appendChild(toDoListSubmit);
            toDoListFormDiv.appendChild(toDoForm);
            divProjectView.appendChild(toDoListFormDiv);

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
const projectView = document.getElementById("fullProjectView");
const closeButton = document.getElementById("close-form");
const form = document.getElementById("form");
const formSection = document.getElementById("formSection");
var mainDiv = document.getElementById("projectLists");
var divProjects = mainDiv.getElementsByClassName("projectHeaders");

localStorage.clear();
formSection.style.display="none";

//opens the project view
newProjectButton.addEventListener("click", function(a) {
    formSection.style.display="block";
    projectView.style.display="none";
    for (let j = 0; j < divProjects.length; j++) {
        divProjects[j].removeAttribute("id");
    }
});

//closes the project view
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHdEQUFjOztBQUVkO0FBQ0EsaUVBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hZGQtdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0LXRvLWRvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LWxpc3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90by1kby1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9Eb0xpc3RMaXN0ZWQgfSBmcm9tIFwiLi90by1kby1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKGksIHRvRG9MaXN0VGV4dCwgdG9Eb0xpc3RTdWJtaXQsIGRpdlByb2plY3RWaWV3KSB7XG4gICAgICAgIHZhciBjdXJyZW50Rm9ybSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuXG4gICAgLy9TdWJtaXRzIGEgdG8gZG8gaXRlbVxuICAgIHRvRG9MaXN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuICAgICAgICBjb25zdCB0b0RvQ2xhc3NBcnJheSA9IFtdO1xuXG4gICAgICAgIHRvRG9UZXh0ID0gdG9Eb0xpc3RUZXh0LnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRvRG9MaXN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9Eb0xpc3QnKTtcbiAgICAgICAgXG4gICAgICAgIC8vQWRkcyBhIG5ldyBpdGVtIHRvIHRoZSB0by1kbyBsaXN0IHRvIGJlIHN0b3JlZCBpbiB0aGUgbG9jYWxzdG9yYWdlXG4gICAgICAgIGlmIChjdXJyZW50Rm9ybS50b0RvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvRG9BcnJheS5wdXNoKHRvRG9UZXh0KTtcbiAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5LnB1c2goXCJOb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvRG9BcnJheS5wdXNoKC4uLmN1cnJlbnRGb3JtLnRvRG8sIHRvRG9UZXh0KTtcbiAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5LnB1c2goLi4uY3VycmVudEZvcm0udG9Eb0NsYXNzLCBcIk5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRGb3JtLnRvRG8gPSB0b0RvQXJyYXk7XG4gICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvQ2xhc3MgPSB0b0RvQ2xhc3NBcnJheTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRGb3JtKSk7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRvRG9MaXN0TGlzdGVkKGRpdlByb2plY3RWaWV3LCBjdXJyZW50Rm9ybSwgXCJzdWJtaXNzaW9uc1wiICsgaSkgXG59XG4pfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb0RvTGlzdCAoaSwgY3VycmVudEZvcm0sIGZvcm1TdWJtaXNzaW9uSXRlbSwgdG9Eb0l0ZW0pIHtcbiAgICBsZXQgdG9Eb0NsYXNzQXJyYXlDdXJyZW50ID0gY3VycmVudEZvcm0udG9Eb0NsYXNzO1xuICAgIFxuICAgICAgICAvL0FkZHMgb3IgcmVtb3ZlcyB0aGUgY2xhc3MgdGhhdCBpcyBzdHJpa2VkIHRocm91Z2ggd2hpY2hldmVyIHRvZG8gaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIHRvRG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodG9Eb0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Rya3RocnVcIikpe1xuICAgICAgICAgICAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic3Rya3RocnVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5Q3VycmVudFtpXSA9IFwiTm9cIjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXlDdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoZm9ybVN1Ym1pc3Npb25JdGVtKSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZvcm0pKTsgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKFwic3Rya3RocnVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5Q3VycmVudFtpXSA9IFwiWWVzXCI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGb3JtLnRvRG9DbGFzcyA9IHRvRG9DbGFzc0FycmF5Q3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oKGZvcm1TdWJtaXNzaW9uSXRlbSksIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRGb3JtKSk7ICAgIFxuICAgIH1cbiAgIH0gICApXG4gICAgfSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtU3VibWlzc2lvbihmb3JtKSB7XG4gICAgdmFyIGogPSAtMTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy9zdG9yZXMgYWxsIGZvcm0gZGV0YWlscyBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEZvcm1cIik7XG4gICAgICAgIGogKz0gMTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2l0ZW1zW2ldLm5hbWVdPWl0ZW1zW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJtaXNzaW9uID0gXCJzdWJtaXNzaW9uc1wiICsgajtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3VibWlzc2lvbiwgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpKTtcbiAgICAgICAgZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICB9KX07XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFpblNlY3Rpb24gfSBmcm9tICcuL3Byb2plY3QtbWFpbi5qcyc7XG5cbnZhciBwcm9qZWN0Q291bnQgPSAtMTtcblxuLy9HZW5lcmF0ZXMgYSBsaXN0IG9mIHRoZSBwcm9qZWN0cyB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHNpZGUgcGFuZWxcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0U2lkZWJhcihwcm9qZWN0T3B0aW9ucykge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgcHJvamVjdENvdW50ICs9MTtcblxuICAgICAgICB2YXIgc3VibWlzc2lvbiA9IFwic3VibWlzc2lvbnNcIiArIHByb2plY3RDb3VudDtcbiAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3VibWlzc2lvbikpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGZvcm1TdWJtaXNzaW9uRGF0YS5wcm9qZWN0O1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SGVhZGVyc1wiKTtcbiAgICAgICAgbmV3UHJvamVjdEhlYWRpbmcuaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XG4gICAgICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEhlYWRpbmcpO1xuICAgICAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcblxuICAgICAgICBwcm9qZWN0TWFpblNlY3Rpb24oKTtcbiAgICAgICAgfSl9IiwiaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gXCIuL2FkZC10by1kby1saXN0XCI7XG5pbXBvcnQgeyB0b0RvTGlzdExpc3RlZCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNYWluU2VjdGlvbiAoKSB7XG5cbnZhciBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdHNcIik7XG52YXIgZGl2UHJvamVjdHMgPSBtYWluRGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0SGVhZGVyc1wiKTtcbnZhciBkaXZQcm9qZWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbFByb2plY3RWaWV3XCIpO1xudmFyIGRpdk5ld1Byb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtU2VjdGlvblwiKTtcblxuLy9EaXNwbGF5cyB0aGUgZGV0YWlscyBvZiB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXZQcm9qZWN0c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvL3JlbW92ZXMgdGhlICdzZWxlY3RlZCcgdmlzdWFsIGluIHRoZSBzaWRlIHBhbmVsXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRpdlByb2plY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZGl2UHJvamVjdHNbal0ucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgICAgICAgICAgZGl2TmV3UHJvamVjdFZpZXcuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdlByb2plY3RzW2ldLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRQcm9qZWN0XCIpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLXByb2plY3RcIik7IFxuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuaW5uZXJIVE1MPVwiXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBmb3JtU3VibWlzc2lvbkFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpKSk7XG4gICAgICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25TcGVjaWZpYyA9IFwic3VibWlzc2lvbnNcIiArIGk7XG5cbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGZvcm1TdWJtaXNzaW9uQXJyYXkucHJvamVjdDtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGZvcm1TdWJtaXNzaW9uQXJyYXkuRGVzY3JpcHRpb247XG4gICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGZvcm1TdWJtaXNzaW9uQXJyYXkuZHVlRGF0ZTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGZvcm1TdWJtaXNzaW9uQXJyYXkucHJpb3JpdHk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEhlYWRlckRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RIZWFkZXJEaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IHRpdGxlO1xuICAgICAgICAgICAgcHJvamVjdEhlYWRlckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXJEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwicHJvamVjdERlc2NyaXB0aW9uRGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb25EaXYpXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwicHJvamVjdE1haW5GaWVsZHNcIik7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS52YWx1ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZVRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZVRpdGxlLmlubmVySFRNTCA9IFwiRHVlIERhdGUgXCI7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZVRpdGxlKTtcbiAgICAgICAgICAgIHByb2plY3REdWVEYXRlRGl2LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlKTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlRGl2KTtcbiAgICAgICAgICAgIHByb2plY3REdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3JtU3VibWlzc2lvbkFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpKSk7XG4gICAgICAgICAgICAgICAgZm9ybVN1Ym1pc3Npb25BcnJheS5kdWVEYXRlID0gcHJvamVjdER1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSwgSlNPTi5zdHJpbmdpZnkoZm9ybVN1Ym1pc3Npb25BcnJheSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInByb2plY3RNYWluRmllbGRzXCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5T3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiSGlnaFwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjEuaW5uZXJIVE1MID0gXCJIaWdoXCI7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjIuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIk1lZGl1bVwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjIuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eU9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5T3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiTG93XCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5T3B0aW9uMy5pbm5lckhUTUwgPSBcIkxvd1wiOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eVRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5VGl0bGUuaW5uZXJIVE1MID0gXCJQcmlvcml0eSBcIjtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlPcHRpb24xKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlPcHRpb24yKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlPcHRpb24zKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS52YWx1ZSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eVRpdGxlKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5RGl2KTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuICAgICAgICAgICAgICAgIGZvcm1TdWJtaXNzaW9uQXJyYXkucHJpb3JpdHkgPSBwcm9qZWN0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSwgSlNPTi5zdHJpbmdpZnkoZm9ybVN1Ym1pc3Npb25BcnJheSkpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG9Eb0xpc3RGb3JtRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJwcm9qZWN0TWFpbkZpZWxkc1wiKTtcbiAgICAgICAgICAgIHRvRG9MaXN0VGV4dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgICAgIHRvRG9MaXN0VGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9Eb1RleHQnKTtcbiAgICAgICAgICAgIHRvRG9MaXN0VGV4dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICc1Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RTdWJtaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0VGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9Eb0xpc3RcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdFRpdGxlLmlubmVySFRNTCA9IFwiVG8gRG8gTGlzdCBcIjtcbiAgICAgICAgICAgIHRvRG9MaXN0Rm9ybURpdi5hcHBlbmRDaGlsZCh0b0RvTGlzdFN1Ym1pdFRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCdzdWJtaXRUb0RvJyk7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdC5pbm5lckhUTUwgPSBcIkFkZFwiO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdmb3JtJyApO1xuICAgICAgICAgICAgdG9Eb0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIixcInRvRG9Gb3JtXCIpO1xuICAgICAgICAgICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0xpc3RUZXh0KTtcbiAgICAgICAgICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9MaXN0U3VibWl0KTtcbiAgICAgICAgICAgIHRvRG9MaXN0Rm9ybURpdi5hcHBlbmRDaGlsZCh0b0RvRm9ybSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdEZvcm1EaXYpO1xuXG4gICAgICAgICAgICBhZGRUb0RvKGksIHRvRG9MaXN0VGV4dCwgdG9Eb0Zvcm0sIGRpdlByb2plY3RWaWV3KTtcbiAgICAgICAgICAgIHRvRG9MaXN0TGlzdGVkKGRpdlByb2plY3RWaWV3LCBmb3JtU3VibWlzc2lvbkFycmF5LCBmb3JtU3VibWlzc2lvblNwZWNpZmljKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9KX19IiwiaW1wb3J0IHsgZWRpdFRvRG9MaXN0IH0gZnJvbSBcIi4vZWRpdC10by1kby1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RvTGlzdExpc3RlZChkaXZQcm9qZWN0VmlldywgY3VycmVudEZvcm0sIGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMpIHtcblxubGV0IHRvRG9MaXN0Q3VycmVudCA9IGN1cnJlbnRGb3JtLnRvRG87XG5sZXQgdG9Eb0xpc3REaXY7XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvRG9MaXN0XCIpID09PSBudWxsKSB7XG4gICAgdG9Eb0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRvRG9MaXN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9Eb0xpc3QnKTtcbn1cbmVsc2Uge1xuICAgIHRvRG9MaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvTGlzdFwiKTsgXG59XG4gICAgLy9DaGVja3MgaWYgdGhlcmUgYXJlIGFueSBpdGVtcyBpbiB0aGUgdG8gZG8gbGlzdFxuICAgICAgICBpZiAodG9Eb0xpc3RDdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgfVxuICAgICAgICAvL1J1bnMgd2hlbiB0aGVyZSBhcmUgaXRlbXMgaW4gdGhlIHRvIGRvIGxpc3RcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b0RvTGlzdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIC8vZm9yIGVhY2ggaXRlbSBpbiB0aGUgdG8gZG8gbGlzdCBhIGxpc3QgaXRlbSBpcyBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byBUbyBEbyBzZWN0aW9uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9MaXN0Q3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS50ZXh0Q29udGVudCA9IHRvRG9MaXN0Q3VycmVudFtpXTtcbiAgICAgICAgICAgICAgICB0b0RvTGlzdERpdi5hcHBlbmRDaGlsZCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGb3JtLnRvRG9DbGFzc1tpXSA9PT0gXCJZZXNcIil7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWRpdFRvRG9MaXN0KGksIGN1cnJlbnRGb3JtLGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMsIHRvRG9JdGVtKTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdERpdik7XG4gICAgICAgIH19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtU3VibWlzc2lvbiB9IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0U2lkZWJhciB9IGZyb20gJy4vcHJvamVjdC1saXN0cy5qcydcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RzXCIpO1xuY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxQcm9qZWN0Vmlld1wiKTtcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1mb3JtXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbmNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtU2VjdGlvblwiKTtcbnZhciBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdHNcIik7XG52YXIgZGl2UHJvamVjdHMgPSBtYWluRGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0SGVhZGVyc1wiKTtcblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5mb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG4vL29wZW5zIHRoZSBwcm9qZWN0IHZpZXdcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGEpIHtcbiAgICBmb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICBwcm9qZWN0Vmlldy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGl2UHJvamVjdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZGl2UHJvamVjdHNbal0ucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgfVxufSk7XG5cbi8vY2xvc2VzIHRoZSBwcm9qZWN0IHZpZXdcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihhKSB7XG4gICAgZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICBmb3JtLnJlc2V0KCk7XG59KTtcblxuLy9Gb3JtIHN1Ym1pc3Npb25zXG5mb3JtU3VibWlzc2lvbihmb3JtKTtcblxuLy9EaXNwbGF5IGFuZCBzZWxlY3QgcHJvamVjdHMgaW4gdGhlIHNpZGViYXJcbnByb2plY3RTaWRlYmFyKHByb2plY3RMaXN0cyk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==