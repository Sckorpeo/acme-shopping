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

const apiGetProductCategory = (categoryId) => {
    return axios.get(`/api/products/category/${categoryId}`);
};

//Cart

const apiGetCart = () => {
    return axios.get('/api/orders/cart', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

const apiAddToCart = (product, quantity) => {
    return axios.put('/api/orders/cart', {product, quantity}, {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

export {
    apiGetAuth,
    apiSetAuth,
    apiGetProducts,
    apiGetProduct,
    apiGetProductCategory,
    apiGetCart,
    apiAddToCart,
};
