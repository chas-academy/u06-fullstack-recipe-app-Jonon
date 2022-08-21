<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\RecipeListAPIController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function() {
    // log out user
    Route::post('logout', [AuthController::class, 'logout']);
    
    // Get all recipe lists
    Route::get('recipe_lists', [RecipeListAPIController::class, 'getAllRecipeLists']);
    // Create recipe list
    Route::post('recipe_lists', [RecipeListAPIController::class, 'createRecipeList']);
    // Get single Recipe List by id
    Route::get('recipe_lists/{recipe_list_id}', [RecipeListAPIController::class, 'getRecipeList']);
    // Update Recipe list
    Route::put('recipe_lists/{recipe_list_id}/edit', [RecipeListAPIController::class, 'updateRecipeList']);
    // Delete single Recipe list
    Route::delete('recipe_lists/{recipe_list_id}/delete', [RecipeListAPIController::class, 'deleteRecipeList']);

    // Get all recipes by recipe_list_id
    Route::get('recipes', [RecipeController::class, 'getAllRecipes']);
});
