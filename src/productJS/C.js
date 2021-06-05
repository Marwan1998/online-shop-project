import Model from "./M.js";
import View from "./V.js";


function controle(data, view) {
  const products = data.getProduct();

  sendProduct(products);

  function sendProduct(productsData) {
    productsData.forEach((product) => {
      view.renderProducts(product);
      setListener(product);
    });
  }

  function setListener(prod) {
    //TODO:0 add alert that says "Added To Cart"
    document.getElementById(prod.id).addEventListener("click", () => {
      console.log(prod.id);
      data.addToCart(prod);
    });
  }
}

let Controle = new controle(Model(), View());
