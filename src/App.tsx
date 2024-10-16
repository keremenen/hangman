import Button from "./components/button";
import Heading from "./components/heading";
// import CategoryPickBoard from "./components/category-pick-board";
// import MainMenuBoard from "./components/main-menu-board";

function App() {
  return (
    <section className="z-10 mx-auto flex min-h-screen items-center justify-center">
      {/* <InGameBoard /> */}
      {/* <CategoryPickBoard /> */}
      {/* <MainMenuBoard /> */}
      <section className="absolute flex">
        <div className="menu-box relative flex w-[324px] flex-col items-center py-20">
          <div className="absolute -top-14">
            <Heading className="text-8xl">Paused</Heading>
          </div>
          <div className="flex flex-col items-center gap-[34px]">
            <Button>Continue</Button>
            <Button>New Category</Button>
            <Button variant="secondary">Quit Game</Button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
