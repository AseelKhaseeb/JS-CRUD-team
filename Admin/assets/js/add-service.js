
let serviceNameInput = document.querySelector("#productName");
let serviceDescriptionInput = document.querySelector("#descriptionName");

var currentIndex = 0;



// let productNameInput = document.querySelector("#productName");
// let image1Input = document.querySelector("#image1");
// let productPiecesInput = document.querySelector("#productPieces");
// let productPriceInput = document.querySelector("#productPrice");
// let productSaleInput = document.querySelector("#productSale");
let adddBtn = document.querySelector("#addProduct");
let tableProductss = document.querySelector("#bodyTable");
let inputss = document.getElementsByClassName("form-control");
let ccardProducts = document.querySelector("#cardBody");
// let count = 0;

if (localStorage.getItem("serviceList") == null) {
  var services = [];
} else {
  var services = JSON.parse(localStorage.getItem("serviceList"));
  // count = services.length;
  displayData();
}
function addservice() {
  var service = {
    name: serviceNameInput.value,
    desc: serviceDescriptionInput.value,
  };
  services.push(service);
  localStorage.setItem("serviceList", JSON.stringify(services));
  // count++;
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 2000
  })  
}

function displayData() {
  let resulttt = "";
  for (let i = 0; i < services.length; i++) {
    resulttt += `
            <tr>
                <th>${i + 1}</th>
                <td class="w-25">${services[i].name}</td>
                <td>${services[i].desc}</td>
                <td>
                    <a href="update-service.html?id=${i}" class="btn btn-outline-primary" onclick="getProductData(${i})">update</a></td>
                <td><a href="" class="btn btn-outline-danger" onclick="deleteProduct(${i})">delete</a></td>  
            </tr>` ;
  }
  tableProductss.innerHTML = resulttt;
}
function ddisplayProductAtHomePage() {
  let ddisplayProductDetails = "";
  for (let i = 0; i < services.length; i++) {
    ddisplayProductDetails += `
<div class="col-lg-3 col-md-4 col-sm-6 mar">
            <div class="product-item me-3">
            <div class = "card">
                    <div class="card-body">
                        <div>
                            <h4 class="name-service">${services[i].name}</h4>
                        </div>
                        <span class="">${services[i].desc}</span>
                    </div>
                </div>
            </div>
            </div>
        `;
  }
  ccardProducts.innerHTML = ddisplayProductDetails;
}

function clearForm() {
  for (let i = 0; i < inputss.length; i++) {
    inputss[i].value = "";
  }
}
function deleteProduct(index){
  services.splice(index, 1);
  localStorage.setItem("serviceList",JSON.stringify(services));
  displayData();
}
