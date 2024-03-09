import type { ComponentPropsWithRef } from "react";

export type Variant = "save" | "cancel";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant: Variant;
}
