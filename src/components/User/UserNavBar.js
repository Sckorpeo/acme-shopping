import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserNavBar.css';
import { logout } from '../../state/actionCreators/authAC';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../state/actionCreators/cartAC';

function UserNavBar() {
    const dispatch = useDispatch();
    return (
        <nav className="user-nav-bar">
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'user-link-active' : 'neumorphism-btn'
                }
                to="info"
            >
                User Info
            </NavLink>
            <hr className="splitter" />
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'user-link-active' : 'neumorphism-btn'
                }
                to="security"
            >
                Security
            </NavLink>
            <hr className="splitter" />
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'user-link-active' : 'neumorphism-btn'
                }
                to="orders"
            >
                Past Orders
            </NavLink>
            <hr className="splitter" />
            {/* <NavLink
                className="neumorphism-with-border"
                onClick={() => {
                    dispatch(logout());
                    dispatch(emptyCart());
                }}
                to="/"
            >
                Logout
            </NavLink> */}
        </nav>
    );
}

export default UserNavBar;
