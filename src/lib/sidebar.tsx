import { BriefcaseBusiness, Cog, Folder, Home, User, Users } from 'lucide-react';

export const topLinks = [
    {
        icon: <Home className="h-5 w-5" />,
        label: 'Home',
        href: '/dashboard'
    },
    {
        icon: <Folder className="h-5 w-5" />,
        label: 'Projects',
        href: '/dashboard/projects'
    },
    {
        icon: <BriefcaseBusiness className="h-5 w-5" />,
        label: 'Organizations',
        href: '/organizations'
    },
    {
        icon: <Users className="h-5 w-5" />,
        label: 'Users',
        href: '/dashboard/users'
    }
];

export const bottomLinks = [
    {
        icon: <User className="h-5 w-5" />,
        label: 'Profile',
        href: '/profile'
    },
    {
        icon: <Cog className="h-5 w-5" />,
        label: 'Settings',
        href: '/settings'
    }
];