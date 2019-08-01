import { storiesOf } from '@storybook/vue';
import README from './README.md';
import vuCore from "./lib/vu-core";

const stories = storiesOf('vu-core', module);

stories.add('normal', () => {
  return {
    template:
    `
      <div>
        {{content}}
      </div>
    `,
    data: () => ({
        content: vuCore(),
    })
  };

},
  {
    notes: { markdown: README },
  });