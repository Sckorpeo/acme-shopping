const axios = require('axios');

const apiGetCart = () => {
    return axios.get('/api/orders/cart', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

const apiAddToCart = (productInfo) => {
    return axios.put('/api/orders/cart', productInfo, {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

const apiOrderSuccess = () => {
    return axios.get('/api/orders/success', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

export { apiGetCart, apiAddToCart, apiOrderSuccess };
