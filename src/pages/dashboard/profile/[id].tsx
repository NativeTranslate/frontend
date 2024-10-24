'use client';

import { useEffect, useState } from 'react';
import DashboardLayout from '@/pages/dashboard/layout';
import DashboardHeader from '@/components/nativetranslate/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/nativetranslate/button';
import { CalendarIcon, Mail, MapPin, Phone, UserIcon } from 'lucide-react';
import { User } from '@/lib/core/api/types';
import { useAuth } from '@/lib/core/auth-context.tsx';
import { settingsConfig } from '@/lib/configs/settingsConfig.ts';
import CardSettings from '@/components/nativetranslate/card-settings';

const InfoItem = ({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) => (
    <div className="flex items-center gap-2 text-sm">
        {icon}
        <span className="text-muted-foreground">{label}:</span>
        <span>{value}</span>
    </div>
);

export default function Profile() {
    const [userData, setUserData] = useState<User | null>(null);
    const [settings] = useState(null);
    const auth = useAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await auth.getMe();
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData().then(r => r);
    }, []);

    const calculateAge = (dob: number) => {
        const date = new Date(dob * 1000);
        const diff = Date.now() - date.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    return (
        <DashboardLayout>
            <DashboardHeader
                title="Profile"
                description="Manage your account settings and preferences."
            >
                <div className="space-y-6">
                    <Card className="bg-light-one dark:bg-dark-one shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
                                <div className="flex flex-col items-center justify-center">
                                    <Avatar className="w-32 h-32 border-4 border-primary">
                                        <AvatarImage
                                            src={userData?.avatar}
                                            alt={userData?.username}
                                        />
                                        <AvatarFallback className={'text-3xl'}>
                                            {userData?.username?.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="flex-grow space-y-4 text-center lg:text-left">
                                    <div>
                                        <h2 className="text-3xl font-bold">
                                            {userData?.username}
                                        </h2>
                                        <p className="text-xl text-muted-foreground">
                                            {userData?.role?.toUpperCase() ||
                                                'User'}
                                        </p>
                                    </div>
                                    <p className="text-sm max-w-2xl">
                                        {userData?.bio}
                                    </p>
                                    <Button className="bg-primary hover:bg-secondary transition-all">
                                        Edit Profile
                                    </Button>
                                </div>
                                <div className="space-y-3 flex flex-col justify-center">
                                    <InfoItem
                                        icon={<Mail className="w-5 h-5" />}
                                        label="Email"
                                        value={
                                            userData?.email || 'Not available'
                                        }
                                    />
                                    <InfoItem
                                        icon={<Phone className="w-5 h-5" />}
                                        label="Mobile"
                                        value="Not available"
                                    />
                                    <InfoItem
                                        icon={<MapPin className="w-5 h-5" />}
                                        label="Location"
                                        value="Not available"
                                    />
                                    <InfoItem
                                        icon={<UserIcon className="w-5 h-5" />}
                                        label="Gender"
                                        value={
                                            userData?.gender || 'Not specified'
                                        }
                                    />
                                    <InfoItem
                                        icon={
                                            <CalendarIcon className="w-5 h-5" />
                                        }
                                        label="Age"
                                        value={
                                            userData?.dateOfBirth
                                                ? `${calculateAge(userData.dateOfBirth)} years`
                                                : 'Not specified'
                                        }
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-light-one dark:bg-dark-one shadow-lg">
                        <CardHeader>
                            <CardTitle>Account Settings</CardTitle>
                        </CardHeader>
                        <CardContent
                            className={'flex gap-2 items-center justify-center'}
                        >
                            {settingsConfig.map((cardConfig, index) => (
                                <CardSettings
                                    key={index}
                                    settings={settings}
                                    cardConfig={cardConfig}
                                />
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="bg-light-one dark:bg-dark-one shadow-lg">
                        <CardHeader>
                            <CardTitle>Projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>User's projects will be displayed here.</p>
                        </CardContent>
                    </Card>
                </div>
            </DashboardHeader>
        </DashboardLayout>
    );
}
