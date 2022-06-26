function search(searchText) {
  var result = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(searchText.toLowerCase())) {
      result += `
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
  }
  tableProducts.innerHTML = result;
}