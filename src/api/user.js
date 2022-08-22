const axios = require('axios');

const apiGetUser = async () => {
    const res = await axios.get('/api/user', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
    return res.data;
};

const apiAdminGetUsers = async () => {
    const res = await axios.get('/api/user/all', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
    return res.data;
};

const apiEditUser = async (user) => {
    const editedUser = await axios.put('/api/user', user, {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
    return editedUser;
};

const apiCreateUser = async (user) => {
    const res = await axios.post('/api/user', user);
    return res;
};

export { apiGetUser, apiAdminGetUsers, apiEditUser, apiCreateUser };
