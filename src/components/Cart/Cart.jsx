import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
     let total = 0;
     let shipping = 0;
     let quantity = 0;
     for(const product of cart){
          // if(product.quantity === 0){
          //      product.quantity = 1;
          // }
          // product.quantity = product.quantity || 1;
          total = total + product.price * product.quantity;
          shipping = shipping + product.shipping;
          quantity = quantity + product.quantity;   
     }
     const tax = total*7/100;

     const grandTotal = total + shipping + tax;

     return (
          <div className='cart'>
               <h2 className='order'>Order summary</h2>
               <p>Selected item: {quantity}</p>
               <p>Total Price: ${total} </p>
               <p>Total Shipping Charge: ${shipping}</p>
               <p>Tax: ${tax.toFixed(2)}</p>
               <h3 className='order'>Grand Total: ${grandTotal.toFixed(2)}</h3>
          </div>
     );
};

export default Cart;