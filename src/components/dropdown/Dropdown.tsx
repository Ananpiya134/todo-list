import { useState } from "react";

import IconDots from "@assets/images/icon-dots.svg";

import { Typography } from "@components/typography";

import { cnConcat } from "@/utils/cn";

import type { DropdownProps } from "./types";
import "./style.css";

const Dropdown = ({
  options = [],
  className = "",
  ...props
}: DropdownProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div {...props} className={cnConcat("dropdown-container", className)}>
      <div className="dropdown-header">
        <button className="option" onClick={() => setOpen((prev) => !prev)}>
          <img src={IconDots} alt="icon-dots" />
        </button>
      </div>
      <div
        className="dropdown-list-container"
        style={{ display: `${open ? "block" : "none"}` }}
      >
        <ul className="dropdown-list">
          {options.map(({ label, handleFn }) => {
            return (
              <li
                className="list-item"
                key={`dropdown-option-${label}`}
                onClick={handleFn}
              >
                <Typography
                  className={`${label === "Edit" ? "text-black-200" : "text-delete"}`}
                  variant="option"
                >
                  {label}
                </Typography>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
