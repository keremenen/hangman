import { Link } from "react-router-dom";
import Button from "./button";
import Logo from "./logo";
import PlayButton from "./play-button";

export default function MainMenuBoard() {
  return (
    <section className="flex min-h-screen justify-center pt-[12.6875rem] sm:pt-[19.8125rem]">
      <div className="relative flex h-[30.0625rem] w-[20.25rem] justify-center rounded-[3rem] bg-blue-gradient shadow-primary-box sm:h-[31.25rem] sm:w-[37rem] sm:rounded-[4.5rem]">
        <div className="absolute mx-auto -mt-20">
          <Logo />
        </div>
        <div className="mt-[8.625rem] flex flex-col items-center gap-y-[3.5625rem] sm:mt-[8.0625rem]">
          <Link to="/categories">
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
