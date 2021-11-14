import './Home.css'
import Product from './Product' 
import React from 'react'


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg" alt="" className="home__image">
                </img>
            </div>

            <div className="home__row">
                <Product id={11} title="Atomic Habits : the international bestseller,James Clear , start reading and become a smart reader" rating={5} image="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY200_.jpg" price={99.99} />
                 <Product id={12} title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold" image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UL480_QL65_.jpg" rating={4} price={999.00}/>
            </div>
            
            <div className="home__row">
                <Product id={21} image="https://m.media-amazon.com/images/I/81XdASVpgwL._AC_UL480_FMwebp_QL65_.jpg" title="Under Armour Men's HeatGear Armour Short Sleeve Compression T-Shirt" rating={4} price={55.00}/>
                <Product id={22}image="https://images-na.ssl-images-amazon.com/images/I/91xxqc9IwcL._AC_UL116_SR116,116_.jpg" title="LAMAZE Peek-A-Boo Forest, Fun Interactive Baby Book with Inspiring Rhymes and Stories, Multi, one Size (L27901B)" price={14.99} rating={5}/>
                <Product id={23} image="https://m.media-amazon.com/images/I/81ZB62prn-L._AC_SY200_.jpg" title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel" rating={5} price={15.99} />
                
              
            </div>

            <div className="home__row">
                <Product id={31} image="https://m.media-amazon.com/images/I/61JKqNxaZkL._AC_UY327_FMwebp_QL65_.jpg" title="Razer Basilisk V3 Customizable Ergonomic Gaming Mouse: Fastest Gaming Mouse Switch - Chroma RGB Lighting - 26K DPI Optical Sensor - 11 Programmable Buttons - HyperScroll Tilt Wheel - Classic Black" price={69.99} rating={4}/>
            </div>
        </div>
    )
}

export default Home
