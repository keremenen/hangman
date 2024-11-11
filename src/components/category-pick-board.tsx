import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import backIcon from "../assets/images/icon-back.svg";
import Heading from "./heading";
import { Link } from "react-router-dom";
import { useGameStore } from "../stores/gameStore";
import { cn, slugify } from "../lib/utils";
import { Categories } from "../lib/types";
import Container from "./container";
import FullPageContainer from "./full-page-container";
import CategoryButton from "./category-button";

export default function CategoryPickBoard() {
  const getAllCategories = useGameStore((state) => state.getAllCategories);
  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );
  const categories = getAllCategories();

  return (
    <FullPageContainer className="pt-8 sm:pt-[61px] lg:pt-20">
      <Container className="w-full lg:max-w-[76rem]">
        <HeaderWrapper>
          <Link to="/" className="sm:absolute sm:left-0">
            <IconButton icon={backIcon} />
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
      </Container>
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
