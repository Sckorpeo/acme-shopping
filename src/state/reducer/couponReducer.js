const reducer = (state = { coupons: [] }, action) => {
    switch (action.type) {
        case 'SET_COUPONS':
            return { ...state, coupons: action.coupons };
        case 'ADD_COUPON':
            Object.assign(state.coupons);
            return { ...state, coupons: [...state.coupons, action.coupon] };
        default:
            return state;
    }
};

export default reducer;
