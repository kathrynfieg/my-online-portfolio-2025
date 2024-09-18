import { ReadMore } from '@/components';
import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ReadMore> = {
  component: ReadMore,
  decorators: [() => ({ template: '<div class="container"><story /></div>' })],
};

export default meta;

type Story = StoryObj<typeof ReadMore>;

export const Default: Story = {
  args: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum condimentum enim ac sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce elementum augue vitae metus pretium vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam hendrerit tortor non dolor sagittis, ut dignissim lacus rhoncus. Aenean fringilla in lacus sed finibus. Nullam eleifend mauris eu lacinia mollis. Ut tempor, quam ac condimentum maximus, mi elit imperdiet ante, in imperdiet ligula ligula at risus. Vestibulum scelerisque ut quam quis interdum. In hac habitasse platea dictumst. Aliquam blandit, ligula ac maximus fermentum, magna dolor elementum nibh, ut ullamcorper quam leo sit amet leo. Nunc at dolor eu orci feugiat tristique quis eu neque. Aenean congue gravida nunc, eu placerat ipsum tempor in. Ut at tortor in dui pharetra auctor sit amet in elit. Mauris lacus dolor, aliquam et orci sit amet, laoreet condimentum ligula. Ut bibendum eleifend justo, a eleifend orci fermentum at. Curabitur dignissim, odio sollicitudin eleifend consequat, elit augue egestas neque, a laoreet diam ipsum quis tortor. Quisque id ex ut eros faucibus interdum sollicitudin vel nibh. Donec vulputate sit amet erat a consectetur. Duis porta elit eros, vitae rutrum ipsum consequat a. Cras et mi euismod, egestas risus vitae, convallis ex. Nullam orci augue, ultrices convallis mi et, sagittis rutrum orci.',
    lines: 5,
  },
  render: (args) => ({
    components: { ReadMore },
    setup() {
      return { args };
    },
    template: /*html*/ `
      <ReadMore v-bind="args" />
    `,
  }),
};
