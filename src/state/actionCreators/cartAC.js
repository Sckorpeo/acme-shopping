import { apiGetCart, apiAddToCart, apiOrderSuccess } from '../../api';

const fetchCart = () => {
    return async (dispatch) => {
        const response = await apiGetCart();
        dispatch({
            type: 'SET_CART',
            cart: response.data,
        });
    };
};

const orderCreatedFromCart = () => {
    return async (dispatch) => {
        const response = await apiOrderSuccess();
        dispatch({
            type: 'SET_CART',
            cart: response.data,
        });
    };
};

const addToCart = (productInfo) => {
    return async (dispatch) => {
        const response = await apiAddToCart(productInfo);
        dispatch({
            type: 'MODIFY_ITEM',
            cart: response.data,
        });
    };
};

const emptyCart = () => {
    return async (dispatch) => {
        dispatch({ type: 'EMPTY_CART' });
    };
};

const guestAddToCart = (lineItem) => {
    return (dispatch) => {
        dispatch({
            type: 'MODIFY_ITEM',
            cart: lineItem,
        });
    };
};

export {
    fetchCart,
    addToCart,
    emptyCart,
    orderCreatedFromCart,
    guestAddToCart,
};
