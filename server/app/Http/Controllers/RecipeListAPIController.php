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
}
