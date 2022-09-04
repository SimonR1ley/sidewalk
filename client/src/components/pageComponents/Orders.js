import React from 'react'
import Header from './Header'
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Orders = () => {

    const [checkoutItems, setCheckoutItem] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);


    const [allProducts, setAllProducts] = useState();
    const [allCartProducts, setAllCartProducts] = useState();

    let miniProduct = [];
    let midProduct = 0;
    let fullProduct = 0;

    // const username = sessionStorage.getItem('activeUser');




    // let editFormValues = { productName: props.name, price: props.price, desc: props.desc, mini: props.mini, mid: props.mid, full: props.full, };
    // const [editValues, setEditValues] = useState(editFormValues);


    // const updateValues = (e) => {
    //     const { name, value } = e.target;
    //     setEditValues({ ...editValues, [name]: value });
    //     console.log(editValues);
    // }

    // const updateProd = (e) => {
    //     e.preventDefault();
    //     let productId = props.productId;
    //     let payload = editValues;
    //     console.log(payload);

    //     Axios.patch('http://localhost:5000/api/updateproduct/' + productId, payload)
    //         .then((res) => {
    //             if (res) {
    //                 console.log("Item Upadted");
    //                 props.render(true);
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }




    useEffect(() => {
        Axios.get('http://localhost:5000/api/allProducts')
            .then(res => {
                let productData = res.data;
                console.log(productData);

                setAllProducts(productData);

            });
    }, []);


    useEffect(() => {
        Axios.get('http://localhost:5000/api/allCartProducts')
            .then(res => {
                let productData = res.data;
                console.log(productData);

                let allProducts = productData.map((item) =>
                    <div className='order'>
                        <h2 className='order-username'>{item.username}</h2>
                        <h2 className='order-name'>{item.productName}</h2>
                        <h2 className='order-qty'>Mini: {item.mini}</h2>
                        <h2 className='order-qty'>Mid: {item.mid}</h2>
                        <h2 className='order-qty'>Full: {item.full}</h2>
                        <h2 className='order-price'>R{item.price}</h2>
                    </div>
                );

                setCheckoutItem(allProducts)
                setUpdateProducts(false);

                setAllCartProducts(productData)
                // console.log(sum);


            });
    }, [updateProducts]);


    const DispatchOrders = () => {

        allCartProducts.forEach((val) => {

            if (val.mini) {
                miniProduct.push(val._id);
            }
        });

        console.log(miniProduct);

        // e.preventDefault();
        // let productId = props.productId;
        // let payload = editValues;
        // console.log(payload);



        // Axios.patch('http://localhost:5000/api/updateproduct/' + productId, payload)
        //     .then((res) => {
        //         if (res) {
        //             console.log("Item Upadted");
        //             props.render(true);
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }


    return (
        <div>
            <Header />

            <div className='order-con'>
                <h2 className='orders-heading'>ORDERS</h2>

                <div className='orders-display'>

                    <h2 className='username-order'></h2>

                    {checkoutItems}

                    {/* <div className='order'>
                        <h2 className='order-name'>STORMTROOPSTER</h2>
                        <h2 className='order-qty'></h2>
                        <h2 className='order-qty'></h2>
                        <h2 className='order-qty'></h2>
                        <h2 className='order-price'>R1000</h2>
                    </div> */}

                </div>

                <h2 className='confirmation' onClick={DispatchOrders}>DISPATCH</h2>

            </div>
        </div>
    )
}

export default Orders