import { apiGetCart, apiAddToCart } from "../../../src/api";

const fetchCart = () => {
  return async (dispatch) => {
    const response = await apiGetCart();
    dispatch({
      type: "SET_CART",
      cart: response.data,
    });
  };
};

const addToCart = (product, quantity) => {
  return async (dispatch) => {
    const response = await apiAddToCart(product, quantity);
    console.log(response.data)
    dispatch({
      type: "SET_CART",
      cart: response.data,
    });
  };
};

export { fetchCart, addToCart };
