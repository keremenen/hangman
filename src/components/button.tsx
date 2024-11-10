import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  className?: string;
  variant?: "default" | "secondary" | "square";
  size?: "default" | "full";
};

const buttonVariants = cva(
  "px-16 py-2 text-heading-s uppercase rounded-full min-h-[62px] whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none transition-color ease-in-out duration-200",
  {
    variants: {
      variant: {
        default: "bg-blue shadow-primary-button hover:bg-[#5B8AFF]",
        secondary: "bg-pink-gradient shadow-secondary hover:brightness-125",
        square: "rounded-2xl py-5 text-2xl",
      },
      size: {
        default: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export default function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
