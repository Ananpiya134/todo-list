import type { Variant } from "./types";

export const getDefaultHtmlTag = (variant: Variant): string => {
  switch (variant) {
    case "heading-1-white":
    case "heading-2-black":
      return "h1";
    case "title":
    case "description":
      return "p";

    default:
      throw new Error(`Variant(${variant}) is not exist`);
  }
};

export const getClassName = (variant: Variant): string => {
  let className: string = "";
  switch (variant) {
    case "heading-1-white":
      className = "text-xl text-white font-medium";
      break;
    case "heading-2-black":
      className = "text-lg text-black font-medium";
      break;
    case "title":
      className = "text-md text-black-200 font-normal";
      break;
    case "description":
      className = "text-sm text-black font-normal";
      break;

    default:
      className = "";
  }

  return className;
};
