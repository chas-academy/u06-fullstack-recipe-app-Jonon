import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { RecipeListsService } from '../services/recipe-lists.service';
import { AuthService } from '../services/auth.service';
import { RecipeLists } from '../interfaces/recipe-lists';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {
  faPlusCircle = faPlusCircle;

  public recipeLists: RecipeLists[] = [];

  constructor(
    private authService: AuthService,
    private recipeListService: RecipeListsService
  ) {}

  ngOnInit() {
    this.loadRecipeLists();
  }

  loadRecipeLists() {
    this.authService.getUser().subscribe((data) => {
      this.recipeListService
        .getRecipeLists(data.user.id)
        .subscribe((data) => (this.recipeLists = data));
    });
  }
}
