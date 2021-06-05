import products from './productsData.js';
var newProduct = new products();


newProduct.forEach(element => {
    setProduct(element);
});


function setProduct(product) {
  let colDiv = document.createElement("div");
  colDiv.className = "card";
  colDiv.innerHTML = `<div class="imgBx"><img src=${product.prodImg} /></div><div class="contentBx"><h2>${product.prodName}</h2><span class="color">${product.price}$</span><a id=${product.id}>Add To Cart</a></div>`;
  
  let div = document.getElementById("productsContainer");
  div.appendChild(colDiv);
  setListener(product);
}

function setListener(prodID){

  //TODO: add alert that says "Added To Cart"
  document.getElementById(prodID.id).addEventListener("click", () => {addToCart(prodID)});
}





var addToCart = function(productID){
  console.log(productID);

  // TODO:1 - add (push) that object to the cart aaray in data file

  // TODO:2 once the user clicks the cart page, a for loop will loops through the new array and render the objects.
}