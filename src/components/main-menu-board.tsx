import Button from "./button";
import Logo from "./logo";
import PlayButton from "./play-button";

export default function MainMenuBoard() {
  return (
    <section className="menu-box relative grid h-[480px] w-full max-w-[324px]">
      <div className="absolute -mt-16 flex flex-col items-center gap-14 px-8">
        <Logo />
        <PlayButton />
        <Button>how to play</Button>
      </div>
    </section>
  );
}
