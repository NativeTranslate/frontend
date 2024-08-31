import SettingsLayout from '@/components/layout/settings-layout.tsx';
import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import { users } from '@/lib/fake-data.ts';
import { Switch } from '@/components/ui/switch.tsx';
import { User } from 'lucide-react';
import { Label } from '@/components/ui/label.tsx';
import CustomInput from '@/components/shared/custom-input.tsx';

const ProfileSettings = () => {

    const userId = '1';

    const result = users.find(user => user.id === userId);

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Settings - Profile" />
                <div className="flex-grow w-full rounded-3xl my-10 bg-dark-300 overflow-y-auto">
                    <SettingsLayout>
                        <div className={'flex flex-col gap-5'}>
                            <div className={'bg-dark-200 p-4 rounded-3xl'}>
                                <div className={'flex flex-row items-center space-x-5'}>
                                    <img
                                        src={result?.profilePicture}
                                        alt="profile"
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                    <div className={'flex flex-col'}>
                                        <h1 className={'font-semibold text-2xl text-white-900'}>
                                            {result?.name}
                                        </h1>
                                        <p className={'text-lg text-gray-400 font-regular'}>
                                            {result?.role}
                                        </p>
                                    </div>
                                    <div className={'flex-grow'} />
                                    <div className={'flex flex-col gap-2 items-center bg-dark-300 p-4 rounded-3xl'}>
                                        <p className={'text-center text-sm text-gray-400'}>Switch to Invisible</p>
                                        <Switch />
                                    </div>
                                </div>
                            </div>
                            <div className={'bg-dark-200 p-4 rounded-3xl'}>
                                <h2 className={'text-lg font-medium text-white-900'}>Basic Information</h2>
                                <div className={'grid grid-cols-2 mt-9 gap-x-12   '}>
                                    <div className={'space-y-3'}>
                                        <Label htmlFor="firstName" className="text-gray-400 text-sm">
                                            First Name
                                        </Label>
                                        <CustomInput
                                            id="firstName"
                                            placeholder="John"
                                            icon={<User size={24} />}
                                            onChange={() => {
                                            }} value={''} />
                                    </div>
                                    <div className={'space-y-3'}>
                                        <Label htmlFor="lastName" className="text-gray-400 text-sm">
                                            Last Name
                                        </Label>
                                        <CustomInput
                                            id="lastName"
                                            placeholder="Doe"
                                            icon={<User size={24} />}
                                            onChange={() => {
                                            }} value={''} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SettingsLayout>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ProfileSettings;
