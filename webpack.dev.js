const DotenvWebpackPlugin = require('dotenv-webpack');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    plugins: [new DotenvWebpackPlugin()],
});
