const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                    { loader: 'sass-loader'}
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            filename: 'index.html'
        })
    ]
}