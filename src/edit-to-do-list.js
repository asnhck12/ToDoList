import { toDoListListed } from "./to-do-list";

export function editToDoList (i, currentForm, formSubmissionItem, toDoItem) {
    let toDoClassArrayCurrent = currentForm.toDoClass;
    

        //Adds or removes the class that is striked through whichever todo is selected
            toDoItem.addEventListener("click", function() {
                if (toDoItem.classList.contains("strkthru")){
                    console.log("contains class " + toDoItem);
                    toDoItem.classList.remove("strkthru");
                    toDoClassArrayCurrent[i] = "No";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionItem), JSON.stringify(currentForm));    
                }
                else {
                    console.log("doesnt contain class" + toDoItem);
                    toDoItem.classList.add("strkthru");
                    toDoClassArrayCurrent[i] = "Yes";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionItem), JSON.stringify(currentForm));    
    }
   }   )
    }
// }