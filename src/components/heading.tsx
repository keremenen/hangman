import { cn } from "../lib/utils";

type HeadingProps = {
  children: string;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-stroke bg-heading-blue-gradient bg-clip-text text-5xl text-transparent sm:text-[6.5rem]",
        className,
      )}
    >
      {children}
    </h1>
  );
}
