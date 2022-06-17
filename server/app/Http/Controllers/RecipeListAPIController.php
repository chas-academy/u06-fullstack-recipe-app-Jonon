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

    public function getRecipeList($id) {
        if(RecipeList::where('id', $id)->exists()) {
            $recipeList = RecipeList::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($recipeList, 200);
        } else {
            return response()->json([
                "message" => "Recipe list not found"
            ], 400);
        }
    }
}
