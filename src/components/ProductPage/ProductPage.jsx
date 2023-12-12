import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, getById } from '../../features/products/productsSlice';
import { useParams } from 'react-router-dom';
import "./ProductPage.scss"

const ProductPage = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { product,cart } = useSelector((state) => state.products);
  
  useEffect(() => {
    dispatch(getById(_id));
  }, [_id, dispatch]);
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

  if (!product) {
    return <p>Cargando</p>;
  }

  return (
    <div className='product-page'>
      <div className='product-image'>
        {product.image?.map(img=> <img key={product._id} src={"http://localhost:8080/uploads/" + img} />)}
      </div>
      <div className='product-info'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Color: {product.color}</p>
        <p>Select Size: {product.size}</p>
        <p>${product.price}</p>
        <button onClick={()=>dispatch(addCart(product))} className="ncss-btn-primary-dark">Add to cart</button>
        <button className="ncss-btn-primary-dark">Favorite</button>
      </div>
    </div>
  );
};

export default ProductPage;
