import { addToDo } from "./add-to-do-list";
import { toDoListListed } from "./to-do-list";

export function projectMainSection () {

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

            addToDo(i, toDoListText, toDoForm, divProjectView);
            toDoListListed(divProjectView, formSubmissionArray, formSubmissionSpecific);
            

            })}}