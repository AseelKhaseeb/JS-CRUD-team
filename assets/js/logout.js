let logout = document.querySelector("#logout");
// console.log(logout);

logout.addEventListener("click", () => {
    localStorage.setItem("logged",JSON.stringify("notLogged"));
});