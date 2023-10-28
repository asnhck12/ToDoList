import { formSubmission } from './form.js';
import { projectSidebar } from './project-lists.js'

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
formSubmission(form);

//Display and select projects in the sidebar
projectSidebar(projectLists);

//module to show the projects and the associated tasks in the main section
