const reducer = (state = { wishList: [] }, action) => {
    switch (action.type) {
        case 'LOAD_WISH_LIST':
            return { ...state, wishList: action.payload };
        case 'EDIT_WISH_LIST':
            return {...state, wishList: action.payload };
        case 'EMPTY_WISH_LIST':
            return {...state, wishlist: []}
        default:
            return state;
    }
};

export default reducer;
