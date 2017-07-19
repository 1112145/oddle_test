var path = require("path");
var webpack = require('webpack');
const env = process.env.NODE_ENV || 'development';

module.exports = {
    entry: [
        './main.js'
    ],
    output: {
        path: path.join(__dirname, '../server/html/'),
        publicPath: path.join(__dirname, '../server/html/'),
        filename: 'bundle.js'
    },
    externals: {
        react: "React",
        redux: "Redux"
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
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
            },
        })
    ]
};

