import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { priceReducer, quantityReducer } from '../../util/reducers';
import './CartSubtotal.css';

const CartSubtotal = () => {
    const { cart } = useSelector((state) => state.cart);
    const subtotal = priceReducer(cart);
    const quantity = quantityReducer(cart);

    return (
        <div className="CartSubtotal neumorphism-with-border">
            <h2>
                {' '}
                Subtotal ({quantity} {quantity > 1 ? 'items' : 'item'}): $
                {subtotal}
            </h2>
            <NavLink to="/cart/checkout" className="neumorphism-btn">
                {' '}
                Proceed to Checkout{' '}
            </NavLink>
        </div>
    );
};

export default CartSubtotal;
