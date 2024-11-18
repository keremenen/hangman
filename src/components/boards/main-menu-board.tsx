import { useNavigate } from "react-router-dom";

//Components
import Button from "../button";
import Logo from "../logo";
import PlayButton from "../play-button";
import StyledContainer from "../styled-container";
import FullPageContainer from "../full-page-container";
import AbsoluteContainer from "../absolute-container";
import { useEffect } from "react";

export default function MainMenuBoard() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        navigate("/categories");
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <FullPageContainer isCentered>
      <StyledContainer>
        <AbsoluteContainer className="-top-[6rem] max-w-72 sm:max-w-max">
          <Logo />
        </AbsoluteContainer>

        <PlayButton onClick={() => navigate("/categories")} className="mb-14" />

        <Button onClick={() => navigate("/instructions")}>how to play</Button>
      </StyledContainer>
    </FullPageContainer>
  );
}
