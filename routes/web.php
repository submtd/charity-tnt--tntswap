<?php

use Illuminate\Support\Facades\Route;

// AJAX Routes.
Route::group([
    'namespace' => '\App\Http\Controllers',
], static function () {
    Route::get('api/v1/settings', 'GetSettings');
});

// SPA Route.
Route::get('{any}', static function () {
    return view('app');
})->where('any', '.*');

// 404.
Route::get('404', static function () {
    return response('not found', 404);
});
