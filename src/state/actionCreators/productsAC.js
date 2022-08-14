import { apiGetProducts, apiGetProductCategory } from '../../api';

const fetchProduct = () => {
    return async (dispatch) => {
        const response = await apiGetProducts();
        dispatch({
            type: 'SET_PRODUCTS',
            products: response.data,
        });
    };
};

const getProductBy = (category) => {
    return async (dispatch) => {
        const response = await apiGetProductCategory(category);
        dispatch({
            type: 'GET_PRODUCTS_BY',
            products: response.data,
        });
    };
};

export { fetchProduct, getProductBy };
