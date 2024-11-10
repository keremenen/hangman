import { cn } from "../lib/utils";

type StyledContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function StyledContainer({
  children,
  className,
}: StyledContainerProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col items-center rounded-[3rem] bg-blue-gradient shadow-primary-box sm:rounded-[4.5rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
