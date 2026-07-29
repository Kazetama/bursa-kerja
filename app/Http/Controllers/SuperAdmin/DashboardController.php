<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $totalUsers = User::count();
        $userRoleCounts = [
            'superadmin' => User::where('role', 'superadmin')->count(),
            'admin' => User::where('role', 'admin')->count(),
            'siswa' => User::where('role', 'siswa')->count(),
            'alumni' => User::where('role', 'alumni')->count(),
        ];

        $recentLogs = ActivityLog::with('user:id,name,email,role')
            ->latest()
            ->limit(10)
            ->get();

        $users = User::select('id', 'name', 'email', 'role', 'created_at')
            ->latest()
            ->get();

        return Inertia::render('superadmin/dashboard', [
            'totalUsers' => $totalUsers,
            'userRoleCounts' => $userRoleCounts,
            'recentLogs' => $recentLogs,
            'users' => $users,
        ]);
    }
}
