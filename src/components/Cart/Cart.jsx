import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { clearCart, removeProduct } from "../../features/products/productsSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const deleteCart = async () => {
    localStorage.removeItem("cart");
    dispatch(clearCart());
  };
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const groupCartByProduct = () => {
    const groupedCart = cart.reduce((grouped, product) => {
      const existingProduct = grouped.find((p) => p._id === product._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        grouped.push({ ...product, quantity: 1 });
      }
      return grouped;
    }, []);
    return groupedCart;
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = currentCart.filter((product) => product._id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart">
      <div className="cart-container">
        {cart?.length > 0 ? (
          <div className="cart-items">
            {groupCartByProduct().map((groupedProduct, index) => (
              <div className="cart-item" key={index}>
                <div className="product-info-cart">
                  <div className="product-image-cart">
                    {groupedProduct.image?.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={"https://nike-clone-backend-dev-sbrt.4.us-1.fl0.io/uploads/" + img}
                        alt={groupedProduct.title}
                      />
                    ))}
                  </div>
                  <div className="product-details-cart">
                    <h3 className="cart-product-title">
                      {groupedProduct.title}
                    </h3>
                    <p className="cart-product-price">
                      ${groupedProduct.price}
                    </p>
                    <p className="cart-product-quantity">
                      Quantity: {groupedProduct.quantity}
                    </p>
                    <button className="nds-btn css-6kj7vn btn-primary-dark btn-md removeButton"
                      onClick={() => handleRemoveProduct(groupedProduct._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <p className="total">Total: ${calculateTotal()}</p>
            {cart?.length > 0 && (
              <div className="checkout">
                <button className="nds-btn css-6kj7vn btn-primary-dark btn-md checkout-btn buttonsCart">
                  Checkout
                </button>
                <button
                  className="nds-btn css-6kj7vn btn-primary-dark btn-md clear-btn buttonsCart"
                  onClick={deleteCart}
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="nothingCart">There's nothing in the cart</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
