import {apiGetWishList} from "../../api";
// Action Types
const LOAD_WISH_LIST = 'LOAD_WISH_LIST';

// Action Creators
const _loadWishList = (wishList) => {
    return {
        type: LOAD_WISH_LIST,
        payload: wishList
    }
}
// Thunks
const loadWishList = (user) => {
    return async (dispatch) => {
        try {
            const wishList = await apiGetWishList();
            dispatch(_loadWishList(wishList));
        } catch (ex) {
            console.log(ex);
        }
    }
};

export { loadWishList };
