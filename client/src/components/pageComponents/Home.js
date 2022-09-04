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

                const latestTen = productData.slice(-3);

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
                        <p className='about'>Here at SIDEWALK we specialize in producing unique decks.
                            Our decks are ultra rare and designed by our amazing artists.
                            Depending on the deck that you buy, your deck will be one of a few in existance or a one of a kind.</p>
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
                <p className='about-main'>Lorem ipsum dolor sit amet. Ex officia blanditiis
                    aut fugiat aspernatur ea autem sint aut quam culpa aut minus doloribus ea nesciunt similique qui
                    eius rerum. Id praesentium earum ex assumenda sequi id molestias sunt sed sint dolor. Qui animi
                    inventore ut dolor porro ut quam ducimus et corrupti architecto non beatae dignissimos et tempora
                    nihil vel error tenetur. Qui repellendus possimus ut molestias ratione aut eius enim.</p>
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
                <div className='brandFour'></div>
                <div className='brandFive'></div>
            </div>

            <footer></footer>

        </div>
    )
}

export default Home;
