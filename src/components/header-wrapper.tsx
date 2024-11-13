import { cn } from "../lib/utils";

type HeaderWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HeaderWrapper({
  children,
  className,
}: HeaderWrapperProps) {
  return (
    <header
      className={cn(
        "relative flex w-full items-center justify-between sm:justify-center",
        className,
      )}
    >
      {children}
    </header>
  );
}
