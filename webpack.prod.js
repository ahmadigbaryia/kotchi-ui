/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		app: "./src/index.js",
		button: "./src/button/index.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.css$/i,
				use: ["css-to-string-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "UI Kit",
			template: "./src/index.html",
		}),
	],
	output: {
		filename: "[name].min.js",
		path: path.resolve(__dirname, "dist"),
	},
};
