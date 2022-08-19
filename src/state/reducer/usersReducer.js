const reducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case 'LOAD_USER':
            return { ...state, users: [action.payload] };
        case 'LOAD_USERS':
            return { ...state, users: action.payload };
        case 'EDIT_USER':
            return {...state, users: state.users.map(user=> user.id===action.payload.id ? action.payload: user)};
        default:
            return state;
    }
};

export default reducer;
