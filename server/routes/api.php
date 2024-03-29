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

Route::group(['middleware' => 'auth:sanctum'], function () {
    // log out user
    Route::post('logout', [AuthController::class, 'logout']);
    // Get user info
    Route::get('user', [AuthController::class, 'getCurrentUser']);
    // Get all recipe lists
    Route::get('recipe_lists', [RecipeListAPIController::class, 'index']);
    // Create recipe list
    Route::post('recipe_lists', [RecipeListAPIController::class, 'create']);
    // Get single Recipe List
    Route::get('recipe_lists/{id}', [RecipeListAPIController::class, 'show']);
    // Update Recipe list
    Route::put('recipe_lists/{id}/edit', [RecipeListAPIController::class, 'update']);
    // Delete single Recipe list
    Route::delete('recipe_lists/{id}/delete', [RecipeListAPIController::class, 'destroy']);
    // Get all recipes
    Route::get('recipes', [RecipeController::class, 'index']);
});