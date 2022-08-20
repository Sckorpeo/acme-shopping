import React from 'react';
import {Outlet} from 'react-router-dom';
import './User.css';
import UserNavBar from './UserNavBar';

function User() {
    return (
        <div className='user-wrapper'>
            <div className='user-nav-bar'>
                <UserNavBar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default User;
