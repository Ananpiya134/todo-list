import { Slot } from "@radix-ui/react-slot";

import { cnConcat } from "@utils/cn";

import { getDefaultHtmlTag, getClassName } from "./helpers";
import type { TypographyProps } from "./types";
const Typography = ({
  asChild = false,
  className = "",
  variant = "title",
  ...props
}: TypographyProps): JSX.Element => {
  const defaultHtmlTag = getDefaultHtmlTag(variant);
  const Component = asChild ? Slot : defaultHtmlTag;

  return (
    <Component
      {...props}
      className={cnConcat(getClassName(variant), className)}
    />
  );
};

export default Typography;
