import { cn } from "../lib/utils";

type IconButtonProps = {
  icon: string;
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
        "flex size-10 items-center justify-center rounded-full bg-pink-gradient",
        className,
      )}
      onClick={onClick}
    >
      <img src={icon} alt="back" className="size-5" />
    </button>
  );
}
