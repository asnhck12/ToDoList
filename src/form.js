// const projectName = document.getElementById("project");
let projectDescription = document.getElementById("projectDescription");
let dueDate = document.getElementById("projectDueDate");
let priority = document.getElementById("priority");
let toDO = document.getElementById("toDo");
let submit = document.getElementById("submit");


//store form details in local storage
//

export function formSubmission(form) {
form.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log("Hello world");

})};