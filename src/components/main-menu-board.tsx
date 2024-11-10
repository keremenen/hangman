import { Link } from "react-router-dom";
import Button from "./button";
import Logo from "./logo";
import PlayButton from "./play-button";

export default function MainMenuBoard() {
  return (
    <section className="flex min-h-screen justify-center pt-[203px]">
      <div className="relative flex h-[481px] w-[324px] justify-center rounded-[48px] bg-blue-gradient shadow-primary-box">
        <div className="absolute top-0 mx-auto -mt-20 max-w-[263px]">
          <Logo />
        </div>
        <div className="mt-[138px] flex flex-col items-center gap-y-[57px]">
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
