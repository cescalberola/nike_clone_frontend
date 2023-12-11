import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getById } from '../../features/products/productsSlice';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const dispatch = useDispatch();
  const {_id} = useParams();
  const { product } = useSelector((state)=> state.products);
  useEffect (()=>{
    console.log("hola")
    dispatch (getById(_id))
  },[])
 if (!product) {
  return <p>Cargando</p>
 }
  return (
    <>
  <h1>{product.title}</h1>
    </>
  )
}

export default ProductPage