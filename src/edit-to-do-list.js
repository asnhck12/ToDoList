export function editToDoList () {
    var toDoItem = document.getElementById("toDoList").getElementsByTagName("li");
    toDoItem.addEventListener("click", function() {
        console.log(toDoItem.textContent);
    })
}