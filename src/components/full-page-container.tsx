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
        "flex min-h-screen",
        isCentered ? "items-center justify-center" : "justify-center",
        className,
      )}
    >
      {children}
    </section>
  );
}
