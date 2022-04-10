import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { edamamAPI } from '../recipes';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: any = [];
  query: string = '';

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['q'];

      this.recipeService.getAll(this.query).subscribe((data: edamamAPI) => {
        this.recipes = data.hits.map((res) => res.recipe);
      });
    });
  }

  selectRecipeId(id: string) {
    id = id.split('_')[1];
    this.router.navigate(['/recipes', id]);
  }
}
