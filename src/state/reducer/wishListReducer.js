const reducer = (state = { wishList: [] }, action) => {
    switch (action.type) {
        case 'LOAD_WISH_LIST':
            return { ...state, wishList: action.payload };
        case 'EDIT_WISH_LIST':
            return {...state, wishList: state.wishList.map(item=> item.id===action.payload.id ? action.payload: item)};
        default:
            return state;
    }
};

export default reducer;
