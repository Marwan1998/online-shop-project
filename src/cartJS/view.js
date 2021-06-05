export default function view() {

  
  return {
    addProduct: (Product) => {
      let div = document.getElementById("productsContainer");
      let colDiv = document.createElement("div");

      colDiv.className = "card";
      colDiv.innerHTML = `<div class="imgBx"><img src=${Product.prodImg} /></div><div class="contentBx"><h2>${Product.prodName}</h2><span class="color">${Product.price}$</span><a id=${Product.id}>Remove From Cart</a></div>`;

      div.appendChild(colDiv);
    },

    clearView: () => {
      let div = document.getElementById("productsContainer");
      div.innerHTML = ""; // clear all products
      // location.reload();
    },
  };
}
