import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  API_URL_BASE = 'https://api.edamam.com/api/recipes/v2/';
  API_URL_TYPE = '?type=public&';
  API_ID = `app_id=${environment.app_id}&`;
  API_KEY = `app_key=${environment.api_key}`;

  constructor(private http: HttpClient) {}

  getAll(search: string, health?: string, mealType?: string): Observable<any> {
    let qBase = '&q=';
    let healthBase = '&health=';

    let params = '&q=' + search;

    if (search && health == '') params = qBase + search;
    console.log('s', params);

    if (search && health) params = qBase + search + healthBase + health;

    console.log('?', params);

    return this.http.get<any>(
      this.API_URL_BASE +
        this.API_URL_TYPE +
        this.API_ID +
        this.API_KEY +
        params
    );
  }

  getRecipe(id: string): Observable<any> {
    return this.http.get<any>(
      this.API_URL_BASE + id + this.API_URL_TYPE + this.API_ID + this.API_KEY
    );
  }
}
function q(q: any, search: string) {
  throw new Error('Function not implemented.');
}
