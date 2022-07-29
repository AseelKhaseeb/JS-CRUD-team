let url_string = window.location.href; //window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");
let serviceIndex;
let updateServiceElement = document.querySelector("#updateService");

function getProductData(indexNew) {
    serviceNameInput.value = services[indexNew].name;
    serviceDescriptionInput.value = services[indexNew].desc;
    serviceIndex = indexNew;
}
getProductData(id);

function updateService() {
    services[serviceIndex].name = serviceNameInput.value;
    services[serviceIndex].desc = serviceDescriptionInput.value;
    localStorage.setItem("serviceList",JSON.stringify(services));
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}