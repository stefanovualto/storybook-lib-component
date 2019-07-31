import { storiesOf } from '@storybook/vue';
import Console from './Console';
import  vuCore from "../../packages/vu-core";
import notes from './NOTES.md';

storiesOf('Console', module)
  .add('normal', () => ({
    components: { Console },
    template:
    `
      <Console
        :content="content"
      />
    `,
    data: () => ({
        content: vuCore()
    })
  }),
  {
    notes: { markdown: notes },
  })