import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { exchangeToken } from '../../state/actionCreators/authAC';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

function AdmitPage() {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(exchangeToken());
    }, []);
    return (
        <div className="admin-page">
            {auth.isAdmin ? (
                <div className="admin-page-wrapper">
                    <div className="admin-page-navbar">
                        <button
                            className="neumorphism-btn"
                            onClick={() => navigate(-1)}
                        >
                            Go Back
                        </button>
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
