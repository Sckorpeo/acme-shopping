import { apiGetCart, apiAddToCart } from "../../src/api";

const fetchCart = () => {
  return async (dispatch) => {
    const response = await apiGetCart();
    dispatch({
      type: "SET_CART",
      cart: response.data,
    });
  };
};

const addToCart = (productInfo) => {
  return async (dispatch) => {
    const response = await apiAddToCart(productInfo);
    dispatch({
      type: "ADD_ITEM",
      cart: response.data,
    });
  };
};

export { fetchCart, addToCart };
