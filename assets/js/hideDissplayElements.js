let loginRegister = document.querySelector(".login-register");
let admin = document.querySelector(".admin");

if(JSON.parse(localStorage.getItem("logged")) == "logged"){
    loginRegister.classList.add("d-none");
    admin.classList.remove("d-none");
    admin.classList.add("d-block");
}else if(JSON.parse(localStorage.getItem("logged")) == "notLogged"){
    loginRegister.classList.remove("d-none");
    admin.classList.add("d-none");
    admin.classList.remove("d-block");
}
