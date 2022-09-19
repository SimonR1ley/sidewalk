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

  const [imageName, setImageName] = useState("Name of File will appear here");
  const [productImage, setProductImage] = useState();


  useEffect(() => {
    Axios.get('http://localhost:5000/api/allProducts')
      .then(res => {
        let productData = res.data;
        console.log(productData);
        setUpdateProducts(false);
      });
  }, [updateProducts]);



  let defaultFormVals = ["name", "price", "desc", "mini", "mid", "full"];

  const [formValues, setFormValues] = useState(defaultFormVals);



  const getValues = (e) =>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }


  const getImage = (e) => {

    // This is where Multer comes in
    let imageFile = e.target.files[0];
    setProductImage(imageFile);

    let value = e.target.value;
    let imgName = value.substring(12);
    setImageName(imgName);

    let reader = new FileReader();
    reader.onload = () => {
      let output = document.getElementById('imgPrev');
      output.src = reader.result;
    };

    reader.readAsDataURL(e.target.files[0]);

  }




  // Add Board to DB through the Payload in the request 
  const addProduct = () => {

    const payloadData = new FormData();

    let payload = {

      productName: formValues['productName'],
      desc: formValues['desc'],
      price: +formValues['price'],
      mini: +formValues['mini'],
      mid: +formValues['mid'],
      full: +formValues['full'],
    }


    payloadData.append("information", JSON.stringify(payload));
    payloadData.append("image", productImage);

    Axios.post('http://localhost:5000/api/addBoard', payloadData);


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

          <div className='imgPrev'><img id="imgPrev"></img></div>
          <p className='img-name' >{imageName}</p>
          <input type="file" className='file-upload' onChange={getImage} />

          <input name='productName' id='name' className='add-name-input' placeholder='NAME' onChange={getValues}></input>
          <input name='mini' id='qtyMini' className='add-quantity-mini' type='number' placeholder='Qty Mini' onChange={getValues}></input>
          <input name='mid' id='qtyMid' className='add-quantity-mid' type='number' placeholder='Qty Mid' onChange={getValues}></input>
          <input name='full' id='qtyFull' className='add-quantity-full' type='number' placeholder='Qty Full' onChange={getValues}></input>
          <input name='price' id='price' className='add-price-input' type='number' placeholder='PRICE' onChange={getValues}></input>
          <input name='desc' id='desc' className='add-desc-input' placeholder='Description' onChange={getValues}></input>
          <div className='add-admin-btn'>
            <h2 className='add-admin-btn-text' onClick={addProduct}>ADD</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddProduct;