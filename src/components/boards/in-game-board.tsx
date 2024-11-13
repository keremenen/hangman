import HiddenLetters from "../hidden-letters";
import Keyboard from "../keyboard";
import AppBar from "../app-bar";
import FullPageContainer from "../full-page-container";

export default function InGameBoard() {
  return (
    <FullPageContainer
      isCentered={false}
      className="pt-8 sm:pt-16 lg:max-w-[76rem] lg:pt-20"
    >
      <AppBar />
      <HiddenLetters className="lg:pt-30 pt-28" />
      <Keyboard className="absolute bottom-[10%]" />
    </FullPageContainer>
  );
}
