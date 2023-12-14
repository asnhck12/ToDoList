import { editToDoList } from "./edit-to-do-list";
import { formSubmission } from "./form";
import { projectMainSection } from "./project-main";

export function toDoListListed(divProjectView, currentForm, formSubmissionSpecific) {

let toDoListCurrent = currentForm.toDo;
    //Checks if there are any items in the to do list
        if (toDoListCurrent === undefined) {
        }
        //Runs when there are items in the to do list
        else {
                const toDoListDiv = document.createElement('ul');
                toDoListDiv.setAttribute('id', 'toDoList')
                //for each item in the to do list a list item is created and appended to To Do section
            for (let i = 0; i < toDoListCurrent.length; i++) {
                const toDoItem = document.createElement('li');
                toDoItem.textContent = toDoListCurrent[i];
                toDoListDiv.appendChild(toDoItem);
                if (currentForm.toDoClass[i] === "Yes"){
                    toDoItem.classList.add("strkthru");
                }
                else {
                }    
                divProjectView.appendChild(toDoListDiv);
                // editToDoList(i, currentForm,formSubmissionSpecific);
                // editToDoList(currentForm,formSubmissionSpecific);

                
            }
            editToDoList(currentForm,formSubmissionSpecific);

        }


    }



