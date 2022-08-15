const reducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case 'SET_CART':
            return { ...state, cart: action.cart.lineItems };
        case 'MODIFY_ITEM':
            return { ...state, cart: action.cart.lineItems };
        default:
            return state;
    }
};

export default reducer;
