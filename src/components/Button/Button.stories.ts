import { Meta, StoryObj } from '@storybook/vue3';
import { IButtonVariant, IButtonSize } from '@/components/Button/Button.vue';
import { Button } from '@/components';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'] as IButtonVariant[],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'lg'] as IButtonSize[],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: /*html*/ `
      <Button v-bind="args">
        Button
      </Button>
    `,
  }),
};

export const WithVariant: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: /*html*/ `
      <Button v-bind="args">
        Button
      </Button>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: /*html*/ `
        <Button v-bind="args">
          Button
        </Button>
      `,
  }),
};
