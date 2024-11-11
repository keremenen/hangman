import React from "react";
import { cn } from "../lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <section
      className={cn(
        "max-w-[324px] flex-col gap-y-[79px] sm:max-w-[680px] sm:gap-y-[100px] md:max-w-[1216px]",
        className,
      )}
    >
      {children}
    </section>
  );
}
