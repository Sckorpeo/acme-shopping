import { apiGetProducts, apiGetProductCategory } from '../../api';
import { seedProductData } from '../../api/products';

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

const getSeededData = () => {
    return async (dispatch) => {
        seedProductData();
        dispatch(fetchProduct());
    };
};

export { fetchProduct, getProductBy, getSeededData };
