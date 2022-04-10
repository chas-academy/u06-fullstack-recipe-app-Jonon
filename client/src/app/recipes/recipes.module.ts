import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [RecipesListComponent, RecipeDetailsComponent, SearchComponent],
  imports: [CommonModule, ReactiveFormsModule, RecipesRoutingModule]
})
export class RecipesModule {}
