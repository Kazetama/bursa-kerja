import { Link, usePage } from '@inertiajs/react';
import {
    Activity,
    BookOpen,
    Briefcase,
    CalendarCheck,
    FileText,
    FolderGit2,
    GraduationCap,
    Image,
    LayoutGrid,
    MessageSquareQuote,
    ShieldCheck,
    UserCog,
    Users,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItem, User } from '@/types';

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const { auth } = usePage<{ auth: { user: User } }>().props;
    const userRole = auth?.user?.role ?? 'siswa';

    const getRoleDashboardHref = (): string => {
        switch (userRole) {
            case 'superadmin':
                return '/superadmin/dashboard';
            case 'admin':
                return '/admin/dashboard';
            case 'alumni':
                return '/alumni/dashboard';
            case 'siswa':
            default:
                return '/siswa/dashboard';
        }
    };

    const getRoleNavItems = (): NavItem[] => {
        switch (userRole) {
            case 'superadmin':
                return [
                    {
                        title: 'Super Admin Dashboard',
                        href: '/superadmin/dashboard',
                        icon: ShieldCheck,
                    },
                    {
                        title: 'Log Aktivitas Sistem',
                        href: '/superadmin/dashboard',
                        icon: Activity,
                    },
                    {
                        title: 'Manajemen Role User',
                        href: '/superadmin/dashboard',
                        icon: UserCog,
                    },
                    {
                        title: 'Admin BKK Overview',
                        href: '/admin/dashboard',
                        icon: LayoutGrid,
                    },
                ];

            case 'admin':
                return [
                    {
                        title: 'Dashboard Admin BKK',
                        href: '/admin/dashboard',
                        icon: LayoutGrid,
                    },
                    {
                        title: 'Kelola Lowongan',
                        href: '/lowongan',
                        icon: Briefcase,
                    },
                    {
                        title: 'Galeri Kegiatan',
                        href: '/gallery',
                        icon: Image,
                    },
                    {
                        title: 'Rekap Absensi PKL',
                        href: '/admin/dashboard',
                        icon: Users,
                    },
                    {
                        title: 'Tracer Study Alumni',
                        href: '/admin/dashboard',
                        icon: GraduationCap,
                    },
                ];

            case 'alumni':
                return [
                    {
                        title: 'Dashboard Alumni',
                        href: '/alumni/dashboard',
                        icon: LayoutGrid,
                    },
                    {
                        title: 'Form Tracer Study',
                        href: '/alumni/dashboard',
                        icon: GraduationCap,
                    },
                    {
                        title: 'Lowongan Kerja BKK',
                        href: '/lowongan',
                        icon: Briefcase,
                    },
                    {
                        title: 'Kirim Testimoni',
                        href: '/alumni/dashboard',
                        icon: MessageSquareQuote,
                    },
                ];

            case 'siswa':
            default:
                return [
                    {
                        title: 'Dashboard Siswa',
                        href: '/siswa/dashboard',
                        icon: LayoutGrid,
                    },
                    {
                        title: 'Absensi PKL Harian',
                        href: '/siswa/dashboard',
                        icon: CalendarCheck,
                    },
                    {
                        title: 'Catatan / Jurnal PKL',
                        href: '/siswa/dashboard',
                        icon: FileText,
                    },
                    {
                        title: 'Info Lowongan BKK',
                        href: '/lowongan',
                        icon: Briefcase,
                    },
                ];
        }
    };

    const navItems = getRoleNavItems();
    const dashboardHref = getRoleDashboardHref();

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboardHref} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain
                    items={navItems}
                    label={`Menu Navigasi (${userRole.toUpperCase()})`}
                />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
