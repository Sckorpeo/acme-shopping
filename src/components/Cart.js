import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken } from '../state/actionCreators/authAC';
import { fetchCart, addToCart } from '../state/actionCreators/cartAC';

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
        <div>
            {cart.map((item) => (
                <div>
                    <li>{`${item.product.name} (${item.quantity})`}</li>
                    <button onClick={() => handelClick(item.product, 1)}>
                        +
                    </button>
                    <button onClick={() => handelClick(item.product, -1)}>
                        -
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
