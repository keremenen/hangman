// import MainMenuBoard from "./components/main-menu-board";
import HeaderWrapper from "./components/header-wrapper";
import Heading from "./components/heading";
// import HowToPlayBoard from "./components/how-to-play-board";
import IconButton from "./components/icon-button";
import backIcon from "./assets/images/icon-back.svg";
import Button from "./components/button";

function App() {
  return (
    <section className="mx-auto flex min-h-screen items-center justify-center">
      {/* MAIN MENU */}
      {/* <MainMenuBoard /> */}
      {/* <HowToPlayBoard /> */}
      <section className="grid w-full max-w-[324px] gap-24 py-4">
        <HeaderWrapper>
          <IconButton icon={backIcon} />
          <Heading>Pick a Category</Heading>
        </HeaderWrapper>
        <section className="grid gap-4">
          <Button className="rounded-2xl py-5 text-2xl">movies</Button>
          <Button className="rounded-2xl py-5 text-2xl">TV shows</Button>
          <Button className="rounded-2xl py-5 text-2xl">Countries</Button>
          <Button className="rounded-2xl py-5 text-2xl">capital cities</Button>
          <Button className="rounded-2xl py-5 text-2xl">animals</Button>
          <Button className="rounded-2xl py-5 text-2xl">sports</Button>
        </section>
      </section>
    </section>
  );
}

export default App;
