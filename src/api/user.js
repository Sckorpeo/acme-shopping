const axios = require("axios");

const apiGetUser = async () => {
    const res = await axios.get('/api/user', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
    return res.data;
};

const apiGetUsers = async () => {
    const res = await axios.get('/api/user/all', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        }
    });
    return res.data;
};

export {
    apiGetUser,
    apiGetUsers
};