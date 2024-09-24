<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Company extends Model
{
    use HasFactory;
    protected $fillable=[
        'center_office_city_id',
        'name',
        'website',
        'description',
        'number', //Number of employees
        'application_source',
        'discovery_source',
        'is_active',
    ];
    public function city(): BelongsTo{
        return $this->belongsTo(City::class, 'center_office_city_id');
    }
    public function offers(){
        return $this->hasMany(Offer::class);
    }
}
