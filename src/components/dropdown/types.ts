import type { ComponentPropsWithoutRef } from "react";

export type DropdownOption = {
  label: string;
  handleFn: () => void;
};

export interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  options: DropdownOption[];
}
