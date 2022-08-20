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

    const toggleEdit = () => {
        setEditMode(!editMode)
    }

    const editBody = (
        <div>
            <div className='user-info-header'>
                <div className='user-info-header-title'>{`Welcome, ${auth.username}`}</div>
                <div><button onClick={toggleEdit}>Back</button></div>
            </div>
            <input type='file' ref={picRef} />
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {!! user.avatar && <img className='user-avatar' src={user.avatar} />}
                        <h4>Username: {user.username}</h4>
                        <h4>Password: ***************</h4>
                        <h4>Email: {user.email}</h4>
                        <h4>Phone: {user.phone}</h4>
                        <h4>Address: {user.address}</h4>
                        <h4>Credit Card: {user.creditCard}</h4>
                    </div>
                );
            })}
        </div>
    )

    const mainBody = auth.id ? (
        <div>
            <div className='user-info-header'>
                <div className='user-info-header-title'>{`Welcome, ${auth.username}`}</div>
                <div><button onClick={toggleEdit}>Edit</button></div>
            </div>
            {/*<input type='file' ref={picRef} />*/}
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {!! user.avatar && <img className='user-avatar' src={user.avatar} />}
                        <h4>Username: {user.username}</h4>
                        <h4>Password: ***************</h4>
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