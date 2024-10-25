import { useState } from 'react';
import DashboardLayout from '@/pages/dashboard/layout';
import DashboardHeader from '@/components/nativetranslate/dashboard-header';
import {
    BellIcon,
    Edit,
    MessageSquare,
    Star,
    Trash2,
    UserPlus,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/nativetranslate/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Notification {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    time: string;
    read: boolean;
}

const fakeNotifications: Notification[] = [
    {
        id: 1,
        icon: <UserPlus className="h-4 w-4" />,
        title: 'Project Invitation',
        description:
            "You've been invited to collaborate on the project 'Global Translator'.",
        time: '2 hours ago',
        read: false,
    },
    {
        id: 2,
        icon: <Edit className="h-4 w-4" />,
        title: 'Project Renamed',
        description:
            "The project 'Multilingual App' has been renamed to 'LinguaConnect'.",
        time: 'Yesterday',
        read: false,
    },
    {
        id: 3,
        icon: <Star className="h-4 w-4" />,
        title: 'New Feature',
        description:
            "A new feature 'Real-time Translation' has been added to your project.",
        time: '3 days ago',
        read: true,
    },
    {
        id: 4,
        icon: <MessageSquare className="h-4 w-4" />,
        title: 'New Comment',
        description:
            "John Doe commented on your translation for 'Hello World'.",
        time: '1 week ago',
        read: true,
    },
    {
        id: 5,
        icon: <Trash2 className="h-4 w-4" />,
        title: 'Project Deleted',
        description: "The project 'Old Translator' has been deleted.",
        time: '2 weeks ago',
        read: true,
    },
];

export default function NotificationsPage() {
    const [notifications, setNotifications] =
        useState<Notification[]>(fakeNotifications);

    const markAllAsRead = () => {
        setNotifications(
            notifications.map(notif => ({ ...notif, read: true })),
        );
    };

    const deleteAllNotifications = () => {
        setNotifications([]);
    };

    return (
        <DashboardLayout>
            <DashboardHeader
                title="Notifications"
                description="Stay updated with your latest activities and project updates."
                icon={BellIcon}
            >
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="space-x-2">
                            <Button
                                variant="default_outline"
                                onClick={markAllAsRead}
                            >
                                Mark all as read
                            </Button>
                            <Button
                                variant="secondary_outline"
                                onClick={deleteAllNotifications}
                            >
                                Delete all
                            </Button>
                        </div>
                    </div>
                    <Card>
                        <CardContent className="p-0">
                            <ScrollArea className="h-[60vh] bg-light-one dark:bg-dark-one">
                                {notifications.length > 0 ? (
                                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {notifications.map(notification => (
                                            <li
                                                key={notification.id}
                                                className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors  ${
                                                    notification.read
                                                        ? 'opacity-50'
                                                        : ''
                                                }`}
                                            >
                                                <div className="flex items-center space-x-4 ">
                                                    <div
                                                        className={`rounded-full p-2 ${notification.read ? 'bg-light-two dark:bg-dark-two' : 'bg-blue-100 dark:bg-blue-900'}`}
                                                    >
                                                        {notification.icon}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                                            {notification.title}
                                                        </p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                            {
                                                                notification.description
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                                        {notification.time}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                                        No notifications to display.
                                    </div>
                                )}
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </DashboardHeader>
        </DashboardLayout>
    );
}
