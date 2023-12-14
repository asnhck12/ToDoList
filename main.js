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
    //Submits a to do item
    toDoListSubmit.addEventListener("click", function() {
        
        let toDoList = currentForm.toDo;
        counter ++;
        console.log(formSubmissionSpecific);
        console.log(i);

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
            // toDoItem.addEventListener("click", function() {
                (0,_edit_to_do_list__WEBPACK_IMPORTED_MODULE_0__.editToDoList)(currentForm, formSubmissionSpecific);
                // if (toDoItem.classList.contains("strkthru")){
                //     toDoItem.classList.remove("strkthru");
                //     toDoClassArray[counter] = "No";
                //     currentForm.toDoClass = toDoClassArray;
                //     localStorage.setItem(("submissions" + i), JSON.stringify(currentForm));    }
                //     else {
                //         toDoItem.classList.add("strkthru");
                //         toDoClassArray[counter] = "Yes";
                //         currentForm.toDoClass = toDoClassArray;
                //         localStorage.setItem(("submissions" + i), JSON.stringify(currentForm);
            // })
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
            // toDoItem.addEventListener("click", function() {
                (0,_edit_to_do_list__WEBPACK_IMPORTED_MODULE_0__.editToDoList)(currentForm, formSubmissionSpecific);
                // if (toDoItem.classList.contains("strkthru")){
                //     toDoItem.classList.remove("strkthru");
                //     toDoClassArray[counter] = "No";
                //     currentForm.toDoClass = toDoClassArray;
                //     localStorage.setItem((currentForm), JSON.stringify(currentForm));    }
                //     else {
                //         toDoItem.classList.add("strkthru");
                //         toDoClassArray[counter] = "Yes";
                //         currentForm.toDoClass = toDoClassArray;
                //         localStorage.setItem((currentForm), JSON.stringify(currentForm)
        // });
                                    }})
            }
        // })}

        // let toDoLists = toDoListSection.getElementsByTagName('li');
        // for (let j = 0; j < toDoLists.length; j ++) {
        //     toDoLists.addEventListener("click", function() {
        //         if (toDoLists.classList.contains("strkthru")){
        //             toDoLists.classList.remove("strkthru");
        //             toDoClassArray[j] = "No";
        //             currentForm.toDoClass = toDoClassArray;
        //             localStorage.setItem((currentForm), JSON.stringify(currentForm));
        //             }
        //             else {
        //                 toDoLists.classList.add("strkthru");
        //                 toDoClassArray[j] = "Yes";
        //                 currentForm.toDoClass = toDoClassArray;
        //                 localStorage.setItem((currentForm), JSON.stringify(currentForm));
        //             }
                
                
            
            // })}      
        
        // let toDoItem = toDoListDiv.getElementsByTagName('li');
        // for (let i = 0; i < toDoItem.length; i ++) {
        //     console.log(i);
        //     editToDoList(counter, currentForm, formSubmissionSpecific, toDoList);
        //  };

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


