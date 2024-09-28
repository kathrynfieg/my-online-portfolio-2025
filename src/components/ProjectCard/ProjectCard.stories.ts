import type { Meta, StoryObj } from '@storybook/vue3';

import { ProjectCard } from '@/components';
import img from '@/assets/handleit.png';

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: 'PupSpot Adelaide',
    description:
      'Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Website built for our family-owned cleaning business, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['Vue', 'Firebase', 'Typescript'],
    liveLink: 'https://www.handleitcleaning.com.au/',
    projectImg: img,
  },
  render: (args) => ({
    components: { ProjectCard },
    setup() {
      return { args };
    },
    template:
      '<div class="bg-slate-200 container w-full h-dvh justify-center content-center"><ProjectCard v-bind="args" /><div>',
  }),
};
