import { formSubmission } from './form.js';

const projectName = document.getElementById("project");
const newProjectButton = document.getElementById("newProjectButton");
const sideBar = document.getElementById("sidebar");
const projectView = document.getElementById("projectView");
const closeButton = document.getElementById("close-form");
const form = document.getElementById("form");



//opens the project view
newProjectButton.addEventListener("click", function(a) {
    form.style.display="block";
});


//close the project view
closeButton.addEventListener("click", function(a) {
    form.style.display="none";
});

//For submissions
formSubmission(form);





//module for a form that asks for project details: Project Title, Project description, Date Due



//module to display the projects, shows Project Title, Project description, Date Due

//module to show the projects and the associated tasks in the main section

//store form submissions

//Show projects list