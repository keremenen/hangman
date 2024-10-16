import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import backIcon from "../assets/images/icon-back.svg";
import Button from "./button";
import Heading from "./heading";
import { useGameStore } from "../stores/gameStore";

const hangmanCategories = [
  "movies",
  "TV shows",
  "countries",
  "capital cities",
  "animals",
  "sports",
];

export default function CategoryPickBoard() {
  const selectNewCategory = useGameStore((state) => state.selectNewCategory);

  return (
    <section className="mx-auto grid w-full max-w-sm gap-24 py-4">
      <HeaderWrapper>
        <IconButton icon={backIcon} />
        <Heading>Pick a Category</Heading>
      </HeaderWrapper>
      <section className="grid gap-4">
        {hangmanCategories.map((category) => (
          <Button
            key={category}
            size="full"
            className="rounded-2xl py-5 text-2xl"
            value={category}
            onClick={() => selectNewCategory(category)}
          >
            {category}
          </Button>
        ))}
      </section>
    </section>
  );
}
