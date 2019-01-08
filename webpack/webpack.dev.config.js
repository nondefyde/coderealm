const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const env = process.env.NODE_ENV;

module.exports = {
	mode: env || 'development',
	entry: path.join(__dirname, '../src/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {minimize: true}
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				],
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		compress: true,
		port: 9000,
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, '../src', 'index.html'),
			filename: './index.html'
		}),
	]
};