function editToDoList (currentForm, formSubmissionSpecific/*, toDoClassArrayCurrent*/) {
    let toDoListSection = document.getElementById("toDoList");
    let toDoClassArrayCurrent = currentForm.toDoClass;
    
    let toDoListItems = toDoListSection.getElementsByTagName('li');
    console.log("test");

        //Adds or removes the class that is striked through whichever todo is selected
        for (let i = 0; i < toDoListItems.length; i ++) {
            console.log(toDoListItems[i]);
            toDoListItems[i].addEventListener("click", function() {
                if (toDoListItems[i].classList.contains("strkthru")){
                    console.log(toDoListItems[i]);
                    toDoListItems[i].classList.remove("strkthru");
                    toDoClassArrayCurrent[i] = "No";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionSpecific), JSON.stringify(currentForm));    
                }
                else {
                    console.log(toDoListItems[i]);
                    toDoListItems[i].classList.add("strkthru");
                    toDoClassArrayCurrent[i] = "Yes";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionSpecific), JSON.stringify(currentForm));    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLFlBQVksOERBQVk7O0FBRXhCOzs7QUFHQTs7Ozs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNRO0FBQ25ELFlBQVkscUJBQXFCO0FBQ2pDLFlBQVksVUFBVTtBQUN0QixZQUFZLGVBQWU7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esd0RBQWM7O0FBRWQ7QUFDQSxpRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZC10by1kby1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXQtdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtbGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC1tYWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvLWRvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlZGl0VG9Eb0xpc3QgfSBmcm9tIFwiLi9lZGl0LXRvLWRvLWxpc3RcIjtcbmltcG9ydCB7IHByb2plY3RNYWluU2VjdGlvbiB9IGZyb20gXCIuL3Byb2plY3QtbWFpblwiO1xuaW1wb3J0IHsgdG9Eb0xpc3RMaXN0ZWQgfSBmcm9tIFwiLi90by1kby1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKGksIHRvRG9MaXN0VGV4dCwgdG9Eb0xpc3RTdWJtaXQsIGRpdlByb2plY3RWaWV3LCBmb3JtU3VibWlzc2lvblNwZWNpZmljKSB7XG4gICAgICAgIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuICAgICAgICBjb25zdCB0b0RvQ2xhc3NBcnJheSA9IFtdO1xuICAgICAgICB2YXIgY291bnRlciA9IC0xO1xuICAgICAgICB2YXIgY3VycmVudEZvcm0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGkpKTtcbiAgICAvL1N1Ym1pdHMgYSB0byBkbyBpdGVtXG4gICAgdG9Eb0xpc3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvRG9MaXN0ID0gY3VycmVudEZvcm0udG9EbztcbiAgICAgICAgY291bnRlciArKztcbiAgICAgICAgY29uc29sZS5sb2coZm9ybVN1Ym1pc3Npb25TcGVjaWZpYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpO1xuXG4gICAgICAgIHRvRG9UZXh0ID0gdG9Eb0xpc3RUZXh0LnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRvRG9MaXN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9Eb0xpc3QnKTtcbiAgICAgICAgXG4gICAgICAgIC8vQ3JlYXRlcyBhIG5ldyBpdGVtIHRvIHRoZSB0by1kbyBsaXN0IHRvIGJlIHN0b3JlZCBpbnRvIGxvY2Fsc3RvcmFnZVxuICAgICAgICBpZiAoY3VycmVudEZvcm0udG9EbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b0RvQXJyYXkucHVzaCh0b0RvVGV4dCk7XG4gICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvID0gdG9Eb0FycmF5O1xuICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXkucHVzaChcIk5vXCIpO1xuICAgICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXk7XG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0b0RvSXRlbS50ZXh0Q29udGVudCA9IHRvRG9UZXh0O1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZvcm0pKTtcbiAgICAgICAgICAgIHRvRG9MaXN0RGl2LmFwcGVuZENoaWxkKHRvRG9JdGVtKTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRvRG9MaXN0RGl2KTsgXG4gICAgICAgICAgICAvLyB0b0RvSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZWRpdFRvRG9MaXN0KGN1cnJlbnRGb3JtLCBmb3JtU3VibWlzc2lvblNwZWNpZmljKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAodG9Eb0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Rya3RocnVcIikpe1xuICAgICAgICAgICAgICAgIC8vICAgICB0b0RvSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic3Rya3RocnVcIik7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRvRG9DbGFzc0FycmF5W2NvdW50ZXJdID0gXCJOb1wiO1xuICAgICAgICAgICAgICAgIC8vICAgICBjdXJyZW50Rm9ybS50b0RvQ2xhc3MgPSB0b0RvQ2xhc3NBcnJheTtcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oKFwic3VibWlzc2lvbnNcIiArIGkpLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpOyAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZChcInN0cmt0aHJ1XCIpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9Eb0NsYXNzQXJyYXlbY291bnRlcl0gPSBcIlllc1wiO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoXCJzdWJtaXNzaW9uc1wiICsgaSksIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRGb3JtKTtcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy9BZGRzIGEgbmV3IGl0ZW0gdG8gYW4gZXhpc2l0aW5nIHRvLWRvIGxpc3Qgc3RvcmVkIGluIGxvY2Fsc3RvcmFnZVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBleGlzdGluZ1RvRG9MaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvTGlzdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuICAgICAgICAgICAgdG9Eb0FycmF5LnB1c2goLi4uY3VycmVudEZvcm0udG9EbywgdG9Eb1RleHQpO1xuICAgICAgICAgICAgY3VycmVudEZvcm0udG9EbyA9IHRvRG9BcnJheTtcbiAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5LnB1c2goXCJOb1wiKTtcbiAgICAgICAgICAgIGN1cnJlbnRGb3JtLnRvRG9DbGFzcyA9IHRvRG9DbGFzc0FycmF5O1xuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdG9Eb0l0ZW0udGV4dENvbnRlbnQgPSB0b0RvVGV4dDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRGb3JtKSk7XG4gICAgICAgICAgICBleGlzdGluZ1RvRG9MaXN0RGl2LmFwcGVuZENoaWxkKHRvRG9JdGVtKTtcbiAgICAgICAgICAgIC8vIHRvRG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBlZGl0VG9Eb0xpc3QoY3VycmVudEZvcm0sIGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMpO1xuICAgICAgICAgICAgICAgIC8vIGlmICh0b0RvSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdHJrdGhydVwiKSl7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdG9Eb0NsYXNzQXJyYXlbY291bnRlcl0gPSBcIk5vXCI7XG4gICAgICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRGb3JtLnRvRG9DbGFzcyA9IHRvRG9DbGFzc0FycmF5O1xuICAgICAgICAgICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoY3VycmVudEZvcm0pLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpOyAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZChcInN0cmt0aHJ1XCIpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9Eb0NsYXNzQXJyYXlbY291bnRlcl0gPSBcIlllc1wiO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoY3VycmVudEZvcm0pLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSlcbiAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy8gfSl9XG5cbiAgICAgICAgLy8gbGV0IHRvRG9MaXN0cyA9IHRvRG9MaXN0U2VjdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcbiAgICAgICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPCB0b0RvTGlzdHMubGVuZ3RoOyBqICsrKSB7XG4gICAgICAgIC8vICAgICB0b0RvTGlzdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgICAgIGlmICh0b0RvTGlzdHMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Rya3RocnVcIikpe1xuICAgICAgICAvLyAgICAgICAgICAgICB0b0RvTGlzdHMuY2xhc3NMaXN0LnJlbW92ZShcInN0cmt0aHJ1XCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICB0b0RvQ2xhc3NBcnJheVtqXSA9IFwiTm9cIjtcbiAgICAgICAgLy8gICAgICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKChjdXJyZW50Rm9ybSksIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRGb3JtKSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0b0RvTGlzdHMuY2xhc3NMaXN0LmFkZChcInN0cmt0aHJ1XCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXlbal0gPSBcIlllc1wiO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoY3VycmVudEZvcm0pLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIH0pfSAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gbGV0IHRvRG9JdGVtID0gdG9Eb0xpc3REaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0l0ZW0ubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgICAgLy8gICAgIGVkaXRUb0RvTGlzdChjb3VudGVyLCBjdXJyZW50Rm9ybSwgZm9ybVN1Ym1pc3Npb25TcGVjaWZpYywgdG9Eb0xpc3QpO1xuICAgICAgICAvLyAgfTsiLCJpbXBvcnQgeyB0b0RvTGlzdExpc3RlZCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb0RvTGlzdCAoY3VycmVudEZvcm0sIGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMvKiwgdG9Eb0NsYXNzQXJyYXlDdXJyZW50Ki8pIHtcbiAgICBsZXQgdG9Eb0xpc3RTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvTGlzdFwiKTtcbiAgICBsZXQgdG9Eb0NsYXNzQXJyYXlDdXJyZW50ID0gY3VycmVudEZvcm0udG9Eb0NsYXNzO1xuICAgIFxuICAgIGxldCB0b0RvTGlzdEl0ZW1zID0gdG9Eb0xpc3RTZWN0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xuICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcblxuICAgICAgICAvL0FkZHMgb3IgcmVtb3ZlcyB0aGUgY2xhc3MgdGhhdCBpcyBzdHJpa2VkIHRocm91Z2ggd2hpY2hldmVyIHRvZG8gaXMgc2VsZWN0ZWRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvTGlzdEl0ZW1zLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9Eb0xpc3RJdGVtc1tpXSk7XG4gICAgICAgICAgICB0b0RvTGlzdEl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodG9Eb0xpc3RJdGVtc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdHJrdGhydVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvRG9MaXN0SXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB0b0RvTGlzdEl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXlDdXJyZW50W2ldID0gXCJOb1wiO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvQ2xhc3MgPSB0b0RvQ2xhc3NBcnJheUN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKChmb3JtU3VibWlzc2lvblNwZWNpZmljKSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZvcm0pKTsgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b0RvTGlzdEl0ZW1zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0xpc3RJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFwic3Rya3RocnVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5Q3VycmVudFtpXSA9IFwiWWVzXCI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGb3JtLnRvRG9DbGFzcyA9IHRvRG9DbGFzc0FycmF5Q3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oKGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMpLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpOyAgICBcbiAgICB9XG4gICB9ICAgKVxuICAgIH1cbn0iLCIvLyBjb25zdCBmb3JtU3VibWlzc2lvbnMgPSBbXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybVN1Ym1pc3Npb24oZm9ybSkge1xuICAgIHZhciBqID0gLTE7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBjb25zdCBmb3JtU3VibWlzc2lvbnMgPSBbXTtcblxuICAgICAgICAvL3N0b3JlcyBhbGwgZm9ybSBkZXRhaWxzIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RGb3JtXCIpO1xuICAgICAgICBqICs9IDE7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge307XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtpdGVtc1tpXS5uYW1lXT1pdGVtc1tpXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3VibWlzc2lvbiA9IFwic3VibWlzc2lvbnNcIiArIGo7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN1Ym1pc3Npb24sIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSk7XG4gICAgICAgIGZvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgfVxuICAgIClcbn07XG4iLCJpbXBvcnQgeyBlZGl0VG9Eb0xpc3QgfSBmcm9tICcuL2VkaXQtdG8tZG8tbGlzdC5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0TWFpblNlY3Rpb24gfSBmcm9tICcuL3Byb2plY3QtbWFpbi5qcyc7XG5cbnZhciBwcm9qZWN0Q291bnQgPSAtMTtcblxuLy9DcmVhdGUgYSBsaXN0IG9mIHRoZSBwcm9qZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RTaWRlYmFyKHByb2plY3RPcHRpb25zKSB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBwcm9qZWN0Q291bnQgKz0xO1xuXG4gICAgICAgIHZhciBzdWJtaXNzaW9uID0gXCJzdWJtaXNzaW9uc1wiICsgcHJvamVjdENvdW50O1xuICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdWJtaXNzaW9uKSk7XG5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZm9ybVN1Ym1pc3Npb25EYXRhLnByb2plY3Q7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuc2V0QXR0cmlidXRlICgnaWQnLCAncHJvamVjdE51bScgKyBwcm9qZWN0Q291bnQpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SGVhZGVyc1wiKTtcbiAgICAgICAgbmV3UHJvamVjdEhlYWRpbmcuaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XG4gICAgICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEhlYWRpbmcpO1xuICAgICAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcblxuICAgICAgICBwcm9qZWN0TWFpblNlY3Rpb24oKTtcbiAgICAgICAgLy8gZWRpdFRvRG9MaXN0KGN1cnJlbnRGb3JtLGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMpO1xuXG4gICAgICAgIH0pfSIsImltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi9hZGQtdG8tZG8tbGlzdFwiO1xuaW1wb3J0IHsgZWRpdFRvRG9MaXN0IH0gZnJvbSBcIi4vZWRpdC10by1kby1saXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0U2lkZWJhciB9IGZyb20gXCIuL3Byb2plY3QtbGlzdHNcIjtcbmltcG9ydCB7IHRvRG9MaXN0TGlzdGVkIH0gZnJvbSBcIi4vdG8tZG8tbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE1haW5TZWN0aW9uICgpIHtcblxudmFyIG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0c1wiKTtcbnZhciBkaXZQcm9qZWN0cyA9IG1haW5EaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RIZWFkZXJzXCIpO1xudmFyIGRpdlByb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWxsUHJvamVjdFZpZXdcIik7XG52YXIgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbi8vR2VuZXJhdGVzIGRldGFpbHMgb2YgYSBzdWJtaXR0ZWQgcHJvamVjdCBiYXNlZCBvbiBzdG9yZWQgZGV0YWlscyBzdWJtaXR0ZWQgdXNpbmcgdGhlIGZvcm1cbmZvciAobGV0IGkgPSAwOyBpIDwgZGl2UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGl2UHJvamVjdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuaW5uZXJIVE1MPVwiXCI7XG4gICAgICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuICAgICAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMgPSBcInN1Ym1pc3Npb25zXCIgKyBpO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByb2plY3Q7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtU3VibWlzc2lvbkFycmF5LkRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LmR1ZURhdGU7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByaW9yaXR5O1xuICAgICAgICAgICAgbGV0IHRvRG9MaXN0ID0gZm9ybVN1Ym1pc3Npb25BcnJheS50b0RvO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS52YWx1ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZVRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZVRpdGxlLmlubmVySFRNTCA9IFwiRHVlIERhdGU6IFwiO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGVUaXRsZSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBmb3JtU3VibWlzc2lvbkFycmF5LmR1ZURhdGUgPSBwcm9qZWN0RHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpLCBKU09OLnN0cmluZ2lmeShmb3JtU3VibWlzc2lvbkFycmF5KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIkhpZ2hcIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24xLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5T3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJNZWRpdW1cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24yLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjMuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIkxvd1wiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjMuaW5uZXJIVE1MID0gXCJMb3dcIjsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eU9wdGlvbjEpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eU9wdGlvbjIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eU9wdGlvbjMpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlUaXRsZSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGZvcm1TdWJtaXNzaW9uQXJyYXkucHJpb3JpdHkgPSBwcm9qZWN0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSwgSlNPTi5zdHJpbmdpZnkoZm9ybVN1Ym1pc3Npb25BcnJheSkpO1xuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvTGlzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdG9Eb0xpc3RUZXh0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdG9Eb0xpc3RUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCd0b0RvVGV4dCcpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RTdWJtaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0VGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9Eb0xpc3RcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdFRpdGxlLmlubmVySFRNTCA9IFwiVG8gRG8gTGlzdDogXCI7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdFN1Ym1pdFRpdGxlKTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRvRG9MaXN0VGV4dCk7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCdzdWJtaXRUb0RvJyk7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdC5pbm5lckhUTUwgPSBcIkFkZFwiO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9Eb0xpc3RTdWJtaXQpO1xuXG4gICAgICAgICAgICBhZGRUb0RvKGksIHRvRG9MaXN0VGV4dCwgdG9Eb0xpc3RTdWJtaXQsIGRpdlByb2plY3RWaWV3KTtcbiAgICAgICAgICAgIHRvRG9MaXN0TGlzdGVkKGRpdlByb2plY3RWaWV3LCBmb3JtU3VibWlzc2lvbkFycmF5LCBmb3JtU3VibWlzc2lvblNwZWNpZmljKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9KX19IiwiaW1wb3J0IHsgZWRpdFRvRG9MaXN0IH0gZnJvbSBcIi4vZWRpdC10by1kby1saXN0XCI7XG5pbXBvcnQgeyBmb3JtU3VibWlzc2lvbiB9IGZyb20gXCIuL2Zvcm1cIjtcbmltcG9ydCB7IHByb2plY3RNYWluU2VjdGlvbiB9IGZyb20gXCIuL3Byb2plY3QtbWFpblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9Eb0xpc3RMaXN0ZWQoZGl2UHJvamVjdFZpZXcsIGN1cnJlbnRGb3JtLCBmb3JtU3VibWlzc2lvblNwZWNpZmljKSB7XG5cbmxldCB0b0RvTGlzdEN1cnJlbnQgPSBjdXJyZW50Rm9ybS50b0RvO1xuICAgIC8vQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgaXRlbXMgaW4gdGhlIHRvIGRvIGxpc3RcbiAgICAgICAgaWYgKHRvRG9MaXN0Q3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgICAgLy9SdW5zIHdoZW4gdGhlcmUgYXJlIGl0ZW1zIGluIHRoZSB0byBkbyBsaXN0XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgICAgICB0b0RvTGlzdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvRG9MaXN0JylcbiAgICAgICAgICAgICAgICAvL2ZvciBlYWNoIGl0ZW0gaW4gdGhlIHRvIGRvIGxpc3QgYSBsaXN0IGl0ZW0gaXMgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gVG8gRG8gc2VjdGlvblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvTGlzdEN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0udGV4dENvbnRlbnQgPSB0b0RvTGlzdEN1cnJlbnRbaV07XG4gICAgICAgICAgICAgICAgdG9Eb0xpc3REaXYuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Rm9ybS50b0RvQ2xhc3NbaV0gPT09IFwiWWVzXCIpe1xuICAgICAgICAgICAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKFwic3Rya3RocnVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9Eb0xpc3REaXYpO1xuICAgICAgICAgICAgICAgIC8vIGVkaXRUb0RvTGlzdChpLCBjdXJyZW50Rm9ybSxmb3JtU3VibWlzc2lvblNwZWNpZmljKTtcbiAgICAgICAgICAgICAgICAvLyBlZGl0VG9Eb0xpc3QoY3VycmVudEZvcm0sZm9ybVN1Ym1pc3Npb25TcGVjaWZpYyk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVkaXRUb0RvTGlzdChjdXJyZW50Rm9ybSxmb3JtU3VibWlzc2lvblNwZWNpZmljKTtcblxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZm9ybVN1Ym1pc3Npb24gfSBmcm9tICcuL2Zvcm0uanMnO1xuaW1wb3J0IHsgcHJvamVjdFNpZGViYXIgfSBmcm9tICcuL3Byb2plY3QtbGlzdHMuanMnXG4vLyBpbXBvcnQgeyBwcm9qZWN0TWFpblNlY3Rpb24gfSBmcm9tICcuL3Byb2plY3QtbWFpbi5qcyc7XG4vLyBpbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSAnLi9hZGQtdG8tZG8tbGlzdC5qcyc7XG4vLyBpbXBvcnQgeyBlZGl0VG9Eb0xpc3QgfSBmcm9tICcuL2VkaXQtdG8tZG8tbGlzdC5qcyc7XG5cbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdXR0b25cIik7XG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RWaWV3XCIpO1xuY29uc3QgcHJvamVjdExpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdHNcIik7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZm9ybVwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG5jb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVNlY3Rpb25cIik7XG5cblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5mb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG4vL29wZW5zIHRoZSBwcm9qZWN0IHZpZXdcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGEpIHtcbiAgICBmb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbn0pO1xuXG4vL2Nsb3NlIHRoZSBwcm9qZWN0IHZpZXdcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihhKSB7XG4gICAgZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICBmb3JtLnJlc2V0KCk7XG59KTtcblxuLy9Gb3JtIHN1Ym1pc3Npb25zXG5mb3JtU3VibWlzc2lvbihmb3JtKTtcblxuLy9EaXNwbGF5IGFuZCBzZWxlY3QgcHJvamVjdHMgaW4gdGhlIHNpZGViYXJcbnByb2plY3RTaWRlYmFyKHByb2plY3RMaXN0cyk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==