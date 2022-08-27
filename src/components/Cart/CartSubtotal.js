import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { priceReducer, quantityReducer } from '../../util/reducers';
import CouponCart from '../Coupon/CouponCart';
import './CartSubtotal.css';

const CartSubtotal = () => {
    const { cart } = useSelector((state) => state.cart);
    const { auth } = useSelector((state) => state.auth);
    const subtotal = priceReducer(cart);
    const quantity = quantityReducer(cart);

    let button = quantity ? (
        <NavLink to="/cart/checkout" className="neumorphism-btn">
            {' '}
            Proceed to Checkout{' '}
        </NavLink>
    ) : (
        'No Items To Checkout'
    );
    if (Object.keys(auth).length < 1) {
        button = 'Login To Checkout';
    }
    return (
        <div className="CartSubtotal neumorphism-with-border">
            <h2>
                {' '}
                Subtotal ({quantity} {quantity > 1 ? 'items' : 'item'}): $
                {subtotal}
            </h2>
            {auth.id ? <CouponCart /> : ''}
            {button}
        </div>
    );
};

export default CartSubtotal;
