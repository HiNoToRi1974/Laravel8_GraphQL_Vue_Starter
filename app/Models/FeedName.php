<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FeedName extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function farm()
    {
        return $this->belongsTo(Farm::class);
    }

}
