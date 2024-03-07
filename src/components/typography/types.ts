import type { ReactNode, CSSProperties } from "react";

export type Variant =
  | "heading-1-white"
  | "heading-2-black"
  | "description"
  | "title";

export interface TypographyProps {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
  variant?: Variant;
  style?: CSSProperties;
}

export interface TypographyDetails {
  fontSize: number;
  lineHeight: number;
  weight: number;
  variant: Variant;
}
