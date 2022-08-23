import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginButton } from '../Login';
import './Navbar.css';

function Navbar({ auth, cart }) {
    return (
        <div className="nav-wrapper">
            <div className="nav-bar">
                <NavLink className="logo neumorphism" to="/">
                    LOGO
                </NavLink>
                <div className="nav-content">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'neumorphism-inset' : undefined
                        }
                        to="/products/all/1"
                    >
                        All Games
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'neumorphism-inset' : undefined
                        }
                        to="/products/category/A/1"
                    >
                        Campaign
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'neumorphism-inset' : undefined
                        }
                        to="/products/category/B/1"
                    >
                        Dexterity
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'neumorphism-inset' : undefined
                        }
                        to="/products/category/C/1"
                    >
                        Drafting
                    </NavLink>
                    {auth.id ? (
                        <NavLink to="/cart">{`Cart(${cart.length})`}</NavLink>
                    ) : (
                        ''
                    )}
                </div>
                <LoginButton auth={auth} />
            </div>
            <hr className="splitter" />
        </div>
    );
}

export default Navbar;
