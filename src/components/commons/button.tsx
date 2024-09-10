import { cn } from "@/utils/class.merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}
export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-2 h-12 flex items-center bg-blue-600 text-left text-white w-full",
        className || ""
      )}
    >
      {children}
    </button>
  );
};
