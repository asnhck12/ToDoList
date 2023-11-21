import { projectMainSection } from './project-main.js';

var projectCount = -1;

export function projectSidebar(projectOptions) {
    form.addEventListener("submit", function(e) {
    projectCount +=1;

        var submission = "submissions" + projectCount;
        var formSubmissionData = JSON.parse(localStorage.getItem(submission));
        // var formSubmissionData = formSubmissionArray[projectCount];
 
        // console.log(formSubmissionData);
        let projectName = formSubmissionData.project;

        const newProjectDiv = document.createElement('div');
        const newProjectHeading = document.createElement('h3');
        newProjectDiv.setAttribute ('id', 'projectNum' + projectCount);
        newProjectDiv.classList.add("projectHeaders");
        newProjectHeading.innerHTML = projectName;
        newProjectDiv.appendChild(newProjectHeading);
        projectOptions.appendChild(newProjectDiv);

        projectMainSection();
        // formSubmissionArray, projectName, description, dueDate, priority, toDoList
        })}