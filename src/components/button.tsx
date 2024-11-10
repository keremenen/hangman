import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  className?: string;
  variant?: "primary" | "secondary";
};

const buttonVariants = cva(
  "flex items-center px-16 text-heading-s uppercase rounded-full h-[62px] whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none transition-color ease-in-out duration-200 ",
  {
    variants: {
      variant: {
        primary: "bg-blue shadow-primary-button hover:brightness-125",
        secondary:
          "bg-pink-gradient shadow-secondary-button hover:brightness-125",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export default function Button({
  variant,

  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
}
