import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getAll(q: string): Observable<any> {
    return this.http.get<any>(
      this.API_URL_BASE +
        this.API_URL_TYPE +
        'q=' +
        q +
        '&' +
        this.API_ID +
        this.API_KEY
    );
  }

  getRecipe(id: string): Observable<any> {
    return this.http.get<any>(
      this.API_URL_BASE + id + this.API_URL_TYPE + this.API_ID + this.API_KEY
    );
  }
}
