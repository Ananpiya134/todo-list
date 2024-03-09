import type { ComponentPropsWithoutRef } from "react";

import type { ButtonProps } from "@components/button";
import type { DropdownProps } from "@components/dropdown";
import type { InputProps } from "@components/input";

export interface TodoItemProps extends ComponentPropsWithoutRef<"div"> {
  dropdownOptions: DropdownProps["options"];
  id: string;
  onClickCancelEdit: ButtonProps["onClick"];
  onClickSaveEdit: (title: string) => void;

  title: string;
  toggleCompleted: (id: string) => void;
  value: InputProps["value"];

  completed?: boolean;
  isEdit?: boolean;
}
