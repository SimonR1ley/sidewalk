import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from 'axios';

const ProductCard = (props) => {

  const [productsCart, setProductsCart] = useState([]);

  let navigate = useNavigate();


  const toProduct = () => { 
    navigate('/productviewpage');
    sessionStorage.setItem('productId', props.productId);
  }


  

  const addCartItem = () => {

    
    let payload = {
      // "productId": props.productId,
      "productName": props.name,
      "desc": props.desc,
      "price": props.price,
      "mini": props.mini,
      "mid": props.mid,
      "full": props.full,
    }
    
    console.log(payload);

    console.log(props.desc)

    Axios.post('http://localhost:5000/api/addCart', payload);

  
  }

  
  return (
         <div className='product-item'>
      <div className='product-img'></div>
      <div className='product-info-con'>
        <h2 className='all-products-heading'>{props.name}</h2>
        {/* <div className='discription-con'>
          <p className='discription'>Deck inspired by Starwars</p>
        </div> */}
        <p className='mini'>Mini: {props.mini}</p>
        <p className='mid'>Mid: {props.mid}</p>
        <p className='full'>Full: {props.full}</p>
        <p className='price'>R{props.price}</p>
        <div className='view-btn' onClick={toProduct}>
          <p className='view-text'>VIEW</p>
        </div>
        <div className='add-cart-btn' onClick={addCartItem}>
          <div className='cart-icon'></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
