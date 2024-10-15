import { alphabet } from "../assets/lib/const";

export default function Keyboard() {
  return (
    <section className="flex flex-wrap justify-center gap-x-2 gap-y-4">
      {alphabet.map((letter, index) => (
        <button
          key={index}
          className="text-dark-navy flex items-center justify-center rounded-xl bg-white px-3 py-3 text-2xl"
        >
          {letter}
        </button>
      ))}
    </section>
  );
}
