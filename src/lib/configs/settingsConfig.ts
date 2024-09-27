import { CardConfig } from '../types';

export const settingsConfig: CardConfig[] = [
    {
        title: 'Application Notifications',
        switches: [
            {
                id: 'email_notifications',
                label: 'New launches and projects',
                default: true,
            },
            {
                id: 'email_monthly_updates',
                label: 'Application updates',
                default: false,
            },
            {
                id: 'email_newsletter',
                label: 'Subscribe to newsletter',
                default: true,
            },
        ],
    },
    {
        title: 'Privacy',
        switches: [
            {
                id: 'profile_show_email',
                label: 'Show email in profile',
                default: false,
            },
            {
                id: 'profile_show_location',
                label: 'Show location in profile',
                default: false,
            },
            {
                id: 'profile_show_phonenumber',
                label: 'Show phone number in profile',
                default: false,
            },
        ],
    },
];
