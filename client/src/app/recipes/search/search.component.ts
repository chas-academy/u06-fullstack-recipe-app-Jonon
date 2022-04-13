import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  health = [
    { name: 'alcohol-cocktail' },
    { name: 'dairy-free' },
    { name: 'DASH' },
    { name: 'egg-free' },
    { name: 'fish-free' },
    { name: 'fodmap-free' },
    { name: 'gluten-free' },
    { name: 'immuno-supportive' },
    { name: 'keto-friendly' },
    { name: 'kidney-friendly' },
    { name: 'kosher' },
    { name: 'low-fat-abs' },
    { name: 'low-potassium' },
    { name: 'low-sugar' },
    { name: 'vegan' }
  ];

  mealType = [
    { name: 'Breakfast' },
    { name: 'Dinner' },
    { name: 'Lunch' },
    { name: 'Snack' },
    { name: 'Teatime' }
  ];

  default: string = 'MealType';

  searchForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: '',
      health: [null],
      mealType: [null]
    });
  }

  ngOnInit(): void {}

  searchFilter() {
    let params = this.searchForm.value;
    let search = params['search'];
    let health = params['health'];
    let mealType = params['mealType'];

    this.router.navigate([''], {
      queryParams: { q: search, health: health, mealType: mealType }
    });
  }
}
