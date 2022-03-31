import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';


const routes: Routes = [
  {path: "", redirectTo: "recipes", pathMatch: "full" },
  {path: "recipes", component: RecipesListComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
