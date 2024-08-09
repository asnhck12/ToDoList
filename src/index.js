import { formSubmission } from './form.js';
import { projectSidebar } from './project-lists.js'

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
formSubmission(form);

//Display and select projects in the sidebar
projectSidebar(projectLists);

