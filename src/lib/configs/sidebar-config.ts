import {
    Briefcase,
    Cog,
    Folder,
    Home,
    PlusIcon,
    User,
    Users,
} from 'lucide-react';

export type SidebarItemType = {
    icon: React.ElementType;
    title: string;
    path?: string;
    items?: SidebarItemType[];
};

export type SidebarCategoryType = {
    title: string;
    items: SidebarItemType[];
};

export type SidebarConfigItemType = SidebarItemType | SidebarCategoryType;

export type SidebarConfigType = SidebarConfigItemType[];

export const sidebarConfig: SidebarConfigType = [
    {
        icon: Home,
        title: 'Home',
        path: '/dashboard',
    },
    {
        icon: Folder,
        title: 'Projects',
        items: [
            {
                icon: Folder,
                title: 'Overview',
            },
            {
                icon: PlusIcon,
                title: 'Create',
            },
        ],
    },
    {
        icon: Briefcase,
        title: 'Organizations',
        items: [
            {
                icon: Folder,
                title: 'Overview',
            },
            {
                icon: PlusIcon,
                title: 'Create',
            },
        ],
    },
    {
        icon: Briefcase,
        title: 'User Management',
        items: [
            {
                icon: Users,
                title: 'Users',
                path: '/dashboard/users',
            },
            {
                icon: User,
                title: 'Profile',
                path: `/dashboard/profile/[id]`,
            },
        ],
    },
    {
        title: 'Other',
        items: [
            {
                icon: Cog,
                title: 'Settings',
            },
        ],
    },
];
