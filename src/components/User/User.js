import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken, logout } from '../../state/actionCreators/authAC';
import { Navigate } from 'react-router-dom';
import { emptyCart } from '../../state/actionCreators/cartAC';
import { loadUser, editUser } from '../../state/actionCreators/usersAC';
import './User.css'

function User() {
    const dispatch = useDispatch();
    const picRef = useRef(null);
    const [ editMode, setEditMode ] = useState(false);
    const { auth } = useSelector(state => state.auth);
    const { users } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(exchangeToken());
        dispatch(loadUser());
        if (picRef.current) {
            picRef.current.addEventListener('change', (ev) => {
                const file = (ev.target.files[0])
                const reader = new FileReader();

                // reading the binary data and encoding that as base64 data url
                reader.readAsDataURL(file);

                reader.addEventListener('load', () => {
                    dispatch(editUser({avatar:reader.result}))
                });
            })
        }
    },[]);
    return (
        <div>
            {auth.id ? (
                <div>
                    <h1>{`Welcome, ${auth.username}`}</h1>
                    <input type='file' ref={picRef} />
                    {users.map((user) => {
                        return (
                            <div key={user.id}>
                                {!! user.avatar && <img className='user-avatar' src={user.avatar} />}
                                <h4>Username: {user.username}</h4>
                                <h4>Password: {user.password}<input type="checkbox" /><span className='small-password'>Show Password</span></h4>
                                <h4>Email: {user.email}</h4>
                                <h4>Phone: {user.phone}</h4>
                                <h4>Credit Card: {user.creditCard}</h4>
                            </div>
                        );
                    })}
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
