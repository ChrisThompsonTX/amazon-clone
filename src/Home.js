import React from 'react'
import './home.css'

import Product from './Product';
import Slider from './Slider.js';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2020/Perception-Test-Sep20/prime_ufg_desktophero_message2_en_1500x600._CB406595857_.jpg"
                    alt="amazon banner"
                    />
                    <Slider />
                <div className="home__row">
                    <Product 
                        id="345245234"
                        title="Pizza"   
                        price={12.99}
                        image="https://www.seriouseats.com/2017/02/20170216-detroit-style-pizza-47-1500x1125-1.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="34fdsfsd34"
                        title="Pizza"   
                        price={12.99}
                        image="https://www.seriouseats.com/2017/02/20170216-detroit-style-pizza-47-1500x1125-1.jpg" 
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3434543534"
                        title="Pizza"
                        price={12.99}
                        image="https://www.seriouseats.com/2017/02/20170216-detroit-style-pizza-47-1500x1125-1.jpg"
                        rating={5}
                    />                    
                    <Product
                        id="312334"
                        title="Pizza"
                        price={12.99}
                        image="https://www.seriouseats.com/2017/02/20170216-detroit-style-pizza-47-1500x1125-1.jpg"
                        rating={5}
                    />                    
                    <Product
                        id="345245343534234"
                        title="Pizza"
                        price={12.99}
                        image="https://www.seriouseats.com/2017/02/20170216-detroit-style-pizza-47-1500x1125-1.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3452454517234"
                        title="Pizza"
                        price={12.99}
                        image="https://www.seriouseats.com/2017/02/20170216-detroit-style-pizza-47-1500x1125-1.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
