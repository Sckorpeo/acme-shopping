import React, { useEffect, useState } from 'react';
import { apiGetUserIconUsername } from '../../api/user';
import StarRatingReadOnly from '../StarRating/StarRatingReadOnly';

function UserRate(props) {
    const rate = props.rate;
    const [user, setUser] = useState('');

    const fetchData = async () => {
        const response = await apiGetUserIconUsername(rate.userId);
        console.log(response);
        setUser(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="user-rating">
            <div className="user-rating-user-wrapper">
                <img src={user.avatar} />
                <div className="user-rating-content">
                    <p>{user.username}</p>
                    <StarRatingReadOnly rate={rate.value} />
                </div>
            </div>
            <p>
                {rate.comment ? rate.comment : 'User did not leave a comment'}
            </p>
        </div>
    );
}

export default UserRate;
