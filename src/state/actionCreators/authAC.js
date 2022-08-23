import { apiGetAuth, apiSetAuth } from '../../api';

const login = (credentials) => {
    return async (dispatch) => {
        try {
            let response = await apiSetAuth(credentials);
            const {token} = response.data;
            window.localStorage.setItem('token', token);
            response = await apiGetAuth(token);
            console.log(response.data);
            const auth = response.data;
            dispatch({type: 'SET_AUTH', auth: auth});
        } catch (ex) {
            alert('Invalid login information!')
            console.log(ex);
        }
    }
};

const logout = () => {
    return (dispatch) => {
        window.localStorage.removeItem('token');
        dispatch({ auth: {}, type: 'SET_AUTH' });
    };
};

const exchangeToken = () => {
    return async (dispatch) => {
        const token = window.localStorage.getItem('token');
        if (token) {
            const response = await apiGetAuth(token);
            const auth = response.data;
            dispatch({ type: 'SET_AUTH', auth: auth });
        }
    };
};

export { login, logout, exchangeToken };
