import React from 'react';
import {useDispatch} from 'react-redux';
import { addToWishList } from '../../state/actionCreators/wishListAC';
import { addToCart } from '../../state/actionCreators/cartAC';
import './WishListItem.css';

const WishListItem = ({ product, quantity}) => {
    const dispatch = useDispatch();
    const handleIncrement = (product, incrementBy) => {
        dispatch(addToWishList(product, incrementBy));
    };
    const moveToCart = () => {
        dispatch(addToCart({ product, quantity: quantity }));
        dispatch(addToWishList( product, -quantity));
    };
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
                        X remove from wish list
                    </button>
                    <button onClick={moveToCart}>
                        -> move to cart
                    </button>
                </div>
                <div className="CartItem-price">
                    <p>${product.price}</p>
                </div>
            </div>
        </>
    );
};

export default WishListItem;
