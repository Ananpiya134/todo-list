import { forwardRef } from "react";

import { cnConcat } from "@/utils/cn";

import type { InputProps } from "./types";
import "./style.css";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        {...props}
        className={cnConcat("", className)}
        ref={ref}
        type="text"
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
