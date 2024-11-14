import { Link } from "react-router-dom";

//Components
import Button from "../button";
import Logo from "../logo";
import PlayButton from "../play-button";
import StyledContainer from "../styled-container";
import FullPageContainer from "../full-page-container";
import AbsoluteContainer from "../absolute-container";

export default function MainMenuBoard() {
  return (
    <FullPageContainer isCentered>
      <StyledContainer>
        <AbsoluteContainer className="-top-[6rem] max-w-72 sm:max-w-max">
          <Logo />
        </AbsoluteContainer>

        <Link to="/categories" className="mb-14">
          <PlayButton />
        </Link>

        <Button as={Link} to={"/instructions"}>
          how to play
        </Button>
      </StyledContainer>
    </FullPageContainer>
  );
}
