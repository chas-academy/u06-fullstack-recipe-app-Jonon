export interface Recipe {
  label: string;
  image: string;
  uri: string;
}

export interface Recipes {
  recipe: Recipe;
}

export interface edamamAPI {
  hits: Recipes[];
}
