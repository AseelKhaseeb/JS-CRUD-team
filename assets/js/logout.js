let logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
    localStorage.setItem("logged",JSON.stringify("notLogged"));
});