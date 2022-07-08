
var pagAccountInput = document.getElementById("pagAcc");
var addAcc = document.getElementById("addAcc");
var deleteAcc = document.getElementById("deleteAcc")
var data3 = document.getElementById("data3");
var data33 = document.getElementById("data33");
var inputsss = document.getElementsByClassName("inputsss");
var currentIndex = 0;


if (localStorage.getItem("accountList") == null) {
    var pagAccount = [];
}
else {
    var pagAccount = JSON.parse(localStorage.getItem("accountList"));
    displayAccount();
  
}

addAcc.onclick=function(){

    if(addAcc.innerHTML=="Add"){
        addAccount();
    }
    else{
        updateAccount();
        addAcc.innerHTML="Add";
    }
    clearForm();
    displayAccount();
    

}



deleteAcc.onclick = function () {

    localStorage.removeItem("accountList");
    pagAccount = [];
    data3.innerHTML = ""
};

function addAccount() {
    var acc = {
        account: pagAccountInput.value,

    }


    pagAccount.push(acc);
    localStorage.setItem("accountList", JSON.stringify(pagAccount));
};

   
function displayAccount() {

    var result = ""
    for (var i = 0; i < pagAccount.length; i++) {

        result += `
    <tr>
     <td> ${i}</td>
     
     <td>${pagAccount[i].account}</td>
     <td>  <button class="text-white bg-card1 border-0 p-2 rounded-2" onClick=deleteAccount(${i})>delete</button> </td>
     <td>  <button class="text-white bg-card1  border-0 p-2 rounded-2" onClick=getAccount(${i})>update</button></td>
      </tr>`
    }
    data3.innerHTML = result;
}
function displayAccountAtHome() {
   
    var result = ""
    for (var i = 0; i < pagAccount.length; i++) {

       
        result += `
    
     <li class="text list-unstyled "><a>${pagAccount[i].account}</a></li>
      `
    }
   
    data33.innerHTML = result;
}

function clearForm() {
    for (i = 0; i < inputs.length; i++) {
        inputsss[i].value = "";
    }
}

function deleteAccount(index) {
    pagAccount.splice(index, 1);
    localStorage.setItem("accountList", JSON.stringify(pagAccount));
    displayAccount();
}

function getAccount(index) {
    var pagAcc=pagAccount[index]
       pagAccountInput.value=pagAcc.account;
       addAcc.innerHTML="update account"
       currentIndex =index;
}
function updateAccount() {
    var acc = {
        account: pagAccountInput.value
    }

    pagAccount[currentIndex].account=acc.account;
    localStorage.setItem("accountList" ,JSON.stringify(pagAccount));
 
}





