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
        "relative flex w-full flex-col items-center rounded-[3rem] bg-blue-gradient py-28 pb-16 shadow-primary-box sm:max-w-xl sm:rounded-[4.5rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
