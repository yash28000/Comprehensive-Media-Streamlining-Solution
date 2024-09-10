import { cn } from "@/utils/class.merge";

interface InputProps {
  onChange?: (e: string) => void;
  classname?: string;
  [key: string]: any;
}
export const Input = ({ onChange, classname, ...props }: InputProps) => {
  return (
    <input
      onChange={(e) => onChange && onChange(e.target.value)}
      {...props}
      className={cn(
        "w-full h-12 px-4 py-2 border-b-[1px] border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        classname || ""
      )}
    />
  );
};
