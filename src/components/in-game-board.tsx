import HiddenLetters from "./hidden-letters";
import Keyboard from "./keyboard";
import PauseModal from "./pause-modal";
import AppBar from "./app-bar";

export default function InGameBoard() {
  return (
    <section className="mx-auto grid w-full max-w-sm gap-24 py-4">
      <AppBar />
      <HiddenLetters />
      <Keyboard />
    </section>
  );
}
