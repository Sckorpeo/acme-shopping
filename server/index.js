const app = require('./app');
const { conn, User, Product } = require('./db');
const Category = require('./db/Category');
const boardGameSeed = require('./db/seed/boardGameSeed');

const setUp = async () => {
    try {
        await conn.sync({ force: true });
        await Category.create({ name: 'A' });
        await Category.create({ name: 'B' });
        await Category.create({ name: 'C' });
        boardGameSeed();
        const moe = await User.create({ username: 'moe', password: 'moe_pw' });
        const lucy = await User.create({
            username: 'lucy',
            password: 'lucy_pw',
        });
        const Kaiyuan = await User.create({
            username: 'Kaiyuan',
            password: 'kaiyuan_pw',
        });
        const Kieran = await User.create({
            username: 'Kieran',
            password: 'kieran_pw',
            isAdmin: true,
        });
        const Austin = await User.create({
            username: 'Austin',
            password: 'austin_pw',
            isAdmin: true,
        });
        const foo = await Product.create({ name: 'foo' });
        const bar = await Product.create({ name: 'bar' });
        await lucy.addToCart({ product: foo, quantity: 3 });
        await lucy.addToCart({ product: bar, quantity: 4 });
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on port ${port}`));
    } catch (ex) {
        console.log(ex);
    }
};

setUp();
