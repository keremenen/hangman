import { cn } from "../lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FullPageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <section className={cn("flex min-h-screen justify-center", className)}>
      {children}
    </section>
  );
}
