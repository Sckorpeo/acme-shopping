import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken, logout } from './state/actionCreators/authAC';
import { Route, Routes, NavLink, HashRouter } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import User from './components/User';

function App() {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(exchangeToken());
    }, []);

    return (
        <HashRouter>
            <div className="nav-bar">
                <NavLink to="/">LOGO</NavLink>
                <NavLink to="/products/A">CategoryA</NavLink>
                <NavLink to="/products/B">CategoryB</NavLink>
                <NavLink to="/products/C">CategoryC</NavLink>
                {auth.id ? (
                    <NavLink to="/user">{`Welcome, ${auth.username}`}</NavLink>
                ) : (
                    <NavLink to="/login">LogIn</NavLink>
                )}
                <NavLink to="/cart">Cart</NavLink>
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="/products/A"
                    element={<Products categoryId="1" />}
                />
                <Route
                    path="/products/B"
                    element={<Products categoryId="2" />}
                />
                <Route
                    path="/products/C"
                    element={<Products categoryId="3" />}
                />
                <Route path="/user" element={<User />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
