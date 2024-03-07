import { forwardRef } from "react";

import { cnConcat } from "@/utils/cn";

import type { CheckboxProps } from "./types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", ...props }) => {
    return (
      <input {...props} className={cnConcat("", className)} type="checkbox" />
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
