import React from 'react';
import video from '../assets/heroVid.mp4';
import '../fonts/DIEDIEDI.TTF';
import { useState, useEffect } from 'react';
import Header from './Header';
import Axios from 'axios';

const Home = () => {



    const [homeProd, setHomeProd] = useState();


    useEffect(() => {
        Axios.get('http://localhost:5000/api/allProducts')
            .then(res => {
                let productData = res.data;
                console.log(productData);

                const latestTen = productData.slice(-10);

                let homeProd = latestTen.map((item) =>
                <div className='just-in-item' key={item._id}>
                <div className='product-img'></div>
                <div className='product-info-con'>
                    <h2 className='product-heading'>{item.productName}</h2>
                    <p className='rarity'>{item.inStock}</p>
                    <p className='price'>R{item.price}</p>
                    <div className='view-btn'>
                        <p className='view-text'>VIEW</p>
                    </div>
                    <div className='add-cart-btn'>
                        <div className='cart-icon'></div>
                    </div>
                </div>
            </div>
                );

                setHomeProd(homeProd);
            });
    }, []);







    return (
        <div>

            <Header />

            <div className="video-wrapper">

                <div className='learn-more'>
                    <p className='about-heading'>SIDEWALK</p>
                    <div className='about-con'>
                        <p className='about'>Here at SIDEWALK we specialize in getting the latest and greatest decks delivered
                        to you with the click of a button.</p>
                    </div>
                    <div className='learn-more-btn'>
                        <p className='learn-more-text'>LEARN MORE</p>
                    </div>
                </div>

                <video playsInline autoPlay muted loop src={video}>
                </video>
            </div>

            <div className='home-about-con'>
                <h2 className='about-heading-main'>ABOUT SIDEWALK</h2>
                <p className='about-main'>Here at Sidewalk we have a wide range of decks. If theres something you're thinking about 
                we probably have it. Our range is made up of all types and brands of deck. Your dream deck is just a click away</p>
                <div className='extra'></div>
            </div>

            <p className='board-sizing-heading'>BOARD SIZING</p>
            <div className='board-sizing-con'></div>

            <div className='just-in-con'>
                <p className='just-in-heading'>JUST IN</p>
                <div className='left'></div>
                <div className='just-in-item-con'>

                 {homeProd}

                </div>
                <div className='right'></div>
            </div>

            

            <h2 className='brands-heading'>BRANDS WE WORK WITH</h2>
            <div className='brands-con'>
                <div className='brandOne'></div>
                <div className='brandTwo'></div>
                <div className='brandThree'></div>
                {/* <div className='brandFour'></div>
                <div className='brandFive'></div> */}
            </div>

            <footer></footer>

        </div>
    )
}

export default Home;
