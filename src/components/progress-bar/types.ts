import type { ComponentPropsWithoutRef } from "react";

export interface ProgressBarProps extends ComponentPropsWithoutRef<"div"> {
  completed?: number;
  total?: number;
}
