const reducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case 'SET_CART':
            return { ...state, cart: action.cart.lineItems };
        case 'MODIFY_ITEM':
            return { ...state, cart: action.cart.lineItems };
        case 'EMPTY_CART':
            Object.assign(state.cart);
            return { ...state, cart: [] };
        case 'GUEST_ADD':
            if (state.cart.length === 0) {
                return { ...state, cart: [action.lineItem] };
            } else if (
                !state.cart.find(
                    (item) => item.product.id === action.lineItem.product.id
                )
            ) {
                return { ...state, cart: [...state.cart, action.lineItem] };
            }
            return {
                ...state,
                cart: [
                    ...state.cart.map((lineItem) => {
                        if (
                            lineItem.product.id === action.lineItem.product.id
                        ) {
                            return {
                                product: action.lineItem.product,
                                quantity:
                                    lineItem.quantity +
                                    action.lineItem.quantity,
                            };
                        } else {
                            return lineItem;
                        }
                    }),
                ],
            };
        default:
            return state;
    }
};

export default reducer;
