import { forwardRef } from "react";

import { cnConcat } from "@/utils/cn";

import type { CheckboxProps } from "./types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        {...props}
        className={cnConcat("", className)}
        ref={ref}
        type="checkbox"
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
