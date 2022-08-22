import React from 'react';
import FormField from './FormField';
import './BillingDetails.css';

const BillingDetails = () => {
    return (
        <div className="BillingDetails neumorphism-with-border">
            <FormField
                name="name"
                label="Name"
                type="text"
                placeholder="Luke Skywalker"
                required
            />
            <FormField
                name="email"
                label="Email"
                type="email"
                placeholder="luke.skywalker@example.com"
                required
            />
            <FormField
                name="address"
                label="Address"
                type="text"
                placeholder="777 Nerf Hurder Road"
                required
            />
            <FormField
                name="city"
                label="City"
                type="text"
                placeholder="Mos Eisely"
                required
            />
            <FormField
                name="state"
                label="State"
                type="text"
                placeholder="Tatooine"
                required
            />
            <FormField
                name="zip"
                label="ZIP"
                type="text"
                placeholder="77777"
                required
            />
        </div>
    );
};

export default BillingDetails;
