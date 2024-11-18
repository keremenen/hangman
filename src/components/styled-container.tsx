import React, { forwardRef } from "react";
import { cn } from "../lib/utils";

type StyledContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const StyledContainer = forwardRef<HTMLDivElement, StyledContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full flex-col items-center rounded-[3rem] bg-blue-gradient py-28 pb-16 shadow-primary-box sm:max-w-xl sm:rounded-[4.5rem]",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

export default StyledContainer;
