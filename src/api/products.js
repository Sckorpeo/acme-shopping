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

export {
    apiGetProducts,
    apiGetProduct,
    apiGetProductCategory,
    apiGetProductRatings,
};
