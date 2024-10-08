<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MySkill extends Model
{
    use HasFactory;
    protected $table = 'skill_user';
    protected $fillable=[
        'user_id',
        'skill_id',
        'level',
        'years_of_experience',
        'is_active'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function skill(){
        return $this->belongsTo(Skill::class);
    }
}
