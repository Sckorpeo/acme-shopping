const reducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case 'SET_CART':
            return { ...state, cart: action.cart.lineItems };
        case 'MODIFY_ITEM':
            return { ...state, cart: action.cart.lineItems };
        case 'EMPTY_CART':
            Object.assign(state.cart);
            return { ...state, cart: [] };
        default:
            return state;
    }
};

export default reducer;
