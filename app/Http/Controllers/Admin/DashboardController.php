<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $stats = [
            'total_lowongan' => 0,
            'total_siswa_pkl' => User::where('role', 'siswa')->count(),
            'total_alumni' => User::where('role', 'alumni')->count(),
            'testi_pending' => 0,
            'guestbook_baru' => 0,
        ];

        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
        ]);
    }
}
