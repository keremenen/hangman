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
        "mx-auto flex w-full max-w-[324px] flex-col gap-y-[79px] pt-8 sm:max-w-[680px] sm:gap-y-[100px] sm:pt-[61px] md:max-w-[1216px] md:pt-[80px]",
        className,
      )}
    >
      {children}
    </section>
  );
}
