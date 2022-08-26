import React, { useEffect, useState } from 'react';
import { getAllCoupons, deleteCoupon, addCoupon } from '../../api/coupon';

function AdminProductForm() {
    const [coupons, couponsCoupons] = useState([]);
    const fetchData = async () => {
        const response = await getAllCoupons();
        setCoupons(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {coupons.map((coupon) => (
                <div>
                    <p>{coupon.name}</p>
                    <p>{coupon.rate}</p>
                </div>
            ))}
        </div>
    );
}

export default AdminProductForm;
