<?php

namespace Database\Seeders;

use App\Models\ActivityLog;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superadmin = User::updateOrCreate(
            ['email' => 'superadmin.bkk@gmail.com'],
            [
                'name' => 'Mas Bram (Super Admin)',
                'password' => 'password',
                'role' => 'superadmin',
            ]
        );

        $admin = User::updateOrCreate(
            ['email' => 'admin.bkk@gmail.com'],
            [
                'name' => 'Pak Danang (Admin BKK)',
                'password' => 'password',
                'role' => 'admin',
            ]
        );

        $siswa = User::updateOrCreate(
            ['email' => 'bagas.siswa@gmail.com'],
            [
                'name' => 'Bagas (Siswa XI RPL)',
                'password' => 'password',
                'role' => 'siswa',
                'nisn' => '0051234567',
            ]
        );

        $alumni = User::updateOrCreate(
            ['email' => 'rizky.alumni@gmail.com'],
            [
                'name' => 'Rizky Dwi (Alumni 2024)',
                'password' => 'password',
                'role' => 'alumni',
                'nisn' => '0049876543',
                'tahun_lulus' => 2024,
            ]
        );

        // Seed initial activity logs
        ActivityLog::create([
            'user_id' => $superadmin->id,
            'action' => 'SYSTEM_INIT',
            'description' => 'Super Admin initialized the BKK system with 4 default roles.',
            'ip_address' => '127.0.0.1',
            'user_agent' => 'Seeder Script',
        ]);

        ActivityLog::create([
            'user_id' => $admin->id,
            'action' => 'LOGIN',
            'description' => 'Admin BKK logged into the system.',
            'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (X11; Linux x86_64)',
        ]);
    }
}
