import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ButtonHTMLAttributes } from "react";

type CategoryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  className?: string;
};

const buttonVariants = cva(
  "flex items-center justify-center bg-blue py-6 rounded-[20px] w-full uppercase shadow-primary-button sm:py-[62px] text-[24px] sm:text-heading-m sm:rounded-[40px] tracking-wider",
);

export default function CategoryButton({
  className,
  children,
  ...props
}: CategoryButtonProps) {
  return (
    <button className={cn(buttonVariants({ className }))} {...props}>
      {children}
    </button>
  );
}
