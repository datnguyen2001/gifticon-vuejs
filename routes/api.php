<?php

use App\Http\Controllers\web\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('banner', [HomeController::class, 'banner']);
Route::get('sale-today', [HomeController::class, 'saleToday']);
Route::get('trademark', [HomeController::class, 'trademark']);
Route::get('category', [HomeController::class, 'category']);
Route::get('may-like', [HomeController::class, 'mayLike']);
Route::get('search', [HomeController::class, 'search']);
Route::get('product-sort-by-category', [HomeController::class, 'productSortByCategory']);
