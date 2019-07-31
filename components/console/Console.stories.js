import { storiesOf } from '@storybook/vue';
import Console from './Console';
import  vuCore from "../../packages/vu-core";

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
  }))