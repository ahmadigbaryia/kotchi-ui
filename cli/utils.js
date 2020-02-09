const { promises: fs } = require("fs");
const Handlebars = require("handlebars");
const path = require("path");

const _startCase = require("lodash/startCase");
const _camelCase = require("lodash/camelCase");
const _kebabCase = require("lodash/kebabCase");

function registerHandlebarsHelpers() {
	Handlebars.registerHelper("componentName", _startCase);
	Handlebars.registerHelper("className", function(componentName) {
		return `KUI${_startCase(componentName)}`;
	});
	Handlebars.registerHelper("varName", function(componentName) {
		return `kui${_startCase(componentName)}`;
	});
	Handlebars.registerHelper("tagName", function(componentName) {
		return `kui-${_kebabCase(componentName)}`;
	});
	Handlebars.registerHelper("toProperty", _camelCase);
	Handlebars.registerHelper("hasBooleanAttribute", function(
		attributes,
		options
	) {
		return attributes.filter(attr => attr.type.toLowerCase() === "boolean").length > 0
			? options.fn(this)
			: "";
	});
	Handlebars.registerHelper("isBoolean", function(
		type,
		options
	) {
		return type.toLowerCase() === "boolean" ? options.fn(this) : "";
	});
	Handlebars.registerHelper("notBoolean", function(
		type,
		options
	) {
		return type.toLowerCase() !== "boolean" ? options.fn(this) : "";
	});
	Handlebars.registerHelper("hasRegularAttribute", function(
		attributes,
		options
	) {
		return attributes.filter(attr => !attr.isBoolean).length > 0
			? options.fn(this)
			: "";
	});
	Handlebars.registerHelper("joinParams", function(params) {
		return params ? params.join(", ") : "";
	});
}

async function readConfigurationFile(filePath) {
	const configurationFile = await fs.readFile(filePath, "utf8");
	return JSON.parse(configurationFile);
}

async function readAndCompileTemplate({
	componentConfig,
	resourceTemplatePath
}) {
	const fileContents = await fs.readFile(resourceTemplatePath, "utf8");
	registerHandlebarsHelpers();
	return Handlebars.compile(fileContents)(componentConfig);
}

async function writeTargetFile({
	resourceOutputPath,
	resourceOutputFileName,
	fileContents
}) {
	await fs.mkdir(resourceOutputPath, { recursive: true });
	await fs.writeFile(
		`${resourceOutputPath}${resourceOutputFileName}`,
		fileContents,
		"utf8"
	);
}

async function generateResource({
	resourceTemplatePath,
	resourceOutputPath,
	resourceOutputFileName,
	componentConfig
}) {
	const fileContents = await readAndCompileTemplate({
		componentConfig,
		resourceTemplatePath
	});
	writeTargetFile({
		resourceOutputPath,
		resourceOutputFileName,
		fileContents
	});
}

async function generateUnitTest({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/test.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}__tests__${path.sep}`;
	const resourceOutputFileName = `kui-${_kebabCase(
		componentConfig.name
	)}.test.js`;
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}

async function generateDocs({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	generateDocsConfiguration({
		componentConfig,
		targetComponentPath,
		templatesPath
	});
	generateDocsBasicExample({
		componentConfig,
		targetComponentPath,
		templatesPath
	});
	generateDocsAttributesConfigurations({
		componentConfig,
		targetComponentPath,
		templatesPath
	});
	generateDocsAttributesExample({
		componentConfig,
		targetComponentPath,
		templatesPath
	});
}

async function generateDocsConfiguration({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/docs.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}docs${path.sep}`;
	const resourceOutputFileName = "configuration.json";
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}

async function generateDocsBasicExample({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/basic-example-docs.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}docs${path.sep}`;
	const resourceOutputFileName = "basic-examples.html";
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}

async function generateDocsAttributesConfigurations({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/attributes-docs.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}docs${path.sep}`;
	const resourceOutputFileName = "attributes-configurations.html";
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}
async function generateDocsAttributesExample({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	componentConfig.attributes.forEach((attribute)=>{
		const resourceTemplatePath = `${templatesPath}/attribute-docs.template`;
		const resourceOutputPath = `${targetComponentPath}${path.sep}docs${path.sep}`;
		const resourceOutputFileName = `${attribute.name}-example.html`;
		generateResource({
			resourceTemplatePath,
			resourceOutputPath,
			resourceOutputFileName,
			componentConfig: attribute
		});
	});
}

async function generateComponentConfig({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/config.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}`;
	const resourceOutputFileName = "config.js";
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}
async function generateComponentIndex({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/index.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}`;
	const resourceOutputFileName = "index.js";
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}
async function generateComponentClass({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/class.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}`;
	const resourceOutputFileName = `kui-${_kebabCase(componentConfig.name)}.js`;
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}
async function generateComponentReadMe({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/readMe.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}`;
	const resourceOutputFileName = "README.md";
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}
async function generateComponentStyle({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/style.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}`;
	const resourceOutputFileName = "style.scss";
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}
async function generateComponentTemplate({
	componentConfig,
	targetComponentPath,
	templatesPath
}) {
	const resourceTemplatePath = `${templatesPath}/template.template`;
	const resourceOutputPath = `${targetComponentPath}${path.sep}`;
	const resourceOutputFileName = "template.js";
	generateResource({
		resourceTemplatePath,
		resourceOutputPath,
		resourceOutputFileName,
		componentConfig
	});
}

module.exports = {
	readConfigurationFile,
	generateUnitTest,
	generateDocs,
	generateComponentConfig,
	generateComponentIndex,
	generateComponentClass,
	generateComponentReadMe,
	generateComponentStyle,
	generateComponentTemplate
};
