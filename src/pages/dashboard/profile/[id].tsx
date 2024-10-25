'use client';

import { useEffect, useState } from 'react';
import DashboardLayout from '@/pages/dashboard/layout';
import DashboardHeader from '@/components/nativetranslate/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/nativetranslate/button';
import {
    CalendarIcon,
    Globe,
    Mail,
    MapPin,
    Phone,
    StarIcon,
    UserIcon,
} from 'lucide-react';
import { User } from '@/lib/core/api/types';
import { useAuth } from '@/lib/core/auth-context.tsx';
import ActivityGraph from '@/components/nativetranslate/activity-graph.tsx';
import {
    FaFacebook,
    FaGithub,
    FaGlobeAmericas,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import EditSkillsDialog from '@/components/nativetranslate/edit-skills-dialog.tsx';

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

const fakeSkills = [
    { name: 'German', level: 3 },
    { name: 'English', level: 4 },
    { name: 'Espanol', level: 2 },
    { name: 'France', level: 1 },
    { name: 'Italy', level: 5 },
];

const fakeSocialMedia = {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    website: 'https://example.com',
};

interface SocialMediaIconProps {
    platform: string;
    url: string;
}

type iconMapProps = {
    [key: string]: React.ComponentType<{ className: string }>;
};

const SocialMediaIcon = ({ platform, url }: SocialMediaIconProps) => {
    const iconMap = {
        facebook: FaFacebook,
        twitter: FaXTwitter,
        linkedin: FaLinkedin,
        github: FaGithub,
        instagram: FaInstagram,
        website: FaGlobeAmericas,
    } as iconMapProps;

    const Icon = iconMap[platform] || Globe;

    return (
        <div
            className={'cursor-pointer'}
            onClick={() => {
                window.open(url, '_blank');
            }}
        >
            <Icon className="h-4 w-4 hover:text-primary transition-all" />
            <span className="sr-only">{platform}</span>
        </div>
    );
};

export default function Component() {
    const [userData, setUserData] = useState<User | null>(null);
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

        fetchUserData().then(_ => _);
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
                                    <Avatar className="w-32 h-32 border-4 border-primary rounded-md">
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
                                    <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mt-4">
                                        {Object.entries(fakeSocialMedia).map(
                                            ([platform, url]) => (
                                                <SocialMediaIcon
                                                    key={platform}
                                                    platform={platform}
                                                    url={url}
                                                />
                                            ),
                                        )}
                                    </div>
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
                            <CardTitle className={'flex flex-row items-center'}>
                                Language Skills
                                <div className={'flex-grow'} />
                                <EditSkillsDialog />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                {fakeSkills.map((lang, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between"
                                    >
                                        <span>{lang.name}</span>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <StarIcon
                                                    key={star}
                                                    className={`w-5 h-5 ${
                                                        star <= lang.level
                                                            ? 'text-yellow-400 fill-yellow-400'
                                                            : 'text-gray-300 dark:text-gray-600'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <ActivityGraph />
                </div>
            </DashboardHeader>
        </DashboardLayout>
    );
}
