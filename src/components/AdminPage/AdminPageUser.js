import React, { useEffect, useState } from 'react';
import { apiAdminGetUsers } from '../../api/user';

function AdminPageUser() {
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
                <p>{user.firstName}</p>
            ))}
        </div>
    );
}
export default AdminPageUser;
