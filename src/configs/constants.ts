import type { Option } from "@/types";
import type { OptionValue } from "@/components/select";

export const API_BASE_URL =
  import.meta.env.API_BASE_URL || "http://localhost:3001";

export const filterOptions: Record<OptionValue, Option> = {
  ALL: {
    label: "All",
    value: "ALL",
  },
  DONE: {
    label: "Done",
    value: "DONE",
  },
  UNDONE: {
    label: "Undone",
    value: "UNDONE",
  },
};
