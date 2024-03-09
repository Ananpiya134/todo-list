import { ComponentPropsWithoutRef } from "react";
import type { InputProps } from "@components/input";

export interface TodoNewProps extends ComponentPropsWithoutRef<"div"> {
  placeholder: InputProps["placeholder"];
  onKeyDown: InputProps["onKeyDown"];
  value?: InputProps["value"];
  onChange: InputProps["onChange"];
}
