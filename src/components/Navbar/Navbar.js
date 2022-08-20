import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginButton } from '../Login';
import SeedButton from '../Seed/SeedButton';
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
                    <SeedButton />
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
