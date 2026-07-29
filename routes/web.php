<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function (Request $request) {
        $role = $request->user()->role ?? 'siswa';

        return redirect()->route("{$role}.dashboard");
    })->name('dashboard');
});

require __DIR__.'/superadmin.php';
require __DIR__.'/admin.php';
require __DIR__.'/siswa.php';
require __DIR__.'/alumni.php';
require __DIR__.'/settings.php';
