import OverlappingAvatars from '@/components/shared/overlapping-avatars.tsx';
import { LinkIcon } from 'lucide-react';

const ProjectCard = ({ item }: any) => {
    const avatarUrls = [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s',
        'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s',
    ];

    return (
        <div className="bg-dark-200 rounded-2xl shadow-lg shadow-dark-200 p-4">
            <div className="flex flex-row">
                <div className="bg-dark-300 min-w-20 min-h-20 flex items-center justify-center rounded-lg">
                    <img
                        src={item.logo}
                        alt={item.name}
                        className="w-14 h-14 object-contain"
                    />
                </div>
                <div className="my-2 mx-4 w-full">
                    <div className="flex items-center">
                        <h1 className="text-white-900 text-lg">{item.name}</h1>

                        <div className="flex-grow" />

                        <button className="text-white-900 text-lg">
                            <LinkIcon size={20} />
                        </button>
                    </div>
                    <div className="bg-dark-500">
                        <OverlappingAvatars avatars={avatarUrls} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between my-5 max-w-prose space-y-5 mx-1">
                <div className="flex items-start">
                    <p className="text-gray-400 line-clamp-3 font-regular text-lg text-wrap truncate max-w-[calc(100% - 2.5rem)]">
                        {item.description}
                    </p>
                </div>

                <div className="h-[1px] bg-dark-300" />

                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col">
                        <p className="text-white-900 font-regular text-lg">
                            {item.participants}
                        </p>
                        <p className="text-gray-400 font-regular text-sm">
                            Participants
                        </p>
                    </div>
                    <div className="flex-grow" />
                    <div className="flex flex-col">
                        <p className="text-white-900 font-regular text-lg">
                            8/27/2024
                        </p>
                        <p className="text-gray-400 font-regular text-right text-sm">
                            Created at
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
