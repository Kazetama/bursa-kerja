<?php

use App\Http\Controllers\Alumni\DashboardController;
use App\Http\Middleware\EnsureUserHasRole;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', EnsureUserHasRole::class.':alumni'])
    ->prefix('alumni')
    ->name('alumni.')
    ->group(function () {
        Route::get('/dashboard', DashboardController::class)->name('dashboard');
    });
