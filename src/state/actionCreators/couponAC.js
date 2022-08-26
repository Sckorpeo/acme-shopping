import { getAllCoupons, apiAddCoupon } from '../../api/coupon';

const fetchCoupons = () => {
    return async (dispatch) => {
        const { data } = await getAllCoupons();
        dispatch({
            type: 'SET_COUPONS',
            coupons: data,
        });
    };
};

const addCoupon = (coupon) => {
    return async (dispatch) => {
        const { data } = await apiAddCoupon(coupon);
        dispatch({
            type: 'ADD_COUPON',
            coupon: data,
        });
    };
};

export { fetchCoupons, addCoupon };
