import PlayButtonIcon from "../assets/images/icon-play.svg?react";
export default function PlayButton() {
  return (
    <button className="transition-color hover:brightness-1 relative flex size-40 items-center justify-center rounded-full bg-pink-gradient shadow-secondary-button duration-300 sm:size-[200px]">
      <PlayButtonIcon className="w-[3.375rem] sm:w-[4.125rem]" />
    </button>
  );
}
