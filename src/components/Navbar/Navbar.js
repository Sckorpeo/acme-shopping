import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ auth, cart }) {
    return (
        <div className="nav-bar">
            <NavLink to="/">LOGO</NavLink>
            <div className="nav-content neumorphism-layer1-medium neumorphism-layer1-with-hover">
                <NavLink
                    className="neumorphism-layer1-active"
                    to="/products/category/A"
                >
                    CategoryA
                </NavLink>
                <NavLink to="/products/category/B">CategoryB</NavLink>
                <NavLink to="/products/category/C">CategoryC</NavLink>
            </div>
            {auth.id ? (
                <NavLink to="/user">{`Welcome, ${auth.username}`}</NavLink>
            ) : (
                <NavLink to="/login">LogIn</NavLink>
            )}
        </div>
    );
}

export default Navbar;
