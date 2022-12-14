import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { quantityReducer } from '../../util/reducers';
import './CartBubble.css';

const CartBubble = (props) => {
    const cartEl = document.getElementById('CartBubble');
    const { cart } = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        cartEl?.classList.add('bounce');
        setTimeout(() => {
            cartEl?.classList.remove('bounce');
        }, 650);
    }, [cart.length]);
    return (
        <NavLink to="/cart">
            <div
                id="CartBubble"
                className="CartBubble neumorphism"
                // onMouseEnter={() => setOpen(true)}
                // onMouseLeave={() => setOpen(false)}
            >
                {open && props.children}
                <p>Cart ({quantityReducer(cart)})</p>
            </div>
        </NavLink>
    );
};

export default CartBubble;
