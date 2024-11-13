import { Link } from "react-router-dom";
import { useGameStore } from "../../stores/gameStore";
import { cn, slugify } from "../../lib/utils";
import { Categories } from "../../lib/types";

//Icons
import BackIcon from "../../assets/images/icon-back.svg?react";

//Components
import Heading from "../heading";
import IconButton from "../icon-button";
import HeaderWrapper from "../header-wrapper";
import CategoryButton from "../category-button";
import FullPageContainer from "../full-page-container";

export default function CategoryPickBoard() {
  const getAllCategories = useGameStore((state) => state.getAllCategories);
  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );
  const categories = getAllCategories();

  return (
    <FullPageContainer
      isCentered={false}
      className="pt-8 sm:pt-16 lg:max-w-[76rem] lg:pt-20"
    >
      <HeaderWrapper>
        <Link to="/" className="sm:absolute sm:left-0">
          <IconButton icon={<BackIcon />} />
        </Link>
        <Heading>Pick a Category</Heading>
      </HeaderWrapper>

      <GameCategories>
        {categories?.map((category, index) => (
          <Link to={`/app?category=${slugify(category)}`} key={index}>
            <CategoryButton
              key={category}
              value={category}
              onClick={() =>
                startGameWithSelectedCategory(category as Categories)
              }
            >
              {category}
            </CategoryButton>
          </Link>
        ))}
      </GameCategories>
    </FullPageContainer>
  );
}

type GameCategoriesProps = {
  children: React.ReactNode;
  className?: string;
};
const GameCategories = ({ children, className }: GameCategoriesProps) => {
  return (
    <section
      className={cn(
        "mt-[79px] grid gap-y-4 sm:mt-[100px] sm:grid-cols-2 sm:gap-x-8 lg:mt-[69px] lg:grid-cols-3 lg:gap-y-[50px]",
        className,
      )}
    >
      {children}
    </section>
  );
};
