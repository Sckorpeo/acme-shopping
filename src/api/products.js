const axios = require('axios');

const apiGetProducts = () => {
    return axios.get('/api/products');
};

const apiGetProduct = (productId) => {
    return axios.get(`/api/products/${productId}`);
};

const apiGetProductCategory = (categoryId) => {
    return axios.get(`/api/products/category/${categoryId}`);
};

const apiGetProductRatings = (productId) => {
    return axios.get(`/api/products/${productId}/rating`);
};

const apiAdminAddProduct = (product) => {
    return axios.post('/api/products', product, {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

const apiAdminDeleteProduct = (productId) => {
    return axios.delete(`/api/products/${productId}`, {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

const apiAdminEditProduct = (productId, params) => {
    return axios.put(`/api/products/${productId}`, params, {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

export {
    apiGetProducts,
    apiGetProduct,
    apiGetProductCategory,
    apiGetProductRatings,
    apiAdminAddProduct,
    apiAdminDeleteProduct,
    apiAdminEditProduct,
};
