<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apply extends Model
{
    use HasFactory;
    protected $fillable=[
        'user_id',
        'offer_id',
        'resume_doc',
        'resume_text',
        'status',//Enum
        'url',
        'feedback',
        'applied_at'
    ];
}
