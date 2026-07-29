import { Head, Link } from '@inertiajs/react';
import { GraduationCap, Briefcase, FileCheck, ExternalLink, ArrowRight } from 'lucide-react';

interface AlumniDashboardProps {
    user: {
        name: string;
        email: string;
        tahun_lulus?: number;
    };
    tracerStatus: {
        is_filled: boolean;
        status_kerja: string | null;
        perusahaan_kampus: string | null;
        last_updated: string | null;
    };
}

export default function AlumniDashboard({ user, tracerStatus }: AlumniDashboardProps) {
    return (
        <>
            <Head title="Dashboard Alumni BKK" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Header Banner */}
                <div className="flex flex-col gap-2 rounded-xl bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 p-6 text-white shadow-lg border border-amber-800/40">
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-amber-600/30 p-2.5 backdrop-blur-md border border-amber-500/30">
                            <GraduationCap className="h-7 w-7 text-amber-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Halo, {user.name}!</h1>
                            <p className="text-sm text-amber-200/80">
                                Portal Karir Alumni & Tracer Study Bursa Kerja Khusus (BKK)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tracer Study Status Card */}
                <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 shadow-sm dark:border-sidebar-border">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <FileCheck className="h-5 w-5 text-amber-500" />
                                <h2 className="font-semibold text-lg">Status Tracer Study Alumni</h2>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {tracerStatus.is_filled
                                    ? `Sudah diisi: Status ${tracerStatus.status_kerja || 'Bekerja'} di ${tracerStatus.perusahaan_kampus || '-'}`
                                    : 'Anda belum mengisi kuesioner Tracer Study alumni. Harap perbarui data karir Anda.'}
                            </p>
                        </div>

                        <Link
                            href="#"
                            className="flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-amber-700 active:scale-95 whitespace-nowrap"
                        >
                            <span>{tracerStatus.is_filled ? 'Update Tracer Study' : 'Isi Form Tracer Study'}</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-lg bg-blue-500/10 p-2 text-blue-500">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-base">Cari Lowongan Kerja</h3>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">
                            Jelajahi berbagai informasi lowongan kerja terbaru dari perusahaan mitra BKK.
                        </p>
                        <Link
                            href="/lowongan"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                        >
                            <span>Lihat Daftar Lowongan</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-lg bg-purple-500/10 p-2 text-purple-500">
                                <GraduationCap className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-base">Testimoni Alumni</h3>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">
                            Bagikan pengalaman dan cerita sukses Anda selama atau setelah masa studi.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400"
                        >
                            <span>Kirim Testimoni</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

AlumniDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard Alumni',
            href: '/alumni/dashboard',
        },
    ],
};
