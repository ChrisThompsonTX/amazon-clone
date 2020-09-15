import React from 'react'
import './checkout.css'
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

import Subtotal from './Subtotal.js';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg" 
                    alt="" 
                />
                <h3>{user? `Hello ${user.email}`: 'Hello Guest'}</h3>
                <h2 className="checkout__title" >Shopping Cart</h2>

                {basket.map(item => (
                    <FlipMove>
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    </FlipMove>
                ))}



            </div>
            <div className="checkout__right">
                <h2><Subtotal /></h2>
            </div>


        </div>
    )
}

export default Checkout
