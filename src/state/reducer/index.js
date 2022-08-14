import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
});

export default reducers;
