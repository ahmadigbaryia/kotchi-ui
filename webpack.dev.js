const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ["inline-source-map"].map(devtool => ({
	mode: "development",
	entry: {
		ui: "./src/index.js"
	},
	resolve: {
		alias: {
			Base: path.resolve(__dirname, "src/base/"),
			Components: path.resolve(__dirname, "src/components/"),
			Utils: path.resolve(__dirname, "src/utils/")
		}
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "kotchi-[name].js",
		library: ["kotchiUI", "KUI[name]"],
		libraryTarget: "umd"
	},
	devtool,
	optimization: {
		runtimeChunk: true
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["css-to-string-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.css$/i,
				use: ["css-to-string-loader", "css-loader"]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Playground",
			template: "./src/playground.html",
		})
	]
}));
