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
/* harmony import */ var _edit_to_do_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-to-do-list */ "./src/edit-to-do-list.js");
/* harmony import */ var _project_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-main */ "./src/project-main.js");
/* harmony import */ var _to_do_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do-list */ "./src/to-do-list.js");




function addToDo(i, toDoListText, toDoListSubmit, divProjectView, formSubmissionSpecific) {
        const toDoArray = [];
        const toDoClassArray = [];
        var counter = -1;
        var currentForm = JSON.parse(localStorage.getItem("submissions" + i));
        var currentFormItem = "submissions" + i;

    //Submits a to do item
    toDoListSubmit.addEventListener("click", function() {
        
        toDoText = toDoListText.value;
        const toDoListDiv = document.createElement('ul');
        toDoListDiv.setAttribute('id', 'toDoList');
        
        //Creates a new item to the to-do list to be stored into localstorage
        if (currentForm.toDo === undefined) {
            toDoArray.push(toDoText);
            currentForm.toDo = toDoArray;
            toDoClassArray.push("No");
            currentForm.toDoClass = toDoClassArray;
            const toDoItem = document.createElement('li');
            toDoItem.textContent = toDoText;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
            toDoListDiv.appendChild(toDoItem);
            divProjectView.appendChild(toDoListDiv); 
            (0,_edit_to_do_list__WEBPACK_IMPORTED_MODULE_0__.editToDoList)(currentForm, "submissions" + i);
        }
    
        //Adds a new item to an exisiting to-do list stored in localstorage
        else {
            var existingToDoListDiv = document.getElementById("toDoList");
            const toDoArray = [];
            toDoArray.push(...currentForm.toDo, toDoText);
            currentForm.toDo = toDoArray;
            toDoClassArray.push("No");
            currentForm.toDoClass = toDoClassArray;
            const toDoItem = document.createElement('li');
            toDoItem.textContent = toDoText;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
            existingToDoListDiv.appendChild(toDoItem);
            (0,_edit_to_do_list__WEBPACK_IMPORTED_MODULE_0__.editToDoList)(currentForm, "submissions" + i);
                                    }})
            }

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
/* harmony import */ var _to_do_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-list */ "./src/to-do-list.js");


function editToDoList (currentForm, formSubmissionItem) {
    let toDoListSection = document.getElementById("toDoList");
    let toDoClassArrayCurrent = currentForm.toDoClass;
    
    let toDoListItems = toDoListSection.getElementsByTagName('li');

        //Adds or removes the class that is striked through whichever todo is selected
        for (let i = 0; i < toDoListItems.length; i ++) {
            toDoListItems[i].addEventListener("click", function() {
                if (toDoListItems[i].classList.contains("strkthru")){
                    console.log("contains class " + toDoListItems[i]);
                    toDoListItems[i].classList.remove("strkthru");
                    toDoClassArrayCurrent[i] = "No";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionItem), JSON.stringify(currentForm));    
                }
                else {
                    console.log("doesnt contain class" + toDoListItems[i]);
                    toDoListItems[i].classList.add("strkthru");
                    toDoClassArrayCurrent[i] = "Yes";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionItem), JSON.stringify(currentForm));    
    }
   }   )
    }
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
// const formSubmissions = [];


function formSubmission(form) {
    var j = -1;
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        // const formSubmissions = [];

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
/* harmony import */ var _edit_to_do_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-to-do-list.js */ "./src/edit-to-do-list.js");
/* harmony import */ var _project_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-main.js */ "./src/project-main.js");



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
        newProjectDiv.setAttribute ('id', 'projectNum' + projectCount);
        newProjectDiv.classList.add("projectHeaders");
        newProjectHeading.innerHTML = projectName;
        newProjectDiv.appendChild(newProjectHeading);
        projectOptions.appendChild(newProjectDiv);

        (0,_project_main_js__WEBPACK_IMPORTED_MODULE_1__.projectMainSection)();
        // editToDoList(currentForm,formSubmissionSpecific);

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
/* harmony import */ var _edit_to_do_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-to-do-list */ "./src/edit-to-do-list.js");
/* harmony import */ var _project_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-lists */ "./src/project-lists.js");
/* harmony import */ var _to_do_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-do-list */ "./src/to-do-list.js");





