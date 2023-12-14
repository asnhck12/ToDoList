import { editToDoList } from "./edit-to-do-list";
import { projectMainSection } from "./project-main";
import { toDoListListed } from "./to-do-list";

export function addToDo(i, toDoListText, toDoListSubmit, divProjectView, formSubmissionSpecific) {
        const toDoArray = [];
        const toDoClassArray = [];
        var counter = -1;
        var currentForm = JSON.parse(localStorage.getItem("submissions" + i));
    //Submits a to do item
    toDoListSubmit.addEventListener("click", function() {
        
        let toDoList = currentForm.toDo;
        counter ++;
        console.log(formSubmissionSpecific);
        console.log(i);

        toDoText = toDoListText.value;
        const toDoListDiv = document.createElement('ul');
        toDoListDiv.setAttribute('id', 'toDoList');
        
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
            // toDoItem.addEventListener("click", function() {
                editToDoList(currentForm, formSubmissionSpecific);
                // if (toDoItem.classList.contains("strkthru")){
                //     toDoItem.classList.remove("strkthru");
                //     toDoClassArray[counter] = "No";
                //     currentForm.toDoClass = toDoClassArray;
                //     localStorage.setItem(("submissions" + i), JSON.stringify(currentForm));    }
                //     else {
                //         toDoItem.classList.add("strkthru");
                //         toDoClassArray[counter] = "Yes";
                //         currentForm.toDoClass = toDoClassArray;
                //         localStorage.setItem(("submissions" + i), JSON.stringify(currentForm);
            // })
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
            // toDoItem.addEventListener("click", function() {
                editToDoList(currentForm, formSubmissionSpecific);
                // if (toDoItem.classList.contains("strkthru")){
                //     toDoItem.classList.remove("strkthru");
                //     toDoClassArray[counter] = "No";
                //     currentForm.toDoClass = toDoClassArray;
                //     localStorage.setItem((currentForm), JSON.stringify(currentForm));    }
                //     else {
                //         toDoItem.classList.add("strkthru");
                //         toDoClassArray[counter] = "Yes";
                //         currentForm.toDoClass = toDoClassArray;
                //         localStorage.setItem((currentForm), JSON.stringify(currentForm)
        // });
                                    }})
            }
        // })}

        // let toDoLists = toDoListSection.getElementsByTagName('li');
        // for (let j = 0; j < toDoLists.length; j ++) {
        //     toDoLists.addEventListener("click", function() {
        //         if (toDoLists.classList.contains("strkthru")){
        //             toDoLists.classList.remove("strkthru");
        //             toDoClassArray[j] = "No";
        //             currentForm.toDoClass = toDoClassArray;
        //             localStorage.setItem((currentForm), JSON.stringify(currentForm));
        //             }
        //             else {
        //                 toDoLists.classList.add("strkthru");
        //                 toDoClassArray[j] = "Yes";
        //                 currentForm.toDoClass = toDoClassArray;
        //                 localStorage.setItem((currentForm), JSON.stringify(currentForm));
        //             }
                
                
            
            // })}      
        
        // let toDoItem = toDoListDiv.getElementsByTagName('li');
        // for (let i = 0; i < toDoItem.length; i ++) {
        //     console.log(i);
        //     editToDoList(counter, currentForm, formSubmissionSpecific, toDoList);
        //  };