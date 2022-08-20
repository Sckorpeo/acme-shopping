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
    await axios.get('/api/products/seed', {
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
