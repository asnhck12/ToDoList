import { formSubmission } from './form.js';
import { projectSidebar } from './project-lists.js'

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
formSubmission(form);

//Display and select projects in the sidebar
projectSidebar(projectLists);

