/* submitted form validation */

//define variables
var contactForm = document.getElementById("contact-form");
var formFirstName = document.getElementById("form-firstname");
var formLastName = document.getElementById("form-lastname");
var formPhone = document.getElementById("form-phone");
var formEmail = document.getElementById("form-email");
var formTextarea = document.getElementById("form-textarea");
var formError = document.getElementById("form-error");
var subbmittedData = document.getElementById("submitted-data");

//call function on form submit
contactForm.addEventListener("submit", function(event) {
    //prevent form submission
    event.preventDefault();
    //main logic of the function
    if (formFirstName.value.length != 0) {
        if (formLastName.value.length != 0) {
            if (formFirstName.value.length <= 40) {
                if (formLastName.value.length <= 40) {
                    if (formTextarea.value.length <= 200) {
                        formError.innerHTML = "";
                        subbmittedData.innerHTML = '<table>' +
                            '<caption>Submitted form data:</caption>' +
                            '<tr><td><b>First name:</b></td><td>' + formFirstName.value + '</td></tr>' +
                            '<tr><td><b>Last name:</b></td><td>' + formLastName.value + '</td></tr>' +
                            '<tr><td><b>Phone:</b></td><td>' + formPhone.value + '</td></tr>' +
                            '<tr><td><b>Email:</b></td><td>' + formEmail.value + '</td></tr>' +
                            '<tr><td><b>Message:</b></td><td>' + formTextarea.value + '</td></tr>' +
                            '</table>';
                    } else {
                        formError.innerHTML = "Your message cannot exceed 200 characters";
                    }
                } else {
                    formError.innerHTML = "Last name cannot exceed 40 characters";
                }
            } else {
                formError.innerHTML = "First name cannot exceed 40 characters";
            }
        } else {
            formError.innerHTML = "Last name cannot be empty";    
        }
    } else {
        formError.innerHTML = "First name cannot be empty";
    }
});