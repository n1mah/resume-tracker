<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
        'apply_id',
        'title',
        'my_answer',
        'type'//question_type:Skill,Public,...
    ];
}
