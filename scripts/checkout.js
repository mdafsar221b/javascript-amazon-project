import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, LoadProductsFetch } from '../data/products.js';
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
   try {
       await LoadProductsFetch();
       await new Promise((resolve, reject) => {
           loadCart(() => {
               resolve();
           });
       });
       updateCartItemCount(cart.length); // Update the item count after loading the cart
   } catch (error) {
       console.log('Unexpected Error, please try again later');
   }
   renderPaymentSummary();
   renderOrderSummary();
}

loadPage();

/**
 * Updates the displayed cart item count.
 * @param {number} count - The number of items in the cart.
 */
function updateCartItemCount(count) {
   const itemCountElement = document.getElementById('cart-item-count');
   itemCountElement.textContent = `${count} items`;
}

/*
Promise.all([
    LoadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
    console.log(values);
    renderPaymentSummary();
    renderOrderSummary();
});

/*
new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1');
    });
}).then((value) => {
     console.log(value)
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
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
