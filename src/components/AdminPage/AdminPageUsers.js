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
        <div className="admin-page-users">
            {users.map((user) => (
                <NavLink
                    className="admin-page-user-item-wrapper neumorphism-btn"
                    to={`${user.id}`}
                    key={user.id}
                >
                    <div>
                        <img src={user.avatar} />
                        <p>{user.username}</p>
                    </div>
                </NavLink>
            ))}
        </div>
    );
}
export default AdminPageUsers;
