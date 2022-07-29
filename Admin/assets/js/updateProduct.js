let url_string = window.location.href; //window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");
let productIndex;
let updateProductElement = document.querySelector("#updateProduct");

function getProductData(indexNew) {
    productNameInput.value = products[indexNew].name;
    productPiecesInput.value = products[indexNew].pieces;
    productPriceInput.value = products[indexNew].price;
    productSaleInput.value = products[indexNew].sale;

    productIndex = indexNew;
}
getProductData(id);

function updateProduct(base64) {
    products[productIndex].name = productNameInput.value;
    products[productIndex].img1 = base64 || products[productIndex].img1;
    products[productIndex].pieces = productPiecesInput.value;
    products[productIndex].price = productPriceInput.value;
    products[productIndex].sale = productSaleInput.value;

    localStorage.setItem("productsList",JSON.stringify(products));
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}