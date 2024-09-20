<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfferSkill extends Model
{
    use HasFactory;
    protected $table='offer_skills';
    protected $fillable=[
        'offer_id',
        'skill_id',
        'level'
    ];
}
