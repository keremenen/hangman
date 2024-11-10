import { cn } from "../lib/utils";

type AbsoluteContainer = {
  children: React.ReactNode;
  className?: string;
};

export default function AbsoluteContainer({
  children,
  className,
}: AbsoluteContainer) {
  return <div className={cn("absolute", className)}>{children}</div>;
}
