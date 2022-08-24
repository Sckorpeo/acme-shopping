const axios = require("axios");

const apiGetWishList = async () => {
    const res = await axios.get('/api/user/wishlist', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        }
    });
    return res.data;
};

const apiAddToWishList = async (product, incrementBy) => {
    const res = await axios.put('/api/user/wishList', {product, incrementBy}, {
        headers: {
            authorization: window.localStorage.getItem('token')
        }
    });
    return res.data;
};

export {
    apiGetWishList,
    apiAddToWishList
};