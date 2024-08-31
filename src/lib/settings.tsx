import { AlertTriangle, CogIcon, UserIcon } from 'lucide-react';

export const settingsCategories = [
    { key: '', label: 'Profile & Security', icon: <UserIcon /> },
    { key: 'account-settings', label: 'Accounts & Settings', icon: <CogIcon /> },
    { key: 'danger-zone', label: 'Danger Zone', icon: <AlertTriangle /> }
];
