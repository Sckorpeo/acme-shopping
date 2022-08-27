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
import User, {
    UserInfo,
    UserOrders,
    UserSecurity,
    UserWishList,
} from '../User';
import Product from '../Product';
import CartBubble from '../Cart/CartBubble';
import SignUp from '../SignUp';
import Checkout from '../Checkout';
import AdminPage from '../AdminPage/AdminPage';
import AdminPageUsers from '../AdminPage/AdminPageUsers';
import AdminPageProducts from '../AdminPage/AdminPageProducts';
import AdminPageUser from '../AdminPage/AdminPageUser';
import AdminPageProduct from '../AdminPage/AdminPageProduct';
import AdminPageAddProduct from '../AdminPage/AdminPageAddProduct';
import AdminPageCoupons from '../AdminPage/AdminPageCoupons';
import Success from '../Checkout/Success';
import { SearchPage } from '../Search';
import NotFound from '../NotFound';
import Footer from '../Footer';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { fetchCoupons } from '../../state/actionCreators/couponAC';

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

function App() {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(exchangeToken());
    }, []);

    useEffect(() => {
        dispatch(fetchCart());
        if (auth.id) {
            dispatch(loadUser());
            dispatch(fetchCoupons());
        }
    }, [auth]);
    return (
        <div id="app">
            <Elements stripe={stripePromise}>
                <Navbar auth={auth} cart={cart} />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        path="/products/all/:page"
                        element={<Products pathname="/products/all/" />}
                    />
                    <Route
                        path="/products/category/A/:page"
                        element={
                            <Products
                                pathname="/products/category/A/"
                                categoryId="1"
                            />
                        }
                    />
                    <Route
                        path="/products/category/B/:page"
                        element={
                            <Products
                                pathname="/products/category/B/"
                                categoryId="2"
                            />
                        }
                    />
                    <Route
                        path="/products/category/C/:page"
                        element={
                            <Products
                                pathname="/products/category/C/"
                                categoryId="3"
                            />
                        }
                    />
                    <Route path="/user" element={<User />}>
                        <Route path="info" element={<UserInfo />} />
                        <Route path="security" element={<UserSecurity />} />
                        <Route path="orders" element={<UserOrders />} />
                        <Route path="wishlist" element={<UserWishList />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products/:productId" element={<Product />} />
                    <Route path="/cart/checkout" element={<Checkout />} />
                    <Route
                        path="/cart/checkout/success"
                        element={<Success />}
                    />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/admin" element={<AdminPage />}>
                        <Route path="users" element={<AdminPageUsers />} />
                        <Route
                            path="users/:userId"
                            element={<AdminPageUser />}
                        />
                        <Route
                            path="products"
                            element={<AdminPageProducts />}
                        />
                        <Route
                            path="products/:productId"
                            element={<AdminPageProduct />}
                        />
                        <Route
                            path="addProduct"
                            element={<AdminPageAddProduct />}
                        />
                        <Route path="coupons" element={<AdminPageCoupons />} />
                    </Route>
                    <Route path="/search/*" element={<SearchPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
                <CartBubble>Hello World</CartBubble>
            </Elements>
        </div>
    );
}

export default App;