function projectMainSection () {

var mainDiv = document.getElementById("projectLists");
var divProjects = mainDiv.getElementsByClassName("projectHeaders");
var divProjectView = document.getElementById("fullProjectView");
var br = document.createElement("br");

//Generates details of a submitted project based on stored details submitted using the form
for (let i = 0; i < divProjects.length; i++) {
        divProjects[i].addEventListener("click", function() {
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
                formSubmissionArray.priority = projectPriority.value;
                localStorage.setItem("submissions" + i, JSON.stringify(formSubmissionArray));
            })
    
            divProjectView.appendChild(document.createElement("br"));
            divProjectView.appendChild(document.createElement("br"));

            const toDoListText = document.createElement('input');
            toDoListText.setAttribute("type", "text");
            toDoListText.setAttribute('id','toDoText');
            const toDoListSubmitTitle = document.createElement("label");
            toDoListSubmitTitle.setAttribute("for", "toDoList");
            toDoListSubmitTitle.innerHTML = "To Do List: ";
            divProjectView.appendChild(toDoListSubmitTitle);
            divProjectView.appendChild(toDoListText);


            const toDoListSubmit = document.createElement('button');
            toDoListSubmit.setAttribute('type', 'submit');
            toDoListSubmit.setAttribute('id','submitToDo');
            toDoListSubmit.innerHTML = "Add";
            divProjectView.appendChild(toDoListSubmit);

            (0,_add_to_do_list__WEBPACK_IMPORTED_MODULE_0__.addToDo)(i, toDoListText, toDoListSubmit, divProjectView);
            (0,_to_do_list__WEBPACK_IMPORTED_MODULE_3__.toDoListListed)(divProjectView, formSubmissionArray, formSubmissionSpecific);
            

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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _project_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-main */ "./src/project-main.js");




function toDoListListed(divProjectView, currentForm, formSubmissionSpecific) {

let toDoListCurrent = currentForm.toDo;
    //Checks if there are any items in the to do list
        if (toDoListCurrent === undefined) {
        }
        //Runs when there are items in the to do list
        else {
                const toDoListDiv = document.createElement('ul');
                toDoListDiv.setAttribute('id', 'toDoList')
                //for each item in the to do list a list item is created and appended to To Do section
            for (let i = 0; i < toDoListCurrent.length; i++) {
                const toDoItem = document.createElement('li');
                toDoItem.textContent = toDoListCurrent[i];
                toDoListDiv.appendChild(toDoItem);
                if (currentForm.toDoClass[i] === "Yes"){
                    toDoItem.classList.add("strkthru");
                }
                else {
                }    
                divProjectView.appendChild(toDoListDiv);
                // editToDoList(i, currentForm,formSubmissionSpecific);
                // editToDoList(currentForm,formSubmissionSpecific);

                
            }
            (0,_edit_to_do_list__WEBPACK_IMPORTED_MODULE_0__.editToDoList)(currentForm,formSubmissionSpecific);

        }


    }





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


// import { projectMainSection } from './project-main.js';
// import { addToDo } from './add-to-do-list.js';
// import { editToDoList } from './edit-to-do-list.js';

const newProjectButton = document.getElementById("newProjectButton");
const sideBar = document.getElementById("sidebar");
const projectView = document.getElementById("projectView");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtBQUN0QixZQUFZLGVBQWU7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esd0RBQWM7O0FBRWQ7QUFDQSxpRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZC10by1kby1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXQtdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtbGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC1tYWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvLWRvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlZGl0VG9Eb0xpc3QgfSBmcm9tIFwiLi9lZGl0LXRvLWRvLWxpc3RcIjtcbmltcG9ydCB7IHByb2plY3RNYWluU2VjdGlvbiB9IGZyb20gXCIuL3Byb2plY3QtbWFpblwiO1xuaW1wb3J0IHsgdG9Eb0xpc3RMaXN0ZWQgfSBmcm9tIFwiLi90by1kby1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKGksIHRvRG9MaXN0VGV4dCwgdG9Eb0xpc3RTdWJtaXQsIGRpdlByb2plY3RWaWV3LCBmb3JtU3VibWlzc2lvblNwZWNpZmljKSB7XG4gICAgICAgIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuICAgICAgICBjb25zdCB0b0RvQ2xhc3NBcnJheSA9IFtdO1xuICAgICAgICB2YXIgY291bnRlciA9IC0xO1xuICAgICAgICB2YXIgY3VycmVudEZvcm0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGkpKTtcbiAgICAgICAgdmFyIGN1cnJlbnRGb3JtSXRlbSA9IFwic3VibWlzc2lvbnNcIiArIGk7XG5cbiAgICAvL1N1Ym1pdHMgYSB0byBkbyBpdGVtXG4gICAgdG9Eb0xpc3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgdG9Eb1RleHQgPSB0b0RvTGlzdFRleHQudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9MaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdG9Eb0xpc3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b0RvTGlzdCcpO1xuICAgICAgICBcbiAgICAgICAgLy9DcmVhdGVzIGEgbmV3IGl0ZW0gdG8gdGhlIHRvLWRvIGxpc3QgdG8gYmUgc3RvcmVkIGludG8gbG9jYWxzdG9yYWdlXG4gICAgICAgIGlmIChjdXJyZW50Rm9ybS50b0RvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvRG9BcnJheS5wdXNoKHRvRG9UZXh0KTtcbiAgICAgICAgICAgIGN1cnJlbnRGb3JtLnRvRG8gPSB0b0RvQXJyYXk7XG4gICAgICAgICAgICB0b0RvQ2xhc3NBcnJheS5wdXNoKFwiTm9cIik7XG4gICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvQ2xhc3MgPSB0b0RvQ2xhc3NBcnJheTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHRvRG9JdGVtLnRleHRDb250ZW50ID0gdG9Eb1RleHQ7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpO1xuICAgICAgICAgICAgdG9Eb0xpc3REaXYuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9Eb0xpc3REaXYpOyBcbiAgICAgICAgICAgIGVkaXRUb0RvTGlzdChjdXJyZW50Rm9ybSwgXCJzdWJtaXNzaW9uc1wiICsgaSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy9BZGRzIGEgbmV3IGl0ZW0gdG8gYW4gZXhpc2l0aW5nIHRvLWRvIGxpc3Qgc3RvcmVkIGluIGxvY2Fsc3RvcmFnZVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBleGlzdGluZ1RvRG9MaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvTGlzdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuICAgICAgICAgICAgdG9Eb0FycmF5LnB1c2goLi4uY3VycmVudEZvcm0udG9EbywgdG9Eb1RleHQpO1xuICAgICAgICAgICAgY3VycmVudEZvcm0udG9EbyA9IHRvRG9BcnJheTtcbiAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5LnB1c2goXCJOb1wiKTtcbiAgICAgICAgICAgIGN1cnJlbnRGb3JtLnRvRG9DbGFzcyA9IHRvRG9DbGFzc0FycmF5O1xuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdG9Eb0l0ZW0udGV4dENvbnRlbnQgPSB0b0RvVGV4dDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRGb3JtKSk7XG4gICAgICAgICAgICBleGlzdGluZ1RvRG9MaXN0RGl2LmFwcGVuZENoaWxkKHRvRG9JdGVtKTtcbiAgICAgICAgICAgIGVkaXRUb0RvTGlzdChjdXJyZW50Rm9ybSwgXCJzdWJtaXNzaW9uc1wiICsgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgIH0iLCJpbXBvcnQgeyB0b0RvTGlzdExpc3RlZCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb0RvTGlzdCAoY3VycmVudEZvcm0sIGZvcm1TdWJtaXNzaW9uSXRlbSkge1xuICAgIGxldCB0b0RvTGlzdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvRG9MaXN0XCIpO1xuICAgIGxldCB0b0RvQ2xhc3NBcnJheUN1cnJlbnQgPSBjdXJyZW50Rm9ybS50b0RvQ2xhc3M7XG4gICAgXG4gICAgbGV0IHRvRG9MaXN0SXRlbXMgPSB0b0RvTGlzdFNlY3Rpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XG5cbiAgICAgICAgLy9BZGRzIG9yIHJlbW92ZXMgdGhlIGNsYXNzIHRoYXQgaXMgc3RyaWtlZCB0aHJvdWdoIHdoaWNoZXZlciB0b2RvIGlzIHNlbGVjdGVkXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0xpc3RJdGVtcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIHRvRG9MaXN0SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0b0RvTGlzdEl0ZW1zW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInN0cmt0aHJ1XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb250YWlucyBjbGFzcyBcIiArIHRvRG9MaXN0SXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB0b0RvTGlzdEl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXlDdXJyZW50W2ldID0gXCJOb1wiO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvQ2xhc3MgPSB0b0RvQ2xhc3NBcnJheUN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKChmb3JtU3VibWlzc2lvbkl0ZW0pLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpOyAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9lc250IGNvbnRhaW4gY2xhc3NcIiArIHRvRG9MaXN0SXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB0b0RvTGlzdEl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXlDdXJyZW50W2ldID0gXCJZZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXlDdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoZm9ybVN1Ym1pc3Npb25JdGVtKSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZvcm0pKTsgICAgXG4gICAgfVxuICAgfSAgIClcbiAgICB9XG59IiwiLy8gY29uc3QgZm9ybVN1Ym1pc3Npb25zID0gW107XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1TdWJtaXNzaW9uKGZvcm0pIHtcbiAgICB2YXIgaiA9IC0xO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY29uc3QgZm9ybVN1Ym1pc3Npb25zID0gW107XG5cbiAgICAgICAgLy9zdG9yZXMgYWxsIGZvcm0gZGV0YWlscyBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgICAgICAgaiArPSAxO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9ybURhdGFbaXRlbXNbaV0ubmFtZV09aXRlbXNbaV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1Ym1pc3Npb24gPSBcInN1Ym1pc3Npb25zXCIgKyBqO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdWJtaXNzaW9uLCBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSkpO1xuICAgICAgICBmb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgIH1cbiAgICApXG59O1xuIiwiaW1wb3J0IHsgZWRpdFRvRG9MaXN0IH0gZnJvbSAnLi9lZGl0LXRvLWRvLWxpc3QuanMnO1xuaW1wb3J0IHsgcHJvamVjdE1haW5TZWN0aW9uIH0gZnJvbSAnLi9wcm9qZWN0LW1haW4uanMnO1xuXG52YXIgcHJvamVjdENvdW50ID0gLTE7XG5cbi8vQ3JlYXRlIGEgbGlzdCBvZiB0aGUgcHJvamVjdHNcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0U2lkZWJhcihwcm9qZWN0T3B0aW9ucykge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgcHJvamVjdENvdW50ICs9MTtcblxuICAgICAgICB2YXIgc3VibWlzc2lvbiA9IFwic3VibWlzc2lvbnNcIiArIHByb2plY3RDb3VudDtcbiAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3VibWlzc2lvbikpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGZvcm1TdWJtaXNzaW9uRGF0YS5wcm9qZWN0O1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSAoJ2lkJywgJ3Byb2plY3ROdW0nICsgcHJvamVjdENvdW50KTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlcnNcIik7XG4gICAgICAgIG5ld1Byb2plY3RIZWFkaW5nLmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RIZWFkaW5nKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICAgICAgcHJvamVjdE1haW5TZWN0aW9uKCk7XG4gICAgICAgIC8vIGVkaXRUb0RvTGlzdChjdXJyZW50Rm9ybSxmb3JtU3VibWlzc2lvblNwZWNpZmljKTtcblxuICAgICAgICB9KX0iLCJpbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSBcIi4vYWRkLXRvLWRvLWxpc3RcIjtcbmltcG9ydCB7IGVkaXRUb0RvTGlzdCB9IGZyb20gXCIuL2VkaXQtdG8tZG8tbGlzdFwiO1xuaW1wb3J0IHsgcHJvamVjdFNpZGViYXIgfSBmcm9tIFwiLi9wcm9qZWN0LWxpc3RzXCI7XG5pbXBvcnQgeyB0b0RvTGlzdExpc3RlZCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNYWluU2VjdGlvbiAoKSB7XG5cbnZhciBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdHNcIik7XG52YXIgZGl2UHJvamVjdHMgPSBtYWluRGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0SGVhZGVyc1wiKTtcbnZhciBkaXZQcm9qZWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbFByb2plY3RWaWV3XCIpO1xudmFyIGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuXG4vL0dlbmVyYXRlcyBkZXRhaWxzIG9mIGEgc3VibWl0dGVkIHByb2plY3QgYmFzZWQgb24gc3RvcmVkIGRldGFpbHMgc3VibWl0dGVkIHVzaW5nIHRoZSBmb3JtXG5mb3IgKGxldCBpID0gMDsgaSA8IGRpdlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpdlByb2plY3RzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmlubmVySFRNTD1cIlwiO1xuICAgICAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGkpKTtcbiAgICAgICAgICAgIHZhciBmb3JtU3VibWlzc2lvblNwZWNpZmljID0gXCJzdWJtaXNzaW9uc1wiICsgaTtcblxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZm9ybVN1Ym1pc3Npb25BcnJheS5wcm9qZWN0O1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybVN1Ym1pc3Npb25BcnJheS5EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlID0gZm9ybVN1Ym1pc3Npb25BcnJheS5kdWVEYXRlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybVN1Ym1pc3Npb25BcnJheS5wcmlvcml0eTtcbiAgICAgICAgICAgIGxldCB0b0RvTGlzdCA9IGZvcm1TdWJtaXNzaW9uQXJyYXkudG9EbztcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvbjogXCIgKyBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG5cblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUudmFsdWUgPSBkdWVEYXRlO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdER1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICAgICAgcHJvamVjdER1ZURhdGVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGVUaXRsZS5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlOiBcIjtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlVGl0bGUpO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGUpO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZm9ybVN1Ym1pc3Npb25BcnJheS5kdWVEYXRlID0gcHJvamVjdER1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSwgSlNPTi5zdHJpbmdpZnkoZm9ybVN1Ym1pc3Npb25BcnJheSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7ICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5T3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24xLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJIaWdoXCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5T3B0aW9uMS5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5T3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiTWVkaXVtXCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5T3B0aW9uMi5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5T3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24zLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJMb3dcIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24zLmlubmVySFRNTCA9IFwiTG93XCI7ICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5VGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIjtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlPcHRpb24xKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlPcHRpb24yKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlPcHRpb24zKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS52YWx1ZSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5VGl0bGUpO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5KTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBmb3JtU3VibWlzc2lvbkFycmF5LnByaW9yaXR5ID0gcHJvamVjdFByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGZvcm1TdWJtaXNzaW9uQXJyYXkpKTtcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRvRG9MaXN0VGV4dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgICAgIHRvRG9MaXN0VGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9Eb1RleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0U3VibWl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvRG9MaXN0XCIpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXRUaXRsZS5pbm5lckhUTUwgPSBcIlRvIERvIExpc3Q6IFwiO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9Eb0xpc3RTdWJtaXRUaXRsZSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdFRleHQpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VibWl0VG9EbycpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXQuaW5uZXJIVE1MID0gXCJBZGRcIjtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRvRG9MaXN0U3VibWl0KTtcblxuICAgICAgICAgICAgYWRkVG9EbyhpLCB0b0RvTGlzdFRleHQsIHRvRG9MaXN0U3VibWl0LCBkaXZQcm9qZWN0Vmlldyk7XG4gICAgICAgICAgICB0b0RvTGlzdExpc3RlZChkaXZQcm9qZWN0VmlldywgZm9ybVN1Ym1pc3Npb25BcnJheSwgZm9ybVN1Ym1pc3Npb25TcGVjaWZpYyk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfSl9fSIsImltcG9ydCB7IGVkaXRUb0RvTGlzdCB9IGZyb20gXCIuL2VkaXQtdG8tZG8tbGlzdFwiO1xuaW1wb3J0IHsgZm9ybVN1Ym1pc3Npb24gfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFpblNlY3Rpb24gfSBmcm9tIFwiLi9wcm9qZWN0LW1haW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvRG9MaXN0TGlzdGVkKGRpdlByb2plY3RWaWV3LCBjdXJyZW50Rm9ybSwgZm9ybVN1Ym1pc3Npb25TcGVjaWZpYykge1xuXG5sZXQgdG9Eb0xpc3RDdXJyZW50ID0gY3VycmVudEZvcm0udG9EbztcbiAgICAvL0NoZWNrcyBpZiB0aGVyZSBhcmUgYW55IGl0ZW1zIGluIHRoZSB0byBkbyBsaXN0XG4gICAgICAgIGlmICh0b0RvTGlzdEN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB9XG4gICAgICAgIC8vUnVucyB3aGVuIHRoZXJlIGFyZSBpdGVtcyBpbiB0aGUgdG8gZG8gbGlzdFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgdG9Eb0xpc3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b0RvTGlzdCcpXG4gICAgICAgICAgICAgICAgLy9mb3IgZWFjaCBpdGVtIGluIHRoZSB0byBkbyBsaXN0IGEgbGlzdCBpdGVtIGlzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIFRvIERvIHNlY3Rpb25cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0xpc3RDdXJyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnRleHRDb250ZW50ID0gdG9Eb0xpc3RDdXJyZW50W2ldO1xuICAgICAgICAgICAgICAgIHRvRG9MaXN0RGl2LmFwcGVuZENoaWxkKHRvRG9JdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZvcm0udG9Eb0NsYXNzW2ldID09PSBcIlllc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZChcInN0cmt0aHJ1XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRvRG9MaXN0RGl2KTtcbiAgICAgICAgICAgICAgICAvLyBlZGl0VG9Eb0xpc3QoaSwgY3VycmVudEZvcm0sZm9ybVN1Ym1pc3Npb25TcGVjaWZpYyk7XG4gICAgICAgICAgICAgICAgLy8gZWRpdFRvRG9MaXN0KGN1cnJlbnRGb3JtLGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlZGl0VG9Eb0xpc3QoY3VycmVudEZvcm0sZm9ybVN1Ym1pc3Npb25TcGVjaWZpYyk7XG5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZvcm1TdWJtaXNzaW9uIH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IHByb2plY3RTaWRlYmFyIH0gZnJvbSAnLi9wcm9qZWN0LWxpc3RzLmpzJ1xuLy8gaW1wb3J0IHsgcHJvamVjdE1haW5TZWN0aW9uIH0gZnJvbSAnLi9wcm9qZWN0LW1haW4uanMnO1xuLy8gaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gJy4vYWRkLXRvLWRvLWxpc3QuanMnO1xuLy8gaW1wb3J0IHsgZWRpdFRvRG9MaXN0IH0gZnJvbSAnLi9lZGl0LXRvLWRvLWxpc3QuanMnO1xuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnV0dG9uXCIpO1xuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbmNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Vmlld1wiKTtcbmNvbnN0IHByb2plY3RMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RzXCIpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWZvcm1cIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1TZWN0aW9uXCIpO1xuXG5cbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuLy9vcGVucyB0aGUgcHJvamVjdCB2aWV3XG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihhKSB7XG4gICAgZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG59KTtcblxuLy9jbG9zZSB0aGUgcHJvamVjdCB2aWV3XG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oYSkge1xuICAgIGZvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgZm9ybS5yZXNldCgpO1xufSk7XG5cbi8vRm9ybSBzdWJtaXNzaW9uc1xuZm9ybVN1Ym1pc3Npb24oZm9ybSk7XG5cbi8vRGlzcGxheSBhbmQgc2VsZWN0IHByb2plY3RzIGluIHRoZSBzaWRlYmFyXG5wcm9qZWN0U2lkZWJhcihwcm9qZWN0TGlzdHMpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=