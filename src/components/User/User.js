import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken, logout } from '../../state/actionCreators/authAC';
import { Navigate } from 'react-router-dom';
import { emptyCart } from '../../state/actionCreators/cartAC';
import { loadUser, editUser } from '../../state/actionCreators/usersAC';

function User() {
    const dispatch = useDispatch();
    const picRef = useRef(null);
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
                                {/*{!! user.avatar && <img src={`data:image/png;base64,${user.avatar}`} />}*/}
                                {!! user.avatar && <img src={user.avatar} />}
                                <h1>{user.username}</h1>
                                <h1>user image</h1>
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
