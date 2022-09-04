import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import RemoveProductCard from '../uiComponents/RemoveProductCard';

const RemoveProduct = () => {

    

    const [updateProducts, setUpdateProducts] = useState(false);
    const [displayProducts, setDisplayProducts] = useState();

    useEffect(() => {
        Axios.get('http://localhost:5000/api/allProducts')
            .then(res => {
                let productData = res.data;
                console.log(productData);
                let allProducts = productData.map((item) => <RemoveProductCard
                productId={item._id}
                name={item.productName}
                price={item.price}
                desc={item.description}
                mini={item.mini}
                mid={item.mid}
                full={item.full}
                render={setUpdateProducts}/>);

                        
                setUpdateProducts(false);
                setDisplayProducts(allProducts)


            });
    }, [updateProducts]);




    return (
        <div>
            <Header />

            <h2 className='admin-heading'>MANAGEMENT</h2>

            <div className='admin-option-con'>
                <div className='admin-option'><Link to='/updateproduct'><p className='admin-option-text'>UPDATE ITEM</p></Link></div>
                <div className='admin-option'><Link to='/addproduct'><p className='admin-option-text'>ADD ITEM</p></Link></div>
                <div className='admin-option'> <Link to='/removeproduct'><p className='admin-option-text'>REMOVE ITEM</p></Link></div>

            </div>

            <div className='item-type-con'>

                {displayProducts}


            </div>
        </div>
    )
}

export default RemoveProduct;