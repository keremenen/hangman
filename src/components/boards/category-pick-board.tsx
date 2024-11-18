import { useGameStore } from "../../stores/gameStore";
import { cn, slugify } from "../../lib/utils";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

//Icons
import BackIcon from "../../assets/images/icon-back.svg?react";

//Components
import Heading from "../heading";
import IconButton from "../icon-button";
import HeaderWrapper from "../header-wrapper";

import FullPageContainer from "../full-page-container";
import { forwardRef, useEffect } from "react";
import Button from "../button";

export default function CategoryPickBoard() {
  const navigate = useNavigate();
  const getAllCategories = useGameStore((state) => state.getAllCategories);
  const categories = getAllCategories();
  const MotionHeaderWrapper = motion(HeaderWrapper);
  const MotionGameCategories = motion(GameCategories);

  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7 + i * 0.2,
      },
    }),
  };
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
    },
  };

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
      <MotionHeaderWrapper
        initial={{ left: "100vh", opacity: 0 }}
        animate={{
          left: 0,
          opacity: 1,
          transition: { duration: 0.7, ease: "easeInOut" },
        }}
      >
        <IconButton
          icon={<BackIcon />}
          className="sm:absolute sm:left-0"
          onClick={() => {
            navigate("/");
          }}
        />

        <Heading>Pick a Category</Heading>
      </MotionHeaderWrapper>

      <MotionGameCategories
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-[79px] grid gap-y-4 sm:mt-[100px] sm:grid-cols-2 sm:gap-x-8 lg:mt-[69px] lg:grid-cols-3 lg:gap-y-[50px]"
      >
        {categories?.map((category, index) => (
          <motion.div key={index} custom={index} variants={buttonVariants}>
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
          </motion.div>
        ))}
      </MotionGameCategories>
    </FullPageContainer>
  );
}

type GameCategoriesProps = {
  children: React.ReactNode;
  className?: string;
};
const GameCategories = forwardRef<HTMLDivElement, GameCategoriesProps>(
  ({ children, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "mt-[79px] grid gap-y-4 sm:mt-[100px] sm:grid-cols-2 sm:gap-x-8 lg:mt-[69px] lg:grid-cols-3 lg:gap-y-[50px]",
          className,
        )}
      >
        {children}
      </section>
    );
  },
);
