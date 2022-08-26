import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { exchangeToken } from '../../state/actionCreators/authAC';
import './AdminPage.css';

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
                <div className="admin-page-wrapper">
                    <div className="admin-page-navbar">
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
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'admin-nav-link-active'
                                    : 'neumorphism-btn'
                            }
                            to="addProduct"
                        >
                            Add Product
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'admin-nav-link-active'
                                    : 'neumorphism-btn'
                            }
                            to="coupons"
                        >
                            Coupon
                        </NavLink>
                    </div>
                    <div className="admin-page-content">
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
