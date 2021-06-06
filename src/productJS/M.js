import {products} from "./productsData.js";

export default function model() {
  let _newProduct = new products();


  return {
    getProduct: () => {
      return _newProduct;
    },

    addToCart: (prod) => {
      localStorage.setItem(prod.id, JSON.stringify(prod)); // push the product with it ID to the localstorage
      console.log(localStorage);
    },
  };
}
