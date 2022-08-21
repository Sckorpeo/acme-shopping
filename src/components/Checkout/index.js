import React from 'react';
import BillingDetails from './BillingDetails';
import CardElementContainer from './CardElementContainer';

import { CardElement } from '@stripe/react-stripe-js';
import './Checkout.css';

const Checkout = () => {
    return (
        <form className="Checkout">
            <BillingDetails />
            <CardElementContainer>
                <CardElement />
            </CardElementContainer>
        </form>
    );
};

export default Checkout;
