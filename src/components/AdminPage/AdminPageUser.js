import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiAdminGetUser } from '../../api/user';
import { useNavigate } from 'react-router-dom';

function AdminPageUser() {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await apiAdminGetUser(userId);
        setUser(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="admin-page-user-wrapper">
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div className="admin-page-user-card neumorphism">
                <img src={user.avatar} />
                <div>
                    <p>First Name: {user.firstName}</p>
                    {user.middleName ? (
                        <p>Middle Name: {user.middleName}</p>
                    ) : null}
                    <p>Last Name: {user.lastName}</p>
                    <p>username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {user.phone ? <p>Phone: {user.phone}</p> : null}
                    {user.address ? <p>Address: {user.address}</p> : null}
                </div>
            </div>
        </div>
    );
}

export default AdminPageUser;
