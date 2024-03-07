import type { ComponentPropsWithoutRef } from "react";

export interface TodoItemProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
}
