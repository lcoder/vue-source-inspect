var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development' ,
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    } ,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    } ,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development' ,
            template: './public/index.html' ,
        })
    ],
};