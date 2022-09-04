import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';


const AddProduct = () => {

  // Render Out Product Information 
  const [products, setProducts] = useState();
  const [updateProducts, setUpdateProducts] = useState(false);

  // Capture for data


  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [desc, setDesc] = useState();
  const [mini, setMini] = useState();
  const [mid, setMid] = useState();
  const [full, setFull] = useState();


  useEffect(() => {
    Axios.get('http://localhost:5000/api/allProducts')
      .then(res => {
        let productData = res.data;
        console.log(productData);
        // let renderProducts = productData.map((item) => <ProductCard key={item._id} name={item.name} price={item.price} desc={item.description} stock={item.stock}/>)
        // setProducts(renderProducts);
        setUpdateProducts(false);
      });
  }, [updateProducts]);


  const getName = (e) => {
    let value = e.target.value;
    setProductName(value);
  }

  const getPrice = (e) => {
    let value = +e.target.value;
    setProductPrice(value);
  }

  const getDesc = (e) => {
    let value = e.target.value;
    setDesc(value);
  }

  const getMini = (e) => {
    let value = +e.target.value;
    setMini(value)
  }

  const getMid = (e) => {
    let value = +e.target.value;
    setMid(value)
  }

  const getFull = (e) => {
    let value = +e.target.value;
    setFull(value)
  }




  // Add Board to DB through the Payload in the request 
  const addProduct = () => {
    let payload = {
      "productName": productName,
      "desc": desc,
      "price": productPrice,
      "mini": mini,
      "mid": mid,
      "full": full,
    }

    Axios.post('http://localhost:5000/api/addBoard', payload);


    setUpdateProducts(true);

    alert("Product Added Succesfully!");

    document.getElementById('name').value = "";
    document.getElementById('qtyMini').value = "";
    document.getElementById('qtyMid').value = "";
    document.getElementById('qtyFull').value = "";
    document.getElementById('price').value = "";
    document.getElementById('desc').value = "";

    // window.confirm("Product Added Succesfully!");

    // document.getElementById('flopName').value = "";
  }

  return (
    <div>
      <Header />

      <h2 className='admin-heading'>MANAGEMENT</h2>

      <div className='admin-option-con'>
        <div className='admin-option'><Link to='/updateproduct'><p className='admin-option-text'>UPDATE ITEM</p></Link></div>
        <div className='admin-option'><Link to='/addproduct'><p className='admin-option-text'>ADD ITEM</p></Link></div>
        <div className='admin-option'> <Link to='/removeproduct'><p className='admin-option-text'>REMOVE ITEM</p></Link></div>

        {/* <p className='nav-heading Four'>ADMIN</p></Link> */}
      </div>

      <div className='item-type-con'>


        {/* <div className='admin-item-con'>
                    <div className='admin-img'></div>
                    <input className='admin-img-select' type='image'></input>
                    <input id='name' className='name-input' placeholder='NAME' onBlur={getName}></input>
                    <input id='qty' className='quantity' type='number' placeholder='Qty' onBlur={getInStock}></input>
                    <input id='price' className='price-input' type='number' placeholder='PRICE' onBlur={getPrice}></input>
                    <input id='desc' className='desc-input' placeholder='Description' onBlur={getDesc}></input>
                    <div className='admin-btn'>
                        <h2 className='admin-btn-text' onClick={addProduct}>ADD</h2>
                    </div>
                </div> */}

        <div className='admin-add-con'>
          <div className='admin-add-img'></div>
          <input className='admin-img-select' type='image'></input>
          <input id='name' className='add-name-input' placeholder='NAME' onBlur={getName}></input>
          <input id='qtyMini' className='add-quantity-mini' type='number' placeholder='Qty Mini' onBlur={getMini}></input>
          <input id='qtyMid' className='add-quantity-mid' type='number' placeholder='Qty Mid' onBlur={getMid}></input>
          <input id='qtyFull' className='add-quantity-full' type='number' placeholder='Qty Full' onBlur={getFull}></input>
          <input id='price' className='add-price-input' type='number' placeholder='PRICE' onBlur={getPrice}></input>
          <input id='desc' className='add-desc-input' placeholder='Description' onBlur={getDesc}></input>
          <div className='add-admin-btn'>
            <h2 className='add-admin-btn-text' onClick={addProduct}>ADD</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddProduct;