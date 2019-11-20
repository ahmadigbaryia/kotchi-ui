/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		app: "./src/index.js"
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
		new CopyPlugin([
			{ from: "dest/*.js", to: "docs/js/", context: path.resolve(__dirname, "") }
		])
	],
	output: {
		filename: "[name].min.js",
		path: path.resolve(__dirname, "dest"),
	},
};
