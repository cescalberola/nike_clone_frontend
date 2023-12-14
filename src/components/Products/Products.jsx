import React, { useEffect } from "react";
import Product from "./Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/products/productsSlice";
import "./Products.scss";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div>
      <h1 id="h1Products" className="wall-header__title css-r2u0ax">
        Available products:
      </h1>
      <div className="cardContainer">
        {products.map((product) => (
          <Link to={"/products/" + [product._id]}>
            <Product key={product._id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
