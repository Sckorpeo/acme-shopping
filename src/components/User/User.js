import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken, logout } from '../../state/actionCreators/authAC';
import { Navigate } from 'react-router-dom';
import { emptyCart } from '../../state/actionCreators/cartAC';

function User() {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(exchangeToken());
    }, []);

    return (
        <div>
            {auth.id ? (
                <div>
                    <h1>{`Welcome, ${auth.username}`}</h1>
                    <button
                        onClick={() => {
                            dispatch(logout());
                            dispatch(emptyCart());
                        }}
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    );
}

export default User;
