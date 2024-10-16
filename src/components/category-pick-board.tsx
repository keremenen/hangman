import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import backIcon from "../assets/images/icon-back.svg";
import Button from "./button";
import Heading from "./heading";
import { Link } from "react-router-dom";
import { getAllCategories, handleCategoryChoice, slugify } from "../lib/utils";

export default function CategoryPickBoard() {
  const categories = getAllCategories();

  return (
    <section className="mx-auto grid w-full max-w-sm gap-24 py-4">
      <HeaderWrapper>
        <Link to="/">
          <IconButton icon={backIcon} />
        </Link>
        <Heading>Pick a Category</Heading>
      </HeaderWrapper>

      <section className="grid gap-4">
        {categories?.map((category, index) => (
          <Link to={`/app?category=${slugify(category)}`} key={index}>
            <Button
              key={category}
              size="full"
              className="rounded-2xl py-5 text-2xl"
              value={category}
              onClick={() => handleCategoryChoice(category)}
            >
              {category}
            </Button>
          </Link>
        ))}
      </section>
    </section>
  );
}
