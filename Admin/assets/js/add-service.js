
let serviceNameInput = document.querySelector("#productName");
let serviceDescriptionInput = document.querySelector("#descriptionName");

var currentIndex = 0;



let productNameInput = document.querySelector("#productName");
let image1Input = document.querySelector("#image1");
let productPiecesInput = document.querySelector("#productPieces");
let productPriceInput = document.querySelector("#productPrice");
let productSaleInput = document.querySelector("#productSale");
let addBtn = document.querySelector("#addProduct");
let tableProducts = document.querySelector("#bodyTable");
let inputs = document.getElementsByClassName("form-control");
let cardProducts = document.querySelector("#cardBody");
let count = 0;

if (localStorage.getItem("serviceList") == null) {
  var services = [];
} else {
  var services = JSON.parse(localStorage.getItem("serviceList"));
  count = services.length;
  displayData();
}

// function loadImageAsBase64(onLoadSuccess) {
//   const file = image1Input.files[0];
//   const reader = new FileReader(); //read selected file

//   reader.addEventListener(
//     "load",
//     function () {
//       // convert image file to base64 string
//       onLoadSuccess(reader.result);
//     },
//     false
//   );

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     onLoadSuccess();
//   }
// }

function addservice() {
  var service = {
    name: serviceNameInput.value,
    desc: serviceDescriptionInput.value,
    // pieces: productPiecesInput.value,
    // price: productPriceInput.value,
    // sale: productSaleInput.value,
  };
  services.push(service);
  localStorage.setItem("serviceList", JSON.stringify(services));
  count++;
}

function displayData() {
  let result = "";
  for (let i = 0; i < services.length; i++) {
    result += `
            <tr>
                <th>${i + 1}</th>
                <td class="w-25">${services[i].name}</td>
                <td>${services[i].desc}</td>
                <td>
                    <a href="add-service.html" class="btn btn-outline-primary" onclick="getProductData(${i})">update</a></td>
                <td><a href="" class="btn btn-outline-danger" onclick="deleteProduct(${i})">delete</a></td>  
            </tr>` ;
  }
  tableProducts.innerHTML = result;
}
function displayProductAtHomePage() {
  let displayProductDetails = "";
  for (let i = 0; i < services.length; i++) {
    displayProductDetails += `
<div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-item me-3 mb-3">
                <div class="card">
                    <img src="${products[i].img1}" class="card-img-top" alt="no image">
                    <div class="card-body">
                        <div>
                            <a href="#" class="card-link text-decoration-none text-muted">${products[i].name}</a>
                        </div>
                        <span class="card-text">${products[i].price}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
  cardProducts.innerHTML = displayProductDetails;
}

function clearForm() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function getProductData(index) {
    var service = services[index];
    console.log(service)
    serviceNameInput.value = service.name;
    serviceDescriptionInput.value = service.desc;
    // coursePrice.value = Course.price;
    // courseDescription.value = Course.description;
    // btn.innerHTML = "Update Course";
    currentIndex = index;
}

function updateProduct() {
    var service = {
        name : serviceNameInput.value,
        desc: serviceDescriptionInput.value,
        // price: coursePrice.value,
        // description:courseDescription.value
    };
    services[currentIndex].name=service.name;
    services[currentIndex].desc=service.desc;
    // services[currentIndex].price=Course.price;
    // services[currentIndex].description=Course.description;
    // localStorage.setItem("coursesItem",JSON.stringify(services));
    localStorage.setItem("serviceList", JSON.stringify(services));
}
function deleteProduct(index){
  services.splice(index, 1);
  localStorage.setItem("serviceList",JSON.stringify(services));
  displayData();
}
