// For a detailed explanation regarding each configuration property,
// visit: https://jestjs.io/docs/en/configuration.html

module.exports = {
	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// The directory where Jest should output its coverage files
	// coverageDirectory: ".coverage",
	// collectCoverage: true,
	// coverageReporters: ["html"],
	// collectCoverageFrom: ["src/components/**/*.js"],

	// A map from regular expressions to module names that allow to stub out resources with a single module
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "<rootDir>/mocks/styleMock.js",
		"^Utils(.*)$": "<rootDir>/src/utils/$1",
		"^Base(.*)$": "<rootDir>/src/base/$1",
		"^Components(.*)$": "<rootDir>/src/components/$1",
	},
	// The test environment that will be used for testing
	testEnvironment: "jest-environment-happy-dom",
	setupFilesAfterEnv: ["<rootDir>/mocks/jest-preload.js"],
	roots: ["<rootDir>/../../src/"],
};
