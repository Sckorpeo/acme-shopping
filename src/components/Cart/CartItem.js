import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state/actionCreators/cartAC';
import { addToWishList } from '../../state/actionCreators/wishListAC';
import './CartItem.css';

const CartItem = ({ product, quantity }) => {
    const dispatch = useDispatch();
    const handleIncrement = (product, value) => {
        dispatch(addToCart({ product, quantity: value }));
    };
    const moveToWishList = () => {
        dispatch(addToWishList( product, quantity));
        dispatch(addToCart({ product, quantity: -quantity }));
    }
    return (
        <>
            <div className="CartItem neumorphism-with-border">
                <img className="neumorphism-inset" src={product.imageUrl} />
                <div className="CartItem-content">
                    <p className="boardgame-name">
                        {product.name} (Players {product.minPlayers} -{' '}
                        {product.maxPlayers})
                    </p>
                    <div className="CartItem-increments">
                        <button onClick={() => handleIncrement(product, -1)}>
                            -
                        </button>
                        <p>{quantity}</p>
                        <button onClick={() => handleIncrement(product, +1)}>
                            +
                        </button>
                    </div>
                    <button onClick={() => handleIncrement(product, -quantity)}>
                        X remove from cart
                    </button>
                    <button onClick={moveToWishList}>
                        -> move to wish list
                    </button>
                </div>
                <div className="CartItem-price">
                    <p>${product.price}</p>
                </div>
            </div>
        </>
    );
};

export default CartItem;
