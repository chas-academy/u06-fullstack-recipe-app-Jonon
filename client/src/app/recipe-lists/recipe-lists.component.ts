import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
