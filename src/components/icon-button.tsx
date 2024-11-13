import React from "react";
import { cn } from "../lib/utils";

type IconButtonProps = {
  icon: React.JSX.Element;
  onClick?: () => void;
  className?: string;
};

export default function IconButton({
  icon,
  onClick,
  className,
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "flex size-10 items-center justify-center rounded-full bg-pink-gradient sm:size-16 lg:size-[94px]",
        className,
      )}
      onClick={onClick}
    >
      {React.cloneElement(icon, { className: "size-4 sm:size-7 lg:size-10" })}
    </button>
  );
}
