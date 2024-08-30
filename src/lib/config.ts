export interface SwitchConfig {
    id: string;
    label: string;
    default?: boolean;
}

export interface CardConfig {
    title: string;
    switches: SwitchConfig[];
}

export const settingsConfig: CardConfig[] = [
    {
        title: 'Account',
        switches: [
            { id: 'switch-1', label: 'Email me when someone follow me', default: true },
            {
                id: 'switch-2',
                label: 'Email me when someone answer on my post',
                default: true
            },
            { id: 'switch-3', label: 'Email me when someone mention me', default: true }
        ]
    },
    {
        title: 'Application',
        switches: [
            { id: 'switch-4', label: 'New launches and project', default: true },
            { id: 'switch-5', label: 'Monthly product updates', default: false },
            { id: 'switch-6', label: 'Subscribe to newsletter', default: true }
        ]
    },
    {
        title: 'Privacy',
        switches: [
            { id: 'switch-7', label: 'Show email in profile', default: false },
            { id: 'switch-8', label: 'Show location in profile', default: false },
            { id: 'switch-9', label: 'Show phone number in profile', default: false }
        ]
    }
];
