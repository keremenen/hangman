import { cn } from "../lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <section className={cn("flex justify-center", className)}>
      {children}
    </section>
  );
}
