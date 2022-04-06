import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe, edamamAPI } from '../recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: any = [];
  recipeId: any = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAll().subscribe((data: edamamAPI) => {
      this.recipes = data.hits.map((res) => res.recipe);
      this.recipeId = data.hits.map((res) => res.recipe.uri.split('_')[1]);
    });
  }
}
