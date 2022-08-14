import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exchangeToken, logout } from "../state/actionCreators/authAC";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import User from "./components/User";

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
        <NavLink to="/products/categoryA">CategoryA</NavLink>
        <NavLink to="/products/categoryB">CategoryB</NavLink>
        <NavLink to="/products/categoryC">CategoryC</NavLink>
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
          path="/products/categoryA"
          element={<Products category="categoryA" />}
        />
        <Route
          path="/products/categoryB"
          element={<Products category="categoryB" />}
        />
        <Route
          path="/products/categoryC"
          element={<Products category="categoryC" />}
        />
        <Route path="/user" element={<User />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
