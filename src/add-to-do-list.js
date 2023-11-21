export function addToDo(i, toDoListText, toDoListSubmit) {
        const toDoArray = [];
    toDoListSubmit.addEventListener("click", function() {
        var currentForm = JSON.parse(localStorage.getItem("submissions" + i));

        toDoText = toDoListText.value;

        if (currentForm.toDo === undefined) {
            toDoArray.push(toDoText);
            currentForm.toDo = toDoArray;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
    
        }
        else {
            const toDoArray = [];
            toDoArray.push(...currentForm.toDo, toDoText);
            currentForm.toDo = toDoArray;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
    
        };
        }    
    )};