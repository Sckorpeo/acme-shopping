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
    });

    return <p>{user.firstName}</p>;
}

export default AdminPageUser;
