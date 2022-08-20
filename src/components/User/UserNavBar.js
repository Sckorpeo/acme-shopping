import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserNavBar.css';
import {logout} from "../../state/actionCreators/authAC";
import {useDispatch} from "react-redux";
import {emptyCart} from "../../state/actionCreators/cartAC";

function UserNavBar() {
    const dispatch = useDispatch();
    return (
        <nav class='user-nav-bar'>
            <NavLink to='info'>User Info</NavLink>
            <NavLink to='orders'>Past Orders</NavLink>
            <NavLink onClick={()=>{
                dispatch(logout());
                dispatch(emptyCart())
            }} to='/'>Logout</NavLink>
        </nav>
    )
};

export default UserNavBar;