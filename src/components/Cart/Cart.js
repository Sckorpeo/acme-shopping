import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken } from '../../state/actionCreators/authAC';
import { fetchCart, addToCart } from '../../state/actionCreators/cartAC';
import './Cart.css';

function Cart() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    const { auth } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(exchangeToken());
    }, []);
    useEffect(() => {
        if (auth.id) dispatch(fetchCart());
    }, [auth]);

    const handelClick = (product, number) => {
        const productInfo = { product: product, quantity: number };
        dispatch(addToCart(productInfo));
    };
    console.log(cart);

    return (
        <div className="Cart-page">
            <div className="Cart-content">
                {cart.map((item) => (
                    <CartItem product={item.product} key={item.id} />
                ))}
                <hr />
            </div>
            <div className="Cart-sidebar"></div>
        </div>
    );
}

export default Cart;
