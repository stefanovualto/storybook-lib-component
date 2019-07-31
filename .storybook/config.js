import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.js
const defaultStories = require.context('../stories', true, /\.stories\.js$/);
const componentsStories = require.context('../components', true, /\.stories\.js$/);

function loadStories() {
  defaultStories.keys().forEach(filename => defaultStories(filename));
  componentsStories.keys().forEach(filename => componentsStories(filename));
}

configure(loadStories, module);
