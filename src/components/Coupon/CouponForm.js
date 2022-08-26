import React from 'react';
import { useDispatch } from 'react-redux';
import { addCoupon } from '../../state/actionCreators/couponAC';

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
        <form onSubmit={handleSubmit}>
            <input name="name" />
            <input name="rate" type="number" />
            <button> Add Coupon</button>
        </form>
    );
};

export default CouponForm;
