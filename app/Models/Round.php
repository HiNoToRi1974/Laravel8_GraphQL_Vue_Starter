<?php

namespace App\Models;

use App\Models\Farm;
use App\Models\Pond;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Round extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function farm(): BelongsTo
    {
        return $this->belongsTo(Farm::class);
    }

    public function pond(): BelongsTo
    {
        return $this->belongsTo(Pond::class);
    }

    public function feeds()
    {
        return $this->hasMany(Feed::class);
    }
}
