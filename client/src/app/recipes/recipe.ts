export interface Recipes {
  recipe: Recipe;
}

export interface Recipe {
  label: string;
  totalTime: number;
  images: images;
  ingredientLines: [];
}

export interface images {
  REGULAR: imageUrl;
}

interface imageUrl {
  url: string;
}
