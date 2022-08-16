const axios = require('axios');

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

export {
    apiGetAuth,
    apiSetAuth
};