<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class ShopModel extends Authenticatable
{
    use HasFactory;
    protected $table = 'shops';
    protected $fillable = [
        'phone',
        'name',
        'password',
        'commission_percentage',
        'content',
        'src',
        'display',
        'slug'
    ];

    public function categories()
    {
        return $this->belongsToMany(CategoryModel::class, 'shop_category', 'shop_id', 'category_id');
    }
}
