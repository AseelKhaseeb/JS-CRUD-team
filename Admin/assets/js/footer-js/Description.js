var pagDescriptionInput = document.getElementById("pagDes");
var addDes = document.getElementById("addDes");
var deleteDes = document.getElementById("deleteDes")
var data1 = document.getElementById("data1");
 var data11 = document.getElementById("data11");
var inputsss = document.getElementsByClassName("inputsss");
var currentIndex = 0;



if (localStorage.getItem("descriptionList") == null) {
    var pagDescription = [];
}
else {
    var pagDescription = JSON.parse(localStorage.getItem("descriptionList"));
    displayDescription();
}

addDes.onclick=function(){

    if(addDes.innerHTML=="Add"){
        addDescription();
    }
    else{
        updateDescription();
        addDes.innerHTML="Add";
    }
    clearForm();
    displayDescription();
   

}





deleteDes.onclick = function () {

    localStorage.removeItem("descriptionList");
    pagDescription = [];
    data1.innerHTML = ""
};

function addDescription() {
    var des = {
        description: pagDescriptionInput.value,

    }
   pagDescription.push(des);
    localStorage.setItem("descriptionList", JSON.stringify(pagDescription));
};




function displayDescription() {
    var result = ""
    for (var i = 0; i < pagDescription.length; i++) {

        result += `
    <tr>
     <td> ${i}</td>
     
     <td>${pagDescription[i].description}</td>
     <td>  <button class="bg-card3 text-white  border-0 p-2 rounded-2" onClick=deleteDescription(${i})>delete</button> </td>
     <td>  <button  class="bg-card3 text-white  border-0 p-2 rounded-2" onClick=getDescription(${i}) >  update </button></td>
      </tr>`
    }
    data1.innerHTML = result;
}
function displayDescriptionAtHome() {
    var result2 = ""
    for (var i = 0; i < pagDescription.length; i++) {

        result2 += `
    
     
     
     <li class="text list-unstyled des"><a>${pagDescription[i].description}</a></li>
     `
    }
    data11.innerHTML = result2;
}


   



function clearForm() {
    for (i = 0; i < inputs.length; i++) {
        inputsss[i].value = "";
    }
}

function deleteDescription(index) {
    pagDescription.splice(index, 1);
    localStorage.setItem("descriptionList", JSON.stringify(pagDescription));
    displayDescription();
}
function getDescription(index) {
    var pagDes=pagDescription[index]
       pagDescriptionInput.value=pagDes.description;
       addDes.innerHTML="update description"
       currentIndex =index;
}
function updateDescription() {
    var des = {
        description: pagDescriptionInput.value
    }

    pagDescription[currentIndex].description=des.description;
    localStorage.setItem("descriptionList" ,JSON.stringify(pagDescription));
 
}







