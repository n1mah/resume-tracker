<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
        'applied_at',
        'is_active',
    ];
    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
