import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe, edamamAPI } from '../recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: any = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipeService.getAll().subscribe((data: edamamAPI) => {
      this.recipes = data.hits.map((res) => res.recipe);
    });
  }

  selectRecipeId(id: string) {
    id = id.split('_')[1];
    this.router.navigate(['/recipes', id]);
  }
}
