import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken, logout } from './state/actionCreators/authAC';
import { fetchCart } from './state/actionCreators/cartAC';
import { Route, Routes, NavLink, HashRouter } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import User from './components/User';
import Product from './components/Product';

function App() {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);
    console.log(cart);
    const fetchData = () => {
        dispatch(exchangeToken());
        dispatch(fetchCart());
    };

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     dispatch(fetchCart());
    // }, []);
    return (
        <HashRouter>
            <div className="nav-bar">
                <NavLink to="/">LOGO</NavLink>
                <NavLink to="/products/category/A">CategoryA</NavLink>
                <NavLink to="/products/category/B">CategoryB</NavLink>
                <NavLink to="/products/category/C">CategoryC</NavLink>
                {auth.id ? (
                    <NavLink to="/user">{`Welcome, ${auth.username}`}</NavLink>
                ) : (
                    <NavLink to="/login">LogIn</NavLink>
                )}
                {auth.id ? (
                    <NavLink to="/cart">{`Cart(${cart.length})`}</NavLink>
                ) : (
                    ''
                )}
            </div>
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
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:productId" element={<Product />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
