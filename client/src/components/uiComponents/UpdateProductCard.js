import React from 'react'
import { useState } from 'react';
import Axios from 'axios';

const UpdateProductCard = (props) => {




    let editFormValues = { productName: props.name, price: props.price, desc: props.desc, mini: props.mini, mid: props.mid, full: props.full, };
    const [editValues, setEditValues] = useState(editFormValues);


    const updateValues = (e) => {
        const { name, value } = e.target;
        setEditValues({ ...editValues, [name]: value });
        console.log(editValues);
    }

    const updateProd = (e) => {
        e.preventDefault();
        let productId = props.productId;
        let payload = editValues;
        console.log(payload);

        Axios.patch('http://localhost:5000/api/updateproduct/' + productId, payload)
            .then((res) => {
                if (res) {
                    console.log("Item Upadted");
                    props.render(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        <div >

            <div className='admin-update-con' key={props.productId}>
                <div className='admin-add-img'></div>
                <input className='admin-img-select' type='image'></input>
                <input name='productName'  id='name' className='update-name-input' placeholder={props.name} onChange={updateValues}></input>
                <input name='mini' id='qty' className='update-quantity-mini' type='number' placeholder={props.mini}  onChange={updateValues}></input>
                <input name='mid' id='qty' className='update-quantity-mid' type='number' placeholder={props.mid}  onChange={updateValues}></input>
                <input name='full' id='qty' className='update-quantity-full' type='number' placeholder={props.full}  onChange={updateValues}></input>
                <input name='price' id='price' className='update-price-input' type='number' placeholder={"R" + props.price} onChange={updateValues}></input>
                <input id='desc' className='update-desc-input' placeholder='Description' ></input>
                <div className='update-admin-btn'>
                    <h2 className='update-admin-btn-text' onClick={updateProd}>UPDATE</h2>
                </div>
            </div>

        </div>
    )
}


export default UpdateProductCard;