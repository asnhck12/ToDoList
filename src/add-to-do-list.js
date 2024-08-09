import { toDoListListed } from "./to-do-list";

export function addToDo(i, toDoListText, toDoListSubmit, divProjectView) {
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
            toDoListListed(divProjectView, currentForm, "submissions" + i) 
}
)}
