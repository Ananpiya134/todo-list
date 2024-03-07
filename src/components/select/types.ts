import type { ComponentPropsWithoutRef } from "react";
import type { Option } from "@/types";

export type OptionValue = "ALL" | "DONE" | "UNDONE";

export interface SelectProps extends ComponentPropsWithoutRef<"div"> {
  selected: Option;
  open?: boolean;
  optionList: Option[];
  handleChange: (value: OptionValue) => void;
}
