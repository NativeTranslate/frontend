import React from 'react';
import { Calendar, Users } from 'lucide-react';
import OverlappingAvatars from '@/components/nativetranslate/overlapping-avatars.tsx';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    item: {
        id: string | number;
        name: string;
        logo: string;
        description: string;
        participants: number;
        createdAt: string;
        managers: string[];
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
    const avatarUrls = [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s',
        'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s',
    ];

    return (
        <Link className={'shadow-lg'} to={`/project/${item.id}`}>
            <div className="bg-light-one dark:bg-dark-one rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer overflow-hidden">
                <div className="relative pb-[56.25%]">
                    <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">
                        {item.description}
                    </p>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-gray-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                {item.participants} Participants
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                {item.createdAt}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-light-two dark:bg-dark-two p-4 border-t border-gray-200 dark:border-gray-700">
                    <OverlappingAvatars avatars={avatarUrls} />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
