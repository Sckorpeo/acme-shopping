const reducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.products };
        case 'GET_PRODUCTS_BY':
            return { ...state, products: action.products };
        default:
            return state;
    }
};

export default reducer;
