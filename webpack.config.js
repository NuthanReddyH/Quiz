var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    mode: 'development',
    entry: SRC_DIR + "/js/index",
    output: {
        path: DIST_DIR,
		filename: "bundle.js",
        publicPath: "/"
    },
	devServer: {
		inline: true,
		contentBase: DIST_DIR,
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
	module: {
		rules: [
			     {
                test: /\.jsx?$/,
                include: SRC_DIR,
				        exclude: /(node_modules)/,
                loader: "babel-loader",
				        query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
				              }
            },
            {
              test: /\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
                ]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ],
    },
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: SRC_DIR + "/index.html",
            filename: "index.html"
        }),
    ],
    performance: {
        hints: false
    }
}
