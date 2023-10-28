const formSubmissions = [];


export function formSubmission(form) {
    var j = 0;
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        //store form details in local storage
        var items = document.getElementsByClassName("projectForm");
        j += 1;
        const formData = {};
        
        for (let i = 0; i < items.length; i++) {
            formData[items[i].name]=items[i].value;
        }
        formSubmissions.push(formData);
        localStorage.setItem("submissions", JSON.stringify(formSubmissions));
    }

    )
};
