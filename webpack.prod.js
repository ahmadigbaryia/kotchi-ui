/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackCopyAfterBuildPlugin = require("webpack-copy-after-build-plugin");

module.exports = {
	mode: "production",
	entry: {
		app: "./src/index.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.css$/i,
				use: ["css-to-string-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "UI Kit",
			template: "./src/index.html"
		}),
		// new WebpackCopyAfterBuildPlugin({
		// 	app: "../docs/js/app.min.js"
		// })
	],
	output: {
		filename: "[name].min.js",
		path: path.resolve(__dirname, "dest")
	}
};
