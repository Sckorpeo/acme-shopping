const reducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case 'LOAD_USER':
            return { ...state, users: [action.payload] };
        case 'LOAD_USERS':
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default reducer;
