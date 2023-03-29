import React from 'react';
import './Products.css';

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
               <button onClick={()=> handelAddToCart(props.product)} className='btn-cart'>Add To Cart</button>
          </div>
     );
};

export default Products;