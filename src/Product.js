import React from 'react'
import './product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Speaker</p>
                <p className="product__price" >
                    <small>$</small>
                    <strong>12.99</strong>
                </p>
                <div className="product__rating">
                    <p>🍕</p>
                    <p>🍕</p>
                    <p>🍕</p>
                </div>
            </div>

            <img
                src="https://www.seriouseats.com/2017/02/20170216-detroit-style-pizza-47-1500x1125-1.jpg"
                alt=""
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
