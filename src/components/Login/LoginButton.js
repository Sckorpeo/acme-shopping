import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../state/actionCreators/authAC';
import './Login.css';

function LoginButton({auth}) {
    const dropdownRef = useRef(null);
    const clickMenuRef = useRef(false)
    const dispatch = useDispatch();
    const [ isActive, setIsActive ] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive)
    };
    useEffect(() => {
        const pageClickEvent = (e) => {
            if ((isActive) && (!clickMenuRef.current)) {
                clickMenuRef.current = !clickMenuRef.current;
            } else if ((isActive) && (clickMenuRef.current)) {
                clickMenuRef.current = !clickMenuRef.current;
                setIsActive(!isActive)
            }
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
                            <li><NavLink onClick={()=>{dispatch(logout())}} to='/'>Logout</NavLink></li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <NavLink className="user-icon neumorphism" to="/login">
                    Log In
                </NavLink>
            )}
        </div>
    )
};

export default LoginButton
