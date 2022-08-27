import { getAllCoupons, apiAddCoupon, apiGetCoupon } from '../../api/coupon';

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

const getCoupon = (couponName) => {
    return async (disptach) => {
        const { data } = (await apiGetCoupon(couponName)) || {};
        disptach({
            type: 'GET_COUPON',
            coupon: data,
        });
    };
};

export { fetchCoupons, addCoupon, getCoupon };
