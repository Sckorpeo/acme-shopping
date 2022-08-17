import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    users: usersReducer
});

export default reducers;
