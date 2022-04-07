import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [RecipesListComponent, RecipeDetailsComponent, SearchComponent],
  imports: [CommonModule, RecipesRoutingModule],
})
export class RecipesModule {}
