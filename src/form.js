const formSubmissions = [];


export function formSubmission(form) {
    var j = -1;
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const formSubmissions = [];

        //store form details in local storage
        var items = document.getElementsByClassName("projectForm");
        j += 1;
        const formData = {};
        
        for (let i = 0; i < items.length; i++) {
            formData[items[i].name]=items[i].value;
        }
        console.log("form: " + formData);
        var submission = "submissions" + j;
        localStorage.setItem(submission, JSON.stringify(formData));
    }

    )
};
