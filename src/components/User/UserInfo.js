import { exchangeToken, logout } from '../../state/actionCreators/authAC';
import { emptyCart } from '../../state/actionCreators/cartAC';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, loadUser } from '../../state/actionCreators/usersAC';
import './UserInfo.css';

function UserInfo() {
    const dispatch = useDispatch();
    const picRef = useRef(null);
    const [editMode, setEditMode] = useState(false);
    const { auth } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);
    const [editForm, setEditForm] = useState(users[0]);

    // useEffect(() => {
    //     dispatch(exchangeToken());
    //     // dispatch(loadUser());
    //     if (editMode && picRef.current) {
    //         picRef.current.addEventListener('change', (ev) => {
    //             const file = (ev.target.files[0])
    //             const reader = new FileReader();
    //
    //             // reading the binary data and encoding that as base64 data url
    //             reader.readAsDataURL(file);
    //
    //             reader.addEventListener('load', () => {
    //                 dispatch(editUser({avatar:reader.result}))
    //             });
    //         })
    //     }
    // },[]);

    const toggleEdit = () => {
        setEditMode(!editMode);
    };

    const handleChange = (ev) => {
        setEditForm((oldValues) => ({
            ...oldValues,
            [ev.target.name]: ev.target.value,
        }));
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (ev.target.avatar.files[0]) {
            const file = ev.target.avatar.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', () => {
                dispatch(editUser({ ...editForm, avatar: reader.result }));
            });
        } else {
            dispatch(editUser({ ...editForm, avatar: users[0].avatar }));
        }
        setEditMode(false);
    };

    const editBody = (
        <div>
            <div className="user-info-header">
                <div className="user-info-header-title">{`Welcome, ${auth.username}`}</div>
                <div>
                    <input type="submit" form="edit-form" value="Save" />
                </div>
                <div>
                    <button type="button" onClick={toggleEdit}>
                        Cancel
                    </button>
                </div>
            </div>
            {/*<input type='file' ref={picRef} />*/}
            {users.map((user) => {
                return (
                    <div className="user-edit-content" key={user.id}>
                        <form
                            className="user-edit-form"
                            id="edit-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="user-edit-image-wrapper">
                                {!!user.avatar && (
                                    <img
                                        className="user-avatar"
                                        src={user.avatar}
                                    />
                                )}
                                <h4>
                                    Avatar:{' '}
                                    <input
                                        id="avatar"
                                        name="avatar"
                                        type="file"
                                        ref={picRef}
                                        onChange={handleChange}
                                    />
                                </h4>
                            </div>
                            <h4>
                                Username:{' '}
                                <input
                                    className="neumorphism-input"
                                    id="username"
                                    name="username"
                                    value={editForm.username}
                                    onChange={handleChange}
                                />
                            </h4>
                            <h4>
                                Email:{' '}
                                <input
                                    className="neumorphism-input"
                                    id="email"
                                    name="email"
                                    value={
                                        editForm.email === null
                                            ? ''
                                            : editForm.email
                                    }
                                    onChange={handleChange}
                                />
                            </h4>
                            <h4>
                                Phone:{' '}
                                <input
                                    className="neumorphism-input"
                                    id="phone"
                                    name="phone"
                                    value={
                                        editForm.phone === null
                                            ? ''
                                            : editForm.phone
                                    }
                                    onChange={handleChange}
                                />
                            </h4>
                            <h4>
                                Address:{' '}
                                <input
                                    className="neumorphism-input"
                                    id="address"
                                    name="address"
                                    value={
                                        editForm.address === null
                                            ? ''
                                            : editForm.address
                                    }
                                    onChange={handleChange}
                                />
                            </h4>
                        </form>
                    </div>
                );
            })}
        </div>
    );

    const mainBody = auth.id ? (
        <div>
            <div className="user-info-header">
                <div className="user-info-header-title">{`Welcome, ${auth.username}`}</div>
                <div>
                    <button type="button" onClick={toggleEdit}>
                        Edit
                    </button>
                </div>
            </div>
            {/*<input type='file' ref={picRef} />*/}
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {!!user.avatar && (
                            <img className="user-avatar" src={user.avatar} />
                        )}
                        <h4>
                            Username:{' '}
                            <input
                                className="neumorphism-input"
                                value={user.username}
                                disabled={true}
                            />
                        </h4>
                        <h4>
                            Email:
                            <input
                                className="neumorphism-input"
                                id="email"
                                name="email"
                                value={user.email === null ? '' : user.email}
                                disabled={true}
                            />
                        </h4>
                        <h4>
                            Phone:{' '}
                            <input
                                className="neumorphism-input"
                                id="phone"
                                name="phone"
                                value={
                                    editForm.phone === null
                                        ? ''
                                        : editForm.phone
                                }
                                disabled={true}
                            />
                        </h4>
                        <h4>
                            Address:{' '}
                            <input
                                className="neumorphism-input"
                                id="address"
                                name="address"
                                value={
                                    editForm.address === null
                                        ? ''
                                        : editForm.address
                                }
                                disabled={true}
                            />
                        </h4>
                    </div>
                );
            })}
        </div>
    ) : (
        <Navigate to="/login" />
    );

    if (editMode) {
        return editBody;
    } else {
        return mainBody;
    }
}

export default UserInfo;
