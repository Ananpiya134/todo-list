import Typography from "./Typography";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ["autodocs"],
  title: "Base/Typography",
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading_1_white: Story = {
  args: {
    variant: "heading-1-white",
    children: "Heading-1-white",
  },
};

export const Heading_2_black: Story = {
  args: {
    variant: "heading-2-black",
    children: "Heading-2-black",
  },
};

export const Title: Story = {
  args: {
    variant: "title",
    children: "Title",
  },
};

export const Description: Story = {
  args: {
    variant: "description",
    children: "Description",
  },
};
