import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductViewPage = (props) => {

  const navigate = useNavigate();


  let productId = sessionStorage.getItem("productId");
  console.log(productId);

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDesc: "",
    productStock: "",
  });

  const backHome = () => {
    // sessionStorage.clear();
    navigate("/products");
  }

  useEffect(() => {
    Axios.get('http://localhost:5000/api/oneproduct/' + productId)
      .then(res => {
        let data = res.data;
        setProductData({
          productName: data.productName,
          productPrice: data.price,
          productDesc: data.desc,
          mini: data.mini,
          mid: data.mid,
          full: data.full
          
        })
      })
  }, []);

  return (
    <div>
      
      <div className={props.viewProduct} key={props.key}>
        <div className='exit-btn' onClick={backHome}></div>

        <div className='view-product-img-con'>
            <div className='view-product-img'></div>
            </div>

        <div className='product-view-con'>

            <div className='view-product-info-con'>
              <h2 className='view-all-products-heading'>{productData.productName}</h2>

              <h3 className='qty-heading-heading-mini'>Mini</h3>
              <p className='mini-pv'>{productData.mini}</p>
              <div className='divider-one'></div>
              <h3 className='qty-heading-heading-mid'>Mid</h3>
              <p className='mid-pv'>{productData.mid}</p>
              <div className='divider-two'></div>
              <h3 className='qty-heading-heading-full'>Full</h3>
              <p className='full-pv'>{productData.full}</p>
              <p className='view-rarity'>{productData.productStock}</p>
              <p className='view-price'>R{productData.productPrice}</p>
              <div className='view-add-cart-btn'>
                <div className='cart-icon'></div>
              </div>
              {/* <h2 className='view-desc-products-heading'>DESCRIPTION</h2> */}
              <div className='desc-con'>
                <p>{productData.productDesc}</p>
              </div>
            </div>
          </div>
        </div>

    

    </div>
  )
}

export default ProductViewPage