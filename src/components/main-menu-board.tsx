import { Link } from "react-router-dom";
import Button from "./button";
import Logo from "./logo";
import PlayButton from "./play-button";
import StyledContainer from "./styled-container";

export default function MainMenuBoard() {
  return (
    <section className="flex min-h-screen justify-center pt-[12.6875rem] sm:pt-[19.8125rem]">
      <StyledContainer className="h-[30.0625rem] w-[20.25rem] sm:h-[31.25rem] sm:w-[37rem]">
        <div className="absolute -mt-20 w-[263px] sm:w-[373px]">
          <Logo />
        </div>

        <Link to="/categories" className="mt-[8.625rem] sm:mt-[8.0625rem]">
          <PlayButton />
        </Link>
        <Link to={"/instructions"}>
          <Button className="mt-[3.625rem]">how to play</Button>
        </Link>
      </StyledContainer>
    </section>
  );
}
