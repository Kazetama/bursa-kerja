import { Head } from '@inertiajs/react';
import { Briefcase, Image, GraduationCap, Users, MessageSquareQuote, BookOpen } from 'lucide-react';

interface AdminDashboardProps {
    stats: {
        total_lowongan: number;
        total_siswa_pkl: number;
        total_alumni: number;
        testi_pending: number;
        guestbook_baru: number;
    };
}

export default function AdminDashboard({ stats }: AdminDashboardProps) {
    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Header Section */}
                <div className="flex flex-col gap-2 rounded-xl bg-gradient-to-r from-blue-950 via-slate-900 to-sky-950 p-6 text-white shadow-lg border border-blue-800/40">
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-blue-600/30 p-2.5 backdrop-blur-md border border-blue-500/30">
                            <Briefcase className="h-7 w-7 text-blue-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Admin Panel BKK</h1>
                            <p className="text-sm text-blue-200/80">
                                Pengelolaan Konten, PKL, dan Tracer Study Bursa Kerja Khusus (BKK)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Lowongan</span>
                            <Briefcase className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold">{stats.total_lowongan}</div>
                        <p className="mt-1 text-xs text-muted-foreground">Lowongan aktif</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Siswa PKL</span>
                            <Users className="h-5 w-5 text-emerald-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-emerald-600 dark:text-emerald-400">{stats.total_siswa_pkl}</div>
                        <p className="mt-1 text-xs text-muted-foreground">Terdaftar PKL</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Alumni</span>
                            <GraduationCap className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-amber-600 dark:text-amber-400">{stats.total_alumni}</div>
                        <p className="mt-1 text-xs text-muted-foreground">Database Alumni</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Testimoni</span>
                            <MessageSquareQuote className="h-5 w-5 text-purple-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.testi_pending}</div>
                        <p className="mt-1 text-xs text-muted-foreground">Menunggu persetujuan</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Buku Tamu</span>
                            <BookOpen className="h-5 w-5 text-rose-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-rose-600 dark:text-rose-400">{stats.guestbook_baru}</div>
                        <p className="mt-1 text-xs text-muted-foreground">Entri baru</p>
                    </div>
                </div>

                {/* Main Action Banner */}
                <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-6 shadow-sm dark:border-sidebar-border">
                    <h2 className="text-lg font-semibold mb-2">Aksi Cepat Admin Panel</h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Pilih modul yang ingin Anda kelola dari menu sidebar atau melalui tombol di bawah ini.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border border-border p-4 hover:border-blue-500/50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3 mb-2">
                                <Briefcase className="h-5 w-5 text-blue-500" />
                                <h3 className="font-semibold text-sm">Kelola Lowongan</h3>
                            </div>
                            <p className="text-xs text-muted-foreground">Posting, edit, dan atur batas waktu lowongan kerja mitra.</p>
                        </div>
                        <div className="rounded-lg border border-border p-4 hover:border-emerald-500/50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3 mb-2">
                                <Users className="h-5 w-5 text-emerald-500" />
                                <h3 className="font-semibold text-sm">Rekap Absensi PKL</h3>
                            </div>
                            <p className="text-xs text-muted-foreground">Pantau kehadiran harian dan jurnal siswa PKL.</p>
                        </div>
                        <div className="rounded-lg border border-border p-4 hover:border-amber-500/50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3 mb-2">
                                <GraduationCap className="h-5 w-5 text-amber-500" />
                                <h3 className="font-semibold text-sm">Tracer Study</h3>
                            </div>
                            <p className="text-xs text-muted-foreground">Lihat statistik karir dan pekerjaan alumni pasca kelulusan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

AdminDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Admin Dashboard',
            href: '/admin/dashboard',
        },
    ],
};
