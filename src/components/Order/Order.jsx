import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom'
import CartItem from '../CartItem/CartItem';
import './Order.css';
import { getShoppingCart, removeFromDb } from '../../utilities/fakedb';



const Order = () => {
  const product = useLoaderData();
  // console.log(product)
  const [cart, setCart] = useState(product)

  const removeCartData = id => {
   const remaining = cart.filter( ct => ct.id !== id)
   setCart(remaining)
   removeFromDb(id)
  }   
  
    // console.log(saveCart)
    

  // console.log(cart)
  return (
    <div className="shop-container">
      <div className="cartItem-container">

        {
          cart.map(cart => <CartItem key={cart.id} cart={cart} removeCartData={removeCartData}></CartItem>)
        }
        
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        
      </div>
    </div>
  )
}
export default Order
