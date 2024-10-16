import Button from "./button";
import Logo from "./logo";
import PlayButton from "./play-button";

export default function MainMenuBoard() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="bg-blue-gradient shadow-tertiary relative grid h-[480px] w-full max-w-[324px] rounded-[48px]">
        <div className="absolute -mt-16 flex flex-col items-center gap-14 px-8">
          <Logo />
          <PlayButton />
          <Button>how to play</Button>
        </div>
      </div>
    </section>
  );
}
