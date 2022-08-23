const axios = require("axios");

const apiGetWishList = async () => {
    const res = await axios.get('/api/user/wishlist', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        }
    });
    console.log(res);
    return res.data;
};

export {
    apiGetWishList
};