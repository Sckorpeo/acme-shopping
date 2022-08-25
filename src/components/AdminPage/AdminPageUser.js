import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiAdminGetUser } from '../../api/user';

function AdminPageUser() {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    const fetchData = async () => {
        const response = await apiAdminGetUser(userId);
        setUser(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <p>First Name: {user.firstName}</p>
            {user.middleName ? <p>Middle Name: {user.middleName}</p> : null}
            <p>Last Name: {user.lastName}</p>
            <p>username: {user.username}</p>
            <p>Email: {user.email}</p>
            {user.phone ? <p>Phone: {user.phone}</p> : null}
            {user.address ? <p>Address: {user.address}</p> : null}
        </div>
    );
}

export default AdminPageUser;
