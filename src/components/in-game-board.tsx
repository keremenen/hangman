import HiddenLetters from "./hidden-letters";
import Keyboard from "./keyboard";
import AppBar from "./app-bar";
import FullPageContainer from "./full-page-container";
import Container from "./container";

export default function InGameBoard() {
  return (
    <FullPageContainer className="pt-12 sm:pt-[61px]">
      <Container className="lg:w-full lg:max-w-[76rem]">
        <AppBar />
        <HiddenLetters className="mt-[78px] sm:mt-[111px] lg:mt-[88px]" />
        <Keyboard className="mt-[118px] sm:mt-[134px] lg:mt-[120px]" />
      </Container>
    </FullPageContainer>
  );
}
