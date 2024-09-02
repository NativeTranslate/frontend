import { AlertTriangle, CogIcon, Facebook, Instagram, Twitter, UserIcon } from 'lucide-react';
import { SettingsCategory } from '../types';

export const settingsCategories: SettingsCategory[] = [
    { key: 'profile-security', label: 'Profile & Security', icon: <UserIcon /> },
    { key: 'accounts-settings', label: 'Accounts & Settings', icon: <CogIcon /> },
    { key: 'danger-zone', label: 'Danger Zone', icon: <AlertTriangle /> }
];

export const availableIntegrations = [
    {
        name: 'Facebook',
        logo: <Facebook />
    },
    {
        name: 'Twitter',
        logo: <Twitter />
    },
    {
        name: 'Instagram',
        logo: <Instagram />
    }
];