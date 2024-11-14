import { ButtonHTMLAttributes } from "react";
import PlayButtonIcon from "../assets/images/icon-play.svg?react";
import { cn } from "../lib/utils";

type PlayButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  onClick?: () => void;
};

export default function PlayButton({
  className,
  onClick,
  ...props
}: PlayButtonProps) {
  return (
    <button
      className={cn(
        "transition-color hover:brightness-1 relative flex size-40 items-center justify-center rounded-full bg-pink-gradient shadow-secondary-button outline-none duration-300 hover:brightness-125 focus-visible:brightness-125 sm:size-[200px]",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      <PlayButtonIcon className="w-[3.375rem] sm:w-[4.125rem]" />
    </button>
  );
}
