const path = require('path');
module.exports = {
    entry: path.resolve('./src/app.js'),
    output: {
        path: path.resolve('./public/dist'),
        filename: './bundle.js',
    },
    // devServer: {
    //     publicPath: '/abcdef/',
    //     contentBase: path.resolve('./static'),
    // }
};
