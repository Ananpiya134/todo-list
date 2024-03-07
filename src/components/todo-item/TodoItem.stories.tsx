import TodoItem from "./TodoItem";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
  tags: ["autodocs"],
  title: "Components/TodoItem",
};

export default meta;

type Story = StoryObj<typeof TodoItem>;

export const Default: Story = {
  args: {
    title: "Something",
  },
};
