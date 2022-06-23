let productNameInput = document.querySelector("#productName");
let image1Input = document.querySelector("#image1");
let productPiecesInput = document.querySelector("#productPieces");
let productPriceInput = document.querySelector("#productPrice");
let productSaleInput = document.querySelector("#productSale");
let addBtn = document.querySelector("#addProduct");
let tableProducts = document.querySelector("#bodyTable");
let inputs = document.getElementsByClassName("form-control");
let cardProducts = document.querySelector("#cardBody");
let index;
let count = 0;

let products;
if (localStorage.getItem("productsList") == null) {
  products = [];
} else {
  products = JSON.parse(localStorage.getItem("productsList"));
  count = products.length;
  displayData();
}

function loadImageAsBase64(onLoadSuccess) {
  const file = image1Input.files[0];
  const reader = new FileReader(); //read selected file

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      onLoadSuccess(reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  } else {
    onLoadSuccess();
  }
}

function addProduct(imgBase64) {
  product = {
    name: productNameInput.value,
    img1: imgBase64,
    pieces: productPiecesInput.value,
    price: productPriceInput.value,
    sale: productSaleInput.value,
  };
  products.push(product);
  localStorage.setItem("productsList", JSON.stringify(products));
  count++;
}

function displayData() {
  let DisplayProductForAdmin = "";
  for (let i = 0; i < products.length; i++) {
    DisplayProductForAdmin += `
            <tr>
                <th>${i + 1}</th>
                <td class="w-25">${products[i].name}</td>
                <td><img src="${
                  products[i].img1
                }" width="100px" height="100px" alt="no image" /></td>
                <td>${products[i].pieces}</td>
                <td>${products[i].price}</td>
                <td>${products[i].sale}</td>
                <td>
                    <a href="updateProducts.html?id=${i}" class="btn btn-outline-primary" onclick="getProductData(${i})">update</a>
                    <a href="#" class="btn btn-outline-danger" onclick="deleteProduct(${i})">delete</a>
                </td>
            </tr>
        `;
  }
  tableProducts.innerHTML = DisplayProductForAdmin;
}
{/* <a href="../../products.html"></a> */}
function displayProductAtHomePage() {
  let displayProductDetails = "";
  for (let i = 0; i < products.length; i++) {
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

function deleteProduct(index){
  products.splice(index, 1);
  localStorage.setItem("productsList",JSON.stringify(products));
  displayData();
}

