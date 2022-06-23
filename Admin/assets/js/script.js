let productNameInput = document.querySelector("#productName");
let image1Input = document.querySelector("#image1");
let image2Input = document.querySelector("#image2");
let image3Input = document.querySelector("#image3");
let image4Input = document.querySelector("#image4");
let productPiecesInput = document.querySelector("#productPieces");
let productPriceInput = document.querySelector("#productPrice");
let productSaleInput = document.querySelector("#productSale");
let addBtn = document.querySelector("#addProduct");
let tableProducts = document.querySelector("#bodyTable");
let inputs = document.getElementsByClassName("form-control");
let currentIndex;

let products = [];
if (localStorage.getItem("productsList") == null) {
  products = [];
} else {
  products = JSON.parse(localStorage.getItem("productsList"));
  displayData();
}

function search(searchText) {
  var result = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(searchText.toLowerCase())) {
      result += `
<tr>
            <th scope="row">${i}</th>
            <td>${products[i].name}</td>
            <td><img src="assets/img/products/clothes/${products[i].img1}" width="100px" height="100px" alt="no image" /></td>
            <td><img src="assets/img/products/clothes/${products[i].img2}" width="100px" height="100px" alt="no image" /></td>
            <td><img src="assets/img/products/clothes/${products[i].img3}" width="100px" height="100px" alt="no image" /></td>
            <td><img src="assets/img/products/clothes/${products[i].img4}" width="100px" height="100px" alt="no image" /></td>
            <td>${products[i].pieces}</td>
            <td>${products[i].price}</td>
            <td>${products[i].sale}</td>
            <td>
                <button class="btn btn-outline-primary" onclick="getProductData(${i})">update</button>
                <button class="btn btn-outline-danger" onclick="deleteProduct(${i})">delete</button>
            </td>
        </tr>`;
    }
  }
  tableProducts.innerHTML = result;
}
