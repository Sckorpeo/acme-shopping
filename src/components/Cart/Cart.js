import React, { useEffect } from 'react';
import CartItem from './CartItem';
import CartSubtotal from './CartSubtotal';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken } from '../../state/actionCreators/authAC';
import { fetchCart } from '../../state/actionCreators/cartAC';
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

    return (
        <>
            <div className="Cart-page">
                <div className="Cart-content">
                    {cart.map((item) => (
                        <CartItem
                            product={item.product}
                            key={item.id}
                            quantity={item.quantity}
                            lineItem={item}
                        />
                    ))}
                </div>
                <div className="Cart-sidebar">
                    <CartSubtotal />
                </div>
            </div>
            <hr className="splitter" />
        </>
    );
}

export default Cart;
