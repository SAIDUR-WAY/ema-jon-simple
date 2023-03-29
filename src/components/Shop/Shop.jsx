import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([])
     
     useEffect(()=>{
          fetch('products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
     }, [])
     
     useEffect( ()=>{
          const storedCart = getShoppingCart();
          const savedCart = [];
          //step 1: get id of the addeeProduct
          for(const id in storedCart){
               // step 2:get product from product
             const addProduct = products.find(product => product.id === id)
             if(addProduct){
               //step 3: quentity
               const quantity = storedCart[id]
               addProduct.quantity = quantity;
               savedCart.push(addProduct)
             }
          }
          setCart(savedCart)
     }, [products])
     
     //EvenHandaler add to products.jsx
     const handelAddToCart = (product)=>{
          // const newCart = [...cart, product];
          // setCart(newCart)

          //optonial
          let newCart = [];

          const exists = cart.find(pd => pd.id === product.id);
          if(!exists){
               product.quantity = 1;
               newCart = [...cart, product]
          }else{
               exists.quantity = exists.quantity + 1;
               const remaining = cart.filter(pd => pd.id !== product.id);
               newCart = [...remaining, exists]
          }
          setCart(newCart)
          addToDb(product.id)
     }
     return (
          <div className='shop-container'>
               <div className="products-container">
                    {
                         products.map(product => <Products 
                              product={product} 
                              key={product.id}
                              handelAddToCart={handelAddToCart}
                              ></Products>)
                    }
               </div>
               <div className="cart-container">
                    <Cart cart={cart}></Cart>
               </div>
               
          </div>
     );
};

export default Shop;