import { useParams } from 'react-router-dom';
import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import { users } from '@/lib/fake-data.ts';

const Profile = () => {
    const { id } = useParams();

    const user = users.find((user) => user.id === id);

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Profile" />
                <p>{id}</p>

                <div className="flex-grow w-full rounded-3xl overflow-y-auto my-10">
                    <div className="grid grid-rows-2 gap-y-32 h-full">
                        <div className="bg-dark-300 rounded-3xl flex">
                            <div className="flex flex-row w-full items-stretch">
                                <div className="flex-grow flex items-center justify-center p-12">
                                    <div className="max-w-prose w-full flex flex-col">
                                        <div className="flex flex-row gap-x-12">
                                            <img
                                                src={user?.profilePicture}
                                                alt="profile picture"
                                                className="w-52 h-52 object-cover rounded-full"
                                            />
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="font-semibold text-3xl text-white-900">{user?.name}</p>
                                                <p className="text-2xl text-gray-400">{user?.role}</p>
                                            </div>
                                        </div>
                                        <div className="text-lg text-gray-400 text-wrap max-w-prose mt-12 flex-grow">
                                            <p>{user?.aboutMe}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-px bg-gray-400" />
                                {/* Trennstrich */}
                                <div className="flex-grow flex items-center justify-center p-12">
                                    <div className="text-white-900 text-xl">
                                        {/* Hier kannst du den Inhalt für den rechten Bereich hinzufügen */}
                                        <p>Right side content</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark-300 rounded-3xl">
                            test
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Profile;
