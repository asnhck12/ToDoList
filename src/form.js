const formArray = [];

//export function for form submission
export function formSubmission(form) {
form.addEventListener("submit", function(e) {
    e.preventDefault();

    //store form details in local storage
    var items = document.getElementsByClassName("projectForm");

    for (let i = 0; i < items.length; i++){
        localStorage.setItem(items[i].name, items[i].value);
        formArray.push({ key:items[i].name, value:items[i].value});
    }

    console.log(formArray);

})};
