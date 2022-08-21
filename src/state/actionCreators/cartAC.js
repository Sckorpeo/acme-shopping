import { apiGetCart, apiAddToCart } from '../../api';

const fetchCart = () => {
    return async (dispatch) => {
        const response = await apiGetCart();
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

export { fetchCart, addToCart, emptyCart };
