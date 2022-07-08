

var pagLinksInput = document.getElementById("pagLin");
var addLin = document.getElementById("addLin");
var deleteLin = document.getElementById("deleteLin")
var data2 = document.getElementById("data2");
var data22 = document.getElementById("data22");
var inputsss = document.getElementsByClassName("inputsss");
var currentIndex = 0;

if (localStorage.getItem("linkList") == null) {
    var pagLinks = [];
}
else {
    var pagLinks = JSON.parse(localStorage.getItem("linkList"));
    displayLinks();
}


addLin.onclick=function(){

    if(addLin.innerHTML=="Add"){
        addLinks();
    }
    else{
        updateLinks();
        addLin.innerHTML="Add";
    }
    clearForm();
    displayLinks();
   

}


deleteLin.onclick = function () {

    localStorage.removeItem("linkList");
    pagLinks = [];
    data2.innerHTML = ""
};



function addLinks() {
    var lin = {
        links: pagLinksInput.value,

    }


    pagLinks.push(lin);
    localStorage.setItem("linkList", JSON.stringify(pagLinks));
};

function displayLinks() {
    var result = ""
    for (var i = 0; i < pagLinks.length; i++) {

        result += `
    <tr>
     <td> ${i}</td>
     
     <td >${pagLinks[i].links}</td>
     <td>  <button class="bg-card2 text-white  border-0 p-2 rounded-2" onClick=deleteLinks(${i})>delete</button> </td>
     <td>  <button class="bg-card2 text-white  border-0 p-2 rounded-2" onClick=getLink(${i})>update</button></td>
      </tr>`
    }
    data2.innerHTML = result;
}
function displayLinksAtHome() {
    var result = ""
    for (var i = 0; i < pagLinks.length; i++) {

        result += `
    
     
     
     <li class="text list-unstyled""><a>${pagLinks[i].links}</a></li>
     `
    }
    data22.innerHTML = result;
}
   

function clearForm() {
    for (i = 0; i < inputs.length; i++) {
        inputsss[i].value = "";
    }
}



function deleteLinks(index) {
    pagLinks.splice(index, 1);
    localStorage.setItem("linkList", JSON.stringify(pagLinks));
    displayLinks();
}

function getLink(index) {
    var pagLin=pagLinks[index]
       pagLinksInput.value=pagLin.links;
       addLin.innerHTML="update link"
       currentIndex =index;
}
function updateLinks() {
    var lin = {
        links: pagLinksInput.value
    }

    pagLinks[currentIndex].links=lin.links;
    localStorage.setItem("linkList" ,JSON.stringify(pagLinks));
 
}





