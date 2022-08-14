const reducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, products: action.cart.lineItems };
    case "MODIFY_ITEM":
      return { ...state, products: action.cart.lineItems };
    default:
      return state;
  }
};
