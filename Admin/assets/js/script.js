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

// function addProduct() {
//   product = {
//     name: productNameInput.value,
//     img1: image1Input.value,
//     img2: image2Input.value,
//     img3: image3Input.value,
//     img4: image4Input.value,
//     pieces: productPiecesInput.value,
//     price: productPriceInput.value,
//     sale: productSaleInput.value,
//   };
//   products.push(product);
//   localStorage.setItem("productsList", JSON.stringify(products));
// //   Swal.fire({
// //     position: "top-end",
// //     icon: "success",
// //     title: "Your work has been saved",
// //     showConfirmButton: false,
// //     timer: 1500,
// //    });
// }

// function displayData() {
//   let result = "";
//   for (let i = 0; i < products.length; i++) {
//     result += `
//         <tr>
//                     <th scope="row">${i}</th>
//                     <td>${products[i].name}</td>
//                     <td><img src="assets/img/products/clothes/${products[i].img1}" width="100px" height="100px" alt="no image" /></td>
//                     <td><img src="assets/img/products/clothes/${products[i].img2}" width="100px" height="100px" alt="no image" /></td>
//                     <td><img src="assets/img/products/clothes/${products[i].img3}" width="100px" height="100px" alt="no image" /></td>
//                     <td><img src="assets/img/products/clothes/${products[i].img4}" width="100px" height="100px" alt="no image" /></td>
//                     <td>${products[i].pieces}</td>
//                     <td>${products[i].price}</td>
//                     <td>${products[i].sale}</td>
//                     <td>
//                         <button class="btn btn-outline-primary" onclick="getProductData(${i})">update</button>
//                         <button class="btn btn-outline-danger" onclick="deleteProduct(${i})">delete</button>
//                     </td>
//                 </tr>
//         `;
//   }
//   tableProducts.innerHTML = result;
// }

// function clearForm() {
//   for (let i = 0; i < inputs.length; i++) {
//     inputs[i].value = "";
//   }
// }

function getProductData(index) {
  console.log(index);

//   let product = products[index];

//   productNameInput.value = product.name;
//   image1Input.value = product.img1;
//   image2Input.value = product.img2;
//   image3Input.value = product.img3;
//   image4Input.value = product.img4;
//   productPiecesInput.value = product.pieces;
//   productPriceInput.value = product.price;
//   productSaleInput.value = product.sale;

//   currentIndex = index;
//   console.log(product);
//   console.log(currentIndex);
}

// function updateCourse() {
//   var course = {
//     name: courseNameInput.value,
//     category: courseCategoryInput.value,
//     price: coursePriceInput.value,
//     desc: courseDescriptionInput.value,
//   };
//   courses[currentIndex].name = course.name;
//   courses[currentIndex].category = course.category;
//   courses[currentIndex].price = course.price;
//   courses[currentIndex].desc = course.desc;

//   localStorage.setItem("coursesList", JSON.stringify(courses));

//   addBtn.innerHTML = "Add Cource";

//   Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//     timer: 1500,
//   });
// }

function deleteProduct(index) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      products.splice(index, 1);
      localStorage.setItem("productsList", JSON.stringify(products));
      displayData();
      //   console.log(courses);
      Swal.fire("Deleted!", "Course has been deleted.", "success");
    }
  });
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
