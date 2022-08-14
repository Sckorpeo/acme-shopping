const axios = require('axios');

//Auth

const apiGetAuth = (token) => {
    return axios.get('/api/sessions', {
        headers: {
            authorization: token,
        },
    });
};

const apiSetAuth = (credentials) => {
    return axios.post('/api/sessions', credentials);
};

//Products

const apiGetProducts = () => {
    return axios.get('/api/products');
};

const apiGetProduct = (productId) => {
    return axios.get(`/api/products/${productId}`);
};

//Cart

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

export {
    apiGetAuth,
    apiSetAuth,
    apiGetCart,
    apiGetProducts,
    apiAddToCart,
    apiGetProduct,
};
