import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getById } from "../../features/products/productsSlice";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { product, cart } = useSelector((state) => state.products);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    dispatch(getById(_id));
  }, [_id, dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addedCart = async () => {
    setMsg("Product added to the cart");
    setTimeout(() => {
      setMsg("");
    }, 2000);
    dispatch(addCart(product));
  };

  if (!product) {
    return <p>Loading</p>;
  }

  return (
    <div className="product-page">
      <div className="product-image">
        {product.image?.map((img) => (
          <img key={product._id} src={"https://nike-clone-backend-dev-sbrt.4.us-1.fl0.io/uploads/" + img} />
        ))}
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="productDetail">{product.description}</p>
        <p className="productDetail">Color: {product.color}</p>
        <p className="productDetail">Select Size: {product.size}</p>
        <p className="productDetail">${product.price}</p>
        <div className="buttonsProductPage">
          <button
            onClick={() => addedCart()}
            className="btn-primary-dark buttons"
          >
            Add to cart
          </button>
          <p className="msg">{msg}</p>
          <button
            className="ncss-btn-secondary-dark buttons"
            id="secondaryButton"
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
