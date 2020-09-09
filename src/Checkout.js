import React from 'react'
import './checkout.css'

import Subtotal from './Subtotal.js';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg" 
                    alt="" 
                />
                <h2 className="checkout__title" >Shopping Cart</h2>
            </div>
            <div className="checkout__right">
                <h2><Subtotal /></h2>
            </div>
        </div>
    )
}

export default Checkout
