export function addToDo(i, toDoListText, toDoListSubmit, divProjectView) {
        const toDoArray = [];
    toDoListSubmit.addEventListener("click", function() {
        var currentForm = JSON.parse(localStorage.getItem("submissions" + i));
        let toDoList = currentForm.toDo;

        toDoText = toDoListText.value;
        const toDoListDiv = document.createElement('ul');
        toDoListDiv.setAttribute('id', 'toDoList');

        if (currentForm.toDo === undefined) {
            toDoArray.push(toDoText);
            currentForm.toDo = toDoArray;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
            const toDoItem = document.createElement('li');
            toDoItem.textContent = toDoText;
            toDoListDiv.appendChild(toDoItem);
            divProjectView.appendChild(toDoListDiv);
        }
        else {
            var existingToDoListDiv = document.getElementById("toDoList");
            const toDoArray = [];
            toDoArray.push(...currentForm.toDo, toDoText);
            currentForm.toDo = toDoArray;
            localStorage.setItem("submissions" + i, JSON.stringify(currentForm));
            const toDoItem = document.createElement('li');
            toDoItem.textContent = toDoText;
            existingToDoListDiv.appendChild(toDoItem);
        };
        })};