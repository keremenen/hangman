import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import backIcon from "../assets/images/icon-back.svg";
import Button from "./button";
import Heading from "./heading";
import { useGameStore } from "../stores/gameStore";
import { Link } from "react-router-dom";
import { slugify } from "../lib/utils";

const hangmanCategories = [
  "Movies",
  "TV shows",
  "Countries",
  "Capital cities",
  "Animals",
  "Sports",
];

export default function CategoryPickBoard() {
  const selectNewCategory = useGameStore((state) => state.selectNewCategory);

  return (
    <section className="mx-auto grid w-full max-w-sm gap-24 py-4">
      <HeaderWrapper>
        <Link to="/">
          <IconButton icon={backIcon} />
        </Link>
        <Heading>Pick a Category</Heading>
      </HeaderWrapper>
      <section className="grid gap-4">
        {hangmanCategories.map((category) => (
          <Link to={`/app?category=${slugify(category)}`}>
            <Button
              key={category}
              size="full"
              className="rounded-2xl py-5 text-2xl"
              value={category}
              onClick={() => selectNewCategory(slugify(category))}
            >
              {category}
            </Button>
          </Link>
        ))}
      </section>
    </section>
  );
}
