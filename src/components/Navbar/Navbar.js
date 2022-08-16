import React from "react";
import {NavLink} from "react-router-dom";

function Navbar({auth, cart}) {
    return (
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
    )
}

export default Navbar;