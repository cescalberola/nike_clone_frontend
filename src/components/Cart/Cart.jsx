import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { clearCart } from "../../features/products/productsSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const deleteCart = async () => {
    localStorage.removeItem("cart");
      dispatch(clearCart());
  };

   
  
  return (
    <div className="cart">
      <div className="cart-container">
        {cart?.length > 0 ? (
          <div className="cart-items">
            {cart.map((product, index) => (
              <div className="cart-item" key={index}>
                <div className="product-info">
                  <div className="product-image">
                    {product.image?.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={"http://localhost:8080/uploads/" + img}
                        alt={product.title}
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
          <p>There's nothing in the cart</p>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout">
          <button className="nds-btn css-6kj7vn btn-primary-dark btn-md">Checkout</button>
          <button className="nds-btn css-6kj7vn btn-primary-dark btn-md" onClick={deleteCart}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
