import playIcon from "../assets/images/icon-play.svg";

export default function PlayButton() {
  return (
    <button className="play-button bg-pink-gradient flex size-40 items-center justify-center rounded-full">
      <img src={playIcon} alt="play" className="size-14" />
    </button>
  );
}
