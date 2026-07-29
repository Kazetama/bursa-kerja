<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        $todayStatus = [
            'has_checked_in' => false,
            'has_checked_out' => false,
            'checkin_time' => null,
            'checkout_time' => null,
            'tempat_pkl' => 'PT Nusantara Tech',
        ];

        $rekapAplikasi = [
            'total_hadir' => 15,
            'total_izin' => 1,
            'total_sakit' => 0,
            'total_alpha' => 0,
        ];

        return Inertia::render('siswa/dashboard', [
            'user' => $user,
            'todayStatus' => $todayStatus,
            'rekapAplikasi' => $rekapAplikasi,
        ]);
    }
}
