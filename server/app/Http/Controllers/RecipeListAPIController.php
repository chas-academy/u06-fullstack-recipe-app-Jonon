<?php

namespace App\Http\Controllers;

use App\Models\RecipeList;
use Illuminate\Http\Request;

class RecipeListAPIController extends Controller
{
    public function getAllRecipeLists() {
        $recipeLists = RecipeList::get()->toJson(JSON_PRETTY_PRINT);
        return response($recipeLists, 200);
    }

    public function createRecipeList(Request $request) {
        $recipeList = new RecipeList();
        $recipeList->name = $request->name;
        $recipeList->save();

        return response()->json([
            "message" => "Recipe List created"
        ], 201);
    }

    
}
