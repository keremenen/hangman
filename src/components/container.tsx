import React from "react";
import { cn } from "../lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return <section className={cn("mx-auto", className)}>{children}</section>;
}
