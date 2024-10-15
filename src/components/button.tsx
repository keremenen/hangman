import { cn } from "../assets/lib/utils";

type ButtonProps = {
  children: string;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `small-button-background heading-s bg-blue w-full rounded-full p-2`,
        className,
      )}
    >
      {children}
    </button>
  );
}
