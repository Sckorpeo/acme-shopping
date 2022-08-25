import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeToken, login } from '../../state/actionCreators/authAC';
import { editUser } from '../../state/actionCreators/usersAC';

function UserSecurity() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(exchangeToken());
    }, []);
    const handleChange = (ev) => {
        console.log(ev.target);
        if (ev.target.name === 'oldPassword') {
            setOldPassword(ev.target.value);
        } else if (ev.target.name === 'newPassword') {
            setNewPassword(ev.target.value);
        }
    };
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const oldCredentials = {
            username: auth.username,
            password: oldPassword,
        };
        const newCredentials = {
            ...auth,
            username: auth.username,
            password: newPassword,
        };
        try {
            await dispatch(login(oldCredentials));
            await dispatch(editUser(newCredentials));
            alert('Password changed!');
            navigate('/user/info');
        } catch (ex) {
            console.log('User typed in bad credentials');
        }
    };
    const handleClear = () => {
        setOldPassword('');
        setNewPassword('');
    };
    return (
        <div>
            <form className="user-change-password-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="oldPassword">Old Password</label>
                    <input
                        className="neumorphism-input"
                        type="text"
                        id="oldPassword"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        className="neumorphism-input"
                        type="text"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="user-change-password-buttons">
                    <button
                        className="neumorphism-btn"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                    <button
                        className="neumorphism-btn"
                        type="button"
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserSecurity;
