const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(path.resolve(__dirname, 'dist/favicon.png'))

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    resolve: {
        extensions: ['.js',],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'core': path.resolve(__dirname, 'src/core'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.png'),
                    to: path.resolve(__dirname, 'dist/favicon.png')
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "bundle_[hash].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    output: {
        filename: 'bundle_[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
