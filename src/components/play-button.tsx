import playIcon from "../assets/images/icon-play.svg";

export default function PlayButton() {
  return (
    <button className="after:shadow-quaternary relative flex size-40 items-center justify-center rounded-full bg-pink-gradient after:absolute after:size-full after:rounded-full after:content-['']">
      <img src={playIcon} alt="play" className="size-14" />
    </button>
  );
}
