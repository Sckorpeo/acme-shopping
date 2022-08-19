import React from 'react';
import { useSelector } from 'react-redux';
import { priceReducer, quantityReducer } from '../../util/reducers';

const CartSubtotal = () => {
    const { cart } = useSelector((state) => state.cart);
    const subtotal = priceReducer(cart);
    const quantity = quantityReducer(cart);

    return (
        <div className="CartSubtotal">
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
