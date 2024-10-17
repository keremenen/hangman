import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import backIcon from "../assets/images/icon-back.svg";
import Button from "./button";
import Heading from "./heading";
import { Link } from "react-router-dom";
import { useGameStore } from "../stores/gameStore";
import { slugify } from "../lib/utils";
import { Categories } from "../lib/types";

export default function CategoryPickBoard() {
  const getAllCategories = useGameStore((state) => state.getAllCategories);
  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );
  const categories = getAllCategories();

  return (
    <section className="mx-auto grid w-full max-w-sm gap-24 py-4">
      <HeaderWrapper>
        <Link to="/">
          <IconButton icon={backIcon} />
        </Link>
        <Heading>Pick a Category</Heading>
      </HeaderWrapper>

      <section className="flex flex-col gap-4">
        {categories?.map((category, index) => (
          <Link to={`/app?category=${slugify(category)}`} key={index}>
            <Button
              key={category}
              size="full"
              className="rounded-2xl py-5 text-2xl"
              value={category}
              onClick={() =>
                startGameWithSelectedCategory(category as Categories)
              }
            >
              {category}
            </Button>
          </Link>
        ))}
      </section>
    </section>
  );
}
