import menuIcon from "./assets/images/icon-menu.svg";
import IconButton from "./components/icon-button";
import heartIcon from "./assets/images/icon-heart.svg";

function App() {
  return (
    <section className="mx-auto flex min-h-screen items-center justify-center">
      {/* MAIN MENU */}
      {/* <MainMenuBoard /> */}
      {/* <HowToPlayBoard /> */}
      {/* <CategoryPickBoard /> */}
      <section className="grid w-full max-w-[324px] gap-24 py-4">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <IconButton icon={menuIcon} />
            <h1 className="text-4xl tracking-wide">Countries</h1>
          </div>

          {/* HP BAR */}
          <div className="flex items-center gap-4">
            <div className="after:bg-dark-navy a relative flex h-4 w-[57px] items-center rounded-full bg-white px-2 after:h-2 after:w-[30%] after:rounded-full after:content-['']" />
            <img src={heartIcon} alt="heart icon" className="size-7" />
          </div>
        </header>
      </section>
    </section>
  );
}

export default App;
