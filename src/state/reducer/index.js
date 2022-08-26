import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import usersReducer from './usersReducer';
import wishListReducer from './wishListReducer';
import couponReducer from './couponReducer';

const reducers = combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    users: usersReducer,
    wishList: wishListReducer,
    coupons: couponReducer,
});

export default reducers;
