<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
        'apply_id',
        'title',
        'my_answer',
        'type'//question_type:Skill,Public,...
    ];
    public function apply(): BelongsTo{
        return $this->belongsTo(Apply::class);
    }
}
