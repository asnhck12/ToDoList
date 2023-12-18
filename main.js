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


function addToDo(i, toDoListText, toDoListSubmit, divProjectView, formSubmissionSpecific) {
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
        // newProjectDiv.setAttribute ('id', 'projectNum' + projectCount);
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
            // divProjectView.appendChild(toDoListText);


            const toDoListSubmit = document.createElement('button');
            toDoListSubmit.setAttribute('type', 'submit');
            toDoListSubmit.setAttribute('id','submitToDo');
            toDoListSubmit.innerHTML = "Add";
            // divProjectView.appendChild(toDoListSubmit);

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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _project_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-main */ "./src/project-main.js");




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hZGQtdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0LXRvLWRvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LWxpc3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90by1kby1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9Eb0xpc3RMaXN0ZWQgfSBmcm9tIFwiLi90by1kby1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKGksIHRvRG9MaXN0VGV4dCwgdG9Eb0xpc3RTdWJtaXQsIGRpdlByb2plY3RWaWV3LCBmb3JtU3VibWlzc2lvblNwZWNpZmljKSB7XG4gICAgICAgIHZhciBjdXJyZW50Rm9ybSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuXG4gICAgLy9TdWJtaXRzIGEgdG8gZG8gaXRlbVxuICAgIHRvRG9MaXN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuICAgICAgICBjb25zdCB0b0RvQ2xhc3NBcnJheSA9IFtdO1xuXG4gICAgICAgIHRvRG9UZXh0ID0gdG9Eb0xpc3RUZXh0LnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRvRG9MaXN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9Eb0xpc3QnKTtcbiAgICAgICAgXG4gICAgICAgIC8vQ3JlYXRlcyBhIG5ldyBpdGVtIHRvIHRoZSB0by1kbyBsaXN0IHRvIGJlIHN0b3JlZCBpbnRvIGxvY2Fsc3RvcmFnZVxuICAgICAgICBpZiAoY3VycmVudEZvcm0udG9EbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b0RvQXJyYXkucHVzaCh0b0RvVGV4dCk7XG4gICAgICAgICAgICB0b0RvQ2xhc3NBcnJheS5wdXNoKFwiTm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b0RvQXJyYXkucHVzaCguLi5jdXJyZW50Rm9ybS50b0RvLCB0b0RvVGV4dCk7XG4gICAgICAgICAgICB0b0RvQ2xhc3NBcnJheS5wdXNoKC4uLmN1cnJlbnRGb3JtLnRvRG9DbGFzcywgXCJOb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Rm9ybS50b0RvID0gdG9Eb0FycmF5O1xuICAgICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpO1xuICAgICAgICAgICAgdG9Eb0xpc3RUZXh0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0b0RvTGlzdExpc3RlZChkaXZQcm9qZWN0VmlldywgY3VycmVudEZvcm0sIFwic3VibWlzc2lvbnNcIiArIGkpIFxufVxuKX1cbiIsImV4cG9ydCBmdW5jdGlvbiBlZGl0VG9Eb0xpc3QgKGksIGN1cnJlbnRGb3JtLCBmb3JtU3VibWlzc2lvbkl0ZW0sIHRvRG9JdGVtKSB7XG4gICAgbGV0IHRvRG9DbGFzc0FycmF5Q3VycmVudCA9IGN1cnJlbnRGb3JtLnRvRG9DbGFzcztcbiAgICBcbiAgICAgICAgLy9BZGRzIG9yIHJlbW92ZXMgdGhlIGNsYXNzIHRoYXQgaXMgc3RyaWtlZCB0aHJvdWdoIHdoaWNoZXZlciB0b2RvIGlzIHNlbGVjdGVkXG4gICAgICAgICAgICB0b0RvSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvRG9JdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInN0cmt0aHJ1XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBcnJheSBDbGFzczogXCIgKyB0b0RvQ2xhc3NBcnJheUN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic3Rya3RocnVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9DbGFzc0FycmF5Q3VycmVudFtpXSA9IFwiTm9cIjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXlDdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoZm9ybVN1Ym1pc3Npb25JdGVtKSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZvcm0pKTsgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKFwic3Rya3RocnVcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgQ2xhc3M6IFwiICsgdG9Eb0NsYXNzQXJyYXlDdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXlDdXJyZW50W2ldID0gXCJZZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXlDdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoZm9ybVN1Ym1pc3Npb25JdGVtKSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZvcm0pKTsgICAgXG4gICAgfVxuICAgfSAgIClcbiAgICB9IiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1TdWJtaXNzaW9uKGZvcm0pIHtcbiAgICB2YXIgaiA9IC0xO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvL3N0b3JlcyBhbGwgZm9ybSBkZXRhaWxzIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RGb3JtXCIpO1xuICAgICAgICBqICs9IDE7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge307XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtpdGVtc1tpXS5uYW1lXT1pdGVtc1tpXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3VibWlzc2lvbiA9IFwic3VibWlzc2lvbnNcIiArIGo7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN1Ym1pc3Npb24sIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSk7XG4gICAgICAgIGZvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgfSl9O1xuIiwiaW1wb3J0IHsgcHJvamVjdE1haW5TZWN0aW9uIH0gZnJvbSAnLi9wcm9qZWN0LW1haW4uanMnO1xuXG52YXIgcHJvamVjdENvdW50ID0gLTE7XG5cbi8vQ3JlYXRlIGEgbGlzdCBvZiB0aGUgcHJvamVjdHNcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0U2lkZWJhcihwcm9qZWN0T3B0aW9ucykge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgcHJvamVjdENvdW50ICs9MTtcblxuICAgICAgICB2YXIgc3VibWlzc2lvbiA9IFwic3VibWlzc2lvbnNcIiArIHByb2plY3RDb3VudDtcbiAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3VibWlzc2lvbikpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGZvcm1TdWJtaXNzaW9uRGF0YS5wcm9qZWN0O1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAvLyBuZXdQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSAoJ2lkJywgJ3Byb2plY3ROdW0nICsgcHJvamVjdENvdW50KTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlcnNcIik7XG4gICAgICAgIG5ld1Byb2plY3RIZWFkaW5nLmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RIZWFkaW5nKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICAgICAgcHJvamVjdE1haW5TZWN0aW9uKCk7XG4gICAgICAgIH0pfSIsImltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi9hZGQtdG8tZG8tbGlzdFwiO1xuaW1wb3J0IHsgdG9Eb0xpc3RMaXN0ZWQgfSBmcm9tIFwiLi90by1kby1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TWFpblNlY3Rpb24gKCkge1xuXG52YXIgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RzXCIpO1xudmFyIGRpdlByb2plY3RzID0gbWFpbkRpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEhlYWRlcnNcIik7XG52YXIgZGl2UHJvamVjdFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxQcm9qZWN0Vmlld1wiKTtcbnZhciBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuLy9HZW5lcmF0ZXMgZGV0YWlscyBvZiBhIHN1Ym1pdHRlZCBwcm9qZWN0IGJhc2VkIG9uIHN0b3JlZCBkZXRhaWxzIHN1Ym1pdHRlZCB1c2luZyB0aGUgZm9ybVxuZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXZQcm9qZWN0c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRpdlByb2plY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZGl2UHJvamVjdHNbal0ucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXZQcm9qZWN0c1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkUHJvamVjdFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZC1wcm9qZWN0XCIpOyBcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmlubmVySFRNTD1cIlwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuICAgICAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMgPSBcInN1Ym1pc3Npb25zXCIgKyBpO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByb2plY3Q7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtU3VibWlzc2lvbkFycmF5LkRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LmR1ZURhdGU7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByaW9yaXR5O1xuICAgICAgICAgICAgbGV0IHRvRG9MaXN0ID0gZm9ybVN1Ym1pc3Npb25BcnJheS50b0RvO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb246IFwiICsgZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS52YWx1ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZVRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZVRpdGxlLmlubmVySFRNTCA9IFwiRHVlIERhdGU6IFwiO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGVUaXRsZSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuICAgICAgICAgICAgICAgIGZvcm1TdWJtaXNzaW9uQXJyYXkuZHVlRGF0ZSA9IHByb2plY3REdWVEYXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGZvcm1TdWJtaXNzaW9uQXJyYXkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5T3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiSGlnaFwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjEuaW5uZXJIVE1MID0gXCJIaWdoXCI7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjIuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIk1lZGl1bVwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjIuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eU9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5T3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiTG93XCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5T3B0aW9uMy5pbm5lckhUTUwgPSBcIkxvd1wiOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eVRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5VGl0bGUuaW5uZXJIVE1MID0gXCJQcmlvcml0eTogXCI7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5T3B0aW9uMSk7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5T3B0aW9uMik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5T3B0aW9uMyk7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkudmFsdWUgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eVRpdGxlKTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSk7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGkpKTtcbiAgICAgICAgICAgICAgICBmb3JtU3VibWlzc2lvbkFycmF5LnByaW9yaXR5ID0gcHJvamVjdFByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGZvcm1TdWJtaXNzaW9uQXJyYXkpKTtcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRvRG9MaXN0VGV4dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgICAgIHRvRG9MaXN0VGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9Eb1RleHQnKTtcbiAgICAgICAgICAgIHRvRG9MaXN0VGV4dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICc1Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RTdWJtaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0VGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9Eb0xpc3RcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdFRpdGxlLmlubmVySFRNTCA9IFwiVG8gRG8gTGlzdDogXCI7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdFN1Ym1pdFRpdGxlKTtcbiAgICAgICAgICAgIC8vIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRvRG9MaXN0VGV4dCk7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCdzdWJtaXRUb0RvJyk7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdC5pbm5lckhUTUwgPSBcIkFkZFwiO1xuICAgICAgICAgICAgLy8gZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9Eb0xpc3RTdWJtaXQpO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdmb3JtJyApO1xuICAgICAgICAgICAgdG9Eb0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIixcInRvRG9Gb3JtXCIpO1xuICAgICAgICAgICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0xpc3RUZXh0KTtcbiAgICAgICAgICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9MaXN0U3VibWl0KTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRvRG9Gb3JtKTtcblxuICAgICAgICAgICAgYWRkVG9EbyhpLCB0b0RvTGlzdFRleHQsIHRvRG9Gb3JtLCBkaXZQcm9qZWN0Vmlldyk7XG4gICAgICAgICAgICB0b0RvTGlzdExpc3RlZChkaXZQcm9qZWN0VmlldywgZm9ybVN1Ym1pc3Npb25BcnJheSwgZm9ybVN1Ym1pc3Npb25TcGVjaWZpYyk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfSl9fSIsImltcG9ydCB7IGVkaXRUb0RvTGlzdCB9IGZyb20gXCIuL2VkaXQtdG8tZG8tbGlzdFwiO1xuaW1wb3J0IHsgZm9ybVN1Ym1pc3Npb24gfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFpblNlY3Rpb24gfSBmcm9tIFwiLi9wcm9qZWN0LW1haW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvRG9MaXN0TGlzdGVkKGRpdlByb2plY3RWaWV3LCBjdXJyZW50Rm9ybSwgZm9ybVN1Ym1pc3Npb25TcGVjaWZpYykge1xuXG5sZXQgdG9Eb0xpc3RDdXJyZW50ID0gY3VycmVudEZvcm0udG9EbztcbmxldCB0b0RvTGlzdERpdjtcblxuXG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvRG9MaXN0XCIpID09PSBudWxsKSB7XG4gICAgdG9Eb0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRvRG9MaXN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9Eb0xpc3QnKTtcbn1cbmVsc2Uge1xuICAgIHRvRG9MaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvTGlzdFwiKTsgXG59XG4gICAgLy9DaGVja3MgaWYgdGhlcmUgYXJlIGFueSBpdGVtcyBpbiB0aGUgdG8gZG8gbGlzdFxuICAgICAgICBpZiAodG9Eb0xpc3RDdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgfVxuICAgICAgICAvL1J1bnMgd2hlbiB0aGVyZSBhcmUgaXRlbXMgaW4gdGhlIHRvIGRvIGxpc3RcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b0RvTGlzdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIC8vZm9yIGVhY2ggaXRlbSBpbiB0aGUgdG8gZG8gbGlzdCBhIGxpc3QgaXRlbSBpcyBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byBUbyBEbyBzZWN0aW9uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9MaXN0Q3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS50ZXh0Q29udGVudCA9IHRvRG9MaXN0Q3VycmVudFtpXTtcbiAgICAgICAgICAgICAgICB0b0RvTGlzdERpdi5hcHBlbmRDaGlsZCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGb3JtLnRvRG9DbGFzc1tpXSA9PT0gXCJZZXNcIil7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWRpdFRvRG9MaXN0KGksIGN1cnJlbnRGb3JtLGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMsIHRvRG9JdGVtKTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b0RvTGlzdERpdik7XG4gICAgICAgIH19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtU3VibWlzc2lvbiB9IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0U2lkZWJhciB9IGZyb20gJy4vcHJvamVjdC1saXN0cy5qcydcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RzXCIpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWZvcm1cIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1TZWN0aW9uXCIpO1xuXG5cbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuLy9vcGVucyB0aGUgcHJvamVjdCB2aWV3XG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihhKSB7XG4gICAgZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG59KTtcblxuLy9jbG9zZSB0aGUgcHJvamVjdCB2aWV3XG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oYSkge1xuICAgIGZvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgZm9ybS5yZXNldCgpO1xufSk7XG5cbi8vRm9ybSBzdWJtaXNzaW9uc1xuZm9ybVN1Ym1pc3Npb24oZm9ybSk7XG5cbi8vRGlzcGxheSBhbmQgc2VsZWN0IHByb2plY3RzIGluIHRoZSBzaWRlYmFyXG5wcm9qZWN0U2lkZWJhcihwcm9qZWN0TGlzdHMpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=