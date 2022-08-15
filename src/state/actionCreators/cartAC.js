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
        console.log(response.data);
        dispatch({
            type: 'MODIFY_ITEM',
            cart: response.data,
        });
    };
};

export { fetchCart, addToCart };
