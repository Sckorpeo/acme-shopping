import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {exchangeToken, login} from '../../state/actionCreators/authAC';
import {editUser} from '../../state/actionCreators/usersAC';

function UserSecurity(){
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector((state) => state.auth);
    useEffect(()=>{
        dispatch(exchangeToken());
    },[]);
    const handleChange = (ev) => {
        console.log(ev.target)
        if (ev.target.name==='oldPassword') {
            setOldPassword(ev.target.value)
        } else if (ev.target.name==='newPassword') {
            setNewPassword(ev.target.value)
        }
    };
    const handleSubmit = (ev) => {
        ev.preventDefault();
        const oldCredentials = {username:auth.username, password:oldPassword}
        const newCredentials = {...auth, username:auth.username, password:newPassword}
        dispatch(login(oldCredentials));
        dispatch(editUser(newCredentials));
        alert('Password changed!')
        navigate('/user/info')
    }
    const handleClear = () => {
        setOldPassword('');
        setNewPassword('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Old Password</label>
                <input type='text' id='oldPassword' name='oldPassword' value={oldPassword} onChange={handleChange}/>
                <input type='text' id='newPassword' name='newPassword' value={newPassword} onChange={handleChange}/>
                <button type='submit' onClick={handleSubmit}>Save</button>
                <button type='button' onClick={handleClear}>Clear</button>
            </form>
        </div>
    )
};

export default UserSecurity;