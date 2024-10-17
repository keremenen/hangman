import HiddenLetters from "./hidden-letters";
import Keyboard from "./keyboard";
import AppBar from "./app-bar";

export default function InGameBoard() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-sm flex-col gap-24 py-4">
      <AppBar />
      <HiddenLetters />
      <Keyboard />
    </section>
  );
}
