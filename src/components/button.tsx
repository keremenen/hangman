import { cn } from "../lib/utils";

type ButtonProps = {
  children: string;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `shadow-button bg-blue rounded-full px-12 py-3 text-3xl uppercase tracking-[1.5px]`,
        className,
      )}
    >
      {children}
    </button>
  );
}
