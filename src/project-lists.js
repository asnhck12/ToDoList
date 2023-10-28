var projectCount = -1;

export function projectSidebar(projectOptions) {
    form.addEventListener("submit", function(e) {
    projectCount +=1;

        var formSubmissionArray = JSON.parse(localStorage.getItem("submissions"));
        var formSubmissionData = formSubmissionArray[projectCount];
 
        let projectName = formSubmissionData.project;
        let description = formSubmissionData.Description;
        let dueDate = formSubmissionData.dueDate;
        let priority = formSubmissionData.priority;
        let toDoList = formSubmissionData.toDo;

        const newProjectDiv = document.createElement('div');
        const newProjectHeading = document.createElement('h3');
        newProjectDiv.className = 'projectNum' + projectCount;
        newProjectHeading.innerHTML = projectName;
        newProjectDiv.appendChild(newProjectHeading);
        projectOptions.appendChild(newProjectDiv);

                console.log(projectName);
                console.log(description);
                console.log(dueDate);
                console.log(priority);
                console.log(toDoList);
        })}
 
