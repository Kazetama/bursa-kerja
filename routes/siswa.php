<?php

use App\Http\Controllers\Siswa\DashboardController;
use App\Http\Middleware\EnsureUserHasRole;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', EnsureUserHasRole::class.':siswa'])
    ->prefix('siswa')
    ->name('siswa.')
    ->group(function () {
        Route::get('/dashboard', DashboardController::class)->name('dashboard');
    });
