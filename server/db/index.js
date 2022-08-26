const conn = require('./conn');
const Product = require('./Product');
const User = require('./User');
const LineItem = require('./LineItem');
const Order = require('./Order');
const Rating = require('./Rating');
const Category = require('./Category');
const WishList = require('./WishList');
const CouponCode = require('./CouponCode.js');

User.hasMany(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);
Rating.belongsTo(Product);
Rating.belongsTo(User);
Product.belongsTo(Category);
WishList.belongsTo(Product);
WishList.belongsTo(User);

module.exports = {
    conn,
    User,
    Product,
    LineItem,
    Order,
    Rating,
    WishList,
    CouponCode,
};
