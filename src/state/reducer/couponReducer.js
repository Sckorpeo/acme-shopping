const reducer = (state = { coupons: [], selectedCoupon: {} }, action) => {
    switch (action.type) {
        case 'SET_COUPONS':
            return { ...state, coupons: action.coupons };
        case 'ADD_COUPON':
            Object.assign(state.coupons);
            return { ...state, coupons: [...state.coupons, action.coupon] };
        case 'GET_COUPON':
            return { ...state, selectedCoupon: action.coupon };
        default:
            return state;
    }
};

export default reducer;
