import { Link } from "react-router-dom";
import Button from "./button";
import Logo from "./logo";
import PlayButton from "./play-button";

export default function MainMenuBoard() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="relative flex h-[440px] w-full max-w-sm flex-col items-center justify-center rounded-[48px] bg-blue-gradient shadow-tertiary">
        <div className="absolute top-0 mx-auto -mt-12 max-w-60">
          <Logo />
        </div>
        <div className="mt-8 flex flex-col items-center gap-y-12">
          <Link to="/category">
            <PlayButton />
          </Link>
          <Link to={"/instructions"}>
            <Button>how to play</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
