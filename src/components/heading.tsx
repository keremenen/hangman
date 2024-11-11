import { cn } from "../lib/utils";

type HeadingProps = {
  children: string;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-stroke bg-heading-blue-gradient bg-clip-text text-5xl leading-tight tracking-wider text-transparent sm:text-[6.5rem] sm:tracking-[-0.005em] lg:text-heading-xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
