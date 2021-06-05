import {products, addedCart} from './productsData.js';


export default function model(){

    let _newProduct = new products();
    let _addToCart = new addedCart();
    
    return {


        getProduct: () => {  
         return  _newProduct;
        },

        addToCart: (prod) => {
            _addToCart.push(prod);
            // console.log(_addToCart);
        },
    }
    

};