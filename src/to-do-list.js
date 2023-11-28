export function toDoListListed(divProjectView, currentForm) {

let toDoListCurrent = currentForm.toDo;

        if (toDoListCurrent === undefined) {
        }
        else {
            
                const toDoListDiv = document.createElement('ul');
                toDoListDiv.setAttribute('id', 'toDoList')
                
            for (let i = 0; i < toDoListCurrent.length; i++) {
                const toDoItem = document.createElement('li');
                toDoItem.textContent = toDoListCurrent[i];
                toDoListDiv.appendChild(toDoItem);
                divProjectView.appendChild(toDoListDiv);
                toDoItem.addEventListener("click", function() {
                    console.log(toDoItem.textContent);
                })

            }
        }}
