import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
     const {img, name, seller, quantity,price,ratings} = props.product;
     const handelAddToCart = props.handelAddToCart;

     return (
          <div className='products'>
               <img src={img} alt="" />
               
               <div className="product-info">
               <h6 className='product-name'>{name}</h6>
                <p className='price'>Price: ${price}</p>
               <p>Manufacturer: {seller}</p>
               <p>Ratings: {ratings} Stars</p>
               </div>
               <button onClick={()=> handelAddToCart(props.product)} className='btn-cart'>
                    Add To Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
               
               </button>
          </div>
     );
};

export default Products;