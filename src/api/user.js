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

const apiEditUser = async (user) => {
    const editedUser = await axios.put('/api/user',
        user,
        {
            headers: {
                authorization: window.localStorage.getItem('token'),
            }
        });
    return editedUser;
}

export {
    apiGetUser,
    apiGetUsers,
    apiEditUser
};