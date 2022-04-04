import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=mexico&app_id=${environment.app_id}&app_key=${environment.api_key}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
