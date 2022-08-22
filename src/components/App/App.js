import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken, logout } from '../../state/actionCreators/authAC';
import { fetchCart } from '../../state/actionCreators/cartAC';
import { loadUser } from '../../state/actionCreators/usersAC';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import Cart from '../Cart';
import Home from '../Home';
import Login from '../Login';
import Products from '../Products';
import User, { UserInfo, UserOrders, UserSecurity } from '../User';
import Product from '../Product';
import CartBubble from '../Cart/CartBubble';
import SignUp from '../Signup';

function App() {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(exchangeToken());
    }, []);

    useEffect(() => {
        if (auth.id) {
            dispatch(fetchCart());
            dispatch(loadUser());
        }
    }, [auth]);
    return (
        <div id="app">
            <Navbar auth={auth} cart={cart} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="/products/category/A"
                    element={<Products categoryId="1" />}
                />
                <Route
                    path="/products/category/B"
                    element={<Products categoryId="2" />}
                />
                <Route
                    path="/products/category/C"
                    element={<Products categoryId="3" />}
                />
                <Route path="/user" element={<User />}>
                    <Route index element={<UserInfo />} />
                    <Route path="info" element={<UserInfo />} />
                    <Route path="security" element={<UserSecurity />} />
                    <Route path="orders" element={<UserOrders />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/products/:productId" element={<Product />} />
            </Routes>
            <CartBubble>Hello World</CartBubble>
        </div>
    );
}

export default App;
