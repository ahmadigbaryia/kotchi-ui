import { storiesOf } from "@storybook/html";
import { withKnobs, text } from "@storybook/addon-knobs";

import "./uik-button";
import { ButtonStyleEnum, ButtonAttributes, ButtonSizeEnum } from "./config";

import ButtonReadme from "./README.md";

// eslint-disable-next-line no-undef
const stories = storiesOf("UIK Button", module);
stories.addParameters({
	readme: {
		// Show readme before story
		content: ButtonReadme,
		// Show readme at the addons panel
		sidebar: ButtonReadme,
	},
});
stories.addDecorator(withKnobs);

stories.add("Change button text", () => {
	const buttonText = text("Button Title", "My Button");
	return `<uik-button uik-text='${buttonText}'></uik-button>`;
});
stories.add("Change button style", () => {
	const buttonStyle = text("Button Style", ButtonStyleEnum.Primary);
	return `<uik-button uik-text='Primary Button' uik-style='${buttonStyle}'></uik-button>`;
});