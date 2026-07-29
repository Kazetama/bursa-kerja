<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        $tracerStatus = [
            'is_filled' => false,
            'status_kerja' => null,
            'perusahaan_kampus' => null,
            'last_updated' => null,
        ];

        return Inertia::render('alumni/dashboard', [
            'user' => $user,
            'tracerStatus' => $tracerStatus,
        ]);
    }
}
