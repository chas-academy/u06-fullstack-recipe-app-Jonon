import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { RecipeListsService } from '../services/recipe-lists.service';
import { AuthService } from '../services/auth.service';
import { RecipeLists } from '../interfaces/recipe-lists';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {
  applyForm = new FormGroup({
    listName: new FormControl('')
  });

  faPlusCircle = faPlusCircle;
  faPlus = faPlus;

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

  CreateRecipeList() {
    this.authService.getUser().subscribe((data) => {
      this.recipeListService
        .createRecpeList(data.user.id, this.applyForm.value.listName)
        .subscribe(() => {
          this.loadRecipeLists();
        });
    });
  }
}
