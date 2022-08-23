import { apiGetUser, apiGetUsers, apiEditUser } from '../../api';

// Action Types
const LOAD_USER = 'LOAD_USER';
const LOAD_USERS = 'LOAD_USERS';
const CREATE_USER = 'CREATE_USER';
const REMOVE_USER = 'REMOVE_USER';
const REMOVE_USER_BY_ID = 'REMOVE_USER_BY_ID';
const EDIT_USER = 'EDIT_USER';

// Action Creators
const _loadUser = (user) => {
    return {
        type: LOAD_USER,
        payload: user, // Object (row in database)
    };
};

const _loadUsers = (users) => {
    return {
        type: LOAD_USERS,
        payload: users, // Array of objects
    };
};

const _createUser = (user) => {
    return {
        type: CREATE_USER,
        payload: user,
    };
};

const _removeUser = (user) => {
    return {
        type: REMOVE_USER,
        payload: user,
    };
};

const _removeUserById = (userId) => {
    return {
        type: REMOVE_USER_BY_ID,
        payload: userId,
    };
};

const _editUser = (user) => {
    return {
        type: EDIT_USER,
        payload: user,
    };
};

// Thunks
const loadUser = () => {
    return async (dispatch) => {
        try {
            const user = await apiGetUser();
            dispatch(_loadUser(user));
        } catch (ex) {
            console.log(ex);
        }
    };
};

// const loadUsers = () => {
//     return async (dispatch) => {
//         try {
//             const users = await apiGetUsers();
//             dispatch(_loadUsers(users))
//         } catch (ex) {
//             console.log(ex);
//         }
//     }
// }

const editUser = (user) => {
    return async (dispatch) => {
        try {
            const response = await apiEditUser(user);
            const editedUser = response.data;
            dispatch(_editUser(editedUser));
        } catch (ex) {
            if (
                ex.response.data.error.errors[0].validatorKey === 'isCreditCard'
            ) {
                alert('Invalid credit card number');
            } else if (
                ex.response.data.error.errors[0].validatorKey === 'isEmail'
            ) {
                alert('Invalid email');
            } else {
                alert('Invalid input');
            }
            console.log(ex);
        }
    };
};

// export { loadUser, loadUsers, editUser };
export { loadUser, editUser };
