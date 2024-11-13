import HiddenLetters from "../hidden-letters";
import Keyboard from "../keyboard";
import AppBar from "../app-bar";
import FullPageContainer from "../full-page-container";

export default function InGameBoard() {
  return (
    <FullPageContainer
      isCentered={false}
      className="relative pt-8 sm:pt-16 lg:max-w-[76rem] lg:pt-20"
    >
      <AppBar />
      <HiddenLetters className="pt-28 sm:pt-20" />
      <Keyboard className="absolute bottom-[15%]" />
    </FullPageContainer>
  );
}
