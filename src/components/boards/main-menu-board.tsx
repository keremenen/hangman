import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

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
  const MotionStyledContainer = motion(StyledContainer);

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
      <MotionStyledContainer
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      >
        <AbsoluteContainer className="-top-[6rem] max-w-72 sm:max-w-max">
          <Logo />
        </AbsoluteContainer>

        <PlayButton onClick={() => navigate("/categories")} className="mb-14" />

        <Button onClick={() => navigate("/instructions")}>how to play</Button>
      </MotionStyledContainer>
    </FullPageContainer>
  );
}
