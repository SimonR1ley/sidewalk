import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';

const RemoveProductCard = (props) => {


    const deleteItem = () => {
        // console.log(id);

        if (window.confirm("Are you sure you want to delete: " + props.name) === true) {
            Axios.delete('http://localhost:5000/api/deleteproduct/' + props.productId)
                .then((res) => {
                    if (res) {
                        //  console.log("Deleted:" + props.name);
                        props.render(true);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        }


  return (
    <div>
         
                    <div className='admin-update-con' key={props.productId}>
                <div className='admin-add-img'></div>
                <input className='admin-img-select' type='image'></input>
                <input name='productName'  id='name' className='update-name-input' placeholder={props.name}></input>
                <input name='mini' id='qty' className='update-quantity-mini' type='number' placeholder={props.mini} ></input>
                <input name='mid' id='qty' className='update-quantity-mid' type='number' placeholder={props.mid}  ></input>
                <input name='full' id='qty' className='update-quantity-full' type='number' placeholder={props.full}  ></input>
                <input name='price' id='price' className='update-price-input' type='number' placeholder={"R" + props.price}></input>
                <input id='desc' className='update-desc-input' placeholder='Description' ></input>
                <div className='remove-admin-btn'>
                    <h2 className='add-admin-btn-text' onClick={deleteItem}>REMOVE</h2>
                </div>
            </div>

    </div>
  )
}

export default RemoveProductCard;