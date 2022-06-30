let userOrAdminName = document.querySelector("#userOrAdminName");

if(JSON.parse(localStorage.getItem("logged")) == "logged"){
    console.log(userOrAdminName.innerHTML);
    // loginRegister.classList.add("d-none");
    // admin.classList.remove("d-none");
    // admin.classList.add("d-block");
}else if(JSON.parse(localStorage.getItem("logged")) == "notLogged"){
    console.log("not logged");
    // loginRegister.classList.remove("d-none");
    // admin.classList.add("d-none");
    // admin.classList.remove("d-block");
}