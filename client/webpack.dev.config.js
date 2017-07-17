var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'html/'),
        publicPath: path.join(__dirname, 'html/'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'html/'),
        compress: true,
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { presets: ['env', 'stage-2', 'react'], plugins: [] }
            },
            {
                test: /\.scss$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }

        ],
    },
    resolve: {
        alias: {
           actions: path.resolve(__dirname, 'src/acrions/'), 
           components: path.resolve(__dirname, 'src/components/'),
           containers: path.resolve(__dirname, 'src/containers/'),
           reducers: path.resolve(__dirname, 'src/reducers/'),
        },
        extensions: ['.js', '.jsx']
    },
    plugins: []
};

