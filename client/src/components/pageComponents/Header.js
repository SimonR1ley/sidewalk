import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";


const Header = () => {

    const [cartActive, setCartActive] = useState("notActive");
    const [cartItems, setCartItems] = useState();
    const [renderItems, setRenderItems] = useState("false");

    let admin ='noDisplay';

    const Admin = "Admin"

    if(sessionStorage.getItem('activeUser') != Admin){
        admin = 'noDisplay';
    }


    // Show Cart 

    const Cart = () => {

        // console.log(props.products[0]);

        if (cartActive === "notActive") {
            setCartActive("active");
        } else {
            setCartActive("notActive");
        }

    }


    let navigate = useNavigate();

    const toCheckout = () => { 
        navigate('/login');
      }


    useEffect(() => {

        Axios.get('http://localhost:5000/api/allCartProducts')
            .then(res => {
                let productData = res.data;
                // console.log(productData);

                let allProducts = productData.map((item) =>
                    <div className='cart-item'>
                        <h3 className='cart-item-name'>{item.productName}</h3>
                        <h3 className='cart-item-price'>R{item.price}</h3>
                        {/* <h3 className='cart-remove'>Remove</h3> */}
                    </div>
                );

                // setRenderItems('false');
                setCartItems(allProducts);


            });
    });


    return (
        <div>

            {/* <Link to="/comone">Overview</Link> */}

            <div className='nav'>
                <h1 className='logo'>SIDEWALK</h1>
                <div className='nav-sub-con'>
                    <Link to='/'><p className='nav-heading One'>HOME</p></Link>
                    <p className='nav-heading Two'>ABOUT</p>
                    <Link to='/products'><p className='nav-heading Three'>PRODUCTS</p></Link>
                    <Link to='/addproduct'><p className='nav-heading Four'>ADMIN</p></Link>
                    <Link to='/login'><p className={admin}>LOGIN</p></Link>
                    <Link to='/orders'><p className='nav-heading Five'>ORDERS</p></Link>
                    <div className='cart' onClick={Cart}></div>
                </div>
            </div>


            <div className={cartActive}>
                <h2 className='cart-heading'>CART</h2>
                <div className='cart-item-con'>
                    {cartItems}
                </div>

                {/* <h2 className='total-heading'>TOTAL</h2> */}
                <h2 className='checkout-heading-cart' onClick={toCheckout}>CHECKOUT</h2>

                {/* <h2 className='checkout-heading'>CHECKOUT</h2> */}

            </div>

        </div>
    )
}

export default Header