const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { promises: fs } = require("fs");

const buildConf = async () => {
	const conf = {
		mode: "production",
		entry: await addComponentsEntries(),
		resolve: {
			alias: {
				Base: path.resolve(__dirname, "src/base/"),
				Components: path.resolve(__dirname, "src/components/"),
				Utils: path.resolve(__dirname, "src/utils/"),
			}
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
				},
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
							plugins: [
								"@babel/plugin-proposal-object-rest-spread",
								[
									"@babel/plugin-proposal-decorators",
									{ legacy: true },
								],
								[
									"@babel/plugin-proposal-class-properties",
									{ loose: true },
								],
								["js-logger", { "format": { "separator": "/", "project": false } }]
							],
						},
					},
				},
			]
		},
		plugins: [new CleanWebpackPlugin()],
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "kotchi-[name].js",
			library: ["kotchiUI", "KUI[name]"],
			libraryTarget: "umd"
		},
		externals: {
			lodash: {
				commonjs: "lodash",
				commonjs2: "lodash",
				amd: "lodash",
				root: "_"
			}
		}
	};
	return conf;
};

async function addComponentsEntries() {
	const entries = {
		ui: "./src/index.js"
	};
	const dirents = await fs.readdir("./src/components", {
		withFileTypes: true
	});
	for (let i = 0; i < dirents.length; i++) {
		entries[
			dirents[i].name
		] = `./src/components/${dirents[i].name}/index.js`;
	}
	return entries;
}

module.exports = buildConf;
