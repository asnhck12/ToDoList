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
        form.reset();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esd0RBQWM7O0FBRWQ7QUFDQSxpRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZC10by1kby1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXQtdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtbGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC1tYWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvLWRvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0RvTGlzdExpc3RlZCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8oaSwgdG9Eb0xpc3RUZXh0LCB0b0RvTGlzdFN1Ym1pdCwgZGl2UHJvamVjdFZpZXcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRGb3JtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN1Ym1pc3Npb25zXCIgKyBpKSk7XG5cbiAgICAvL1N1Ym1pdHMgYSB0byBkbyBpdGVtXG4gICAgdG9Eb0xpc3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdG9Eb0FycmF5ID0gW107XG4gICAgICAgIGNvbnN0IHRvRG9DbGFzc0FycmF5ID0gW107XG5cbiAgICAgICAgdG9Eb1RleHQgPSB0b0RvTGlzdFRleHQudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9MaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdG9Eb0xpc3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b0RvTGlzdCcpO1xuICAgICAgICBcbiAgICAgICAgLy9BZGRzIGEgbmV3IGl0ZW0gdG8gdGhlIHRvLWRvIGxpc3QgdG8gYmUgc3RvcmVkIGluIHRoZSBsb2NhbHN0b3JhZ2VcbiAgICAgICAgaWYgKGN1cnJlbnRGb3JtLnRvRG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG9Eb0FycmF5LnB1c2godG9Eb1RleHQpO1xuICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXkucHVzaChcIk5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9Eb0FycmF5LnB1c2goLi4uY3VycmVudEZvcm0udG9EbywgdG9Eb1RleHQpO1xuICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXkucHVzaCguLi5jdXJyZW50Rm9ybS50b0RvQ2xhc3MsIFwiTm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEZvcm0udG9EbyA9IHRvRG9BcnJheTtcbiAgICAgICAgICAgIGN1cnJlbnRGb3JtLnRvRG9DbGFzcyA9IHRvRG9DbGFzc0FycmF5O1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZvcm0pKTtcbiAgICAgICAgICAgIHRvRG9MaXN0VGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdG9Eb0xpc3RMaXN0ZWQoZGl2UHJvamVjdFZpZXcsIGN1cnJlbnRGb3JtLCBcInN1Ym1pc3Npb25zXCIgKyBpKSBcbn1cbil9XG4iLCJleHBvcnQgZnVuY3Rpb24gZWRpdFRvRG9MaXN0IChpLCBjdXJyZW50Rm9ybSwgZm9ybVN1Ym1pc3Npb25JdGVtLCB0b0RvSXRlbSkge1xuICAgIGxldCB0b0RvQ2xhc3NBcnJheUN1cnJlbnQgPSBjdXJyZW50Rm9ybS50b0RvQ2xhc3M7XG4gICAgXG4gICAgICAgIC8vQWRkcyBvciByZW1vdmVzIHRoZSBjbGFzcyB0aGF0IGlzIHN0cmlrZWQgdGhyb3VnaCB3aGljaGV2ZXIgdG9kbyBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgdG9Eb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0b0RvSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdHJrdGhydVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXlDdXJyZW50W2ldID0gXCJOb1wiO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Rm9ybS50b0RvQ2xhc3MgPSB0b0RvQ2xhc3NBcnJheUN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKChmb3JtU3VibWlzc2lvbkl0ZW0pLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Rm9ybSkpOyAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJzdHJrdGhydVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NsYXNzQXJyYXlDdXJyZW50W2ldID0gXCJZZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZvcm0udG9Eb0NsYXNzID0gdG9Eb0NsYXNzQXJyYXlDdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoZm9ybVN1Ym1pc3Npb25JdGVtKSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZvcm0pKTsgICAgXG4gICAgfVxuICAgfSAgIClcbiAgICB9IiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1TdWJtaXNzaW9uKGZvcm0pIHtcbiAgICB2YXIgaiA9IC0xO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvL3N0b3JlcyBhbGwgZm9ybSBkZXRhaWxzIGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgICAgICAgaiArPSAxO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9ybURhdGFbaXRlbXNbaV0ubmFtZV09aXRlbXNbaV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1Ym1pc3Npb24gPSBcInN1Ym1pc3Npb25zXCIgKyBqO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdWJtaXNzaW9uLCBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSkpO1xuICAgICAgICBmb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSl9O1xuIiwiaW1wb3J0IHsgcHJvamVjdE1haW5TZWN0aW9uIH0gZnJvbSAnLi9wcm9qZWN0LW1haW4uanMnO1xuXG52YXIgcHJvamVjdENvdW50ID0gLTE7XG5cbi8vR2VuZXJhdGVzIGEgbGlzdCBvZiB0aGUgcHJvamVjdHMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzaWRlIHBhbmVsXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFNpZGViYXIocHJvamVjdE9wdGlvbnMpIHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgIHByb2plY3RDb3VudCArPTE7XG5cbiAgICAgICAgdmFyIHN1Ym1pc3Npb24gPSBcInN1Ym1pc3Npb25zXCIgKyBwcm9qZWN0Q291bnQ7XG4gICAgICAgIHZhciBmb3JtU3VibWlzc2lvbkRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN1Ym1pc3Npb24pKTtcblxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBmb3JtU3VibWlzc2lvbkRhdGEucHJvamVjdDtcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlcnNcIik7XG4gICAgICAgIG5ld1Byb2plY3RIZWFkaW5nLmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RIZWFkaW5nKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICAgICAgcHJvamVjdE1haW5TZWN0aW9uKCk7XG4gICAgICAgIH0pfSIsImltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi9hZGQtdG8tZG8tbGlzdFwiO1xuaW1wb3J0IHsgdG9Eb0xpc3RMaXN0ZWQgfSBmcm9tIFwiLi90by1kby1saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TWFpblNlY3Rpb24gKCkge1xuXG52YXIgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RzXCIpO1xudmFyIGRpdlByb2plY3RzID0gbWFpbkRpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEhlYWRlcnNcIik7XG52YXIgZGl2UHJvamVjdFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxQcm9qZWN0Vmlld1wiKTtcbnZhciBkaXZOZXdQcm9qZWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVNlY3Rpb25cIik7XG5cbi8vRGlzcGxheXMgdGhlIGRldGFpbHMgb2YgdGhlIHNlbGVjdGVkIHByb2plY3RcbmZvciAobGV0IGkgPSAwOyBpIDwgZGl2UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGl2UHJvamVjdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy9yZW1vdmVzIHRoZSAnc2VsZWN0ZWQnIHZpc3VhbCBpbiB0aGUgc2lkZSBwYW5lbFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkaXZQcm9qZWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGRpdlByb2plY3RzW2pdLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICAgICAgICAgIGRpdk5ld1Byb2plY3RWaWV3LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXZQcm9qZWN0c1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkUHJvamVjdFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZC1wcm9qZWN0XCIpOyBcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmlubmVySFRNTD1cIlwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuICAgICAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uU3BlY2lmaWMgPSBcInN1Ym1pc3Npb25zXCIgKyBpO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByb2plY3Q7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtU3VibWlzc2lvbkFycmF5LkRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBmb3JtU3VibWlzc2lvbkFycmF5LmR1ZURhdGU7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtU3VibWlzc2lvbkFycmF5LnByaW9yaXR5O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0SGVhZGVyRGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInByb2plY3REZXNjcmlwdGlvbkRpdlwiKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uRGl2KVxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInByb2plY3RNYWluRmllbGRzXCIpO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUudmFsdWUgPSBkdWVEYXRlO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdER1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICAgICAgcHJvamVjdER1ZURhdGVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGVUaXRsZS5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlIFwiO1xuICAgICAgICAgICAgcHJvamVjdER1ZURhdGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGVUaXRsZSk7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG4gICAgICAgICAgICBkaXZQcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZURpdik7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybVN1Ym1pc3Npb25BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdWJtaXNzaW9uc1wiICsgaSkpO1xuICAgICAgICAgICAgICAgIGZvcm1TdWJtaXNzaW9uQXJyYXkuZHVlRGF0ZSA9IHByb2plY3REdWVEYXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGZvcm1TdWJtaXNzaW9uQXJyYXkpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5RGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJwcm9qZWN0TWFpbkZpZWxkc1wiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIkhpZ2hcIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24xLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5T3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJNZWRpdW1cIik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlPcHRpb24yLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjMuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIkxvd1wiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eU9wdGlvbjMuaW5uZXJIVE1MID0gXCJMb3dcIjsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9IFwiUHJpb3JpdHkgXCI7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5T3B0aW9uMSk7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5T3B0aW9uMik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5T3B0aW9uMyk7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkudmFsdWUgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlUaXRsZSk7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5KTtcbiAgICAgICAgICAgIGRpdlByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eURpdik7XG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1TdWJtaXNzaW9uQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGkpKTtcbiAgICAgICAgICAgICAgICBmb3JtU3VibWlzc2lvbkFycmF5LnByaW9yaXR5ID0gcHJvamVjdFByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3VibWlzc2lvbnNcIiArIGksIEpTT04uc3RyaW5naWZ5KGZvcm1TdWJtaXNzaW9uQXJyYXkpKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0b0RvTGlzdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvRG9MaXN0Rm9ybURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwicHJvamVjdE1haW5GaWVsZHNcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvRG9UZXh0Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFRleHQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnNScpO1xuICAgICAgICAgICAgdG9Eb0xpc3RUZXh0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0U3VibWl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvRG9MaXN0XCIpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXRUaXRsZS5pbm5lckhUTUwgPSBcIlRvIERvIExpc3QgXCI7XG4gICAgICAgICAgICB0b0RvTGlzdEZvcm1EaXYuYXBwZW5kQ2hpbGQodG9Eb0xpc3RTdWJtaXRUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICB0b0RvTGlzdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VibWl0VG9EbycpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTdWJtaXQuaW5uZXJIVE1MID0gXCJBZGRcIjtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZm9ybScgKTtcbiAgICAgICAgICAgIHRvRG9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0b0RvRm9ybVwiKTtcbiAgICAgICAgICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9MaXN0VGV4dCk7XG4gICAgICAgICAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvTGlzdFN1Ym1pdCk7XG4gICAgICAgICAgICB0b0RvTGlzdEZvcm1EaXYuYXBwZW5kQ2hpbGQodG9Eb0Zvcm0pO1xuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9Eb0xpc3RGb3JtRGl2KTtcblxuICAgICAgICAgICAgYWRkVG9EbyhpLCB0b0RvTGlzdFRleHQsIHRvRG9Gb3JtLCBkaXZQcm9qZWN0Vmlldyk7XG4gICAgICAgICAgICB0b0RvTGlzdExpc3RlZChkaXZQcm9qZWN0VmlldywgZm9ybVN1Ym1pc3Npb25BcnJheSwgZm9ybVN1Ym1pc3Npb25TcGVjaWZpYyk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfSl9fSIsImltcG9ydCB7IGVkaXRUb0RvTGlzdCB9IGZyb20gXCIuL2VkaXQtdG8tZG8tbGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9Eb0xpc3RMaXN0ZWQoZGl2UHJvamVjdFZpZXcsIGN1cnJlbnRGb3JtLCBmb3JtU3VibWlzc2lvblNwZWNpZmljKSB7XG5cbmxldCB0b0RvTGlzdEN1cnJlbnQgPSBjdXJyZW50Rm9ybS50b0RvO1xubGV0IHRvRG9MaXN0RGl2O1xuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0RvTGlzdFwiKSA9PT0gbnVsbCkge1xuICAgIHRvRG9MaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0b0RvTGlzdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvRG9MaXN0Jyk7XG59XG5lbHNlIHtcbiAgICB0b0RvTGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9Eb0xpc3RcIik7IFxufVxuICAgIC8vQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgaXRlbXMgaW4gdGhlIHRvIGRvIGxpc3RcbiAgICAgICAgaWYgKHRvRG9MaXN0Q3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgICAgLy9SdW5zIHdoZW4gdGhlcmUgYXJlIGl0ZW1zIGluIHRoZSB0byBkbyBsaXN0XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9Eb0xpc3REaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICAvL2ZvciBlYWNoIGl0ZW0gaW4gdGhlIHRvIGRvIGxpc3QgYSBsaXN0IGl0ZW0gaXMgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gVG8gRG8gc2VjdGlvblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvTGlzdEN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0udGV4dENvbnRlbnQgPSB0b0RvTGlzdEN1cnJlbnRbaV07XG4gICAgICAgICAgICAgICAgdG9Eb0xpc3REaXYuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Rm9ybS50b0RvQ2xhc3NbaV0gPT09IFwiWWVzXCIpe1xuICAgICAgICAgICAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKFwic3Rya3RocnVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVkaXRUb0RvTGlzdChpLCBjdXJyZW50Rm9ybSxmb3JtU3VibWlzc2lvblNwZWNpZmljLCB0b0RvSXRlbSk7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2UHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9Eb0xpc3REaXYpO1xuICAgICAgICB9fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZm9ybVN1Ym1pc3Npb24gfSBmcm9tICcuL2Zvcm0uanMnO1xuaW1wb3J0IHsgcHJvamVjdFNpZGViYXIgfSBmcm9tICcuL3Byb2plY3QtbGlzdHMuanMnXG5cbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdXR0b25cIik7XG5jb25zdCBwcm9qZWN0TGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0c1wiKTtcbmNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWxsUHJvamVjdFZpZXdcIik7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZm9ybVwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG5jb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVNlY3Rpb25cIik7XG52YXIgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RzXCIpO1xudmFyIGRpdlByb2plY3RzID0gbWFpbkRpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEhlYWRlcnNcIik7XG5cbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuLy9vcGVucyB0aGUgcHJvamVjdCB2aWV3XG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihhKSB7XG4gICAgZm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgcHJvamVjdFZpZXcuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRpdlByb2plY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRpdlByb2plY3RzW2pdLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgIH1cbn0pO1xuXG4vL2Nsb3NlcyB0aGUgcHJvamVjdCB2aWV3XG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oYSkge1xuICAgIGZvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgZm9ybS5yZXNldCgpO1xufSk7XG5cbi8vRm9ybSBzdWJtaXNzaW9uc1xuZm9ybVN1Ym1pc3Npb24oZm9ybSk7XG5cbi8vRGlzcGxheSBhbmQgc2VsZWN0IHByb2plY3RzIGluIHRoZSBzaWRlYmFyXG5wcm9qZWN0U2lkZWJhcihwcm9qZWN0TGlzdHMpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=