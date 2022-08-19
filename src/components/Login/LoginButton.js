import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

function LoginButton({auth}) {
    const dropdownRef = useRef(null);
    const [ isActive, setIsActive ] = useState(false);
    const handleClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            console.log(e);
        };
        // If the item is active (ie open) then listen for clicks
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive]);

    return (
        <div>
            {auth.id ? (
                <div className="user-icon neumorphism menu-container">
                    <button onClick={handleClick} className="user-icon neumorphism menu-trigger">
                    {auth.username}
                    </button>
                    <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                        <ul>
                            <li><NavLink to='/user'>Wishlist</NavLink></li>
                            <li><NavLink to='/user'>Account</NavLink></li>
                            <li><NavLink to='/user'>Logout</NavLink></li>
                        </ul>
                    </nav>
                </div>
                // <NavLink className="user-icon neumorphism" to="/user">{`Welcome, ${auth.username}`}</NavLink>
            ) : (
                <NavLink className="user-icon neumorphism" to="/login">
                    Log In
                </NavLink>
            )}
        </div>
    )
};

export default LoginButton
