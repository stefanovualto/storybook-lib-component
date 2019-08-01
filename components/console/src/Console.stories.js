import { storiesOf } from '@storybook/vue';
import Console from '.';
import README from '../README.md';
import vuCore from "vualto-test-vu-core";
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('Console', module);

stories.addDecorator(withKnobs);

stories.add('normal', () => {
  return {
    components: { Console },
    template:
    `
      <Console
        :content="content"
      />
    `,
    data: () => ({
        content: vuCore(),
    })
  };

},
  {
    notes: { markdown: README },
  })
  .add('normal2', () => {
    const content = text('content', 'Arunoda Susiripala');
    return {
      components: { Console },
      template:
      `
        <Console
          :content="content"
        />
      `,
      data: () => ({
          content: content
      })
    };
  
  },
    {
      notes: { markdown: README },
    });