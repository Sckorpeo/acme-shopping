const axios = require('axios');

const getAllCoupons = () => {
    return axios.get('/api/coupon', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

const deleteCoupon = (couponId) => {
    return axios.delete(`/api/coupon/${couponId}`);
};

const addCoupon = (coupon) => {
    return axios.post('/api/coupon', coupon);
};

const getCoupon = (name) => {
    return axios.get(`/api/coupon/${name}`);
};

export { getAllCoupons, deleteCoupon, addCoupon, getCoupon };
