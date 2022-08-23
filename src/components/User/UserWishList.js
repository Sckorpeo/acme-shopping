import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadWishList} from '../../state/actionCreators/wishListAC';
import WishListItem from "./WishListItem";
function UserWishList() {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state.auth);
    const { wishList } = useSelector(state=>state.wishList)

    useEffect(()=>{
        dispatch(loadWishList(auth))
    }, [])
    return (
        // <ul>

            <div className="">
                {wishList.map((item) => (
                    <WishListItem
                        product={item.product}
                        key={item.id}
                        quantity={item.quantity}
                        lineItem={item}
                    />
                ))}
            </div>

    )
};

export default UserWishList



{/*{wishList.map((item,idx)=>{*/}
{/*    return (*/}
{/*    <li key={idx}>{item.product.name}</li>*/}
{/*)})}*/}
{/*</ul>*/}