import React from 'react';
import './CartItem.css';

const CartItem = ({ product }) => {
    return (
        <>
            <div className="CartItem neumorphism-with-border">
                <img className="neumorphism-inset" src={product.imageUrl} />
                <div className="CartItem-content">
                    <p className="boardgame-name">
                        {product.name} (Players {product.minPlayers} -{' '}
                        {product.maxPlayers})
                    </p>
                    <select>
                        <option value={1}>Qty: 1</option>
                    </select>
                </div>
                <div className="CartItem-price">
                    <p>${product.price}</p>
                </div>
            </div>
        </>
    );
};

export default CartItem;
