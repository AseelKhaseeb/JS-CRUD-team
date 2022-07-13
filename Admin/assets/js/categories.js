var categoryTitleInput = document.getElementById("categoryTitle");
var backgroungImage = document.getElementById("backgroundImage");
var descriptionInput = document.getElementById("description");
var addBtn = document.getElementById("addCategory");
var inputs= document.getElementsByClassName("form-control");
var deleteAll = document.getElementById("deleteAll");
var categoryData = document.getElementById("categoryData");

if (localStorage.getItem("categoriesList")==null){
    var categories=[];
}
else {
    var categories = JSON.parse(localStorage.getItem("categoriesList"));
    displayData();
}


    addBtn.addEventListener = function(){
        addCategory();
        displayData();
        clearForm();
    }
  

    function addCategory(){

        var category = {
            title : categoryTitleInput.value,
            backgroundImg : backgroungImage.value,
            description : descriptionInput.value
           }
           categories.push(category);
           localStorage.setItem("categoriesList",JSON.stringify(categories));
    }

    function displayData(){

        var result="";
        for(var i = 0; i<categories.length; i++){
           result+=`
           <tr>
           <td>${i}</td>
           <td>${categories[i].title}</td>
           <td>${categories[i].backgroundImg}</td>
           <td>${categories[i].description}</td>
           <td><button class="btn btn-outline-info rounded-0" onclick="deleteCategory(${i})"><i class="fa-regular fa-pen-to-square"></i></button></td>
           <td><button class="btn btn-outline-danger rounded-0"><i class="fa-regular fa-trash-can"></i></button></td>
           </tr>
           `;
        }
        categoryData.innerHTML = result;
    } 

    function clearForm(){
        for (var i = 0; i< inputs.length; i++){
            inputs[i].value="";
        }
    }

    function deleteCategory(index){
        categories.splice(index,1);
        localStorage.setItem("categoriesList",JSON.stringify(categories));
        displayData();
    }

    deleteAll.onclick=function(){
        localStorage.removeItem("categoriesList");
        categories=[];
        categoryData.innerHTML="";
    }
    

