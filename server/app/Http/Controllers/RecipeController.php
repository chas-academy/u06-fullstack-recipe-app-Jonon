<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index() {
      $recipe_list_id = request('recipe_list_id');

      $recipe = Recipe::where('recipe_list_id', $recipe_list_id)->get();
        return response()->json($recipe, 200);
    }
}
