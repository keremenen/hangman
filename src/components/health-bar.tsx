import HeartIcon from "../assets/images/icon-heart.svg?react";

export default function HealthBar({
  currentHealth,
}: {
  currentHealth: number;
}) {
  return (
    <div className="flex items-center gap-4 sm:gap-10">
      <div className="relative flex h-4 w-[57px] items-center rounded-full bg-white px-1 sm:h-[31px] sm:w-[160px] sm:px-[11px] lg:w-[240px]">
        <div
          className="h-2 rounded-full bg-dark-navy sm:h-[13px]"
          style={{ width: `${currentHealth}%` }}
        />
      </div>
      <HeartIcon className="size-7 sm:size-14" />
      {/* <img src={heartIcon} alt="heart icon" className="size-7" /> */}
    </div>
  );
}
