export interface Recipe {
  label: string;
  image: string;
}

export interface Recipes {
  recipe: Recipe;
}

export interface edamamAPI {
  hits: Recipes[];
}
