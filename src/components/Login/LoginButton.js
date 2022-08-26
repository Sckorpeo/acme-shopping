import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../state/actionCreators/authAC';
import { emptyCart } from '../../state/actionCreators/cartAC';
import './Login.css';

function LoginButton() {
    const dropdownRef = useRef(null);
    const clickMenuRef = useRef(false);
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (isActive && !clickMenuRef.current) {
                clickMenuRef.current = !clickMenuRef.current;
            } else if (isActive && clickMenuRef.current) {
                clickMenuRef.current = !clickMenuRef.current;
                setIsActive(!isActive);
            }
        };
        // If the item is active (ie open) then listen for clicks
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        };
    }, [isActive]);

    let userLogo;
    if (users[0]) {
        if (users[0].avatar) {
            userLogo = <img className="user-icon" src={users[0].avatar} />;
        } else {
            userLogo = users[0].username[0].toUpperCase();
        }
    } else {
        userLogo = null;
    }
    return (
        <div>
            {auth.id ? (
                <div className="user-icon neumorphism menu-container">
                    <button
                        onClick={handleClick}
                        className="user-icon neumorphism menu-trigger"
                    >
                        {userLogo}
                    </button>
                    <nav
                        ref={dropdownRef}
                        className={`menu ${isActive ? 'active' : 'inactive'}`}
                    >
                        <ul>
                            <li>
                                <NavLink to="/user/wishlist">Wishlist</NavLink>
                            </li>
                            <li>
                                <NavLink to="/user/info">Account</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        dispatch(logout());
                                        dispatch(emptyCart());
                                    }}
                                    to="/"
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <NavLink className="user-icon neumorphism" to="/login">
                    Log In
                </NavLink>
            )}
        </div>
    );
}

export default LoginButton;
