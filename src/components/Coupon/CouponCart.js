import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { priceReducer } from '../../util/reducers';
import { getCoupon } from '../../state/actionCreators/couponAC';

const CouponCart = () => {
    const { cart } = useSelector((state) => state.cart);
    const { selectedCoupon } = useSelector((state) => state.coupons);
    const dispatch = useDispatch();
    const price = priceReducer(cart);
    const discount = Number.parseFloat(
        (selectedCoupon.rate * price) / 100
    ).toFixed(2);
    const discountPrice = Number.parseFloat(
        ((100 - selectedCoupon.rate) * price) / 100
    ).toFixed(2);
    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(getCoupon(ev.target.name.value));
        ev.target.name.value = '';
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name"></input>
                <button>Apply</button>
            </form>
            <div>
                {selectedCoupon.name
                    ? `${selectedCoupon.name} Applied`
                    : 'No Coupon Applied'}
            </div>
            {selectedCoupon.rate ? <div>Discount: -${discount}</div> : null}
            {selectedCoupon.rate ? (
                <div>New Subtotal: ${discountPrice}</div>
            ) : null}
        </div>
    );
};

export default CouponCart;
