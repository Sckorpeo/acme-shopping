const conn = require('./conn');
const { Sequelize } = conn;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = conn.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    middleName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    avatar: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
        validate: {
            isEmail: true,
        },
    },
    phone: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
        is: ['^d{3}-d{3}-d{4}'],
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    creditCard: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isCreditCard: true,
        },
    },
});

User.addHook('beforeSave', async (user) => {
    if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 5);
    }
});

User.prototype.createOrderFromCart = async function () {
    const cart = await this.getCart();
    cart.isCart = false;
    return cart.save();
};

User.prototype.addToCart = async function ({ product, quantity }) {
    const cart = await this.getCart();
    let lineItem = await conn.models.lineItem.findOne({
        where: {
            productId: product.id,
            orderId: cart.id,
        },
    });
    if (lineItem) {
        lineItem.quantity = lineItem.quantity + quantity;
        if (lineItem.quantity != 0) {
            await lineItem.save();
        } else {
            await lineItem.destroy();
        }
    } else {
        await conn.models.lineItem.create({
            productId: product.id,
            quantity,
            orderId: cart.id,
        });
    }
    return this.getCart();
};

User.prototype.addToWishList = async function ({product, incrementBy }) {
    const wishListItem = await conn.models.wishList.findOne({
        where: {
            productId: product.id,
            userId: this.id
        }
    })
    if (wishListItem) {
        wishListItem.quantity += incrementBy;
        if (wishListItem.quantity != 0) {
            await wishListItem.save();
        } else {
            await wishListItem.destroy();
        }
    } else {
        await conn.models.wishList.create({
            productId: product.id,
            quantity: 1,
            userId: this.id
        })
    }
    return this.getWishList();
}

User.prototype.getCart = async function () {
    let order = await conn.models.order.findOne({
        where: {
            userId: this.id,
            isCart: true,
        },
        include: [
            {
                model: conn.models.lineItem,
                include: [conn.models.product],
            },
        ],
    });
    if (!order) {
        order = await conn.models.order.create({ userId: this.id });
        order = await conn.models.order.findByPk(order.id, {
            include: [conn.models.lineItem],
        });
    }
    return order;
};

User.prototype.getOrders = async function () {
    let allOrders = await conn.models.order.findAll({
        where: {
            userId: this.id,
            isCart: false,
        },
        include: [
            {
                model: conn.models.lineItem,
                include: [conn.models.product],
            },
        ],
    });

    return allOrders;
};

User.prototype.getWishList = async function () {
    const wishListItems = await conn.models.wishList.findAll({
        where: {
            userId: this.id,
        },
        include: [conn.models.product, conn.models.user],
    });
    return wishListItems;
};

User.authenticate = async function (credentials) {
    const user = await this.findOne({
        where: {
            username: credentials.username,
        },
    });
    if (user && (await bcrypt.compare(credentials.password, user.password))) {
        return jwt.sign({ id: user.id }, process.env.JWT);
    } else {
        const error = new Error('Bad Credentials');
        error.status = 401;
        throw error;
    }
};

User.findByToken = async function findByToken(token) {
    try {
        const id = jwt.verify(token, process.env.JWT).id;
        const user = await User.findByPk(id);
        if (!user) {
            throw 'error';
        }
        return user;
    } catch (ex) {
        const error = new Error('bad token');
        error.status = 401;
        throw error;
    }
};

module.exports = User;
