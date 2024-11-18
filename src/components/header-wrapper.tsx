import { forwardRef } from "react";
import { cn } from "../lib/utils";

type HeaderWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const HeaderWrapper = forwardRef<HTMLHeadingElement, HeaderWrapperProps>(
  ({ children, className }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "relative flex w-full items-center justify-between sm:justify-center",
          className,
        )}
      >
        {children}
      </header>
    );
  },
);

export default HeaderWrapper;
