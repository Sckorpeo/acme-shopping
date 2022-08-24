import {apiGetWishList,apiAddToWishList} from "../../api";
// Action Types
const LOAD_WISH_LIST = 'LOAD_WISH_LIST';
const EDIT_WISH_LIST = 'EDIT_WISH_LIST';

// Action Creators
const _loadWishList = (wishList) => {
    return {
        type: LOAD_WISH_LIST,
        payload: wishList
    }
}

const _addToWishList = (wishList) => {
    return {
        type: EDIT_WISH_LIST,
        payload: wishList
    }
}

// Thunks
const loadWishList = () => {
    return async (dispatch) => {
        try {
            const wishList = await apiGetWishList();
            dispatch(_loadWishList(wishList));
        } catch (ex) {
            console.log(ex);
        }
    }
};

const addToWishList = (product, incrementBy) => {
    return async (dispatch) => {
        try {
            const response = await apiAddToWishList(product, incrementBy);
            dispatch(_addToWishList(response));
        } catch (ex) {
            console.log(ex);
        }
    }
};

export { loadWishList, addToWishList };
