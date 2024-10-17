export type CategoryItem = {
  name: string;
};

export type CategoryTree = {
  movies: CategoryItem[];
  "tv shows": CategoryItem[];
  countries: CategoryItem[];
  "capital cities": CategoryItem[];
  animals: CategoryItem[];
  sports: CategoryItem[];
};

export type Categories = keyof CategoryTree;
