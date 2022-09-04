import React from 'react';
import Header from './pageComponents/Header';

const Admin = () => {
    return (
        <div>
            <Header />

            <h2 className='admin-heading'>MANAGEMENT</h2>

            <div className='admin-option-con'>
                <div className='admin-option'><p className='admin-option-text'>EDIT ITEM</p></div>
                <div className='admin-option'><p className='admin-option-text'>ADD ITEM</p></div>
                <div className='admin-option'><p className='admin-option-text'>REMOVE ITEM</p></div>
            </div>

            <div className='item-type-con'>

                <div className='admin-item-con'>
                    <div className='admin-img'></div>
                    <input className='admin-img-select' type='image'></input>
                    <input className='name-input' placeholder='NAME'></input>
                    <input className='quantity' type='number'></input>
                    <input className='price-input' type='number' placeholder='PRICE'></input>
                    <div className='admin-btn'>
                        <h2 className='admin-btn-text'>ADD</h2>
                    </div>
                </div>

                <div className='admin-item-con'>
                    <div className='admin-img'></div>
                    {/* <input className='admin-img-select' type='image'></input> */}
                    {/* <input className='name-input' placeholder='NAME'></input> */}
                    <h2 className='admin-deck-name'>STORMTROOPSTER</h2>
                    <input className='quantity' type='number'></input>
                    <input className='price-input' type='number' placeholder='PRICE'></input>
                    <div className='admin-btn remove-btn'>
                        <h2 className='admin-btn-text'>REMOVE</h2>
                    </div>
                </div>

                <div className='admin-item-con'>
                    <div className='admin-img'></div>
                    <input className='admin-img-select' type='image'></input>
                    <input className='name-input' placeholder='STORMTROOPSTER'></input>
                    <input className='quantity' type='number' placeholder='3'></input>
                    <input className='price-input' type='number' placeholder='R1600'></input>
                    <div className='admin-btn update-btn'>
                        <h2 className='admin-btn-text'>UPDATE</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Admin;
