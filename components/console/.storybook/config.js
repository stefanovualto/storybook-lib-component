import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
const src = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  src.keys().forEach(filename => src(filename));
}

configure(loadStories, module);
