import { cn } from "../lib/utils";

type HeadingProps = {
  children: string;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "bg-heading-blue-gradient text-stroke bg-clip-text text-5xl text-transparent",
        className,
      )}
    >
      {children}
    </h1>
  );
}
