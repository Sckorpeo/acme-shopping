import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BillingDetails from './BillingDetails';
import CardElementContainer from './CardElementContainer';
import { priceReducer } from '../../util/reducers';
import axios from 'axios';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';

const Checkout = ({ onSuccessfulCheckout }) => {
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const { cart } = useSelector((state) => state.cart);
    let price = priceReducer(cart);

    const stripe = useStripe();
    const elements = useElements();

    const handleCardDetailsChange = (ev) => {
        ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
    };

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();

        const billingDetails = {
            name: ev.target.name.value,
            email: ev.target.email.value,
            address: {
                city: ev.target.city.value,
                line1: ev.target.address.value,
                state: ev.target.state.value,
                postal_code: ev.target.zip.value,
            },
        };

        setProcessingTo(true);

        const cardElement = elements.getElement('card');

        try {
            const { data: clientSecret } = await axios.post(
                '/api/payment_intents',
                {
                    amount: price * 100,
                }
            );

            const paymentMethodReq = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: billingDetails,
            });

            if (paymentMethodReq.error) {
                setCheckoutError(paymentMethodReq.error.message);
                setProcessingTo(false);
                return;
            }

            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq.paymentMethod.id,
            });

            if (error) {
                setCheckoutError(error.message);
                setProcessingTo(false);
                return;
            }

            onSuccessfulCheckout();
        } catch (err) {
            setCheckoutError(err.message);
        }
    };

    const cardElementOpts = {
        hidePostalCode: true,
    };
    return (
        <form className="Checkout" onSubmit={handleFormSubmit}>
            <BillingDetails />
            <CardElementContainer>
                <CardElement
                    onChange={handleCardDetailsChange}
                    options={cardElementOpts}
                />
            </CardElementContainer>
            <div>{checkoutError ? checkoutError : ''}</div>
            <button disabled={isProcessing || !stripe}>
                {isProcessing ? 'Processing...' : `Pay $${price}`}
            </button>
        </form>
    );
};

export default Checkout;
