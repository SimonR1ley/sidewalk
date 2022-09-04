import React from 'react'
import Axios from 'axios';

const CheckoutItem = (props) => {

    console.log(props.username);
    const deleteItem = () => {

        if (window.confirm("Are you sure you want to delete: " + props.name) === true) {
            Axios.delete('http://localhost:5000/api/deleteCartItem/' + props.productId)
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
        <div className='checkout-item'>
            <div className='cart-img'></div>
            <h2 className='co-name'>{props.name}</h2>
            <input className='co-qty' type='number' placeholder='Mini Qty'></input>
            <input className='co-qty' type='number' placeholder='Mid Qty'></input>
            <input className='co-qty' type='number' placeholder='Full Qty'></input>
            <h2 className='co-price'>R{props.price}</h2>
            <div className='co-btn co-remove-btn'>
                <h2 className='co-btn-text' onClick={deleteItem}>REMOVE</h2>
            </div>
        </div>

    )
}

export default CheckoutItem