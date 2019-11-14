/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;

module.exports = {
	mode: "development",
	entry: {
		app: "./src/index.js",
		button: "./src/button/index.js"
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist"
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
		new BundleAnalyzerPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "UI Kit",
			template: "./src/index.html"
		})
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};
