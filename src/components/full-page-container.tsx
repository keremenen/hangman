import { cn } from "../lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  isCentered?: boolean;
};

export default function FullPageContainer({
  children,
  className,
  isCentered = true,
}: PageContainerProps) {
  return (
    <section
      className={cn(
        "mx-auto flex min-h-screen flex-col justify-start",
        className,
        {
          "items-center justify-center": isCentered,
        },
      )}
    >
      {children}
    </section>
  );
}
