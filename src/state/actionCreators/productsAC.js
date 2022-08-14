import { apiGetProducts } from "../../src/api";

const fetchProduct = () => {
  return async (dispatch) => {
    const response = await apiGetProducts();
    dispatch({
      type: "SET_PRODUCTS",
      products: response.data,
    });
  };
};

const getProductBy = (category) => {
  return async (dispatch) => {
    dispatch({
      type: "GET_PRODUCTS_BY",
      category: category,
    });
  };
};

export { fetchProduct, getProductBy };
