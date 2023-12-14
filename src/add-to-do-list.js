import { editToDoList } from "./edit-to-do-list";
import { projectMainSection } from "./project-main";
import { toDoListListed } from "./to-do-list";

export function addToDo(i, toDoListText, toDoListSubmit, divProjectView, formSubmissionSpecific) {
        const toDoArray = [];
        const toDoClassArray = [];
        var j = -1;
        var currentForm = JSON.parse(localStorage.getItem("submissions" + i));
        var currentFormItem = "submissions" + i;

    //Submits a to do item
    toDoListSubmit.addEventListener("click", function() {
        
        toDoText = toDoListText.value;
        const toDoListDiv = document.createElement('ul');
        toDoListDiv.setAttribute('id', 'toDoList');
        j++;
        
        //Creates a new item to the to-do list to be stored into localstorage
        if (currentForm.toDo === undefined) {
            toDoArray.push(toDoText);
            currentForm.toDo = toDoArray;
            toDoClassArray.push("No");
            currentForm.toDoClass = toDoClassArray;
            const toDoItem = document.createElement('li');
            toDoItem.textContent = toDoText;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
            toDoListDiv.appendChild(toDoItem);
            divProjectView.appendChild(toDoListDiv); 
            editToDoList(j, currentForm, "submissions" + i, toDoItem);
        }
    
        //Adds a new item to an exisiting to-do list stored in localstorage
        else {
            var existingToDoListDiv = document.getElementById("toDoList");
            const toDoArray = [];
            toDoArray.push(...currentForm.toDo, toDoText);
            currentForm.toDo = toDoArray;
            toDoClassArray.push("No");
            currentForm.toDoClass = toDoClassArray;
            const toDoItem = document.createElement('li');
            toDoItem.textContent = toDoText;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
            existingToDoListDiv.appendChild(toDoItem);
            editToDoList(j, currentForm, "submissions" + i, toDoItem);
                                    }
                    
                                })
            }