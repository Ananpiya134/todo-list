import { Typography } from "@/components/typography";

import { cnConcat } from "@/utils/cn";

import type { ProgressBarProps } from "./types";
import "./style.css";

const ProgressBar = ({
  className = "",
  completed = 0,
  total = 100,
  ...props
}: ProgressBarProps): JSX.Element => {
  return (
    <div {...props} className={cnConcat("progress-bar-container", className)}>
      <Typography className="mb-12" variant="heading-1-white">
        Progress
      </Typography>
      <div className="progress-remaining mb-14">
        <div
          className="progress-success"
          style={{ width: `${(completed * 100) / total}%` }}
        />
      </div>
      <Typography variant="title-salmon">{`${completed} completed`}</Typography>
    </div>
  );
};

export default ProgressBar;
