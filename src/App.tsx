import playIcon from "./assets/images/icon-play.svg";
import logoHangman from "./assets/images/logo.svg";
import Logo from "./components/Logo";

function App() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center">
      {/* MAIN MENU */}
      <section className="menu-box flex h-[500px] w-full max-w-[324px] flex-col items-center justify-center gap-12 px-8">
        {/* <HangmanLogo /> */}
        <Logo />
        {/* PLAY BUTTON */}
        <button className="play-button bg-pink-gradient flex size-40 items-center justify-center rounded-full">
          <img src={playIcon} alt="play" className="size-14" />
        </button>

        {/* BUTTON */}
        <button className="small-button-background heading-s w-full rounded-full bg-[#2462ff] p-2">
          how to play
        </button>
      </section>
    </section>
  );
}

export default App;
