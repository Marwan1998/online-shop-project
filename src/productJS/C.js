export default function controle(data, view) {

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

    
      // TODO:2 once the user clicks the cart page, a for loop will loops through the new array and render the objects.
    });
  }

}
