import type { Meta, StoryObj } from '@storybook/vue3';

import { Navbar } from '@/components';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args) => ({
    components: { Navbar },
    setup() {
      return { args };
    },
    template: '<Navbar v-bind="args" />',
  }),
  args: {},
};
