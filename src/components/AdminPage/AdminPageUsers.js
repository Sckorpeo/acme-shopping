import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { apiAdminGetUsers } from '../../api/user';

function AdminPageUsers() {
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        const response = await apiAdminGetUsers();
        setUsers(response);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {users.map((user) => (
                <NavLink to={`${user.id}`}>{user.username}</NavLink>
            ))}
        </div>
    );
}
export default AdminPageUsers;
