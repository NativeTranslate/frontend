import { Briefcase, Folder, Home, Settings, User, Users } from 'lucide-react';
import { SidebarLink } from '../types';

export const topLinks: SidebarLink[] = [
    { icon: <Home className="h-5 w-5" />, label: 'Home', href: '/dashboard' },
    { icon: <Folder className="h-5 w-5" />, label: 'Projects', href: '/dashboard/projects' },
    { icon: <Briefcase className="h-5 w-5" />, label: 'Organizations', href: '/dashboard/organizations' },
    { icon: <Users className="h-5 w-5" />, label: 'Users', href: '/dashboard/users' }
];

export const bottomLinks: SidebarLink[] = [
    { icon: <User className="h-5 w-5" />, label: 'Profile', href: '/dashboard/profile/1' },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', href: '/dashboard/settings' }
];
