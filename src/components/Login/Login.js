import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../state/actionCreators/authAC';
import { Navigate } from 'react-router-dom';
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
        <div>
            {auth.id ? (
                <Navigate to="/" />
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="username"
                        value={username}
                        onChange={(ev) => setUsername(ev.target.value)}
                    />
                    <input
                        placeholder="password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <button>Login</button>
                </form>
            )}
        </div>
    );
}

export default Login;
