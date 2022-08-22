import React from 'react';
import { useEffect, useState } from 'react';
import { apiCreateUser } from '../../api/user';
import './SignUp.css';

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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
        } catch (ex) {
            console.log(ex.response.data.error.errors[0].message);
        }
    };
    return (
        <div className="sign-up-wrapper">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name*</label>
                    <input
                        value={firstName}
                        onChange={(ev) => setFirstName(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Last Name*</label>
                    <input
                        value={lastName}
                        onChange={(ev) => setLastName(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Middle Name</label>
                    <input
                        value={middleName}
                        onChange={(ev) => setMiddleName(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Username*</label>
                    <input
                        value={username}
                        onChange={(ev) => setUsername(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Password*</label>
                    <input
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Email*</label>
                    <input
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        value={address}
                        onChange={(ev) => setAddress(ev.target.value)}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        value={phone}
                        onChange={(ev) => setPhone(ev.target.value)}
                    />
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
