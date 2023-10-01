// Get data
const nameImput = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const errorNodes = document.querySelectorAll('.error');

// Validate data
function validateForm() {

    clearMessages();
    let errorFlag = false

    if(nameImput.value.length < 6){
        errorNodes[0].innerText = "Name must be more than 5 characters long"
        nameImput.classList.add('error-border');
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Must be a valid email address"
        email.classList.add('error-border');
        errorFlag = true;
    }

    if(subject.value.length < 16){
        errorNodes[2].innerText = "Must be more than 15 characters long"
        subject.classList.add('error-border');
        errorFlag = true;
    }
    
    if(message.value.length < 26){
        errorNodes[3].innerText = "Must be more than 25 characters long"
        message.classList.add('error-border');
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

// Clear error / success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameImput.classList.remove("error-border");
    email.classList.remove("error-border");
    subject.classList.remove("error-border");
    message.classList.remove("error-border");
}

// Check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}