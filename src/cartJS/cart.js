import {addedCart} from "../productJS/productsData.js"; //
var AddedCart = new addedCart(); //

function addProduct() {
  let div = document.getElementById("productsContainer");
  div.innerHTML = ""; // clear all products
  //   location.reload();

  AddedCart.forEach((element) => {
    let colDiv = document.createElement("div");
    colDiv.className = "card";
    colDiv.innerHTML = `<div class="imgBx"><img src=${element.prodImg} /></div><div class="contentBx"><h2>${element.prodName}</h2><span class="color">${element.price}$</span><a id=${element.id}>Remove From Cart</a></div>`;

    div.appendChild(colDiv);
    // setListener(element);
  });
}
addProduct();

function setListener(prod) {
  document.getElementById(prod.id).addEventListener("click", () => {
    console.log(prod.id + " : " + searchProd(prod.id));

    deleteProd(searchProd(prod.id));
    addProduct();
  });
}

function searchProd(prodID) {
  let prodIndex = 0;
  AddedCart.forEach((elem, index) => {
    //TODO: to stop this forEach loop once it find the id.
    if (elem.id === prodID) {
      prodIndex = index;
      // return;
      // break;
    }
  });
  return prodIndex;
}

function deleteProd(index) {
  if (index > -1) {
    AddedCart.splice(index, 1);
  }
  //   console.log(AddedCart);
}
