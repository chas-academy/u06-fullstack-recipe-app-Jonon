import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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

    this.searchForm.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {}

  searchFilter(...args: any[]) {
    let params = args[0];
    let search = params['search'];
    let health = params['health'];

    this.router.navigate([''], {
      queryParams: { q: search, health: health }
    });
  }
}
