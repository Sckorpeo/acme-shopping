import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
    }, [cart]);
    return (
        <NavLink to="/cart">
            <div
                id="CartBubble"
                className="CartBubble neumorphism"
                onMouseEnter={() => setOpen(!open)}
                onMouseLeave={() => setOpen(!open)}
            >
                {open && props.children}
                <p>Cart ({cart.length})</p>
            </div>
        </NavLink>
    );
};

export default CartBubble;
