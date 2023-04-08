import React from 'react'
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const CartItem = ({ cart, removeCartData }) => {
//   console.log(cart)
  const { id, img, name, price, shipping, quantity } = cart
  return (
    <>
     <div className='item-container'>
     <div className="cart-box">
        <img src={img} alt="" />
        <div>
          <h2>{name}</h2>
          <p>Price: {price}</p>
          <p>Order Quentity: {quantity}</p>
        </div>
        <button className='btn-delete' onClick={()=>removeCartData(id)}> <FontAwesomeIcon icon={faTrashCan} /></button>
      </div>
     </div>
    </>
  )
}

export default CartItem
