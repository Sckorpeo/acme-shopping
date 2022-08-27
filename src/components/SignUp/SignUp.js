import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiCreateUser } from '../../api/user';
import './SignUp.css';
import {login} from "../../state/actionCreators/authAC";

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            await apiCreateUser({
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                username: username,
                password: password,
                address: address,
                phone: phone,
                email: email,
            });
            dispatch(login({username, password}));
            navigate('/')
        } catch (ex) {
            console.log(ex.response.data.error.errors[0].message);
        }
    };
    return (
        <div className="sign-up-wrapper">
            <form className="neumorphism" onSubmit={handleSubmit}>
                <div>
                    <label>First Name*</label>
                    <input
                        className="neumorphism-input"
                        value={firstName}
                        onChange={(ev) => setFirstName(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Last Name*</label>
                    <input
                        className="neumorphism-input"
                        value={lastName}
                        onChange={(ev) => setLastName(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Middle Name</label>
                    <input
                        className="neumorphism-input"
                        value={middleName}
                        onChange={(ev) => setMiddleName(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Username*</label>
                    <input
                        className="neumorphism-input"
                        value={username}
                        onChange={(ev) => setUsername(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Password*</label>
                    <input
                        type='password'
                        className="neumorphism-input"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Email*</label>
                    <input
                        className="neumorphism-input"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        className="neumorphism-input"
                        value={address}
                        onChange={(ev) => setAddress(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        className="neumorphism-input"
                        value={phone}
                        onChange={(ev) => setPhone(ev.target.value)}
                    />
                </div>
                <button
                    className="neumorphism-btn"
                    disabled={
                        !firstName ||
                        !lastName ||
                        !username ||
                        !password ||
                        !email
                    }
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp;
