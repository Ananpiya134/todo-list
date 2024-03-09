import { forwardRef } from "react";

import { Typography } from "@components/typography";
import { cnConcat } from "@/utils/cn";

import type { ButtonProps } from "./types";
import "./style.css";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className = "", ...props }, ref) => {
    return (
      <button
        {...props}
        className={cnConcat(
          `btn ${variant === "save" ? "btn-save" : "btn-cancel"}`,
          className
        )}
        ref={ref}
      >
        <Typography className="text-white" variant="option">
          {children}
        </Typography>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
