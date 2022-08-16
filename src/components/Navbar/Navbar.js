import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ auth, cart }) {
    return (
        <div className="nav-bar">
            <NavLink className="logo neumorphism-layer1-medium" to="/">
                LOGO
            </NavLink>
            <div className="nav-content">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'neumorphism-layer1-active' : undefined
                    }
                    to="/products/category/A"
                >
                    Campaign
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'neumorphism-layer1-active' : undefined
                    }
                    to="/products/category/B"
                >
                    Dexterity
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'neumorphism-layer1-active' : undefined
                    }
                    to="/products/category/C"
                >
                    Drafting
                </NavLink>
                {auth.id ? (
                    <NavLink to="/cart">{`Cart(${cart.length})`}</NavLink>
                ) : (
                    ''
                )}
            </div>
            {auth.id ? (
                <NavLink
                    className="user_icon neumorphism-layer1-medium"
                    to="/user"
                >{`Welcome, ${auth.username}`}</NavLink>
            ) : (
                <NavLink
                    className="user_icon neumorphism-layer1-medium"
                    to="/login"
                >
                    LogIn
                </NavLink>
            )}
        </div>
    );
}

export default Navbar;
