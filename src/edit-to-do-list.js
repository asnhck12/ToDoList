import { toDoListListed } from "./to-do-list";

export function editToDoList (currentForm, formSubmissionSpecific/*, toDoClassArrayCurrent*/) {
    let toDoListSection = document.getElementById("toDoList");
    let toDoClassArrayCurrent = currentForm.toDoClass;
    
    let toDoListItems = toDoListSection.getElementsByTagName('li');
    console.log("test");

        //Adds or removes the class that is striked through whichever todo is selected
        for (let i = 0; i < toDoListItems.length; i ++) {
            console.log(toDoListItems[i]);
            toDoListItems[i].addEventListener("click", function() {
                if (toDoListItems[i].classList.contains("strkthru")){
                    console.log(toDoListItems[i]);
                    toDoListItems[i].classList.remove("strkthru");
                    toDoClassArrayCurrent[i] = "No";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionSpecific), JSON.stringify(currentForm));    
                }
                else {
                    console.log(toDoListItems[i]);
                    toDoListItems[i].classList.add("strkthru");
                    toDoClassArrayCurrent[i] = "Yes";
                    currentForm.toDoClass = toDoClassArrayCurrent;
                    localStorage.setItem((formSubmissionSpecific), JSON.stringify(currentForm));    
    }
   }   )
    }
}