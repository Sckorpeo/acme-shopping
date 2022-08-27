import React from 'react';
import { useDispatch } from 'react-redux';
import { addCoupon } from '../../state/actionCreators/couponAC';
import './CouponForm.css';

const CouponForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (ev) => {
        ev.preventDefault();
        const formData = {
            name: ev.target.name.value,
            rate: ev.target.rate.value,
        };
        dispatch(addCoupon(formData));
        ev.target.name.value = '';
        ev.target.rate.value = '';
    };
    return (
        <form onSubmit={handleSubmit} className="couponForm">
            <input
                name="name"
                className="neumorphism-input"
                placeholder="Code"
            />
            <input
                name="rate"
                type="number"
                className="neumorphism-input"
                placeholder="Rate"
            />
            <button className="neumorphism-btn"> Add Coupon</button>
        </form>
    );
};

export default CouponForm;
