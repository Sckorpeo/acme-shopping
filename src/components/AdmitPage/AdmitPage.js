import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { exchangeToken } from '../../state/actionCreators/authAC';

function AdmitPage() {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(exchangeToken());
        console.log(1);
    }, []);
    return (
        <div>
            {auth.isAdmin ? (
                <div>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'admin-nav-link-active'
                                : 'neumorphism-btn'
                        }
                        to="users"
                    >
                        Users
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'admin-nav-link-active'
                                : 'neumorphism-btn'
                        }
                        to="products"
                    >
                        Products
                    </NavLink>
                    <div>
                        <Outlet />
                    </div>
                </div>
            ) : (
                <Navigate to="/" />
            )}
        </div>
    );
}

export default AdmitPage;
