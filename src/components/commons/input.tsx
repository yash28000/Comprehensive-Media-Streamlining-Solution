"use client";
import { cn } from "@/utils/class.merge";

interface InputProps extends React.AllHTMLAttributes<HTMLInputElement> {
  classname?: string;
}
export const Input = ({ classname, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn(
        "w-full h-12 px-4 py-2 border-b-[1px] border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        classname || ""
      )}
    />
  );
};
