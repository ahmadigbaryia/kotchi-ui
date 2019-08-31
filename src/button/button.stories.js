import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

import './uik-button';
import ButtonReadme from './README.md';

const stories = storiesOf('UIK Button', module);
stories.addParameters({
    readme: {
        // Show readme before story
        content: ButtonReadme,
        // Show readme at the addons panel
        sidebar: ButtonReadme,
    }
});
stories.addDecorator(withKnobs);

stories.add('with attr', () => {
    const buttonText = text('Button Title', 'My Button');
    return `<uik-button uik-text='${buttonText}'></uik-button>`;
});
stories.add('with prop', () => {
	const button = document.createElement('uik-button');
	const buttonText = text('Button Title', '😀 😎 👍 💯');
    button.uikText = buttonText;
    return button;
});
