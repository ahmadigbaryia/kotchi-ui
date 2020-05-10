const baseConf = require("./base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { promises: fs } = require("fs");

const buildConf = async () => {
	const conf = {
		...baseConf,
		mode: "production",
		entry: await addComponentsEntries(),
		plugins: [new CleanWebpackPlugin()],
		externals: {
			lodash: {
				commonjs: "lodash",
				commonjs2: "lodash",
				amd: "lodash",
				root: "_",
			},
		},
	};
	return conf;
};

async function addComponentsEntries() {
	const entries = {
		ui: "./src/index.js",
	};
	const dirents = await fs.readdir("./src/components", {
		withFileTypes: true,
	});
	for (let i = 0; i < dirents.length; i++) {
		entries[dirents[i].name] = `./src/components/${dirents[i].name}/index.js`;
	}
	return entries;
}

module.exports = buildConf;
