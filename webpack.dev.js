const path = require("path");
module.exports = ["inline-source-map"].map(devtool => ({
	mode: "development",
	entry: {
		ui: "./src/index.js",
		button: "./src/components/button/index.js",
		icon: "./src/components/icon/index.js",
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
				test: /\.css$/i,
				use: ["css-to-string-loader", "css-loader"]
			}
		]
	}
}));
