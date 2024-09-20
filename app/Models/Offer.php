<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;
    protected $fillable=[
        'user_id',
        'title',
        'position',
        'employment_type',
        'company_id',
        'location',
        'description',
        'salary_min',
        'salary_max',
        'salary_text',
        'benefits',
        'document_url',
        'application_url',
        'added_at'
    ];
}
