import { twMerge } from "tailwind-merge";

export const cn = (preClass: string, newClass: string) => {
  return twMerge(preClass, newClass);
};
