const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'head'
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: ''
        }])
    ],
    devServer: {
        contentBase: 'src/assets'
    }
}
