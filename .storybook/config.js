import { addDecorator, configure } from '@storybook/html';
import { addReadme } from 'storybook-readme/html';

addDecorator(addReadme);

function loadStories() {
  const req = require.context('../src', true,  /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);