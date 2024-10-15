import menuIcon from "./assets/images/icon-menu.svg";
import IconButton from "./components/icon-button";
import heartIcon from "./assets/images/icon-heart.svg";
import { cn } from "./assets/lib/utils";
import { alphabet } from "./assets/lib/const";

const searchPhrase = "United Kingdom";
const searchPhraseWordArray = searchPhrase.split(" ");

function App() {
  return (
    <section className="mx-auto flex min-h-screen items-center justify-center">
      {/* MAIN MENU */}
      {/* <MainMenuBoard /> */}
      {/* <HowToPlayBoard /> */}
      {/* <CategoryPickBoard /> */}
      <section className="grid w-full max-w-[324px] gap-20 py-4">
        <header className="flex w-full items-center justify-between">
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
        {/* Search phrase */}
        <section className="flex flex-wrap justify-center gap-y-4">
          {searchPhraseWordArray.map((word, wordIndex) => (
            <section key={wordIndex} className="flex gap-x-3">
              {word.split("").map((letter, letterIndex) => {
                const shouldHide = Math.random() < 0.5; // 50% chance to hide the letter
                return (
                  <span
                    key={letterIndex}
                    className={cn(
                      "bg-blue/100 shadow-custom flex h-16 w-9 items-center justify-center overflow-hidden rounded-xl text-4xl",
                      shouldHide && "bg-blue/40 text-transparent shadow-none",
                    )}
                  >
                    {letter.toUpperCase()}
                  </span>
                );
              })}
            </section>
          ))}
        </section>
        {/* Keayboard */}
        <section className="mt-10 flex flex-wrap justify-center gap-x-2 gap-y-4">
          {alphabet.map((letter, index) => (
            <button
              key={index}
              className="text-dark-navy flex items-center justify-center rounded-xl bg-white px-3 py-3 text-2xl"
            >
              {letter}
            </button>
          ))}
        </section>
      </section>
    </section>
  );
}

export default App;
