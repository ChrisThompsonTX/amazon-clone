import { Link } from '@material-ui/core';
import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './payment.css'
import { useStateValue } from './StateProvider'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const [error, setError] = useStateValue(null);
    // const [processing, setProcessing] = useStateValue("");
    const [disables, setDisabled] = useStateValue(true);
    
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = (e) => {
        
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>154 Frisbie St.</p>
                        <p>Oakland, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items"> 
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
