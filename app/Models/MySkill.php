<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MySkill extends Model
{
    use HasFactory;
    protected $fillable=[
        'user_id',
        'skill_id',
        'level',
        'years_of_experience'
    ];
}
