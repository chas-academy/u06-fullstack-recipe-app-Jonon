<?php

use App\Http\Controllers\AuthController;
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
Route::get('login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function() {
    // log out user
    Route::post('logout', [AuthController::class, 'logout']);
    
    // Get all recipe lists
    Route::get('recipeLists', [RecipeListAPIController::class, 'getAllRecipeLists']);
    // Create recipe list
    Route::post('recipeLists', [RecipeListAPIController::class, 'createRecipeList']);
    // Get single Recipe List by id
    Route::get('recipeLists/{id}', [RecipeListAPIController::class, 'getRecipeList']);
    // Update Recipe list
    Route::put('recipeLists/{id}/edit', [RecipeListAPIController::class, 'updateRecipeList']);
    // Delete single Recipe list
    Route::delete('recipeLists/{id}/delete', [RecipeListAPIController::class, 'deleteRecipeList']);
});


