import {products} from './productsData.js';


export default function model(){

    let _newProduct = new products();
    // let _addToCart = new addedCart();
    // let Arr =  arr;
    
    return {


        getProduct: () => {  
         return  _newProduct;
        },

        addToCart: (prod) => {
            // _addToCart.push(prod);
            localStorage.setItem(prod.id, JSON.stringify(prod)); // push the product with it ID to the localstorage
            console.log(localStorage);

        },
    }
    

}