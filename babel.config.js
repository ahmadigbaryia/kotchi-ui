module.exports = {
	plugins: ["@babel/plugin-proposal-decorators"],
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current"
				}
			}
		]
	]
};
