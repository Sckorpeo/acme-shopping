import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadWishList} from '../../state/actionCreators/wishListAC';
import WishListItem from "./WishListItem";
function UserWishList() {
    const dispatch = useDispatch();
    const { wishList } = useSelector(state=>state.wishList)
    useEffect(()=>{
        dispatch(loadWishList())
    }, [])
    return (
        <div className="">
            {wishList.map((item) => (
                <WishListItem
                    product={item.product}
                    key={item.id}
                    quantity={item.quantity}
                />
            ))}
        </div>
    )
};

export default UserWishList

