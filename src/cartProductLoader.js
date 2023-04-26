import { getShoppingCart } from "./utilities/fakedb"


const cartProductLoader = async ()=>{
     const loadeProduct = await fetch('products.json')
     const product = await loadeProduct.json()

     //a cart data is in database , you have to use async await
     const storedCart = getShoppingCart();
     console.log(storedCart)
     const savedCart = [];
     for(const id in storedCart){
          const addedProduct = product.find(pd => pd.id === id)
          if(addedProduct){
               const quantity = storedCart[id];
               addedProduct.quantity = quantity;
               savedCart.push(addedProduct)
          }
     }
     // console.log(saveCart)         
     return savedCart;

     // console.log(product)
     // return product;
}

export default cartProductLoader;