import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ auth, cart }) {
    return (
        <div className="nav-bar">
            <NavLink className="logo neumorphism" to="/">
                LOGO
            </NavLink>
            <div className="nav-content">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'neumorphism-inset' : undefined
                    }
                    to="/products/category/A"
                >
                    Campaign
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'neumorphism-inset' : undefined
                    }
                    to="/products/category/B"
                >
                    Dexterity
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'neumorphism-inset' : undefined
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
                    className="user_icon neumorphism"
                    to="/user"
                >{`Welcome, ${auth.username}`}</NavLink>
            ) : (
                <NavLink className="user_icon neumorphism" to="/login">
                    LogIn
                </NavLink>
            )}
        </div>
    );
}

export default Navbar;
