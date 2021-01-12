<?php

namespace App\Models;

use App\Models\User;
use App\Models\Feed;
use App\Models\Pond;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;


class Farm extends Model
{
    use SoftDeletes;
    use HasFactory;

    public function ponds(): HasMany
    {
        return $this->hasMany(Pond::class);
    }

    public function feeds(): HasMany
    {
        return $this->hasMany(Feed::class);
    }

    public function MineralNames(): HasMany
    {
        return $this->hasMany(MineralNames::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function feedName()
    {
        return $this->hasMany(FeedName::class);
    }

    public function ExpenseType()
    {
        return $this->hasMany(ExpenseType::class);
    }
}
