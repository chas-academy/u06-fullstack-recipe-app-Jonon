<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeList extends Model
{
    protected $table = 'recipe_lists';

    public function recipes() {
        return $this->hasMany(Recipe::class);
    }
}
