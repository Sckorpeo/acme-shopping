const axios = require('axios');

const getAllCoupons = () => {
    return axios.get('/api/coupon', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

const deleteCoupon = (couponId) => {
    return axios.delete(`/api/coupon/${couponId}`, {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

const addCoupon = (coupon) => {
    return axios.post('/api/coupon', coupon, {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

const getCoupon = (name) => {
    return axios.get(`/api/coupon/${name}`);
};

export { getAllCoupons, deleteCoupon, addCoupon, getCoupon };
