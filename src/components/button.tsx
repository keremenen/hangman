import { cn } from "../assets/lib/utils";

type ButtonProps = {
  children: string;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `small-button-background bg-blue w-full rounded-full p-2 text-3xl uppercase tracking-[1.5px]`,
        className,
      )}
    >
      {children}
    </button>
  );
}
