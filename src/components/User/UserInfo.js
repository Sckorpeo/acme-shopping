import {exchangeToken, logout} from "../../state/actionCreators/authAC";
import {emptyCart} from "../../state/actionCreators/cartAC";
import {Navigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editUser, loadUser} from "../../state/actionCreators/usersAC";
import './UserInfo.css';

function UserInfo() {
    const dispatch = useDispatch();
    const picRef = useRef(null);
    const [ editMode, setEditMode ] = useState(false);
    const { auth } = useSelector(state => state.auth);
    const { users } = useSelector(state => state.users);
    const [ editForm, setEditForm ] = useState(users[0]);

    useEffect(() => {
        dispatch(exchangeToken());
        // dispatch(loadUser());
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

    const toggleEdit = () => {
        console.log(!editMode)
        setEditMode(!editMode)
        console.log(editMode)
    }

    const handleChange = (ev) => {
        setEditForm(oldValues=>({
            ...oldValues,
            [ev.target.name]: ev.target.value
        }))
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(editUser(editForm));
        setEditMode(false);
    }

    const editBody = (
        <div>
            <div className='user-info-header'>
                <div className='user-info-header-title'>{`Welcome, ${auth.username}`}</div>
                <div><input type='submit' form='edit-form' value='Save' /></div>
                <div><button type='button' onClick={toggleEdit}>Cancel</button></div>
            </div>
            <input type='file' ref={picRef} />
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <form id='edit-form' onSubmit={handleSubmit}>
                            {!! user.avatar && <img className='user-avatar' src={user.avatar} />}
                            <h4>Username: <input id='username' name='username' value={editForm.username} onChange={handleChange} /></h4>
                            <h4>Email: <input id='email' name='email' value={editForm.email === null ? '' : editForm.email} onChange={handleChange} /></h4>
                            <h4>Phone: <input id='phone' name='phone' value={editForm.phone === null ? '' : editForm.phone} onChange={handleChange} /></h4>
                            <h4>Address: <input id='address' name='address' value={editForm.address === null ? '' : editForm.address} onChange={handleChange} /></h4>
                            <h4>Credit Card: <input id='creditCard' name='creditCard' value={editForm.creditCard === null ? '' : editForm.creditCard} onChange={handleChange} /></h4>
                        </form>
                    </div>
                );
            })}
        </div>
    )

    const mainBody = auth.id ? (
        <div>
            <div className='user-info-header'>
                <div className='user-info-header-title'>{`Welcome, ${auth.username}`}</div>
                <div><button type='button' onClick={toggleEdit}>Edit</button></div>
            </div>
            {/*<input type='file' ref={picRef} />*/}
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {!! user.avatar && <img className='user-avatar' src={user.avatar} />}
                        <h4>Username: {user.username}</h4>
                        <h4>Email: {user.email}</h4>
                        <h4>Phone: {user.phone}</h4>
                        <h4>Address: {user.address}</h4>
                        <h4>Credit Card: {user.creditCard}</h4>
                    </div>
                );
            })}
        </div>
    ) : (
        <Navigate to="/login" />
    )

    if (editMode) {
        return editBody;
    } else {
        return mainBody;
    }
}

export default UserInfo;