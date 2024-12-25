<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProductModel extends Model
{
    use HasFactory;

    protected $table = 'order_products';
    protected $fillable = [
        'order_id',
        'product_id',
        'shop_id',
        'message',
        'quantity',
        'unit_price',
        'buy_for',
        'receiver_phone',
        'barcode',
        'commission_money'
    ];

    public function product()
    {
        return $this->belongsTo(ShopProductModel::class, 'product_id');
    }

    public function order()
    {
        return $this->belongsTo(OrderModel::class, 'order_id');
    }

    public function locations()
    {
        return $this->hasMany(ShopProductLocationModel::class, 'product_id', 'product_id');
    }

    public function shopProduct()
    {
        return $this->belongsTo(ShopProductModel::class, 'product_id', 'id');
    }

}
