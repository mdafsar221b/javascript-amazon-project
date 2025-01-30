import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary} from "./checkout/paymentSummary.js";
import {loadProducts, LoadProductsFetch } from '../data/products.js';
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage(){
   try{
    //   throw 'error1'

       await LoadProductsFetch();
    
        await  new Promise((resolve,reject) => {
            // throw 'error2'
        loadCart(()=>{
            // reject('error3');
            resolve();
        });
    });

   } catch(error){
    console.log('Unexpected Eror, please try again later');
   }
    renderPaymentSummary();
    renderOrderSummary();

}
loadPage();


/*
Promise.all([
    LoadProductsFetch(),
    new Promise((resolve) => {
        loadCart(()=>{
            resolve();
        });
    })

]).then((values) =>{
    console.log(values);
    renderPaymentSummary();
    renderOrderSummary();
});

*/

/*
new Promise((resolve) =>{
    loadProducts(() => {
      resolve('value1');
    });

}).then((value) => {
     console.log(value)

    return new Promise((resolve) => {
        loadCart(()=>{
            resolve();
        });
    });

}).then(() =>{
    renderPaymentSummary();
    renderOrderSummary();
});

/*
loadProducts(() => {
    loadCart(() => {
        renderPaymentSummary();
        renderOrderSummary();
    });
});  
*/