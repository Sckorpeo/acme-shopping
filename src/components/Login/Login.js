import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../state/actionCreators/authAC';
import { Navigate, NavLink } from 'react-router-dom';
import { exchangeToken } from '../../state/actionCreators/authAC';
import { loadUser } from '../../state/actionCreators/usersAC';

function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { auth } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(exchangeToken());
        dispatch(loadUser());
    }, [auth.id]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const credentials = { username: username, password: password };
        dispatch(login(credentials));
    };

    return (
        <div className="login-wrapper">
            {auth.id ? (
                auth.isAdmin ? (
                    <Navigate to="/admin" />
                ) : (
                    <Navigate to="/" />
                )
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                        className="neumorphism-input"
                        value={username}
                        onChange={(ev) => setUsername(ev.target.value)}
                    />
                    <label>Password</label>
                    <input
                        className="neumorphism-input"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <NavLink to="/signup">Don't have a account?</NavLink>
                    <button className="neumorphism-btn">Login</button>
                </form>
            )}
        </div>
    );
}

export default Login;
