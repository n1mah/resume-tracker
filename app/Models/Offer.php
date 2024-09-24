<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Offer extends Model
{
    use HasFactory;
    protected $fillable=[
        'user_id',
        'company_id',
        'city_id',
        'title',
        'position',
        'employment_type',
        'location',
        'description',
        'salary_min',
        'salary_max',
        'salary_text',
        'benefits',
        'document_url',
        'application_url',
        'is_visa_needed',
        'is_authorized',
        'is_living',
        'reference',
        'added_at',
        'is_active'
    ];
    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }
    public function city(): BelongsTo{
        return $this->belongsTo(City::class);
    }
    public function company(): BelongsTo{
        return $this->belongsTo(Company::class);
    }

    public function skills():belongsToMany
    {
        return $this->belongsToMany(Skill::class);
    }
}
