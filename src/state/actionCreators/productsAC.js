import { apiGetProducts, apiGetProductCategory } from '../../api';
import { seedProductData } from '../../api/products';

const fetchProduct = (
    storageProducts = window.localStorage.getItem('products')
) => {
    console.log('in the fetchproduct');
    return async (dispatch) => {
        let response = '';
        console.log(storageProducts);
        if (storageProducts) {
            response = { data: storageProducts };
        } else {
            response = await apiGetProducts();
            console.log('In here');
            window.localStorage.setItem('products', response.data);
        }
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
        await seedProductData();
        dispatch(fetchProduct());
    };
};

export { fetchProduct, getProductBy, getSeededData };
