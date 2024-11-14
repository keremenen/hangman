import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = cva(
  "flex items-center px-16 text-heading-s uppercase rounded-full h-[62px] whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none transition-color ease-in-out duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blue shadow-primary-button hover:bg-[#5B8AFF] focus-visible:bg-[#5B8AFF]",
        secondary:
          "bg-pink-gradient shadow-secondary-button hover:brightness-125 focus-visible:brightness-125",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export default function Button<T extends ElementType = "button">({
  as,
  variant,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";
  return (
    <Component
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Component>
  );
}
