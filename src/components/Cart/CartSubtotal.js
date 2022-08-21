import React from 'react';
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
            <button className="neumorphism-btn"> Proceed to Checkout </button>
        </div>
    );
};

export default CartSubtotal;
