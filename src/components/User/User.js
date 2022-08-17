import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken, logout } from '../../state/actionCreators/authAC';
import { Navigate } from 'react-router-dom';
import { emptyCart } from '../../state/actionCreators/cartAC';
import { loadUser } from '../../state/actionCreators/usersAC'


function User() {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    const { users } = useSelector(state => state.users);
    useEffect(() => {
        dispatch(exchangeToken());
        dispatch(loadUser());
        console.log(users)
    }, []);
    return (
        <div>
            {auth.id ? (
                <div>
                    <h1>{`Welcome, ${auth.username}`}</h1>
                    <ul>{users.map(user => {
                        return (
                            <div>
                                <li>{user.username}</li>
                                <li>user image</li>
                            </div>
                        )
                    })}
                    </ul>
                    <button onClick={() => { dispatch(logout())dispatch(emptyCart()); }}>
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
