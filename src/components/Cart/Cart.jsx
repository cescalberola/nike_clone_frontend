import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.scss';

const Cart = () => {
  const { cart } = useSelector(state => state.products);
  console.log(cart);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((product, index) => (
            <div className="cart-item" key={index}>
              <div className="product-info">
                <div className="product-image">
                  {product.image?.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={'http://localhost:8080/uploads/' + img}
                      alt={product.title}
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  ))}
                </div>
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
      {cart.length > 0 && (
        <div className="checkout">
          <button className="ncss-btn-primary-dark">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
