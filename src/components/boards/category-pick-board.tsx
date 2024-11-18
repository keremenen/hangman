import { Link } from "react-router-dom";
import { useGameStore } from "../../stores/gameStore";
import { cn, slugify } from "../../lib/utils";
import { useNavigate } from "react-router-dom";

//Icons
import BackIcon from "../../assets/images/icon-back.svg?react";

//Components
import Heading from "../heading";
import IconButton from "../icon-button";
import HeaderWrapper from "../header-wrapper";

import FullPageContainer from "../full-page-container";
import { useEffect } from "react";
import Button from "../button";

export default function CategoryPickBoard() {
  const navigate = useNavigate();
  const getAllCategories = useGameStore((state) => state.getAllCategories);
  const categories = getAllCategories();

  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <FullPageContainer
      isCentered={false}
      className="pt-8 sm:pt-16 lg:max-w-[76rem] lg:pt-20"
    >
      <HeaderWrapper>
        <IconButton
          icon={<BackIcon />}
          className="sm:absolute sm:left-0"
          onClick={() => {
            navigate("/");
          }}
        />

        <Heading>Pick a Category</Heading>
      </HeaderWrapper>

      <GameCategories>
        {categories?.map((category, index) => (
          // <Link to={`/app?category=${slugify(category)}`} key={index}>
          <Button
            key={index}
            value={category}
            size="large"
            onClick={() => {
              startGameWithSelectedCategory(category);
              navigate(`/app?/category=${slugify(category)}`);
            }}
          >
            {category}
          </Button>
          // </Link>
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
