import {products, addedCart} from './productsData.js';


export default function model(){

    let _newProduct = new products();
    let _addToCart = new addedCart();
    // let Arr =  arr;
    
    return {


        getProduct: () => {  
         return  _newProduct;
        },

        addToCart: (prod) => {
            _addToCart.push(prod);
            console.log(_addToCart);

            // Arr.push(prod);
            // console.log(Arr);
        },
    }
    

}