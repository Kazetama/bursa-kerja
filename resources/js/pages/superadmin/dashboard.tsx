import { Head } from '@inertiajs/react';
import { ShieldCheck, Users, Activity, UserCog, Clock, Key } from 'lucide-react';

interface ActivityLog {
    id: number;
    action: string;
    description: string;
    ip_address: string | null;
    created_at: string;
    user?: {
        name: string;
        email: string;
        role: string;
    };
}

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

interface SuperAdminDashboardProps {
    totalUsers: number;
    userRoleCounts: {
        superadmin: number;
        admin: number;
        siswa: number;
        alumni: number;
    };
    recentLogs: ActivityLog[];
    users: User[];
}

export default function SuperAdminDashboard({
    totalUsers,
    userRoleCounts,
    recentLogs,
    users,
}: SuperAdminDashboardProps) {
    return (
        <>
            <Head title="Super Admin Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6">
                {/* Header Section */}
                <div className="flex flex-col gap-2 rounded-xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-6 text-white shadow-lg border border-purple-800/40">
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-purple-600/30 p-2.5 backdrop-blur-md border border-purple-500/30">
                            <ShieldCheck className="h-7 w-7 text-purple-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Super Admin Panel</h1>
                            <p className="text-sm text-purple-200/80">
                                System Audit & Role Management Overview
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Users</span>
                            <Users className="h-5 w-5 text-purple-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold">{totalUsers}</div>
                        <p className="mt-1 text-xs text-muted-foreground">All registered accounts</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Super Admins</span>
                            <Key className="h-5 w-5 text-indigo-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-indigo-600 dark:text-indigo-400">{userRoleCounts.superadmin}</div>
                        <p className="mt-1 text-xs text-muted-foreground">System managers</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Admins (Staff/Guru)</span>
                            <UserCog className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-blue-600 dark:text-blue-400">{userRoleCounts.admin}</div>
                        <p className="mt-1 text-xs text-muted-foreground">BKK content managers</p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Siswa & Alumni</span>
                            <Users className="h-5 w-5 text-emerald-500" />
                        </div>
                        <div className="mt-3 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                            {userRoleCounts.siswa + userRoleCounts.alumni}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                            {userRoleCounts.siswa} Siswa · {userRoleCounts.alumni} Alumni
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Activity Log Preview */}
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Activity className="h-5 w-5 text-purple-500" />
                                <h2 className="font-semibold">Recent System Activity Logs</h2>
                            </div>
                            <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">
                                Audit Trail
                            </span>
                        </div>
                        <div className="space-y-3">
                            {recentLogs.length > 0 ? (
                                recentLogs.map((log) => (
                                    <div
                                        key={log.id}
                                        className="flex items-start justify-between rounded-lg border border-border/50 p-3 text-xs"
                                    >
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 font-medium">
                                                <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                                                    {log.action}
                                                </span>
                                                <span>{log.user?.name || 'System'}</span>
                                            </div>
                                            <p className="text-muted-foreground">{log.description}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[11px] text-muted-foreground whitespace-nowrap">
                                            <Clock className="h-3 w-3" />
                                            <span>{new Date(log.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="py-6 text-center text-xs text-muted-foreground">No activity logs recorded yet.</p>
                            )}
                        </div>
                    </div>

                    {/* Role Management Summary */}
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <UserCog className="h-5 w-5 text-indigo-500" />
                                <h2 className="font-semibold">User Role Registry</h2>
                            </div>
                            <span className="text-xs text-muted-foreground">Total {users.length} Users</span>
                        </div>
                        <div className="divide-y divide-border/50 overflow-hidden rounded-lg border border-border/50">
                            {users.slice(0, 6).map((u) => (
                                <div key={u.id} className="flex items-center justify-between p-3 text-xs">
                                    <div>
                                        <div className="font-medium text-foreground">{u.name}</div>
                                        <div className="text-muted-foreground">{u.email}</div>
                                    </div>
                                    <span
                                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                                            u.role === 'superadmin'
                                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                                                : u.role === 'admin'
                                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                                                : u.role === 'siswa'
                                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                                                : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                                        }`}
                                    >
                                        {u.role}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

SuperAdminDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Super Admin Dashboard',
            href: '/superadmin/dashboard',
        },
    ],
};
