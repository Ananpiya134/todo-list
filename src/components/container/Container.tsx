import { cnConcat } from "@/utils/cn";

import type { ContainerProps } from "./types";
import "./style.css";

const Container = ({
  className = "",
  ...props
}: ContainerProps): JSX.Element => {
  return <div {...props} className={cnConcat("container", className)} />;
};

export default Container;
