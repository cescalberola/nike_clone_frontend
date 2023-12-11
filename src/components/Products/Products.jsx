import React, { useEffect } from "react";
import Product from "./Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/products/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  
  return (
    <div>
      <h1>Available products:</h1>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
