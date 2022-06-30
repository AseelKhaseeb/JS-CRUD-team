let userEmailInput = document.querySelector("#userEmail");
let userPasswordInput = document.querySelector("#userPassword");
let loginBtn = document.querySelector("#loginBtn");
let inputsLogin = document.getElementsByClassName("form-control");
let loginInfo = JSON.parse(localStorage.getItem("RegisterList"));

function clearForm(){
    for (let i = 0; i < inputsLogin.length; i++) {
        inputsLogin[i].value = "";
    }
}

function loginDone(){
    for (let i = 0; i < loginInfo.length; i++) {
        if((userEmailInput.value == loginInfo[i].email) && (userPasswordInput.value == loginInfo[i].password)){
            localStorage.setItem("logged",JSON.stringify("logged"));
        }
    }
}
