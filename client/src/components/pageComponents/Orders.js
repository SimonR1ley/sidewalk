import React from 'react'
import Header from './Header'
import { useState, useEffect} from 'react';
import Axios from 'axios';

const Orders = () => {

    const [checkoutItems, setCheckoutItem] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);


    useEffect(() => {
        Axios.get('http://localhost:5000/api/allCartProducts')
            .then(res => {
                let productData = res.data;
                // console.log(productData);

                let allProducts = productData.map((item) => 
                <div className='order'>
                    <h2 className='order-name'>{item.productName}</h2>
                    <h2 className='order-qty'>Mini: {item.mini}</h2>
                    <h2 className='order-qty'>Mid: {item.mid}</h2>
                    <h2 className='order-qty'>Full: {item.full}</h2>
                    <h2 className='order-price'>R{item.price}</h2>
                </div> 
                );

                setCheckoutItem(allProducts)
                setUpdateProducts(false);
                    // console.log(sum);
                
            });
    }, [updateProducts]);


    return (
        <div>
            <Header />

            <div className='order-con'>
                <h2 className='orders-heading'>ORDERS</h2>

                <div className='orders-display'>

                    <h2 className='username-order'>USERNAME</h2>

                    {checkoutItems}

                    {/* <div className='order'>
                        <h2 className='order-name'>STORMTROOPSTER</h2>
                        <h2 className='order-qty'></h2>
                        <h2 className='order-qty'></h2>
                        <h2 className='order-qty'></h2>
                        <h2 className='order-price'>R1000</h2>
                    </div> */}

                </div>

                <h2 className='confirmation'>DISPATCH</h2>

            </div>
        </div>
    )
}

export default Orders