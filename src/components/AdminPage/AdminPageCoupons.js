import React from 'react';
import { useSelector } from 'react-redux';
import CouponForm from '../Coupon/CouponForm';

function AdminProductForm() {
    const { coupons } = useSelector((state) => state.coupons);
    return (
        <div>
            <CouponForm />
            {coupons.map((coupon) => (
                <div key={coupon.id}>
                    <p>{coupon.name}</p>
                    <p>{coupon.rate}</p>
                </div>
            ))}
        </div>
    );
}

export default AdminProductForm;
