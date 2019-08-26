import { storiesOf } from "@storybook/html";
import "./uik-button";

storiesOf("UIK Button", module)
	.add("with attr", () => "<uik-button uik-text='My Button'></uik-button>")
	.add("with prop", () => {
		const button = document.createElement("uik-button");
		button.uikText = "😀 😎 👍 💯";
		return button;
	});
