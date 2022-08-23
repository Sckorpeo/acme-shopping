import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiCall = async () => {
    const token = window.localStorage.getItem('token');
    const { data } = await axios.get('/api/orders/all', {
        headers: {
            authorization: token,
        },
    });
    return data;
};

function UserOrders() {
    const [data, setData] = useState([]);

    useEffect(() => {
        apiCall().then((data) => {
            setData(data);
            console.log(data);
        });
    }, []);

    const content = data.map((order) => {
        return (
            <div key={order.id}>
                <h3>{order.id}</h3>
                <ul>
                    {order.lineItems.map((lineItem) => {
                        return (
                            <li key={lineItem.id}>
                                {lineItem.product.name} ({lineItem.quantity})
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    });
    return (
        <div>
            user orders
            {content}
        </div>
    );
}

export default UserOrders;
