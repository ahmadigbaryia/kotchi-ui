const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { promises: fs } = require("fs");

const buildConf = async () => {
	const conf = {
		mode: "production",
		entry: await addComponentsEntries(),
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
	const dirents = await fs.readdir("./src/components", { withFileTypes: true });
	for (let i = 0; i < dirents.length; i++) {
		entries[dirents[i].name] = `./src/components/${dirents[i].name}/index.js`;
	}
	return entries;
}

module.exports = buildConf;
