<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    protected $fillable=[
        'city_id',
        'name',
        'website',
        'description',
        'number', //Number of employees
        'application_source',
        'discovery_source',
    ];
}
