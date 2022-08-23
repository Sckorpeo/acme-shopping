const { WishList } = require('../index');
const wishListSeed = async (products, users) => {
    const wishListArray = []
    for (let i=0; i<users.length; i++) {
        const userWishListArray = [];
        while (Math.random() < 0.7) {
            let productId = products[Math.floor(Math.random() * products.length)].id;
            if (userWishListArray.map(wishListItem => wishListItem.productId===productId).every(x=>x===false)) {
                userWishListArray.push(
                    {
                        userId: users[i].id,
                        productId: productId,
                        quantity: Math.ceil(Math.random() * 5)
                    }
                )
            }
        }
        wishListArray.push(...userWishListArray);
    }
    await Promise.all(wishListArray.map(wishListItem => WishList.create(wishListItem)))
};

module.exports = wishListSeed;