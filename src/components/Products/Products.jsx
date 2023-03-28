import React from 'react';
import './Products.css';

const Products = (props) => {
     const {img, name, seller, quantity,price,ratings} = props.product;
     return (
          <div className='products'>
               <img src={img} alt="" />
               <div className="product-info">
                    <div>
                          <h6 className='product-name'>{name}</h6>
                          <p className='price'>Price: ${price}</p>
                    </div>
               <p>Manufacturer: {seller}</p>
               <p>Ratings: {ratings} Stars</p>
               </div>
               <button className='btn-cart'>Add To Cart</button>
          </div>
     );
};

export default Products;