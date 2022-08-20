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

const seedProductData = async () => {
    console.log(window.localStorage.getItem('token'));
    console.log('In the api request');
    axios.get('/api/products/seed', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
};

export {
    apiGetProducts,
    apiGetProduct,
    apiGetProductCategory,
    seedProductData,
};
