import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.scss";

const Checkout = () => {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.products);
  const navigate = useNavigate();

  const goNow = async () => {
    setTimeout(() => {
      navigate("/products");
    }, 0o500);
  };
  const goLogin = async () => {
    setTimeout(() => {
      navigate("/lookup");
    }, 0o500);
  };

  return (
    <div className="checkoutContainer">
      {user ? (
        <>
          <h1 className="welcome">Hi, {user.firstName}</h1>
          {cart.length > 0 ? (
            <>
              <p className="paragraphs">
                Your order was placed successfully. It will arrive soon! Please
                check your email, we have sent you a comprobation email.
              </p>
              <button className="btn-primary-dark checkBtn" onClick={goNow}>
                Continue shoping
              </button>
            </>
          ) : (
            <>
              <p className="paragraphs">You haven't order products</p>
              <button className="btn-primary-dark checkBtn" onClick={goNow}>
                Go shopping
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <h1 className="welcome">Welcome</h1>
          <p className="paragraphs">First log in/register to buy a product</p>
          <button className="btn-primary-dark checkBtn" onClick={goLogin}>
            Go now
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
