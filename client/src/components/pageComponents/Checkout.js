import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import CheckoutItem from '../uiComponents/CheckoutItem';

const Checkout = () => {

    let navigate = useNavigate();

    const [checkoutItems, setCheckoutItem] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);

    const [subtotal, setSubtotal] = useState();

    const username = sessionStorage.getItem('activeUser');

    const [total, setTotal] = useState();

    let sum = 0;

    const toProductPage = () => {
        navigate('/products');
    }

    useEffect(() => {
        Axios.get('http://localhost:5000/api/allCartProducts')
            .then(res => {
                let productData = res.data;
                // console.log(productData);

                let allProducts = productData.filter(user => user.username === username).map((item) => <CheckoutItem
                    key={item._id}
                    productId={item._id}
                    name={item.productName}
                    username={item.username}
                    price={item.price}
                    desc={item.desc}
                    mini={item.mini}
                    mid={item.mid}
                    full={item.full}
                    render={setUpdateProducts} />);

                // productData.forEach(item =>
                //     sum += item.price);

                productData.forEach((val) => {

                    if (val.username === username) {
                        sum += val.price;
                    }
                });



                // for (let i; i < productData.length; i++) {
                //     sum += productData.price
                // }
                setSubtotal(sum);
                setCheckoutItem(allProducts)
                setUpdateProducts(false);
                // console.log(sum);

            });
    }, [updateProducts]);



    const standardDelivery = () => {
        setTotal(subtotal + 60);
    }

    const expressDelivery = () => {
        setTotal(subtotal + 200);
    }

    const pickupDelivery = () => {
        setTotal(subtotal + 0);
    }



    return (
        <div>
            <h2 className='checkout-heading'>CHECKOUT</h2>
            <div className='checkout-con'>
                <div className='checkout-items-con'>

                    {checkoutItems}

                </div>
            </div>

            <div className='checkout-payment-con'>

                <div className='checkout-payment-item'>
                    <h2 className='checkout-total-heading'>Subtotal</h2>
                    <h2 className='checkout-total'>R{subtotal}</h2>
                </div>

                <div className='checkout-payment-itemTwo '>

                    <div className="switch-field">
                        <h2 className='shipping-heading'>Shipping</h2>
                        <input type='radio' className='standard-del-btn' id="radio-one" value="standard" name="switch-one" onChange={standardDelivery} />
                        <label className='standard-del' htmlFor="radio-one">Standard delivery</label>

                        <input type='radio' className='express-del-btn' id="radio-two" value="express" name="switch-one" onChange={expressDelivery} />
                        <label className='express-del' htmlFor="radio-two">Express delivery</label>

                        <input type='radio' className='pickup-del-btn' id="radio-three" value="pickup" name="switch-one" onChange={pickupDelivery} />
                        <label className='pickup-del' htmlFor="radio-three">Pickup</label>

                    </div>
                </div>

                {/* <p className='shipping-cost'>Shipping Cost: R200</p> */}

                <input className='address-input' type='text' placeholder='Address' required />

                <input className='message-input' type='text' placeholder='Message | Optional*' />

                <div className='checkout-payment-total-item'>
                    <h2 className='checkout-total-heading'>Total</h2>
                    <h2 className='checkout-total'>R{total}</h2>
                </div>

                <h2 className='continue-btn' onClick={toProductPage}>Continue Shopping</h2>
                <h2 className='payment-btn'>Proceed To Payment</h2>

            </div>


        </div>

    )
}

export default Checkout