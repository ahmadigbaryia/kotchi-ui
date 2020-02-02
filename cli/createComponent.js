/** 
 * A script that auto-generate new component under src/components, with the a specific folder structure and files.
 * Input: JSON:
 *  {
 *      componentName: "STRING", //example: accordion,
 *      description: "STRING",
 *      attributes:[
 *          {
 *              name: "STRING",
 *              description: "STRING"
 *          }
 *      ]
 *  }
 * Output: Folder with the following structure and initial files 
src/components/COMPONENT_NAME/
├── __tests__/
│   └── kui-COMPONENT_NAME.test.js
├── docs/
│   └── configuration.json
├── config.js
├── index.js
├── kui-COMPONENT_NAME.js
├── README.md
├── styles.css
└── template.html
*/

(async () => {
	const path = require("path");
	const args = require("minimist")(process.argv.slice(2));
	const Utils = require("./utils");

	const componentConfig = await Utils.readConfigurationFile(args["config"]);
	const { name } = componentConfig;

	const templatesPath = `${__dirname}${path.sep}templates`;
	const targetComponentsFolder = args["componentsPath"] || "src/components";
	const targetComponentPath = `${targetComponentsFolder}${path.sep}${name}${path.sep}`;
	console.log("Generating files ...");
	const startTime = new Date().getTime();
	await Promise.all([
		Utils.generateUnitTest({ componentConfig, targetComponentPath, templatesPath }),
		Utils.generateDocs({ componentConfig, targetComponentPath, templatesPath }),
		Utils.generateComponentConfig({ componentConfig, targetComponentPath, templatesPath }),
		Utils.generateComponentIndex({ componentConfig, targetComponentPath, templatesPath }),
		Utils.generateComponentClass({ componentConfig, targetComponentPath, templatesPath }),
		Utils.generateComponentReadMe({ componentConfig, targetComponentPath, templatesPath }),
		Utils.generateComponentStyle({ componentConfig, targetComponentPath, templatesPath }),
		Utils.generateComponentTemplate({ componentConfig, targetComponentPath, templatesPath })
	]);
	const endTime = new Date().getTime();
	console.log(`Finished in ${endTime - startTime}ms`);
})();
