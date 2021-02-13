const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode : "development",
 module:{
     rules : [
        {test : /\.(css)$/,
        use : [
            {loader: 'style-loader'},
            {loader : 'css-loader'}]
    },
    {test : /\.(s[ca]ss)$/,
        use : [
            {loader: 'style-loader'},
            {loader : 'css-loader'},
            {loader: 'sass-loader'}]
    }]
 },
 plugins:[new HtmlWebpackPlugin({
     template : 'index.html'
 })]
};