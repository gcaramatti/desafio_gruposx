<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'cnpj',
        'social_name',
        'email',
        'phone_number',
        'postal_code',
        'street',
        'number',
        'neighborhood',
        'state'
    ];

    public function User()
    {
        return this->hasMany(User::class);
    }
}
