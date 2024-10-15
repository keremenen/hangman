// import MainMenuBoard from "./components/main-menu-board";
import HeaderWrapper from "./components/header-wrapper";
import Heading from "./components/heading";
import HowToPlayBoard from "./components/how-to-play-board";
import IconButton from "./components/icon-button";
import backIcon from "./assets/images/icon-back.svg";
import Button from "./components/button";

function App() {
  return (
    <section className="mx-auto flex min-h-screen items-center justify-center">
      {/* MAIN MENU */}
      {/* <MainMenuBoard /> */}
      {/* <HowToPlayBoard /> */}
      <section className="grid w-full max-w-[324px] gap-20 py-4">
        <HeaderWrapper>
          <IconButton icon={backIcon} />
          <Heading>Pick a Category</Heading>
        </HeaderWrapper>
        <section>
          <Button className="rounded-lg">movies</Button>
        </section>
      </section>
    </section>
  );
}

export default App;
