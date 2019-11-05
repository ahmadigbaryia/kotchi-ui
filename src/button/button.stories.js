import { storiesOf } from "@storybook/html";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import "./uik-button";
import { Style, tagName } from "./config";

import ButtonReadme from "./README.md";

// eslint-disable-next-line no-undef
const stories = storiesOf("UIK Button", module);
stories.addParameters({
	readme: {
		sidebar: ButtonReadme,
	},
});
stories.addDecorator(withKnobs);

stories.add("Change button text", () => {
	const buttonText = text("Button Title", "My Button");
	return `<${tagName} uik-text='${buttonText}'></${tagName}>`;
});

stories.add("Change button style", () => {
	const label = "Button Style";
	const defaultValue = Style.Primary;
	const groupId = "STYLE-GROUP-ID";
	const buttonStyle = select(label, Style, defaultValue, groupId);
	return `<${tagName} uik-text='Styled Button' uik-style='${buttonStyle}'></${tagName}>`;
});
