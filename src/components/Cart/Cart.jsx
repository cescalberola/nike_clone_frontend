import React from 'react';
import { useSelector } from 'react-redux';


const Cart = () => {
const {cart} =useSelector(state=>state.products)
console.log(cart)
return (
  <>

    {cart.length > 0 ? (
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.image?.map(img => (
              <img
                key={product._id}
                src={"http://localhost:8080/uploads/" + img}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            ))}
            {product.title} 
            {product.price}
          </li>
        ))}
      </ul>
    ) : (
      <p>No hay productos en el carrito</p>
    )}
  </>
);
};




export default Cart;
