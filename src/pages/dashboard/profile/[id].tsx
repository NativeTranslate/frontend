import DashboardLayout from '@/components/layout/dashboard-layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useParams } from 'react-router';
import { users } from '@/lib/fake-data';
import { settingsConfig } from '@/lib/config';
import CardSettings from '@/components/shared/card-settings';
import OverlappingAvatars from '@/components/shared/overlapping-avatars.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';

const Profile = () => {
    const { id } = useParams();
    const user = users.find(user => user.id === id);

    const styles = [
        'Modern',
        'Scandinavian',
        'Minimalist',
        'Gothic'
    ];

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Profile" />
                <div className="flex-grow w-full rounded-3xl my-10 bg-dark-300 overflow-y-auto">
                    <div className="p-6 space-y-8">
                        <Card className="bg-dark-200 border-none shadow-lg text-gray-100">
                            <CardContent className="p-6">
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                    <Avatar className="w-32 h-32 border-4 border-main-two">
                                        <AvatarImage
                                            src={user?.profilePicture}
                                            alt={user?.name}
                                        />
                                        <AvatarFallback>
                                            {user?.name?.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-grow space-y-4 text-center lg:text-left">
                                        <div>
                                            <h2 className="text-3xl font-bold">
                                                {user?.name}
                                            </h2>
                                            <p className="text-xl text-gray-400">
                                                {user?.role}
                                            </p>
                                        </div>
                                        <p className="text-sm max-w-2xl">
                                            {user?.aboutMe}
                                        </p>
                                        <Button
                                            className="bg-main-two hover:bg-main-one transition-all rounded-full"
                                            size="lg"
                                        >
                                            Edit Info
                                        </Button>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <InfoItem
                                            icon={<Mail className="w-5 h-5" />}
                                            label="Email"
                                            value={'Not available'}
                                        />
                                        <InfoItem
                                            icon={<Phone className="w-5 h-5" />}
                                            label="Mobile"
                                            value={'Not available'}
                                        />
                                        <InfoItem
                                            icon={<MapPin className="w-5 h-5" />}
                                            label="Location"
                                            value={'Not available'}
                                        />
                                        <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                                            <Facebook className="w-6 h-6" />
                                            <Instagram className="w-6 h-6" />
                                            <Twitter className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {settingsConfig.map((cardConfig, index) => (
                                <CardSettings key={index} cardConfig={cardConfig} />
                            ))}
                        </div>

                        <Card className="bg-dark-200 border-transparent text-gray-100">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-2xl">Projects</CardTitle>
                                <Button className="bg-main-two hover:bg-main-one transition-all rounded-full">
                                    Useless button
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                    {styles.map((style, index) => (
                                        <ProjectCard style={style} image={avatarUrls[index]} />
                                    ))}

                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

const InfoItem = ({
                      icon,
                      label,
                      value
                  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) => (
    <div className="flex items-center gap-2">
        {icon}
        <span className="text-gray-400">{label}:</span>
        <span>{value}</span>
    </div>
);

const avatarUrls = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s',
    'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s'
];

const ProjectCard = ({ style, image }: { style: string; image: string }) => (
    <Card className="bg-dark-300 border-dark-400 hover:bg-dark-200 transition-all">
        <CardContent className="p-4 space-y-4">
            <img
                src={image}
                alt={style}
                className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-semibold text-lg text-primary-500">{style}</h3>
            <p className="text-sm text-gray-400 line-clamp-3">
                Demo description from a project. This is a brief overview of the{' '}
                {style} design project.
            </p>
            <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                    <OverlappingAvatars avatars={avatarUrls} />
                </div>
                <Button
                    variant="ghost"
                    className="text-main-two hover:text-main-one hover:bg-transparent"
                >
                    View project
                </Button>
            </div>
        </CardContent>
    </Card>
);

export default Profile;
