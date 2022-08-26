import React, { useEffect } from 'react';
import CartItem from './CartItem';
import CartSubtotal from './CartSubtotal';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken } from '../../state/actionCreators/authAC';
import { fetchCart } from '../../state/actionCreators/cartAC';
import './Cart.css';

function Cart() {
    const dispatch = useDispatch();
    let { cart } = useSelector((state) => state.cart);
    const { auth } = useSelector((state) => state.auth);
    // const guestBasket = JSON.parse(window.localStorage.getItem('cart'));

    // if (guestBasket.length > 0 && Object.keys(auth).length < 1) {
    //     cart = guestBasket;
    // }

    useEffect(() => {
        dispatch(exchangeToken());
    }, []);
    useEffect(() => {
        if (auth.id) dispatch(fetchCart());
    }, [auth]);

    const content = cart.length
        ? cart.map((item) => (
              <CartItem
                  product={item.product}
                  key={item.id || item.product.id}
                  quantity={item.quantity}
                  lineItem={item}
              />
          ))
        : 'Cart Empty';

    return (
        <>
            <div className="Cart-page">
                <div className="Cart-content">{content}</div>
                <div className="Cart-sidebar">
                    <CartSubtotal />
                </div>
            </div>
            <hr className="splitter" />
        </>
    );
}

export default Cart;
