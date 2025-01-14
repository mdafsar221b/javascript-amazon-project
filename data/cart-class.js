class Cart{
 
    cartItems;
    localStoragekey;

    constructor(localStoragekey){
      
    this.localStoragekey=localStoragekey;
    this.saveTostorage();
    }

    loadFromStorage(){
        this.cartItems= JSON.parse(localStorage.getItem(this.localStoragekey));
      
        // Setting default value if cart is empty
        if(!this.cartItems){
          this.cartItems = [{
           productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
           quantity:2,
           deliveryOptionId:'1'
          
          },{
           productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
           quantity:1,
           deliveryOptionId:'2'
            
          
          }];
        }
      }

       
  saveTostorage(){
    localStorage.setItem(this.localStoragekey,JSON.stringify(this.cartItems));
    
    }

    addToCart(productId){
          
        let matchingItem; 
        this.cartItems.forEach((cartItem)=>{
        if(productId===cartItem.productId)
        {
          matchingItem=cartItem;
        }
      });
      
      if(matchingItem){
        matchingItem.quantity++;
      }
      else{
        this.cartItems.push({
        productId:productId,
        quantity:1,
        deliveryOptionId:'1'
      
        });
      }
      this.saveTostorage();
    }

    removeFromCart(productId){
        const newCart=[];
        this.cartItems.forEach((cartItem)=>{
         if(cartItem.productId!== productId){
          newCart.push(cartItem);
         }
        
        });
         this.cartItems=newCart;
         this.saveTostorage();
        }
        
        updateDeliveryOption(productId,deliveryOptionId) {
            let matchingItem; 
             
            this.cartItems.forEach((cartItem)=>{
              if(productId===cartItem.productId)
              {
                matchingItem=cartItem;
              }
            });
            matchingItem.deliveryOptionId=deliveryOptionId;
            this.saveTostorage();
            
          }

}

const cart= new Cart('cart-class');
const businessCart= new Cart('cart-business');



console.log(cart);
console.log(businessCart);

console.log(businessCart instanceof Cart);

