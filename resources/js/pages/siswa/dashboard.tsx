import { Head } from '@inertiajs/react';
import { CalendarCheck, MapPin, Clock, CheckCircle, AlertCircle, FileText } from 'lucide-react';

interface SiswaDashboardProps {
    user: {
        name: string;
        email: string;
        nisn?: string;
    };
    todayStatus: {
        has_checked_in: boolean;
        has_checked_out: boolean;
        checkin_time: string | null;
        checkout_time: string | null;
        tempat_pkl: string;
    };
    rekapAplikasi: {
        total_hadir: number;
        total_izin: number;
        total_sakit: number;
        total_alpha: number;
    };
}

export default function SiswaDashboard({ user, todayStatus, rekapAplikasi }: SiswaDashboardProps) {
    return (
        <>
            <Head title="Dashboard Siswa PKL" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Header Banner */}
                <div className="flex flex-col gap-2 rounded-xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-6 text-white shadow-lg border border-emerald-800/40">
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-emerald-600/30 p-2.5 backdrop-blur-md border border-emerald-500/30">
                            <CalendarCheck className="h-7 w-7 text-emerald-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Selamat Datang, {user.name}!</h1>
                            <p className="text-sm text-emerald-200/80">
                                Portal Absensi & Jurnal Harian PKL Bursa Kerja Khusus (BKK)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Attendance Action Card */}
                <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 shadow-sm dark:border-sidebar-border">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status Absensi Hari Ini</span>
                                <span className="text-xs text-muted-foreground">({new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })})</span>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-emerald-500" />
                                <span className="font-semibold text-base">{todayStatus.tempat_pkl}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <button
                                disabled={todayStatus.has_checked_in}
                                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all shadow-sm ${
                                    todayStatus.has_checked_in
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300/40 cursor-not-allowed'
                                        : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
                                }`}
                            >
                                <CheckCircle className="h-4 w-4" />
                                {todayStatus.has_checked_in ? 'Sudah Check-In' : 'Check-In Sekarang'}
                            </button>

                            <button
                                disabled={!todayStatus.has_checked_in || todayStatus.has_checked_out}
                                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all shadow-sm ${
                                    todayStatus.has_checked_out
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-300/40 cursor-not-allowed'
                                        : todayStatus.has_checked_in
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
                                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                                }`}
                            >
                                <Clock className="h-4 w-4" />
                                {todayStatus.has_checked_out ? 'Sudah Check-Out' : 'Check-Out'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Rekapitulasi Statistics */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Hadir</span>
                            <CheckCircle className="h-5 w-5 text-emerald-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-emerald-600 dark:text-emerald-400">{rekapAplikasi.total_hadir} Hari</div>
                        <p className="mt-1 text-xs text-muted-foreground">Absensi normal</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Izin</span>
                            <FileText className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-blue-600 dark:text-blue-400">{rekapAplikasi.total_izin} Hari</div>
                        <p className="mt-1 text-xs text-muted-foreground">Surat izin terkonfirmasi</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sakit</span>
                            <AlertCircle className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-amber-600 dark:text-amber-400">{rekapAplikasi.total_sakit} Hari</div>
                        <p className="mt-1 text-xs text-muted-foreground">Keterangan sakit</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Alpha</span>
                            <AlertCircle className="h-5 w-5 text-rose-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-rose-600 dark:text-rose-400">{rekapAplikasi.total_alpha} Hari</div>
                        <p className="mt-1 text-xs text-muted-foreground">Tanpa keterangan</p>
                    </div>
                </div>
            </div>
        </>
    );
}

SiswaDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard Siswa',
            href: '/siswa/dashboard',
        },
    ],
};
