<?php

namespace App\Http\Controllers;

use App\Models\RecipeList;
use Illuminate\Http\Request;

class RecipeListAPIController extends Controller
{
    /** 
     * Display listing of resource by specific query param id 
    */
    public function index() {

        $user_id = request('id');

        $recipeLists = RecipeList::where('user_id', $user_id)->get();
        return response()->json($recipeLists, 200);
    }

    public function create(Request $request) {
        $recipeList = new RecipeList();
        $recipeList->name = $request->name;
        $recipeList->user_id = $request->user_id;
        $recipeList->save();

        return response()->json([
            "message" => "Recipe List created"
        ], 201);
    }

    public function show($id) {
        if(RecipeList::where('id', $id)->exists()) {
            $recipeList = RecipeList::where('id', $id)->get();
            return response()->json($recipeList, 200);
        } else {
            return response()->json([
                "message" => "Recipe list not found"
            ], 400);
        }
    }

    public function update(Request $request, $id) {
        if(RecipeList::where('id', $id)->exists()) {
            $recipeList = RecipeList::find($id);

            $recipeList->name = is_null($request->name) ? $recipeList->name : $request->name;
            $recipeList->save();

            return response()->json([
                "message" => "Recipe list updated"
            ], 200);
        } else {
            return response()->json([
                "message" => "Recipe list not found"
            ], 404);
        }
    }

    public function destroy($id) {
        if(RecipeList::where('id', $id)->exists()) {
            $recipeList = RecipeList::find($id);
            $recipeList->delete();

            return response()->json([
                "message" => "Recipe list deleted"
            ], 200);
        } else {
            return response()->json([
                "message" => "Recipe list not found"
            ], 404);
        }
    }
}
