import {addedCart} from "../productJS/productsData.js";

export default function model() {

  var _AddedCart = new addedCart();

  function ProdIndex(prodID) {
    let prodIndex = 0;
    _AddedCart.forEach((elem, index) => {
      //TODO: to stop this forEach loop once it find the id.
      if (elem.id === prodID) {
        prodIndex = index;
        // return;
        // break;
      }
    });
    return prodIndex;
  }


  return {
    getProdData: () => _AddedCart,

    deleteProd: (prodID) => {
      const index = ProdIndex(prodID);
      if (index > -1) {
        _AddedCart.splice(index, 1);
      }
      console.log(_AddedCart);
    },

  };
}
