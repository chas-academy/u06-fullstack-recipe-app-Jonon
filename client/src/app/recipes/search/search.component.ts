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
    { name: '' },
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

  searchForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: '',
      health: ''
    });

    this.searchForm.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {}
}
