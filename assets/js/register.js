
let userNameInputR = document.querySelector("#userName");
let userEmailInputR = document.querySelector("#userEmail");
let userPasswordInputR = document.querySelector("#userPassword");
let registerBtn = document.querySelector("#registerBtn");
let inputsRegister = document.getElementsByClassName("form-control");
let registerInfo;

if(JSON.parse(localStorage.getItem("RegisterList")) == null){
    registerInfo = [];
}else{
    registerInfo = JSON.parse(localStorage.getItem("RegisterList"));
}

registerBtn.addEventListener("click", () => {
    addRegisterData();
    clearForm();
});

function addRegisterData(){
    register = {
        name : userNameInputR.value,
        email : userEmailInputR.value,
        password : userPasswordInputR.value,
    }
    registerInfo.push(register);
    localStorage.setItem("RegisterList",JSON.stringify(registerInfo));
}

function clearForm(){
    for (let i = 0; i < inputsRegister.length; i++) {
        inputsRegister[i].value = "";
    }
}
