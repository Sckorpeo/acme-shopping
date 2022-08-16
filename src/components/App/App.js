import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {exchangeToken, logout} from '../../state/actionCreators/authAC';
import {fetchCart} from '../../state/actionCreators/cartAC';
import {Route, Routes, NavLink} from 'react-router-dom';
import Cart from '../Cart';
import Home from '../Home';
import Login from '../Login';
import Products from '../Products';
import User from '../User';
import Product from '../Product';

function App() {
    const dispatch = useDispatch();
    const {auth} = useSelector((state) => state.auth);
    const {cart} = useSelector((state) => state.cart);
    const fetchData = () => {
        dispatch(exchangeToken());
        if (auth.id) dispatch(fetchCart());
    };

    useEffect(() => {
        dispatch(exchangeToken());
    }, []);

    useEffect(() => {
        if (auth.id) dispatch(fetchCart());
    }, [auth]);
    return (
        <div id='app'>
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
                <Route exact path="/" element={<Home/>}/>
                <Route
                    path="/products/category/A"
                    element={<Products categoryId="1"/>}
                />
                <Route
                    path="/products/category/B"
                    element={<Products categoryId="2"/>}
                />
                <Route
                    path="/products/category/C"
                    element={<Products categoryId="3"/>}
                />
                <Route path="/user" element={<User/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/products/:productId" element={<Product/>}/>
            </Routes>
        </div>
    )
        ;
}

export default App;
