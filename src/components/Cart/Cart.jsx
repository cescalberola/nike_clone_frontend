import React from 'react';
import { useSelector } from 'react-redux';


const Cart = () => {
const {cart} =useSelector(state=>state.products)
console.log(cart)
  return (
    <>
   <h1>Cart</h1>
    </>
  );
};





export default (Cart);
