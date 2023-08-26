import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RecipeLists } from '../interfaces/recipe-lists';

@Injectable({
  providedIn: 'root'
})
export class RecipeListsService {
  private recipeListApi: string = `${environment.RECIPE_LIST_API}`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) {}

  getRecipeLists(userId: number): Observable<RecipeLists[]> {
    return this.http.get<RecipeLists[]>(
      `${this.recipeListApi}/recipe_lists?id=${userId}`
    );
  }

  createRecpeList(userid: number, title: string): Observable<Object> {
    const formdata = {
      user_id: userid,
      name: title
    };
    return this.http.post(`${this.recipeListApi}/recipe_lists`, formdata);
  }
}
