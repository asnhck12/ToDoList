import { addToDo } from "./add-to-do-list";
import { projectSidebar } from "./project-lists";
import { toDoListListed } from "./to-do-list";

export function projectMainSection () {

var mainDiv = document.getElementById("projectLists");
var divProjects = mainDiv.getElementsByClassName("projectHeaders");
var divProjectView = document.getElementById("fullProjectView");


for (let i = 0; i < divProjects.length; i++) {
        divProjects[i].addEventListener("click", function() {
            divProjectView.innerHTML="";
            var formSubmissionArray = JSON.parse(localStorage.getItem("submissions" + i));

            let title = formSubmissionArray.project;
            let description = formSubmissionArray.Description;
            let dueDate = formSubmissionArray.dueDate;
            let priority = formSubmissionArray.priority;
            let toDoList = formSubmissionArray.toDo;

            
            const projectHeader = document.createElement('h1');
            projectHeader.innerHTML = title;
            divProjectView.appendChild(projectHeader);

            const projectDescription = document.createElement('p');
            projectDescription.innerHTML = description;
            divProjectView.appendChild(projectDescription);

            const projectDueDate = document.createElement('p');
            projectDueDate.innerHTML = dueDate;
            divProjectView.appendChild(projectDueDate);

            const projectPriority = document.createElement('p');
            projectPriority.innerHTML = priority;
            divProjectView.appendChild(projectPriority);

            const toDoListText = document.createElement('input');
            toDoListText.setAttribute("type", "text");
            toDoListText.setAttribute('id','toDoText');
            divProjectView.appendChild(toDoListText);

            const toDoListSubmit = document.createElement('button');
            toDoListSubmit.setAttribute('type', 'submit');
            toDoListSubmit.setAttribute('id','submitToDo');
            toDoListSubmit.innerHTML = "Add";
            divProjectView.appendChild(toDoListSubmit);

           

            addToDo(i, toDoListText, toDoListSubmit, divProjectView);

            toDoListListed(divProjectView, formSubmissionArray);
       

            
            })}}