import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            action: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutproduct">
            <img 
                className="checkoutproduct__image"
                src={image}
                alt="product image"
            />
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p key={i}>🍕</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
