import type { ComponentPropsWithoutRef } from "react";

export interface TodoItemProps extends ComponentPropsWithoutRef<"div"> {
  id: string;
  title: string;
  toggleCompleted: (id: string) => void;

  completed?: boolean;
}
