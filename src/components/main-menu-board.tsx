import { Link } from "react-router-dom";
import Button from "./button";
import Logo from "./logo";
import PlayButton from "./play-button";
import StyledContainer from "./styled-container";
import PageContainer from "./page-container";
import AbsoluteContainer from "./absolute-container";

export default function MainMenuBoard() {
  return (
    <PageContainer className="pt-[12.6875rem] sm:pt-[19.8125rem] md:pt-[19.6875rem]">
      <StyledContainer className="h-[30.0625rem] w-[20.25rem] sm:h-[31.25rem] sm:w-[37rem]">
        <AbsoluteContainer className="-mt-20 w-[16.4375rem] sm:w-[23.3125rem]">
          <Logo />
        </AbsoluteContainer>

        <Link to="/categories" className="mt-[8.625rem] sm:mt-[8.0625rem]">
          <PlayButton />
        </Link>

        <Link to={"/instructions"}>
          <Button className="mt-[3.625rem]">how to play</Button>
        </Link>
      </StyledContainer>
    </PageContainer>
  );
}
